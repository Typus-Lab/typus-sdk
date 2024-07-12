import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { LinkedTable } from "../../0x2/linked-table/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isAuthority(type: string): boolean;
export interface AuthorityFields {
    whitelist: ToField<LinkedTable<"address", "bool">>;
}
export type AuthorityReified = Reified<Authority, AuthorityFields>;
export declare class Authority implements StructClass {
    static readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::authority::Authority";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::authority::Authority";
    readonly $fullTypeName: "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::authority::Authority";
    readonly $typeArgs: [];
    readonly whitelist: ToField<LinkedTable<"address", "bool">>;
    private constructor();
    static reified(): AuthorityReified;
    static get r(): reified.StructClassReified<Authority, AuthorityFields>;
    static phantom(): PhantomReified<ToTypeStr<Authority>>;
    static get p(): reified.PhantomReified<"0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::authority::Authority">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        whitelist: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string;
            head: {
                vec: any[];
            };
            tail: {
                vec: any[];
            };
        };
    }, {
        whitelist: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string | number | bigint;
            head: {
                vec: Iterable<any> & {
                    length: number;
                };
            };
            tail: {
                vec: Iterable<any> & {
                    length: number;
                };
            };
        };
    }>;
    static fromFields(fields: Record<string, any>): Authority;
    static fromFieldsWithTypes(item: FieldsWithTypes): Authority;
    static fromBcs(data: Uint8Array): Authority;
    toJSONField(): {
        whitelist: {
            id: string;
            size: string;
            head: string | null;
            tail: string | null;
        };
    };
    toJSON(): {
        whitelist: {
            id: string;
            size: string;
            head: string | null;
            tail: string | null;
        };
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Authority;
    static fromJSON(json: Record<string, any>): Authority;
    static fromSuiParsedData(content: SuiParsedData): Authority;
    static fetch(client: SuiClient, id: string): Promise<Authority>;
}
