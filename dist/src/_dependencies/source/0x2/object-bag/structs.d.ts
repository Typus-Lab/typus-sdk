import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { UID } from "../object/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isObjectBag(type: string): boolean;
export interface ObjectBagFields {
    id: ToField<UID>;
    size: ToField<"u64">;
}
export type ObjectBagReified = Reified<ObjectBag, ObjectBagFields>;
export declare class ObjectBag implements StructClass {
    static readonly $typeName = "0x2::object_bag::ObjectBag";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x2::object_bag::ObjectBag";
    readonly $fullTypeName: "0x2::object_bag::ObjectBag";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly size: ToField<"u64">;
    private constructor();
    static reified(): ObjectBagReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<ObjectBag, ObjectBagFields>;
    static phantom(): PhantomReified<ToTypeStr<ObjectBag>>;
    static get p(): PhantomReified<"0x2::object_bag::ObjectBag">;
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
    static fromFields(fields: Record<string, any>): ObjectBag;
    static fromFieldsWithTypes(item: FieldsWithTypes): ObjectBag;
    static fromBcs(data: Uint8Array): ObjectBag;
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
    static fromJSONField(field: any): ObjectBag;
    static fromJSON(json: Record<string, any>): ObjectBag;
    static fromSuiParsedData(content: SuiParsedData): ObjectBag;
    static fetch(client: SuiClient, id: string): Promise<ObjectBag>;
}
