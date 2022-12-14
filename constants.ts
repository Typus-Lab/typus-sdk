//publish from sui-dev-token
export const TOKEN_PACKAGE = "0x0a7a15d173690ac676b03eb8285a615a8982cb27";
export const TOKEN_REGISTRY_BTC = "0x7fe9f4e9c4cb004a19cd5b5b2cc71509f94780aa";//fake btc registry
export const TOKEN_REGISTRY_ETH = "0xa1e5ae3365f54f2f0addba26d1843a99a3d04eab"//fake eth registry
export const TOKEN_REGISTRY_USDC = "0xcd64daa636a19c8ba55422167a22b20ff7fbbfde"//fake usdc registry

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
export const TOKEN_NAME = ["BTC", "ETH", "SUI", "USDC", "USDT"]
export const TOKEN_NAME_TO_MODULE = {
    "BTC": "btc",
    "ETH": "eth",
    // "SUI": "token_sui",
    "USDC": "usdc",
    // "USDT": "token_usdt",
}