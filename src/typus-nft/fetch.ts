import { KioskClient, KioskListing } from "@mysten/kiosk";
import { SuiGraphQLClient } from "@mysten/sui/graphql";

export interface TailsId {
    nftId: string;
    kiosk: string;
    kioskCap: string;
    tails: Tails | undefined;
    isPersonal: boolean;
    listing?: KioskListing;
}

export interface kioskOwnerCap {
    kioskId: string;
    objectId: string;
    isPersonal: boolean;
}

export async function getTailsIds(kioskClient: KioskClient, NFT_PACKAGE_ORIGIN: string, kioskOwnerCaps: kioskOwnerCap[]) {
    let Tails: TailsId[] = [];

    for (let kioskOwnerCap of kioskOwnerCaps) {
        let res = await kioskClient.getKiosk({ id: kioskOwnerCap.kioskId });
        // console.log(res);
        let tails: TailsId[] = res.items
            .filter((item) => item.type == `${NFT_PACKAGE_ORIGIN}::typus_nft::Tails`)
            .map((item) => {
                // console.log(item);
                // @ts-ignore
                let tails = item.data as Tails;
                let t: TailsId = {
                    kiosk: kioskOwnerCap.kioskId,
                    kioskCap: kioskOwnerCap.objectId,
                    isPersonal: kioskOwnerCap.isPersonal,
                    nftId: item.objectId,
                    listing: item.listing,
                    tails,
                };

                return t;
            });
        // console.log(tails);

        Tails = Tails.concat(tails);
    }

    return Tails;
}

export interface TailsWithType extends Tails {
    type: string | null | undefined;
}

export async function getTails(provider: SuiGraphQLClient, tailsIds: string[]) {
    let Tails: TailsWithType[] = [];

    while (tailsIds.length > 0) {
        let len = tailsIds.length > 50 ? 50 : tailsIds.length;

        let results = await provider.getObjects({ objectIds: tailsIds.splice(0, len), include: { json: true } });

        for (let result of results.objects) {
            if (result instanceof Error) {
                console.error(result.cause)
                continue;
            }

            let json = result.json!;
            // @ts-ignore
            let tails = json as Tails;

            let attributes = new Map<string, string>();
            // @ts-ignore
            json.attributes.contents.forEach((f) => attributes.set(f.key, f.value));
            let u64_padding = new Map<string, string>();
            // @ts-ignore
            json.u64_padding.contents.forEach((f) => u64_padding.set(f.key, f.value));

            tails.attributes = attributes;
            tails.u64_padding = u64_padding;


            // @ts-ignore
            Tails.push({ ...tails, type: result.type });
        }
    }
    return Tails;
}

export interface Tails {
    id: string;
    name: string;
    number: string;
    url: string;
    level: string;
    exp: string;
    first_bid: string;
    first_deposit: string;
    first_deposit_nft: string;
    attributes: Map<string, string>;
    u64_padding: Map<string, string>;
}

export function getLevelExp(level: number): number | undefined {
    switch (level) {
        case 1:
            return LevelExpVec[1];
        case 2:
            return LevelExpVec[2];
        case 3:
            return LevelExpVec[3];
        case 4:
            return LevelExpVec[4];
        case 5:
            return LevelExpVec[5];
        case 6:
            return LevelExpVec[6];
        case 7:
            return LevelExpVec[7];
    }
}

export const LevelExpVec = [0, 0, 1_000, 50_000, 250_000, 1_000_000, 5_000_000, 20_000_000];

export function calculateLevelReward(totalRewards: number, levelShares: number[], numOfHolders: number[]): number[] {
    // Step 1: Calculate original level rewards (per holder)
    let totalShares: number = levelShares.reduce((acc, share) => acc + share, 0);
    let originalRewardPerHolder: number[] = levelShares.map((levelShare, index) => {
        let num: number = numOfHolders[index];
        let levelRewardPerHolder: number = num > 0 ? (totalRewards * levelShare) / totalShares / num : 0;
        return Math.floor(levelRewardPerHolder);
    });
    let originalLevelRewards: number[] = originalRewardPerHolder.map((reward, index) => reward * numOfHolders[index]);
    let distributedRewards: number = originalLevelRewards.reduce((acc, reward) => acc + reward, 0);
    let emptyLevelRewards: number = totalRewards - distributedRewards;

    // Step 2: Distribute rewards from empty levels
    let reversedOriginalRewardPerHolder: number[] = originalRewardPerHolder.slice().reverse();
    let reversedNumOfHolders: number[] = numOfHolders.slice().reverse();
    let reversedScaledRewardPerHolder: number[] = [];
    if (emptyLevelRewards > 0) {
        let undistributedRewards: number = emptyLevelRewards;
        let uncalculatedDistributedRewards: number = distributedRewards;
        reversedScaledRewardPerHolder = reversedOriginalRewardPerHolder.map((rewardPerHolder, index) => {
            let num: number = reversedNumOfHolders[index];
            let scaledRewardPerHolder: number =
                num > 0
                    ? uncalculatedDistributedRewards > 0
                        ? (rewardPerHolder * (uncalculatedDistributedRewards + undistributedRewards)) / uncalculatedDistributedRewards
                        : rewardPerHolder
                    : 0;

            undistributedRewards -= (scaledRewardPerHolder - rewardPerHolder) * num;
            uncalculatedDistributedRewards -= rewardPerHolder * num;
            return Math.floor(scaledRewardPerHolder);
        });
    } else {
        reversedScaledRewardPerHolder = reversedOriginalRewardPerHolder.slice();
    }

    // Step 3: Capped level reward
    let reversedCappedRewardPerHolder: number[] = [reversedOriginalRewardPerHolder[0]];
    var tempHighLevelReward: number = 0;
    reversedScaledRewardPerHolder.forEach((highLevelReward, index) => {
        let lowLevelReward: number = reversedScaledRewardPerHolder[index + 1] || 0;
        tempHighLevelReward =
            highLevelReward > 0
                ? tempHighLevelReward > 0
                    ? Math.min(highLevelReward, tempHighLevelReward)
                    : highLevelReward
                : tempHighLevelReward;
        reversedCappedRewardPerHolder.push(tempHighLevelReward > 0 ? Math.min(lowLevelReward, tempHighLevelReward) : lowLevelReward);
    });
    reversedCappedRewardPerHolder.pop();
    let cappedRewardPerHolder: number[] = reversedCappedRewardPerHolder.slice().reverse();

    // Step 4: Distribute capped reward from Step 3 into each level
    let distributedRewardsStep4: number = reversedCappedRewardPerHolder.reduce(
        (acc, reward, index) => acc + reward * reversedNumOfHolders[index],
        0
    );
    var undistributedRewardsStep4: number = totalRewards - distributedRewardsStep4;
    var uncalculatedDistributedRewardsStep4: number = distributedRewardsStep4;
    var levelReward: number[] = cappedRewardPerHolder.map((rewardPerHolder, index) => {
        let num: number = reversedNumOfHolders[index];
        let scaledRewardPerHolder: number =
            uncalculatedDistributedRewardsStep4 > 0
                ? (rewardPerHolder * (uncalculatedDistributedRewardsStep4 + undistributedRewardsStep4)) /
                uncalculatedDistributedRewardsStep4
                : rewardPerHolder;

        undistributedRewardsStep4 -= (scaledRewardPerHolder - rewardPerHolder) * num;
        uncalculatedDistributedRewardsStep4 -= rewardPerHolder * num;
        return Math.floor(scaledRewardPerHolder);
    });

    return levelReward;
}
