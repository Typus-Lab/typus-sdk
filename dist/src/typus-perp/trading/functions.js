"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = init;
exports.getEstimatedLiquidationPrice = getEstimatedLiquidationPrice;
exports.increaseCollateral = increaseCollateral;
exports.releaseCollateral = releaseCollateral;
exports.addTradingSymbol = addTradingSymbol;
exports.adjustMarketInfoUserOrderSize = adjustMarketInfoUserOrderSize;
exports.borrowMutPositionByPositionId = borrowMutPositionByPositionId;
exports.borrowPositionByPositionId = borrowPositionByPositionId;
exports.cancelLinkedOrders = cancelLinkedOrders;
exports.cancelTradingOrder = cancelTradingOrder;
exports.checkCollateralEnough = checkCollateralEnough;
exports.checkOptionCollateralEnough = checkOptionCollateralEnough;
exports.checkReserveEnough = checkReserveEnough;
exports.createTradingOrder = createTradingOrder;
exports.createTradingOrderWithBidReceipt = createTradingOrderWithBidReceipt;
exports.executeOptionCollateralOrder_ = executeOptionCollateralOrder_;
exports.executeOrder_ = executeOrder_;
exports.findLiquidate = findLiquidate;
exports.getActiveOrdersByOrderTag = getActiveOrdersByOrderTag;
exports.getLinkedPosition = getLinkedPosition;
exports.getMarket = getMarket;
exports.getMaxReleasingCollateralAmount = getMaxReleasingCollateralAmount;
exports.getMutMarket = getMutMarket;
exports.getMutOrders = getMutOrders;
exports.getOrders = getOrders;
exports.getUserOrders = getUserOrders;
exports.getUserPositions = getUserPositions;
exports.liquidate = liquidate;
exports.managerReducePosition = managerReducePosition;
exports.matchTradingOrder = matchTradingOrder;
exports.newMarkets = newMarkets;
exports.reduceOptionCollateralPositionSize = reduceOptionCollateralPositionSize;
exports.removeLinkedOrders = removeLinkedOrders;
exports.resumeMarket = resumeMarket;
exports.resumeTradingSymbol = resumeTradingSymbol;
exports.suspendMarket = suspendMarket;
exports.suspendTradingSymbol = suspendTradingSymbol;
exports.takeOrderByOrderIdAndPrice = takeOrderByOrderIdAndPrice;
exports.tradingSymbolExists = tradingSymbolExists;
exports.updateFundingRate = updateFundingRate;
exports.updateMarketConfig = updateMarketConfig;
exports.updateProtocolFeeShareBp = updateProtocolFeeShareBp;
var __1 = require("..");
var util_1 = require("../../_framework/util");
function init(txb) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::trading::init"), arguments: [] });
}
function getEstimatedLiquidationPrice(txb, typeArgs, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::trading::get_estimated_liquidation_price"),
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(txb, args.version),
            (0, util_1.obj)(txb, args.registry),
            (0, util_1.obj)(txb, args.poolRegistry),
            (0, util_1.pure)(txb, args.marketIndex, "u64"),
            (0, util_1.pure)(txb, args.poolIndex, "u64"),
            (0, util_1.obj)(txb, args.pythState),
            (0, util_1.obj)(txb, args.oracleCToken),
            (0, util_1.obj)(txb, args.oracleTradingSymbol),
            (0, util_1.obj)(txb, args.clock),
            (0, util_1.pure)(txb, args.positionId, "u64"),
        ],
    });
}
function increaseCollateral(txb, typeArgs, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::trading::increase_collateral"),
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(txb, args.version),
            (0, util_1.obj)(txb, args.registry),
            (0, util_1.obj)(txb, args.poolRegistry),
            (0, util_1.pure)(txb, args.marketIndex, "u64"),
            (0, util_1.pure)(txb, args.poolIndex, "u64"),
            (0, util_1.obj)(txb, args.pythState),
            (0, util_1.obj)(txb, args.oracleCToken),
            (0, util_1.obj)(txb, args.oracleTradingSymbol),
            (0, util_1.obj)(txb, args.clock),
            (0, util_1.pure)(txb, args.positionId, "u64"),
            (0, util_1.obj)(txb, args.collateral),
        ],
    });
}
function releaseCollateral(txb, typeArgs, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::trading::release_collateral"),
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(txb, args.version),
            (0, util_1.obj)(txb, args.registry),
            (0, util_1.obj)(txb, args.poolRegistry),
            (0, util_1.pure)(txb, args.marketIndex, "u64"),
            (0, util_1.pure)(txb, args.poolIndex, "u64"),
            (0, util_1.obj)(txb, args.pythState),
            (0, util_1.obj)(txb, args.oracleCToken),
            (0, util_1.obj)(txb, args.oracleTradingSymbol),
            (0, util_1.obj)(txb, args.clock),
            (0, util_1.pure)(txb, args.positionId, "u64"),
            (0, util_1.pure)(txb, args.releaseAmount, "u64"),
        ],
    });
}
function addTradingSymbol(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::trading::add_trading_symbol"),
        typeArguments: [typeArg],
        arguments: [
            (0, util_1.obj)(txb, args.version),
            (0, util_1.obj)(txb, args.registry),
            (0, util_1.pure)(txb, args.marketIndex, "u64"),
            (0, util_1.pure)(txb, args.sizeDecimal, "u64"),
            (0, util_1.obj)(txb, args.oracle),
            (0, util_1.pure)(txb, args.maxLeveragePct, "u64"),
            (0, util_1.pure)(txb, args.minSize, "u64"),
            (0, util_1.pure)(txb, args.lotSize, "u64"),
            (0, util_1.pure)(txb, args.tradingFeeRate, "u64"),
            (0, util_1.pure)(txb, args.tradingFeeDecimal, "u64"),
            (0, util_1.pure)(txb, args.basicFundingRate, "u64"),
            (0, util_1.pure)(txb, args.fundingIntervalTsMs, "u64"),
            (0, util_1.obj)(txb, args.clock),
        ],
    });
}
function adjustMarketInfoUserOrderSize(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::trading::adjust_market_info_user_order_size"),
        arguments: [
            (0, util_1.obj)(txb, args.symbolMarket),
            (0, util_1.pure)(txb, args.long, "bool"),
            (0, util_1.pure)(txb, args.filledOrCancelled, "bool"),
            (0, util_1.pure)(txb, args.size, "u64"),
        ],
    });
}
function borrowMutPositionByPositionId(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::trading::borrow_mut_position_by_position_id"),
        arguments: [(0, util_1.obj)(txb, args.userPositions), (0, util_1.pure)(txb, args.positionId, "u64")],
    });
}
function borrowPositionByPositionId(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::trading::borrow_position_by_position_id"),
        arguments: [(0, util_1.obj)(txb, args.userPositions), (0, util_1.pure)(txb, args.positionId, "u64")],
    });
}
function cancelLinkedOrders(txb, typeArgs, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::trading::cancel_linked_orders"),
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(txb, args.version),
            (0, util_1.obj)(txb, args.registry),
            (0, util_1.pure)(txb, args.marketIndex, "u64"),
            (0, util_1.pure)(txb, args.linkedOrderIds, "vector<u64>"),
            (0, util_1.pure)(txb, args.linkedOrderPrices, "vector<u64>"),
            (0, util_1.pure)(txb, args.user, "address"),
        ],
    });
}
function cancelTradingOrder(txb, typeArgs, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::trading::cancel_trading_order"),
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(txb, args.version),
            (0, util_1.obj)(txb, args.registry),
            (0, util_1.pure)(txb, args.marketIndex, "u64"),
            (0, util_1.pure)(txb, args.orderId, "u64"),
            (0, util_1.pure)(txb, args.triggerPrice, "u64"),
        ],
    });
}
function checkCollateralEnough(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::trading::check_collateral_enough"),
        typeArguments: [typeArg],
        arguments: [
            (0, util_1.obj)(txb, args.symbolMarket),
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
function checkOptionCollateralEnough(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::trading::check_option_collateral_enough"),
        typeArguments: [typeArg],
        arguments: [
            (0, util_1.obj)(txb, args.dovRegistry),
            (0, util_1.obj)(txb, args.typusOracle),
            (0, util_1.obj)(txb, args.symbolMarket),
            (0, util_1.obj)(txb, args.order),
            (0, util_1.pure)(txb, args.collateralOraclePrice, "u64"),
            (0, util_1.pure)(txb, args.collateralOraclePriceDecimal, "u64"),
            (0, util_1.pure)(txb, args.tradingPairOraclePrice, "u64"),
            (0, util_1.pure)(txb, args.tradingPairOraclePriceDecimal, "u64"),
            (0, util_1.pure)(txb, args.tradingFeeRate, "u64"),
            (0, util_1.pure)(txb, args.tradingFeeDecimal, "u64"),
            (0, util_1.obj)(txb, args.clock),
        ],
    });
}
function checkReserveEnough(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::trading::check_reserve_enough"),
        typeArguments: [typeArg],
        arguments: [
            (0, util_1.obj)(txb, args.symbolMarket),
            (0, util_1.obj)(txb, args.liquidityPool),
            (0, util_1.obj)(txb, args.order),
            (0, util_1.pure)(txb, args.collateralOraclePrice, "u64"),
            (0, util_1.pure)(txb, args.collateralOraclePriceDecimal, "u64"),
            (0, util_1.pure)(txb, args.tradingPairOraclePrice, "u64"),
            (0, util_1.pure)(txb, args.tradingPairOraclePriceDecimal, "u64"),
        ],
    });
}
function createTradingOrder(txb, typeArgs, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::trading::create_trading_order"),
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(txb, args.version),
            (0, util_1.obj)(txb, args.registry),
            (0, util_1.obj)(txb, args.poolRegistry),
            (0, util_1.pure)(txb, args.marketIndex, "u64"),
            (0, util_1.pure)(txb, args.poolIndex, "u64"),
            (0, util_1.obj)(txb, args.pythState),
            (0, util_1.obj)(txb, args.oracleCToken),
            (0, util_1.obj)(txb, args.oracleTradingSymbol),
            (0, util_1.obj)(txb, args.clock),
            (0, util_1.obj)(txb, args.typusEcosystemVersion),
            (0, util_1.obj)(txb, args.typusUserRegistry),
            (0, util_1.obj)(txb, args.typusLeaderboardRegistry),
            (0, util_1.pure)(txb, args.linkedPositionId, "0x1::option::Option<u64>"),
            (0, util_1.obj)(txb, args.collateral),
            (0, util_1.pure)(txb, args.reduceOnly, "bool"),
            (0, util_1.pure)(txb, args.isLong, "bool"),
            (0, util_1.pure)(txb, args.isStopOrder, "bool"),
            (0, util_1.pure)(txb, args.size, "u64"),
            (0, util_1.pure)(txb, args.triggerPrice, "u64"),
        ],
    });
}
function createTradingOrderWithBidReceipt(txb, typeArgs, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::trading::create_trading_order_with_bid_receipt"),
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(txb, args.version),
            (0, util_1.obj)(txb, args.registry),
            (0, util_1.obj)(txb, args.poolRegistry),
            (0, util_1.obj)(txb, args.dovRegistry),
            (0, util_1.obj)(txb, args.typusOracle),
            (0, util_1.pure)(txb, args.marketIndex, "u64"),
            (0, util_1.pure)(txb, args.poolIndex, "u64"),
            (0, util_1.obj)(txb, args.pythState),
            (0, util_1.obj)(txb, args.oracleCToken),
            (0, util_1.obj)(txb, args.oracleTradingSymbol),
            (0, util_1.obj)(txb, args.clock),
            (0, util_1.obj)(txb, args.typusEcosystemVersion),
            (0, util_1.obj)(txb, args.typusUserRegistry),
            (0, util_1.obj)(txb, args.typusLeaderboardRegistry),
            (0, util_1.obj)(txb, args.collateralBidReceipt),
            (0, util_1.pure)(txb, args.isLong, "bool"),
            (0, util_1.pure)(txb, args.user, "address"),
        ],
    });
}
function executeOptionCollateralOrder_(txb, typeArgs, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::trading::execute_option_collateral_order_"),
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(txb, args.version),
            (0, util_1.obj)(txb, args.dovRegistry),
            (0, util_1.obj)(txb, args.typusOracle),
            (0, util_1.obj)(txb, args.symbolMarket),
            (0, util_1.obj)(txb, args.liquidityPool),
            (0, util_1.obj)(txb, args.order),
            (0, util_1.pure)(txb, args.protocolFeeShareBp, "u64"),
            (0, util_1.pure)(txb, args.collateralOraclePrice, "u64"),
            (0, util_1.pure)(txb, args.collateralOraclePriceDecimal, "u64"),
            (0, util_1.pure)(txb, args.tradingPairOraclePrice, "u64"),
            (0, util_1.pure)(txb, args.tradingPairOraclePriceDecimal, "u64"),
            (0, util_1.obj)(txb, args.typusEcosystemVersion),
            (0, util_1.obj)(txb, args.typusUserRegistry),
            (0, util_1.obj)(txb, args.typusLeaderboardRegistry),
            (0, util_1.obj)(txb, args.clock),
        ],
    });
}
function executeOrder_(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::trading::execute_order_"),
        typeArguments: [typeArg],
        arguments: [
            (0, util_1.obj)(txb, args.version),
            (0, util_1.pure)(txb, args.marketIndex, "u64"),
            (0, util_1.obj)(txb, args.symbolMarket),
            (0, util_1.obj)(txb, args.liquidityPool),
            (0, util_1.obj)(txb, args.order),
            (0, util_1.pure)(txb, args.protocolFeeShareBp, "u64"),
            (0, util_1.pure)(txb, args.collateralOraclePrice, "u64"),
            (0, util_1.pure)(txb, args.collateralOraclePriceDecimal, "u64"),
            (0, util_1.pure)(txb, args.tradingPairOraclePrice, "u64"),
            (0, util_1.pure)(txb, args.tradingPairOraclePriceDecimal, "u64"),
            (0, util_1.obj)(txb, args.typusEcosystemVersion),
            (0, util_1.obj)(txb, args.typusUserRegistry),
            (0, util_1.obj)(txb, args.typusLeaderboardRegistry),
            (0, util_1.obj)(txb, args.clock),
        ],
    });
}
function findLiquidate(txb, typeArgs, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::trading::find_liquidate"),
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(txb, args.version),
            (0, util_1.obj)(txb, args.registry),
            (0, util_1.obj)(txb, args.poolRegistry),
            (0, util_1.obj)(txb, args.dovRegistry),
            (0, util_1.obj)(txb, args.typusOracle),
            (0, util_1.pure)(txb, args.marketIndex, "u64"),
            (0, util_1.pure)(txb, args.poolIndex, "u64"),
            (0, util_1.obj)(txb, args.pythState),
            (0, util_1.obj)(txb, args.oracleCToken),
            (0, util_1.obj)(txb, args.oracleTradingSymbol),
            (0, util_1.obj)(txb, args.clock),
        ],
    });
}
function getActiveOrdersByOrderTag(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::trading::get_active_orders_by_order_tag"),
        typeArguments: [typeArg],
        arguments: [
            (0, util_1.obj)(txb, args.version),
            (0, util_1.obj)(txb, args.registry),
            (0, util_1.pure)(txb, args.marketIndex, "u64"),
            (0, util_1.pure)(txb, args.orderTypeTag, "u8"),
        ],
    });
}
function getLinkedPosition(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::trading::get_linked_position"),
        arguments: [
            (0, util_1.obj)(txb, args.symbolMarket),
            (0, util_1.pure)(txb, args.linkedPositionId, "0x1::option::Option<u64>"),
            (0, util_1.pure)(txb, args.user, "address"),
        ],
    });
}
function getMarket(txb, args) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::trading::get_market"), arguments: [(0, util_1.obj)(txb, args.id), (0, util_1.pure)(txb, args.index, "u64")] });
}
function getMaxReleasingCollateralAmount(txb, typeArgs, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::trading::get_max_releasing_collateral_amount"),
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(txb, args.version),
            (0, util_1.obj)(txb, args.registry),
            (0, util_1.obj)(txb, args.poolRegistry),
            (0, util_1.pure)(txb, args.marketIndex, "u64"),
            (0, util_1.pure)(txb, args.poolIndex, "u64"),
            (0, util_1.obj)(txb, args.pythState),
            (0, util_1.obj)(txb, args.oracleCToken),
            (0, util_1.obj)(txb, args.oracleTradingSymbol),
            (0, util_1.obj)(txb, args.clock),
            (0, util_1.pure)(txb, args.positionId, "u64"),
        ],
    });
}
function getMutMarket(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::trading::get_mut_market"),
        arguments: [(0, util_1.obj)(txb, args.id), (0, util_1.pure)(txb, args.index, "u64")],
    });
}
function getMutOrders(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::trading::get_mut_orders"),
        arguments: [(0, util_1.obj)(txb, args.symbolMarket), (0, util_1.pure)(txb, args.isTokenCollateral, "bool"), (0, util_1.pure)(txb, args.orderTypeTag, "u8")],
    });
}
function getOrders(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::trading::get_orders"),
        arguments: [(0, util_1.obj)(txb, args.symbolMarket), (0, util_1.pure)(txb, args.isTokenCollateral, "bool"), (0, util_1.pure)(txb, args.orderTypeTag, "u8")],
    });
}
function getUserOrders(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::trading::get_user_orders"),
        arguments: [(0, util_1.obj)(txb, args.version), (0, util_1.obj)(txb, args.registry), (0, util_1.pure)(txb, args.marketIndex, "u64"), (0, util_1.pure)(txb, args.user, "address")],
    });
}
function getUserPositions(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::trading::get_user_positions"),
        arguments: [(0, util_1.obj)(txb, args.version), (0, util_1.obj)(txb, args.registry), (0, util_1.pure)(txb, args.marketIndex, "u64"), (0, util_1.pure)(txb, args.user, "address")],
    });
}
function liquidate(txb, typeArgs, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::trading::liquidate"),
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(txb, args.version),
            (0, util_1.obj)(txb, args.registry),
            (0, util_1.obj)(txb, args.poolRegistry),
            (0, util_1.obj)(txb, args.dovRegistry),
            (0, util_1.obj)(txb, args.typusOracle),
            (0, util_1.pure)(txb, args.marketIndex, "u64"),
            (0, util_1.pure)(txb, args.poolIndex, "u64"),
            (0, util_1.obj)(txb, args.pythState),
            (0, util_1.obj)(txb, args.oracleCToken),
            (0, util_1.obj)(txb, args.oracleTradingSymbol),
            (0, util_1.obj)(txb, args.clock),
            (0, util_1.pure)(txb, args.positionId, "u64"),
        ],
    });
}
function managerReducePosition(txb, typeArgs, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::trading::manager_reduce_position"),
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(txb, args.version),
            (0, util_1.obj)(txb, args.registry),
            (0, util_1.obj)(txb, args.poolRegistry),
            (0, util_1.obj)(txb, args.pythState),
            (0, util_1.obj)(txb, args.oracleCToken),
            (0, util_1.obj)(txb, args.oracleTradingSymbol),
            (0, util_1.pure)(txb, args.marketIndex, "u64"),
            (0, util_1.pure)(txb, args.poolIndex, "u64"),
            (0, util_1.obj)(txb, args.clock),
            (0, util_1.obj)(txb, args.typusEcosystemVersion),
            (0, util_1.obj)(txb, args.typusUserRegistry),
            (0, util_1.obj)(txb, args.typusLeaderboardRegistry),
            (0, util_1.pure)(txb, args.positionId, "u64"),
            (0, util_1.pure)(txb, args.reducedRatioBp, "u64"),
        ],
    });
}
function matchTradingOrder(txb, typeArgs, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::trading::match_trading_order"),
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(txb, args.version),
            (0, util_1.obj)(txb, args.registry),
            (0, util_1.obj)(txb, args.poolRegistry),
            (0, util_1.obj)(txb, args.pythState),
            (0, util_1.obj)(txb, args.oracleCToken),
            (0, util_1.obj)(txb, args.oracleTradingSymbol),
            (0, util_1.pure)(txb, args.marketIndex, "u64"),
            (0, util_1.pure)(txb, args.poolIndex, "u64"),
            (0, util_1.obj)(txb, args.clock),
            (0, util_1.obj)(txb, args.typusEcosystemVersion),
            (0, util_1.obj)(txb, args.typusUserRegistry),
            (0, util_1.obj)(txb, args.typusLeaderboardRegistry),
            (0, util_1.pure)(txb, args.orderTypeTag, "u8"),
            (0, util_1.pure)(txb, args.triggerPrice, "u64"),
            (0, util_1.pure)(txb, args.maxOperationCount, "u64"),
        ],
    });
}
function newMarkets(txb, typeArgs, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::trading::new_markets"),
        typeArguments: typeArgs,
        arguments: [(0, util_1.obj)(txb, args.version), (0, util_1.obj)(txb, args.registry), (0, util_1.pure)(txb, args.protocolFeeShareBp, "u64")],
    });
}
function reduceOptionCollateralPositionSize(txb, typeArgs, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::trading::reduce_option_collateral_position_size"),
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(txb, args.version),
            (0, util_1.obj)(txb, args.registry),
            (0, util_1.obj)(txb, args.poolRegistry),
            (0, util_1.obj)(txb, args.dovRegistry),
            (0, util_1.obj)(txb, args.typusOracle),
            (0, util_1.pure)(txb, args.marketIndex, "u64"),
            (0, util_1.pure)(txb, args.poolIndex, "u64"),
            (0, util_1.obj)(txb, args.typusEcosystemVersion),
            (0, util_1.obj)(txb, args.typusUserRegistry),
            (0, util_1.obj)(txb, args.typusLeaderboardRegistry),
            (0, util_1.obj)(txb, args.pythState),
            (0, util_1.obj)(txb, args.oracleCToken),
            (0, util_1.obj)(txb, args.oracleTradingSymbol),
            (0, util_1.obj)(txb, args.clock),
            (0, util_1.pure)(txb, args.positionId, "u64"),
            (0, util_1.pure)(txb, args.orderSize, "0x1::option::Option<u64>"),
        ],
    });
}
function removeLinkedOrders(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::trading::remove_linked_orders"),
        typeArguments: [typeArg],
        arguments: [
            (0, util_1.obj)(txb, args.version),
            (0, util_1.pure)(txb, args.marketIndex, "u64"),
            (0, util_1.obj)(txb, args.symbolMarket),
            (0, util_1.pure)(txb, args.linkedOrderIds, "vector<u64>"),
            (0, util_1.pure)(txb, args.linkedOrderPrices, "vector<u64>"),
            (0, util_1.pure)(txb, args.user, "address"),
        ],
    });
}
function resumeMarket(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::trading::resume_market"),
        arguments: [(0, util_1.obj)(txb, args.version), (0, util_1.obj)(txb, args.registry), (0, util_1.pure)(txb, args.marketIndex, "u64")],
    });
}
function resumeTradingSymbol(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::trading::resume_trading_symbol"),
        typeArguments: [typeArg],
        arguments: [(0, util_1.obj)(txb, args.version), (0, util_1.obj)(txb, args.registry), (0, util_1.pure)(txb, args.marketIndex, "u64")],
    });
}
function suspendMarket(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::trading::suspend_market"),
        arguments: [(0, util_1.obj)(txb, args.version), (0, util_1.obj)(txb, args.registry), (0, util_1.pure)(txb, args.marketIndex, "u64")],
    });
}
function suspendTradingSymbol(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::trading::suspend_trading_symbol"),
        typeArguments: [typeArg],
        arguments: [(0, util_1.obj)(txb, args.version), (0, util_1.obj)(txb, args.registry), (0, util_1.pure)(txb, args.marketIndex, "u64")],
    });
}
function takeOrderByOrderIdAndPrice(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::trading::take_order_by_order_id_and_price"),
        arguments: [
            (0, util_1.obj)(txb, args.symbolMarket),
            (0, util_1.pure)(txb, args.triggerPrice, "u64"),
            (0, util_1.pure)(txb, args.orderId, "u64"),
            (0, util_1.pure)(txb, args.isTokenCollateral, "bool"),
            (0, util_1.pure)(txb, args.user, "address"),
        ],
    });
}
function tradingSymbolExists(txb, typeArg, market) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::trading::trading_symbol_exists"),
        typeArguments: [typeArg],
        arguments: [(0, util_1.obj)(txb, market)],
    });
}
function updateFundingRate(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::trading::update_funding_rate"),
        typeArguments: [typeArg],
        arguments: [
            (0, util_1.obj)(txb, args.version),
            (0, util_1.obj)(txb, args.registry),
            (0, util_1.obj)(txb, args.poolRegistry),
            (0, util_1.pure)(txb, args.marketIndex, "u64"),
            (0, util_1.pure)(txb, args.poolIndex, "u64"),
            (0, util_1.obj)(txb, args.pythState),
            (0, util_1.obj)(txb, args.oracleTradingSymbol),
            (0, util_1.obj)(txb, args.clock),
        ],
    });
}
function updateMarketConfig(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::trading::update_market_config"),
        typeArguments: [typeArg],
        arguments: [
            (0, util_1.obj)(txb, args.version),
            (0, util_1.obj)(txb, args.registry),
            (0, util_1.pure)(txb, args.marketIndex, "u64"),
            (0, util_1.pure)(txb, args.minSize, "0x1::option::Option<u64>"),
            (0, util_1.pure)(txb, args.lotSize, "0x1::option::Option<u64>"),
            (0, util_1.pure)(txb, args.tradingFeeRate, "0x1::option::Option<u64>"),
            (0, util_1.pure)(txb, args.tradingFeeDecimal, "0x1::option::Option<u64>"),
        ],
    });
}
function updateProtocolFeeShareBp(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::trading::update_protocol_fee_share_bp"),
        arguments: [
            (0, util_1.obj)(txb, args.version),
            (0, util_1.obj)(txb, args.registry),
            (0, util_1.pure)(txb, args.marketIndex, "u64"),
            (0, util_1.pure)(txb, args.protocolFeeShareBp, "u64"),
        ],
    });
}
