//publish from sui-dev-token
export const TOKEN_PACKAGE = "0xa2ca2763f446b6822880f270aba71c3483291774";
export const TOKEN_REGISTRY_BTC = "0xfbe6b865b5ff4bfea92c769aa0a39018100ba75c";//fake btc registry
export const TOKEN_REGISTRY_ETH = "0x6add7187bcaeef019120b5a0ac63c9c6870ce9c2"//fake eth registry
export const TOKEN_REGISTRY_SUI = "0x9ded8015e2ce496cee989b6701e69c73e86436e6"//fake usdc registry

//publish from typus-oracle
export const ORACLE_PACKAGE = "0x7d683916b32c25b0061e65d3c744838cea225fe9"

//publish from typus-dov/cover_call
export const COVERED_CALL_PACKAGE = "0x7a08fbb9c4682a98ad575254e9f6886d2f7baf81"
export const COVERED_CALL_REGISTRY = "0xe22a98459592becac638c08fff7ee252fbee9e37"
export const COVERED_CALL_MANAGER = "0x9bedfe695cd7b38673d0bd31dafb1d937ef39904"

//publish from typus-dov/typus-dov
export const DOV_PACKAGE = "0x6d82e0416683c7b5f9cac0a0ce2b25f01a34e628"

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