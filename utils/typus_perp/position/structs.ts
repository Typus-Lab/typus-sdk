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
    Vector,
    decodeFromFields,
    decodeFromFieldsWithTypes,
    decodeFromJSONField,
    fieldToJSON,
    phantom,
} from "../../_framework/reified";
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../_framework/util";
import { Symbol } from "../symbol/structs";
import { BcsReader, bcs, fromB64, fromHEX, toHEX } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
import { AddressFromBytes } from "../../tools";
import { baseToken, quoteToken } from "../symbol/functions";

/* ============================== OrderFilledEvent =============================== */

export function isOrderFilledEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x6340d69ce680b0b740d20d7ab866678c0a331ad29795bafa138a5f4055dcc25c::position::OrderFilledEvent";
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
    u64Padding: ToField<Vector<"u64">>;
}

export type OrderFilledEventReified = Reified<OrderFilledEvent, OrderFilledEventFields>;

export class OrderFilledEvent implements StructClass {
    static readonly $typeName = "0x6340d69ce680b0b740d20d7ab866678c0a331ad29795bafa138a5f4055dcc25c::position::OrderFilledEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = OrderFilledEvent.$typeName;

    readonly $fullTypeName: "0x6340d69ce680b0b740d20d7ab866678c0a331ad29795bafa138a5f4055dcc25c::position::OrderFilledEvent";

    readonly $typeArgs: [];

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
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: OrderFilledEventFields) {
        this.$fullTypeName = composeSuiType(
            OrderFilledEvent.$typeName,
            ...typeArgs
        ) as "0x6340d69ce680b0b740d20d7ab866678c0a331ad29795bafa138a5f4055dcc25c::position::OrderFilledEvent";
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
        this.u64Padding = fields.u64Padding;
    }

    static reified(): OrderFilledEventReified {
        return {
            typeName: OrderFilledEvent.$typeName,
            fullTypeName: composeSuiType(
                OrderFilledEvent.$typeName,
                ...[]
            ) as "0x6340d69ce680b0b740d20d7ab866678c0a331ad29795bafa138a5f4055dcc25c::position::OrderFilledEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => OrderFilledEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => OrderFilledEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => OrderFilledEvent.fromBcs(data),
            bcs: OrderFilledEvent.bcs,
            fromJSONField: (field: any) => OrderFilledEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => OrderFilledEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => OrderFilledEvent.fromSuiParsedData(content),
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
            linkedPositionId: fieldToJSON<Option<"u64">>(`0x1::option::Option<u64>`, this.linkedPositionId),
            newPositionId: fieldToJSON<Option<"u64">>(`0x1::option::Option<u64>`, this.newPositionId),
            filledSize: this.filledSize.toString(),
            filledPrice: this.filledPrice.toString(),
            positionSide: this.positionSide,
            positionSize: this.positionSize.toString(),
            positionAveragePrice: this.positionAveragePrice.toString(),
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

    static async fetch(client: SuiClient, id: string): Promise<OrderFilledEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching OrderFilledEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isOrderFilledEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a OrderFilledEvent object`);
        }
        return OrderFilledEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== Position =============================== */

export function isPosition(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x6340d69ce680b0b740d20d7ab866678c0a331ad29795bafa138a5f4055dcc25c::position::Position";
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
    u64Padding: ToField<Vector<"u64">>;
}

export type PositionReified = Reified<Position, PositionFields>;

export function readVecPosition(bytes: Uint8Array) {
    let reader = new BcsReader(bytes);
    return reader.readVec((reader) => {
        reader.read16();
        let position = {
            id: AddressFromBytes(reader.readBytes(32)),
            create_ts_ms: reader.read64(),
            position_id: reader.read64(),
            linked_order_ids: reader.readVec((reader) => reader.read64()),
            linked_order_prices: reader.readVec((reader) => reader.read64()),
            user: AddressFromBytes(reader.readBytes(32)),
            is_long: reader.read8(),
            size: reader.read64(),
            size_decimal: reader.read64(),
            collateral_token: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
            collateral_token_decimal: reader.read64(),
            baseToken: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
            quoteToken: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
            collateral_amount: reader.read64(),
            reserve_amount: reader.read64(),
            average_price: reader.read64(),
            entry_borrow_index: reader.read64(),
            entry_funding_rate_index_sign: reader.read8(),
            entry_funding_rate_index: reader.read64(),
            unrealized_loss: reader.read64(),
            unrealized_funding_sign: reader.read8(),
            unrealized_funding_fee: reader.read64(),
            unrealized_borrow_fee: reader.read64(),
            unrealized_rebate: reader.read64(),
            u64_padding: reader.readVec((reader) => reader.read64()),
        };

        return position;
    });
}

export class Position implements StructClass {
    static readonly $typeName = "0x6340d69ce680b0b740d20d7ab866678c0a331ad29795bafa138a5f4055dcc25c::position::Position";
    static readonly $numTypeParams = 0;

    readonly $typeName = Position.$typeName;

    readonly $fullTypeName: "0x6340d69ce680b0b740d20d7ab866678c0a331ad29795bafa138a5f4055dcc25c::position::Position";

    readonly $typeArgs: [];

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
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: PositionFields) {
        this.$fullTypeName = composeSuiType(
            Position.$typeName,
            ...typeArgs
        ) as "0x6340d69ce680b0b740d20d7ab866678c0a331ad29795bafa138a5f4055dcc25c::position::Position";
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
        this.u64Padding = fields.u64Padding;
    }

    static reified(): PositionReified {
        return {
            typeName: Position.$typeName,
            fullTypeName: composeSuiType(
                Position.$typeName,
                ...[]
            ) as "0x6340d69ce680b0b740d20d7ab866678c0a331ad29795bafa138a5f4055dcc25c::position::Position",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Position.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Position.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Position.fromBcs(data),
            bcs: Position.bcs,
            fromJSONField: (field: any) => Position.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Position.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Position.fromSuiParsedData(content),
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

    static async fetch(client: SuiClient, id: string): Promise<Position> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Position object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isPosition(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Position object`);
        }
        return Position.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== TradingOrder =============================== */

export function isTradingOrder(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x6340d69ce680b0b740d20d7ab866678c0a331ad29795bafa138a5f4055dcc25c::position::TradingOrder";
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
    leveragePct: ToField<"u64">;
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
    static readonly $typeName = "0x6340d69ce680b0b740d20d7ab866678c0a331ad29795bafa138a5f4055dcc25c::position::TradingOrder";
    static readonly $numTypeParams = 0;

    readonly $typeName = TradingOrder.$typeName;

    readonly $fullTypeName: "0x6340d69ce680b0b740d20d7ab866678c0a331ad29795bafa138a5f4055dcc25c::position::TradingOrder";

    readonly $typeArgs: [];

    readonly id: ToField<UID>;
    readonly createTsMs: ToField<"u64">;
    readonly orderId: ToField<"u64">;
    readonly linkedPositionId: ToField<Option<"u64">>;
    readonly user: ToField<"address">;
    readonly collateralToken: ToField<TypeName>;
    readonly collateralTokenDecimal: ToField<"u64">;
    readonly symbol: ToField<Symbol>;
    readonly leveragePct: ToField<"u64">;
    readonly reduceOnly: ToField<"bool">;
    readonly isLong: ToField<"bool">;
    readonly isStopOrder: ToField<"bool">;
    readonly size: ToField<"u64">;
    readonly sizeDecimal: ToField<"u64">;
    readonly triggerPrice: ToField<"u64">;
    readonly oraclePriceWhenPlacing: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: TradingOrderFields) {
        this.$fullTypeName = composeSuiType(
            TradingOrder.$typeName,
            ...typeArgs
        ) as "0x6340d69ce680b0b740d20d7ab866678c0a331ad29795bafa138a5f4055dcc25c::position::TradingOrder";
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.createTsMs = fields.createTsMs;
        this.orderId = fields.orderId;
        this.linkedPositionId = fields.linkedPositionId;
        this.user = fields.user;
        this.collateralToken = fields.collateralToken;
        this.collateralTokenDecimal = fields.collateralTokenDecimal;
        this.symbol = fields.symbol;
        this.leveragePct = fields.leveragePct;
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
            fullTypeName: composeSuiType(
                TradingOrder.$typeName,
                ...[]
            ) as "0x6340d69ce680b0b740d20d7ab866678c0a331ad29795bafa138a5f4055dcc25c::position::TradingOrder",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => TradingOrder.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => TradingOrder.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => TradingOrder.fromBcs(data),
            bcs: TradingOrder.bcs,
            fromJSONField: (field: any) => TradingOrder.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => TradingOrder.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => TradingOrder.fromSuiParsedData(content),
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
            leverage_pct: bcs.u64(),
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
            leveragePct: decodeFromFields("u64", fields.leverage_pct),
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
            leveragePct: decodeFromFieldsWithTypes("u64", item.fields.leverage_pct),
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
            linkedPositionId: fieldToJSON<Option<"u64">>(`0x1::option::Option<u64>`, this.linkedPositionId),
            user: this.user,
            collateralToken: this.collateralToken.toJSONField(),
            collateralTokenDecimal: this.collateralTokenDecimal.toString(),
            symbol: this.symbol.toJSONField(),
            leveragePct: this.leveragePct.toString(),
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
            leveragePct: decodeFromJSONField("u64", field.leveragePct),
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

    static async fetch(client: SuiClient, id: string): Promise<TradingOrder> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching TradingOrder object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isTradingOrder(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TradingOrder object`);
        }
        return TradingOrder.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}
