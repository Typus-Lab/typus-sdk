"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PUBLISHED_AT = exports.PACKAGE_ID = exports.NETWORK = void 0;
var config_json_1 = __importDefault(require("../../config.json"));
var path_1 = __importDefault(require("path"));
var dotenv_1 = __importDefault(require("dotenv"));
// import .env file if exists
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, ".env") });
exports.NETWORK = process.env.CLUSTER == "mainnet" ? "MAINNET" : "TESTNET";
exports.PACKAGE_ID = process.env.CLUSTER == "mainnet" ? config_json_1.default.MAINNET.PACKAGE_ORIGIN.PERP : config_json_1.default.TESTNET.PACKAGE.PERP;
exports.PUBLISHED_AT = process.env.CLUSTER == "mainnet" ? config_json_1.default.MAINNET.PACKAGE.PERP : config_json_1.default.TESTNET.PACKAGE.PERP;
