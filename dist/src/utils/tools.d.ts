import BigNumber from "bignumber.js";
export declare function U64FromBytes(x: any): bigint;
export declare function AddressFromBytes(x: any): string;
export declare const insertAt: (str: string, sub: string, pos: number) => string;
export declare const checkNumber: (str: any) => boolean;
export declare const countFloating: (value: number | BigNumber) => number;
