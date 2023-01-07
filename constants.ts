//publish from sui-dev-token
export const TOKEN_PACKAGE = "0x2c9a10117599e2d3232495a525b10f679691c9ae";
export const TOKEN_REGISTRY_BTC = "0xe0dc19dfc9023f2e86462aa37dc8fae290b4e2bb";//fake btc registry
export const TOKEN_REGISTRY_ETH = "0x9ad1db50850079e98d5972e3d9a8fdc90b9d1f19"//fake eth registry
export const TOKEN_REGISTRY_SUI = "0xc6128d63d24cbdb66e50cef4577e5cf36bb889e1"//fake usdc registry

//publish from typus-oracle
export const ORACLE_PACKAGE = "0x0d4b13cc0467c0620ce54abf703faa3b419d967b"

//publish from typus-dov/cover_call
export const COVERED_CALL_PACKAGE = "0x8cd580538967d5a83a5695f9e2db9f3695e5bdc0"
export const COVERED_CALL_REGISTRY = "0xff3eae20040a8ec4d45bae3ac85b662cf8adea4f"
export const COVERED_CALL_MANAGER = "0xb37ffa9b254f94e4c402806bb6011a2a32642ff4"
export const USER_SHARE_TABLE = "0x27e557f1464297be0fd2b4fefee1e1077b145d08"
export const MAKER_SHARE_TABLE = "0x8f55dcd94ce055c1b97e906b9642c0ce6392557e"

//publish from typus-dov/typus-dov
export const DOV_PACKAGE = "0x1bf2cad8d9d4d11a8e2c981b0f6a9c9744887776"

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