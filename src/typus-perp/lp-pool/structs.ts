import * as reified from "../../_framework/reified";
import { TypeName } from "../../_dependencies/source/0x1/type-name/structs";
import { UID } from "../../_dependencies/source/0x2/object/structs";
import {
    PhantomReified,
    Reified,
    StructClass,
    ToField,
    ToTypeStr,
    Vector,
    decodeFromFields,
    decodeFromFieldsWithTypes,
    decodeFromJSONField,
    fieldToJSON,
    phantom,
} from "../../_framework/reified";
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../_framework/util";
import { bcs, fromB64, fromHEX, toHEX } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";

/* ============================== Config =============================== */

export function isConfig(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::Config";
}

export interface ConfigFields {
    oracleId: ToField<"address">;
    liquidityTokenDecimal: ToField<"u64">;
    spotConfig: ToField<SpotConfig>;
    marginConfig: ToField<MarginConfig>;
    u64Padding: ToField<Vector<"u64">>;
}

export type ConfigReified = Reified<Config, ConfigFields>;

export class Config implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::Config";
    static readonly $numTypeParams = 0;

    readonly $typeName = Config.$typeName;

    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::Config";

    readonly $typeArgs: [];

    readonly oracleId: ToField<"address">;
    readonly liquidityTokenDecimal: ToField<"u64">;
    readonly spotConfig: ToField<SpotConfig>;
    readonly marginConfig: ToField<MarginConfig>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: ConfigFields) {
        this.$fullTypeName = composeSuiType(
            Config.$typeName,
            ...typeArgs
        ) as "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::Config";
        this.$typeArgs = typeArgs;

        this.oracleId = fields.oracleId;
        this.liquidityTokenDecimal = fields.liquidityTokenDecimal;
        this.spotConfig = fields.spotConfig;
        this.marginConfig = fields.marginConfig;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): ConfigReified {
        return {
            typeName: Config.$typeName,
            fullTypeName: composeSuiType(
                Config.$typeName,
                ...[]
            ) as "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::Config",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Config.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Config.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Config.fromBcs(data),
            bcs: Config.bcs,
            fromJSONField: (field: any) => Config.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Config.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Config.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => Config.fetch(client, id),
            new: (fields: ConfigFields) => {
                return new Config([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Config.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<Config>> {
        return phantom(Config.reified());
    }
    static get p() {
        return Config.phantom();
    }

    static get bcs() {
        return bcs.struct("Config", {
            oracle_id: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            liquidity_token_decimal: bcs.u64(),
            spot_config: SpotConfig.bcs,
            margin_config: MarginConfig.bcs,
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): Config {
        return Config.reified().new({
            oracleId: decodeFromFields("address", fields.oracle_id),
            liquidityTokenDecimal: decodeFromFields("u64", fields.liquidity_token_decimal),
            spotConfig: decodeFromFields(SpotConfig.reified(), fields.spot_config),
            marginConfig: decodeFromFields(MarginConfig.reified(), fields.margin_config),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Config {
        if (!isConfig(item.type)) {
            throw new Error("not a Config type");
        }

        return Config.reified().new({
            oracleId: decodeFromFieldsWithTypes("address", item.fields.oracle_id),
            liquidityTokenDecimal: decodeFromFieldsWithTypes("u64", item.fields.liquidity_token_decimal),
            spotConfig: decodeFromFieldsWithTypes(SpotConfig.reified(), item.fields.spot_config),
            marginConfig: decodeFromFieldsWithTypes(MarginConfig.reified(), item.fields.margin_config),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): Config {
        return Config.fromFields(Config.bcs.parse(data));
    }

    toJSONField() {
        return {
            oracleId: this.oracleId,
            liquidityTokenDecimal: this.liquidityTokenDecimal.toString(),
            spotConfig: this.spotConfig.toJSONField(),
            marginConfig: this.marginConfig.toJSONField(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): Config {
        return Config.reified().new({
            oracleId: decodeFromJSONField("address", field.oracleId),
            liquidityTokenDecimal: decodeFromJSONField("u64", field.liquidityTokenDecimal),
            spotConfig: decodeFromJSONField(SpotConfig.reified(), field.spotConfig),
            marginConfig: decodeFromJSONField(MarginConfig.reified(), field.marginConfig),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): Config {
        if (json.$typeName !== Config.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return Config.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): Config {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isConfig(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Config object`);
        }
        return Config.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<Config> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Config object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isConfig(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Config object`);
        }
        return Config.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== State =============================== */

export function isState(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::State";
}

export interface StateFields {
    liquidityAmount: ToField<"u64">;
    valueInUsd: ToField<"u64">;
    reservedAmount: ToField<"u64">;
    updateTsMs: ToField<"u64">;
    isActive: ToField<"bool">;
    lastBorrowRateTsMs: ToField<"u64">;
    cumulativeBorrowRate: ToField<"u64">;
    previousLastBorrowRateTsMs: ToField<"u64">;
    previousCumulativeBorrowRate: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type StateReified = Reified<State, StateFields>;

export class State implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::State";
    static readonly $numTypeParams = 0;

    readonly $typeName = State.$typeName;

    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::State";

    readonly $typeArgs: [];

    readonly liquidityAmount: ToField<"u64">;
    readonly valueInUsd: ToField<"u64">;
    readonly reservedAmount: ToField<"u64">;
    readonly updateTsMs: ToField<"u64">;
    readonly isActive: ToField<"bool">;
    readonly lastBorrowRateTsMs: ToField<"u64">;
    readonly cumulativeBorrowRate: ToField<"u64">;
    readonly previousLastBorrowRateTsMs: ToField<"u64">;
    readonly previousCumulativeBorrowRate: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: StateFields) {
        this.$fullTypeName = composeSuiType(
            State.$typeName,
            ...typeArgs
        ) as "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::State";
        this.$typeArgs = typeArgs;

        this.liquidityAmount = fields.liquidityAmount;
        this.valueInUsd = fields.valueInUsd;
        this.reservedAmount = fields.reservedAmount;
        this.updateTsMs = fields.updateTsMs;
        this.isActive = fields.isActive;
        this.lastBorrowRateTsMs = fields.lastBorrowRateTsMs;
        this.cumulativeBorrowRate = fields.cumulativeBorrowRate;
        this.previousLastBorrowRateTsMs = fields.previousLastBorrowRateTsMs;
        this.previousCumulativeBorrowRate = fields.previousCumulativeBorrowRate;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): StateReified {
        return {
            typeName: State.$typeName,
            fullTypeName: composeSuiType(
                State.$typeName,
                ...[]
            ) as "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::State",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => State.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => State.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => State.fromBcs(data),
            bcs: State.bcs,
            fromJSONField: (field: any) => State.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => State.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => State.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => State.fetch(client, id),
            new: (fields: StateFields) => {
                return new State([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return State.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<State>> {
        return phantom(State.reified());
    }
    static get p() {
        return State.phantom();
    }

    static get bcs() {
        return bcs.struct("State", {
            liquidity_amount: bcs.u64(),
            value_in_usd: bcs.u64(),
            reserved_amount: bcs.u64(),
            update_ts_ms: bcs.u64(),
            is_active: bcs.bool(),
            last_borrow_rate_ts_ms: bcs.u64(),
            cumulative_borrow_rate: bcs.u64(),
            previous_last_borrow_rate_ts_ms: bcs.u64(),
            previous_cumulative_borrow_rate: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): State {
        return State.reified().new({
            liquidityAmount: decodeFromFields("u64", fields.liquidity_amount),
            valueInUsd: decodeFromFields("u64", fields.value_in_usd),
            reservedAmount: decodeFromFields("u64", fields.reserved_amount),
            updateTsMs: decodeFromFields("u64", fields.update_ts_ms),
            isActive: decodeFromFields("bool", fields.is_active),
            lastBorrowRateTsMs: decodeFromFields("u64", fields.last_borrow_rate_ts_ms),
            cumulativeBorrowRate: decodeFromFields("u64", fields.cumulative_borrow_rate),
            previousLastBorrowRateTsMs: decodeFromFields("u64", fields.previous_last_borrow_rate_ts_ms),
            previousCumulativeBorrowRate: decodeFromFields("u64", fields.previous_cumulative_borrow_rate),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): State {
        if (!isState(item.type)) {
            throw new Error("not a State type");
        }

        return State.reified().new({
            liquidityAmount: decodeFromFieldsWithTypes("u64", item.fields.liquidity_amount),
            valueInUsd: decodeFromFieldsWithTypes("u64", item.fields.value_in_usd),
            reservedAmount: decodeFromFieldsWithTypes("u64", item.fields.reserved_amount),
            updateTsMs: decodeFromFieldsWithTypes("u64", item.fields.update_ts_ms),
            isActive: decodeFromFieldsWithTypes("bool", item.fields.is_active),
            lastBorrowRateTsMs: decodeFromFieldsWithTypes("u64", item.fields.last_borrow_rate_ts_ms),
            cumulativeBorrowRate: decodeFromFieldsWithTypes("u64", item.fields.cumulative_borrow_rate),
            previousLastBorrowRateTsMs: decodeFromFieldsWithTypes("u64", item.fields.previous_last_borrow_rate_ts_ms),
            previousCumulativeBorrowRate: decodeFromFieldsWithTypes("u64", item.fields.previous_cumulative_borrow_rate),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): State {
        return State.fromFields(State.bcs.parse(data));
    }

    toJSONField() {
        return {
            liquidityAmount: this.liquidityAmount.toString(),
            valueInUsd: this.valueInUsd.toString(),
            reservedAmount: this.reservedAmount.toString(),
            updateTsMs: this.updateTsMs.toString(),
            isActive: this.isActive,
            lastBorrowRateTsMs: this.lastBorrowRateTsMs.toString(),
            cumulativeBorrowRate: this.cumulativeBorrowRate.toString(),
            previousLastBorrowRateTsMs: this.previousLastBorrowRateTsMs.toString(),
            previousCumulativeBorrowRate: this.previousCumulativeBorrowRate.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): State {
        return State.reified().new({
            liquidityAmount: decodeFromJSONField("u64", field.liquidityAmount),
            valueInUsd: decodeFromJSONField("u64", field.valueInUsd),
            reservedAmount: decodeFromJSONField("u64", field.reservedAmount),
            updateTsMs: decodeFromJSONField("u64", field.updateTsMs),
            isActive: decodeFromJSONField("bool", field.isActive),
            lastBorrowRateTsMs: decodeFromJSONField("u64", field.lastBorrowRateTsMs),
            cumulativeBorrowRate: decodeFromJSONField("u64", field.cumulativeBorrowRate),
            previousLastBorrowRateTsMs: decodeFromJSONField("u64", field.previousLastBorrowRateTsMs),
            previousCumulativeBorrowRate: decodeFromJSONField("u64", field.previousCumulativeBorrowRate),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): State {
        if (json.$typeName !== State.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return State.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): State {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isState(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a State object`);
        }
        return State.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<State> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching State object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isState(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a State object`);
        }
        return State.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== AddLiquidityTokenEvent =============================== */

export function isAddLiquidityTokenEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::AddLiquidityTokenEvent";
}

export interface AddLiquidityTokenEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    tokenType: ToField<TypeName>;
    config: ToField<Config>;
    state: ToField<State>;
    u64Padding: ToField<Vector<"u64">>;
}

export type AddLiquidityTokenEventReified = Reified<AddLiquidityTokenEvent, AddLiquidityTokenEventFields>;

export class AddLiquidityTokenEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::AddLiquidityTokenEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = AddLiquidityTokenEvent.$typeName;

    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::AddLiquidityTokenEvent";

    readonly $typeArgs: [];

    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly tokenType: ToField<TypeName>;
    readonly config: ToField<Config>;
    readonly state: ToField<State>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: AddLiquidityTokenEventFields) {
        this.$fullTypeName = composeSuiType(
            AddLiquidityTokenEvent.$typeName,
            ...typeArgs
        ) as "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::AddLiquidityTokenEvent";
        this.$typeArgs = typeArgs;

        this.sender = fields.sender;
        this.index = fields.index;
        this.tokenType = fields.tokenType;
        this.config = fields.config;
        this.state = fields.state;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): AddLiquidityTokenEventReified {
        return {
            typeName: AddLiquidityTokenEvent.$typeName,
            fullTypeName: composeSuiType(
                AddLiquidityTokenEvent.$typeName,
                ...[]
            ) as "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::AddLiquidityTokenEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => AddLiquidityTokenEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => AddLiquidityTokenEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => AddLiquidityTokenEvent.fromBcs(data),
            bcs: AddLiquidityTokenEvent.bcs,
            fromJSONField: (field: any) => AddLiquidityTokenEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => AddLiquidityTokenEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => AddLiquidityTokenEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => AddLiquidityTokenEvent.fetch(client, id),
            new: (fields: AddLiquidityTokenEventFields) => {
                return new AddLiquidityTokenEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return AddLiquidityTokenEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<AddLiquidityTokenEvent>> {
        return phantom(AddLiquidityTokenEvent.reified());
    }
    static get p() {
        return AddLiquidityTokenEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("AddLiquidityTokenEvent", {
            sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            index: bcs.u64(),
            token_type: TypeName.bcs,
            config: Config.bcs,
            state: State.bcs,
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): AddLiquidityTokenEvent {
        return AddLiquidityTokenEvent.reified().new({
            sender: decodeFromFields("address", fields.sender),
            index: decodeFromFields("u64", fields.index),
            tokenType: decodeFromFields(TypeName.reified(), fields.token_type),
            config: decodeFromFields(Config.reified(), fields.config),
            state: decodeFromFields(State.reified(), fields.state),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): AddLiquidityTokenEvent {
        if (!isAddLiquidityTokenEvent(item.type)) {
            throw new Error("not a AddLiquidityTokenEvent type");
        }

        return AddLiquidityTokenEvent.reified().new({
            sender: decodeFromFieldsWithTypes("address", item.fields.sender),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            tokenType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token_type),
            config: decodeFromFieldsWithTypes(Config.reified(), item.fields.config),
            state: decodeFromFieldsWithTypes(State.reified(), item.fields.state),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): AddLiquidityTokenEvent {
        return AddLiquidityTokenEvent.fromFields(AddLiquidityTokenEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            sender: this.sender,
            index: this.index.toString(),
            tokenType: this.tokenType.toJSONField(),
            config: this.config.toJSONField(),
            state: this.state.toJSONField(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): AddLiquidityTokenEvent {
        return AddLiquidityTokenEvent.reified().new({
            sender: decodeFromJSONField("address", field.sender),
            index: decodeFromJSONField("u64", field.index),
            tokenType: decodeFromJSONField(TypeName.reified(), field.tokenType),
            config: decodeFromJSONField(Config.reified(), field.config),
            state: decodeFromJSONField(State.reified(), field.state),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): AddLiquidityTokenEvent {
        if (json.$typeName !== AddLiquidityTokenEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return AddLiquidityTokenEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): AddLiquidityTokenEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isAddLiquidityTokenEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a AddLiquidityTokenEvent object`);
        }
        return AddLiquidityTokenEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<AddLiquidityTokenEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching AddLiquidityTokenEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isAddLiquidityTokenEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AddLiquidityTokenEvent object`);
        }
        return AddLiquidityTokenEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== BurnLpEvent =============================== */

export function isBurnLpEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::BurnLpEvent";
}

export interface BurnLpEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    lpTokenType: ToField<TypeName>;
    burnLpAmount: ToField<"u64">;
    burnAmountUsd: ToField<"u64">;
    burnFeeUsd: ToField<"u64">;
    liquidityTokenType: ToField<TypeName>;
    withdrawTokenAmount: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type BurnLpEventReified = Reified<BurnLpEvent, BurnLpEventFields>;

export class BurnLpEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::BurnLpEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = BurnLpEvent.$typeName;

    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::BurnLpEvent";

    readonly $typeArgs: [];

    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly lpTokenType: ToField<TypeName>;
    readonly burnLpAmount: ToField<"u64">;
    readonly burnAmountUsd: ToField<"u64">;
    readonly burnFeeUsd: ToField<"u64">;
    readonly liquidityTokenType: ToField<TypeName>;
    readonly withdrawTokenAmount: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: BurnLpEventFields) {
        this.$fullTypeName = composeSuiType(
            BurnLpEvent.$typeName,
            ...typeArgs
        ) as "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::BurnLpEvent";
        this.$typeArgs = typeArgs;

        this.sender = fields.sender;
        this.index = fields.index;
        this.lpTokenType = fields.lpTokenType;
        this.burnLpAmount = fields.burnLpAmount;
        this.burnAmountUsd = fields.burnAmountUsd;
        this.burnFeeUsd = fields.burnFeeUsd;
        this.liquidityTokenType = fields.liquidityTokenType;
        this.withdrawTokenAmount = fields.withdrawTokenAmount;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): BurnLpEventReified {
        return {
            typeName: BurnLpEvent.$typeName,
            fullTypeName: composeSuiType(
                BurnLpEvent.$typeName,
                ...[]
            ) as "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::BurnLpEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => BurnLpEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => BurnLpEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => BurnLpEvent.fromBcs(data),
            bcs: BurnLpEvent.bcs,
            fromJSONField: (field: any) => BurnLpEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => BurnLpEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => BurnLpEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => BurnLpEvent.fetch(client, id),
            new: (fields: BurnLpEventFields) => {
                return new BurnLpEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return BurnLpEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<BurnLpEvent>> {
        return phantom(BurnLpEvent.reified());
    }
    static get p() {
        return BurnLpEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("BurnLpEvent", {
            sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            index: bcs.u64(),
            lp_token_type: TypeName.bcs,
            burn_lp_amount: bcs.u64(),
            burn_amount_usd: bcs.u64(),
            burn_fee_usd: bcs.u64(),
            liquidity_token_type: TypeName.bcs,
            withdraw_token_amount: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): BurnLpEvent {
        return BurnLpEvent.reified().new({
            sender: decodeFromFields("address", fields.sender),
            index: decodeFromFields("u64", fields.index),
            lpTokenType: decodeFromFields(TypeName.reified(), fields.lp_token_type),
            burnLpAmount: decodeFromFields("u64", fields.burn_lp_amount),
            burnAmountUsd: decodeFromFields("u64", fields.burn_amount_usd),
            burnFeeUsd: decodeFromFields("u64", fields.burn_fee_usd),
            liquidityTokenType: decodeFromFields(TypeName.reified(), fields.liquidity_token_type),
            withdrawTokenAmount: decodeFromFields("u64", fields.withdraw_token_amount),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): BurnLpEvent {
        if (!isBurnLpEvent(item.type)) {
            throw new Error("not a BurnLpEvent type");
        }

        return BurnLpEvent.reified().new({
            sender: decodeFromFieldsWithTypes("address", item.fields.sender),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            lpTokenType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.lp_token_type),
            burnLpAmount: decodeFromFieldsWithTypes("u64", item.fields.burn_lp_amount),
            burnAmountUsd: decodeFromFieldsWithTypes("u64", item.fields.burn_amount_usd),
            burnFeeUsd: decodeFromFieldsWithTypes("u64", item.fields.burn_fee_usd),
            liquidityTokenType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.liquidity_token_type),
            withdrawTokenAmount: decodeFromFieldsWithTypes("u64", item.fields.withdraw_token_amount),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): BurnLpEvent {
        return BurnLpEvent.fromFields(BurnLpEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            sender: this.sender,
            index: this.index.toString(),
            lpTokenType: this.lpTokenType.toJSONField(),
            burnLpAmount: this.burnLpAmount.toString(),
            burnAmountUsd: this.burnAmountUsd.toString(),
            burnFeeUsd: this.burnFeeUsd.toString(),
            liquidityTokenType: this.liquidityTokenType.toJSONField(),
            withdrawTokenAmount: this.withdrawTokenAmount.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): BurnLpEvent {
        return BurnLpEvent.reified().new({
            sender: decodeFromJSONField("address", field.sender),
            index: decodeFromJSONField("u64", field.index),
            lpTokenType: decodeFromJSONField(TypeName.reified(), field.lpTokenType),
            burnLpAmount: decodeFromJSONField("u64", field.burnLpAmount),
            burnAmountUsd: decodeFromJSONField("u64", field.burnAmountUsd),
            burnFeeUsd: decodeFromJSONField("u64", field.burnFeeUsd),
            liquidityTokenType: decodeFromJSONField(TypeName.reified(), field.liquidityTokenType),
            withdrawTokenAmount: decodeFromJSONField("u64", field.withdrawTokenAmount),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): BurnLpEvent {
        if (json.$typeName !== BurnLpEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return BurnLpEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): BurnLpEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isBurnLpEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a BurnLpEvent object`);
        }
        return BurnLpEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<BurnLpEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching BurnLpEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isBurnLpEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BurnLpEvent object`);
        }
        return BurnLpEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== LiquidityPool =============================== */

export function isLiquidityPool(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::LiquidityPool";
}

export interface LiquidityPoolFields {
    id: ToField<UID>;
    index: ToField<"u64">;
    lpTokenType: ToField<TypeName>;
    liquidityTokens: ToField<Vector<TypeName>>;
    tokenPools: ToField<Vector<TokenPool>>;
    poolInfo: ToField<LiquidityPoolInfo>;
    u64Padding: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<"u8">>;
}

export type LiquidityPoolReified = Reified<LiquidityPool, LiquidityPoolFields>;

export class LiquidityPool implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::LiquidityPool";
    static readonly $numTypeParams = 0;

    readonly $typeName = LiquidityPool.$typeName;

    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::LiquidityPool";

    readonly $typeArgs: [];

    readonly id: ToField<UID>;
    readonly index: ToField<"u64">;
    readonly lpTokenType: ToField<TypeName>;
    readonly liquidityTokens: ToField<Vector<TypeName>>;
    readonly tokenPools: ToField<Vector<TokenPool>>;
    readonly poolInfo: ToField<LiquidityPoolInfo>;
    readonly u64Padding: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<"u8">>;

    private constructor(typeArgs: [], fields: LiquidityPoolFields) {
        this.$fullTypeName = composeSuiType(
            LiquidityPool.$typeName,
            ...typeArgs
        ) as "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::LiquidityPool";
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.index = fields.index;
        this.lpTokenType = fields.lpTokenType;
        this.liquidityTokens = fields.liquidityTokens;
        this.tokenPools = fields.tokenPools;
        this.poolInfo = fields.poolInfo;
        this.u64Padding = fields.u64Padding;
        this.bcsPadding = fields.bcsPadding;
    }

    static reified(): LiquidityPoolReified {
        return {
            typeName: LiquidityPool.$typeName,
            fullTypeName: composeSuiType(
                LiquidityPool.$typeName,
                ...[]
            ) as "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::LiquidityPool",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => LiquidityPool.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => LiquidityPool.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => LiquidityPool.fromBcs(data),
            bcs: LiquidityPool.bcs,
            fromJSONField: (field: any) => LiquidityPool.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => LiquidityPool.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => LiquidityPool.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => LiquidityPool.fetch(client, id),
            new: (fields: LiquidityPoolFields) => {
                return new LiquidityPool([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return LiquidityPool.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<LiquidityPool>> {
        return phantom(LiquidityPool.reified());
    }
    static get p() {
        return LiquidityPool.phantom();
    }

    static get bcs() {
        return bcs.struct("LiquidityPool", {
            id: UID.bcs,
            index: bcs.u64(),
            lp_token_type: TypeName.bcs,
            liquidity_tokens: bcs.vector(TypeName.bcs),
            token_pools: bcs.vector(TokenPool.bcs),
            pool_info: LiquidityPoolInfo.bcs,
            u64_padding: bcs.vector(bcs.u64()),
            bcs_padding: bcs.vector(bcs.u8()),
        });
    }

    static fromFields(fields: Record<string, any>): LiquidityPool {
        return LiquidityPool.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            index: decodeFromFields("u64", fields.index),
            lpTokenType: decodeFromFields(TypeName.reified(), fields.lp_token_type),
            liquidityTokens: decodeFromFields(reified.vector(TypeName.reified()), fields.liquidity_tokens),
            tokenPools: decodeFromFields(reified.vector(TokenPool.reified()), fields.token_pools),
            poolInfo: decodeFromFields(LiquidityPoolInfo.reified(), fields.pool_info),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
            bcsPadding: decodeFromFields(reified.vector("u8"), fields.bcs_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): LiquidityPool {
        if (!isLiquidityPool(item.type)) {
            throw new Error("not a LiquidityPool type");
        }

        return LiquidityPool.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            lpTokenType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.lp_token_type),
            liquidityTokens: decodeFromFieldsWithTypes(reified.vector(TypeName.reified()), item.fields.liquidity_tokens),
            tokenPools: decodeFromFieldsWithTypes(reified.vector(TokenPool.reified()), item.fields.token_pools),
            poolInfo: decodeFromFieldsWithTypes(LiquidityPoolInfo.reified(), item.fields.pool_info),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
            bcsPadding: decodeFromFieldsWithTypes(reified.vector("u8"), item.fields.bcs_padding),
        });
    }

    static fromBcs(data: Uint8Array): LiquidityPool {
        return LiquidityPool.fromFields(LiquidityPool.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            index: this.index.toString(),
            lpTokenType: this.lpTokenType.toJSONField(),
            liquidityTokens: fieldToJSON<Vector<TypeName>>(`vector<0x1::type_name::TypeName>`, this.liquidityTokens),
            tokenPools: fieldToJSON<Vector<TokenPool>>(
                `vector<0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::TokenPool>`,
                this.tokenPools
            ),
            poolInfo: this.poolInfo.toJSONField(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
            bcsPadding: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.bcsPadding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): LiquidityPool {
        return LiquidityPool.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            index: decodeFromJSONField("u64", field.index),
            lpTokenType: decodeFromJSONField(TypeName.reified(), field.lpTokenType),
            liquidityTokens: decodeFromJSONField(reified.vector(TypeName.reified()), field.liquidityTokens),
            tokenPools: decodeFromJSONField(reified.vector(TokenPool.reified()), field.tokenPools),
            poolInfo: decodeFromJSONField(LiquidityPoolInfo.reified(), field.poolInfo),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
            bcsPadding: decodeFromJSONField(reified.vector("u8"), field.bcsPadding),
        });
    }

    static fromJSON(json: Record<string, any>): LiquidityPool {
        if (json.$typeName !== LiquidityPool.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return LiquidityPool.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): LiquidityPool {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isLiquidityPool(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a LiquidityPool object`);
        }
        return LiquidityPool.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<LiquidityPool> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching LiquidityPool object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isLiquidityPool(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a LiquidityPool object`);
        }
        return LiquidityPool.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== LiquidityPoolInfo =============================== */

export function isLiquidityPoolInfo(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::LiquidityPoolInfo";
}

export interface LiquidityPoolInfoFields {
    lpTokenDecimal: ToField<"u64">;
    totalShareSupply: ToField<"u64">;
    tvlUsd: ToField<"u64">;
    isActive: ToField<"bool">;
}

export type LiquidityPoolInfoReified = Reified<LiquidityPoolInfo, LiquidityPoolInfoFields>;

export class LiquidityPoolInfo implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::LiquidityPoolInfo";
    static readonly $numTypeParams = 0;

    readonly $typeName = LiquidityPoolInfo.$typeName;

    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::LiquidityPoolInfo";

    readonly $typeArgs: [];

    readonly lpTokenDecimal: ToField<"u64">;
    readonly totalShareSupply: ToField<"u64">;
    readonly tvlUsd: ToField<"u64">;
    readonly isActive: ToField<"bool">;

    private constructor(typeArgs: [], fields: LiquidityPoolInfoFields) {
        this.$fullTypeName = composeSuiType(
            LiquidityPoolInfo.$typeName,
            ...typeArgs
        ) as "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::LiquidityPoolInfo";
        this.$typeArgs = typeArgs;

        this.lpTokenDecimal = fields.lpTokenDecimal;
        this.totalShareSupply = fields.totalShareSupply;
        this.tvlUsd = fields.tvlUsd;
        this.isActive = fields.isActive;
    }

    static reified(): LiquidityPoolInfoReified {
        return {
            typeName: LiquidityPoolInfo.$typeName,
            fullTypeName: composeSuiType(
                LiquidityPoolInfo.$typeName,
                ...[]
            ) as "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::LiquidityPoolInfo",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => LiquidityPoolInfo.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => LiquidityPoolInfo.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => LiquidityPoolInfo.fromBcs(data),
            bcs: LiquidityPoolInfo.bcs,
            fromJSONField: (field: any) => LiquidityPoolInfo.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => LiquidityPoolInfo.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => LiquidityPoolInfo.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => LiquidityPoolInfo.fetch(client, id),
            new: (fields: LiquidityPoolInfoFields) => {
                return new LiquidityPoolInfo([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return LiquidityPoolInfo.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<LiquidityPoolInfo>> {
        return phantom(LiquidityPoolInfo.reified());
    }
    static get p() {
        return LiquidityPoolInfo.phantom();
    }

    static get bcs() {
        return bcs.struct("LiquidityPoolInfo", {
            lp_token_decimal: bcs.u64(),
            total_share_supply: bcs.u64(),
            tvl_usd: bcs.u64(),
            is_active: bcs.bool(),
        });
    }

    static fromFields(fields: Record<string, any>): LiquidityPoolInfo {
        return LiquidityPoolInfo.reified().new({
            lpTokenDecimal: decodeFromFields("u64", fields.lp_token_decimal),
            totalShareSupply: decodeFromFields("u64", fields.total_share_supply),
            tvlUsd: decodeFromFields("u64", fields.tvl_usd),
            isActive: decodeFromFields("bool", fields.is_active),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): LiquidityPoolInfo {
        if (!isLiquidityPoolInfo(item.type)) {
            throw new Error("not a LiquidityPoolInfo type");
        }

        return LiquidityPoolInfo.reified().new({
            lpTokenDecimal: decodeFromFieldsWithTypes("u64", item.fields.lp_token_decimal),
            totalShareSupply: decodeFromFieldsWithTypes("u64", item.fields.total_share_supply),
            tvlUsd: decodeFromFieldsWithTypes("u64", item.fields.tvl_usd),
            isActive: decodeFromFieldsWithTypes("bool", item.fields.is_active),
        });
    }

    static fromBcs(data: Uint8Array): LiquidityPoolInfo {
        return LiquidityPoolInfo.fromFields(LiquidityPoolInfo.bcs.parse(data));
    }

    toJSONField() {
        return {
            lpTokenDecimal: this.lpTokenDecimal.toString(),
            totalShareSupply: this.totalShareSupply.toString(),
            tvlUsd: this.tvlUsd.toString(),
            isActive: this.isActive,
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): LiquidityPoolInfo {
        return LiquidityPoolInfo.reified().new({
            lpTokenDecimal: decodeFromJSONField("u64", field.lpTokenDecimal),
            totalShareSupply: decodeFromJSONField("u64", field.totalShareSupply),
            tvlUsd: decodeFromJSONField("u64", field.tvlUsd),
            isActive: decodeFromJSONField("bool", field.isActive),
        });
    }

    static fromJSON(json: Record<string, any>): LiquidityPoolInfo {
        if (json.$typeName !== LiquidityPoolInfo.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return LiquidityPoolInfo.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): LiquidityPoolInfo {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isLiquidityPoolInfo(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a LiquidityPoolInfo object`);
        }
        return LiquidityPoolInfo.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<LiquidityPoolInfo> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching LiquidityPoolInfo object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isLiquidityPoolInfo(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a LiquidityPoolInfo object`);
        }
        return LiquidityPoolInfo.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== MarginConfig =============================== */

export function isMarginConfig(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::MarginConfig";
}

export interface MarginConfigFields {
    basicBorrowRate0: ToField<"u64">;
    basicBorrowRate1: ToField<"u64">;
    basicBorrowRate2: ToField<"u64">;
    utilizationThresholdBp0: ToField<"u64">;
    utilizationThresholdBp1: ToField<"u64">;
    borrowIntervalTsMs: ToField<"u64">;
    maxOrderReserveRatioBp: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type MarginConfigReified = Reified<MarginConfig, MarginConfigFields>;

export class MarginConfig implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::MarginConfig";
    static readonly $numTypeParams = 0;

    readonly $typeName = MarginConfig.$typeName;

    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::MarginConfig";

    readonly $typeArgs: [];

    readonly basicBorrowRate0: ToField<"u64">;
    readonly basicBorrowRate1: ToField<"u64">;
    readonly basicBorrowRate2: ToField<"u64">;
    readonly utilizationThresholdBp0: ToField<"u64">;
    readonly utilizationThresholdBp1: ToField<"u64">;
    readonly borrowIntervalTsMs: ToField<"u64">;
    readonly maxOrderReserveRatioBp: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: MarginConfigFields) {
        this.$fullTypeName = composeSuiType(
            MarginConfig.$typeName,
            ...typeArgs
        ) as "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::MarginConfig";
        this.$typeArgs = typeArgs;

        this.basicBorrowRate0 = fields.basicBorrowRate0;
        this.basicBorrowRate1 = fields.basicBorrowRate1;
        this.basicBorrowRate2 = fields.basicBorrowRate2;
        this.utilizationThresholdBp0 = fields.utilizationThresholdBp0;
        this.utilizationThresholdBp1 = fields.utilizationThresholdBp1;
        this.borrowIntervalTsMs = fields.borrowIntervalTsMs;
        this.maxOrderReserveRatioBp = fields.maxOrderReserveRatioBp;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): MarginConfigReified {
        return {
            typeName: MarginConfig.$typeName,
            fullTypeName: composeSuiType(
                MarginConfig.$typeName,
                ...[]
            ) as "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::MarginConfig",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => MarginConfig.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => MarginConfig.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => MarginConfig.fromBcs(data),
            bcs: MarginConfig.bcs,
            fromJSONField: (field: any) => MarginConfig.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => MarginConfig.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => MarginConfig.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => MarginConfig.fetch(client, id),
            new: (fields: MarginConfigFields) => {
                return new MarginConfig([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return MarginConfig.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<MarginConfig>> {
        return phantom(MarginConfig.reified());
    }
    static get p() {
        return MarginConfig.phantom();
    }

    static get bcs() {
        return bcs.struct("MarginConfig", {
            basic_borrow_rate_0: bcs.u64(),
            basic_borrow_rate_1: bcs.u64(),
            basic_borrow_rate_2: bcs.u64(),
            utilization_threshold_bp_0: bcs.u64(),
            utilization_threshold_bp_1: bcs.u64(),
            borrow_interval_ts_ms: bcs.u64(),
            max_order_reserve_ratio_bp: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): MarginConfig {
        return MarginConfig.reified().new({
            basicBorrowRate0: decodeFromFields("u64", fields.basic_borrow_rate_0),
            basicBorrowRate1: decodeFromFields("u64", fields.basic_borrow_rate_1),
            basicBorrowRate2: decodeFromFields("u64", fields.basic_borrow_rate_2),
            utilizationThresholdBp0: decodeFromFields("u64", fields.utilization_threshold_bp_0),
            utilizationThresholdBp1: decodeFromFields("u64", fields.utilization_threshold_bp_1),
            borrowIntervalTsMs: decodeFromFields("u64", fields.borrow_interval_ts_ms),
            maxOrderReserveRatioBp: decodeFromFields("u64", fields.max_order_reserve_ratio_bp),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): MarginConfig {
        if (!isMarginConfig(item.type)) {
            throw new Error("not a MarginConfig type");
        }

        return MarginConfig.reified().new({
            basicBorrowRate0: decodeFromFieldsWithTypes("u64", item.fields.basic_borrow_rate_0),
            basicBorrowRate1: decodeFromFieldsWithTypes("u64", item.fields.basic_borrow_rate_1),
            basicBorrowRate2: decodeFromFieldsWithTypes("u64", item.fields.basic_borrow_rate_2),
            utilizationThresholdBp0: decodeFromFieldsWithTypes("u64", item.fields.utilization_threshold_bp_0),
            utilizationThresholdBp1: decodeFromFieldsWithTypes("u64", item.fields.utilization_threshold_bp_1),
            borrowIntervalTsMs: decodeFromFieldsWithTypes("u64", item.fields.borrow_interval_ts_ms),
            maxOrderReserveRatioBp: decodeFromFieldsWithTypes("u64", item.fields.max_order_reserve_ratio_bp),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): MarginConfig {
        return MarginConfig.fromFields(MarginConfig.bcs.parse(data));
    }

    toJSONField() {
        return {
            basicBorrowRate0: this.basicBorrowRate0.toString(),
            basicBorrowRate1: this.basicBorrowRate1.toString(),
            basicBorrowRate2: this.basicBorrowRate2.toString(),
            utilizationThresholdBp0: this.utilizationThresholdBp0.toString(),
            utilizationThresholdBp1: this.utilizationThresholdBp1.toString(),
            borrowIntervalTsMs: this.borrowIntervalTsMs.toString(),
            maxOrderReserveRatioBp: this.maxOrderReserveRatioBp.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): MarginConfig {
        return MarginConfig.reified().new({
            basicBorrowRate0: decodeFromJSONField("u64", field.basicBorrowRate0),
            basicBorrowRate1: decodeFromJSONField("u64", field.basicBorrowRate1),
            basicBorrowRate2: decodeFromJSONField("u64", field.basicBorrowRate2),
            utilizationThresholdBp0: decodeFromJSONField("u64", field.utilizationThresholdBp0),
            utilizationThresholdBp1: decodeFromJSONField("u64", field.utilizationThresholdBp1),
            borrowIntervalTsMs: decodeFromJSONField("u64", field.borrowIntervalTsMs),
            maxOrderReserveRatioBp: decodeFromJSONField("u64", field.maxOrderReserveRatioBp),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): MarginConfig {
        if (json.$typeName !== MarginConfig.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return MarginConfig.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): MarginConfig {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isMarginConfig(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a MarginConfig object`);
        }
        return MarginConfig.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<MarginConfig> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching MarginConfig object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isMarginConfig(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a MarginConfig object`);
        }
        return MarginConfig.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== MintLpEvent =============================== */

export function isMintLpEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::MintLpEvent";
}

export interface MintLpEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    liquidityTokenType: ToField<TypeName>;
    depositAmount: ToField<"u64">;
    depositAmountUsd: ToField<"u64">;
    mintFeeUsd: ToField<"u64">;
    lpTokenType: ToField<TypeName>;
    mintedLpAmount: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type MintLpEventReified = Reified<MintLpEvent, MintLpEventFields>;

export class MintLpEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::MintLpEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = MintLpEvent.$typeName;

    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::MintLpEvent";

    readonly $typeArgs: [];

    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly liquidityTokenType: ToField<TypeName>;
    readonly depositAmount: ToField<"u64">;
    readonly depositAmountUsd: ToField<"u64">;
    readonly mintFeeUsd: ToField<"u64">;
    readonly lpTokenType: ToField<TypeName>;
    readonly mintedLpAmount: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: MintLpEventFields) {
        this.$fullTypeName = composeSuiType(
            MintLpEvent.$typeName,
            ...typeArgs
        ) as "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::MintLpEvent";
        this.$typeArgs = typeArgs;

        this.sender = fields.sender;
        this.index = fields.index;
        this.liquidityTokenType = fields.liquidityTokenType;
        this.depositAmount = fields.depositAmount;
        this.depositAmountUsd = fields.depositAmountUsd;
        this.mintFeeUsd = fields.mintFeeUsd;
        this.lpTokenType = fields.lpTokenType;
        this.mintedLpAmount = fields.mintedLpAmount;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): MintLpEventReified {
        return {
            typeName: MintLpEvent.$typeName,
            fullTypeName: composeSuiType(
                MintLpEvent.$typeName,
                ...[]
            ) as "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::MintLpEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => MintLpEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => MintLpEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => MintLpEvent.fromBcs(data),
            bcs: MintLpEvent.bcs,
            fromJSONField: (field: any) => MintLpEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => MintLpEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => MintLpEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => MintLpEvent.fetch(client, id),
            new: (fields: MintLpEventFields) => {
                return new MintLpEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return MintLpEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<MintLpEvent>> {
        return phantom(MintLpEvent.reified());
    }
    static get p() {
        return MintLpEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("MintLpEvent", {
            sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            index: bcs.u64(),
            liquidity_token_type: TypeName.bcs,
            deposit_amount: bcs.u64(),
            deposit_amount_usd: bcs.u64(),
            mint_fee_usd: bcs.u64(),
            lp_token_type: TypeName.bcs,
            minted_lp_amount: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): MintLpEvent {
        return MintLpEvent.reified().new({
            sender: decodeFromFields("address", fields.sender),
            index: decodeFromFields("u64", fields.index),
            liquidityTokenType: decodeFromFields(TypeName.reified(), fields.liquidity_token_type),
            depositAmount: decodeFromFields("u64", fields.deposit_amount),
            depositAmountUsd: decodeFromFields("u64", fields.deposit_amount_usd),
            mintFeeUsd: decodeFromFields("u64", fields.mint_fee_usd),
            lpTokenType: decodeFromFields(TypeName.reified(), fields.lp_token_type),
            mintedLpAmount: decodeFromFields("u64", fields.minted_lp_amount),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): MintLpEvent {
        if (!isMintLpEvent(item.type)) {
            throw new Error("not a MintLpEvent type");
        }

        return MintLpEvent.reified().new({
            sender: decodeFromFieldsWithTypes("address", item.fields.sender),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            liquidityTokenType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.liquidity_token_type),
            depositAmount: decodeFromFieldsWithTypes("u64", item.fields.deposit_amount),
            depositAmountUsd: decodeFromFieldsWithTypes("u64", item.fields.deposit_amount_usd),
            mintFeeUsd: decodeFromFieldsWithTypes("u64", item.fields.mint_fee_usd),
            lpTokenType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.lp_token_type),
            mintedLpAmount: decodeFromFieldsWithTypes("u64", item.fields.minted_lp_amount),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): MintLpEvent {
        return MintLpEvent.fromFields(MintLpEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            sender: this.sender,
            index: this.index.toString(),
            liquidityTokenType: this.liquidityTokenType.toJSONField(),
            depositAmount: this.depositAmount.toString(),
            depositAmountUsd: this.depositAmountUsd.toString(),
            mintFeeUsd: this.mintFeeUsd.toString(),
            lpTokenType: this.lpTokenType.toJSONField(),
            mintedLpAmount: this.mintedLpAmount.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): MintLpEvent {
        return MintLpEvent.reified().new({
            sender: decodeFromJSONField("address", field.sender),
            index: decodeFromJSONField("u64", field.index),
            liquidityTokenType: decodeFromJSONField(TypeName.reified(), field.liquidityTokenType),
            depositAmount: decodeFromJSONField("u64", field.depositAmount),
            depositAmountUsd: decodeFromJSONField("u64", field.depositAmountUsd),
            mintFeeUsd: decodeFromJSONField("u64", field.mintFeeUsd),
            lpTokenType: decodeFromJSONField(TypeName.reified(), field.lpTokenType),
            mintedLpAmount: decodeFromJSONField("u64", field.mintedLpAmount),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): MintLpEvent {
        if (json.$typeName !== MintLpEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return MintLpEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): MintLpEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isMintLpEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a MintLpEvent object`);
        }
        return MintLpEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<MintLpEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching MintLpEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isMintLpEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a MintLpEvent object`);
        }
        return MintLpEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== NewLiquidityPoolEvent =============================== */

export function isNewLiquidityPoolEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::NewLiquidityPoolEvent";
}

export interface NewLiquidityPoolEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    lpTokenType: ToField<TypeName>;
    lpTokenDecimal: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type NewLiquidityPoolEventReified = Reified<NewLiquidityPoolEvent, NewLiquidityPoolEventFields>;

export class NewLiquidityPoolEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::NewLiquidityPoolEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = NewLiquidityPoolEvent.$typeName;

    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::NewLiquidityPoolEvent";

    readonly $typeArgs: [];

    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly lpTokenType: ToField<TypeName>;
    readonly lpTokenDecimal: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: NewLiquidityPoolEventFields) {
        this.$fullTypeName = composeSuiType(
            NewLiquidityPoolEvent.$typeName,
            ...typeArgs
        ) as "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::NewLiquidityPoolEvent";
        this.$typeArgs = typeArgs;

        this.sender = fields.sender;
        this.index = fields.index;
        this.lpTokenType = fields.lpTokenType;
        this.lpTokenDecimal = fields.lpTokenDecimal;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): NewLiquidityPoolEventReified {
        return {
            typeName: NewLiquidityPoolEvent.$typeName,
            fullTypeName: composeSuiType(
                NewLiquidityPoolEvent.$typeName,
                ...[]
            ) as "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::NewLiquidityPoolEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => NewLiquidityPoolEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => NewLiquidityPoolEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => NewLiquidityPoolEvent.fromBcs(data),
            bcs: NewLiquidityPoolEvent.bcs,
            fromJSONField: (field: any) => NewLiquidityPoolEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => NewLiquidityPoolEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => NewLiquidityPoolEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => NewLiquidityPoolEvent.fetch(client, id),
            new: (fields: NewLiquidityPoolEventFields) => {
                return new NewLiquidityPoolEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return NewLiquidityPoolEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<NewLiquidityPoolEvent>> {
        return phantom(NewLiquidityPoolEvent.reified());
    }
    static get p() {
        return NewLiquidityPoolEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("NewLiquidityPoolEvent", {
            sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            index: bcs.u64(),
            lp_token_type: TypeName.bcs,
            lp_token_decimal: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): NewLiquidityPoolEvent {
        return NewLiquidityPoolEvent.reified().new({
            sender: decodeFromFields("address", fields.sender),
            index: decodeFromFields("u64", fields.index),
            lpTokenType: decodeFromFields(TypeName.reified(), fields.lp_token_type),
            lpTokenDecimal: decodeFromFields("u64", fields.lp_token_decimal),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): NewLiquidityPoolEvent {
        if (!isNewLiquidityPoolEvent(item.type)) {
            throw new Error("not a NewLiquidityPoolEvent type");
        }

        return NewLiquidityPoolEvent.reified().new({
            sender: decodeFromFieldsWithTypes("address", item.fields.sender),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            lpTokenType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.lp_token_type),
            lpTokenDecimal: decodeFromFieldsWithTypes("u64", item.fields.lp_token_decimal),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): NewLiquidityPoolEvent {
        return NewLiquidityPoolEvent.fromFields(NewLiquidityPoolEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            sender: this.sender,
            index: this.index.toString(),
            lpTokenType: this.lpTokenType.toJSONField(),
            lpTokenDecimal: this.lpTokenDecimal.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): NewLiquidityPoolEvent {
        return NewLiquidityPoolEvent.reified().new({
            sender: decodeFromJSONField("address", field.sender),
            index: decodeFromJSONField("u64", field.index),
            lpTokenType: decodeFromJSONField(TypeName.reified(), field.lpTokenType),
            lpTokenDecimal: decodeFromJSONField("u64", field.lpTokenDecimal),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): NewLiquidityPoolEvent {
        if (json.$typeName !== NewLiquidityPoolEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return NewLiquidityPoolEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): NewLiquidityPoolEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isNewLiquidityPoolEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a NewLiquidityPoolEvent object`);
        }
        return NewLiquidityPoolEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<NewLiquidityPoolEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching NewLiquidityPoolEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isNewLiquidityPoolEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a NewLiquidityPoolEvent object`);
        }
        return NewLiquidityPoolEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== Registry =============================== */

export function isRegistry(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::Registry";
}

export interface RegistryFields {
    id: ToField<UID>;
    numPool: ToField<"u64">;
    liquidityPoolRegistry: ToField<UID>;
}

export type RegistryReified = Reified<Registry, RegistryFields>;

export class Registry implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::Registry";
    static readonly $numTypeParams = 0;

    readonly $typeName = Registry.$typeName;

    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::Registry";

    readonly $typeArgs: [];

    readonly id: ToField<UID>;
    readonly numPool: ToField<"u64">;
    readonly liquidityPoolRegistry: ToField<UID>;

    private constructor(typeArgs: [], fields: RegistryFields) {
        this.$fullTypeName = composeSuiType(
            Registry.$typeName,
            ...typeArgs
        ) as "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::Registry";
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.numPool = fields.numPool;
        this.liquidityPoolRegistry = fields.liquidityPoolRegistry;
    }

    static reified(): RegistryReified {
        return {
            typeName: Registry.$typeName,
            fullTypeName: composeSuiType(
                Registry.$typeName,
                ...[]
            ) as "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::Registry",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Registry.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Registry.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Registry.fromBcs(data),
            bcs: Registry.bcs,
            fromJSONField: (field: any) => Registry.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Registry.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Registry.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => Registry.fetch(client, id),
            new: (fields: RegistryFields) => {
                return new Registry([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Registry.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<Registry>> {
        return phantom(Registry.reified());
    }
    static get p() {
        return Registry.phantom();
    }

    static get bcs() {
        return bcs.struct("Registry", {
            id: UID.bcs,
            num_pool: bcs.u64(),
            liquidity_pool_registry: UID.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): Registry {
        return Registry.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            numPool: decodeFromFields("u64", fields.num_pool),
            liquidityPoolRegistry: decodeFromFields(UID.reified(), fields.liquidity_pool_registry),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Registry {
        if (!isRegistry(item.type)) {
            throw new Error("not a Registry type");
        }

        return Registry.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            numPool: decodeFromFieldsWithTypes("u64", item.fields.num_pool),
            liquidityPoolRegistry: decodeFromFieldsWithTypes(UID.reified(), item.fields.liquidity_pool_registry),
        });
    }

    static fromBcs(data: Uint8Array): Registry {
        return Registry.fromFields(Registry.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            numPool: this.numPool.toString(),
            liquidityPoolRegistry: this.liquidityPoolRegistry,
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): Registry {
        return Registry.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            numPool: decodeFromJSONField("u64", field.numPool),
            liquidityPoolRegistry: decodeFromJSONField(UID.reified(), field.liquidityPoolRegistry),
        });
    }

    static fromJSON(json: Record<string, any>): Registry {
        if (json.$typeName !== Registry.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return Registry.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): Registry {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRegistry(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Registry object`);
        }
        return Registry.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<Registry> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Registry object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isRegistry(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Registry object`);
        }
        return Registry.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== ResumePoolEvent =============================== */

export function isResumePoolEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::ResumePoolEvent";
}

export interface ResumePoolEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type ResumePoolEventReified = Reified<ResumePoolEvent, ResumePoolEventFields>;

export class ResumePoolEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::ResumePoolEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = ResumePoolEvent.$typeName;

    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::ResumePoolEvent";

    readonly $typeArgs: [];

    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: ResumePoolEventFields) {
        this.$fullTypeName = composeSuiType(
            ResumePoolEvent.$typeName,
            ...typeArgs
        ) as "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::ResumePoolEvent";
        this.$typeArgs = typeArgs;

        this.sender = fields.sender;
        this.index = fields.index;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): ResumePoolEventReified {
        return {
            typeName: ResumePoolEvent.$typeName,
            fullTypeName: composeSuiType(
                ResumePoolEvent.$typeName,
                ...[]
            ) as "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::ResumePoolEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => ResumePoolEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => ResumePoolEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => ResumePoolEvent.fromBcs(data),
            bcs: ResumePoolEvent.bcs,
            fromJSONField: (field: any) => ResumePoolEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => ResumePoolEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => ResumePoolEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => ResumePoolEvent.fetch(client, id),
            new: (fields: ResumePoolEventFields) => {
                return new ResumePoolEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return ResumePoolEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<ResumePoolEvent>> {
        return phantom(ResumePoolEvent.reified());
    }
    static get p() {
        return ResumePoolEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("ResumePoolEvent", {
            sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            index: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): ResumePoolEvent {
        return ResumePoolEvent.reified().new({
            sender: decodeFromFields("address", fields.sender),
            index: decodeFromFields("u64", fields.index),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): ResumePoolEvent {
        if (!isResumePoolEvent(item.type)) {
            throw new Error("not a ResumePoolEvent type");
        }

        return ResumePoolEvent.reified().new({
            sender: decodeFromFieldsWithTypes("address", item.fields.sender),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): ResumePoolEvent {
        return ResumePoolEvent.fromFields(ResumePoolEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            sender: this.sender,
            index: this.index.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): ResumePoolEvent {
        return ResumePoolEvent.reified().new({
            sender: decodeFromJSONField("address", field.sender),
            index: decodeFromJSONField("u64", field.index),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): ResumePoolEvent {
        if (json.$typeName !== ResumePoolEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return ResumePoolEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): ResumePoolEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isResumePoolEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a ResumePoolEvent object`);
        }
        return ResumePoolEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<ResumePoolEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching ResumePoolEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isResumePoolEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ResumePoolEvent object`);
        }
        return ResumePoolEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== ResumeTokenPoolEvent =============================== */

export function isResumeTokenPoolEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::ResumeTokenPoolEvent";
}

export interface ResumeTokenPoolEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    liquidityToken: ToField<TypeName>;
    u64Padding: ToField<Vector<"u64">>;
}

export type ResumeTokenPoolEventReified = Reified<ResumeTokenPoolEvent, ResumeTokenPoolEventFields>;

export class ResumeTokenPoolEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::ResumeTokenPoolEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = ResumeTokenPoolEvent.$typeName;

    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::ResumeTokenPoolEvent";

    readonly $typeArgs: [];

    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly liquidityToken: ToField<TypeName>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: ResumeTokenPoolEventFields) {
        this.$fullTypeName = composeSuiType(
            ResumeTokenPoolEvent.$typeName,
            ...typeArgs
        ) as "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::ResumeTokenPoolEvent";
        this.$typeArgs = typeArgs;

        this.sender = fields.sender;
        this.index = fields.index;
        this.liquidityToken = fields.liquidityToken;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): ResumeTokenPoolEventReified {
        return {
            typeName: ResumeTokenPoolEvent.$typeName,
            fullTypeName: composeSuiType(
                ResumeTokenPoolEvent.$typeName,
                ...[]
            ) as "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::ResumeTokenPoolEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => ResumeTokenPoolEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => ResumeTokenPoolEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => ResumeTokenPoolEvent.fromBcs(data),
            bcs: ResumeTokenPoolEvent.bcs,
            fromJSONField: (field: any) => ResumeTokenPoolEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => ResumeTokenPoolEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => ResumeTokenPoolEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => ResumeTokenPoolEvent.fetch(client, id),
            new: (fields: ResumeTokenPoolEventFields) => {
                return new ResumeTokenPoolEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return ResumeTokenPoolEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<ResumeTokenPoolEvent>> {
        return phantom(ResumeTokenPoolEvent.reified());
    }
    static get p() {
        return ResumeTokenPoolEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("ResumeTokenPoolEvent", {
            sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            index: bcs.u64(),
            liquidity_token: TypeName.bcs,
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): ResumeTokenPoolEvent {
        return ResumeTokenPoolEvent.reified().new({
            sender: decodeFromFields("address", fields.sender),
            index: decodeFromFields("u64", fields.index),
            liquidityToken: decodeFromFields(TypeName.reified(), fields.liquidity_token),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): ResumeTokenPoolEvent {
        if (!isResumeTokenPoolEvent(item.type)) {
            throw new Error("not a ResumeTokenPoolEvent type");
        }

        return ResumeTokenPoolEvent.reified().new({
            sender: decodeFromFieldsWithTypes("address", item.fields.sender),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            liquidityToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.liquidity_token),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): ResumeTokenPoolEvent {
        return ResumeTokenPoolEvent.fromFields(ResumeTokenPoolEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            sender: this.sender,
            index: this.index.toString(),
            liquidityToken: this.liquidityToken.toJSONField(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): ResumeTokenPoolEvent {
        return ResumeTokenPoolEvent.reified().new({
            sender: decodeFromJSONField("address", field.sender),
            index: decodeFromJSONField("u64", field.index),
            liquidityToken: decodeFromJSONField(TypeName.reified(), field.liquidityToken),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): ResumeTokenPoolEvent {
        if (json.$typeName !== ResumeTokenPoolEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return ResumeTokenPoolEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): ResumeTokenPoolEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isResumeTokenPoolEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a ResumeTokenPoolEvent object`);
        }
        return ResumeTokenPoolEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<ResumeTokenPoolEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching ResumeTokenPoolEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isResumeTokenPoolEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ResumeTokenPoolEvent object`);
        }
        return ResumeTokenPoolEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== SpotConfig =============================== */

export function isSpotConfig(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::SpotConfig";
}

export interface SpotConfigFields {
    minDeposit: ToField<"u64">;
    maxCapacity: ToField<"u64">;
    targetWeightBp: ToField<"u64">;
    basicMintFeeBp: ToField<"u64">;
    additionalMintFeeBp: ToField<"u64">;
    basicBurnFeeBp: ToField<"u64">;
    additionalBurnFeeBp: ToField<"u64">;
    swapFeeBp: ToField<"u64">;
    swapFeeProtocolShareBp: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type SpotConfigReified = Reified<SpotConfig, SpotConfigFields>;

export class SpotConfig implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::SpotConfig";
    static readonly $numTypeParams = 0;

    readonly $typeName = SpotConfig.$typeName;

    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::SpotConfig";

    readonly $typeArgs: [];

    readonly minDeposit: ToField<"u64">;
    readonly maxCapacity: ToField<"u64">;
    readonly targetWeightBp: ToField<"u64">;
    readonly basicMintFeeBp: ToField<"u64">;
    readonly additionalMintFeeBp: ToField<"u64">;
    readonly basicBurnFeeBp: ToField<"u64">;
    readonly additionalBurnFeeBp: ToField<"u64">;
    readonly swapFeeBp: ToField<"u64">;
    readonly swapFeeProtocolShareBp: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: SpotConfigFields) {
        this.$fullTypeName = composeSuiType(
            SpotConfig.$typeName,
            ...typeArgs
        ) as "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::SpotConfig";
        this.$typeArgs = typeArgs;

        this.minDeposit = fields.minDeposit;
        this.maxCapacity = fields.maxCapacity;
        this.targetWeightBp = fields.targetWeightBp;
        this.basicMintFeeBp = fields.basicMintFeeBp;
        this.additionalMintFeeBp = fields.additionalMintFeeBp;
        this.basicBurnFeeBp = fields.basicBurnFeeBp;
        this.additionalBurnFeeBp = fields.additionalBurnFeeBp;
        this.swapFeeBp = fields.swapFeeBp;
        this.swapFeeProtocolShareBp = fields.swapFeeProtocolShareBp;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): SpotConfigReified {
        return {
            typeName: SpotConfig.$typeName,
            fullTypeName: composeSuiType(
                SpotConfig.$typeName,
                ...[]
            ) as "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::SpotConfig",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => SpotConfig.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => SpotConfig.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => SpotConfig.fromBcs(data),
            bcs: SpotConfig.bcs,
            fromJSONField: (field: any) => SpotConfig.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => SpotConfig.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => SpotConfig.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => SpotConfig.fetch(client, id),
            new: (fields: SpotConfigFields) => {
                return new SpotConfig([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return SpotConfig.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<SpotConfig>> {
        return phantom(SpotConfig.reified());
    }
    static get p() {
        return SpotConfig.phantom();
    }

    static get bcs() {
        return bcs.struct("SpotConfig", {
            min_deposit: bcs.u64(),
            max_capacity: bcs.u64(),
            target_weight_bp: bcs.u64(),
            basic_mint_fee_bp: bcs.u64(),
            additional_mint_fee_bp: bcs.u64(),
            basic_burn_fee_bp: bcs.u64(),
            additional_burn_fee_bp: bcs.u64(),
            swap_fee_bp: bcs.u64(),
            swap_fee_protocol_share_bp: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): SpotConfig {
        return SpotConfig.reified().new({
            minDeposit: decodeFromFields("u64", fields.min_deposit),
            maxCapacity: decodeFromFields("u64", fields.max_capacity),
            targetWeightBp: decodeFromFields("u64", fields.target_weight_bp),
            basicMintFeeBp: decodeFromFields("u64", fields.basic_mint_fee_bp),
            additionalMintFeeBp: decodeFromFields("u64", fields.additional_mint_fee_bp),
            basicBurnFeeBp: decodeFromFields("u64", fields.basic_burn_fee_bp),
            additionalBurnFeeBp: decodeFromFields("u64", fields.additional_burn_fee_bp),
            swapFeeBp: decodeFromFields("u64", fields.swap_fee_bp),
            swapFeeProtocolShareBp: decodeFromFields("u64", fields.swap_fee_protocol_share_bp),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): SpotConfig {
        if (!isSpotConfig(item.type)) {
            throw new Error("not a SpotConfig type");
        }

        return SpotConfig.reified().new({
            minDeposit: decodeFromFieldsWithTypes("u64", item.fields.min_deposit),
            maxCapacity: decodeFromFieldsWithTypes("u64", item.fields.max_capacity),
            targetWeightBp: decodeFromFieldsWithTypes("u64", item.fields.target_weight_bp),
            basicMintFeeBp: decodeFromFieldsWithTypes("u64", item.fields.basic_mint_fee_bp),
            additionalMintFeeBp: decodeFromFieldsWithTypes("u64", item.fields.additional_mint_fee_bp),
            basicBurnFeeBp: decodeFromFieldsWithTypes("u64", item.fields.basic_burn_fee_bp),
            additionalBurnFeeBp: decodeFromFieldsWithTypes("u64", item.fields.additional_burn_fee_bp),
            swapFeeBp: decodeFromFieldsWithTypes("u64", item.fields.swap_fee_bp),
            swapFeeProtocolShareBp: decodeFromFieldsWithTypes("u64", item.fields.swap_fee_protocol_share_bp),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): SpotConfig {
        return SpotConfig.fromFields(SpotConfig.bcs.parse(data));
    }

    toJSONField() {
        return {
            minDeposit: this.minDeposit.toString(),
            maxCapacity: this.maxCapacity.toString(),
            targetWeightBp: this.targetWeightBp.toString(),
            basicMintFeeBp: this.basicMintFeeBp.toString(),
            additionalMintFeeBp: this.additionalMintFeeBp.toString(),
            basicBurnFeeBp: this.basicBurnFeeBp.toString(),
            additionalBurnFeeBp: this.additionalBurnFeeBp.toString(),
            swapFeeBp: this.swapFeeBp.toString(),
            swapFeeProtocolShareBp: this.swapFeeProtocolShareBp.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): SpotConfig {
        return SpotConfig.reified().new({
            minDeposit: decodeFromJSONField("u64", field.minDeposit),
            maxCapacity: decodeFromJSONField("u64", field.maxCapacity),
            targetWeightBp: decodeFromJSONField("u64", field.targetWeightBp),
            basicMintFeeBp: decodeFromJSONField("u64", field.basicMintFeeBp),
            additionalMintFeeBp: decodeFromJSONField("u64", field.additionalMintFeeBp),
            basicBurnFeeBp: decodeFromJSONField("u64", field.basicBurnFeeBp),
            additionalBurnFeeBp: decodeFromJSONField("u64", field.additionalBurnFeeBp),
            swapFeeBp: decodeFromJSONField("u64", field.swapFeeBp),
            swapFeeProtocolShareBp: decodeFromJSONField("u64", field.swapFeeProtocolShareBp),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): SpotConfig {
        if (json.$typeName !== SpotConfig.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return SpotConfig.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): SpotConfig {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isSpotConfig(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a SpotConfig object`);
        }
        return SpotConfig.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<SpotConfig> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching SpotConfig object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isSpotConfig(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SpotConfig object`);
        }
        return SpotConfig.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== SuspendPoolEvent =============================== */

export function isSuspendPoolEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::SuspendPoolEvent";
}

export interface SuspendPoolEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type SuspendPoolEventReified = Reified<SuspendPoolEvent, SuspendPoolEventFields>;

export class SuspendPoolEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::SuspendPoolEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = SuspendPoolEvent.$typeName;

    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::SuspendPoolEvent";

    readonly $typeArgs: [];

    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: SuspendPoolEventFields) {
        this.$fullTypeName = composeSuiType(
            SuspendPoolEvent.$typeName,
            ...typeArgs
        ) as "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::SuspendPoolEvent";
        this.$typeArgs = typeArgs;

        this.sender = fields.sender;
        this.index = fields.index;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): SuspendPoolEventReified {
        return {
            typeName: SuspendPoolEvent.$typeName,
            fullTypeName: composeSuiType(
                SuspendPoolEvent.$typeName,
                ...[]
            ) as "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::SuspendPoolEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => SuspendPoolEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => SuspendPoolEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => SuspendPoolEvent.fromBcs(data),
            bcs: SuspendPoolEvent.bcs,
            fromJSONField: (field: any) => SuspendPoolEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => SuspendPoolEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => SuspendPoolEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => SuspendPoolEvent.fetch(client, id),
            new: (fields: SuspendPoolEventFields) => {
                return new SuspendPoolEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return SuspendPoolEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<SuspendPoolEvent>> {
        return phantom(SuspendPoolEvent.reified());
    }
    static get p() {
        return SuspendPoolEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("SuspendPoolEvent", {
            sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            index: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): SuspendPoolEvent {
        return SuspendPoolEvent.reified().new({
            sender: decodeFromFields("address", fields.sender),
            index: decodeFromFields("u64", fields.index),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): SuspendPoolEvent {
        if (!isSuspendPoolEvent(item.type)) {
            throw new Error("not a SuspendPoolEvent type");
        }

        return SuspendPoolEvent.reified().new({
            sender: decodeFromFieldsWithTypes("address", item.fields.sender),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): SuspendPoolEvent {
        return SuspendPoolEvent.fromFields(SuspendPoolEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            sender: this.sender,
            index: this.index.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): SuspendPoolEvent {
        return SuspendPoolEvent.reified().new({
            sender: decodeFromJSONField("address", field.sender),
            index: decodeFromJSONField("u64", field.index),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): SuspendPoolEvent {
        if (json.$typeName !== SuspendPoolEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return SuspendPoolEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): SuspendPoolEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isSuspendPoolEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a SuspendPoolEvent object`);
        }
        return SuspendPoolEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<SuspendPoolEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching SuspendPoolEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isSuspendPoolEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SuspendPoolEvent object`);
        }
        return SuspendPoolEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== SuspendTokenPoolEvent =============================== */

export function isSuspendTokenPoolEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::SuspendTokenPoolEvent";
}

export interface SuspendTokenPoolEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    liquidityToken: ToField<TypeName>;
    u64Padding: ToField<Vector<"u64">>;
}

export type SuspendTokenPoolEventReified = Reified<SuspendTokenPoolEvent, SuspendTokenPoolEventFields>;

export class SuspendTokenPoolEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::SuspendTokenPoolEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = SuspendTokenPoolEvent.$typeName;

    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::SuspendTokenPoolEvent";

    readonly $typeArgs: [];

    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly liquidityToken: ToField<TypeName>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: SuspendTokenPoolEventFields) {
        this.$fullTypeName = composeSuiType(
            SuspendTokenPoolEvent.$typeName,
            ...typeArgs
        ) as "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::SuspendTokenPoolEvent";
        this.$typeArgs = typeArgs;

        this.sender = fields.sender;
        this.index = fields.index;
        this.liquidityToken = fields.liquidityToken;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): SuspendTokenPoolEventReified {
        return {
            typeName: SuspendTokenPoolEvent.$typeName,
            fullTypeName: composeSuiType(
                SuspendTokenPoolEvent.$typeName,
                ...[]
            ) as "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::SuspendTokenPoolEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => SuspendTokenPoolEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => SuspendTokenPoolEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => SuspendTokenPoolEvent.fromBcs(data),
            bcs: SuspendTokenPoolEvent.bcs,
            fromJSONField: (field: any) => SuspendTokenPoolEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => SuspendTokenPoolEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => SuspendTokenPoolEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => SuspendTokenPoolEvent.fetch(client, id),
            new: (fields: SuspendTokenPoolEventFields) => {
                return new SuspendTokenPoolEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return SuspendTokenPoolEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<SuspendTokenPoolEvent>> {
        return phantom(SuspendTokenPoolEvent.reified());
    }
    static get p() {
        return SuspendTokenPoolEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("SuspendTokenPoolEvent", {
            sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            index: bcs.u64(),
            liquidity_token: TypeName.bcs,
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): SuspendTokenPoolEvent {
        return SuspendTokenPoolEvent.reified().new({
            sender: decodeFromFields("address", fields.sender),
            index: decodeFromFields("u64", fields.index),
            liquidityToken: decodeFromFields(TypeName.reified(), fields.liquidity_token),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): SuspendTokenPoolEvent {
        if (!isSuspendTokenPoolEvent(item.type)) {
            throw new Error("not a SuspendTokenPoolEvent type");
        }

        return SuspendTokenPoolEvent.reified().new({
            sender: decodeFromFieldsWithTypes("address", item.fields.sender),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            liquidityToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.liquidity_token),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): SuspendTokenPoolEvent {
        return SuspendTokenPoolEvent.fromFields(SuspendTokenPoolEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            sender: this.sender,
            index: this.index.toString(),
            liquidityToken: this.liquidityToken.toJSONField(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): SuspendTokenPoolEvent {
        return SuspendTokenPoolEvent.reified().new({
            sender: decodeFromJSONField("address", field.sender),
            index: decodeFromJSONField("u64", field.index),
            liquidityToken: decodeFromJSONField(TypeName.reified(), field.liquidityToken),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): SuspendTokenPoolEvent {
        if (json.$typeName !== SuspendTokenPoolEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return SuspendTokenPoolEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): SuspendTokenPoolEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isSuspendTokenPoolEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a SuspendTokenPoolEvent object`);
        }
        return SuspendTokenPoolEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<SuspendTokenPoolEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching SuspendTokenPoolEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isSuspendTokenPoolEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SuspendTokenPoolEvent object`);
        }
        return SuspendTokenPoolEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== SwapEvent =============================== */

export function isSwapEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::SwapEvent";
}

export interface SwapEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    fromTokenType: ToField<TypeName>;
    fromAmount: ToField<"u64">;
    toTokenType: ToField<TypeName>;
    minToAmount: ToField<"u64">;
    actualToAmount: ToField<"u64">;
    feeAmount: ToField<"u64">;
    feeAmountUsd: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type SwapEventReified = Reified<SwapEvent, SwapEventFields>;

export class SwapEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::SwapEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = SwapEvent.$typeName;

    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::SwapEvent";

    readonly $typeArgs: [];

    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly fromTokenType: ToField<TypeName>;
    readonly fromAmount: ToField<"u64">;
    readonly toTokenType: ToField<TypeName>;
    readonly minToAmount: ToField<"u64">;
    readonly actualToAmount: ToField<"u64">;
    readonly feeAmount: ToField<"u64">;
    readonly feeAmountUsd: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: SwapEventFields) {
        this.$fullTypeName = composeSuiType(
            SwapEvent.$typeName,
            ...typeArgs
        ) as "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::SwapEvent";
        this.$typeArgs = typeArgs;

        this.sender = fields.sender;
        this.index = fields.index;
        this.fromTokenType = fields.fromTokenType;
        this.fromAmount = fields.fromAmount;
        this.toTokenType = fields.toTokenType;
        this.minToAmount = fields.minToAmount;
        this.actualToAmount = fields.actualToAmount;
        this.feeAmount = fields.feeAmount;
        this.feeAmountUsd = fields.feeAmountUsd;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): SwapEventReified {
        return {
            typeName: SwapEvent.$typeName,
            fullTypeName: composeSuiType(
                SwapEvent.$typeName,
                ...[]
            ) as "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::SwapEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => SwapEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => SwapEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => SwapEvent.fromBcs(data),
            bcs: SwapEvent.bcs,
            fromJSONField: (field: any) => SwapEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => SwapEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => SwapEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => SwapEvent.fetch(client, id),
            new: (fields: SwapEventFields) => {
                return new SwapEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return SwapEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<SwapEvent>> {
        return phantom(SwapEvent.reified());
    }
    static get p() {
        return SwapEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("SwapEvent", {
            sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            index: bcs.u64(),
            from_token_type: TypeName.bcs,
            from_amount: bcs.u64(),
            to_token_type: TypeName.bcs,
            min_to_amount: bcs.u64(),
            actual_to_amount: bcs.u64(),
            fee_amount: bcs.u64(),
            fee_amount_usd: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): SwapEvent {
        return SwapEvent.reified().new({
            sender: decodeFromFields("address", fields.sender),
            index: decodeFromFields("u64", fields.index),
            fromTokenType: decodeFromFields(TypeName.reified(), fields.from_token_type),
            fromAmount: decodeFromFields("u64", fields.from_amount),
            toTokenType: decodeFromFields(TypeName.reified(), fields.to_token_type),
            minToAmount: decodeFromFields("u64", fields.min_to_amount),
            actualToAmount: decodeFromFields("u64", fields.actual_to_amount),
            feeAmount: decodeFromFields("u64", fields.fee_amount),
            feeAmountUsd: decodeFromFields("u64", fields.fee_amount_usd),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): SwapEvent {
        if (!isSwapEvent(item.type)) {
            throw new Error("not a SwapEvent type");
        }

        return SwapEvent.reified().new({
            sender: decodeFromFieldsWithTypes("address", item.fields.sender),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            fromTokenType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.from_token_type),
            fromAmount: decodeFromFieldsWithTypes("u64", item.fields.from_amount),
            toTokenType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.to_token_type),
            minToAmount: decodeFromFieldsWithTypes("u64", item.fields.min_to_amount),
            actualToAmount: decodeFromFieldsWithTypes("u64", item.fields.actual_to_amount),
            feeAmount: decodeFromFieldsWithTypes("u64", item.fields.fee_amount),
            feeAmountUsd: decodeFromFieldsWithTypes("u64", item.fields.fee_amount_usd),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): SwapEvent {
        return SwapEvent.fromFields(SwapEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            sender: this.sender,
            index: this.index.toString(),
            fromTokenType: this.fromTokenType.toJSONField(),
            fromAmount: this.fromAmount.toString(),
            toTokenType: this.toTokenType.toJSONField(),
            minToAmount: this.minToAmount.toString(),
            actualToAmount: this.actualToAmount.toString(),
            feeAmount: this.feeAmount.toString(),
            feeAmountUsd: this.feeAmountUsd.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): SwapEvent {
        return SwapEvent.reified().new({
            sender: decodeFromJSONField("address", field.sender),
            index: decodeFromJSONField("u64", field.index),
            fromTokenType: decodeFromJSONField(TypeName.reified(), field.fromTokenType),
            fromAmount: decodeFromJSONField("u64", field.fromAmount),
            toTokenType: decodeFromJSONField(TypeName.reified(), field.toTokenType),
            minToAmount: decodeFromJSONField("u64", field.minToAmount),
            actualToAmount: decodeFromJSONField("u64", field.actualToAmount),
            feeAmount: decodeFromJSONField("u64", field.feeAmount),
            feeAmountUsd: decodeFromJSONField("u64", field.feeAmountUsd),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): SwapEvent {
        if (json.$typeName !== SwapEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return SwapEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): SwapEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isSwapEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a SwapEvent object`);
        }
        return SwapEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<SwapEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching SwapEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isSwapEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SwapEvent object`);
        }
        return SwapEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== TokenPool =============================== */

export function isTokenPool(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::TokenPool";
}

export interface TokenPoolFields {
    tokenType: ToField<TypeName>;
    config: ToField<Config>;
    state: ToField<State>;
}

export type TokenPoolReified = Reified<TokenPool, TokenPoolFields>;

export class TokenPool implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::TokenPool";
    static readonly $numTypeParams = 0;

    readonly $typeName = TokenPool.$typeName;

    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::TokenPool";

    readonly $typeArgs: [];

    readonly tokenType: ToField<TypeName>;
    readonly config: ToField<Config>;
    readonly state: ToField<State>;

    private constructor(typeArgs: [], fields: TokenPoolFields) {
        this.$fullTypeName = composeSuiType(
            TokenPool.$typeName,
            ...typeArgs
        ) as "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::TokenPool";
        this.$typeArgs = typeArgs;

        this.tokenType = fields.tokenType;
        this.config = fields.config;
        this.state = fields.state;
    }

    static reified(): TokenPoolReified {
        return {
            typeName: TokenPool.$typeName,
            fullTypeName: composeSuiType(
                TokenPool.$typeName,
                ...[]
            ) as "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::TokenPool",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => TokenPool.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => TokenPool.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => TokenPool.fromBcs(data),
            bcs: TokenPool.bcs,
            fromJSONField: (field: any) => TokenPool.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => TokenPool.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => TokenPool.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => TokenPool.fetch(client, id),
            new: (fields: TokenPoolFields) => {
                return new TokenPool([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return TokenPool.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<TokenPool>> {
        return phantom(TokenPool.reified());
    }
    static get p() {
        return TokenPool.phantom();
    }

    static get bcs() {
        return bcs.struct("TokenPool", {
            token_type: TypeName.bcs,
            config: Config.bcs,
            state: State.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): TokenPool {
        return TokenPool.reified().new({
            tokenType: decodeFromFields(TypeName.reified(), fields.token_type),
            config: decodeFromFields(Config.reified(), fields.config),
            state: decodeFromFields(State.reified(), fields.state),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): TokenPool {
        if (!isTokenPool(item.type)) {
            throw new Error("not a TokenPool type");
        }

        return TokenPool.reified().new({
            tokenType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token_type),
            config: decodeFromFieldsWithTypes(Config.reified(), item.fields.config),
            state: decodeFromFieldsWithTypes(State.reified(), item.fields.state),
        });
    }

    static fromBcs(data: Uint8Array): TokenPool {
        return TokenPool.fromFields(TokenPool.bcs.parse(data));
    }

    toJSONField() {
        return {
            tokenType: this.tokenType.toJSONField(),
            config: this.config.toJSONField(),
            state: this.state.toJSONField(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): TokenPool {
        return TokenPool.reified().new({
            tokenType: decodeFromJSONField(TypeName.reified(), field.tokenType),
            config: decodeFromJSONField(Config.reified(), field.config),
            state: decodeFromJSONField(State.reified(), field.state),
        });
    }

    static fromJSON(json: Record<string, any>): TokenPool {
        if (json.$typeName !== TokenPool.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return TokenPool.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): TokenPool {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isTokenPool(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a TokenPool object`);
        }
        return TokenPool.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<TokenPool> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching TokenPool object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isTokenPool(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TokenPool object`);
        }
        return TokenPool.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== UpdateBorrowInfoEvent =============================== */

export function isUpdateBorrowInfoEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::UpdateBorrowInfoEvent";
}

export interface UpdateBorrowInfoEventFields {
    index: ToField<"u64">;
    liquidityTokenType: ToField<TypeName>;
    previousBorrowTsMs: ToField<"u64">;
    previousCumulativeBorrowRate: ToField<"u64">;
    borrowIntervalTsMs: ToField<"u64">;
    lastBorrowRateTsMs: ToField<"u64">;
    lastCumulativeBorrowRate: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type UpdateBorrowInfoEventReified = Reified<UpdateBorrowInfoEvent, UpdateBorrowInfoEventFields>;

export class UpdateBorrowInfoEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::UpdateBorrowInfoEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = UpdateBorrowInfoEvent.$typeName;

    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::UpdateBorrowInfoEvent";

    readonly $typeArgs: [];

    readonly index: ToField<"u64">;
    readonly liquidityTokenType: ToField<TypeName>;
    readonly previousBorrowTsMs: ToField<"u64">;
    readonly previousCumulativeBorrowRate: ToField<"u64">;
    readonly borrowIntervalTsMs: ToField<"u64">;
    readonly lastBorrowRateTsMs: ToField<"u64">;
    readonly lastCumulativeBorrowRate: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: UpdateBorrowInfoEventFields) {
        this.$fullTypeName = composeSuiType(
            UpdateBorrowInfoEvent.$typeName,
            ...typeArgs
        ) as "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::UpdateBorrowInfoEvent";
        this.$typeArgs = typeArgs;

        this.index = fields.index;
        this.liquidityTokenType = fields.liquidityTokenType;
        this.previousBorrowTsMs = fields.previousBorrowTsMs;
        this.previousCumulativeBorrowRate = fields.previousCumulativeBorrowRate;
        this.borrowIntervalTsMs = fields.borrowIntervalTsMs;
        this.lastBorrowRateTsMs = fields.lastBorrowRateTsMs;
        this.lastCumulativeBorrowRate = fields.lastCumulativeBorrowRate;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): UpdateBorrowInfoEventReified {
        return {
            typeName: UpdateBorrowInfoEvent.$typeName,
            fullTypeName: composeSuiType(
                UpdateBorrowInfoEvent.$typeName,
                ...[]
            ) as "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::UpdateBorrowInfoEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => UpdateBorrowInfoEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => UpdateBorrowInfoEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => UpdateBorrowInfoEvent.fromBcs(data),
            bcs: UpdateBorrowInfoEvent.bcs,
            fromJSONField: (field: any) => UpdateBorrowInfoEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => UpdateBorrowInfoEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => UpdateBorrowInfoEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => UpdateBorrowInfoEvent.fetch(client, id),
            new: (fields: UpdateBorrowInfoEventFields) => {
                return new UpdateBorrowInfoEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return UpdateBorrowInfoEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<UpdateBorrowInfoEvent>> {
        return phantom(UpdateBorrowInfoEvent.reified());
    }
    static get p() {
        return UpdateBorrowInfoEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("UpdateBorrowInfoEvent", {
            index: bcs.u64(),
            liquidity_token_type: TypeName.bcs,
            previous_borrow_ts_ms: bcs.u64(),
            previous_cumulative_borrow_rate: bcs.u64(),
            borrow_interval_ts_ms: bcs.u64(),
            last_borrow_rate_ts_ms: bcs.u64(),
            last_cumulative_borrow_rate: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): UpdateBorrowInfoEvent {
        return UpdateBorrowInfoEvent.reified().new({
            index: decodeFromFields("u64", fields.index),
            liquidityTokenType: decodeFromFields(TypeName.reified(), fields.liquidity_token_type),
            previousBorrowTsMs: decodeFromFields("u64", fields.previous_borrow_ts_ms),
            previousCumulativeBorrowRate: decodeFromFields("u64", fields.previous_cumulative_borrow_rate),
            borrowIntervalTsMs: decodeFromFields("u64", fields.borrow_interval_ts_ms),
            lastBorrowRateTsMs: decodeFromFields("u64", fields.last_borrow_rate_ts_ms),
            lastCumulativeBorrowRate: decodeFromFields("u64", fields.last_cumulative_borrow_rate),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): UpdateBorrowInfoEvent {
        if (!isUpdateBorrowInfoEvent(item.type)) {
            throw new Error("not a UpdateBorrowInfoEvent type");
        }

        return UpdateBorrowInfoEvent.reified().new({
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            liquidityTokenType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.liquidity_token_type),
            previousBorrowTsMs: decodeFromFieldsWithTypes("u64", item.fields.previous_borrow_ts_ms),
            previousCumulativeBorrowRate: decodeFromFieldsWithTypes("u64", item.fields.previous_cumulative_borrow_rate),
            borrowIntervalTsMs: decodeFromFieldsWithTypes("u64", item.fields.borrow_interval_ts_ms),
            lastBorrowRateTsMs: decodeFromFieldsWithTypes("u64", item.fields.last_borrow_rate_ts_ms),
            lastCumulativeBorrowRate: decodeFromFieldsWithTypes("u64", item.fields.last_cumulative_borrow_rate),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): UpdateBorrowInfoEvent {
        return UpdateBorrowInfoEvent.fromFields(UpdateBorrowInfoEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            index: this.index.toString(),
            liquidityTokenType: this.liquidityTokenType.toJSONField(),
            previousBorrowTsMs: this.previousBorrowTsMs.toString(),
            previousCumulativeBorrowRate: this.previousCumulativeBorrowRate.toString(),
            borrowIntervalTsMs: this.borrowIntervalTsMs.toString(),
            lastBorrowRateTsMs: this.lastBorrowRateTsMs.toString(),
            lastCumulativeBorrowRate: this.lastCumulativeBorrowRate.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): UpdateBorrowInfoEvent {
        return UpdateBorrowInfoEvent.reified().new({
            index: decodeFromJSONField("u64", field.index),
            liquidityTokenType: decodeFromJSONField(TypeName.reified(), field.liquidityTokenType),
            previousBorrowTsMs: decodeFromJSONField("u64", field.previousBorrowTsMs),
            previousCumulativeBorrowRate: decodeFromJSONField("u64", field.previousCumulativeBorrowRate),
            borrowIntervalTsMs: decodeFromJSONField("u64", field.borrowIntervalTsMs),
            lastBorrowRateTsMs: decodeFromJSONField("u64", field.lastBorrowRateTsMs),
            lastCumulativeBorrowRate: decodeFromJSONField("u64", field.lastCumulativeBorrowRate),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): UpdateBorrowInfoEvent {
        if (json.$typeName !== UpdateBorrowInfoEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return UpdateBorrowInfoEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): UpdateBorrowInfoEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUpdateBorrowInfoEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a UpdateBorrowInfoEvent object`);
        }
        return UpdateBorrowInfoEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<UpdateBorrowInfoEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching UpdateBorrowInfoEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isUpdateBorrowInfoEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UpdateBorrowInfoEvent object`);
        }
        return UpdateBorrowInfoEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== UpdateLiquidityValueEvent =============================== */

export function isUpdateLiquidityValueEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::UpdateLiquidityValueEvent";
}

export interface UpdateLiquidityValueEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    liquidityToken: ToField<TypeName>;
    price: ToField<"u64">;
    valueInUsd: ToField<"u64">;
    lpPoolTvlUsd: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type UpdateLiquidityValueEventReified = Reified<UpdateLiquidityValueEvent, UpdateLiquidityValueEventFields>;

export class UpdateLiquidityValueEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::UpdateLiquidityValueEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = UpdateLiquidityValueEvent.$typeName;

    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::UpdateLiquidityValueEvent";

    readonly $typeArgs: [];

    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly liquidityToken: ToField<TypeName>;
    readonly price: ToField<"u64">;
    readonly valueInUsd: ToField<"u64">;
    readonly lpPoolTvlUsd: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: UpdateLiquidityValueEventFields) {
        this.$fullTypeName = composeSuiType(
            UpdateLiquidityValueEvent.$typeName,
            ...typeArgs
        ) as "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::UpdateLiquidityValueEvent";
        this.$typeArgs = typeArgs;

        this.sender = fields.sender;
        this.index = fields.index;
        this.liquidityToken = fields.liquidityToken;
        this.price = fields.price;
        this.valueInUsd = fields.valueInUsd;
        this.lpPoolTvlUsd = fields.lpPoolTvlUsd;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): UpdateLiquidityValueEventReified {
        return {
            typeName: UpdateLiquidityValueEvent.$typeName,
            fullTypeName: composeSuiType(
                UpdateLiquidityValueEvent.$typeName,
                ...[]
            ) as "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::UpdateLiquidityValueEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => UpdateLiquidityValueEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => UpdateLiquidityValueEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => UpdateLiquidityValueEvent.fromBcs(data),
            bcs: UpdateLiquidityValueEvent.bcs,
            fromJSONField: (field: any) => UpdateLiquidityValueEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => UpdateLiquidityValueEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => UpdateLiquidityValueEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => UpdateLiquidityValueEvent.fetch(client, id),
            new: (fields: UpdateLiquidityValueEventFields) => {
                return new UpdateLiquidityValueEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return UpdateLiquidityValueEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<UpdateLiquidityValueEvent>> {
        return phantom(UpdateLiquidityValueEvent.reified());
    }
    static get p() {
        return UpdateLiquidityValueEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("UpdateLiquidityValueEvent", {
            sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            index: bcs.u64(),
            liquidity_token: TypeName.bcs,
            price: bcs.u64(),
            value_in_usd: bcs.u64(),
            lp_pool_tvl_usd: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): UpdateLiquidityValueEvent {
        return UpdateLiquidityValueEvent.reified().new({
            sender: decodeFromFields("address", fields.sender),
            index: decodeFromFields("u64", fields.index),
            liquidityToken: decodeFromFields(TypeName.reified(), fields.liquidity_token),
            price: decodeFromFields("u64", fields.price),
            valueInUsd: decodeFromFields("u64", fields.value_in_usd),
            lpPoolTvlUsd: decodeFromFields("u64", fields.lp_pool_tvl_usd),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): UpdateLiquidityValueEvent {
        if (!isUpdateLiquidityValueEvent(item.type)) {
            throw new Error("not a UpdateLiquidityValueEvent type");
        }

        return UpdateLiquidityValueEvent.reified().new({
            sender: decodeFromFieldsWithTypes("address", item.fields.sender),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            liquidityToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.liquidity_token),
            price: decodeFromFieldsWithTypes("u64", item.fields.price),
            valueInUsd: decodeFromFieldsWithTypes("u64", item.fields.value_in_usd),
            lpPoolTvlUsd: decodeFromFieldsWithTypes("u64", item.fields.lp_pool_tvl_usd),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): UpdateLiquidityValueEvent {
        return UpdateLiquidityValueEvent.fromFields(UpdateLiquidityValueEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            sender: this.sender,
            index: this.index.toString(),
            liquidityToken: this.liquidityToken.toJSONField(),
            price: this.price.toString(),
            valueInUsd: this.valueInUsd.toString(),
            lpPoolTvlUsd: this.lpPoolTvlUsd.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): UpdateLiquidityValueEvent {
        return UpdateLiquidityValueEvent.reified().new({
            sender: decodeFromJSONField("address", field.sender),
            index: decodeFromJSONField("u64", field.index),
            liquidityToken: decodeFromJSONField(TypeName.reified(), field.liquidityToken),
            price: decodeFromJSONField("u64", field.price),
            valueInUsd: decodeFromJSONField("u64", field.valueInUsd),
            lpPoolTvlUsd: decodeFromJSONField("u64", field.lpPoolTvlUsd),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): UpdateLiquidityValueEvent {
        if (json.$typeName !== UpdateLiquidityValueEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return UpdateLiquidityValueEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): UpdateLiquidityValueEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUpdateLiquidityValueEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a UpdateLiquidityValueEvent object`);
        }
        return UpdateLiquidityValueEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<UpdateLiquidityValueEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching UpdateLiquidityValueEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isUpdateLiquidityValueEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UpdateLiquidityValueEvent object`);
        }
        return UpdateLiquidityValueEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== UpdateMarginConfigEvent =============================== */

export function isUpdateMarginConfigEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::UpdateMarginConfigEvent";
}

export interface UpdateMarginConfigEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    liquidityTokenType: ToField<TypeName>;
    previousMarginConfig: ToField<MarginConfig>;
    newMarginConfig: ToField<MarginConfig>;
    u64Padding: ToField<Vector<"u64">>;
}

export type UpdateMarginConfigEventReified = Reified<UpdateMarginConfigEvent, UpdateMarginConfigEventFields>;

export class UpdateMarginConfigEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::UpdateMarginConfigEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = UpdateMarginConfigEvent.$typeName;

    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::UpdateMarginConfigEvent";

    readonly $typeArgs: [];

    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly liquidityTokenType: ToField<TypeName>;
    readonly previousMarginConfig: ToField<MarginConfig>;
    readonly newMarginConfig: ToField<MarginConfig>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: UpdateMarginConfigEventFields) {
        this.$fullTypeName = composeSuiType(
            UpdateMarginConfigEvent.$typeName,
            ...typeArgs
        ) as "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::UpdateMarginConfigEvent";
        this.$typeArgs = typeArgs;

        this.sender = fields.sender;
        this.index = fields.index;
        this.liquidityTokenType = fields.liquidityTokenType;
        this.previousMarginConfig = fields.previousMarginConfig;
        this.newMarginConfig = fields.newMarginConfig;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): UpdateMarginConfigEventReified {
        return {
            typeName: UpdateMarginConfigEvent.$typeName,
            fullTypeName: composeSuiType(
                UpdateMarginConfigEvent.$typeName,
                ...[]
            ) as "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::UpdateMarginConfigEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => UpdateMarginConfigEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => UpdateMarginConfigEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => UpdateMarginConfigEvent.fromBcs(data),
            bcs: UpdateMarginConfigEvent.bcs,
            fromJSONField: (field: any) => UpdateMarginConfigEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => UpdateMarginConfigEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => UpdateMarginConfigEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => UpdateMarginConfigEvent.fetch(client, id),
            new: (fields: UpdateMarginConfigEventFields) => {
                return new UpdateMarginConfigEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return UpdateMarginConfigEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<UpdateMarginConfigEvent>> {
        return phantom(UpdateMarginConfigEvent.reified());
    }
    static get p() {
        return UpdateMarginConfigEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("UpdateMarginConfigEvent", {
            sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            index: bcs.u64(),
            liquidity_token_type: TypeName.bcs,
            previous_margin_config: MarginConfig.bcs,
            new_margin_config: MarginConfig.bcs,
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): UpdateMarginConfigEvent {
        return UpdateMarginConfigEvent.reified().new({
            sender: decodeFromFields("address", fields.sender),
            index: decodeFromFields("u64", fields.index),
            liquidityTokenType: decodeFromFields(TypeName.reified(), fields.liquidity_token_type),
            previousMarginConfig: decodeFromFields(MarginConfig.reified(), fields.previous_margin_config),
            newMarginConfig: decodeFromFields(MarginConfig.reified(), fields.new_margin_config),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): UpdateMarginConfigEvent {
        if (!isUpdateMarginConfigEvent(item.type)) {
            throw new Error("not a UpdateMarginConfigEvent type");
        }

        return UpdateMarginConfigEvent.reified().new({
            sender: decodeFromFieldsWithTypes("address", item.fields.sender),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            liquidityTokenType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.liquidity_token_type),
            previousMarginConfig: decodeFromFieldsWithTypes(MarginConfig.reified(), item.fields.previous_margin_config),
            newMarginConfig: decodeFromFieldsWithTypes(MarginConfig.reified(), item.fields.new_margin_config),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): UpdateMarginConfigEvent {
        return UpdateMarginConfigEvent.fromFields(UpdateMarginConfigEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            sender: this.sender,
            index: this.index.toString(),
            liquidityTokenType: this.liquidityTokenType.toJSONField(),
            previousMarginConfig: this.previousMarginConfig.toJSONField(),
            newMarginConfig: this.newMarginConfig.toJSONField(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): UpdateMarginConfigEvent {
        return UpdateMarginConfigEvent.reified().new({
            sender: decodeFromJSONField("address", field.sender),
            index: decodeFromJSONField("u64", field.index),
            liquidityTokenType: decodeFromJSONField(TypeName.reified(), field.liquidityTokenType),
            previousMarginConfig: decodeFromJSONField(MarginConfig.reified(), field.previousMarginConfig),
            newMarginConfig: decodeFromJSONField(MarginConfig.reified(), field.newMarginConfig),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): UpdateMarginConfigEvent {
        if (json.$typeName !== UpdateMarginConfigEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return UpdateMarginConfigEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): UpdateMarginConfigEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUpdateMarginConfigEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a UpdateMarginConfigEvent object`);
        }
        return UpdateMarginConfigEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<UpdateMarginConfigEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching UpdateMarginConfigEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isUpdateMarginConfigEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UpdateMarginConfigEvent object`);
        }
        return UpdateMarginConfigEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== UpdateSpotConfigEvent =============================== */

export function isUpdateSpotConfigEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::UpdateSpotConfigEvent";
}

export interface UpdateSpotConfigEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    liquidityTokenType: ToField<TypeName>;
    previousSpotConfig: ToField<SpotConfig>;
    newSpotConfig: ToField<SpotConfig>;
    u64Padding: ToField<Vector<"u64">>;
}

export type UpdateSpotConfigEventReified = Reified<UpdateSpotConfigEvent, UpdateSpotConfigEventFields>;

export class UpdateSpotConfigEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::UpdateSpotConfigEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = UpdateSpotConfigEvent.$typeName;

    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::UpdateSpotConfigEvent";

    readonly $typeArgs: [];

    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly liquidityTokenType: ToField<TypeName>;
    readonly previousSpotConfig: ToField<SpotConfig>;
    readonly newSpotConfig: ToField<SpotConfig>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: UpdateSpotConfigEventFields) {
        this.$fullTypeName = composeSuiType(
            UpdateSpotConfigEvent.$typeName,
            ...typeArgs
        ) as "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::UpdateSpotConfigEvent";
        this.$typeArgs = typeArgs;

        this.sender = fields.sender;
        this.index = fields.index;
        this.liquidityTokenType = fields.liquidityTokenType;
        this.previousSpotConfig = fields.previousSpotConfig;
        this.newSpotConfig = fields.newSpotConfig;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): UpdateSpotConfigEventReified {
        return {
            typeName: UpdateSpotConfigEvent.$typeName,
            fullTypeName: composeSuiType(
                UpdateSpotConfigEvent.$typeName,
                ...[]
            ) as "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::UpdateSpotConfigEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => UpdateSpotConfigEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => UpdateSpotConfigEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => UpdateSpotConfigEvent.fromBcs(data),
            bcs: UpdateSpotConfigEvent.bcs,
            fromJSONField: (field: any) => UpdateSpotConfigEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => UpdateSpotConfigEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => UpdateSpotConfigEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => UpdateSpotConfigEvent.fetch(client, id),
            new: (fields: UpdateSpotConfigEventFields) => {
                return new UpdateSpotConfigEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return UpdateSpotConfigEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<UpdateSpotConfigEvent>> {
        return phantom(UpdateSpotConfigEvent.reified());
    }
    static get p() {
        return UpdateSpotConfigEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("UpdateSpotConfigEvent", {
            sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            index: bcs.u64(),
            liquidity_token_type: TypeName.bcs,
            previous_spot_config: SpotConfig.bcs,
            new_spot_config: SpotConfig.bcs,
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): UpdateSpotConfigEvent {
        return UpdateSpotConfigEvent.reified().new({
            sender: decodeFromFields("address", fields.sender),
            index: decodeFromFields("u64", fields.index),
            liquidityTokenType: decodeFromFields(TypeName.reified(), fields.liquidity_token_type),
            previousSpotConfig: decodeFromFields(SpotConfig.reified(), fields.previous_spot_config),
            newSpotConfig: decodeFromFields(SpotConfig.reified(), fields.new_spot_config),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): UpdateSpotConfigEvent {
        if (!isUpdateSpotConfigEvent(item.type)) {
            throw new Error("not a UpdateSpotConfigEvent type");
        }

        return UpdateSpotConfigEvent.reified().new({
            sender: decodeFromFieldsWithTypes("address", item.fields.sender),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            liquidityTokenType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.liquidity_token_type),
            previousSpotConfig: decodeFromFieldsWithTypes(SpotConfig.reified(), item.fields.previous_spot_config),
            newSpotConfig: decodeFromFieldsWithTypes(SpotConfig.reified(), item.fields.new_spot_config),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): UpdateSpotConfigEvent {
        return UpdateSpotConfigEvent.fromFields(UpdateSpotConfigEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            sender: this.sender,
            index: this.index.toString(),
            liquidityTokenType: this.liquidityTokenType.toJSONField(),
            previousSpotConfig: this.previousSpotConfig.toJSONField(),
            newSpotConfig: this.newSpotConfig.toJSONField(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): UpdateSpotConfigEvent {
        return UpdateSpotConfigEvent.reified().new({
            sender: decodeFromJSONField("address", field.sender),
            index: decodeFromJSONField("u64", field.index),
            liquidityTokenType: decodeFromJSONField(TypeName.reified(), field.liquidityTokenType),
            previousSpotConfig: decodeFromJSONField(SpotConfig.reified(), field.previousSpotConfig),
            newSpotConfig: decodeFromJSONField(SpotConfig.reified(), field.newSpotConfig),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): UpdateSpotConfigEvent {
        if (json.$typeName !== UpdateSpotConfigEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return UpdateSpotConfigEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): UpdateSpotConfigEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUpdateSpotConfigEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a UpdateSpotConfigEvent object`);
        }
        return UpdateSpotConfigEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<UpdateSpotConfigEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching UpdateSpotConfigEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isUpdateSpotConfigEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UpdateSpotConfigEvent object`);
        }
        return UpdateSpotConfigEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}
