import { ObjectArg } from "../../_framework/util";
import { TransactionArgument, TransactionBlock } from "@mysten/sui.js/transactions";
export declare function init(txb: TransactionBlock): import("@mysten/sui.js/transactions").TransactionResult;
export interface GetEstimatedLiquidationPriceArgs {
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
}
export declare function getEstimatedLiquidationPrice(txb: TransactionBlock, typeArgs: [string, string], args: GetEstimatedLiquidationPriceArgs): import("@mysten/sui.js/transactions").TransactionResult;
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
export declare function increaseCollateral(txb: TransactionBlock, typeArgs: [string, string], args: IncreaseCollateralArgs): import("@mysten/sui.js/transactions").TransactionResult;
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
export declare function releaseCollateral(txb: TransactionBlock, typeArgs: [string, string], args: ReleaseCollateralArgs): import("@mysten/sui.js/transactions").TransactionResult;
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
export declare function addTradingSymbol(txb: TransactionBlock, typeArg: string, args: AddTradingSymbolArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface AdjustMarketInfoUserOrderSizeArgs {
    symbolMarket: ObjectArg;
    long: boolean | TransactionArgument;
    filledOrCancelled: boolean | TransactionArgument;
    size: bigint | TransactionArgument;
}
export declare function adjustMarketInfoUserOrderSize(txb: TransactionBlock, args: AdjustMarketInfoUserOrderSizeArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface BorrowMutPositionByPositionIdArgs {
    userPositions: ObjectArg;
    positionId: bigint | TransactionArgument;
}
export declare function borrowMutPositionByPositionId(txb: TransactionBlock, args: BorrowMutPositionByPositionIdArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface BorrowPositionByPositionIdArgs {
    userPositions: ObjectArg;
    positionId: bigint | TransactionArgument;
}
export declare function borrowPositionByPositionId(txb: TransactionBlock, args: BorrowPositionByPositionIdArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface CancelLinkedOrdersArgs {
    version: ObjectArg;
    registry: ObjectArg;
    marketIndex: bigint | TransactionArgument;
    linkedOrderIds: Array<bigint | TransactionArgument> | TransactionArgument;
    linkedOrderPrices: Array<bigint | TransactionArgument> | TransactionArgument;
    user: string | TransactionArgument;
}
export declare function cancelLinkedOrders(txb: TransactionBlock, typeArgs: [string, string], args: CancelLinkedOrdersArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface CancelTradingOrderArgs {
    version: ObjectArg;
    registry: ObjectArg;
    marketIndex: bigint | TransactionArgument;
    orderId: bigint | TransactionArgument;
    triggerPrice: bigint | TransactionArgument;
}
export declare function cancelTradingOrder(txb: TransactionBlock, typeArgs: [string, string], args: CancelTradingOrderArgs): import("@mysten/sui.js/transactions").TransactionResult;
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
export declare function checkCollateralEnough(txb: TransactionBlock, typeArg: string, args: CheckCollateralEnoughArgs): import("@mysten/sui.js/transactions").TransactionResult;
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
export declare function checkOptionCollateralEnough(txb: TransactionBlock, typeArg: string, args: CheckOptionCollateralEnoughArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface CheckReserveEnoughArgs {
    symbolMarket: ObjectArg;
    liquidityPool: ObjectArg;
    order: ObjectArg;
    collateralOraclePrice: bigint | TransactionArgument;
    collateralOraclePriceDecimal: bigint | TransactionArgument;
    tradingPairOraclePrice: bigint | TransactionArgument;
    tradingPairOraclePriceDecimal: bigint | TransactionArgument;
}
export declare function checkReserveEnough(txb: TransactionBlock, typeArg: string, args: CheckReserveEnoughArgs): import("@mysten/sui.js/transactions").TransactionResult;
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
export declare function createTradingOrder(txb: TransactionBlock, typeArgs: [string, string], args: CreateTradingOrderArgs): import("@mysten/sui.js/transactions").TransactionResult;
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
export declare function createTradingOrderWithBidReceipt(txb: TransactionBlock, typeArgs: [string, string, string], args: CreateTradingOrderWithBidReceiptArgs): import("@mysten/sui.js/transactions").TransactionResult;
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
export declare function executeOptionCollateralOrder_(txb: TransactionBlock, typeArgs: [string, string], args: ExecuteOptionCollateralOrder_Args): import("@mysten/sui.js/transactions").TransactionResult;
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
export declare function executeOrder_(txb: TransactionBlock, typeArg: string, args: ExecuteOrder_Args): import("@mysten/sui.js/transactions").TransactionResult;
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
export declare function findLiquidate(txb: TransactionBlock, typeArgs: [string, string], args: FindLiquidateArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface GetActiveOrdersByOrderTagArgs {
    version: ObjectArg;
    registry: ObjectArg;
    marketIndex: bigint | TransactionArgument;
    orderTypeTag: number | TransactionArgument;
}
export declare function getActiveOrdersByOrderTag(txb: TransactionBlock, typeArg: string, args: GetActiveOrdersByOrderTagArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface GetLinkedPositionArgs {
    symbolMarket: ObjectArg;
    linkedPositionId: bigint | TransactionArgument | TransactionArgument | null;
    user: string | TransactionArgument;
}
export declare function getLinkedPosition(txb: TransactionBlock, args: GetLinkedPositionArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface GetMarketArgs {
    id: ObjectArg;
    index: bigint | TransactionArgument;
}
export declare function getMarket(txb: TransactionBlock, args: GetMarketArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface GetMaxReleasingCollateralAmountArgs {
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
}
export declare function getMaxReleasingCollateralAmount(txb: TransactionBlock, typeArgs: [string, string], args: GetMaxReleasingCollateralAmountArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface GetMutMarketArgs {
    id: ObjectArg;
    index: bigint | TransactionArgument;
}
export declare function getMutMarket(txb: TransactionBlock, args: GetMutMarketArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface GetMutOrdersArgs {
    symbolMarket: ObjectArg;
    isTokenCollateral: boolean | TransactionArgument;
    orderTypeTag: number | TransactionArgument;
}
export declare function getMutOrders(txb: TransactionBlock, args: GetMutOrdersArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface GetOrdersArgs {
    symbolMarket: ObjectArg;
    isTokenCollateral: boolean | TransactionArgument;
    orderTypeTag: number | TransactionArgument;
}
export declare function getOrders(txb: TransactionBlock, args: GetOrdersArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface GetUserOrdersArgs {
    version: ObjectArg;
    registry: ObjectArg;
    marketIndex: bigint | TransactionArgument;
    user: string | TransactionArgument;
}
export declare function getUserOrders(txb: TransactionBlock, args: GetUserOrdersArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface GetUserPositionsArgs {
    version: ObjectArg;
    registry: ObjectArg;
    marketIndex: bigint | TransactionArgument;
    user: string | TransactionArgument;
}
export declare function getUserPositions(txb: TransactionBlock, args: GetUserPositionsArgs): import("@mysten/sui.js/transactions").TransactionResult;
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
export declare function liquidate(txb: TransactionBlock, typeArgs: [string, string, string], args: LiquidateArgs): import("@mysten/sui.js/transactions").TransactionResult;
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
export declare function managerReducePosition(txb: TransactionBlock, typeArgs: [string, string], args: ManagerReducePositionArgs): import("@mysten/sui.js/transactions").TransactionResult;
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
export declare function matchTradingOrder(txb: TransactionBlock, typeArgs: [string, string], args: MatchTradingOrderArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface NewMarketsArgs {
    version: ObjectArg;
    registry: ObjectArg;
    protocolFeeShareBp: bigint | TransactionArgument;
}
export declare function newMarkets(txb: TransactionBlock, typeArgs: [string, string], args: NewMarketsArgs): import("@mysten/sui.js/transactions").TransactionResult;
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
export declare function reduceOptionCollateralPositionSize(txb: TransactionBlock, typeArgs: [string, string, string], args: ReduceOptionCollateralPositionSizeArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface RemoveLinkedOrdersArgs {
    version: ObjectArg;
    marketIndex: bigint | TransactionArgument;
    symbolMarket: ObjectArg;
    linkedOrderIds: Array<bigint | TransactionArgument> | TransactionArgument;
    linkedOrderPrices: Array<bigint | TransactionArgument> | TransactionArgument;
    user: string | TransactionArgument;
}
export declare function removeLinkedOrders(txb: TransactionBlock, typeArg: string, args: RemoveLinkedOrdersArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface ResumeMarketArgs {
    version: ObjectArg;
    registry: ObjectArg;
    marketIndex: bigint | TransactionArgument;
}
export declare function resumeMarket(txb: TransactionBlock, args: ResumeMarketArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface ResumeTradingSymbolArgs {
    version: ObjectArg;
    registry: ObjectArg;
    marketIndex: bigint | TransactionArgument;
}
export declare function resumeTradingSymbol(txb: TransactionBlock, typeArg: string, args: ResumeTradingSymbolArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface SuspendMarketArgs {
    version: ObjectArg;
    registry: ObjectArg;
    marketIndex: bigint | TransactionArgument;
}
export declare function suspendMarket(txb: TransactionBlock, args: SuspendMarketArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface SuspendTradingSymbolArgs {
    version: ObjectArg;
    registry: ObjectArg;
    marketIndex: bigint | TransactionArgument;
}
export declare function suspendTradingSymbol(txb: TransactionBlock, typeArg: string, args: SuspendTradingSymbolArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface TakeOrderByOrderIdAndPriceArgs {
    symbolMarket: ObjectArg;
    triggerPrice: bigint | TransactionArgument;
    orderId: bigint | TransactionArgument;
    isTokenCollateral: boolean | TransactionArgument;
    user: string | TransactionArgument;
}
export declare function takeOrderByOrderIdAndPrice(txb: TransactionBlock, args: TakeOrderByOrderIdAndPriceArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function tradingSymbolExists(txb: TransactionBlock, typeArg: string, market: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
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
export declare function updateFundingRate(txb: TransactionBlock, typeArg: string, args: UpdateFundingRateArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface UpdateMarketConfigArgs {
    version: ObjectArg;
    registry: ObjectArg;
    marketIndex: bigint | TransactionArgument;
    minSize: bigint | TransactionArgument | TransactionArgument | null;
    lotSize: bigint | TransactionArgument | TransactionArgument | null;
    tradingFeeRate: bigint | TransactionArgument | TransactionArgument | null;
    tradingFeeDecimal: bigint | TransactionArgument | TransactionArgument | null;
}
export declare function updateMarketConfig(txb: TransactionBlock, typeArg: string, args: UpdateMarketConfigArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface UpdateProtocolFeeShareBpArgs {
    version: ObjectArg;
    registry: ObjectArg;
    marketIndex: bigint | TransactionArgument;
    protocolFeeShareBp: bigint | TransactionArgument;
}
export declare function updateProtocolFeeShareBp(txb: TransactionBlock, args: UpdateProtocolFeeShareBpArgs): import("@mysten/sui.js/transactions").TransactionResult;
