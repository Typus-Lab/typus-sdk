//publish from sui-dev-token
export const TOKEN_PACKAGE = "0xe1de18bfb66277f0abed845f868af6c962248f72";
export const TOKEN_REGISTRY_BTC = "0x19702808d1c5d5534636cf7a31f90a60da6194cd";//fake btc registry
export const TOKEN_REGISTRY_ETH = "0x06148f59eec7eee47acedb98f61819572f2bafde"//fake eth registry
export const TOKEN_REGISTRY_SUI = "0x1c4ccc2fab72030abf8b04af20408a3c1c8dae5f"//fake usdc registry


//publish from typus-oracle
export const ORACLE_PACKAGE = "0x76d673a3f7aa558016e692b4de02c71de11f00b7"

//publish from typus-dov/cover_call
export const COVERED_CALL_PACKAGE = "0x04ec35903020610909d274390e94612ce679f635"
export const COVERED_CALL_REGISTRY = "0x052f3b32669d6b92f485f97310add8adf1dc7478"
export const COVERED_CALL_MANAGER = "0x5b5bb3fefabd314cb57fc6f667d46ba4d76373e1"

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