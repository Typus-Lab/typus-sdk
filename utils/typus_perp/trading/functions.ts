import { PUBLISHED_AT } from "..";
import { ObjectArg, obj, pure } from "../../_framework/util";
import { TransactionArgument, TransactionBlock } from "@mysten/sui.js/transactions";

export function init(txb: TransactionBlock) {
    return txb.moveCall({ target: `${PUBLISHED_AT}::trading::init`, arguments: [] });
}

export interface IncreaseCollateralArgs {
    version: ObjectArg;
    registry: ObjectArg;
    poolRegistry: ObjectArg;
    marketIndex: bigint | TransactionArgument;
    poolIndex: bigint | TransactionArgument;
    pythState: ObjectArg;
    oracleCToken: ObjectArg;
    oracleTradingSymbol: ObjectArg;
    clock: ObjectArg;
    positionId: bigint | TransactionArgument;
    collateral: ObjectArg;
}

export function increaseCollateral(txb: TransactionBlock, typeArgs: [string, string], args: IncreaseCollateralArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::increase_collateral`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.version),
            obj(txb, args.registry),
            obj(txb, args.poolRegistry),
            pure(txb, args.marketIndex, `u64`),
            pure(txb, args.poolIndex, `u64`),
            obj(txb, args.pythState),
            obj(txb, args.oracleCToken),
            obj(txb, args.oracleTradingSymbol),
            obj(txb, args.clock),
            pure(txb, args.positionId, `u64`),
            obj(txb, args.collateral),
        ],
    });
}

export interface ReleaseCollateralArgs {
    version: ObjectArg;
    registry: ObjectArg;
    poolRegistry: ObjectArg;
    marketIndex: bigint | TransactionArgument;
    poolIndex: bigint | TransactionArgument;
    pythState: ObjectArg;
    oracleCToken: ObjectArg;
    oracleTradingSymbol: ObjectArg;
    clock: ObjectArg;
    positionId: bigint | TransactionArgument;
    releaseAmount: bigint | TransactionArgument;
}

export function releaseCollateral(txb: TransactionBlock, typeArgs: [string, string], args: ReleaseCollateralArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::release_collateral`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.version),
            obj(txb, args.registry),
            obj(txb, args.poolRegistry),
            pure(txb, args.marketIndex, `u64`),
            pure(txb, args.poolIndex, `u64`),
            obj(txb, args.pythState),
            obj(txb, args.oracleCToken),
            obj(txb, args.oracleTradingSymbol),
            obj(txb, args.clock),
            pure(txb, args.positionId, `u64`),
            pure(txb, args.releaseAmount, `u64`),
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
    basicFundingRate: bigint | TransactionArgument;
    fundingIntervalTsMs: bigint | TransactionArgument;
    clock: ObjectArg;
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
            pure(txb, args.basicFundingRate, `u64`),
            pure(txb, args.fundingIntervalTsMs, `u64`),
            obj(txb, args.clock),
        ],
    });
}

export interface AdjustMarketInfoUserOrderSizeArgs {
    symbolMarket: ObjectArg;
    long: boolean | TransactionArgument;
    filledOrCancelled: boolean | TransactionArgument;
    size: bigint | TransactionArgument;
}

export function adjustMarketInfoUserOrderSize(txb: TransactionBlock, args: AdjustMarketInfoUserOrderSizeArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::adjust_market_info_user_order_size`,
        arguments: [
            obj(txb, args.symbolMarket),
            pure(txb, args.long, `bool`),
            pure(txb, args.filledOrCancelled, `bool`),
            pure(txb, args.size, `u64`),
        ],
    });
}

export interface BorrowMutPositionByPositionIdArgs {
    userPositions: ObjectArg;
    positionId: bigint | TransactionArgument;
}

export function borrowMutPositionByPositionId(txb: TransactionBlock, args: BorrowMutPositionByPositionIdArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::borrow_mut_position_by_position_id`,
        arguments: [obj(txb, args.userPositions), pure(txb, args.positionId, `u64`)],
    });
}

export interface BorrowPositionByPositionIdArgs {
    userPositions: ObjectArg;
    positionId: bigint | TransactionArgument;
}

export function borrowPositionByPositionId(txb: TransactionBlock, args: BorrowPositionByPositionIdArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::borrow_position_by_position_id`,
        arguments: [obj(txb, args.userPositions), pure(txb, args.positionId, `u64`)],
    });
}

export interface CancelLinkedOrdersArgs {
    version: ObjectArg;
    registry: ObjectArg;
    marketIndex: bigint | TransactionArgument;
    linkedOrderIds: Array<bigint | TransactionArgument> | TransactionArgument;
    linkedOrderPrices: Array<bigint | TransactionArgument> | TransactionArgument;
    user: string | TransactionArgument;
}

export function cancelLinkedOrders(txb: TransactionBlock, typeArgs: [string, string], args: CancelLinkedOrdersArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::cancel_linked_orders`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.version),
            obj(txb, args.registry),
            pure(txb, args.marketIndex, `u64`),
            pure(txb, args.linkedOrderIds, `vector<u64>`),
            pure(txb, args.linkedOrderPrices, `vector<u64>`),
            pure(txb, args.user, `address`),
        ],
    });
}

export interface CancelTradingOrderArgs {
    version: ObjectArg;
    registry: ObjectArg;
    marketIndex: bigint | TransactionArgument;
    orderId: bigint | TransactionArgument;
    triggerPrice: bigint | TransactionArgument;
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
            pure(txb, args.triggerPrice, `u64`),
        ],
    });
}

export interface CheckCollateralEnoughArgs {
    symbolMarket: ObjectArg;
    order: ObjectArg;
    collateralOraclePrice: bigint | TransactionArgument;
    collateralOraclePriceDecimal: bigint | TransactionArgument;
    tradingPairOraclePrice: bigint | TransactionArgument;
    tradingPairOraclePriceDecimal: bigint | TransactionArgument;
    tradingFeeRate: bigint | TransactionArgument;
    tradingFeeDecimal: bigint | TransactionArgument;
}

export function checkCollateralEnough(txb: TransactionBlock, typeArg: string, args: CheckCollateralEnoughArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::check_collateral_enough`,
        typeArguments: [typeArg],
        arguments: [
            obj(txb, args.symbolMarket),
            obj(txb, args.order),
            pure(txb, args.collateralOraclePrice, `u64`),
            pure(txb, args.collateralOraclePriceDecimal, `u64`),
            pure(txb, args.tradingPairOraclePrice, `u64`),
            pure(txb, args.tradingPairOraclePriceDecimal, `u64`),
            pure(txb, args.tradingFeeRate, `u64`),
            pure(txb, args.tradingFeeDecimal, `u64`),
        ],
    });
}

export interface CheckOptionCollateralEnoughArgs {
    dovRegistry: ObjectArg;
    typusOracle: ObjectArg;
    symbolMarket: ObjectArg;
    order: ObjectArg;
    collateralOraclePrice: bigint | TransactionArgument;
    collateralOraclePriceDecimal: bigint | TransactionArgument;
    tradingPairOraclePrice: bigint | TransactionArgument;
    tradingPairOraclePriceDecimal: bigint | TransactionArgument;
    tradingFeeRate: bigint | TransactionArgument;
    tradingFeeDecimal: bigint | TransactionArgument;
    clock: ObjectArg;
}

export function checkOptionCollateralEnough(txb: TransactionBlock, typeArg: string, args: CheckOptionCollateralEnoughArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::check_option_collateral_enough`,
        typeArguments: [typeArg],
        arguments: [
            obj(txb, args.dovRegistry),
            obj(txb, args.typusOracle),
            obj(txb, args.symbolMarket),
            obj(txb, args.order),
            pure(txb, args.collateralOraclePrice, `u64`),
            pure(txb, args.collateralOraclePriceDecimal, `u64`),
            pure(txb, args.tradingPairOraclePrice, `u64`),
            pure(txb, args.tradingPairOraclePriceDecimal, `u64`),
            pure(txb, args.tradingFeeRate, `u64`),
            pure(txb, args.tradingFeeDecimal, `u64`),
            obj(txb, args.clock),
        ],
    });
}

export interface CheckReserveEnoughArgs {
    symbolMarket: ObjectArg;
    liquidityPool: ObjectArg;
    order: ObjectArg;
    collateralOraclePrice: bigint | TransactionArgument;
    collateralOraclePriceDecimal: bigint | TransactionArgument;
    tradingPairOraclePrice: bigint | TransactionArgument;
    tradingPairOraclePriceDecimal: bigint | TransactionArgument;
}

export function checkReserveEnough(txb: TransactionBlock, typeArg: string, args: CheckReserveEnoughArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::check_reserve_enough`,
        typeArguments: [typeArg],
        arguments: [
            obj(txb, args.symbolMarket),
            obj(txb, args.liquidityPool),
            obj(txb, args.order),
            pure(txb, args.collateralOraclePrice, `u64`),
            pure(txb, args.collateralOraclePriceDecimal, `u64`),
            pure(txb, args.tradingPairOraclePrice, `u64`),
            pure(txb, args.tradingPairOraclePriceDecimal, `u64`),
        ],
    });
}

export interface CreateTradingOrderArgs {
    version: ObjectArg;
    registry: ObjectArg;
    poolRegistry: ObjectArg;
    marketIndex: bigint | TransactionArgument;
    poolIndex: bigint | TransactionArgument;
    pythState: ObjectArg;
    oracleCToken: ObjectArg;
    oracleTradingSymbol: ObjectArg;
    clock: ObjectArg;
    typusEcosystemVersion: ObjectArg;
    typusUserRegistry: ObjectArg;
    typusLeaderboardRegistry: ObjectArg;
    linkedPositionId: bigint | TransactionArgument | TransactionArgument | null;
    collateral: ObjectArg;
    reduceOnly: boolean | TransactionArgument;
    isLong: boolean | TransactionArgument;
    isStopOrder: boolean | TransactionArgument;
    size: bigint | TransactionArgument;
    triggerPrice: bigint | TransactionArgument;
}

export function createTradingOrder(txb: TransactionBlock, typeArgs: [string, string], args: CreateTradingOrderArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::create_trading_order`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.version),
            obj(txb, args.registry),
            obj(txb, args.poolRegistry),
            pure(txb, args.marketIndex, `u64`),
            pure(txb, args.poolIndex, `u64`),
            obj(txb, args.pythState),
            obj(txb, args.oracleCToken),
            obj(txb, args.oracleTradingSymbol),
            obj(txb, args.clock),
            obj(txb, args.typusEcosystemVersion),
            obj(txb, args.typusUserRegistry),
            obj(txb, args.typusLeaderboardRegistry),
            pure(txb, args.linkedPositionId, `0x1::option::Option<u64>`),
            obj(txb, args.collateral),
            pure(txb, args.reduceOnly, `bool`),
            pure(txb, args.isLong, `bool`),
            pure(txb, args.isStopOrder, `bool`),
            pure(txb, args.size, `u64`),
            pure(txb, args.triggerPrice, `u64`),
        ],
    });
}

export interface CreateTradingOrderWithBidReceiptArgs {
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
    typusEcosystemVersion: ObjectArg;
    typusUserRegistry: ObjectArg;
    typusLeaderboardRegistry: ObjectArg;
    collateralBidReceipt: ObjectArg;
    isLong: boolean | TransactionArgument;
    user: string | TransactionArgument;
}

export function createTradingOrderWithBidReceipt(
    txb: TransactionBlock,
    typeArgs: [string, string, string],
    args: CreateTradingOrderWithBidReceiptArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::create_trading_order_with_bid_receipt`,
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
            obj(txb, args.typusEcosystemVersion),
            obj(txb, args.typusUserRegistry),
            obj(txb, args.typusLeaderboardRegistry),
            obj(txb, args.collateralBidReceipt),
            pure(txb, args.isLong, `bool`),
            pure(txb, args.user, `address`),
        ],
    });
}

export interface ExecuteOptionCollateralOrder_Args {
    version: ObjectArg;
    dovRegistry: ObjectArg;
    typusOracle: ObjectArg;
    symbolMarket: ObjectArg;
    liquidityPool: ObjectArg;
    order: ObjectArg;
    protocolFeeShareBp: bigint | TransactionArgument;
    collateralOraclePrice: bigint | TransactionArgument;
    collateralOraclePriceDecimal: bigint | TransactionArgument;
    tradingPairOraclePrice: bigint | TransactionArgument;
    tradingPairOraclePriceDecimal: bigint | TransactionArgument;
    typusEcosystemVersion: ObjectArg;
    typusUserRegistry: ObjectArg;
    typusLeaderboardRegistry: ObjectArg;
    clock: ObjectArg;
}

export function executeOptionCollateralOrder_(txb: TransactionBlock, typeArgs: [string, string], args: ExecuteOptionCollateralOrder_Args) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::execute_option_collateral_order_`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.version),
            obj(txb, args.dovRegistry),
            obj(txb, args.typusOracle),
            obj(txb, args.symbolMarket),
            obj(txb, args.liquidityPool),
            obj(txb, args.order),
            pure(txb, args.protocolFeeShareBp, `u64`),
            pure(txb, args.collateralOraclePrice, `u64`),
            pure(txb, args.collateralOraclePriceDecimal, `u64`),
            pure(txb, args.tradingPairOraclePrice, `u64`),
            pure(txb, args.tradingPairOraclePriceDecimal, `u64`),
            obj(txb, args.typusEcosystemVersion),
            obj(txb, args.typusUserRegistry),
            obj(txb, args.typusLeaderboardRegistry),
            obj(txb, args.clock),
        ],
    });
}

export interface ExecuteOrder_Args {
    version: ObjectArg;
    marketIndex: bigint | TransactionArgument;
    symbolMarket: ObjectArg;
    liquidityPool: ObjectArg;
    order: ObjectArg;
    protocolFeeShareBp: bigint | TransactionArgument;
    collateralOraclePrice: bigint | TransactionArgument;
    collateralOraclePriceDecimal: bigint | TransactionArgument;
    tradingPairOraclePrice: bigint | TransactionArgument;
    tradingPairOraclePriceDecimal: bigint | TransactionArgument;
    typusEcosystemVersion: ObjectArg;
    typusUserRegistry: ObjectArg;
    typusLeaderboardRegistry: ObjectArg;
    clock: ObjectArg;
}

export function executeOrder_(txb: TransactionBlock, typeArg: string, args: ExecuteOrder_Args) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::execute_order_`,
        typeArguments: [typeArg],
        arguments: [
            obj(txb, args.version),
            pure(txb, args.marketIndex, `u64`),
            obj(txb, args.symbolMarket),
            obj(txb, args.liquidityPool),
            obj(txb, args.order),
            pure(txb, args.protocolFeeShareBp, `u64`),
            pure(txb, args.collateralOraclePrice, `u64`),
            pure(txb, args.collateralOraclePriceDecimal, `u64`),
            pure(txb, args.tradingPairOraclePrice, `u64`),
            pure(txb, args.tradingPairOraclePriceDecimal, `u64`),
            obj(txb, args.typusEcosystemVersion),
            obj(txb, args.typusUserRegistry),
            obj(txb, args.typusLeaderboardRegistry),
            obj(txb, args.clock),
        ],
    });
}

export interface FindLiquidateArgs {
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
}

export function findLiquidate(txb: TransactionBlock, typeArgs: [string, string], args: FindLiquidateArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::find_liquidate`,
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
        ],
    });
}

export interface GetActiveOrdersByOrderTagArgs {
    version: ObjectArg;
    registry: ObjectArg;
    marketIndex: bigint | TransactionArgument;
    orderTypeTag: number | TransactionArgument;
}

export function getActiveOrdersByOrderTag(txb: TransactionBlock, typeArg: string, args: GetActiveOrdersByOrderTagArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::get_active_orders_by_order_tag`,
        typeArguments: [typeArg],
        arguments: [
            obj(txb, args.version),
            obj(txb, args.registry),
            pure(txb, args.marketIndex, `u64`),
            pure(txb, args.orderTypeTag, `u8`),
        ],
    });
}

export interface GetLinkedPositionArgs {
    symbolMarket: ObjectArg;
    linkedPositionId: bigint | TransactionArgument | TransactionArgument | null;
    user: string | TransactionArgument;
}

export function getLinkedPosition(txb: TransactionBlock, args: GetLinkedPositionArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::get_linked_position`,
        arguments: [
            obj(txb, args.symbolMarket),
            pure(txb, args.linkedPositionId, `0x1::option::Option<u64>`),
            pure(txb, args.user, `address`),
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
    isTokenCollateral: boolean | TransactionArgument;
    orderTypeTag: number | TransactionArgument;
}

export function getMutOrders(txb: TransactionBlock, args: GetMutOrdersArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::get_mut_orders`,
        arguments: [obj(txb, args.symbolMarket), pure(txb, args.isTokenCollateral, `bool`), pure(txb, args.orderTypeTag, `u8`)],
    });
}

export interface GetOrdersArgs {
    symbolMarket: ObjectArg;
    isTokenCollateral: boolean | TransactionArgument;
    orderTypeTag: number | TransactionArgument;
}

export function getOrders(txb: TransactionBlock, args: GetOrdersArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::get_orders`,
        arguments: [obj(txb, args.symbolMarket), pure(txb, args.isTokenCollateral, `bool`), pure(txb, args.orderTypeTag, `u8`)],
    });
}

export interface GetUserOrdersArgs {
    version: ObjectArg;
    registry: ObjectArg;
    marketIndex: bigint | TransactionArgument;
    user: string | TransactionArgument;
}

export function getUserOrders(txb: TransactionBlock, args: GetUserOrdersArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::get_user_orders`,
        arguments: [obj(txb, args.version), obj(txb, args.registry), pure(txb, args.marketIndex, `u64`), pure(txb, args.user, `address`)],
    });
}

export interface GetUserPositionsArgs {
    version: ObjectArg;
    registry: ObjectArg;
    marketIndex: bigint | TransactionArgument;
    user: string | TransactionArgument;
}

export function getUserPositions(txb: TransactionBlock, args: GetUserPositionsArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::get_user_positions`,
        arguments: [obj(txb, args.version), obj(txb, args.registry), pure(txb, args.marketIndex, `u64`), pure(txb, args.user, `address`)],
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

export interface ManagerReducePositionArgs {
    version: ObjectArg;
    registry: ObjectArg;
    poolRegistry: ObjectArg;
    pythState: ObjectArg;
    oracleCToken: ObjectArg;
    oracleTradingSymbol: ObjectArg;
    marketIndex: bigint | TransactionArgument;
    poolIndex: bigint | TransactionArgument;
    clock: ObjectArg;
    typusEcosystemVersion: ObjectArg;
    typusUserRegistry: ObjectArg;
    typusLeaderboardRegistry: ObjectArg;
    positionId: bigint | TransactionArgument;
    reducedRatioBp: bigint | TransactionArgument;
}

export function managerReducePosition(txb: TransactionBlock, typeArgs: [string, string], args: ManagerReducePositionArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::manager_reduce_position`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.version),
            obj(txb, args.registry),
            obj(txb, args.poolRegistry),
            obj(txb, args.pythState),
            obj(txb, args.oracleCToken),
            obj(txb, args.oracleTradingSymbol),
            pure(txb, args.marketIndex, `u64`),
            pure(txb, args.poolIndex, `u64`),
            obj(txb, args.clock),
            obj(txb, args.typusEcosystemVersion),
            obj(txb, args.typusUserRegistry),
            obj(txb, args.typusLeaderboardRegistry),
            pure(txb, args.positionId, `u64`),
            pure(txb, args.reducedRatioBp, `u64`),
        ],
    });
}

export interface MatchTradingOrderArgs {
    version: ObjectArg;
    registry: ObjectArg;
    poolRegistry: ObjectArg;
    pythState: ObjectArg;
    oracleCToken: ObjectArg;
    oracleTradingSymbol: ObjectArg;
    marketIndex: bigint | TransactionArgument;
    poolIndex: bigint | TransactionArgument;
    clock: ObjectArg;
    typusEcosystemVersion: ObjectArg;
    typusUserRegistry: ObjectArg;
    typusLeaderboardRegistry: ObjectArg;
    orderTypeTag: number | TransactionArgument;
    triggerPrice: bigint | TransactionArgument;
    maxOperationCount: bigint | TransactionArgument;
}

export function matchTradingOrder(txb: TransactionBlock, typeArgs: [string, string], args: MatchTradingOrderArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::match_trading_order`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.version),
            obj(txb, args.registry),
            obj(txb, args.poolRegistry),
            obj(txb, args.pythState),
            obj(txb, args.oracleCToken),
            obj(txb, args.oracleTradingSymbol),
            pure(txb, args.marketIndex, `u64`),
            pure(txb, args.poolIndex, `u64`),
            obj(txb, args.clock),
            obj(txb, args.typusEcosystemVersion),
            obj(txb, args.typusUserRegistry),
            obj(txb, args.typusLeaderboardRegistry),
            pure(txb, args.orderTypeTag, `u8`),
            pure(txb, args.triggerPrice, `u64`),
            pure(txb, args.maxOperationCount, `u64`),
        ],
    });
}

export interface NewMarketsArgs {
    version: ObjectArg;
    registry: ObjectArg;
    protocolFeeShareBp: bigint | TransactionArgument;
}

export function newMarkets(txb: TransactionBlock, typeArgs: [string, string], args: NewMarketsArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::new_markets`,
        typeArguments: typeArgs,
        arguments: [obj(txb, args.version), obj(txb, args.registry), pure(txb, args.protocolFeeShareBp, `u64`)],
    });
}

export interface ReduceOptionCollateralPositionSizeArgs {
    version: ObjectArg;
    registry: ObjectArg;
    poolRegistry: ObjectArg;
    dovRegistry: ObjectArg;
    typusOracle: ObjectArg;
    marketIndex: bigint | TransactionArgument;
    poolIndex: bigint | TransactionArgument;
    typusEcosystemVersion: ObjectArg;
    typusUserRegistry: ObjectArg;
    typusLeaderboardRegistry: ObjectArg;
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
            obj(txb, args.typusEcosystemVersion),
            obj(txb, args.typusUserRegistry),
            obj(txb, args.typusLeaderboardRegistry),
            obj(txb, args.pythState),
            obj(txb, args.oracleCToken),
            obj(txb, args.oracleTradingSymbol),
            obj(txb, args.clock),
            pure(txb, args.positionId, `u64`),
            pure(txb, args.orderSize, `0x1::option::Option<u64>`),
        ],
    });
}

export interface RemoveLinkedOrdersArgs {
    version: ObjectArg;
    marketIndex: bigint | TransactionArgument;
    symbolMarket: ObjectArg;
    linkedOrderIds: Array<bigint | TransactionArgument> | TransactionArgument;
    linkedOrderPrices: Array<bigint | TransactionArgument> | TransactionArgument;
    user: string | TransactionArgument;
}

export function removeLinkedOrders(txb: TransactionBlock, typeArg: string, args: RemoveLinkedOrdersArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::remove_linked_orders`,
        typeArguments: [typeArg],
        arguments: [
            obj(txb, args.version),
            pure(txb, args.marketIndex, `u64`),
            obj(txb, args.symbolMarket),
            pure(txb, args.linkedOrderIds, `vector<u64>`),
            pure(txb, args.linkedOrderPrices, `vector<u64>`),
            pure(txb, args.user, `address`),
        ],
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

export interface TakeOrderByOrderIdAndPriceArgs {
    symbolMarket: ObjectArg;
    triggerPrice: bigint | TransactionArgument;
    orderId: bigint | TransactionArgument;
    isTokenCollateral: boolean | TransactionArgument;
    user: string | TransactionArgument;
}

export function takeOrderByOrderIdAndPrice(txb: TransactionBlock, args: TakeOrderByOrderIdAndPriceArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::take_order_by_order_id_and_price`,
        arguments: [
            obj(txb, args.symbolMarket),
            pure(txb, args.triggerPrice, `u64`),
            pure(txb, args.orderId, `u64`),
            pure(txb, args.isTokenCollateral, `bool`),
            pure(txb, args.user, `address`),
        ],
    });
}

export function tradingSymbolExists(txb: TransactionBlock, typeArg: string, market: ObjectArg) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::trading_symbol_exists`,
        typeArguments: [typeArg],
        arguments: [obj(txb, market)],
    });
}

export interface UpdateFundingRateArgs {
    version: ObjectArg;
    registry: ObjectArg;
    poolRegistry: ObjectArg;
    marketIndex: bigint | TransactionArgument;
    poolIndex: bigint | TransactionArgument;
    pythState: ObjectArg;
    oracleTradingSymbol: ObjectArg;
    clock: ObjectArg;
}

export function updateFundingRate(txb: TransactionBlock, typeArg: string, args: UpdateFundingRateArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::update_funding_rate`,
        typeArguments: [typeArg],
        arguments: [
            obj(txb, args.version),
            obj(txb, args.registry),
            obj(txb, args.poolRegistry),
            pure(txb, args.marketIndex, `u64`),
            pure(txb, args.poolIndex, `u64`),
            obj(txb, args.pythState),
            obj(txb, args.oracleTradingSymbol),
            obj(txb, args.clock),
        ],
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

export interface UpdateProtocolFeeShareBpArgs {
    version: ObjectArg;
    registry: ObjectArg;
    marketIndex: bigint | TransactionArgument;
    protocolFeeShareBp: bigint | TransactionArgument;
}

export function updateProtocolFeeShareBp(txb: TransactionBlock, args: UpdateProtocolFeeShareBpArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::trading::update_protocol_fee_share_bp`,
        arguments: [
            obj(txb, args.version),
            obj(txb, args.registry),
            pure(txb, args.marketIndex, `u64`),
            pure(txb, args.protocolFeeShareBp, `u64`),
        ],
    });
}
