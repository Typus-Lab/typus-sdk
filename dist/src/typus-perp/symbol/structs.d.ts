import { TypeName } from "../../_dependencies/source/0x1/type-name/structs";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../_framework/reified";
import { FieldsWithTypes } from "../../_framework/util";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isSymbol(type: string): boolean;
export interface SymbolFields {
    baseToken: ToField<TypeName>;
    quoteToken: ToField<TypeName>;
}
export type SymbolReified = Reified<Symbol, SymbolFields>;
export declare class Symbol implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::symbol::Symbol";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::symbol::Symbol";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::symbol::Symbol";
    readonly $typeArgs: [];
    readonly baseToken: ToField<TypeName>;
    readonly quoteToken: ToField<TypeName>;
    private constructor();
    static reified(): SymbolReified;
    static get r(): import("../../_framework/reified").StructClassReified<Symbol, SymbolFields>;
    static phantom(): PhantomReified<ToTypeStr<Symbol>>;
    static get p(): PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::symbol::Symbol">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        base_token: {
            name: {
                bytes: number[];
            };
        };
        quote_token: {
            name: {
                bytes: number[];
            };
        };
    }, {
        base_token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        quote_token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
    }>;
    static fromFields(fields: Record<string, any>): Symbol;
    static fromFieldsWithTypes(item: FieldsWithTypes): Symbol;
    static fromBcs(data: Uint8Array): Symbol;
    toJSONField(): {
        baseToken: {
            name: string;
        };
        quoteToken: {
            name: string;
        };
    };
    toJSON(): {
        baseToken: {
            name: string;
        };
        quoteToken: {
            name: string;
        };
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Symbol;
    static fromJSON(json: Record<string, any>): Symbol;
    static fromSuiParsedData(content: SuiParsedData): Symbol;
    static fetch(client: SuiClient, id: string): Promise<Symbol>;
}
