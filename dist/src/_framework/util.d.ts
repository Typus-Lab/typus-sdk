import { TransactionArgument, TransactionBlock, TransactionObjectArgument } from "@mysten/sui.js/transactions";
import { ObjectArg as SuiObjectArg } from "@mysten/sui.js/bcs";
export interface FieldsWithTypes {
    fields: Record<string, any>;
    type: string;
}
export type ObjectId = string;
export type ObjectCallArg = {
    Object: SuiObjectArg;
};
export type ObjectArg = string | ObjectCallArg | TransactionArgument;
export type PureArg = bigint | string | number | boolean | null | TransactionArgument | Array<PureArg>;
export type GenericArg = ObjectArg | PureArg | Array<ObjectArg> | Array<PureArg> | Array<GenericArg>;
export declare function parseTypeName(name: string): {
    typeName: string;
    typeArgs: string[];
};
export declare function isTransactionArgument(arg: GenericArg): arg is TransactionArgument;
export declare function isTransactionObjectArgument(arg: GenericArg): arg is TransactionObjectArgument;
export declare function obj(txb: TransactionBlock, arg: ObjectArg): {
    index: number;
    kind: "Input";
    type: "pure";
    value?: any;
} | TransactionObjectArgument;
export declare function pure(txb: TransactionBlock, arg: PureArg, type: string): {
    index: number;
    kind: "Input";
    type: "pure";
    value?: any;
} | TransactionObjectArgument;
export declare function option(txb: TransactionBlock, type: string, arg: GenericArg | null): {
    index: number;
    kind: "Input";
    type: "pure";
    value?: any;
} | TransactionObjectArgument;
export declare function generic(txb: TransactionBlock, type: string, arg: GenericArg): {
    index: number;
    kind: "Input";
    type: "pure";
    value?: any;
} | TransactionObjectArgument;
export declare function vector(txb: TransactionBlock, itemType: string, items: Array<GenericArg> | TransactionArgument): {
    index: number;
    kind: "Input";
    type: "pure";
    value?: any;
} | TransactionObjectArgument;
export declare function typeArgIsPure(type: string): boolean;
export declare function compressSuiAddress(addr: string): string;
export declare function compressSuiType(type: string): string;
export declare function composeSuiType(typeName: string, ...typeArgs: string[]): string;
