import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isPythFeeRecipient(type: string): boolean;
export interface PythFeeRecipientFields {
    recipient: ToField<"address">;
}
export type PythFeeRecipientReified = Reified<PythFeeRecipient, PythFeeRecipientFields>;
export declare class PythFeeRecipient implements StructClass {
    static readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::set_fee_recipient::PythFeeRecipient";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::set_fee_recipient::PythFeeRecipient";
    readonly $fullTypeName: "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::set_fee_recipient::PythFeeRecipient";
    readonly $typeArgs: [];
    readonly recipient: ToField<"address">;
    private constructor();
    static reified(): PythFeeRecipientReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<PythFeeRecipient, PythFeeRecipientFields>;
    static phantom(): PhantomReified<ToTypeStr<PythFeeRecipient>>;
    static get p(): PhantomReified<"0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::set_fee_recipient::PythFeeRecipient">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        recipient: string;
    }, {
        recipient: string;
    }>;
    static fromFields(fields: Record<string, any>): PythFeeRecipient;
    static fromFieldsWithTypes(item: FieldsWithTypes): PythFeeRecipient;
    static fromBcs(data: Uint8Array): PythFeeRecipient;
    toJSONField(): {
        recipient: string;
    };
    toJSON(): {
        recipient: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): PythFeeRecipient;
    static fromJSON(json: Record<string, any>): PythFeeRecipient;
    static fromSuiParsedData(content: SuiParsedData): PythFeeRecipient;
    static fetch(client: SuiClient, id: string): Promise<PythFeeRecipient>;
}
