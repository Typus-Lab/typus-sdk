import { PUBLISHED_AT } from "..";
import { Option } from "../../_dependencies/source/0x1/option/structs";
import { obj, pure } from "../../_framework/util";
import { Transaction, TransactionArgument, TransactionObjectInput } from "@mysten/sui/transactions";

export interface SwapArgs {
    version: TransactionObjectInput;
    registry: TransactionObjectInput;
    index: bigint | TransactionArgument;
    pythState: TransactionObjectInput;
    oracleFromToken: TransactionObjectInput;
    oracleToToken: TransactionObjectInput;
    fromCoin: TransactionObjectInput;
    minToAmount: bigint | TransactionArgument;
    clock: TransactionObjectInput;
}

export function swap(tx: Transaction, typeArgs: [string, string], args: SwapArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::swap`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.version),
            obj(tx, args.registry),
            pure(tx, args.index, `u64`),
            obj(tx, args.pythState),
            obj(tx, args.oracleFromToken),
            obj(tx, args.oracleToToken),
            obj(tx, args.fromCoin),
            pure(tx, args.minToAmount, `u64`),
            obj(tx, args.clock),
        ],
    });
}

export function init(tx: Transaction) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::init`,
        arguments: [],
    });
}

export interface AddLiquidityTokenArgs {
    version: TransactionObjectInput;
    registry: TransactionObjectInput;
    index: bigint | TransactionArgument;
    oracle: TransactionObjectInput;
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
    clock: TransactionObjectInput;
}

export function addLiquidityToken(tx: Transaction, typeArg: string, args: AddLiquidityTokenArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::add_liquidity_token`,
        typeArguments: [typeArg],
        arguments: [
            obj(tx, args.version),
            obj(tx, args.registry),
            pure(tx, args.index, `u64`),
            obj(tx, args.oracle),
            pure(tx, args.tokenDecimal, `u64`),
            pure(tx, args.targetWeightBp, `u64`),
            pure(tx, args.minDeposit, `u64`),
            pure(tx, args.maxCapacity, `u64`),
            pure(tx, args.basicMintFeeBp, `u64`),
            pure(tx, args.additionalMintFeeBp, `u64`),
            pure(tx, args.basicBurnFeeBp, `u64`),
            pure(tx, args.additionalBurnFeeBp, `u64`),
            pure(tx, args.swapFeeBp, `u64`),
            pure(tx, args.swapFeeProtocolShareBp, `u64`),
            pure(tx, args.basicBorrowRate0, `u64`),
            pure(tx, args.basicBorrowRate1, `u64`),
            pure(tx, args.basicBorrowRate2, `u64`),
            pure(tx, args.utilizationThresholdBp0, `u64`),
            pure(tx, args.utilizationThresholdBp1, `u64`),
            pure(tx, args.borrowIntervalTsMs, `u64`),
            pure(tx, args.maxOrderReserveRatioBp, `u64`),
            obj(tx, args.clock),
        ],
    });
}

export interface BurnLpArgs {
    version: TransactionObjectInput;
    registry: TransactionObjectInput;
    index: bigint | TransactionArgument;
    treasuryCaps: TransactionObjectInput;
    pythState: TransactionObjectInput;
    oracle: TransactionObjectInput;
    coin: TransactionObjectInput;
    clock: TransactionObjectInput;
}

export function burnLp(tx: Transaction, typeArgs: [string, string], args: BurnLpArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::burn_lp`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.version),
            obj(tx, args.registry),
            pure(tx, args.index, `u64`),
            obj(tx, args.treasuryCaps),
            obj(tx, args.pythState),
            obj(tx, args.oracle),
            obj(tx, args.coin),
            obj(tx, args.clock),
        ],
    });
}

export interface CalculateBurnLpArgs {
    registry: TransactionObjectInput;
    index: bigint | TransactionArgument;
    tokenType: TransactionObjectInput;
    price: bigint | TransactionArgument;
    priceDecimal: bigint | TransactionArgument;
    burnAmount: bigint | TransactionArgument;
}

export function calculateBurnLp(tx: Transaction, args: CalculateBurnLpArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::calculate_burn_lp`,
        arguments: [
            obj(tx, args.registry),
            pure(tx, args.index, `u64`),
            obj(tx, args.tokenType),
            pure(tx, args.price, `u64`),
            pure(tx, args.priceDecimal, `u64`),
            pure(tx, args.burnAmount, `u64`),
        ],
    });
}

export interface CalculateLpFeeArgs {
    liquidityPool: TransactionObjectInput;
    tokenType: TransactionObjectInput;
    depositAmount: bigint | TransactionArgument;
    depositAmountUsd: bigint | TransactionArgument;
    isMint: boolean | TransactionArgument;
}

export function calculateLpFee(tx: Transaction, args: CalculateLpFeeArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::calculate_lp_fee`,
        arguments: [
            obj(tx, args.liquidityPool),
            obj(tx, args.tokenType),
            pure(tx, args.depositAmount, `u64`),
            pure(tx, args.depositAmountUsd, `u64`),
            pure(tx, args.isMint, `bool`),
        ],
    });
}

export interface CalculateMintLpArgs {
    registry: TransactionObjectInput;
    index: bigint | TransactionArgument;
    tokenType: TransactionObjectInput;
    price: bigint | TransactionArgument;
    priceDecimal: bigint | TransactionArgument;
    depositAmount: bigint | TransactionArgument;
}

export function calculateMintLp(tx: Transaction, args: CalculateMintLpArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::calculate_mint_lp`,
        arguments: [
            obj(tx, args.registry),
            pure(tx, args.index, `u64`),
            obj(tx, args.tokenType),
            pure(tx, args.price, `u64`),
            pure(tx, args.priceDecimal, `u64`),
            pure(tx, args.depositAmount, `u64`),
        ],
    });
}

export interface CalculateSwapFeeArgs {
    liquidityPool: TransactionObjectInput;
    tokenType: TransactionObjectInput;
    amount: bigint | TransactionArgument;
    amountUsd: bigint | TransactionArgument;
    swapIn: boolean | TransactionArgument;
}

export function calculateSwapFee(tx: Transaction, args: CalculateSwapFeeArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::calculate_swap_fee`,
        arguments: [
            obj(tx, args.liquidityPool),
            obj(tx, args.tokenType),
            pure(tx, args.amount, `u64`),
            pure(tx, args.amountUsd, `u64`),
            pure(tx, args.swapIn, `bool`),
        ],
    });
}

export interface CheckRemoveLiquidityTokenProcessStatusArgs {
    process: TransactionObjectInput;
    statusCode: bigint | TransactionArgument;
}

export function checkRemoveLiquidityTokenProcessStatus(tx: Transaction, args: CheckRemoveLiquidityTokenProcessStatusArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::check_remove_liquidity_token_process_status`,
        arguments: [obj(tx, args.process), pure(tx, args.statusCode, `u64`)],
    });
}

export interface CheckTokenPoolInactiveArgs {
    registry: TransactionObjectInput;
    index: bigint | TransactionArgument;
}

export function checkTokenPoolInactive(tx: Transaction, typeArg: string, args: CheckTokenPoolInactiveArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::check_token_pool_inactive`,
        typeArguments: [typeArg],
        arguments: [obj(tx, args.registry), pure(tx, args.index, `u64`)],
    });
}

export interface CheckTradingOrderSizeValidArgs {
    liquidityPool: TransactionObjectInput;
    liquidityToken: TransactionObjectInput;
    reserveAmount: bigint | TransactionArgument;
}

export function checkTradingOrderSizeValid(tx: Transaction, args: CheckTradingOrderSizeValidArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::check_trading_order_size_valid`,
        arguments: [obj(tx, args.liquidityPool), obj(tx, args.liquidityToken), pure(tx, args.reserveAmount, `u64`)],
    });
}

export interface CheckTvlUpdatedArgs {
    liquidityPool: TransactionObjectInput;
    clock: TransactionObjectInput;
}

export function checkTvlUpdated(tx: Transaction, args: CheckTvlUpdatedArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::check_tvl_updated`,
        arguments: [obj(tx, args.liquidityPool), obj(tx, args.clock)],
    });
}

export interface CompleteRemoveLiquidityTokenProcessArgs {
    version: TransactionObjectInput;
    registry: TransactionObjectInput;
    index: bigint | TransactionArgument;
    process: TransactionObjectInput;
}

export function completeRemoveLiquidityTokenProcess(tx: Transaction, typeArg: string, args: CompleteRemoveLiquidityTokenProcessArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::complete_remove_liquidity_token_process`,
        typeArguments: [typeArg],
        arguments: [obj(tx, args.version), obj(tx, args.registry), pure(tx, args.index, `u64`), obj(tx, args.process)],
    });
}

export function getBorrowRateDecimal(tx: Transaction) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::get_borrow_rate_decimal`,
        arguments: [],
    });
}

export interface GetCumulativeBorrowRateArgs {
    liquidityPool: TransactionObjectInput;
    liquidityToken: TransactionObjectInput;
}

export function getCumulativeBorrowRate(tx: Transaction, args: GetCumulativeBorrowRateArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::get_cumulative_borrow_rate`,
        arguments: [obj(tx, args.liquidityPool), obj(tx, args.liquidityToken)],
    });
}

export interface GetLiquidityAmountArgs {
    registry: TransactionObjectInput;
    index: bigint | TransactionArgument;
    liquidityToken: TransactionObjectInput;
}

export function getLiquidityAmount(tx: Transaction, args: GetLiquidityAmountArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::get_liquidity_amount`,
        arguments: [obj(tx, args.registry), pure(tx, args.index, `u64`), obj(tx, args.liquidityToken)],
    });
}

export interface GetLiquidityPoolArgs {
    registry: TransactionObjectInput;
    index: bigint | TransactionArgument;
}

export function getLiquidityPool(tx: Transaction, args: GetLiquidityPoolArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::get_liquidity_pool`,
        arguments: [obj(tx, args.registry), pure(tx, args.index, `u64`)],
    });
}

export interface GetLiquidityTokenDecimalArgs {
    registry: TransactionObjectInput;
    index: bigint | TransactionArgument;
    liquidityToken: TransactionObjectInput;
}

export function getLiquidityTokenDecimal(tx: Transaction, args: GetLiquidityTokenDecimalArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::get_liquidity_token_decimal`,
        arguments: [obj(tx, args.registry), pure(tx, args.index, `u64`), obj(tx, args.liquidityToken)],
    });
}

export interface GetLpTokenTypeArgs {
    registry: TransactionObjectInput;
    index: bigint | TransactionArgument;
}

export function getLpTokenType(tx: Transaction, args: GetLpTokenTypeArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::get_lp_token_type`,
        arguments: [obj(tx, args.registry), pure(tx, args.index, `u64`)],
    });
}

export interface GetMutLiquidityPoolArgs {
    registry: TransactionObjectInput;
    index: bigint | TransactionArgument;
}

export function getMutLiquidityPool(tx: Transaction, args: GetMutLiquidityPoolArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::get_mut_liquidity_pool`,
        arguments: [obj(tx, args.registry), pure(tx, args.index, `u64`)],
    });
}

export interface GetMutTokenPoolArgs {
    liquidityPool: TransactionObjectInput;
    tokenType: TransactionObjectInput;
}

export function getMutTokenPool(tx: Transaction, args: GetMutTokenPoolArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::get_mut_token_pool`,
        arguments: [obj(tx, args.liquidityPool), obj(tx, args.tokenType)],
    });
}

export interface GetRemoveLiquidityTokenProcessTokenArgs {
    process: TransactionObjectInput;
    updatePositionToken: boolean | TransactionArgument;
}

export function getRemoveLiquidityTokenProcessToken(tx: Transaction, args: GetRemoveLiquidityTokenProcessTokenArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::get_remove_liquidity_token_process_token`,
        arguments: [obj(tx, args.process), pure(tx, args.updatePositionToken, `bool`)],
    });
}

export interface GetTokenPoolArgs {
    liquidityPool: TransactionObjectInput;
    tokenType: TransactionObjectInput;
}

export function getTokenPool(tx: Transaction, args: GetTokenPoolArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::get_token_pool`,
        arguments: [obj(tx, args.liquidityPool), obj(tx, args.tokenType)],
    });
}

export interface GetTokenPoolStateArgs {
    liquidityPool: TransactionObjectInput;
    liquidityToken: TransactionObjectInput;
}

export function getTokenPoolState(tx: Transaction, args: GetTokenPoolStateArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::get_token_pool_state`,
        arguments: [obj(tx, args.liquidityPool), obj(tx, args.liquidityToken)],
    });
}

export function getTvlUsd(tx: Transaction, liquidityPool: TransactionObjectInput) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::get_tvl_usd`,
        arguments: [obj(tx, liquidityPool)],
    });
}

export interface ManagerFlashRemoveLiquidityArgs {
    version: TransactionObjectInput;
    registry: TransactionObjectInput;
    index: bigint | TransactionArgument;
    pythState: TransactionObjectInput;
    oracle: TransactionObjectInput;
    process: TransactionObjectInput;
    clock: TransactionObjectInput;
}

export function managerFlashRemoveLiquidity(tx: Transaction, typeArg: string, args: ManagerFlashRemoveLiquidityArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::manager_flash_remove_liquidity`,
        typeArguments: [typeArg],
        arguments: [
            obj(tx, args.version),
            obj(tx, args.registry),
            pure(tx, args.index, `u64`),
            obj(tx, args.pythState),
            obj(tx, args.oracle),
            obj(tx, args.process),
            obj(tx, args.clock),
        ],
    });
}

export interface ManagerFlashRepayLiquidityArgs {
    version: TransactionObjectInput;
    registry: TransactionObjectInput;
    index: bigint | TransactionArgument;
    pythState: TransactionObjectInput;
    oracle: TransactionObjectInput;
    process: TransactionObjectInput;
    balance: TransactionObjectInput;
    clock: TransactionObjectInput;
}

export function managerFlashRepayLiquidity(tx: Transaction, typeArg: string, args: ManagerFlashRepayLiquidityArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::manager_flash_repay_liquidity`,
        typeArguments: [typeArg],
        arguments: [
            obj(tx, args.version),
            obj(tx, args.registry),
            pure(tx, args.index, `u64`),
            obj(tx, args.pythState),
            obj(tx, args.oracle),
            obj(tx, args.process),
            obj(tx, args.balance),
            obj(tx, args.clock),
        ],
    });
}

export interface MintLpArgs {
    version: TransactionObjectInput;
    registry: TransactionObjectInput;
    treasuryCaps: TransactionObjectInput;
    index: bigint | TransactionArgument;
    pythState: TransactionObjectInput;
    oracle: TransactionObjectInput;
    coin: TransactionObjectInput;
    clock: TransactionObjectInput;
}

export function mintLp(tx: Transaction, typeArgs: [string, string], args: MintLpArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::mint_lp`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.version),
            obj(tx, args.registry),
            obj(tx, args.treasuryCaps),
            pure(tx, args.index, `u64`),
            obj(tx, args.pythState),
            obj(tx, args.oracle),
            obj(tx, args.coin),
            obj(tx, args.clock),
        ],
    });
}

export interface NewLiquidityPoolArgs {
    version: TransactionObjectInput;
    registry: TransactionObjectInput;
    lpTokenDecimal: bigint | TransactionArgument;
}

export function newLiquidityPool(tx: Transaction, typeArg: string, args: NewLiquidityPoolArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::new_liquidity_pool`,
        typeArguments: [typeArg],
        arguments: [obj(tx, args.version), obj(tx, args.registry), pure(tx, args.lpTokenDecimal, `u64`)],
    });
}

export interface OracleMatchedArgs {
    liquidityPool: TransactionObjectInput;
    tokenType: TransactionObjectInput;
    oracleId: string | TransactionArgument;
}

export function oracleMatched(tx: Transaction, args: OracleMatchedArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::oracle_matched`,
        arguments: [obj(tx, args.liquidityPool), obj(tx, args.tokenType), pure(tx, args.oracleId, `address`)],
    });
}

export interface OrderFilledArgs {
    liquidityPool: TransactionObjectInput;
    addReserve: boolean | TransactionArgument;
    dReserve: bigint | TransactionArgument;
    feeBalance: TransactionObjectInput;
}

export function orderFilled(tx: Transaction, typeArg: string, args: OrderFilledArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::order_filled`,
        typeArguments: [typeArg],
        arguments: [
            obj(tx, args.liquidityPool),
            pure(tx, args.addReserve, `bool`),
            pure(tx, args.dReserve, `u64`),
            obj(tx, args.feeBalance),
        ],
    });
}

export interface PutCollateralArgs {
    liquidityPool: TransactionObjectInput;
    collateral: TransactionObjectInput;
    collateralOraclePrice: bigint | TransactionArgument;
    collateralOraclePriceDecimal: bigint | TransactionArgument;
}

export function putCollateral(tx: Transaction, typeArg: string, args: PutCollateralArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::put_collateral`,
        typeArguments: [typeArg],
        arguments: [
            obj(tx, args.liquidityPool),
            obj(tx, args.collateral),
            pure(tx, args.collateralOraclePrice, `u64`),
            pure(tx, args.collateralOraclePriceDecimal, `u64`),
        ],
    });
}

export interface PutReceiptCollateralArgs {
    liquidityPool: TransactionObjectInput;
    bidReceipt: TransactionObjectInput;
}

export function putReceiptCollateral(tx: Transaction, args: PutReceiptCollateralArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::put_receipt_collateral`,
        arguments: [obj(tx, args.liquidityPool), obj(tx, args.bidReceipt)],
    });
}

export interface RequestCollateralArgs {
    liquidityPool: TransactionObjectInput;
    collateralAmount: bigint | TransactionArgument;
    collateralOraclePrice: bigint | TransactionArgument;
    collateralOraclePriceDecimal: bigint | TransactionArgument;
}

export function requestCollateral(tx: Transaction, typeArg: string, args: RequestCollateralArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::request_collateral`,
        typeArguments: [typeArg],
        arguments: [
            obj(tx, args.liquidityPool),
            pure(tx, args.collateralAmount, `u64`),
            pure(tx, args.collateralOraclePrice, `u64`),
            pure(tx, args.collateralOraclePriceDecimal, `u64`),
        ],
    });
}

export interface ResumePoolArgs {
    version: TransactionObjectInput;
    registry: TransactionObjectInput;
    index: bigint | TransactionArgument;
}

export function resumePool(tx: Transaction, args: ResumePoolArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::resume_pool`,
        arguments: [obj(tx, args.version), obj(tx, args.registry), pure(tx, args.index, `u64`)],
    });
}

export interface ResumeTokenPoolArgs {
    version: TransactionObjectInput;
    registry: TransactionObjectInput;
    index: bigint | TransactionArgument;
}

export function resumeTokenPool(tx: Transaction, typeArg: string, args: ResumeTokenPoolArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::resume_token_pool`,
        typeArguments: [typeArg],
        arguments: [obj(tx, args.version), obj(tx, args.registry), pure(tx, args.index, `u64`)],
    });
}

export function safetyCheck(tx: Transaction, liquidityPool: TransactionObjectInput) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::safety_check`,
        arguments: [obj(tx, liquidityPool)],
    });
}

export interface StartRemoveLiquidityTokenProcessArgs {
    version: TransactionObjectInput;
    registry: TransactionObjectInput;
    index: bigint | TransactionArgument;
    oracle: TransactionObjectInput;
}

export function startRemoveLiquidityTokenProcess(tx: Transaction, typeArg: string, args: StartRemoveLiquidityTokenProcessArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::start_remove_liquidity_token_process`,
        typeArguments: [typeArg],
        arguments: [obj(tx, args.version), obj(tx, args.registry), pure(tx, args.index, `u64`), obj(tx, args.oracle)],
    });
}

export interface SuspendPoolArgs {
    version: TransactionObjectInput;
    registry: TransactionObjectInput;
    index: bigint | TransactionArgument;
}

export function suspendPool(tx: Transaction, args: SuspendPoolArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::suspend_pool`,
        arguments: [obj(tx, args.version), obj(tx, args.registry), pure(tx, args.index, `u64`)],
    });
}

export interface SuspendTokenPoolArgs {
    version: TransactionObjectInput;
    registry: TransactionObjectInput;
    index: bigint | TransactionArgument;
}

export function suspendTokenPool(tx: Transaction, typeArg: string, args: SuspendTokenPoolArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::suspend_token_pool`,
        typeArguments: [typeArg],
        arguments: [obj(tx, args.version), obj(tx, args.registry), pure(tx, args.index, `u64`)],
    });
}

export interface UpdateBorrowInfoArgs {
    version: TransactionObjectInput;
    registry: TransactionObjectInput;
    index: bigint | TransactionArgument;
    clock: TransactionObjectInput;
}

export function updateBorrowInfo(tx: Transaction, args: UpdateBorrowInfoArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::update_borrow_info`,
        arguments: [obj(tx, args.version), obj(tx, args.registry), pure(tx, args.index, `u64`), obj(tx, args.clock)],
    });
}

export interface UpdateLiquidityValueArgs {
    version: TransactionObjectInput;
    registry: TransactionObjectInput;
    index: bigint | TransactionArgument;
    pythState: TransactionObjectInput;
    oracle: TransactionObjectInput;
    clock: TransactionObjectInput;
}

export function updateLiquidityValue(tx: Transaction, typeArg: string, args: UpdateLiquidityValueArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::update_liquidity_value`,
        typeArguments: [typeArg],
        arguments: [
            obj(tx, args.version),
            obj(tx, args.registry),
            pure(tx, args.index, `u64`),
            obj(tx, args.pythState),
            obj(tx, args.oracle),
            obj(tx, args.clock),
        ],
    });
}

export interface UpdateMarginConfigArgs {
    version: TransactionObjectInput;
    registry: TransactionObjectInput;
    index: bigint | TransactionArgument;
    basicBorrowRate0: bigint | TransactionArgument | TransactionArgument | null;
    basicBorrowRate1: bigint | TransactionArgument | TransactionArgument | null;
    basicBorrowRate2: bigint | TransactionArgument | TransactionArgument | null;
    utilizationThresholdBp0: bigint | TransactionArgument | TransactionArgument | null;
    utilizationThresholdBp1: bigint | TransactionArgument | TransactionArgument | null;
    borrowIntervalTsMs: bigint | TransactionArgument | TransactionArgument | null;
    maxOrderReserveRatioBp: bigint | TransactionArgument | TransactionArgument | null;
}

export function updateMarginConfig(tx: Transaction, typeArg: string, args: UpdateMarginConfigArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::update_margin_config`,
        typeArguments: [typeArg],
        arguments: [
            obj(tx, args.version),
            obj(tx, args.registry),
            pure(tx, args.index, `u64`),
            pure(tx, args.basicBorrowRate0, `${Option.$typeName}<u64>`),
            pure(tx, args.basicBorrowRate1, `${Option.$typeName}<u64>`),
            pure(tx, args.basicBorrowRate2, `${Option.$typeName}<u64>`),
            pure(tx, args.utilizationThresholdBp0, `${Option.$typeName}<u64>`),
            pure(tx, args.utilizationThresholdBp1, `${Option.$typeName}<u64>`),
            pure(tx, args.borrowIntervalTsMs, `${Option.$typeName}<u64>`),
            pure(tx, args.maxOrderReserveRatioBp, `${Option.$typeName}<u64>`),
        ],
    });
}

export interface UpdateRemoveLiquidityTokenProcessStatusArgs {
    process: TransactionObjectInput;
    targetStatusCode: bigint | TransactionArgument;
}

export function updateRemoveLiquidityTokenProcessStatus(tx: Transaction, args: UpdateRemoveLiquidityTokenProcessStatusArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::update_remove_liquidity_token_process_status`,
        arguments: [obj(tx, args.process), pure(tx, args.targetStatusCode, `u64`)],
    });
}

export interface UpdateRemoveLiquidityTokenProcessTokenArgs {
    process: TransactionObjectInput;
    updatePositionToken: boolean | TransactionArgument;
}

export function updateRemoveLiquidityTokenProcessToken(tx: Transaction, typeArg: string, args: UpdateRemoveLiquidityTokenProcessTokenArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::update_remove_liquidity_token_process_token`,
        typeArguments: [typeArg],
        arguments: [obj(tx, args.process), pure(tx, args.updatePositionToken, `bool`)],
    });
}

export interface UpdateSpotConfigArgs {
    version: TransactionObjectInput;
    registry: TransactionObjectInput;
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

export function updateSpotConfig(tx: Transaction, typeArg: string, args: UpdateSpotConfigArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::update_spot_config`,
        typeArguments: [typeArg],
        arguments: [
            obj(tx, args.version),
            obj(tx, args.registry),
            pure(tx, args.index, `u64`),
            pure(tx, args.targetWeightBp, `${Option.$typeName}<u64>`),
            pure(tx, args.minDeposit, `${Option.$typeName}<u64>`),
            pure(tx, args.maxCapacity, `${Option.$typeName}<u64>`),
            pure(tx, args.basicMintFeeBp, `${Option.$typeName}<u64>`),
            pure(tx, args.additionalMintFeeBp, `${Option.$typeName}<u64>`),
            pure(tx, args.basicBurnFeeBp, `${Option.$typeName}<u64>`),
            pure(tx, args.additionalBurnFeeBp, `${Option.$typeName}<u64>`),
            pure(tx, args.swapFeeBp, `${Option.$typeName}<u64>`),
            pure(tx, args.swapFeeProtocolShareBp, `${Option.$typeName}<u64>`),
        ],
    });
}

export interface UpdateTvlArgs {
    version: TransactionObjectInput;
    liquidityPool: TransactionObjectInput;
    tokenType: TransactionObjectInput;
    pythState: TransactionObjectInput;
    oracle: TransactionObjectInput;
    clock: TransactionObjectInput;
}

export function updateTvl(tx: Transaction, args: UpdateTvlArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::update_tvl`,
        arguments: [
            obj(tx, args.version),
            obj(tx, args.liquidityPool),
            obj(tx, args.tokenType),
            obj(tx, args.pythState),
            obj(tx, args.oracle),
            obj(tx, args.clock),
        ],
    });
}

export interface ViewSwapResultArgs {
    version: TransactionObjectInput;
    registry: TransactionObjectInput;
    index: bigint | TransactionArgument;
    pythState: TransactionObjectInput;
    oracleFromToken: TransactionObjectInput;
    oracleToToken: TransactionObjectInput;
    fromAmount: bigint | TransactionArgument;
    clock: TransactionObjectInput;
}

export function viewSwapResult(tx: Transaction, typeArgs: [string, string], args: ViewSwapResultArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::lp_pool::view_swap_result`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.version),
            obj(tx, args.registry),
            pure(tx, args.index, `u64`),
            obj(tx, args.pythState),
            obj(tx, args.oracleFromToken),
            obj(tx, args.oracleToToken),
            pure(tx, args.fromAmount, `u64`),
            obj(tx, args.clock),
        ],
    });
}
