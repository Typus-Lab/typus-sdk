//publish from sui-dev-token
export const TOKEN_PACKAGE = "0x04aed544785e606bbda1100b7af9aaefb1db60b3";
export const TOKEN_REGISTRY_BTC = "0x1d41542c9bcbb3427e80afb6cd7f05b304feb149";//fake btc registry
export const TOKEN_REGISTRY_ETH = "0x97da9ec6f9842025480b73a2249e8670491c37d6"//fake eth registry
export const TOKEN_REGISTRY_SUI = "0xa0b7b5fc89ee0fa8a1f3355f9370c9651f7611b6"//fake usdc registry


//publish from typus-oracle
export const ORACLE_PACKAGE = "0xe450380f9abda5ef5a7d8674f36d60caeb5a5b22"

//publish from typus-dov/cover_call
export const COVERED_CALL_PACKAGE = "0xf98dbb57fde46c6c42fd199404037c9f5cfb6cbd"
export const COVERED_CALL_REGISTRY = "0x060ef5e7d31e578eece3b69fb7f933ad1f34cbf9"
export const COVERED_CALL_MANAGER = "0xcee379cd9be9e99baf441039d8d874126615ccdd"

//publish from typus-dov/typus-dov
export const DOV_PACKAGE = "0xfaadf1d975ed3dec39cbe93a1f44c034966f6747"

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