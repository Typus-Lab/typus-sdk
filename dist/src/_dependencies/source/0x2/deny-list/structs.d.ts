import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, Vector, ToTypeStr as ToPhantom } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { Bag } from "../bag/structs";
import { UID } from "../object/structs";
import { Table } from "../table/structs";
import { VecSet } from "../vec-set/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isDenyList(type: string): boolean;
export interface DenyListFields {
    id: ToField<UID>;
    lists: ToField<Bag>;
}
export type DenyListReified = Reified<DenyList, DenyListFields>;
export declare class DenyList implements StructClass {
    static readonly $typeName = "0x2::deny_list::DenyList";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x2::deny_list::DenyList";
    readonly $fullTypeName: "0x2::deny_list::DenyList";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly lists: ToField<Bag>;
    private constructor();
    static reified(): DenyListReified;
    static get r(): reified.StructClassReified<DenyList, DenyListFields>;
    static phantom(): PhantomReified<ToTypeStr<DenyList>>;
    static get p(): reified.PhantomReified<"0x2::deny_list::DenyList">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        lists: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string;
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        lists: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string | number | bigint;
        };
    }>;
    static fromFields(fields: Record<string, any>): DenyList;
    static fromFieldsWithTypes(item: FieldsWithTypes): DenyList;
    static fromBcs(data: Uint8Array): DenyList;
    toJSONField(): {
        id: string;
        lists: {
            id: string;
            size: string;
        };
    };
    toJSON(): {
        id: string;
        lists: {
            id: string;
            size: string;
        };
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): DenyList;
    static fromJSON(json: Record<string, any>): DenyList;
    static fromSuiParsedData(content: SuiParsedData): DenyList;
    static fetch(client: SuiClient, id: string): Promise<DenyList>;
}
export declare function isPerTypeList(type: string): boolean;
export interface PerTypeListFields {
    id: ToField<UID>;
    deniedCount: ToField<Table<"address", "u64">>;
    deniedAddresses: ToField<Table<ToPhantom<Vector<"u8">>, ToPhantom<VecSet<"address">>>>;
}
export type PerTypeListReified = Reified<PerTypeList, PerTypeListFields>;
export declare class PerTypeList implements StructClass {
    static readonly $typeName = "0x2::deny_list::PerTypeList";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x2::deny_list::PerTypeList";
    readonly $fullTypeName: "0x2::deny_list::PerTypeList";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly deniedCount: ToField<Table<"address", "u64">>;
    readonly deniedAddresses: ToField<Table<ToPhantom<Vector<"u8">>, ToPhantom<VecSet<"address">>>>;
    private constructor();
    static reified(): PerTypeListReified;
    static get r(): reified.StructClassReified<PerTypeList, PerTypeListFields>;
    static phantom(): PhantomReified<ToTypeStr<PerTypeList>>;
    static get p(): reified.PhantomReified<"0x2::deny_list::PerTypeList">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        denied_count: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string;
        };
        denied_addresses: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string;
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        denied_count: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string | number | bigint;
        };
        denied_addresses: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string | number | bigint;
        };
    }>;
    static fromFields(fields: Record<string, any>): PerTypeList;
    static fromFieldsWithTypes(item: FieldsWithTypes): PerTypeList;
    static fromBcs(data: Uint8Array): PerTypeList;
    toJSONField(): {
        id: string;
        deniedCount: {
            id: string;
            size: string;
        };
        deniedAddresses: {
            id: string;
            size: string;
        };
    };
    toJSON(): {
        id: string;
        deniedCount: {
            id: string;
            size: string;
        };
        deniedAddresses: {
            id: string;
            size: string;
        };
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): PerTypeList;
    static fromJSON(json: Record<string, any>): PerTypeList;
    static fromSuiParsedData(content: SuiParsedData): PerTypeList;
    static fetch(client: SuiClient, id: string): Promise<PerTypeList>;
}
