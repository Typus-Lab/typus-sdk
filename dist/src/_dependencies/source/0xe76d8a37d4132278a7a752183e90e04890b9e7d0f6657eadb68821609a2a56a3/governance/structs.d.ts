import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, Vector } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { Bytes32 } from "../../0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e/bytes32/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isWormholeVAAVerificationReceipt(type: string): boolean;
export interface WormholeVAAVerificationReceiptFields {
    payload: ToField<Vector<"u8">>;
    digest: ToField<Bytes32>;
    sequence: ToField<"u64">;
}
export type WormholeVAAVerificationReceiptReified = Reified<WormholeVAAVerificationReceipt, WormholeVAAVerificationReceiptFields>;
export declare class WormholeVAAVerificationReceipt implements StructClass {
    static readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::governance::WormholeVAAVerificationReceipt";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::governance::WormholeVAAVerificationReceipt";
    readonly $fullTypeName: "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::governance::WormholeVAAVerificationReceipt";
    readonly $typeArgs: [];
    readonly payload: ToField<Vector<"u8">>;
    readonly digest: ToField<Bytes32>;
    readonly sequence: ToField<"u64">;
    private constructor();
    static reified(): WormholeVAAVerificationReceiptReified;
    static get r(): reified.StructClassReified<WormholeVAAVerificationReceipt, WormholeVAAVerificationReceiptFields>;
    static phantom(): PhantomReified<ToTypeStr<WormholeVAAVerificationReceipt>>;
    static get p(): reified.PhantomReified<"0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::governance::WormholeVAAVerificationReceipt">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        payload: number[];
        digest: {
            data: number[];
        };
        sequence: string;
    }, {
        payload: Iterable<number> & {
            length: number;
        };
        digest: {
            data: Iterable<number> & {
                length: number;
            };
        };
        sequence: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): WormholeVAAVerificationReceipt;
    static fromFieldsWithTypes(item: FieldsWithTypes): WormholeVAAVerificationReceipt;
    static fromBcs(data: Uint8Array): WormholeVAAVerificationReceipt;
    toJSONField(): {
        payload: number[];
        digest: {
            data: number[];
        };
        sequence: string;
    };
    toJSON(): {
        payload: number[];
        digest: {
            data: number[];
        };
        sequence: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): WormholeVAAVerificationReceipt;
    static fromJSON(json: Record<string, any>): WormholeVAAVerificationReceipt;
    static fromSuiParsedData(content: SuiParsedData): WormholeVAAVerificationReceipt;
    static fetch(client: SuiClient, id: string): Promise<WormholeVAAVerificationReceipt>;
}
