//publish from sui-dev-token
export const TOKEN_PACKAGE = "0xe879e96fb90a8559127091f1176a2d10bb67c6ff";
export const TOKEN_REGISTRY = "0x5dce92f67eeda471369b734deac0d540b751cea6";//fake btc registry

//publish from typus-oracle
export const ORACLE_PACKAGE = "0x61e04e7cc6e20f7259dcd2166486f04c178b209c"

//publish from typus-dov/cover_call
export const COVERED_CALL_PACKAGE = "0x3e8f33a9b868456548bb25ebcc7ca940ca14516e"
export const COVERED_CALL_REGISTRY = "0x2bab58757ca68e3567daf9955429830a49fa1197"
export const COVERED_CALL_MANAGER = "0x6e1ff00f2a346fda572d625dc20bb4f64b7f4405"

//publish from typus-dov/typus-dov
export const DOV_PACKAGE = "0x461c7f49f322c3b12523f51c8b8f00d6e0eda243"

export const DEFAULT_TYPE_ARGUMENT = "0x2::sui::SUI";
export const FAKE_TOKEN_TYPE_ARGUMENT = "0x27b3674c685046f66cad1d5496d2967894fa5329::token::USDC";
export const TEST_MNEMONIC = "tackle wheat jungle viable memory dwarf swift fold purpose cattle impose horn";
export const TOKEN_NAME = ["BTC", "ETH", "SUI", "USDC", "USDT"]
export const TOKEN_NAME_TO_MODULE = {
    "BTC": "token_btc",
    "ETH": "token_eth",
    "SUI": "token_sui",
    "USDC": "token_usdc",
    "USDT": "token_usdt",
}