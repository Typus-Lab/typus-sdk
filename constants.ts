//publish from sui-dev-token
export const TOKEN_PACKAGE = "0xd73d20a3ca73054ef56af95754698af0f587f90d";
export const TOKEN_REGISTRY = "0x882541280791e5c2a2eb386d1f36be220461d471";//fake btc registry

//publish from typus-oracle
export const ORACLE_PACKAGE = "0xe85eabdada216e470344b2e70cdc8155a4007a2a"

//publish from typus-dov/cover_call
export const COVERED_CALL_PACKAGE = "0xc33f18cc20a5c17c41ef9e054e1b37f60d804d9c"
export const COVERED_CALL_REGISTRY = "0x6c17473d6b1252db26278ec5818ef3bfdca75c89"
export const COVERED_CALL_MANAGER = "0xe004885ef67c7af37b96f8313738bb758d51b6d3"

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