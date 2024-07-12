"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.countFloating = exports.checkNumber = exports.insertAt = void 0;
exports.U64FromBytes = U64FromBytes;
exports.AddressFromBytes = AddressFromBytes;
var bignumber_js_1 = __importDefault(require("bignumber.js"));
function U64FromBytes(x) {
    var u64 = BigInt(0);
    for (var i = 0; i < x.length; i++) {
        u64 = u64 << BigInt(8);
        u64 += BigInt(x[i]);
    }
    return u64;
}
function AddressFromBytes(x) {
    var address = "0x";
    for (var i = 0; i < x.length; i++) {
        address = address.concat(x[i].toString(16).padStart(2, "0"));
    }
    return address;
}
var insertAt = function (str, sub, pos) { return "".concat(str.slice(0, pos)).concat(sub).concat(str.slice(pos)); };
exports.insertAt = insertAt;
var checkNumber = function (str) {
    if (typeof str != "string")
        return false; // we only process strings!
    return (
    // @ts-ignore
    !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str))); // ...and ensure strings of whitespace fail
};
exports.checkNumber = checkNumber;
var countFloating = function (value) {
    var num = (0, bignumber_js_1.default)(value).toFixed().replace(/,/g, "");
    if (value instanceof bignumber_js_1.default) {
        num = value.toFixed().replace(/,/g, "");
    }
    if (!num.includes("."))
        return 0;
    return num.split(".")[1].length;
};
exports.countFloating = countFloating;
