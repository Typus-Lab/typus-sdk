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
var batchPriceAttestation = __importStar(require("./batch-price-attestation/structs"));
var contractUpgrade = __importStar(require("./contract-upgrade/structs"));
var dataSource = __importStar(require("./data-source/structs"));
var event = __importStar(require("./event/structs"));
var governanceAction = __importStar(require("./governance-action/structs"));
var governanceInstruction = __importStar(require("./governance-instruction/structs"));
var governance = __importStar(require("./governance/structs"));
var hotPotatoVector = __importStar(require("./hot-potato-vector/structs"));
var i64 = __importStar(require("./i64/structs"));
var migrate = __importStar(require("./migrate/structs"));
var priceFeed = __importStar(require("./price-feed/structs"));
var priceIdentifier = __importStar(require("./price-identifier/structs"));
var priceInfo = __importStar(require("./price-info/structs"));
var priceStatus = __importStar(require("./price-status/structs"));
var price = __importStar(require("./price/structs"));
var setDataSources = __importStar(require("./set-data-sources/structs"));
var setFeeRecipient = __importStar(require("./set-fee-recipient/structs"));
var setGovernanceDataSource = __importStar(require("./set-governance-data-source/structs"));
var setStalePriceThreshold = __importStar(require("./set-stale-price-threshold/structs"));
var setUpdateFee = __importStar(require("./set-update-fee/structs"));
var set = __importStar(require("./set/structs"));
var setup = __importStar(require("./setup/structs"));
var state = __importStar(require("./state/structs"));
var versionControl = __importStar(require("./version-control/structs"));
function registerClasses(loader) {
    loader.register(versionControl.V__0_1_1);
    loader.register(versionControl.V__DUMMY);
    loader.register(priceIdentifier.PriceIdentifier);
    loader.register(i64.I64);
    loader.register(price.Price);
    loader.register(priceFeed.PriceFeed);
    loader.register(priceInfo.PriceInfo);
    loader.register(priceInfo.PriceInfoObject);
    loader.register(event.PriceFeedUpdateEvent);
    loader.register(event.PythInitializationEvent);
    loader.register(set.Set);
    loader.register(set.Unit);
    loader.register(dataSource.DataSource);
    loader.register(state.CurrentDigest);
    loader.register(state.LatestOnly);
    loader.register(state.State);
    loader.register(setup.DeployerCap);
    loader.register(hotPotatoVector.HotPotatoVector);
    loader.register(priceStatus.PriceStatus);
    loader.register(batchPriceAttestation.BatchPriceAttestation);
    loader.register(batchPriceAttestation.Header);
    loader.register(governanceAction.GovernanceAction);
    loader.register(governanceInstruction.GovernanceInstruction);
    loader.register(setUpdateFee.UpdateFee);
    loader.register(setStalePriceThreshold.StalePriceThreshold);
    loader.register(setGovernanceDataSource.GovernanceDataSource);
    loader.register(setFeeRecipient.PythFeeRecipient);
    loader.register(setDataSources.DataSources);
    loader.register(governance.WormholeVAAVerificationReceipt);
    loader.register(contractUpgrade.ContractUpgraded);
    loader.register(contractUpgrade.UpgradeContract);
    loader.register(migrate.MigrateComplete);
}
