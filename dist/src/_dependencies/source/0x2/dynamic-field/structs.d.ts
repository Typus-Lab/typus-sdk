import { PhantomReified, Reified, StructClass, ToField, ToTypeArgument, ToTypeStr, TypeArgument } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { UID } from "../object/structs";
import { BcsType } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isField(type: string): boolean;
export interface FieldFields<Name extends TypeArgument, Value extends TypeArgument> {
    id: ToField<UID>;
    name: ToField<Name>;
    value: ToField<Value>;
}
export type FieldReified<Name extends TypeArgument, Value extends TypeArgument> = Reified<Field<Name, Value>, FieldFields<Name, Value>>;
export declare class Field<Name extends TypeArgument, Value extends TypeArgument> implements StructClass {
    static readonly $typeName = "0x2::dynamic_field::Field";
    static readonly $numTypeParams = 2;
    readonly $typeName = "0x2::dynamic_field::Field";
    readonly $fullTypeName: `0x2::dynamic_field::Field<${ToTypeStr<Name>}, ${ToTypeStr<Value>}>`;
    readonly $typeArgs: [ToTypeStr<Name>, ToTypeStr<Value>];
    readonly id: ToField<UID>;
    readonly name: ToField<Name>;
    readonly value: ToField<Value>;
    private constructor();
    static reified<Name extends Reified<TypeArgument, any>, Value extends Reified<TypeArgument, any>>(Name: Name, Value: Value): FieldReified<ToTypeArgument<Name>, ToTypeArgument<Value>>;
    static get r(): typeof Field.reified;
    static phantom<Name extends Reified<TypeArgument, any>, Value extends Reified<TypeArgument, any>>(Name: Name, Value: Value): PhantomReified<ToTypeStr<Field<ToTypeArgument<Name>, ToTypeArgument<Value>>>>;
    static get p(): typeof Field.phantom;
    static get bcs(): <Name extends BcsType<any>, Value extends BcsType<any>>(Name: Name, Value: Value) => BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        name: Name extends BcsType<infer U_2, any> ? U_2 : never;
        value: Value extends BcsType<infer U_2, any> ? U_2 : never;
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        name: Name extends BcsType<any, infer U_3> ? U_3 : never;
        value: Value extends BcsType<any, infer U_3> ? U_3 : never;
    }>;
    static fromFields<Name extends Reified<TypeArgument, any>, Value extends Reified<TypeArgument, any>>(typeArgs: [Name, Value], fields: Record<string, any>): Field<ToTypeArgument<Name>, ToTypeArgument<Value>>;
    static fromFieldsWithTypes<Name extends Reified<TypeArgument, any>, Value extends Reified<TypeArgument, any>>(typeArgs: [Name, Value], item: FieldsWithTypes): Field<ToTypeArgument<Name>, ToTypeArgument<Value>>;
    static fromBcs<Name extends Reified<TypeArgument, any>, Value extends Reified<TypeArgument, any>>(typeArgs: [Name, Value], data: Uint8Array): Field<ToTypeArgument<Name>, ToTypeArgument<Value>>;
    toJSONField(): {
        id: string;
        name: import("../../../../_framework/reified").ToJSON<Name>;
        value: import("../../../../_framework/reified").ToJSON<Value>;
    };
    toJSON(): {
        id: string;
        name: import("../../../../_framework/reified").ToJSON<Name>;
        value: import("../../../../_framework/reified").ToJSON<Value>;
        $typeName: string;
        $typeArgs: [ToTypeStr<Name>, ToTypeStr<Value>];
    };
    static fromJSONField<Name extends Reified<TypeArgument, any>, Value extends Reified<TypeArgument, any>>(typeArgs: [Name, Value], field: any): Field<ToTypeArgument<Name>, ToTypeArgument<Value>>;
    static fromJSON<Name extends Reified<TypeArgument, any>, Value extends Reified<TypeArgument, any>>(typeArgs: [Name, Value], json: Record<string, any>): Field<ToTypeArgument<Name>, ToTypeArgument<Value>>;
    static fromSuiParsedData<Name extends Reified<TypeArgument, any>, Value extends Reified<TypeArgument, any>>(typeArgs: [Name, Value], content: SuiParsedData): Field<ToTypeArgument<Name>, ToTypeArgument<Value>>;
    static fetch<Name extends Reified<TypeArgument, any>, Value extends Reified<TypeArgument, any>>(client: SuiClient, typeArgs: [Name, Value], id: string): Promise<Field<ToTypeArgument<Name>, ToTypeArgument<Value>>>;
}
