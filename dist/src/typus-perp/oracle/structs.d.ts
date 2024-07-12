import { ID } from "../../_dependencies/source/0x2/object/structs";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../_framework/reified";
import { FieldsWithTypes } from "../../_framework/util";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isPythPrice(type: string): boolean;
export interface PythPriceFields {
    price: ToField<"u64">;
    conf: ToField<"u64">;
    timestamp: ToField<"u64">;
    decimal: ToField<"u64">;
}
export type PythPriceReified = Reified<PythPrice, PythPriceFields>;
export declare class PythPrice implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::oracle::PythPrice";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::oracle::PythPrice";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::oracle::PythPrice";
    readonly $typeArgs: [];
    readonly price: ToField<"u64">;
    readonly conf: ToField<"u64">;
    readonly timestamp: ToField<"u64">;
    readonly decimal: ToField<"u64">;
    private constructor();
    static reified(): PythPriceReified;
    static get r(): import("../../_framework/reified").StructClassReified<PythPrice, PythPriceFields>;
    static phantom(): PhantomReified<ToTypeStr<PythPrice>>;
    static get p(): PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::oracle::PythPrice">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        price: string;
        conf: string;
        timestamp: string;
        decimal: string;
    }, {
        price: string | number | bigint;
        conf: string | number | bigint;
        timestamp: string | number | bigint;
        decimal: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): PythPrice;
    static fromFieldsWithTypes(item: FieldsWithTypes): PythPrice;
    static fromBcs(data: Uint8Array): PythPrice;
    toJSONField(): {
        price: string;
        conf: string;
        timestamp: string;
        decimal: string;
    };
    toJSON(): {
        price: string;
        conf: string;
        timestamp: string;
        decimal: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): PythPrice;
    static fromJSON(json: Record<string, any>): PythPrice;
    static fromSuiParsedData(content: SuiParsedData): PythPrice;
    static fetch(client: SuiClient, id: string): Promise<PythPrice>;
}
export declare function isPythPriceInfoObject(type: string): boolean;
export interface PythPriceInfoObjectFields {
    id: ToField<ID>;
}
export type PythPriceInfoObjectReified = Reified<PythPriceInfoObject, PythPriceInfoObjectFields>;
export declare class PythPriceInfoObject implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::oracle::PythPriceInfoObject";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::oracle::PythPriceInfoObject";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::oracle::PythPriceInfoObject";
    readonly $typeArgs: [];
    readonly id: ToField<ID>;
    private constructor();
    static reified(): PythPriceInfoObjectReified;
    static get r(): import("../../_framework/reified").StructClassReified<PythPriceInfoObject, PythPriceInfoObjectFields>;
    static phantom(): PhantomReified<ToTypeStr<PythPriceInfoObject>>;
    static get p(): PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::oracle::PythPriceInfoObject">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            bytes: string;
        };
    }, {
        id: {
            bytes: string;
        };
    }>;
    static fromFields(fields: Record<string, any>): PythPriceInfoObject;
    static fromFieldsWithTypes(item: FieldsWithTypes): PythPriceInfoObject;
    static fromBcs(data: Uint8Array): PythPriceInfoObject;
    toJSONField(): {
        id: string;
    };
    toJSON(): {
        id: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): PythPriceInfoObject;
    static fromJSON(json: Record<string, any>): PythPriceInfoObject;
    static fromSuiParsedData(content: SuiParsedData): PythPriceInfoObject;
    static fetch(client: SuiClient, id: string): Promise<PythPriceInfoObject>;
}
