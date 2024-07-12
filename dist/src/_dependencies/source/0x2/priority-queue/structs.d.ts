import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeArgument, ToTypeStr, TypeArgument, Vector } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { BcsType } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isEntry(type: string): boolean;
export interface EntryFields<T extends TypeArgument> {
    priority: ToField<"u64">;
    value: ToField<T>;
}
export type EntryReified<T extends TypeArgument> = Reified<Entry<T>, EntryFields<T>>;
export declare class Entry<T extends TypeArgument> implements StructClass {
    static readonly $typeName = "0x2::priority_queue::Entry";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0x2::priority_queue::Entry";
    readonly $fullTypeName: `0x2::priority_queue::Entry<${ToTypeStr<T>}>`;
    readonly $typeArgs: [ToTypeStr<T>];
    readonly priority: ToField<"u64">;
    readonly value: ToField<T>;
    private constructor();
    static reified<T extends Reified<TypeArgument, any>>(T: T): EntryReified<ToTypeArgument<T>>;
    static get r(): typeof Entry.reified;
    static phantom<T extends Reified<TypeArgument, any>>(T: T): PhantomReified<ToTypeStr<Entry<ToTypeArgument<T>>>>;
    static get p(): typeof Entry.phantom;
    static get bcs(): <T extends BcsType<any>>(T: T) => BcsType<{
        priority: string;
        value: T extends BcsType<infer U_2, any> ? U_2 : never;
    }, {
        priority: string | number | bigint;
        value: T extends BcsType<any, infer U_3> ? U_3 : never;
    }>;
    static fromFields<T extends Reified<TypeArgument, any>>(typeArg: T, fields: Record<string, any>): Entry<ToTypeArgument<T>>;
    static fromFieldsWithTypes<T extends Reified<TypeArgument, any>>(typeArg: T, item: FieldsWithTypes): Entry<ToTypeArgument<T>>;
    static fromBcs<T extends Reified<TypeArgument, any>>(typeArg: T, data: Uint8Array): Entry<ToTypeArgument<T>>;
    toJSONField(): {
        priority: string;
        value: reified.ToJSON<T>;
    };
    toJSON(): {
        priority: string;
        value: reified.ToJSON<T>;
        $typeName: string;
        $typeArgs: [reified.ToTypeStr<T>];
    };
    static fromJSONField<T extends Reified<TypeArgument, any>>(typeArg: T, field: any): Entry<ToTypeArgument<T>>;
    static fromJSON<T extends Reified<TypeArgument, any>>(typeArg: T, json: Record<string, any>): Entry<ToTypeArgument<T>>;
    static fromSuiParsedData<T extends Reified<TypeArgument, any>>(typeArg: T, content: SuiParsedData): Entry<ToTypeArgument<T>>;
    static fetch<T extends Reified<TypeArgument, any>>(client: SuiClient, typeArg: T, id: string): Promise<Entry<ToTypeArgument<T>>>;
}
export declare function isPriorityQueue(type: string): boolean;
export interface PriorityQueueFields<T extends TypeArgument> {
    entries: ToField<Vector<Entry<T>>>;
}
export type PriorityQueueReified<T extends TypeArgument> = Reified<PriorityQueue<T>, PriorityQueueFields<T>>;
export declare class PriorityQueue<T extends TypeArgument> implements StructClass {
    static readonly $typeName = "0x2::priority_queue::PriorityQueue";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0x2::priority_queue::PriorityQueue";
    readonly $fullTypeName: `0x2::priority_queue::PriorityQueue<${ToTypeStr<T>}>`;
    readonly $typeArgs: [ToTypeStr<T>];
    readonly entries: ToField<Vector<Entry<T>>>;
    private constructor();
    static reified<T extends Reified<TypeArgument, any>>(T: T): PriorityQueueReified<ToTypeArgument<T>>;
    static get r(): typeof PriorityQueue.reified;
    static phantom<T extends Reified<TypeArgument, any>>(T: T): PhantomReified<ToTypeStr<PriorityQueue<ToTypeArgument<T>>>>;
    static get p(): typeof PriorityQueue.phantom;
    static get bcs(): <T extends BcsType<any>>(T: T) => BcsType<{
        entries: {
            priority: string;
            value: T extends BcsType<infer U_2, any> ? U_2 : never;
        }[];
    }, {
        entries: Iterable<{
            priority: string | number | bigint;
            value: T extends BcsType<any, infer U_3> ? U_3 : never;
        }> & {
            length: number;
        };
    }>;
    static fromFields<T extends Reified<TypeArgument, any>>(typeArg: T, fields: Record<string, any>): PriorityQueue<ToTypeArgument<T>>;
    static fromFieldsWithTypes<T extends Reified<TypeArgument, any>>(typeArg: T, item: FieldsWithTypes): PriorityQueue<ToTypeArgument<T>>;
    static fromBcs<T extends Reified<TypeArgument, any>>(typeArg: T, data: Uint8Array): PriorityQueue<ToTypeArgument<T>>;
    toJSONField(): {
        entries: {
            priority: string;
            value: reified.ToJSON<T>;
        }[];
    };
    toJSON(): {
        entries: {
            priority: string;
            value: reified.ToJSON<T>;
        }[];
        $typeName: string;
        $typeArgs: [reified.ToTypeStr<T>];
    };
    static fromJSONField<T extends Reified<TypeArgument, any>>(typeArg: T, field: any): PriorityQueue<ToTypeArgument<T>>;
    static fromJSON<T extends Reified<TypeArgument, any>>(typeArg: T, json: Record<string, any>): PriorityQueue<ToTypeArgument<T>>;
    static fromSuiParsedData<T extends Reified<TypeArgument, any>>(typeArg: T, content: SuiParsedData): PriorityQueue<ToTypeArgument<T>>;
    static fetch<T extends Reified<TypeArgument, any>>(client: SuiClient, typeArg: T, id: string): Promise<PriorityQueue<ToTypeArgument<T>>>;
}
