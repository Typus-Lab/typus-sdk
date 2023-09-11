// import { SuiClient } from "@mysten/sui.js/dist/cjs/client";
// import { JsonRpcProvider } from "@mysten/sui.js/dist/cjs/providers/json-rpc-provider";
import { JsonRpcProvider } from "@mysten/sui.js";
import { fetchKiosk, OwnedKiosks } from "@mysten/kiosk";

export async function getPool(provider: JsonRpcProvider, pool: string) {
    const res = await provider.getObject({ id: pool, options: { showContent: true } });

    // @ts-ignore
    const fields = res.data?.content.fields;

    const poolData: PoolData = {
        pool_id: pool,
        is_live: fields.is_live,
        num: Number(fields.num),
        remaining: Number(fields.tails.fields.contents.fields.size),
    };

    return poolData;
}

export interface PoolData {
    pool_id: string;
    is_live: boolean;
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

export async function getPoolMap(provider: JsonRpcProvider, nftConfig) {
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
            num: Number(fields.num),
            remaining: Number(fields.tails.fields.contents.fields.size),
        };

        poolMap.set(necklace, poolData);
    });

    return poolMap;
}

export async function getWhitelistMap(nftConfig, wlTokens) {
    let pools: string[] = necklaces.map((necklace) => nftConfig[necklace]);

    console.log(pools);

    const whitelistMap = new Map<string, string[]>();

    necklaces.forEach(async (necklace, i) => {
        const tokens = wlTokens.filter(
            (wlToken) =>
                // @ts-ignore
                wlToken.data?.content?.fields.for == pools[i]
        );

        console.log(tokens);

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
}

export async function getTailsIds(provider: JsonRpcProvider, nftConfig, kiosks: OwnedKiosks) {
    let Tails: TailsId[] = [];

    for (let kioskOwnerCap of kiosks.kioskOwnerCaps) {
        const res = await fetchKiosk(provider, kioskOwnerCap.kioskId, {}, {});
        // console.log(res);
        const tails: TailsId[] = res.data.items
            .filter((item) => item.type == `${nftConfig.PACKAGE}::typus_nft::Tails`)
            .map((item) => {
                let t: TailsId = {
                    nftId: item.objectId,
                    kiosk: kioskOwnerCap.kioskId,
                    kioskCap: kioskOwnerCap.objectId,
                };
                return t;
            });
        // console.log(tails);

        Tails = Tails.concat(tails);
    }

    return Tails;
}

export async function getTails(provider: JsonRpcProvider, tailsIds: string[]) {
    let Tails: Tails[] = [];

    while (tailsIds.length > 0) {
        let len = tailsIds.length > 50 ? 50 : tailsIds.length;

        const results = await provider.multiGetObjects({ ids: tailsIds.splice(0, len), options: { showContent: true } });

        for (let result of results) {
            // @ts-ignore
            const fields = result.data?.content.fields;

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
            };

            Tails.push(tails);
        }
    }
    return Tails;
}

interface Tails {
    id: string;
    name: string;
    number: string;
    url: string;
    level: string;
    exp: string;
    first_bid: string;
    first_deposit: string;
    first_deposit_nft: string;
}
