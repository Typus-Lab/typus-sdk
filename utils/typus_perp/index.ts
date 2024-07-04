import path from "path";
import dotenv from "dotenv";
// import .env file if exists
dotenv.config({ path: path.resolve(__dirname, ".env") });

export const NETWORK = process.env.CLUSTER == "mainnet" ? "MAINNET" : "TESTNET";
export const PACKAGE_ID = process.env.CLUSTER == "mainnet" ? "" : "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c";
export const PUBLISHED_AT = process.env.CLUSTER == "mainnet" ? "" : "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c";
