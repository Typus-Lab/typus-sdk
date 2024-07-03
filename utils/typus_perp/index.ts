import path from "path";
import dotenv from "dotenv";
// import .env file if exists
dotenv.config({ path: path.resolve(__dirname, ".env") });

export const NETWORK = process.env.CLUSTER == "mainnet" ? "MAINNET" : "TESTNET";
export const PACKAGE_ID = process.env.CLUSTER == "mainnet" ? "" : "0x1a05edb0e5e670196de98fbbf544180d129dd4ec11c3c57f742badf0304650d";
export const PUBLISHED_AT = process.env.CLUSTER == "mainnet" ? "" : "0x7c2ae1e87cb74c5a78eb0a4963aa9e56c28e72d630c1e3a6e024783c8590db1b";
