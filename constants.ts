//publish from sui-dev-token
export const TOKEN_PACKAGE = "0x2c9a10117599e2d3232495a525b10f679691c9ae";
export const TOKEN_REGISTRY_BTC = "0xe0dc19dfc9023f2e86462aa37dc8fae290b4e2bb";//fake btc registry
export const TOKEN_REGISTRY_ETH = "0x9ad1db50850079e98d5972e3d9a8fdc90b9d1f19"//fake eth registry
export const TOKEN_REGISTRY_SUI = "0xc6128d63d24cbdb66e50cef4577e5cf36bb889e1"//fake usdc registry

//publish from typus-oracle
export const ORACLE_PACKAGE = "0x0d4b13cc0467c0620ce54abf703faa3b419d967b"

//publish from typus-dov/cover_call
export const COVERED_CALL_PACKAGE = "0x0c79f77e43d138037483ce627d5934772471a2cb"
export const COVERED_CALL_REGISTRY = "0xb61f0b618faf61e942af9030b9bb80bbf51aa5aa"
export const COVERED_CALL_MANAGER = "0xbb893cfbf3b64d3ae37d5d3ca38e835dd760dfd7"
export const USER_SHARE_TABLE = "0xf270d2c5c5003a9bf6fa1e5bed6f541be30d5078"
export const MAKER_SHARE_TABLE = "0x9457e9cf4ddf408310329d45f6f80fbd4840c5ef"

//publish from typus-dov/typus-dov
export const DOV_PACKAGE = "0x9e89746592ac5d34829680abde8874f1397c65bc"

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