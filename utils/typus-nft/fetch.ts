// import { SuiClient } from "@mysten/sui.js/dist/cjs/client";
// import { JsonRpcProvider } from "@mysten/sui.js/dist/cjs/providers/json-rpc-provider";
// import { TransactionBlock } from "@mysten/sui.js/transactions";
import { SuiClient } from "@mysten/sui.js/client";
import { OwnedKiosks, KioskClient, Network } from "@mysten/kiosk";

export async function getPool(provider: SuiClient, pool: string) {
    const res = await provider.getObject({ id: pool, options: { showContent: true } });

    // @ts-ignore
    const fields = res.data?.content.fields;

    const poolData: PoolData = {
        pool_id: pool,
        is_live: fields.is_live,
        start_ms: fields.start_ms,
        num: Number(fields.num),
        remaining: Number(fields.tails.fields.contents.fields.size),
    };

    return poolData;
}

export interface PoolData {
    pool_id: string;
    is_live: boolean;
    start_ms: string;
    num: number;
    remaining: number;
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

    const res = await provider.multiGetObjects({ ids: pools, options: { showContent: true } });

    const poolMap = new Map<string, PoolData>();

    necklaces.forEach(async (necklace, i) => {
        // @ts-ignore
        const fields = res[i].data?.content.fields;

        // console.log(fields);

        const poolData: PoolData = {
            pool_id: pools[i],
            is_live: fields.is_live,
            start_ms: fields.start_ms,
            num: Number(fields.num),
            remaining: Number(fields.tails.fields.contents.fields.size),
        };

        poolMap.set(necklace, poolData);
    });

    return poolMap;
}

export async function getWhitelistMap(nftConfig, wlTokens) {
    let pools: string[] = necklaces.map((necklace) => nftConfig[necklace]);

    // console.log(pools);

    const whitelistMap = new Map<string, string[]>();

    necklaces.forEach(async (necklace, i) => {
        const tokens = wlTokens.filter(
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

interface TailsId {
    nftId: string;
    kiosk: string;
    kioskCap: string;
    tails: Tails;
}

export async function getTailsIds(kioskClient: KioskClient, nftConfig, address: string) {
    let kiosks = await kioskClient.getOwnedKiosks({ address });
    // let data = kiosks.kioskOwnerCaps;
    // console.log(kiosks);

    let Tails: TailsId[] = [];

    for (let kioskOwnerCap of kiosks.kioskOwnerCaps) {
        const res = await kioskClient.getKiosk({ id: kioskOwnerCap.kioskId, options: { withKioskFields: true, withObjects: true } });
        // console.log(res);
        const tails: TailsId[] = res.items
            .filter((item) => item.type == `${nftConfig.NFT_PACKAGE}::typus_nft::Tails`)
            .map((item) => {
                // console.log(item.data);
                // @ts-ignore
                const tails = item.data as Tails;
                let t: TailsId = {
                    nftId: item.objectId,
                    kiosk: kioskOwnerCap.kioskId,
                    kioskCap: kioskOwnerCap.objectId,
                    tails,
                };

                return t;
            });
        // console.log(tails);

        Tails = Tails.concat(tails);
    }

    return Tails;
}

export function fieldsToTails(fields) {
    // console.log(fields.attributes.fields.contents);
    const attributes = new Map<string, string>();
    fields.attributes.fields.contents.forEach((f) => attributes.set(f.fields.key, f.fields.value));

    const u64_padding = new Map<string, string>();
    fields.u64_padding.fields.contents.forEach((f) => u64_padding.set(f.fields.key, f.fields.value));

    const tails: Tails = {
        id: fields.id.id,
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
