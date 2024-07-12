import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, Vector } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { Guardian } from "../guardian/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isGuardianSet(type: string): boolean;
export interface GuardianSetFields {
    index: ToField<"u32">;
    guardians: ToField<Vector<Guardian>>;
    expirationTimestampMs: ToField<"u64">;
}
export type GuardianSetReified = Reified<GuardianSet, GuardianSetFields>;
export declare class GuardianSet implements StructClass {
    static readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::guardian_set::GuardianSet";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::guardian_set::GuardianSet";
    readonly $fullTypeName: "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::guardian_set::GuardianSet";
    readonly $typeArgs: [];
    readonly index: ToField<"u32">;
    readonly guardians: ToField<Vector<Guardian>>;
    readonly expirationTimestampMs: ToField<"u64">;
    private constructor();
    static reified(): GuardianSetReified;
    static get r(): reified.StructClassReified<GuardianSet, GuardianSetFields>;
    static phantom(): PhantomReified<ToTypeStr<GuardianSet>>;
    static get p(): reified.PhantomReified<"0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::guardian_set::GuardianSet">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        index: number;
        guardians: {
            pubkey: {
                data: number[];
            };
        }[];
        expiration_timestamp_ms: string;
    }, {
        index: number;
        guardians: Iterable<{
            pubkey: {
                data: Iterable<number> & {
                    length: number;
                };
            };
        }> & {
            length: number;
        };
        expiration_timestamp_ms: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): GuardianSet;
    static fromFieldsWithTypes(item: FieldsWithTypes): GuardianSet;
    static fromBcs(data: Uint8Array): GuardianSet;
    toJSONField(): {
        index: number;
        guardians: {
            pubkey: {
                data: number[];
            };
        }[];
        expirationTimestampMs: string;
    };
    toJSON(): {
        index: number;
        guardians: {
            pubkey: {
                data: number[];
            };
        }[];
        expirationTimestampMs: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): GuardianSet;
    static fromJSON(json: Record<string, any>): GuardianSet;
    static fromSuiParsedData(content: SuiParsedData): GuardianSet;
    static fetch(client: SuiClient, id: string): Promise<GuardianSet>;
}
