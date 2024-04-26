import { PUBLISHED_AT } from "..";
import { ObjectArg, obj, pure, vector } from "../../_framework/util";
import { TransactionArgument, TransactionBlock } from "@mysten/sui.js/transactions";

export function init(txb: TransactionBlock) {
    return txb.moveCall({ target: `${PUBLISHED_AT}::trading::init`, arguments: [] });
}

export interface ReduceOptionCollateralPositionSizeArgs {
    version: ObjectArg;
    registry: ObjectArg;
    poolRegistry: ObjectArg;
    dovRegistry: ObjectArg;
    typusOracle: ObjectArg;
    marketIndex: bigint | TransactionArgument;
    poolIndex: bigint | TransactionArgument;
    pythState: ObjectArg;
    oracleCToken: ObjectArg;
    oracleTradingSymbol: ObjectArg;
    clock: ObjectArg;
    positionId: bigint | TransactionArgument;
    orderSize: bigint | TransactionArgument | TransactionArgument | null;
}

export function reduceOptionCollateralPositionSize(
    txb: TransactionBlock,
    typeArgs: [string, string, string],
    args: ReduceOptionCollateralPositionSizeArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::reduce_option_collateral_position_size`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.version),
            obj(txb, args.registry),
            obj(txb, args.poolRegistry),
            obj(txb, args.dovRegistry),
            obj(txb, args.typusOracle),
            pure(txb, args.marketIndex, `u64`),
            pure(txb, args.poolIndex, `u64`),
            obj(txb, args.pythState),
            obj(txb, args.oracleCToken),
            obj(txb, args.oracleTradingSymbol),
            obj(txb, args.clock),
            pure(txb, args.positionId, `u64`),
            pure(txb, args.orderSize, `0x1::option::Option<u64>`),
        ],
    });
}

export interface AddTradingSymbolArgs {
    version: ObjectArg;
    registry: ObjectArg;
    marketIndex: bigint | TransactionArgument;
    sizeDecimal: bigint | TransactionArgument;
    oracle: ObjectArg;
    maxLeveragePct: bigint | TransactionArgument;
    minSize: bigint | TransactionArgument;
    lotSize: bigint | TransactionArgument;
    tradingFeeRate: bigint | TransactionArgument;
    tradingFeeDecimal: bigint | TransactionArgument;
}

export function addTradingSymbol(txb: TransactionBlock, typeArg: string, args: AddTradingSymbolArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::add_trading_symbol`,
        typeArguments: [typeArg],
        arguments: [
            obj(txb, args.version),
            obj(txb, args.registry),
            pure(txb, args.marketIndex, `u64`),
            pure(txb, args.sizeDecimal, `u64`),
            obj(txb, args.oracle),
            pure(txb, args.maxLeveragePct, `u64`),
            pure(txb, args.minSize, `u64`),
            pure(txb, args.lotSize, `u64`),
            pure(txb, args.tradingFeeRate, `u64`),
            pure(txb, args.tradingFeeDecimal, `u64`),
        ],
    });
}

export interface CancelTradingOrderArgs {
    version: ObjectArg;
    registry: ObjectArg;
    marketIndex: bigint | TransactionArgument;
    orderId: bigint | TransactionArgument;
    triggerPrice: bigint | TransactionArgument | TransactionArgument | null;
}

export function cancelTradingOrder(txb: TransactionBlock, typeArgs: [string, string], args: CancelTradingOrderArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::cancel_trading_order`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.version),
            obj(txb, args.registry),
            pure(txb, args.marketIndex, `u64`),
            pure(txb, args.orderId, `u64`),
            pure(txb, args.triggerPrice, `0x1::option::Option<u64>`),
        ],
    });
}

export interface CancelTradingOrderWithBidReceiptsArgs {
    version: ObjectArg;
    registry: ObjectArg;
    marketIndex: bigint | TransactionArgument;
    orderId: bigint | TransactionArgument;
    triggerPrice: bigint | TransactionArgument | TransactionArgument | null;
}

export function cancelTradingOrderWithBidReceipts(
    txb: TransactionBlock,
    typeArgs: [string, string],
    args: CancelTradingOrderWithBidReceiptsArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::cancel_trading_order_with_bid_receipts`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.version),
            obj(txb, args.registry),
            pure(txb, args.marketIndex, `u64`),
            pure(txb, args.orderId, `u64`),
            pure(txb, args.triggerPrice, `0x1::option::Option<u64>`),
        ],
    });
}

export interface CreateTradingOrderArgs {
    version: ObjectArg;
    registry: ObjectArg;
    poolRegistry: ObjectArg;
    dovRegistry: ObjectArg;
    typusOracle: ObjectArg;
    marketIndex: bigint | TransactionArgument;
    poolIndex: bigint | TransactionArgument;
    invitedFrom: string | TransactionArgument | TransactionArgument | null;
    feeRebateBp: bigint | TransactionArgument | TransactionArgument | null;
    feeReductionBp: bigint | TransactionArgument | TransactionArgument | null;
    pythState: ObjectArg;
    oracleCToken: ObjectArg;
    oracleTradingSymbol: ObjectArg;
    clock: ObjectArg;
    linkedPositionId: bigint | TransactionArgument | TransactionArgument | null;
    collateralCoins: Array<ObjectArg> | TransactionArgument;
    collateralAmount: bigint | TransactionArgument;
    leveragePct: bigint | TransactionArgument;
    reduceOnly: boolean | TransactionArgument;
    isLong: boolean | TransactionArgument;
    isStopOrder: boolean | TransactionArgument;
    size: bigint | TransactionArgument;
    triggerPrice: bigint | TransactionArgument;
}

export function createTradingOrder(txb: TransactionBlock, typeArgs: [string, string, string], args: CreateTradingOrderArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::create_trading_order`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.version),
            obj(txb, args.registry),
            obj(txb, args.poolRegistry),
            obj(txb, args.dovRegistry),
            obj(txb, args.typusOracle),
            pure(txb, args.marketIndex, `u64`),
            pure(txb, args.poolIndex, `u64`),
            pure(txb, args.invitedFrom, `0x1::option::Option<address>`),
            pure(txb, args.feeRebateBp, `0x1::option::Option<u64>`),
            pure(txb, args.feeReductionBp, `0x1::option::Option<u64>`),
            obj(txb, args.pythState),
            obj(txb, args.oracleCToken),
            obj(txb, args.oracleTradingSymbol),
            obj(txb, args.clock),
            pure(txb, args.linkedPositionId, `0x1::option::Option<u64>`),
            vector(txb, `0x2::coin::Coin<${typeArgs[0]}>`, args.collateralCoins),
            pure(txb, args.collateralAmount, `u64`),
            pure(txb, args.leveragePct, `u64`),
            pure(txb, args.reduceOnly, `bool`),
            pure(txb, args.isLong, `bool`),
            pure(txb, args.isStopOrder, `bool`),
            pure(txb, args.size, `u64`),
            pure(txb, args.triggerPrice, `u64`),
        ],
    });
}

export interface CreateTradingOrderWithBidReceiptsArgs {
    version: ObjectArg;
    registry: ObjectArg;
    poolRegistry: ObjectArg;
    dovRegistry: ObjectArg;
    typusOracle: ObjectArg;
    marketIndex: bigint | TransactionArgument;
    poolIndex: bigint | TransactionArgument;
    invitedFrom: string | TransactionArgument | TransactionArgument | null;
    feeRebateBp: bigint | TransactionArgument | TransactionArgument | null;
    feeReductionBp: bigint | TransactionArgument | TransactionArgument | null;
    pythState: ObjectArg;
    oracleCToken: ObjectArg;
    oracleTradingSymbol: ObjectArg;
    clock: ObjectArg;
    collateralBidReceipts: Array<ObjectArg> | TransactionArgument;
    dovIndex: bigint | TransactionArgument;
    reduceOnly: boolean | TransactionArgument;
    isLong: boolean | TransactionArgument;
    isStopOrder: boolean | TransactionArgument;
    size: bigint | TransactionArgument;
    triggerPrice: bigint | TransactionArgument;
}

export function createTradingOrderWithBidReceipts(
    txb: TransactionBlock,
    typeArgs: [string, string, string],
    args: CreateTradingOrderWithBidReceiptsArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::create_trading_order_with_bid_receipts`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.version),
            obj(txb, args.registry),
            obj(txb, args.poolRegistry),
            obj(txb, args.dovRegistry),
            obj(txb, args.typusOracle),
            pure(txb, args.marketIndex, `u64`),
            pure(txb, args.poolIndex, `u64`),
            pure(txb, args.invitedFrom, `0x1::option::Option<address>`),
            pure(txb, args.feeRebateBp, `0x1::option::Option<u64>`),
            pure(txb, args.feeReductionBp, `0x1::option::Option<u64>`),
            obj(txb, args.pythState),
            obj(txb, args.oracleCToken),
            obj(txb, args.oracleTradingSymbol),
            obj(txb, args.clock),
            vector(
                txb,
                `0xa2de2f04907b77ef03800a8969bb4f88c821737ee133aba4bc0485b267ad2118::vault::TypusBidReceipt`,
                args.collateralBidReceipts
            ),
            pure(txb, args.dovIndex, `u64`),
            pure(txb, args.reduceOnly, `bool`),
            pure(txb, args.isLong, `bool`),
            pure(txb, args.isStopOrder, `bool`),
            pure(txb, args.size, `u64`),
            pure(txb, args.triggerPrice, `u64`),
        ],
    });
}

export interface ExecuteOrder_Args {
    version: ObjectArg;
    referrals: ObjectArg;
    dovRegistry: ObjectArg;
    typusOracle: ObjectArg;
    symbolMarket: ObjectArg;
    liquidityPool: ObjectArg;
    order: ObjectArg;
    collateralOraclePrice: bigint | TransactionArgument;
    collateralOraclePriceDecimal: bigint | TransactionArgument;
    tradingPairOraclePrice: bigint | TransactionArgument;
    tradingPairOraclePriceDecimal: bigint | TransactionArgument;
    clock: ObjectArg;
}

export function executeOrder_(txb: TransactionBlock, typeArgs: [string, string], args: ExecuteOrder_Args) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::execute_order_`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.version),
            obj(txb, args.referrals),
            obj(txb, args.dovRegistry),
            obj(txb, args.typusOracle),
            obj(txb, args.symbolMarket),
            obj(txb, args.liquidityPool),
            obj(txb, args.order),
            pure(txb, args.collateralOraclePrice, `u64`),
            pure(txb, args.collateralOraclePriceDecimal, `u64`),
            pure(txb, args.tradingPairOraclePrice, `u64`),
            pure(txb, args.tradingPairOraclePriceDecimal, `u64`),
            obj(txb, args.clock),
        ],
    });
}

export interface GetMarketArgs {
    id: ObjectArg;
    index: bigint | TransactionArgument;
}

export function getMarket(txb: TransactionBlock, args: GetMarketArgs) {
    return txb.moveCall({ target: `${PUBLISHED_AT}::trading::get_market`, arguments: [obj(txb, args.id), pure(txb, args.index, `u64`)] });
}

export interface GetMutMarketArgs {
    id: ObjectArg;
    index: bigint | TransactionArgument;
}

export function getMutMarket(txb: TransactionBlock, args: GetMutMarketArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::get_mut_market`,
        arguments: [obj(txb, args.id), pure(txb, args.index, `u64`)],
    });
}

export interface GetMutOrdersArgs {
    symbolMarket: ObjectArg;
    orderTypeTag: number | TransactionArgument;
}

export function getMutOrders(txb: TransactionBlock, args: GetMutOrdersArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::get_mut_orders`,
        arguments: [obj(txb, args.symbolMarket), pure(txb, args.orderTypeTag, `u8`)],
    });
}

export interface LiquidateArgs {
    version: ObjectArg;
    registry: ObjectArg;
    poolRegistry: ObjectArg;
    dovRegistry: ObjectArg;
    typusOracle: ObjectArg;
    marketIndex: bigint | TransactionArgument;
    poolIndex: bigint | TransactionArgument;
    pythState: ObjectArg;
    oracleCToken: ObjectArg;
    oracleTradingSymbol: ObjectArg;
    clock: ObjectArg;
    positionId: bigint | TransactionArgument;
}

export function liquidate(txb: TransactionBlock, typeArgs: [string, string, string], args: LiquidateArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::liquidate`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.version),
            obj(txb, args.registry),
            obj(txb, args.poolRegistry),
            obj(txb, args.dovRegistry),
            obj(txb, args.typusOracle),
            pure(txb, args.marketIndex, `u64`),
            pure(txb, args.poolIndex, `u64`),
            obj(txb, args.pythState),
            obj(txb, args.oracleCToken),
            obj(txb, args.oracleTradingSymbol),
            obj(txb, args.clock),
            pure(txb, args.positionId, `u64`),
        ],
    });
}

export interface MatchTradingOrderArgs {
    version: ObjectArg;
    registry: ObjectArg;
    poolRegistry: ObjectArg;
    dovRegistry: ObjectArg;
    typusOracle: ObjectArg;
    pythState: ObjectArg;
    oracleCToken: ObjectArg;
    oracleTradingSymbol: ObjectArg;
    marketIndex: bigint | TransactionArgument;
    poolIndex: bigint | TransactionArgument;
    clock: ObjectArg;
    maxOperationCount: bigint | TransactionArgument;
}

export function matchTradingOrder(txb: TransactionBlock, typeArgs: [string, string, string], args: MatchTradingOrderArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::match_trading_order`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.version),
            obj(txb, args.registry),
            obj(txb, args.poolRegistry),
            obj(txb, args.dovRegistry),
            obj(txb, args.typusOracle),
            obj(txb, args.pythState),
            obj(txb, args.oracleCToken),
            obj(txb, args.oracleTradingSymbol),
            pure(txb, args.marketIndex, `u64`),
            pure(txb, args.poolIndex, `u64`),
            obj(txb, args.clock),
            pure(txb, args.maxOperationCount, `u64`),
        ],
    });
}

export interface NewMarketsArgs {
    version: ObjectArg;
    registry: ObjectArg;
}

export function newMarkets(txb: TransactionBlock, typeArgs: [string, string], args: NewMarketsArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::new_markets`,
        typeArguments: typeArgs,
        arguments: [obj(txb, args.version), obj(txb, args.registry)],
    });
}

export interface PutReferralRebateArgs {
    referrals: ObjectArg;
    balance: ObjectArg;
    toUser: string | TransactionArgument;
}

export function putReferralRebate(txb: TransactionBlock, typeArg: string, args: PutReferralRebateArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::put_referral_rebate`,
        typeArguments: [typeArg],
        arguments: [obj(txb, args.referrals), obj(txb, args.balance), pure(txb, args.toUser, `address`)],
    });
}

export interface ResumeMarketArgs {
    version: ObjectArg;
    registry: ObjectArg;
    marketIndex: bigint | TransactionArgument;
}

export function resumeMarket(txb: TransactionBlock, args: ResumeMarketArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::resume_market`,
        arguments: [obj(txb, args.version), obj(txb, args.registry), pure(txb, args.marketIndex, `u64`)],
    });
}

export interface ResumeTradingSymbolArgs {
    version: ObjectArg;
    registry: ObjectArg;
    marketIndex: bigint | TransactionArgument;
}

export function resumeTradingSymbol(txb: TransactionBlock, typeArg: string, args: ResumeTradingSymbolArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::resume_trading_symbol`,
        typeArguments: [typeArg],
        arguments: [obj(txb, args.version), obj(txb, args.registry), pure(txb, args.marketIndex, `u64`)],
    });
}

export interface SuspendMarketArgs {
    version: ObjectArg;
    registry: ObjectArg;
    marketIndex: bigint | TransactionArgument;
}

export function suspendMarket(txb: TransactionBlock, args: SuspendMarketArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::suspend_market`,
        arguments: [obj(txb, args.version), obj(txb, args.registry), pure(txb, args.marketIndex, `u64`)],
    });
}

export interface SuspendTradingSymbolArgs {
    version: ObjectArg;
    registry: ObjectArg;
    marketIndex: bigint | TransactionArgument;
}

export function suspendTradingSymbol(txb: TransactionBlock, typeArg: string, args: SuspendTradingSymbolArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::suspend_trading_symbol`,
        typeArguments: [typeArg],
        arguments: [obj(txb, args.version), obj(txb, args.registry), pure(txb, args.marketIndex, `u64`)],
    });
}

export interface TakeOrderByOrderIdArgs {
    symbolMarket: ObjectArg;
    orderId: bigint | TransactionArgument;
    user: string | TransactionArgument;
}

export function takeOrderByOrderId(txb: TransactionBlock, args: TakeOrderByOrderIdArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::take_order_by_order_id`,
        arguments: [obj(txb, args.symbolMarket), pure(txb, args.orderId, `u64`), pure(txb, args.user, `address`)],
    });
}

export interface TakeOrderByOrderIdAndPriceArgs {
    symbolMarket: ObjectArg;
    triggerPrice: bigint | TransactionArgument;
    orderId: bigint | TransactionArgument;
    user: string | TransactionArgument;
}

export function takeOrderByOrderIdAndPrice(txb: TransactionBlock, args: TakeOrderByOrderIdAndPriceArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::take_order_by_order_id_and_price`,
        arguments: [
            obj(txb, args.symbolMarket),
            pure(txb, args.triggerPrice, `u64`),
            pure(txb, args.orderId, `u64`),
            pure(txb, args.user, `address`),
        ],
    });
}

export interface TakePositionByPositionIdArgs {
    userPositions: ObjectArg;
    positionId: bigint | TransactionArgument;
    user: string | TransactionArgument;
}

export function takePositionByPositionId(txb: TransactionBlock, args: TakePositionByPositionIdArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::take_position_by_position_id`,
        arguments: [obj(txb, args.userPositions), pure(txb, args.positionId, `u64`), pure(txb, args.user, `address`)],
    });
}

export interface UpdateMarketConfigArgs {
    version: ObjectArg;
    registry: ObjectArg;
    marketIndex: bigint | TransactionArgument;
    minSize: bigint | TransactionArgument | TransactionArgument | null;
    lotSize: bigint | TransactionArgument | TransactionArgument | null;
    tradingFeeRate: bigint | TransactionArgument | TransactionArgument | null;
    tradingFeeDecimal: bigint | TransactionArgument | TransactionArgument | null;
}

export function updateMarketConfig(txb: TransactionBlock, typeArg: string, args: UpdateMarketConfigArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::update_market_config`,
        typeArguments: [typeArg],
        arguments: [
            obj(txb, args.version),
            obj(txb, args.registry),
            pure(txb, args.marketIndex, `u64`),
            pure(txb, args.minSize, `0x1::option::Option<u64>`),
            pure(txb, args.lotSize, `0x1::option::Option<u64>`),
            pure(txb, args.tradingFeeRate, `0x1::option::Option<u64>`),
            pure(txb, args.tradingFeeDecimal, `0x1::option::Option<u64>`),
        ],
    });
}

export interface UpdateReferralsArgs {
    referrals: ObjectArg;
    invitedFrom: string | TransactionArgument | TransactionArgument | null;
    feeRebateBp: bigint | TransactionArgument | TransactionArgument | null;
    feeReductionBp: bigint | TransactionArgument | TransactionArgument | null;
}

export function updateReferrals(txb: TransactionBlock, args: UpdateReferralsArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::update_referrals`,
        arguments: [
            obj(txb, args.referrals),
            pure(txb, args.invitedFrom, `0x1::option::Option<address>`),
            pure(txb, args.feeRebateBp, `0x1::option::Option<u64>`),
            pure(txb, args.feeReductionBp, `0x1::option::Option<u64>`),
        ],
    });
}

export interface WithdrawReferralRebateArgs {
    version: ObjectArg;
    registry: ObjectArg;
}

export function withdrawReferralRebate(txb: TransactionBlock, typeArg: string, args: WithdrawReferralRebateArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::withdraw_referral_rebate`,
        typeArguments: [typeArg],
        arguments: [obj(txb, args.version), obj(txb, args.registry)],
    });
}
