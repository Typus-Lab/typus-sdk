import { PUBLISHED_AT } from "..";
import { ObjectArg, obj, pure } from "../../_framework/util";
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

export function swap(txb: TransactionBlock, typeArgs: [string, string], args: SwapArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::swap`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.version),
            obj(txb, args.registry),
            pure(txb, args.index, `u64`),
            obj(txb, args.pythState),
            obj(txb, args.oracleFromToken),
            obj(txb, args.oracleToToken),
            obj(txb, args.fromCoin),
            pure(txb, args.minToAmount, `u64`),
            obj(txb, args.clock),
        ],
    });
}

export function init(txb: TransactionBlock) {
    return txb.moveCall({ target: `${PUBLISHED_AT}::lp_pool::init`, arguments: [] });
}

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

export function addLiquidityToken(txb: TransactionBlock, typeArg: string, args: AddLiquidityTokenArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::add_liquidity_token`,
        typeArguments: [typeArg],
        arguments: [
            obj(txb, args.version),
            obj(txb, args.registry),
            pure(txb, args.index, `u64`),
            obj(txb, args.oracle),
            pure(txb, args.tokenDecimal, `u64`),
            pure(txb, args.targetWeightBp, `u64`),
            pure(txb, args.minDeposit, `u64`),
            pure(txb, args.maxCapacity, `u64`),
            pure(txb, args.basicMintFeeBp, `u64`),
            pure(txb, args.additionalMintFeeBp, `u64`),
            pure(txb, args.basicBurnFeeBp, `u64`),
            pure(txb, args.additionalBurnFeeBp, `u64`),
            pure(txb, args.swapFeeBp, `u64`),
            pure(txb, args.swapFeeProtocolShareBp, `u64`),
            pure(txb, args.basicBorrowRate0, `u64`),
            pure(txb, args.basicBorrowRate1, `u64`),
            pure(txb, args.basicBorrowRate2, `u64`),
            pure(txb, args.utilizationThresholdBp0, `u64`),
            pure(txb, args.utilizationThresholdBp1, `u64`),
            pure(txb, args.borrowIntervalTsMs, `u64`),
            pure(txb, args.maxOrderReserveRatioBp, `u64`),
            obj(txb, args.clock),
        ],
    });
}

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

export function burnLp(txb: TransactionBlock, typeArgs: [string, string], args: BurnLpArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::burn_lp`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.version),
            obj(txb, args.registry),
            pure(txb, args.index, `u64`),
            obj(txb, args.treasuryCaps),
            obj(txb, args.pythState),
            obj(txb, args.oracle),
            obj(txb, args.coin),
            obj(txb, args.clock),
        ],
    });
}

export interface CalculateBurnLpArgs {
    registry: ObjectArg;
    index: bigint | TransactionArgument;
    tokenType: ObjectArg;
    price: bigint | TransactionArgument;
    priceDecimal: bigint | TransactionArgument;
    burnAmount: bigint | TransactionArgument;
}

export function calculateBurnLp(txb: TransactionBlock, args: CalculateBurnLpArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::calculate_burn_lp`,
        arguments: [
            obj(txb, args.registry),
            pure(txb, args.index, `u64`),
            obj(txb, args.tokenType),
            pure(txb, args.price, `u64`),
            pure(txb, args.priceDecimal, `u64`),
            pure(txb, args.burnAmount, `u64`),
        ],
    });
}

export interface CalculateLpFeeArgs {
    liquidityPool: ObjectArg;
    tokenType: ObjectArg;
    depositAmount: bigint | TransactionArgument;
    depositAmountUsd: bigint | TransactionArgument;
    isMint: boolean | TransactionArgument;
}

export function calculateLpFee(txb: TransactionBlock, args: CalculateLpFeeArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::calculate_lp_fee`,
        arguments: [
            obj(txb, args.liquidityPool),
            obj(txb, args.tokenType),
            pure(txb, args.depositAmount, `u64`),
            pure(txb, args.depositAmountUsd, `u64`),
            pure(txb, args.isMint, `bool`),
        ],
    });
}

export interface CalculateMintLpArgs {
    registry: ObjectArg;
    index: bigint | TransactionArgument;
    tokenType: ObjectArg;
    price: bigint | TransactionArgument;
    priceDecimal: bigint | TransactionArgument;
    depositAmount: bigint | TransactionArgument;
}

export function calculateMintLp(txb: TransactionBlock, args: CalculateMintLpArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::calculate_mint_lp`,
        arguments: [
            obj(txb, args.registry),
            pure(txb, args.index, `u64`),
            obj(txb, args.tokenType),
            pure(txb, args.price, `u64`),
            pure(txb, args.priceDecimal, `u64`),
            pure(txb, args.depositAmount, `u64`),
        ],
    });
}

export interface CalculateSwapFeeArgs {
    liquidityPool: ObjectArg;
    tokenType: ObjectArg;
    amount: bigint | TransactionArgument;
    amountUsd: bigint | TransactionArgument;
    swapIn: boolean | TransactionArgument;
}

export function calculateSwapFee(txb: TransactionBlock, args: CalculateSwapFeeArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::calculate_swap_fee`,
        arguments: [
            obj(txb, args.liquidityPool),
            obj(txb, args.tokenType),
            pure(txb, args.amount, `u64`),
            pure(txb, args.amountUsd, `u64`),
            pure(txb, args.swapIn, `bool`),
        ],
    });
}

export interface CheckTradingOrderSizeValidArgs {
    liquidityPool: ObjectArg;
    liquidityToken: ObjectArg;
    reserveAmount: bigint | TransactionArgument;
}

export function checkTradingOrderSizeValid(txb: TransactionBlock, args: CheckTradingOrderSizeValidArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::check_trading_order_size_valid`,
        arguments: [obj(txb, args.liquidityPool), obj(txb, args.liquidityToken), pure(txb, args.reserveAmount, `u64`)],
    });
}

export interface CheckTvlUpdatedArgs {
    liquidityPool: ObjectArg;
    clock: ObjectArg;
}

export function checkTvlUpdated(txb: TransactionBlock, args: CheckTvlUpdatedArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::check_tvl_updated`,
        arguments: [obj(txb, args.liquidityPool), obj(txb, args.clock)],
    });
}

export function getBorrowRateDecimal(txb: TransactionBlock) {
    return txb.moveCall({ target: `${PUBLISHED_AT}::lp_pool::get_borrow_rate_decimal`, arguments: [] });
}

export interface GetCumulativeBorrowRateArgs {
    liquidityPool: ObjectArg;
    liquidityToken: ObjectArg;
}

export function getCumulativeBorrowRate(txb: TransactionBlock, args: GetCumulativeBorrowRateArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::get_cumulative_borrow_rate`,
        arguments: [obj(txb, args.liquidityPool), obj(txb, args.liquidityToken)],
    });
}

export interface GetLiquidityAmountArgs {
    registry: ObjectArg;
    index: bigint | TransactionArgument;
    liquidityToken: ObjectArg;
}

export function getLiquidityAmount(txb: TransactionBlock, args: GetLiquidityAmountArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::get_liquidity_amount`,
        arguments: [obj(txb, args.registry), pure(txb, args.index, `u64`), obj(txb, args.liquidityToken)],
    });
}

export interface GetLiquidityPoolArgs {
    registry: ObjectArg;
    index: bigint | TransactionArgument;
}

export function getLiquidityPool(txb: TransactionBlock, args: GetLiquidityPoolArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::get_liquidity_pool`,
        arguments: [obj(txb, args.registry), pure(txb, args.index, `u64`)],
    });
}

export interface GetLiquidityTokenDecimalArgs {
    registry: ObjectArg;
    index: bigint | TransactionArgument;
    liquidityToken: ObjectArg;
}

export function getLiquidityTokenDecimal(txb: TransactionBlock, args: GetLiquidityTokenDecimalArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::get_liquidity_token_decimal`,
        arguments: [obj(txb, args.registry), pure(txb, args.index, `u64`), obj(txb, args.liquidityToken)],
    });
}

export interface GetLpTokenTypeArgs {
    registry: ObjectArg;
    index: bigint | TransactionArgument;
}

export function getLpTokenType(txb: TransactionBlock, args: GetLpTokenTypeArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::get_lp_token_type`,
        arguments: [obj(txb, args.registry), pure(txb, args.index, `u64`)],
    });
}

export interface GetMutLiquidityPoolArgs {
    registry: ObjectArg;
    index: bigint | TransactionArgument;
}

export function getMutLiquidityPool(txb: TransactionBlock, args: GetMutLiquidityPoolArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::get_mut_liquidity_pool`,
        arguments: [obj(txb, args.registry), pure(txb, args.index, `u64`)],
    });
}

export interface GetMutTokenPoolArgs {
    liquidityPool: ObjectArg;
    tokenType: ObjectArg;
}

export function getMutTokenPool(txb: TransactionBlock, args: GetMutTokenPoolArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::get_mut_token_pool`,
        arguments: [obj(txb, args.liquidityPool), obj(txb, args.tokenType)],
    });
}

export interface GetTokenPoolArgs {
    liquidityPool: ObjectArg;
    tokenType: ObjectArg;
}

export function getTokenPool(txb: TransactionBlock, args: GetTokenPoolArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::get_token_pool`,
        arguments: [obj(txb, args.liquidityPool), obj(txb, args.tokenType)],
    });
}

export interface GetTokenPoolStateArgs {
    liquidityPool: ObjectArg;
    liquidityToken: ObjectArg;
}

export function getTokenPoolState(txb: TransactionBlock, args: GetTokenPoolStateArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::get_token_pool_state`,
        arguments: [obj(txb, args.liquidityPool), obj(txb, args.liquidityToken)],
    });
}

export function getTvlUsd(txb: TransactionBlock, liquidityPool: ObjectArg) {
    return txb.moveCall({ target: `${PUBLISHED_AT}::lp_pool::get_tvl_usd`, arguments: [obj(txb, liquidityPool)] });
}

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

export function mintLp(txb: TransactionBlock, typeArgs: [string, string], args: MintLpArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::mint_lp`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.version),
            obj(txb, args.registry),
            obj(txb, args.treasuryCaps),
            pure(txb, args.index, `u64`),
            obj(txb, args.pythState),
            obj(txb, args.oracle),
            obj(txb, args.coin),
            obj(txb, args.clock),
        ],
    });
}

export interface NewLiquidityPoolArgs {
    version: ObjectArg;
    registry: ObjectArg;
    lpTokenDecimal: bigint | TransactionArgument;
}

export function newLiquidityPool(txb: TransactionBlock, typeArg: string, args: NewLiquidityPoolArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::new_liquidity_pool`,
        typeArguments: [typeArg],
        arguments: [obj(txb, args.version), obj(txb, args.registry), pure(txb, args.lpTokenDecimal, `u64`)],
    });
}

export interface OracleMatchedArgs {
    liquidityPool: ObjectArg;
    tokenType: ObjectArg;
    oracleId: string | TransactionArgument;
}

export function oracleMatched(txb: TransactionBlock, args: OracleMatchedArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::oracle_matched`,
        arguments: [obj(txb, args.liquidityPool), obj(txb, args.tokenType), pure(txb, args.oracleId, `address`)],
    });
}

export interface OrderFilledArgs {
    liquidityPool: ObjectArg;
    addReserve: boolean | TransactionArgument;
    dReserve: bigint | TransactionArgument;
    feeBalance: ObjectArg;
}

export function orderFilled(txb: TransactionBlock, typeArg: string, args: OrderFilledArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::order_filled`,
        typeArguments: [typeArg],
        arguments: [
            obj(txb, args.liquidityPool),
            pure(txb, args.addReserve, `bool`),
            pure(txb, args.dReserve, `u64`),
            obj(txb, args.feeBalance),
        ],
    });
}

export interface PutCollateralArgs {
    liquidityPool: ObjectArg;
    collateral: ObjectArg;
    collateralOraclePrice: bigint | TransactionArgument;
    collateralOraclePriceDecimal: bigint | TransactionArgument;
}

export function putCollateral(txb: TransactionBlock, typeArg: string, args: PutCollateralArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::put_collateral`,
        typeArguments: [typeArg],
        arguments: [
            obj(txb, args.liquidityPool),
            obj(txb, args.collateral),
            pure(txb, args.collateralOraclePrice, `u64`),
            pure(txb, args.collateralOraclePriceDecimal, `u64`),
        ],
    });
}

export interface PutReceiptCollateralArgs {
    liquidityPool: ObjectArg;
    bidReceipt: ObjectArg;
}

export function putReceiptCollateral(txb: TransactionBlock, args: PutReceiptCollateralArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::put_receipt_collateral`,
        arguments: [obj(txb, args.liquidityPool), obj(txb, args.bidReceipt)],
    });
}

export interface RequestCollateralArgs {
    liquidityPool: ObjectArg;
    collateralAmount: bigint | TransactionArgument;
    collateralOraclePrice: bigint | TransactionArgument;
    collateralOraclePriceDecimal: bigint | TransactionArgument;
}

export function requestCollateral(txb: TransactionBlock, typeArg: string, args: RequestCollateralArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::request_collateral`,
        typeArguments: [typeArg],
        arguments: [
            obj(txb, args.liquidityPool),
            pure(txb, args.collateralAmount, `u64`),
            pure(txb, args.collateralOraclePrice, `u64`),
            pure(txb, args.collateralOraclePriceDecimal, `u64`),
        ],
    });
}

export interface ResumePoolArgs {
    version: ObjectArg;
    registry: ObjectArg;
    index: bigint | TransactionArgument;
}

export function resumePool(txb: TransactionBlock, args: ResumePoolArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::resume_pool`,
        arguments: [obj(txb, args.version), obj(txb, args.registry), pure(txb, args.index, `u64`)],
    });
}

export interface ResumeTokenPoolArgs {
    version: ObjectArg;
    registry: ObjectArg;
    index: bigint | TransactionArgument;
}

export function resumeTokenPool(txb: TransactionBlock, typeArg: string, args: ResumeTokenPoolArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::resume_token_pool`,
        typeArguments: [typeArg],
        arguments: [obj(txb, args.version), obj(txb, args.registry), pure(txb, args.index, `u64`)],
    });
}

export function safetyCheck(txb: TransactionBlock, liquidityPool: ObjectArg) {
    return txb.moveCall({ target: `${PUBLISHED_AT}::lp_pool::safety_check`, arguments: [obj(txb, liquidityPool)] });
}

export interface SuspendPoolArgs {
    version: ObjectArg;
    registry: ObjectArg;
    index: bigint | TransactionArgument;
}

export function suspendPool(txb: TransactionBlock, args: SuspendPoolArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::suspend_pool`,
        arguments: [obj(txb, args.version), obj(txb, args.registry), pure(txb, args.index, `u64`)],
    });
}

export interface SuspendTokenPoolArgs {
    version: ObjectArg;
    registry: ObjectArg;
    index: bigint | TransactionArgument;
}

export function suspendTokenPool(txb: TransactionBlock, typeArg: string, args: SuspendTokenPoolArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::suspend_token_pool`,
        typeArguments: [typeArg],
        arguments: [obj(txb, args.version), obj(txb, args.registry), pure(txb, args.index, `u64`)],
    });
}

export interface UpdateBorrowInfoArgs {
    version: ObjectArg;
    registry: ObjectArg;
    index: bigint | TransactionArgument;
    clock: ObjectArg;
}

export function updateBorrowInfo(txb: TransactionBlock, args: UpdateBorrowInfoArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::update_borrow_info`,
        arguments: [obj(txb, args.version), obj(txb, args.registry), pure(txb, args.index, `u64`), obj(txb, args.clock)],
    });
}

export interface UpdateLiquidityValueArgs {
    version: ObjectArg;
    registry: ObjectArg;
    index: bigint | TransactionArgument;
    pythState: ObjectArg;
    oracle: ObjectArg;
    clock: ObjectArg;
}

export function updateLiquidityValue(txb: TransactionBlock, typeArg: string, args: UpdateLiquidityValueArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::update_liquidity_value`,
        typeArguments: [typeArg],
        arguments: [
            obj(txb, args.version),
            obj(txb, args.registry),
            pure(txb, args.index, `u64`),
            obj(txb, args.pythState),
            obj(txb, args.oracle),
            obj(txb, args.clock),
        ],
    });
}

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

export function updateMarginConfig(txb: TransactionBlock, typeArg: string, args: UpdateMarginConfigArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::update_margin_config`,
        typeArguments: [typeArg],
        arguments: [
            obj(txb, args.version),
            obj(txb, args.registry),
            pure(txb, args.index, `u64`),
            pure(txb, args.basicBorrowRate0, `0x1::option::Option<u64>`),
            pure(txb, args.basicBorrowRate1, `0x1::option::Option<u64>`),
            pure(txb, args.basicBorrowRate2, `0x1::option::Option<u64>`),
            pure(txb, args.utilizationThresholdBp0, `0x1::option::Option<u64>`),
            pure(txb, args.utilizationThresholdBp1, `0x1::option::Option<u64>`),
            pure(txb, args.borrowIntervalTsMs, `0x1::option::Option<u64>`),
            pure(txb, args.maxOrderReserveRatioBp, `0x1::option::Option<u64>`),
        ],
    });
}

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

export function updateSpotConfig(txb: TransactionBlock, typeArg: string, args: UpdateSpotConfigArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::update_spot_config`,
        typeArguments: [typeArg],
        arguments: [
            obj(txb, args.version),
            obj(txb, args.registry),
            pure(txb, args.index, `u64`),
            pure(txb, args.targetWeightBp, `0x1::option::Option<u64>`),
            pure(txb, args.minDeposit, `0x1::option::Option<u64>`),
            pure(txb, args.maxCapacity, `0x1::option::Option<u64>`),
            pure(txb, args.basicMintFeeBp, `0x1::option::Option<u64>`),
            pure(txb, args.additionalMintFeeBp, `0x1::option::Option<u64>`),
            pure(txb, args.basicBurnFeeBp, `0x1::option::Option<u64>`),
            pure(txb, args.additionalBurnFeeBp, `0x1::option::Option<u64>`),
            pure(txb, args.swapFeeBp, `0x1::option::Option<u64>`),
            pure(txb, args.swapFeeProtocolShareBp, `0x1::option::Option<u64>`),
        ],
    });
}

export interface UpdateTvlArgs {
    version: ObjectArg;
    liquidityPool: ObjectArg;
    tokenType: ObjectArg;
    pythState: ObjectArg;
    oracle: ObjectArg;
    clock: ObjectArg;
}

export function updateTvl(txb: TransactionBlock, args: UpdateTvlArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::update_tvl`,
        arguments: [
            obj(txb, args.version),
            obj(txb, args.liquidityPool),
            obj(txb, args.tokenType),
            obj(txb, args.pythState),
            obj(txb, args.oracle),
            obj(txb, args.clock),
        ],
    });
}

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

export function viewSwapResult(txb: TransactionBlock, typeArgs: [string, string], args: ViewSwapResultArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::view_swap_result`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.version),
            obj(txb, args.registry),
            pure(txb, args.index, `u64`),
            obj(txb, args.pythState),
            obj(txb, args.oracleFromToken),
            obj(txb, args.oracleToToken),
            pure(txb, args.fromAmount, `u64`),
            obj(txb, args.clock),
        ],
    });
}
