"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PERFORMANCE_FEE_SUB_VAULT_TAG = exports.PREMIUM_SUB_VAULT_TAG = exports.BIDDER_SUB_VAULT_TAG = exports.WARMUP_SUB_VAULT_TAG = exports.INACTIVE_SUB_VAULT_TAG = exports.DEACTIVATING_SUB_VAULT_TAG = exports.ACTIVE_SUB_VAULT_TAG = exports.testnetConnection = exports.mainnetConnection = exports.TOKEN_NAME_TO_MODULE = exports.TOKEN_NAME = exports.FAKE_TOKEN_TYPE_ARGUMENT = exports.DEFAULT_TYPE_ARGUMENT = exports.TOKEN_DECIMAL = exports.PRICE_DECIMAL = exports.CLOCK = void 0;
var client_1 = require("@mysten/sui.js/client");
exports.CLOCK = "0x6";
exports.PRICE_DECIMAL = 8;
exports.TOKEN_DECIMAL = 9;
exports.DEFAULT_TYPE_ARGUMENT = "0x2::sui::SUI";
exports.FAKE_TOKEN_TYPE_ARGUMENT = "0x27b3674c685046f66cad1d5496d2967894fa5329::token::USDC";
exports.TOKEN_NAME = ["BTC", "ETH", "SUI", "USDC", "USDT", "APT", "DOGE"];
exports.TOKEN_NAME_TO_MODULE = {
    BTC: "btc",
    ETH: "eth",
    SUI: "sui",
    USDC: "usdc",
};
exports.mainnetConnection = new client_1.SuiClient({
    url: "https://fullnode.mainnet.sui.io:443/",
});
exports.testnetConnection = new client_1.SuiClient({
    url: "https://fullnode.testnet.sui.io:443/",
});
exports.ACTIVE_SUB_VAULT_TAG = 0;
exports.DEACTIVATING_SUB_VAULT_TAG = 1;
exports.INACTIVE_SUB_VAULT_TAG = 2;
exports.WARMUP_SUB_VAULT_TAG = 3;
exports.BIDDER_SUB_VAULT_TAG = 4;
exports.PREMIUM_SUB_VAULT_TAG = 5;
exports.PERFORMANCE_FEE_SUB_VAULT_TAG = 6;
