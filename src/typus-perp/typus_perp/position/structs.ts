import * as reified from "../../_framework/reified";
import { Option } from "../../_dependencies/source/0x1/option/structs";
import { TypeName } from "../../_dependencies/source/0x1/type-name/structs";
import { UID } from "../../_dependencies/source/0x2/object/structs";
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
} from "../../_framework/reified";
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../_framework/util";
import { Vector } from "../../_framework/vector";
import { PKG_V1 } from "../index";
import { Symbol } from "../symbol/structs";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromB64, fromHEX, toHEX } from "@mysten/sui/utils";

/* ============================== OptionCollateralInfo =============================== */

export function isOptionCollateralInfo(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::position::OptionCollateralInfo`;
}

export interface OptionCollateralInfoFields {
    index: ToField<"u64">;
    bidToken: ToField<TypeName>;
}

export type OptionCollateralInfoReified = Reified<OptionCollateralInfo, OptionCollateralInfoFields>;

export class OptionCollateralInfo implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::position::OptionCollateralInfo`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = OptionCollateralInfo.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::position::OptionCollateralInfo`;
    readonly $typeArgs: [];
    readonly $isPhantom = OptionCollateralInfo.$isPhantom;

    readonly index: ToField<"u64">;
    readonly bidToken: ToField<TypeName>;

    private constructor(typeArgs: [], fields: OptionCollateralInfoFields) {
        this.$fullTypeName = composeSuiType(
            OptionCollateralInfo.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::position::OptionCollateralInfo`;
        this.$typeArgs = typeArgs;

        this.index = fields.index;
        this.bidToken = fields.bidToken;
    }

    static reified(): OptionCollateralInfoReified {
        return {
            typeName: OptionCollateralInfo.$typeName,
            fullTypeName: composeSuiType(OptionCollateralInfo.$typeName, ...[]) as `${typeof PKG_V1}::position::OptionCollateralInfo`,
            typeArgs: [] as [],
            isPhantom: OptionCollateralInfo.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => OptionCollateralInfo.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => OptionCollateralInfo.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => OptionCollateralInfo.fromBcs(data),
            bcs: OptionCollateralInfo.bcs,
            fromJSONField: (field: any) => OptionCollateralInfo.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => OptionCollateralInfo.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => OptionCollateralInfo.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => OptionCollateralInfo.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => OptionCollateralInfo.fetch(client, id),
            new: (fields: OptionCollateralInfoFields) => {
                return new OptionCollateralInfo([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return OptionCollateralInfo.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<OptionCollateralInfo>> {
        return phantom(OptionCollateralInfo.reified());
    }
    static get p() {
        return OptionCollateralInfo.phantom();
    }

    static get bcs() {
        return bcs.struct("OptionCollateralInfo", {
            index: bcs.u64(),
            bid_token: TypeName.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): OptionCollateralInfo {
        return OptionCollateralInfo.reified().new({
            index: decodeFromFields("u64", fields.index),
            bidToken: decodeFromFields(TypeName.reified(), fields.bid_token),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): OptionCollateralInfo {
        if (!isOptionCollateralInfo(item.type)) {
            throw new Error("not a OptionCollateralInfo type");
        }

        return OptionCollateralInfo.reified().new({
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            bidToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.bid_token),
        });
    }

    static fromBcs(data: Uint8Array): OptionCollateralInfo {
        return OptionCollateralInfo.fromFields(OptionCollateralInfo.bcs.parse(data));
    }

    toJSONField() {
        return {
            index: this.index.toString(),
            bidToken: this.bidToken.toJSONField(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): OptionCollateralInfo {
        return OptionCollateralInfo.reified().new({
            index: decodeFromJSONField("u64", field.index),
            bidToken: decodeFromJSONField(TypeName.reified(), field.bidToken),
        });
    }

    static fromJSON(json: Record<string, any>): OptionCollateralInfo {
        if (json.$typeName !== OptionCollateralInfo.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return OptionCollateralInfo.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): OptionCollateralInfo {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isOptionCollateralInfo(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a OptionCollateralInfo object`);
        }
        return OptionCollateralInfo.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): OptionCollateralInfo {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isOptionCollateralInfo(data.bcs.type)) {
                throw new Error(`object at is not a OptionCollateralInfo object`);
            }

            return OptionCollateralInfo.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return OptionCollateralInfo.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<OptionCollateralInfo> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching OptionCollateralInfo object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isOptionCollateralInfo(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a OptionCollateralInfo object`);
        }

        return OptionCollateralInfo.fromSuiObjectData(res.data);
    }
}

/* ============================== OrderFilledEvent =============================== */

export function isOrderFilledEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::position::OrderFilledEvent`;
}

export interface OrderFilledEventFields {
    user: ToField<"address">;
    collateralToken: ToField<TypeName>;
    symbol: ToField<Symbol>;
    orderId: ToField<"u64">;
    linkedPositionId: ToField<Option<"u64">>;
    newPositionId: ToField<Option<"u64">>;
    filledSize: ToField<"u64">;
    filledPrice: ToField<"u64">;
    positionSide: ToField<"bool">;
    positionSize: ToField<"u64">;
    positionAveragePrice: ToField<"u64">;
    realizedTradingFee: ToField<"u64">;
    realizedBorrowFee: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type OrderFilledEventReified = Reified<OrderFilledEvent, OrderFilledEventFields>;

export class OrderFilledEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::position::OrderFilledEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = OrderFilledEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::position::OrderFilledEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = OrderFilledEvent.$isPhantom;

    readonly user: ToField<"address">;
    readonly collateralToken: ToField<TypeName>;
    readonly symbol: ToField<Symbol>;
    readonly orderId: ToField<"u64">;
    readonly linkedPositionId: ToField<Option<"u64">>;
    readonly newPositionId: ToField<Option<"u64">>;
    readonly filledSize: ToField<"u64">;
    readonly filledPrice: ToField<"u64">;
    readonly positionSide: ToField<"bool">;
    readonly positionSize: ToField<"u64">;
    readonly positionAveragePrice: ToField<"u64">;
    readonly realizedTradingFee: ToField<"u64">;
    readonly realizedBorrowFee: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: OrderFilledEventFields) {
        this.$fullTypeName = composeSuiType(OrderFilledEvent.$typeName, ...typeArgs) as `${typeof PKG_V1}::position::OrderFilledEvent`;
        this.$typeArgs = typeArgs;

        this.user = fields.user;
        this.collateralToken = fields.collateralToken;
        this.symbol = fields.symbol;
        this.orderId = fields.orderId;
        this.linkedPositionId = fields.linkedPositionId;
        this.newPositionId = fields.newPositionId;
        this.filledSize = fields.filledSize;
        this.filledPrice = fields.filledPrice;
        this.positionSide = fields.positionSide;
        this.positionSize = fields.positionSize;
        this.positionAveragePrice = fields.positionAveragePrice;
        this.realizedTradingFee = fields.realizedTradingFee;
        this.realizedBorrowFee = fields.realizedBorrowFee;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): OrderFilledEventReified {
        return {
            typeName: OrderFilledEvent.$typeName,
            fullTypeName: composeSuiType(OrderFilledEvent.$typeName, ...[]) as `${typeof PKG_V1}::position::OrderFilledEvent`,
            typeArgs: [] as [],
            isPhantom: OrderFilledEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => OrderFilledEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => OrderFilledEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => OrderFilledEvent.fromBcs(data),
            bcs: OrderFilledEvent.bcs,
            fromJSONField: (field: any) => OrderFilledEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => OrderFilledEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => OrderFilledEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => OrderFilledEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => OrderFilledEvent.fetch(client, id),
            new: (fields: OrderFilledEventFields) => {
                return new OrderFilledEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return OrderFilledEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<OrderFilledEvent>> {
        return phantom(OrderFilledEvent.reified());
    }
    static get p() {
        return OrderFilledEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("OrderFilledEvent", {
            user: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            collateral_token: TypeName.bcs,
            symbol: Symbol.bcs,
            order_id: bcs.u64(),
            linked_position_id: Option.bcs(bcs.u64()),
            new_position_id: Option.bcs(bcs.u64()),
            filled_size: bcs.u64(),
            filled_price: bcs.u64(),
            position_side: bcs.bool(),
            position_size: bcs.u64(),
            position_average_price: bcs.u64(),
            realized_trading_fee: bcs.u64(),
            realized_borrow_fee: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): OrderFilledEvent {
        return OrderFilledEvent.reified().new({
            user: decodeFromFields("address", fields.user),
            collateralToken: decodeFromFields(TypeName.reified(), fields.collateral_token),
            symbol: decodeFromFields(Symbol.reified(), fields.symbol),
            orderId: decodeFromFields("u64", fields.order_id),
            linkedPositionId: decodeFromFields(Option.reified("u64"), fields.linked_position_id),
            newPositionId: decodeFromFields(Option.reified("u64"), fields.new_position_id),
            filledSize: decodeFromFields("u64", fields.filled_size),
            filledPrice: decodeFromFields("u64", fields.filled_price),
            positionSide: decodeFromFields("bool", fields.position_side),
            positionSize: decodeFromFields("u64", fields.position_size),
            positionAveragePrice: decodeFromFields("u64", fields.position_average_price),
            realizedTradingFee: decodeFromFields("u64", fields.realized_trading_fee),
            realizedBorrowFee: decodeFromFields("u64", fields.realized_borrow_fee),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): OrderFilledEvent {
        if (!isOrderFilledEvent(item.type)) {
            throw new Error("not a OrderFilledEvent type");
        }

        return OrderFilledEvent.reified().new({
            user: decodeFromFieldsWithTypes("address", item.fields.user),
            collateralToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.collateral_token),
            symbol: decodeFromFieldsWithTypes(Symbol.reified(), item.fields.symbol),
            orderId: decodeFromFieldsWithTypes("u64", item.fields.order_id),
            linkedPositionId: decodeFromFieldsWithTypes(Option.reified("u64"), item.fields.linked_position_id),
            newPositionId: decodeFromFieldsWithTypes(Option.reified("u64"), item.fields.new_position_id),
            filledSize: decodeFromFieldsWithTypes("u64", item.fields.filled_size),
            filledPrice: decodeFromFieldsWithTypes("u64", item.fields.filled_price),
            positionSide: decodeFromFieldsWithTypes("bool", item.fields.position_side),
            positionSize: decodeFromFieldsWithTypes("u64", item.fields.position_size),
            positionAveragePrice: decodeFromFieldsWithTypes("u64", item.fields.position_average_price),
            realizedTradingFee: decodeFromFieldsWithTypes("u64", item.fields.realized_trading_fee),
            realizedBorrowFee: decodeFromFieldsWithTypes("u64", item.fields.realized_borrow_fee),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): OrderFilledEvent {
        return OrderFilledEvent.fromFields(OrderFilledEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            user: this.user,
            collateralToken: this.collateralToken.toJSONField(),
            symbol: this.symbol.toJSONField(),
            orderId: this.orderId.toString(),
            linkedPositionId: fieldToJSON<Option<"u64">>(`${Option.$typeName}<u64>`, this.linkedPositionId),
            newPositionId: fieldToJSON<Option<"u64">>(`${Option.$typeName}<u64>`, this.newPositionId),
            filledSize: this.filledSize.toString(),
            filledPrice: this.filledPrice.toString(),
            positionSide: this.positionSide,
            positionSize: this.positionSize.toString(),
            positionAveragePrice: this.positionAveragePrice.toString(),
            realizedTradingFee: this.realizedTradingFee.toString(),
            realizedBorrowFee: this.realizedBorrowFee.toString(),
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

    static fromJSONField(field: any): OrderFilledEvent {
        return OrderFilledEvent.reified().new({
            user: decodeFromJSONField("address", field.user),
            collateralToken: decodeFromJSONField(TypeName.reified(), field.collateralToken),
            symbol: decodeFromJSONField(Symbol.reified(), field.symbol),
            orderId: decodeFromJSONField("u64", field.orderId),
            linkedPositionId: decodeFromJSONField(Option.reified("u64"), field.linkedPositionId),
            newPositionId: decodeFromJSONField(Option.reified("u64"), field.newPositionId),
            filledSize: decodeFromJSONField("u64", field.filledSize),
            filledPrice: decodeFromJSONField("u64", field.filledPrice),
            positionSide: decodeFromJSONField("bool", field.positionSide),
            positionSize: decodeFromJSONField("u64", field.positionSize),
            positionAveragePrice: decodeFromJSONField("u64", field.positionAveragePrice),
            realizedTradingFee: decodeFromJSONField("u64", field.realizedTradingFee),
            realizedBorrowFee: decodeFromJSONField("u64", field.realizedBorrowFee),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): OrderFilledEvent {
        if (json.$typeName !== OrderFilledEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return OrderFilledEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): OrderFilledEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isOrderFilledEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a OrderFilledEvent object`);
        }
        return OrderFilledEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): OrderFilledEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isOrderFilledEvent(data.bcs.type)) {
                throw new Error(`object at is not a OrderFilledEvent object`);
            }

            return OrderFilledEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return OrderFilledEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<OrderFilledEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching OrderFilledEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isOrderFilledEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a OrderFilledEvent object`);
        }

        return OrderFilledEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== Position =============================== */

export function isPosition(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::position::Position`;
}

export interface PositionFields {
    id: ToField<UID>;
    createTsMs: ToField<"u64">;
    positionId: ToField<"u64">;
    linkedOrderIds: ToField<Vector<"u64">>;
    linkedOrderPrices: ToField<Vector<"u64">>;
    user: ToField<"address">;
    isLong: ToField<"bool">;
    size: ToField<"u64">;
    sizeDecimal: ToField<"u64">;
    collateralToken: ToField<TypeName>;
    collateralTokenDecimal: ToField<"u64">;
    symbol: ToField<Symbol>;
    collateralAmount: ToField<"u64">;
    reserveAmount: ToField<"u64">;
    averagePrice: ToField<"u64">;
    entryBorrowIndex: ToField<"u64">;
    entryFundingRateIndexSign: ToField<"bool">;
    entryFundingRateIndex: ToField<"u64">;
    unrealizedLoss: ToField<"u64">;
    unrealizedFundingSign: ToField<"bool">;
    unrealizedFundingFee: ToField<"u64">;
    unrealizedBorrowFee: ToField<"u64">;
    unrealizedRebate: ToField<"u64">;
    optionCollateralInfo: ToField<Option<OptionCollateralInfo>>;
    u64Padding: ToField<Vector<"u64">>;
}

export type PositionReified = Reified<Position, PositionFields>;

export class Position implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::position::Position`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = Position.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::position::Position`;
    readonly $typeArgs: [];
    readonly $isPhantom = Position.$isPhantom;

    readonly id: ToField<UID>;
    readonly createTsMs: ToField<"u64">;
    readonly positionId: ToField<"u64">;
    readonly linkedOrderIds: ToField<Vector<"u64">>;
    readonly linkedOrderPrices: ToField<Vector<"u64">>;
    readonly user: ToField<"address">;
    readonly isLong: ToField<"bool">;
    readonly size: ToField<"u64">;
    readonly sizeDecimal: ToField<"u64">;
    readonly collateralToken: ToField<TypeName>;
    readonly collateralTokenDecimal: ToField<"u64">;
    readonly symbol: ToField<Symbol>;
    readonly collateralAmount: ToField<"u64">;
    readonly reserveAmount: ToField<"u64">;
    readonly averagePrice: ToField<"u64">;
    readonly entryBorrowIndex: ToField<"u64">;
    readonly entryFundingRateIndexSign: ToField<"bool">;
    readonly entryFundingRateIndex: ToField<"u64">;
    readonly unrealizedLoss: ToField<"u64">;
    readonly unrealizedFundingSign: ToField<"bool">;
    readonly unrealizedFundingFee: ToField<"u64">;
    readonly unrealizedBorrowFee: ToField<"u64">;
    readonly unrealizedRebate: ToField<"u64">;
    readonly optionCollateralInfo: ToField<Option<OptionCollateralInfo>>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: PositionFields) {
        this.$fullTypeName = composeSuiType(Position.$typeName, ...typeArgs) as `${typeof PKG_V1}::position::Position`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.createTsMs = fields.createTsMs;
        this.positionId = fields.positionId;
        this.linkedOrderIds = fields.linkedOrderIds;
        this.linkedOrderPrices = fields.linkedOrderPrices;
        this.user = fields.user;
        this.isLong = fields.isLong;
        this.size = fields.size;
        this.sizeDecimal = fields.sizeDecimal;
        this.collateralToken = fields.collateralToken;
        this.collateralTokenDecimal = fields.collateralTokenDecimal;
        this.symbol = fields.symbol;
        this.collateralAmount = fields.collateralAmount;
        this.reserveAmount = fields.reserveAmount;
        this.averagePrice = fields.averagePrice;
        this.entryBorrowIndex = fields.entryBorrowIndex;
        this.entryFundingRateIndexSign = fields.entryFundingRateIndexSign;
        this.entryFundingRateIndex = fields.entryFundingRateIndex;
        this.unrealizedLoss = fields.unrealizedLoss;
        this.unrealizedFundingSign = fields.unrealizedFundingSign;
        this.unrealizedFundingFee = fields.unrealizedFundingFee;
        this.unrealizedBorrowFee = fields.unrealizedBorrowFee;
        this.unrealizedRebate = fields.unrealizedRebate;
        this.optionCollateralInfo = fields.optionCollateralInfo;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): PositionReified {
        return {
            typeName: Position.$typeName,
            fullTypeName: composeSuiType(Position.$typeName, ...[]) as `${typeof PKG_V1}::position::Position`,
            typeArgs: [] as [],
            isPhantom: Position.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Position.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Position.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Position.fromBcs(data),
            bcs: Position.bcs,
            fromJSONField: (field: any) => Position.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Position.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Position.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => Position.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => Position.fetch(client, id),
            new: (fields: PositionFields) => {
                return new Position([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Position.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<Position>> {
        return phantom(Position.reified());
    }
    static get p() {
        return Position.phantom();
    }

    static get bcs() {
        return bcs.struct("Position", {
            id: UID.bcs,
            create_ts_ms: bcs.u64(),
            position_id: bcs.u64(),
            linked_order_ids: bcs.vector(bcs.u64()),
            linked_order_prices: bcs.vector(bcs.u64()),
            user: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            is_long: bcs.bool(),
            size: bcs.u64(),
            size_decimal: bcs.u64(),
            collateral_token: TypeName.bcs,
            collateral_token_decimal: bcs.u64(),
            symbol: Symbol.bcs,
            collateral_amount: bcs.u64(),
            reserve_amount: bcs.u64(),
            average_price: bcs.u64(),
            entry_borrow_index: bcs.u64(),
            entry_funding_rate_index_sign: bcs.bool(),
            entry_funding_rate_index: bcs.u64(),
            unrealized_loss: bcs.u64(),
            unrealized_funding_sign: bcs.bool(),
            unrealized_funding_fee: bcs.u64(),
            unrealized_borrow_fee: bcs.u64(),
            unrealized_rebate: bcs.u64(),
            option_collateral_info: Option.bcs(OptionCollateralInfo.bcs),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): Position {
        return Position.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            createTsMs: decodeFromFields("u64", fields.create_ts_ms),
            positionId: decodeFromFields("u64", fields.position_id),
            linkedOrderIds: decodeFromFields(reified.vector("u64"), fields.linked_order_ids),
            linkedOrderPrices: decodeFromFields(reified.vector("u64"), fields.linked_order_prices),
            user: decodeFromFields("address", fields.user),
            isLong: decodeFromFields("bool", fields.is_long),
            size: decodeFromFields("u64", fields.size),
            sizeDecimal: decodeFromFields("u64", fields.size_decimal),
            collateralToken: decodeFromFields(TypeName.reified(), fields.collateral_token),
            collateralTokenDecimal: decodeFromFields("u64", fields.collateral_token_decimal),
            symbol: decodeFromFields(Symbol.reified(), fields.symbol),
            collateralAmount: decodeFromFields("u64", fields.collateral_amount),
            reserveAmount: decodeFromFields("u64", fields.reserve_amount),
            averagePrice: decodeFromFields("u64", fields.average_price),
            entryBorrowIndex: decodeFromFields("u64", fields.entry_borrow_index),
            entryFundingRateIndexSign: decodeFromFields("bool", fields.entry_funding_rate_index_sign),
            entryFundingRateIndex: decodeFromFields("u64", fields.entry_funding_rate_index),
            unrealizedLoss: decodeFromFields("u64", fields.unrealized_loss),
            unrealizedFundingSign: decodeFromFields("bool", fields.unrealized_funding_sign),
            unrealizedFundingFee: decodeFromFields("u64", fields.unrealized_funding_fee),
            unrealizedBorrowFee: decodeFromFields("u64", fields.unrealized_borrow_fee),
            unrealizedRebate: decodeFromFields("u64", fields.unrealized_rebate),
            optionCollateralInfo: decodeFromFields(Option.reified(OptionCollateralInfo.reified()), fields.option_collateral_info),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Position {
        if (!isPosition(item.type)) {
            throw new Error("not a Position type");
        }

        return Position.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            createTsMs: decodeFromFieldsWithTypes("u64", item.fields.create_ts_ms),
            positionId: decodeFromFieldsWithTypes("u64", item.fields.position_id),
            linkedOrderIds: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.linked_order_ids),
            linkedOrderPrices: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.linked_order_prices),
            user: decodeFromFieldsWithTypes("address", item.fields.user),
            isLong: decodeFromFieldsWithTypes("bool", item.fields.is_long),
            size: decodeFromFieldsWithTypes("u64", item.fields.size),
            sizeDecimal: decodeFromFieldsWithTypes("u64", item.fields.size_decimal),
            collateralToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.collateral_token),
            collateralTokenDecimal: decodeFromFieldsWithTypes("u64", item.fields.collateral_token_decimal),
            symbol: decodeFromFieldsWithTypes(Symbol.reified(), item.fields.symbol),
            collateralAmount: decodeFromFieldsWithTypes("u64", item.fields.collateral_amount),
            reserveAmount: decodeFromFieldsWithTypes("u64", item.fields.reserve_amount),
            averagePrice: decodeFromFieldsWithTypes("u64", item.fields.average_price),
            entryBorrowIndex: decodeFromFieldsWithTypes("u64", item.fields.entry_borrow_index),
            entryFundingRateIndexSign: decodeFromFieldsWithTypes("bool", item.fields.entry_funding_rate_index_sign),
            entryFundingRateIndex: decodeFromFieldsWithTypes("u64", item.fields.entry_funding_rate_index),
            unrealizedLoss: decodeFromFieldsWithTypes("u64", item.fields.unrealized_loss),
            unrealizedFundingSign: decodeFromFieldsWithTypes("bool", item.fields.unrealized_funding_sign),
            unrealizedFundingFee: decodeFromFieldsWithTypes("u64", item.fields.unrealized_funding_fee),
            unrealizedBorrowFee: decodeFromFieldsWithTypes("u64", item.fields.unrealized_borrow_fee),
            unrealizedRebate: decodeFromFieldsWithTypes("u64", item.fields.unrealized_rebate),
            optionCollateralInfo: decodeFromFieldsWithTypes(
                Option.reified(OptionCollateralInfo.reified()),
                item.fields.option_collateral_info
            ),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): Position {
        return Position.fromFields(Position.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            createTsMs: this.createTsMs.toString(),
            positionId: this.positionId.toString(),
            linkedOrderIds: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.linkedOrderIds),
            linkedOrderPrices: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.linkedOrderPrices),
            user: this.user,
            isLong: this.isLong,
            size: this.size.toString(),
            sizeDecimal: this.sizeDecimal.toString(),
            collateralToken: this.collateralToken.toJSONField(),
            collateralTokenDecimal: this.collateralTokenDecimal.toString(),
            symbol: this.symbol.toJSONField(),
            collateralAmount: this.collateralAmount.toString(),
            reserveAmount: this.reserveAmount.toString(),
            averagePrice: this.averagePrice.toString(),
            entryBorrowIndex: this.entryBorrowIndex.toString(),
            entryFundingRateIndexSign: this.entryFundingRateIndexSign,
            entryFundingRateIndex: this.entryFundingRateIndex.toString(),
            unrealizedLoss: this.unrealizedLoss.toString(),
            unrealizedFundingSign: this.unrealizedFundingSign,
            unrealizedFundingFee: this.unrealizedFundingFee.toString(),
            unrealizedBorrowFee: this.unrealizedBorrowFee.toString(),
            unrealizedRebate: this.unrealizedRebate.toString(),
            optionCollateralInfo: fieldToJSON<Option<OptionCollateralInfo>>(
                `${Option.$typeName}<${OptionCollateralInfo.$typeName}>`,
                this.optionCollateralInfo
            ),
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

    static fromJSONField(field: any): Position {
        return Position.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            createTsMs: decodeFromJSONField("u64", field.createTsMs),
            positionId: decodeFromJSONField("u64", field.positionId),
            linkedOrderIds: decodeFromJSONField(reified.vector("u64"), field.linkedOrderIds),
            linkedOrderPrices: decodeFromJSONField(reified.vector("u64"), field.linkedOrderPrices),
            user: decodeFromJSONField("address", field.user),
            isLong: decodeFromJSONField("bool", field.isLong),
            size: decodeFromJSONField("u64", field.size),
            sizeDecimal: decodeFromJSONField("u64", field.sizeDecimal),
            collateralToken: decodeFromJSONField(TypeName.reified(), field.collateralToken),
            collateralTokenDecimal: decodeFromJSONField("u64", field.collateralTokenDecimal),
            symbol: decodeFromJSONField(Symbol.reified(), field.symbol),
            collateralAmount: decodeFromJSONField("u64", field.collateralAmount),
            reserveAmount: decodeFromJSONField("u64", field.reserveAmount),
            averagePrice: decodeFromJSONField("u64", field.averagePrice),
            entryBorrowIndex: decodeFromJSONField("u64", field.entryBorrowIndex),
            entryFundingRateIndexSign: decodeFromJSONField("bool", field.entryFundingRateIndexSign),
            entryFundingRateIndex: decodeFromJSONField("u64", field.entryFundingRateIndex),
            unrealizedLoss: decodeFromJSONField("u64", field.unrealizedLoss),
            unrealizedFundingSign: decodeFromJSONField("bool", field.unrealizedFundingSign),
            unrealizedFundingFee: decodeFromJSONField("u64", field.unrealizedFundingFee),
            unrealizedBorrowFee: decodeFromJSONField("u64", field.unrealizedBorrowFee),
            unrealizedRebate: decodeFromJSONField("u64", field.unrealizedRebate),
            optionCollateralInfo: decodeFromJSONField(Option.reified(OptionCollateralInfo.reified()), field.optionCollateralInfo),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): Position {
        if (json.$typeName !== Position.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return Position.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): Position {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isPosition(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Position object`);
        }
        return Position.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): Position {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isPosition(data.bcs.type)) {
                throw new Error(`object at is not a Position object`);
            }

            return Position.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Position.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<Position> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Position object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isPosition(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Position object`);
        }

        return Position.fromSuiObjectData(res.data);
    }
}

/* ============================== RealizeFundingEvent =============================== */

export function isRealizeFundingEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::position::RealizeFundingEvent`;
}

export interface RealizeFundingEventFields {
    user: ToField<"address">;
    collateralToken: ToField<TypeName>;
    symbol: ToField<Symbol>;
    positionId: ToField<"u64">;
    realizedFundingSign: ToField<"bool">;
    realizedFundingFee: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type RealizeFundingEventReified = Reified<RealizeFundingEvent, RealizeFundingEventFields>;

export class RealizeFundingEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::position::RealizeFundingEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = RealizeFundingEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::position::RealizeFundingEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = RealizeFundingEvent.$isPhantom;

    readonly user: ToField<"address">;
    readonly collateralToken: ToField<TypeName>;
    readonly symbol: ToField<Symbol>;
    readonly positionId: ToField<"u64">;
    readonly realizedFundingSign: ToField<"bool">;
    readonly realizedFundingFee: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: RealizeFundingEventFields) {
        this.$fullTypeName = composeSuiType(
            RealizeFundingEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::position::RealizeFundingEvent`;
        this.$typeArgs = typeArgs;

        this.user = fields.user;
        this.collateralToken = fields.collateralToken;
        this.symbol = fields.symbol;
        this.positionId = fields.positionId;
        this.realizedFundingSign = fields.realizedFundingSign;
        this.realizedFundingFee = fields.realizedFundingFee;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): RealizeFundingEventReified {
        return {
            typeName: RealizeFundingEvent.$typeName,
            fullTypeName: composeSuiType(RealizeFundingEvent.$typeName, ...[]) as `${typeof PKG_V1}::position::RealizeFundingEvent`,
            typeArgs: [] as [],
            isPhantom: RealizeFundingEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => RealizeFundingEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => RealizeFundingEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => RealizeFundingEvent.fromBcs(data),
            bcs: RealizeFundingEvent.bcs,
            fromJSONField: (field: any) => RealizeFundingEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => RealizeFundingEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => RealizeFundingEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => RealizeFundingEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => RealizeFundingEvent.fetch(client, id),
            new: (fields: RealizeFundingEventFields) => {
                return new RealizeFundingEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return RealizeFundingEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<RealizeFundingEvent>> {
        return phantom(RealizeFundingEvent.reified());
    }
    static get p() {
        return RealizeFundingEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("RealizeFundingEvent", {
            user: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            collateral_token: TypeName.bcs,
            symbol: Symbol.bcs,
            position_id: bcs.u64(),
            realized_funding_sign: bcs.bool(),
            realized_funding_fee: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): RealizeFundingEvent {
        return RealizeFundingEvent.reified().new({
            user: decodeFromFields("address", fields.user),
            collateralToken: decodeFromFields(TypeName.reified(), fields.collateral_token),
            symbol: decodeFromFields(Symbol.reified(), fields.symbol),
            positionId: decodeFromFields("u64", fields.position_id),
            realizedFundingSign: decodeFromFields("bool", fields.realized_funding_sign),
            realizedFundingFee: decodeFromFields("u64", fields.realized_funding_fee),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): RealizeFundingEvent {
        if (!isRealizeFundingEvent(item.type)) {
            throw new Error("not a RealizeFundingEvent type");
        }

        return RealizeFundingEvent.reified().new({
            user: decodeFromFieldsWithTypes("address", item.fields.user),
            collateralToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.collateral_token),
            symbol: decodeFromFieldsWithTypes(Symbol.reified(), item.fields.symbol),
            positionId: decodeFromFieldsWithTypes("u64", item.fields.position_id),
            realizedFundingSign: decodeFromFieldsWithTypes("bool", item.fields.realized_funding_sign),
            realizedFundingFee: decodeFromFieldsWithTypes("u64", item.fields.realized_funding_fee),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): RealizeFundingEvent {
        return RealizeFundingEvent.fromFields(RealizeFundingEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            user: this.user,
            collateralToken: this.collateralToken.toJSONField(),
            symbol: this.symbol.toJSONField(),
            positionId: this.positionId.toString(),
            realizedFundingSign: this.realizedFundingSign,
            realizedFundingFee: this.realizedFundingFee.toString(),
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

    static fromJSONField(field: any): RealizeFundingEvent {
        return RealizeFundingEvent.reified().new({
            user: decodeFromJSONField("address", field.user),
            collateralToken: decodeFromJSONField(TypeName.reified(), field.collateralToken),
            symbol: decodeFromJSONField(Symbol.reified(), field.symbol),
            positionId: decodeFromJSONField("u64", field.positionId),
            realizedFundingSign: decodeFromJSONField("bool", field.realizedFundingSign),
            realizedFundingFee: decodeFromJSONField("u64", field.realizedFundingFee),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): RealizeFundingEvent {
        if (json.$typeName !== RealizeFundingEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return RealizeFundingEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): RealizeFundingEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRealizeFundingEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a RealizeFundingEvent object`);
        }
        return RealizeFundingEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): RealizeFundingEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isRealizeFundingEvent(data.bcs.type)) {
                throw new Error(`object at is not a RealizeFundingEvent object`);
            }

            return RealizeFundingEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return RealizeFundingEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<RealizeFundingEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching RealizeFundingEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isRealizeFundingEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RealizeFundingEvent object`);
        }

        return RealizeFundingEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== RealizedPnlEvent =============================== */

export function isRealizedPnlEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::position::RealizedPnlEvent`;
}

export interface RealizedPnlEventFields {
    user: ToField<"address">;
    collateralToken: ToField<TypeName>;
    symbol: ToField<Symbol>;
    positionId: ToField<"u64">;
    positionAverageEntryPrice: ToField<"u64">;
    filledPrice: ToField<"u64">;
    realizedPnlSign: ToField<"bool">;
    realizedPnl: ToField<"u64">;
    realizedTradingFee: ToField<"u64">;
    realizedBorrowFee: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type RealizedPnlEventReified = Reified<RealizedPnlEvent, RealizedPnlEventFields>;

export class RealizedPnlEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::position::RealizedPnlEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = RealizedPnlEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::position::RealizedPnlEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = RealizedPnlEvent.$isPhantom;

    readonly user: ToField<"address">;
    readonly collateralToken: ToField<TypeName>;
    readonly symbol: ToField<Symbol>;
    readonly positionId: ToField<"u64">;
    readonly positionAverageEntryPrice: ToField<"u64">;
    readonly filledPrice: ToField<"u64">;
    readonly realizedPnlSign: ToField<"bool">;
    readonly realizedPnl: ToField<"u64">;
    readonly realizedTradingFee: ToField<"u64">;
    readonly realizedBorrowFee: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: RealizedPnlEventFields) {
        this.$fullTypeName = composeSuiType(RealizedPnlEvent.$typeName, ...typeArgs) as `${typeof PKG_V1}::position::RealizedPnlEvent`;
        this.$typeArgs = typeArgs;

        this.user = fields.user;
        this.collateralToken = fields.collateralToken;
        this.symbol = fields.symbol;
        this.positionId = fields.positionId;
        this.positionAverageEntryPrice = fields.positionAverageEntryPrice;
        this.filledPrice = fields.filledPrice;
        this.realizedPnlSign = fields.realizedPnlSign;
        this.realizedPnl = fields.realizedPnl;
        this.realizedTradingFee = fields.realizedTradingFee;
        this.realizedBorrowFee = fields.realizedBorrowFee;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): RealizedPnlEventReified {
        return {
            typeName: RealizedPnlEvent.$typeName,
            fullTypeName: composeSuiType(RealizedPnlEvent.$typeName, ...[]) as `${typeof PKG_V1}::position::RealizedPnlEvent`,
            typeArgs: [] as [],
            isPhantom: RealizedPnlEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => RealizedPnlEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => RealizedPnlEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => RealizedPnlEvent.fromBcs(data),
            bcs: RealizedPnlEvent.bcs,
            fromJSONField: (field: any) => RealizedPnlEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => RealizedPnlEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => RealizedPnlEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => RealizedPnlEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => RealizedPnlEvent.fetch(client, id),
            new: (fields: RealizedPnlEventFields) => {
                return new RealizedPnlEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return RealizedPnlEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<RealizedPnlEvent>> {
        return phantom(RealizedPnlEvent.reified());
    }
    static get p() {
        return RealizedPnlEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("RealizedPnlEvent", {
            user: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            collateral_token: TypeName.bcs,
            symbol: Symbol.bcs,
            position_id: bcs.u64(),
            position_average_entry_price: bcs.u64(),
            filled_price: bcs.u64(),
            realized_pnl_sign: bcs.bool(),
            realized_pnl: bcs.u64(),
            realized_trading_fee: bcs.u64(),
            realized_borrow_fee: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): RealizedPnlEvent {
        return RealizedPnlEvent.reified().new({
            user: decodeFromFields("address", fields.user),
            collateralToken: decodeFromFields(TypeName.reified(), fields.collateral_token),
            symbol: decodeFromFields(Symbol.reified(), fields.symbol),
            positionId: decodeFromFields("u64", fields.position_id),
            positionAverageEntryPrice: decodeFromFields("u64", fields.position_average_entry_price),
            filledPrice: decodeFromFields("u64", fields.filled_price),
            realizedPnlSign: decodeFromFields("bool", fields.realized_pnl_sign),
            realizedPnl: decodeFromFields("u64", fields.realized_pnl),
            realizedTradingFee: decodeFromFields("u64", fields.realized_trading_fee),
            realizedBorrowFee: decodeFromFields("u64", fields.realized_borrow_fee),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): RealizedPnlEvent {
        if (!isRealizedPnlEvent(item.type)) {
            throw new Error("not a RealizedPnlEvent type");
        }

        return RealizedPnlEvent.reified().new({
            user: decodeFromFieldsWithTypes("address", item.fields.user),
            collateralToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.collateral_token),
            symbol: decodeFromFieldsWithTypes(Symbol.reified(), item.fields.symbol),
            positionId: decodeFromFieldsWithTypes("u64", item.fields.position_id),
            positionAverageEntryPrice: decodeFromFieldsWithTypes("u64", item.fields.position_average_entry_price),
            filledPrice: decodeFromFieldsWithTypes("u64", item.fields.filled_price),
            realizedPnlSign: decodeFromFieldsWithTypes("bool", item.fields.realized_pnl_sign),
            realizedPnl: decodeFromFieldsWithTypes("u64", item.fields.realized_pnl),
            realizedTradingFee: decodeFromFieldsWithTypes("u64", item.fields.realized_trading_fee),
            realizedBorrowFee: decodeFromFieldsWithTypes("u64", item.fields.realized_borrow_fee),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): RealizedPnlEvent {
        return RealizedPnlEvent.fromFields(RealizedPnlEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            user: this.user,
            collateralToken: this.collateralToken.toJSONField(),
            symbol: this.symbol.toJSONField(),
            positionId: this.positionId.toString(),
            positionAverageEntryPrice: this.positionAverageEntryPrice.toString(),
            filledPrice: this.filledPrice.toString(),
            realizedPnlSign: this.realizedPnlSign,
            realizedPnl: this.realizedPnl.toString(),
            realizedTradingFee: this.realizedTradingFee.toString(),
            realizedBorrowFee: this.realizedBorrowFee.toString(),
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

    static fromJSONField(field: any): RealizedPnlEvent {
        return RealizedPnlEvent.reified().new({
            user: decodeFromJSONField("address", field.user),
            collateralToken: decodeFromJSONField(TypeName.reified(), field.collateralToken),
            symbol: decodeFromJSONField(Symbol.reified(), field.symbol),
            positionId: decodeFromJSONField("u64", field.positionId),
            positionAverageEntryPrice: decodeFromJSONField("u64", field.positionAverageEntryPrice),
            filledPrice: decodeFromJSONField("u64", field.filledPrice),
            realizedPnlSign: decodeFromJSONField("bool", field.realizedPnlSign),
            realizedPnl: decodeFromJSONField("u64", field.realizedPnl),
            realizedTradingFee: decodeFromJSONField("u64", field.realizedTradingFee),
            realizedBorrowFee: decodeFromJSONField("u64", field.realizedBorrowFee),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): RealizedPnlEvent {
        if (json.$typeName !== RealizedPnlEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return RealizedPnlEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): RealizedPnlEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRealizedPnlEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a RealizedPnlEvent object`);
        }
        return RealizedPnlEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): RealizedPnlEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isRealizedPnlEvent(data.bcs.type)) {
                throw new Error(`object at is not a RealizedPnlEvent object`);
            }

            return RealizedPnlEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return RealizedPnlEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<RealizedPnlEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching RealizedPnlEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isRealizedPnlEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RealizedPnlEvent object`);
        }

        return RealizedPnlEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== RemovePositionEvent =============================== */

export function isRemovePositionEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::position::RemovePositionEvent`;
}

export interface RemovePositionEventFields {
    user: ToField<"address">;
    collateralToken: ToField<TypeName>;
    symbol: ToField<Symbol>;
    linkedOrderIds: ToField<Vector<"u64">>;
    linkedOrderPrices: ToField<Vector<"u64">>;
    remainingCollateralAmount: ToField<"u64">;
    realizedBorrowFeeAmount: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type RemovePositionEventReified = Reified<RemovePositionEvent, RemovePositionEventFields>;

export class RemovePositionEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::position::RemovePositionEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = RemovePositionEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::position::RemovePositionEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = RemovePositionEvent.$isPhantom;

    readonly user: ToField<"address">;
    readonly collateralToken: ToField<TypeName>;
    readonly symbol: ToField<Symbol>;
    readonly linkedOrderIds: ToField<Vector<"u64">>;
    readonly linkedOrderPrices: ToField<Vector<"u64">>;
    readonly remainingCollateralAmount: ToField<"u64">;
    readonly realizedBorrowFeeAmount: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: RemovePositionEventFields) {
        this.$fullTypeName = composeSuiType(
            RemovePositionEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::position::RemovePositionEvent`;
        this.$typeArgs = typeArgs;

        this.user = fields.user;
        this.collateralToken = fields.collateralToken;
        this.symbol = fields.symbol;
        this.linkedOrderIds = fields.linkedOrderIds;
        this.linkedOrderPrices = fields.linkedOrderPrices;
        this.remainingCollateralAmount = fields.remainingCollateralAmount;
        this.realizedBorrowFeeAmount = fields.realizedBorrowFeeAmount;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): RemovePositionEventReified {
        return {
            typeName: RemovePositionEvent.$typeName,
            fullTypeName: composeSuiType(RemovePositionEvent.$typeName, ...[]) as `${typeof PKG_V1}::position::RemovePositionEvent`,
            typeArgs: [] as [],
            isPhantom: RemovePositionEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => RemovePositionEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => RemovePositionEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => RemovePositionEvent.fromBcs(data),
            bcs: RemovePositionEvent.bcs,
            fromJSONField: (field: any) => RemovePositionEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => RemovePositionEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => RemovePositionEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => RemovePositionEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => RemovePositionEvent.fetch(client, id),
            new: (fields: RemovePositionEventFields) => {
                return new RemovePositionEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return RemovePositionEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<RemovePositionEvent>> {
        return phantom(RemovePositionEvent.reified());
    }
    static get p() {
        return RemovePositionEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("RemovePositionEvent", {
            user: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            collateral_token: TypeName.bcs,
            symbol: Symbol.bcs,
            linked_order_ids: bcs.vector(bcs.u64()),
            linked_order_prices: bcs.vector(bcs.u64()),
            remaining_collateral_amount: bcs.u64(),
            realized_borrow_fee_amount: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): RemovePositionEvent {
        return RemovePositionEvent.reified().new({
            user: decodeFromFields("address", fields.user),
            collateralToken: decodeFromFields(TypeName.reified(), fields.collateral_token),
            symbol: decodeFromFields(Symbol.reified(), fields.symbol),
            linkedOrderIds: decodeFromFields(reified.vector("u64"), fields.linked_order_ids),
            linkedOrderPrices: decodeFromFields(reified.vector("u64"), fields.linked_order_prices),
            remainingCollateralAmount: decodeFromFields("u64", fields.remaining_collateral_amount),
            realizedBorrowFeeAmount: decodeFromFields("u64", fields.realized_borrow_fee_amount),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): RemovePositionEvent {
        if (!isRemovePositionEvent(item.type)) {
            throw new Error("not a RemovePositionEvent type");
        }

        return RemovePositionEvent.reified().new({
            user: decodeFromFieldsWithTypes("address", item.fields.user),
            collateralToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.collateral_token),
            symbol: decodeFromFieldsWithTypes(Symbol.reified(), item.fields.symbol),
            linkedOrderIds: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.linked_order_ids),
            linkedOrderPrices: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.linked_order_prices),
            remainingCollateralAmount: decodeFromFieldsWithTypes("u64", item.fields.remaining_collateral_amount),
            realizedBorrowFeeAmount: decodeFromFieldsWithTypes("u64", item.fields.realized_borrow_fee_amount),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): RemovePositionEvent {
        return RemovePositionEvent.fromFields(RemovePositionEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            user: this.user,
            collateralToken: this.collateralToken.toJSONField(),
            symbol: this.symbol.toJSONField(),
            linkedOrderIds: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.linkedOrderIds),
            linkedOrderPrices: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.linkedOrderPrices),
            remainingCollateralAmount: this.remainingCollateralAmount.toString(),
            realizedBorrowFeeAmount: this.realizedBorrowFeeAmount.toString(),
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

    static fromJSONField(field: any): RemovePositionEvent {
        return RemovePositionEvent.reified().new({
            user: decodeFromJSONField("address", field.user),
            collateralToken: decodeFromJSONField(TypeName.reified(), field.collateralToken),
            symbol: decodeFromJSONField(Symbol.reified(), field.symbol),
            linkedOrderIds: decodeFromJSONField(reified.vector("u64"), field.linkedOrderIds),
            linkedOrderPrices: decodeFromJSONField(reified.vector("u64"), field.linkedOrderPrices),
            remainingCollateralAmount: decodeFromJSONField("u64", field.remainingCollateralAmount),
            realizedBorrowFeeAmount: decodeFromJSONField("u64", field.realizedBorrowFeeAmount),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): RemovePositionEvent {
        if (json.$typeName !== RemovePositionEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return RemovePositionEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): RemovePositionEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRemovePositionEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a RemovePositionEvent object`);
        }
        return RemovePositionEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): RemovePositionEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isRemovePositionEvent(data.bcs.type)) {
                throw new Error(`object at is not a RemovePositionEvent object`);
            }

            return RemovePositionEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return RemovePositionEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<RemovePositionEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching RemovePositionEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isRemovePositionEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RemovePositionEvent object`);
        }

        return RemovePositionEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== TradingOrder =============================== */

export function isTradingOrder(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::position::TradingOrder`;
}

export interface TradingOrderFields {
    id: ToField<UID>;
    createTsMs: ToField<"u64">;
    orderId: ToField<"u64">;
    linkedPositionId: ToField<Option<"u64">>;
    user: ToField<"address">;
    collateralToken: ToField<TypeName>;
    collateralTokenDecimal: ToField<"u64">;
    symbol: ToField<Symbol>;
    leverageMbp: ToField<"u64">;
    reduceOnly: ToField<"bool">;
    isLong: ToField<"bool">;
    isStopOrder: ToField<"bool">;
    size: ToField<"u64">;
    sizeDecimal: ToField<"u64">;
    triggerPrice: ToField<"u64">;
    oraclePriceWhenPlacing: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type TradingOrderReified = Reified<TradingOrder, TradingOrderFields>;

export class TradingOrder implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::position::TradingOrder`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = TradingOrder.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::position::TradingOrder`;
    readonly $typeArgs: [];
    readonly $isPhantom = TradingOrder.$isPhantom;

    readonly id: ToField<UID>;
    readonly createTsMs: ToField<"u64">;
    readonly orderId: ToField<"u64">;
    readonly linkedPositionId: ToField<Option<"u64">>;
    readonly user: ToField<"address">;
    readonly collateralToken: ToField<TypeName>;
    readonly collateralTokenDecimal: ToField<"u64">;
    readonly symbol: ToField<Symbol>;
    readonly leverageMbp: ToField<"u64">;
    readonly reduceOnly: ToField<"bool">;
    readonly isLong: ToField<"bool">;
    readonly isStopOrder: ToField<"bool">;
    readonly size: ToField<"u64">;
    readonly sizeDecimal: ToField<"u64">;
    readonly triggerPrice: ToField<"u64">;
    readonly oraclePriceWhenPlacing: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: TradingOrderFields) {
        this.$fullTypeName = composeSuiType(TradingOrder.$typeName, ...typeArgs) as `${typeof PKG_V1}::position::TradingOrder`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.createTsMs = fields.createTsMs;
        this.orderId = fields.orderId;
        this.linkedPositionId = fields.linkedPositionId;
        this.user = fields.user;
        this.collateralToken = fields.collateralToken;
        this.collateralTokenDecimal = fields.collateralTokenDecimal;
        this.symbol = fields.symbol;
        this.leverageMbp = fields.leverageMbp;
        this.reduceOnly = fields.reduceOnly;
        this.isLong = fields.isLong;
        this.isStopOrder = fields.isStopOrder;
        this.size = fields.size;
        this.sizeDecimal = fields.sizeDecimal;
        this.triggerPrice = fields.triggerPrice;
        this.oraclePriceWhenPlacing = fields.oraclePriceWhenPlacing;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): TradingOrderReified {
        return {
            typeName: TradingOrder.$typeName,
            fullTypeName: composeSuiType(TradingOrder.$typeName, ...[]) as `${typeof PKG_V1}::position::TradingOrder`,
            typeArgs: [] as [],
            isPhantom: TradingOrder.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => TradingOrder.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => TradingOrder.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => TradingOrder.fromBcs(data),
            bcs: TradingOrder.bcs,
            fromJSONField: (field: any) => TradingOrder.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => TradingOrder.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => TradingOrder.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => TradingOrder.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => TradingOrder.fetch(client, id),
            new: (fields: TradingOrderFields) => {
                return new TradingOrder([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return TradingOrder.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<TradingOrder>> {
        return phantom(TradingOrder.reified());
    }
    static get p() {
        return TradingOrder.phantom();
    }

    static get bcs() {
        return bcs.struct("TradingOrder", {
            id: UID.bcs,
            create_ts_ms: bcs.u64(),
            order_id: bcs.u64(),
            linked_position_id: Option.bcs(bcs.u64()),
            user: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            collateral_token: TypeName.bcs,
            collateral_token_decimal: bcs.u64(),
            symbol: Symbol.bcs,
            leverage_mbp: bcs.u64(),
            reduce_only: bcs.bool(),
            is_long: bcs.bool(),
            is_stop_order: bcs.bool(),
            size: bcs.u64(),
            size_decimal: bcs.u64(),
            trigger_price: bcs.u64(),
            oracle_price_when_placing: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): TradingOrder {
        return TradingOrder.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            createTsMs: decodeFromFields("u64", fields.create_ts_ms),
            orderId: decodeFromFields("u64", fields.order_id),
            linkedPositionId: decodeFromFields(Option.reified("u64"), fields.linked_position_id),
            user: decodeFromFields("address", fields.user),
            collateralToken: decodeFromFields(TypeName.reified(), fields.collateral_token),
            collateralTokenDecimal: decodeFromFields("u64", fields.collateral_token_decimal),
            symbol: decodeFromFields(Symbol.reified(), fields.symbol),
            leverageMbp: decodeFromFields("u64", fields.leverage_mbp),
            reduceOnly: decodeFromFields("bool", fields.reduce_only),
            isLong: decodeFromFields("bool", fields.is_long),
            isStopOrder: decodeFromFields("bool", fields.is_stop_order),
            size: decodeFromFields("u64", fields.size),
            sizeDecimal: decodeFromFields("u64", fields.size_decimal),
            triggerPrice: decodeFromFields("u64", fields.trigger_price),
            oraclePriceWhenPlacing: decodeFromFields("u64", fields.oracle_price_when_placing),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): TradingOrder {
        if (!isTradingOrder(item.type)) {
            throw new Error("not a TradingOrder type");
        }

        return TradingOrder.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            createTsMs: decodeFromFieldsWithTypes("u64", item.fields.create_ts_ms),
            orderId: decodeFromFieldsWithTypes("u64", item.fields.order_id),
            linkedPositionId: decodeFromFieldsWithTypes(Option.reified("u64"), item.fields.linked_position_id),
            user: decodeFromFieldsWithTypes("address", item.fields.user),
            collateralToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.collateral_token),
            collateralTokenDecimal: decodeFromFieldsWithTypes("u64", item.fields.collateral_token_decimal),
            symbol: decodeFromFieldsWithTypes(Symbol.reified(), item.fields.symbol),
            leverageMbp: decodeFromFieldsWithTypes("u64", item.fields.leverage_mbp),
            reduceOnly: decodeFromFieldsWithTypes("bool", item.fields.reduce_only),
            isLong: decodeFromFieldsWithTypes("bool", item.fields.is_long),
            isStopOrder: decodeFromFieldsWithTypes("bool", item.fields.is_stop_order),
            size: decodeFromFieldsWithTypes("u64", item.fields.size),
            sizeDecimal: decodeFromFieldsWithTypes("u64", item.fields.size_decimal),
            triggerPrice: decodeFromFieldsWithTypes("u64", item.fields.trigger_price),
            oraclePriceWhenPlacing: decodeFromFieldsWithTypes("u64", item.fields.oracle_price_when_placing),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): TradingOrder {
        return TradingOrder.fromFields(TradingOrder.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            createTsMs: this.createTsMs.toString(),
            orderId: this.orderId.toString(),
            linkedPositionId: fieldToJSON<Option<"u64">>(`${Option.$typeName}<u64>`, this.linkedPositionId),
            user: this.user,
            collateralToken: this.collateralToken.toJSONField(),
            collateralTokenDecimal: this.collateralTokenDecimal.toString(),
            symbol: this.symbol.toJSONField(),
            leverageMbp: this.leverageMbp.toString(),
            reduceOnly: this.reduceOnly,
            isLong: this.isLong,
            isStopOrder: this.isStopOrder,
            size: this.size.toString(),
            sizeDecimal: this.sizeDecimal.toString(),
            triggerPrice: this.triggerPrice.toString(),
            oraclePriceWhenPlacing: this.oraclePriceWhenPlacing.toString(),
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

    static fromJSONField(field: any): TradingOrder {
        return TradingOrder.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            createTsMs: decodeFromJSONField("u64", field.createTsMs),
            orderId: decodeFromJSONField("u64", field.orderId),
            linkedPositionId: decodeFromJSONField(Option.reified("u64"), field.linkedPositionId),
            user: decodeFromJSONField("address", field.user),
            collateralToken: decodeFromJSONField(TypeName.reified(), field.collateralToken),
            collateralTokenDecimal: decodeFromJSONField("u64", field.collateralTokenDecimal),
            symbol: decodeFromJSONField(Symbol.reified(), field.symbol),
            leverageMbp: decodeFromJSONField("u64", field.leverageMbp),
            reduceOnly: decodeFromJSONField("bool", field.reduceOnly),
            isLong: decodeFromJSONField("bool", field.isLong),
            isStopOrder: decodeFromJSONField("bool", field.isStopOrder),
            size: decodeFromJSONField("u64", field.size),
            sizeDecimal: decodeFromJSONField("u64", field.sizeDecimal),
            triggerPrice: decodeFromJSONField("u64", field.triggerPrice),
            oraclePriceWhenPlacing: decodeFromJSONField("u64", field.oraclePriceWhenPlacing),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): TradingOrder {
        if (json.$typeName !== TradingOrder.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return TradingOrder.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): TradingOrder {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isTradingOrder(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a TradingOrder object`);
        }
        return TradingOrder.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): TradingOrder {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isTradingOrder(data.bcs.type)) {
                throw new Error(`object at is not a TradingOrder object`);
            }

            return TradingOrder.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return TradingOrder.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<TradingOrder> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching TradingOrder object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isTradingOrder(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TradingOrder object`);
        }

        return TradingOrder.fromSuiObjectData(res.data);
    }
}
