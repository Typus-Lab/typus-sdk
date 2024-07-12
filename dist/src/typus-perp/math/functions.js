"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiplier = multiplier;
exports.amountToUsd = amountToUsd;
exports.getFundingRateDecimal = getFundingRateDecimal;
exports.getUsdDecimal = getUsdDecimal;
exports.usdToAmount = usdToAmount;
var __1 = require("..");
var util_1 = require("../../_framework/util");
function multiplier(txb, decimal) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::math::multiplier"), arguments: [(0, util_1.pure)(txb, decimal, "u64")] });
}
function amountToUsd(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::math::amount_to_usd"),
        arguments: [
            (0, util_1.pure)(txb, args.amount, "u64"),
            (0, util_1.pure)(txb, args.amountDecimal, "u64"),
            (0, util_1.pure)(txb, args.price, "u64"),
            (0, util_1.pure)(txb, args.priceDecimal, "u64"),
        ],
    });
}
function getFundingRateDecimal(txb) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::math::get_funding_rate_decimal"), arguments: [] });
}
function getUsdDecimal(txb) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::math::get_usd_decimal"), arguments: [] });
}
function usdToAmount(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::math::usd_to_amount"),
        arguments: [
            (0, util_1.pure)(txb, args.usd, "u64"),
            (0, util_1.pure)(txb, args.amountDecimal, "u64"),
            (0, util_1.pure)(txb, args.price, "u64"),
            (0, util_1.pure)(txb, args.priceDecimal, "u64"),
        ],
    });
}
