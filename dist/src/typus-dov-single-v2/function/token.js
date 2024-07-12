"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokenName = exports.StableCoin = exports.LST = exports.RemoveMillionToken = exports.MillionToken = exports.UnwrappedToken = exports.WrappedToken = void 0;
exports.WrappedToken = {
    ETH: "WETH",
    BTC: "WBTC",
    SOL: "WSOL",
};
exports.UnwrappedToken = {
    WETH: "ETH",
    WBTC: "BTC",
    WSOL: "SOL",
};
exports.MillionToken = {
    FUD: "MFUD",
};
exports.RemoveMillionToken = {
    MFUD: "FUD",
};
exports.LST = {
    AFSUI: "SUI",
    HASUI: "SUI",
    VSUI: "SUI",
};
exports.StableCoin = ["USDC", "USDT", "BUCK", "USDY"];
var getTokenName = function (_a) {
    var _b, _c, _d, _e;
    var token = _a.token, wrapped = _a.wrapped, million = _a.million;
    var tokenName = token;
    if (wrapped) {
        tokenName = (_b = exports.WrappedToken[token]) !== null && _b !== void 0 ? _b : token;
    }
    else {
        tokenName = (_c = exports.UnwrappedToken[token]) !== null && _c !== void 0 ? _c : token;
    }
    return million ? (_d = exports.MillionToken[tokenName]) !== null && _d !== void 0 ? _d : tokenName : (_e = exports.RemoveMillionToken[tokenName]) !== null && _e !== void 0 ? _e : tokenName;
};
exports.getTokenName = getTokenName;
