import { TypusConfig } from "src/utils";
import path from "path";
import dotenv from "dotenv";
// import .env file if exists
dotenv.config({ path: path.resolve(__dirname, ".env") });

export const NETWORK = process.env.CLUSTER == "mainnet" ? "MAINNET" : "TESTNET";
// let config = await TypusConfig.default(NETWORK);
// export const PACKAGE_ID = config.packageOrigin.perp;
export const PACKAGE_ID = async () => {
    return (await TypusConfig.default(NETWORK)).packageOrigin.perp;
};
// export const PUBLISHED_AT = config.package.perp;
export const PUBLISHED_AT = async () => {
    return (await TypusConfig.default(NETWORK)).package.perp;
};

export { installEcosystemManagerCapEntry } from "./admin/functions";
export * from "./readVec";
export * from "./fetch";
export * from "./user";
