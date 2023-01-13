//publish from sui-dev-token
export const TOKEN_PACKAGE = "0x1ed338b4e737d89729386b8170b0f45910ad30fa";
export const TOKEN_REGISTRY_BTC = "0xf5f939a6a79927e55582985a8bf125d37b0ab297";//fake btc registry
export const TOKEN_REGISTRY_ETH = "0xb79efcacd84dc70dd6969686d7e7fadadc14c2d5"//fake eth registry
export const TOKEN_REGISTRY_SUI = "0xde095084d4485b0482ab8dc8fe8c8328902fa223"//fake usdc registry

//publish from typus-oracle
export const ORACLE_PACKAGE = "0x5b1f5680041041624069ef03f23947001b073642"

//publish from typus-dov/cover_call
export const COVERED_CALL_PACKAGE = "0x00d18316601f16439dec0a6b3e40ef861fc84ee4"
export const COVERED_CALL_REGISTRY = "0xe3960d9dc8e39328e514d42d3318c5878145c27e"
export const COVERED_CALL_MANAGER = "0xfe26a77c66f4ae0314e1510921f8dea9be01db9c"
export const USER_SHARE_TABLE = "0x4d98c1efa4aef5b02e8fe27bca6ac4d8dde62935"
export const USER_REFUND_TABLE = "0x3e80b4c0f7d1b05a73d180487aa2bbf5e3c77792"
export const MAKER_SHARE_TABLE = "0xef0dabd3f82d4cc09c440a61f095a977d72ade05"

//publish from typus-dov/typus-dov
export const DOV_PACKAGE = "0xdbb42109c373ded4b97016230e5d065fb96813b8"

export const TEST_MINT_TOKEN = "0x672612858fcb5c6abf944638253142820c251753"

export const PRICE_DECIMAL = 8
export const TOKEN_DECIMAL = 9

export const DEFAULT_TYPE_ARGUMENT = "0x2::sui::SUI";
export const FAKE_TOKEN_TYPE_ARGUMENT = "0x27b3674c685046f66cad1d5496d2967894fa5329::token::USDC";
export const TEST_MNEMONIC = "plug grain matter asthma aware critic can lottery blouse uncover sauce speak";
export const TOKEN_NAME = ["BTC", "ETH", "SUI", "USDC", "USDT", "SUI"]
export const TOKEN_NAME_TO_MODULE = {
    "BTC": "btc",
    "ETH": "eth",
    "SUI": "sui",
    "USDC": "usdc",
    // "USDT": "token_usdt",
}