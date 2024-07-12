import * as reified from "../../../../_framework/reified";
import { PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { Table } from "../table/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isTableVec(type: string): boolean;
export interface TableVecFields<Element extends PhantomTypeArgument> {
    contents: ToField<Table<"u64", Element>>;
}
export type TableVecReified<Element extends PhantomTypeArgument> = Reified<TableVec<Element>, TableVecFields<Element>>;
export declare class TableVec<Element extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0x2::table_vec::TableVec";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0x2::table_vec::TableVec";
    readonly $fullTypeName: `0x2::table_vec::TableVec<${PhantomToTypeStr<Element>}>`;
    readonly $typeArgs: [PhantomToTypeStr<Element>];
    readonly contents: ToField<Table<"u64", Element>>;
    private constructor();
    static reified<Element extends PhantomReified<PhantomTypeArgument>>(Element: Element): TableVecReified<ToPhantomTypeArgument<Element>>;
    static get r(): typeof TableVec.reified;
    static phantom<Element extends PhantomReified<PhantomTypeArgument>>(Element: Element): PhantomReified<ToTypeStr<TableVec<ToPhantomTypeArgument<Element>>>>;
    static get p(): typeof TableVec.phantom;
    static get bcs(): import("@mysten/bcs").BcsType<{
        contents: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string;
        };
    }, {
        contents: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string | number | bigint;
        };
    }>;
    static fromFields<Element extends PhantomReified<PhantomTypeArgument>>(typeArg: Element, fields: Record<string, any>): TableVec<ToPhantomTypeArgument<Element>>;
    static fromFieldsWithTypes<Element extends PhantomReified<PhantomTypeArgument>>(typeArg: Element, item: FieldsWithTypes): TableVec<ToPhantomTypeArgument<Element>>;
    static fromBcs<Element extends PhantomReified<PhantomTypeArgument>>(typeArg: Element, data: Uint8Array): TableVec<ToPhantomTypeArgument<Element>>;
    toJSONField(): {
        contents: {
            id: string;
            size: string;
        };
    };
    toJSON(): {
        contents: {
            id: string;
            size: string;
        };
        $typeName: string;
        $typeArgs: [reified.PhantomToTypeStr<Element>];
    };
    static fromJSONField<Element extends PhantomReified<PhantomTypeArgument>>(typeArg: Element, field: any): TableVec<ToPhantomTypeArgument<Element>>;
    static fromJSON<Element extends PhantomReified<PhantomTypeArgument>>(typeArg: Element, json: Record<string, any>): TableVec<ToPhantomTypeArgument<Element>>;
    static fromSuiParsedData<Element extends PhantomReified<PhantomTypeArgument>>(typeArg: Element, content: SuiParsedData): TableVec<ToPhantomTypeArgument<Element>>;
    static fetch<Element extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: Element, id: string): Promise<TableVec<ToPhantomTypeArgument<Element>>>;
}
