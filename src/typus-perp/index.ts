export * from "./readVec";
export * from "./fetch";
export * from "./user";

export * from "./typus_perp/lp-pool/structs";

import path from "path";
import dotenv from "dotenv";
// import .env file if exists
dotenv.config({ path: path.resolve(__dirname, ".env") });
export const NETWORK = process.env.CLUSTER == "mainnet" ? "MAINNET" : "TESTNET";
