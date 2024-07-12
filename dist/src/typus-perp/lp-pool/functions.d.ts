import { ObjectArg } from "../../_framework/util";
import { TransactionArgument, TransactionBlock } from "@mysten/sui.js/transactions";
export interface SwapArgs {
    version: ObjectArg;
    registry: ObjectArg;
    index: bigint | TransactionArgument;
    pythState: ObjectArg;
    oracleFromToken: ObjectArg;
    oracleToToken: ObjectArg;
    fromCoin: ObjectArg;
    minToAmount: bigint | TransactionArgument;
    clock: ObjectArg;
}
export declare function swap(txb: TransactionBlock, typeArgs: [string, string], args: SwapArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function init(txb: TransactionBlock): import("@mysten/sui.js/transactions").TransactionResult;
export interface AddLiquidityTokenArgs {
    version: ObjectArg;
    registry: ObjectArg;
    index: bigint | TransactionArgument;
    oracle: ObjectArg;
    tokenDecimal: bigint | TransactionArgument;
    targetWeightBp: bigint | TransactionArgument;
    minDeposit: bigint | TransactionArgument;
    maxCapacity: bigint | TransactionArgument;
    basicMintFeeBp: bigint | TransactionArgument;
    additionalMintFeeBp: bigint | TransactionArgument;
    basicBurnFeeBp: bigint | TransactionArgument;
    additionalBurnFeeBp: bigint | TransactionArgument;
    swapFeeBp: bigint | TransactionArgument;
    swapFeeProtocolShareBp: bigint | TransactionArgument;
    basicBorrowRate0: bigint | TransactionArgument;
    basicBorrowRate1: bigint | TransactionArgument;
    basicBorrowRate2: bigint | TransactionArgument;
    utilizationThresholdBp0: bigint | TransactionArgument;
    utilizationThresholdBp1: bigint | TransactionArgument;
    borrowIntervalTsMs: bigint | TransactionArgument;
    maxOrderReserveRatioBp: bigint | TransactionArgument;
    clock: ObjectArg;
}
export declare function addLiquidityToken(txb: TransactionBlock, typeArg: string, args: AddLiquidityTokenArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface BurnLpArgs {
    version: ObjectArg;
    registry: ObjectArg;
    index: bigint | TransactionArgument;
    treasuryCaps: ObjectArg;
    pythState: ObjectArg;
    oracle: ObjectArg;
    coin: ObjectArg;
    clock: ObjectArg;
}
export declare function burnLp(txb: TransactionBlock, typeArgs: [string, string], args: BurnLpArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface CalculateBurnLpArgs {
    registry: ObjectArg;
    index: bigint | TransactionArgument;
    tokenType: ObjectArg;
    price: bigint | TransactionArgument;
    priceDecimal: bigint | TransactionArgument;
    burnAmount: bigint | TransactionArgument;
}
export declare function calculateBurnLp(txb: TransactionBlock, args: CalculateBurnLpArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface CalculateLpFeeArgs {
    liquidityPool: ObjectArg;
    tokenType: ObjectArg;
    depositAmount: bigint | TransactionArgument;
    depositAmountUsd: bigint | TransactionArgument;
    isMint: boolean | TransactionArgument;
}
export declare function calculateLpFee(txb: TransactionBlock, args: CalculateLpFeeArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface CalculateMintLpArgs {
    registry: ObjectArg;
    index: bigint | TransactionArgument;
    tokenType: ObjectArg;
    price: bigint | TransactionArgument;
    priceDecimal: bigint | TransactionArgument;
    depositAmount: bigint | TransactionArgument;
}
export declare function calculateMintLp(txb: TransactionBlock, args: CalculateMintLpArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface CalculateSwapFeeArgs {
    liquidityPool: ObjectArg;
    tokenType: ObjectArg;
    amount: bigint | TransactionArgument;
    amountUsd: bigint | TransactionArgument;
    swapIn: boolean | TransactionArgument;
}
export declare function calculateSwapFee(txb: TransactionBlock, args: CalculateSwapFeeArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface CheckTradingOrderSizeValidArgs {
    liquidityPool: ObjectArg;
    liquidityToken: ObjectArg;
    reserveAmount: bigint | TransactionArgument;
}
export declare function checkTradingOrderSizeValid(txb: TransactionBlock, args: CheckTradingOrderSizeValidArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface CheckTvlUpdatedArgs {
    liquidityPool: ObjectArg;
    clock: ObjectArg;
}
export declare function checkTvlUpdated(txb: TransactionBlock, args: CheckTvlUpdatedArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function getBorrowRateDecimal(txb: TransactionBlock): import("@mysten/sui.js/transactions").TransactionResult;
export interface GetCumulativeBorrowRateArgs {
    liquidityPool: ObjectArg;
    liquidityToken: ObjectArg;
}
export declare function getCumulativeBorrowRate(txb: TransactionBlock, args: GetCumulativeBorrowRateArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface GetLiquidityAmountArgs {
    registry: ObjectArg;
    index: bigint | TransactionArgument;
    liquidityToken: ObjectArg;
}
export declare function getLiquidityAmount(txb: TransactionBlock, args: GetLiquidityAmountArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface GetLiquidityPoolArgs {
    registry: ObjectArg;
    index: bigint | TransactionArgument;
}
export declare function getLiquidityPool(txb: TransactionBlock, args: GetLiquidityPoolArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface GetLiquidityTokenDecimalArgs {
    registry: ObjectArg;
    index: bigint | TransactionArgument;
    liquidityToken: ObjectArg;
}
export declare function getLiquidityTokenDecimal(txb: TransactionBlock, args: GetLiquidityTokenDecimalArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface GetLpTokenTypeArgs {
    registry: ObjectArg;
    index: bigint | TransactionArgument;
}
export declare function getLpTokenType(txb: TransactionBlock, args: GetLpTokenTypeArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface GetMutLiquidityPoolArgs {
    registry: ObjectArg;
    index: bigint | TransactionArgument;
}
export declare function getMutLiquidityPool(txb: TransactionBlock, args: GetMutLiquidityPoolArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface GetMutTokenPoolArgs {
    liquidityPool: ObjectArg;
    tokenType: ObjectArg;
}
export declare function getMutTokenPool(txb: TransactionBlock, args: GetMutTokenPoolArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface GetTokenPoolArgs {
    liquidityPool: ObjectArg;
    tokenType: ObjectArg;
}
export declare function getTokenPool(txb: TransactionBlock, args: GetTokenPoolArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface GetTokenPoolStateArgs {
    liquidityPool: ObjectArg;
    liquidityToken: ObjectArg;
}
export declare function getTokenPoolState(txb: TransactionBlock, args: GetTokenPoolStateArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function getTvlUsd(txb: TransactionBlock, liquidityPool: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface MintLpArgs {
    version: ObjectArg;
    registry: ObjectArg;
    treasuryCaps: ObjectArg;
    index: bigint | TransactionArgument;
    pythState: ObjectArg;
    oracle: ObjectArg;
    coin: ObjectArg;
    clock: ObjectArg;
}
export declare function mintLp(txb: TransactionBlock, typeArgs: [string, string], args: MintLpArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface NewLiquidityPoolArgs {
    version: ObjectArg;
    registry: ObjectArg;
    lpTokenDecimal: bigint | TransactionArgument;
}
export declare function newLiquidityPool(txb: TransactionBlock, typeArg: string, args: NewLiquidityPoolArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface OracleMatchedArgs {
    liquidityPool: ObjectArg;
    tokenType: ObjectArg;
    oracleId: string | TransactionArgument;
}
export declare function oracleMatched(txb: TransactionBlock, args: OracleMatchedArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface OrderFilledArgs {
    liquidityPool: ObjectArg;
    addReserve: boolean | TransactionArgument;
    dReserve: bigint | TransactionArgument;
    feeBalance: ObjectArg;
}
export declare function orderFilled(txb: TransactionBlock, typeArg: string, args: OrderFilledArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface PutCollateralArgs {
    liquidityPool: ObjectArg;
    collateral: ObjectArg;
    collateralOraclePrice: bigint | TransactionArgument;
    collateralOraclePriceDecimal: bigint | TransactionArgument;
}
export declare function putCollateral(txb: TransactionBlock, typeArg: string, args: PutCollateralArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface PutReceiptCollateralArgs {
    liquidityPool: ObjectArg;
    bidReceipt: ObjectArg;
}
export declare function putReceiptCollateral(txb: TransactionBlock, args: PutReceiptCollateralArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface RequestCollateralArgs {
    liquidityPool: ObjectArg;
    collateralAmount: bigint | TransactionArgument;
    collateralOraclePrice: bigint | TransactionArgument;
    collateralOraclePriceDecimal: bigint | TransactionArgument;
}
export declare function requestCollateral(txb: TransactionBlock, typeArg: string, args: RequestCollateralArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface ResumePoolArgs {
    version: ObjectArg;
    registry: ObjectArg;
    index: bigint | TransactionArgument;
}
export declare function resumePool(txb: TransactionBlock, args: ResumePoolArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface ResumeTokenPoolArgs {
    version: ObjectArg;
    registry: ObjectArg;
    index: bigint | TransactionArgument;
}
export declare function resumeTokenPool(txb: TransactionBlock, typeArg: string, args: ResumeTokenPoolArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function safetyCheck(txb: TransactionBlock, liquidityPool: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface SuspendPoolArgs {
    version: ObjectArg;
    registry: ObjectArg;
    index: bigint | TransactionArgument;
}
export declare function suspendPool(txb: TransactionBlock, args: SuspendPoolArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface SuspendTokenPoolArgs {
    version: ObjectArg;
    registry: ObjectArg;
    index: bigint | TransactionArgument;
}
export declare function suspendTokenPool(txb: TransactionBlock, typeArg: string, args: SuspendTokenPoolArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface UpdateBorrowInfoArgs {
    version: ObjectArg;
    registry: ObjectArg;
    index: bigint | TransactionArgument;
    clock: ObjectArg;
}
export declare function updateBorrowInfo(txb: TransactionBlock, args: UpdateBorrowInfoArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface UpdateLiquidityValueArgs {
    version: ObjectArg;
    registry: ObjectArg;
    index: bigint | TransactionArgument;
    pythState: ObjectArg;
    oracle: ObjectArg;
    clock: ObjectArg;
}
export declare function updateLiquidityValue(txb: TransactionBlock, typeArg: string, args: UpdateLiquidityValueArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface UpdateMarginConfigArgs {
    version: ObjectArg;
    registry: ObjectArg;
    index: bigint | TransactionArgument;
    basicBorrowRate0: bigint | TransactionArgument | TransactionArgument | null;
    basicBorrowRate1: bigint | TransactionArgument | TransactionArgument | null;
    basicBorrowRate2: bigint | TransactionArgument | TransactionArgument | null;
    utilizationThresholdBp0: bigint | TransactionArgument | TransactionArgument | null;
    utilizationThresholdBp1: bigint | TransactionArgument | TransactionArgument | null;
    borrowIntervalTsMs: bigint | TransactionArgument | TransactionArgument | null;
    maxOrderReserveRatioBp: bigint | TransactionArgument | TransactionArgument | null;
}
export declare function updateMarginConfig(txb: TransactionBlock, typeArg: string, args: UpdateMarginConfigArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface UpdateSpotConfigArgs {
    version: ObjectArg;
    registry: ObjectArg;
    index: bigint | TransactionArgument;
    targetWeightBp: bigint | TransactionArgument | TransactionArgument | null;
    minDeposit: bigint | TransactionArgument | TransactionArgument | null;
    maxCapacity: bigint | TransactionArgument | TransactionArgument | null;
    basicMintFeeBp: bigint | TransactionArgument | TransactionArgument | null;
    additionalMintFeeBp: bigint | TransactionArgument | TransactionArgument | null;
    basicBurnFeeBp: bigint | TransactionArgument | TransactionArgument | null;
    additionalBurnFeeBp: bigint | TransactionArgument | TransactionArgument | null;
    swapFeeBp: bigint | TransactionArgument | TransactionArgument | null;
    swapFeeProtocolShareBp: bigint | TransactionArgument | TransactionArgument | null;
}
export declare function updateSpotConfig(txb: TransactionBlock, typeArg: string, args: UpdateSpotConfigArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface UpdateTvlArgs {
    version: ObjectArg;
    liquidityPool: ObjectArg;
    tokenType: ObjectArg;
    pythState: ObjectArg;
    oracle: ObjectArg;
    clock: ObjectArg;
}
export declare function updateTvl(txb: TransactionBlock, args: UpdateTvlArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface ViewSwapResultArgs {
    version: ObjectArg;
    registry: ObjectArg;
    index: bigint | TransactionArgument;
    pythState: ObjectArg;
    oracleFromToken: ObjectArg;
    oracleToToken: ObjectArg;
    fromAmount: bigint | TransactionArgument;
    clock: ObjectArg;
}
export declare function viewSwapResult(txb: TransactionBlock, typeArgs: [string, string], args: ViewSwapResultArgs): import("@mysten/sui.js/transactions").TransactionResult;
