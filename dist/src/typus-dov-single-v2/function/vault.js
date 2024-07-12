"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseAssets = exports.AbbrStrategyName = exports.Period = void 0;
var token_1 = require("src/constants/token");
exports.Period = {
    0: "daily",
    1: "weekly",
    2: "monthly",
    3: "hourly",
};
exports.AbbrStrategyName = {
    0: "Call",
    1: "Put",
    2: "Call Spread",
    4: "Capped Call",
    5: "Capped Put",
    6: "Capped Call",
};
var parseAssets = function (info) {
    var dToken = info.depositToken, bToken = info.bidToken, oToken = info.settlementBase;
    return (0, token_1.typeArgsToAssets)([dToken, bToken, oToken]);
};
exports.parseAssets = parseAssets;
