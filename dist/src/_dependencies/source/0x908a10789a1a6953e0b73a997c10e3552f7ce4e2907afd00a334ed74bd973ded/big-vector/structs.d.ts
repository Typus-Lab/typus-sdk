import { PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { UID } from "../../0x2/object/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isBigVector(type: string): boolean;
export interface BigVectorFields<Element extends PhantomTypeArgument> {
    id: ToField<UID>;
    sliceCount: ToField<"u64">;
    sliceSize: ToField<"u64">;
    length: ToField<"u64">;
}
export type BigVectorReified<Element extends PhantomTypeArgument> = Reified<BigVector<Element>, BigVectorFields<Element>>;
export declare class BigVector<Element extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::big_vector::BigVector";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::big_vector::BigVector";
    readonly $fullTypeName: `0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::big_vector::BigVector<${PhantomToTypeStr<Element>}>`;
    readonly $typeArgs: [PhantomToTypeStr<Element>];
    readonly id: ToField<UID>;
    readonly sliceCount: ToField<"u64">;
    readonly sliceSize: ToField<"u64">;
    readonly length: ToField<"u64">;
    private constructor();
    static reified<Element extends PhantomReified<PhantomTypeArgument>>(Element: Element): BigVectorReified<ToPhantomTypeArgument<Element>>;
    static get r(): typeof BigVector.reified;
    static phantom<Element extends PhantomReified<PhantomTypeArgument>>(Element: Element): PhantomReified<ToTypeStr<BigVector<ToPhantomTypeArgument<Element>>>>;
    static get p(): typeof BigVector.phantom;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        slice_count: string;
        slice_size: string;
        length: string;
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        slice_count: string | number | bigint;
        slice_size: string | number | bigint;
        length: string | number | bigint;
    }>;
    static fromFields<Element extends PhantomReified<PhantomTypeArgument>>(typeArg: Element, fields: Record<string, any>): BigVector<ToPhantomTypeArgument<Element>>;
    static fromFieldsWithTypes<Element extends PhantomReified<PhantomTypeArgument>>(typeArg: Element, item: FieldsWithTypes): BigVector<ToPhantomTypeArgument<Element>>;
    static fromBcs<Element extends PhantomReified<PhantomTypeArgument>>(typeArg: Element, data: Uint8Array): BigVector<ToPhantomTypeArgument<Element>>;
    toJSONField(): {
        id: string;
        sliceCount: string;
        sliceSize: string;
        length: string;
    };
    toJSON(): {
        id: string;
        sliceCount: string;
        sliceSize: string;
        length: string;
        $typeName: string;
        $typeArgs: [PhantomToTypeStr<Element>];
    };
    static fromJSONField<Element extends PhantomReified<PhantomTypeArgument>>(typeArg: Element, field: any): BigVector<ToPhantomTypeArgument<Element>>;
    static fromJSON<Element extends PhantomReified<PhantomTypeArgument>>(typeArg: Element, json: Record<string, any>): BigVector<ToPhantomTypeArgument<Element>>;
    static fromSuiParsedData<Element extends PhantomReified<PhantomTypeArgument>>(typeArg: Element, content: SuiParsedData): BigVector<ToPhantomTypeArgument<Element>>;
    static fetch<Element extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: Element, id: string): Promise<BigVector<ToPhantomTypeArgument<Element>>>;
}
