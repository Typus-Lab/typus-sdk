"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.burn = burn;
exports.mint = mint;
exports.totalSupply = totalSupply;
exports.init = init;
exports.transferTreasuryCap = transferTreasuryCap;
var __1 = require("..");
var util_1 = require("../../_framework/util");
function burn(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::tlp::burn"),
        typeArguments: [typeArg],
        arguments: [(0, util_1.obj)(txb, args.treasuryCap), (0, util_1.obj)(txb, args.coin)],
    });
}
function mint(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::tlp::mint"),
        typeArguments: [typeArg],
        arguments: [(0, util_1.obj)(txb, args.treasuryCap), (0, util_1.pure)(txb, args.value, "u64")],
    });
}
function totalSupply(txb, treasuryCap) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::tlp::total_supply"), arguments: [(0, util_1.obj)(txb, treasuryCap)] });
}
function init(txb, witness) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::tlp::init"), arguments: [(0, util_1.obj)(txb, witness)] });
}
function transferTreasuryCap(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::tlp::transfer_treasury_cap"),
        arguments: [(0, util_1.obj)(txb, args.version), (0, util_1.obj)(txb, args.lpRegistry), (0, util_1.obj)(txb, args.treasuryCaps)],
    });
}
