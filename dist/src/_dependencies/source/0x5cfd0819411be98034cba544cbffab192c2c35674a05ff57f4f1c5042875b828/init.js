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
var discountMint = __importStar(require("./discount-mint/structs"));
var royaltyRule = __importStar(require("./royalty-rule/structs"));
var staking = __importStar(require("./staking/structs"));
var tableVec = __importStar(require("./table-vec/structs"));
var typusNft = __importStar(require("./typus-nft/structs"));
function registerClasses(loader) {
    loader.register(tableVec.TableVec);
    loader.register(royaltyRule.Rule);
    loader.register(royaltyRule.Config);
    loader.register(typusNft.ManagerCap);
    loader.register(typusNft.MintEvent);
    loader.register(typusNft.ExpUpEvent);
    loader.register(typusNft.FirstBidEvent);
    loader.register(typusNft.FirstDepositEvent);
    loader.register(typusNft.LevelUpEvent);
    loader.register(typusNft.NewManagerCapEvent);
    loader.register(typusNft.Pool);
    loader.register(typusNft.Royalty);
    loader.register(typusNft.RoyaltyUpdateEvent);
    loader.register(typusNft.TYPUS_NFT);
    loader.register(typusNft.Tails);
    loader.register(typusNft.Whitelist);
    loader.register(discountMint.ManagerCap);
    loader.register(discountMint.Pool);
    loader.register(discountMint.DiscountEvent);
    loader.register(discountMint.DiscountEventV2);
    loader.register(discountMint.DiscountEventV3);
    loader.register(discountMint.MintRequest);
    loader.register(discountMint.MintRequestEvent);
    loader.register(staking.ManagerCap);
    loader.register(staking.Registry);
    loader.register(staking.LevelUpEvent);
    loader.register(staking.NftExtension);
    loader.register(staking.StakingTails);
}
