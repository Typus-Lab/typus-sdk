"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swap = swap;
exports.init = init;
exports.addLiquidityToken = addLiquidityToken;
exports.burnLp = burnLp;
exports.calculateBurnLp = calculateBurnLp;
exports.calculateLpFee = calculateLpFee;
exports.calculateMintLp = calculateMintLp;
exports.calculateSwapFee = calculateSwapFee;
exports.checkTradingOrderSizeValid = checkTradingOrderSizeValid;
exports.checkTvlUpdated = checkTvlUpdated;
exports.getBorrowRateDecimal = getBorrowRateDecimal;
exports.getCumulativeBorrowRate = getCumulativeBorrowRate;
exports.getLiquidityAmount = getLiquidityAmount;
exports.getLiquidityPool = getLiquidityPool;
exports.getLiquidityTokenDecimal = getLiquidityTokenDecimal;
exports.getLpTokenType = getLpTokenType;
exports.getMutLiquidityPool = getMutLiquidityPool;
exports.getMutTokenPool = getMutTokenPool;
exports.getTokenPool = getTokenPool;
exports.getTokenPoolState = getTokenPoolState;
exports.getTvlUsd = getTvlUsd;
exports.mintLp = mintLp;
exports.newLiquidityPool = newLiquidityPool;
exports.oracleMatched = oracleMatched;
exports.orderFilled = orderFilled;
exports.putCollateral = putCollateral;
exports.putReceiptCollateral = putReceiptCollateral;
exports.requestCollateral = requestCollateral;
exports.resumePool = resumePool;
exports.resumeTokenPool = resumeTokenPool;
exports.safetyCheck = safetyCheck;
exports.suspendPool = suspendPool;
exports.suspendTokenPool = suspendTokenPool;
exports.updateBorrowInfo = updateBorrowInfo;
exports.updateLiquidityValue = updateLiquidityValue;
exports.updateMarginConfig = updateMarginConfig;
exports.updateSpotConfig = updateSpotConfig;
exports.updateTvl = updateTvl;
exports.viewSwapResult = viewSwapResult;
var __1 = require("..");
var util_1 = require("../../_framework/util");
function swap(txb, typeArgs, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::lp_pool::swap"),
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(txb, args.version),
            (0, util_1.obj)(txb, args.registry),
            (0, util_1.pure)(txb, args.index, "u64"),
            (0, util_1.obj)(txb, args.pythState),
            (0, util_1.obj)(txb, args.oracleFromToken),
            (0, util_1.obj)(txb, args.oracleToToken),
            (0, util_1.obj)(txb, args.fromCoin),
            (0, util_1.pure)(txb, args.minToAmount, "u64"),
            (0, util_1.obj)(txb, args.clock),
        ],
    });
}
function init(txb) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::lp_pool::init"), arguments: [] });
}
function addLiquidityToken(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::lp_pool::add_liquidity_token"),
        typeArguments: [typeArg],
        arguments: [
            (0, util_1.obj)(txb, args.version),
            (0, util_1.obj)(txb, args.registry),
            (0, util_1.pure)(txb, args.index, "u64"),
            (0, util_1.obj)(txb, args.oracle),
            (0, util_1.pure)(txb, args.tokenDecimal, "u64"),
            (0, util_1.pure)(txb, args.targetWeightBp, "u64"),
            (0, util_1.pure)(txb, args.minDeposit, "u64"),
            (0, util_1.pure)(txb, args.maxCapacity, "u64"),
            (0, util_1.pure)(txb, args.basicMintFeeBp, "u64"),
            (0, util_1.pure)(txb, args.additionalMintFeeBp, "u64"),
            (0, util_1.pure)(txb, args.basicBurnFeeBp, "u64"),
            (0, util_1.pure)(txb, args.additionalBurnFeeBp, "u64"),
            (0, util_1.pure)(txb, args.swapFeeBp, "u64"),
            (0, util_1.pure)(txb, args.swapFeeProtocolShareBp, "u64"),
            (0, util_1.pure)(txb, args.basicBorrowRate0, "u64"),
            (0, util_1.pure)(txb, args.basicBorrowRate1, "u64"),
            (0, util_1.pure)(txb, args.basicBorrowRate2, "u64"),
            (0, util_1.pure)(txb, args.utilizationThresholdBp0, "u64"),
            (0, util_1.pure)(txb, args.utilizationThresholdBp1, "u64"),
            (0, util_1.pure)(txb, args.borrowIntervalTsMs, "u64"),
            (0, util_1.pure)(txb, args.maxOrderReserveRatioBp, "u64"),
            (0, util_1.obj)(txb, args.clock),
        ],
    });
}
function burnLp(txb, typeArgs, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::lp_pool::burn_lp"),
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(txb, args.version),
            (0, util_1.obj)(txb, args.registry),
            (0, util_1.pure)(txb, args.index, "u64"),
            (0, util_1.obj)(txb, args.treasuryCaps),
            (0, util_1.obj)(txb, args.pythState),
            (0, util_1.obj)(txb, args.oracle),
            (0, util_1.obj)(txb, args.coin),
            (0, util_1.obj)(txb, args.clock),
        ],
    });
}
function calculateBurnLp(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::lp_pool::calculate_burn_lp"),
        arguments: [
            (0, util_1.obj)(txb, args.registry),
            (0, util_1.pure)(txb, args.index, "u64"),
            (0, util_1.obj)(txb, args.tokenType),
            (0, util_1.pure)(txb, args.price, "u64"),
            (0, util_1.pure)(txb, args.priceDecimal, "u64"),
            (0, util_1.pure)(txb, args.burnAmount, "u64"),
        ],
    });
}
function calculateLpFee(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::lp_pool::calculate_lp_fee"),
        arguments: [
            (0, util_1.obj)(txb, args.liquidityPool),
            (0, util_1.obj)(txb, args.tokenType),
            (0, util_1.pure)(txb, args.depositAmount, "u64"),
            (0, util_1.pure)(txb, args.depositAmountUsd, "u64"),
            (0, util_1.pure)(txb, args.isMint, "bool"),
        ],
    });
}
function calculateMintLp(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::lp_pool::calculate_mint_lp"),
        arguments: [
            (0, util_1.obj)(txb, args.registry),
            (0, util_1.pure)(txb, args.index, "u64"),
            (0, util_1.obj)(txb, args.tokenType),
            (0, util_1.pure)(txb, args.price, "u64"),
            (0, util_1.pure)(txb, args.priceDecimal, "u64"),
            (0, util_1.pure)(txb, args.depositAmount, "u64"),
        ],
    });
}
function calculateSwapFee(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::lp_pool::calculate_swap_fee"),
        arguments: [
            (0, util_1.obj)(txb, args.liquidityPool),
            (0, util_1.obj)(txb, args.tokenType),
            (0, util_1.pure)(txb, args.amount, "u64"),
            (0, util_1.pure)(txb, args.amountUsd, "u64"),
            (0, util_1.pure)(txb, args.swapIn, "bool"),
        ],
    });
}
function checkTradingOrderSizeValid(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::lp_pool::check_trading_order_size_valid"),
        arguments: [(0, util_1.obj)(txb, args.liquidityPool), (0, util_1.obj)(txb, args.liquidityToken), (0, util_1.pure)(txb, args.reserveAmount, "u64")],
    });
}
function checkTvlUpdated(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::lp_pool::check_tvl_updated"),
        arguments: [(0, util_1.obj)(txb, args.liquidityPool), (0, util_1.obj)(txb, args.clock)],
    });
}
function getBorrowRateDecimal(txb) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::lp_pool::get_borrow_rate_decimal"), arguments: [] });
}
function getCumulativeBorrowRate(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::lp_pool::get_cumulative_borrow_rate"),
        arguments: [(0, util_1.obj)(txb, args.liquidityPool), (0, util_1.obj)(txb, args.liquidityToken)],
    });
}
function getLiquidityAmount(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::lp_pool::get_liquidity_amount"),
        arguments: [(0, util_1.obj)(txb, args.registry), (0, util_1.pure)(txb, args.index, "u64"), (0, util_1.obj)(txb, args.liquidityToken)],
    });
}
function getLiquidityPool(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::lp_pool::get_liquidity_pool"),
        arguments: [(0, util_1.obj)(txb, args.registry), (0, util_1.pure)(txb, args.index, "u64")],
    });
}
function getLiquidityTokenDecimal(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::lp_pool::get_liquidity_token_decimal"),
        arguments: [(0, util_1.obj)(txb, args.registry), (0, util_1.pure)(txb, args.index, "u64"), (0, util_1.obj)(txb, args.liquidityToken)],
    });
}
function getLpTokenType(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::lp_pool::get_lp_token_type"),
        arguments: [(0, util_1.obj)(txb, args.registry), (0, util_1.pure)(txb, args.index, "u64")],
    });
}
function getMutLiquidityPool(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::lp_pool::get_mut_liquidity_pool"),
        arguments: [(0, util_1.obj)(txb, args.registry), (0, util_1.pure)(txb, args.index, "u64")],
    });
}
function getMutTokenPool(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::lp_pool::get_mut_token_pool"),
        arguments: [(0, util_1.obj)(txb, args.liquidityPool), (0, util_1.obj)(txb, args.tokenType)],
    });
}
function getTokenPool(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::lp_pool::get_token_pool"),
        arguments: [(0, util_1.obj)(txb, args.liquidityPool), (0, util_1.obj)(txb, args.tokenType)],
    });
}
function getTokenPoolState(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::lp_pool::get_token_pool_state"),
        arguments: [(0, util_1.obj)(txb, args.liquidityPool), (0, util_1.obj)(txb, args.liquidityToken)],
    });
}
function getTvlUsd(txb, liquidityPool) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::lp_pool::get_tvl_usd"), arguments: [(0, util_1.obj)(txb, liquidityPool)] });
}
function mintLp(txb, typeArgs, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::lp_pool::mint_lp"),
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(txb, args.version),
            (0, util_1.obj)(txb, args.registry),
            (0, util_1.obj)(txb, args.treasuryCaps),
            (0, util_1.pure)(txb, args.index, "u64"),
            (0, util_1.obj)(txb, args.pythState),
            (0, util_1.obj)(txb, args.oracle),
            (0, util_1.obj)(txb, args.coin),
            (0, util_1.obj)(txb, args.clock),
        ],
    });
}
function newLiquidityPool(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::lp_pool::new_liquidity_pool"),
        typeArguments: [typeArg],
        arguments: [(0, util_1.obj)(txb, args.version), (0, util_1.obj)(txb, args.registry), (0, util_1.pure)(txb, args.lpTokenDecimal, "u64")],
    });
}
function oracleMatched(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::lp_pool::oracle_matched"),
        arguments: [(0, util_1.obj)(txb, args.liquidityPool), (0, util_1.obj)(txb, args.tokenType), (0, util_1.pure)(txb, args.oracleId, "address")],
    });
}
function orderFilled(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::lp_pool::order_filled"),
        typeArguments: [typeArg],
        arguments: [
            (0, util_1.obj)(txb, args.liquidityPool),
            (0, util_1.pure)(txb, args.addReserve, "bool"),
            (0, util_1.pure)(txb, args.dReserve, "u64"),
            (0, util_1.obj)(txb, args.feeBalance),
        ],
    });
}
function putCollateral(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::lp_pool::put_collateral"),
        typeArguments: [typeArg],
        arguments: [
            (0, util_1.obj)(txb, args.liquidityPool),
            (0, util_1.obj)(txb, args.collateral),
            (0, util_1.pure)(txb, args.collateralOraclePrice, "u64"),
            (0, util_1.pure)(txb, args.collateralOraclePriceDecimal, "u64"),
        ],
    });
}
function putReceiptCollateral(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::lp_pool::put_receipt_collateral"),
        arguments: [(0, util_1.obj)(txb, args.liquidityPool), (0, util_1.obj)(txb, args.bidReceipt)],
    });
}
function requestCollateral(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::lp_pool::request_collateral"),
        typeArguments: [typeArg],
        arguments: [
            (0, util_1.obj)(txb, args.liquidityPool),
            (0, util_1.pure)(txb, args.collateralAmount, "u64"),
            (0, util_1.pure)(txb, args.collateralOraclePrice, "u64"),
            (0, util_1.pure)(txb, args.collateralOraclePriceDecimal, "u64"),
        ],
    });
}
function resumePool(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::lp_pool::resume_pool"),
        arguments: [(0, util_1.obj)(txb, args.version), (0, util_1.obj)(txb, args.registry), (0, util_1.pure)(txb, args.index, "u64")],
    });
}
function resumeTokenPool(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::lp_pool::resume_token_pool"),
        typeArguments: [typeArg],
        arguments: [(0, util_1.obj)(txb, args.version), (0, util_1.obj)(txb, args.registry), (0, util_1.pure)(txb, args.index, "u64")],
    });
}
function safetyCheck(txb, liquidityPool) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::lp_pool::safety_check"), arguments: [(0, util_1.obj)(txb, liquidityPool)] });
}
function suspendPool(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::lp_pool::suspend_pool"),
        arguments: [(0, util_1.obj)(txb, args.version), (0, util_1.obj)(txb, args.registry), (0, util_1.pure)(txb, args.index, "u64")],
    });
}
function suspendTokenPool(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::lp_pool::suspend_token_pool"),
        typeArguments: [typeArg],
        arguments: [(0, util_1.obj)(txb, args.version), (0, util_1.obj)(txb, args.registry), (0, util_1.pure)(txb, args.index, "u64")],
    });
}
function updateBorrowInfo(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::lp_pool::update_borrow_info"),
        arguments: [(0, util_1.obj)(txb, args.version), (0, util_1.obj)(txb, args.registry), (0, util_1.pure)(txb, args.index, "u64"), (0, util_1.obj)(txb, args.clock)],
    });
}
function updateLiquidityValue(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::lp_pool::update_liquidity_value"),
        typeArguments: [typeArg],
        arguments: [
            (0, util_1.obj)(txb, args.version),
            (0, util_1.obj)(txb, args.registry),
            (0, util_1.pure)(txb, args.index, "u64"),
            (0, util_1.obj)(txb, args.pythState),
            (0, util_1.obj)(txb, args.oracle),
            (0, util_1.obj)(txb, args.clock),
        ],
    });
}
function updateMarginConfig(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::lp_pool::update_margin_config"),
        typeArguments: [typeArg],
        arguments: [
            (0, util_1.obj)(txb, args.version),
            (0, util_1.obj)(txb, args.registry),
            (0, util_1.pure)(txb, args.index, "u64"),
            (0, util_1.pure)(txb, args.basicBorrowRate0, "0x1::option::Option<u64>"),
            (0, util_1.pure)(txb, args.basicBorrowRate1, "0x1::option::Option<u64>"),
            (0, util_1.pure)(txb, args.basicBorrowRate2, "0x1::option::Option<u64>"),
            (0, util_1.pure)(txb, args.utilizationThresholdBp0, "0x1::option::Option<u64>"),
            (0, util_1.pure)(txb, args.utilizationThresholdBp1, "0x1::option::Option<u64>"),
            (0, util_1.pure)(txb, args.borrowIntervalTsMs, "0x1::option::Option<u64>"),
            (0, util_1.pure)(txb, args.maxOrderReserveRatioBp, "0x1::option::Option<u64>"),
        ],
    });
}
function updateSpotConfig(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::lp_pool::update_spot_config"),
        typeArguments: [typeArg],
        arguments: [
            (0, util_1.obj)(txb, args.version),
            (0, util_1.obj)(txb, args.registry),
            (0, util_1.pure)(txb, args.index, "u64"),
            (0, util_1.pure)(txb, args.targetWeightBp, "0x1::option::Option<u64>"),
            (0, util_1.pure)(txb, args.minDeposit, "0x1::option::Option<u64>"),
            (0, util_1.pure)(txb, args.maxCapacity, "0x1::option::Option<u64>"),
            (0, util_1.pure)(txb, args.basicMintFeeBp, "0x1::option::Option<u64>"),
            (0, util_1.pure)(txb, args.additionalMintFeeBp, "0x1::option::Option<u64>"),
            (0, util_1.pure)(txb, args.basicBurnFeeBp, "0x1::option::Option<u64>"),
            (0, util_1.pure)(txb, args.additionalBurnFeeBp, "0x1::option::Option<u64>"),
            (0, util_1.pure)(txb, args.swapFeeBp, "0x1::option::Option<u64>"),
            (0, util_1.pure)(txb, args.swapFeeProtocolShareBp, "0x1::option::Option<u64>"),
        ],
    });
}
function updateTvl(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::lp_pool::update_tvl"),
        arguments: [
            (0, util_1.obj)(txb, args.version),
            (0, util_1.obj)(txb, args.liquidityPool),
            (0, util_1.obj)(txb, args.tokenType),
            (0, util_1.obj)(txb, args.pythState),
            (0, util_1.obj)(txb, args.oracle),
            (0, util_1.obj)(txb, args.clock),
        ],
    });
}
function viewSwapResult(txb, typeArgs, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::lp_pool::view_swap_result"),
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(txb, args.version),
            (0, util_1.obj)(txb, args.registry),
            (0, util_1.pure)(txb, args.index, "u64"),
            (0, util_1.obj)(txb, args.pythState),
            (0, util_1.obj)(txb, args.oracleFromToken),
            (0, util_1.obj)(txb, args.oracleToToken),
            (0, util_1.pure)(txb, args.fromAmount, "u64"),
            (0, util_1.obj)(txb, args.clock),
        ],
    });
}
