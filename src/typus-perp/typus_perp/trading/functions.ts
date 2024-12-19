import { PUBLISHED_AT } from "..";
import { Option } from "../../_dependencies/source/0x1/option/structs";
import { TypusBidReceipt } from "../../_dependencies/source/0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded/vault/structs";
import { obj, pure, vector } from "../../_framework/util";
import { Transaction, TransactionArgument, TransactionObjectInput } from "@mysten/sui/transactions";

export function init(tx: Transaction) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::trading::init`,
        arguments: [],
    });
}

export interface GetEstimatedLiquidationPriceArgs {
    version: TransactionObjectInput;
    registry: TransactionObjectInput;
    poolRegistry: TransactionObjectInput;
    marketIndex: bigint | TransactionArgument;
    poolIndex: bigint | TransactionArgument;
    pythState: TransactionObjectInput;
    oracleCToken: TransactionObjectInput;
    oracleTradingSymbol: TransactionObjectInput;
    clock: TransactionObjectInput;
    positionId: bigint | TransactionArgument;
}

export function getEstimatedLiquidationPrice(tx: Transaction, typeArgs: [string, string], args: GetEstimatedLiquidationPriceArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::trading::get_estimated_liquidation_price`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.version),
            obj(tx, args.registry),
            obj(tx, args.poolRegistry),
            pure(tx, args.marketIndex, `u64`),
            pure(tx, args.poolIndex, `u64`),
            obj(tx, args.pythState),
            obj(tx, args.oracleCToken),
            obj(tx, args.oracleTradingSymbol),
            obj(tx, args.clock),
            pure(tx, args.positionId, `u64`),
        ],
    });
}

export interface IncreaseCollateralArgs {
    version: TransactionObjectInput;
    registry: TransactionObjectInput;
    poolRegistry: TransactionObjectInput;
    marketIndex: bigint | TransactionArgument;
    poolIndex: bigint | TransactionArgument;
    pythState: TransactionObjectInput;
    oracleCToken: TransactionObjectInput;
    oracleTradingSymbol: TransactionObjectInput;
    clock: TransactionObjectInput;
    positionId: bigint | TransactionArgument;
    collateral: TransactionObjectInput;
}

export function increaseCollateral(tx: Transaction, typeArgs: [string, string], args: IncreaseCollateralArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::trading::increase_collateral`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.version),
            obj(tx, args.registry),
            obj(tx, args.poolRegistry),
            pure(tx, args.marketIndex, `u64`),
            pure(tx, args.poolIndex, `u64`),
            obj(tx, args.pythState),
            obj(tx, args.oracleCToken),
            obj(tx, args.oracleTradingSymbol),
            obj(tx, args.clock),
            pure(tx, args.positionId, `u64`),
            obj(tx, args.collateral),
        ],
    });
}

export interface ReleaseCollateralArgs {
    version: TransactionObjectInput;
    registry: TransactionObjectInput;
    poolRegistry: TransactionObjectInput;
    marketIndex: bigint | TransactionArgument;
    poolIndex: bigint | TransactionArgument;
    pythState: TransactionObjectInput;
    oracleCToken: TransactionObjectInput;
    oracleTradingSymbol: TransactionObjectInput;
    clock: TransactionObjectInput;
    positionId: bigint | TransactionArgument;
    releaseAmount: bigint | TransactionArgument;
}

export function releaseCollateral(tx: Transaction, typeArgs: [string, string], args: ReleaseCollateralArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::trading::release_collateral`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.version),
            obj(tx, args.registry),
            obj(tx, args.poolRegistry),
            pure(tx, args.marketIndex, `u64`),
            pure(tx, args.poolIndex, `u64`),
            obj(tx, args.pythState),
            obj(tx, args.oracleCToken),
            obj(tx, args.oracleTradingSymbol),
            obj(tx, args.clock),
            pure(tx, args.positionId, `u64`),
            pure(tx, args.releaseAmount, `u64`),
        ],
    });
}

export interface AddTradingSymbolArgs {
    version: TransactionObjectInput;
    registry: TransactionObjectInput;
    marketIndex: bigint | TransactionArgument;
    sizeDecimal: bigint | TransactionArgument;
    oracle: TransactionObjectInput;
    maxLeverageMbp: bigint | TransactionArgument;
    minSize: bigint | TransactionArgument;
    lotSize: bigint | TransactionArgument;
    tradingFeeRate: bigint | TransactionArgument;
    tradingFeeDecimal: bigint | TransactionArgument;
    basicFundingRate: bigint | TransactionArgument;
    fundingIntervalTsMs: bigint | TransactionArgument;
    clock: TransactionObjectInput;
}

export function addTradingSymbol(tx: Transaction, typeArg: string, args: AddTradingSymbolArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::trading::add_trading_symbol`,
        typeArguments: [typeArg],
        arguments: [
            obj(tx, args.version),
            obj(tx, args.registry),
            pure(tx, args.marketIndex, `u64`),
            pure(tx, args.sizeDecimal, `u64`),
            obj(tx, args.oracle),
            pure(tx, args.maxLeverageMbp, `u64`),
            pure(tx, args.minSize, `u64`),
            pure(tx, args.lotSize, `u64`),
            pure(tx, args.tradingFeeRate, `u64`),
            pure(tx, args.tradingFeeDecimal, `u64`),
            pure(tx, args.basicFundingRate, `u64`),
            pure(tx, args.fundingIntervalTsMs, `u64`),
            obj(tx, args.clock),
        ],
    });
}

export interface AdjustMarketInfoUserOrderSizeArgs {
    symbolMarket: TransactionObjectInput;
    long: boolean | TransactionArgument;
    filledOrCancelled: boolean | TransactionArgument;
    size: bigint | TransactionArgument;
}

export function adjustMarketInfoUserOrderSize(tx: Transaction, args: AdjustMarketInfoUserOrderSizeArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::trading::adjust_market_info_user_order_size`,
        arguments: [
            obj(tx, args.symbolMarket),
            pure(tx, args.long, `bool`),
            pure(tx, args.filledOrCancelled, `bool`),
            pure(tx, args.size, `u64`),
        ],
    });
}

export interface AdjustMarketInfoUserPositionSizeArgs {
    symbolMarket: TransactionObjectInput;
    filledOrderIsLong: boolean | TransactionArgument;
    reducingPosition: boolean | TransactionArgument;
    size: bigint | TransactionArgument;
}

export function adjustMarketInfoUserPositionSize(tx: Transaction, args: AdjustMarketInfoUserPositionSizeArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::trading::adjust_market_info_user_position_size`,
        arguments: [
            obj(tx, args.symbolMarket),
            pure(tx, args.filledOrderIsLong, `bool`),
            pure(tx, args.reducingPosition, `bool`),
            pure(tx, args.size, `u64`),
        ],
    });
}

export interface CancelLinkedOrdersArgs {
    version: TransactionObjectInput;
    registry: TransactionObjectInput;
    marketIndex: bigint | TransactionArgument;
    linkedOrderIds: Array<bigint | TransactionArgument> | TransactionArgument;
    linkedOrderPrices: Array<bigint | TransactionArgument> | TransactionArgument;
    user: string | TransactionArgument;
}

export function cancelLinkedOrders(tx: Transaction, typeArgs: [string, string], args: CancelLinkedOrdersArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::trading::cancel_linked_orders`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.version),
            obj(tx, args.registry),
            pure(tx, args.marketIndex, `u64`),
            pure(tx, args.linkedOrderIds, `vector<u64>`),
            pure(tx, args.linkedOrderPrices, `vector<u64>`),
            pure(tx, args.user, `address`),
        ],
    });
}

export interface CancelTradingOrderArgs {
    version: TransactionObjectInput;
    registry: TransactionObjectInput;
    marketIndex: bigint | TransactionArgument;
    orderId: bigint | TransactionArgument;
    triggerPrice: bigint | TransactionArgument;
    orderUser: string | TransactionArgument | TransactionArgument | null;
}

export function cancelTradingOrder(tx: Transaction, typeArgs: [string, string], args: CancelTradingOrderArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::trading::cancel_trading_order`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.version),
            obj(tx, args.registry),
            pure(tx, args.marketIndex, `u64`),
            pure(tx, args.orderId, `u64`),
            pure(tx, args.triggerPrice, `u64`),
            pure(tx, args.orderUser, `${Option.$typeName}<address>`),
        ],
    });
}

export interface CheckCollateralEnoughArgs {
    symbolMarket: TransactionObjectInput;
    order: TransactionObjectInput;
    collateralOraclePrice: bigint | TransactionArgument;
    collateralOraclePriceDecimal: bigint | TransactionArgument;
    tradingPairOraclePrice: bigint | TransactionArgument;
    tradingPairOraclePriceDecimal: bigint | TransactionArgument;
    tradingFeeRate: bigint | TransactionArgument;
    tradingFeeDecimal: bigint | TransactionArgument;
}

export function checkCollateralEnough(tx: Transaction, typeArg: string, args: CheckCollateralEnoughArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::trading::check_collateral_enough`,
        typeArguments: [typeArg],
        arguments: [
            obj(tx, args.symbolMarket),
            obj(tx, args.order),
            pure(tx, args.collateralOraclePrice, `u64`),
            pure(tx, args.collateralOraclePriceDecimal, `u64`),
            pure(tx, args.tradingPairOraclePrice, `u64`),
            pure(tx, args.tradingPairOraclePriceDecimal, `u64`),
            pure(tx, args.tradingFeeRate, `u64`),
            pure(tx, args.tradingFeeDecimal, `u64`),
        ],
    });
}

export interface CheckOptionCollateralEnoughArgs {
    dovRegistry: TransactionObjectInput;
    typusOracle: TransactionObjectInput;
    symbolMarket: TransactionObjectInput;
    order: TransactionObjectInput;
    collateralOraclePrice: bigint | TransactionArgument;
    collateralOraclePriceDecimal: bigint | TransactionArgument;
    tradingPairOraclePrice: bigint | TransactionArgument;
    tradingPairOraclePriceDecimal: bigint | TransactionArgument;
    tradingFeeRate: bigint | TransactionArgument;
    tradingFeeDecimal: bigint | TransactionArgument;
    clock: TransactionObjectInput;
}

export function checkOptionCollateralEnough(tx: Transaction, typeArg: string, args: CheckOptionCollateralEnoughArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::trading::check_option_collateral_enough`,
        typeArguments: [typeArg],
        arguments: [
            obj(tx, args.dovRegistry),
            obj(tx, args.typusOracle),
            obj(tx, args.symbolMarket),
            obj(tx, args.order),
            pure(tx, args.collateralOraclePrice, `u64`),
            pure(tx, args.collateralOraclePriceDecimal, `u64`),
            pure(tx, args.tradingPairOraclePrice, `u64`),
            pure(tx, args.tradingPairOraclePriceDecimal, `u64`),
            pure(tx, args.tradingFeeRate, `u64`),
            pure(tx, args.tradingFeeDecimal, `u64`),
            obj(tx, args.clock),
        ],
    });
}

export interface CheckReserveEnoughArgs {
    symbolMarket: TransactionObjectInput;
    liquidityPool: TransactionObjectInput;
    order: TransactionObjectInput;
    collateralOraclePrice: bigint | TransactionArgument;
    collateralOraclePriceDecimal: bigint | TransactionArgument;
    tradingPairOraclePrice: bigint | TransactionArgument;
    tradingPairOraclePriceDecimal: bigint | TransactionArgument;
}

export function checkReserveEnough(tx: Transaction, typeArg: string, args: CheckReserveEnoughArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::trading::check_reserve_enough`,
        typeArguments: [typeArg],
        arguments: [
            obj(tx, args.symbolMarket),
            obj(tx, args.liquidityPool),
            obj(tx, args.order),
            pure(tx, args.collateralOraclePrice, `u64`),
            pure(tx, args.collateralOraclePriceDecimal, `u64`),
            pure(tx, args.tradingPairOraclePrice, `u64`),
            pure(tx, args.tradingPairOraclePriceDecimal, `u64`),
        ],
    });
}

export interface CreateTradingOrderArgs {
    version: TransactionObjectInput;
    registry: TransactionObjectInput;
    poolRegistry: TransactionObjectInput;
    marketIndex: bigint | TransactionArgument;
    poolIndex: bigint | TransactionArgument;
    pythState: TransactionObjectInput;
    oracleCToken: TransactionObjectInput;
    oracleTradingSymbol: TransactionObjectInput;
    clock: TransactionObjectInput;
    typusEcosystemVersion: TransactionObjectInput;
    typusUserRegistry: TransactionObjectInput;
    typusLeaderboardRegistry: TransactionObjectInput;
    linkedPositionId: bigint | TransactionArgument | TransactionArgument | null;
    collateral: TransactionObjectInput;
    reduceOnly: boolean | TransactionArgument;
    isLong: boolean | TransactionArgument;
    isStopOrder: boolean | TransactionArgument;
    size: bigint | TransactionArgument;
    triggerPrice: bigint | TransactionArgument;
}

export function createTradingOrder(tx: Transaction, typeArgs: [string, string], args: CreateTradingOrderArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::trading::create_trading_order`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.version),
            obj(tx, args.registry),
            obj(tx, args.poolRegistry),
            pure(tx, args.marketIndex, `u64`),
            pure(tx, args.poolIndex, `u64`),
            obj(tx, args.pythState),
            obj(tx, args.oracleCToken),
            obj(tx, args.oracleTradingSymbol),
            obj(tx, args.clock),
            obj(tx, args.typusEcosystemVersion),
            obj(tx, args.typusUserRegistry),
            obj(tx, args.typusLeaderboardRegistry),
            pure(tx, args.linkedPositionId, `${Option.$typeName}<u64>`),
            obj(tx, args.collateral),
            pure(tx, args.reduceOnly, `bool`),
            pure(tx, args.isLong, `bool`),
            pure(tx, args.isStopOrder, `bool`),
            pure(tx, args.size, `u64`),
            pure(tx, args.triggerPrice, `u64`),
        ],
    });
}

export interface CreateTradingOrderWithBidReceiptArgs {
    version: TransactionObjectInput;
    registry: TransactionObjectInput;
    poolRegistry: TransactionObjectInput;
    dovRegistry: TransactionObjectInput;
    typusOracle: TransactionObjectInput;
    marketIndex: bigint | TransactionArgument;
    poolIndex: bigint | TransactionArgument;
    pythState: TransactionObjectInput;
    oracleCToken: TransactionObjectInput;
    oracleTradingSymbol: TransactionObjectInput;
    clock: TransactionObjectInput;
    typusEcosystemVersion: TransactionObjectInput;
    typusUserRegistry: TransactionObjectInput;
    typusLeaderboardRegistry: TransactionObjectInput;
    collateralBidReceipt: TransactionObjectInput;
    isLong: boolean | TransactionArgument;
    user: string | TransactionArgument;
}

export function createTradingOrderWithBidReceipt(
    tx: Transaction,
    typeArgs: [string, string, string],
    args: CreateTradingOrderWithBidReceiptArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::trading::create_trading_order_with_bid_receipt`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.version),
            obj(tx, args.registry),
            obj(tx, args.poolRegistry),
            obj(tx, args.dovRegistry),
            obj(tx, args.typusOracle),
            pure(tx, args.marketIndex, `u64`),
            pure(tx, args.poolIndex, `u64`),
            obj(tx, args.pythState),
            obj(tx, args.oracleCToken),
            obj(tx, args.oracleTradingSymbol),
            obj(tx, args.clock),
            obj(tx, args.typusEcosystemVersion),
            obj(tx, args.typusUserRegistry),
            obj(tx, args.typusLeaderboardRegistry),
            obj(tx, args.collateralBidReceipt),
            pure(tx, args.isLong, `bool`),
            pure(tx, args.user, `address`),
        ],
    });
}

export interface ExecuteOptionCollateralOrder_Args {
    version: TransactionObjectInput;
    dovRegistry: TransactionObjectInput;
    typusOracle: TransactionObjectInput;
    symbolMarket: TransactionObjectInput;
    liquidityPool: TransactionObjectInput;
    order: TransactionObjectInput;
    protocolFeeShareBp: bigint | TransactionArgument;
    collateralOraclePrice: bigint | TransactionArgument;
    collateralOraclePriceDecimal: bigint | TransactionArgument;
    tradingPairOraclePrice: bigint | TransactionArgument;
    tradingPairOraclePriceDecimal: bigint | TransactionArgument;
    typusEcosystemVersion: TransactionObjectInput;
    typusUserRegistry: TransactionObjectInput;
    typusLeaderboardRegistry: TransactionObjectInput;
    clock: TransactionObjectInput;
}

export function executeOptionCollateralOrder_(tx: Transaction, typeArgs: [string, string], args: ExecuteOptionCollateralOrder_Args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::trading::execute_option_collateral_order_`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.version),
            obj(tx, args.dovRegistry),
            obj(tx, args.typusOracle),
            obj(tx, args.symbolMarket),
            obj(tx, args.liquidityPool),
            obj(tx, args.order),
            pure(tx, args.protocolFeeShareBp, `u64`),
            pure(tx, args.collateralOraclePrice, `u64`),
            pure(tx, args.collateralOraclePriceDecimal, `u64`),
            pure(tx, args.tradingPairOraclePrice, `u64`),
            pure(tx, args.tradingPairOraclePriceDecimal, `u64`),
            obj(tx, args.typusEcosystemVersion),
            obj(tx, args.typusUserRegistry),
            obj(tx, args.typusLeaderboardRegistry),
            obj(tx, args.clock),
        ],
    });
}

export interface ExecuteOrder_Args {
    version: TransactionObjectInput;
    marketIndex: bigint | TransactionArgument;
    symbolMarket: TransactionObjectInput;
    liquidityPool: TransactionObjectInput;
    order: TransactionObjectInput;
    protocolFeeShareBp: bigint | TransactionArgument;
    collateralOraclePrice: bigint | TransactionArgument;
    collateralOraclePriceDecimal: bigint | TransactionArgument;
    tradingPairOraclePrice: bigint | TransactionArgument;
    tradingPairOraclePriceDecimal: bigint | TransactionArgument;
    typusEcosystemVersion: TransactionObjectInput;
    typusUserRegistry: TransactionObjectInput;
    typusLeaderboardRegistry: TransactionObjectInput;
    clock: TransactionObjectInput;
}

export function executeOrder_(tx: Transaction, typeArg: string, args: ExecuteOrder_Args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::trading::execute_order_`,
        typeArguments: [typeArg],
        arguments: [
            obj(tx, args.version),
            pure(tx, args.marketIndex, `u64`),
            obj(tx, args.symbolMarket),
            obj(tx, args.liquidityPool),
            obj(tx, args.order),
            pure(tx, args.protocolFeeShareBp, `u64`),
            pure(tx, args.collateralOraclePrice, `u64`),
            pure(tx, args.collateralOraclePriceDecimal, `u64`),
            pure(tx, args.tradingPairOraclePrice, `u64`),
            pure(tx, args.tradingPairOraclePriceDecimal, `u64`),
            obj(tx, args.typusEcosystemVersion),
            obj(tx, args.typusUserRegistry),
            obj(tx, args.typusLeaderboardRegistry),
            obj(tx, args.clock),
        ],
    });
}

export interface ExerciseBidReceiptsArgs {
    dovRegistry: TransactionObjectInput;
    bidReceipts: Array<TransactionObjectInput> | TransactionArgument;
}

export function exerciseBidReceipts(tx: Transaction, typeArgs: [string, string], args: ExerciseBidReceiptsArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::trading::exercise_bid_receipts`,
        typeArguments: typeArgs,
        arguments: [obj(tx, args.dovRegistry), vector(tx, `${TypusBidReceipt.$typeName}`, args.bidReceipts)],
    });
}

export interface GetActiveOrdersByOrderTagArgs {
    version: TransactionObjectInput;
    registry: TransactionObjectInput;
    marketIndex: bigint | TransactionArgument;
    orderTypeTag: number | TransactionArgument;
}

export function getActiveOrdersByOrderTag(tx: Transaction, typeArg: string, args: GetActiveOrdersByOrderTagArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::trading::get_active_orders_by_order_tag`,
        typeArguments: [typeArg],
        arguments: [obj(tx, args.version), obj(tx, args.registry), pure(tx, args.marketIndex, `u64`), pure(tx, args.orderTypeTag, `u8`)],
    });
}

export interface GetActiveOrdersByOrderTagAndCtokenArgs {
    version: TransactionObjectInput;
    registry: TransactionObjectInput;
    marketIndex: bigint | TransactionArgument;
    orderTypeTag: number | TransactionArgument;
}

export function getActiveOrdersByOrderTagAndCtoken(
    tx: Transaction,
    typeArgs: [string, string],
    args: GetActiveOrdersByOrderTagAndCtokenArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::trading::get_active_orders_by_order_tag_and_ctoken`,
        typeArguments: typeArgs,
        arguments: [obj(tx, args.version), obj(tx, args.registry), pure(tx, args.marketIndex, `u64`), pure(tx, args.orderTypeTag, `u8`)],
    });
}

export interface GetLinkedPositionArgs {
    symbolMarket: TransactionObjectInput;
    linkedPositionId: bigint | TransactionArgument | TransactionArgument | null;
    user: string | TransactionArgument;
}

export function getLinkedPosition(tx: Transaction, args: GetLinkedPositionArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::trading::get_linked_position`,
        arguments: [
            obj(tx, args.symbolMarket),
            pure(tx, args.linkedPositionId, `${Option.$typeName}<u64>`),
            pure(tx, args.user, `address`),
        ],
    });
}

export interface GetLiquidationInfoArgs {
    version: TransactionObjectInput;
    registry: TransactionObjectInput;
    poolRegistry: TransactionObjectInput;
    dovRegistry: TransactionObjectInput;
    typusOracle: TransactionObjectInput;
    marketIndex: bigint | TransactionArgument;
    poolIndex: bigint | TransactionArgument;
    pythState: TransactionObjectInput;
    oracleCToken: TransactionObjectInput;
    oracleTradingSymbol: TransactionObjectInput;
    getAll: boolean | TransactionArgument;
    clock: TransactionObjectInput;
}

export function getLiquidationInfo(tx: Transaction, typeArgs: [string, string], args: GetLiquidationInfoArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::trading::get_liquidation_info`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.version),
            obj(tx, args.registry),
            obj(tx, args.poolRegistry),
            obj(tx, args.dovRegistry),
            obj(tx, args.typusOracle),
            pure(tx, args.marketIndex, `u64`),
            pure(tx, args.poolIndex, `u64`),
            obj(tx, args.pythState),
            obj(tx, args.oracleCToken),
            obj(tx, args.oracleTradingSymbol),
            pure(tx, args.getAll, `bool`),
            obj(tx, args.clock),
        ],
    });
}

export interface GetMarketArgs {
    id: TransactionObjectInput;
    index: bigint | TransactionArgument;
}

export function getMarket(tx: Transaction, args: GetMarketArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::trading::get_market`,
        arguments: [obj(tx, args.id), pure(tx, args.index, `u64`)],
    });
}

export interface GetMaxReleasingCollateralAmountArgs {
    version: TransactionObjectInput;
    registry: TransactionObjectInput;
    poolRegistry: TransactionObjectInput;
    marketIndex: bigint | TransactionArgument;
    poolIndex: bigint | TransactionArgument;
    pythState: TransactionObjectInput;
    oracleCToken: TransactionObjectInput;
    oracleTradingSymbol: TransactionObjectInput;
    clock: TransactionObjectInput;
    positionId: bigint | TransactionArgument;
}

export function getMaxReleasingCollateralAmount(tx: Transaction, typeArgs: [string, string], args: GetMaxReleasingCollateralAmountArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::trading::get_max_releasing_collateral_amount`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.version),
            obj(tx, args.registry),
            obj(tx, args.poolRegistry),
            pure(tx, args.marketIndex, `u64`),
            pure(tx, args.poolIndex, `u64`),
            obj(tx, args.pythState),
            obj(tx, args.oracleCToken),
            obj(tx, args.oracleTradingSymbol),
            obj(tx, args.clock),
            pure(tx, args.positionId, `u64`),
        ],
    });
}

export interface GetMutMarketArgs {
    id: TransactionObjectInput;
    index: bigint | TransactionArgument;
}

export function getMutMarket(tx: Transaction, args: GetMutMarketArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::trading::get_mut_market`,
        arguments: [obj(tx, args.id), pure(tx, args.index, `u64`)],
    });
}

export interface GetMutOrdersArgs {
    symbolMarket: TransactionObjectInput;
    isTokenCollateral: boolean | TransactionArgument;
    orderTypeTag: number | TransactionArgument;
}

export function getMutOrders(tx: Transaction, args: GetMutOrdersArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::trading::get_mut_orders`,
        arguments: [obj(tx, args.symbolMarket), pure(tx, args.isTokenCollateral, `bool`), pure(tx, args.orderTypeTag, `u8`)],
    });
}

export interface GetOrdersArgs {
    symbolMarket: TransactionObjectInput;
    isTokenCollateral: boolean | TransactionArgument;
    orderTypeTag: number | TransactionArgument;
}

export function getOrders(tx: Transaction, args: GetOrdersArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::trading::get_orders`,
        arguments: [obj(tx, args.symbolMarket), pure(tx, args.isTokenCollateral, `bool`), pure(tx, args.orderTypeTag, `u8`)],
    });
}

export interface GetUserOrdersArgs {
    version: TransactionObjectInput;
    registry: TransactionObjectInput;
    marketIndex: bigint | TransactionArgument;
    user: string | TransactionArgument;
}

export function getUserOrders(tx: Transaction, args: GetUserOrdersArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::trading::get_user_orders`,
        arguments: [obj(tx, args.version), obj(tx, args.registry), pure(tx, args.marketIndex, `u64`), pure(tx, args.user, `address`)],
    });
}

export interface GetUserPositionsArgs {
    version: TransactionObjectInput;
    registry: TransactionObjectInput;
    marketIndex: bigint | TransactionArgument;
    user: string | TransactionArgument;
}

export function getUserPositions(tx: Transaction, args: GetUserPositionsArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::trading::get_user_positions`,
        arguments: [obj(tx, args.version), obj(tx, args.registry), pure(tx, args.marketIndex, `u64`), pure(tx, args.user, `address`)],
    });
}

export interface LiquidateArgs {
    version: TransactionObjectInput;
    registry: TransactionObjectInput;
    poolRegistry: TransactionObjectInput;
    dovRegistry: TransactionObjectInput;
    typusOracle: TransactionObjectInput;
    marketIndex: bigint | TransactionArgument;
    poolIndex: bigint | TransactionArgument;
    pythState: TransactionObjectInput;
    oracleCToken: TransactionObjectInput;
    oracleTradingSymbol: TransactionObjectInput;
    clock: TransactionObjectInput;
    positionId: bigint | TransactionArgument;
}

export function liquidate(tx: Transaction, typeArgs: [string, string, string], args: LiquidateArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::trading::liquidate`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.version),
            obj(tx, args.registry),
            obj(tx, args.poolRegistry),
            obj(tx, args.dovRegistry),
            obj(tx, args.typusOracle),
            pure(tx, args.marketIndex, `u64`),
            pure(tx, args.poolIndex, `u64`),
            obj(tx, args.pythState),
            obj(tx, args.oracleCToken),
            obj(tx, args.oracleTradingSymbol),
            obj(tx, args.clock),
            pure(tx, args.positionId, `u64`),
        ],
    });
}

export interface ManagerReducePositionArgs {
    version: TransactionObjectInput;
    registry: TransactionObjectInput;
    poolRegistry: TransactionObjectInput;
    pythState: TransactionObjectInput;
    oracleCToken: TransactionObjectInput;
    oracleTradingSymbol: TransactionObjectInput;
    marketIndex: bigint | TransactionArgument;
    poolIndex: bigint | TransactionArgument;
    clock: TransactionObjectInput;
    typusEcosystemVersion: TransactionObjectInput;
    typusUserRegistry: TransactionObjectInput;
    typusLeaderboardRegistry: TransactionObjectInput;
    positionId: bigint | TransactionArgument;
    reducedRatioBp: bigint | TransactionArgument;
}

export function managerReducePosition(tx: Transaction, typeArgs: [string, string], args: ManagerReducePositionArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::trading::manager_reduce_position`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.version),
            obj(tx, args.registry),
            obj(tx, args.poolRegistry),
            obj(tx, args.pythState),
            obj(tx, args.oracleCToken),
            obj(tx, args.oracleTradingSymbol),
            pure(tx, args.marketIndex, `u64`),
            pure(tx, args.poolIndex, `u64`),
            obj(tx, args.clock),
            obj(tx, args.typusEcosystemVersion),
            obj(tx, args.typusUserRegistry),
            obj(tx, args.typusLeaderboardRegistry),
            pure(tx, args.positionId, `u64`),
            pure(tx, args.reducedRatioBp, `u64`),
        ],
    });
}

export interface ManagerRemoveOrderArgs {
    version: TransactionObjectInput;
    registry: TransactionObjectInput;
    poolRegistry: TransactionObjectInput;
    marketIndex: bigint | TransactionArgument;
    poolIndex: bigint | TransactionArgument;
    orderUser: string | TransactionArgument;
    orderId: bigint | TransactionArgument;
    triggerPrice: bigint | TransactionArgument;
    process: TransactionObjectInput;
}

export function managerRemoveOrder(tx: Transaction, typeArgs: [string, string], args: ManagerRemoveOrderArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::trading::manager_remove_order`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.version),
            obj(tx, args.registry),
            obj(tx, args.poolRegistry),
            pure(tx, args.marketIndex, `u64`),
            pure(tx, args.poolIndex, `u64`),
            pure(tx, args.orderUser, `address`),
            pure(tx, args.orderId, `u64`),
            pure(tx, args.triggerPrice, `u64`),
            obj(tx, args.process),
        ],
    });
}

export interface ManagerRemovePositionArgs {
    version: TransactionObjectInput;
    registry: TransactionObjectInput;
    poolRegistry: TransactionObjectInput;
    dovRegistry: TransactionObjectInput;
    typusOracle: TransactionObjectInput;
    pythState: TransactionObjectInput;
    oracleCToken: TransactionObjectInput;
    oracleTradingSymbol: TransactionObjectInput;
    marketIndex: bigint | TransactionArgument;
    poolIndex: bigint | TransactionArgument;
    clock: TransactionObjectInput;
    typusEcosystemVersion: TransactionObjectInput;
    typusUserRegistry: TransactionObjectInput;
    typusLeaderboardRegistry: TransactionObjectInput;
    positionId: bigint | TransactionArgument;
    isOptionPosition: boolean | TransactionArgument;
    process: TransactionObjectInput;
}

export function managerRemovePosition(tx: Transaction, typeArgs: [string, string, string], args: ManagerRemovePositionArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::trading::manager_remove_position`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.version),
            obj(tx, args.registry),
            obj(tx, args.poolRegistry),
            obj(tx, args.dovRegistry),
            obj(tx, args.typusOracle),
            obj(tx, args.pythState),
            obj(tx, args.oracleCToken),
            obj(tx, args.oracleTradingSymbol),
            pure(tx, args.marketIndex, `u64`),
            pure(tx, args.poolIndex, `u64`),
            obj(tx, args.clock),
            obj(tx, args.typusEcosystemVersion),
            obj(tx, args.typusUserRegistry),
            obj(tx, args.typusLeaderboardRegistry),
            pure(tx, args.positionId, `u64`),
            pure(tx, args.isOptionPosition, `bool`),
            obj(tx, args.process),
        ],
    });
}

export interface ManagerUpdateProcessStatusAfterOrderArgs {
    version: TransactionObjectInput;
    registry: TransactionObjectInput;
    poolRegistry: TransactionObjectInput;
    marketIndex: bigint | TransactionArgument;
    poolIndex: bigint | TransactionArgument;
    process: TransactionObjectInput;
}

export function managerUpdateProcessStatusAfterOrder(
    tx: Transaction,
    typeArgs: [string, string],
    args: ManagerUpdateProcessStatusAfterOrderArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::trading::manager_update_process_status_after_order`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.version),
            obj(tx, args.registry),
            obj(tx, args.poolRegistry),
            pure(tx, args.marketIndex, `u64`),
            pure(tx, args.poolIndex, `u64`),
            obj(tx, args.process),
        ],
    });
}

export interface ManagerUpdateProcessStatusAfterPositionArgs {
    version: TransactionObjectInput;
    registry: TransactionObjectInput;
    poolRegistry: TransactionObjectInput;
    dovRegistry: TransactionObjectInput;
    typusOracle: TransactionObjectInput;
    marketIndex: bigint | TransactionArgument;
    poolIndex: bigint | TransactionArgument;
    pythState: TransactionObjectInput;
    oracleCToken: TransactionObjectInput;
    oracleTradingSymbol: TransactionObjectInput;
    process: TransactionObjectInput;
    clock: TransactionObjectInput;
}

export function managerUpdateProcessStatusAfterPosition(
    tx: Transaction,
    typeArgs: [string, string],
    args: ManagerUpdateProcessStatusAfterPositionArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::trading::manager_update_process_status_after_position`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.version),
            obj(tx, args.registry),
            obj(tx, args.poolRegistry),
            obj(tx, args.dovRegistry),
            obj(tx, args.typusOracle),
            pure(tx, args.marketIndex, `u64`),
            pure(tx, args.poolIndex, `u64`),
            obj(tx, args.pythState),
            obj(tx, args.oracleCToken),
            obj(tx, args.oracleTradingSymbol),
            obj(tx, args.process),
            obj(tx, args.clock),
        ],
    });
}

export interface MatchTradingOrderArgs {
    version: TransactionObjectInput;
    registry: TransactionObjectInput;
    poolRegistry: TransactionObjectInput;
    pythState: TransactionObjectInput;
    oracleCToken: TransactionObjectInput;
    oracleTradingSymbol: TransactionObjectInput;
    marketIndex: bigint | TransactionArgument;
    poolIndex: bigint | TransactionArgument;
    clock: TransactionObjectInput;
    typusEcosystemVersion: TransactionObjectInput;
    typusUserRegistry: TransactionObjectInput;
    typusLeaderboardRegistry: TransactionObjectInput;
    orderTypeTag: number | TransactionArgument;
    triggerPrice: bigint | TransactionArgument;
    maxOperationCount: bigint | TransactionArgument;
}

export function matchTradingOrder(tx: Transaction, typeArgs: [string, string], args: MatchTradingOrderArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::trading::match_trading_order`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.version),
            obj(tx, args.registry),
            obj(tx, args.poolRegistry),
            obj(tx, args.pythState),
            obj(tx, args.oracleCToken),
            obj(tx, args.oracleTradingSymbol),
            pure(tx, args.marketIndex, `u64`),
            pure(tx, args.poolIndex, `u64`),
            obj(tx, args.clock),
            obj(tx, args.typusEcosystemVersion),
            obj(tx, args.typusUserRegistry),
            obj(tx, args.typusLeaderboardRegistry),
            pure(tx, args.orderTypeTag, `u8`),
            pure(tx, args.triggerPrice, `u64`),
            pure(tx, args.maxOperationCount, `u64`),
        ],
    });
}

export interface NewMarketsArgs {
    version: TransactionObjectInput;
    registry: TransactionObjectInput;
    protocolFeeShareBp: bigint | TransactionArgument;
}

export function newMarkets(tx: Transaction, typeArgs: [string, string], args: NewMarketsArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::trading::new_markets`,
        typeArguments: typeArgs,
        arguments: [obj(tx, args.version), obj(tx, args.registry), pure(tx, args.protocolFeeShareBp, `u64`)],
    });
}

export interface ReduceOptionCollateralPositionSizeArgs {
    version: TransactionObjectInput;
    registry: TransactionObjectInput;
    poolRegistry: TransactionObjectInput;
    dovRegistry: TransactionObjectInput;
    typusOracle: TransactionObjectInput;
    marketIndex: bigint | TransactionArgument;
    poolIndex: bigint | TransactionArgument;
    typusEcosystemVersion: TransactionObjectInput;
    typusUserRegistry: TransactionObjectInput;
    typusLeaderboardRegistry: TransactionObjectInput;
    pythState: TransactionObjectInput;
    oracleCToken: TransactionObjectInput;
    oracleTradingSymbol: TransactionObjectInput;
    clock: TransactionObjectInput;
    positionId: bigint | TransactionArgument;
    orderSize: bigint | TransactionArgument | TransactionArgument | null;
}

export function reduceOptionCollateralPositionSize(
    tx: Transaction,
    typeArgs: [string, string, string],
    args: ReduceOptionCollateralPositionSizeArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::trading::reduce_option_collateral_position_size`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.version),
            obj(tx, args.registry),
            obj(tx, args.poolRegistry),
            obj(tx, args.dovRegistry),
            obj(tx, args.typusOracle),
            pure(tx, args.marketIndex, `u64`),
            pure(tx, args.poolIndex, `u64`),
            obj(tx, args.typusEcosystemVersion),
            obj(tx, args.typusUserRegistry),
            obj(tx, args.typusLeaderboardRegistry),
            obj(tx, args.pythState),
            obj(tx, args.oracleCToken),
            obj(tx, args.oracleTradingSymbol),
            obj(tx, args.clock),
            pure(tx, args.positionId, `u64`),
            pure(tx, args.orderSize, `${Option.$typeName}<u64>`),
        ],
    });
}

export interface RemoveLinkedOrdersArgs {
    version: TransactionObjectInput;
    marketIndex: bigint | TransactionArgument;
    symbolMarket: TransactionObjectInput;
    linkedOrderIds: Array<bigint | TransactionArgument> | TransactionArgument;
    linkedOrderPrices: Array<bigint | TransactionArgument> | TransactionArgument;
    user: string | TransactionArgument;
}

export function removeLinkedOrders(tx: Transaction, typeArg: string, args: RemoveLinkedOrdersArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::trading::remove_linked_orders`,
        typeArguments: [typeArg],
        arguments: [
            obj(tx, args.version),
            pure(tx, args.marketIndex, `u64`),
            obj(tx, args.symbolMarket),
            pure(tx, args.linkedOrderIds, `vector<u64>`),
            pure(tx, args.linkedOrderPrices, `vector<u64>`),
            pure(tx, args.user, `address`),
        ],
    });
}

export interface ResumeMarketArgs {
    version: TransactionObjectInput;
    registry: TransactionObjectInput;
    marketIndex: bigint | TransactionArgument;
}

export function resumeMarket(tx: Transaction, args: ResumeMarketArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::trading::resume_market`,
        arguments: [obj(tx, args.version), obj(tx, args.registry), pure(tx, args.marketIndex, `u64`)],
    });
}

export interface ResumeTradingSymbolArgs {
    version: TransactionObjectInput;
    registry: TransactionObjectInput;
    marketIndex: bigint | TransactionArgument;
}

export function resumeTradingSymbol(tx: Transaction, typeArg: string, args: ResumeTradingSymbolArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::trading::resume_trading_symbol`,
        typeArguments: [typeArg],
        arguments: [obj(tx, args.version), obj(tx, args.registry), pure(tx, args.marketIndex, `u64`)],
    });
}

export interface SuspendMarketArgs {
    version: TransactionObjectInput;
    registry: TransactionObjectInput;
    marketIndex: bigint | TransactionArgument;
}

export function suspendMarket(tx: Transaction, args: SuspendMarketArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::trading::suspend_market`,
        arguments: [obj(tx, args.version), obj(tx, args.registry), pure(tx, args.marketIndex, `u64`)],
    });
}

export interface SuspendTradingSymbolArgs {
    version: TransactionObjectInput;
    registry: TransactionObjectInput;
    marketIndex: bigint | TransactionArgument;
}

export function suspendTradingSymbol(tx: Transaction, typeArg: string, args: SuspendTradingSymbolArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::trading::suspend_trading_symbol`,
        typeArguments: [typeArg],
        arguments: [obj(tx, args.version), obj(tx, args.registry), pure(tx, args.marketIndex, `u64`)],
    });
}

export interface TakeOrderByOrderIdAndPriceArgs {
    symbolMarket: TransactionObjectInput;
    triggerPrice: bigint | TransactionArgument;
    orderId: bigint | TransactionArgument;
    isTokenCollateral: boolean | TransactionArgument;
    user: string | TransactionArgument;
}

export function takeOrderByOrderIdAndPrice(tx: Transaction, args: TakeOrderByOrderIdAndPriceArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::trading::take_order_by_order_id_and_price`,
        arguments: [
            obj(tx, args.symbolMarket),
            pure(tx, args.triggerPrice, `u64`),
            pure(tx, args.orderId, `u64`),
            pure(tx, args.isTokenCollateral, `bool`),
            pure(tx, args.user, `address`),
        ],
    });
}

export function tradingSymbolExists(tx: Transaction, typeArg: string, market: TransactionObjectInput) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::trading::trading_symbol_exists`,
        typeArguments: [typeArg],
        arguments: [obj(tx, market)],
    });
}

export interface UpdateFundingRateArgs {
    version: TransactionObjectInput;
    registry: TransactionObjectInput;
    poolRegistry: TransactionObjectInput;
    marketIndex: bigint | TransactionArgument;
    poolIndex: bigint | TransactionArgument;
    pythState: TransactionObjectInput;
    oracleTradingSymbol: TransactionObjectInput;
    clock: TransactionObjectInput;
}

export function updateFundingRate(tx: Transaction, typeArg: string, args: UpdateFundingRateArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::trading::update_funding_rate`,
        typeArguments: [typeArg],
        arguments: [
            obj(tx, args.version),
            obj(tx, args.registry),
            obj(tx, args.poolRegistry),
            pure(tx, args.marketIndex, `u64`),
            pure(tx, args.poolIndex, `u64`),
            obj(tx, args.pythState),
            obj(tx, args.oracleTradingSymbol),
            obj(tx, args.clock),
        ],
    });
}

export interface UpdateMarketConfigArgs {
    version: TransactionObjectInput;
    registry: TransactionObjectInput;
    marketIndex: bigint | TransactionArgument;
    minSize: bigint | TransactionArgument | TransactionArgument | null;
    lotSize: bigint | TransactionArgument | TransactionArgument | null;
    tradingFeeRate: bigint | TransactionArgument | TransactionArgument | null;
    tradingFeeDecimal: bigint | TransactionArgument | TransactionArgument | null;
}

export function updateMarketConfig(tx: Transaction, typeArg: string, args: UpdateMarketConfigArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::trading::update_market_config`,
        typeArguments: [typeArg],
        arguments: [
            obj(tx, args.version),
            obj(tx, args.registry),
            pure(tx, args.marketIndex, `u64`),
            pure(tx, args.minSize, `${Option.$typeName}<u64>`),
            pure(tx, args.lotSize, `${Option.$typeName}<u64>`),
            pure(tx, args.tradingFeeRate, `${Option.$typeName}<u64>`),
            pure(tx, args.tradingFeeDecimal, `${Option.$typeName}<u64>`),
        ],
    });
}

export interface UpdateProtocolFeeShareBpArgs {
    version: TransactionObjectInput;
    registry: TransactionObjectInput;
    marketIndex: bigint | TransactionArgument;
    protocolFeeShareBp: bigint | TransactionArgument;
}

export function updateProtocolFeeShareBp(tx: Transaction, args: UpdateProtocolFeeShareBpArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::trading::update_protocol_fee_share_bp`,
        arguments: [
            obj(tx, args.version),
            obj(tx, args.registry),
            pure(tx, args.marketIndex, `u64`),
            pure(tx, args.protocolFeeShareBp, `u64`),
        ],
    });
}
