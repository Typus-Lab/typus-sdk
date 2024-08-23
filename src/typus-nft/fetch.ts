import { SuiClient, SuiEventFilter, SuiObjectResponse } from "@mysten/sui.js/client";
import { KioskClient, KioskListing } from "@mysten/kiosk";

export async function getPool(provider: SuiClient, pool: string) {
    let res = await provider.getObject({ id: pool, options: { showContent: true } });

    // @ts-ignore
    let fields = res.data?.content.fields;

    let poolData: PoolData = {
        pool_id: pool,
        is_live: fields.is_live,
        start_ms: fields.start_ms,
        num: Number(fields.num),
        remaining: Number(fields.tails.fields.contents.fields.size),
        table: fields.tails.fields.contents.fields.id.id,
    };

    return poolData;
}

export interface PoolData {
    pool_id: string;
    is_live: boolean;
    start_ms: string;
    num: number;
    remaining: number;
    table: string;
}

export const necklaces = [
    "none",
    "bucket_protocol",
    "kriya_dex",
    "cetus_protocol",
    "ethos_wallet",
    "typus",
    "mysten_labs",
    "navi_protocol",
    "scallop_sui",
    "shinami_corp",
    "studio_mirai",
    "sui_network",
    "blockvision",
    "team",
    "nft_vault",
];

export async function getPoolMap(provider: SuiClient, nftConfig) {
    let pools: string[] = necklaces.map((necklace) => nftConfig[necklace]);

    let res = await provider.multiGetObjects({ ids: pools, options: { showContent: true } });

    let poolMap = new Map<string, PoolData>();

    necklaces.forEach(async (necklace, i) => {
        // @ts-ignore
        let fields = res[i].data?.content.fields;

        // console.log(fields);

        let poolData: PoolData = {
            pool_id: pools[i],
            is_live: fields.is_live,
            start_ms: fields.start_ms,
            num: Number(fields.num),
            remaining: Number(fields.tails.fields.contents.fields.size),
            table: fields.tails.fields.contents.fields.id.id,
        };

        poolMap.set(necklace, poolData);
    });

    return poolMap;
}

export async function getWhitelistMap(nftConfig, wlTokens) {
    let pools: string[] = necklaces.map((necklace) => nftConfig[necklace]);

    // console.log(pools);

    let whitelistMap = new Map<string, string[]>();

    necklaces.forEach(async (necklace, i) => {
        let tokens = wlTokens.filter(
            (wlToken) =>
                // @ts-ignore
                wlToken.data?.content?.fields.for == pools[i]
        );

        whitelistMap.set(
            necklace,
            tokens.map((token) => token.data?.objectId)
        );
    });

    return whitelistMap;
}

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

export function getkioskOwnerCaps(datas: SuiObjectResponse[]): kioskOwnerCap[] {
    let kioskOwnerCaps: kioskOwnerCap[] = [];

    for (let data of datas) {
        if (data.data?.type == "0x2::kiosk::KioskOwnerCap") {
            // console.log(data.data?.content);
            // @ts-ignore
            let fields = data.data.content.fields;
            kioskOwnerCaps.push({ objectId: fields.id.id, kioskId: fields.for, isPersonal: false });
        } else if (data.data?.type?.endsWith("personal_kiosk::PersonalKioskCap")) {
            // @ts-ignore
            let fields = data.data.content.fields;
            kioskOwnerCaps.push({ objectId: fields.id.id, kioskId: fields.cap.fields.for, isPersonal: true });
        }
    }

    return kioskOwnerCaps;
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

export async function getTails(provider: SuiClient, tailsIds: string[]) {
    let Tails: TailsWithType[] = [];

    while (tailsIds.length > 0) {
        let len = tailsIds.length > 50 ? 50 : tailsIds.length;

        let results = await provider.multiGetObjects({ ids: tailsIds.splice(0, len), options: { showContent: true } });

        for (let result of results) {
            // @ts-ignore
            let fields = result.data?.content.fields;

            let tails = fieldsToTails(fields);

            Tails.push({ ...tails, type: result.data?.type });
        }
    }
    return Tails;
}

export async function getTailsDynamicField(provider: SuiClient, tailsIds: string[]): Promise<[Tails[], Map<string, string>]> {
    let Tails: TailsWithType[] = [];

    let tailsToDynamicField = new Map<string, string>();
    // let DynamicFieldToKiosk = new Map<string, string>();
    // let KioskToOwner = new Map<string, string>();

    while (tailsIds.length > 0) {
        let len = tailsIds.length > 50 ? 50 : tailsIds.length;

        let results = await provider.multiGetObjects({ ids: tailsIds.splice(0, len), options: { showContent: true, showOwner: true } });
        // console.log(results);

        for (let result of results) {
            // @ts-ignore
            let owner = result.data?.owner.ObjectOwner;

            // @ts-ignore
            let fields = result.data?.content.fields;
            // console.log(fields);

            let tails = fieldsToTails(fields);

            Tails.push({ ...tails, type: result.data?.type });

            if (owner) {
                tailsToDynamicField.set(tails.id, owner);
            } else {
                tailsToDynamicField.set(tails.id, "");
            }
        }
    }
    return [Tails, tailsToDynamicField];
}

export async function getTailsKiosk(provider: SuiClient, tailsToDynamicField: Map<string, string>) {
    let DynamicFieldToKiosk = new Map<string, string>();
    // let KioskToOwner = new Map<string, string>();

    let dynamicFields = Array.from(tailsToDynamicField.values());

    var i = 0;

    while (dynamicFields.length > 0) {
        let len = dynamicFields.length > 50 ? 50 : dynamicFields.length;

        let results = await provider.multiGetObjects({
            ids: dynamicFields.splice(0, len),
            options: { showOwner: true },
        });

        for (let result of results) {
            // @ts-ignore
            let owner = result.data?.owner.ObjectOwner;

            DynamicFieldToKiosk.set(dynamicFields.at(i)!, owner);
            i += 1;
        }
    }
    return DynamicFieldToKiosk;
}

export async function getKioskOwner(provider: SuiClient, DynamicFieldToKiosk: Map<string, string>) {
    let KioskToOwner = new Map<string, string>();

    let kiosks = Array.from(DynamicFieldToKiosk.values());

    let uniqueKiosks = kiosks.filter((value, index, self) => {
        return self.findIndex((obj) => obj === value) === index;
    });

    var i = 0;

    while (uniqueKiosks.length > 0) {
        let len = uniqueKiosks.length > 50 ? 50 : uniqueKiosks.length;

        let results = await provider.multiGetObjects({
            ids: uniqueKiosks.splice(0, len),
            options: { showContent: true },
        });

        for (let result of results) {
            // @ts-ignore
            let owner = result.data?.content.fields.owner;

            KioskToOwner.set(uniqueKiosks.at(i)!, owner);
            i += 1;
        }
    }
    return KioskToOwner;
}

export function fieldsToTails(fields) {
    let id = fields.id.id;
    if (fields.value) {
        fields = fields.value.fields;
    }
    // console.log(fields.attributes.fields.contents);
    let attributes = new Map<string, string>();
    fields.attributes.fields.contents.forEach((f) => attributes.set(f.fields.key, f.fields.value));

    let u64_padding = new Map<string, string>();
    fields.u64_padding.fields.contents.forEach((f) => u64_padding.set(f.fields.key, f.fields.value));

    let tails: Tails = {
        id,
        name: fields.name,
        number: fields.number,
        url: fields.url,
        level: fields.level,
        exp: fields.exp,
        first_bid: fields.first_bid,
        first_deposit: fields.first_deposit,
        first_deposit_nft: fields.first_deposit_nft,
        attributes,
        u64_padding,
    };

    return tails;
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

export async function getTableTails(provider: SuiClient, parentId: string): Promise<TailsWithType[]> {
    var result = await provider.getDynamicFields({
        parentId,
    });
    var datas = result.data;
    while (result.hasNextPage) {
        result = await provider.getDynamicFields({
            parentId,
            cursor: result.nextCursor,
        });
        datas = datas.concat(result.data);
    }
    // console.log(datas);
    let tails: TailsWithType[] = await getTails(
        provider,
        datas.map((data) => data.objectId)
    );
    // console.log(tails);
    let levelUsers = [0, 0, 0, 0, 0, 0, 0];
    tails.forEach((tail) => (levelUsers[Number(tail.level) - 1] += 1));
    console.log("Level Users: ", levelUsers);

    return tails;
}

export async function getDiscountPool(provider: SuiClient, pool: string) {
    let res = await provider.getObject({ id: pool, options: { showContent: true } });
    // console.log(res);

    // @ts-ignore
    let poolData = res.data?.content.fields as DiscountPoolData;

    // @ts-ignore
    let inventory = poolData.tails.fields.contents.fields.size - poolData.requests.length;
    poolData.inventory = inventory;

    let dynamicField = await provider.getDynamicFieldObject({
        parentId: pool,
        name: { type: "0x1::string::String", value: "total" },
    });
    // @ts-ignore
    let total = dynamicField.data?.content.fields.value;
    poolData.total = total;

    return poolData;
}

export interface DiscountPoolData {
    id: string;
    num: string;
    total: string;
    price: string; // SUI decimal 9
    start_ms: string;
    end_ms: string;
    authority: string;
    public_key: number[];
    discount_pcts: string[]; // decimal 2
    is_live: boolean;
    balance: string;
    inventory: number;
}

export async function getMintHistory(provider: SuiClient, NFT_PACKAGE: string, vrf_input) {
    let eventFilter: SuiEventFilter = {
        MoveEventType: `${NFT_PACKAGE}::discount_mint::DiscountEventV3`,
    };

    var result = await provider.queryEvents({ query: eventFilter, order: "descending" });
    // console.log(result);

    // @ts-ignore
    // result.data.forEach((d) => console.log(d.parsedJson.vrf_input));

    // @ts-ignore
    let res = result.data.filter((d) => d.parsedJson.vrf_input.toString() == vrf_input.toString());

    if (res.length > 0) {
        let eventFilter: SuiEventFilter = {
            Transaction: res[0].id.txDigest,
        };

        var result = await provider.queryEvents({ query: eventFilter, order: "descending" });
        // console.log(result);
        return result;
    }
}

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
