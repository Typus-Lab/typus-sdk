import { SuiClient, SuiEventFilter, SuiObjectResponse } from "@mysten/sui.js/client";
import { KioskClient } from "@mysten/kiosk";

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

export interface TailsId {
    nftId: string;
    kiosk: string;
    kioskCap: string;
    tails: Tails;
    isPersonal: boolean;
}

export interface kioskOwnerCap {
    kioskId: string;
    objectId: string;
    isPersonal: boolean;
}

export function getkioskOwnerCaps(datas: SuiObjectResponse[]): kioskOwnerCap[] {
    const kioskOwnerCaps: kioskOwnerCap[] = [];

    for (let data of datas) {
        if (data.data?.type == "0x2::kiosk::KioskOwnerCap") {
            // console.log(data.data?.content);
            // @ts-ignore
            const fields = data.data.content.fields;
            kioskOwnerCaps.push({ objectId: fields.id.id, kioskId: fields.for, isPersonal: false });
        } else if (data.data?.type?.endsWith("personal_kiosk::PersonalKioskCap")) {
            // @ts-ignore
            const fields = data.data.content.fields;
            kioskOwnerCaps.push({ objectId: fields.id.id, kioskId: fields.cap.fields.for, isPersonal: true });
        }
    }

    return kioskOwnerCaps;
}

export async function getTailsIds(kioskClient: KioskClient, nftConfig, kioskOwnerCaps: kioskOwnerCap[]) {
    let Tails: TailsId[] = [];

    for (let kioskOwnerCap of kioskOwnerCaps) {
        const res = await kioskClient.getKiosk({ id: kioskOwnerCap.kioskId });
        // console.log(res);
        const tails: TailsId[] = res.items
            .filter((item) => item.type == `${nftConfig.NFT_PACKAGE_ORIGIN}::typus_nft::Tails`)
            .map((item) => {
                // console.log(item.data);
                // @ts-ignore
                const tails = item.data as Tails;
                let t: TailsId = {
                    kiosk: kioskOwnerCap.kioskId,
                    kioskCap: kioskOwnerCap.objectId,
                    isPersonal: kioskOwnerCap.isPersonal,
                    nftId: item.objectId,
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

        const results = await provider.multiGetObjects({ ids: tailsIds.splice(0, len), options: { showContent: true } });

        for (let result of results) {
            // @ts-ignore
            const fields = result.data?.content.fields;

            const tails = fieldsToTails(fields);

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

        const results = await provider.multiGetObjects({ ids: tailsIds.splice(0, len), options: { showContent: true, showOwner: true } });

        for (let result of results) {
            // @ts-ignore
            const owner = result.data?.owner.ObjectOwner;

            // @ts-ignore
            const fields = result.data?.content.fields;

            const tails = fieldsToTails(fields);

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

    const dynamicFields = Array.from(tailsToDynamicField.values());

    var i = 0;

    while (dynamicFields.length > 0) {
        let len = dynamicFields.length > 50 ? 50 : dynamicFields.length;

        const results = await provider.multiGetObjects({
            ids: dynamicFields.splice(0, len),
            options: { showOwner: true },
        });

        for (let result of results) {
            // @ts-ignore
            const owner = result.data?.owner.ObjectOwner;

            DynamicFieldToKiosk.set(dynamicFields.at(i)!, owner);
            i += 1;
        }
    }
    return DynamicFieldToKiosk;
}

export async function getKioskOwner(provider: SuiClient, DynamicFieldToKiosk: Map<string, string>) {
    let KioskToOwner = new Map<string, string>();

    const kiosks = Array.from(DynamicFieldToKiosk.values());

    const uniqueKiosks = kiosks.filter((value, index, self) => {
        return self.findIndex((obj) => obj === value) === index;
    });

    var i = 0;

    while (uniqueKiosks.length > 0) {
        let len = uniqueKiosks.length > 50 ? 50 : uniqueKiosks.length;

        const results = await provider.multiGetObjects({
            ids: uniqueKiosks.splice(0, len),
            options: { showContent: true },
        });

        for (let result of results) {
            // @ts-ignore
            const owner = result.data?.content.fields.owner;

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
    const tails: TailsWithType[] = await getTails(
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

export async function getMintHistory(provider: SuiClient, NFT_PACKAGE: string, vrf_input) {
    const eventFilter: SuiEventFilter = {
        MoveEventType: `${NFT_PACKAGE}::discount_mint::DiscountEventV3`,
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
