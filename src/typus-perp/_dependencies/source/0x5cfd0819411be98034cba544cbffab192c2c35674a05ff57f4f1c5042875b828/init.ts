import * as discountMint from "./discount-mint/structs";
import * as royaltyRule from "./royalty-rule/structs";
import * as staking from "./staking/structs";
import * as tableVec from "./table-vec/structs";
import * as typusNft from "./typus-nft/structs";
import { StructClassLoader } from "../../../_framework/loader";

export function registerClasses(loader: StructClassLoader) {
    loader.register(tableVec.TableVec);
    loader.register(royaltyRule.Config);
    loader.register(royaltyRule.Rule);
    loader.register(typusNft.ManagerCap);
    loader.register(typusNft.ExpDownEvent);
    loader.register(typusNft.ExpUpEvent);
    loader.register(typusNft.FirstBidEvent);
    loader.register(typusNft.FirstDepositEvent);
    loader.register(typusNft.LevelUpEvent);
    loader.register(typusNft.MintEvent);
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
    loader.register(staking.LevelUpEvent);
    loader.register(staking.NftExtension);
    loader.register(staking.Registry);
    loader.register(staking.StakingTails);
}
