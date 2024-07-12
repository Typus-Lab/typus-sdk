import { UID } from "../../_dependencies/source/0x2/object/structs";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../_framework/reified";
import { FieldsWithTypes } from "../../_framework/util";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isLpRegistry(type: string): boolean;
export interface LpRegistryFields {
    id: ToField<UID>;
}
export type LpRegistryReified = Reified<LpRegistry, LpRegistryFields>;
export declare class LpRegistry implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::tlp::LpRegistry";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::tlp::LpRegistry";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::tlp::LpRegistry";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    private constructor();
    static reified(): LpRegistryReified;
    static get r(): import("../../_framework/reified").StructClassReified<LpRegistry, LpRegistryFields>;
    static phantom(): PhantomReified<ToTypeStr<LpRegistry>>;
    static get p(): PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::tlp::LpRegistry">;
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
    static fromFields(fields: Record<string, any>): LpRegistry;
    static fromFieldsWithTypes(item: FieldsWithTypes): LpRegistry;
    static fromBcs(data: Uint8Array): LpRegistry;
    toJSONField(): {
        id: string;
    };
    toJSON(): {
        id: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): LpRegistry;
    static fromJSON(json: Record<string, any>): LpRegistry;
    static fromSuiParsedData(content: SuiParsedData): LpRegistry;
    static fetch(client: SuiClient, id: string): Promise<LpRegistry>;
}
export declare function isTLP(type: string): boolean;
export interface TLPFields {
    dummyField: ToField<"bool">;
}
export type TLPReified = Reified<TLP, TLPFields>;
export declare class TLP implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::tlp::TLP";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::tlp::TLP";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::tlp::TLP";
    readonly $typeArgs: [];
    readonly dummyField: ToField<"bool">;
    private constructor();
    static reified(): TLPReified;
    static get r(): import("../../_framework/reified").StructClassReified<TLP, TLPFields>;
    static phantom(): PhantomReified<ToTypeStr<TLP>>;
    static get p(): PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::tlp::TLP">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        dummy_field: boolean;
    }, {
        dummy_field: boolean;
    }>;
    static fromFields(fields: Record<string, any>): TLP;
    static fromFieldsWithTypes(item: FieldsWithTypes): TLP;
    static fromBcs(data: Uint8Array): TLP;
    toJSONField(): {
        dummyField: boolean;
    };
    toJSON(): {
        dummyField: boolean;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): TLP;
    static fromJSON(json: Record<string, any>): TLP;
    static fromSuiParsedData(content: SuiParsedData): TLP;
    static fetch(client: SuiClient, id: string): Promise<TLP>;
}
