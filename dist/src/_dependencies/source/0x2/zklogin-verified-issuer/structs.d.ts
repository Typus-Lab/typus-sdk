import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { String } from "../../0x1/string/structs";
import { UID } from "../object/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isVerifiedIssuer(type: string): boolean;
export interface VerifiedIssuerFields {
    id: ToField<UID>;
    owner: ToField<"address">;
    issuer: ToField<String>;
}
export type VerifiedIssuerReified = Reified<VerifiedIssuer, VerifiedIssuerFields>;
export declare class VerifiedIssuer implements StructClass {
    static readonly $typeName = "0x2::zklogin_verified_issuer::VerifiedIssuer";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x2::zklogin_verified_issuer::VerifiedIssuer";
    readonly $fullTypeName: "0x2::zklogin_verified_issuer::VerifiedIssuer";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly owner: ToField<"address">;
    readonly issuer: ToField<String>;
    private constructor();
    static reified(): VerifiedIssuerReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<VerifiedIssuer, VerifiedIssuerFields>;
    static phantom(): PhantomReified<ToTypeStr<VerifiedIssuer>>;
    static get p(): PhantomReified<"0x2::zklogin_verified_issuer::VerifiedIssuer">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        owner: string;
        issuer: {
            bytes: number[];
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        owner: string;
        issuer: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
    }>;
    static fromFields(fields: Record<string, any>): VerifiedIssuer;
    static fromFieldsWithTypes(item: FieldsWithTypes): VerifiedIssuer;
    static fromBcs(data: Uint8Array): VerifiedIssuer;
    toJSONField(): {
        id: string;
        owner: string;
        issuer: string;
    };
    toJSON(): {
        id: string;
        owner: string;
        issuer: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): VerifiedIssuer;
    static fromJSON(json: Record<string, any>): VerifiedIssuer;
    static fromSuiParsedData(content: SuiParsedData): VerifiedIssuer;
    static fetch(client: SuiClient, id: string): Promise<VerifiedIssuer>;
}
