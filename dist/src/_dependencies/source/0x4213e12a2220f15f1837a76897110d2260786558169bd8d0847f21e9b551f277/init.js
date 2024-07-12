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
var airdrop = __importStar(require("./airdrop/structs"));
var bigVector = __importStar(require("./big-vector/structs"));
var critbit = __importStar(require("./critbit/structs"));
var ecosystem = __importStar(require("./ecosystem/structs"));
var leaderboard = __importStar(require("./leaderboard/structs"));
var linkedObjectTable = __importStar(require("./linked-object-table/structs"));
var linkedSet = __importStar(require("./linked-set/structs"));
var tgld = __importStar(require("./tgld/structs"));
var user = __importStar(require("./user/structs"));
function registerClasses(loader) {
    loader.register(ecosystem.Version);
    loader.register(ecosystem.ManagerCap);
    loader.register(ecosystem.FeeInfo);
    loader.register(ecosystem.FeePool);
    loader.register(ecosystem.SendFeeEvent);
    loader.register(bigVector.BigVector);
    loader.register(bigVector.Slice);
    loader.register(airdrop.Airdrop);
    loader.register(airdrop.AirdropInfo);
    loader.register(airdrop.ClaimAirdropEvent);
    loader.register(airdrop.RemoveAirdropEvent);
    loader.register(airdrop.SetAirdropEvent);
    loader.register(airdrop.TypusAirdropRegistry);
    loader.register(critbit.CritbitTree);
    loader.register(critbit.InternalNode);
    loader.register(critbit.Leaf);
    loader.register(linkedSet.Node);
    loader.register(linkedSet.LinkedSet);
    loader.register(linkedObjectTable.Node);
    loader.register(linkedObjectTable.LinkedObjectTable);
    loader.register(leaderboard.ActivateLeaderboardEvent);
    loader.register(leaderboard.DeactivateLeaderboardEvent);
    loader.register(leaderboard.ExtendLeaderboardEvent);
    loader.register(leaderboard.Leaderboard);
    loader.register(leaderboard.RemoveLeaderboardEvent);
    loader.register(leaderboard.ScoreEvent);
    loader.register(leaderboard.TypusLeaderboardRegistry);
    loader.register(tgld.BurnEvent);
    loader.register(tgld.MintEvent);
    loader.register(tgld.TGLD);
    loader.register(tgld.TgldRegistry);
    loader.register(user.AddAccumulatedTgldAmount);
    loader.register(user.AddTailsExpAmount);
    loader.register(user.Metadata);
    loader.register(user.RemoveTailsExpAmount);
    loader.register(user.TypusUserRegistry);
}
