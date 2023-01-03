//publish from sui-dev-token
export const TOKEN_PACKAGE = "0x97cfaa5d2a79c1be5da410870deb258ed5f42561";
export const TOKEN_REGISTRY_BTC = "0xb10e4bf339c2495d793647fa726fd5427ca8c328";//fake btc registry
export const TOKEN_REGISTRY_ETH = "0x59c42da8bb8a3b98a764985af1d9cef7e6e9f87d"//fake eth registry
export const TOKEN_REGISTRY_SUI = "0xf4a1954d812748ee08dd4c4c1e21bb136a6c089e"//fake usdc registry

//publish from typus-oracle
export const ORACLE_PACKAGE = "0x437d2eb473bd348ad22b37ffb84bd652656026b1"

//publish from typus-dov/cover_call
export const COVERED_CALL_PACKAGE = "0x557125ee218ff0f09b74e67110ca11a10b7c3553"
export const COVERED_CALL_REGISTRY = "0xe713352b3e1679825c8bd209a9f2c5c355572eea"
export const COVERED_CALL_MANAGER = "0x1924683a4112a39f2eee9e07a770ed7f7f911ad5"
export const USER_SHARE_TABLE = "0x1987456681ee8ba897a6693d7355931e5d25e17a"
export const MAKER_SHARE_TABLE = "0xcb3e6ad0b3ab79e35899d134dc42bdd3b97ca485"

//publish from typus-dov/typus-dov
export const DOV_PACKAGE = "0x1ab7f453176dc6d35fe5e8b6b27a53cb73d1061d"

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