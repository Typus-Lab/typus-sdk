import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { UID } from "../../0x2/object/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isAdminCap(type: string): boolean;
export interface AdminCapFields {
    id: ToField<UID>;
}
export type AdminCapReified = Reified<AdminCap, AdminCapFields>;
export declare class AdminCap implements StructClass {
    static readonly $typeName = "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::switchboard::AdminCap";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::switchboard::AdminCap";
    readonly $fullTypeName: "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::switchboard::AdminCap";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    private constructor();
    static reified(): AdminCapReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<AdminCap, AdminCapFields>;
    static phantom(): PhantomReified<ToTypeStr<AdminCap>>;
    static get p(): PhantomReified<"0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::switchboard::AdminCap">;
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
    static fromFields(fields: Record<string, any>): AdminCap;
    static fromFieldsWithTypes(item: FieldsWithTypes): AdminCap;
    static fromBcs(data: Uint8Array): AdminCap;
    toJSONField(): {
        id: string;
    };
    toJSON(): {
        id: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): AdminCap;
    static fromJSON(json: Record<string, any>): AdminCap;
    static fromSuiParsedData(content: SuiParsedData): AdminCap;
    static fetch(client: SuiClient, id: string): Promise<AdminCap>;
}
