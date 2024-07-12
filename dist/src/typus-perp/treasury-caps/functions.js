"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = init;
exports.getMutTreasuryCap = getMutTreasuryCap;
exports.removeTreasuryCap = removeTreasuryCap;
exports.storeTreasuryCap = storeTreasuryCap;
var __1 = require("..");
var util_1 = require("../../_framework/util");
function init(txb) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::treasury_caps::init"), arguments: [] });
}
function getMutTreasuryCap(txb, typeArg, treasuryCaps) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::treasury_caps::get_mut_treasury_cap"),
        typeArguments: [typeArg],
        arguments: [(0, util_1.obj)(txb, treasuryCaps)],
    });
}
function removeTreasuryCap(txb, typeArg, treasuryCaps) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::treasury_caps::remove_treasury_cap"),
        typeArguments: [typeArg],
        arguments: [(0, util_1.obj)(txb, treasuryCaps)],
    });
}
function storeTreasuryCap(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::treasury_caps::store_treasury_cap"),
        typeArguments: [typeArg],
        arguments: [(0, util_1.obj)(txb, args.treasuryCaps), (0, util_1.obj)(txb, args.treasuryCap)],
    });
}
