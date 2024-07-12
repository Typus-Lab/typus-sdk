import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { String } from "../../0x1/string/structs";
import { UID } from "../object/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isVerifiedID(type: string): boolean;
export interface VerifiedIDFields {
    id: ToField<UID>;
    owner: ToField<"address">;
    keyClaimName: ToField<String>;
    keyClaimValue: ToField<String>;
    issuer: ToField<String>;
    audience: ToField<String>;
}
export type VerifiedIDReified = Reified<VerifiedID, VerifiedIDFields>;
export declare class VerifiedID implements StructClass {
    static readonly $typeName = "0x2::zklogin_verified_id::VerifiedID";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x2::zklogin_verified_id::VerifiedID";
    readonly $fullTypeName: "0x2::zklogin_verified_id::VerifiedID";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly owner: ToField<"address">;
    readonly keyClaimName: ToField<String>;
    readonly keyClaimValue: ToField<String>;
    readonly issuer: ToField<String>;
    readonly audience: ToField<String>;
    private constructor();
    static reified(): VerifiedIDReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<VerifiedID, VerifiedIDFields>;
    static phantom(): PhantomReified<ToTypeStr<VerifiedID>>;
    static get p(): PhantomReified<"0x2::zklogin_verified_id::VerifiedID">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        owner: string;
        key_claim_name: {
            bytes: number[];
        };
        key_claim_value: {
            bytes: number[];
        };
        issuer: {
            bytes: number[];
        };
        audience: {
            bytes: number[];
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        owner: string;
        key_claim_name: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        key_claim_value: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        issuer: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        audience: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
    }>;
    static fromFields(fields: Record<string, any>): VerifiedID;
    static fromFieldsWithTypes(item: FieldsWithTypes): VerifiedID;
    static fromBcs(data: Uint8Array): VerifiedID;
    toJSONField(): {
        id: string;
        owner: string;
        keyClaimName: string;
        keyClaimValue: string;
        issuer: string;
        audience: string;
    };
    toJSON(): {
        id: string;
        owner: string;
        keyClaimName: string;
        keyClaimValue: string;
        issuer: string;
        audience: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): VerifiedID;
    static fromJSON(json: Record<string, any>): VerifiedID;
    static fromSuiParsedData(content: SuiParsedData): VerifiedID;
    static fetch(client: SuiClient, id: string): Promise<VerifiedID>;
}
