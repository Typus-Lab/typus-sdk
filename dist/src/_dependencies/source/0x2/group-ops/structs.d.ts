import * as reified from "../../../../_framework/reified";
import { PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, Vector } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isElement(type: string): boolean;
export interface ElementFields<T extends PhantomTypeArgument> {
    bytes: ToField<Vector<"u8">>;
}
export type ElementReified<T extends PhantomTypeArgument> = Reified<Element<T>, ElementFields<T>>;
export declare class Element<T extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0x2::group_ops::Element";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0x2::group_ops::Element";
    readonly $fullTypeName: `0x2::group_ops::Element<${PhantomToTypeStr<T>}>`;
    readonly $typeArgs: [PhantomToTypeStr<T>];
    readonly bytes: ToField<Vector<"u8">>;
    private constructor();
    static reified<T extends PhantomReified<PhantomTypeArgument>>(T: T): ElementReified<ToPhantomTypeArgument<T>>;
    static get r(): typeof Element.reified;
    static phantom<T extends PhantomReified<PhantomTypeArgument>>(T: T): PhantomReified<ToTypeStr<Element<ToPhantomTypeArgument<T>>>>;
    static get p(): typeof Element.phantom;
    static get bcs(): import("@mysten/bcs").BcsType<{
        bytes: number[];
    }, {
        bytes: Iterable<number> & {
            length: number;
        };
    }>;
    static fromFields<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, fields: Record<string, any>): Element<ToPhantomTypeArgument<T>>;
    static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, item: FieldsWithTypes): Element<ToPhantomTypeArgument<T>>;
    static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, data: Uint8Array): Element<ToPhantomTypeArgument<T>>;
    toJSONField(): {
        bytes: number[];
    };
    toJSON(): {
        bytes: number[];
        $typeName: string;
        $typeArgs: [reified.PhantomToTypeStr<T>];
    };
    static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, field: any): Element<ToPhantomTypeArgument<T>>;
    static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, json: Record<string, any>): Element<ToPhantomTypeArgument<T>>;
    static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, content: SuiParsedData): Element<ToPhantomTypeArgument<T>>;
    static fetch<T extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: T, id: string): Promise<Element<ToPhantomTypeArgument<T>>>;
}
