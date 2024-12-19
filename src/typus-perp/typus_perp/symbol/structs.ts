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
import { PKG_V1 } from "../index";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromB64 } from "@mysten/sui/utils";

/* ============================== Symbol =============================== */

export function isSymbol(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::symbol::Symbol`;
}

export interface SymbolFields {
    baseToken: ToField<TypeName>;
    quoteToken: ToField<TypeName>;
}

export type SymbolReified = Reified<Symbol, SymbolFields>;

export class Symbol implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::symbol::Symbol`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = Symbol.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::symbol::Symbol`;
    readonly $typeArgs: [];
    readonly $isPhantom = Symbol.$isPhantom;

    readonly baseToken: ToField<TypeName>;
    readonly quoteToken: ToField<TypeName>;

    private constructor(typeArgs: [], fields: SymbolFields) {
        this.$fullTypeName = composeSuiType(Symbol.$typeName, ...typeArgs) as `${typeof PKG_V1}::symbol::Symbol`;
        this.$typeArgs = typeArgs;

        this.baseToken = fields.baseToken;
        this.quoteToken = fields.quoteToken;
    }

    static reified(): SymbolReified {
        return {
            typeName: Symbol.$typeName,
            fullTypeName: composeSuiType(Symbol.$typeName, ...[]) as `${typeof PKG_V1}::symbol::Symbol`,
            typeArgs: [] as [],
            isPhantom: Symbol.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Symbol.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Symbol.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Symbol.fromBcs(data),
            bcs: Symbol.bcs,
            fromJSONField: (field: any) => Symbol.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Symbol.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Symbol.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => Symbol.fromSuiObjectData(content),
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
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
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

    static fromSuiObjectData(data: SuiObjectData): Symbol {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isSymbol(data.bcs.type)) {
                throw new Error(`object at is not a Symbol object`);
            }

            return Symbol.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Symbol.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<Symbol> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Symbol object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isSymbol(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Symbol object`);
        }

        return Symbol.fromSuiObjectData(res.data);
    }
}
