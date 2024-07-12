import { ObjectArg } from "../../_framework/util";
import { TransactionArgument, TransactionBlock } from "@mysten/sui.js/transactions";
export interface SplitBidReceiptArgs {
    dovRegistry: ObjectArg;
    position: ObjectArg;
    size: bigint | TransactionArgument;
}
export declare function splitBidReceipt(txb: TransactionBlock, args: SplitBidReceiptArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface OrderFilledArgs {
    version: ObjectArg;
    order: ObjectArg;
    originalPosition: ObjectArg | TransactionArgument | null;
    nextPositionId: bigint | TransactionArgument;
    collateralOraclePrice: bigint | TransactionArgument;
    collateralOraclePriceDecimal: bigint | TransactionArgument;
    tradingPairOraclePrice: bigint | TransactionArgument;
    tradingPairOraclePriceDecimal: bigint | TransactionArgument;
    cumulativeBorrowRate: bigint | TransactionArgument;
    cumulativeFundingRateIndexSign: boolean | TransactionArgument;
    cumulativeFundingRateIndex: bigint | TransactionArgument;
    tradingFeeRate: bigint | TransactionArgument;
    tradingFeeDecimal: bigint | TransactionArgument;
    clock: ObjectArg;
}
export declare function orderFilled(txb: TransactionBlock, typeArg: string, args: OrderFilledArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface AddPositionLinkedOrderInfoArgs {
    position: ObjectArg;
    linkedOrderId: bigint | TransactionArgument;
    linkedOrderPrice: bigint | TransactionArgument;
}
export declare function addPositionLinkedOrderInfo(txb: TransactionBlock, args: AddPositionLinkedOrderInfoArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface CalculateFilled_Args {
    position: ObjectArg;
    reduceOnly: boolean | TransactionArgument;
    orderSide: boolean | TransactionArgument;
    orderSize: bigint | TransactionArgument;
    tradingPairOraclePrice: bigint | TransactionArgument;
    tradingPairOraclePriceDecimal: bigint | TransactionArgument;
}
export declare function calculateFilled_(txb: TransactionBlock, args: CalculateFilled_Args): import("@mysten/sui.js/transactions").TransactionResult;
export interface CalculateIntrinsicValueArgs {
    dovRegistry: ObjectArg;
    typusOracle: ObjectArg;
    receipts: Array<ObjectArg> | TransactionArgument;
    clock: ObjectArg;
}
export declare function calculateIntrinsicValue(txb: TransactionBlock, typeArg: string, args: CalculateIntrinsicValueArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface CalculateRealizedPnlUsdArgs {
    side: boolean | TransactionArgument;
    size: bigint | TransactionArgument;
    entryPrice: bigint | TransactionArgument;
    exitPrice: bigint | TransactionArgument;
    sizeDecimal: bigint | TransactionArgument;
    priceDecimal: bigint | TransactionArgument;
}
export declare function calculateRealizedPnlUsd(txb: TransactionBlock, args: CalculateRealizedPnlUsdArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface CalculateTradingFeeArgs {
    size: bigint | TransactionArgument;
    sizeDecimal: bigint | TransactionArgument;
    collateralOraclePrice: bigint | TransactionArgument;
    collateralOraclePriceDecimal: bigint | TransactionArgument;
    tradingPairOraclePrice: bigint | TransactionArgument;
    tradingPairOraclePriceDecimal: bigint | TransactionArgument;
    tradingFeeRate: bigint | TransactionArgument;
    tradingFeeDecimal: bigint | TransactionArgument;
    collateralTokenDecimal: bigint | TransactionArgument;
}
export declare function calculateTradingFee(txb: TransactionBlock, args: CalculateTradingFeeArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface CalculateUnrealizedPnlArgs {
    position: ObjectArg;
    tradingPairOraclePrice: bigint | TransactionArgument;
    tradingPairOraclePriceDecimal: bigint | TransactionArgument;
    tradingFeeRate: bigint | TransactionArgument;
    tradingFeeDecimal: bigint | TransactionArgument;
}
export declare function calculateUnrealizedPnl(txb: TransactionBlock, args: CalculateUnrealizedPnlArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface CheckOptionCollateralPositionLiquidatedArgs {
    dovRegistry: ObjectArg;
    typusOracle: ObjectArg;
    position: ObjectArg;
    collateralOraclePrice: bigint | TransactionArgument;
    collateralOraclePriceDecimal: bigint | TransactionArgument;
    tradingPairOraclePrice: bigint | TransactionArgument;
    tradingPairOraclePriceDecimal: bigint | TransactionArgument;
    tradingFeeRate: bigint | TransactionArgument;
    tradingFeeDecimal: bigint | TransactionArgument;
    maintenanceMarginRateBp: bigint | TransactionArgument;
    cumulativeBorrowRate: bigint | TransactionArgument;
    clock: ObjectArg;
}
export declare function checkOptionCollateralPositionLiquidated(txb: TransactionBlock, typeArg: string, args: CheckOptionCollateralPositionLiquidatedArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface CheckOrderFilledArgs {
    order: ObjectArg;
    oraclePrice: bigint | TransactionArgument;
}
export declare function checkOrderFilled(txb: TransactionBlock, args: CheckOrderFilledArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface CheckPositionLiquidatedArgs {
    position: ObjectArg;
    collateralOraclePrice: bigint | TransactionArgument;
    collateralOraclePriceDecimal: bigint | TransactionArgument;
    tradingPairOraclePrice: bigint | TransactionArgument;
    tradingPairOraclePriceDecimal: bigint | TransactionArgument;
    tradingFeeRate: bigint | TransactionArgument;
    tradingFeeDecimal: bigint | TransactionArgument;
    maintenanceMarginRateBp: bigint | TransactionArgument;
    cumulativeBorrowRate: bigint | TransactionArgument;
}
export declare function checkPositionLiquidated(txb: TransactionBlock, args: CheckPositionLiquidatedArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface CollateralWithPnlArgs {
    position: ObjectArg;
    collateralOraclePrice: bigint | TransactionArgument;
    collateralOraclePriceDecimal: bigint | TransactionArgument;
    tradingPairOraclePrice: bigint | TransactionArgument;
    tradingPairOraclePriceDecimal: bigint | TransactionArgument;
    tradingFeeRate: bigint | TransactionArgument;
    tradingFeeDecimal: bigint | TransactionArgument;
}
export declare function collateralWithPnl(txb: TransactionBlock, args: CollateralWithPnlArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface CreateOrderArgs {
    version: ObjectArg;
    symbol: ObjectArg;
    leveragePct: bigint | TransactionArgument;
    reduceOnly: boolean | TransactionArgument;
    isLong: boolean | TransactionArgument;
    isStopOrder: boolean | TransactionArgument;
    size: bigint | TransactionArgument;
    sizeDecimal: bigint | TransactionArgument;
    triggerPrice: bigint | TransactionArgument;
    collateral: ObjectArg;
    collateralTokenDecimal: bigint | TransactionArgument;
    linkedPositionId: bigint | TransactionArgument | TransactionArgument | null;
    orderId: bigint | TransactionArgument;
    oraclePrice: bigint | TransactionArgument;
    clock: ObjectArg;
}
export declare function createOrder(txb: TransactionBlock, typeArg: string, args: CreateOrderArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface CreateOrderWithBidReceiptsArgs {
    version: ObjectArg;
    symbol: ObjectArg;
    portfolioIndex: bigint | TransactionArgument;
    depositToken: ObjectArg;
    leveragePct: bigint | TransactionArgument;
    reduceOnly: boolean | TransactionArgument;
    isLong: boolean | TransactionArgument;
    isStopOrder: boolean | TransactionArgument;
    size: bigint | TransactionArgument;
    sizeDecimal: bigint | TransactionArgument;
    triggerPrice: bigint | TransactionArgument;
    collateralBidReceipts: Array<ObjectArg> | TransactionArgument;
    depositTokenDecimal: bigint | TransactionArgument;
    linkedPositionId: bigint | TransactionArgument | TransactionArgument | null;
    orderId: bigint | TransactionArgument;
    oraclePrice: bigint | TransactionArgument;
    user: string | TransactionArgument;
    clock: ObjectArg;
}
export declare function createOrderWithBidReceipts(txb: TransactionBlock, args: CreateOrderWithBidReceiptsArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface EmitRealizedFundingEventArgs {
    user: string | TransactionArgument;
    collateralToken: ObjectArg;
    symbol: ObjectArg;
    positionId: bigint | TransactionArgument;
    realizedFundingSign: boolean | TransactionArgument;
    realizedFundingFee: bigint | TransactionArgument;
    u64Padding: Array<bigint | TransactionArgument> | TransactionArgument;
}
export declare function emitRealizedFundingEvent(txb: TransactionBlock, args: EmitRealizedFundingEventArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface GetEstimatedLiquidationPriceArgs {
    position: ObjectArg;
    collateralOraclePrice: bigint | TransactionArgument;
    collateralOraclePriceDecimal: bigint | TransactionArgument;
    tradingPairOraclePrice: bigint | TransactionArgument;
    tradingPairOraclePriceDecimal: bigint | TransactionArgument;
    tradingFeeRate: bigint | TransactionArgument;
    tradingFeeDecimal: bigint | TransactionArgument;
    cumulativeBorrowRate: bigint | TransactionArgument;
}
export declare function getEstimatedLiquidationPrice(txb: TransactionBlock, args: GetEstimatedLiquidationPriceArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function getMaxOrderTypeTag(txb: TransactionBlock): import("@mysten/sui.js/transactions").TransactionResult;
export interface GetOptionCollateralOrderCollateralAmountArgs {
    dovRegistry: ObjectArg;
    typusOracle: ObjectArg;
    order: ObjectArg;
    clock: ObjectArg;
}
export declare function getOptionCollateralOrderCollateralAmount(txb: TransactionBlock, typeArg: string, args: GetOptionCollateralOrderCollateralAmountArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface GetOptionPositionCollateralAmountArgs {
    dovRegistry: ObjectArg;
    typusOracle: ObjectArg;
    position: ObjectArg;
    clock: ObjectArg;
}
export declare function getOptionPositionCollateralAmount(txb: TransactionBlock, typeArg: string, args: GetOptionPositionCollateralAmountArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function getOptionPositionPortfolioIndex(txb: TransactionBlock, position: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function getOrderCollateralAmount(txb: TransactionBlock, typeArg: string, order: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function getOrderCollateralToken(txb: TransactionBlock, order: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function getOrderCollateralTokenDecimal(txb: TransactionBlock, order: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface GetOrderFilledFeeArgs {
    order: ObjectArg;
    collateralOraclePrice: bigint | TransactionArgument;
    collateralOraclePriceDecimal: bigint | TransactionArgument;
    tradingPairOraclePrice: bigint | TransactionArgument;
    tradingPairOraclePriceDecimal: bigint | TransactionArgument;
    tradingFeeRate: bigint | TransactionArgument;
    tradingFeeDecimal: bigint | TransactionArgument;
}
export declare function getOrderFilledFee(txb: TransactionBlock, args: GetOrderFilledFeeArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function getOrderId(txb: TransactionBlock, order: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function getOrderLinkedPositionId(txb: TransactionBlock, order: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function getOrderPortfolioIndex(txb: TransactionBlock, order: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function getOrderPrice(txb: TransactionBlock, order: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function getOrderReduceOnly(txb: TransactionBlock, order: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function getOrderSide(txb: TransactionBlock, order: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function getOrderSize(txb: TransactionBlock, order: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function getOrderTradingSymbol(txb: TransactionBlock, order: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function getOrderTypeTag(txb: TransactionBlock, order: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function getOrderUser(txb: TransactionBlock, order: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function getPositionCollateralAmount(txb: TransactionBlock, typeArg: string, position: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function getPositionCollateralTokenDecimal(txb: TransactionBlock, position: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function getPositionCollateralTokenType(txb: TransactionBlock, position: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function getPositionId(txb: TransactionBlock, position: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function getPositionSide(txb: TransactionBlock, position: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function getPositionSize(txb: TransactionBlock, position: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function getPositionSizeDecimal(txb: TransactionBlock, position: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function getPositionSymbol(txb: TransactionBlock, position: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function getPositionUnrealizedCost(txb: TransactionBlock, position: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function getPositionUnrealizedFundingSign(txb: TransactionBlock, position: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function getPositionUser(txb: TransactionBlock, position: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function getReserveAmount(txb: TransactionBlock, position: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface IncreaseCollateralArgs {
    position: ObjectArg;
    collateral: ObjectArg;
}
export declare function increaseCollateral(txb: TransactionBlock, typeArg: string, args: IncreaseCollateralArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function isOptionCollateralOrder(txb: TransactionBlock, order: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function isOptionCollateralPosition(txb: TransactionBlock, position: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface ManagerCreateReduceOnlyOrderArgs {
    version: ObjectArg;
    symbol: ObjectArg;
    isLong: boolean | TransactionArgument;
    size: bigint | TransactionArgument;
    sizeDecimal: bigint | TransactionArgument;
    triggerPrice: bigint | TransactionArgument;
    collateral: ObjectArg;
    collateralTokenDecimal: bigint | TransactionArgument;
    linkedPositionId: bigint | TransactionArgument;
    user: string | TransactionArgument;
    orderId: bigint | TransactionArgument;
    oraclePrice: bigint | TransactionArgument;
    clock: ObjectArg;
}
export declare function managerCreateReduceOnlyOrder(txb: TransactionBlock, typeArg: string, args: ManagerCreateReduceOnlyOrderArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface MaxReleasingCollateralAmountArgs {
    position: ObjectArg;
    collateralOraclePrice: bigint | TransactionArgument;
    collateralOraclePriceDecimal: bigint | TransactionArgument;
    tradingPairOraclePrice: bigint | TransactionArgument;
    tradingPairOraclePriceDecimal: bigint | TransactionArgument;
    tradingFeeRate: bigint | TransactionArgument;
    tradingFeeDecimal: bigint | TransactionArgument;
    cumulativeBorrowRate: bigint | TransactionArgument;
    maxEntryLeveragePct: bigint | TransactionArgument;
}
export declare function maxReleasingCollateralAmount(txb: TransactionBlock, args: MaxReleasingCollateralAmountArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface OrderFilledWithBidReceiptsCollateralArgs {
    version: ObjectArg;
    liquidityPool: ObjectArg;
    dovRegistry: ObjectArg;
    typusOracle: ObjectArg;
    order: ObjectArg;
    originalPosition: ObjectArg | TransactionArgument | null;
    nextPositionId: bigint | TransactionArgument;
    collateralOraclePrice: bigint | TransactionArgument;
    collateralOraclePriceDecimal: bigint | TransactionArgument;
    tradingPairOraclePrice: bigint | TransactionArgument;
    tradingPairOraclePriceDecimal: bigint | TransactionArgument;
    cumulativeBorrowRate: bigint | TransactionArgument;
    cumulativeFundingRateIndexSign: boolean | TransactionArgument;
    cumulativeFundingRateIndex: bigint | TransactionArgument;
    tradingFeeRate: bigint | TransactionArgument;
    tradingFeeDecimal: bigint | TransactionArgument;
    referralFeeRebateBp: bigint | TransactionArgument;
    clock: ObjectArg;
}
export declare function orderFilledWithBidReceiptsCollateral(txb: TransactionBlock, typeArgs: [string, string], args: OrderFilledWithBidReceiptsCollateralArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface RealizeFundingArgs {
    position: ObjectArg;
    fundingIncome: ObjectArg;
}
export declare function realizeFunding(txb: TransactionBlock, typeArg: string, args: RealizeFundingArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface ReleaseCollateralArgs {
    position: ObjectArg;
    releaseAmount: bigint | TransactionArgument;
}
export declare function releaseCollateral(txb: TransactionBlock, typeArg: string, args: ReleaseCollateralArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface RemoveOrderArgs {
    version: ObjectArg;
    order: ObjectArg;
}
export declare function removeOrder(txb: TransactionBlock, typeArg: string, args: RemoveOrderArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface RemoveOrderWithBidReceiptsArgs {
    version: ObjectArg;
    order: ObjectArg;
}
export declare function removeOrderWithBidReceipts(txb: TransactionBlock, args: RemoveOrderWithBidReceiptsArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface RemovePositionArgs {
    version: ObjectArg;
    position: ObjectArg;
}
export declare function removePosition(txb: TransactionBlock, typeArg: string, args: RemovePositionArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface RemovePositionLinkedOrderInfoArgs {
    position: ObjectArg;
    linkedOrderId: bigint | TransactionArgument;
}
export declare function removePositionLinkedOrderInfo(txb: TransactionBlock, args: RemovePositionLinkedOrderInfoArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface RemovePositionWithBidReceiptsArgs {
    version: ObjectArg;
    position: ObjectArg;
}
export declare function removePositionWithBidReceipts(txb: TransactionBlock, args: RemovePositionWithBidReceiptsArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface UpdatePositionBorrowRateArgs {
    position: ObjectArg;
    collateralOraclePrice: bigint | TransactionArgument;
    collateralOraclePriceDecimal: bigint | TransactionArgument;
    tradingPairOraclePrice: bigint | TransactionArgument;
    tradingPairOraclePriceDecimal: bigint | TransactionArgument;
    cumulativeBorrowRate: bigint | TransactionArgument;
}
export declare function updatePositionBorrowRate(txb: TransactionBlock, args: UpdatePositionBorrowRateArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface UpdatePositionFundingRateArgs {
    position: ObjectArg;
    collateralOraclePrice: bigint | TransactionArgument;
    collateralOraclePriceDecimal: bigint | TransactionArgument;
    tradingPairOraclePrice: bigint | TransactionArgument;
    tradingPairOraclePriceDecimal: bigint | TransactionArgument;
    cumulativeFundingRateIndexSign: boolean | TransactionArgument;
    cumulativeFundingRateIndex: bigint | TransactionArgument;
}
export declare function updatePositionFundingRate(txb: TransactionBlock, args: UpdatePositionFundingRateArgs): import("@mysten/sui.js/transactions").TransactionResult;
