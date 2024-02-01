// import { SuiClient } from "@mysten/sui.js/dist/cjs/client";
// import { JsonRpcProvider } from "@mysten/sui.js/dist/cjs/providers/json-rpc-provider";
// import { TransactionBlock } from "@mysten/sui.js/transactions";
import { SuiClient, SuiEventFilter } from "@mysten/sui.js/client";
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
            table: fields.tails.fields.contents.fields.id.id,
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

export async function getTails(provider: SuiClient, tailsIds: string[]) {
    let Tails: Tails[] = [];

    while (tailsIds.length > 0) {
        let len = tailsIds.length > 50 ? 50 : tailsIds.length;

        const results = await provider.multiGetObjects({ ids: tailsIds.splice(0, len), options: { showContent: true } });

        for (let result of results) {
            // @ts-ignore
            const fields = result.data?.content.fields;

            const tails = fieldsToTails(fields);

            Tails.push(tails);
        }
    }
    return Tails;
}

export function fieldsToTails(fields) {
    let id = fields.id.id;
    if (fields.value) {
        fields = fields.value.fields;
    }
    // console.log(fields.attributes.fields.contents);
    const attributes = new Map<string, string>();
    fields.attributes.fields.contents.forEach((f) => attributes.set(f.fields.key, f.fields.value));

    const u64_padding = new Map<string, string>();
    fields.u64_padding.fields.contents.forEach((f) => u64_padding.set(f.fields.key, f.fields.value));

    const tails: Tails = {
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

export async function getTableTails(provider: SuiClient, parentId: string): Promise<Tails[]> {
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
    const tails: Tails[] = await getTails(
        provider,
        datas.map((data) => data.objectId)
    );
    // console.log(tails);
    const levelUsers = [0, 0, 0, 0, 0, 0, 0];
    tails.forEach((tail) => (levelUsers[Number(tail.level) - 1] += 1));
    console.log("Level Users: ", levelUsers);

    return tails;
}

export async function getDiscountPool(provider: SuiClient, pool: string) {
    const res = await provider.getObject({ id: pool, options: { showContent: true } });
    // console.log(res);

    // @ts-ignore
    const poolData = res.data?.content.fields as DiscountPoolData;

    // @ts-ignore
    const inventory = poolData.tails.fields.contents.fields.size - poolData.requests.length;
    poolData.inventory = inventory;

    const dynamicField = await provider.getDynamicFieldObject({
        parentId: pool,
        name: { type: "0x1::string::String", value: "total" },
    });
    // @ts-ignore
    const total = dynamicField.data?.content.fields.value;
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

export async function getMintHistory(provider: SuiClient, NFT_PACKAGE_UPGRADE: string, vrf_input) {
    const eventFilter: SuiEventFilter = {
        MoveEventType: `${NFT_PACKAGE_UPGRADE}::discount_mint::DiscountEventV3`,
    };

    var result = await provider.queryEvents({ query: eventFilter, order: "descending" });
    // console.log(result);

    // @ts-ignore
    // result.data.forEach((d) => console.log(d.parsedJson.vrf_input));

    // @ts-ignore
    const res = result.data.filter((d) => d.parsedJson.vrf_input.toString() == vrf_input.toString());

    if (res.length > 0) {
        const eventFilter: SuiEventFilter = {
            Transaction: res[0].id.txDigest,
        };

        var result = await provider.queryEvents({ query: eventFilter, order: "descending" });
        // console.log(result);
        return result;
    }
}
