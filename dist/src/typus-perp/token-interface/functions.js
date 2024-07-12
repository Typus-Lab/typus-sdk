"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.burn = burn;
exports.mint = mint;
var __1 = require("..");
var util_1 = require("../../_framework/util");
function burn(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::token_interface::burn"),
        typeArguments: [typeArg],
        arguments: [(0, util_1.obj)(txb, args.treasuryCap), (0, util_1.obj)(txb, args.coin)],
    });
}
function mint(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::token_interface::mint"),
        typeArguments: [typeArg],
        arguments: [(0, util_1.obj)(txb, args.treasuryCap), (0, util_1.pure)(txb, args.value, "u64")],
    });
}
