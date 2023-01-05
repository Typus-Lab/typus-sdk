//publish from sui-dev-token
export const TOKEN_PACKAGE = "0x2c9a10117599e2d3232495a525b10f679691c9ae";
export const TOKEN_REGISTRY_BTC = "0xe0dc19dfc9023f2e86462aa37dc8fae290b4e2bb";//fake btc registry
export const TOKEN_REGISTRY_ETH = "0x9ad1db50850079e98d5972e3d9a8fdc90b9d1f19"//fake eth registry
export const TOKEN_REGISTRY_SUI = "0xc6128d63d24cbdb66e50cef4577e5cf36bb889e1"//fake usdc registry

//publish from typus-oracle
export const ORACLE_PACKAGE = "0x0d4b13cc0467c0620ce54abf703faa3b419d967b"

//publish from typus-dov/cover_call
export const COVERED_CALL_PACKAGE = "0x26bde55e579bd0418aaa140cd869153afeb34467"
export const COVERED_CALL_REGISTRY = "0xf1d4a2db033cba8bb3a69cf3de2558d89bed6dd4"
export const COVERED_CALL_MANAGER = "0xef73bf17e55fc9d5e31513df50c7e912bb729fc6"
export const USER_SHARE_TABLE = "0xd1ea22029f899265c9588c0e19d0366e6bb60d44"
export const MAKER_SHARE_TABLE = "0xf4db8e77a8763e1ac2d3038f53456410e2175989"

//publish from typus-dov/typus-dov
export const DOV_PACKAGE = "0xaf114c36e5329271f84a0d2cb1310d0efa6c6bb9"

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