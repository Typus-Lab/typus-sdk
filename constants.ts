import config from "./config.json"

//publish from sui-dev-token
export const TOKEN_PACKAGE = config.TOKEN_PACKAGE
export const TOKEN_REGISTRY_SUI = "0x3b87b3f0403f527d28fd1301074a12446f43817a"

//publish from typus-oracle
export const ORACLE_PACKAGE = config.ORACLE_PACKAGE
export const TIME_ORACLE = config.TIME_ORACLE

//publish from typus-dov/cover_call
export const COVERED_CALL_PACKAGE = config.COVERED_CALL_PACKAGE;
export const COVERED_CALL_REGISTRY = config.REGISTRY;
export const COVERED_CALL_MANAGER = config.MANAGER_CAP
export const USER_SHARE_TABLE = config.USER_SHARE_TABLE
export const USER_REFUND_TABLE = config.USER_REFUND_TABLE
export const MAKER_SHARE_TABLE = config.MAKER_SHARE_TABLE

//publish from typus-dov/typus-dov
export const TEST_MINT_TOKEN = "0x672612858fcb5c6abf944638253142820c251753"

export const PRICE_DECIMAL = 8
export const TOKEN_DECIMAL = 9

export const DEFAULT_TYPE_ARGUMENT = "0x2::sui::SUI";
export const FAKE_TOKEN_TYPE_ARGUMENT = "0x27b3674c685046f66cad1d5496d2967894fa5329::token::USDC"
export const TEST_MNEMONIC = "plug grain matter asthma aware critic can lottery blouse uncover sauce speak"
export const TOKEN_NAME = ["BTC", "ETH", "SUI", "USDC", "USDT", "APT", "DOGE"]
export const TOKEN_NAME_TO_MODULE = {
    "BTC": "btc",
    "ETH": "eth",
    "SUI": "sui",
    "USDC": "usdc",
}

export const TESTNET_RPC_ENDPOINT = "https://fullnode.testnet.sui.io:443"