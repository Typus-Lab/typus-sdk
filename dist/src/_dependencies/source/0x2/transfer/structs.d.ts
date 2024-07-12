import { PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { ID } from "../object/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isReceiving(type: string): boolean;
export interface ReceivingFields<T extends PhantomTypeArgument> {
    id: ToField<ID>;
    version: ToField<"u64">;
}
export type ReceivingReified<T extends PhantomTypeArgument> = Reified<Receiving<T>, ReceivingFields<T>>;
export declare class Receiving<T extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0x2::transfer::Receiving";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0x2::transfer::Receiving";
    readonly $fullTypeName: `0x2::transfer::Receiving<${PhantomToTypeStr<T>}>`;
    readonly $typeArgs: [PhantomToTypeStr<T>];
    readonly id: ToField<ID>;
    readonly version: ToField<"u64">;
    private constructor();
    static reified<T extends PhantomReified<PhantomTypeArgument>>(T: T): ReceivingReified<ToPhantomTypeArgument<T>>;
    static get r(): typeof Receiving.reified;
    static phantom<T extends PhantomReified<PhantomTypeArgument>>(T: T): PhantomReified<ToTypeStr<Receiving<ToPhantomTypeArgument<T>>>>;
    static get p(): typeof Receiving.phantom;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            bytes: string;
        };
        version: string;
    }, {
        id: {
            bytes: string;
        };
        version: string | number | bigint;
    }>;
    static fromFields<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, fields: Record<string, any>): Receiving<ToPhantomTypeArgument<T>>;
    static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, item: FieldsWithTypes): Receiving<ToPhantomTypeArgument<T>>;
    static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, data: Uint8Array): Receiving<ToPhantomTypeArgument<T>>;
    toJSONField(): {
        id: string;
        version: string;
    };
    toJSON(): {
        id: string;
        version: string;
        $typeName: string;
        $typeArgs: [PhantomToTypeStr<T>];
    };
    static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, field: any): Receiving<ToPhantomTypeArgument<T>>;
    static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, json: Record<string, any>): Receiving<ToPhantomTypeArgument<T>>;
    static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, content: SuiParsedData): Receiving<ToPhantomTypeArgument<T>>;
    static fetch<T extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: T, id: string): Promise<Receiving<ToPhantomTypeArgument<T>>>;
}
