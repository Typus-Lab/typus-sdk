import { TypeName } from "../../_dependencies/source/0x1/type-name/structs";
import {
    PhantomReified,
    Reified,
    StructClass,
    ToField,
    ToTypeStr,
    decodeFromFields,
    decodeFromFieldsWithTypes,
    decodeFromJSONField,
    phantom,
} from "../../_framework/reified";
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../_framework/util";
import { bcs, fromB64 } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";

/* ============================== Symbol =============================== */

export function isSymbol(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1a05edb0e5e670196de98fbbf544180d129dd4ec11c3c57f742badf0304650d::symbol::Symbol";
}

export interface SymbolFields {
    baseToken: ToField<TypeName>;
    quoteToken: ToField<TypeName>;
}

export type SymbolReified = Reified<Symbol, SymbolFields>;

export class Symbol implements StructClass {
    static readonly $typeName = "0x1a05edb0e5e670196de98fbbf544180d129dd4ec11c3c57f742badf0304650d::symbol::Symbol";
    static readonly $numTypeParams = 0;

    readonly $typeName = Symbol.$typeName;

    readonly $fullTypeName: "0x1a05edb0e5e670196de98fbbf544180d129dd4ec11c3c57f742badf0304650d::symbol::Symbol";

    readonly $typeArgs: [];

    readonly baseToken: ToField<TypeName>;
    readonly quoteToken: ToField<TypeName>;

    private constructor(typeArgs: [], fields: SymbolFields) {
        this.$fullTypeName = composeSuiType(
            Symbol.$typeName,
            ...typeArgs
        ) as "0x1a05edb0e5e670196de98fbbf544180d129dd4ec11c3c57f742badf0304650d::symbol::Symbol";
        this.$typeArgs = typeArgs;

        this.baseToken = fields.baseToken;
        this.quoteToken = fields.quoteToken;
    }

    static reified(): SymbolReified {
        return {
            typeName: Symbol.$typeName,
            fullTypeName: composeSuiType(
                Symbol.$typeName,
                ...[]
            ) as "0x1a05edb0e5e670196de98fbbf544180d129dd4ec11c3c57f742badf0304650d::symbol::Symbol",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Symbol.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Symbol.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Symbol.fromBcs(data),
            bcs: Symbol.bcs,
            fromJSONField: (field: any) => Symbol.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Symbol.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Symbol.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => Symbol.fetch(client, id),
            new: (fields: SymbolFields) => {
                return new Symbol([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Symbol.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<Symbol>> {
        return phantom(Symbol.reified());
    }
    static get p() {
        return Symbol.phantom();
    }

    static get bcs() {
        return bcs.struct("Symbol", {
            base_token: TypeName.bcs,
            quote_token: TypeName.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): Symbol {
        return Symbol.reified().new({
            baseToken: decodeFromFields(TypeName.reified(), fields.base_token),
            quoteToken: decodeFromFields(TypeName.reified(), fields.quote_token),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Symbol {
        if (!isSymbol(item.type)) {
            throw new Error("not a Symbol type");
        }

        return Symbol.reified().new({
            baseToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.base_token),
            quoteToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.quote_token),
        });
    }

    static fromBcs(data: Uint8Array): Symbol {
        return Symbol.fromFields(Symbol.bcs.parse(data));
    }

    toJSONField() {
        return {
            baseToken: this.baseToken.toJSONField(),
            quoteToken: this.quoteToken.toJSONField(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): Symbol {
        return Symbol.reified().new({
            baseToken: decodeFromJSONField(TypeName.reified(), field.baseToken),
            quoteToken: decodeFromJSONField(TypeName.reified(), field.quoteToken),
        });
    }

    static fromJSON(json: Record<string, any>): Symbol {
        if (json.$typeName !== Symbol.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return Symbol.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): Symbol {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isSymbol(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Symbol object`);
        }
        return Symbol.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<Symbol> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Symbol object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isSymbol(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Symbol object`);
        }
        return Symbol.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}
