import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { UID } from "../object/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isBag(type: string): boolean;
export interface BagFields {
    id: ToField<UID>;
    size: ToField<"u64">;
}
export type BagReified = Reified<Bag, BagFields>;
export declare class Bag implements StructClass {
    static readonly $typeName = "0x2::bag::Bag";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x2::bag::Bag";
    readonly $fullTypeName: "0x2::bag::Bag";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly size: ToField<"u64">;
    private constructor();
    static reified(): BagReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<Bag, BagFields>;
    static phantom(): PhantomReified<ToTypeStr<Bag>>;
    static get p(): PhantomReified<"0x2::bag::Bag">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        size: string;
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        size: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): Bag;
    static fromFieldsWithTypes(item: FieldsWithTypes): Bag;
    static fromBcs(data: Uint8Array): Bag;
    toJSONField(): {
        id: string;
        size: string;
    };
    toJSON(): {
        id: string;
        size: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Bag;
    static fromJSON(json: Record<string, any>): Bag;
    static fromSuiParsedData(content: SuiParsedData): Bag;
    static fetch(client: SuiClient, id: string): Promise<Bag>;
}
