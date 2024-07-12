import * as reified from "../../../../_framework/reified";
import { PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, ToTypeStr as ToPhantom } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { Table } from "../../0x2/table/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isSet(type: string): boolean;
export interface SetFields<T extends PhantomTypeArgument> {
    items: ToField<Table<T, ToPhantom<Empty>>>;
}
export type SetReified<T extends PhantomTypeArgument> = Reified<Set<T>, SetFields<T>>;
export declare class Set<T extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::set::Set";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::set::Set";
    readonly $fullTypeName: `0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::set::Set<${PhantomToTypeStr<T>}>`;
    readonly $typeArgs: [PhantomToTypeStr<T>];
    readonly items: ToField<Table<T, ToPhantom<Empty>>>;
    private constructor();
    static reified<T extends PhantomReified<PhantomTypeArgument>>(T: T): SetReified<ToPhantomTypeArgument<T>>;
    static get r(): typeof Set.reified;
    static phantom<T extends PhantomReified<PhantomTypeArgument>>(T: T): PhantomReified<ToTypeStr<Set<ToPhantomTypeArgument<T>>>>;
    static get p(): typeof Set.phantom;
    static get bcs(): import("@mysten/bcs").BcsType<{
        items: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string;
        };
    }, {
        items: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string | number | bigint;
        };
    }>;
    static fromFields<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, fields: Record<string, any>): Set<ToPhantomTypeArgument<T>>;
    static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, item: FieldsWithTypes): Set<ToPhantomTypeArgument<T>>;
    static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, data: Uint8Array): Set<ToPhantomTypeArgument<T>>;
    toJSONField(): {
        items: {
            id: string;
            size: string;
        };
    };
    toJSON(): {
        items: {
            id: string;
            size: string;
        };
        $typeName: string;
        $typeArgs: [reified.PhantomToTypeStr<T>];
    };
    static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, field: any): Set<ToPhantomTypeArgument<T>>;
    static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, json: Record<string, any>): Set<ToPhantomTypeArgument<T>>;
    static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, content: SuiParsedData): Set<ToPhantomTypeArgument<T>>;
    static fetch<T extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: T, id: string): Promise<Set<ToPhantomTypeArgument<T>>>;
}
export declare function isEmpty(type: string): boolean;
export interface EmptyFields {
    dummyField: ToField<"bool">;
}
export type EmptyReified = Reified<Empty, EmptyFields>;
export declare class Empty implements StructClass {
    static readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::set::Empty";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::set::Empty";
    readonly $fullTypeName: "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::set::Empty";
    readonly $typeArgs: [];
    readonly dummyField: ToField<"bool">;
    private constructor();
    static reified(): EmptyReified;
    static get r(): reified.StructClassReified<Empty, EmptyFields>;
    static phantom(): PhantomReified<ToTypeStr<Empty>>;
    static get p(): reified.PhantomReified<"0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::set::Empty">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        dummy_field: boolean;
    }, {
        dummy_field: boolean;
    }>;
    static fromFields(fields: Record<string, any>): Empty;
    static fromFieldsWithTypes(item: FieldsWithTypes): Empty;
    static fromBcs(data: Uint8Array): Empty;
    toJSONField(): {
        dummyField: boolean;
    };
    toJSON(): {
        dummyField: boolean;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Empty;
    static fromJSON(json: Record<string, any>): Empty;
    static fromSuiParsedData(content: SuiParsedData): Empty;
    static fetch(client: SuiClient, id: string): Promise<Empty>;
}
