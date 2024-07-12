import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { ID } from "../../0x2/object/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isMigrateComplete(type: string): boolean;
export interface MigrateCompleteFields {
    package: ToField<ID>;
}
export type MigrateCompleteReified = Reified<MigrateComplete, MigrateCompleteFields>;
export declare class MigrateComplete implements StructClass {
    static readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::migrate::MigrateComplete";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::migrate::MigrateComplete";
    readonly $fullTypeName: "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::migrate::MigrateComplete";
    readonly $typeArgs: [];
    readonly package: ToField<ID>;
    private constructor();
    static reified(): MigrateCompleteReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<MigrateComplete, MigrateCompleteFields>;
    static phantom(): PhantomReified<ToTypeStr<MigrateComplete>>;
    static get p(): PhantomReified<"0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::migrate::MigrateComplete">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        package: {
            bytes: string;
        };
    }, {
        package: {
            bytes: string;
        };
    }>;
    static fromFields(fields: Record<string, any>): MigrateComplete;
    static fromFieldsWithTypes(item: FieldsWithTypes): MigrateComplete;
    static fromBcs(data: Uint8Array): MigrateComplete;
    toJSONField(): {
        package: string;
    };
    toJSON(): {
        package: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): MigrateComplete;
    static fromJSON(json: Record<string, any>): MigrateComplete;
    static fromSuiParsedData(content: SuiParsedData): MigrateComplete;
    static fetch(client: SuiClient, id: string): Promise<MigrateComplete>;
}
