import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { PriceIdentifier } from "../price-identifier/structs";
import { Price } from "../price/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isPriceFeed(type: string): boolean;
export interface PriceFeedFields {
    priceIdentifier: ToField<PriceIdentifier>;
    price: ToField<Price>;
    emaPrice: ToField<Price>;
}
export type PriceFeedReified = Reified<PriceFeed, PriceFeedFields>;
export declare class PriceFeed implements StructClass {
    static readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::price_feed::PriceFeed";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::price_feed::PriceFeed";
    readonly $fullTypeName: "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::price_feed::PriceFeed";
    readonly $typeArgs: [];
    readonly priceIdentifier: ToField<PriceIdentifier>;
    readonly price: ToField<Price>;
    readonly emaPrice: ToField<Price>;
    private constructor();
    static reified(): PriceFeedReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<PriceFeed, PriceFeedFields>;
    static phantom(): PhantomReified<ToTypeStr<PriceFeed>>;
    static get p(): PhantomReified<"0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::price_feed::PriceFeed">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        price_identifier: {
            bytes: number[];
        };
        price: {
            price: {
                negative: boolean;
                magnitude: string;
            };
            conf: string;
            expo: {
                negative: boolean;
                magnitude: string;
            };
            timestamp: string;
        };
        ema_price: {
            price: {
                negative: boolean;
                magnitude: string;
            };
            conf: string;
            expo: {
                negative: boolean;
                magnitude: string;
            };
            timestamp: string;
        };
    }, {
        price_identifier: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        price: {
            price: {
                negative: boolean;
                magnitude: string | number | bigint;
            };
            conf: string | number | bigint;
            expo: {
                negative: boolean;
                magnitude: string | number | bigint;
            };
            timestamp: string | number | bigint;
        };
        ema_price: {
            price: {
                negative: boolean;
                magnitude: string | number | bigint;
            };
            conf: string | number | bigint;
            expo: {
                negative: boolean;
                magnitude: string | number | bigint;
            };
            timestamp: string | number | bigint;
        };
    }>;
    static fromFields(fields: Record<string, any>): PriceFeed;
    static fromFieldsWithTypes(item: FieldsWithTypes): PriceFeed;
    static fromBcs(data: Uint8Array): PriceFeed;
    toJSONField(): {
        priceIdentifier: {
            bytes: number[];
        };
        price: {
            price: {
                negative: boolean;
                magnitude: string;
            };
            conf: string;
            expo: {
                negative: boolean;
                magnitude: string;
            };
            timestamp: string;
        };
        emaPrice: {
            price: {
                negative: boolean;
                magnitude: string;
            };
            conf: string;
            expo: {
                negative: boolean;
                magnitude: string;
            };
            timestamp: string;
        };
    };
    toJSON(): {
        priceIdentifier: {
            bytes: number[];
        };
        price: {
            price: {
                negative: boolean;
                magnitude: string;
            };
            conf: string;
            expo: {
                negative: boolean;
                magnitude: string;
            };
            timestamp: string;
        };
        emaPrice: {
            price: {
                negative: boolean;
                magnitude: string;
            };
            conf: string;
            expo: {
                negative: boolean;
                magnitude: string;
            };
            timestamp: string;
        };
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): PriceFeed;
    static fromJSON(json: Record<string, any>): PriceFeed;
    static fromSuiParsedData(content: SuiParsedData): PriceFeed;
    static fetch(client: SuiClient, id: string): Promise<PriceFeed>;
}
