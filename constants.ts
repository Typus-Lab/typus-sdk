//publish from sui-dev-token
export const TOKEN_PACKAGE = "0x97cfaa5d2a79c1be5da410870deb258ed5f42561";
export const TOKEN_REGISTRY_BTC = "0xb10e4bf339c2495d793647fa726fd5427ca8c328";//fake btc registry
export const TOKEN_REGISTRY_ETH = "0x59c42da8bb8a3b98a764985af1d9cef7e6e9f87d"//fake eth registry
export const TOKEN_REGISTRY_SUI = "0xf4a1954d812748ee08dd4c4c1e21bb136a6c089e"//fake usdc registry

//publish from typus-oracle
export const ORACLE_PACKAGE = "0x437d2eb473bd348ad22b37ffb84bd652656026b1"

//publish from typus-dov/cover_call
export const COVERED_CALL_PACKAGE = "0x5ece57f5f85a00ad812afd9a4a7b7781d157f7ed"
export const COVERED_CALL_REGISTRY = "0x189cf44a4a1daa77df7aab6d5894e2712843c2c9"
export const COVERED_CALL_MANAGER = "0x7e39015e03494ebcb976120a0ac2f112c1602dc2"
export const USER_SHARE_TABLE = "0x59cd2080bfc2ac8bbf917339372f1c36d44431c5"
export const MAKER_SHARE_TABLE = "0x4b3457ee86bd47048006b181738dd5a29263d4b2"

//publish from typus-dov/typus-dov
export const DOV_PACKAGE = "0x3674cf36f02160cdf3fd983629fed062f2306461"

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