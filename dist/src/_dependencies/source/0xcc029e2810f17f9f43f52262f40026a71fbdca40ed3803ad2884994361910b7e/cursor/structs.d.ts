import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeArgument, ToTypeStr, TypeArgument, Vector } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { BcsType } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isCursor(type: string): boolean;
export interface CursorFields<T extends TypeArgument> {
    data: ToField<Vector<T>>;
}
export type CursorReified<T extends TypeArgument> = Reified<Cursor<T>, CursorFields<T>>;
export declare class Cursor<T extends TypeArgument> implements StructClass {
    static readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::cursor::Cursor";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::cursor::Cursor";
    readonly $fullTypeName: `0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::cursor::Cursor<${ToTypeStr<T>}>`;
    readonly $typeArgs: [ToTypeStr<T>];
    readonly data: ToField<Vector<T>>;
    private constructor();
    static reified<T extends Reified<TypeArgument, any>>(T: T): CursorReified<ToTypeArgument<T>>;
    static get r(): typeof Cursor.reified;
    static phantom<T extends Reified<TypeArgument, any>>(T: T): PhantomReified<ToTypeStr<Cursor<ToTypeArgument<T>>>>;
    static get p(): typeof Cursor.phantom;
    static get bcs(): <T extends BcsType<any>>(T: T) => BcsType<{
        data: any[];
    }, {
        data: Iterable<any> & {
            length: number;
        };
    }>;
    static fromFields<T extends Reified<TypeArgument, any>>(typeArg: T, fields: Record<string, any>): Cursor<ToTypeArgument<T>>;
    static fromFieldsWithTypes<T extends Reified<TypeArgument, any>>(typeArg: T, item: FieldsWithTypes): Cursor<ToTypeArgument<T>>;
    static fromBcs<T extends Reified<TypeArgument, any>>(typeArg: T, data: Uint8Array): Cursor<ToTypeArgument<T>>;
    toJSONField(): {
        data: reified.ToJSON<T>[];
    };
    toJSON(): {
        data: reified.ToJSON<T>[];
        $typeName: string;
        $typeArgs: [reified.ToTypeStr<T>];
    };
    static fromJSONField<T extends Reified<TypeArgument, any>>(typeArg: T, field: any): Cursor<ToTypeArgument<T>>;
    static fromJSON<T extends Reified<TypeArgument, any>>(typeArg: T, json: Record<string, any>): Cursor<ToTypeArgument<T>>;
    static fromSuiParsedData<T extends Reified<TypeArgument, any>>(typeArg: T, content: SuiParsedData): Cursor<ToTypeArgument<T>>;
    static fetch<T extends Reified<TypeArgument, any>>(client: SuiClient, typeArg: T, id: string): Promise<Cursor<ToTypeArgument<T>>>;
}
