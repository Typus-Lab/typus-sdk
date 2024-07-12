"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitBidReceipt = splitBidReceipt;
exports.orderFilled = orderFilled;
exports.addPositionLinkedOrderInfo = addPositionLinkedOrderInfo;
exports.calculateFilled_ = calculateFilled_;
exports.calculateIntrinsicValue = calculateIntrinsicValue;
exports.calculateRealizedPnlUsd = calculateRealizedPnlUsd;
exports.calculateTradingFee = calculateTradingFee;
exports.calculateUnrealizedPnl = calculateUnrealizedPnl;
exports.checkOptionCollateralPositionLiquidated = checkOptionCollateralPositionLiquidated;
exports.checkOrderFilled = checkOrderFilled;
exports.checkPositionLiquidated = checkPositionLiquidated;
exports.collateralWithPnl = collateralWithPnl;
exports.createOrder = createOrder;
exports.createOrderWithBidReceipts = createOrderWithBidReceipts;
exports.emitRealizedFundingEvent = emitRealizedFundingEvent;
exports.getEstimatedLiquidationPrice = getEstimatedLiquidationPrice;
exports.getMaxOrderTypeTag = getMaxOrderTypeTag;
exports.getOptionCollateralOrderCollateralAmount = getOptionCollateralOrderCollateralAmount;
exports.getOptionPositionCollateralAmount = getOptionPositionCollateralAmount;
exports.getOptionPositionPortfolioIndex = getOptionPositionPortfolioIndex;
exports.getOrderCollateralAmount = getOrderCollateralAmount;
exports.getOrderCollateralToken = getOrderCollateralToken;
exports.getOrderCollateralTokenDecimal = getOrderCollateralTokenDecimal;
exports.getOrderFilledFee = getOrderFilledFee;
exports.getOrderId = getOrderId;
exports.getOrderLinkedPositionId = getOrderLinkedPositionId;
exports.getOrderPortfolioIndex = getOrderPortfolioIndex;
exports.getOrderPrice = getOrderPrice;
exports.getOrderReduceOnly = getOrderReduceOnly;
exports.getOrderSide = getOrderSide;
exports.getOrderSize = getOrderSize;
exports.getOrderTradingSymbol = getOrderTradingSymbol;
exports.getOrderTypeTag = getOrderTypeTag;
exports.getOrderUser = getOrderUser;
exports.getPositionCollateralAmount = getPositionCollateralAmount;
exports.getPositionCollateralTokenDecimal = getPositionCollateralTokenDecimal;
exports.getPositionCollateralTokenType = getPositionCollateralTokenType;
exports.getPositionId = getPositionId;
exports.getPositionSide = getPositionSide;
exports.getPositionSize = getPositionSize;
exports.getPositionSizeDecimal = getPositionSizeDecimal;
exports.getPositionSymbol = getPositionSymbol;
exports.getPositionUnrealizedCost = getPositionUnrealizedCost;
exports.getPositionUnrealizedFundingSign = getPositionUnrealizedFundingSign;
exports.getPositionUser = getPositionUser;
exports.getReserveAmount = getReserveAmount;
exports.increaseCollateral = increaseCollateral;
exports.isOptionCollateralOrder = isOptionCollateralOrder;
exports.isOptionCollateralPosition = isOptionCollateralPosition;
exports.managerCreateReduceOnlyOrder = managerCreateReduceOnlyOrder;
exports.maxReleasingCollateralAmount = maxReleasingCollateralAmount;
exports.orderFilledWithBidReceiptsCollateral = orderFilledWithBidReceiptsCollateral;
exports.realizeFunding = realizeFunding;
exports.releaseCollateral = releaseCollateral;
exports.removeOrder = removeOrder;
exports.removeOrderWithBidReceipts = removeOrderWithBidReceipts;
exports.removePosition = removePosition;
exports.removePositionLinkedOrderInfo = removePositionLinkedOrderInfo;
exports.removePositionWithBidReceipts = removePositionWithBidReceipts;
exports.updatePositionBorrowRate = updatePositionBorrowRate;
exports.updatePositionFundingRate = updatePositionFundingRate;
var __1 = require("..");
var util_1 = require("../../_framework/util");
function splitBidReceipt(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::position::split_bid_receipt"),
        arguments: [(0, util_1.obj)(txb, args.dovRegistry), (0, util_1.obj)(txb, args.position), (0, util_1.pure)(txb, args.size, "u64")],
    });
}
function orderFilled(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::position::order_filled"),
        typeArguments: [typeArg],
        arguments: [
            (0, util_1.obj)(txb, args.version),
            (0, util_1.obj)(txb, args.order),
            (0, util_1.option)(txb, "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::position::Position", args.originalPosition),
            (0, util_1.pure)(txb, args.nextPositionId, "u64"),
            (0, util_1.pure)(txb, args.collateralOraclePrice, "u64"),
            (0, util_1.pure)(txb, args.collateralOraclePriceDecimal, "u64"),
            (0, util_1.pure)(txb, args.tradingPairOraclePrice, "u64"),
            (0, util_1.pure)(txb, args.tradingPairOraclePriceDecimal, "u64"),
            (0, util_1.pure)(txb, args.cumulativeBorrowRate, "u64"),
            (0, util_1.pure)(txb, args.cumulativeFundingRateIndexSign, "bool"),
            (0, util_1.pure)(txb, args.cumulativeFundingRateIndex, "u64"),
            (0, util_1.pure)(txb, args.tradingFeeRate, "u64"),
            (0, util_1.pure)(txb, args.tradingFeeDecimal, "u64"),
            (0, util_1.obj)(txb, args.clock),
        ],
    });
}
function addPositionLinkedOrderInfo(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::position::add_position_linked_order_info"),
        arguments: [(0, util_1.obj)(txb, args.position), (0, util_1.pure)(txb, args.linkedOrderId, "u64"), (0, util_1.pure)(txb, args.linkedOrderPrice, "u64")],
    });
}
function calculateFilled_(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::position::calculate_filled_"),
        arguments: [
            (0, util_1.obj)(txb, args.position),
            (0, util_1.pure)(txb, args.reduceOnly, "bool"),
            (0, util_1.pure)(txb, args.orderSide, "bool"),
            (0, util_1.pure)(txb, args.orderSize, "u64"),
            (0, util_1.pure)(txb, args.tradingPairOraclePrice, "u64"),
            (0, util_1.pure)(txb, args.tradingPairOraclePriceDecimal, "u64"),
        ],
    });
}
function calculateIntrinsicValue(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::position::calculate_intrinsic_value"),
        typeArguments: [typeArg],
        arguments: [
            (0, util_1.obj)(txb, args.dovRegistry),
            (0, util_1.obj)(txb, args.typusOracle),
            (0, util_1.vector)(txb, "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::TypusBidReceipt", args.receipts),
            (0, util_1.obj)(txb, args.clock),
        ],
    });
}
function calculateRealizedPnlUsd(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::position::calculate_realized_pnl_usd"),
        arguments: [
            (0, util_1.pure)(txb, args.side, "bool"),
            (0, util_1.pure)(txb, args.size, "u64"),
            (0, util_1.pure)(txb, args.entryPrice, "u64"),
            (0, util_1.pure)(txb, args.exitPrice, "u64"),
            (0, util_1.pure)(txb, args.sizeDecimal, "u64"),
            (0, util_1.pure)(txb, args.priceDecimal, "u64"),
        ],
    });
}
function calculateTradingFee(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::position::calculate_trading_fee"),
        arguments: [
            (0, util_1.pure)(txb, args.size, "u64"),
            (0, util_1.pure)(txb, args.sizeDecimal, "u64"),
            (0, util_1.pure)(txb, args.collateralOraclePrice, "u64"),
            (0, util_1.pure)(txb, args.collateralOraclePriceDecimal, "u64"),
            (0, util_1.pure)(txb, args.tradingPairOraclePrice, "u64"),
            (0, util_1.pure)(txb, args.tradingPairOraclePriceDecimal, "u64"),
            (0, util_1.pure)(txb, args.tradingFeeRate, "u64"),
            (0, util_1.pure)(txb, args.tradingFeeDecimal, "u64"),
            (0, util_1.pure)(txb, args.collateralTokenDecimal, "u64"),
        ],
    });
}
function calculateUnrealizedPnl(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::position::calculate_unrealized_pnl"),
        arguments: [
            (0, util_1.obj)(txb, args.position),
            (0, util_1.pure)(txb, args.tradingPairOraclePrice, "u64"),
            (0, util_1.pure)(txb, args.tradingPairOraclePriceDecimal, "u64"),
            (0, util_1.pure)(txb, args.tradingFeeRate, "u64"),
            (0, util_1.pure)(txb, args.tradingFeeDecimal, "u64"),
        ],
    });
}
function checkOptionCollateralPositionLiquidated(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::position::check_option_collateral_position_liquidated"),
        typeArguments: [typeArg],
        arguments: [
            (0, util_1.obj)(txb, args.dovRegistry),
            (0, util_1.obj)(txb, args.typusOracle),
            (0, util_1.obj)(txb, args.position),
            (0, util_1.pure)(txb, args.collateralOraclePrice, "u64"),
            (0, util_1.pure)(txb, args.collateralOraclePriceDecimal, "u64"),
            (0, util_1.pure)(txb, args.tradingPairOraclePrice, "u64"),
            (0, util_1.pure)(txb, args.tradingPairOraclePriceDecimal, "u64"),
            (0, util_1.pure)(txb, args.tradingFeeRate, "u64"),
            (0, util_1.pure)(txb, args.tradingFeeDecimal, "u64"),
            (0, util_1.pure)(txb, args.maintenanceMarginRateBp, "u64"),
            (0, util_1.pure)(txb, args.cumulativeBorrowRate, "u64"),
            (0, util_1.obj)(txb, args.clock),
        ],
    });
}
function checkOrderFilled(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::position::check_order_filled"),
        arguments: [(0, util_1.obj)(txb, args.order), (0, util_1.pure)(txb, args.oraclePrice, "u64")],
    });
}
function checkPositionLiquidated(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::position::check_position_liquidated"),
        arguments: [
            (0, util_1.obj)(txb, args.position),
            (0, util_1.pure)(txb, args.collateralOraclePrice, "u64"),
            (0, util_1.pure)(txb, args.collateralOraclePriceDecimal, "u64"),
            (0, util_1.pure)(txb, args.tradingPairOraclePrice, "u64"),
            (0, util_1.pure)(txb, args.tradingPairOraclePriceDecimal, "u64"),
            (0, util_1.pure)(txb, args.tradingFeeRate, "u64"),
            (0, util_1.pure)(txb, args.tradingFeeDecimal, "u64"),
            (0, util_1.pure)(txb, args.maintenanceMarginRateBp, "u64"),
            (0, util_1.pure)(txb, args.cumulativeBorrowRate, "u64"),
        ],
    });
}
function collateralWithPnl(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::position::collateral_with_pnl"),
        arguments: [
            (0, util_1.obj)(txb, args.position),
            (0, util_1.pure)(txb, args.collateralOraclePrice, "u64"),
            (0, util_1.pure)(txb, args.collateralOraclePriceDecimal, "u64"),
            (0, util_1.pure)(txb, args.tradingPairOraclePrice, "u64"),
            (0, util_1.pure)(txb, args.tradingPairOraclePriceDecimal, "u64"),
            (0, util_1.pure)(txb, args.tradingFeeRate, "u64"),
            (0, util_1.pure)(txb, args.tradingFeeDecimal, "u64"),
        ],
    });
}
function createOrder(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::position::create_order"),
        typeArguments: [typeArg],
        arguments: [
            (0, util_1.obj)(txb, args.version),
            (0, util_1.obj)(txb, args.symbol),
            (0, util_1.pure)(txb, args.leveragePct, "u64"),
            (0, util_1.pure)(txb, args.reduceOnly, "bool"),
            (0, util_1.pure)(txb, args.isLong, "bool"),
            (0, util_1.pure)(txb, args.isStopOrder, "bool"),
            (0, util_1.pure)(txb, args.size, "u64"),
            (0, util_1.pure)(txb, args.sizeDecimal, "u64"),
            (0, util_1.pure)(txb, args.triggerPrice, "u64"),
            (0, util_1.obj)(txb, args.collateral),
            (0, util_1.pure)(txb, args.collateralTokenDecimal, "u64"),
            (0, util_1.pure)(txb, args.linkedPositionId, "0x1::option::Option<u64>"),
            (0, util_1.pure)(txb, args.orderId, "u64"),
            (0, util_1.pure)(txb, args.oraclePrice, "u64"),
            (0, util_1.obj)(txb, args.clock),
        ],
    });
}
function createOrderWithBidReceipts(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::position::create_order_with_bid_receipts"),
        arguments: [
            (0, util_1.obj)(txb, args.version),
            (0, util_1.obj)(txb, args.symbol),
            (0, util_1.pure)(txb, args.portfolioIndex, "u64"),
            (0, util_1.obj)(txb, args.depositToken),
            (0, util_1.pure)(txb, args.leveragePct, "u64"),
            (0, util_1.pure)(txb, args.reduceOnly, "bool"),
            (0, util_1.pure)(txb, args.isLong, "bool"),
            (0, util_1.pure)(txb, args.isStopOrder, "bool"),
            (0, util_1.pure)(txb, args.size, "u64"),
            (0, util_1.pure)(txb, args.sizeDecimal, "u64"),
            (0, util_1.pure)(txb, args.triggerPrice, "u64"),
            (0, util_1.vector)(txb, "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::TypusBidReceipt", args.collateralBidReceipts),
            (0, util_1.pure)(txb, args.depositTokenDecimal, "u64"),
            (0, util_1.pure)(txb, args.linkedPositionId, "0x1::option::Option<u64>"),
            (0, util_1.pure)(txb, args.orderId, "u64"),
            (0, util_1.pure)(txb, args.oraclePrice, "u64"),
            (0, util_1.pure)(txb, args.user, "address"),
            (0, util_1.obj)(txb, args.clock),
        ],
    });
}
function emitRealizedFundingEvent(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::position::emit_realized_funding_event"),
        arguments: [
            (0, util_1.pure)(txb, args.user, "address"),
            (0, util_1.obj)(txb, args.collateralToken),
            (0, util_1.obj)(txb, args.symbol),
            (0, util_1.pure)(txb, args.positionId, "u64"),
            (0, util_1.pure)(txb, args.realizedFundingSign, "bool"),
            (0, util_1.pure)(txb, args.realizedFundingFee, "u64"),
            (0, util_1.pure)(txb, args.u64Padding, "vector<u64>"),
        ],
    });
}
function getEstimatedLiquidationPrice(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::position::get_estimated_liquidation_price"),
        arguments: [
            (0, util_1.obj)(txb, args.position),
            (0, util_1.pure)(txb, args.collateralOraclePrice, "u64"),
            (0, util_1.pure)(txb, args.collateralOraclePriceDecimal, "u64"),
            (0, util_1.pure)(txb, args.tradingPairOraclePrice, "u64"),
            (0, util_1.pure)(txb, args.tradingPairOraclePriceDecimal, "u64"),
            (0, util_1.pure)(txb, args.tradingFeeRate, "u64"),
            (0, util_1.pure)(txb, args.tradingFeeDecimal, "u64"),
            (0, util_1.pure)(txb, args.cumulativeBorrowRate, "u64"),
        ],
    });
}
function getMaxOrderTypeTag(txb) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::position::get_max_order_type_tag"), arguments: [] });
}
function getOptionCollateralOrderCollateralAmount(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::position::get_option_collateral_order_collateral_amount"),
        typeArguments: [typeArg],
        arguments: [(0, util_1.obj)(txb, args.dovRegistry), (0, util_1.obj)(txb, args.typusOracle), (0, util_1.obj)(txb, args.order), (0, util_1.obj)(txb, args.clock)],
    });
}
function getOptionPositionCollateralAmount(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::position::get_option_position_collateral_amount"),
        typeArguments: [typeArg],
        arguments: [(0, util_1.obj)(txb, args.dovRegistry), (0, util_1.obj)(txb, args.typusOracle), (0, util_1.obj)(txb, args.position), (0, util_1.obj)(txb, args.clock)],
    });
}
function getOptionPositionPortfolioIndex(txb, position) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::position::get_option_position_portfolio_index"), arguments: [(0, util_1.obj)(txb, position)] });
}
function getOrderCollateralAmount(txb, typeArg, order) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::position::get_order_collateral_amount"),
        typeArguments: [typeArg],
        arguments: [(0, util_1.obj)(txb, order)],
    });
}
function getOrderCollateralToken(txb, order) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::position::get_order_collateral_token"), arguments: [(0, util_1.obj)(txb, order)] });
}
function getOrderCollateralTokenDecimal(txb, order) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::position::get_order_collateral_token_decimal"), arguments: [(0, util_1.obj)(txb, order)] });
}
function getOrderFilledFee(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::position::get_order_filled_fee"),
        arguments: [
            (0, util_1.obj)(txb, args.order),
            (0, util_1.pure)(txb, args.collateralOraclePrice, "u64"),
            (0, util_1.pure)(txb, args.collateralOraclePriceDecimal, "u64"),
            (0, util_1.pure)(txb, args.tradingPairOraclePrice, "u64"),
            (0, util_1.pure)(txb, args.tradingPairOraclePriceDecimal, "u64"),
            (0, util_1.pure)(txb, args.tradingFeeRate, "u64"),
            (0, util_1.pure)(txb, args.tradingFeeDecimal, "u64"),
        ],
    });
}
function getOrderId(txb, order) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::position::get_order_id"), arguments: [(0, util_1.obj)(txb, order)] });
}
function getOrderLinkedPositionId(txb, order) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::position::get_order_linked_position_id"), arguments: [(0, util_1.obj)(txb, order)] });
}
function getOrderPortfolioIndex(txb, order) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::position::get_order_portfolio_index"), arguments: [(0, util_1.obj)(txb, order)] });
}
function getOrderPrice(txb, order) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::position::get_order_price"), arguments: [(0, util_1.obj)(txb, order)] });
}
function getOrderReduceOnly(txb, order) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::position::get_order_reduce_only"), arguments: [(0, util_1.obj)(txb, order)] });
}
function getOrderSide(txb, order) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::position::get_order_side"), arguments: [(0, util_1.obj)(txb, order)] });
}
function getOrderSize(txb, order) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::position::get_order_size"), arguments: [(0, util_1.obj)(txb, order)] });
}
function getOrderTradingSymbol(txb, order) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::position::get_order_trading_symbol"), arguments: [(0, util_1.obj)(txb, order)] });
}
function getOrderTypeTag(txb, order) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::position::get_order_type_tag"), arguments: [(0, util_1.obj)(txb, order)] });
}
function getOrderUser(txb, order) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::position::get_order_user"), arguments: [(0, util_1.obj)(txb, order)] });
}
function getPositionCollateralAmount(txb, typeArg, position) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::position::get_position_collateral_amount"),
        typeArguments: [typeArg],
        arguments: [(0, util_1.obj)(txb, position)],
    });
}
function getPositionCollateralTokenDecimal(txb, position) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::position::get_position_collateral_token_decimal"), arguments: [(0, util_1.obj)(txb, position)] });
}
function getPositionCollateralTokenType(txb, position) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::position::get_position_collateral_token_type"), arguments: [(0, util_1.obj)(txb, position)] });
}
function getPositionId(txb, position) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::position::get_position_id"), arguments: [(0, util_1.obj)(txb, position)] });
}
function getPositionSide(txb, position) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::position::get_position_side"), arguments: [(0, util_1.obj)(txb, position)] });
}
function getPositionSize(txb, position) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::position::get_position_size"), arguments: [(0, util_1.obj)(txb, position)] });
}
function getPositionSizeDecimal(txb, position) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::position::get_position_size_decimal"), arguments: [(0, util_1.obj)(txb, position)] });
}
function getPositionSymbol(txb, position) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::position::get_position_symbol"), arguments: [(0, util_1.obj)(txb, position)] });
}
function getPositionUnrealizedCost(txb, position) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::position::get_position_unrealized_cost"), arguments: [(0, util_1.obj)(txb, position)] });
}
function getPositionUnrealizedFundingSign(txb, position) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::position::get_position_unrealized_funding_sign"), arguments: [(0, util_1.obj)(txb, position)] });
}
function getPositionUser(txb, position) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::position::get_position_user"), arguments: [(0, util_1.obj)(txb, position)] });
}
function getReserveAmount(txb, position) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::position::get_reserve_amount"), arguments: [(0, util_1.obj)(txb, position)] });
}
function increaseCollateral(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::position::increase_collateral"),
        typeArguments: [typeArg],
        arguments: [(0, util_1.obj)(txb, args.position), (0, util_1.obj)(txb, args.collateral)],
    });
}
function isOptionCollateralOrder(txb, order) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::position::is_option_collateral_order"), arguments: [(0, util_1.obj)(txb, order)] });
}
function isOptionCollateralPosition(txb, position) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::position::is_option_collateral_position"), arguments: [(0, util_1.obj)(txb, position)] });
}
function managerCreateReduceOnlyOrder(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::position::manager_create_reduce_only_order"),
        typeArguments: [typeArg],
        arguments: [
            (0, util_1.obj)(txb, args.version),
            (0, util_1.obj)(txb, args.symbol),
            (0, util_1.pure)(txb, args.isLong, "bool"),
            (0, util_1.pure)(txb, args.size, "u64"),
            (0, util_1.pure)(txb, args.sizeDecimal, "u64"),
            (0, util_1.pure)(txb, args.triggerPrice, "u64"),
            (0, util_1.obj)(txb, args.collateral),
            (0, util_1.pure)(txb, args.collateralTokenDecimal, "u64"),
            (0, util_1.pure)(txb, args.linkedPositionId, "u64"),
            (0, util_1.pure)(txb, args.user, "address"),
            (0, util_1.pure)(txb, args.orderId, "u64"),
            (0, util_1.pure)(txb, args.oraclePrice, "u64"),
            (0, util_1.obj)(txb, args.clock),
        ],
    });
}
function maxReleasingCollateralAmount(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::position::max_releasing_collateral_amount"),
        arguments: [
            (0, util_1.obj)(txb, args.position),
            (0, util_1.pure)(txb, args.collateralOraclePrice, "u64"),
            (0, util_1.pure)(txb, args.collateralOraclePriceDecimal, "u64"),
            (0, util_1.pure)(txb, args.tradingPairOraclePrice, "u64"),
            (0, util_1.pure)(txb, args.tradingPairOraclePriceDecimal, "u64"),
            (0, util_1.pure)(txb, args.tradingFeeRate, "u64"),
            (0, util_1.pure)(txb, args.tradingFeeDecimal, "u64"),
            (0, util_1.pure)(txb, args.cumulativeBorrowRate, "u64"),
            (0, util_1.pure)(txb, args.maxEntryLeveragePct, "u64"),
        ],
    });
}
function orderFilledWithBidReceiptsCollateral(txb, typeArgs, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::position::order_filled_with_bid_receipts_collateral"),
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(txb, args.version),
            (0, util_1.obj)(txb, args.liquidityPool),
            (0, util_1.obj)(txb, args.dovRegistry),
            (0, util_1.obj)(txb, args.typusOracle),
            (0, util_1.obj)(txb, args.order),
            (0, util_1.option)(txb, "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::position::Position", args.originalPosition),
            (0, util_1.pure)(txb, args.nextPositionId, "u64"),
            (0, util_1.pure)(txb, args.collateralOraclePrice, "u64"),
            (0, util_1.pure)(txb, args.collateralOraclePriceDecimal, "u64"),
            (0, util_1.pure)(txb, args.tradingPairOraclePrice, "u64"),
            (0, util_1.pure)(txb, args.tradingPairOraclePriceDecimal, "u64"),
            (0, util_1.pure)(txb, args.cumulativeBorrowRate, "u64"),
            (0, util_1.pure)(txb, args.cumulativeFundingRateIndexSign, "bool"),
            (0, util_1.pure)(txb, args.cumulativeFundingRateIndex, "u64"),
            (0, util_1.pure)(txb, args.tradingFeeRate, "u64"),
            (0, util_1.pure)(txb, args.tradingFeeDecimal, "u64"),
            (0, util_1.pure)(txb, args.referralFeeRebateBp, "u64"),
            (0, util_1.obj)(txb, args.clock),
        ],
    });
}
function realizeFunding(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::position::realize_funding"),
        typeArguments: [typeArg],
        arguments: [(0, util_1.obj)(txb, args.position), (0, util_1.obj)(txb, args.fundingIncome)],
    });
}
function releaseCollateral(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::position::release_collateral"),
        typeArguments: [typeArg],
        arguments: [(0, util_1.obj)(txb, args.position), (0, util_1.pure)(txb, args.releaseAmount, "u64")],
    });
}
function removeOrder(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::position::remove_order"),
        typeArguments: [typeArg],
        arguments: [(0, util_1.obj)(txb, args.version), (0, util_1.obj)(txb, args.order)],
    });
}
function removeOrderWithBidReceipts(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::position::remove_order_with_bid_receipts"),
        arguments: [(0, util_1.obj)(txb, args.version), (0, util_1.obj)(txb, args.order)],
    });
}
function removePosition(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::position::remove_position"),
        typeArguments: [typeArg],
        arguments: [(0, util_1.obj)(txb, args.version), (0, util_1.obj)(txb, args.position)],
    });
}
function removePositionLinkedOrderInfo(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::position::remove_position_linked_order_info"),
        arguments: [(0, util_1.obj)(txb, args.position), (0, util_1.pure)(txb, args.linkedOrderId, "u64")],
    });
}
function removePositionWithBidReceipts(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::position::remove_position_with_bid_receipts"),
        arguments: [(0, util_1.obj)(txb, args.version), (0, util_1.obj)(txb, args.position)],
    });
}
function updatePositionBorrowRate(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::position::update_position_borrow_rate"),
        arguments: [
            (0, util_1.obj)(txb, args.position),
            (0, util_1.pure)(txb, args.collateralOraclePrice, "u64"),
            (0, util_1.pure)(txb, args.collateralOraclePriceDecimal, "u64"),
            (0, util_1.pure)(txb, args.tradingPairOraclePrice, "u64"),
            (0, util_1.pure)(txb, args.tradingPairOraclePriceDecimal, "u64"),
            (0, util_1.pure)(txb, args.cumulativeBorrowRate, "u64"),
        ],
    });
}
function updatePositionFundingRate(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::position::update_position_funding_rate"),
        arguments: [
            (0, util_1.obj)(txb, args.position),
            (0, util_1.pure)(txb, args.collateralOraclePrice, "u64"),
            (0, util_1.pure)(txb, args.collateralOraclePriceDecimal, "u64"),
            (0, util_1.pure)(txb, args.tradingPairOraclePrice, "u64"),
            (0, util_1.pure)(txb, args.tradingPairOraclePriceDecimal, "u64"),
            (0, util_1.pure)(txb, args.cumulativeFundingRateIndexSign, "bool"),
            (0, util_1.pure)(txb, args.cumulativeFundingRateIndex, "u64"),
        ],
    });
}
