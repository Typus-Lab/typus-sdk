import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, Vector } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { PriceInfo } from "../price-info/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isBatchPriceAttestation(type: string): boolean;
export interface BatchPriceAttestationFields {
    header: ToField<Header>;
    attestationSize: ToField<"u64">;
    attestationCount: ToField<"u64">;
    priceInfos: ToField<Vector<PriceInfo>>;
}
export type BatchPriceAttestationReified = Reified<BatchPriceAttestation, BatchPriceAttestationFields>;
export declare class BatchPriceAttestation implements StructClass {
    static readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::batch_price_attestation::BatchPriceAttestation";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::batch_price_attestation::BatchPriceAttestation";
    readonly $fullTypeName: "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::batch_price_attestation::BatchPriceAttestation";
    readonly $typeArgs: [];
    readonly header: ToField<Header>;
    readonly attestationSize: ToField<"u64">;
    readonly attestationCount: ToField<"u64">;
    readonly priceInfos: ToField<Vector<PriceInfo>>;
    private constructor();
    static reified(): BatchPriceAttestationReified;
    static get r(): reified.StructClassReified<BatchPriceAttestation, BatchPriceAttestationFields>;
    static phantom(): PhantomReified<ToTypeStr<BatchPriceAttestation>>;
    static get p(): reified.PhantomReified<"0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::batch_price_attestation::BatchPriceAttestation">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        header: {
            magic: string;
            version_major: string;
            version_minor: string;
            header_size: string;
            payload_id: number;
        };
        attestation_size: string;
        attestation_count: string;
        price_infos: {
            attestation_time: string;
            arrival_time: string;
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
        }[];
    }, {
        header: {
            magic: string | number | bigint;
            version_major: string | number | bigint;
            version_minor: string | number | bigint;
            header_size: string | number | bigint;
            payload_id: number;
        };
        attestation_size: string | number | bigint;
        attestation_count: string | number | bigint;
        price_infos: Iterable<{
            attestation_time: string | number | bigint;
            arrival_time: string | number | bigint;
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
        }> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): BatchPriceAttestation;
    static fromFieldsWithTypes(item: FieldsWithTypes): BatchPriceAttestation;
    static fromBcs(data: Uint8Array): BatchPriceAttestation;
    toJSONField(): {
        header: {
            magic: string;
            versionMajor: string;
            versionMinor: string;
            headerSize: string;
            payloadId: number;
        };
        attestationSize: string;
        attestationCount: string;
        priceInfos: {
            attestationTime: string;
            arrivalTime: string;
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
        }[];
    };
    toJSON(): {
        header: {
            magic: string;
            versionMajor: string;
            versionMinor: string;
            headerSize: string;
            payloadId: number;
        };
        attestationSize: string;
        attestationCount: string;
        priceInfos: {
            attestationTime: string;
            arrivalTime: string;
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
        }[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): BatchPriceAttestation;
    static fromJSON(json: Record<string, any>): BatchPriceAttestation;
    static fromSuiParsedData(content: SuiParsedData): BatchPriceAttestation;
    static fetch(client: SuiClient, id: string): Promise<BatchPriceAttestation>;
}
export declare function isHeader(type: string): boolean;
export interface HeaderFields {
    magic: ToField<"u64">;
    versionMajor: ToField<"u64">;
    versionMinor: ToField<"u64">;
    headerSize: ToField<"u64">;
    payloadId: ToField<"u8">;
}
export type HeaderReified = Reified<Header, HeaderFields>;
export declare class Header implements StructClass {
    static readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::batch_price_attestation::Header";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::batch_price_attestation::Header";
    readonly $fullTypeName: "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::batch_price_attestation::Header";
    readonly $typeArgs: [];
    readonly magic: ToField<"u64">;
    readonly versionMajor: ToField<"u64">;
    readonly versionMinor: ToField<"u64">;
    readonly headerSize: ToField<"u64">;
    readonly payloadId: ToField<"u8">;
    private constructor();
    static reified(): HeaderReified;
    static get r(): reified.StructClassReified<Header, HeaderFields>;
    static phantom(): PhantomReified<ToTypeStr<Header>>;
    static get p(): reified.PhantomReified<"0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::batch_price_attestation::Header">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        magic: string;
        version_major: string;
        version_minor: string;
        header_size: string;
        payload_id: number;
    }, {
        magic: string | number | bigint;
        version_major: string | number | bigint;
        version_minor: string | number | bigint;
        header_size: string | number | bigint;
        payload_id: number;
    }>;
    static fromFields(fields: Record<string, any>): Header;
    static fromFieldsWithTypes(item: FieldsWithTypes): Header;
    static fromBcs(data: Uint8Array): Header;
    toJSONField(): {
        magic: string;
        versionMajor: string;
        versionMinor: string;
        headerSize: string;
        payloadId: number;
    };
    toJSON(): {
        magic: string;
        versionMajor: string;
        versionMinor: string;
        headerSize: string;
        payloadId: number;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Header;
    static fromJSON(json: Record<string, any>): Header;
    static fromSuiParsedData(content: SuiParsedData): Header;
    static fetch(client: SuiClient, id: string): Promise<Header>;
}
