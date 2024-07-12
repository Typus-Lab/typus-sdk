import { PhantomReified, Reified, StructClass, ToField, ToTypeArgument, ToTypeStr, TypeArgument } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { BcsType } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isWrapper(type: string): boolean;
export interface WrapperFields<Name extends TypeArgument> {
    name: ToField<Name>;
}
export type WrapperReified<Name extends TypeArgument> = Reified<Wrapper<Name>, WrapperFields<Name>>;
export declare class Wrapper<Name extends TypeArgument> implements StructClass {
    static readonly $typeName = "0x2::dynamic_object_field::Wrapper";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0x2::dynamic_object_field::Wrapper";
    readonly $fullTypeName: `0x2::dynamic_object_field::Wrapper<${ToTypeStr<Name>}>`;
    readonly $typeArgs: [ToTypeStr<Name>];
    readonly name: ToField<Name>;
    private constructor();
    static reified<Name extends Reified<TypeArgument, any>>(Name: Name): WrapperReified<ToTypeArgument<Name>>;
    static get r(): typeof Wrapper.reified;
    static phantom<Name extends Reified<TypeArgument, any>>(Name: Name): PhantomReified<ToTypeStr<Wrapper<ToTypeArgument<Name>>>>;
    static get p(): typeof Wrapper.phantom;
    static get bcs(): <Name extends BcsType<any>>(Name: Name) => BcsType<{
        name: Name extends BcsType<infer U_2, any> ? U_2 : never;
    }, {
        name: Name extends BcsType<any, infer U_3> ? U_3 : never;
    }>;
    static fromFields<Name extends Reified<TypeArgument, any>>(typeArg: Name, fields: Record<string, any>): Wrapper<ToTypeArgument<Name>>;
    static fromFieldsWithTypes<Name extends Reified<TypeArgument, any>>(typeArg: Name, item: FieldsWithTypes): Wrapper<ToTypeArgument<Name>>;
    static fromBcs<Name extends Reified<TypeArgument, any>>(typeArg: Name, data: Uint8Array): Wrapper<ToTypeArgument<Name>>;
    toJSONField(): {
        name: import("../../../../_framework/reified").ToJSON<Name>;
    };
    toJSON(): {
        name: import("../../../../_framework/reified").ToJSON<Name>;
        $typeName: string;
        $typeArgs: [ToTypeStr<Name>];
    };
    static fromJSONField<Name extends Reified<TypeArgument, any>>(typeArg: Name, field: any): Wrapper<ToTypeArgument<Name>>;
    static fromJSON<Name extends Reified<TypeArgument, any>>(typeArg: Name, json: Record<string, any>): Wrapper<ToTypeArgument<Name>>;
    static fromSuiParsedData<Name extends Reified<TypeArgument, any>>(typeArg: Name, content: SuiParsedData): Wrapper<ToTypeArgument<Name>>;
    static fetch<Name extends Reified<TypeArgument, any>>(client: SuiClient, typeArg: Name, id: string): Promise<Wrapper<ToTypeArgument<Name>>>;
}
