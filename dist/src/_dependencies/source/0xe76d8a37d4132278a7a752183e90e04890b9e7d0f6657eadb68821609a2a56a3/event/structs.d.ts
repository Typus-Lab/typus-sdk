import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { PriceFeed } from "../price-feed/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isPriceFeedUpdateEvent(type: string): boolean;
export interface PriceFeedUpdateEventFields {
    priceFeed: ToField<PriceFeed>;
    timestamp: ToField<"u64">;
}
export type PriceFeedUpdateEventReified = Reified<PriceFeedUpdateEvent, PriceFeedUpdateEventFields>;
export declare class PriceFeedUpdateEvent implements StructClass {
    static readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::event::PriceFeedUpdateEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::event::PriceFeedUpdateEvent";
    readonly $fullTypeName: "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::event::PriceFeedUpdateEvent";
    readonly $typeArgs: [];
    readonly priceFeed: ToField<PriceFeed>;
    readonly timestamp: ToField<"u64">;
    private constructor();
    static reified(): PriceFeedUpdateEventReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<PriceFeedUpdateEvent, PriceFeedUpdateEventFields>;
    static phantom(): PhantomReified<ToTypeStr<PriceFeedUpdateEvent>>;
    static get p(): PhantomReified<"0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::event::PriceFeedUpdateEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        price_feed: {
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
        };
        timestamp: string;
    }, {
        price_feed: {
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
        };
        timestamp: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): PriceFeedUpdateEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): PriceFeedUpdateEvent;
    static fromBcs(data: Uint8Array): PriceFeedUpdateEvent;
    toJSONField(): {
        priceFeed: {
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
        timestamp: string;
    };
    toJSON(): {
        priceFeed: {
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
        timestamp: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): PriceFeedUpdateEvent;
    static fromJSON(json: Record<string, any>): PriceFeedUpdateEvent;
    static fromSuiParsedData(content: SuiParsedData): PriceFeedUpdateEvent;
    static fetch(client: SuiClient, id: string): Promise<PriceFeedUpdateEvent>;
}
export declare function isPythInitializationEvent(type: string): boolean;
export interface PythInitializationEventFields {
    dummyField: ToField<"bool">;
}
export type PythInitializationEventReified = Reified<PythInitializationEvent, PythInitializationEventFields>;
export declare class PythInitializationEvent implements StructClass {
    static readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::event::PythInitializationEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::event::PythInitializationEvent";
    readonly $fullTypeName: "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::event::PythInitializationEvent";
    readonly $typeArgs: [];
    readonly dummyField: ToField<"bool">;
    private constructor();
    static reified(): PythInitializationEventReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<PythInitializationEvent, PythInitializationEventFields>;
    static phantom(): PhantomReified<ToTypeStr<PythInitializationEvent>>;
    static get p(): PhantomReified<"0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::event::PythInitializationEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        dummy_field: boolean;
    }, {
        dummy_field: boolean;
    }>;
    static fromFields(fields: Record<string, any>): PythInitializationEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): PythInitializationEvent;
    static fromBcs(data: Uint8Array): PythInitializationEvent;
    toJSONField(): {
        dummyField: boolean;
    };
    toJSON(): {
        dummyField: boolean;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): PythInitializationEvent;
    static fromJSON(json: Record<string, any>): PythInitializationEvent;
    static fromSuiParsedData(content: SuiParsedData): PythInitializationEvent;
    static fetch(client: SuiClient, id: string): Promise<PythInitializationEvent>;
}
