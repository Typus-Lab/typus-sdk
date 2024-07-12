import { PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { UID } from "../object/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isTable(type: string): boolean;
export interface TableFields<K extends PhantomTypeArgument, V extends PhantomTypeArgument> {
    id: ToField<UID>;
    size: ToField<"u64">;
}
export type TableReified<K extends PhantomTypeArgument, V extends PhantomTypeArgument> = Reified<Table<K, V>, TableFields<K, V>>;
export declare class Table<K extends PhantomTypeArgument, V extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0x2::table::Table";
    static readonly $numTypeParams = 2;
    readonly $typeName = "0x2::table::Table";
    readonly $fullTypeName: `0x2::table::Table<${PhantomToTypeStr<K>}, ${PhantomToTypeStr<V>}>`;
    readonly $typeArgs: [PhantomToTypeStr<K>, PhantomToTypeStr<V>];
    readonly id: ToField<UID>;
    readonly size: ToField<"u64">;
    private constructor();
    static reified<K extends PhantomReified<PhantomTypeArgument>, V extends PhantomReified<PhantomTypeArgument>>(K: K, V: V): TableReified<ToPhantomTypeArgument<K>, ToPhantomTypeArgument<V>>;
    static get r(): typeof Table.reified;
    static phantom<K extends PhantomReified<PhantomTypeArgument>, V extends PhantomReified<PhantomTypeArgument>>(K: K, V: V): PhantomReified<ToTypeStr<Table<ToPhantomTypeArgument<K>, ToPhantomTypeArgument<V>>>>;
    static get p(): typeof Table.phantom;
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
    static fromFields<K extends PhantomReified<PhantomTypeArgument>, V extends PhantomReified<PhantomTypeArgument>>(typeArgs: [K, V], fields: Record<string, any>): Table<ToPhantomTypeArgument<K>, ToPhantomTypeArgument<V>>;
    static fromFieldsWithTypes<K extends PhantomReified<PhantomTypeArgument>, V extends PhantomReified<PhantomTypeArgument>>(typeArgs: [K, V], item: FieldsWithTypes): Table<ToPhantomTypeArgument<K>, ToPhantomTypeArgument<V>>;
    static fromBcs<K extends PhantomReified<PhantomTypeArgument>, V extends PhantomReified<PhantomTypeArgument>>(typeArgs: [K, V], data: Uint8Array): Table<ToPhantomTypeArgument<K>, ToPhantomTypeArgument<V>>;
    toJSONField(): {
        id: string;
        size: string;
    };
    toJSON(): {
        id: string;
        size: string;
        $typeName: string;
        $typeArgs: [PhantomToTypeStr<K>, PhantomToTypeStr<V>];
    };
    static fromJSONField<K extends PhantomReified<PhantomTypeArgument>, V extends PhantomReified<PhantomTypeArgument>>(typeArgs: [K, V], field: any): Table<ToPhantomTypeArgument<K>, ToPhantomTypeArgument<V>>;
    static fromJSON<K extends PhantomReified<PhantomTypeArgument>, V extends PhantomReified<PhantomTypeArgument>>(typeArgs: [K, V], json: Record<string, any>): Table<ToPhantomTypeArgument<K>, ToPhantomTypeArgument<V>>;
    static fromSuiParsedData<K extends PhantomReified<PhantomTypeArgument>, V extends PhantomReified<PhantomTypeArgument>>(typeArgs: [K, V], content: SuiParsedData): Table<ToPhantomTypeArgument<K>, ToPhantomTypeArgument<V>>;
    static fetch<K extends PhantomReified<PhantomTypeArgument>, V extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArgs: [K, V], id: string): Promise<Table<ToPhantomTypeArgument<K>, ToPhantomTypeArgument<V>>>;
}
