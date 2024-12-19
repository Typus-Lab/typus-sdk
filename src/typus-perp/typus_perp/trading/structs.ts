import * as reified from "../../_framework/reified";
import { Option } from "../../_dependencies/source/0x1/option/structs";
import { TypeName } from "../../_dependencies/source/0x1/type-name/structs";
import { ObjectTable } from "../../_dependencies/source/0x2/object-table/structs";
import { UID } from "../../_dependencies/source/0x2/object/structs";
import { KeyedBigVector } from "../../_dependencies/source/0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277/keyed-big-vector/structs";
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
    ToTypeStr as ToPhantom,
} from "../../_framework/reified";
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../_framework/util";
import { Vector } from "../../_framework/vector";
import { PKG_V1 } from "../index";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromB64, fromHEX, toHEX } from "@mysten/sui/utils";

/* ============================== AddTradingSymbolEvent =============================== */

export function isAddTradingSymbolEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::trading::AddTradingSymbolEvent`;
}

export interface AddTradingSymbolEventFields {
    index: ToField<"u64">;
    baseTokenType: ToField<TypeName>;
    marketInfo: ToField<MarketInfo>;
    marketConfig: ToField<MarketConfig>;
    u64Padding: ToField<Vector<"u64">>;
}

export type AddTradingSymbolEventReified = Reified<AddTradingSymbolEvent, AddTradingSymbolEventFields>;

export class AddTradingSymbolEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::trading::AddTradingSymbolEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = AddTradingSymbolEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::trading::AddTradingSymbolEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = AddTradingSymbolEvent.$isPhantom;

    readonly index: ToField<"u64">;
    readonly baseTokenType: ToField<TypeName>;
    readonly marketInfo: ToField<MarketInfo>;
    readonly marketConfig: ToField<MarketConfig>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: AddTradingSymbolEventFields) {
        this.$fullTypeName = composeSuiType(
            AddTradingSymbolEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::trading::AddTradingSymbolEvent`;
        this.$typeArgs = typeArgs;

        this.index = fields.index;
        this.baseTokenType = fields.baseTokenType;
        this.marketInfo = fields.marketInfo;
        this.marketConfig = fields.marketConfig;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): AddTradingSymbolEventReified {
        return {
            typeName: AddTradingSymbolEvent.$typeName,
            fullTypeName: composeSuiType(AddTradingSymbolEvent.$typeName, ...[]) as `${typeof PKG_V1}::trading::AddTradingSymbolEvent`,
            typeArgs: [] as [],
            isPhantom: AddTradingSymbolEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => AddTradingSymbolEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => AddTradingSymbolEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => AddTradingSymbolEvent.fromBcs(data),
            bcs: AddTradingSymbolEvent.bcs,
            fromJSONField: (field: any) => AddTradingSymbolEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => AddTradingSymbolEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => AddTradingSymbolEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => AddTradingSymbolEvent.fromSuiObjectData(content),
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
            index: bcs.u64(),
            base_token_type: TypeName.bcs,
            market_info: MarketInfo.bcs,
            market_config: MarketConfig.bcs,
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): AddTradingSymbolEvent {
        return AddTradingSymbolEvent.reified().new({
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
            index: this.index.toString(),
            baseTokenType: this.baseTokenType.toJSONField(),
            marketInfo: this.marketInfo.toJSONField(),
            marketConfig: this.marketConfig.toJSONField(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): AddTradingSymbolEvent {
        return AddTradingSymbolEvent.reified().new({
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

    static fromSuiObjectData(data: SuiObjectData): AddTradingSymbolEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isAddTradingSymbolEvent(data.bcs.type)) {
                throw new Error(`object at is not a AddTradingSymbolEvent object`);
            }

            return AddTradingSymbolEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return AddTradingSymbolEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<AddTradingSymbolEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching AddTradingSymbolEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isAddTradingSymbolEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AddTradingSymbolEvent object`);
        }

        return AddTradingSymbolEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== CancelTradingOrderEvent =============================== */

export function isCancelTradingOrderEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::trading::CancelTradingOrderEvent`;
}

export interface CancelTradingOrderEventFields {
    user: ToField<"address">;
    marketIndex: ToField<"u64">;
    orderId: ToField<"u64">;
    triggerPrice: ToField<"u64">;
    collateralToken: ToField<TypeName>;
    baseToken: ToField<TypeName>;
    releasedCollateralAmount: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type CancelTradingOrderEventReified = Reified<CancelTradingOrderEvent, CancelTradingOrderEventFields>;

export class CancelTradingOrderEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::trading::CancelTradingOrderEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = CancelTradingOrderEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::trading::CancelTradingOrderEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = CancelTradingOrderEvent.$isPhantom;

    readonly user: ToField<"address">;
    readonly marketIndex: ToField<"u64">;
    readonly orderId: ToField<"u64">;
    readonly triggerPrice: ToField<"u64">;
    readonly collateralToken: ToField<TypeName>;
    readonly baseToken: ToField<TypeName>;
    readonly releasedCollateralAmount: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: CancelTradingOrderEventFields) {
        this.$fullTypeName = composeSuiType(
            CancelTradingOrderEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::trading::CancelTradingOrderEvent`;
        this.$typeArgs = typeArgs;

        this.user = fields.user;
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
            fullTypeName: composeSuiType(CancelTradingOrderEvent.$typeName, ...[]) as `${typeof PKG_V1}::trading::CancelTradingOrderEvent`,
            typeArgs: [] as [],
            isPhantom: CancelTradingOrderEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => CancelTradingOrderEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => CancelTradingOrderEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => CancelTradingOrderEvent.fromBcs(data),
            bcs: CancelTradingOrderEvent.bcs,
            fromJSONField: (field: any) => CancelTradingOrderEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => CancelTradingOrderEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => CancelTradingOrderEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => CancelTradingOrderEvent.fromSuiObjectData(content),
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
            user: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            market_index: bcs.u64(),
            order_id: bcs.u64(),
            trigger_price: bcs.u64(),
            collateral_token: TypeName.bcs,
            base_token: TypeName.bcs,
            released_collateral_amount: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): CancelTradingOrderEvent {
        return CancelTradingOrderEvent.reified().new({
            user: decodeFromFields("address", fields.user),
            marketIndex: decodeFromFields("u64", fields.market_index),
            orderId: decodeFromFields("u64", fields.order_id),
            triggerPrice: decodeFromFields("u64", fields.trigger_price),
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
            user: decodeFromFieldsWithTypes("address", item.fields.user),
            marketIndex: decodeFromFieldsWithTypes("u64", item.fields.market_index),
            orderId: decodeFromFieldsWithTypes("u64", item.fields.order_id),
            triggerPrice: decodeFromFieldsWithTypes("u64", item.fields.trigger_price),
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
            user: this.user,
            marketIndex: this.marketIndex.toString(),
            orderId: this.orderId.toString(),
            triggerPrice: this.triggerPrice.toString(),
            collateralToken: this.collateralToken.toJSONField(),
            baseToken: this.baseToken.toJSONField(),
            releasedCollateralAmount: this.releasedCollateralAmount.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): CancelTradingOrderEvent {
        return CancelTradingOrderEvent.reified().new({
            user: decodeFromJSONField("address", field.user),
            marketIndex: decodeFromJSONField("u64", field.marketIndex),
            orderId: decodeFromJSONField("u64", field.orderId),
            triggerPrice: decodeFromJSONField("u64", field.triggerPrice),
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

    static fromSuiObjectData(data: SuiObjectData): CancelTradingOrderEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isCancelTradingOrderEvent(data.bcs.type)) {
                throw new Error(`object at is not a CancelTradingOrderEvent object`);
            }

            return CancelTradingOrderEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return CancelTradingOrderEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<CancelTradingOrderEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching CancelTradingOrderEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isCancelTradingOrderEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a CancelTradingOrderEvent object`);
        }

        return CancelTradingOrderEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== CreateTradingOrderEvent =============================== */

export function isCreateTradingOrderEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::trading::CreateTradingOrderEvent`;
}

export interface CreateTradingOrderEventFields {
    user: ToField<"address">;
    marketIndex: ToField<"u64">;
    poolIndex: ToField<"u64">;
    collateralToken: ToField<TypeName>;
    baseToken: ToField<TypeName>;
    linkedPositionId: ToField<Option<"u64">>;
    collateralAmount: ToField<"u64">;
    leverageMbp: ToField<"u64">;
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
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::trading::CreateTradingOrderEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = CreateTradingOrderEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::trading::CreateTradingOrderEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = CreateTradingOrderEvent.$isPhantom;

    readonly user: ToField<"address">;
    readonly marketIndex: ToField<"u64">;
    readonly poolIndex: ToField<"u64">;
    readonly collateralToken: ToField<TypeName>;
    readonly baseToken: ToField<TypeName>;
    readonly linkedPositionId: ToField<Option<"u64">>;
    readonly collateralAmount: ToField<"u64">;
    readonly leverageMbp: ToField<"u64">;
    readonly reduceOnly: ToField<"bool">;
    readonly isLong: ToField<"bool">;
    readonly isStopOrder: ToField<"bool">;
    readonly size: ToField<"u64">;
    readonly triggerPrice: ToField<"u64">;
    readonly filled: ToField<"bool">;
    readonly filledPrice: ToField<Option<"u64">>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: CreateTradingOrderEventFields) {
        this.$fullTypeName = composeSuiType(
            CreateTradingOrderEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::trading::CreateTradingOrderEvent`;
        this.$typeArgs = typeArgs;

        this.user = fields.user;
        this.marketIndex = fields.marketIndex;
        this.poolIndex = fields.poolIndex;
        this.collateralToken = fields.collateralToken;
        this.baseToken = fields.baseToken;
        this.linkedPositionId = fields.linkedPositionId;
        this.collateralAmount = fields.collateralAmount;
        this.leverageMbp = fields.leverageMbp;
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
            fullTypeName: composeSuiType(CreateTradingOrderEvent.$typeName, ...[]) as `${typeof PKG_V1}::trading::CreateTradingOrderEvent`,
            typeArgs: [] as [],
            isPhantom: CreateTradingOrderEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => CreateTradingOrderEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => CreateTradingOrderEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => CreateTradingOrderEvent.fromBcs(data),
            bcs: CreateTradingOrderEvent.bcs,
            fromJSONField: (field: any) => CreateTradingOrderEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => CreateTradingOrderEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => CreateTradingOrderEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => CreateTradingOrderEvent.fromSuiObjectData(content),
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
            user: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            market_index: bcs.u64(),
            pool_index: bcs.u64(),
            collateral_token: TypeName.bcs,
            base_token: TypeName.bcs,
            linked_position_id: Option.bcs(bcs.u64()),
            collateral_amount: bcs.u64(),
            leverage_mbp: bcs.u64(),
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
            user: decodeFromFields("address", fields.user),
            marketIndex: decodeFromFields("u64", fields.market_index),
            poolIndex: decodeFromFields("u64", fields.pool_index),
            collateralToken: decodeFromFields(TypeName.reified(), fields.collateral_token),
            baseToken: decodeFromFields(TypeName.reified(), fields.base_token),
            linkedPositionId: decodeFromFields(Option.reified("u64"), fields.linked_position_id),
            collateralAmount: decodeFromFields("u64", fields.collateral_amount),
            leverageMbp: decodeFromFields("u64", fields.leverage_mbp),
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
            user: decodeFromFieldsWithTypes("address", item.fields.user),
            marketIndex: decodeFromFieldsWithTypes("u64", item.fields.market_index),
            poolIndex: decodeFromFieldsWithTypes("u64", item.fields.pool_index),
            collateralToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.collateral_token),
            baseToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.base_token),
            linkedPositionId: decodeFromFieldsWithTypes(Option.reified("u64"), item.fields.linked_position_id),
            collateralAmount: decodeFromFieldsWithTypes("u64", item.fields.collateral_amount),
            leverageMbp: decodeFromFieldsWithTypes("u64", item.fields.leverage_mbp),
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
            user: this.user,
            marketIndex: this.marketIndex.toString(),
            poolIndex: this.poolIndex.toString(),
            collateralToken: this.collateralToken.toJSONField(),
            baseToken: this.baseToken.toJSONField(),
            linkedPositionId: fieldToJSON<Option<"u64">>(`${Option.$typeName}<u64>`, this.linkedPositionId),
            collateralAmount: this.collateralAmount.toString(),
            leverageMbp: this.leverageMbp.toString(),
            reduceOnly: this.reduceOnly,
            isLong: this.isLong,
            isStopOrder: this.isStopOrder,
            size: this.size.toString(),
            triggerPrice: this.triggerPrice.toString(),
            filled: this.filled,
            filledPrice: fieldToJSON<Option<"u64">>(`${Option.$typeName}<u64>`, this.filledPrice),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): CreateTradingOrderEvent {
        return CreateTradingOrderEvent.reified().new({
            user: decodeFromJSONField("address", field.user),
            marketIndex: decodeFromJSONField("u64", field.marketIndex),
            poolIndex: decodeFromJSONField("u64", field.poolIndex),
            collateralToken: decodeFromJSONField(TypeName.reified(), field.collateralToken),
            baseToken: decodeFromJSONField(TypeName.reified(), field.baseToken),
            linkedPositionId: decodeFromJSONField(Option.reified("u64"), field.linkedPositionId),
            collateralAmount: decodeFromJSONField("u64", field.collateralAmount),
            leverageMbp: decodeFromJSONField("u64", field.leverageMbp),
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

    static fromSuiObjectData(data: SuiObjectData): CreateTradingOrderEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isCreateTradingOrderEvent(data.bcs.type)) {
                throw new Error(`object at is not a CreateTradingOrderEvent object`);
            }

            return CreateTradingOrderEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return CreateTradingOrderEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<CreateTradingOrderEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching CreateTradingOrderEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isCreateTradingOrderEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a CreateTradingOrderEvent object`);
        }

        return CreateTradingOrderEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== CreateTradingOrderWithBidReceiptsEvent =============================== */

export function isCreateTradingOrderWithBidReceiptsEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::trading::CreateTradingOrderWithBidReceiptsEvent`;
}

export interface CreateTradingOrderWithBidReceiptsEventFields {
    user: ToField<"address">;
    marketIndex: ToField<"u64">;
    poolIndex: ToField<"u64">;
    collateralToken: ToField<TypeName>;
    baseToken: ToField<TypeName>;
    collateralInDepositToken: ToField<"u64">;
    isLong: ToField<"bool">;
    size: ToField<"u64">;
    triggerPrice: ToField<"u64">;
    filled: ToField<"bool">;
    filledPrice: ToField<Option<"u64">>;
    u64Padding: ToField<Vector<"u64">>;
}

export type CreateTradingOrderWithBidReceiptsEventReified = Reified<
    CreateTradingOrderWithBidReceiptsEvent,
    CreateTradingOrderWithBidReceiptsEventFields
>;

export class CreateTradingOrderWithBidReceiptsEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::trading::CreateTradingOrderWithBidReceiptsEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = CreateTradingOrderWithBidReceiptsEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::trading::CreateTradingOrderWithBidReceiptsEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = CreateTradingOrderWithBidReceiptsEvent.$isPhantom;

    readonly user: ToField<"address">;
    readonly marketIndex: ToField<"u64">;
    readonly poolIndex: ToField<"u64">;
    readonly collateralToken: ToField<TypeName>;
    readonly baseToken: ToField<TypeName>;
    readonly collateralInDepositToken: ToField<"u64">;
    readonly isLong: ToField<"bool">;
    readonly size: ToField<"u64">;
    readonly triggerPrice: ToField<"u64">;
    readonly filled: ToField<"bool">;
    readonly filledPrice: ToField<Option<"u64">>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: CreateTradingOrderWithBidReceiptsEventFields) {
        this.$fullTypeName = composeSuiType(
            CreateTradingOrderWithBidReceiptsEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::trading::CreateTradingOrderWithBidReceiptsEvent`;
        this.$typeArgs = typeArgs;

        this.user = fields.user;
        this.marketIndex = fields.marketIndex;
        this.poolIndex = fields.poolIndex;
        this.collateralToken = fields.collateralToken;
        this.baseToken = fields.baseToken;
        this.collateralInDepositToken = fields.collateralInDepositToken;
        this.isLong = fields.isLong;
        this.size = fields.size;
        this.triggerPrice = fields.triggerPrice;
        this.filled = fields.filled;
        this.filledPrice = fields.filledPrice;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): CreateTradingOrderWithBidReceiptsEventReified {
        return {
            typeName: CreateTradingOrderWithBidReceiptsEvent.$typeName,
            fullTypeName: composeSuiType(
                CreateTradingOrderWithBidReceiptsEvent.$typeName,
                ...[]
            ) as `${typeof PKG_V1}::trading::CreateTradingOrderWithBidReceiptsEvent`,
            typeArgs: [] as [],
            isPhantom: CreateTradingOrderWithBidReceiptsEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => CreateTradingOrderWithBidReceiptsEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => CreateTradingOrderWithBidReceiptsEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => CreateTradingOrderWithBidReceiptsEvent.fromBcs(data),
            bcs: CreateTradingOrderWithBidReceiptsEvent.bcs,
            fromJSONField: (field: any) => CreateTradingOrderWithBidReceiptsEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => CreateTradingOrderWithBidReceiptsEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => CreateTradingOrderWithBidReceiptsEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => CreateTradingOrderWithBidReceiptsEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => CreateTradingOrderWithBidReceiptsEvent.fetch(client, id),
            new: (fields: CreateTradingOrderWithBidReceiptsEventFields) => {
                return new CreateTradingOrderWithBidReceiptsEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return CreateTradingOrderWithBidReceiptsEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<CreateTradingOrderWithBidReceiptsEvent>> {
        return phantom(CreateTradingOrderWithBidReceiptsEvent.reified());
    }
    static get p() {
        return CreateTradingOrderWithBidReceiptsEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("CreateTradingOrderWithBidReceiptsEvent", {
            user: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            market_index: bcs.u64(),
            pool_index: bcs.u64(),
            collateral_token: TypeName.bcs,
            base_token: TypeName.bcs,
            collateral_in_deposit_token: bcs.u64(),
            is_long: bcs.bool(),
            size: bcs.u64(),
            trigger_price: bcs.u64(),
            filled: bcs.bool(),
            filled_price: Option.bcs(bcs.u64()),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): CreateTradingOrderWithBidReceiptsEvent {
        return CreateTradingOrderWithBidReceiptsEvent.reified().new({
            user: decodeFromFields("address", fields.user),
            marketIndex: decodeFromFields("u64", fields.market_index),
            poolIndex: decodeFromFields("u64", fields.pool_index),
            collateralToken: decodeFromFields(TypeName.reified(), fields.collateral_token),
            baseToken: decodeFromFields(TypeName.reified(), fields.base_token),
            collateralInDepositToken: decodeFromFields("u64", fields.collateral_in_deposit_token),
            isLong: decodeFromFields("bool", fields.is_long),
            size: decodeFromFields("u64", fields.size),
            triggerPrice: decodeFromFields("u64", fields.trigger_price),
            filled: decodeFromFields("bool", fields.filled),
            filledPrice: decodeFromFields(Option.reified("u64"), fields.filled_price),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): CreateTradingOrderWithBidReceiptsEvent {
        if (!isCreateTradingOrderWithBidReceiptsEvent(item.type)) {
            throw new Error("not a CreateTradingOrderWithBidReceiptsEvent type");
        }

        return CreateTradingOrderWithBidReceiptsEvent.reified().new({
            user: decodeFromFieldsWithTypes("address", item.fields.user),
            marketIndex: decodeFromFieldsWithTypes("u64", item.fields.market_index),
            poolIndex: decodeFromFieldsWithTypes("u64", item.fields.pool_index),
            collateralToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.collateral_token),
            baseToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.base_token),
            collateralInDepositToken: decodeFromFieldsWithTypes("u64", item.fields.collateral_in_deposit_token),
            isLong: decodeFromFieldsWithTypes("bool", item.fields.is_long),
            size: decodeFromFieldsWithTypes("u64", item.fields.size),
            triggerPrice: decodeFromFieldsWithTypes("u64", item.fields.trigger_price),
            filled: decodeFromFieldsWithTypes("bool", item.fields.filled),
            filledPrice: decodeFromFieldsWithTypes(Option.reified("u64"), item.fields.filled_price),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): CreateTradingOrderWithBidReceiptsEvent {
        return CreateTradingOrderWithBidReceiptsEvent.fromFields(CreateTradingOrderWithBidReceiptsEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            user: this.user,
            marketIndex: this.marketIndex.toString(),
            poolIndex: this.poolIndex.toString(),
            collateralToken: this.collateralToken.toJSONField(),
            baseToken: this.baseToken.toJSONField(),
            collateralInDepositToken: this.collateralInDepositToken.toString(),
            isLong: this.isLong,
            size: this.size.toString(),
            triggerPrice: this.triggerPrice.toString(),
            filled: this.filled,
            filledPrice: fieldToJSON<Option<"u64">>(`${Option.$typeName}<u64>`, this.filledPrice),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): CreateTradingOrderWithBidReceiptsEvent {
        return CreateTradingOrderWithBidReceiptsEvent.reified().new({
            user: decodeFromJSONField("address", field.user),
            marketIndex: decodeFromJSONField("u64", field.marketIndex),
            poolIndex: decodeFromJSONField("u64", field.poolIndex),
            collateralToken: decodeFromJSONField(TypeName.reified(), field.collateralToken),
            baseToken: decodeFromJSONField(TypeName.reified(), field.baseToken),
            collateralInDepositToken: decodeFromJSONField("u64", field.collateralInDepositToken),
            isLong: decodeFromJSONField("bool", field.isLong),
            size: decodeFromJSONField("u64", field.size),
            triggerPrice: decodeFromJSONField("u64", field.triggerPrice),
            filled: decodeFromJSONField("bool", field.filled),
            filledPrice: decodeFromJSONField(Option.reified("u64"), field.filledPrice),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): CreateTradingOrderWithBidReceiptsEvent {
        if (json.$typeName !== CreateTradingOrderWithBidReceiptsEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return CreateTradingOrderWithBidReceiptsEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): CreateTradingOrderWithBidReceiptsEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isCreateTradingOrderWithBidReceiptsEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a CreateTradingOrderWithBidReceiptsEvent object`);
        }
        return CreateTradingOrderWithBidReceiptsEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): CreateTradingOrderWithBidReceiptsEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isCreateTradingOrderWithBidReceiptsEvent(data.bcs.type)) {
                throw new Error(`object at is not a CreateTradingOrderWithBidReceiptsEvent object`);
            }

            return CreateTradingOrderWithBidReceiptsEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return CreateTradingOrderWithBidReceiptsEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<CreateTradingOrderWithBidReceiptsEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching CreateTradingOrderWithBidReceiptsEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isCreateTradingOrderWithBidReceiptsEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a CreateTradingOrderWithBidReceiptsEvent object`);
        }

        return CreateTradingOrderWithBidReceiptsEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== IncreaseCollateralEvent =============================== */

export function isIncreaseCollateralEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::trading::IncreaseCollateralEvent`;
}

export interface IncreaseCollateralEventFields {
    user: ToField<"address">;
    marketIndex: ToField<"u64">;
    poolIndex: ToField<"u64">;
    positionId: ToField<"u64">;
    collateralToken: ToField<TypeName>;
    baseToken: ToField<TypeName>;
    increasedCollateralAmount: ToField<"u64">;
    remainingCollateralAmount: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type IncreaseCollateralEventReified = Reified<IncreaseCollateralEvent, IncreaseCollateralEventFields>;

export class IncreaseCollateralEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::trading::IncreaseCollateralEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = IncreaseCollateralEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::trading::IncreaseCollateralEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = IncreaseCollateralEvent.$isPhantom;

    readonly user: ToField<"address">;
    readonly marketIndex: ToField<"u64">;
    readonly poolIndex: ToField<"u64">;
    readonly positionId: ToField<"u64">;
    readonly collateralToken: ToField<TypeName>;
    readonly baseToken: ToField<TypeName>;
    readonly increasedCollateralAmount: ToField<"u64">;
    readonly remainingCollateralAmount: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: IncreaseCollateralEventFields) {
        this.$fullTypeName = composeSuiType(
            IncreaseCollateralEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::trading::IncreaseCollateralEvent`;
        this.$typeArgs = typeArgs;

        this.user = fields.user;
        this.marketIndex = fields.marketIndex;
        this.poolIndex = fields.poolIndex;
        this.positionId = fields.positionId;
        this.collateralToken = fields.collateralToken;
        this.baseToken = fields.baseToken;
        this.increasedCollateralAmount = fields.increasedCollateralAmount;
        this.remainingCollateralAmount = fields.remainingCollateralAmount;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): IncreaseCollateralEventReified {
        return {
            typeName: IncreaseCollateralEvent.$typeName,
            fullTypeName: composeSuiType(IncreaseCollateralEvent.$typeName, ...[]) as `${typeof PKG_V1}::trading::IncreaseCollateralEvent`,
            typeArgs: [] as [],
            isPhantom: IncreaseCollateralEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => IncreaseCollateralEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => IncreaseCollateralEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => IncreaseCollateralEvent.fromBcs(data),
            bcs: IncreaseCollateralEvent.bcs,
            fromJSONField: (field: any) => IncreaseCollateralEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => IncreaseCollateralEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => IncreaseCollateralEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => IncreaseCollateralEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => IncreaseCollateralEvent.fetch(client, id),
            new: (fields: IncreaseCollateralEventFields) => {
                return new IncreaseCollateralEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return IncreaseCollateralEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<IncreaseCollateralEvent>> {
        return phantom(IncreaseCollateralEvent.reified());
    }
    static get p() {
        return IncreaseCollateralEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("IncreaseCollateralEvent", {
            user: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            market_index: bcs.u64(),
            pool_index: bcs.u64(),
            position_id: bcs.u64(),
            collateral_token: TypeName.bcs,
            base_token: TypeName.bcs,
            increased_collateral_amount: bcs.u64(),
            remaining_collateral_amount: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): IncreaseCollateralEvent {
        return IncreaseCollateralEvent.reified().new({
            user: decodeFromFields("address", fields.user),
            marketIndex: decodeFromFields("u64", fields.market_index),
            poolIndex: decodeFromFields("u64", fields.pool_index),
            positionId: decodeFromFields("u64", fields.position_id),
            collateralToken: decodeFromFields(TypeName.reified(), fields.collateral_token),
            baseToken: decodeFromFields(TypeName.reified(), fields.base_token),
            increasedCollateralAmount: decodeFromFields("u64", fields.increased_collateral_amount),
            remainingCollateralAmount: decodeFromFields("u64", fields.remaining_collateral_amount),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): IncreaseCollateralEvent {
        if (!isIncreaseCollateralEvent(item.type)) {
            throw new Error("not a IncreaseCollateralEvent type");
        }

        return IncreaseCollateralEvent.reified().new({
            user: decodeFromFieldsWithTypes("address", item.fields.user),
            marketIndex: decodeFromFieldsWithTypes("u64", item.fields.market_index),
            poolIndex: decodeFromFieldsWithTypes("u64", item.fields.pool_index),
            positionId: decodeFromFieldsWithTypes("u64", item.fields.position_id),
            collateralToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.collateral_token),
            baseToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.base_token),
            increasedCollateralAmount: decodeFromFieldsWithTypes("u64", item.fields.increased_collateral_amount),
            remainingCollateralAmount: decodeFromFieldsWithTypes("u64", item.fields.remaining_collateral_amount),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): IncreaseCollateralEvent {
        return IncreaseCollateralEvent.fromFields(IncreaseCollateralEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            user: this.user,
            marketIndex: this.marketIndex.toString(),
            poolIndex: this.poolIndex.toString(),
            positionId: this.positionId.toString(),
            collateralToken: this.collateralToken.toJSONField(),
            baseToken: this.baseToken.toJSONField(),
            increasedCollateralAmount: this.increasedCollateralAmount.toString(),
            remainingCollateralAmount: this.remainingCollateralAmount.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): IncreaseCollateralEvent {
        return IncreaseCollateralEvent.reified().new({
            user: decodeFromJSONField("address", field.user),
            marketIndex: decodeFromJSONField("u64", field.marketIndex),
            poolIndex: decodeFromJSONField("u64", field.poolIndex),
            positionId: decodeFromJSONField("u64", field.positionId),
            collateralToken: decodeFromJSONField(TypeName.reified(), field.collateralToken),
            baseToken: decodeFromJSONField(TypeName.reified(), field.baseToken),
            increasedCollateralAmount: decodeFromJSONField("u64", field.increasedCollateralAmount),
            remainingCollateralAmount: decodeFromJSONField("u64", field.remainingCollateralAmount),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): IncreaseCollateralEvent {
        if (json.$typeName !== IncreaseCollateralEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return IncreaseCollateralEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): IncreaseCollateralEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isIncreaseCollateralEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a IncreaseCollateralEvent object`);
        }
        return IncreaseCollateralEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): IncreaseCollateralEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isIncreaseCollateralEvent(data.bcs.type)) {
                throw new Error(`object at is not a IncreaseCollateralEvent object`);
            }

            return IncreaseCollateralEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return IncreaseCollateralEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<IncreaseCollateralEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching IncreaseCollateralEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isIncreaseCollateralEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a IncreaseCollateralEvent object`);
        }

        return IncreaseCollateralEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== LinkedOrdersInfo =============================== */

export function isLinkedOrdersInfo(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::trading::LinkedOrdersInfo`;
}

export interface LinkedOrdersInfoFields {
    users: ToField<Vector<"address">>;
    ids: ToField<Vector<Vector<"u64">>>;
    prices: ToField<Vector<Vector<"u64">>>;
    u64Padding: ToField<Vector<"u64">>;
}

export type LinkedOrdersInfoReified = Reified<LinkedOrdersInfo, LinkedOrdersInfoFields>;

export class LinkedOrdersInfo implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::trading::LinkedOrdersInfo`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = LinkedOrdersInfo.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::trading::LinkedOrdersInfo`;
    readonly $typeArgs: [];
    readonly $isPhantom = LinkedOrdersInfo.$isPhantom;

    readonly users: ToField<Vector<"address">>;
    readonly ids: ToField<Vector<Vector<"u64">>>;
    readonly prices: ToField<Vector<Vector<"u64">>>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: LinkedOrdersInfoFields) {
        this.$fullTypeName = composeSuiType(LinkedOrdersInfo.$typeName, ...typeArgs) as `${typeof PKG_V1}::trading::LinkedOrdersInfo`;
        this.$typeArgs = typeArgs;

        this.users = fields.users;
        this.ids = fields.ids;
        this.prices = fields.prices;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): LinkedOrdersInfoReified {
        return {
            typeName: LinkedOrdersInfo.$typeName,
            fullTypeName: composeSuiType(LinkedOrdersInfo.$typeName, ...[]) as `${typeof PKG_V1}::trading::LinkedOrdersInfo`,
            typeArgs: [] as [],
            isPhantom: LinkedOrdersInfo.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => LinkedOrdersInfo.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => LinkedOrdersInfo.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => LinkedOrdersInfo.fromBcs(data),
            bcs: LinkedOrdersInfo.bcs,
            fromJSONField: (field: any) => LinkedOrdersInfo.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => LinkedOrdersInfo.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => LinkedOrdersInfo.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => LinkedOrdersInfo.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => LinkedOrdersInfo.fetch(client, id),
            new: (fields: LinkedOrdersInfoFields) => {
                return new LinkedOrdersInfo([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return LinkedOrdersInfo.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<LinkedOrdersInfo>> {
        return phantom(LinkedOrdersInfo.reified());
    }
    static get p() {
        return LinkedOrdersInfo.phantom();
    }

    static get bcs() {
        return bcs.struct("LinkedOrdersInfo", {
            users: bcs.vector(
                bcs.bytes(32).transform({
                    input: (val: string) => fromHEX(val),
                    output: (val: Uint8Array) => toHEX(val),
                })
            ),
            ids: bcs.vector(bcs.vector(bcs.u64())),
            prices: bcs.vector(bcs.vector(bcs.u64())),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): LinkedOrdersInfo {
        return LinkedOrdersInfo.reified().new({
            users: decodeFromFields(reified.vector("address"), fields.users),
            ids: decodeFromFields(reified.vector(reified.vector("u64")), fields.ids),
            prices: decodeFromFields(reified.vector(reified.vector("u64")), fields.prices),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): LinkedOrdersInfo {
        if (!isLinkedOrdersInfo(item.type)) {
            throw new Error("not a LinkedOrdersInfo type");
        }

        return LinkedOrdersInfo.reified().new({
            users: decodeFromFieldsWithTypes(reified.vector("address"), item.fields.users),
            ids: decodeFromFieldsWithTypes(reified.vector(reified.vector("u64")), item.fields.ids),
            prices: decodeFromFieldsWithTypes(reified.vector(reified.vector("u64")), item.fields.prices),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): LinkedOrdersInfo {
        return LinkedOrdersInfo.fromFields(LinkedOrdersInfo.bcs.parse(data));
    }

    toJSONField() {
        return {
            users: fieldToJSON<Vector<"address">>(`vector<address>`, this.users),
            ids: fieldToJSON<Vector<Vector<"u64">>>(`vector<vector<u64>>`, this.ids),
            prices: fieldToJSON<Vector<Vector<"u64">>>(`vector<vector<u64>>`, this.prices),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): LinkedOrdersInfo {
        return LinkedOrdersInfo.reified().new({
            users: decodeFromJSONField(reified.vector("address"), field.users),
            ids: decodeFromJSONField(reified.vector(reified.vector("u64")), field.ids),
            prices: decodeFromJSONField(reified.vector(reified.vector("u64")), field.prices),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): LinkedOrdersInfo {
        if (json.$typeName !== LinkedOrdersInfo.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return LinkedOrdersInfo.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): LinkedOrdersInfo {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isLinkedOrdersInfo(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a LinkedOrdersInfo object`);
        }
        return LinkedOrdersInfo.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): LinkedOrdersInfo {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isLinkedOrdersInfo(data.bcs.type)) {
                throw new Error(`object at is not a LinkedOrdersInfo object`);
            }

            return LinkedOrdersInfo.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return LinkedOrdersInfo.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<LinkedOrdersInfo> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching LinkedOrdersInfo object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isLinkedOrdersInfo(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a LinkedOrdersInfo object`);
        }

        return LinkedOrdersInfo.fromSuiObjectData(res.data);
    }
}

/* ============================== LiquidateEvent =============================== */

export function isLiquidateEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::trading::LiquidateEvent`;
}

export interface LiquidateEventFields {
    user: ToField<"address">;
    collateralToken: ToField<TypeName>;
    baseToken: ToField<TypeName>;
    positionId: ToField<"u64">;
    collateralPrice: ToField<"u64">;
    tradingPrice: ToField<"u64">;
    liquidatorFeeValue: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type LiquidateEventReified = Reified<LiquidateEvent, LiquidateEventFields>;

export class LiquidateEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::trading::LiquidateEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = LiquidateEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::trading::LiquidateEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = LiquidateEvent.$isPhantom;

    readonly user: ToField<"address">;
    readonly collateralToken: ToField<TypeName>;
    readonly baseToken: ToField<TypeName>;
    readonly positionId: ToField<"u64">;
    readonly collateralPrice: ToField<"u64">;
    readonly tradingPrice: ToField<"u64">;
    readonly liquidatorFeeValue: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: LiquidateEventFields) {
        this.$fullTypeName = composeSuiType(LiquidateEvent.$typeName, ...typeArgs) as `${typeof PKG_V1}::trading::LiquidateEvent`;
        this.$typeArgs = typeArgs;

        this.user = fields.user;
        this.collateralToken = fields.collateralToken;
        this.baseToken = fields.baseToken;
        this.positionId = fields.positionId;
        this.collateralPrice = fields.collateralPrice;
        this.tradingPrice = fields.tradingPrice;
        this.liquidatorFeeValue = fields.liquidatorFeeValue;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): LiquidateEventReified {
        return {
            typeName: LiquidateEvent.$typeName,
            fullTypeName: composeSuiType(LiquidateEvent.$typeName, ...[]) as `${typeof PKG_V1}::trading::LiquidateEvent`,
            typeArgs: [] as [],
            isPhantom: LiquidateEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => LiquidateEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => LiquidateEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => LiquidateEvent.fromBcs(data),
            bcs: LiquidateEvent.bcs,
            fromJSONField: (field: any) => LiquidateEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => LiquidateEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => LiquidateEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => LiquidateEvent.fromSuiObjectData(content),
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
            user: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            collateral_token: TypeName.bcs,
            base_token: TypeName.bcs,
            position_id: bcs.u64(),
            collateral_price: bcs.u64(),
            trading_price: bcs.u64(),
            liquidator_fee_value: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): LiquidateEvent {
        return LiquidateEvent.reified().new({
            user: decodeFromFields("address", fields.user),
            collateralToken: decodeFromFields(TypeName.reified(), fields.collateral_token),
            baseToken: decodeFromFields(TypeName.reified(), fields.base_token),
            positionId: decodeFromFields("u64", fields.position_id),
            collateralPrice: decodeFromFields("u64", fields.collateral_price),
            tradingPrice: decodeFromFields("u64", fields.trading_price),
            liquidatorFeeValue: decodeFromFields("u64", fields.liquidator_fee_value),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): LiquidateEvent {
        if (!isLiquidateEvent(item.type)) {
            throw new Error("not a LiquidateEvent type");
        }

        return LiquidateEvent.reified().new({
            user: decodeFromFieldsWithTypes("address", item.fields.user),
            collateralToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.collateral_token),
            baseToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.base_token),
            positionId: decodeFromFieldsWithTypes("u64", item.fields.position_id),
            collateralPrice: decodeFromFieldsWithTypes("u64", item.fields.collateral_price),
            tradingPrice: decodeFromFieldsWithTypes("u64", item.fields.trading_price),
            liquidatorFeeValue: decodeFromFieldsWithTypes("u64", item.fields.liquidator_fee_value),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): LiquidateEvent {
        return LiquidateEvent.fromFields(LiquidateEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            user: this.user,
            collateralToken: this.collateralToken.toJSONField(),
            baseToken: this.baseToken.toJSONField(),
            positionId: this.positionId.toString(),
            collateralPrice: this.collateralPrice.toString(),
            tradingPrice: this.tradingPrice.toString(),
            liquidatorFeeValue: this.liquidatorFeeValue.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): LiquidateEvent {
        return LiquidateEvent.reified().new({
            user: decodeFromJSONField("address", field.user),
            collateralToken: decodeFromJSONField(TypeName.reified(), field.collateralToken),
            baseToken: decodeFromJSONField(TypeName.reified(), field.baseToken),
            positionId: decodeFromJSONField("u64", field.positionId),
            collateralPrice: decodeFromJSONField("u64", field.collateralPrice),
            tradingPrice: decodeFromJSONField("u64", field.tradingPrice),
            liquidatorFeeValue: decodeFromJSONField("u64", field.liquidatorFeeValue),
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

    static fromSuiObjectData(data: SuiObjectData): LiquidateEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isLiquidateEvent(data.bcs.type)) {
                throw new Error(`object at is not a LiquidateEvent object`);
            }

            return LiquidateEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return LiquidateEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<LiquidateEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching LiquidateEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isLiquidateEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a LiquidateEvent object`);
        }

        return LiquidateEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== LiquidationInfo =============================== */

export function isLiquidationInfo(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::trading::LiquidationInfo`;
}

export interface LiquidationInfoFields {
    positionId: ToField<"u64">;
    dovIndex: ToField<Option<"u64">>;
    bidToken: ToField<Option<TypeName>>;
}

export type LiquidationInfoReified = Reified<LiquidationInfo, LiquidationInfoFields>;

export class LiquidationInfo implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::trading::LiquidationInfo`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = LiquidationInfo.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::trading::LiquidationInfo`;
    readonly $typeArgs: [];
    readonly $isPhantom = LiquidationInfo.$isPhantom;

    readonly positionId: ToField<"u64">;
    readonly dovIndex: ToField<Option<"u64">>;
    readonly bidToken: ToField<Option<TypeName>>;

    private constructor(typeArgs: [], fields: LiquidationInfoFields) {
        this.$fullTypeName = composeSuiType(LiquidationInfo.$typeName, ...typeArgs) as `${typeof PKG_V1}::trading::LiquidationInfo`;
        this.$typeArgs = typeArgs;

        this.positionId = fields.positionId;
        this.dovIndex = fields.dovIndex;
        this.bidToken = fields.bidToken;
    }

    static reified(): LiquidationInfoReified {
        return {
            typeName: LiquidationInfo.$typeName,
            fullTypeName: composeSuiType(LiquidationInfo.$typeName, ...[]) as `${typeof PKG_V1}::trading::LiquidationInfo`,
            typeArgs: [] as [],
            isPhantom: LiquidationInfo.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => LiquidationInfo.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => LiquidationInfo.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => LiquidationInfo.fromBcs(data),
            bcs: LiquidationInfo.bcs,
            fromJSONField: (field: any) => LiquidationInfo.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => LiquidationInfo.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => LiquidationInfo.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => LiquidationInfo.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => LiquidationInfo.fetch(client, id),
            new: (fields: LiquidationInfoFields) => {
                return new LiquidationInfo([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return LiquidationInfo.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<LiquidationInfo>> {
        return phantom(LiquidationInfo.reified());
    }
    static get p() {
        return LiquidationInfo.phantom();
    }

    static get bcs() {
        return bcs.struct("LiquidationInfo", {
            position_id: bcs.u64(),
            dov_index: Option.bcs(bcs.u64()),
            bid_token: Option.bcs(TypeName.bcs),
        });
    }

    static fromFields(fields: Record<string, any>): LiquidationInfo {
        return LiquidationInfo.reified().new({
            positionId: decodeFromFields("u64", fields.position_id),
            dovIndex: decodeFromFields(Option.reified("u64"), fields.dov_index),
            bidToken: decodeFromFields(Option.reified(TypeName.reified()), fields.bid_token),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): LiquidationInfo {
        if (!isLiquidationInfo(item.type)) {
            throw new Error("not a LiquidationInfo type");
        }

        return LiquidationInfo.reified().new({
            positionId: decodeFromFieldsWithTypes("u64", item.fields.position_id),
            dovIndex: decodeFromFieldsWithTypes(Option.reified("u64"), item.fields.dov_index),
            bidToken: decodeFromFieldsWithTypes(Option.reified(TypeName.reified()), item.fields.bid_token),
        });
    }

    static fromBcs(data: Uint8Array): LiquidationInfo {
        return LiquidationInfo.fromFields(LiquidationInfo.bcs.parse(data));
    }

    toJSONField() {
        return {
            positionId: this.positionId.toString(),
            dovIndex: fieldToJSON<Option<"u64">>(`${Option.$typeName}<u64>`, this.dovIndex),
            bidToken: fieldToJSON<Option<TypeName>>(`${Option.$typeName}<${TypeName.$typeName}>`, this.bidToken),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): LiquidationInfo {
        return LiquidationInfo.reified().new({
            positionId: decodeFromJSONField("u64", field.positionId),
            dovIndex: decodeFromJSONField(Option.reified("u64"), field.dovIndex),
            bidToken: decodeFromJSONField(Option.reified(TypeName.reified()), field.bidToken),
        });
    }

    static fromJSON(json: Record<string, any>): LiquidationInfo {
        if (json.$typeName !== LiquidationInfo.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return LiquidationInfo.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): LiquidationInfo {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isLiquidationInfo(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a LiquidationInfo object`);
        }
        return LiquidationInfo.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): LiquidationInfo {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isLiquidationInfo(data.bcs.type)) {
                throw new Error(`object at is not a LiquidationInfo object`);
            }

            return LiquidationInfo.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return LiquidationInfo.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<LiquidationInfo> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching LiquidationInfo object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isLiquidationInfo(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a LiquidationInfo object`);
        }

        return LiquidationInfo.fromSuiObjectData(res.data);
    }
}

/* ============================== ManagerReducePosition =============================== */

export function isManagerReducePosition(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::trading::ManagerReducePosition`;
}

export interface ManagerReducePositionFields {
    user: ToField<"address">;
    collateralToken: ToField<TypeName>;
    baseToken: ToField<TypeName>;
    positionId: ToField<"u64">;
    reducedSize: ToField<"u64">;
    collateralPrice: ToField<"u64">;
    tradingPrice: ToField<"u64">;
    cancelledOrderIds: ToField<Vector<"u64">>;
    u64Padding: ToField<Vector<"u64">>;
}

export type ManagerReducePositionReified = Reified<ManagerReducePosition, ManagerReducePositionFields>;

export class ManagerReducePosition implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::trading::ManagerReducePosition`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = ManagerReducePosition.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::trading::ManagerReducePosition`;
    readonly $typeArgs: [];
    readonly $isPhantom = ManagerReducePosition.$isPhantom;

    readonly user: ToField<"address">;
    readonly collateralToken: ToField<TypeName>;
    readonly baseToken: ToField<TypeName>;
    readonly positionId: ToField<"u64">;
    readonly reducedSize: ToField<"u64">;
    readonly collateralPrice: ToField<"u64">;
    readonly tradingPrice: ToField<"u64">;
    readonly cancelledOrderIds: ToField<Vector<"u64">>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: ManagerReducePositionFields) {
        this.$fullTypeName = composeSuiType(
            ManagerReducePosition.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::trading::ManagerReducePosition`;
        this.$typeArgs = typeArgs;

        this.user = fields.user;
        this.collateralToken = fields.collateralToken;
        this.baseToken = fields.baseToken;
        this.positionId = fields.positionId;
        this.reducedSize = fields.reducedSize;
        this.collateralPrice = fields.collateralPrice;
        this.tradingPrice = fields.tradingPrice;
        this.cancelledOrderIds = fields.cancelledOrderIds;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): ManagerReducePositionReified {
        return {
            typeName: ManagerReducePosition.$typeName,
            fullTypeName: composeSuiType(ManagerReducePosition.$typeName, ...[]) as `${typeof PKG_V1}::trading::ManagerReducePosition`,
            typeArgs: [] as [],
            isPhantom: ManagerReducePosition.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => ManagerReducePosition.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => ManagerReducePosition.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => ManagerReducePosition.fromBcs(data),
            bcs: ManagerReducePosition.bcs,
            fromJSONField: (field: any) => ManagerReducePosition.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => ManagerReducePosition.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => ManagerReducePosition.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => ManagerReducePosition.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => ManagerReducePosition.fetch(client, id),
            new: (fields: ManagerReducePositionFields) => {
                return new ManagerReducePosition([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return ManagerReducePosition.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<ManagerReducePosition>> {
        return phantom(ManagerReducePosition.reified());
    }
    static get p() {
        return ManagerReducePosition.phantom();
    }

    static get bcs() {
        return bcs.struct("ManagerReducePosition", {
            user: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            collateral_token: TypeName.bcs,
            base_token: TypeName.bcs,
            position_id: bcs.u64(),
            reduced_size: bcs.u64(),
            collateral_price: bcs.u64(),
            trading_price: bcs.u64(),
            cancelled_order_ids: bcs.vector(bcs.u64()),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): ManagerReducePosition {
        return ManagerReducePosition.reified().new({
            user: decodeFromFields("address", fields.user),
            collateralToken: decodeFromFields(TypeName.reified(), fields.collateral_token),
            baseToken: decodeFromFields(TypeName.reified(), fields.base_token),
            positionId: decodeFromFields("u64", fields.position_id),
            reducedSize: decodeFromFields("u64", fields.reduced_size),
            collateralPrice: decodeFromFields("u64", fields.collateral_price),
            tradingPrice: decodeFromFields("u64", fields.trading_price),
            cancelledOrderIds: decodeFromFields(reified.vector("u64"), fields.cancelled_order_ids),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): ManagerReducePosition {
        if (!isManagerReducePosition(item.type)) {
            throw new Error("not a ManagerReducePosition type");
        }

        return ManagerReducePosition.reified().new({
            user: decodeFromFieldsWithTypes("address", item.fields.user),
            collateralToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.collateral_token),
            baseToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.base_token),
            positionId: decodeFromFieldsWithTypes("u64", item.fields.position_id),
            reducedSize: decodeFromFieldsWithTypes("u64", item.fields.reduced_size),
            collateralPrice: decodeFromFieldsWithTypes("u64", item.fields.collateral_price),
            tradingPrice: decodeFromFieldsWithTypes("u64", item.fields.trading_price),
            cancelledOrderIds: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.cancelled_order_ids),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): ManagerReducePosition {
        return ManagerReducePosition.fromFields(ManagerReducePosition.bcs.parse(data));
    }

    toJSONField() {
        return {
            user: this.user,
            collateralToken: this.collateralToken.toJSONField(),
            baseToken: this.baseToken.toJSONField(),
            positionId: this.positionId.toString(),
            reducedSize: this.reducedSize.toString(),
            collateralPrice: this.collateralPrice.toString(),
            tradingPrice: this.tradingPrice.toString(),
            cancelledOrderIds: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.cancelledOrderIds),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): ManagerReducePosition {
        return ManagerReducePosition.reified().new({
            user: decodeFromJSONField("address", field.user),
            collateralToken: decodeFromJSONField(TypeName.reified(), field.collateralToken),
            baseToken: decodeFromJSONField(TypeName.reified(), field.baseToken),
            positionId: decodeFromJSONField("u64", field.positionId),
            reducedSize: decodeFromJSONField("u64", field.reducedSize),
            collateralPrice: decodeFromJSONField("u64", field.collateralPrice),
            tradingPrice: decodeFromJSONField("u64", field.tradingPrice),
            cancelledOrderIds: decodeFromJSONField(reified.vector("u64"), field.cancelledOrderIds),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): ManagerReducePosition {
        if (json.$typeName !== ManagerReducePosition.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return ManagerReducePosition.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): ManagerReducePosition {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isManagerReducePosition(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a ManagerReducePosition object`);
        }
        return ManagerReducePosition.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): ManagerReducePosition {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isManagerReducePosition(data.bcs.type)) {
                throw new Error(`object at is not a ManagerReducePosition object`);
            }

            return ManagerReducePosition.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ManagerReducePosition.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<ManagerReducePosition> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching ManagerReducePosition object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isManagerReducePosition(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ManagerReducePosition object`);
        }

        return ManagerReducePosition.fromSuiObjectData(res.data);
    }
}

/* ============================== ManagerUpdateProcessStatusAfterOrderEvent =============================== */

export function isManagerUpdateProcessStatusAfterOrderEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::trading::ManagerUpdateProcessStatusAfterOrderEvent`;
}

export interface ManagerUpdateProcessStatusAfterOrderEventFields {
    marketIndex: ToField<"u64">;
    poolIndex: ToField<"u64">;
    liquidityToken: ToField<TypeName>;
    tradingBaseToken: ToField<TypeName>;
}

export type ManagerUpdateProcessStatusAfterOrderEventReified = Reified<
    ManagerUpdateProcessStatusAfterOrderEvent,
    ManagerUpdateProcessStatusAfterOrderEventFields
>;

export class ManagerUpdateProcessStatusAfterOrderEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::trading::ManagerUpdateProcessStatusAfterOrderEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = ManagerUpdateProcessStatusAfterOrderEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::trading::ManagerUpdateProcessStatusAfterOrderEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = ManagerUpdateProcessStatusAfterOrderEvent.$isPhantom;

    readonly marketIndex: ToField<"u64">;
    readonly poolIndex: ToField<"u64">;
    readonly liquidityToken: ToField<TypeName>;
    readonly tradingBaseToken: ToField<TypeName>;

    private constructor(typeArgs: [], fields: ManagerUpdateProcessStatusAfterOrderEventFields) {
        this.$fullTypeName = composeSuiType(
            ManagerUpdateProcessStatusAfterOrderEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::trading::ManagerUpdateProcessStatusAfterOrderEvent`;
        this.$typeArgs = typeArgs;

        this.marketIndex = fields.marketIndex;
        this.poolIndex = fields.poolIndex;
        this.liquidityToken = fields.liquidityToken;
        this.tradingBaseToken = fields.tradingBaseToken;
    }

    static reified(): ManagerUpdateProcessStatusAfterOrderEventReified {
        return {
            typeName: ManagerUpdateProcessStatusAfterOrderEvent.$typeName,
            fullTypeName: composeSuiType(
                ManagerUpdateProcessStatusAfterOrderEvent.$typeName,
                ...[]
            ) as `${typeof PKG_V1}::trading::ManagerUpdateProcessStatusAfterOrderEvent`,
            typeArgs: [] as [],
            isPhantom: ManagerUpdateProcessStatusAfterOrderEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => ManagerUpdateProcessStatusAfterOrderEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => ManagerUpdateProcessStatusAfterOrderEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => ManagerUpdateProcessStatusAfterOrderEvent.fromBcs(data),
            bcs: ManagerUpdateProcessStatusAfterOrderEvent.bcs,
            fromJSONField: (field: any) => ManagerUpdateProcessStatusAfterOrderEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => ManagerUpdateProcessStatusAfterOrderEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => ManagerUpdateProcessStatusAfterOrderEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => ManagerUpdateProcessStatusAfterOrderEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => ManagerUpdateProcessStatusAfterOrderEvent.fetch(client, id),
            new: (fields: ManagerUpdateProcessStatusAfterOrderEventFields) => {
                return new ManagerUpdateProcessStatusAfterOrderEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return ManagerUpdateProcessStatusAfterOrderEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<ManagerUpdateProcessStatusAfterOrderEvent>> {
        return phantom(ManagerUpdateProcessStatusAfterOrderEvent.reified());
    }
    static get p() {
        return ManagerUpdateProcessStatusAfterOrderEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("ManagerUpdateProcessStatusAfterOrderEvent", {
            market_index: bcs.u64(),
            pool_index: bcs.u64(),
            liquidity_token: TypeName.bcs,
            trading_base_token: TypeName.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): ManagerUpdateProcessStatusAfterOrderEvent {
        return ManagerUpdateProcessStatusAfterOrderEvent.reified().new({
            marketIndex: decodeFromFields("u64", fields.market_index),
            poolIndex: decodeFromFields("u64", fields.pool_index),
            liquidityToken: decodeFromFields(TypeName.reified(), fields.liquidity_token),
            tradingBaseToken: decodeFromFields(TypeName.reified(), fields.trading_base_token),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): ManagerUpdateProcessStatusAfterOrderEvent {
        if (!isManagerUpdateProcessStatusAfterOrderEvent(item.type)) {
            throw new Error("not a ManagerUpdateProcessStatusAfterOrderEvent type");
        }

        return ManagerUpdateProcessStatusAfterOrderEvent.reified().new({
            marketIndex: decodeFromFieldsWithTypes("u64", item.fields.market_index),
            poolIndex: decodeFromFieldsWithTypes("u64", item.fields.pool_index),
            liquidityToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.liquidity_token),
            tradingBaseToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.trading_base_token),
        });
    }

    static fromBcs(data: Uint8Array): ManagerUpdateProcessStatusAfterOrderEvent {
        return ManagerUpdateProcessStatusAfterOrderEvent.fromFields(ManagerUpdateProcessStatusAfterOrderEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            marketIndex: this.marketIndex.toString(),
            poolIndex: this.poolIndex.toString(),
            liquidityToken: this.liquidityToken.toJSONField(),
            tradingBaseToken: this.tradingBaseToken.toJSONField(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): ManagerUpdateProcessStatusAfterOrderEvent {
        return ManagerUpdateProcessStatusAfterOrderEvent.reified().new({
            marketIndex: decodeFromJSONField("u64", field.marketIndex),
            poolIndex: decodeFromJSONField("u64", field.poolIndex),
            liquidityToken: decodeFromJSONField(TypeName.reified(), field.liquidityToken),
            tradingBaseToken: decodeFromJSONField(TypeName.reified(), field.tradingBaseToken),
        });
    }

    static fromJSON(json: Record<string, any>): ManagerUpdateProcessStatusAfterOrderEvent {
        if (json.$typeName !== ManagerUpdateProcessStatusAfterOrderEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return ManagerUpdateProcessStatusAfterOrderEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): ManagerUpdateProcessStatusAfterOrderEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isManagerUpdateProcessStatusAfterOrderEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a ManagerUpdateProcessStatusAfterOrderEvent object`);
        }
        return ManagerUpdateProcessStatusAfterOrderEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): ManagerUpdateProcessStatusAfterOrderEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isManagerUpdateProcessStatusAfterOrderEvent(data.bcs.type)) {
                throw new Error(`object at is not a ManagerUpdateProcessStatusAfterOrderEvent object`);
            }

            return ManagerUpdateProcessStatusAfterOrderEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ManagerUpdateProcessStatusAfterOrderEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<ManagerUpdateProcessStatusAfterOrderEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching ManagerUpdateProcessStatusAfterOrderEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isManagerUpdateProcessStatusAfterOrderEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ManagerUpdateProcessStatusAfterOrderEvent object`);
        }

        return ManagerUpdateProcessStatusAfterOrderEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== ManagerUpdateProcessStatusAfterPositionEvent =============================== */

export function isManagerUpdateProcessStatusAfterPositionEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::trading::ManagerUpdateProcessStatusAfterPositionEvent`;
}

export interface ManagerUpdateProcessStatusAfterPositionEventFields {
    marketIndex: ToField<"u64">;
    poolIndex: ToField<"u64">;
    liquidityToken: ToField<TypeName>;
    tradingBaseToken: ToField<TypeName>;
}

export type ManagerUpdateProcessStatusAfterPositionEventReified = Reified<
    ManagerUpdateProcessStatusAfterPositionEvent,
    ManagerUpdateProcessStatusAfterPositionEventFields
>;

export class ManagerUpdateProcessStatusAfterPositionEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::trading::ManagerUpdateProcessStatusAfterPositionEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = ManagerUpdateProcessStatusAfterPositionEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::trading::ManagerUpdateProcessStatusAfterPositionEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = ManagerUpdateProcessStatusAfterPositionEvent.$isPhantom;

    readonly marketIndex: ToField<"u64">;
    readonly poolIndex: ToField<"u64">;
    readonly liquidityToken: ToField<TypeName>;
    readonly tradingBaseToken: ToField<TypeName>;

    private constructor(typeArgs: [], fields: ManagerUpdateProcessStatusAfterPositionEventFields) {
        this.$fullTypeName = composeSuiType(
            ManagerUpdateProcessStatusAfterPositionEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::trading::ManagerUpdateProcessStatusAfterPositionEvent`;
        this.$typeArgs = typeArgs;

        this.marketIndex = fields.marketIndex;
        this.poolIndex = fields.poolIndex;
        this.liquidityToken = fields.liquidityToken;
        this.tradingBaseToken = fields.tradingBaseToken;
    }

    static reified(): ManagerUpdateProcessStatusAfterPositionEventReified {
        return {
            typeName: ManagerUpdateProcessStatusAfterPositionEvent.$typeName,
            fullTypeName: composeSuiType(
                ManagerUpdateProcessStatusAfterPositionEvent.$typeName,
                ...[]
            ) as `${typeof PKG_V1}::trading::ManagerUpdateProcessStatusAfterPositionEvent`,
            typeArgs: [] as [],
            isPhantom: ManagerUpdateProcessStatusAfterPositionEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => ManagerUpdateProcessStatusAfterPositionEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => ManagerUpdateProcessStatusAfterPositionEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => ManagerUpdateProcessStatusAfterPositionEvent.fromBcs(data),
            bcs: ManagerUpdateProcessStatusAfterPositionEvent.bcs,
            fromJSONField: (field: any) => ManagerUpdateProcessStatusAfterPositionEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => ManagerUpdateProcessStatusAfterPositionEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => ManagerUpdateProcessStatusAfterPositionEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => ManagerUpdateProcessStatusAfterPositionEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => ManagerUpdateProcessStatusAfterPositionEvent.fetch(client, id),
            new: (fields: ManagerUpdateProcessStatusAfterPositionEventFields) => {
                return new ManagerUpdateProcessStatusAfterPositionEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return ManagerUpdateProcessStatusAfterPositionEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<ManagerUpdateProcessStatusAfterPositionEvent>> {
        return phantom(ManagerUpdateProcessStatusAfterPositionEvent.reified());
    }
    static get p() {
        return ManagerUpdateProcessStatusAfterPositionEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("ManagerUpdateProcessStatusAfterPositionEvent", {
            market_index: bcs.u64(),
            pool_index: bcs.u64(),
            liquidity_token: TypeName.bcs,
            trading_base_token: TypeName.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): ManagerUpdateProcessStatusAfterPositionEvent {
        return ManagerUpdateProcessStatusAfterPositionEvent.reified().new({
            marketIndex: decodeFromFields("u64", fields.market_index),
            poolIndex: decodeFromFields("u64", fields.pool_index),
            liquidityToken: decodeFromFields(TypeName.reified(), fields.liquidity_token),
            tradingBaseToken: decodeFromFields(TypeName.reified(), fields.trading_base_token),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): ManagerUpdateProcessStatusAfterPositionEvent {
        if (!isManagerUpdateProcessStatusAfterPositionEvent(item.type)) {
            throw new Error("not a ManagerUpdateProcessStatusAfterPositionEvent type");
        }

        return ManagerUpdateProcessStatusAfterPositionEvent.reified().new({
            marketIndex: decodeFromFieldsWithTypes("u64", item.fields.market_index),
            poolIndex: decodeFromFieldsWithTypes("u64", item.fields.pool_index),
            liquidityToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.liquidity_token),
            tradingBaseToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.trading_base_token),
        });
    }

    static fromBcs(data: Uint8Array): ManagerUpdateProcessStatusAfterPositionEvent {
        return ManagerUpdateProcessStatusAfterPositionEvent.fromFields(ManagerUpdateProcessStatusAfterPositionEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            marketIndex: this.marketIndex.toString(),
            poolIndex: this.poolIndex.toString(),
            liquidityToken: this.liquidityToken.toJSONField(),
            tradingBaseToken: this.tradingBaseToken.toJSONField(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): ManagerUpdateProcessStatusAfterPositionEvent {
        return ManagerUpdateProcessStatusAfterPositionEvent.reified().new({
            marketIndex: decodeFromJSONField("u64", field.marketIndex),
            poolIndex: decodeFromJSONField("u64", field.poolIndex),
            liquidityToken: decodeFromJSONField(TypeName.reified(), field.liquidityToken),
            tradingBaseToken: decodeFromJSONField(TypeName.reified(), field.tradingBaseToken),
        });
    }

    static fromJSON(json: Record<string, any>): ManagerUpdateProcessStatusAfterPositionEvent {
        if (json.$typeName !== ManagerUpdateProcessStatusAfterPositionEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return ManagerUpdateProcessStatusAfterPositionEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): ManagerUpdateProcessStatusAfterPositionEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isManagerUpdateProcessStatusAfterPositionEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a ManagerUpdateProcessStatusAfterPositionEvent object`);
        }
        return ManagerUpdateProcessStatusAfterPositionEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): ManagerUpdateProcessStatusAfterPositionEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isManagerUpdateProcessStatusAfterPositionEvent(data.bcs.type)) {
                throw new Error(`object at is not a ManagerUpdateProcessStatusAfterPositionEvent object`);
            }

            return ManagerUpdateProcessStatusAfterPositionEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ManagerUpdateProcessStatusAfterPositionEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<ManagerUpdateProcessStatusAfterPositionEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching ManagerUpdateProcessStatusAfterPositionEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isManagerUpdateProcessStatusAfterPositionEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ManagerUpdateProcessStatusAfterPositionEvent object`);
        }

        return ManagerUpdateProcessStatusAfterPositionEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== MarketConfig =============================== */

export function isMarketConfig(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::trading::MarketConfig`;
}

export interface MarketConfigFields {
    oracleId: ToField<"address">;
    maxLeverageMbp: ToField<"u64">;
    minSize: ToField<"u64">;
    lotSize: ToField<"u64">;
    tradingFeeRate: ToField<"u64">;
    tradingFeeDecimal: ToField<"u64">;
    basicFundingRate: ToField<"u64">;
    fundingIntervalTsMs: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type MarketConfigReified = Reified<MarketConfig, MarketConfigFields>;

export class MarketConfig implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::trading::MarketConfig`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = MarketConfig.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::trading::MarketConfig`;
    readonly $typeArgs: [];
    readonly $isPhantom = MarketConfig.$isPhantom;

    readonly oracleId: ToField<"address">;
    readonly maxLeverageMbp: ToField<"u64">;
    readonly minSize: ToField<"u64">;
    readonly lotSize: ToField<"u64">;
    readonly tradingFeeRate: ToField<"u64">;
    readonly tradingFeeDecimal: ToField<"u64">;
    readonly basicFundingRate: ToField<"u64">;
    readonly fundingIntervalTsMs: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: MarketConfigFields) {
        this.$fullTypeName = composeSuiType(MarketConfig.$typeName, ...typeArgs) as `${typeof PKG_V1}::trading::MarketConfig`;
        this.$typeArgs = typeArgs;

        this.oracleId = fields.oracleId;
        this.maxLeverageMbp = fields.maxLeverageMbp;
        this.minSize = fields.minSize;
        this.lotSize = fields.lotSize;
        this.tradingFeeRate = fields.tradingFeeRate;
        this.tradingFeeDecimal = fields.tradingFeeDecimal;
        this.basicFundingRate = fields.basicFundingRate;
        this.fundingIntervalTsMs = fields.fundingIntervalTsMs;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): MarketConfigReified {
        return {
            typeName: MarketConfig.$typeName,
            fullTypeName: composeSuiType(MarketConfig.$typeName, ...[]) as `${typeof PKG_V1}::trading::MarketConfig`,
            typeArgs: [] as [],
            isPhantom: MarketConfig.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => MarketConfig.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => MarketConfig.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => MarketConfig.fromBcs(data),
            bcs: MarketConfig.bcs,
            fromJSONField: (field: any) => MarketConfig.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => MarketConfig.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => MarketConfig.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => MarketConfig.fromSuiObjectData(content),
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
            oracle_id: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            max_leverage_mbp: bcs.u64(),
            min_size: bcs.u64(),
            lot_size: bcs.u64(),
            trading_fee_rate: bcs.u64(),
            trading_fee_decimal: bcs.u64(),
            basic_funding_rate: bcs.u64(),
            funding_interval_ts_ms: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): MarketConfig {
        return MarketConfig.reified().new({
            oracleId: decodeFromFields("address", fields.oracle_id),
            maxLeverageMbp: decodeFromFields("u64", fields.max_leverage_mbp),
            minSize: decodeFromFields("u64", fields.min_size),
            lotSize: decodeFromFields("u64", fields.lot_size),
            tradingFeeRate: decodeFromFields("u64", fields.trading_fee_rate),
            tradingFeeDecimal: decodeFromFields("u64", fields.trading_fee_decimal),
            basicFundingRate: decodeFromFields("u64", fields.basic_funding_rate),
            fundingIntervalTsMs: decodeFromFields("u64", fields.funding_interval_ts_ms),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): MarketConfig {
        if (!isMarketConfig(item.type)) {
            throw new Error("not a MarketConfig type");
        }

        return MarketConfig.reified().new({
            oracleId: decodeFromFieldsWithTypes("address", item.fields.oracle_id),
            maxLeverageMbp: decodeFromFieldsWithTypes("u64", item.fields.max_leverage_mbp),
            minSize: decodeFromFieldsWithTypes("u64", item.fields.min_size),
            lotSize: decodeFromFieldsWithTypes("u64", item.fields.lot_size),
            tradingFeeRate: decodeFromFieldsWithTypes("u64", item.fields.trading_fee_rate),
            tradingFeeDecimal: decodeFromFieldsWithTypes("u64", item.fields.trading_fee_decimal),
            basicFundingRate: decodeFromFieldsWithTypes("u64", item.fields.basic_funding_rate),
            fundingIntervalTsMs: decodeFromFieldsWithTypes("u64", item.fields.funding_interval_ts_ms),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): MarketConfig {
        return MarketConfig.fromFields(MarketConfig.bcs.parse(data));
    }

    toJSONField() {
        return {
            oracleId: this.oracleId,
            maxLeverageMbp: this.maxLeverageMbp.toString(),
            minSize: this.minSize.toString(),
            lotSize: this.lotSize.toString(),
            tradingFeeRate: this.tradingFeeRate.toString(),
            tradingFeeDecimal: this.tradingFeeDecimal.toString(),
            basicFundingRate: this.basicFundingRate.toString(),
            fundingIntervalTsMs: this.fundingIntervalTsMs.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): MarketConfig {
        return MarketConfig.reified().new({
            oracleId: decodeFromJSONField("address", field.oracleId),
            maxLeverageMbp: decodeFromJSONField("u64", field.maxLeverageMbp),
            minSize: decodeFromJSONField("u64", field.minSize),
            lotSize: decodeFromJSONField("u64", field.lotSize),
            tradingFeeRate: decodeFromJSONField("u64", field.tradingFeeRate),
            tradingFeeDecimal: decodeFromJSONField("u64", field.tradingFeeDecimal),
            basicFundingRate: decodeFromJSONField("u64", field.basicFundingRate),
            fundingIntervalTsMs: decodeFromJSONField("u64", field.fundingIntervalTsMs),
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

    static fromSuiObjectData(data: SuiObjectData): MarketConfig {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isMarketConfig(data.bcs.type)) {
                throw new Error(`object at is not a MarketConfig object`);
            }

            return MarketConfig.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return MarketConfig.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<MarketConfig> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching MarketConfig object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isMarketConfig(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a MarketConfig object`);
        }

        return MarketConfig.fromSuiObjectData(res.data);
    }
}

/* ============================== MarketInfo =============================== */

export function isMarketInfo(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::trading::MarketInfo`;
}

export interface MarketInfoFields {
    isActive: ToField<"bool">;
    sizeDecimal: ToField<"u64">;
    userLongPositionSize: ToField<"u64">;
    userShortPositionSize: ToField<"u64">;
    nextPositionId: ToField<"u64">;
    userLongOrderSize: ToField<"u64">;
    userShortOrderSize: ToField<"u64">;
    nextOrderId: ToField<"u64">;
    lastFundingTsMs: ToField<"u64">;
    cumulativeFundingRateIndexSign: ToField<"bool">;
    cumulativeFundingRateIndex: ToField<"u64">;
    previousLastFundingTsMs: ToField<"u64">;
    previousCumulativeFundingRateIndexSign: ToField<"bool">;
    previousCumulativeFundingRateIndex: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type MarketInfoReified = Reified<MarketInfo, MarketInfoFields>;

export class MarketInfo implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::trading::MarketInfo`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = MarketInfo.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::trading::MarketInfo`;
    readonly $typeArgs: [];
    readonly $isPhantom = MarketInfo.$isPhantom;

    readonly isActive: ToField<"bool">;
    readonly sizeDecimal: ToField<"u64">;
    readonly userLongPositionSize: ToField<"u64">;
    readonly userShortPositionSize: ToField<"u64">;
    readonly nextPositionId: ToField<"u64">;
    readonly userLongOrderSize: ToField<"u64">;
    readonly userShortOrderSize: ToField<"u64">;
    readonly nextOrderId: ToField<"u64">;
    readonly lastFundingTsMs: ToField<"u64">;
    readonly cumulativeFundingRateIndexSign: ToField<"bool">;
    readonly cumulativeFundingRateIndex: ToField<"u64">;
    readonly previousLastFundingTsMs: ToField<"u64">;
    readonly previousCumulativeFundingRateIndexSign: ToField<"bool">;
    readonly previousCumulativeFundingRateIndex: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: MarketInfoFields) {
        this.$fullTypeName = composeSuiType(MarketInfo.$typeName, ...typeArgs) as `${typeof PKG_V1}::trading::MarketInfo`;
        this.$typeArgs = typeArgs;

        this.isActive = fields.isActive;
        this.sizeDecimal = fields.sizeDecimal;
        this.userLongPositionSize = fields.userLongPositionSize;
        this.userShortPositionSize = fields.userShortPositionSize;
        this.nextPositionId = fields.nextPositionId;
        this.userLongOrderSize = fields.userLongOrderSize;
        this.userShortOrderSize = fields.userShortOrderSize;
        this.nextOrderId = fields.nextOrderId;
        this.lastFundingTsMs = fields.lastFundingTsMs;
        this.cumulativeFundingRateIndexSign = fields.cumulativeFundingRateIndexSign;
        this.cumulativeFundingRateIndex = fields.cumulativeFundingRateIndex;
        this.previousLastFundingTsMs = fields.previousLastFundingTsMs;
        this.previousCumulativeFundingRateIndexSign = fields.previousCumulativeFundingRateIndexSign;
        this.previousCumulativeFundingRateIndex = fields.previousCumulativeFundingRateIndex;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): MarketInfoReified {
        return {
            typeName: MarketInfo.$typeName,
            fullTypeName: composeSuiType(MarketInfo.$typeName, ...[]) as `${typeof PKG_V1}::trading::MarketInfo`,
            typeArgs: [] as [],
            isPhantom: MarketInfo.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => MarketInfo.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => MarketInfo.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => MarketInfo.fromBcs(data),
            bcs: MarketInfo.bcs,
            fromJSONField: (field: any) => MarketInfo.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => MarketInfo.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => MarketInfo.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => MarketInfo.fromSuiObjectData(content),
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
            user_long_position_size: bcs.u64(),
            user_short_position_size: bcs.u64(),
            next_position_id: bcs.u64(),
            user_long_order_size: bcs.u64(),
            user_short_order_size: bcs.u64(),
            next_order_id: bcs.u64(),
            last_funding_ts_ms: bcs.u64(),
            cumulative_funding_rate_index_sign: bcs.bool(),
            cumulative_funding_rate_index: bcs.u64(),
            previous_last_funding_ts_ms: bcs.u64(),
            previous_cumulative_funding_rate_index_sign: bcs.bool(),
            previous_cumulative_funding_rate_index: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): MarketInfo {
        return MarketInfo.reified().new({
            isActive: decodeFromFields("bool", fields.is_active),
            sizeDecimal: decodeFromFields("u64", fields.size_decimal),
            userLongPositionSize: decodeFromFields("u64", fields.user_long_position_size),
            userShortPositionSize: decodeFromFields("u64", fields.user_short_position_size),
            nextPositionId: decodeFromFields("u64", fields.next_position_id),
            userLongOrderSize: decodeFromFields("u64", fields.user_long_order_size),
            userShortOrderSize: decodeFromFields("u64", fields.user_short_order_size),
            nextOrderId: decodeFromFields("u64", fields.next_order_id),
            lastFundingTsMs: decodeFromFields("u64", fields.last_funding_ts_ms),
            cumulativeFundingRateIndexSign: decodeFromFields("bool", fields.cumulative_funding_rate_index_sign),
            cumulativeFundingRateIndex: decodeFromFields("u64", fields.cumulative_funding_rate_index),
            previousLastFundingTsMs: decodeFromFields("u64", fields.previous_last_funding_ts_ms),
            previousCumulativeFundingRateIndexSign: decodeFromFields("bool", fields.previous_cumulative_funding_rate_index_sign),
            previousCumulativeFundingRateIndex: decodeFromFields("u64", fields.previous_cumulative_funding_rate_index),
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
            userLongPositionSize: decodeFromFieldsWithTypes("u64", item.fields.user_long_position_size),
            userShortPositionSize: decodeFromFieldsWithTypes("u64", item.fields.user_short_position_size),
            nextPositionId: decodeFromFieldsWithTypes("u64", item.fields.next_position_id),
            userLongOrderSize: decodeFromFieldsWithTypes("u64", item.fields.user_long_order_size),
            userShortOrderSize: decodeFromFieldsWithTypes("u64", item.fields.user_short_order_size),
            nextOrderId: decodeFromFieldsWithTypes("u64", item.fields.next_order_id),
            lastFundingTsMs: decodeFromFieldsWithTypes("u64", item.fields.last_funding_ts_ms),
            cumulativeFundingRateIndexSign: decodeFromFieldsWithTypes("bool", item.fields.cumulative_funding_rate_index_sign),
            cumulativeFundingRateIndex: decodeFromFieldsWithTypes("u64", item.fields.cumulative_funding_rate_index),
            previousLastFundingTsMs: decodeFromFieldsWithTypes("u64", item.fields.previous_last_funding_ts_ms),
            previousCumulativeFundingRateIndexSign: decodeFromFieldsWithTypes(
                "bool",
                item.fields.previous_cumulative_funding_rate_index_sign
            ),
            previousCumulativeFundingRateIndex: decodeFromFieldsWithTypes("u64", item.fields.previous_cumulative_funding_rate_index),
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
            userLongPositionSize: this.userLongPositionSize.toString(),
            userShortPositionSize: this.userShortPositionSize.toString(),
            nextPositionId: this.nextPositionId.toString(),
            userLongOrderSize: this.userLongOrderSize.toString(),
            userShortOrderSize: this.userShortOrderSize.toString(),
            nextOrderId: this.nextOrderId.toString(),
            lastFundingTsMs: this.lastFundingTsMs.toString(),
            cumulativeFundingRateIndexSign: this.cumulativeFundingRateIndexSign,
            cumulativeFundingRateIndex: this.cumulativeFundingRateIndex.toString(),
            previousLastFundingTsMs: this.previousLastFundingTsMs.toString(),
            previousCumulativeFundingRateIndexSign: this.previousCumulativeFundingRateIndexSign,
            previousCumulativeFundingRateIndex: this.previousCumulativeFundingRateIndex.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): MarketInfo {
        return MarketInfo.reified().new({
            isActive: decodeFromJSONField("bool", field.isActive),
            sizeDecimal: decodeFromJSONField("u64", field.sizeDecimal),
            userLongPositionSize: decodeFromJSONField("u64", field.userLongPositionSize),
            userShortPositionSize: decodeFromJSONField("u64", field.userShortPositionSize),
            nextPositionId: decodeFromJSONField("u64", field.nextPositionId),
            userLongOrderSize: decodeFromJSONField("u64", field.userLongOrderSize),
            userShortOrderSize: decodeFromJSONField("u64", field.userShortOrderSize),
            nextOrderId: decodeFromJSONField("u64", field.nextOrderId),
            lastFundingTsMs: decodeFromJSONField("u64", field.lastFundingTsMs),
            cumulativeFundingRateIndexSign: decodeFromJSONField("bool", field.cumulativeFundingRateIndexSign),
            cumulativeFundingRateIndex: decodeFromJSONField("u64", field.cumulativeFundingRateIndex),
            previousLastFundingTsMs: decodeFromJSONField("u64", field.previousLastFundingTsMs),
            previousCumulativeFundingRateIndexSign: decodeFromJSONField("bool", field.previousCumulativeFundingRateIndexSign),
            previousCumulativeFundingRateIndex: decodeFromJSONField("u64", field.previousCumulativeFundingRateIndex),
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

    static fromSuiObjectData(data: SuiObjectData): MarketInfo {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isMarketInfo(data.bcs.type)) {
                throw new Error(`object at is not a MarketInfo object`);
            }

            return MarketInfo.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return MarketInfo.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<MarketInfo> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching MarketInfo object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isMarketInfo(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a MarketInfo object`);
        }

        return MarketInfo.fromSuiObjectData(res.data);
    }
}

/* ============================== MarketRegistry =============================== */

export function isMarketRegistry(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::trading::MarketRegistry`;
}

export interface MarketRegistryFields {
    id: ToField<UID>;
    referralRegistry: ToField<UID>;
    numMarket: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type MarketRegistryReified = Reified<MarketRegistry, MarketRegistryFields>;

export class MarketRegistry implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::trading::MarketRegistry`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = MarketRegistry.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::trading::MarketRegistry`;
    readonly $typeArgs: [];
    readonly $isPhantom = MarketRegistry.$isPhantom;

    readonly id: ToField<UID>;
    readonly referralRegistry: ToField<UID>;
    readonly numMarket: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: MarketRegistryFields) {
        this.$fullTypeName = composeSuiType(MarketRegistry.$typeName, ...typeArgs) as `${typeof PKG_V1}::trading::MarketRegistry`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.referralRegistry = fields.referralRegistry;
        this.numMarket = fields.numMarket;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): MarketRegistryReified {
        return {
            typeName: MarketRegistry.$typeName,
            fullTypeName: composeSuiType(MarketRegistry.$typeName, ...[]) as `${typeof PKG_V1}::trading::MarketRegistry`,
            typeArgs: [] as [],
            isPhantom: MarketRegistry.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => MarketRegistry.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => MarketRegistry.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => MarketRegistry.fromBcs(data),
            bcs: MarketRegistry.bcs,
            fromJSONField: (field: any) => MarketRegistry.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => MarketRegistry.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => MarketRegistry.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => MarketRegistry.fromSuiObjectData(content),
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
            referral_registry: UID.bcs,
            num_market: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): MarketRegistry {
        return MarketRegistry.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            referralRegistry: decodeFromFields(UID.reified(), fields.referral_registry),
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
            referralRegistry: decodeFromFieldsWithTypes(UID.reified(), item.fields.referral_registry),
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
            referralRegistry: this.referralRegistry,
            numMarket: this.numMarket.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): MarketRegistry {
        return MarketRegistry.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            referralRegistry: decodeFromJSONField(UID.reified(), field.referralRegistry),
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

    static fromSuiObjectData(data: SuiObjectData): MarketRegistry {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isMarketRegistry(data.bcs.type)) {
                throw new Error(`object at is not a MarketRegistry object`);
            }

            return MarketRegistry.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return MarketRegistry.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<MarketRegistry> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching MarketRegistry object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isMarketRegistry(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a MarketRegistry object`);
        }

        return MarketRegistry.fromSuiObjectData(res.data);
    }
}

/* ============================== Markets =============================== */

export function isMarkets(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::trading::Markets`;
}

export interface MarketsFields {
    id: ToField<UID>;
    index: ToField<"u64">;
    lpTokenType: ToField<TypeName>;
    quoteTokenType: ToField<TypeName>;
    isActive: ToField<"bool">;
    protocolFeeShareBp: ToField<"u64">;
    symbols: ToField<Vector<TypeName>>;
    symbolMarkets: ToField<ObjectTable<ToPhantom<TypeName>, ToPhantom<SymbolMarket>>>;
    u64Padding: ToField<Vector<"u64">>;
}

export type MarketsReified = Reified<Markets, MarketsFields>;

export class Markets implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::trading::Markets`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = Markets.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::trading::Markets`;
    readonly $typeArgs: [];
    readonly $isPhantom = Markets.$isPhantom;

    readonly id: ToField<UID>;
    readonly index: ToField<"u64">;
    readonly lpTokenType: ToField<TypeName>;
    readonly quoteTokenType: ToField<TypeName>;
    readonly isActive: ToField<"bool">;
    readonly protocolFeeShareBp: ToField<"u64">;
    readonly symbols: ToField<Vector<TypeName>>;
    readonly symbolMarkets: ToField<ObjectTable<ToPhantom<TypeName>, ToPhantom<SymbolMarket>>>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: MarketsFields) {
        this.$fullTypeName = composeSuiType(Markets.$typeName, ...typeArgs) as `${typeof PKG_V1}::trading::Markets`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.index = fields.index;
        this.lpTokenType = fields.lpTokenType;
        this.quoteTokenType = fields.quoteTokenType;
        this.isActive = fields.isActive;
        this.protocolFeeShareBp = fields.protocolFeeShareBp;
        this.symbols = fields.symbols;
        this.symbolMarkets = fields.symbolMarkets;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): MarketsReified {
        return {
            typeName: Markets.$typeName,
            fullTypeName: composeSuiType(Markets.$typeName, ...[]) as `${typeof PKG_V1}::trading::Markets`,
            typeArgs: [] as [],
            isPhantom: Markets.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Markets.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Markets.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Markets.fromBcs(data),
            bcs: Markets.bcs,
            fromJSONField: (field: any) => Markets.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Markets.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Markets.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => Markets.fromSuiObjectData(content),
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
            protocol_fee_share_bp: bcs.u64(),
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
            protocolFeeShareBp: decodeFromFields("u64", fields.protocol_fee_share_bp),
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
            protocolFeeShareBp: decodeFromFieldsWithTypes("u64", item.fields.protocol_fee_share_bp),
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
            protocolFeeShareBp: this.protocolFeeShareBp.toString(),
            symbols: fieldToJSON<Vector<TypeName>>(`vector<${TypeName.$typeName}>`, this.symbols),
            symbolMarkets: this.symbolMarkets.toJSONField(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): Markets {
        return Markets.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            index: decodeFromJSONField("u64", field.index),
            lpTokenType: decodeFromJSONField(TypeName.reified(), field.lpTokenType),
            quoteTokenType: decodeFromJSONField(TypeName.reified(), field.quoteTokenType),
            isActive: decodeFromJSONField("bool", field.isActive),
            protocolFeeShareBp: decodeFromJSONField("u64", field.protocolFeeShareBp),
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

    static fromSuiObjectData(data: SuiObjectData): Markets {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isMarkets(data.bcs.type)) {
                throw new Error(`object at is not a Markets object`);
            }

            return Markets.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Markets.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<Markets> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Markets object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isMarkets(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Markets object`);
        }

        return Markets.fromSuiObjectData(res.data);
    }
}

/* ============================== MatchTradingOrderEvent =============================== */

export function isMatchTradingOrderEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::trading::MatchTradingOrderEvent`;
}

export interface MatchTradingOrderEventFields {
    collateralToken: ToField<TypeName>;
    baseToken: ToField<TypeName>;
    matchedOrderIds: ToField<Vector<"u64">>;
    linkedOrdersToBeCancelled: ToField<LinkedOrdersInfo>;
    u64Padding: ToField<Vector<"u64">>;
}

export type MatchTradingOrderEventReified = Reified<MatchTradingOrderEvent, MatchTradingOrderEventFields>;

export class MatchTradingOrderEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::trading::MatchTradingOrderEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = MatchTradingOrderEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::trading::MatchTradingOrderEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = MatchTradingOrderEvent.$isPhantom;

    readonly collateralToken: ToField<TypeName>;
    readonly baseToken: ToField<TypeName>;
    readonly matchedOrderIds: ToField<Vector<"u64">>;
    readonly linkedOrdersToBeCancelled: ToField<LinkedOrdersInfo>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: MatchTradingOrderEventFields) {
        this.$fullTypeName = composeSuiType(
            MatchTradingOrderEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::trading::MatchTradingOrderEvent`;
        this.$typeArgs = typeArgs;

        this.collateralToken = fields.collateralToken;
        this.baseToken = fields.baseToken;
        this.matchedOrderIds = fields.matchedOrderIds;
        this.linkedOrdersToBeCancelled = fields.linkedOrdersToBeCancelled;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): MatchTradingOrderEventReified {
        return {
            typeName: MatchTradingOrderEvent.$typeName,
            fullTypeName: composeSuiType(MatchTradingOrderEvent.$typeName, ...[]) as `${typeof PKG_V1}::trading::MatchTradingOrderEvent`,
            typeArgs: [] as [],
            isPhantom: MatchTradingOrderEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => MatchTradingOrderEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => MatchTradingOrderEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => MatchTradingOrderEvent.fromBcs(data),
            bcs: MatchTradingOrderEvent.bcs,
            fromJSONField: (field: any) => MatchTradingOrderEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => MatchTradingOrderEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => MatchTradingOrderEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => MatchTradingOrderEvent.fromSuiObjectData(content),
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
            collateral_token: TypeName.bcs,
            base_token: TypeName.bcs,
            matched_order_ids: bcs.vector(bcs.u64()),
            linked_orders_to_be_cancelled: LinkedOrdersInfo.bcs,
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): MatchTradingOrderEvent {
        return MatchTradingOrderEvent.reified().new({
            collateralToken: decodeFromFields(TypeName.reified(), fields.collateral_token),
            baseToken: decodeFromFields(TypeName.reified(), fields.base_token),
            matchedOrderIds: decodeFromFields(reified.vector("u64"), fields.matched_order_ids),
            linkedOrdersToBeCancelled: decodeFromFields(LinkedOrdersInfo.reified(), fields.linked_orders_to_be_cancelled),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): MatchTradingOrderEvent {
        if (!isMatchTradingOrderEvent(item.type)) {
            throw new Error("not a MatchTradingOrderEvent type");
        }

        return MatchTradingOrderEvent.reified().new({
            collateralToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.collateral_token),
            baseToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.base_token),
            matchedOrderIds: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.matched_order_ids),
            linkedOrdersToBeCancelled: decodeFromFieldsWithTypes(LinkedOrdersInfo.reified(), item.fields.linked_orders_to_be_cancelled),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): MatchTradingOrderEvent {
        return MatchTradingOrderEvent.fromFields(MatchTradingOrderEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            collateralToken: this.collateralToken.toJSONField(),
            baseToken: this.baseToken.toJSONField(),
            matchedOrderIds: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.matchedOrderIds),
            linkedOrdersToBeCancelled: this.linkedOrdersToBeCancelled.toJSONField(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): MatchTradingOrderEvent {
        return MatchTradingOrderEvent.reified().new({
            collateralToken: decodeFromJSONField(TypeName.reified(), field.collateralToken),
            baseToken: decodeFromJSONField(TypeName.reified(), field.baseToken),
            matchedOrderIds: decodeFromJSONField(reified.vector("u64"), field.matchedOrderIds),
            linkedOrdersToBeCancelled: decodeFromJSONField(LinkedOrdersInfo.reified(), field.linkedOrdersToBeCancelled),
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

    static fromSuiObjectData(data: SuiObjectData): MatchTradingOrderEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isMatchTradingOrderEvent(data.bcs.type)) {
                throw new Error(`object at is not a MatchTradingOrderEvent object`);
            }

            return MatchTradingOrderEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return MatchTradingOrderEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<MatchTradingOrderEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching MatchTradingOrderEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isMatchTradingOrderEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a MatchTradingOrderEvent object`);
        }

        return MatchTradingOrderEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== NewMarketsEvent =============================== */

export function isNewMarketsEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::trading::NewMarketsEvent`;
}

export interface NewMarketsEventFields {
    index: ToField<"u64">;
    lpTokenType: ToField<TypeName>;
    quoteTokenType: ToField<TypeName>;
    protocolFeeShareBp: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type NewMarketsEventReified = Reified<NewMarketsEvent, NewMarketsEventFields>;

export class NewMarketsEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::trading::NewMarketsEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = NewMarketsEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::trading::NewMarketsEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = NewMarketsEvent.$isPhantom;

    readonly index: ToField<"u64">;
    readonly lpTokenType: ToField<TypeName>;
    readonly quoteTokenType: ToField<TypeName>;
    readonly protocolFeeShareBp: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: NewMarketsEventFields) {
        this.$fullTypeName = composeSuiType(NewMarketsEvent.$typeName, ...typeArgs) as `${typeof PKG_V1}::trading::NewMarketsEvent`;
        this.$typeArgs = typeArgs;

        this.index = fields.index;
        this.lpTokenType = fields.lpTokenType;
        this.quoteTokenType = fields.quoteTokenType;
        this.protocolFeeShareBp = fields.protocolFeeShareBp;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): NewMarketsEventReified {
        return {
            typeName: NewMarketsEvent.$typeName,
            fullTypeName: composeSuiType(NewMarketsEvent.$typeName, ...[]) as `${typeof PKG_V1}::trading::NewMarketsEvent`,
            typeArgs: [] as [],
            isPhantom: NewMarketsEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => NewMarketsEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => NewMarketsEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => NewMarketsEvent.fromBcs(data),
            bcs: NewMarketsEvent.bcs,
            fromJSONField: (field: any) => NewMarketsEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => NewMarketsEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => NewMarketsEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => NewMarketsEvent.fromSuiObjectData(content),
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
            index: bcs.u64(),
            lp_token_type: TypeName.bcs,
            quote_token_type: TypeName.bcs,
            protocol_fee_share_bp: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): NewMarketsEvent {
        return NewMarketsEvent.reified().new({
            index: decodeFromFields("u64", fields.index),
            lpTokenType: decodeFromFields(TypeName.reified(), fields.lp_token_type),
            quoteTokenType: decodeFromFields(TypeName.reified(), fields.quote_token_type),
            protocolFeeShareBp: decodeFromFields("u64", fields.protocol_fee_share_bp),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): NewMarketsEvent {
        if (!isNewMarketsEvent(item.type)) {
            throw new Error("not a NewMarketsEvent type");
        }

        return NewMarketsEvent.reified().new({
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            lpTokenType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.lp_token_type),
            quoteTokenType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.quote_token_type),
            protocolFeeShareBp: decodeFromFieldsWithTypes("u64", item.fields.protocol_fee_share_bp),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): NewMarketsEvent {
        return NewMarketsEvent.fromFields(NewMarketsEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            index: this.index.toString(),
            lpTokenType: this.lpTokenType.toJSONField(),
            quoteTokenType: this.quoteTokenType.toJSONField(),
            protocolFeeShareBp: this.protocolFeeShareBp.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): NewMarketsEvent {
        return NewMarketsEvent.reified().new({
            index: decodeFromJSONField("u64", field.index),
            lpTokenType: decodeFromJSONField(TypeName.reified(), field.lpTokenType),
            quoteTokenType: decodeFromJSONField(TypeName.reified(), field.quoteTokenType),
            protocolFeeShareBp: decodeFromJSONField("u64", field.protocolFeeShareBp),
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

    static fromSuiObjectData(data: SuiObjectData): NewMarketsEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isNewMarketsEvent(data.bcs.type)) {
                throw new Error(`object at is not a NewMarketsEvent object`);
            }

            return NewMarketsEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return NewMarketsEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<NewMarketsEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching NewMarketsEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isNewMarketsEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a NewMarketsEvent object`);
        }

        return NewMarketsEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== ReleaseCollateralEvent =============================== */

export function isReleaseCollateralEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::trading::ReleaseCollateralEvent`;
}

export interface ReleaseCollateralEventFields {
    user: ToField<"address">;
    marketIndex: ToField<"u64">;
    poolIndex: ToField<"u64">;
    positionId: ToField<"u64">;
    collateralToken: ToField<TypeName>;
    baseToken: ToField<TypeName>;
    releasedCollateralAmount: ToField<"u64">;
    remainingCollateralAmount: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type ReleaseCollateralEventReified = Reified<ReleaseCollateralEvent, ReleaseCollateralEventFields>;

export class ReleaseCollateralEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::trading::ReleaseCollateralEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = ReleaseCollateralEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::trading::ReleaseCollateralEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = ReleaseCollateralEvent.$isPhantom;

    readonly user: ToField<"address">;
    readonly marketIndex: ToField<"u64">;
    readonly poolIndex: ToField<"u64">;
    readonly positionId: ToField<"u64">;
    readonly collateralToken: ToField<TypeName>;
    readonly baseToken: ToField<TypeName>;
    readonly releasedCollateralAmount: ToField<"u64">;
    readonly remainingCollateralAmount: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: ReleaseCollateralEventFields) {
        this.$fullTypeName = composeSuiType(
            ReleaseCollateralEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::trading::ReleaseCollateralEvent`;
        this.$typeArgs = typeArgs;

        this.user = fields.user;
        this.marketIndex = fields.marketIndex;
        this.poolIndex = fields.poolIndex;
        this.positionId = fields.positionId;
        this.collateralToken = fields.collateralToken;
        this.baseToken = fields.baseToken;
        this.releasedCollateralAmount = fields.releasedCollateralAmount;
        this.remainingCollateralAmount = fields.remainingCollateralAmount;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): ReleaseCollateralEventReified {
        return {
            typeName: ReleaseCollateralEvent.$typeName,
            fullTypeName: composeSuiType(ReleaseCollateralEvent.$typeName, ...[]) as `${typeof PKG_V1}::trading::ReleaseCollateralEvent`,
            typeArgs: [] as [],
            isPhantom: ReleaseCollateralEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => ReleaseCollateralEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => ReleaseCollateralEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => ReleaseCollateralEvent.fromBcs(data),
            bcs: ReleaseCollateralEvent.bcs,
            fromJSONField: (field: any) => ReleaseCollateralEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => ReleaseCollateralEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => ReleaseCollateralEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => ReleaseCollateralEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => ReleaseCollateralEvent.fetch(client, id),
            new: (fields: ReleaseCollateralEventFields) => {
                return new ReleaseCollateralEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return ReleaseCollateralEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<ReleaseCollateralEvent>> {
        return phantom(ReleaseCollateralEvent.reified());
    }
    static get p() {
        return ReleaseCollateralEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("ReleaseCollateralEvent", {
            user: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            market_index: bcs.u64(),
            pool_index: bcs.u64(),
            position_id: bcs.u64(),
            collateral_token: TypeName.bcs,
            base_token: TypeName.bcs,
            released_collateral_amount: bcs.u64(),
            remaining_collateral_amount: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): ReleaseCollateralEvent {
        return ReleaseCollateralEvent.reified().new({
            user: decodeFromFields("address", fields.user),
            marketIndex: decodeFromFields("u64", fields.market_index),
            poolIndex: decodeFromFields("u64", fields.pool_index),
            positionId: decodeFromFields("u64", fields.position_id),
            collateralToken: decodeFromFields(TypeName.reified(), fields.collateral_token),
            baseToken: decodeFromFields(TypeName.reified(), fields.base_token),
            releasedCollateralAmount: decodeFromFields("u64", fields.released_collateral_amount),
            remainingCollateralAmount: decodeFromFields("u64", fields.remaining_collateral_amount),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): ReleaseCollateralEvent {
        if (!isReleaseCollateralEvent(item.type)) {
            throw new Error("not a ReleaseCollateralEvent type");
        }

        return ReleaseCollateralEvent.reified().new({
            user: decodeFromFieldsWithTypes("address", item.fields.user),
            marketIndex: decodeFromFieldsWithTypes("u64", item.fields.market_index),
            poolIndex: decodeFromFieldsWithTypes("u64", item.fields.pool_index),
            positionId: decodeFromFieldsWithTypes("u64", item.fields.position_id),
            collateralToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.collateral_token),
            baseToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.base_token),
            releasedCollateralAmount: decodeFromFieldsWithTypes("u64", item.fields.released_collateral_amount),
            remainingCollateralAmount: decodeFromFieldsWithTypes("u64", item.fields.remaining_collateral_amount),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): ReleaseCollateralEvent {
        return ReleaseCollateralEvent.fromFields(ReleaseCollateralEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            user: this.user,
            marketIndex: this.marketIndex.toString(),
            poolIndex: this.poolIndex.toString(),
            positionId: this.positionId.toString(),
            collateralToken: this.collateralToken.toJSONField(),
            baseToken: this.baseToken.toJSONField(),
            releasedCollateralAmount: this.releasedCollateralAmount.toString(),
            remainingCollateralAmount: this.remainingCollateralAmount.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): ReleaseCollateralEvent {
        return ReleaseCollateralEvent.reified().new({
            user: decodeFromJSONField("address", field.user),
            marketIndex: decodeFromJSONField("u64", field.marketIndex),
            poolIndex: decodeFromJSONField("u64", field.poolIndex),
            positionId: decodeFromJSONField("u64", field.positionId),
            collateralToken: decodeFromJSONField(TypeName.reified(), field.collateralToken),
            baseToken: decodeFromJSONField(TypeName.reified(), field.baseToken),
            releasedCollateralAmount: decodeFromJSONField("u64", field.releasedCollateralAmount),
            remainingCollateralAmount: decodeFromJSONField("u64", field.remainingCollateralAmount),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): ReleaseCollateralEvent {
        if (json.$typeName !== ReleaseCollateralEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return ReleaseCollateralEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): ReleaseCollateralEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isReleaseCollateralEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a ReleaseCollateralEvent object`);
        }
        return ReleaseCollateralEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): ReleaseCollateralEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isReleaseCollateralEvent(data.bcs.type)) {
                throw new Error(`object at is not a ReleaseCollateralEvent object`);
            }

            return ReleaseCollateralEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ReleaseCollateralEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<ReleaseCollateralEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching ReleaseCollateralEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isReleaseCollateralEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ReleaseCollateralEvent object`);
        }

        return ReleaseCollateralEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== ResumeMarketEvent =============================== */

export function isResumeMarketEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::trading::ResumeMarketEvent`;
}

export interface ResumeMarketEventFields {
    index: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type ResumeMarketEventReified = Reified<ResumeMarketEvent, ResumeMarketEventFields>;

export class ResumeMarketEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::trading::ResumeMarketEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = ResumeMarketEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::trading::ResumeMarketEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = ResumeMarketEvent.$isPhantom;

    readonly index: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: ResumeMarketEventFields) {
        this.$fullTypeName = composeSuiType(ResumeMarketEvent.$typeName, ...typeArgs) as `${typeof PKG_V1}::trading::ResumeMarketEvent`;
        this.$typeArgs = typeArgs;

        this.index = fields.index;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): ResumeMarketEventReified {
        return {
            typeName: ResumeMarketEvent.$typeName,
            fullTypeName: composeSuiType(ResumeMarketEvent.$typeName, ...[]) as `${typeof PKG_V1}::trading::ResumeMarketEvent`,
            typeArgs: [] as [],
            isPhantom: ResumeMarketEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => ResumeMarketEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => ResumeMarketEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => ResumeMarketEvent.fromBcs(data),
            bcs: ResumeMarketEvent.bcs,
            fromJSONField: (field: any) => ResumeMarketEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => ResumeMarketEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => ResumeMarketEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => ResumeMarketEvent.fromSuiObjectData(content),
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
            index: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): ResumeMarketEvent {
        return ResumeMarketEvent.reified().new({
            index: decodeFromFields("u64", fields.index),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): ResumeMarketEvent {
        if (!isResumeMarketEvent(item.type)) {
            throw new Error("not a ResumeMarketEvent type");
        }

        return ResumeMarketEvent.reified().new({
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): ResumeMarketEvent {
        return ResumeMarketEvent.fromFields(ResumeMarketEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            index: this.index.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): ResumeMarketEvent {
        return ResumeMarketEvent.reified().new({
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

    static fromSuiObjectData(data: SuiObjectData): ResumeMarketEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isResumeMarketEvent(data.bcs.type)) {
                throw new Error(`object at is not a ResumeMarketEvent object`);
            }

            return ResumeMarketEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ResumeMarketEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<ResumeMarketEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching ResumeMarketEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isResumeMarketEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ResumeMarketEvent object`);
        }

        return ResumeMarketEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== ResumeTradingSymbolEvent =============================== */

export function isResumeTradingSymbolEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::trading::ResumeTradingSymbolEvent`;
}

export interface ResumeTradingSymbolEventFields {
    index: ToField<"u64">;
    resumedBaseToken: ToField<TypeName>;
    u64Padding: ToField<Vector<"u64">>;
}

export type ResumeTradingSymbolEventReified = Reified<ResumeTradingSymbolEvent, ResumeTradingSymbolEventFields>;

export class ResumeTradingSymbolEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::trading::ResumeTradingSymbolEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = ResumeTradingSymbolEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::trading::ResumeTradingSymbolEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = ResumeTradingSymbolEvent.$isPhantom;

    readonly index: ToField<"u64">;
    readonly resumedBaseToken: ToField<TypeName>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: ResumeTradingSymbolEventFields) {
        this.$fullTypeName = composeSuiType(
            ResumeTradingSymbolEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::trading::ResumeTradingSymbolEvent`;
        this.$typeArgs = typeArgs;

        this.index = fields.index;
        this.resumedBaseToken = fields.resumedBaseToken;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): ResumeTradingSymbolEventReified {
        return {
            typeName: ResumeTradingSymbolEvent.$typeName,
            fullTypeName: composeSuiType(
                ResumeTradingSymbolEvent.$typeName,
                ...[]
            ) as `${typeof PKG_V1}::trading::ResumeTradingSymbolEvent`,
            typeArgs: [] as [],
            isPhantom: ResumeTradingSymbolEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => ResumeTradingSymbolEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => ResumeTradingSymbolEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => ResumeTradingSymbolEvent.fromBcs(data),
            bcs: ResumeTradingSymbolEvent.bcs,
            fromJSONField: (field: any) => ResumeTradingSymbolEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => ResumeTradingSymbolEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => ResumeTradingSymbolEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => ResumeTradingSymbolEvent.fromSuiObjectData(content),
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
            index: bcs.u64(),
            resumed_base_token: TypeName.bcs,
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): ResumeTradingSymbolEvent {
        return ResumeTradingSymbolEvent.reified().new({
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
            index: this.index.toString(),
            resumedBaseToken: this.resumedBaseToken.toJSONField(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): ResumeTradingSymbolEvent {
        return ResumeTradingSymbolEvent.reified().new({
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

    static fromSuiObjectData(data: SuiObjectData): ResumeTradingSymbolEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isResumeTradingSymbolEvent(data.bcs.type)) {
                throw new Error(`object at is not a ResumeTradingSymbolEvent object`);
            }

            return ResumeTradingSymbolEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ResumeTradingSymbolEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<ResumeTradingSymbolEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching ResumeTradingSymbolEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isResumeTradingSymbolEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ResumeTradingSymbolEvent object`);
        }

        return ResumeTradingSymbolEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== SuspendMarketEvent =============================== */

export function isSuspendMarketEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::trading::SuspendMarketEvent`;
}

export interface SuspendMarketEventFields {
    index: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type SuspendMarketEventReified = Reified<SuspendMarketEvent, SuspendMarketEventFields>;

export class SuspendMarketEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::trading::SuspendMarketEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = SuspendMarketEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::trading::SuspendMarketEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = SuspendMarketEvent.$isPhantom;

    readonly index: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: SuspendMarketEventFields) {
        this.$fullTypeName = composeSuiType(SuspendMarketEvent.$typeName, ...typeArgs) as `${typeof PKG_V1}::trading::SuspendMarketEvent`;
        this.$typeArgs = typeArgs;

        this.index = fields.index;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): SuspendMarketEventReified {
        return {
            typeName: SuspendMarketEvent.$typeName,
            fullTypeName: composeSuiType(SuspendMarketEvent.$typeName, ...[]) as `${typeof PKG_V1}::trading::SuspendMarketEvent`,
            typeArgs: [] as [],
            isPhantom: SuspendMarketEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => SuspendMarketEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => SuspendMarketEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => SuspendMarketEvent.fromBcs(data),
            bcs: SuspendMarketEvent.bcs,
            fromJSONField: (field: any) => SuspendMarketEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => SuspendMarketEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => SuspendMarketEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => SuspendMarketEvent.fromSuiObjectData(content),
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
            index: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): SuspendMarketEvent {
        return SuspendMarketEvent.reified().new({
            index: decodeFromFields("u64", fields.index),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): SuspendMarketEvent {
        if (!isSuspendMarketEvent(item.type)) {
            throw new Error("not a SuspendMarketEvent type");
        }

        return SuspendMarketEvent.reified().new({
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): SuspendMarketEvent {
        return SuspendMarketEvent.fromFields(SuspendMarketEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            index: this.index.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): SuspendMarketEvent {
        return SuspendMarketEvent.reified().new({
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

    static fromSuiObjectData(data: SuiObjectData): SuspendMarketEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isSuspendMarketEvent(data.bcs.type)) {
                throw new Error(`object at is not a SuspendMarketEvent object`);
            }

            return SuspendMarketEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return SuspendMarketEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<SuspendMarketEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching SuspendMarketEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isSuspendMarketEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SuspendMarketEvent object`);
        }

        return SuspendMarketEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== SuspendTradingSymbolEvent =============================== */

export function isSuspendTradingSymbolEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::trading::SuspendTradingSymbolEvent`;
}

export interface SuspendTradingSymbolEventFields {
    index: ToField<"u64">;
    suspendedBaseToken: ToField<TypeName>;
    u64Padding: ToField<Vector<"u64">>;
}

export type SuspendTradingSymbolEventReified = Reified<SuspendTradingSymbolEvent, SuspendTradingSymbolEventFields>;

export class SuspendTradingSymbolEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::trading::SuspendTradingSymbolEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = SuspendTradingSymbolEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::trading::SuspendTradingSymbolEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = SuspendTradingSymbolEvent.$isPhantom;

    readonly index: ToField<"u64">;
    readonly suspendedBaseToken: ToField<TypeName>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: SuspendTradingSymbolEventFields) {
        this.$fullTypeName = composeSuiType(
            SuspendTradingSymbolEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::trading::SuspendTradingSymbolEvent`;
        this.$typeArgs = typeArgs;

        this.index = fields.index;
        this.suspendedBaseToken = fields.suspendedBaseToken;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): SuspendTradingSymbolEventReified {
        return {
            typeName: SuspendTradingSymbolEvent.$typeName,
            fullTypeName: composeSuiType(
                SuspendTradingSymbolEvent.$typeName,
                ...[]
            ) as `${typeof PKG_V1}::trading::SuspendTradingSymbolEvent`,
            typeArgs: [] as [],
            isPhantom: SuspendTradingSymbolEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => SuspendTradingSymbolEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => SuspendTradingSymbolEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => SuspendTradingSymbolEvent.fromBcs(data),
            bcs: SuspendTradingSymbolEvent.bcs,
            fromJSONField: (field: any) => SuspendTradingSymbolEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => SuspendTradingSymbolEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => SuspendTradingSymbolEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => SuspendTradingSymbolEvent.fromSuiObjectData(content),
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
            index: bcs.u64(),
            suspended_base_token: TypeName.bcs,
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): SuspendTradingSymbolEvent {
        return SuspendTradingSymbolEvent.reified().new({
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
            index: this.index.toString(),
            suspendedBaseToken: this.suspendedBaseToken.toJSONField(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): SuspendTradingSymbolEvent {
        return SuspendTradingSymbolEvent.reified().new({
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

    static fromSuiObjectData(data: SuiObjectData): SuspendTradingSymbolEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isSuspendTradingSymbolEvent(data.bcs.type)) {
                throw new Error(`object at is not a SuspendTradingSymbolEvent object`);
            }

            return SuspendTradingSymbolEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return SuspendTradingSymbolEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<SuspendTradingSymbolEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching SuspendTradingSymbolEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isSuspendTradingSymbolEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SuspendTradingSymbolEvent object`);
        }

        return SuspendTradingSymbolEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== SymbolMarket =============================== */

export function isSymbolMarket(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::trading::SymbolMarket`;
}

export interface SymbolMarketFields {
    id: ToField<UID>;
    userPositions: ToField<KeyedBigVector>;
    tokenCollateralOrders: ToField<UID>;
    optionCollateralOrders: ToField<UID>;
    marketInfo: ToField<MarketInfo>;
    marketConfig: ToField<MarketConfig>;
}

export type SymbolMarketReified = Reified<SymbolMarket, SymbolMarketFields>;

export class SymbolMarket implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::trading::SymbolMarket`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = SymbolMarket.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::trading::SymbolMarket`;
    readonly $typeArgs: [];
    readonly $isPhantom = SymbolMarket.$isPhantom;

    readonly id: ToField<UID>;
    readonly userPositions: ToField<KeyedBigVector>;
    readonly tokenCollateralOrders: ToField<UID>;
    readonly optionCollateralOrders: ToField<UID>;
    readonly marketInfo: ToField<MarketInfo>;
    readonly marketConfig: ToField<MarketConfig>;

    private constructor(typeArgs: [], fields: SymbolMarketFields) {
        this.$fullTypeName = composeSuiType(SymbolMarket.$typeName, ...typeArgs) as `${typeof PKG_V1}::trading::SymbolMarket`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.userPositions = fields.userPositions;
        this.tokenCollateralOrders = fields.tokenCollateralOrders;
        this.optionCollateralOrders = fields.optionCollateralOrders;
        this.marketInfo = fields.marketInfo;
        this.marketConfig = fields.marketConfig;
    }

    static reified(): SymbolMarketReified {
        return {
            typeName: SymbolMarket.$typeName,
            fullTypeName: composeSuiType(SymbolMarket.$typeName, ...[]) as `${typeof PKG_V1}::trading::SymbolMarket`,
            typeArgs: [] as [],
            isPhantom: SymbolMarket.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => SymbolMarket.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => SymbolMarket.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => SymbolMarket.fromBcs(data),
            bcs: SymbolMarket.bcs,
            fromJSONField: (field: any) => SymbolMarket.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => SymbolMarket.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => SymbolMarket.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => SymbolMarket.fromSuiObjectData(content),
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
            user_positions: KeyedBigVector.bcs,
            token_collateral_orders: UID.bcs,
            option_collateral_orders: UID.bcs,
            market_info: MarketInfo.bcs,
            market_config: MarketConfig.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): SymbolMarket {
        return SymbolMarket.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            userPositions: decodeFromFields(KeyedBigVector.reified(), fields.user_positions),
            tokenCollateralOrders: decodeFromFields(UID.reified(), fields.token_collateral_orders),
            optionCollateralOrders: decodeFromFields(UID.reified(), fields.option_collateral_orders),
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
            userPositions: decodeFromFieldsWithTypes(KeyedBigVector.reified(), item.fields.user_positions),
            tokenCollateralOrders: decodeFromFieldsWithTypes(UID.reified(), item.fields.token_collateral_orders),
            optionCollateralOrders: decodeFromFieldsWithTypes(UID.reified(), item.fields.option_collateral_orders),
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
            userPositions: this.userPositions.toJSONField(),
            tokenCollateralOrders: this.tokenCollateralOrders,
            optionCollateralOrders: this.optionCollateralOrders,
            marketInfo: this.marketInfo.toJSONField(),
            marketConfig: this.marketConfig.toJSONField(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): SymbolMarket {
        return SymbolMarket.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            userPositions: decodeFromJSONField(KeyedBigVector.reified(), field.userPositions),
            tokenCollateralOrders: decodeFromJSONField(UID.reified(), field.tokenCollateralOrders),
            optionCollateralOrders: decodeFromJSONField(UID.reified(), field.optionCollateralOrders),
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

    static fromSuiObjectData(data: SuiObjectData): SymbolMarket {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isSymbolMarket(data.bcs.type)) {
                throw new Error(`object at is not a SymbolMarket object`);
            }

            return SymbolMarket.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return SymbolMarket.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<SymbolMarket> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching SymbolMarket object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isSymbolMarket(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SymbolMarket object`);
        }

        return SymbolMarket.fromSuiObjectData(res.data);
    }
}

/* ============================== USD =============================== */

export function isUSD(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::trading::USD`;
}

export interface USDFields {
    dummyField: ToField<"bool">;
}

export type USDReified = Reified<USD, USDFields>;

export class USD implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::trading::USD`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = USD.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::trading::USD`;
    readonly $typeArgs: [];
    readonly $isPhantom = USD.$isPhantom;

    readonly dummyField: ToField<"bool">;

    private constructor(typeArgs: [], fields: USDFields) {
        this.$fullTypeName = composeSuiType(USD.$typeName, ...typeArgs) as `${typeof PKG_V1}::trading::USD`;
        this.$typeArgs = typeArgs;

        this.dummyField = fields.dummyField;
    }

    static reified(): USDReified {
        return {
            typeName: USD.$typeName,
            fullTypeName: composeSuiType(USD.$typeName, ...[]) as `${typeof PKG_V1}::trading::USD`,
            typeArgs: [] as [],
            isPhantom: USD.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => USD.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => USD.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => USD.fromBcs(data),
            bcs: USD.bcs,
            fromJSONField: (field: any) => USD.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => USD.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => USD.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => USD.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => USD.fetch(client, id),
            new: (fields: USDFields) => {
                return new USD([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return USD.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<USD>> {
        return phantom(USD.reified());
    }
    static get p() {
        return USD.phantom();
    }

    static get bcs() {
        return bcs.struct("USD", {
            dummy_field: bcs.bool(),
        });
    }

    static fromFields(fields: Record<string, any>): USD {
        return USD.reified().new({
            dummyField: decodeFromFields("bool", fields.dummy_field),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): USD {
        if (!isUSD(item.type)) {
            throw new Error("not a USD type");
        }

        return USD.reified().new({
            dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
        });
    }

    static fromBcs(data: Uint8Array): USD {
        return USD.fromFields(USD.bcs.parse(data));
    }

    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): USD {
        return USD.reified().new({
            dummyField: decodeFromJSONField("bool", field.dummyField),
        });
    }

    static fromJSON(json: Record<string, any>): USD {
        if (json.$typeName !== USD.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return USD.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): USD {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUSD(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a USD object`);
        }
        return USD.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): USD {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isUSD(data.bcs.type)) {
                throw new Error(`object at is not a USD object`);
            }

            return USD.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return USD.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<USD> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching USD object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isUSD(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a USD object`);
        }

        return USD.fromSuiObjectData(res.data);
    }
}

/* ============================== UpdateFundingRateEvent =============================== */

export function isUpdateFundingRateEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::trading::UpdateFundingRateEvent`;
}

export interface UpdateFundingRateEventFields {
    baseToken: ToField<TypeName>;
    newFundingTsMs: ToField<"u64">;
    intervalsCount: ToField<"u64">;
    previousCumulativeFundingRateIndexSign: ToField<"bool">;
    previousCumulativeFundingRateIndex: ToField<"u64">;
    cumulativeFundingRateIndexSign: ToField<"bool">;
    cumulativeFundingRateIndex: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type UpdateFundingRateEventReified = Reified<UpdateFundingRateEvent, UpdateFundingRateEventFields>;

export class UpdateFundingRateEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::trading::UpdateFundingRateEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = UpdateFundingRateEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::trading::UpdateFundingRateEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = UpdateFundingRateEvent.$isPhantom;

    readonly baseToken: ToField<TypeName>;
    readonly newFundingTsMs: ToField<"u64">;
    readonly intervalsCount: ToField<"u64">;
    readonly previousCumulativeFundingRateIndexSign: ToField<"bool">;
    readonly previousCumulativeFundingRateIndex: ToField<"u64">;
    readonly cumulativeFundingRateIndexSign: ToField<"bool">;
    readonly cumulativeFundingRateIndex: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: UpdateFundingRateEventFields) {
        this.$fullTypeName = composeSuiType(
            UpdateFundingRateEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::trading::UpdateFundingRateEvent`;
        this.$typeArgs = typeArgs;

        this.baseToken = fields.baseToken;
        this.newFundingTsMs = fields.newFundingTsMs;
        this.intervalsCount = fields.intervalsCount;
        this.previousCumulativeFundingRateIndexSign = fields.previousCumulativeFundingRateIndexSign;
        this.previousCumulativeFundingRateIndex = fields.previousCumulativeFundingRateIndex;
        this.cumulativeFundingRateIndexSign = fields.cumulativeFundingRateIndexSign;
        this.cumulativeFundingRateIndex = fields.cumulativeFundingRateIndex;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): UpdateFundingRateEventReified {
        return {
            typeName: UpdateFundingRateEvent.$typeName,
            fullTypeName: composeSuiType(UpdateFundingRateEvent.$typeName, ...[]) as `${typeof PKG_V1}::trading::UpdateFundingRateEvent`,
            typeArgs: [] as [],
            isPhantom: UpdateFundingRateEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => UpdateFundingRateEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => UpdateFundingRateEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => UpdateFundingRateEvent.fromBcs(data),
            bcs: UpdateFundingRateEvent.bcs,
            fromJSONField: (field: any) => UpdateFundingRateEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => UpdateFundingRateEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => UpdateFundingRateEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => UpdateFundingRateEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => UpdateFundingRateEvent.fetch(client, id),
            new: (fields: UpdateFundingRateEventFields) => {
                return new UpdateFundingRateEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return UpdateFundingRateEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<UpdateFundingRateEvent>> {
        return phantom(UpdateFundingRateEvent.reified());
    }
    static get p() {
        return UpdateFundingRateEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("UpdateFundingRateEvent", {
            base_token: TypeName.bcs,
            new_funding_ts_ms: bcs.u64(),
            intervals_count: bcs.u64(),
            previous_cumulative_funding_rate_index_sign: bcs.bool(),
            previous_cumulative_funding_rate_index: bcs.u64(),
            cumulative_funding_rate_index_sign: bcs.bool(),
            cumulative_funding_rate_index: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): UpdateFundingRateEvent {
        return UpdateFundingRateEvent.reified().new({
            baseToken: decodeFromFields(TypeName.reified(), fields.base_token),
            newFundingTsMs: decodeFromFields("u64", fields.new_funding_ts_ms),
            intervalsCount: decodeFromFields("u64", fields.intervals_count),
            previousCumulativeFundingRateIndexSign: decodeFromFields("bool", fields.previous_cumulative_funding_rate_index_sign),
            previousCumulativeFundingRateIndex: decodeFromFields("u64", fields.previous_cumulative_funding_rate_index),
            cumulativeFundingRateIndexSign: decodeFromFields("bool", fields.cumulative_funding_rate_index_sign),
            cumulativeFundingRateIndex: decodeFromFields("u64", fields.cumulative_funding_rate_index),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): UpdateFundingRateEvent {
        if (!isUpdateFundingRateEvent(item.type)) {
            throw new Error("not a UpdateFundingRateEvent type");
        }

        return UpdateFundingRateEvent.reified().new({
            baseToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.base_token),
            newFundingTsMs: decodeFromFieldsWithTypes("u64", item.fields.new_funding_ts_ms),
            intervalsCount: decodeFromFieldsWithTypes("u64", item.fields.intervals_count),
            previousCumulativeFundingRateIndexSign: decodeFromFieldsWithTypes(
                "bool",
                item.fields.previous_cumulative_funding_rate_index_sign
            ),
            previousCumulativeFundingRateIndex: decodeFromFieldsWithTypes("u64", item.fields.previous_cumulative_funding_rate_index),
            cumulativeFundingRateIndexSign: decodeFromFieldsWithTypes("bool", item.fields.cumulative_funding_rate_index_sign),
            cumulativeFundingRateIndex: decodeFromFieldsWithTypes("u64", item.fields.cumulative_funding_rate_index),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): UpdateFundingRateEvent {
        return UpdateFundingRateEvent.fromFields(UpdateFundingRateEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            baseToken: this.baseToken.toJSONField(),
            newFundingTsMs: this.newFundingTsMs.toString(),
            intervalsCount: this.intervalsCount.toString(),
            previousCumulativeFundingRateIndexSign: this.previousCumulativeFundingRateIndexSign,
            previousCumulativeFundingRateIndex: this.previousCumulativeFundingRateIndex.toString(),
            cumulativeFundingRateIndexSign: this.cumulativeFundingRateIndexSign,
            cumulativeFundingRateIndex: this.cumulativeFundingRateIndex.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): UpdateFundingRateEvent {
        return UpdateFundingRateEvent.reified().new({
            baseToken: decodeFromJSONField(TypeName.reified(), field.baseToken),
            newFundingTsMs: decodeFromJSONField("u64", field.newFundingTsMs),
            intervalsCount: decodeFromJSONField("u64", field.intervalsCount),
            previousCumulativeFundingRateIndexSign: decodeFromJSONField("bool", field.previousCumulativeFundingRateIndexSign),
            previousCumulativeFundingRateIndex: decodeFromJSONField("u64", field.previousCumulativeFundingRateIndex),
            cumulativeFundingRateIndexSign: decodeFromJSONField("bool", field.cumulativeFundingRateIndexSign),
            cumulativeFundingRateIndex: decodeFromJSONField("u64", field.cumulativeFundingRateIndex),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): UpdateFundingRateEvent {
        if (json.$typeName !== UpdateFundingRateEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return UpdateFundingRateEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): UpdateFundingRateEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUpdateFundingRateEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a UpdateFundingRateEvent object`);
        }
        return UpdateFundingRateEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): UpdateFundingRateEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isUpdateFundingRateEvent(data.bcs.type)) {
                throw new Error(`object at is not a UpdateFundingRateEvent object`);
            }

            return UpdateFundingRateEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return UpdateFundingRateEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<UpdateFundingRateEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching UpdateFundingRateEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isUpdateFundingRateEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UpdateFundingRateEvent object`);
        }

        return UpdateFundingRateEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== UpdateMarketConfigEvent =============================== */

export function isUpdateMarketConfigEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::trading::UpdateMarketConfigEvent`;
}

export interface UpdateMarketConfigEventFields {
    index: ToField<"u64">;
    baseTokenType: ToField<TypeName>;
    previousMarketConfig: ToField<MarketConfig>;
    newMarketConfig: ToField<MarketConfig>;
    u64Padding: ToField<Vector<"u64">>;
}

export type UpdateMarketConfigEventReified = Reified<UpdateMarketConfigEvent, UpdateMarketConfigEventFields>;

export class UpdateMarketConfigEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::trading::UpdateMarketConfigEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = UpdateMarketConfigEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::trading::UpdateMarketConfigEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = UpdateMarketConfigEvent.$isPhantom;

    readonly index: ToField<"u64">;
    readonly baseTokenType: ToField<TypeName>;
    readonly previousMarketConfig: ToField<MarketConfig>;
    readonly newMarketConfig: ToField<MarketConfig>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: UpdateMarketConfigEventFields) {
        this.$fullTypeName = composeSuiType(
            UpdateMarketConfigEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::trading::UpdateMarketConfigEvent`;
        this.$typeArgs = typeArgs;

        this.index = fields.index;
        this.baseTokenType = fields.baseTokenType;
        this.previousMarketConfig = fields.previousMarketConfig;
        this.newMarketConfig = fields.newMarketConfig;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): UpdateMarketConfigEventReified {
        return {
            typeName: UpdateMarketConfigEvent.$typeName,
            fullTypeName: composeSuiType(UpdateMarketConfigEvent.$typeName, ...[]) as `${typeof PKG_V1}::trading::UpdateMarketConfigEvent`,
            typeArgs: [] as [],
            isPhantom: UpdateMarketConfigEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => UpdateMarketConfigEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => UpdateMarketConfigEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => UpdateMarketConfigEvent.fromBcs(data),
            bcs: UpdateMarketConfigEvent.bcs,
            fromJSONField: (field: any) => UpdateMarketConfigEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => UpdateMarketConfigEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => UpdateMarketConfigEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => UpdateMarketConfigEvent.fromSuiObjectData(content),
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
            index: bcs.u64(),
            base_token_type: TypeName.bcs,
            previous_market_config: MarketConfig.bcs,
            new_market_config: MarketConfig.bcs,
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): UpdateMarketConfigEvent {
        return UpdateMarketConfigEvent.reified().new({
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
            index: this.index.toString(),
            baseTokenType: this.baseTokenType.toJSONField(),
            previousMarketConfig: this.previousMarketConfig.toJSONField(),
            newMarketConfig: this.newMarketConfig.toJSONField(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): UpdateMarketConfigEvent {
        return UpdateMarketConfigEvent.reified().new({
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

    static fromSuiObjectData(data: SuiObjectData): UpdateMarketConfigEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isUpdateMarketConfigEvent(data.bcs.type)) {
                throw new Error(`object at is not a UpdateMarketConfigEvent object`);
            }

            return UpdateMarketConfigEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return UpdateMarketConfigEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<UpdateMarketConfigEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching UpdateMarketConfigEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isUpdateMarketConfigEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UpdateMarketConfigEvent object`);
        }

        return UpdateMarketConfigEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== UpdateProtocolFeeShareBpEvent =============================== */

export function isUpdateProtocolFeeShareBpEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::trading::UpdateProtocolFeeShareBpEvent`;
}

export interface UpdateProtocolFeeShareBpEventFields {
    index: ToField<"u64">;
    previousProtocolFeeShareBp: ToField<"u64">;
    newProtocolFeeShareBp: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type UpdateProtocolFeeShareBpEventReified = Reified<UpdateProtocolFeeShareBpEvent, UpdateProtocolFeeShareBpEventFields>;

export class UpdateProtocolFeeShareBpEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::trading::UpdateProtocolFeeShareBpEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = UpdateProtocolFeeShareBpEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::trading::UpdateProtocolFeeShareBpEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = UpdateProtocolFeeShareBpEvent.$isPhantom;

    readonly index: ToField<"u64">;
    readonly previousProtocolFeeShareBp: ToField<"u64">;
    readonly newProtocolFeeShareBp: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: UpdateProtocolFeeShareBpEventFields) {
        this.$fullTypeName = composeSuiType(
            UpdateProtocolFeeShareBpEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::trading::UpdateProtocolFeeShareBpEvent`;
        this.$typeArgs = typeArgs;

        this.index = fields.index;
        this.previousProtocolFeeShareBp = fields.previousProtocolFeeShareBp;
        this.newProtocolFeeShareBp = fields.newProtocolFeeShareBp;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): UpdateProtocolFeeShareBpEventReified {
        return {
            typeName: UpdateProtocolFeeShareBpEvent.$typeName,
            fullTypeName: composeSuiType(
                UpdateProtocolFeeShareBpEvent.$typeName,
                ...[]
            ) as `${typeof PKG_V1}::trading::UpdateProtocolFeeShareBpEvent`,
            typeArgs: [] as [],
            isPhantom: UpdateProtocolFeeShareBpEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => UpdateProtocolFeeShareBpEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => UpdateProtocolFeeShareBpEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => UpdateProtocolFeeShareBpEvent.fromBcs(data),
            bcs: UpdateProtocolFeeShareBpEvent.bcs,
            fromJSONField: (field: any) => UpdateProtocolFeeShareBpEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => UpdateProtocolFeeShareBpEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => UpdateProtocolFeeShareBpEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => UpdateProtocolFeeShareBpEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => UpdateProtocolFeeShareBpEvent.fetch(client, id),
            new: (fields: UpdateProtocolFeeShareBpEventFields) => {
                return new UpdateProtocolFeeShareBpEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return UpdateProtocolFeeShareBpEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<UpdateProtocolFeeShareBpEvent>> {
        return phantom(UpdateProtocolFeeShareBpEvent.reified());
    }
    static get p() {
        return UpdateProtocolFeeShareBpEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("UpdateProtocolFeeShareBpEvent", {
            index: bcs.u64(),
            previous_protocol_fee_share_bp: bcs.u64(),
            new_protocol_fee_share_bp: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): UpdateProtocolFeeShareBpEvent {
        return UpdateProtocolFeeShareBpEvent.reified().new({
            index: decodeFromFields("u64", fields.index),
            previousProtocolFeeShareBp: decodeFromFields("u64", fields.previous_protocol_fee_share_bp),
            newProtocolFeeShareBp: decodeFromFields("u64", fields.new_protocol_fee_share_bp),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): UpdateProtocolFeeShareBpEvent {
        if (!isUpdateProtocolFeeShareBpEvent(item.type)) {
            throw new Error("not a UpdateProtocolFeeShareBpEvent type");
        }

        return UpdateProtocolFeeShareBpEvent.reified().new({
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            previousProtocolFeeShareBp: decodeFromFieldsWithTypes("u64", item.fields.previous_protocol_fee_share_bp),
            newProtocolFeeShareBp: decodeFromFieldsWithTypes("u64", item.fields.new_protocol_fee_share_bp),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): UpdateProtocolFeeShareBpEvent {
        return UpdateProtocolFeeShareBpEvent.fromFields(UpdateProtocolFeeShareBpEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            index: this.index.toString(),
            previousProtocolFeeShareBp: this.previousProtocolFeeShareBp.toString(),
            newProtocolFeeShareBp: this.newProtocolFeeShareBp.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): UpdateProtocolFeeShareBpEvent {
        return UpdateProtocolFeeShareBpEvent.reified().new({
            index: decodeFromJSONField("u64", field.index),
            previousProtocolFeeShareBp: decodeFromJSONField("u64", field.previousProtocolFeeShareBp),
            newProtocolFeeShareBp: decodeFromJSONField("u64", field.newProtocolFeeShareBp),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): UpdateProtocolFeeShareBpEvent {
        if (json.$typeName !== UpdateProtocolFeeShareBpEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return UpdateProtocolFeeShareBpEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): UpdateProtocolFeeShareBpEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUpdateProtocolFeeShareBpEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a UpdateProtocolFeeShareBpEvent object`);
        }
        return UpdateProtocolFeeShareBpEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): UpdateProtocolFeeShareBpEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isUpdateProtocolFeeShareBpEvent(data.bcs.type)) {
                throw new Error(`object at is not a UpdateProtocolFeeShareBpEvent object`);
            }

            return UpdateProtocolFeeShareBpEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return UpdateProtocolFeeShareBpEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<UpdateProtocolFeeShareBpEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching UpdateProtocolFeeShareBpEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isUpdateProtocolFeeShareBpEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UpdateProtocolFeeShareBpEvent object`);
        }

        return UpdateProtocolFeeShareBpEvent.fromSuiObjectData(res.data);
    }
}
