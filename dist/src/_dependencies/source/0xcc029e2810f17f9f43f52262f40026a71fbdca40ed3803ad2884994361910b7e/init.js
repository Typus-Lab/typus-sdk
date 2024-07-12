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
var bytes20 = __importStar(require("./bytes20/structs"));
var bytes32 = __importStar(require("./bytes32/structs"));
var consumedVaas = __importStar(require("./consumed-vaas/structs"));
var cursor = __importStar(require("./cursor/structs"));
var emitter = __importStar(require("./emitter/structs"));
var externalAddress = __importStar(require("./external-address/structs"));
var feeCollector = __importStar(require("./fee-collector/structs"));
var governanceMessage = __importStar(require("./governance-message/structs"));
var guardianSet = __importStar(require("./guardian-set/structs"));
var guardianSignature = __importStar(require("./guardian-signature/structs"));
var guardian = __importStar(require("./guardian/structs"));
var migrate = __importStar(require("./migrate/structs"));
var packageUtils = __importStar(require("./package-utils/structs"));
var publishMessage = __importStar(require("./publish-message/structs"));
var setFee = __importStar(require("./set-fee/structs"));
var set = __importStar(require("./set/structs"));
var setup = __importStar(require("./setup/structs"));
var state = __importStar(require("./state/structs"));
var transferFee = __importStar(require("./transfer-fee/structs"));
var updateGuardianSet = __importStar(require("./update-guardian-set/structs"));
var upgradeContract = __importStar(require("./upgrade-contract/structs"));
var vaa = __importStar(require("./vaa/structs"));
var versionControl = __importStar(require("./version-control/structs"));
function registerClasses(loader) {
    loader.register(cursor.Cursor);
    loader.register(bytes32.Bytes32);
    loader.register(externalAddress.ExternalAddress);
    loader.register(packageUtils.CurrentVersion);
    loader.register(packageUtils.CurrentPackage);
    loader.register(packageUtils.PackageInfo);
    loader.register(packageUtils.PendingPackage);
    loader.register(set.Set);
    loader.register(set.Empty);
    loader.register(consumedVaas.ConsumedVAAs);
    loader.register(bytes20.Bytes20);
    loader.register(versionControl.V__DUMMY);
    loader.register(versionControl.V__0_2_0);
    loader.register(guardianSignature.GuardianSignature);
    loader.register(guardian.Guardian);
    loader.register(guardianSet.GuardianSet);
    loader.register(feeCollector.FeeCollector);
    loader.register(state.LatestOnly);
    loader.register(state.State);
    loader.register(vaa.VAA);
    loader.register(emitter.EmitterCap);
    loader.register(emitter.EmitterCreated);
    loader.register(emitter.EmitterDestroyed);
    loader.register(governanceMessage.DecreeReceipt);
    loader.register(governanceMessage.DecreeTicket);
    loader.register(upgradeContract.ContractUpgraded);
    loader.register(upgradeContract.GovernanceWitness);
    loader.register(upgradeContract.UpgradeContract);
    loader.register(migrate.MigrateComplete);
    loader.register(publishMessage.MessageTicket);
    loader.register(publishMessage.WormholeMessage);
    loader.register(setFee.GovernanceWitness);
    loader.register(setFee.SetFee);
    loader.register(setup.DeployerCap);
    loader.register(transferFee.GovernanceWitness);
    loader.register(transferFee.TransferFee);
    loader.register(updateGuardianSet.GovernanceWitness);
    loader.register(updateGuardianSet.GuardianSetAdded);
    loader.register(updateGuardianSet.UpdateGuardianSet);
}
