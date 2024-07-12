import { PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { String as String1 } from "../../0x1/ascii/structs";
import { Option } from "../../0x1/option/structs";
import { String } from "../../0x1/string/structs";
import { Balance, Supply } from "../balance/structs";
import { ID, UID } from "../object/structs";
import { Url } from "../url/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isCoin(type: string): boolean;
export interface CoinFields<T extends PhantomTypeArgument> {
    id: ToField<UID>;
    balance: ToField<Balance<T>>;
}
export type CoinReified<T extends PhantomTypeArgument> = Reified<Coin<T>, CoinFields<T>>;
export declare class Coin<T extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0x2::coin::Coin";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0x2::coin::Coin";
    readonly $fullTypeName: `0x2::coin::Coin<${PhantomToTypeStr<T>}>`;
    readonly $typeArgs: [PhantomToTypeStr<T>];
    readonly id: ToField<UID>;
    readonly balance: ToField<Balance<T>>;
    private constructor();
    static reified<T extends PhantomReified<PhantomTypeArgument>>(T: T): CoinReified<ToPhantomTypeArgument<T>>;
    static get r(): typeof Coin.reified;
    static phantom<T extends PhantomReified<PhantomTypeArgument>>(T: T): PhantomReified<ToTypeStr<Coin<ToPhantomTypeArgument<T>>>>;
    static get p(): typeof Coin.phantom;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        balance: {
            value: string;
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        balance: {
            value: string | number | bigint;
        };
    }>;
    static fromFields<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, fields: Record<string, any>): Coin<ToPhantomTypeArgument<T>>;
    static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, item: FieldsWithTypes): Coin<ToPhantomTypeArgument<T>>;
    static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, data: Uint8Array): Coin<ToPhantomTypeArgument<T>>;
    toJSONField(): {
        id: string;
        balance: {
            value: string;
        };
    };
    toJSON(): {
        id: string;
        balance: {
            value: string;
        };
        $typeName: string;
        $typeArgs: [PhantomToTypeStr<T>];
    };
    static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, field: any): Coin<ToPhantomTypeArgument<T>>;
    static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, json: Record<string, any>): Coin<ToPhantomTypeArgument<T>>;
    static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, content: SuiParsedData): Coin<ToPhantomTypeArgument<T>>;
    static fetch<T extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: T, id: string): Promise<Coin<ToPhantomTypeArgument<T>>>;
}
export declare function isCoinMetadata(type: string): boolean;
export interface CoinMetadataFields<T extends PhantomTypeArgument> {
    id: ToField<UID>;
    decimals: ToField<"u8">;
    name: ToField<String>;
    symbol: ToField<String1>;
    description: ToField<String>;
    iconUrl: ToField<Option<Url>>;
}
export type CoinMetadataReified<T extends PhantomTypeArgument> = Reified<CoinMetadata<T>, CoinMetadataFields<T>>;
export declare class CoinMetadata<T extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0x2::coin::CoinMetadata";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0x2::coin::CoinMetadata";
    readonly $fullTypeName: `0x2::coin::CoinMetadata<${PhantomToTypeStr<T>}>`;
    readonly $typeArgs: [PhantomToTypeStr<T>];
    readonly id: ToField<UID>;
    readonly decimals: ToField<"u8">;
    readonly name: ToField<String>;
    readonly symbol: ToField<String1>;
    readonly description: ToField<String>;
    readonly iconUrl: ToField<Option<Url>>;
    private constructor();
    static reified<T extends PhantomReified<PhantomTypeArgument>>(T: T): CoinMetadataReified<ToPhantomTypeArgument<T>>;
    static get r(): typeof CoinMetadata.reified;
    static phantom<T extends PhantomReified<PhantomTypeArgument>>(T: T): PhantomReified<ToTypeStr<CoinMetadata<ToPhantomTypeArgument<T>>>>;
    static get p(): typeof CoinMetadata.phantom;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        decimals: number;
        name: {
            bytes: number[];
        };
        symbol: {
            bytes: number[];
        };
        description: {
            bytes: number[];
        };
        icon_url: {
            vec: any[];
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        decimals: number;
        name: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        symbol: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        description: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        icon_url: {
            vec: Iterable<any> & {
                length: number;
            };
        };
    }>;
    static fromFields<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, fields: Record<string, any>): CoinMetadata<ToPhantomTypeArgument<T>>;
    static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, item: FieldsWithTypes): CoinMetadata<ToPhantomTypeArgument<T>>;
    static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, data: Uint8Array): CoinMetadata<ToPhantomTypeArgument<T>>;
    toJSONField(): {
        id: string;
        decimals: number;
        name: string;
        symbol: string;
        description: string;
        iconUrl: string | null;
    };
    toJSON(): {
        id: string;
        decimals: number;
        name: string;
        symbol: string;
        description: string;
        iconUrl: string | null;
        $typeName: string;
        $typeArgs: [PhantomToTypeStr<T>];
    };
    static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, field: any): CoinMetadata<ToPhantomTypeArgument<T>>;
    static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, json: Record<string, any>): CoinMetadata<ToPhantomTypeArgument<T>>;
    static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, content: SuiParsedData): CoinMetadata<ToPhantomTypeArgument<T>>;
    static fetch<T extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: T, id: string): Promise<CoinMetadata<ToPhantomTypeArgument<T>>>;
}
export declare function isCurrencyCreated(type: string): boolean;
export interface CurrencyCreatedFields<T extends PhantomTypeArgument> {
    decimals: ToField<"u8">;
}
export type CurrencyCreatedReified<T extends PhantomTypeArgument> = Reified<CurrencyCreated<T>, CurrencyCreatedFields<T>>;
export declare class CurrencyCreated<T extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0x2::coin::CurrencyCreated";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0x2::coin::CurrencyCreated";
    readonly $fullTypeName: `0x2::coin::CurrencyCreated<${PhantomToTypeStr<T>}>`;
    readonly $typeArgs: [PhantomToTypeStr<T>];
    readonly decimals: ToField<"u8">;
    private constructor();
    static reified<T extends PhantomReified<PhantomTypeArgument>>(T: T): CurrencyCreatedReified<ToPhantomTypeArgument<T>>;
    static get r(): typeof CurrencyCreated.reified;
    static phantom<T extends PhantomReified<PhantomTypeArgument>>(T: T): PhantomReified<ToTypeStr<CurrencyCreated<ToPhantomTypeArgument<T>>>>;
    static get p(): typeof CurrencyCreated.phantom;
    static get bcs(): import("@mysten/bcs").BcsType<{
        decimals: number;
    }, {
        decimals: number;
    }>;
    static fromFields<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, fields: Record<string, any>): CurrencyCreated<ToPhantomTypeArgument<T>>;
    static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, item: FieldsWithTypes): CurrencyCreated<ToPhantomTypeArgument<T>>;
    static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, data: Uint8Array): CurrencyCreated<ToPhantomTypeArgument<T>>;
    toJSONField(): {
        decimals: number;
    };
    toJSON(): {
        decimals: number;
        $typeName: string;
        $typeArgs: [PhantomToTypeStr<T>];
    };
    static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, field: any): CurrencyCreated<ToPhantomTypeArgument<T>>;
    static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, json: Record<string, any>): CurrencyCreated<ToPhantomTypeArgument<T>>;
    static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, content: SuiParsedData): CurrencyCreated<ToPhantomTypeArgument<T>>;
    static fetch<T extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: T, id: string): Promise<CurrencyCreated<ToPhantomTypeArgument<T>>>;
}
export declare function isDenyCap(type: string): boolean;
export interface DenyCapFields<T extends PhantomTypeArgument> {
    id: ToField<UID>;
}
export type DenyCapReified<T extends PhantomTypeArgument> = Reified<DenyCap<T>, DenyCapFields<T>>;
export declare class DenyCap<T extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0x2::coin::DenyCap";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0x2::coin::DenyCap";
    readonly $fullTypeName: `0x2::coin::DenyCap<${PhantomToTypeStr<T>}>`;
    readonly $typeArgs: [PhantomToTypeStr<T>];
    readonly id: ToField<UID>;
    private constructor();
    static reified<T extends PhantomReified<PhantomTypeArgument>>(T: T): DenyCapReified<ToPhantomTypeArgument<T>>;
    static get r(): typeof DenyCap.reified;
    static phantom<T extends PhantomReified<PhantomTypeArgument>>(T: T): PhantomReified<ToTypeStr<DenyCap<ToPhantomTypeArgument<T>>>>;
    static get p(): typeof DenyCap.phantom;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
    }>;
    static fromFields<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, fields: Record<string, any>): DenyCap<ToPhantomTypeArgument<T>>;
    static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, item: FieldsWithTypes): DenyCap<ToPhantomTypeArgument<T>>;
    static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, data: Uint8Array): DenyCap<ToPhantomTypeArgument<T>>;
    toJSONField(): {
        id: string;
    };
    toJSON(): {
        id: string;
        $typeName: string;
        $typeArgs: [PhantomToTypeStr<T>];
    };
    static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, field: any): DenyCap<ToPhantomTypeArgument<T>>;
    static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, json: Record<string, any>): DenyCap<ToPhantomTypeArgument<T>>;
    static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, content: SuiParsedData): DenyCap<ToPhantomTypeArgument<T>>;
    static fetch<T extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: T, id: string): Promise<DenyCap<ToPhantomTypeArgument<T>>>;
}
export declare function isRegulatedCoinMetadata(type: string): boolean;
export interface RegulatedCoinMetadataFields<T extends PhantomTypeArgument> {
    id: ToField<UID>;
    coinMetadataObject: ToField<ID>;
    denyCapObject: ToField<ID>;
}
export type RegulatedCoinMetadataReified<T extends PhantomTypeArgument> = Reified<RegulatedCoinMetadata<T>, RegulatedCoinMetadataFields<T>>;
export declare class RegulatedCoinMetadata<T extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0x2::coin::RegulatedCoinMetadata";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0x2::coin::RegulatedCoinMetadata";
    readonly $fullTypeName: `0x2::coin::RegulatedCoinMetadata<${PhantomToTypeStr<T>}>`;
    readonly $typeArgs: [PhantomToTypeStr<T>];
    readonly id: ToField<UID>;
    readonly coinMetadataObject: ToField<ID>;
    readonly denyCapObject: ToField<ID>;
    private constructor();
    static reified<T extends PhantomReified<PhantomTypeArgument>>(T: T): RegulatedCoinMetadataReified<ToPhantomTypeArgument<T>>;
    static get r(): typeof RegulatedCoinMetadata.reified;
    static phantom<T extends PhantomReified<PhantomTypeArgument>>(T: T): PhantomReified<ToTypeStr<RegulatedCoinMetadata<ToPhantomTypeArgument<T>>>>;
    static get p(): typeof RegulatedCoinMetadata.phantom;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        coin_metadata_object: {
            bytes: string;
        };
        deny_cap_object: {
            bytes: string;
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        coin_metadata_object: {
            bytes: string;
        };
        deny_cap_object: {
            bytes: string;
        };
    }>;
    static fromFields<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, fields: Record<string, any>): RegulatedCoinMetadata<ToPhantomTypeArgument<T>>;
    static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, item: FieldsWithTypes): RegulatedCoinMetadata<ToPhantomTypeArgument<T>>;
    static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, data: Uint8Array): RegulatedCoinMetadata<ToPhantomTypeArgument<T>>;
    toJSONField(): {
        id: string;
        coinMetadataObject: string;
        denyCapObject: string;
    };
    toJSON(): {
        id: string;
        coinMetadataObject: string;
        denyCapObject: string;
        $typeName: string;
        $typeArgs: [PhantomToTypeStr<T>];
    };
    static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, field: any): RegulatedCoinMetadata<ToPhantomTypeArgument<T>>;
    static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, json: Record<string, any>): RegulatedCoinMetadata<ToPhantomTypeArgument<T>>;
    static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, content: SuiParsedData): RegulatedCoinMetadata<ToPhantomTypeArgument<T>>;
    static fetch<T extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: T, id: string): Promise<RegulatedCoinMetadata<ToPhantomTypeArgument<T>>>;
}
export declare function isTreasuryCap(type: string): boolean;
export interface TreasuryCapFields<T extends PhantomTypeArgument> {
    id: ToField<UID>;
    totalSupply: ToField<Supply<T>>;
}
export type TreasuryCapReified<T extends PhantomTypeArgument> = Reified<TreasuryCap<T>, TreasuryCapFields<T>>;
export declare class TreasuryCap<T extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0x2::coin::TreasuryCap";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0x2::coin::TreasuryCap";
    readonly $fullTypeName: `0x2::coin::TreasuryCap<${PhantomToTypeStr<T>}>`;
    readonly $typeArgs: [PhantomToTypeStr<T>];
    readonly id: ToField<UID>;
    readonly totalSupply: ToField<Supply<T>>;
    private constructor();
    static reified<T extends PhantomReified<PhantomTypeArgument>>(T: T): TreasuryCapReified<ToPhantomTypeArgument<T>>;
    static get r(): typeof TreasuryCap.reified;
    static phantom<T extends PhantomReified<PhantomTypeArgument>>(T: T): PhantomReified<ToTypeStr<TreasuryCap<ToPhantomTypeArgument<T>>>>;
    static get p(): typeof TreasuryCap.phantom;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        total_supply: {
            value: string;
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        total_supply: {
            value: string | number | bigint;
        };
    }>;
    static fromFields<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, fields: Record<string, any>): TreasuryCap<ToPhantomTypeArgument<T>>;
    static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, item: FieldsWithTypes): TreasuryCap<ToPhantomTypeArgument<T>>;
    static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, data: Uint8Array): TreasuryCap<ToPhantomTypeArgument<T>>;
    toJSONField(): {
        id: string;
        totalSupply: {
            value: string;
        };
    };
    toJSON(): {
        id: string;
        totalSupply: {
            value: string;
        };
        $typeName: string;
        $typeArgs: [PhantomToTypeStr<T>];
    };
    static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, field: any): TreasuryCap<ToPhantomTypeArgument<T>>;
    static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, json: Record<string, any>): TreasuryCap<ToPhantomTypeArgument<T>>;
    static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, content: SuiParsedData): TreasuryCap<ToPhantomTypeArgument<T>>;
    static fetch<T extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: T, id: string): Promise<TreasuryCap<ToPhantomTypeArgument<T>>>;
}
