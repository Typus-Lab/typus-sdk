import configs from "../../config.json";
import path from "path";
import dotenv from "dotenv";
// import .env file if exists
dotenv.config({ path: path.resolve(__dirname, ".env") });

export const NETWORK = process.env.CLUSTER == "mainnet" ? "MAINNET" : "TESTNET";
export const PACKAGE_ID = process.env.CLUSTER == "mainnet" ? configs.MAINNET.PACKAGE_ORIGIN.PERP : configs.TESTNET.PACKAGE.PERP;
export const PUBLISHED_AT = process.env.CLUSTER == "mainnet" ? configs.MAINNET.PACKAGE.PERP : configs.TESTNET.PACKAGE.PERP;
