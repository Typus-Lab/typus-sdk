//publish from sui-dev-token
export const TOKEN_PACKAGE = "0xa2ca2763f446b6822880f270aba71c3483291774";
export const TOKEN_REGISTRY_BTC = "0xfbe6b865b5ff4bfea92c769aa0a39018100ba75c";//fake btc registry
export const TOKEN_REGISTRY_ETH = "0x6add7187bcaeef019120b5a0ac63c9c6870ce9c2"//fake eth registry
export const TOKEN_REGISTRY_SUI = "0x9ded8015e2ce496cee989b6701e69c73e86436e6"//fake usdc registry

//publish from typus-oracle
export const ORACLE_PACKAGE = "0x7d683916b32c25b0061e65d3c744838cea225fe9"

//publish from typus-dov/cover_call
export const COVERED_CALL_PACKAGE = "0x56dbf64116e1e70353f4b35e0c708a194d04dbb7"
export const COVERED_CALL_REGISTRY = "0x0183b44c412e7713bb928c330bd0cbfb8817ff75"
export const COVERED_CALL_MANAGER = "0x2370429bc93b9861b45d542862bbfd0711f4d686"
export const USER_SHARE_TABLE = "0xd0765bf26da16c2debf6e136c0fcab67f2054ac3"
export const MAKER_SHARE_TABLE = "0x762ad4e903b45f0a5e451874d30bce777a69f0f6"

//publish from typus-dov/typus-dov
export const DOV_PACKAGE = "0xa6a4607b52f5a2a6299434c8c3e5040e34c325d7"

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