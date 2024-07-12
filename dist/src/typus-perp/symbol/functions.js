"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.new_ = new_;
exports.create = create;
exports.baseToken = baseToken;
exports.quoteToken = quoteToken;
var __1 = require("..");
var util_1 = require("../../_framework/util");
function new_(txb, typeArgs) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::symbol::new"), typeArguments: typeArgs, arguments: [] });
}
function create(txb, args) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::symbol::create"), arguments: [(0, util_1.obj)(txb, args.baseToken), (0, util_1.obj)(txb, args.quoteToken)] });
}
function baseToken(txb, self) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::symbol::base_token"), arguments: [(0, util_1.obj)(txb, self)] });
}
function quoteToken(txb, self) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::symbol::quote_token"), arguments: [(0, util_1.obj)(txb, self)] });
}
