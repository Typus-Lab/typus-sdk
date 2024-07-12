import { PhantomReified, Reified, StructClass, ToField, ToTypeArgument, ToTypeStr, TypeArgument } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { Option } from "../../0x1/option/structs";
import { ID } from "../object/structs";
import { BcsType } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isBorrow(type: string): boolean;
export interface BorrowFields {
    ref: ToField<"address">;
    obj: ToField<ID>;
}
export type BorrowReified = Reified<Borrow, BorrowFields>;
export declare class Borrow implements StructClass {
    static readonly $typeName = "0x2::borrow::Borrow";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x2::borrow::Borrow";
    readonly $fullTypeName: "0x2::borrow::Borrow";
    readonly $typeArgs: [];
    readonly ref: ToField<"address">;
    readonly obj: ToField<ID>;
    private constructor();
    static reified(): BorrowReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<Borrow, BorrowFields>;
    static phantom(): PhantomReified<ToTypeStr<Borrow>>;
    static get p(): PhantomReified<"0x2::borrow::Borrow">;
    static get bcs(): BcsType<{
        ref: string;
        obj: {
            bytes: string;
        };
    }, {
        ref: string;
        obj: {
            bytes: string;
        };
    }>;
    static fromFields(fields: Record<string, any>): Borrow;
    static fromFieldsWithTypes(item: FieldsWithTypes): Borrow;
    static fromBcs(data: Uint8Array): Borrow;
    toJSONField(): {
        ref: string;
        obj: string;
    };
    toJSON(): {
        ref: string;
        obj: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Borrow;
    static fromJSON(json: Record<string, any>): Borrow;
    static fromSuiParsedData(content: SuiParsedData): Borrow;
    static fetch(client: SuiClient, id: string): Promise<Borrow>;
}
export declare function isReferent(type: string): boolean;
export interface ReferentFields<T extends TypeArgument> {
    id: ToField<"address">;
    value: ToField<Option<T>>;
}
export type ReferentReified<T extends TypeArgument> = Reified<Referent<T>, ReferentFields<T>>;
export declare class Referent<T extends TypeArgument> implements StructClass {
    static readonly $typeName = "0x2::borrow::Referent";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0x2::borrow::Referent";
    readonly $fullTypeName: `0x2::borrow::Referent<${ToTypeStr<T>}>`;
    readonly $typeArgs: [ToTypeStr<T>];
    readonly id: ToField<"address">;
    readonly value: ToField<Option<T>>;
    private constructor();
    static reified<T extends Reified<TypeArgument, any>>(T: T): ReferentReified<ToTypeArgument<T>>;
    static get r(): typeof Referent.reified;
    static phantom<T extends Reified<TypeArgument, any>>(T: T): PhantomReified<ToTypeStr<Referent<ToTypeArgument<T>>>>;
    static get p(): typeof Referent.phantom;
    static get bcs(): <T extends BcsType<any>>(T: T) => BcsType<{
        id: string;
        value: {
            vec: any[];
        };
    }, {
        id: string;
        value: {
            vec: Iterable<any> & {
                length: number;
            };
        };
    }>;
    static fromFields<T extends Reified<TypeArgument, any>>(typeArg: T, fields: Record<string, any>): Referent<ToTypeArgument<T>>;
    static fromFieldsWithTypes<T extends Reified<TypeArgument, any>>(typeArg: T, item: FieldsWithTypes): Referent<ToTypeArgument<T>>;
    static fromBcs<T extends Reified<TypeArgument, any>>(typeArg: T, data: Uint8Array): Referent<ToTypeArgument<T>>;
    toJSONField(): {
        id: string;
        value: import("../../../../_framework/reified").ToJSON<T> | null;
    };
    toJSON(): {
        id: string;
        value: import("../../../../_framework/reified").ToJSON<T> | null;
        $typeName: string;
        $typeArgs: [ToTypeStr<T>];
    };
    static fromJSONField<T extends Reified<TypeArgument, any>>(typeArg: T, field: any): Referent<ToTypeArgument<T>>;
    static fromJSON<T extends Reified<TypeArgument, any>>(typeArg: T, json: Record<string, any>): Referent<ToTypeArgument<T>>;
    static fromSuiParsedData<T extends Reified<TypeArgument, any>>(typeArg: T, content: SuiParsedData): Referent<ToTypeArgument<T>>;
    static fetch<T extends Reified<TypeArgument, any>>(client: SuiClient, typeArg: T, id: string): Promise<Referent<ToTypeArgument<T>>>;
}
