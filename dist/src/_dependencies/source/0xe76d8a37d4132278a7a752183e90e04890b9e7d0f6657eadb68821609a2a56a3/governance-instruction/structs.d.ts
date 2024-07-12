import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, Vector } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { GovernanceAction } from "../governance-action/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isGovernanceInstruction(type: string): boolean;
export interface GovernanceInstructionFields {
    module: ToField<"u8">;
    action: ToField<GovernanceAction>;
    targetChainId: ToField<"u64">;
    payload: ToField<Vector<"u8">>;
}
export type GovernanceInstructionReified = Reified<GovernanceInstruction, GovernanceInstructionFields>;
export declare class GovernanceInstruction implements StructClass {
    static readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::governance_instruction::GovernanceInstruction";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::governance_instruction::GovernanceInstruction";
    readonly $fullTypeName: "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::governance_instruction::GovernanceInstruction";
    readonly $typeArgs: [];
    readonly module: ToField<"u8">;
    readonly action: ToField<GovernanceAction>;
    readonly targetChainId: ToField<"u64">;
    readonly payload: ToField<Vector<"u8">>;
    private constructor();
    static reified(): GovernanceInstructionReified;
    static get r(): reified.StructClassReified<GovernanceInstruction, GovernanceInstructionFields>;
    static phantom(): PhantomReified<ToTypeStr<GovernanceInstruction>>;
    static get p(): reified.PhantomReified<"0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::governance_instruction::GovernanceInstruction">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        module_: number;
        action: {
            value: number;
        };
        target_chain_id: string;
        payload: number[];
    }, {
        module_: number;
        action: {
            value: number;
        };
        target_chain_id: string | number | bigint;
        payload: Iterable<number> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): GovernanceInstruction;
    static fromFieldsWithTypes(item: FieldsWithTypes): GovernanceInstruction;
    static fromBcs(data: Uint8Array): GovernanceInstruction;
    toJSONField(): {
        module: number;
        action: {
            value: number;
        };
        targetChainId: string;
        payload: number[];
    };
    toJSON(): {
        module: number;
        action: {
            value: number;
        };
        targetChainId: string;
        payload: number[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): GovernanceInstruction;
    static fromJSON(json: Record<string, any>): GovernanceInstruction;
    static fromSuiParsedData(content: SuiParsedData): GovernanceInstruction;
    static fetch(client: SuiClient, id: string): Promise<GovernanceInstruction>;
}
