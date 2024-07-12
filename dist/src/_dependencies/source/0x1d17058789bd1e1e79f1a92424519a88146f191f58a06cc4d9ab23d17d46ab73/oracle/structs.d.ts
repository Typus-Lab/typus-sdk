import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { String } from "../../0x1/ascii/structs";
import { Option } from "../../0x1/option/structs";
import { TypeName } from "../../0x1/type-name/structs";
import { ID, UID } from "../../0x2/object/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isManagerCap(type: string): boolean;
export interface ManagerCapFields {
    id: ToField<UID>;
}
export type ManagerCapReified = Reified<ManagerCap, ManagerCapFields>;
export declare class ManagerCap implements StructClass {
    static readonly $typeName = "0x1d17058789bd1e1e79f1a92424519a88146f191f58a06cc4d9ab23d17d46ab73::oracle::ManagerCap";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x1d17058789bd1e1e79f1a92424519a88146f191f58a06cc4d9ab23d17d46ab73::oracle::ManagerCap";
    readonly $fullTypeName: "0x1d17058789bd1e1e79f1a92424519a88146f191f58a06cc4d9ab23d17d46ab73::oracle::ManagerCap";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    private constructor();
    static reified(): ManagerCapReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<ManagerCap, ManagerCapFields>;
    static phantom(): PhantomReified<ToTypeStr<ManagerCap>>;
    static get p(): PhantomReified<"0x1d17058789bd1e1e79f1a92424519a88146f191f58a06cc4d9ab23d17d46ab73::oracle::ManagerCap">;
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
    static fromFields(fields: Record<string, any>): ManagerCap;
    static fromFieldsWithTypes(item: FieldsWithTypes): ManagerCap;
    static fromBcs(data: Uint8Array): ManagerCap;
    toJSONField(): {
        id: string;
    };
    toJSON(): {
        id: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): ManagerCap;
    static fromJSON(json: Record<string, any>): ManagerCap;
    static fromSuiParsedData(content: SuiParsedData): ManagerCap;
    static fetch(client: SuiClient, id: string): Promise<ManagerCap>;
}
export declare function isOracle(type: string): boolean;
export interface OracleFields {
    id: ToField<UID>;
    baseToken: ToField<String>;
    quoteToken: ToField<String>;
    baseTokenType: ToField<TypeName>;
    quoteTokenType: ToField<TypeName>;
    decimal: ToField<"u64">;
    price: ToField<"u64">;
    twapPrice: ToField<"u64">;
    tsMs: ToField<"u64">;
    epoch: ToField<"u64">;
    timeInterval: ToField<"u64">;
    switchboard: ToField<Option<ID>>;
    pyth: ToField<Option<ID>>;
}
export type OracleReified = Reified<Oracle, OracleFields>;
export declare class Oracle implements StructClass {
    static readonly $typeName = "0x1d17058789bd1e1e79f1a92424519a88146f191f58a06cc4d9ab23d17d46ab73::oracle::Oracle";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x1d17058789bd1e1e79f1a92424519a88146f191f58a06cc4d9ab23d17d46ab73::oracle::Oracle";
    readonly $fullTypeName: "0x1d17058789bd1e1e79f1a92424519a88146f191f58a06cc4d9ab23d17d46ab73::oracle::Oracle";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly baseToken: ToField<String>;
    readonly quoteToken: ToField<String>;
    readonly baseTokenType: ToField<TypeName>;
    readonly quoteTokenType: ToField<TypeName>;
    readonly decimal: ToField<"u64">;
    readonly price: ToField<"u64">;
    readonly twapPrice: ToField<"u64">;
    readonly tsMs: ToField<"u64">;
    readonly epoch: ToField<"u64">;
    readonly timeInterval: ToField<"u64">;
    readonly switchboard: ToField<Option<ID>>;
    readonly pyth: ToField<Option<ID>>;
    private constructor();
    static reified(): OracleReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<Oracle, OracleFields>;
    static phantom(): PhantomReified<ToTypeStr<Oracle>>;
    static get p(): PhantomReified<"0x1d17058789bd1e1e79f1a92424519a88146f191f58a06cc4d9ab23d17d46ab73::oracle::Oracle">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        base_token: {
            bytes: number[];
        };
        quote_token: {
            bytes: number[];
        };
        base_token_type: {
            name: {
                bytes: number[];
            };
        };
        quote_token_type: {
            name: {
                bytes: number[];
            };
        };
        decimal: string;
        price: string;
        twap_price: string;
        ts_ms: string;
        epoch: string;
        time_interval: string;
        switchboard: {
            vec: any[];
        };
        pyth: {
            vec: any[];
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        base_token: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        quote_token: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        base_token_type: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        quote_token_type: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        decimal: string | number | bigint;
        price: string | number | bigint;
        twap_price: string | number | bigint;
        ts_ms: string | number | bigint;
        epoch: string | number | bigint;
        time_interval: string | number | bigint;
        switchboard: {
            vec: Iterable<any> & {
                length: number;
            };
        };
        pyth: {
            vec: Iterable<any> & {
                length: number;
            };
        };
    }>;
    static fromFields(fields: Record<string, any>): Oracle;
    static fromFieldsWithTypes(item: FieldsWithTypes): Oracle;
    static fromBcs(data: Uint8Array): Oracle;
    toJSONField(): {
        id: string;
        baseToken: string;
        quoteToken: string;
        baseTokenType: {
            name: string;
        };
        quoteTokenType: {
            name: string;
        };
        decimal: string;
        price: string;
        twapPrice: string;
        tsMs: string;
        epoch: string;
        timeInterval: string;
        switchboard: string | null;
        pyth: string | null;
    };
    toJSON(): {
        id: string;
        baseToken: string;
        quoteToken: string;
        baseTokenType: {
            name: string;
        };
        quoteTokenType: {
            name: string;
        };
        decimal: string;
        price: string;
        twapPrice: string;
        tsMs: string;
        epoch: string;
        timeInterval: string;
        switchboard: string | null;
        pyth: string | null;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Oracle;
    static fromJSON(json: Record<string, any>): Oracle;
    static fromSuiParsedData(content: SuiParsedData): Oracle;
    static fetch(client: SuiClient, id: string): Promise<Oracle>;
}
export declare function isPriceEvent(type: string): boolean;
export interface PriceEventFields {
    id: ToField<ID>;
    price: ToField<"u64">;
    tsMs: ToField<"u64">;
}
export type PriceEventReified = Reified<PriceEvent, PriceEventFields>;
export declare class PriceEvent implements StructClass {
    static readonly $typeName = "0x1d17058789bd1e1e79f1a92424519a88146f191f58a06cc4d9ab23d17d46ab73::oracle::PriceEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x1d17058789bd1e1e79f1a92424519a88146f191f58a06cc4d9ab23d17d46ab73::oracle::PriceEvent";
    readonly $fullTypeName: "0x1d17058789bd1e1e79f1a92424519a88146f191f58a06cc4d9ab23d17d46ab73::oracle::PriceEvent";
    readonly $typeArgs: [];
    readonly id: ToField<ID>;
    readonly price: ToField<"u64">;
    readonly tsMs: ToField<"u64">;
    private constructor();
    static reified(): PriceEventReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<PriceEvent, PriceEventFields>;
    static phantom(): PhantomReified<ToTypeStr<PriceEvent>>;
    static get p(): PhantomReified<"0x1d17058789bd1e1e79f1a92424519a88146f191f58a06cc4d9ab23d17d46ab73::oracle::PriceEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            bytes: string;
        };
        price: string;
        ts_ms: string;
    }, {
        id: {
            bytes: string;
        };
        price: string | number | bigint;
        ts_ms: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): PriceEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): PriceEvent;
    static fromBcs(data: Uint8Array): PriceEvent;
    toJSONField(): {
        id: string;
        price: string;
        tsMs: string;
    };
    toJSON(): {
        id: string;
        price: string;
        tsMs: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): PriceEvent;
    static fromJSON(json: Record<string, any>): PriceEvent;
    static fromSuiParsedData(content: SuiParsedData): PriceEvent;
    static fetch(client: SuiClient, id: string): Promise<PriceEvent>;
}
