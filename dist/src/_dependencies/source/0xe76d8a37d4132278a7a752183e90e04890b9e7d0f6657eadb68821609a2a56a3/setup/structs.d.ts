import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { UID } from "../../0x2/object/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isDeployerCap(type: string): boolean;
export interface DeployerCapFields {
    id: ToField<UID>;
}
export type DeployerCapReified = Reified<DeployerCap, DeployerCapFields>;
export declare class DeployerCap implements StructClass {
    static readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::setup::DeployerCap";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::setup::DeployerCap";
    readonly $fullTypeName: "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::setup::DeployerCap";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    private constructor();
    static reified(): DeployerCapReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<DeployerCap, DeployerCapFields>;
    static phantom(): PhantomReified<ToTypeStr<DeployerCap>>;
    static get p(): PhantomReified<"0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::setup::DeployerCap">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
    }>;
    static fromFields(fields: Record<string, any>): DeployerCap;
    static fromFieldsWithTypes(item: FieldsWithTypes): DeployerCap;
    static fromBcs(data: Uint8Array): DeployerCap;
    toJSONField(): {
        id: string;
    };
    toJSON(): {
        id: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): DeployerCap;
    static fromJSON(json: Record<string, any>): DeployerCap;
    static fromSuiParsedData(content: SuiParsedData): DeployerCap;
    static fetch(client: SuiClient, id: string): Promise<DeployerCap>;
}
