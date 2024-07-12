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
var aggregator = __importStar(require("./aggregator/structs"));
var job = __importStar(require("./job/structs"));
var math = __importStar(require("./math/structs"));
var quote = __importStar(require("./quote/structs"));
var switchboard = __importStar(require("./switchboard/structs"));
function registerClasses(loader) {
    loader.register(switchboard.AdminCap);
    loader.register(math.SwitchboardDecimal);
    loader.register(job.Job);
    loader.register(aggregator.Aggregator);
    loader.register(aggregator.AggregatorHistoryData);
    loader.register(aggregator.AggregatorHistoryRow);
    loader.register(aggregator.AggregatorJobData);
    loader.register(aggregator.SlidingWindow);
    loader.register(aggregator.SlidingWindowElement);
    loader.register(quote.Quote);
}
