import { SuiClient, SuiObjectResponse } from "@mysten/sui.js/client";
import { KioskClient, KioskListing } from "@mysten/kiosk";
export declare function getPool(provider: SuiClient, pool: string): Promise<PoolData>;
export interface PoolData {
    pool_id: string;
    is_live: boolean;
    start_ms: string;
    num: number;
    remaining: number;
    table: string;
}
export declare const necklaces: string[];
export declare function getPoolMap(provider: SuiClient, nftConfig: any): Promise<Map<string, PoolData>>;
export declare function getWhitelistMap(nftConfig: any, wlTokens: any): Promise<Map<string, string[]>>;
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
export declare function getkioskOwnerCaps(datas: SuiObjectResponse[]): kioskOwnerCap[];
export declare function getTailsIds(kioskClient: KioskClient, NFT_PACKAGE_ORIGIN: string, kioskOwnerCaps: kioskOwnerCap[]): Promise<TailsId[]>;
export interface TailsWithType extends Tails {
    type: string | null | undefined;
}
export declare function getTails(provider: SuiClient, tailsIds: string[]): Promise<TailsWithType[]>;
export declare function getTailsDynamicField(provider: SuiClient, tailsIds: string[]): Promise<[Tails[], Map<string, string>]>;
export declare function getTailsKiosk(provider: SuiClient, tailsToDynamicField: Map<string, string>): Promise<Map<string, string>>;
export declare function getKioskOwner(provider: SuiClient, DynamicFieldToKiosk: Map<string, string>): Promise<Map<string, string>>;
export declare function fieldsToTails(fields: any): Tails;
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
export declare function getLevelExp(level: number): number | undefined;
export declare const LevelExpVec: number[];
export declare function getTableTails(provider: SuiClient, parentId: string): Promise<TailsWithType[]>;
export declare function getDiscountPool(provider: SuiClient, pool: string): Promise<DiscountPoolData>;
export interface DiscountPoolData {
    id: string;
    num: string;
    total: string;
    price: string;
    start_ms: string;
    end_ms: string;
    authority: string;
    public_key: number[];
    discount_pcts: string[];
    is_live: boolean;
    balance: string;
    inventory: number;
}
export declare function getMintHistory(provider: SuiClient, NFT_PACKAGE: string, vrf_input: any): Promise<import("@mysten/sui.js/client").PaginatedEvents | undefined>;
