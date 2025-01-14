import { SuiClient } from "@mysten/sui/client";

export const CLOCK = "0x6";
export const SENDER = "0xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";

export const PRICE_DECIMAL = 8;
export const TOKEN_DECIMAL = 9;

export const DEFAULT_TYPE_ARGUMENT = "0x2::sui::SUI";
export const FAKE_TOKEN_TYPE_ARGUMENT = "0x27b3674c685046f66cad1d5496d2967894fa5329::token::USDC";
export const TOKEN_NAME = ["BTC", "ETH", "SUI", "USDC", "USDT", "APT", "DOGE"];
export const TOKEN_NAME_TO_MODULE = {
    BTC: "btc",
    ETH: "eth",
    SUI: "sui",
    USDC: "usdc",
};

export const mainnetConnection = new SuiClient({
    url: "https://fullnode.mainnet.sui.io:443/",
});

export const testnetConnection = new SuiClient({
    url: "https://fullnode.testnet.sui.io:443/",
});

export const ACTIVE_SUB_VAULT_TAG: number = 0;
export const DEACTIVATING_SUB_VAULT_TAG: number = 1;
export const INACTIVE_SUB_VAULT_TAG: number = 2;
export const WARMUP_SUB_VAULT_TAG: number = 3;
export const BIDDER_SUB_VAULT_TAG: number = 4;
export const PREMIUM_SUB_VAULT_TAG: number = 5;
export const PERFORMANCE_FEE_SUB_VAULT_TAG: number = 6;
