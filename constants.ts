//publish from sui-dev-token
export const TOKEN_PACKAGE = "0x04aed544785e606bbda1100b7af9aaefb1db60b3";
export const TOKEN_REGISTRY_BTC = "0x1d41542c9bcbb3427e80afb6cd7f05b304feb149";//fake btc registry
export const TOKEN_REGISTRY_ETH = "0x97da9ec6f9842025480b73a2249e8670491c37d6"//fake eth registry
export const TOKEN_REGISTRY_SUI = "0xa0b7b5fc89ee0fa8a1f3355f9370c9651f7611b6"//fake usdc registry


//publish from typus-oracle
export const ORACLE_PACKAGE = "0xe85eabdada216e470344b2e70cdc8155a4007a2a"

//publish from typus-dov/cover_call
export const COVERED_CALL_PACKAGE = "0x76ed224498d2be57bf77ec8c0015957dd6096a36"
export const COVERED_CALL_REGISTRY = "0x4a3b7c389f5f7a506317774a49e39631ff160537"
export const COVERED_CALL_MANAGER = "0x35f69cc3dff02a9e86616569a72a0c8e9d950cca"

//publish from typus-dov/typus-dov
export const DOV_PACKAGE = "0x461c7f49f322c3b12523f51c8b8f00d6e0eda243"

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