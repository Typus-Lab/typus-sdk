import { Connection } from "@mysten/sui.js";
import config from "./config.json";
// import mnemonic from "./mnemonic.json";

//publish from sui-dev-token
export const TOKEN_PACKAGE = config.TOKEN_PACKAGE;
export const TOKEN_REGISTRY_SUI = "0x3b87b3f0403f527d28fd1301074a12446f43817a";

//publish from typus-oracle
export const ORACLE_PACKAGE = config.ORACLE_PACKAGE;
export const TIME_ORACLE = "0x6";

export const BTC_ORACLE = config.BTC_ORACLE;
export const ETH_ORACLE = config.ETH_ORACLE;
export const SUI_ORACLE = config.SUI_ORACLE;
export const APT_ORACLE = config.APT_ORACLE;
export const DOGE_ORACLE = config.DOGE_ORACLE;

//publish from typus-dov/cover_call
export const PORTFOLIO_PACKAGE = config.PORTFOLIO_PACKAGE;
export const REGISTRY = config.SINGLE_COLLATERAL_REGISTRY;
export const MANAGER_CAP = config.MANAGER_CAP;
export const MODULE = "single_collateral";

//publish from typus-dov/typus-dov
export const TEST_MINT_TOKEN = "0x672612858fcb5c6abf944638253142820c251753";

export const PRICE_DECIMAL = 8;
export const TOKEN_DECIMAL = 9;
export const TEST_MNEMONIC = "";

export const DEFAULT_TYPE_ARGUMENT = "0x2::sui::SUI";
export const FAKE_TOKEN_TYPE_ARGUMENT =
  "0x27b3674c685046f66cad1d5496d2967894fa5329::token::USDC";
// export const TEST_MNEMONIC = mnemonic.MNEMONIC;
export const TOKEN_NAME = ["BTC", "ETH", "SUI", "USDC", "USDT", "APT", "DOGE"];
export const TOKEN_NAME_TO_MODULE = {
  BTC: "btc",
  ETH: "eth",
  SUI: "sui",
  USDC: "usdc",
};

export const testnetConnection = new Connection({
  fullnode: "https://fullnode.testnet.sui.io:443/",
  faucet: "https://faucet.testnet.sui.io/gas",
});

export const ACTIVE_SUB_VAULT_TAG: number = 0;
export const DEACTIVATING_SUB_VAULT_TAG: number = 1;
export const INACTIVE_SUB_VAULT_TAG: number = 2;
export const WARMUP_SUB_VAULT_TAG: number = 3;
export const BIDDER_SUB_VAULT_TAG: number = 4;
export const PREMIUM_SUB_VAULT_TAG: number = 5;
export const PERFORMANCE_FEE_SUB_VAULT_TAG: number = 6;
