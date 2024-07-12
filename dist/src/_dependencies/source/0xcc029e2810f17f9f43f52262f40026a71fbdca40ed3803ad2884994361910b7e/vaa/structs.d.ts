import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, Vector } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { Bytes32 } from "../bytes32/structs";
import { ExternalAddress } from "../external-address/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isVAA(type: string): boolean;
export interface VAAFields {
    guardianSetIndex: ToField<"u32">;
    timestamp: ToField<"u32">;
    nonce: ToField<"u32">;
    emitterChain: ToField<"u16">;
    emitterAddress: ToField<ExternalAddress>;
    sequence: ToField<"u64">;
    consistencyLevel: ToField<"u8">;
    payload: ToField<Vector<"u8">>;
    digest: ToField<Bytes32>;
}
export type VAAReified = Reified<VAA, VAAFields>;
export declare class VAA implements StructClass {
    static readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::vaa::VAA";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::vaa::VAA";
    readonly $fullTypeName: "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::vaa::VAA";
    readonly $typeArgs: [];
    readonly guardianSetIndex: ToField<"u32">;
    readonly timestamp: ToField<"u32">;
    readonly nonce: ToField<"u32">;
    readonly emitterChain: ToField<"u16">;
    readonly emitterAddress: ToField<ExternalAddress>;
    readonly sequence: ToField<"u64">;
    readonly consistencyLevel: ToField<"u8">;
    readonly payload: ToField<Vector<"u8">>;
    readonly digest: ToField<Bytes32>;
    private constructor();
    static reified(): VAAReified;
    static get r(): reified.StructClassReified<VAA, VAAFields>;
    static phantom(): PhantomReified<ToTypeStr<VAA>>;
    static get p(): reified.PhantomReified<"0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::vaa::VAA">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        guardian_set_index: number;
        timestamp: number;
        nonce: number;
        emitter_chain: number;
        emitter_address: {
            value: {
                data: number[];
            };
        };
        sequence: string;
        consistency_level: number;
        payload: number[];
        digest: {
            data: number[];
        };
    }, {
        guardian_set_index: number;
        timestamp: number;
        nonce: number;
        emitter_chain: number;
        emitter_address: {
            value: {
                data: Iterable<number> & {
                    length: number;
                };
            };
        };
        sequence: string | number | bigint;
        consistency_level: number;
        payload: Iterable<number> & {
            length: number;
        };
        digest: {
            data: Iterable<number> & {
                length: number;
            };
        };
    }>;
    static fromFields(fields: Record<string, any>): VAA;
    static fromFieldsWithTypes(item: FieldsWithTypes): VAA;
    static fromBcs(data: Uint8Array): VAA;
    toJSONField(): {
        guardianSetIndex: number;
        timestamp: number;
        nonce: number;
        emitterChain: number;
        emitterAddress: {
            value: {
                data: number[];
            };
        };
        sequence: string;
        consistencyLevel: number;
        payload: number[];
        digest: {
            data: number[];
        };
    };
    toJSON(): {
        guardianSetIndex: number;
        timestamp: number;
        nonce: number;
        emitterChain: number;
        emitterAddress: {
            value: {
                data: number[];
            };
        };
        sequence: string;
        consistencyLevel: number;
        payload: number[];
        digest: {
            data: number[];
        };
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): VAA;
    static fromJSON(json: Record<string, any>): VAA;
    static fromSuiParsedData(content: SuiParsedData): VAA;
    static fetch(client: SuiClient, id: string): Promise<VAA>;
}
