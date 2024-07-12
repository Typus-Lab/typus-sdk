import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, Vector } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { Guardian } from "../guardian/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isGovernanceWitness(type: string): boolean;
export interface GovernanceWitnessFields {
    dummyField: ToField<"bool">;
}
export type GovernanceWitnessReified = Reified<GovernanceWitness, GovernanceWitnessFields>;
export declare class GovernanceWitness implements StructClass {
    static readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::update_guardian_set::GovernanceWitness";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::update_guardian_set::GovernanceWitness";
    readonly $fullTypeName: "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::update_guardian_set::GovernanceWitness";
    readonly $typeArgs: [];
    readonly dummyField: ToField<"bool">;
    private constructor();
    static reified(): GovernanceWitnessReified;
    static get r(): reified.StructClassReified<GovernanceWitness, GovernanceWitnessFields>;
    static phantom(): PhantomReified<ToTypeStr<GovernanceWitness>>;
    static get p(): reified.PhantomReified<"0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::update_guardian_set::GovernanceWitness">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        dummy_field: boolean;
    }, {
        dummy_field: boolean;
    }>;
    static fromFields(fields: Record<string, any>): GovernanceWitness;
    static fromFieldsWithTypes(item: FieldsWithTypes): GovernanceWitness;
    static fromBcs(data: Uint8Array): GovernanceWitness;
    toJSONField(): {
        dummyField: boolean;
    };
    toJSON(): {
        dummyField: boolean;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): GovernanceWitness;
    static fromJSON(json: Record<string, any>): GovernanceWitness;
    static fromSuiParsedData(content: SuiParsedData): GovernanceWitness;
    static fetch(client: SuiClient, id: string): Promise<GovernanceWitness>;
}
export declare function isGuardianSetAdded(type: string): boolean;
export interface GuardianSetAddedFields {
    newIndex: ToField<"u32">;
}
export type GuardianSetAddedReified = Reified<GuardianSetAdded, GuardianSetAddedFields>;
export declare class GuardianSetAdded implements StructClass {
    static readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::update_guardian_set::GuardianSetAdded";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::update_guardian_set::GuardianSetAdded";
    readonly $fullTypeName: "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::update_guardian_set::GuardianSetAdded";
    readonly $typeArgs: [];
    readonly newIndex: ToField<"u32">;
    private constructor();
    static reified(): GuardianSetAddedReified;
    static get r(): reified.StructClassReified<GuardianSetAdded, GuardianSetAddedFields>;
    static phantom(): PhantomReified<ToTypeStr<GuardianSetAdded>>;
    static get p(): reified.PhantomReified<"0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::update_guardian_set::GuardianSetAdded">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        new_index: number;
    }, {
        new_index: number;
    }>;
    static fromFields(fields: Record<string, any>): GuardianSetAdded;
    static fromFieldsWithTypes(item: FieldsWithTypes): GuardianSetAdded;
    static fromBcs(data: Uint8Array): GuardianSetAdded;
    toJSONField(): {
        newIndex: number;
    };
    toJSON(): {
        newIndex: number;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): GuardianSetAdded;
    static fromJSON(json: Record<string, any>): GuardianSetAdded;
    static fromSuiParsedData(content: SuiParsedData): GuardianSetAdded;
    static fetch(client: SuiClient, id: string): Promise<GuardianSetAdded>;
}
export declare function isUpdateGuardianSet(type: string): boolean;
export interface UpdateGuardianSetFields {
    newIndex: ToField<"u32">;
    guardians: ToField<Vector<Guardian>>;
}
export type UpdateGuardianSetReified = Reified<UpdateGuardianSet, UpdateGuardianSetFields>;
export declare class UpdateGuardianSet implements StructClass {
    static readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::update_guardian_set::UpdateGuardianSet";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::update_guardian_set::UpdateGuardianSet";
    readonly $fullTypeName: "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::update_guardian_set::UpdateGuardianSet";
    readonly $typeArgs: [];
    readonly newIndex: ToField<"u32">;
    readonly guardians: ToField<Vector<Guardian>>;
    private constructor();
    static reified(): UpdateGuardianSetReified;
    static get r(): reified.StructClassReified<UpdateGuardianSet, UpdateGuardianSetFields>;
    static phantom(): PhantomReified<ToTypeStr<UpdateGuardianSet>>;
    static get p(): reified.PhantomReified<"0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::update_guardian_set::UpdateGuardianSet">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        new_index: number;
        guardians: {
            pubkey: {
                data: number[];
            };
        }[];
    }, {
        new_index: number;
        guardians: Iterable<{
            pubkey: {
                data: Iterable<number> & {
                    length: number;
                };
            };
        }> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): UpdateGuardianSet;
    static fromFieldsWithTypes(item: FieldsWithTypes): UpdateGuardianSet;
    static fromBcs(data: Uint8Array): UpdateGuardianSet;
    toJSONField(): {
        newIndex: number;
        guardians: {
            pubkey: {
                data: number[];
            };
        }[];
    };
    toJSON(): {
        newIndex: number;
        guardians: {
            pubkey: {
                data: number[];
            };
        }[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): UpdateGuardianSet;
    static fromJSON(json: Record<string, any>): UpdateGuardianSet;
    static fromSuiParsedData(content: SuiParsedData): UpdateGuardianSet;
    static fetch(client: SuiClient, id: string): Promise<UpdateGuardianSet>;
}
