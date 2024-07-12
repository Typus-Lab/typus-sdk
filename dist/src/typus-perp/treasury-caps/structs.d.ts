import { UID } from "../../_dependencies/source/0x2/object/structs";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../_framework/reified";
import { FieldsWithTypes } from "../../_framework/util";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isTreasuryCaps(type: string): boolean;
export interface TreasuryCapsFields {
    id: ToField<UID>;
}
export type TreasuryCapsReified = Reified<TreasuryCaps, TreasuryCapsFields>;
export declare class TreasuryCaps implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::treasury_caps::TreasuryCaps";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::treasury_caps::TreasuryCaps";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::treasury_caps::TreasuryCaps";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    private constructor();
    static reified(): TreasuryCapsReified;
    static get r(): import("../../_framework/reified").StructClassReified<TreasuryCaps, TreasuryCapsFields>;
    static phantom(): PhantomReified<ToTypeStr<TreasuryCaps>>;
    static get p(): PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::treasury_caps::TreasuryCaps">;
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
    static fromFields(fields: Record<string, any>): TreasuryCaps;
    static fromFieldsWithTypes(item: FieldsWithTypes): TreasuryCaps;
    static fromBcs(data: Uint8Array): TreasuryCaps;
    toJSONField(): {
        id: string;
    };
    toJSON(): {
        id: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): TreasuryCaps;
    static fromJSON(json: Record<string, any>): TreasuryCaps;
    static fromSuiParsedData(content: SuiParsedData): TreasuryCaps;
    static fetch(client: SuiClient, id: string): Promise<TreasuryCaps>;
}
