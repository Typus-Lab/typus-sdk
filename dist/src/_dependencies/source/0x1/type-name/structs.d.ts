import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { String } from "../ascii/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isTypeName(type: string): boolean;
export interface TypeNameFields {
    name: ToField<String>;
}
export type TypeNameReified = Reified<TypeName, TypeNameFields>;
export declare class TypeName implements StructClass {
    static readonly $typeName = "0x1::type_name::TypeName";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x1::type_name::TypeName";
    readonly $fullTypeName: "0x1::type_name::TypeName";
    readonly $typeArgs: [];
    readonly name: ToField<String>;
    private constructor();
    static reified(): TypeNameReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<TypeName, TypeNameFields>;
    static phantom(): PhantomReified<ToTypeStr<TypeName>>;
    static get p(): PhantomReified<"0x1::type_name::TypeName">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        name: {
            bytes: number[];
        };
    }, {
        name: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
    }>;
    static fromFields(fields: Record<string, any>): TypeName;
    static fromFieldsWithTypes(item: FieldsWithTypes): TypeName;
    static fromBcs(data: Uint8Array): TypeName;
    toJSONField(): {
        name: string;
    };
    toJSON(): {
        name: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): TypeName;
    static fromJSON(json: Record<string, any>): TypeName;
    static fromSuiParsedData(content: SuiParsedData): TypeName;
    static fetch(client: SuiClient, id: string): Promise<TypeName>;
}
