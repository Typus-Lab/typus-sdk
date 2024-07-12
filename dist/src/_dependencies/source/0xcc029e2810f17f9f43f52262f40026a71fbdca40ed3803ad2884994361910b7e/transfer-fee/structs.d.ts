import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isGovernanceWitness(type: string): boolean;
export interface GovernanceWitnessFields {
    dummyField: ToField<"bool">;
}
export type GovernanceWitnessReified = Reified<GovernanceWitness, GovernanceWitnessFields>;
export declare class GovernanceWitness implements StructClass {
    static readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::transfer_fee::GovernanceWitness";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::transfer_fee::GovernanceWitness";
    readonly $fullTypeName: "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::transfer_fee::GovernanceWitness";
    readonly $typeArgs: [];
    readonly dummyField: ToField<"bool">;
    private constructor();
    static reified(): GovernanceWitnessReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<GovernanceWitness, GovernanceWitnessFields>;
    static phantom(): PhantomReified<ToTypeStr<GovernanceWitness>>;
    static get p(): PhantomReified<"0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::transfer_fee::GovernanceWitness">;
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
export declare function isTransferFee(type: string): boolean;
export interface TransferFeeFields {
    amount: ToField<"u64">;
    recipient: ToField<"address">;
}
export type TransferFeeReified = Reified<TransferFee, TransferFeeFields>;
export declare class TransferFee implements StructClass {
    static readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::transfer_fee::TransferFee";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::transfer_fee::TransferFee";
    readonly $fullTypeName: "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::transfer_fee::TransferFee";
    readonly $typeArgs: [];
    readonly amount: ToField<"u64">;
    readonly recipient: ToField<"address">;
    private constructor();
    static reified(): TransferFeeReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<TransferFee, TransferFeeFields>;
    static phantom(): PhantomReified<ToTypeStr<TransferFee>>;
    static get p(): PhantomReified<"0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::transfer_fee::TransferFee">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        amount: string;
        recipient: string;
    }, {
        amount: string | number | bigint;
        recipient: string;
    }>;
    static fromFields(fields: Record<string, any>): TransferFee;
    static fromFieldsWithTypes(item: FieldsWithTypes): TransferFee;
    static fromBcs(data: Uint8Array): TransferFee;
    toJSONField(): {
        amount: string;
        recipient: string;
    };
    toJSON(): {
        amount: string;
        recipient: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): TransferFee;
    static fromJSON(json: Record<string, any>): TransferFee;
    static fromSuiParsedData(content: SuiParsedData): TransferFee;
    static fetch(client: SuiClient, id: string): Promise<TransferFee>;
}
