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
var authority = __importStar(require("./authority/structs"));
var balancePool = __importStar(require("./balance-pool/structs"));
var bigVector = __importStar(require("./big-vector/structs"));
var dutch = __importStar(require("./dutch/structs"));
var i64 = __importStar(require("./i64/structs"));
var linkedList = __importStar(require("./linked-list/structs"));
var vault = __importStar(require("./vault/structs"));
function registerClasses(loader) {
    loader.register(bigVector.BigVector);
    loader.register(authority.Authority);
    loader.register(balancePool.BalanceInfo);
    loader.register(balancePool.BalancePool);
    loader.register(balancePool.SharedBalancePool);
    loader.register(vault.Activate);
    loader.register(vault.BidShare);
    loader.register(vault.BidVault);
    loader.register(vault.Claim);
    loader.register(vault.Compound);
    loader.register(vault.Delivery);
    loader.register(vault.Deposit);
    loader.register(vault.DepositShare);
    loader.register(vault.DepositVault);
    loader.register(vault.Exercise);
    loader.register(vault.Harvest);
    loader.register(vault.IncentiviseBidder);
    loader.register(vault.NewBidVault);
    loader.register(vault.NewDepositVault);
    loader.register(vault.NewRefundVault);
    loader.register(vault.Recoup);
    loader.register(vault.Redeem);
    loader.register(vault.RefundShare);
    loader.register(vault.RefundVault);
    loader.register(vault.Settle);
    loader.register(vault.Terminate);
    loader.register(vault.TypusBidReceipt);
    loader.register(vault.TypusDepositReceipt);
    loader.register(vault.Unsubscribe);
    loader.register(vault.UpdateFeeConfig);
    loader.register(vault.UpdateFeeShareConfig);
    loader.register(vault.VAULT);
    loader.register(vault.Withdraw);
    loader.register(i64.I64);
    loader.register(dutch.Delivery);
    loader.register(dutch.Terminate);
    loader.register(dutch.Auction);
    loader.register(dutch.Bid);
    loader.register(dutch.DUTCH);
    loader.register(dutch.NewBid);
    loader.register(dutch.RemoveBid);
    loader.register(dutch.UpdateAuctionConfig);
    loader.register(linkedList.Node);
    loader.register(linkedList.LinkedList);
}
