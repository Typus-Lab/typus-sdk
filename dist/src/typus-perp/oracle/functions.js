"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrice = getPrice;
exports.getEmaPrice = getEmaPrice;
exports.getPriceInfoObjectId = getPriceInfoObjectId;
var __1 = require("..");
var util_1 = require("../../_framework/util");
function getPrice(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::oracle::get_price"),
        arguments: [(0, util_1.obj)(txb, args.state), (0, util_1.obj)(txb, args.priceInfoObject), (0, util_1.obj)(txb, args.clock)],
    });
}
function getEmaPrice(txb, priceInfoObject) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::oracle::get_ema_price"), arguments: [(0, util_1.obj)(txb, priceInfoObject)] });
}
function getPriceInfoObjectId(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::oracle::get_price_info_object_id"),
        arguments: [(0, util_1.obj)(txb, args.state), (0, util_1.pure)(txb, args.priceIdentifierBytes, "vector<u8>")],
    });
}
