import * as reified from "../../_framework/reified";
import { Option } from "../../_dependencies/source/0x1/option/structs";
import { TypeName } from "../../_dependencies/source/0x1/type-name/structs";
import { ObjectTable } from "../../_dependencies/source/0x2/object-table/structs";
import { UID } from "../../_dependencies/source/0x2/object/structs";
import { BigVector } from "../../_dependencies/source/0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277/big-vector/structs";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, Vector, ToTypeStr as ToPhantom } from "../../_framework/reified";
import { FieldsWithTypes } from "../../_framework/util";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isAddTradingSymbolEvent(type: string): boolean;
export interface AddTradingSymbolEventFields {
    index: ToField<"u64">;
    baseTokenType: ToField<TypeName>;
    marketInfo: ToField<MarketInfo>;
    marketConfig: ToField<MarketConfig>;
    u64Padding: ToField<Vector<"u64">>;
}
export type AddTradingSymbolEventReified = Reified<AddTradingSymbolEvent, AddTradingSymbolEventFields>;
export declare class AddTradingSymbolEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::AddTradingSymbolEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::AddTradingSymbolEvent";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::AddTradingSymbolEvent";
    readonly $typeArgs: [];
    readonly index: ToField<"u64">;
    readonly baseTokenType: ToField<TypeName>;
    readonly marketInfo: ToField<MarketInfo>;
    readonly marketConfig: ToField<MarketConfig>;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): AddTradingSymbolEventReified;
    static get r(): reified.StructClassReified<AddTradingSymbolEvent, AddTradingSymbolEventFields>;
    static phantom(): PhantomReified<ToTypeStr<AddTradingSymbolEvent>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::AddTradingSymbolEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        index: string;
        base_token_type: {
            name: {
                bytes: number[];
            };
        };
        market_info: {
            is_active: boolean;
            size_decimal: string;
            user_long_position_size: string;
            user_short_position_size: string;
            next_position_id: string;
            user_long_order_size: string;
            user_short_order_size: string;
            next_order_id: string;
            last_funding_ts_ms: string;
            cumulative_funding_rate_index_sign: boolean;
            cumulative_funding_rate_index: string;
            previous_last_funding_ts_ms: string;
            previous_cumulative_funding_rate_index_sign: boolean;
            previous_cumulative_funding_rate_index: string;
            u64_padding: string[];
        };
        market_config: {
            oracle_id: string;
            max_leverage_pct: string;
            min_size: string;
            lot_size: string;
            trading_fee_rate: string;
            trading_fee_decimal: string;
            basic_funding_rate: string;
            funding_interval_ts_ms: string;
            u64_padding: string[];
        };
        u64_padding: string[];
    }, {
        index: string | number | bigint;
        base_token_type: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        market_info: {
            is_active: boolean;
            size_decimal: string | number | bigint;
            user_long_position_size: string | number | bigint;
            user_short_position_size: string | number | bigint;
            next_position_id: string | number | bigint;
            user_long_order_size: string | number | bigint;
            user_short_order_size: string | number | bigint;
            next_order_id: string | number | bigint;
            last_funding_ts_ms: string | number | bigint;
            cumulative_funding_rate_index_sign: boolean;
            cumulative_funding_rate_index: string | number | bigint;
            previous_last_funding_ts_ms: string | number | bigint;
            previous_cumulative_funding_rate_index_sign: boolean;
            previous_cumulative_funding_rate_index: string | number | bigint;
            u64_padding: Iterable<string | number | bigint> & {
                length: number;
            };
        };
        market_config: {
            oracle_id: string;
            max_leverage_pct: string | number | bigint;
            min_size: string | number | bigint;
            lot_size: string | number | bigint;
            trading_fee_rate: string | number | bigint;
            trading_fee_decimal: string | number | bigint;
            basic_funding_rate: string | number | bigint;
            funding_interval_ts_ms: string | number | bigint;
            u64_padding: Iterable<string | number | bigint> & {
                length: number;
            };
        };
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): AddTradingSymbolEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): AddTradingSymbolEvent;
    static fromBcs(data: Uint8Array): AddTradingSymbolEvent;
    toJSONField(): {
        index: string;
        baseTokenType: {
            name: string;
        };
        marketInfo: {
            isActive: boolean;
            sizeDecimal: string;
            userLongPositionSize: string;
            userShortPositionSize: string;
            nextPositionId: string;
            userLongOrderSize: string;
            userShortOrderSize: string;
            nextOrderId: string;
            lastFundingTsMs: string;
            cumulativeFundingRateIndexSign: boolean;
            cumulativeFundingRateIndex: string;
            previousLastFundingTsMs: string;
            previousCumulativeFundingRateIndexSign: boolean;
            previousCumulativeFundingRateIndex: string;
            u64Padding: string[];
        };
        marketConfig: {
            oracleId: string;
            maxLeveragePct: string;
            minSize: string;
            lotSize: string;
            tradingFeeRate: string;
            tradingFeeDecimal: string;
            basicFundingRate: string;
            fundingIntervalTsMs: string;
            u64Padding: string[];
        };
        u64Padding: string[];
    };
    toJSON(): {
        index: string;
        baseTokenType: {
            name: string;
        };
        marketInfo: {
            isActive: boolean;
            sizeDecimal: string;
            userLongPositionSize: string;
            userShortPositionSize: string;
            nextPositionId: string;
            userLongOrderSize: string;
            userShortOrderSize: string;
            nextOrderId: string;
            lastFundingTsMs: string;
            cumulativeFundingRateIndexSign: boolean;
            cumulativeFundingRateIndex: string;
            previousLastFundingTsMs: string;
            previousCumulativeFundingRateIndexSign: boolean;
            previousCumulativeFundingRateIndex: string;
            u64Padding: string[];
        };
        marketConfig: {
            oracleId: string;
            maxLeveragePct: string;
            minSize: string;
            lotSize: string;
            tradingFeeRate: string;
            tradingFeeDecimal: string;
            basicFundingRate: string;
            fundingIntervalTsMs: string;
            u64Padding: string[];
        };
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): AddTradingSymbolEvent;
    static fromJSON(json: Record<string, any>): AddTradingSymbolEvent;
    static fromSuiParsedData(content: SuiParsedData): AddTradingSymbolEvent;
    static fetch(client: SuiClient, id: string): Promise<AddTradingSymbolEvent>;
}
export declare function isCancelTradingOrderEvent(type: string): boolean;
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
export declare class CancelTradingOrderEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::CancelTradingOrderEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::CancelTradingOrderEvent";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::CancelTradingOrderEvent";
    readonly $typeArgs: [];
    readonly user: ToField<"address">;
    readonly marketIndex: ToField<"u64">;
    readonly orderId: ToField<"u64">;
    readonly triggerPrice: ToField<"u64">;
    readonly collateralToken: ToField<TypeName>;
    readonly baseToken: ToField<TypeName>;
    readonly releasedCollateralAmount: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): CancelTradingOrderEventReified;
    static get r(): reified.StructClassReified<CancelTradingOrderEvent, CancelTradingOrderEventFields>;
    static phantom(): PhantomReified<ToTypeStr<CancelTradingOrderEvent>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::CancelTradingOrderEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        user: string;
        market_index: string;
        order_id: string;
        trigger_price: string;
        collateral_token: {
            name: {
                bytes: number[];
            };
        };
        base_token: {
            name: {
                bytes: number[];
            };
        };
        released_collateral_amount: string;
        u64_padding: string[];
    }, {
        user: string;
        market_index: string | number | bigint;
        order_id: string | number | bigint;
        trigger_price: string | number | bigint;
        collateral_token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        base_token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        released_collateral_amount: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): CancelTradingOrderEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): CancelTradingOrderEvent;
    static fromBcs(data: Uint8Array): CancelTradingOrderEvent;
    toJSONField(): {
        user: string;
        marketIndex: string;
        orderId: string;
        triggerPrice: string;
        collateralToken: {
            name: string;
        };
        baseToken: {
            name: string;
        };
        releasedCollateralAmount: string;
        u64Padding: string[];
    };
    toJSON(): {
        user: string;
        marketIndex: string;
        orderId: string;
        triggerPrice: string;
        collateralToken: {
            name: string;
        };
        baseToken: {
            name: string;
        };
        releasedCollateralAmount: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): CancelTradingOrderEvent;
    static fromJSON(json: Record<string, any>): CancelTradingOrderEvent;
    static fromSuiParsedData(content: SuiParsedData): CancelTradingOrderEvent;
    static fetch(client: SuiClient, id: string): Promise<CancelTradingOrderEvent>;
}
export declare function isCreateTradingOrderEvent(type: string): boolean;
export interface CreateTradingOrderEventFields {
    user: ToField<"address">;
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
export declare class CreateTradingOrderEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::CreateTradingOrderEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::CreateTradingOrderEvent";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::CreateTradingOrderEvent";
    readonly $typeArgs: [];
    readonly user: ToField<"address">;
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
    private constructor();
    static reified(): CreateTradingOrderEventReified;
    static get r(): reified.StructClassReified<CreateTradingOrderEvent, CreateTradingOrderEventFields>;
    static phantom(): PhantomReified<ToTypeStr<CreateTradingOrderEvent>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::CreateTradingOrderEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        user: string;
        market_index: string;
        pool_index: string;
        collateral_token: {
            name: {
                bytes: number[];
            };
        };
        base_token: {
            name: {
                bytes: number[];
            };
        };
        linked_position_id: {
            vec: any[];
        };
        collateral_amount: string;
        leverage_pct: string;
        reduce_only: boolean;
        is_long: boolean;
        is_stop_order: boolean;
        size: string;
        trigger_price: string;
        filled: boolean;
        filled_price: {
            vec: any[];
        };
        u64_padding: string[];
    }, {
        user: string;
        market_index: string | number | bigint;
        pool_index: string | number | bigint;
        collateral_token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        base_token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        linked_position_id: {
            vec: Iterable<any> & {
                length: number;
            };
        };
        collateral_amount: string | number | bigint;
        leverage_pct: string | number | bigint;
        reduce_only: boolean;
        is_long: boolean;
        is_stop_order: boolean;
        size: string | number | bigint;
        trigger_price: string | number | bigint;
        filled: boolean;
        filled_price: {
            vec: Iterable<any> & {
                length: number;
            };
        };
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): CreateTradingOrderEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): CreateTradingOrderEvent;
    static fromBcs(data: Uint8Array): CreateTradingOrderEvent;
    toJSONField(): {
        user: string;
        marketIndex: string;
        poolIndex: string;
        collateralToken: {
            name: string;
        };
        baseToken: {
            name: string;
        };
        linkedPositionId: string | null;
        collateralAmount: string;
        leveragePct: string;
        reduceOnly: boolean;
        isLong: boolean;
        isStopOrder: boolean;
        size: string;
        triggerPrice: string;
        filled: boolean;
        filledPrice: string | null;
        u64Padding: string[];
    };
    toJSON(): {
        user: string;
        marketIndex: string;
        poolIndex: string;
        collateralToken: {
            name: string;
        };
        baseToken: {
            name: string;
        };
        linkedPositionId: string | null;
        collateralAmount: string;
        leveragePct: string;
        reduceOnly: boolean;
        isLong: boolean;
        isStopOrder: boolean;
        size: string;
        triggerPrice: string;
        filled: boolean;
        filledPrice: string | null;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): CreateTradingOrderEvent;
    static fromJSON(json: Record<string, any>): CreateTradingOrderEvent;
    static fromSuiParsedData(content: SuiParsedData): CreateTradingOrderEvent;
    static fetch(client: SuiClient, id: string): Promise<CreateTradingOrderEvent>;
}
export declare function isCreateTradingOrderWithBidReceiptsEvent(type: string): boolean;
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
export type CreateTradingOrderWithBidReceiptsEventReified = Reified<CreateTradingOrderWithBidReceiptsEvent, CreateTradingOrderWithBidReceiptsEventFields>;
export declare class CreateTradingOrderWithBidReceiptsEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::CreateTradingOrderWithBidReceiptsEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::CreateTradingOrderWithBidReceiptsEvent";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::CreateTradingOrderWithBidReceiptsEvent";
    readonly $typeArgs: [];
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
    private constructor();
    static reified(): CreateTradingOrderWithBidReceiptsEventReified;
    static get r(): reified.StructClassReified<CreateTradingOrderWithBidReceiptsEvent, CreateTradingOrderWithBidReceiptsEventFields>;
    static phantom(): PhantomReified<ToTypeStr<CreateTradingOrderWithBidReceiptsEvent>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::CreateTradingOrderWithBidReceiptsEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        user: string;
        market_index: string;
        pool_index: string;
        collateral_token: {
            name: {
                bytes: number[];
            };
        };
        base_token: {
            name: {
                bytes: number[];
            };
        };
        collateral_in_deposit_token: string;
        is_long: boolean;
        size: string;
        trigger_price: string;
        filled: boolean;
        filled_price: {
            vec: any[];
        };
        u64_padding: string[];
    }, {
        user: string;
        market_index: string | number | bigint;
        pool_index: string | number | bigint;
        collateral_token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        base_token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        collateral_in_deposit_token: string | number | bigint;
        is_long: boolean;
        size: string | number | bigint;
        trigger_price: string | number | bigint;
        filled: boolean;
        filled_price: {
            vec: Iterable<any> & {
                length: number;
            };
        };
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): CreateTradingOrderWithBidReceiptsEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): CreateTradingOrderWithBidReceiptsEvent;
    static fromBcs(data: Uint8Array): CreateTradingOrderWithBidReceiptsEvent;
    toJSONField(): {
        user: string;
        marketIndex: string;
        poolIndex: string;
        collateralToken: {
            name: string;
        };
        baseToken: {
            name: string;
        };
        collateralInDepositToken: string;
        isLong: boolean;
        size: string;
        triggerPrice: string;
        filled: boolean;
        filledPrice: string | null;
        u64Padding: string[];
    };
    toJSON(): {
        user: string;
        marketIndex: string;
        poolIndex: string;
        collateralToken: {
            name: string;
        };
        baseToken: {
            name: string;
        };
        collateralInDepositToken: string;
        isLong: boolean;
        size: string;
        triggerPrice: string;
        filled: boolean;
        filledPrice: string | null;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): CreateTradingOrderWithBidReceiptsEvent;
    static fromJSON(json: Record<string, any>): CreateTradingOrderWithBidReceiptsEvent;
    static fromSuiParsedData(content: SuiParsedData): CreateTradingOrderWithBidReceiptsEvent;
    static fetch(client: SuiClient, id: string): Promise<CreateTradingOrderWithBidReceiptsEvent>;
}
export declare function isIncreaseCollateralEvent(type: string): boolean;
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
export declare class IncreaseCollateralEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::IncreaseCollateralEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::IncreaseCollateralEvent";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::IncreaseCollateralEvent";
    readonly $typeArgs: [];
    readonly user: ToField<"address">;
    readonly marketIndex: ToField<"u64">;
    readonly poolIndex: ToField<"u64">;
    readonly positionId: ToField<"u64">;
    readonly collateralToken: ToField<TypeName>;
    readonly baseToken: ToField<TypeName>;
    readonly increasedCollateralAmount: ToField<"u64">;
    readonly remainingCollateralAmount: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): IncreaseCollateralEventReified;
    static get r(): reified.StructClassReified<IncreaseCollateralEvent, IncreaseCollateralEventFields>;
    static phantom(): PhantomReified<ToTypeStr<IncreaseCollateralEvent>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::IncreaseCollateralEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        user: string;
        market_index: string;
        pool_index: string;
        position_id: string;
        collateral_token: {
            name: {
                bytes: number[];
            };
        };
        base_token: {
            name: {
                bytes: number[];
            };
        };
        increased_collateral_amount: string;
        remaining_collateral_amount: string;
        u64_padding: string[];
    }, {
        user: string;
        market_index: string | number | bigint;
        pool_index: string | number | bigint;
        position_id: string | number | bigint;
        collateral_token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        base_token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        increased_collateral_amount: string | number | bigint;
        remaining_collateral_amount: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): IncreaseCollateralEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): IncreaseCollateralEvent;
    static fromBcs(data: Uint8Array): IncreaseCollateralEvent;
    toJSONField(): {
        user: string;
        marketIndex: string;
        poolIndex: string;
        positionId: string;
        collateralToken: {
            name: string;
        };
        baseToken: {
            name: string;
        };
        increasedCollateralAmount: string;
        remainingCollateralAmount: string;
        u64Padding: string[];
    };
    toJSON(): {
        user: string;
        marketIndex: string;
        poolIndex: string;
        positionId: string;
        collateralToken: {
            name: string;
        };
        baseToken: {
            name: string;
        };
        increasedCollateralAmount: string;
        remainingCollateralAmount: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): IncreaseCollateralEvent;
    static fromJSON(json: Record<string, any>): IncreaseCollateralEvent;
    static fromSuiParsedData(content: SuiParsedData): IncreaseCollateralEvent;
    static fetch(client: SuiClient, id: string): Promise<IncreaseCollateralEvent>;
}
export declare function isLinkedOrdersInfo(type: string): boolean;
export interface LinkedOrdersInfoFields {
    users: ToField<Vector<"address">>;
    ids: ToField<Vector<Vector<"u64">>>;
    prices: ToField<Vector<Vector<"u64">>>;
    u64Padding: ToField<Vector<"u64">>;
}
export type LinkedOrdersInfoReified = Reified<LinkedOrdersInfo, LinkedOrdersInfoFields>;
export declare class LinkedOrdersInfo implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::LinkedOrdersInfo";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::LinkedOrdersInfo";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::LinkedOrdersInfo";
    readonly $typeArgs: [];
    readonly users: ToField<Vector<"address">>;
    readonly ids: ToField<Vector<Vector<"u64">>>;
    readonly prices: ToField<Vector<Vector<"u64">>>;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): LinkedOrdersInfoReified;
    static get r(): reified.StructClassReified<LinkedOrdersInfo, LinkedOrdersInfoFields>;
    static phantom(): PhantomReified<ToTypeStr<LinkedOrdersInfo>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::LinkedOrdersInfo">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        users: string[];
        ids: string[][];
        prices: string[][];
        u64_padding: string[];
    }, {
        users: Iterable<string> & {
            length: number;
        };
        ids: Iterable<Iterable<string | number | bigint> & {
            length: number;
        }> & {
            length: number;
        };
        prices: Iterable<Iterable<string | number | bigint> & {
            length: number;
        }> & {
            length: number;
        };
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): LinkedOrdersInfo;
    static fromFieldsWithTypes(item: FieldsWithTypes): LinkedOrdersInfo;
    static fromBcs(data: Uint8Array): LinkedOrdersInfo;
    toJSONField(): {
        users: string[];
        ids: string[][];
        prices: string[][];
        u64Padding: string[];
    };
    toJSON(): {
        users: string[];
        ids: string[][];
        prices: string[][];
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): LinkedOrdersInfo;
    static fromJSON(json: Record<string, any>): LinkedOrdersInfo;
    static fromSuiParsedData(content: SuiParsedData): LinkedOrdersInfo;
    static fetch(client: SuiClient, id: string): Promise<LinkedOrdersInfo>;
}
export declare function isLiquidateEvent(type: string): boolean;
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
export declare class LiquidateEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::LiquidateEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::LiquidateEvent";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::LiquidateEvent";
    readonly $typeArgs: [];
    readonly user: ToField<"address">;
    readonly collateralToken: ToField<TypeName>;
    readonly baseToken: ToField<TypeName>;
    readonly positionId: ToField<"u64">;
    readonly collateralPrice: ToField<"u64">;
    readonly tradingPrice: ToField<"u64">;
    readonly liquidatorFeeValue: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): LiquidateEventReified;
    static get r(): reified.StructClassReified<LiquidateEvent, LiquidateEventFields>;
    static phantom(): PhantomReified<ToTypeStr<LiquidateEvent>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::LiquidateEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        user: string;
        collateral_token: {
            name: {
                bytes: number[];
            };
        };
        base_token: {
            name: {
                bytes: number[];
            };
        };
        position_id: string;
        collateral_price: string;
        trading_price: string;
        liquidator_fee_value: string;
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
        base_token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        position_id: string | number | bigint;
        collateral_price: string | number | bigint;
        trading_price: string | number | bigint;
        liquidator_fee_value: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): LiquidateEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): LiquidateEvent;
    static fromBcs(data: Uint8Array): LiquidateEvent;
    toJSONField(): {
        user: string;
        collateralToken: {
            name: string;
        };
        baseToken: {
            name: string;
        };
        positionId: string;
        collateralPrice: string;
        tradingPrice: string;
        liquidatorFeeValue: string;
        u64Padding: string[];
    };
    toJSON(): {
        user: string;
        collateralToken: {
            name: string;
        };
        baseToken: {
            name: string;
        };
        positionId: string;
        collateralPrice: string;
        tradingPrice: string;
        liquidatorFeeValue: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): LiquidateEvent;
    static fromJSON(json: Record<string, any>): LiquidateEvent;
    static fromSuiParsedData(content: SuiParsedData): LiquidateEvent;
    static fetch(client: SuiClient, id: string): Promise<LiquidateEvent>;
}
export declare function isManagerReducePosition(type: string): boolean;
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
export declare class ManagerReducePosition implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::ManagerReducePosition";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::ManagerReducePosition";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::ManagerReducePosition";
    readonly $typeArgs: [];
    readonly user: ToField<"address">;
    readonly collateralToken: ToField<TypeName>;
    readonly baseToken: ToField<TypeName>;
    readonly positionId: ToField<"u64">;
    readonly reducedSize: ToField<"u64">;
    readonly collateralPrice: ToField<"u64">;
    readonly tradingPrice: ToField<"u64">;
    readonly cancelledOrderIds: ToField<Vector<"u64">>;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): ManagerReducePositionReified;
    static get r(): reified.StructClassReified<ManagerReducePosition, ManagerReducePositionFields>;
    static phantom(): PhantomReified<ToTypeStr<ManagerReducePosition>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::ManagerReducePosition">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        user: string;
        collateral_token: {
            name: {
                bytes: number[];
            };
        };
        base_token: {
            name: {
                bytes: number[];
            };
        };
        position_id: string;
        reduced_size: string;
        collateral_price: string;
        trading_price: string;
        cancelled_order_ids: string[];
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
        base_token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        position_id: string | number | bigint;
        reduced_size: string | number | bigint;
        collateral_price: string | number | bigint;
        trading_price: string | number | bigint;
        cancelled_order_ids: Iterable<string | number | bigint> & {
            length: number;
        };
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): ManagerReducePosition;
    static fromFieldsWithTypes(item: FieldsWithTypes): ManagerReducePosition;
    static fromBcs(data: Uint8Array): ManagerReducePosition;
    toJSONField(): {
        user: string;
        collateralToken: {
            name: string;
        };
        baseToken: {
            name: string;
        };
        positionId: string;
        reducedSize: string;
        collateralPrice: string;
        tradingPrice: string;
        cancelledOrderIds: string[];
        u64Padding: string[];
    };
    toJSON(): {
        user: string;
        collateralToken: {
            name: string;
        };
        baseToken: {
            name: string;
        };
        positionId: string;
        reducedSize: string;
        collateralPrice: string;
        tradingPrice: string;
        cancelledOrderIds: string[];
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): ManagerReducePosition;
    static fromJSON(json: Record<string, any>): ManagerReducePosition;
    static fromSuiParsedData(content: SuiParsedData): ManagerReducePosition;
    static fetch(client: SuiClient, id: string): Promise<ManagerReducePosition>;
}
export declare function isMarketConfig(type: string): boolean;
export interface MarketConfigFields {
    oracleId: ToField<"address">;
    maxLeveragePct: ToField<"u64">;
    minSize: ToField<"u64">;
    lotSize: ToField<"u64">;
    tradingFeeRate: ToField<"u64">;
    tradingFeeDecimal: ToField<"u64">;
    basicFundingRate: ToField<"u64">;
    fundingIntervalTsMs: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}
export type MarketConfigReified = Reified<MarketConfig, MarketConfigFields>;
export declare class MarketConfig implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::MarketConfig";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::MarketConfig";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::MarketConfig";
    readonly $typeArgs: [];
    readonly oracleId: ToField<"address">;
    readonly maxLeveragePct: ToField<"u64">;
    readonly minSize: ToField<"u64">;
    readonly lotSize: ToField<"u64">;
    readonly tradingFeeRate: ToField<"u64">;
    readonly tradingFeeDecimal: ToField<"u64">;
    readonly basicFundingRate: ToField<"u64">;
    readonly fundingIntervalTsMs: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): MarketConfigReified;
    static get r(): reified.StructClassReified<MarketConfig, MarketConfigFields>;
    static phantom(): PhantomReified<ToTypeStr<MarketConfig>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::MarketConfig">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        oracle_id: string;
        max_leverage_pct: string;
        min_size: string;
        lot_size: string;
        trading_fee_rate: string;
        trading_fee_decimal: string;
        basic_funding_rate: string;
        funding_interval_ts_ms: string;
        u64_padding: string[];
    }, {
        oracle_id: string;
        max_leverage_pct: string | number | bigint;
        min_size: string | number | bigint;
        lot_size: string | number | bigint;
        trading_fee_rate: string | number | bigint;
        trading_fee_decimal: string | number | bigint;
        basic_funding_rate: string | number | bigint;
        funding_interval_ts_ms: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): MarketConfig;
    static fromFieldsWithTypes(item: FieldsWithTypes): MarketConfig;
    static fromBcs(data: Uint8Array): MarketConfig;
    toJSONField(): {
        oracleId: string;
        maxLeveragePct: string;
        minSize: string;
        lotSize: string;
        tradingFeeRate: string;
        tradingFeeDecimal: string;
        basicFundingRate: string;
        fundingIntervalTsMs: string;
        u64Padding: string[];
    };
    toJSON(): {
        oracleId: string;
        maxLeveragePct: string;
        minSize: string;
        lotSize: string;
        tradingFeeRate: string;
        tradingFeeDecimal: string;
        basicFundingRate: string;
        fundingIntervalTsMs: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): MarketConfig;
    static fromJSON(json: Record<string, any>): MarketConfig;
    static fromSuiParsedData(content: SuiParsedData): MarketConfig;
    static fetch(client: SuiClient, id: string): Promise<MarketConfig>;
}
export declare function isMarketInfo(type: string): boolean;
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
export declare class MarketInfo implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::MarketInfo";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::MarketInfo";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::MarketInfo";
    readonly $typeArgs: [];
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
    private constructor();
    static reified(): MarketInfoReified;
    static get r(): reified.StructClassReified<MarketInfo, MarketInfoFields>;
    static phantom(): PhantomReified<ToTypeStr<MarketInfo>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::MarketInfo">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        is_active: boolean;
        size_decimal: string;
        user_long_position_size: string;
        user_short_position_size: string;
        next_position_id: string;
        user_long_order_size: string;
        user_short_order_size: string;
        next_order_id: string;
        last_funding_ts_ms: string;
        cumulative_funding_rate_index_sign: boolean;
        cumulative_funding_rate_index: string;
        previous_last_funding_ts_ms: string;
        previous_cumulative_funding_rate_index_sign: boolean;
        previous_cumulative_funding_rate_index: string;
        u64_padding: string[];
    }, {
        is_active: boolean;
        size_decimal: string | number | bigint;
        user_long_position_size: string | number | bigint;
        user_short_position_size: string | number | bigint;
        next_position_id: string | number | bigint;
        user_long_order_size: string | number | bigint;
        user_short_order_size: string | number | bigint;
        next_order_id: string | number | bigint;
        last_funding_ts_ms: string | number | bigint;
        cumulative_funding_rate_index_sign: boolean;
        cumulative_funding_rate_index: string | number | bigint;
        previous_last_funding_ts_ms: string | number | bigint;
        previous_cumulative_funding_rate_index_sign: boolean;
        previous_cumulative_funding_rate_index: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): MarketInfo;
    static fromFieldsWithTypes(item: FieldsWithTypes): MarketInfo;
    static fromBcs(data: Uint8Array): MarketInfo;
    toJSONField(): {
        isActive: boolean;
        sizeDecimal: string;
        userLongPositionSize: string;
        userShortPositionSize: string;
        nextPositionId: string;
        userLongOrderSize: string;
        userShortOrderSize: string;
        nextOrderId: string;
        lastFundingTsMs: string;
        cumulativeFundingRateIndexSign: boolean;
        cumulativeFundingRateIndex: string;
        previousLastFundingTsMs: string;
        previousCumulativeFundingRateIndexSign: boolean;
        previousCumulativeFundingRateIndex: string;
        u64Padding: string[];
    };
    toJSON(): {
        isActive: boolean;
        sizeDecimal: string;
        userLongPositionSize: string;
        userShortPositionSize: string;
        nextPositionId: string;
        userLongOrderSize: string;
        userShortOrderSize: string;
        nextOrderId: string;
        lastFundingTsMs: string;
        cumulativeFundingRateIndexSign: boolean;
        cumulativeFundingRateIndex: string;
        previousLastFundingTsMs: string;
        previousCumulativeFundingRateIndexSign: boolean;
        previousCumulativeFundingRateIndex: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): MarketInfo;
    static fromJSON(json: Record<string, any>): MarketInfo;
    static fromSuiParsedData(content: SuiParsedData): MarketInfo;
    static fetch(client: SuiClient, id: string): Promise<MarketInfo>;
}
export declare function isMarketRegistry(type: string): boolean;
export interface MarketRegistryFields {
    id: ToField<UID>;
    referralRegistry: ToField<UID>;
    numMarket: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}
export type MarketRegistryReified = Reified<MarketRegistry, MarketRegistryFields>;
export declare class MarketRegistry implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::MarketRegistry";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::MarketRegistry";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::MarketRegistry";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly referralRegistry: ToField<UID>;
    readonly numMarket: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): MarketRegistryReified;
    static get r(): reified.StructClassReified<MarketRegistry, MarketRegistryFields>;
    static phantom(): PhantomReified<ToTypeStr<MarketRegistry>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::MarketRegistry">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        referral_registry: {
            id: {
                bytes: string;
            };
        };
        num_market: string;
        u64_padding: string[];
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        referral_registry: {
            id: {
                bytes: string;
            };
        };
        num_market: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): MarketRegistry;
    static fromFieldsWithTypes(item: FieldsWithTypes): MarketRegistry;
    static fromBcs(data: Uint8Array): MarketRegistry;
    toJSONField(): {
        id: string;
        referralRegistry: string;
        numMarket: string;
        u64Padding: string[];
    };
    toJSON(): {
        id: string;
        referralRegistry: string;
        numMarket: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): MarketRegistry;
    static fromJSON(json: Record<string, any>): MarketRegistry;
    static fromSuiParsedData(content: SuiParsedData): MarketRegistry;
    static fetch(client: SuiClient, id: string): Promise<MarketRegistry>;
}
export declare function isMarkets(type: string): boolean;
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
export declare class Markets implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::Markets";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::Markets";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::Markets";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly index: ToField<"u64">;
    readonly lpTokenType: ToField<TypeName>;
    readonly quoteTokenType: ToField<TypeName>;
    readonly isActive: ToField<"bool">;
    readonly protocolFeeShareBp: ToField<"u64">;
    readonly symbols: ToField<Vector<TypeName>>;
    readonly symbolMarkets: ToField<ObjectTable<ToPhantom<TypeName>, ToPhantom<SymbolMarket>>>;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): MarketsReified;
    static get r(): reified.StructClassReified<Markets, MarketsFields>;
    static phantom(): PhantomReified<ToTypeStr<Markets>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::Markets">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        index: string;
        lp_token_type: {
            name: {
                bytes: number[];
            };
        };
        quote_token_type: {
            name: {
                bytes: number[];
            };
        };
        is_active: boolean;
        protocol_fee_share_bp: string;
        symbols: {
            name: {
                bytes: number[];
            };
        }[];
        symbol_markets: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string;
        };
        u64_padding: string[];
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        index: string | number | bigint;
        lp_token_type: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        quote_token_type: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        is_active: boolean;
        protocol_fee_share_bp: string | number | bigint;
        symbols: Iterable<{
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        }> & {
            length: number;
        };
        symbol_markets: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string | number | bigint;
        };
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): Markets;
    static fromFieldsWithTypes(item: FieldsWithTypes): Markets;
    static fromBcs(data: Uint8Array): Markets;
    toJSONField(): {
        id: string;
        index: string;
        lpTokenType: {
            name: string;
        };
        quoteTokenType: {
            name: string;
        };
        isActive: boolean;
        protocolFeeShareBp: string;
        symbols: {
            name: string;
        }[];
        symbolMarkets: {
            id: string;
            size: string;
        };
        u64Padding: string[];
    };
    toJSON(): {
        id: string;
        index: string;
        lpTokenType: {
            name: string;
        };
        quoteTokenType: {
            name: string;
        };
        isActive: boolean;
        protocolFeeShareBp: string;
        symbols: {
            name: string;
        }[];
        symbolMarkets: {
            id: string;
            size: string;
        };
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Markets;
    static fromJSON(json: Record<string, any>): Markets;
    static fromSuiParsedData(content: SuiParsedData): Markets;
    static fetch(client: SuiClient, id: string): Promise<Markets>;
}
export declare function isMatchTradingOrderEvent(type: string): boolean;
export interface MatchTradingOrderEventFields {
    collateralToken: ToField<TypeName>;
    baseToken: ToField<TypeName>;
    matchedOrderIds: ToField<Vector<"u64">>;
    linkedOrdersToBeCancelled: ToField<LinkedOrdersInfo>;
    u64Padding: ToField<Vector<"u64">>;
}
export type MatchTradingOrderEventReified = Reified<MatchTradingOrderEvent, MatchTradingOrderEventFields>;
export declare class MatchTradingOrderEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::MatchTradingOrderEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::MatchTradingOrderEvent";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::MatchTradingOrderEvent";
    readonly $typeArgs: [];
    readonly collateralToken: ToField<TypeName>;
    readonly baseToken: ToField<TypeName>;
    readonly matchedOrderIds: ToField<Vector<"u64">>;
    readonly linkedOrdersToBeCancelled: ToField<LinkedOrdersInfo>;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): MatchTradingOrderEventReified;
    static get r(): reified.StructClassReified<MatchTradingOrderEvent, MatchTradingOrderEventFields>;
    static phantom(): PhantomReified<ToTypeStr<MatchTradingOrderEvent>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::MatchTradingOrderEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        collateral_token: {
            name: {
                bytes: number[];
            };
        };
        base_token: {
            name: {
                bytes: number[];
            };
        };
        matched_order_ids: string[];
        linked_orders_to_be_cancelled: {
            users: string[];
            ids: string[][];
            prices: string[][];
            u64_padding: string[];
        };
        u64_padding: string[];
    }, {
        collateral_token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        base_token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        matched_order_ids: Iterable<string | number | bigint> & {
            length: number;
        };
        linked_orders_to_be_cancelled: {
            users: Iterable<string> & {
                length: number;
            };
            ids: Iterable<Iterable<string | number | bigint> & {
                length: number;
            }> & {
                length: number;
            };
            prices: Iterable<Iterable<string | number | bigint> & {
                length: number;
            }> & {
                length: number;
            };
            u64_padding: Iterable<string | number | bigint> & {
                length: number;
            };
        };
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): MatchTradingOrderEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): MatchTradingOrderEvent;
    static fromBcs(data: Uint8Array): MatchTradingOrderEvent;
    toJSONField(): {
        collateralToken: {
            name: string;
        };
        baseToken: {
            name: string;
        };
        matchedOrderIds: string[];
        linkedOrdersToBeCancelled: {
            users: string[];
            ids: string[][];
            prices: string[][];
            u64Padding: string[];
        };
        u64Padding: string[];
    };
    toJSON(): {
        collateralToken: {
            name: string;
        };
        baseToken: {
            name: string;
        };
        matchedOrderIds: string[];
        linkedOrdersToBeCancelled: {
            users: string[];
            ids: string[][];
            prices: string[][];
            u64Padding: string[];
        };
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): MatchTradingOrderEvent;
    static fromJSON(json: Record<string, any>): MatchTradingOrderEvent;
    static fromSuiParsedData(content: SuiParsedData): MatchTradingOrderEvent;
    static fetch(client: SuiClient, id: string): Promise<MatchTradingOrderEvent>;
}
export declare function isNewMarketsEvent(type: string): boolean;
export interface NewMarketsEventFields {
    index: ToField<"u64">;
    lpTokenType: ToField<TypeName>;
    quoteTokenType: ToField<TypeName>;
    protocolFeeShareBp: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}
export type NewMarketsEventReified = Reified<NewMarketsEvent, NewMarketsEventFields>;
export declare class NewMarketsEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::NewMarketsEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::NewMarketsEvent";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::NewMarketsEvent";
    readonly $typeArgs: [];
    readonly index: ToField<"u64">;
    readonly lpTokenType: ToField<TypeName>;
    readonly quoteTokenType: ToField<TypeName>;
    readonly protocolFeeShareBp: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): NewMarketsEventReified;
    static get r(): reified.StructClassReified<NewMarketsEvent, NewMarketsEventFields>;
    static phantom(): PhantomReified<ToTypeStr<NewMarketsEvent>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::NewMarketsEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        index: string;
        lp_token_type: {
            name: {
                bytes: number[];
            };
        };
        quote_token_type: {
            name: {
                bytes: number[];
            };
        };
        protocol_fee_share_bp: string;
        u64_padding: string[];
    }, {
        index: string | number | bigint;
        lp_token_type: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        quote_token_type: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        protocol_fee_share_bp: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): NewMarketsEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): NewMarketsEvent;
    static fromBcs(data: Uint8Array): NewMarketsEvent;
    toJSONField(): {
        index: string;
        lpTokenType: {
            name: string;
        };
        quoteTokenType: {
            name: string;
        };
        protocolFeeShareBp: string;
        u64Padding: string[];
    };
    toJSON(): {
        index: string;
        lpTokenType: {
            name: string;
        };
        quoteTokenType: {
            name: string;
        };
        protocolFeeShareBp: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): NewMarketsEvent;
    static fromJSON(json: Record<string, any>): NewMarketsEvent;
    static fromSuiParsedData(content: SuiParsedData): NewMarketsEvent;
    static fetch(client: SuiClient, id: string): Promise<NewMarketsEvent>;
}
export declare function isReleaseCollateralEvent(type: string): boolean;
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
export declare class ReleaseCollateralEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::ReleaseCollateralEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::ReleaseCollateralEvent";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::ReleaseCollateralEvent";
    readonly $typeArgs: [];
    readonly user: ToField<"address">;
    readonly marketIndex: ToField<"u64">;
    readonly poolIndex: ToField<"u64">;
    readonly positionId: ToField<"u64">;
    readonly collateralToken: ToField<TypeName>;
    readonly baseToken: ToField<TypeName>;
    readonly releasedCollateralAmount: ToField<"u64">;
    readonly remainingCollateralAmount: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): ReleaseCollateralEventReified;
    static get r(): reified.StructClassReified<ReleaseCollateralEvent, ReleaseCollateralEventFields>;
    static phantom(): PhantomReified<ToTypeStr<ReleaseCollateralEvent>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::ReleaseCollateralEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        user: string;
        market_index: string;
        pool_index: string;
        position_id: string;
        collateral_token: {
            name: {
                bytes: number[];
            };
        };
        base_token: {
            name: {
                bytes: number[];
            };
        };
        released_collateral_amount: string;
        remaining_collateral_amount: string;
        u64_padding: string[];
    }, {
        user: string;
        market_index: string | number | bigint;
        pool_index: string | number | bigint;
        position_id: string | number | bigint;
        collateral_token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        base_token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        released_collateral_amount: string | number | bigint;
        remaining_collateral_amount: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): ReleaseCollateralEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): ReleaseCollateralEvent;
    static fromBcs(data: Uint8Array): ReleaseCollateralEvent;
    toJSONField(): {
        user: string;
        marketIndex: string;
        poolIndex: string;
        positionId: string;
        collateralToken: {
            name: string;
        };
        baseToken: {
            name: string;
        };
        releasedCollateralAmount: string;
        remainingCollateralAmount: string;
        u64Padding: string[];
    };
    toJSON(): {
        user: string;
        marketIndex: string;
        poolIndex: string;
        positionId: string;
        collateralToken: {
            name: string;
        };
        baseToken: {
            name: string;
        };
        releasedCollateralAmount: string;
        remainingCollateralAmount: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): ReleaseCollateralEvent;
    static fromJSON(json: Record<string, any>): ReleaseCollateralEvent;
    static fromSuiParsedData(content: SuiParsedData): ReleaseCollateralEvent;
    static fetch(client: SuiClient, id: string): Promise<ReleaseCollateralEvent>;
}
export declare function isResumeMarketEvent(type: string): boolean;
export interface ResumeMarketEventFields {
    index: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}
export type ResumeMarketEventReified = Reified<ResumeMarketEvent, ResumeMarketEventFields>;
export declare class ResumeMarketEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::ResumeMarketEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::ResumeMarketEvent";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::ResumeMarketEvent";
    readonly $typeArgs: [];
    readonly index: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): ResumeMarketEventReified;
    static get r(): reified.StructClassReified<ResumeMarketEvent, ResumeMarketEventFields>;
    static phantom(): PhantomReified<ToTypeStr<ResumeMarketEvent>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::ResumeMarketEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        index: string;
        u64_padding: string[];
    }, {
        index: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): ResumeMarketEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): ResumeMarketEvent;
    static fromBcs(data: Uint8Array): ResumeMarketEvent;
    toJSONField(): {
        index: string;
        u64Padding: string[];
    };
    toJSON(): {
        index: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): ResumeMarketEvent;
    static fromJSON(json: Record<string, any>): ResumeMarketEvent;
    static fromSuiParsedData(content: SuiParsedData): ResumeMarketEvent;
    static fetch(client: SuiClient, id: string): Promise<ResumeMarketEvent>;
}
export declare function isResumeTradingSymbolEvent(type: string): boolean;
export interface ResumeTradingSymbolEventFields {
    index: ToField<"u64">;
    resumedBaseToken: ToField<TypeName>;
    u64Padding: ToField<Vector<"u64">>;
}
export type ResumeTradingSymbolEventReified = Reified<ResumeTradingSymbolEvent, ResumeTradingSymbolEventFields>;
export declare class ResumeTradingSymbolEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::ResumeTradingSymbolEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::ResumeTradingSymbolEvent";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::ResumeTradingSymbolEvent";
    readonly $typeArgs: [];
    readonly index: ToField<"u64">;
    readonly resumedBaseToken: ToField<TypeName>;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): ResumeTradingSymbolEventReified;
    static get r(): reified.StructClassReified<ResumeTradingSymbolEvent, ResumeTradingSymbolEventFields>;
    static phantom(): PhantomReified<ToTypeStr<ResumeTradingSymbolEvent>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::ResumeTradingSymbolEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        index: string;
        resumed_base_token: {
            name: {
                bytes: number[];
            };
        };
        u64_padding: string[];
    }, {
        index: string | number | bigint;
        resumed_base_token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): ResumeTradingSymbolEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): ResumeTradingSymbolEvent;
    static fromBcs(data: Uint8Array): ResumeTradingSymbolEvent;
    toJSONField(): {
        index: string;
        resumedBaseToken: {
            name: string;
        };
        u64Padding: string[];
    };
    toJSON(): {
        index: string;
        resumedBaseToken: {
            name: string;
        };
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): ResumeTradingSymbolEvent;
    static fromJSON(json: Record<string, any>): ResumeTradingSymbolEvent;
    static fromSuiParsedData(content: SuiParsedData): ResumeTradingSymbolEvent;
    static fetch(client: SuiClient, id: string): Promise<ResumeTradingSymbolEvent>;
}
export declare function isSuspendMarketEvent(type: string): boolean;
export interface SuspendMarketEventFields {
    index: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}
export type SuspendMarketEventReified = Reified<SuspendMarketEvent, SuspendMarketEventFields>;
export declare class SuspendMarketEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::SuspendMarketEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::SuspendMarketEvent";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::SuspendMarketEvent";
    readonly $typeArgs: [];
    readonly index: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): SuspendMarketEventReified;
    static get r(): reified.StructClassReified<SuspendMarketEvent, SuspendMarketEventFields>;
    static phantom(): PhantomReified<ToTypeStr<SuspendMarketEvent>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::SuspendMarketEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        index: string;
        u64_padding: string[];
    }, {
        index: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): SuspendMarketEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): SuspendMarketEvent;
    static fromBcs(data: Uint8Array): SuspendMarketEvent;
    toJSONField(): {
        index: string;
        u64Padding: string[];
    };
    toJSON(): {
        index: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): SuspendMarketEvent;
    static fromJSON(json: Record<string, any>): SuspendMarketEvent;
    static fromSuiParsedData(content: SuiParsedData): SuspendMarketEvent;
    static fetch(client: SuiClient, id: string): Promise<SuspendMarketEvent>;
}
export declare function isSuspendTradingSymbolEvent(type: string): boolean;
export interface SuspendTradingSymbolEventFields {
    index: ToField<"u64">;
    suspendedBaseToken: ToField<TypeName>;
    u64Padding: ToField<Vector<"u64">>;
}
export type SuspendTradingSymbolEventReified = Reified<SuspendTradingSymbolEvent, SuspendTradingSymbolEventFields>;
export declare class SuspendTradingSymbolEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::SuspendTradingSymbolEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::SuspendTradingSymbolEvent";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::SuspendTradingSymbolEvent";
    readonly $typeArgs: [];
    readonly index: ToField<"u64">;
    readonly suspendedBaseToken: ToField<TypeName>;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): SuspendTradingSymbolEventReified;
    static get r(): reified.StructClassReified<SuspendTradingSymbolEvent, SuspendTradingSymbolEventFields>;
    static phantom(): PhantomReified<ToTypeStr<SuspendTradingSymbolEvent>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::SuspendTradingSymbolEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        index: string;
        suspended_base_token: {
            name: {
                bytes: number[];
            };
        };
        u64_padding: string[];
    }, {
        index: string | number | bigint;
        suspended_base_token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): SuspendTradingSymbolEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): SuspendTradingSymbolEvent;
    static fromBcs(data: Uint8Array): SuspendTradingSymbolEvent;
    toJSONField(): {
        index: string;
        suspendedBaseToken: {
            name: string;
        };
        u64Padding: string[];
    };
    toJSON(): {
        index: string;
        suspendedBaseToken: {
            name: string;
        };
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): SuspendTradingSymbolEvent;
    static fromJSON(json: Record<string, any>): SuspendTradingSymbolEvent;
    static fromSuiParsedData(content: SuiParsedData): SuspendTradingSymbolEvent;
    static fetch(client: SuiClient, id: string): Promise<SuspendTradingSymbolEvent>;
}
export declare function isSymbolMarket(type: string): boolean;
export interface SymbolMarketFields {
    id: ToField<UID>;
    userPositions: ToField<BigVector>;
    tokenCollateralOrders: ToField<UID>;
    optionCollateralOrders: ToField<UID>;
    marketInfo: ToField<MarketInfo>;
    marketConfig: ToField<MarketConfig>;
}
export type SymbolMarketReified = Reified<SymbolMarket, SymbolMarketFields>;
export declare class SymbolMarket implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::SymbolMarket";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::SymbolMarket";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::SymbolMarket";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly userPositions: ToField<BigVector>;
    readonly tokenCollateralOrders: ToField<UID>;
    readonly optionCollateralOrders: ToField<UID>;
    readonly marketInfo: ToField<MarketInfo>;
    readonly marketConfig: ToField<MarketConfig>;
    private constructor();
    static reified(): SymbolMarketReified;
    static get r(): reified.StructClassReified<SymbolMarket, SymbolMarketFields>;
    static phantom(): PhantomReified<ToTypeStr<SymbolMarket>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::SymbolMarket">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        user_positions: {
            id: {
                id: {
                    bytes: string;
                };
            };
            element_type: {
                name: {
                    bytes: number[];
                };
            };
            slice_idx: string;
            slice_size: number;
            length: string;
        };
        token_collateral_orders: {
            id: {
                bytes: string;
            };
        };
        option_collateral_orders: {
            id: {
                bytes: string;
            };
        };
        market_info: {
            is_active: boolean;
            size_decimal: string;
            user_long_position_size: string;
            user_short_position_size: string;
            next_position_id: string;
            user_long_order_size: string;
            user_short_order_size: string;
            next_order_id: string;
            last_funding_ts_ms: string;
            cumulative_funding_rate_index_sign: boolean;
            cumulative_funding_rate_index: string;
            previous_last_funding_ts_ms: string;
            previous_cumulative_funding_rate_index_sign: boolean;
            previous_cumulative_funding_rate_index: string;
            u64_padding: string[];
        };
        market_config: {
            oracle_id: string;
            max_leverage_pct: string;
            min_size: string;
            lot_size: string;
            trading_fee_rate: string;
            trading_fee_decimal: string;
            basic_funding_rate: string;
            funding_interval_ts_ms: string;
            u64_padding: string[];
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        user_positions: {
            id: {
                id: {
                    bytes: string;
                };
            };
            element_type: {
                name: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
            };
            slice_idx: string | number | bigint;
            slice_size: number;
            length: string | number | bigint;
        };
        token_collateral_orders: {
            id: {
                bytes: string;
            };
        };
        option_collateral_orders: {
            id: {
                bytes: string;
            };
        };
        market_info: {
            is_active: boolean;
            size_decimal: string | number | bigint;
            user_long_position_size: string | number | bigint;
            user_short_position_size: string | number | bigint;
            next_position_id: string | number | bigint;
            user_long_order_size: string | number | bigint;
            user_short_order_size: string | number | bigint;
            next_order_id: string | number | bigint;
            last_funding_ts_ms: string | number | bigint;
            cumulative_funding_rate_index_sign: boolean;
            cumulative_funding_rate_index: string | number | bigint;
            previous_last_funding_ts_ms: string | number | bigint;
            previous_cumulative_funding_rate_index_sign: boolean;
            previous_cumulative_funding_rate_index: string | number | bigint;
            u64_padding: Iterable<string | number | bigint> & {
                length: number;
            };
        };
        market_config: {
            oracle_id: string;
            max_leverage_pct: string | number | bigint;
            min_size: string | number | bigint;
            lot_size: string | number | bigint;
            trading_fee_rate: string | number | bigint;
            trading_fee_decimal: string | number | bigint;
            basic_funding_rate: string | number | bigint;
            funding_interval_ts_ms: string | number | bigint;
            u64_padding: Iterable<string | number | bigint> & {
                length: number;
            };
        };
    }>;
    static fromFields(fields: Record<string, any>): SymbolMarket;
    static fromFieldsWithTypes(item: FieldsWithTypes): SymbolMarket;
    static fromBcs(data: Uint8Array): SymbolMarket;
    toJSONField(): {
        id: string;
        userPositions: {
            id: string;
            elementType: {
                name: string;
            };
            sliceIdx: string;
            sliceSize: number;
            length: string;
        };
        tokenCollateralOrders: string;
        optionCollateralOrders: string;
        marketInfo: {
            isActive: boolean;
            sizeDecimal: string;
            userLongPositionSize: string;
            userShortPositionSize: string;
            nextPositionId: string;
            userLongOrderSize: string;
            userShortOrderSize: string;
            nextOrderId: string;
            lastFundingTsMs: string;
            cumulativeFundingRateIndexSign: boolean;
            cumulativeFundingRateIndex: string;
            previousLastFundingTsMs: string;
            previousCumulativeFundingRateIndexSign: boolean;
            previousCumulativeFundingRateIndex: string;
            u64Padding: string[];
        };
        marketConfig: {
            oracleId: string;
            maxLeveragePct: string;
            minSize: string;
            lotSize: string;
            tradingFeeRate: string;
            tradingFeeDecimal: string;
            basicFundingRate: string;
            fundingIntervalTsMs: string;
            u64Padding: string[];
        };
    };
    toJSON(): {
        id: string;
        userPositions: {
            id: string;
            elementType: {
                name: string;
            };
            sliceIdx: string;
            sliceSize: number;
            length: string;
        };
        tokenCollateralOrders: string;
        optionCollateralOrders: string;
        marketInfo: {
            isActive: boolean;
            sizeDecimal: string;
            userLongPositionSize: string;
            userShortPositionSize: string;
            nextPositionId: string;
            userLongOrderSize: string;
            userShortOrderSize: string;
            nextOrderId: string;
            lastFundingTsMs: string;
            cumulativeFundingRateIndexSign: boolean;
            cumulativeFundingRateIndex: string;
            previousLastFundingTsMs: string;
            previousCumulativeFundingRateIndexSign: boolean;
            previousCumulativeFundingRateIndex: string;
            u64Padding: string[];
        };
        marketConfig: {
            oracleId: string;
            maxLeveragePct: string;
            minSize: string;
            lotSize: string;
            tradingFeeRate: string;
            tradingFeeDecimal: string;
            basicFundingRate: string;
            fundingIntervalTsMs: string;
            u64Padding: string[];
        };
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): SymbolMarket;
    static fromJSON(json: Record<string, any>): SymbolMarket;
    static fromSuiParsedData(content: SuiParsedData): SymbolMarket;
    static fetch(client: SuiClient, id: string): Promise<SymbolMarket>;
}
export declare function isUSD(type: string): boolean;
export interface USDFields {
    dummyField: ToField<"bool">;
}
export type USDReified = Reified<USD, USDFields>;
export declare class USD implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::USD";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::USD";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::USD";
    readonly $typeArgs: [];
    readonly dummyField: ToField<"bool">;
    private constructor();
    static reified(): USDReified;
    static get r(): reified.StructClassReified<USD, USDFields>;
    static phantom(): PhantomReified<ToTypeStr<USD>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::USD">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        dummy_field: boolean;
    }, {
        dummy_field: boolean;
    }>;
    static fromFields(fields: Record<string, any>): USD;
    static fromFieldsWithTypes(item: FieldsWithTypes): USD;
    static fromBcs(data: Uint8Array): USD;
    toJSONField(): {
        dummyField: boolean;
    };
    toJSON(): {
        dummyField: boolean;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): USD;
    static fromJSON(json: Record<string, any>): USD;
    static fromSuiParsedData(content: SuiParsedData): USD;
    static fetch(client: SuiClient, id: string): Promise<USD>;
}
export declare function isUpdateFundingRateEvent(type: string): boolean;
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
export declare class UpdateFundingRateEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::UpdateFundingRateEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::UpdateFundingRateEvent";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::UpdateFundingRateEvent";
    readonly $typeArgs: [];
    readonly baseToken: ToField<TypeName>;
    readonly newFundingTsMs: ToField<"u64">;
    readonly intervalsCount: ToField<"u64">;
    readonly previousCumulativeFundingRateIndexSign: ToField<"bool">;
    readonly previousCumulativeFundingRateIndex: ToField<"u64">;
    readonly cumulativeFundingRateIndexSign: ToField<"bool">;
    readonly cumulativeFundingRateIndex: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): UpdateFundingRateEventReified;
    static get r(): reified.StructClassReified<UpdateFundingRateEvent, UpdateFundingRateEventFields>;
    static phantom(): PhantomReified<ToTypeStr<UpdateFundingRateEvent>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::UpdateFundingRateEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        base_token: {
            name: {
                bytes: number[];
            };
        };
        new_funding_ts_ms: string;
        intervals_count: string;
        previous_cumulative_funding_rate_index_sign: boolean;
        previous_cumulative_funding_rate_index: string;
        cumulative_funding_rate_index_sign: boolean;
        cumulative_funding_rate_index: string;
        u64_padding: string[];
    }, {
        base_token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        new_funding_ts_ms: string | number | bigint;
        intervals_count: string | number | bigint;
        previous_cumulative_funding_rate_index_sign: boolean;
        previous_cumulative_funding_rate_index: string | number | bigint;
        cumulative_funding_rate_index_sign: boolean;
        cumulative_funding_rate_index: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): UpdateFundingRateEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): UpdateFundingRateEvent;
    static fromBcs(data: Uint8Array): UpdateFundingRateEvent;
    toJSONField(): {
        baseToken: {
            name: string;
        };
        newFundingTsMs: string;
        intervalsCount: string;
        previousCumulativeFundingRateIndexSign: boolean;
        previousCumulativeFundingRateIndex: string;
        cumulativeFundingRateIndexSign: boolean;
        cumulativeFundingRateIndex: string;
        u64Padding: string[];
    };
    toJSON(): {
        baseToken: {
            name: string;
        };
        newFundingTsMs: string;
        intervalsCount: string;
        previousCumulativeFundingRateIndexSign: boolean;
        previousCumulativeFundingRateIndex: string;
        cumulativeFundingRateIndexSign: boolean;
        cumulativeFundingRateIndex: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): UpdateFundingRateEvent;
    static fromJSON(json: Record<string, any>): UpdateFundingRateEvent;
    static fromSuiParsedData(content: SuiParsedData): UpdateFundingRateEvent;
    static fetch(client: SuiClient, id: string): Promise<UpdateFundingRateEvent>;
}
export declare function isUpdateMarketConfigEvent(type: string): boolean;
export interface UpdateMarketConfigEventFields {
    index: ToField<"u64">;
    baseTokenType: ToField<TypeName>;
    previousMarketConfig: ToField<MarketConfig>;
    newMarketConfig: ToField<MarketConfig>;
    u64Padding: ToField<Vector<"u64">>;
}
export type UpdateMarketConfigEventReified = Reified<UpdateMarketConfigEvent, UpdateMarketConfigEventFields>;
export declare class UpdateMarketConfigEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::UpdateMarketConfigEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::UpdateMarketConfigEvent";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::UpdateMarketConfigEvent";
    readonly $typeArgs: [];
    readonly index: ToField<"u64">;
    readonly baseTokenType: ToField<TypeName>;
    readonly previousMarketConfig: ToField<MarketConfig>;
    readonly newMarketConfig: ToField<MarketConfig>;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): UpdateMarketConfigEventReified;
    static get r(): reified.StructClassReified<UpdateMarketConfigEvent, UpdateMarketConfigEventFields>;
    static phantom(): PhantomReified<ToTypeStr<UpdateMarketConfigEvent>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::UpdateMarketConfigEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        index: string;
        base_token_type: {
            name: {
                bytes: number[];
            };
        };
        previous_market_config: {
            oracle_id: string;
            max_leverage_pct: string;
            min_size: string;
            lot_size: string;
            trading_fee_rate: string;
            trading_fee_decimal: string;
            basic_funding_rate: string;
            funding_interval_ts_ms: string;
            u64_padding: string[];
        };
        new_market_config: {
            oracle_id: string;
            max_leverage_pct: string;
            min_size: string;
            lot_size: string;
            trading_fee_rate: string;
            trading_fee_decimal: string;
            basic_funding_rate: string;
            funding_interval_ts_ms: string;
            u64_padding: string[];
        };
        u64_padding: string[];
    }, {
        index: string | number | bigint;
        base_token_type: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        previous_market_config: {
            oracle_id: string;
            max_leverage_pct: string | number | bigint;
            min_size: string | number | bigint;
            lot_size: string | number | bigint;
            trading_fee_rate: string | number | bigint;
            trading_fee_decimal: string | number | bigint;
            basic_funding_rate: string | number | bigint;
            funding_interval_ts_ms: string | number | bigint;
            u64_padding: Iterable<string | number | bigint> & {
                length: number;
            };
        };
        new_market_config: {
            oracle_id: string;
            max_leverage_pct: string | number | bigint;
            min_size: string | number | bigint;
            lot_size: string | number | bigint;
            trading_fee_rate: string | number | bigint;
            trading_fee_decimal: string | number | bigint;
            basic_funding_rate: string | number | bigint;
            funding_interval_ts_ms: string | number | bigint;
            u64_padding: Iterable<string | number | bigint> & {
                length: number;
            };
        };
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): UpdateMarketConfigEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): UpdateMarketConfigEvent;
    static fromBcs(data: Uint8Array): UpdateMarketConfigEvent;
    toJSONField(): {
        index: string;
        baseTokenType: {
            name: string;
        };
        previousMarketConfig: {
            oracleId: string;
            maxLeveragePct: string;
            minSize: string;
            lotSize: string;
            tradingFeeRate: string;
            tradingFeeDecimal: string;
            basicFundingRate: string;
            fundingIntervalTsMs: string;
            u64Padding: string[];
        };
        newMarketConfig: {
            oracleId: string;
            maxLeveragePct: string;
            minSize: string;
            lotSize: string;
            tradingFeeRate: string;
            tradingFeeDecimal: string;
            basicFundingRate: string;
            fundingIntervalTsMs: string;
            u64Padding: string[];
        };
        u64Padding: string[];
    };
    toJSON(): {
        index: string;
        baseTokenType: {
            name: string;
        };
        previousMarketConfig: {
            oracleId: string;
            maxLeveragePct: string;
            minSize: string;
            lotSize: string;
            tradingFeeRate: string;
            tradingFeeDecimal: string;
            basicFundingRate: string;
            fundingIntervalTsMs: string;
            u64Padding: string[];
        };
        newMarketConfig: {
            oracleId: string;
            maxLeveragePct: string;
            minSize: string;
            lotSize: string;
            tradingFeeRate: string;
            tradingFeeDecimal: string;
            basicFundingRate: string;
            fundingIntervalTsMs: string;
            u64Padding: string[];
        };
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): UpdateMarketConfigEvent;
    static fromJSON(json: Record<string, any>): UpdateMarketConfigEvent;
    static fromSuiParsedData(content: SuiParsedData): UpdateMarketConfigEvent;
    static fetch(client: SuiClient, id: string): Promise<UpdateMarketConfigEvent>;
}
export declare function isUpdateProtocolFeeShareBpEvent(type: string): boolean;
export interface UpdateProtocolFeeShareBpEventFields {
    index: ToField<"u64">;
    previousProtocolFeeShareBp: ToField<"u64">;
    newProtocolFeeShareBp: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}
export type UpdateProtocolFeeShareBpEventReified = Reified<UpdateProtocolFeeShareBpEvent, UpdateProtocolFeeShareBpEventFields>;
export declare class UpdateProtocolFeeShareBpEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::UpdateProtocolFeeShareBpEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::UpdateProtocolFeeShareBpEvent";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::UpdateProtocolFeeShareBpEvent";
    readonly $typeArgs: [];
    readonly index: ToField<"u64">;
    readonly previousProtocolFeeShareBp: ToField<"u64">;
    readonly newProtocolFeeShareBp: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): UpdateProtocolFeeShareBpEventReified;
    static get r(): reified.StructClassReified<UpdateProtocolFeeShareBpEvent, UpdateProtocolFeeShareBpEventFields>;
    static phantom(): PhantomReified<ToTypeStr<UpdateProtocolFeeShareBpEvent>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::UpdateProtocolFeeShareBpEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        index: string;
        previous_protocol_fee_share_bp: string;
        new_protocol_fee_share_bp: string;
        u64_padding: string[];
    }, {
        index: string | number | bigint;
        previous_protocol_fee_share_bp: string | number | bigint;
        new_protocol_fee_share_bp: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): UpdateProtocolFeeShareBpEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): UpdateProtocolFeeShareBpEvent;
    static fromBcs(data: Uint8Array): UpdateProtocolFeeShareBpEvent;
    toJSONField(): {
        index: string;
        previousProtocolFeeShareBp: string;
        newProtocolFeeShareBp: string;
        u64Padding: string[];
    };
    toJSON(): {
        index: string;
        previousProtocolFeeShareBp: string;
        newProtocolFeeShareBp: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): UpdateProtocolFeeShareBpEvent;
    static fromJSON(json: Record<string, any>): UpdateProtocolFeeShareBpEvent;
    static fromSuiParsedData(content: SuiParsedData): UpdateProtocolFeeShareBpEvent;
    static fetch(client: SuiClient, id: string): Promise<UpdateProtocolFeeShareBpEvent>;
}
