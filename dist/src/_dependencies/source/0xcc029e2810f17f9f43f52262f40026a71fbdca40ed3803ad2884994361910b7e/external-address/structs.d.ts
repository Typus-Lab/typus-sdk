import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { Bytes32 } from "../bytes32/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isExternalAddress(type: string): boolean;
export interface ExternalAddressFields {
    value: ToField<Bytes32>;
}
export type ExternalAddressReified = Reified<ExternalAddress, ExternalAddressFields>;
export declare class ExternalAddress implements StructClass {
    static readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::external_address::ExternalAddress";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::external_address::ExternalAddress";
    readonly $fullTypeName: "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::external_address::ExternalAddress";
    readonly $typeArgs: [];
    readonly value: ToField<Bytes32>;
    private constructor();
    static reified(): ExternalAddressReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<ExternalAddress, ExternalAddressFields>;
    static phantom(): PhantomReified<ToTypeStr<ExternalAddress>>;
    static get p(): PhantomReified<"0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::external_address::ExternalAddress">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        value: {
            data: number[];
        };
    }, {
        value: {
            data: Iterable<number> & {
                length: number;
            };
        };
    }>;
    static fromFields(fields: Record<string, any>): ExternalAddress;
    static fromFieldsWithTypes(item: FieldsWithTypes): ExternalAddress;
    static fromBcs(data: Uint8Array): ExternalAddress;
    toJSONField(): {
        value: {
            data: number[];
        };
    };
    toJSON(): {
        value: {
            data: number[];
        };
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): ExternalAddress;
    static fromJSON(json: Record<string, any>): ExternalAddress;
    static fromSuiParsedData(content: SuiParsedData): ExternalAddress;
    static fetch(client: SuiClient, id: string): Promise<ExternalAddress>;
}
