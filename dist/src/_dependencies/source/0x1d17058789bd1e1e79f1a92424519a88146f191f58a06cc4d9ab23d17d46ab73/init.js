"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerClasses = registerClasses;
var oracle = __importStar(require("./oracle/structs"));
var pythParser = __importStar(require("./pyth-parser/structs"));
var supra = __importStar(require("./supra/structs"));
var switchboardFeedParser = __importStar(require("./switchboard-feed-parser/structs"));
function registerClasses(loader) {
    loader.register(switchboardFeedParser.AggregatorInfo);
    loader.register(supra.SupraPrice);
    loader.register(pythParser.PythPrice);
    loader.register(pythParser.PythPriceInfoObject);
    loader.register(oracle.ManagerCap);
    loader.register(oracle.Oracle);
    loader.register(oracle.PriceEvent);
}
