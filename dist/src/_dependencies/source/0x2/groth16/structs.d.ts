import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, Vector } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isCurve(type: string): boolean;
export interface CurveFields {
    id: ToField<"u8">;
}
export type CurveReified = Reified<Curve, CurveFields>;
export declare class Curve implements StructClass {
    static readonly $typeName = "0x2::groth16::Curve";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x2::groth16::Curve";
    readonly $fullTypeName: "0x2::groth16::Curve";
    readonly $typeArgs: [];
    readonly id: ToField<"u8">;
    private constructor();
    static reified(): CurveReified;
    static get r(): reified.StructClassReified<Curve, CurveFields>;
    static phantom(): PhantomReified<ToTypeStr<Curve>>;
    static get p(): reified.PhantomReified<"0x2::groth16::Curve">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: number;
    }, {
        id: number;
    }>;
    static fromFields(fields: Record<string, any>): Curve;
    static fromFieldsWithTypes(item: FieldsWithTypes): Curve;
    static fromBcs(data: Uint8Array): Curve;
    toJSONField(): {
        id: number;
    };
    toJSON(): {
        id: number;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Curve;
    static fromJSON(json: Record<string, any>): Curve;
    static fromSuiParsedData(content: SuiParsedData): Curve;
    static fetch(client: SuiClient, id: string): Promise<Curve>;
}
export declare function isPreparedVerifyingKey(type: string): boolean;
export interface PreparedVerifyingKeyFields {
    vkGammaAbcG1Bytes: ToField<Vector<"u8">>;
    alphaG1BetaG2Bytes: ToField<Vector<"u8">>;
    gammaG2NegPcBytes: ToField<Vector<"u8">>;
    deltaG2NegPcBytes: ToField<Vector<"u8">>;
}
export type PreparedVerifyingKeyReified = Reified<PreparedVerifyingKey, PreparedVerifyingKeyFields>;
export declare class PreparedVerifyingKey implements StructClass {
    static readonly $typeName = "0x2::groth16::PreparedVerifyingKey";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x2::groth16::PreparedVerifyingKey";
    readonly $fullTypeName: "0x2::groth16::PreparedVerifyingKey";
    readonly $typeArgs: [];
    readonly vkGammaAbcG1Bytes: ToField<Vector<"u8">>;
    readonly alphaG1BetaG2Bytes: ToField<Vector<"u8">>;
    readonly gammaG2NegPcBytes: ToField<Vector<"u8">>;
    readonly deltaG2NegPcBytes: ToField<Vector<"u8">>;
    private constructor();
    static reified(): PreparedVerifyingKeyReified;
    static get r(): reified.StructClassReified<PreparedVerifyingKey, PreparedVerifyingKeyFields>;
    static phantom(): PhantomReified<ToTypeStr<PreparedVerifyingKey>>;
    static get p(): reified.PhantomReified<"0x2::groth16::PreparedVerifyingKey">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        vk_gamma_abc_g1_bytes: number[];
        alpha_g1_beta_g2_bytes: number[];
        gamma_g2_neg_pc_bytes: number[];
        delta_g2_neg_pc_bytes: number[];
    }, {
        vk_gamma_abc_g1_bytes: Iterable<number> & {
            length: number;
        };
        alpha_g1_beta_g2_bytes: Iterable<number> & {
            length: number;
        };
        gamma_g2_neg_pc_bytes: Iterable<number> & {
            length: number;
        };
        delta_g2_neg_pc_bytes: Iterable<number> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): PreparedVerifyingKey;
    static fromFieldsWithTypes(item: FieldsWithTypes): PreparedVerifyingKey;
    static fromBcs(data: Uint8Array): PreparedVerifyingKey;
    toJSONField(): {
        vkGammaAbcG1Bytes: number[];
        alphaG1BetaG2Bytes: number[];
        gammaG2NegPcBytes: number[];
        deltaG2NegPcBytes: number[];
    };
    toJSON(): {
        vkGammaAbcG1Bytes: number[];
        alphaG1BetaG2Bytes: number[];
        gammaG2NegPcBytes: number[];
        deltaG2NegPcBytes: number[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): PreparedVerifyingKey;
    static fromJSON(json: Record<string, any>): PreparedVerifyingKey;
    static fromSuiParsedData(content: SuiParsedData): PreparedVerifyingKey;
    static fetch(client: SuiClient, id: string): Promise<PreparedVerifyingKey>;
}
export declare function isProofPoints(type: string): boolean;
export interface ProofPointsFields {
    bytes: ToField<Vector<"u8">>;
}
export type ProofPointsReified = Reified<ProofPoints, ProofPointsFields>;
export declare class ProofPoints implements StructClass {
    static readonly $typeName = "0x2::groth16::ProofPoints";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x2::groth16::ProofPoints";
    readonly $fullTypeName: "0x2::groth16::ProofPoints";
    readonly $typeArgs: [];
    readonly bytes: ToField<Vector<"u8">>;
    private constructor();
    static reified(): ProofPointsReified;
    static get r(): reified.StructClassReified<ProofPoints, ProofPointsFields>;
    static phantom(): PhantomReified<ToTypeStr<ProofPoints>>;
    static get p(): reified.PhantomReified<"0x2::groth16::ProofPoints">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        bytes: number[];
    }, {
        bytes: Iterable<number> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): ProofPoints;
    static fromFieldsWithTypes(item: FieldsWithTypes): ProofPoints;
    static fromBcs(data: Uint8Array): ProofPoints;
    toJSONField(): {
        bytes: number[];
    };
    toJSON(): {
        bytes: number[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): ProofPoints;
    static fromJSON(json: Record<string, any>): ProofPoints;
    static fromSuiParsedData(content: SuiParsedData): ProofPoints;
    static fetch(client: SuiClient, id: string): Promise<ProofPoints>;
}
export declare function isPublicProofInputs(type: string): boolean;
export interface PublicProofInputsFields {
    bytes: ToField<Vector<"u8">>;
}
export type PublicProofInputsReified = Reified<PublicProofInputs, PublicProofInputsFields>;
export declare class PublicProofInputs implements StructClass {
    static readonly $typeName = "0x2::groth16::PublicProofInputs";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x2::groth16::PublicProofInputs";
    readonly $fullTypeName: "0x2::groth16::PublicProofInputs";
    readonly $typeArgs: [];
    readonly bytes: ToField<Vector<"u8">>;
    private constructor();
    static reified(): PublicProofInputsReified;
    static get r(): reified.StructClassReified<PublicProofInputs, PublicProofInputsFields>;
    static phantom(): PhantomReified<ToTypeStr<PublicProofInputs>>;
    static get p(): reified.PhantomReified<"0x2::groth16::PublicProofInputs">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        bytes: number[];
    }, {
        bytes: Iterable<number> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): PublicProofInputs;
    static fromFieldsWithTypes(item: FieldsWithTypes): PublicProofInputs;
    static fromBcs(data: Uint8Array): PublicProofInputs;
    toJSONField(): {
        bytes: number[];
    };
    toJSON(): {
        bytes: number[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): PublicProofInputs;
    static fromJSON(json: Record<string, any>): PublicProofInputs;
    static fromSuiParsedData(content: SuiParsedData): PublicProofInputs;
    static fetch(client: SuiClient, id: string): Promise<PublicProofInputs>;
}
