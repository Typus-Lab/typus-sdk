import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isGovernanceWitness(type: string): boolean;
export interface GovernanceWitnessFields {
    dummyField: ToField<"bool">;
}
export type GovernanceWitnessReified = Reified<GovernanceWitness, GovernanceWitnessFields>;
export declare class GovernanceWitness implements StructClass {
    static readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::set_fee::GovernanceWitness";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::set_fee::GovernanceWitness";
    readonly $fullTypeName: "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::set_fee::GovernanceWitness";
    readonly $typeArgs: [];
    readonly dummyField: ToField<"bool">;
    private constructor();
    static reified(): GovernanceWitnessReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<GovernanceWitness, GovernanceWitnessFields>;
    static phantom(): PhantomReified<ToTypeStr<GovernanceWitness>>;
    static get p(): PhantomReified<"0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::set_fee::GovernanceWitness">;
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
export declare function isSetFee(type: string): boolean;
export interface SetFeeFields {
    amount: ToField<"u64">;
}
export type SetFeeReified = Reified<SetFee, SetFeeFields>;
export declare class SetFee implements StructClass {
    static readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::set_fee::SetFee";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::set_fee::SetFee";
    readonly $fullTypeName: "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::set_fee::SetFee";
    readonly $typeArgs: [];
    readonly amount: ToField<"u64">;
    private constructor();
    static reified(): SetFeeReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<SetFee, SetFeeFields>;
    static phantom(): PhantomReified<ToTypeStr<SetFee>>;
    static get p(): PhantomReified<"0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::set_fee::SetFee">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        amount: string;
    }, {
        amount: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): SetFee;
    static fromFieldsWithTypes(item: FieldsWithTypes): SetFee;
    static fromBcs(data: Uint8Array): SetFee;
    toJSONField(): {
        amount: string;
    };
    toJSON(): {
        amount: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): SetFee;
    static fromJSON(json: Record<string, any>): SetFee;
    static fromSuiParsedData(content: SuiParsedData): SetFee;
    static fetch(client: SuiClient, id: string): Promise<SetFee>;
}
