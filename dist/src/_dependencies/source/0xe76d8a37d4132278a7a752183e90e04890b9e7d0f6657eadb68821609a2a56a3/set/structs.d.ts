import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeArgument, ToTypeStr, TypeArgument, Vector, ToTypeStr as ToPhantom } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { Table } from "../../0x2/table/structs";
import { BcsType } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isSet(type: string): boolean;
export interface SetFields<A extends TypeArgument> {
    keys: ToField<Vector<A>>;
    elems: ToField<Table<ToPhantom<A>, ToPhantom<Unit>>>;
}
export type SetReified<A extends TypeArgument> = Reified<Set<A>, SetFields<A>>;
export declare class Set<A extends TypeArgument> implements StructClass {
    static readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::set::Set";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::set::Set";
    readonly $fullTypeName: `0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::set::Set<${ToTypeStr<A>}>`;
    readonly $typeArgs: [ToTypeStr<A>];
    readonly keys: ToField<Vector<A>>;
    readonly elems: ToField<Table<ToPhantom<A>, ToPhantom<Unit>>>;
    private constructor();
    static reified<A extends Reified<TypeArgument, any>>(A: A): SetReified<ToTypeArgument<A>>;
    static get r(): typeof Set.reified;
    static phantom<A extends Reified<TypeArgument, any>>(A: A): PhantomReified<ToTypeStr<Set<ToTypeArgument<A>>>>;
    static get p(): typeof Set.phantom;
    static get bcs(): <A extends BcsType<any>>(A: A) => BcsType<{
        keys: any[];
        elems: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string;
        };
    }, {
        keys: Iterable<any> & {
            length: number;
        };
        elems: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string | number | bigint;
        };
    }>;
    static fromFields<A extends Reified<TypeArgument, any>>(typeArg: A, fields: Record<string, any>): Set<ToTypeArgument<A>>;
    static fromFieldsWithTypes<A extends Reified<TypeArgument, any>>(typeArg: A, item: FieldsWithTypes): Set<ToTypeArgument<A>>;
    static fromBcs<A extends Reified<TypeArgument, any>>(typeArg: A, data: Uint8Array): Set<ToTypeArgument<A>>;
    toJSONField(): {
        keys: reified.ToJSON<A>[];
        elems: {
            id: string;
            size: string;
        };
    };
    toJSON(): {
        keys: reified.ToJSON<A>[];
        elems: {
            id: string;
            size: string;
        };
        $typeName: string;
        $typeArgs: [reified.ToTypeStr<A>];
    };
    static fromJSONField<A extends Reified<TypeArgument, any>>(typeArg: A, field: any): Set<ToTypeArgument<A>>;
    static fromJSON<A extends Reified<TypeArgument, any>>(typeArg: A, json: Record<string, any>): Set<ToTypeArgument<A>>;
    static fromSuiParsedData<A extends Reified<TypeArgument, any>>(typeArg: A, content: SuiParsedData): Set<ToTypeArgument<A>>;
    static fetch<A extends Reified<TypeArgument, any>>(client: SuiClient, typeArg: A, id: string): Promise<Set<ToTypeArgument<A>>>;
}
export declare function isUnit(type: string): boolean;
export interface UnitFields {
    dummyField: ToField<"bool">;
}
export type UnitReified = Reified<Unit, UnitFields>;
export declare class Unit implements StructClass {
    static readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::set::Unit";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::set::Unit";
    readonly $fullTypeName: "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::set::Unit";
    readonly $typeArgs: [];
    readonly dummyField: ToField<"bool">;
    private constructor();
    static reified(): UnitReified;
    static get r(): reified.StructClassReified<Unit, UnitFields>;
    static phantom(): PhantomReified<ToTypeStr<Unit>>;
    static get p(): reified.PhantomReified<"0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::set::Unit">;
    static get bcs(): BcsType<{
        dummy_field: boolean;
    }, {
        dummy_field: boolean;
    }>;
    static fromFields(fields: Record<string, any>): Unit;
    static fromFieldsWithTypes(item: FieldsWithTypes): Unit;
    static fromBcs(data: Uint8Array): Unit;
    toJSONField(): {
        dummyField: boolean;
    };
    toJSON(): {
        dummyField: boolean;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Unit;
    static fromJSON(json: Record<string, any>): Unit;
    static fromSuiParsedData(content: SuiParsedData): Unit;
    static fetch(client: SuiClient, id: string): Promise<Unit>;
}
