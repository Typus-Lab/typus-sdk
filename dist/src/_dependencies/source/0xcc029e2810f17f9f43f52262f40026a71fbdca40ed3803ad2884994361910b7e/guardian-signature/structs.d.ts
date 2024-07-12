import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { Bytes32 } from "../bytes32/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isGuardianSignature(type: string): boolean;
export interface GuardianSignatureFields {
    r: ToField<Bytes32>;
    s: ToField<Bytes32>;
    recoveryId: ToField<"u8">;
    index: ToField<"u8">;
}
export type GuardianSignatureReified = Reified<GuardianSignature, GuardianSignatureFields>;
export declare class GuardianSignature implements StructClass {
    static readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::guardian_signature::GuardianSignature";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::guardian_signature::GuardianSignature";
    readonly $fullTypeName: "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::guardian_signature::GuardianSignature";
    readonly $typeArgs: [];
    readonly r: ToField<Bytes32>;
    readonly s: ToField<Bytes32>;
    readonly recoveryId: ToField<"u8">;
    readonly index: ToField<"u8">;
    private constructor();
    static reified(): GuardianSignatureReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<GuardianSignature, GuardianSignatureFields>;
    static phantom(): PhantomReified<ToTypeStr<GuardianSignature>>;
    static get p(): PhantomReified<"0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::guardian_signature::GuardianSignature">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        r: {
            data: number[];
        };
        s: {
            data: number[];
        };
        recovery_id: number;
        index: number;
    }, {
        r: {
            data: Iterable<number> & {
                length: number;
            };
        };
        s: {
            data: Iterable<number> & {
                length: number;
            };
        };
        recovery_id: number;
        index: number;
    }>;
    static fromFields(fields: Record<string, any>): GuardianSignature;
    static fromFieldsWithTypes(item: FieldsWithTypes): GuardianSignature;
    static fromBcs(data: Uint8Array): GuardianSignature;
    toJSONField(): {
        r: {
            data: number[];
        };
        s: {
            data: number[];
        };
        recoveryId: number;
        index: number;
    };
    toJSON(): {
        r: {
            data: number[];
        };
        s: {
            data: number[];
        };
        recoveryId: number;
        index: number;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): GuardianSignature;
    static fromJSON(json: Record<string, any>): GuardianSignature;
    static fromSuiParsedData(content: SuiParsedData): GuardianSignature;
    static fetch(client: SuiClient, id: string): Promise<GuardianSignature>;
}
