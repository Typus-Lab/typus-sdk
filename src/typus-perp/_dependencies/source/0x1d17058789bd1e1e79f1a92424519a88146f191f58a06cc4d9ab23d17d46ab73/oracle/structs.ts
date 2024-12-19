import * as reified from "../../../../_framework/reified";
import {
    PhantomReified,
    Reified,
    StructClass,
    ToField,
    ToTypeStr,
    decodeFromFields,
    decodeFromFieldsWithTypes,
    decodeFromJSONField,
    fieldToJSON,
    phantom,
} from "../../../../_framework/reified";
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../../../_framework/util";
import { Vector } from "../../../../_framework/vector";
import { String } from "../../0x1/ascii/structs";
import { Option } from "../../0x1/option/structs";
import { TypeName } from "../../0x1/type-name/structs";
import { ID, UID } from "../../0x2/object/structs";
import { PKG_V1, PKG_V9 } from "../index";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromB64, fromHEX, toHEX } from "@mysten/sui/utils";

/* ============================== ManagerCap =============================== */

export function isManagerCap(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::oracle::ManagerCap`;
}

export interface ManagerCapFields {
    id: ToField<UID>;
}

export type ManagerCapReified = Reified<ManagerCap, ManagerCapFields>;

export class ManagerCap implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::oracle::ManagerCap`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = ManagerCap.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::oracle::ManagerCap`;
    readonly $typeArgs: [];
    readonly $isPhantom = ManagerCap.$isPhantom;

    readonly id: ToField<UID>;

    private constructor(typeArgs: [], fields: ManagerCapFields) {
        this.$fullTypeName = composeSuiType(ManagerCap.$typeName, ...typeArgs) as `${typeof PKG_V1}::oracle::ManagerCap`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
    }

    static reified(): ManagerCapReified {
        return {
            typeName: ManagerCap.$typeName,
            fullTypeName: composeSuiType(ManagerCap.$typeName, ...[]) as `${typeof PKG_V1}::oracle::ManagerCap`,
            typeArgs: [] as [],
            isPhantom: ManagerCap.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => ManagerCap.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => ManagerCap.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => ManagerCap.fromBcs(data),
            bcs: ManagerCap.bcs,
            fromJSONField: (field: any) => ManagerCap.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => ManagerCap.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => ManagerCap.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => ManagerCap.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => ManagerCap.fetch(client, id),
            new: (fields: ManagerCapFields) => {
                return new ManagerCap([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return ManagerCap.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<ManagerCap>> {
        return phantom(ManagerCap.reified());
    }
    static get p() {
        return ManagerCap.phantom();
    }

    static get bcs() {
        return bcs.struct("ManagerCap", {
            id: UID.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): ManagerCap {
        return ManagerCap.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): ManagerCap {
        if (!isManagerCap(item.type)) {
            throw new Error("not a ManagerCap type");
        }

        return ManagerCap.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
        });
    }

    static fromBcs(data: Uint8Array): ManagerCap {
        return ManagerCap.fromFields(ManagerCap.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): ManagerCap {
        return ManagerCap.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
        });
    }

    static fromJSON(json: Record<string, any>): ManagerCap {
        if (json.$typeName !== ManagerCap.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return ManagerCap.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): ManagerCap {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isManagerCap(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a ManagerCap object`);
        }
        return ManagerCap.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): ManagerCap {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isManagerCap(data.bcs.type)) {
                throw new Error(`object at is not a ManagerCap object`);
            }

            return ManagerCap.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ManagerCap.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<ManagerCap> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching ManagerCap object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isManagerCap(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ManagerCap object`);
        }

        return ManagerCap.fromSuiObjectData(res.data);
    }
}

/* ============================== Oracle =============================== */

export function isOracle(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::oracle::Oracle`;
}

export interface OracleFields {
    id: ToField<UID>;
    baseToken: ToField<String>;
    quoteToken: ToField<String>;
    baseTokenType: ToField<TypeName>;
    quoteTokenType: ToField<TypeName>;
    decimal: ToField<"u64">;
    price: ToField<"u64">;
    twapPrice: ToField<"u64">;
    tsMs: ToField<"u64">;
    epoch: ToField<"u64">;
    timeInterval: ToField<"u64">;
    switchboard: ToField<Option<ID>>;
    pyth: ToField<Option<ID>>;
}

export type OracleReified = Reified<Oracle, OracleFields>;

export class Oracle implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::oracle::Oracle`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = Oracle.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::oracle::Oracle`;
    readonly $typeArgs: [];
    readonly $isPhantom = Oracle.$isPhantom;

    readonly id: ToField<UID>;
    readonly baseToken: ToField<String>;
    readonly quoteToken: ToField<String>;
    readonly baseTokenType: ToField<TypeName>;
    readonly quoteTokenType: ToField<TypeName>;
    readonly decimal: ToField<"u64">;
    readonly price: ToField<"u64">;
    readonly twapPrice: ToField<"u64">;
    readonly tsMs: ToField<"u64">;
    readonly epoch: ToField<"u64">;
    readonly timeInterval: ToField<"u64">;
    readonly switchboard: ToField<Option<ID>>;
    readonly pyth: ToField<Option<ID>>;

    private constructor(typeArgs: [], fields: OracleFields) {
        this.$fullTypeName = composeSuiType(Oracle.$typeName, ...typeArgs) as `${typeof PKG_V1}::oracle::Oracle`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.baseToken = fields.baseToken;
        this.quoteToken = fields.quoteToken;
        this.baseTokenType = fields.baseTokenType;
        this.quoteTokenType = fields.quoteTokenType;
        this.decimal = fields.decimal;
        this.price = fields.price;
        this.twapPrice = fields.twapPrice;
        this.tsMs = fields.tsMs;
        this.epoch = fields.epoch;
        this.timeInterval = fields.timeInterval;
        this.switchboard = fields.switchboard;
        this.pyth = fields.pyth;
    }

    static reified(): OracleReified {
        return {
            typeName: Oracle.$typeName,
            fullTypeName: composeSuiType(Oracle.$typeName, ...[]) as `${typeof PKG_V1}::oracle::Oracle`,
            typeArgs: [] as [],
            isPhantom: Oracle.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Oracle.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Oracle.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Oracle.fromBcs(data),
            bcs: Oracle.bcs,
            fromJSONField: (field: any) => Oracle.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Oracle.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Oracle.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => Oracle.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => Oracle.fetch(client, id),
            new: (fields: OracleFields) => {
                return new Oracle([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Oracle.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<Oracle>> {
        return phantom(Oracle.reified());
    }
    static get p() {
        return Oracle.phantom();
    }

    static get bcs() {
        return bcs.struct("Oracle", {
            id: UID.bcs,
            base_token: String.bcs,
            quote_token: String.bcs,
            base_token_type: TypeName.bcs,
            quote_token_type: TypeName.bcs,
            decimal: bcs.u64(),
            price: bcs.u64(),
            twap_price: bcs.u64(),
            ts_ms: bcs.u64(),
            epoch: bcs.u64(),
            time_interval: bcs.u64(),
            switchboard: Option.bcs(ID.bcs),
            pyth: Option.bcs(ID.bcs),
        });
    }

    static fromFields(fields: Record<string, any>): Oracle {
        return Oracle.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            baseToken: decodeFromFields(String.reified(), fields.base_token),
            quoteToken: decodeFromFields(String.reified(), fields.quote_token),
            baseTokenType: decodeFromFields(TypeName.reified(), fields.base_token_type),
            quoteTokenType: decodeFromFields(TypeName.reified(), fields.quote_token_type),
            decimal: decodeFromFields("u64", fields.decimal),
            price: decodeFromFields("u64", fields.price),
            twapPrice: decodeFromFields("u64", fields.twap_price),
            tsMs: decodeFromFields("u64", fields.ts_ms),
            epoch: decodeFromFields("u64", fields.epoch),
            timeInterval: decodeFromFields("u64", fields.time_interval),
            switchboard: decodeFromFields(Option.reified(ID.reified()), fields.switchboard),
            pyth: decodeFromFields(Option.reified(ID.reified()), fields.pyth),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Oracle {
        if (!isOracle(item.type)) {
            throw new Error("not a Oracle type");
        }

        return Oracle.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            baseToken: decodeFromFieldsWithTypes(String.reified(), item.fields.base_token),
            quoteToken: decodeFromFieldsWithTypes(String.reified(), item.fields.quote_token),
            baseTokenType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.base_token_type),
            quoteTokenType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.quote_token_type),
            decimal: decodeFromFieldsWithTypes("u64", item.fields.decimal),
            price: decodeFromFieldsWithTypes("u64", item.fields.price),
            twapPrice: decodeFromFieldsWithTypes("u64", item.fields.twap_price),
            tsMs: decodeFromFieldsWithTypes("u64", item.fields.ts_ms),
            epoch: decodeFromFieldsWithTypes("u64", item.fields.epoch),
            timeInterval: decodeFromFieldsWithTypes("u64", item.fields.time_interval),
            switchboard: decodeFromFieldsWithTypes(Option.reified(ID.reified()), item.fields.switchboard),
            pyth: decodeFromFieldsWithTypes(Option.reified(ID.reified()), item.fields.pyth),
        });
    }

    static fromBcs(data: Uint8Array): Oracle {
        return Oracle.fromFields(Oracle.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            baseToken: this.baseToken,
            quoteToken: this.quoteToken,
            baseTokenType: this.baseTokenType.toJSONField(),
            quoteTokenType: this.quoteTokenType.toJSONField(),
            decimal: this.decimal.toString(),
            price: this.price.toString(),
            twapPrice: this.twapPrice.toString(),
            tsMs: this.tsMs.toString(),
            epoch: this.epoch.toString(),
            timeInterval: this.timeInterval.toString(),
            switchboard: fieldToJSON<Option<ID>>(`${Option.$typeName}<${ID.$typeName}>`, this.switchboard),
            pyth: fieldToJSON<Option<ID>>(`${Option.$typeName}<${ID.$typeName}>`, this.pyth),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): Oracle {
        return Oracle.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            baseToken: decodeFromJSONField(String.reified(), field.baseToken),
            quoteToken: decodeFromJSONField(String.reified(), field.quoteToken),
            baseTokenType: decodeFromJSONField(TypeName.reified(), field.baseTokenType),
            quoteTokenType: decodeFromJSONField(TypeName.reified(), field.quoteTokenType),
            decimal: decodeFromJSONField("u64", field.decimal),
            price: decodeFromJSONField("u64", field.price),
            twapPrice: decodeFromJSONField("u64", field.twapPrice),
            tsMs: decodeFromJSONField("u64", field.tsMs),
            epoch: decodeFromJSONField("u64", field.epoch),
            timeInterval: decodeFromJSONField("u64", field.timeInterval),
            switchboard: decodeFromJSONField(Option.reified(ID.reified()), field.switchboard),
            pyth: decodeFromJSONField(Option.reified(ID.reified()), field.pyth),
        });
    }

    static fromJSON(json: Record<string, any>): Oracle {
        if (json.$typeName !== Oracle.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return Oracle.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): Oracle {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isOracle(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Oracle object`);
        }
        return Oracle.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): Oracle {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isOracle(data.bcs.type)) {
                throw new Error(`object at is not a Oracle object`);
            }

            return Oracle.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Oracle.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<Oracle> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Oracle object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isOracle(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Oracle object`);
        }

        return Oracle.fromSuiObjectData(res.data);
    }
}

/* ============================== PriceEvent =============================== */

export function isPriceEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::oracle::PriceEvent`;
}

export interface PriceEventFields {
    id: ToField<ID>;
    price: ToField<"u64">;
    tsMs: ToField<"u64">;
}

export type PriceEventReified = Reified<PriceEvent, PriceEventFields>;

export class PriceEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::oracle::PriceEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = PriceEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::oracle::PriceEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = PriceEvent.$isPhantom;

    readonly id: ToField<ID>;
    readonly price: ToField<"u64">;
    readonly tsMs: ToField<"u64">;

    private constructor(typeArgs: [], fields: PriceEventFields) {
        this.$fullTypeName = composeSuiType(PriceEvent.$typeName, ...typeArgs) as `${typeof PKG_V1}::oracle::PriceEvent`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.price = fields.price;
        this.tsMs = fields.tsMs;
    }

    static reified(): PriceEventReified {
        return {
            typeName: PriceEvent.$typeName,
            fullTypeName: composeSuiType(PriceEvent.$typeName, ...[]) as `${typeof PKG_V1}::oracle::PriceEvent`,
            typeArgs: [] as [],
            isPhantom: PriceEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => PriceEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => PriceEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => PriceEvent.fromBcs(data),
            bcs: PriceEvent.bcs,
            fromJSONField: (field: any) => PriceEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => PriceEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => PriceEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => PriceEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => PriceEvent.fetch(client, id),
            new: (fields: PriceEventFields) => {
                return new PriceEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return PriceEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<PriceEvent>> {
        return phantom(PriceEvent.reified());
    }
    static get p() {
        return PriceEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("PriceEvent", {
            id: ID.bcs,
            price: bcs.u64(),
            ts_ms: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): PriceEvent {
        return PriceEvent.reified().new({
            id: decodeFromFields(ID.reified(), fields.id),
            price: decodeFromFields("u64", fields.price),
            tsMs: decodeFromFields("u64", fields.ts_ms),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): PriceEvent {
        if (!isPriceEvent(item.type)) {
            throw new Error("not a PriceEvent type");
        }

        return PriceEvent.reified().new({
            id: decodeFromFieldsWithTypes(ID.reified(), item.fields.id),
            price: decodeFromFieldsWithTypes("u64", item.fields.price),
            tsMs: decodeFromFieldsWithTypes("u64", item.fields.ts_ms),
        });
    }

    static fromBcs(data: Uint8Array): PriceEvent {
        return PriceEvent.fromFields(PriceEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            price: this.price.toString(),
            tsMs: this.tsMs.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): PriceEvent {
        return PriceEvent.reified().new({
            id: decodeFromJSONField(ID.reified(), field.id),
            price: decodeFromJSONField("u64", field.price),
            tsMs: decodeFromJSONField("u64", field.tsMs),
        });
    }

    static fromJSON(json: Record<string, any>): PriceEvent {
        if (json.$typeName !== PriceEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return PriceEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): PriceEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isPriceEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a PriceEvent object`);
        }
        return PriceEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): PriceEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isPriceEvent(data.bcs.type)) {
                throw new Error(`object at is not a PriceEvent object`);
            }

            return PriceEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return PriceEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<PriceEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching PriceEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isPriceEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a PriceEvent object`);
        }

        return PriceEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== UpdateAuthority =============================== */

export function isUpdateAuthority(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V9}::oracle::UpdateAuthority`;
}

export interface UpdateAuthorityFields {
    id: ToField<UID>;
    authority: ToField<Vector<"address">>;
}

export type UpdateAuthorityReified = Reified<UpdateAuthority, UpdateAuthorityFields>;

export class UpdateAuthority implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V9}::oracle::UpdateAuthority`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = UpdateAuthority.$typeName;
    readonly $fullTypeName: `${typeof PKG_V9}::oracle::UpdateAuthority`;
    readonly $typeArgs: [];
    readonly $isPhantom = UpdateAuthority.$isPhantom;

    readonly id: ToField<UID>;
    readonly authority: ToField<Vector<"address">>;

    private constructor(typeArgs: [], fields: UpdateAuthorityFields) {
        this.$fullTypeName = composeSuiType(UpdateAuthority.$typeName, ...typeArgs) as `${typeof PKG_V9}::oracle::UpdateAuthority`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.authority = fields.authority;
    }

    static reified(): UpdateAuthorityReified {
        return {
            typeName: UpdateAuthority.$typeName,
            fullTypeName: composeSuiType(UpdateAuthority.$typeName, ...[]) as `${typeof PKG_V9}::oracle::UpdateAuthority`,
            typeArgs: [] as [],
            isPhantom: UpdateAuthority.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => UpdateAuthority.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => UpdateAuthority.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => UpdateAuthority.fromBcs(data),
            bcs: UpdateAuthority.bcs,
            fromJSONField: (field: any) => UpdateAuthority.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => UpdateAuthority.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => UpdateAuthority.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => UpdateAuthority.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => UpdateAuthority.fetch(client, id),
            new: (fields: UpdateAuthorityFields) => {
                return new UpdateAuthority([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return UpdateAuthority.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<UpdateAuthority>> {
        return phantom(UpdateAuthority.reified());
    }
    static get p() {
        return UpdateAuthority.phantom();
    }

    static get bcs() {
        return bcs.struct("UpdateAuthority", {
            id: UID.bcs,
            authority: bcs.vector(
                bcs.bytes(32).transform({
                    input: (val: string) => fromHEX(val),
                    output: (val: Uint8Array) => toHEX(val),
                })
            ),
        });
    }

    static fromFields(fields: Record<string, any>): UpdateAuthority {
        return UpdateAuthority.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            authority: decodeFromFields(reified.vector("address"), fields.authority),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): UpdateAuthority {
        if (!isUpdateAuthority(item.type)) {
            throw new Error("not a UpdateAuthority type");
        }

        return UpdateAuthority.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            authority: decodeFromFieldsWithTypes(reified.vector("address"), item.fields.authority),
        });
    }

    static fromBcs(data: Uint8Array): UpdateAuthority {
        return UpdateAuthority.fromFields(UpdateAuthority.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            authority: fieldToJSON<Vector<"address">>(`vector<address>`, this.authority),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): UpdateAuthority {
        return UpdateAuthority.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            authority: decodeFromJSONField(reified.vector("address"), field.authority),
        });
    }

    static fromJSON(json: Record<string, any>): UpdateAuthority {
        if (json.$typeName !== UpdateAuthority.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return UpdateAuthority.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): UpdateAuthority {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUpdateAuthority(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a UpdateAuthority object`);
        }
        return UpdateAuthority.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): UpdateAuthority {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isUpdateAuthority(data.bcs.type)) {
                throw new Error(`object at is not a UpdateAuthority object`);
            }

            return UpdateAuthority.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return UpdateAuthority.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<UpdateAuthority> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching UpdateAuthority object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isUpdateAuthority(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UpdateAuthority object`);
        }

        return UpdateAuthority.fromSuiObjectData(res.data);
    }
}
