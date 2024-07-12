import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, Vector } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { UID } from "../object/structs";
import { Versioned } from "../versioned/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isRandom(type: string): boolean;
export interface RandomFields {
    id: ToField<UID>;
    inner: ToField<Versioned>;
}
export type RandomReified = Reified<Random, RandomFields>;
export declare class Random implements StructClass {
    static readonly $typeName = "0x2::random::Random";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x2::random::Random";
    readonly $fullTypeName: "0x2::random::Random";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly inner: ToField<Versioned>;
    private constructor();
    static reified(): RandomReified;
    static get r(): reified.StructClassReified<Random, RandomFields>;
    static phantom(): PhantomReified<ToTypeStr<Random>>;
    static get p(): reified.PhantomReified<"0x2::random::Random">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        inner: {
            id: {
                id: {
                    bytes: string;
                };
            };
            version: string;
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        inner: {
            id: {
                id: {
                    bytes: string;
                };
            };
            version: string | number | bigint;
        };
    }>;
    static fromFields(fields: Record<string, any>): Random;
    static fromFieldsWithTypes(item: FieldsWithTypes): Random;
    static fromBcs(data: Uint8Array): Random;
    toJSONField(): {
        id: string;
        inner: {
            id: string;
            version: string;
        };
    };
    toJSON(): {
        id: string;
        inner: {
            id: string;
            version: string;
        };
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Random;
    static fromJSON(json: Record<string, any>): Random;
    static fromSuiParsedData(content: SuiParsedData): Random;
    static fetch(client: SuiClient, id: string): Promise<Random>;
}
export declare function isRandomGenerator(type: string): boolean;
export interface RandomGeneratorFields {
    seed: ToField<Vector<"u8">>;
    counter: ToField<"u16">;
    buffer: ToField<Vector<"u8">>;
}
export type RandomGeneratorReified = Reified<RandomGenerator, RandomGeneratorFields>;
export declare class RandomGenerator implements StructClass {
    static readonly $typeName = "0x2::random::RandomGenerator";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x2::random::RandomGenerator";
    readonly $fullTypeName: "0x2::random::RandomGenerator";
    readonly $typeArgs: [];
    readonly seed: ToField<Vector<"u8">>;
    readonly counter: ToField<"u16">;
    readonly buffer: ToField<Vector<"u8">>;
    private constructor();
    static reified(): RandomGeneratorReified;
    static get r(): reified.StructClassReified<RandomGenerator, RandomGeneratorFields>;
    static phantom(): PhantomReified<ToTypeStr<RandomGenerator>>;
    static get p(): reified.PhantomReified<"0x2::random::RandomGenerator">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        seed: number[];
        counter: number;
        buffer: number[];
    }, {
        seed: Iterable<number> & {
            length: number;
        };
        counter: number;
        buffer: Iterable<number> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): RandomGenerator;
    static fromFieldsWithTypes(item: FieldsWithTypes): RandomGenerator;
    static fromBcs(data: Uint8Array): RandomGenerator;
    toJSONField(): {
        seed: number[];
        counter: number;
        buffer: number[];
    };
    toJSON(): {
        seed: number[];
        counter: number;
        buffer: number[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): RandomGenerator;
    static fromJSON(json: Record<string, any>): RandomGenerator;
    static fromSuiParsedData(content: SuiParsedData): RandomGenerator;
    static fetch(client: SuiClient, id: string): Promise<RandomGenerator>;
}
export declare function isRandomInner(type: string): boolean;
export interface RandomInnerFields {
    version: ToField<"u64">;
    epoch: ToField<"u64">;
    randomnessRound: ToField<"u64">;
    randomBytes: ToField<Vector<"u8">>;
}
export type RandomInnerReified = Reified<RandomInner, RandomInnerFields>;
export declare class RandomInner implements StructClass {
    static readonly $typeName = "0x2::random::RandomInner";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x2::random::RandomInner";
    readonly $fullTypeName: "0x2::random::RandomInner";
    readonly $typeArgs: [];
    readonly version: ToField<"u64">;
    readonly epoch: ToField<"u64">;
    readonly randomnessRound: ToField<"u64">;
    readonly randomBytes: ToField<Vector<"u8">>;
    private constructor();
    static reified(): RandomInnerReified;
    static get r(): reified.StructClassReified<RandomInner, RandomInnerFields>;
    static phantom(): PhantomReified<ToTypeStr<RandomInner>>;
    static get p(): reified.PhantomReified<"0x2::random::RandomInner">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        version: string;
        epoch: string;
        randomness_round: string;
        random_bytes: number[];
    }, {
        version: string | number | bigint;
        epoch: string | number | bigint;
        randomness_round: string | number | bigint;
        random_bytes: Iterable<number> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): RandomInner;
    static fromFieldsWithTypes(item: FieldsWithTypes): RandomInner;
    static fromBcs(data: Uint8Array): RandomInner;
    toJSONField(): {
        version: string;
        epoch: string;
        randomnessRound: string;
        randomBytes: number[];
    };
    toJSON(): {
        version: string;
        epoch: string;
        randomnessRound: string;
        randomBytes: number[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): RandomInner;
    static fromJSON(json: Record<string, any>): RandomInner;
    static fromSuiParsedData(content: SuiParsedData): RandomInner;
    static fetch(client: SuiClient, id: string): Promise<RandomInner>;
}
