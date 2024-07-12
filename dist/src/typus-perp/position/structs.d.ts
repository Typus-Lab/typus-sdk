import * as reified from "../../_framework/reified";
import { Option } from "../../_dependencies/source/0x1/option/structs";
import { TypeName } from "../../_dependencies/source/0x1/type-name/structs";
import { UID } from "../../_dependencies/source/0x2/object/structs";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, Vector } from "../../_framework/reified";
import { FieldsWithTypes } from "../../_framework/util";
import { Symbol } from "../symbol/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isOptionCollateralInfo(type: string): boolean;
export interface OptionCollateralInfoFields {
    index: ToField<"u64">;
    bidToken: ToField<TypeName>;
}
export type OptionCollateralInfoReified = Reified<OptionCollateralInfo, OptionCollateralInfoFields>;
export declare class OptionCollateralInfo implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::position::OptionCollateralInfo";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::position::OptionCollateralInfo";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::position::OptionCollateralInfo";
    readonly $typeArgs: [];
    readonly index: ToField<"u64">;
    readonly bidToken: ToField<TypeName>;
    private constructor();
    static reified(): OptionCollateralInfoReified;
    static get r(): reified.StructClassReified<OptionCollateralInfo, OptionCollateralInfoFields>;
    static phantom(): PhantomReified<ToTypeStr<OptionCollateralInfo>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::position::OptionCollateralInfo">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        index: string;
        bid_token: {
            name: {
                bytes: number[];
            };
        };
    }, {
        index: string | number | bigint;
        bid_token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
    }>;
    static fromFields(fields: Record<string, any>): OptionCollateralInfo;
    static fromFieldsWithTypes(item: FieldsWithTypes): OptionCollateralInfo;
    static fromBcs(data: Uint8Array): OptionCollateralInfo;
    toJSONField(): {
        index: string;
        bidToken: {
            name: string;
        };
    };
    toJSON(): {
        index: string;
        bidToken: {
            name: string;
        };
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): OptionCollateralInfo;
    static fromJSON(json: Record<string, any>): OptionCollateralInfo;
    static fromSuiParsedData(content: SuiParsedData): OptionCollateralInfo;
    static fetch(client: SuiClient, id: string): Promise<OptionCollateralInfo>;
}
export declare function isOrderFilledEvent(type: string): boolean;
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
export declare class OrderFilledEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::position::OrderFilledEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::position::OrderFilledEvent";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::position::OrderFilledEvent";
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
    readonly realizedTradingFee: ToField<"u64">;
    readonly realizedBorrowFee: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): OrderFilledEventReified;
    static get r(): reified.StructClassReified<OrderFilledEvent, OrderFilledEventFields>;
    static phantom(): PhantomReified<ToTypeStr<OrderFilledEvent>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::position::OrderFilledEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        user: string;
        collateral_token: {
            name: {
                bytes: number[];
            };
        };
        symbol: {
            base_token: {
                name: {
                    bytes: number[];
                };
            };
            quote_token: {
                name: {
                    bytes: number[];
                };
            };
        };
        order_id: string;
        linked_position_id: {
            vec: any[];
        };
        new_position_id: {
            vec: any[];
        };
        filled_size: string;
        filled_price: string;
        position_side: boolean;
        position_size: string;
        position_average_price: string;
        realized_trading_fee: string;
        realized_borrow_fee: string;
        u64_padding: string[];
    }, {
        user: string;
        collateral_token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        symbol: {
            base_token: {
                name: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
            };
            quote_token: {
                name: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
            };
        };
        order_id: string | number | bigint;
        linked_position_id: {
            vec: Iterable<any> & {
                length: number;
            };
        };
        new_position_id: {
            vec: Iterable<any> & {
                length: number;
            };
        };
        filled_size: string | number | bigint;
        filled_price: string | number | bigint;
        position_side: boolean;
        position_size: string | number | bigint;
        position_average_price: string | number | bigint;
        realized_trading_fee: string | number | bigint;
        realized_borrow_fee: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): OrderFilledEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): OrderFilledEvent;
    static fromBcs(data: Uint8Array): OrderFilledEvent;
    toJSONField(): {
        user: string;
        collateralToken: {
            name: string;
        };
        symbol: {
            baseToken: {
                name: string;
            };
            quoteToken: {
                name: string;
            };
        };
        orderId: string;
        linkedPositionId: string | null;
        newPositionId: string | null;
        filledSize: string;
        filledPrice: string;
        positionSide: boolean;
        positionSize: string;
        positionAveragePrice: string;
        realizedTradingFee: string;
        realizedBorrowFee: string;
        u64Padding: string[];
    };
    toJSON(): {
        user: string;
        collateralToken: {
            name: string;
        };
        symbol: {
            baseToken: {
                name: string;
            };
            quoteToken: {
                name: string;
            };
        };
        orderId: string;
        linkedPositionId: string | null;
        newPositionId: string | null;
        filledSize: string;
        filledPrice: string;
        positionSide: boolean;
        positionSize: string;
        positionAveragePrice: string;
        realizedTradingFee: string;
        realizedBorrowFee: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): OrderFilledEvent;
    static fromJSON(json: Record<string, any>): OrderFilledEvent;
    static fromSuiParsedData(content: SuiParsedData): OrderFilledEvent;
    static fetch(client: SuiClient, id: string): Promise<OrderFilledEvent>;
}
export declare function isPosition(type: string): boolean;
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
export declare class Position implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::position::Position";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::position::Position";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::position::Position";
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
    readonly optionCollateralInfo: ToField<Option<OptionCollateralInfo>>;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): PositionReified;
    static get r(): reified.StructClassReified<Position, PositionFields>;
    static phantom(): PhantomReified<ToTypeStr<Position>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::position::Position">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        create_ts_ms: string;
        position_id: string;
        linked_order_ids: string[];
        linked_order_prices: string[];
        user: string;
        is_long: boolean;
        size: string;
        size_decimal: string;
        collateral_token: {
            name: {
                bytes: number[];
            };
        };
        collateral_token_decimal: string;
        symbol: {
            base_token: {
                name: {
                    bytes: number[];
                };
            };
            quote_token: {
                name: {
                    bytes: number[];
                };
            };
        };
        collateral_amount: string;
        reserve_amount: string;
        average_price: string;
        entry_borrow_index: string;
        entry_funding_rate_index_sign: boolean;
        entry_funding_rate_index: string;
        unrealized_loss: string;
        unrealized_funding_sign: boolean;
        unrealized_funding_fee: string;
        unrealized_borrow_fee: string;
        unrealized_rebate: string;
        option_collateral_info: {
            vec: any[];
        };
        u64_padding: string[];
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        create_ts_ms: string | number | bigint;
        position_id: string | number | bigint;
        linked_order_ids: Iterable<string | number | bigint> & {
            length: number;
        };
        linked_order_prices: Iterable<string | number | bigint> & {
            length: number;
        };
        user: string;
        is_long: boolean;
        size: string | number | bigint;
        size_decimal: string | number | bigint;
        collateral_token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        collateral_token_decimal: string | number | bigint;
        symbol: {
            base_token: {
                name: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
            };
            quote_token: {
                name: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
            };
        };
        collateral_amount: string | number | bigint;
        reserve_amount: string | number | bigint;
        average_price: string | number | bigint;
        entry_borrow_index: string | number | bigint;
        entry_funding_rate_index_sign: boolean;
        entry_funding_rate_index: string | number | bigint;
        unrealized_loss: string | number | bigint;
        unrealized_funding_sign: boolean;
        unrealized_funding_fee: string | number | bigint;
        unrealized_borrow_fee: string | number | bigint;
        unrealized_rebate: string | number | bigint;
        option_collateral_info: {
            vec: Iterable<any> & {
                length: number;
            };
        };
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): Position;
    static fromFieldsWithTypes(item: FieldsWithTypes): Position;
    static fromBcs(data: Uint8Array): Position;
    toJSONField(): {
        id: string;
        createTsMs: string;
        positionId: string;
        linkedOrderIds: string[];
        linkedOrderPrices: string[];
        user: string;
        isLong: boolean;
        size: string;
        sizeDecimal: string;
        collateralToken: {
            name: string;
        };
        collateralTokenDecimal: string;
        symbol: {
            baseToken: {
                name: string;
            };
            quoteToken: {
                name: string;
            };
        };
        collateralAmount: string;
        reserveAmount: string;
        averagePrice: string;
        entryBorrowIndex: string;
        entryFundingRateIndexSign: boolean;
        entryFundingRateIndex: string;
        unrealizedLoss: string;
        unrealizedFundingSign: boolean;
        unrealizedFundingFee: string;
        unrealizedBorrowFee: string;
        unrealizedRebate: string;
        optionCollateralInfo: {
            index: string;
            bidToken: {
                name: string;
            };
        } | null;
        u64Padding: string[];
    };
    toJSON(): {
        id: string;
        createTsMs: string;
        positionId: string;
        linkedOrderIds: string[];
        linkedOrderPrices: string[];
        user: string;
        isLong: boolean;
        size: string;
        sizeDecimal: string;
        collateralToken: {
            name: string;
        };
        collateralTokenDecimal: string;
        symbol: {
            baseToken: {
                name: string;
            };
            quoteToken: {
                name: string;
            };
        };
        collateralAmount: string;
        reserveAmount: string;
        averagePrice: string;
        entryBorrowIndex: string;
        entryFundingRateIndexSign: boolean;
        entryFundingRateIndex: string;
        unrealizedLoss: string;
        unrealizedFundingSign: boolean;
        unrealizedFundingFee: string;
        unrealizedBorrowFee: string;
        unrealizedRebate: string;
        optionCollateralInfo: {
            index: string;
            bidToken: {
                name: string;
            };
        } | null;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Position;
    static fromJSON(json: Record<string, any>): Position;
    static fromSuiParsedData(content: SuiParsedData): Position;
    static fetch(client: SuiClient, id: string): Promise<Position>;
}
export declare function isRealizeFundingEvent(type: string): boolean;
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
export declare class RealizeFundingEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::position::RealizeFundingEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::position::RealizeFundingEvent";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::position::RealizeFundingEvent";
    readonly $typeArgs: [];
    readonly user: ToField<"address">;
    readonly collateralToken: ToField<TypeName>;
    readonly symbol: ToField<Symbol>;
    readonly positionId: ToField<"u64">;
    readonly realizedFundingSign: ToField<"bool">;
    readonly realizedFundingFee: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): RealizeFundingEventReified;
    static get r(): reified.StructClassReified<RealizeFundingEvent, RealizeFundingEventFields>;
    static phantom(): PhantomReified<ToTypeStr<RealizeFundingEvent>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::position::RealizeFundingEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        user: string;
        collateral_token: {
            name: {
                bytes: number[];
            };
        };
        symbol: {
            base_token: {
                name: {
                    bytes: number[];
                };
            };
            quote_token: {
                name: {
                    bytes: number[];
                };
            };
        };
        position_id: string;
        realized_funding_sign: boolean;
        realized_funding_fee: string;
        u64_padding: string[];
    }, {
        user: string;
        collateral_token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        symbol: {
            base_token: {
                name: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
            };
            quote_token: {
                name: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
            };
        };
        position_id: string | number | bigint;
        realized_funding_sign: boolean;
        realized_funding_fee: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): RealizeFundingEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): RealizeFundingEvent;
    static fromBcs(data: Uint8Array): RealizeFundingEvent;
    toJSONField(): {
        user: string;
        collateralToken: {
            name: string;
        };
        symbol: {
            baseToken: {
                name: string;
            };
            quoteToken: {
                name: string;
            };
        };
        positionId: string;
        realizedFundingSign: boolean;
        realizedFundingFee: string;
        u64Padding: string[];
    };
    toJSON(): {
        user: string;
        collateralToken: {
            name: string;
        };
        symbol: {
            baseToken: {
                name: string;
            };
            quoteToken: {
                name: string;
            };
        };
        positionId: string;
        realizedFundingSign: boolean;
        realizedFundingFee: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): RealizeFundingEvent;
    static fromJSON(json: Record<string, any>): RealizeFundingEvent;
    static fromSuiParsedData(content: SuiParsedData): RealizeFundingEvent;
    static fetch(client: SuiClient, id: string): Promise<RealizeFundingEvent>;
}
export declare function isRealizedPnlEvent(type: string): boolean;
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
export declare class RealizedPnlEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::position::RealizedPnlEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::position::RealizedPnlEvent";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::position::RealizedPnlEvent";
    readonly $typeArgs: [];
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
    private constructor();
    static reified(): RealizedPnlEventReified;
    static get r(): reified.StructClassReified<RealizedPnlEvent, RealizedPnlEventFields>;
    static phantom(): PhantomReified<ToTypeStr<RealizedPnlEvent>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::position::RealizedPnlEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        user: string;
        collateral_token: {
            name: {
                bytes: number[];
            };
        };
        symbol: {
            base_token: {
                name: {
                    bytes: number[];
                };
            };
            quote_token: {
                name: {
                    bytes: number[];
                };
            };
        };
        position_id: string;
        position_average_entry_price: string;
        filled_price: string;
        realized_pnl_sign: boolean;
        realized_pnl: string;
        realized_trading_fee: string;
        realized_borrow_fee: string;
        u64_padding: string[];
    }, {
        user: string;
        collateral_token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        symbol: {
            base_token: {
                name: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
            };
            quote_token: {
                name: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
            };
        };
        position_id: string | number | bigint;
        position_average_entry_price: string | number | bigint;
        filled_price: string | number | bigint;
        realized_pnl_sign: boolean;
        realized_pnl: string | number | bigint;
        realized_trading_fee: string | number | bigint;
        realized_borrow_fee: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): RealizedPnlEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): RealizedPnlEvent;
    static fromBcs(data: Uint8Array): RealizedPnlEvent;
    toJSONField(): {
        user: string;
        collateralToken: {
            name: string;
        };
        symbol: {
            baseToken: {
                name: string;
            };
            quoteToken: {
                name: string;
            };
        };
        positionId: string;
        positionAverageEntryPrice: string;
        filledPrice: string;
        realizedPnlSign: boolean;
        realizedPnl: string;
        realizedTradingFee: string;
        realizedBorrowFee: string;
        u64Padding: string[];
    };
    toJSON(): {
        user: string;
        collateralToken: {
            name: string;
        };
        symbol: {
            baseToken: {
                name: string;
            };
            quoteToken: {
                name: string;
            };
        };
        positionId: string;
        positionAverageEntryPrice: string;
        filledPrice: string;
        realizedPnlSign: boolean;
        realizedPnl: string;
        realizedTradingFee: string;
        realizedBorrowFee: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): RealizedPnlEvent;
    static fromJSON(json: Record<string, any>): RealizedPnlEvent;
    static fromSuiParsedData(content: SuiParsedData): RealizedPnlEvent;
    static fetch(client: SuiClient, id: string): Promise<RealizedPnlEvent>;
}
export declare function isRemovePositionEvent(type: string): boolean;
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
export declare class RemovePositionEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::position::RemovePositionEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::position::RemovePositionEvent";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::position::RemovePositionEvent";
    readonly $typeArgs: [];
    readonly user: ToField<"address">;
    readonly collateralToken: ToField<TypeName>;
    readonly symbol: ToField<Symbol>;
    readonly linkedOrderIds: ToField<Vector<"u64">>;
    readonly linkedOrderPrices: ToField<Vector<"u64">>;
    readonly remainingCollateralAmount: ToField<"u64">;
    readonly realizedBorrowFeeAmount: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): RemovePositionEventReified;
    static get r(): reified.StructClassReified<RemovePositionEvent, RemovePositionEventFields>;
    static phantom(): PhantomReified<ToTypeStr<RemovePositionEvent>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::position::RemovePositionEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        user: string;
        collateral_token: {
            name: {
                bytes: number[];
            };
        };
        symbol: {
            base_token: {
                name: {
                    bytes: number[];
                };
            };
            quote_token: {
                name: {
                    bytes: number[];
                };
            };
        };
        linked_order_ids: string[];
        linked_order_prices: string[];
        remaining_collateral_amount: string;
        realized_borrow_fee_amount: string;
        u64_padding: string[];
    }, {
        user: string;
        collateral_token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        symbol: {
            base_token: {
                name: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
            };
            quote_token: {
                name: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
            };
        };
        linked_order_ids: Iterable<string | number | bigint> & {
            length: number;
        };
        linked_order_prices: Iterable<string | number | bigint> & {
            length: number;
        };
        remaining_collateral_amount: string | number | bigint;
        realized_borrow_fee_amount: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): RemovePositionEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): RemovePositionEvent;
    static fromBcs(data: Uint8Array): RemovePositionEvent;
    toJSONField(): {
        user: string;
        collateralToken: {
            name: string;
        };
        symbol: {
            baseToken: {
                name: string;
            };
            quoteToken: {
                name: string;
            };
        };
        linkedOrderIds: string[];
        linkedOrderPrices: string[];
        remainingCollateralAmount: string;
        realizedBorrowFeeAmount: string;
        u64Padding: string[];
    };
    toJSON(): {
        user: string;
        collateralToken: {
            name: string;
        };
        symbol: {
            baseToken: {
                name: string;
            };
            quoteToken: {
                name: string;
            };
        };
        linkedOrderIds: string[];
        linkedOrderPrices: string[];
        remainingCollateralAmount: string;
        realizedBorrowFeeAmount: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): RemovePositionEvent;
    static fromJSON(json: Record<string, any>): RemovePositionEvent;
    static fromSuiParsedData(content: SuiParsedData): RemovePositionEvent;
    static fetch(client: SuiClient, id: string): Promise<RemovePositionEvent>;
}
export declare function isTradingOrder(type: string): boolean;
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
export declare class TradingOrder implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::position::TradingOrder";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::position::TradingOrder";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::position::TradingOrder";
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
    private constructor();
    static reified(): TradingOrderReified;
    static get r(): reified.StructClassReified<TradingOrder, TradingOrderFields>;
    static phantom(): PhantomReified<ToTypeStr<TradingOrder>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::position::TradingOrder">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        create_ts_ms: string;
        order_id: string;
        linked_position_id: {
            vec: any[];
        };
        user: string;
        collateral_token: {
            name: {
                bytes: number[];
            };
        };
        collateral_token_decimal: string;
        symbol: {
            base_token: {
                name: {
                    bytes: number[];
                };
            };
            quote_token: {
                name: {
                    bytes: number[];
                };
            };
        };
        leverage_pct: string;
        reduce_only: boolean;
        is_long: boolean;
        is_stop_order: boolean;
        size: string;
        size_decimal: string;
        trigger_price: string;
        oracle_price_when_placing: string;
        u64_padding: string[];
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        create_ts_ms: string | number | bigint;
        order_id: string | number | bigint;
        linked_position_id: {
            vec: Iterable<any> & {
                length: number;
            };
        };
        user: string;
        collateral_token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        collateral_token_decimal: string | number | bigint;
        symbol: {
            base_token: {
                name: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
            };
            quote_token: {
                name: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
            };
        };
        leverage_pct: string | number | bigint;
        reduce_only: boolean;
        is_long: boolean;
        is_stop_order: boolean;
        size: string | number | bigint;
        size_decimal: string | number | bigint;
        trigger_price: string | number | bigint;
        oracle_price_when_placing: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): TradingOrder;
    static fromFieldsWithTypes(item: FieldsWithTypes): TradingOrder;
    static fromBcs(data: Uint8Array): TradingOrder;
    toJSONField(): {
        id: string;
        createTsMs: string;
        orderId: string;
        linkedPositionId: string | null;
        user: string;
        collateralToken: {
            name: string;
        };
        collateralTokenDecimal: string;
        symbol: {
            baseToken: {
                name: string;
            };
            quoteToken: {
                name: string;
            };
        };
        leveragePct: string;
        reduceOnly: boolean;
        isLong: boolean;
        isStopOrder: boolean;
        size: string;
        sizeDecimal: string;
        triggerPrice: string;
        oraclePriceWhenPlacing: string;
        u64Padding: string[];
    };
    toJSON(): {
        id: string;
        createTsMs: string;
        orderId: string;
        linkedPositionId: string | null;
        user: string;
        collateralToken: {
            name: string;
        };
        collateralTokenDecimal: string;
        symbol: {
            baseToken: {
                name: string;
            };
            quoteToken: {
                name: string;
            };
        };
        leveragePct: string;
        reduceOnly: boolean;
        isLong: boolean;
        isStopOrder: boolean;
        size: string;
        sizeDecimal: string;
        triggerPrice: string;
        oraclePriceWhenPlacing: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): TradingOrder;
    static fromJSON(json: Record<string, any>): TradingOrder;
    static fromSuiParsedData(content: SuiParsedData): TradingOrder;
    static fetch(client: SuiClient, id: string): Promise<TradingOrder>;
}
