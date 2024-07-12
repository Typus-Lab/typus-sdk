import * as reified from "../../_framework/reified";
import { TypeName } from "../../_dependencies/source/0x1/type-name/structs";
import { UID } from "../../_dependencies/source/0x2/object/structs";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, Vector } from "../../_framework/reified";
import { FieldsWithTypes } from "../../_framework/util";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isConfig(type: string): boolean;
export interface ConfigFields {
    oracleId: ToField<"address">;
    liquidityTokenDecimal: ToField<"u64">;
    spotConfig: ToField<SpotConfig>;
    marginConfig: ToField<MarginConfig>;
    u64Padding: ToField<Vector<"u64">>;
}
export type ConfigReified = Reified<Config, ConfigFields>;
export declare class Config implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::Config";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::Config";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::Config";
    readonly $typeArgs: [];
    readonly oracleId: ToField<"address">;
    readonly liquidityTokenDecimal: ToField<"u64">;
    readonly spotConfig: ToField<SpotConfig>;
    readonly marginConfig: ToField<MarginConfig>;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): ConfigReified;
    static get r(): reified.StructClassReified<Config, ConfigFields>;
    static phantom(): PhantomReified<ToTypeStr<Config>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::Config">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        oracle_id: string;
        liquidity_token_decimal: string;
        spot_config: {
            min_deposit: string;
            max_capacity: string;
            target_weight_bp: string;
            basic_mint_fee_bp: string;
            additional_mint_fee_bp: string;
            basic_burn_fee_bp: string;
            additional_burn_fee_bp: string;
            swap_fee_bp: string;
            swap_fee_protocol_share_bp: string;
            u64_padding: string[];
        };
        margin_config: {
            basic_borrow_rate_0: string;
            basic_borrow_rate_1: string;
            basic_borrow_rate_2: string;
            utilization_threshold_bp_0: string;
            utilization_threshold_bp_1: string;
            borrow_interval_ts_ms: string;
            max_order_reserve_ratio_bp: string;
            u64_padding: string[];
        };
        u64_padding: string[];
    }, {
        oracle_id: string;
        liquidity_token_decimal: string | number | bigint;
        spot_config: {
            min_deposit: string | number | bigint;
            max_capacity: string | number | bigint;
            target_weight_bp: string | number | bigint;
            basic_mint_fee_bp: string | number | bigint;
            additional_mint_fee_bp: string | number | bigint;
            basic_burn_fee_bp: string | number | bigint;
            additional_burn_fee_bp: string | number | bigint;
            swap_fee_bp: string | number | bigint;
            swap_fee_protocol_share_bp: string | number | bigint;
            u64_padding: Iterable<string | number | bigint> & {
                length: number;
            };
        };
        margin_config: {
            basic_borrow_rate_0: string | number | bigint;
            basic_borrow_rate_1: string | number | bigint;
            basic_borrow_rate_2: string | number | bigint;
            utilization_threshold_bp_0: string | number | bigint;
            utilization_threshold_bp_1: string | number | bigint;
            borrow_interval_ts_ms: string | number | bigint;
            max_order_reserve_ratio_bp: string | number | bigint;
            u64_padding: Iterable<string | number | bigint> & {
                length: number;
            };
        };
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): Config;
    static fromFieldsWithTypes(item: FieldsWithTypes): Config;
    static fromBcs(data: Uint8Array): Config;
    toJSONField(): {
        oracleId: string;
        liquidityTokenDecimal: string;
        spotConfig: {
            minDeposit: string;
            maxCapacity: string;
            targetWeightBp: string;
            basicMintFeeBp: string;
            additionalMintFeeBp: string;
            basicBurnFeeBp: string;
            additionalBurnFeeBp: string;
            swapFeeBp: string;
            swapFeeProtocolShareBp: string;
            u64Padding: string[];
        };
        marginConfig: {
            basicBorrowRate0: string;
            basicBorrowRate1: string;
            basicBorrowRate2: string;
            utilizationThresholdBp0: string;
            utilizationThresholdBp1: string;
            borrowIntervalTsMs: string;
            maxOrderReserveRatioBp: string;
            u64Padding: string[];
        };
        u64Padding: string[];
    };
    toJSON(): {
        oracleId: string;
        liquidityTokenDecimal: string;
        spotConfig: {
            minDeposit: string;
            maxCapacity: string;
            targetWeightBp: string;
            basicMintFeeBp: string;
            additionalMintFeeBp: string;
            basicBurnFeeBp: string;
            additionalBurnFeeBp: string;
            swapFeeBp: string;
            swapFeeProtocolShareBp: string;
            u64Padding: string[];
        };
        marginConfig: {
            basicBorrowRate0: string;
            basicBorrowRate1: string;
            basicBorrowRate2: string;
            utilizationThresholdBp0: string;
            utilizationThresholdBp1: string;
            borrowIntervalTsMs: string;
            maxOrderReserveRatioBp: string;
            u64Padding: string[];
        };
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Config;
    static fromJSON(json: Record<string, any>): Config;
    static fromSuiParsedData(content: SuiParsedData): Config;
    static fetch(client: SuiClient, id: string): Promise<Config>;
}
export declare function isState(type: string): boolean;
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
export declare class State implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::State";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::State";
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
    private constructor();
    static reified(): StateReified;
    static get r(): reified.StructClassReified<State, StateFields>;
    static phantom(): PhantomReified<ToTypeStr<State>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::State">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        liquidity_amount: string;
        value_in_usd: string;
        reserved_amount: string;
        update_ts_ms: string;
        is_active: boolean;
        last_borrow_rate_ts_ms: string;
        cumulative_borrow_rate: string;
        previous_last_borrow_rate_ts_ms: string;
        previous_cumulative_borrow_rate: string;
        u64_padding: string[];
    }, {
        liquidity_amount: string | number | bigint;
        value_in_usd: string | number | bigint;
        reserved_amount: string | number | bigint;
        update_ts_ms: string | number | bigint;
        is_active: boolean;
        last_borrow_rate_ts_ms: string | number | bigint;
        cumulative_borrow_rate: string | number | bigint;
        previous_last_borrow_rate_ts_ms: string | number | bigint;
        previous_cumulative_borrow_rate: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): State;
    static fromFieldsWithTypes(item: FieldsWithTypes): State;
    static fromBcs(data: Uint8Array): State;
    toJSONField(): {
        liquidityAmount: string;
        valueInUsd: string;
        reservedAmount: string;
        updateTsMs: string;
        isActive: boolean;
        lastBorrowRateTsMs: string;
        cumulativeBorrowRate: string;
        previousLastBorrowRateTsMs: string;
        previousCumulativeBorrowRate: string;
        u64Padding: string[];
    };
    toJSON(): {
        liquidityAmount: string;
        valueInUsd: string;
        reservedAmount: string;
        updateTsMs: string;
        isActive: boolean;
        lastBorrowRateTsMs: string;
        cumulativeBorrowRate: string;
        previousLastBorrowRateTsMs: string;
        previousCumulativeBorrowRate: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): State;
    static fromJSON(json: Record<string, any>): State;
    static fromSuiParsedData(content: SuiParsedData): State;
    static fetch(client: SuiClient, id: string): Promise<State>;
}
export declare function isAddLiquidityTokenEvent(type: string): boolean;
export interface AddLiquidityTokenEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    tokenType: ToField<TypeName>;
    config: ToField<Config>;
    state: ToField<State>;
    u64Padding: ToField<Vector<"u64">>;
}
export type AddLiquidityTokenEventReified = Reified<AddLiquidityTokenEvent, AddLiquidityTokenEventFields>;
export declare class AddLiquidityTokenEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::AddLiquidityTokenEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::AddLiquidityTokenEvent";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::AddLiquidityTokenEvent";
    readonly $typeArgs: [];
    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly tokenType: ToField<TypeName>;
    readonly config: ToField<Config>;
    readonly state: ToField<State>;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): AddLiquidityTokenEventReified;
    static get r(): reified.StructClassReified<AddLiquidityTokenEvent, AddLiquidityTokenEventFields>;
    static phantom(): PhantomReified<ToTypeStr<AddLiquidityTokenEvent>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::AddLiquidityTokenEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        sender: string;
        index: string;
        token_type: {
            name: {
                bytes: number[];
            };
        };
        config: {
            oracle_id: string;
            liquidity_token_decimal: string;
            spot_config: {
                min_deposit: string;
                max_capacity: string;
                target_weight_bp: string;
                basic_mint_fee_bp: string;
                additional_mint_fee_bp: string;
                basic_burn_fee_bp: string;
                additional_burn_fee_bp: string;
                swap_fee_bp: string;
                swap_fee_protocol_share_bp: string;
                u64_padding: string[];
            };
            margin_config: {
                basic_borrow_rate_0: string;
                basic_borrow_rate_1: string;
                basic_borrow_rate_2: string;
                utilization_threshold_bp_0: string;
                utilization_threshold_bp_1: string;
                borrow_interval_ts_ms: string;
                max_order_reserve_ratio_bp: string;
                u64_padding: string[];
            };
            u64_padding: string[];
        };
        state: {
            liquidity_amount: string;
            value_in_usd: string;
            reserved_amount: string;
            update_ts_ms: string;
            is_active: boolean;
            last_borrow_rate_ts_ms: string;
            cumulative_borrow_rate: string;
            previous_last_borrow_rate_ts_ms: string;
            previous_cumulative_borrow_rate: string;
            u64_padding: string[];
        };
        u64_padding: string[];
    }, {
        sender: string;
        index: string | number | bigint;
        token_type: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        config: {
            oracle_id: string;
            liquidity_token_decimal: string | number | bigint;
            spot_config: {
                min_deposit: string | number | bigint;
                max_capacity: string | number | bigint;
                target_weight_bp: string | number | bigint;
                basic_mint_fee_bp: string | number | bigint;
                additional_mint_fee_bp: string | number | bigint;
                basic_burn_fee_bp: string | number | bigint;
                additional_burn_fee_bp: string | number | bigint;
                swap_fee_bp: string | number | bigint;
                swap_fee_protocol_share_bp: string | number | bigint;
                u64_padding: Iterable<string | number | bigint> & {
                    length: number;
                };
            };
            margin_config: {
                basic_borrow_rate_0: string | number | bigint;
                basic_borrow_rate_1: string | number | bigint;
                basic_borrow_rate_2: string | number | bigint;
                utilization_threshold_bp_0: string | number | bigint;
                utilization_threshold_bp_1: string | number | bigint;
                borrow_interval_ts_ms: string | number | bigint;
                max_order_reserve_ratio_bp: string | number | bigint;
                u64_padding: Iterable<string | number | bigint> & {
                    length: number;
                };
            };
            u64_padding: Iterable<string | number | bigint> & {
                length: number;
            };
        };
        state: {
            liquidity_amount: string | number | bigint;
            value_in_usd: string | number | bigint;
            reserved_amount: string | number | bigint;
            update_ts_ms: string | number | bigint;
            is_active: boolean;
            last_borrow_rate_ts_ms: string | number | bigint;
            cumulative_borrow_rate: string | number | bigint;
            previous_last_borrow_rate_ts_ms: string | number | bigint;
            previous_cumulative_borrow_rate: string | number | bigint;
            u64_padding: Iterable<string | number | bigint> & {
                length: number;
            };
        };
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): AddLiquidityTokenEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): AddLiquidityTokenEvent;
    static fromBcs(data: Uint8Array): AddLiquidityTokenEvent;
    toJSONField(): {
        sender: string;
        index: string;
        tokenType: {
            name: string;
        };
        config: {
            oracleId: string;
            liquidityTokenDecimal: string;
            spotConfig: {
                minDeposit: string;
                maxCapacity: string;
                targetWeightBp: string;
                basicMintFeeBp: string;
                additionalMintFeeBp: string;
                basicBurnFeeBp: string;
                additionalBurnFeeBp: string;
                swapFeeBp: string;
                swapFeeProtocolShareBp: string;
                u64Padding: string[];
            };
            marginConfig: {
                basicBorrowRate0: string;
                basicBorrowRate1: string;
                basicBorrowRate2: string;
                utilizationThresholdBp0: string;
                utilizationThresholdBp1: string;
                borrowIntervalTsMs: string;
                maxOrderReserveRatioBp: string;
                u64Padding: string[];
            };
            u64Padding: string[];
        };
        state: {
            liquidityAmount: string;
            valueInUsd: string;
            reservedAmount: string;
            updateTsMs: string;
            isActive: boolean;
            lastBorrowRateTsMs: string;
            cumulativeBorrowRate: string;
            previousLastBorrowRateTsMs: string;
            previousCumulativeBorrowRate: string;
            u64Padding: string[];
        };
        u64Padding: string[];
    };
    toJSON(): {
        sender: string;
        index: string;
        tokenType: {
            name: string;
        };
        config: {
            oracleId: string;
            liquidityTokenDecimal: string;
            spotConfig: {
                minDeposit: string;
                maxCapacity: string;
                targetWeightBp: string;
                basicMintFeeBp: string;
                additionalMintFeeBp: string;
                basicBurnFeeBp: string;
                additionalBurnFeeBp: string;
                swapFeeBp: string;
                swapFeeProtocolShareBp: string;
                u64Padding: string[];
            };
            marginConfig: {
                basicBorrowRate0: string;
                basicBorrowRate1: string;
                basicBorrowRate2: string;
                utilizationThresholdBp0: string;
                utilizationThresholdBp1: string;
                borrowIntervalTsMs: string;
                maxOrderReserveRatioBp: string;
                u64Padding: string[];
            };
            u64Padding: string[];
        };
        state: {
            liquidityAmount: string;
            valueInUsd: string;
            reservedAmount: string;
            updateTsMs: string;
            isActive: boolean;
            lastBorrowRateTsMs: string;
            cumulativeBorrowRate: string;
            previousLastBorrowRateTsMs: string;
            previousCumulativeBorrowRate: string;
            u64Padding: string[];
        };
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): AddLiquidityTokenEvent;
    static fromJSON(json: Record<string, any>): AddLiquidityTokenEvent;
    static fromSuiParsedData(content: SuiParsedData): AddLiquidityTokenEvent;
    static fetch(client: SuiClient, id: string): Promise<AddLiquidityTokenEvent>;
}
export declare function isBurnLpEvent(type: string): boolean;
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
export declare class BurnLpEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::BurnLpEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::BurnLpEvent";
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
    private constructor();
    static reified(): BurnLpEventReified;
    static get r(): reified.StructClassReified<BurnLpEvent, BurnLpEventFields>;
    static phantom(): PhantomReified<ToTypeStr<BurnLpEvent>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::BurnLpEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        sender: string;
        index: string;
        lp_token_type: {
            name: {
                bytes: number[];
            };
        };
        burn_lp_amount: string;
        burn_amount_usd: string;
        burn_fee_usd: string;
        liquidity_token_type: {
            name: {
                bytes: number[];
            };
        };
        withdraw_token_amount: string;
        u64_padding: string[];
    }, {
        sender: string;
        index: string | number | bigint;
        lp_token_type: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        burn_lp_amount: string | number | bigint;
        burn_amount_usd: string | number | bigint;
        burn_fee_usd: string | number | bigint;
        liquidity_token_type: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        withdraw_token_amount: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): BurnLpEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): BurnLpEvent;
    static fromBcs(data: Uint8Array): BurnLpEvent;
    toJSONField(): {
        sender: string;
        index: string;
        lpTokenType: {
            name: string;
        };
        burnLpAmount: string;
        burnAmountUsd: string;
        burnFeeUsd: string;
        liquidityTokenType: {
            name: string;
        };
        withdrawTokenAmount: string;
        u64Padding: string[];
    };
    toJSON(): {
        sender: string;
        index: string;
        lpTokenType: {
            name: string;
        };
        burnLpAmount: string;
        burnAmountUsd: string;
        burnFeeUsd: string;
        liquidityTokenType: {
            name: string;
        };
        withdrawTokenAmount: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): BurnLpEvent;
    static fromJSON(json: Record<string, any>): BurnLpEvent;
    static fromSuiParsedData(content: SuiParsedData): BurnLpEvent;
    static fetch(client: SuiClient, id: string): Promise<BurnLpEvent>;
}
export declare function isLiquidityPool(type: string): boolean;
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
export declare class LiquidityPool implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::LiquidityPool";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::LiquidityPool";
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
    private constructor();
    static reified(): LiquidityPoolReified;
    static get r(): reified.StructClassReified<LiquidityPool, LiquidityPoolFields>;
    static phantom(): PhantomReified<ToTypeStr<LiquidityPool>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::LiquidityPool">;
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
        liquidity_tokens: {
            name: {
                bytes: number[];
            };
        }[];
        token_pools: {
            token_type: {
                name: {
                    bytes: number[];
                };
            };
            config: {
                oracle_id: string;
                liquidity_token_decimal: string;
                spot_config: {
                    min_deposit: string;
                    max_capacity: string;
                    target_weight_bp: string;
                    basic_mint_fee_bp: string;
                    additional_mint_fee_bp: string;
                    basic_burn_fee_bp: string;
                    additional_burn_fee_bp: string;
                    swap_fee_bp: string;
                    swap_fee_protocol_share_bp: string;
                    u64_padding: string[];
                };
                margin_config: {
                    basic_borrow_rate_0: string;
                    basic_borrow_rate_1: string;
                    basic_borrow_rate_2: string;
                    utilization_threshold_bp_0: string;
                    utilization_threshold_bp_1: string;
                    borrow_interval_ts_ms: string;
                    max_order_reserve_ratio_bp: string;
                    u64_padding: string[];
                };
                u64_padding: string[];
            };
            state: {
                liquidity_amount: string;
                value_in_usd: string;
                reserved_amount: string;
                update_ts_ms: string;
                is_active: boolean;
                last_borrow_rate_ts_ms: string;
                cumulative_borrow_rate: string;
                previous_last_borrow_rate_ts_ms: string;
                previous_cumulative_borrow_rate: string;
                u64_padding: string[];
            };
        }[];
        pool_info: {
            lp_token_decimal: string;
            total_share_supply: string;
            tvl_usd: string;
            is_active: boolean;
        };
        u64_padding: string[];
        bcs_padding: number[];
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
        liquidity_tokens: Iterable<{
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        }> & {
            length: number;
        };
        token_pools: Iterable<{
            token_type: {
                name: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
            };
            config: {
                oracle_id: string;
                liquidity_token_decimal: string | number | bigint;
                spot_config: {
                    min_deposit: string | number | bigint;
                    max_capacity: string | number | bigint;
                    target_weight_bp: string | number | bigint;
                    basic_mint_fee_bp: string | number | bigint;
                    additional_mint_fee_bp: string | number | bigint;
                    basic_burn_fee_bp: string | number | bigint;
                    additional_burn_fee_bp: string | number | bigint;
                    swap_fee_bp: string | number | bigint;
                    swap_fee_protocol_share_bp: string | number | bigint;
                    u64_padding: Iterable<string | number | bigint> & {
                        length: number;
                    };
                };
                margin_config: {
                    basic_borrow_rate_0: string | number | bigint;
                    basic_borrow_rate_1: string | number | bigint;
                    basic_borrow_rate_2: string | number | bigint;
                    utilization_threshold_bp_0: string | number | bigint;
                    utilization_threshold_bp_1: string | number | bigint;
                    borrow_interval_ts_ms: string | number | bigint;
                    max_order_reserve_ratio_bp: string | number | bigint;
                    u64_padding: Iterable<string | number | bigint> & {
                        length: number;
                    };
                };
                u64_padding: Iterable<string | number | bigint> & {
                    length: number;
                };
            };
            state: {
                liquidity_amount: string | number | bigint;
                value_in_usd: string | number | bigint;
                reserved_amount: string | number | bigint;
                update_ts_ms: string | number | bigint;
                is_active: boolean;
                last_borrow_rate_ts_ms: string | number | bigint;
                cumulative_borrow_rate: string | number | bigint;
                previous_last_borrow_rate_ts_ms: string | number | bigint;
                previous_cumulative_borrow_rate: string | number | bigint;
                u64_padding: Iterable<string | number | bigint> & {
                    length: number;
                };
            };
        }> & {
            length: number;
        };
        pool_info: {
            lp_token_decimal: string | number | bigint;
            total_share_supply: string | number | bigint;
            tvl_usd: string | number | bigint;
            is_active: boolean;
        };
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
        bcs_padding: Iterable<number> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): LiquidityPool;
    static fromFieldsWithTypes(item: FieldsWithTypes): LiquidityPool;
    static fromBcs(data: Uint8Array): LiquidityPool;
    toJSONField(): {
        id: string;
        index: string;
        lpTokenType: {
            name: string;
        };
        liquidityTokens: {
            name: string;
        }[];
        tokenPools: {
            tokenType: {
                name: string;
            };
            config: {
                oracleId: string;
                liquidityTokenDecimal: string;
                spotConfig: {
                    minDeposit: string;
                    maxCapacity: string;
                    targetWeightBp: string;
                    basicMintFeeBp: string;
                    additionalMintFeeBp: string;
                    basicBurnFeeBp: string;
                    additionalBurnFeeBp: string;
                    swapFeeBp: string;
                    swapFeeProtocolShareBp: string;
                    u64Padding: string[];
                };
                marginConfig: {
                    basicBorrowRate0: string;
                    basicBorrowRate1: string;
                    basicBorrowRate2: string;
                    utilizationThresholdBp0: string;
                    utilizationThresholdBp1: string;
                    borrowIntervalTsMs: string;
                    maxOrderReserveRatioBp: string;
                    u64Padding: string[];
                };
                u64Padding: string[];
            };
            state: {
                liquidityAmount: string;
                valueInUsd: string;
                reservedAmount: string;
                updateTsMs: string;
                isActive: boolean;
                lastBorrowRateTsMs: string;
                cumulativeBorrowRate: string;
                previousLastBorrowRateTsMs: string;
                previousCumulativeBorrowRate: string;
                u64Padding: string[];
            };
        }[];
        poolInfo: {
            lpTokenDecimal: string;
            totalShareSupply: string;
            tvlUsd: string;
            isActive: boolean;
        };
        u64Padding: string[];
        bcsPadding: number[];
    };
    toJSON(): {
        id: string;
        index: string;
        lpTokenType: {
            name: string;
        };
        liquidityTokens: {
            name: string;
        }[];
        tokenPools: {
            tokenType: {
                name: string;
            };
            config: {
                oracleId: string;
                liquidityTokenDecimal: string;
                spotConfig: {
                    minDeposit: string;
                    maxCapacity: string;
                    targetWeightBp: string;
                    basicMintFeeBp: string;
                    additionalMintFeeBp: string;
                    basicBurnFeeBp: string;
                    additionalBurnFeeBp: string;
                    swapFeeBp: string;
                    swapFeeProtocolShareBp: string;
                    u64Padding: string[];
                };
                marginConfig: {
                    basicBorrowRate0: string;
                    basicBorrowRate1: string;
                    basicBorrowRate2: string;
                    utilizationThresholdBp0: string;
                    utilizationThresholdBp1: string;
                    borrowIntervalTsMs: string;
                    maxOrderReserveRatioBp: string;
                    u64Padding: string[];
                };
                u64Padding: string[];
            };
            state: {
                liquidityAmount: string;
                valueInUsd: string;
                reservedAmount: string;
                updateTsMs: string;
                isActive: boolean;
                lastBorrowRateTsMs: string;
                cumulativeBorrowRate: string;
                previousLastBorrowRateTsMs: string;
                previousCumulativeBorrowRate: string;
                u64Padding: string[];
            };
        }[];
        poolInfo: {
            lpTokenDecimal: string;
            totalShareSupply: string;
            tvlUsd: string;
            isActive: boolean;
        };
        u64Padding: string[];
        bcsPadding: number[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): LiquidityPool;
    static fromJSON(json: Record<string, any>): LiquidityPool;
    static fromSuiParsedData(content: SuiParsedData): LiquidityPool;
    static fetch(client: SuiClient, id: string): Promise<LiquidityPool>;
}
export declare function isLiquidityPoolInfo(type: string): boolean;
export interface LiquidityPoolInfoFields {
    lpTokenDecimal: ToField<"u64">;
    totalShareSupply: ToField<"u64">;
    tvlUsd: ToField<"u64">;
    isActive: ToField<"bool">;
}
export type LiquidityPoolInfoReified = Reified<LiquidityPoolInfo, LiquidityPoolInfoFields>;
export declare class LiquidityPoolInfo implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::LiquidityPoolInfo";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::LiquidityPoolInfo";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::LiquidityPoolInfo";
    readonly $typeArgs: [];
    readonly lpTokenDecimal: ToField<"u64">;
    readonly totalShareSupply: ToField<"u64">;
    readonly tvlUsd: ToField<"u64">;
    readonly isActive: ToField<"bool">;
    private constructor();
    static reified(): LiquidityPoolInfoReified;
    static get r(): reified.StructClassReified<LiquidityPoolInfo, LiquidityPoolInfoFields>;
    static phantom(): PhantomReified<ToTypeStr<LiquidityPoolInfo>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::LiquidityPoolInfo">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        lp_token_decimal: string;
        total_share_supply: string;
        tvl_usd: string;
        is_active: boolean;
    }, {
        lp_token_decimal: string | number | bigint;
        total_share_supply: string | number | bigint;
        tvl_usd: string | number | bigint;
        is_active: boolean;
    }>;
    static fromFields(fields: Record<string, any>): LiquidityPoolInfo;
    static fromFieldsWithTypes(item: FieldsWithTypes): LiquidityPoolInfo;
    static fromBcs(data: Uint8Array): LiquidityPoolInfo;
    toJSONField(): {
        lpTokenDecimal: string;
        totalShareSupply: string;
        tvlUsd: string;
        isActive: boolean;
    };
    toJSON(): {
        lpTokenDecimal: string;
        totalShareSupply: string;
        tvlUsd: string;
        isActive: boolean;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): LiquidityPoolInfo;
    static fromJSON(json: Record<string, any>): LiquidityPoolInfo;
    static fromSuiParsedData(content: SuiParsedData): LiquidityPoolInfo;
    static fetch(client: SuiClient, id: string): Promise<LiquidityPoolInfo>;
}
export declare function isMarginConfig(type: string): boolean;
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
export declare class MarginConfig implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::MarginConfig";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::MarginConfig";
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
    private constructor();
    static reified(): MarginConfigReified;
    static get r(): reified.StructClassReified<MarginConfig, MarginConfigFields>;
    static phantom(): PhantomReified<ToTypeStr<MarginConfig>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::MarginConfig">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        basic_borrow_rate_0: string;
        basic_borrow_rate_1: string;
        basic_borrow_rate_2: string;
        utilization_threshold_bp_0: string;
        utilization_threshold_bp_1: string;
        borrow_interval_ts_ms: string;
        max_order_reserve_ratio_bp: string;
        u64_padding: string[];
    }, {
        basic_borrow_rate_0: string | number | bigint;
        basic_borrow_rate_1: string | number | bigint;
        basic_borrow_rate_2: string | number | bigint;
        utilization_threshold_bp_0: string | number | bigint;
        utilization_threshold_bp_1: string | number | bigint;
        borrow_interval_ts_ms: string | number | bigint;
        max_order_reserve_ratio_bp: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): MarginConfig;
    static fromFieldsWithTypes(item: FieldsWithTypes): MarginConfig;
    static fromBcs(data: Uint8Array): MarginConfig;
    toJSONField(): {
        basicBorrowRate0: string;
        basicBorrowRate1: string;
        basicBorrowRate2: string;
        utilizationThresholdBp0: string;
        utilizationThresholdBp1: string;
        borrowIntervalTsMs: string;
        maxOrderReserveRatioBp: string;
        u64Padding: string[];
    };
    toJSON(): {
        basicBorrowRate0: string;
        basicBorrowRate1: string;
        basicBorrowRate2: string;
        utilizationThresholdBp0: string;
        utilizationThresholdBp1: string;
        borrowIntervalTsMs: string;
        maxOrderReserveRatioBp: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): MarginConfig;
    static fromJSON(json: Record<string, any>): MarginConfig;
    static fromSuiParsedData(content: SuiParsedData): MarginConfig;
    static fetch(client: SuiClient, id: string): Promise<MarginConfig>;
}
export declare function isMintLpEvent(type: string): boolean;
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
export declare class MintLpEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::MintLpEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::MintLpEvent";
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
    private constructor();
    static reified(): MintLpEventReified;
    static get r(): reified.StructClassReified<MintLpEvent, MintLpEventFields>;
    static phantom(): PhantomReified<ToTypeStr<MintLpEvent>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::MintLpEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        sender: string;
        index: string;
        liquidity_token_type: {
            name: {
                bytes: number[];
            };
        };
        deposit_amount: string;
        deposit_amount_usd: string;
        mint_fee_usd: string;
        lp_token_type: {
            name: {
                bytes: number[];
            };
        };
        minted_lp_amount: string;
        u64_padding: string[];
    }, {
        sender: string;
        index: string | number | bigint;
        liquidity_token_type: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        deposit_amount: string | number | bigint;
        deposit_amount_usd: string | number | bigint;
        mint_fee_usd: string | number | bigint;
        lp_token_type: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        minted_lp_amount: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): MintLpEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): MintLpEvent;
    static fromBcs(data: Uint8Array): MintLpEvent;
    toJSONField(): {
        sender: string;
        index: string;
        liquidityTokenType: {
            name: string;
        };
        depositAmount: string;
        depositAmountUsd: string;
        mintFeeUsd: string;
        lpTokenType: {
            name: string;
        };
        mintedLpAmount: string;
        u64Padding: string[];
    };
    toJSON(): {
        sender: string;
        index: string;
        liquidityTokenType: {
            name: string;
        };
        depositAmount: string;
        depositAmountUsd: string;
        mintFeeUsd: string;
        lpTokenType: {
            name: string;
        };
        mintedLpAmount: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): MintLpEvent;
    static fromJSON(json: Record<string, any>): MintLpEvent;
    static fromSuiParsedData(content: SuiParsedData): MintLpEvent;
    static fetch(client: SuiClient, id: string): Promise<MintLpEvent>;
}
export declare function isNewLiquidityPoolEvent(type: string): boolean;
export interface NewLiquidityPoolEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    lpTokenType: ToField<TypeName>;
    lpTokenDecimal: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}
export type NewLiquidityPoolEventReified = Reified<NewLiquidityPoolEvent, NewLiquidityPoolEventFields>;
export declare class NewLiquidityPoolEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::NewLiquidityPoolEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::NewLiquidityPoolEvent";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::NewLiquidityPoolEvent";
    readonly $typeArgs: [];
    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly lpTokenType: ToField<TypeName>;
    readonly lpTokenDecimal: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): NewLiquidityPoolEventReified;
    static get r(): reified.StructClassReified<NewLiquidityPoolEvent, NewLiquidityPoolEventFields>;
    static phantom(): PhantomReified<ToTypeStr<NewLiquidityPoolEvent>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::NewLiquidityPoolEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        sender: string;
        index: string;
        lp_token_type: {
            name: {
                bytes: number[];
            };
        };
        lp_token_decimal: string;
        u64_padding: string[];
    }, {
        sender: string;
        index: string | number | bigint;
        lp_token_type: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        lp_token_decimal: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): NewLiquidityPoolEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): NewLiquidityPoolEvent;
    static fromBcs(data: Uint8Array): NewLiquidityPoolEvent;
    toJSONField(): {
        sender: string;
        index: string;
        lpTokenType: {
            name: string;
        };
        lpTokenDecimal: string;
        u64Padding: string[];
    };
    toJSON(): {
        sender: string;
        index: string;
        lpTokenType: {
            name: string;
        };
        lpTokenDecimal: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): NewLiquidityPoolEvent;
    static fromJSON(json: Record<string, any>): NewLiquidityPoolEvent;
    static fromSuiParsedData(content: SuiParsedData): NewLiquidityPoolEvent;
    static fetch(client: SuiClient, id: string): Promise<NewLiquidityPoolEvent>;
}
export declare function isRegistry(type: string): boolean;
export interface RegistryFields {
    id: ToField<UID>;
    numPool: ToField<"u64">;
    liquidityPoolRegistry: ToField<UID>;
}
export type RegistryReified = Reified<Registry, RegistryFields>;
export declare class Registry implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::Registry";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::Registry";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::Registry";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly numPool: ToField<"u64">;
    readonly liquidityPoolRegistry: ToField<UID>;
    private constructor();
    static reified(): RegistryReified;
    static get r(): reified.StructClassReified<Registry, RegistryFields>;
    static phantom(): PhantomReified<ToTypeStr<Registry>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::Registry">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        num_pool: string;
        liquidity_pool_registry: {
            id: {
                bytes: string;
            };
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        num_pool: string | number | bigint;
        liquidity_pool_registry: {
            id: {
                bytes: string;
            };
        };
    }>;
    static fromFields(fields: Record<string, any>): Registry;
    static fromFieldsWithTypes(item: FieldsWithTypes): Registry;
    static fromBcs(data: Uint8Array): Registry;
    toJSONField(): {
        id: string;
        numPool: string;
        liquidityPoolRegistry: string;
    };
    toJSON(): {
        id: string;
        numPool: string;
        liquidityPoolRegistry: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Registry;
    static fromJSON(json: Record<string, any>): Registry;
    static fromSuiParsedData(content: SuiParsedData): Registry;
    static fetch(client: SuiClient, id: string): Promise<Registry>;
}
export declare function isResumePoolEvent(type: string): boolean;
export interface ResumePoolEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}
export type ResumePoolEventReified = Reified<ResumePoolEvent, ResumePoolEventFields>;
export declare class ResumePoolEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::ResumePoolEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::ResumePoolEvent";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::ResumePoolEvent";
    readonly $typeArgs: [];
    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): ResumePoolEventReified;
    static get r(): reified.StructClassReified<ResumePoolEvent, ResumePoolEventFields>;
    static phantom(): PhantomReified<ToTypeStr<ResumePoolEvent>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::ResumePoolEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        sender: string;
        index: string;
        u64_padding: string[];
    }, {
        sender: string;
        index: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): ResumePoolEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): ResumePoolEvent;
    static fromBcs(data: Uint8Array): ResumePoolEvent;
    toJSONField(): {
        sender: string;
        index: string;
        u64Padding: string[];
    };
    toJSON(): {
        sender: string;
        index: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): ResumePoolEvent;
    static fromJSON(json: Record<string, any>): ResumePoolEvent;
    static fromSuiParsedData(content: SuiParsedData): ResumePoolEvent;
    static fetch(client: SuiClient, id: string): Promise<ResumePoolEvent>;
}
export declare function isResumeTokenPoolEvent(type: string): boolean;
export interface ResumeTokenPoolEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    liquidityToken: ToField<TypeName>;
    u64Padding: ToField<Vector<"u64">>;
}
export type ResumeTokenPoolEventReified = Reified<ResumeTokenPoolEvent, ResumeTokenPoolEventFields>;
export declare class ResumeTokenPoolEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::ResumeTokenPoolEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::ResumeTokenPoolEvent";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::ResumeTokenPoolEvent";
    readonly $typeArgs: [];
    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly liquidityToken: ToField<TypeName>;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): ResumeTokenPoolEventReified;
    static get r(): reified.StructClassReified<ResumeTokenPoolEvent, ResumeTokenPoolEventFields>;
    static phantom(): PhantomReified<ToTypeStr<ResumeTokenPoolEvent>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::ResumeTokenPoolEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        sender: string;
        index: string;
        liquidity_token: {
            name: {
                bytes: number[];
            };
        };
        u64_padding: string[];
    }, {
        sender: string;
        index: string | number | bigint;
        liquidity_token: {
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
    static fromFields(fields: Record<string, any>): ResumeTokenPoolEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): ResumeTokenPoolEvent;
    static fromBcs(data: Uint8Array): ResumeTokenPoolEvent;
    toJSONField(): {
        sender: string;
        index: string;
        liquidityToken: {
            name: string;
        };
        u64Padding: string[];
    };
    toJSON(): {
        sender: string;
        index: string;
        liquidityToken: {
            name: string;
        };
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): ResumeTokenPoolEvent;
    static fromJSON(json: Record<string, any>): ResumeTokenPoolEvent;
    static fromSuiParsedData(content: SuiParsedData): ResumeTokenPoolEvent;
    static fetch(client: SuiClient, id: string): Promise<ResumeTokenPoolEvent>;
}
export declare function isSpotConfig(type: string): boolean;
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
export declare class SpotConfig implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::SpotConfig";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::SpotConfig";
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
    private constructor();
    static reified(): SpotConfigReified;
    static get r(): reified.StructClassReified<SpotConfig, SpotConfigFields>;
    static phantom(): PhantomReified<ToTypeStr<SpotConfig>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::SpotConfig">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        min_deposit: string;
        max_capacity: string;
        target_weight_bp: string;
        basic_mint_fee_bp: string;
        additional_mint_fee_bp: string;
        basic_burn_fee_bp: string;
        additional_burn_fee_bp: string;
        swap_fee_bp: string;
        swap_fee_protocol_share_bp: string;
        u64_padding: string[];
    }, {
        min_deposit: string | number | bigint;
        max_capacity: string | number | bigint;
        target_weight_bp: string | number | bigint;
        basic_mint_fee_bp: string | number | bigint;
        additional_mint_fee_bp: string | number | bigint;
        basic_burn_fee_bp: string | number | bigint;
        additional_burn_fee_bp: string | number | bigint;
        swap_fee_bp: string | number | bigint;
        swap_fee_protocol_share_bp: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): SpotConfig;
    static fromFieldsWithTypes(item: FieldsWithTypes): SpotConfig;
    static fromBcs(data: Uint8Array): SpotConfig;
    toJSONField(): {
        minDeposit: string;
        maxCapacity: string;
        targetWeightBp: string;
        basicMintFeeBp: string;
        additionalMintFeeBp: string;
        basicBurnFeeBp: string;
        additionalBurnFeeBp: string;
        swapFeeBp: string;
        swapFeeProtocolShareBp: string;
        u64Padding: string[];
    };
    toJSON(): {
        minDeposit: string;
        maxCapacity: string;
        targetWeightBp: string;
        basicMintFeeBp: string;
        additionalMintFeeBp: string;
        basicBurnFeeBp: string;
        additionalBurnFeeBp: string;
        swapFeeBp: string;
        swapFeeProtocolShareBp: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): SpotConfig;
    static fromJSON(json: Record<string, any>): SpotConfig;
    static fromSuiParsedData(content: SuiParsedData): SpotConfig;
    static fetch(client: SuiClient, id: string): Promise<SpotConfig>;
}
export declare function isSuspendPoolEvent(type: string): boolean;
export interface SuspendPoolEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}
export type SuspendPoolEventReified = Reified<SuspendPoolEvent, SuspendPoolEventFields>;
export declare class SuspendPoolEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::SuspendPoolEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::SuspendPoolEvent";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::SuspendPoolEvent";
    readonly $typeArgs: [];
    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): SuspendPoolEventReified;
    static get r(): reified.StructClassReified<SuspendPoolEvent, SuspendPoolEventFields>;
    static phantom(): PhantomReified<ToTypeStr<SuspendPoolEvent>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::SuspendPoolEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        sender: string;
        index: string;
        u64_padding: string[];
    }, {
        sender: string;
        index: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): SuspendPoolEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): SuspendPoolEvent;
    static fromBcs(data: Uint8Array): SuspendPoolEvent;
    toJSONField(): {
        sender: string;
        index: string;
        u64Padding: string[];
    };
    toJSON(): {
        sender: string;
        index: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): SuspendPoolEvent;
    static fromJSON(json: Record<string, any>): SuspendPoolEvent;
    static fromSuiParsedData(content: SuiParsedData): SuspendPoolEvent;
    static fetch(client: SuiClient, id: string): Promise<SuspendPoolEvent>;
}
export declare function isSuspendTokenPoolEvent(type: string): boolean;
export interface SuspendTokenPoolEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    liquidityToken: ToField<TypeName>;
    u64Padding: ToField<Vector<"u64">>;
}
export type SuspendTokenPoolEventReified = Reified<SuspendTokenPoolEvent, SuspendTokenPoolEventFields>;
export declare class SuspendTokenPoolEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::SuspendTokenPoolEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::SuspendTokenPoolEvent";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::SuspendTokenPoolEvent";
    readonly $typeArgs: [];
    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly liquidityToken: ToField<TypeName>;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): SuspendTokenPoolEventReified;
    static get r(): reified.StructClassReified<SuspendTokenPoolEvent, SuspendTokenPoolEventFields>;
    static phantom(): PhantomReified<ToTypeStr<SuspendTokenPoolEvent>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::SuspendTokenPoolEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        sender: string;
        index: string;
        liquidity_token: {
            name: {
                bytes: number[];
            };
        };
        u64_padding: string[];
    }, {
        sender: string;
        index: string | number | bigint;
        liquidity_token: {
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
    static fromFields(fields: Record<string, any>): SuspendTokenPoolEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): SuspendTokenPoolEvent;
    static fromBcs(data: Uint8Array): SuspendTokenPoolEvent;
    toJSONField(): {
        sender: string;
        index: string;
        liquidityToken: {
            name: string;
        };
        u64Padding: string[];
    };
    toJSON(): {
        sender: string;
        index: string;
        liquidityToken: {
            name: string;
        };
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): SuspendTokenPoolEvent;
    static fromJSON(json: Record<string, any>): SuspendTokenPoolEvent;
    static fromSuiParsedData(content: SuiParsedData): SuspendTokenPoolEvent;
    static fetch(client: SuiClient, id: string): Promise<SuspendTokenPoolEvent>;
}
export declare function isSwapEvent(type: string): boolean;
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
export declare class SwapEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::SwapEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::SwapEvent";
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
    private constructor();
    static reified(): SwapEventReified;
    static get r(): reified.StructClassReified<SwapEvent, SwapEventFields>;
    static phantom(): PhantomReified<ToTypeStr<SwapEvent>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::SwapEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        sender: string;
        index: string;
        from_token_type: {
            name: {
                bytes: number[];
            };
        };
        from_amount: string;
        to_token_type: {
            name: {
                bytes: number[];
            };
        };
        min_to_amount: string;
        actual_to_amount: string;
        fee_amount: string;
        fee_amount_usd: string;
        u64_padding: string[];
    }, {
        sender: string;
        index: string | number | bigint;
        from_token_type: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        from_amount: string | number | bigint;
        to_token_type: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        min_to_amount: string | number | bigint;
        actual_to_amount: string | number | bigint;
        fee_amount: string | number | bigint;
        fee_amount_usd: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): SwapEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): SwapEvent;
    static fromBcs(data: Uint8Array): SwapEvent;
    toJSONField(): {
        sender: string;
        index: string;
        fromTokenType: {
            name: string;
        };
        fromAmount: string;
        toTokenType: {
            name: string;
        };
        minToAmount: string;
        actualToAmount: string;
        feeAmount: string;
        feeAmountUsd: string;
        u64Padding: string[];
    };
    toJSON(): {
        sender: string;
        index: string;
        fromTokenType: {
            name: string;
        };
        fromAmount: string;
        toTokenType: {
            name: string;
        };
        minToAmount: string;
        actualToAmount: string;
        feeAmount: string;
        feeAmountUsd: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): SwapEvent;
    static fromJSON(json: Record<string, any>): SwapEvent;
    static fromSuiParsedData(content: SuiParsedData): SwapEvent;
    static fetch(client: SuiClient, id: string): Promise<SwapEvent>;
}
export declare function isTokenPool(type: string): boolean;
export interface TokenPoolFields {
    tokenType: ToField<TypeName>;
    config: ToField<Config>;
    state: ToField<State>;
}
export type TokenPoolReified = Reified<TokenPool, TokenPoolFields>;
export declare class TokenPool implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::TokenPool";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::TokenPool";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::TokenPool";
    readonly $typeArgs: [];
    readonly tokenType: ToField<TypeName>;
    readonly config: ToField<Config>;
    readonly state: ToField<State>;
    private constructor();
    static reified(): TokenPoolReified;
    static get r(): reified.StructClassReified<TokenPool, TokenPoolFields>;
    static phantom(): PhantomReified<ToTypeStr<TokenPool>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::TokenPool">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        token_type: {
            name: {
                bytes: number[];
            };
        };
        config: {
            oracle_id: string;
            liquidity_token_decimal: string;
            spot_config: {
                min_deposit: string;
                max_capacity: string;
                target_weight_bp: string;
                basic_mint_fee_bp: string;
                additional_mint_fee_bp: string;
                basic_burn_fee_bp: string;
                additional_burn_fee_bp: string;
                swap_fee_bp: string;
                swap_fee_protocol_share_bp: string;
                u64_padding: string[];
            };
            margin_config: {
                basic_borrow_rate_0: string;
                basic_borrow_rate_1: string;
                basic_borrow_rate_2: string;
                utilization_threshold_bp_0: string;
                utilization_threshold_bp_1: string;
                borrow_interval_ts_ms: string;
                max_order_reserve_ratio_bp: string;
                u64_padding: string[];
            };
            u64_padding: string[];
        };
        state: {
            liquidity_amount: string;
            value_in_usd: string;
            reserved_amount: string;
            update_ts_ms: string;
            is_active: boolean;
            last_borrow_rate_ts_ms: string;
            cumulative_borrow_rate: string;
            previous_last_borrow_rate_ts_ms: string;
            previous_cumulative_borrow_rate: string;
            u64_padding: string[];
        };
    }, {
        token_type: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        config: {
            oracle_id: string;
            liquidity_token_decimal: string | number | bigint;
            spot_config: {
                min_deposit: string | number | bigint;
                max_capacity: string | number | bigint;
                target_weight_bp: string | number | bigint;
                basic_mint_fee_bp: string | number | bigint;
                additional_mint_fee_bp: string | number | bigint;
                basic_burn_fee_bp: string | number | bigint;
                additional_burn_fee_bp: string | number | bigint;
                swap_fee_bp: string | number | bigint;
                swap_fee_protocol_share_bp: string | number | bigint;
                u64_padding: Iterable<string | number | bigint> & {
                    length: number;
                };
            };
            margin_config: {
                basic_borrow_rate_0: string | number | bigint;
                basic_borrow_rate_1: string | number | bigint;
                basic_borrow_rate_2: string | number | bigint;
                utilization_threshold_bp_0: string | number | bigint;
                utilization_threshold_bp_1: string | number | bigint;
                borrow_interval_ts_ms: string | number | bigint;
                max_order_reserve_ratio_bp: string | number | bigint;
                u64_padding: Iterable<string | number | bigint> & {
                    length: number;
                };
            };
            u64_padding: Iterable<string | number | bigint> & {
                length: number;
            };
        };
        state: {
            liquidity_amount: string | number | bigint;
            value_in_usd: string | number | bigint;
            reserved_amount: string | number | bigint;
            update_ts_ms: string | number | bigint;
            is_active: boolean;
            last_borrow_rate_ts_ms: string | number | bigint;
            cumulative_borrow_rate: string | number | bigint;
            previous_last_borrow_rate_ts_ms: string | number | bigint;
            previous_cumulative_borrow_rate: string | number | bigint;
            u64_padding: Iterable<string | number | bigint> & {
                length: number;
            };
        };
    }>;
    static fromFields(fields: Record<string, any>): TokenPool;
    static fromFieldsWithTypes(item: FieldsWithTypes): TokenPool;
    static fromBcs(data: Uint8Array): TokenPool;
    toJSONField(): {
        tokenType: {
            name: string;
        };
        config: {
            oracleId: string;
            liquidityTokenDecimal: string;
            spotConfig: {
                minDeposit: string;
                maxCapacity: string;
                targetWeightBp: string;
                basicMintFeeBp: string;
                additionalMintFeeBp: string;
                basicBurnFeeBp: string;
                additionalBurnFeeBp: string;
                swapFeeBp: string;
                swapFeeProtocolShareBp: string;
                u64Padding: string[];
            };
            marginConfig: {
                basicBorrowRate0: string;
                basicBorrowRate1: string;
                basicBorrowRate2: string;
                utilizationThresholdBp0: string;
                utilizationThresholdBp1: string;
                borrowIntervalTsMs: string;
                maxOrderReserveRatioBp: string;
                u64Padding: string[];
            };
            u64Padding: string[];
        };
        state: {
            liquidityAmount: string;
            valueInUsd: string;
            reservedAmount: string;
            updateTsMs: string;
            isActive: boolean;
            lastBorrowRateTsMs: string;
            cumulativeBorrowRate: string;
            previousLastBorrowRateTsMs: string;
            previousCumulativeBorrowRate: string;
            u64Padding: string[];
        };
    };
    toJSON(): {
        tokenType: {
            name: string;
        };
        config: {
            oracleId: string;
            liquidityTokenDecimal: string;
            spotConfig: {
                minDeposit: string;
                maxCapacity: string;
                targetWeightBp: string;
                basicMintFeeBp: string;
                additionalMintFeeBp: string;
                basicBurnFeeBp: string;
                additionalBurnFeeBp: string;
                swapFeeBp: string;
                swapFeeProtocolShareBp: string;
                u64Padding: string[];
            };
            marginConfig: {
                basicBorrowRate0: string;
                basicBorrowRate1: string;
                basicBorrowRate2: string;
                utilizationThresholdBp0: string;
                utilizationThresholdBp1: string;
                borrowIntervalTsMs: string;
                maxOrderReserveRatioBp: string;
                u64Padding: string[];
            };
            u64Padding: string[];
        };
        state: {
            liquidityAmount: string;
            valueInUsd: string;
            reservedAmount: string;
            updateTsMs: string;
            isActive: boolean;
            lastBorrowRateTsMs: string;
            cumulativeBorrowRate: string;
            previousLastBorrowRateTsMs: string;
            previousCumulativeBorrowRate: string;
            u64Padding: string[];
        };
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): TokenPool;
    static fromJSON(json: Record<string, any>): TokenPool;
    static fromSuiParsedData(content: SuiParsedData): TokenPool;
    static fetch(client: SuiClient, id: string): Promise<TokenPool>;
}
export declare function isUpdateBorrowInfoEvent(type: string): boolean;
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
export declare class UpdateBorrowInfoEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::UpdateBorrowInfoEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::UpdateBorrowInfoEvent";
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
    private constructor();
    static reified(): UpdateBorrowInfoEventReified;
    static get r(): reified.StructClassReified<UpdateBorrowInfoEvent, UpdateBorrowInfoEventFields>;
    static phantom(): PhantomReified<ToTypeStr<UpdateBorrowInfoEvent>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::UpdateBorrowInfoEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        index: string;
        liquidity_token_type: {
            name: {
                bytes: number[];
            };
        };
        previous_borrow_ts_ms: string;
        previous_cumulative_borrow_rate: string;
        borrow_interval_ts_ms: string;
        last_borrow_rate_ts_ms: string;
        last_cumulative_borrow_rate: string;
        u64_padding: string[];
    }, {
        index: string | number | bigint;
        liquidity_token_type: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        previous_borrow_ts_ms: string | number | bigint;
        previous_cumulative_borrow_rate: string | number | bigint;
        borrow_interval_ts_ms: string | number | bigint;
        last_borrow_rate_ts_ms: string | number | bigint;
        last_cumulative_borrow_rate: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): UpdateBorrowInfoEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): UpdateBorrowInfoEvent;
    static fromBcs(data: Uint8Array): UpdateBorrowInfoEvent;
    toJSONField(): {
        index: string;
        liquidityTokenType: {
            name: string;
        };
        previousBorrowTsMs: string;
        previousCumulativeBorrowRate: string;
        borrowIntervalTsMs: string;
        lastBorrowRateTsMs: string;
        lastCumulativeBorrowRate: string;
        u64Padding: string[];
    };
    toJSON(): {
        index: string;
        liquidityTokenType: {
            name: string;
        };
        previousBorrowTsMs: string;
        previousCumulativeBorrowRate: string;
        borrowIntervalTsMs: string;
        lastBorrowRateTsMs: string;
        lastCumulativeBorrowRate: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): UpdateBorrowInfoEvent;
    static fromJSON(json: Record<string, any>): UpdateBorrowInfoEvent;
    static fromSuiParsedData(content: SuiParsedData): UpdateBorrowInfoEvent;
    static fetch(client: SuiClient, id: string): Promise<UpdateBorrowInfoEvent>;
}
export declare function isUpdateLiquidityValueEvent(type: string): boolean;
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
export declare class UpdateLiquidityValueEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::UpdateLiquidityValueEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::UpdateLiquidityValueEvent";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::UpdateLiquidityValueEvent";
    readonly $typeArgs: [];
    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly liquidityToken: ToField<TypeName>;
    readonly price: ToField<"u64">;
    readonly valueInUsd: ToField<"u64">;
    readonly lpPoolTvlUsd: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): UpdateLiquidityValueEventReified;
    static get r(): reified.StructClassReified<UpdateLiquidityValueEvent, UpdateLiquidityValueEventFields>;
    static phantom(): PhantomReified<ToTypeStr<UpdateLiquidityValueEvent>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::UpdateLiquidityValueEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        sender: string;
        index: string;
        liquidity_token: {
            name: {
                bytes: number[];
            };
        };
        price: string;
        value_in_usd: string;
        lp_pool_tvl_usd: string;
        u64_padding: string[];
    }, {
        sender: string;
        index: string | number | bigint;
        liquidity_token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        price: string | number | bigint;
        value_in_usd: string | number | bigint;
        lp_pool_tvl_usd: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): UpdateLiquidityValueEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): UpdateLiquidityValueEvent;
    static fromBcs(data: Uint8Array): UpdateLiquidityValueEvent;
    toJSONField(): {
        sender: string;
        index: string;
        liquidityToken: {
            name: string;
        };
        price: string;
        valueInUsd: string;
        lpPoolTvlUsd: string;
        u64Padding: string[];
    };
    toJSON(): {
        sender: string;
        index: string;
        liquidityToken: {
            name: string;
        };
        price: string;
        valueInUsd: string;
        lpPoolTvlUsd: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): UpdateLiquidityValueEvent;
    static fromJSON(json: Record<string, any>): UpdateLiquidityValueEvent;
    static fromSuiParsedData(content: SuiParsedData): UpdateLiquidityValueEvent;
    static fetch(client: SuiClient, id: string): Promise<UpdateLiquidityValueEvent>;
}
export declare function isUpdateMarginConfigEvent(type: string): boolean;
export interface UpdateMarginConfigEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    liquidityTokenType: ToField<TypeName>;
    previousMarginConfig: ToField<MarginConfig>;
    newMarginConfig: ToField<MarginConfig>;
    u64Padding: ToField<Vector<"u64">>;
}
export type UpdateMarginConfigEventReified = Reified<UpdateMarginConfigEvent, UpdateMarginConfigEventFields>;
export declare class UpdateMarginConfigEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::UpdateMarginConfigEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::UpdateMarginConfigEvent";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::UpdateMarginConfigEvent";
    readonly $typeArgs: [];
    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly liquidityTokenType: ToField<TypeName>;
    readonly previousMarginConfig: ToField<MarginConfig>;
    readonly newMarginConfig: ToField<MarginConfig>;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): UpdateMarginConfigEventReified;
    static get r(): reified.StructClassReified<UpdateMarginConfigEvent, UpdateMarginConfigEventFields>;
    static phantom(): PhantomReified<ToTypeStr<UpdateMarginConfigEvent>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::UpdateMarginConfigEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        sender: string;
        index: string;
        liquidity_token_type: {
            name: {
                bytes: number[];
            };
        };
        previous_margin_config: {
            basic_borrow_rate_0: string;
            basic_borrow_rate_1: string;
            basic_borrow_rate_2: string;
            utilization_threshold_bp_0: string;
            utilization_threshold_bp_1: string;
            borrow_interval_ts_ms: string;
            max_order_reserve_ratio_bp: string;
            u64_padding: string[];
        };
        new_margin_config: {
            basic_borrow_rate_0: string;
            basic_borrow_rate_1: string;
            basic_borrow_rate_2: string;
            utilization_threshold_bp_0: string;
            utilization_threshold_bp_1: string;
            borrow_interval_ts_ms: string;
            max_order_reserve_ratio_bp: string;
            u64_padding: string[];
        };
        u64_padding: string[];
    }, {
        sender: string;
        index: string | number | bigint;
        liquidity_token_type: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        previous_margin_config: {
            basic_borrow_rate_0: string | number | bigint;
            basic_borrow_rate_1: string | number | bigint;
            basic_borrow_rate_2: string | number | bigint;
            utilization_threshold_bp_0: string | number | bigint;
            utilization_threshold_bp_1: string | number | bigint;
            borrow_interval_ts_ms: string | number | bigint;
            max_order_reserve_ratio_bp: string | number | bigint;
            u64_padding: Iterable<string | number | bigint> & {
                length: number;
            };
        };
        new_margin_config: {
            basic_borrow_rate_0: string | number | bigint;
            basic_borrow_rate_1: string | number | bigint;
            basic_borrow_rate_2: string | number | bigint;
            utilization_threshold_bp_0: string | number | bigint;
            utilization_threshold_bp_1: string | number | bigint;
            borrow_interval_ts_ms: string | number | bigint;
            max_order_reserve_ratio_bp: string | number | bigint;
            u64_padding: Iterable<string | number | bigint> & {
                length: number;
            };
        };
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): UpdateMarginConfigEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): UpdateMarginConfigEvent;
    static fromBcs(data: Uint8Array): UpdateMarginConfigEvent;
    toJSONField(): {
        sender: string;
        index: string;
        liquidityTokenType: {
            name: string;
        };
        previousMarginConfig: {
            basicBorrowRate0: string;
            basicBorrowRate1: string;
            basicBorrowRate2: string;
            utilizationThresholdBp0: string;
            utilizationThresholdBp1: string;
            borrowIntervalTsMs: string;
            maxOrderReserveRatioBp: string;
            u64Padding: string[];
        };
        newMarginConfig: {
            basicBorrowRate0: string;
            basicBorrowRate1: string;
            basicBorrowRate2: string;
            utilizationThresholdBp0: string;
            utilizationThresholdBp1: string;
            borrowIntervalTsMs: string;
            maxOrderReserveRatioBp: string;
            u64Padding: string[];
        };
        u64Padding: string[];
    };
    toJSON(): {
        sender: string;
        index: string;
        liquidityTokenType: {
            name: string;
        };
        previousMarginConfig: {
            basicBorrowRate0: string;
            basicBorrowRate1: string;
            basicBorrowRate2: string;
            utilizationThresholdBp0: string;
            utilizationThresholdBp1: string;
            borrowIntervalTsMs: string;
            maxOrderReserveRatioBp: string;
            u64Padding: string[];
        };
        newMarginConfig: {
            basicBorrowRate0: string;
            basicBorrowRate1: string;
            basicBorrowRate2: string;
            utilizationThresholdBp0: string;
            utilizationThresholdBp1: string;
            borrowIntervalTsMs: string;
            maxOrderReserveRatioBp: string;
            u64Padding: string[];
        };
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): UpdateMarginConfigEvent;
    static fromJSON(json: Record<string, any>): UpdateMarginConfigEvent;
    static fromSuiParsedData(content: SuiParsedData): UpdateMarginConfigEvent;
    static fetch(client: SuiClient, id: string): Promise<UpdateMarginConfigEvent>;
}
export declare function isUpdateSpotConfigEvent(type: string): boolean;
export interface UpdateSpotConfigEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    liquidityTokenType: ToField<TypeName>;
    previousSpotConfig: ToField<SpotConfig>;
    newSpotConfig: ToField<SpotConfig>;
    u64Padding: ToField<Vector<"u64">>;
}
export type UpdateSpotConfigEventReified = Reified<UpdateSpotConfigEvent, UpdateSpotConfigEventFields>;
export declare class UpdateSpotConfigEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::UpdateSpotConfigEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::UpdateSpotConfigEvent";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::UpdateSpotConfigEvent";
    readonly $typeArgs: [];
    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly liquidityTokenType: ToField<TypeName>;
    readonly previousSpotConfig: ToField<SpotConfig>;
    readonly newSpotConfig: ToField<SpotConfig>;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): UpdateSpotConfigEventReified;
    static get r(): reified.StructClassReified<UpdateSpotConfigEvent, UpdateSpotConfigEventFields>;
    static phantom(): PhantomReified<ToTypeStr<UpdateSpotConfigEvent>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::UpdateSpotConfigEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        sender: string;
        index: string;
        liquidity_token_type: {
            name: {
                bytes: number[];
            };
        };
        previous_spot_config: {
            min_deposit: string;
            max_capacity: string;
            target_weight_bp: string;
            basic_mint_fee_bp: string;
            additional_mint_fee_bp: string;
            basic_burn_fee_bp: string;
            additional_burn_fee_bp: string;
            swap_fee_bp: string;
            swap_fee_protocol_share_bp: string;
            u64_padding: string[];
        };
        new_spot_config: {
            min_deposit: string;
            max_capacity: string;
            target_weight_bp: string;
            basic_mint_fee_bp: string;
            additional_mint_fee_bp: string;
            basic_burn_fee_bp: string;
            additional_burn_fee_bp: string;
            swap_fee_bp: string;
            swap_fee_protocol_share_bp: string;
            u64_padding: string[];
        };
        u64_padding: string[];
    }, {
        sender: string;
        index: string | number | bigint;
        liquidity_token_type: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        previous_spot_config: {
            min_deposit: string | number | bigint;
            max_capacity: string | number | bigint;
            target_weight_bp: string | number | bigint;
            basic_mint_fee_bp: string | number | bigint;
            additional_mint_fee_bp: string | number | bigint;
            basic_burn_fee_bp: string | number | bigint;
            additional_burn_fee_bp: string | number | bigint;
            swap_fee_bp: string | number | bigint;
            swap_fee_protocol_share_bp: string | number | bigint;
            u64_padding: Iterable<string | number | bigint> & {
                length: number;
            };
        };
        new_spot_config: {
            min_deposit: string | number | bigint;
            max_capacity: string | number | bigint;
            target_weight_bp: string | number | bigint;
            basic_mint_fee_bp: string | number | bigint;
            additional_mint_fee_bp: string | number | bigint;
            basic_burn_fee_bp: string | number | bigint;
            additional_burn_fee_bp: string | number | bigint;
            swap_fee_bp: string | number | bigint;
            swap_fee_protocol_share_bp: string | number | bigint;
            u64_padding: Iterable<string | number | bigint> & {
                length: number;
            };
        };
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): UpdateSpotConfigEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): UpdateSpotConfigEvent;
    static fromBcs(data: Uint8Array): UpdateSpotConfigEvent;
    toJSONField(): {
        sender: string;
        index: string;
        liquidityTokenType: {
            name: string;
        };
        previousSpotConfig: {
            minDeposit: string;
            maxCapacity: string;
            targetWeightBp: string;
            basicMintFeeBp: string;
            additionalMintFeeBp: string;
            basicBurnFeeBp: string;
            additionalBurnFeeBp: string;
            swapFeeBp: string;
            swapFeeProtocolShareBp: string;
            u64Padding: string[];
        };
        newSpotConfig: {
            minDeposit: string;
            maxCapacity: string;
            targetWeightBp: string;
            basicMintFeeBp: string;
            additionalMintFeeBp: string;
            basicBurnFeeBp: string;
            additionalBurnFeeBp: string;
            swapFeeBp: string;
            swapFeeProtocolShareBp: string;
            u64Padding: string[];
        };
        u64Padding: string[];
    };
    toJSON(): {
        sender: string;
        index: string;
        liquidityTokenType: {
            name: string;
        };
        previousSpotConfig: {
            minDeposit: string;
            maxCapacity: string;
            targetWeightBp: string;
            basicMintFeeBp: string;
            additionalMintFeeBp: string;
            basicBurnFeeBp: string;
            additionalBurnFeeBp: string;
            swapFeeBp: string;
            swapFeeProtocolShareBp: string;
            u64Padding: string[];
        };
        newSpotConfig: {
            minDeposit: string;
            maxCapacity: string;
            targetWeightBp: string;
            basicMintFeeBp: string;
            additionalMintFeeBp: string;
            basicBurnFeeBp: string;
            additionalBurnFeeBp: string;
            swapFeeBp: string;
            swapFeeProtocolShareBp: string;
            u64Padding: string[];
        };
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): UpdateSpotConfigEvent;
    static fromJSON(json: Record<string, any>): UpdateSpotConfigEvent;
    static fromSuiParsedData(content: SuiParsedData): UpdateSpotConfigEvent;
    static fetch(client: SuiClient, id: string): Promise<UpdateSpotConfigEvent>;
}
