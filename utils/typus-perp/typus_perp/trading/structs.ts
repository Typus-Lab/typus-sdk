import * as reified from "../../_framework/reified";
import { Option } from "../../_dependencies/source/0x1/option/structs";
import { TypeName } from "../../_dependencies/source/0x1/type-name/structs";
import { ObjectTable } from "../../_dependencies/source/0x2/object-table/structs";
import { UID } from "../../_dependencies/source/0x2/object/structs";
import { Table } from "../../_dependencies/source/0x2/table/structs";
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
    ToTypeStr as ToPhantom,
} from "../../_framework/reified";
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../_framework/util";
import { bcs, fromB64, fromHEX, toHEX } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";

/* ============================== AddTradingSymbolEvent =============================== */

export function isAddTradingSymbolEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x0::trading::AddTradingSymbolEvent";
}

export interface AddTradingSymbolEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    baseTokenType: ToField<TypeName>;
    marketInfo: ToField<MarketInfo>;
    marketConfig: ToField<MarketConfig>;
    u64Padding: ToField<Vector<"u64">>;
}

export type AddTradingSymbolEventReified = Reified<AddTradingSymbolEvent, AddTradingSymbolEventFields>;

export class AddTradingSymbolEvent implements StructClass {
    static readonly $typeName = "0x0::trading::AddTradingSymbolEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = AddTradingSymbolEvent.$typeName;

    readonly $fullTypeName: "0x0::trading::AddTradingSymbolEvent";

    readonly $typeArgs: [];

    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly baseTokenType: ToField<TypeName>;
    readonly marketInfo: ToField<MarketInfo>;
    readonly marketConfig: ToField<MarketConfig>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: AddTradingSymbolEventFields) {
        this.$fullTypeName = composeSuiType(AddTradingSymbolEvent.$typeName, ...typeArgs) as "0x0::trading::AddTradingSymbolEvent";
        this.$typeArgs = typeArgs;

        this.sender = fields.sender;
        this.index = fields.index;
        this.baseTokenType = fields.baseTokenType;
        this.marketInfo = fields.marketInfo;
        this.marketConfig = fields.marketConfig;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): AddTradingSymbolEventReified {
        return {
            typeName: AddTradingSymbolEvent.$typeName,
            fullTypeName: composeSuiType(AddTradingSymbolEvent.$typeName, ...[]) as "0x0::trading::AddTradingSymbolEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => AddTradingSymbolEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => AddTradingSymbolEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => AddTradingSymbolEvent.fromBcs(data),
            bcs: AddTradingSymbolEvent.bcs,
            fromJSONField: (field: any) => AddTradingSymbolEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => AddTradingSymbolEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => AddTradingSymbolEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => AddTradingSymbolEvent.fetch(client, id),
            new: (fields: AddTradingSymbolEventFields) => {
                return new AddTradingSymbolEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return AddTradingSymbolEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<AddTradingSymbolEvent>> {
        return phantom(AddTradingSymbolEvent.reified());
    }
    static get p() {
        return AddTradingSymbolEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("AddTradingSymbolEvent", {
            sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            index: bcs.u64(),
            base_token_type: TypeName.bcs,
            market_info: MarketInfo.bcs,
            market_config: MarketConfig.bcs,
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): AddTradingSymbolEvent {
        return AddTradingSymbolEvent.reified().new({
            sender: decodeFromFields("address", fields.sender),
            index: decodeFromFields("u64", fields.index),
            baseTokenType: decodeFromFields(TypeName.reified(), fields.base_token_type),
            marketInfo: decodeFromFields(MarketInfo.reified(), fields.market_info),
            marketConfig: decodeFromFields(MarketConfig.reified(), fields.market_config),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): AddTradingSymbolEvent {
        if (!isAddTradingSymbolEvent(item.type)) {
            throw new Error("not a AddTradingSymbolEvent type");
        }

        return AddTradingSymbolEvent.reified().new({
            sender: decodeFromFieldsWithTypes("address", item.fields.sender),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            baseTokenType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.base_token_type),
            marketInfo: decodeFromFieldsWithTypes(MarketInfo.reified(), item.fields.market_info),
            marketConfig: decodeFromFieldsWithTypes(MarketConfig.reified(), item.fields.market_config),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): AddTradingSymbolEvent {
        return AddTradingSymbolEvent.fromFields(AddTradingSymbolEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            sender: this.sender,
            index: this.index.toString(),
            baseTokenType: this.baseTokenType.toJSONField(),
            marketInfo: this.marketInfo.toJSONField(),
            marketConfig: this.marketConfig.toJSONField(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): AddTradingSymbolEvent {
        return AddTradingSymbolEvent.reified().new({
            sender: decodeFromJSONField("address", field.sender),
            index: decodeFromJSONField("u64", field.index),
            baseTokenType: decodeFromJSONField(TypeName.reified(), field.baseTokenType),
            marketInfo: decodeFromJSONField(MarketInfo.reified(), field.marketInfo),
            marketConfig: decodeFromJSONField(MarketConfig.reified(), field.marketConfig),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): AddTradingSymbolEvent {
        if (json.$typeName !== AddTradingSymbolEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return AddTradingSymbolEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): AddTradingSymbolEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isAddTradingSymbolEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a AddTradingSymbolEvent object`);
        }
        return AddTradingSymbolEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<AddTradingSymbolEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching AddTradingSymbolEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isAddTradingSymbolEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AddTradingSymbolEvent object`);
        }
        return AddTradingSymbolEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== CancelTradingOrderEvent =============================== */

export function isCancelTradingOrderEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x0::trading::CancelTradingOrderEvent";
}

export interface CancelTradingOrderEventFields {
    sender: ToField<"address">;
    marketIndex: ToField<"u64">;
    orderId: ToField<"u64">;
    triggerPrice: ToField<Option<"u64">>;
    collateralToken: ToField<TypeName>;
    baseToken: ToField<TypeName>;
    releasedCollateralAmount: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type CancelTradingOrderEventReified = Reified<CancelTradingOrderEvent, CancelTradingOrderEventFields>;

export class CancelTradingOrderEvent implements StructClass {
    static readonly $typeName = "0x0::trading::CancelTradingOrderEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = CancelTradingOrderEvent.$typeName;

    readonly $fullTypeName: "0x0::trading::CancelTradingOrderEvent";

    readonly $typeArgs: [];

    readonly sender: ToField<"address">;
    readonly marketIndex: ToField<"u64">;
    readonly orderId: ToField<"u64">;
    readonly triggerPrice: ToField<Option<"u64">>;
    readonly collateralToken: ToField<TypeName>;
    readonly baseToken: ToField<TypeName>;
    readonly releasedCollateralAmount: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: CancelTradingOrderEventFields) {
        this.$fullTypeName = composeSuiType(CancelTradingOrderEvent.$typeName, ...typeArgs) as "0x0::trading::CancelTradingOrderEvent";
        this.$typeArgs = typeArgs;

        this.sender = fields.sender;
        this.marketIndex = fields.marketIndex;
        this.orderId = fields.orderId;
        this.triggerPrice = fields.triggerPrice;
        this.collateralToken = fields.collateralToken;
        this.baseToken = fields.baseToken;
        this.releasedCollateralAmount = fields.releasedCollateralAmount;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): CancelTradingOrderEventReified {
        return {
            typeName: CancelTradingOrderEvent.$typeName,
            fullTypeName: composeSuiType(CancelTradingOrderEvent.$typeName, ...[]) as "0x0::trading::CancelTradingOrderEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => CancelTradingOrderEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => CancelTradingOrderEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => CancelTradingOrderEvent.fromBcs(data),
            bcs: CancelTradingOrderEvent.bcs,
            fromJSONField: (field: any) => CancelTradingOrderEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => CancelTradingOrderEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => CancelTradingOrderEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => CancelTradingOrderEvent.fetch(client, id),
            new: (fields: CancelTradingOrderEventFields) => {
                return new CancelTradingOrderEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return CancelTradingOrderEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<CancelTradingOrderEvent>> {
        return phantom(CancelTradingOrderEvent.reified());
    }
    static get p() {
        return CancelTradingOrderEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("CancelTradingOrderEvent", {
            sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            market_index: bcs.u64(),
            order_id: bcs.u64(),
            trigger_price: Option.bcs(bcs.u64()),
            collateral_token: TypeName.bcs,
            base_token: TypeName.bcs,
            released_collateral_amount: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): CancelTradingOrderEvent {
        return CancelTradingOrderEvent.reified().new({
            sender: decodeFromFields("address", fields.sender),
            marketIndex: decodeFromFields("u64", fields.market_index),
            orderId: decodeFromFields("u64", fields.order_id),
            triggerPrice: decodeFromFields(Option.reified("u64"), fields.trigger_price),
            collateralToken: decodeFromFields(TypeName.reified(), fields.collateral_token),
            baseToken: decodeFromFields(TypeName.reified(), fields.base_token),
            releasedCollateralAmount: decodeFromFields("u64", fields.released_collateral_amount),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): CancelTradingOrderEvent {
        if (!isCancelTradingOrderEvent(item.type)) {
            throw new Error("not a CancelTradingOrderEvent type");
        }

        return CancelTradingOrderEvent.reified().new({
            sender: decodeFromFieldsWithTypes("address", item.fields.sender),
            marketIndex: decodeFromFieldsWithTypes("u64", item.fields.market_index),
            orderId: decodeFromFieldsWithTypes("u64", item.fields.order_id),
            triggerPrice: decodeFromFieldsWithTypes(Option.reified("u64"), item.fields.trigger_price),
            collateralToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.collateral_token),
            baseToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.base_token),
            releasedCollateralAmount: decodeFromFieldsWithTypes("u64", item.fields.released_collateral_amount),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): CancelTradingOrderEvent {
        return CancelTradingOrderEvent.fromFields(CancelTradingOrderEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            sender: this.sender,
            marketIndex: this.marketIndex.toString(),
            orderId: this.orderId.toString(),
            triggerPrice: fieldToJSON<Option<"u64">>(`0x1::option::Option<u64>`, this.triggerPrice),
            collateralToken: this.collateralToken.toJSONField(),
            baseToken: this.baseToken.toJSONField(),
            releasedCollateralAmount: this.releasedCollateralAmount.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): CancelTradingOrderEvent {
        return CancelTradingOrderEvent.reified().new({
            sender: decodeFromJSONField("address", field.sender),
            marketIndex: decodeFromJSONField("u64", field.marketIndex),
            orderId: decodeFromJSONField("u64", field.orderId),
            triggerPrice: decodeFromJSONField(Option.reified("u64"), field.triggerPrice),
            collateralToken: decodeFromJSONField(TypeName.reified(), field.collateralToken),
            baseToken: decodeFromJSONField(TypeName.reified(), field.baseToken),
            releasedCollateralAmount: decodeFromJSONField("u64", field.releasedCollateralAmount),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): CancelTradingOrderEvent {
        if (json.$typeName !== CancelTradingOrderEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return CancelTradingOrderEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): CancelTradingOrderEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isCancelTradingOrderEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a CancelTradingOrderEvent object`);
        }
        return CancelTradingOrderEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<CancelTradingOrderEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching CancelTradingOrderEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isCancelTradingOrderEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a CancelTradingOrderEvent object`);
        }
        return CancelTradingOrderEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== CreateTradingOrderEvent =============================== */

export function isCreateTradingOrderEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x0::trading::CreateTradingOrderEvent";
}

export interface CreateTradingOrderEventFields {
    sender: ToField<"address">;
    marketIndex: ToField<"u64">;
    poolIndex: ToField<"u64">;
    collateralToken: ToField<TypeName>;
    baseToken: ToField<TypeName>;
    linkedPositionId: ToField<Option<"u64">>;
    collateralAmount: ToField<"u64">;
    leveragePct: ToField<"u64">;
    reduceOnly: ToField<"bool">;
    isLong: ToField<"bool">;
    isStopOrder: ToField<"bool">;
    size: ToField<"u64">;
    triggerPrice: ToField<"u64">;
    filled: ToField<"bool">;
    filledPrice: ToField<Option<"u64">>;
    u64Padding: ToField<Vector<"u64">>;
}

export type CreateTradingOrderEventReified = Reified<CreateTradingOrderEvent, CreateTradingOrderEventFields>;

export class CreateTradingOrderEvent implements StructClass {
    static readonly $typeName = "0x0::trading::CreateTradingOrderEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = CreateTradingOrderEvent.$typeName;

    readonly $fullTypeName: "0x0::trading::CreateTradingOrderEvent";

    readonly $typeArgs: [];

    readonly sender: ToField<"address">;
    readonly marketIndex: ToField<"u64">;
    readonly poolIndex: ToField<"u64">;
    readonly collateralToken: ToField<TypeName>;
    readonly baseToken: ToField<TypeName>;
    readonly linkedPositionId: ToField<Option<"u64">>;
    readonly collateralAmount: ToField<"u64">;
    readonly leveragePct: ToField<"u64">;
    readonly reduceOnly: ToField<"bool">;
    readonly isLong: ToField<"bool">;
    readonly isStopOrder: ToField<"bool">;
    readonly size: ToField<"u64">;
    readonly triggerPrice: ToField<"u64">;
    readonly filled: ToField<"bool">;
    readonly filledPrice: ToField<Option<"u64">>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: CreateTradingOrderEventFields) {
        this.$fullTypeName = composeSuiType(CreateTradingOrderEvent.$typeName, ...typeArgs) as "0x0::trading::CreateTradingOrderEvent";
        this.$typeArgs = typeArgs;

        this.sender = fields.sender;
        this.marketIndex = fields.marketIndex;
        this.poolIndex = fields.poolIndex;
        this.collateralToken = fields.collateralToken;
        this.baseToken = fields.baseToken;
        this.linkedPositionId = fields.linkedPositionId;
        this.collateralAmount = fields.collateralAmount;
        this.leveragePct = fields.leveragePct;
        this.reduceOnly = fields.reduceOnly;
        this.isLong = fields.isLong;
        this.isStopOrder = fields.isStopOrder;
        this.size = fields.size;
        this.triggerPrice = fields.triggerPrice;
        this.filled = fields.filled;
        this.filledPrice = fields.filledPrice;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): CreateTradingOrderEventReified {
        return {
            typeName: CreateTradingOrderEvent.$typeName,
            fullTypeName: composeSuiType(CreateTradingOrderEvent.$typeName, ...[]) as "0x0::trading::CreateTradingOrderEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => CreateTradingOrderEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => CreateTradingOrderEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => CreateTradingOrderEvent.fromBcs(data),
            bcs: CreateTradingOrderEvent.bcs,
            fromJSONField: (field: any) => CreateTradingOrderEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => CreateTradingOrderEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => CreateTradingOrderEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => CreateTradingOrderEvent.fetch(client, id),
            new: (fields: CreateTradingOrderEventFields) => {
                return new CreateTradingOrderEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return CreateTradingOrderEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<CreateTradingOrderEvent>> {
        return phantom(CreateTradingOrderEvent.reified());
    }
    static get p() {
        return CreateTradingOrderEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("CreateTradingOrderEvent", {
            sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            market_index: bcs.u64(),
            pool_index: bcs.u64(),
            collateral_token: TypeName.bcs,
            base_token: TypeName.bcs,
            linked_position_id: Option.bcs(bcs.u64()),
            collateral_amount: bcs.u64(),
            leverage_pct: bcs.u64(),
            reduce_only: bcs.bool(),
            is_long: bcs.bool(),
            is_stop_order: bcs.bool(),
            size: bcs.u64(),
            trigger_price: bcs.u64(),
            filled: bcs.bool(),
            filled_price: Option.bcs(bcs.u64()),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): CreateTradingOrderEvent {
        return CreateTradingOrderEvent.reified().new({
            sender: decodeFromFields("address", fields.sender),
            marketIndex: decodeFromFields("u64", fields.market_index),
            poolIndex: decodeFromFields("u64", fields.pool_index),
            collateralToken: decodeFromFields(TypeName.reified(), fields.collateral_token),
            baseToken: decodeFromFields(TypeName.reified(), fields.base_token),
            linkedPositionId: decodeFromFields(Option.reified("u64"), fields.linked_position_id),
            collateralAmount: decodeFromFields("u64", fields.collateral_amount),
            leveragePct: decodeFromFields("u64", fields.leverage_pct),
            reduceOnly: decodeFromFields("bool", fields.reduce_only),
            isLong: decodeFromFields("bool", fields.is_long),
            isStopOrder: decodeFromFields("bool", fields.is_stop_order),
            size: decodeFromFields("u64", fields.size),
            triggerPrice: decodeFromFields("u64", fields.trigger_price),
            filled: decodeFromFields("bool", fields.filled),
            filledPrice: decodeFromFields(Option.reified("u64"), fields.filled_price),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): CreateTradingOrderEvent {
        if (!isCreateTradingOrderEvent(item.type)) {
            throw new Error("not a CreateTradingOrderEvent type");
        }

        return CreateTradingOrderEvent.reified().new({
            sender: decodeFromFieldsWithTypes("address", item.fields.sender),
            marketIndex: decodeFromFieldsWithTypes("u64", item.fields.market_index),
            poolIndex: decodeFromFieldsWithTypes("u64", item.fields.pool_index),
            collateralToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.collateral_token),
            baseToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.base_token),
            linkedPositionId: decodeFromFieldsWithTypes(Option.reified("u64"), item.fields.linked_position_id),
            collateralAmount: decodeFromFieldsWithTypes("u64", item.fields.collateral_amount),
            leveragePct: decodeFromFieldsWithTypes("u64", item.fields.leverage_pct),
            reduceOnly: decodeFromFieldsWithTypes("bool", item.fields.reduce_only),
            isLong: decodeFromFieldsWithTypes("bool", item.fields.is_long),
            isStopOrder: decodeFromFieldsWithTypes("bool", item.fields.is_stop_order),
            size: decodeFromFieldsWithTypes("u64", item.fields.size),
            triggerPrice: decodeFromFieldsWithTypes("u64", item.fields.trigger_price),
            filled: decodeFromFieldsWithTypes("bool", item.fields.filled),
            filledPrice: decodeFromFieldsWithTypes(Option.reified("u64"), item.fields.filled_price),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): CreateTradingOrderEvent {
        return CreateTradingOrderEvent.fromFields(CreateTradingOrderEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            sender: this.sender,
            marketIndex: this.marketIndex.toString(),
            poolIndex: this.poolIndex.toString(),
            collateralToken: this.collateralToken.toJSONField(),
            baseToken: this.baseToken.toJSONField(),
            linkedPositionId: fieldToJSON<Option<"u64">>(`0x1::option::Option<u64>`, this.linkedPositionId),
            collateralAmount: this.collateralAmount.toString(),
            leveragePct: this.leveragePct.toString(),
            reduceOnly: this.reduceOnly,
            isLong: this.isLong,
            isStopOrder: this.isStopOrder,
            size: this.size.toString(),
            triggerPrice: this.triggerPrice.toString(),
            filled: this.filled,
            filledPrice: fieldToJSON<Option<"u64">>(`0x1::option::Option<u64>`, this.filledPrice),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): CreateTradingOrderEvent {
        return CreateTradingOrderEvent.reified().new({
            sender: decodeFromJSONField("address", field.sender),
            marketIndex: decodeFromJSONField("u64", field.marketIndex),
            poolIndex: decodeFromJSONField("u64", field.poolIndex),
            collateralToken: decodeFromJSONField(TypeName.reified(), field.collateralToken),
            baseToken: decodeFromJSONField(TypeName.reified(), field.baseToken),
            linkedPositionId: decodeFromJSONField(Option.reified("u64"), field.linkedPositionId),
            collateralAmount: decodeFromJSONField("u64", field.collateralAmount),
            leveragePct: decodeFromJSONField("u64", field.leveragePct),
            reduceOnly: decodeFromJSONField("bool", field.reduceOnly),
            isLong: decodeFromJSONField("bool", field.isLong),
            isStopOrder: decodeFromJSONField("bool", field.isStopOrder),
            size: decodeFromJSONField("u64", field.size),
            triggerPrice: decodeFromJSONField("u64", field.triggerPrice),
            filled: decodeFromJSONField("bool", field.filled),
            filledPrice: decodeFromJSONField(Option.reified("u64"), field.filledPrice),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): CreateTradingOrderEvent {
        if (json.$typeName !== CreateTradingOrderEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return CreateTradingOrderEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): CreateTradingOrderEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isCreateTradingOrderEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a CreateTradingOrderEvent object`);
        }
        return CreateTradingOrderEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<CreateTradingOrderEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching CreateTradingOrderEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isCreateTradingOrderEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a CreateTradingOrderEvent object`);
        }
        return CreateTradingOrderEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== LiquidateEvent =============================== */

export function isLiquidateEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x0::trading::LiquidateEvent";
}

export interface LiquidateEventFields {
    sender: ToField<"address">;
    collateralToken: ToField<TypeName>;
    baseToken: ToField<TypeName>;
    positionId: ToField<"u64">;
    collateralPrice: ToField<"u64">;
    tradingPrice: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type LiquidateEventReified = Reified<LiquidateEvent, LiquidateEventFields>;

export class LiquidateEvent implements StructClass {
    static readonly $typeName = "0x0::trading::LiquidateEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = LiquidateEvent.$typeName;

    readonly $fullTypeName: "0x0::trading::LiquidateEvent";

    readonly $typeArgs: [];

    readonly sender: ToField<"address">;
    readonly collateralToken: ToField<TypeName>;
    readonly baseToken: ToField<TypeName>;
    readonly positionId: ToField<"u64">;
    readonly collateralPrice: ToField<"u64">;
    readonly tradingPrice: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: LiquidateEventFields) {
        this.$fullTypeName = composeSuiType(LiquidateEvent.$typeName, ...typeArgs) as "0x0::trading::LiquidateEvent";
        this.$typeArgs = typeArgs;

        this.sender = fields.sender;
        this.collateralToken = fields.collateralToken;
        this.baseToken = fields.baseToken;
        this.positionId = fields.positionId;
        this.collateralPrice = fields.collateralPrice;
        this.tradingPrice = fields.tradingPrice;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): LiquidateEventReified {
        return {
            typeName: LiquidateEvent.$typeName,
            fullTypeName: composeSuiType(LiquidateEvent.$typeName, ...[]) as "0x0::trading::LiquidateEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => LiquidateEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => LiquidateEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => LiquidateEvent.fromBcs(data),
            bcs: LiquidateEvent.bcs,
            fromJSONField: (field: any) => LiquidateEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => LiquidateEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => LiquidateEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => LiquidateEvent.fetch(client, id),
            new: (fields: LiquidateEventFields) => {
                return new LiquidateEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return LiquidateEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<LiquidateEvent>> {
        return phantom(LiquidateEvent.reified());
    }
    static get p() {
        return LiquidateEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("LiquidateEvent", {
            sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            collateral_token: TypeName.bcs,
            base_token: TypeName.bcs,
            position_id: bcs.u64(),
            collateral_price: bcs.u64(),
            trading_price: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): LiquidateEvent {
        return LiquidateEvent.reified().new({
            sender: decodeFromFields("address", fields.sender),
            collateralToken: decodeFromFields(TypeName.reified(), fields.collateral_token),
            baseToken: decodeFromFields(TypeName.reified(), fields.base_token),
            positionId: decodeFromFields("u64", fields.position_id),
            collateralPrice: decodeFromFields("u64", fields.collateral_price),
            tradingPrice: decodeFromFields("u64", fields.trading_price),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): LiquidateEvent {
        if (!isLiquidateEvent(item.type)) {
            throw new Error("not a LiquidateEvent type");
        }

        return LiquidateEvent.reified().new({
            sender: decodeFromFieldsWithTypes("address", item.fields.sender),
            collateralToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.collateral_token),
            baseToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.base_token),
            positionId: decodeFromFieldsWithTypes("u64", item.fields.position_id),
            collateralPrice: decodeFromFieldsWithTypes("u64", item.fields.collateral_price),
            tradingPrice: decodeFromFieldsWithTypes("u64", item.fields.trading_price),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): LiquidateEvent {
        return LiquidateEvent.fromFields(LiquidateEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            sender: this.sender,
            collateralToken: this.collateralToken.toJSONField(),
            baseToken: this.baseToken.toJSONField(),
            positionId: this.positionId.toString(),
            collateralPrice: this.collateralPrice.toString(),
            tradingPrice: this.tradingPrice.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): LiquidateEvent {
        return LiquidateEvent.reified().new({
            sender: decodeFromJSONField("address", field.sender),
            collateralToken: decodeFromJSONField(TypeName.reified(), field.collateralToken),
            baseToken: decodeFromJSONField(TypeName.reified(), field.baseToken),
            positionId: decodeFromJSONField("u64", field.positionId),
            collateralPrice: decodeFromJSONField("u64", field.collateralPrice),
            tradingPrice: decodeFromJSONField("u64", field.tradingPrice),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): LiquidateEvent {
        if (json.$typeName !== LiquidateEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return LiquidateEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): LiquidateEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isLiquidateEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a LiquidateEvent object`);
        }
        return LiquidateEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<LiquidateEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching LiquidateEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isLiquidateEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a LiquidateEvent object`);
        }
        return LiquidateEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== MarketConfig =============================== */

export function isMarketConfig(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x0::trading::MarketConfig";
}

export interface MarketConfigFields {
    oracleId: ToField<"address">;
    maxLeveragePct: ToField<"u64">;
    minSize: ToField<"u64">;
    lotSize: ToField<"u64">;
    tradingFeeRate: ToField<"u64">;
    tradingFeeDecimal: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type MarketConfigReified = Reified<MarketConfig, MarketConfigFields>;

export class MarketConfig implements StructClass {
    static readonly $typeName = "0x0::trading::MarketConfig";
    static readonly $numTypeParams = 0;

    readonly $typeName = MarketConfig.$typeName;

    readonly $fullTypeName: "0x0::trading::MarketConfig";

    readonly $typeArgs: [];

    readonly oracleId: ToField<"address">;
    readonly maxLeveragePct: ToField<"u64">;
    readonly minSize: ToField<"u64">;
    readonly lotSize: ToField<"u64">;
    readonly tradingFeeRate: ToField<"u64">;
    readonly tradingFeeDecimal: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: MarketConfigFields) {
        this.$fullTypeName = composeSuiType(MarketConfig.$typeName, ...typeArgs) as "0x0::trading::MarketConfig";
        this.$typeArgs = typeArgs;

        this.oracleId = fields.oracleId;
        this.maxLeveragePct = fields.maxLeveragePct;
        this.minSize = fields.minSize;
        this.lotSize = fields.lotSize;
        this.tradingFeeRate = fields.tradingFeeRate;
        this.tradingFeeDecimal = fields.tradingFeeDecimal;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): MarketConfigReified {
        return {
            typeName: MarketConfig.$typeName,
            fullTypeName: composeSuiType(MarketConfig.$typeName, ...[]) as "0x0::trading::MarketConfig",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => MarketConfig.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => MarketConfig.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => MarketConfig.fromBcs(data),
            bcs: MarketConfig.bcs,
            fromJSONField: (field: any) => MarketConfig.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => MarketConfig.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => MarketConfig.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => MarketConfig.fetch(client, id),
            new: (fields: MarketConfigFields) => {
                return new MarketConfig([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return MarketConfig.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<MarketConfig>> {
        return phantom(MarketConfig.reified());
    }
    static get p() {
        return MarketConfig.phantom();
    }

    static get bcs() {
        return bcs.struct("MarketConfig", {
            oracle_id: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            max_leverage_pct: bcs.u64(),
            min_size: bcs.u64(),
            lot_size: bcs.u64(),
            trading_fee_rate: bcs.u64(),
            trading_fee_decimal: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): MarketConfig {
        return MarketConfig.reified().new({
            oracleId: decodeFromFields("address", fields.oracle_id),
            maxLeveragePct: decodeFromFields("u64", fields.max_leverage_pct),
            minSize: decodeFromFields("u64", fields.min_size),
            lotSize: decodeFromFields("u64", fields.lot_size),
            tradingFeeRate: decodeFromFields("u64", fields.trading_fee_rate),
            tradingFeeDecimal: decodeFromFields("u64", fields.trading_fee_decimal),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): MarketConfig {
        if (!isMarketConfig(item.type)) {
            throw new Error("not a MarketConfig type");
        }

        return MarketConfig.reified().new({
            oracleId: decodeFromFieldsWithTypes("address", item.fields.oracle_id),
            maxLeveragePct: decodeFromFieldsWithTypes("u64", item.fields.max_leverage_pct),
            minSize: decodeFromFieldsWithTypes("u64", item.fields.min_size),
            lotSize: decodeFromFieldsWithTypes("u64", item.fields.lot_size),
            tradingFeeRate: decodeFromFieldsWithTypes("u64", item.fields.trading_fee_rate),
            tradingFeeDecimal: decodeFromFieldsWithTypes("u64", item.fields.trading_fee_decimal),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): MarketConfig {
        return MarketConfig.fromFields(MarketConfig.bcs.parse(data));
    }

    toJSONField() {
        return {
            oracleId: this.oracleId,
            maxLeveragePct: this.maxLeveragePct.toString(),
            minSize: this.minSize.toString(),
            lotSize: this.lotSize.toString(),
            tradingFeeRate: this.tradingFeeRate.toString(),
            tradingFeeDecimal: this.tradingFeeDecimal.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): MarketConfig {
        return MarketConfig.reified().new({
            oracleId: decodeFromJSONField("address", field.oracleId),
            maxLeveragePct: decodeFromJSONField("u64", field.maxLeveragePct),
            minSize: decodeFromJSONField("u64", field.minSize),
            lotSize: decodeFromJSONField("u64", field.lotSize),
            tradingFeeRate: decodeFromJSONField("u64", field.tradingFeeRate),
            tradingFeeDecimal: decodeFromJSONField("u64", field.tradingFeeDecimal),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): MarketConfig {
        if (json.$typeName !== MarketConfig.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return MarketConfig.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): MarketConfig {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isMarketConfig(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a MarketConfig object`);
        }
        return MarketConfig.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<MarketConfig> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching MarketConfig object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isMarketConfig(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a MarketConfig object`);
        }
        return MarketConfig.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== MarketInfo =============================== */

export function isMarketInfo(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x0::trading::MarketInfo";
}

export interface MarketInfoFields {
    isActive: ToField<"bool">;
    sizeDecimal: ToField<"u64">;
    userPositionSide: ToField<"bool">;
    positionSize: ToField<"u64">;
    nextPositionId: ToField<"u64">;
    openOrderSide: ToField<"bool">;
    openOrderSize: ToField<"u64">;
    nextOrderId: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type MarketInfoReified = Reified<MarketInfo, MarketInfoFields>;

export class MarketInfo implements StructClass {
    static readonly $typeName = "0x0::trading::MarketInfo";
    static readonly $numTypeParams = 0;

    readonly $typeName = MarketInfo.$typeName;

    readonly $fullTypeName: "0x0::trading::MarketInfo";

    readonly $typeArgs: [];

    readonly isActive: ToField<"bool">;
    readonly sizeDecimal: ToField<"u64">;
    readonly userPositionSide: ToField<"bool">;
    readonly positionSize: ToField<"u64">;
    readonly nextPositionId: ToField<"u64">;
    readonly openOrderSide: ToField<"bool">;
    readonly openOrderSize: ToField<"u64">;
    readonly nextOrderId: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: MarketInfoFields) {
        this.$fullTypeName = composeSuiType(MarketInfo.$typeName, ...typeArgs) as "0x0::trading::MarketInfo";
        this.$typeArgs = typeArgs;

        this.isActive = fields.isActive;
        this.sizeDecimal = fields.sizeDecimal;
        this.userPositionSide = fields.userPositionSide;
        this.positionSize = fields.positionSize;
        this.nextPositionId = fields.nextPositionId;
        this.openOrderSide = fields.openOrderSide;
        this.openOrderSize = fields.openOrderSize;
        this.nextOrderId = fields.nextOrderId;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): MarketInfoReified {
        return {
            typeName: MarketInfo.$typeName,
            fullTypeName: composeSuiType(MarketInfo.$typeName, ...[]) as "0x0::trading::MarketInfo",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => MarketInfo.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => MarketInfo.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => MarketInfo.fromBcs(data),
            bcs: MarketInfo.bcs,
            fromJSONField: (field: any) => MarketInfo.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => MarketInfo.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => MarketInfo.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => MarketInfo.fetch(client, id),
            new: (fields: MarketInfoFields) => {
                return new MarketInfo([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return MarketInfo.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<MarketInfo>> {
        return phantom(MarketInfo.reified());
    }
    static get p() {
        return MarketInfo.phantom();
    }

    static get bcs() {
        return bcs.struct("MarketInfo", {
            is_active: bcs.bool(),
            size_decimal: bcs.u64(),
            user_position_side: bcs.bool(),
            position_size: bcs.u64(),
            next_position_id: bcs.u64(),
            open_order_side: bcs.bool(),
            open_order_size: bcs.u64(),
            next_order_id: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): MarketInfo {
        return MarketInfo.reified().new({
            isActive: decodeFromFields("bool", fields.is_active),
            sizeDecimal: decodeFromFields("u64", fields.size_decimal),
            userPositionSide: decodeFromFields("bool", fields.user_position_side),
            positionSize: decodeFromFields("u64", fields.position_size),
            nextPositionId: decodeFromFields("u64", fields.next_position_id),
            openOrderSide: decodeFromFields("bool", fields.open_order_side),
            openOrderSize: decodeFromFields("u64", fields.open_order_size),
            nextOrderId: decodeFromFields("u64", fields.next_order_id),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): MarketInfo {
        if (!isMarketInfo(item.type)) {
            throw new Error("not a MarketInfo type");
        }

        return MarketInfo.reified().new({
            isActive: decodeFromFieldsWithTypes("bool", item.fields.is_active),
            sizeDecimal: decodeFromFieldsWithTypes("u64", item.fields.size_decimal),
            userPositionSide: decodeFromFieldsWithTypes("bool", item.fields.user_position_side),
            positionSize: decodeFromFieldsWithTypes("u64", item.fields.position_size),
            nextPositionId: decodeFromFieldsWithTypes("u64", item.fields.next_position_id),
            openOrderSide: decodeFromFieldsWithTypes("bool", item.fields.open_order_side),
            openOrderSize: decodeFromFieldsWithTypes("u64", item.fields.open_order_size),
            nextOrderId: decodeFromFieldsWithTypes("u64", item.fields.next_order_id),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): MarketInfo {
        return MarketInfo.fromFields(MarketInfo.bcs.parse(data));
    }

    toJSONField() {
        return {
            isActive: this.isActive,
            sizeDecimal: this.sizeDecimal.toString(),
            userPositionSide: this.userPositionSide,
            positionSize: this.positionSize.toString(),
            nextPositionId: this.nextPositionId.toString(),
            openOrderSide: this.openOrderSide,
            openOrderSize: this.openOrderSize.toString(),
            nextOrderId: this.nextOrderId.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): MarketInfo {
        return MarketInfo.reified().new({
            isActive: decodeFromJSONField("bool", field.isActive),
            sizeDecimal: decodeFromJSONField("u64", field.sizeDecimal),
            userPositionSide: decodeFromJSONField("bool", field.userPositionSide),
            positionSize: decodeFromJSONField("u64", field.positionSize),
            nextPositionId: decodeFromJSONField("u64", field.nextPositionId),
            openOrderSide: decodeFromJSONField("bool", field.openOrderSide),
            openOrderSize: decodeFromJSONField("u64", field.openOrderSize),
            nextOrderId: decodeFromJSONField("u64", field.nextOrderId),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): MarketInfo {
        if (json.$typeName !== MarketInfo.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return MarketInfo.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): MarketInfo {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isMarketInfo(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a MarketInfo object`);
        }
        return MarketInfo.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<MarketInfo> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching MarketInfo object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isMarketInfo(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a MarketInfo object`);
        }
        return MarketInfo.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== MarketRegistry =============================== */

export function isMarketRegistry(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x0::trading::MarketRegistry";
}

export interface MarketRegistryFields {
    id: ToField<UID>;
    numMarket: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type MarketRegistryReified = Reified<MarketRegistry, MarketRegistryFields>;

export class MarketRegistry implements StructClass {
    static readonly $typeName = "0x0::trading::MarketRegistry";
    static readonly $numTypeParams = 0;

    readonly $typeName = MarketRegistry.$typeName;

    readonly $fullTypeName: "0x0::trading::MarketRegistry";

    readonly $typeArgs: [];

    readonly id: ToField<UID>;
    readonly numMarket: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: MarketRegistryFields) {
        this.$fullTypeName = composeSuiType(MarketRegistry.$typeName, ...typeArgs) as "0x0::trading::MarketRegistry";
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.numMarket = fields.numMarket;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): MarketRegistryReified {
        return {
            typeName: MarketRegistry.$typeName,
            fullTypeName: composeSuiType(MarketRegistry.$typeName, ...[]) as "0x0::trading::MarketRegistry",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => MarketRegistry.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => MarketRegistry.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => MarketRegistry.fromBcs(data),
            bcs: MarketRegistry.bcs,
            fromJSONField: (field: any) => MarketRegistry.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => MarketRegistry.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => MarketRegistry.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => MarketRegistry.fetch(client, id),
            new: (fields: MarketRegistryFields) => {
                return new MarketRegistry([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return MarketRegistry.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<MarketRegistry>> {
        return phantom(MarketRegistry.reified());
    }
    static get p() {
        return MarketRegistry.phantom();
    }

    static get bcs() {
        return bcs.struct("MarketRegistry", {
            id: UID.bcs,
            num_market: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): MarketRegistry {
        return MarketRegistry.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            numMarket: decodeFromFields("u64", fields.num_market),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): MarketRegistry {
        if (!isMarketRegistry(item.type)) {
            throw new Error("not a MarketRegistry type");
        }

        return MarketRegistry.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            numMarket: decodeFromFieldsWithTypes("u64", item.fields.num_market),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): MarketRegistry {
        return MarketRegistry.fromFields(MarketRegistry.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            numMarket: this.numMarket.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): MarketRegistry {
        return MarketRegistry.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            numMarket: decodeFromJSONField("u64", field.numMarket),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): MarketRegistry {
        if (json.$typeName !== MarketRegistry.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return MarketRegistry.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): MarketRegistry {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isMarketRegistry(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a MarketRegistry object`);
        }
        return MarketRegistry.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<MarketRegistry> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching MarketRegistry object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isMarketRegistry(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a MarketRegistry object`);
        }
        return MarketRegistry.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== Markets =============================== */

export function isMarkets(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x0::trading::Markets";
}

export interface MarketsFields {
    id: ToField<UID>;
    index: ToField<"u64">;
    lpTokenType: ToField<TypeName>;
    quoteTokenType: ToField<TypeName>;
    isActive: ToField<"bool">;
    symbols: ToField<Vector<TypeName>>;
    symbolMarkets: ToField<ObjectTable<ToPhantom<TypeName>, ToPhantom<SymbolMarket>>>;
    u64Padding: ToField<Vector<"u64">>;
}

export type MarketsReified = Reified<Markets, MarketsFields>;

export class Markets implements StructClass {
    static readonly $typeName = "0x0::trading::Markets";
    static readonly $numTypeParams = 0;

    readonly $typeName = Markets.$typeName;

    readonly $fullTypeName: "0x0::trading::Markets";

    readonly $typeArgs: [];

    readonly id: ToField<UID>;
    readonly index: ToField<"u64">;
    readonly lpTokenType: ToField<TypeName>;
    readonly quoteTokenType: ToField<TypeName>;
    readonly isActive: ToField<"bool">;
    readonly symbols: ToField<Vector<TypeName>>;
    readonly symbolMarkets: ToField<ObjectTable<ToPhantom<TypeName>, ToPhantom<SymbolMarket>>>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: MarketsFields) {
        this.$fullTypeName = composeSuiType(Markets.$typeName, ...typeArgs) as "0x0::trading::Markets";
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.index = fields.index;
        this.lpTokenType = fields.lpTokenType;
        this.quoteTokenType = fields.quoteTokenType;
        this.isActive = fields.isActive;
        this.symbols = fields.symbols;
        this.symbolMarkets = fields.symbolMarkets;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): MarketsReified {
        return {
            typeName: Markets.$typeName,
            fullTypeName: composeSuiType(Markets.$typeName, ...[]) as "0x0::trading::Markets",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Markets.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Markets.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Markets.fromBcs(data),
            bcs: Markets.bcs,
            fromJSONField: (field: any) => Markets.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Markets.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Markets.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => Markets.fetch(client, id),
            new: (fields: MarketsFields) => {
                return new Markets([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Markets.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<Markets>> {
        return phantom(Markets.reified());
    }
    static get p() {
        return Markets.phantom();
    }

    static get bcs() {
        return bcs.struct("Markets", {
            id: UID.bcs,
            index: bcs.u64(),
            lp_token_type: TypeName.bcs,
            quote_token_type: TypeName.bcs,
            is_active: bcs.bool(),
            symbols: bcs.vector(TypeName.bcs),
            symbol_markets: ObjectTable.bcs,
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): Markets {
        return Markets.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            index: decodeFromFields("u64", fields.index),
            lpTokenType: decodeFromFields(TypeName.reified(), fields.lp_token_type),
            quoteTokenType: decodeFromFields(TypeName.reified(), fields.quote_token_type),
            isActive: decodeFromFields("bool", fields.is_active),
            symbols: decodeFromFields(reified.vector(TypeName.reified()), fields.symbols),
            symbolMarkets: decodeFromFields(
                ObjectTable.reified(reified.phantom(TypeName.reified()), reified.phantom(SymbolMarket.reified())),
                fields.symbol_markets
            ),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Markets {
        if (!isMarkets(item.type)) {
            throw new Error("not a Markets type");
        }

        return Markets.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            lpTokenType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.lp_token_type),
            quoteTokenType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.quote_token_type),
            isActive: decodeFromFieldsWithTypes("bool", item.fields.is_active),
            symbols: decodeFromFieldsWithTypes(reified.vector(TypeName.reified()), item.fields.symbols),
            symbolMarkets: decodeFromFieldsWithTypes(
                ObjectTable.reified(reified.phantom(TypeName.reified()), reified.phantom(SymbolMarket.reified())),
                item.fields.symbol_markets
            ),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): Markets {
        return Markets.fromFields(Markets.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            index: this.index.toString(),
            lpTokenType: this.lpTokenType.toJSONField(),
            quoteTokenType: this.quoteTokenType.toJSONField(),
            isActive: this.isActive,
            symbols: fieldToJSON<Vector<TypeName>>(`vector<0x1::type_name::TypeName>`, this.symbols),
            symbolMarkets: this.symbolMarkets.toJSONField(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): Markets {
        return Markets.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            index: decodeFromJSONField("u64", field.index),
            lpTokenType: decodeFromJSONField(TypeName.reified(), field.lpTokenType),
            quoteTokenType: decodeFromJSONField(TypeName.reified(), field.quoteTokenType),
            isActive: decodeFromJSONField("bool", field.isActive),
            symbols: decodeFromJSONField(reified.vector(TypeName.reified()), field.symbols),
            symbolMarkets: decodeFromJSONField(
                ObjectTable.reified(reified.phantom(TypeName.reified()), reified.phantom(SymbolMarket.reified())),
                field.symbolMarkets
            ),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): Markets {
        if (json.$typeName !== Markets.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return Markets.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): Markets {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isMarkets(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Markets object`);
        }
        return Markets.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<Markets> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Markets object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isMarkets(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Markets object`);
        }
        return Markets.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== MatchTradingOrderEvent =============================== */

export function isMatchTradingOrderEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x0::trading::MatchTradingOrderEvent";
}

export interface MatchTradingOrderEventFields {
    sender: ToField<"address">;
    collateralToken: ToField<TypeName>;
    baseToken: ToField<TypeName>;
    matchedOrderIds: ToField<Vector<Vector<"u64">>>;
    u64Padding: ToField<Vector<"u64">>;
}

export type MatchTradingOrderEventReified = Reified<MatchTradingOrderEvent, MatchTradingOrderEventFields>;

export class MatchTradingOrderEvent implements StructClass {
    static readonly $typeName = "0x0::trading::MatchTradingOrderEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = MatchTradingOrderEvent.$typeName;

    readonly $fullTypeName: "0x0::trading::MatchTradingOrderEvent";

    readonly $typeArgs: [];

    readonly sender: ToField<"address">;
    readonly collateralToken: ToField<TypeName>;
    readonly baseToken: ToField<TypeName>;
    readonly matchedOrderIds: ToField<Vector<Vector<"u64">>>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: MatchTradingOrderEventFields) {
        this.$fullTypeName = composeSuiType(MatchTradingOrderEvent.$typeName, ...typeArgs) as "0x0::trading::MatchTradingOrderEvent";
        this.$typeArgs = typeArgs;

        this.sender = fields.sender;
        this.collateralToken = fields.collateralToken;
        this.baseToken = fields.baseToken;
        this.matchedOrderIds = fields.matchedOrderIds;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): MatchTradingOrderEventReified {
        return {
            typeName: MatchTradingOrderEvent.$typeName,
            fullTypeName: composeSuiType(MatchTradingOrderEvent.$typeName, ...[]) as "0x0::trading::MatchTradingOrderEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => MatchTradingOrderEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => MatchTradingOrderEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => MatchTradingOrderEvent.fromBcs(data),
            bcs: MatchTradingOrderEvent.bcs,
            fromJSONField: (field: any) => MatchTradingOrderEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => MatchTradingOrderEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => MatchTradingOrderEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => MatchTradingOrderEvent.fetch(client, id),
            new: (fields: MatchTradingOrderEventFields) => {
                return new MatchTradingOrderEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return MatchTradingOrderEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<MatchTradingOrderEvent>> {
        return phantom(MatchTradingOrderEvent.reified());
    }
    static get p() {
        return MatchTradingOrderEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("MatchTradingOrderEvent", {
            sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            collateral_token: TypeName.bcs,
            base_token: TypeName.bcs,
            matched_order_ids: bcs.vector(bcs.vector(bcs.u64())),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): MatchTradingOrderEvent {
        return MatchTradingOrderEvent.reified().new({
            sender: decodeFromFields("address", fields.sender),
            collateralToken: decodeFromFields(TypeName.reified(), fields.collateral_token),
            baseToken: decodeFromFields(TypeName.reified(), fields.base_token),
            matchedOrderIds: decodeFromFields(reified.vector(reified.vector("u64")), fields.matched_order_ids),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): MatchTradingOrderEvent {
        if (!isMatchTradingOrderEvent(item.type)) {
            throw new Error("not a MatchTradingOrderEvent type");
        }

        return MatchTradingOrderEvent.reified().new({
            sender: decodeFromFieldsWithTypes("address", item.fields.sender),
            collateralToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.collateral_token),
            baseToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.base_token),
            matchedOrderIds: decodeFromFieldsWithTypes(reified.vector(reified.vector("u64")), item.fields.matched_order_ids),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): MatchTradingOrderEvent {
        return MatchTradingOrderEvent.fromFields(MatchTradingOrderEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            sender: this.sender,
            collateralToken: this.collateralToken.toJSONField(),
            baseToken: this.baseToken.toJSONField(),
            matchedOrderIds: fieldToJSON<Vector<Vector<"u64">>>(`vector<vector<u64>>`, this.matchedOrderIds),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): MatchTradingOrderEvent {
        return MatchTradingOrderEvent.reified().new({
            sender: decodeFromJSONField("address", field.sender),
            collateralToken: decodeFromJSONField(TypeName.reified(), field.collateralToken),
            baseToken: decodeFromJSONField(TypeName.reified(), field.baseToken),
            matchedOrderIds: decodeFromJSONField(reified.vector(reified.vector("u64")), field.matchedOrderIds),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): MatchTradingOrderEvent {
        if (json.$typeName !== MatchTradingOrderEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return MatchTradingOrderEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): MatchTradingOrderEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isMatchTradingOrderEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a MatchTradingOrderEvent object`);
        }
        return MatchTradingOrderEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<MatchTradingOrderEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching MatchTradingOrderEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isMatchTradingOrderEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a MatchTradingOrderEvent object`);
        }
        return MatchTradingOrderEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== NewMarketsEvent =============================== */

export function isNewMarketsEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x0::trading::NewMarketsEvent";
}

export interface NewMarketsEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    lpTokenType: ToField<TypeName>;
    quoteTokenType: ToField<TypeName>;
    u64Padding: ToField<Vector<"u64">>;
}

export type NewMarketsEventReified = Reified<NewMarketsEvent, NewMarketsEventFields>;

export class NewMarketsEvent implements StructClass {
    static readonly $typeName = "0x0::trading::NewMarketsEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = NewMarketsEvent.$typeName;

    readonly $fullTypeName: "0x0::trading::NewMarketsEvent";

    readonly $typeArgs: [];

    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly lpTokenType: ToField<TypeName>;
    readonly quoteTokenType: ToField<TypeName>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: NewMarketsEventFields) {
        this.$fullTypeName = composeSuiType(NewMarketsEvent.$typeName, ...typeArgs) as "0x0::trading::NewMarketsEvent";
        this.$typeArgs = typeArgs;

        this.sender = fields.sender;
        this.index = fields.index;
        this.lpTokenType = fields.lpTokenType;
        this.quoteTokenType = fields.quoteTokenType;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): NewMarketsEventReified {
        return {
            typeName: NewMarketsEvent.$typeName,
            fullTypeName: composeSuiType(NewMarketsEvent.$typeName, ...[]) as "0x0::trading::NewMarketsEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => NewMarketsEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => NewMarketsEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => NewMarketsEvent.fromBcs(data),
            bcs: NewMarketsEvent.bcs,
            fromJSONField: (field: any) => NewMarketsEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => NewMarketsEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => NewMarketsEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => NewMarketsEvent.fetch(client, id),
            new: (fields: NewMarketsEventFields) => {
                return new NewMarketsEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return NewMarketsEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<NewMarketsEvent>> {
        return phantom(NewMarketsEvent.reified());
    }
    static get p() {
        return NewMarketsEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("NewMarketsEvent", {
            sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            index: bcs.u64(),
            lp_token_type: TypeName.bcs,
            quote_token_type: TypeName.bcs,
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): NewMarketsEvent {
        return NewMarketsEvent.reified().new({
            sender: decodeFromFields("address", fields.sender),
            index: decodeFromFields("u64", fields.index),
            lpTokenType: decodeFromFields(TypeName.reified(), fields.lp_token_type),
            quoteTokenType: decodeFromFields(TypeName.reified(), fields.quote_token_type),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): NewMarketsEvent {
        if (!isNewMarketsEvent(item.type)) {
            throw new Error("not a NewMarketsEvent type");
        }

        return NewMarketsEvent.reified().new({
            sender: decodeFromFieldsWithTypes("address", item.fields.sender),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            lpTokenType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.lp_token_type),
            quoteTokenType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.quote_token_type),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): NewMarketsEvent {
        return NewMarketsEvent.fromFields(NewMarketsEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            sender: this.sender,
            index: this.index.toString(),
            lpTokenType: this.lpTokenType.toJSONField(),
            quoteTokenType: this.quoteTokenType.toJSONField(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): NewMarketsEvent {
        return NewMarketsEvent.reified().new({
            sender: decodeFromJSONField("address", field.sender),
            index: decodeFromJSONField("u64", field.index),
            lpTokenType: decodeFromJSONField(TypeName.reified(), field.lpTokenType),
            quoteTokenType: decodeFromJSONField(TypeName.reified(), field.quoteTokenType),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): NewMarketsEvent {
        if (json.$typeName !== NewMarketsEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return NewMarketsEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): NewMarketsEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isNewMarketsEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a NewMarketsEvent object`);
        }
        return NewMarketsEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<NewMarketsEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching NewMarketsEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isNewMarketsEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a NewMarketsEvent object`);
        }
        return NewMarketsEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== ReferralInfo =============================== */

export function isReferralInfo(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x0::trading::ReferralInfo";
}

export interface ReferralInfoFields {
    invitedFrom: ToField<"address">;
    feeRebateBp: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type ReferralInfoReified = Reified<ReferralInfo, ReferralInfoFields>;

export class ReferralInfo implements StructClass {
    static readonly $typeName = "0x0::trading::ReferralInfo";
    static readonly $numTypeParams = 0;

    readonly $typeName = ReferralInfo.$typeName;

    readonly $fullTypeName: "0x0::trading::ReferralInfo";

    readonly $typeArgs: [];

    readonly invitedFrom: ToField<"address">;
    readonly feeRebateBp: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: ReferralInfoFields) {
        this.$fullTypeName = composeSuiType(ReferralInfo.$typeName, ...typeArgs) as "0x0::trading::ReferralInfo";
        this.$typeArgs = typeArgs;

        this.invitedFrom = fields.invitedFrom;
        this.feeRebateBp = fields.feeRebateBp;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): ReferralInfoReified {
        return {
            typeName: ReferralInfo.$typeName,
            fullTypeName: composeSuiType(ReferralInfo.$typeName, ...[]) as "0x0::trading::ReferralInfo",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => ReferralInfo.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => ReferralInfo.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => ReferralInfo.fromBcs(data),
            bcs: ReferralInfo.bcs,
            fromJSONField: (field: any) => ReferralInfo.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => ReferralInfo.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => ReferralInfo.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => ReferralInfo.fetch(client, id),
            new: (fields: ReferralInfoFields) => {
                return new ReferralInfo([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return ReferralInfo.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<ReferralInfo>> {
        return phantom(ReferralInfo.reified());
    }
    static get p() {
        return ReferralInfo.phantom();
    }

    static get bcs() {
        return bcs.struct("ReferralInfo", {
            invited_from: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            fee_rebate_bp: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): ReferralInfo {
        return ReferralInfo.reified().new({
            invitedFrom: decodeFromFields("address", fields.invited_from),
            feeRebateBp: decodeFromFields("u64", fields.fee_rebate_bp),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): ReferralInfo {
        if (!isReferralInfo(item.type)) {
            throw new Error("not a ReferralInfo type");
        }

        return ReferralInfo.reified().new({
            invitedFrom: decodeFromFieldsWithTypes("address", item.fields.invited_from),
            feeRebateBp: decodeFromFieldsWithTypes("u64", item.fields.fee_rebate_bp),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): ReferralInfo {
        return ReferralInfo.fromFields(ReferralInfo.bcs.parse(data));
    }

    toJSONField() {
        return {
            invitedFrom: this.invitedFrom,
            feeRebateBp: this.feeRebateBp.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): ReferralInfo {
        return ReferralInfo.reified().new({
            invitedFrom: decodeFromJSONField("address", field.invitedFrom),
            feeRebateBp: decodeFromJSONField("u64", field.feeRebateBp),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): ReferralInfo {
        if (json.$typeName !== ReferralInfo.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return ReferralInfo.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): ReferralInfo {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isReferralInfo(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a ReferralInfo object`);
        }
        return ReferralInfo.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<ReferralInfo> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching ReferralInfo object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isReferralInfo(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ReferralInfo object`);
        }
        return ReferralInfo.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== Referrals =============================== */

export function isReferrals(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x0::trading::Referrals";
}

export interface ReferralsFields {
    id: ToField<UID>;
    referrals: ToField<Table<"address", ToPhantom<ReferralInfo>>>;
    u64Padding: ToField<Vector<"u64">>;
}

export type ReferralsReified = Reified<Referrals, ReferralsFields>;

export class Referrals implements StructClass {
    static readonly $typeName = "0x0::trading::Referrals";
    static readonly $numTypeParams = 0;

    readonly $typeName = Referrals.$typeName;

    readonly $fullTypeName: "0x0::trading::Referrals";

    readonly $typeArgs: [];

    readonly id: ToField<UID>;
    readonly referrals: ToField<Table<"address", ToPhantom<ReferralInfo>>>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: ReferralsFields) {
        this.$fullTypeName = composeSuiType(Referrals.$typeName, ...typeArgs) as "0x0::trading::Referrals";
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.referrals = fields.referrals;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): ReferralsReified {
        return {
            typeName: Referrals.$typeName,
            fullTypeName: composeSuiType(Referrals.$typeName, ...[]) as "0x0::trading::Referrals",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Referrals.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Referrals.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Referrals.fromBcs(data),
            bcs: Referrals.bcs,
            fromJSONField: (field: any) => Referrals.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Referrals.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Referrals.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => Referrals.fetch(client, id),
            new: (fields: ReferralsFields) => {
                return new Referrals([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Referrals.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<Referrals>> {
        return phantom(Referrals.reified());
    }
    static get p() {
        return Referrals.phantom();
    }

    static get bcs() {
        return bcs.struct("Referrals", {
            id: UID.bcs,
            referrals: Table.bcs,
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): Referrals {
        return Referrals.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            referrals: decodeFromFields(
                Table.reified(reified.phantom("address"), reified.phantom(ReferralInfo.reified())),
                fields.referrals
            ),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Referrals {
        if (!isReferrals(item.type)) {
            throw new Error("not a Referrals type");
        }

        return Referrals.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            referrals: decodeFromFieldsWithTypes(
                Table.reified(reified.phantom("address"), reified.phantom(ReferralInfo.reified())),
                item.fields.referrals
            ),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): Referrals {
        return Referrals.fromFields(Referrals.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            referrals: this.referrals.toJSONField(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): Referrals {
        return Referrals.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            referrals: decodeFromJSONField(
                Table.reified(reified.phantom("address"), reified.phantom(ReferralInfo.reified())),
                field.referrals
            ),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): Referrals {
        if (json.$typeName !== Referrals.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return Referrals.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): Referrals {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isReferrals(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Referrals object`);
        }
        return Referrals.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<Referrals> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Referrals object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isReferrals(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Referrals object`);
        }
        return Referrals.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== ResumeMarketEvent =============================== */

export function isResumeMarketEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x0::trading::ResumeMarketEvent";
}

export interface ResumeMarketEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type ResumeMarketEventReified = Reified<ResumeMarketEvent, ResumeMarketEventFields>;

export class ResumeMarketEvent implements StructClass {
    static readonly $typeName = "0x0::trading::ResumeMarketEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = ResumeMarketEvent.$typeName;

    readonly $fullTypeName: "0x0::trading::ResumeMarketEvent";

    readonly $typeArgs: [];

    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: ResumeMarketEventFields) {
        this.$fullTypeName = composeSuiType(ResumeMarketEvent.$typeName, ...typeArgs) as "0x0::trading::ResumeMarketEvent";
        this.$typeArgs = typeArgs;

        this.sender = fields.sender;
        this.index = fields.index;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): ResumeMarketEventReified {
        return {
            typeName: ResumeMarketEvent.$typeName,
            fullTypeName: composeSuiType(ResumeMarketEvent.$typeName, ...[]) as "0x0::trading::ResumeMarketEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => ResumeMarketEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => ResumeMarketEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => ResumeMarketEvent.fromBcs(data),
            bcs: ResumeMarketEvent.bcs,
            fromJSONField: (field: any) => ResumeMarketEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => ResumeMarketEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => ResumeMarketEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => ResumeMarketEvent.fetch(client, id),
            new: (fields: ResumeMarketEventFields) => {
                return new ResumeMarketEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return ResumeMarketEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<ResumeMarketEvent>> {
        return phantom(ResumeMarketEvent.reified());
    }
    static get p() {
        return ResumeMarketEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("ResumeMarketEvent", {
            sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            index: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): ResumeMarketEvent {
        return ResumeMarketEvent.reified().new({
            sender: decodeFromFields("address", fields.sender),
            index: decodeFromFields("u64", fields.index),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): ResumeMarketEvent {
        if (!isResumeMarketEvent(item.type)) {
            throw new Error("not a ResumeMarketEvent type");
        }

        return ResumeMarketEvent.reified().new({
            sender: decodeFromFieldsWithTypes("address", item.fields.sender),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): ResumeMarketEvent {
        return ResumeMarketEvent.fromFields(ResumeMarketEvent.bcs.parse(data));
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

    static fromJSONField(field: any): ResumeMarketEvent {
        return ResumeMarketEvent.reified().new({
            sender: decodeFromJSONField("address", field.sender),
            index: decodeFromJSONField("u64", field.index),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): ResumeMarketEvent {
        if (json.$typeName !== ResumeMarketEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return ResumeMarketEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): ResumeMarketEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isResumeMarketEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a ResumeMarketEvent object`);
        }
        return ResumeMarketEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<ResumeMarketEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching ResumeMarketEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isResumeMarketEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ResumeMarketEvent object`);
        }
        return ResumeMarketEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== ResumeTradingSymbolEvent =============================== */

export function isResumeTradingSymbolEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x0::trading::ResumeTradingSymbolEvent";
}

export interface ResumeTradingSymbolEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    resumedBaseToken: ToField<TypeName>;
    u64Padding: ToField<Vector<"u64">>;
}

export type ResumeTradingSymbolEventReified = Reified<ResumeTradingSymbolEvent, ResumeTradingSymbolEventFields>;

export class ResumeTradingSymbolEvent implements StructClass {
    static readonly $typeName = "0x0::trading::ResumeTradingSymbolEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = ResumeTradingSymbolEvent.$typeName;

    readonly $fullTypeName: "0x0::trading::ResumeTradingSymbolEvent";

    readonly $typeArgs: [];

    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly resumedBaseToken: ToField<TypeName>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: ResumeTradingSymbolEventFields) {
        this.$fullTypeName = composeSuiType(ResumeTradingSymbolEvent.$typeName, ...typeArgs) as "0x0::trading::ResumeTradingSymbolEvent";
        this.$typeArgs = typeArgs;

        this.sender = fields.sender;
        this.index = fields.index;
        this.resumedBaseToken = fields.resumedBaseToken;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): ResumeTradingSymbolEventReified {
        return {
            typeName: ResumeTradingSymbolEvent.$typeName,
            fullTypeName: composeSuiType(ResumeTradingSymbolEvent.$typeName, ...[]) as "0x0::trading::ResumeTradingSymbolEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => ResumeTradingSymbolEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => ResumeTradingSymbolEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => ResumeTradingSymbolEvent.fromBcs(data),
            bcs: ResumeTradingSymbolEvent.bcs,
            fromJSONField: (field: any) => ResumeTradingSymbolEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => ResumeTradingSymbolEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => ResumeTradingSymbolEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => ResumeTradingSymbolEvent.fetch(client, id),
            new: (fields: ResumeTradingSymbolEventFields) => {
                return new ResumeTradingSymbolEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return ResumeTradingSymbolEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<ResumeTradingSymbolEvent>> {
        return phantom(ResumeTradingSymbolEvent.reified());
    }
    static get p() {
        return ResumeTradingSymbolEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("ResumeTradingSymbolEvent", {
            sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            index: bcs.u64(),
            resumed_base_token: TypeName.bcs,
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): ResumeTradingSymbolEvent {
        return ResumeTradingSymbolEvent.reified().new({
            sender: decodeFromFields("address", fields.sender),
            index: decodeFromFields("u64", fields.index),
            resumedBaseToken: decodeFromFields(TypeName.reified(), fields.resumed_base_token),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): ResumeTradingSymbolEvent {
        if (!isResumeTradingSymbolEvent(item.type)) {
            throw new Error("not a ResumeTradingSymbolEvent type");
        }

        return ResumeTradingSymbolEvent.reified().new({
            sender: decodeFromFieldsWithTypes("address", item.fields.sender),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            resumedBaseToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.resumed_base_token),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): ResumeTradingSymbolEvent {
        return ResumeTradingSymbolEvent.fromFields(ResumeTradingSymbolEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            sender: this.sender,
            index: this.index.toString(),
            resumedBaseToken: this.resumedBaseToken.toJSONField(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): ResumeTradingSymbolEvent {
        return ResumeTradingSymbolEvent.reified().new({
            sender: decodeFromJSONField("address", field.sender),
            index: decodeFromJSONField("u64", field.index),
            resumedBaseToken: decodeFromJSONField(TypeName.reified(), field.resumedBaseToken),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): ResumeTradingSymbolEvent {
        if (json.$typeName !== ResumeTradingSymbolEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return ResumeTradingSymbolEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): ResumeTradingSymbolEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isResumeTradingSymbolEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a ResumeTradingSymbolEvent object`);
        }
        return ResumeTradingSymbolEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<ResumeTradingSymbolEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching ResumeTradingSymbolEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isResumeTradingSymbolEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ResumeTradingSymbolEvent object`);
        }
        return ResumeTradingSymbolEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== SuspendMarketEvent =============================== */

export function isSuspendMarketEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x0::trading::SuspendMarketEvent";
}

export interface SuspendMarketEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type SuspendMarketEventReified = Reified<SuspendMarketEvent, SuspendMarketEventFields>;

export class SuspendMarketEvent implements StructClass {
    static readonly $typeName = "0x0::trading::SuspendMarketEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = SuspendMarketEvent.$typeName;

    readonly $fullTypeName: "0x0::trading::SuspendMarketEvent";

    readonly $typeArgs: [];

    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: SuspendMarketEventFields) {
        this.$fullTypeName = composeSuiType(SuspendMarketEvent.$typeName, ...typeArgs) as "0x0::trading::SuspendMarketEvent";
        this.$typeArgs = typeArgs;

        this.sender = fields.sender;
        this.index = fields.index;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): SuspendMarketEventReified {
        return {
            typeName: SuspendMarketEvent.$typeName,
            fullTypeName: composeSuiType(SuspendMarketEvent.$typeName, ...[]) as "0x0::trading::SuspendMarketEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => SuspendMarketEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => SuspendMarketEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => SuspendMarketEvent.fromBcs(data),
            bcs: SuspendMarketEvent.bcs,
            fromJSONField: (field: any) => SuspendMarketEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => SuspendMarketEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => SuspendMarketEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => SuspendMarketEvent.fetch(client, id),
            new: (fields: SuspendMarketEventFields) => {
                return new SuspendMarketEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return SuspendMarketEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<SuspendMarketEvent>> {
        return phantom(SuspendMarketEvent.reified());
    }
    static get p() {
        return SuspendMarketEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("SuspendMarketEvent", {
            sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            index: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): SuspendMarketEvent {
        return SuspendMarketEvent.reified().new({
            sender: decodeFromFields("address", fields.sender),
            index: decodeFromFields("u64", fields.index),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): SuspendMarketEvent {
        if (!isSuspendMarketEvent(item.type)) {
            throw new Error("not a SuspendMarketEvent type");
        }

        return SuspendMarketEvent.reified().new({
            sender: decodeFromFieldsWithTypes("address", item.fields.sender),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): SuspendMarketEvent {
        return SuspendMarketEvent.fromFields(SuspendMarketEvent.bcs.parse(data));
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

    static fromJSONField(field: any): SuspendMarketEvent {
        return SuspendMarketEvent.reified().new({
            sender: decodeFromJSONField("address", field.sender),
            index: decodeFromJSONField("u64", field.index),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): SuspendMarketEvent {
        if (json.$typeName !== SuspendMarketEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return SuspendMarketEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): SuspendMarketEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isSuspendMarketEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a SuspendMarketEvent object`);
        }
        return SuspendMarketEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<SuspendMarketEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching SuspendMarketEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isSuspendMarketEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SuspendMarketEvent object`);
        }
        return SuspendMarketEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== SuspendTradingSymbolEvent =============================== */

export function isSuspendTradingSymbolEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x0::trading::SuspendTradingSymbolEvent";
}

export interface SuspendTradingSymbolEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    suspendedBaseToken: ToField<TypeName>;
    u64Padding: ToField<Vector<"u64">>;
}

export type SuspendTradingSymbolEventReified = Reified<SuspendTradingSymbolEvent, SuspendTradingSymbolEventFields>;

export class SuspendTradingSymbolEvent implements StructClass {
    static readonly $typeName = "0x0::trading::SuspendTradingSymbolEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = SuspendTradingSymbolEvent.$typeName;

    readonly $fullTypeName: "0x0::trading::SuspendTradingSymbolEvent";

    readonly $typeArgs: [];

    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly suspendedBaseToken: ToField<TypeName>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: SuspendTradingSymbolEventFields) {
        this.$fullTypeName = composeSuiType(SuspendTradingSymbolEvent.$typeName, ...typeArgs) as "0x0::trading::SuspendTradingSymbolEvent";
        this.$typeArgs = typeArgs;

        this.sender = fields.sender;
        this.index = fields.index;
        this.suspendedBaseToken = fields.suspendedBaseToken;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): SuspendTradingSymbolEventReified {
        return {
            typeName: SuspendTradingSymbolEvent.$typeName,
            fullTypeName: composeSuiType(SuspendTradingSymbolEvent.$typeName, ...[]) as "0x0::trading::SuspendTradingSymbolEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => SuspendTradingSymbolEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => SuspendTradingSymbolEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => SuspendTradingSymbolEvent.fromBcs(data),
            bcs: SuspendTradingSymbolEvent.bcs,
            fromJSONField: (field: any) => SuspendTradingSymbolEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => SuspendTradingSymbolEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => SuspendTradingSymbolEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => SuspendTradingSymbolEvent.fetch(client, id),
            new: (fields: SuspendTradingSymbolEventFields) => {
                return new SuspendTradingSymbolEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return SuspendTradingSymbolEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<SuspendTradingSymbolEvent>> {
        return phantom(SuspendTradingSymbolEvent.reified());
    }
    static get p() {
        return SuspendTradingSymbolEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("SuspendTradingSymbolEvent", {
            sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            index: bcs.u64(),
            suspended_base_token: TypeName.bcs,
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): SuspendTradingSymbolEvent {
        return SuspendTradingSymbolEvent.reified().new({
            sender: decodeFromFields("address", fields.sender),
            index: decodeFromFields("u64", fields.index),
            suspendedBaseToken: decodeFromFields(TypeName.reified(), fields.suspended_base_token),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): SuspendTradingSymbolEvent {
        if (!isSuspendTradingSymbolEvent(item.type)) {
            throw new Error("not a SuspendTradingSymbolEvent type");
        }

        return SuspendTradingSymbolEvent.reified().new({
            sender: decodeFromFieldsWithTypes("address", item.fields.sender),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            suspendedBaseToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.suspended_base_token),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): SuspendTradingSymbolEvent {
        return SuspendTradingSymbolEvent.fromFields(SuspendTradingSymbolEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            sender: this.sender,
            index: this.index.toString(),
            suspendedBaseToken: this.suspendedBaseToken.toJSONField(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): SuspendTradingSymbolEvent {
        return SuspendTradingSymbolEvent.reified().new({
            sender: decodeFromJSONField("address", field.sender),
            index: decodeFromJSONField("u64", field.index),
            suspendedBaseToken: decodeFromJSONField(TypeName.reified(), field.suspendedBaseToken),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): SuspendTradingSymbolEvent {
        if (json.$typeName !== SuspendTradingSymbolEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return SuspendTradingSymbolEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): SuspendTradingSymbolEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isSuspendTradingSymbolEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a SuspendTradingSymbolEvent object`);
        }
        return SuspendTradingSymbolEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<SuspendTradingSymbolEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching SuspendTradingSymbolEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isSuspendTradingSymbolEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SuspendTradingSymbolEvent object`);
        }
        return SuspendTradingSymbolEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== SymbolMarket =============================== */

export function isSymbolMarket(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x0::trading::SymbolMarket";
}

export interface SymbolMarketFields {
    id: ToField<UID>;
    userPositions: ToField<UID>;
    userOrders: ToField<UID>;
    marketInfo: ToField<MarketInfo>;
    marketConfig: ToField<MarketConfig>;
}

export type SymbolMarketReified = Reified<SymbolMarket, SymbolMarketFields>;

export class SymbolMarket implements StructClass {
    static readonly $typeName = "0x0::trading::SymbolMarket";
    static readonly $numTypeParams = 0;

    readonly $typeName = SymbolMarket.$typeName;

    readonly $fullTypeName: "0x0::trading::SymbolMarket";

    readonly $typeArgs: [];

    readonly id: ToField<UID>;
    readonly userPositions: ToField<UID>;
    readonly userOrders: ToField<UID>;
    readonly marketInfo: ToField<MarketInfo>;
    readonly marketConfig: ToField<MarketConfig>;

    private constructor(typeArgs: [], fields: SymbolMarketFields) {
        this.$fullTypeName = composeSuiType(SymbolMarket.$typeName, ...typeArgs) as "0x0::trading::SymbolMarket";
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.userPositions = fields.userPositions;
        this.userOrders = fields.userOrders;
        this.marketInfo = fields.marketInfo;
        this.marketConfig = fields.marketConfig;
    }

    static reified(): SymbolMarketReified {
        return {
            typeName: SymbolMarket.$typeName,
            fullTypeName: composeSuiType(SymbolMarket.$typeName, ...[]) as "0x0::trading::SymbolMarket",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => SymbolMarket.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => SymbolMarket.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => SymbolMarket.fromBcs(data),
            bcs: SymbolMarket.bcs,
            fromJSONField: (field: any) => SymbolMarket.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => SymbolMarket.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => SymbolMarket.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => SymbolMarket.fetch(client, id),
            new: (fields: SymbolMarketFields) => {
                return new SymbolMarket([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return SymbolMarket.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<SymbolMarket>> {
        return phantom(SymbolMarket.reified());
    }
    static get p() {
        return SymbolMarket.phantom();
    }

    static get bcs() {
        return bcs.struct("SymbolMarket", {
            id: UID.bcs,
            user_positions: UID.bcs,
            user_orders: UID.bcs,
            market_info: MarketInfo.bcs,
            market_config: MarketConfig.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): SymbolMarket {
        return SymbolMarket.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            userPositions: decodeFromFields(UID.reified(), fields.user_positions),
            userOrders: decodeFromFields(UID.reified(), fields.user_orders),
            marketInfo: decodeFromFields(MarketInfo.reified(), fields.market_info),
            marketConfig: decodeFromFields(MarketConfig.reified(), fields.market_config),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): SymbolMarket {
        if (!isSymbolMarket(item.type)) {
            throw new Error("not a SymbolMarket type");
        }

        return SymbolMarket.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            userPositions: decodeFromFieldsWithTypes(UID.reified(), item.fields.user_positions),
            userOrders: decodeFromFieldsWithTypes(UID.reified(), item.fields.user_orders),
            marketInfo: decodeFromFieldsWithTypes(MarketInfo.reified(), item.fields.market_info),
            marketConfig: decodeFromFieldsWithTypes(MarketConfig.reified(), item.fields.market_config),
        });
    }

    static fromBcs(data: Uint8Array): SymbolMarket {
        return SymbolMarket.fromFields(SymbolMarket.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            userPositions: this.userPositions,
            userOrders: this.userOrders,
            marketInfo: this.marketInfo.toJSONField(),
            marketConfig: this.marketConfig.toJSONField(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): SymbolMarket {
        return SymbolMarket.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            userPositions: decodeFromJSONField(UID.reified(), field.userPositions),
            userOrders: decodeFromJSONField(UID.reified(), field.userOrders),
            marketInfo: decodeFromJSONField(MarketInfo.reified(), field.marketInfo),
            marketConfig: decodeFromJSONField(MarketConfig.reified(), field.marketConfig),
        });
    }

    static fromJSON(json: Record<string, any>): SymbolMarket {
        if (json.$typeName !== SymbolMarket.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return SymbolMarket.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): SymbolMarket {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isSymbolMarket(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a SymbolMarket object`);
        }
        return SymbolMarket.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<SymbolMarket> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching SymbolMarket object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isSymbolMarket(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SymbolMarket object`);
        }
        return SymbolMarket.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== UpdateMarketConfigEvent =============================== */

export function isUpdateMarketConfigEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x0::trading::UpdateMarketConfigEvent";
}

export interface UpdateMarketConfigEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    baseTokenType: ToField<TypeName>;
    previousMarketConfig: ToField<MarketConfig>;
    newMarketConfig: ToField<MarketConfig>;
    u64Padding: ToField<Vector<"u64">>;
}

export type UpdateMarketConfigEventReified = Reified<UpdateMarketConfigEvent, UpdateMarketConfigEventFields>;

export class UpdateMarketConfigEvent implements StructClass {
    static readonly $typeName = "0x0::trading::UpdateMarketConfigEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = UpdateMarketConfigEvent.$typeName;

    readonly $fullTypeName: "0x0::trading::UpdateMarketConfigEvent";

    readonly $typeArgs: [];

    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly baseTokenType: ToField<TypeName>;
    readonly previousMarketConfig: ToField<MarketConfig>;
    readonly newMarketConfig: ToField<MarketConfig>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: UpdateMarketConfigEventFields) {
        this.$fullTypeName = composeSuiType(UpdateMarketConfigEvent.$typeName, ...typeArgs) as "0x0::trading::UpdateMarketConfigEvent";
        this.$typeArgs = typeArgs;

        this.sender = fields.sender;
        this.index = fields.index;
        this.baseTokenType = fields.baseTokenType;
        this.previousMarketConfig = fields.previousMarketConfig;
        this.newMarketConfig = fields.newMarketConfig;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): UpdateMarketConfigEventReified {
        return {
            typeName: UpdateMarketConfigEvent.$typeName,
            fullTypeName: composeSuiType(UpdateMarketConfigEvent.$typeName, ...[]) as "0x0::trading::UpdateMarketConfigEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => UpdateMarketConfigEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => UpdateMarketConfigEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => UpdateMarketConfigEvent.fromBcs(data),
            bcs: UpdateMarketConfigEvent.bcs,
            fromJSONField: (field: any) => UpdateMarketConfigEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => UpdateMarketConfigEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => UpdateMarketConfigEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => UpdateMarketConfigEvent.fetch(client, id),
            new: (fields: UpdateMarketConfigEventFields) => {
                return new UpdateMarketConfigEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return UpdateMarketConfigEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<UpdateMarketConfigEvent>> {
        return phantom(UpdateMarketConfigEvent.reified());
    }
    static get p() {
        return UpdateMarketConfigEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("UpdateMarketConfigEvent", {
            sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            index: bcs.u64(),
            base_token_type: TypeName.bcs,
            previous_market_config: MarketConfig.bcs,
            new_market_config: MarketConfig.bcs,
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): UpdateMarketConfigEvent {
        return UpdateMarketConfigEvent.reified().new({
            sender: decodeFromFields("address", fields.sender),
            index: decodeFromFields("u64", fields.index),
            baseTokenType: decodeFromFields(TypeName.reified(), fields.base_token_type),
            previousMarketConfig: decodeFromFields(MarketConfig.reified(), fields.previous_market_config),
            newMarketConfig: decodeFromFields(MarketConfig.reified(), fields.new_market_config),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): UpdateMarketConfigEvent {
        if (!isUpdateMarketConfigEvent(item.type)) {
            throw new Error("not a UpdateMarketConfigEvent type");
        }

        return UpdateMarketConfigEvent.reified().new({
            sender: decodeFromFieldsWithTypes("address", item.fields.sender),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            baseTokenType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.base_token_type),
            previousMarketConfig: decodeFromFieldsWithTypes(MarketConfig.reified(), item.fields.previous_market_config),
            newMarketConfig: decodeFromFieldsWithTypes(MarketConfig.reified(), item.fields.new_market_config),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): UpdateMarketConfigEvent {
        return UpdateMarketConfigEvent.fromFields(UpdateMarketConfigEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            sender: this.sender,
            index: this.index.toString(),
            baseTokenType: this.baseTokenType.toJSONField(),
            previousMarketConfig: this.previousMarketConfig.toJSONField(),
            newMarketConfig: this.newMarketConfig.toJSONField(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): UpdateMarketConfigEvent {
        return UpdateMarketConfigEvent.reified().new({
            sender: decodeFromJSONField("address", field.sender),
            index: decodeFromJSONField("u64", field.index),
            baseTokenType: decodeFromJSONField(TypeName.reified(), field.baseTokenType),
            previousMarketConfig: decodeFromJSONField(MarketConfig.reified(), field.previousMarketConfig),
            newMarketConfig: decodeFromJSONField(MarketConfig.reified(), field.newMarketConfig),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): UpdateMarketConfigEvent {
        if (json.$typeName !== UpdateMarketConfigEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return UpdateMarketConfigEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): UpdateMarketConfigEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUpdateMarketConfigEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a UpdateMarketConfigEvent object`);
        }
        return UpdateMarketConfigEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<UpdateMarketConfigEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching UpdateMarketConfigEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isUpdateMarketConfigEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UpdateMarketConfigEvent object`);
        }
        return UpdateMarketConfigEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== UserOrders =============================== */

export function isUserOrders(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x0::trading::UserOrders";
}

export interface UserOrdersFields {
    id: ToField<UID>;
}

export type UserOrdersReified = Reified<UserOrders, UserOrdersFields>;

export class UserOrders implements StructClass {
    static readonly $typeName = "0x0::trading::UserOrders";
    static readonly $numTypeParams = 0;

    readonly $typeName = UserOrders.$typeName;

    readonly $fullTypeName: "0x0::trading::UserOrders";

    readonly $typeArgs: [];

    readonly id: ToField<UID>;

    private constructor(typeArgs: [], fields: UserOrdersFields) {
        this.$fullTypeName = composeSuiType(UserOrders.$typeName, ...typeArgs) as "0x0::trading::UserOrders";
        this.$typeArgs = typeArgs;

        this.id = fields.id;
    }

    static reified(): UserOrdersReified {
        return {
            typeName: UserOrders.$typeName,
            fullTypeName: composeSuiType(UserOrders.$typeName, ...[]) as "0x0::trading::UserOrders",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => UserOrders.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => UserOrders.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => UserOrders.fromBcs(data),
            bcs: UserOrders.bcs,
            fromJSONField: (field: any) => UserOrders.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => UserOrders.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => UserOrders.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => UserOrders.fetch(client, id),
            new: (fields: UserOrdersFields) => {
                return new UserOrders([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return UserOrders.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<UserOrders>> {
        return phantom(UserOrders.reified());
    }
    static get p() {
        return UserOrders.phantom();
    }

    static get bcs() {
        return bcs.struct("UserOrders", {
            id: UID.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): UserOrders {
        return UserOrders.reified().new({ id: decodeFromFields(UID.reified(), fields.id) });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): UserOrders {
        if (!isUserOrders(item.type)) {
            throw new Error("not a UserOrders type");
        }

        return UserOrders.reified().new({ id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id) });
    }

    static fromBcs(data: Uint8Array): UserOrders {
        return UserOrders.fromFields(UserOrders.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): UserOrders {
        return UserOrders.reified().new({ id: decodeFromJSONField(UID.reified(), field.id) });
    }

    static fromJSON(json: Record<string, any>): UserOrders {
        if (json.$typeName !== UserOrders.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return UserOrders.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): UserOrders {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUserOrders(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a UserOrders object`);
        }
        return UserOrders.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<UserOrders> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching UserOrders object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isUserOrders(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UserOrders object`);
        }
        return UserOrders.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== UserPositions =============================== */

export function isUserPositions(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x0::trading::UserPositions";
}

export interface UserPositionsFields {
    id: ToField<UID>;
}

export type UserPositionsReified = Reified<UserPositions, UserPositionsFields>;

export class UserPositions implements StructClass {
    static readonly $typeName = "0x0::trading::UserPositions";
    static readonly $numTypeParams = 0;

    readonly $typeName = UserPositions.$typeName;

    readonly $fullTypeName: "0x0::trading::UserPositions";

    readonly $typeArgs: [];

    readonly id: ToField<UID>;

    private constructor(typeArgs: [], fields: UserPositionsFields) {
        this.$fullTypeName = composeSuiType(UserPositions.$typeName, ...typeArgs) as "0x0::trading::UserPositions";
        this.$typeArgs = typeArgs;

        this.id = fields.id;
    }

    static reified(): UserPositionsReified {
        return {
            typeName: UserPositions.$typeName,
            fullTypeName: composeSuiType(UserPositions.$typeName, ...[]) as "0x0::trading::UserPositions",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => UserPositions.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => UserPositions.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => UserPositions.fromBcs(data),
            bcs: UserPositions.bcs,
            fromJSONField: (field: any) => UserPositions.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => UserPositions.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => UserPositions.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => UserPositions.fetch(client, id),
            new: (fields: UserPositionsFields) => {
                return new UserPositions([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return UserPositions.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<UserPositions>> {
        return phantom(UserPositions.reified());
    }
    static get p() {
        return UserPositions.phantom();
    }

    static get bcs() {
        return bcs.struct("UserPositions", {
            id: UID.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): UserPositions {
        return UserPositions.reified().new({ id: decodeFromFields(UID.reified(), fields.id) });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): UserPositions {
        if (!isUserPositions(item.type)) {
            throw new Error("not a UserPositions type");
        }

        return UserPositions.reified().new({ id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id) });
    }

    static fromBcs(data: Uint8Array): UserPositions {
        return UserPositions.fromFields(UserPositions.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): UserPositions {
        return UserPositions.reified().new({ id: decodeFromJSONField(UID.reified(), field.id) });
    }

    static fromJSON(json: Record<string, any>): UserPositions {
        if (json.$typeName !== UserPositions.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return UserPositions.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): UserPositions {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUserPositions(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a UserPositions object`);
        }
        return UserPositions.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<UserPositions> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching UserPositions object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isUserPositions(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UserPositions object`);
        }
        return UserPositions.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}
