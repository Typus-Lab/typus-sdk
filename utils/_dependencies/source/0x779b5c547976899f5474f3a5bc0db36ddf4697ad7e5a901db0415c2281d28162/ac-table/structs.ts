import * as reified from "../../../../_framework/reified";
import {
    PhantomReified,
    PhantomToTypeStr,
    PhantomTypeArgument,
    Reified,
    StructClass,
    ToField,
    ToPhantomTypeArgument,
    ToTypeArgument,
    ToTypeStr,
    TypeArgument,
    assertFieldsWithTypesArgsMatch,
    assertReifiedTypeArgsMatch,
    decodeFromFields,
    decodeFromFieldsWithTypes,
    decodeFromJSONField,
    extractType,
    fieldToJSON,
    phantom,
    toBcs,
    ToTypeStr as ToPhantom,
} from "../../../../_framework/reified";
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../../../_framework/util";
import { Option } from "../../0x1/option/structs";
import { UID } from "../../0x2/object/structs";
import { Table } from "../../0x2/table/structs";
import { VecSet } from "../../0x2/vec-set/structs";
import { Ownership } from "../ownership/structs";
import { BcsType, bcs, fromB64 } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";

/* ============================== AcTable =============================== */

export function isAcTable(type: string): boolean {
    type = compressSuiType(type);
    return type.startsWith("0x779b5c547976899f5474f3a5bc0db36ddf4697ad7e5a901db0415c2281d28162::ac_table::AcTable<");
}

export interface AcTableFields<T extends PhantomTypeArgument, K extends TypeArgument, V extends PhantomTypeArgument> {
    id: ToField<UID>;
    table: ToField<Table<ToPhantom<K>, V>>;
    keys: ToField<Option<VecSet<K>>>;
    withKeys: ToField<"bool">;
}

export type AcTableReified<T extends PhantomTypeArgument, K extends TypeArgument, V extends PhantomTypeArgument> = Reified<
    AcTable<T, K, V>,
    AcTableFields<T, K, V>
>;

export class AcTable<T extends PhantomTypeArgument, K extends TypeArgument, V extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0x779b5c547976899f5474f3a5bc0db36ddf4697ad7e5a901db0415c2281d28162::ac_table::AcTable";
    static readonly $numTypeParams = 3;

    readonly $typeName = AcTable.$typeName;

    readonly $fullTypeName: `0x779b5c547976899f5474f3a5bc0db36ddf4697ad7e5a901db0415c2281d28162::ac_table::AcTable<${PhantomToTypeStr<T>}, ${ToTypeStr<K>}, ${PhantomToTypeStr<V>}>`;

    readonly $typeArgs: [PhantomToTypeStr<T>, ToTypeStr<K>, PhantomToTypeStr<V>];

    readonly id: ToField<UID>;
    readonly table: ToField<Table<ToPhantom<K>, V>>;
    readonly keys: ToField<Option<VecSet<K>>>;
    readonly withKeys: ToField<"bool">;

    private constructor(typeArgs: [PhantomToTypeStr<T>, ToTypeStr<K>, PhantomToTypeStr<V>], fields: AcTableFields<T, K, V>) {
        this.$fullTypeName = composeSuiType(
            AcTable.$typeName,
            ...typeArgs
        ) as `0x779b5c547976899f5474f3a5bc0db36ddf4697ad7e5a901db0415c2281d28162::ac_table::AcTable<${PhantomToTypeStr<T>}, ${ToTypeStr<K>}, ${PhantomToTypeStr<V>}>`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.table = fields.table;
        this.keys = fields.keys;
        this.withKeys = fields.withKeys;
    }

    static reified<
        T extends PhantomReified<PhantomTypeArgument>,
        K extends Reified<TypeArgument, any>,
        V extends PhantomReified<PhantomTypeArgument>,
    >(T: T, K: K, V: V): AcTableReified<ToPhantomTypeArgument<T>, ToTypeArgument<K>, ToPhantomTypeArgument<V>> {
        return {
            typeName: AcTable.$typeName,
            fullTypeName: composeSuiType(
                AcTable.$typeName,
                ...[extractType(T), extractType(K), extractType(V)]
            ) as `0x779b5c547976899f5474f3a5bc0db36ddf4697ad7e5a901db0415c2281d28162::ac_table::AcTable<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}, ${ToTypeStr<ToTypeArgument<K>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<V>>}>`,
            typeArgs: [extractType(T), extractType(K), extractType(V)] as [
                PhantomToTypeStr<ToPhantomTypeArgument<T>>,
                ToTypeStr<ToTypeArgument<K>>,
                PhantomToTypeStr<ToPhantomTypeArgument<V>>,
            ],
            reifiedTypeArgs: [T, K, V],
            fromFields: (fields: Record<string, any>) => AcTable.fromFields([T, K, V], fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => AcTable.fromFieldsWithTypes([T, K, V], item),
            fromBcs: (data: Uint8Array) => AcTable.fromBcs([T, K, V], data),
            bcs: AcTable.bcs(toBcs(K)),
            fromJSONField: (field: any) => AcTable.fromJSONField([T, K, V], field),
            fromJSON: (json: Record<string, any>) => AcTable.fromJSON([T, K, V], json),
            fromSuiParsedData: (content: SuiParsedData) => AcTable.fromSuiParsedData([T, K, V], content),
            fetch: async (client: SuiClient, id: string) => AcTable.fetch(client, [T, K, V], id),
            new: (fields: AcTableFields<ToPhantomTypeArgument<T>, ToTypeArgument<K>, ToPhantomTypeArgument<V>>) => {
                return new AcTable([extractType(T), extractType(K), extractType(V)], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return AcTable.reified;
    }

    static phantom<
        T extends PhantomReified<PhantomTypeArgument>,
        K extends Reified<TypeArgument, any>,
        V extends PhantomReified<PhantomTypeArgument>,
    >(T: T, K: K, V: V): PhantomReified<ToTypeStr<AcTable<ToPhantomTypeArgument<T>, ToTypeArgument<K>, ToPhantomTypeArgument<V>>>> {
        return phantom(AcTable.reified(T, K, V));
    }
    static get p() {
        return AcTable.phantom;
    }

    static get bcs() {
        return <K extends BcsType<any>>(K: K) =>
            bcs.struct(`AcTable<${K.name}>`, {
                id: UID.bcs,
                table: Table.bcs,
                keys: Option.bcs(VecSet.bcs(K)),
                with_keys: bcs.bool(),
            });
    }

    static fromFields<
        T extends PhantomReified<PhantomTypeArgument>,
        K extends Reified<TypeArgument, any>,
        V extends PhantomReified<PhantomTypeArgument>,
    >(typeArgs: [T, K, V], fields: Record<string, any>): AcTable<ToPhantomTypeArgument<T>, ToTypeArgument<K>, ToPhantomTypeArgument<V>> {
        return AcTable.reified(typeArgs[0], typeArgs[1], typeArgs[2]).new({
            id: decodeFromFields(UID.reified(), fields.id),
            table: decodeFromFields(Table.reified(reified.phantom(typeArgs[1]), typeArgs[2]), fields.table),
            keys: decodeFromFields(Option.reified(VecSet.reified(typeArgs[1])), fields.keys),
            withKeys: decodeFromFields("bool", fields.with_keys),
        });
    }

    static fromFieldsWithTypes<
        T extends PhantomReified<PhantomTypeArgument>,
        K extends Reified<TypeArgument, any>,
        V extends PhantomReified<PhantomTypeArgument>,
    >(typeArgs: [T, K, V], item: FieldsWithTypes): AcTable<ToPhantomTypeArgument<T>, ToTypeArgument<K>, ToPhantomTypeArgument<V>> {
        if (!isAcTable(item.type)) {
            throw new Error("not a AcTable type");
        }
        assertFieldsWithTypesArgsMatch(item, typeArgs);

        return AcTable.reified(typeArgs[0], typeArgs[1], typeArgs[2]).new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            table: decodeFromFieldsWithTypes(Table.reified(reified.phantom(typeArgs[1]), typeArgs[2]), item.fields.table),
            keys: decodeFromFieldsWithTypes(Option.reified(VecSet.reified(typeArgs[1])), item.fields.keys),
            withKeys: decodeFromFieldsWithTypes("bool", item.fields.with_keys),
        });
    }

    static fromBcs<
        T extends PhantomReified<PhantomTypeArgument>,
        K extends Reified<TypeArgument, any>,
        V extends PhantomReified<PhantomTypeArgument>,
    >(typeArgs: [T, K, V], data: Uint8Array): AcTable<ToPhantomTypeArgument<T>, ToTypeArgument<K>, ToPhantomTypeArgument<V>> {
        return AcTable.fromFields(typeArgs, AcTable.bcs(toBcs(typeArgs[1])).parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            table: this.table.toJSONField(),
            keys: fieldToJSON<Option<VecSet<K>>>(`0x1::option::Option<0x2::vec_set::VecSet<${this.$typeArgs[1]}>>`, this.keys),
            withKeys: this.withKeys,
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField<
        T extends PhantomReified<PhantomTypeArgument>,
        K extends Reified<TypeArgument, any>,
        V extends PhantomReified<PhantomTypeArgument>,
    >(typeArgs: [T, K, V], field: any): AcTable<ToPhantomTypeArgument<T>, ToTypeArgument<K>, ToPhantomTypeArgument<V>> {
        return AcTable.reified(typeArgs[0], typeArgs[1], typeArgs[2]).new({
            id: decodeFromJSONField(UID.reified(), field.id),
            table: decodeFromJSONField(Table.reified(reified.phantom(typeArgs[1]), typeArgs[2]), field.table),
            keys: decodeFromJSONField(Option.reified(VecSet.reified(typeArgs[1])), field.keys),
            withKeys: decodeFromJSONField("bool", field.withKeys),
        });
    }

    static fromJSON<
        T extends PhantomReified<PhantomTypeArgument>,
        K extends Reified<TypeArgument, any>,
        V extends PhantomReified<PhantomTypeArgument>,
    >(typeArgs: [T, K, V], json: Record<string, any>): AcTable<ToPhantomTypeArgument<T>, ToTypeArgument<K>, ToPhantomTypeArgument<V>> {
        if (json.$typeName !== AcTable.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        assertReifiedTypeArgsMatch(composeSuiType(AcTable.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs);

        return AcTable.fromJSONField(typeArgs, json);
    }

    static fromSuiParsedData<
        T extends PhantomReified<PhantomTypeArgument>,
        K extends Reified<TypeArgument, any>,
        V extends PhantomReified<PhantomTypeArgument>,
    >(typeArgs: [T, K, V], content: SuiParsedData): AcTable<ToPhantomTypeArgument<T>, ToTypeArgument<K>, ToPhantomTypeArgument<V>> {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isAcTable(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a AcTable object`);
        }
        return AcTable.fromFieldsWithTypes(typeArgs, content);
    }

    static async fetch<
        T extends PhantomReified<PhantomTypeArgument>,
        K extends Reified<TypeArgument, any>,
        V extends PhantomReified<PhantomTypeArgument>,
    >(
        client: SuiClient,
        typeArgs: [T, K, V],
        id: string
    ): Promise<AcTable<ToPhantomTypeArgument<T>, ToTypeArgument<K>, ToPhantomTypeArgument<V>>> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching AcTable object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isAcTable(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AcTable object`);
        }
        return AcTable.fromBcs(typeArgs, fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== AcTableCap =============================== */

export function isAcTableCap(type: string): boolean {
    type = compressSuiType(type);
    return type.startsWith("0x779b5c547976899f5474f3a5bc0db36ddf4697ad7e5a901db0415c2281d28162::ac_table::AcTableCap<");
}

export interface AcTableCapFields<T extends PhantomTypeArgument> {
    id: ToField<UID>;
    ownership: ToField<Ownership<ToPhantom<AcTableOwnership>>>;
}

export type AcTableCapReified<T extends PhantomTypeArgument> = Reified<AcTableCap<T>, AcTableCapFields<T>>;

export class AcTableCap<T extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0x779b5c547976899f5474f3a5bc0db36ddf4697ad7e5a901db0415c2281d28162::ac_table::AcTableCap";
    static readonly $numTypeParams = 1;

    readonly $typeName = AcTableCap.$typeName;

    readonly $fullTypeName: `0x779b5c547976899f5474f3a5bc0db36ddf4697ad7e5a901db0415c2281d28162::ac_table::AcTableCap<${PhantomToTypeStr<T>}>`;

    readonly $typeArgs: [PhantomToTypeStr<T>];

    readonly id: ToField<UID>;
    readonly ownership: ToField<Ownership<ToPhantom<AcTableOwnership>>>;

    private constructor(typeArgs: [PhantomToTypeStr<T>], fields: AcTableCapFields<T>) {
        this.$fullTypeName = composeSuiType(
            AcTableCap.$typeName,
            ...typeArgs
        ) as `0x779b5c547976899f5474f3a5bc0db36ddf4697ad7e5a901db0415c2281d28162::ac_table::AcTableCap<${PhantomToTypeStr<T>}>`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.ownership = fields.ownership;
    }

    static reified<T extends PhantomReified<PhantomTypeArgument>>(T: T): AcTableCapReified<ToPhantomTypeArgument<T>> {
        return {
            typeName: AcTableCap.$typeName,
            fullTypeName: composeSuiType(
                AcTableCap.$typeName,
                ...[extractType(T)]
            ) as `0x779b5c547976899f5474f3a5bc0db36ddf4697ad7e5a901db0415c2281d28162::ac_table::AcTableCap<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`,
            typeArgs: [extractType(T)] as [PhantomToTypeStr<ToPhantomTypeArgument<T>>],
            reifiedTypeArgs: [T],
            fromFields: (fields: Record<string, any>) => AcTableCap.fromFields(T, fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => AcTableCap.fromFieldsWithTypes(T, item),
            fromBcs: (data: Uint8Array) => AcTableCap.fromBcs(T, data),
            bcs: AcTableCap.bcs,
            fromJSONField: (field: any) => AcTableCap.fromJSONField(T, field),
            fromJSON: (json: Record<string, any>) => AcTableCap.fromJSON(T, json),
            fromSuiParsedData: (content: SuiParsedData) => AcTableCap.fromSuiParsedData(T, content),
            fetch: async (client: SuiClient, id: string) => AcTableCap.fetch(client, T, id),
            new: (fields: AcTableCapFields<ToPhantomTypeArgument<T>>) => {
                return new AcTableCap([extractType(T)], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return AcTableCap.reified;
    }

    static phantom<T extends PhantomReified<PhantomTypeArgument>>(T: T): PhantomReified<ToTypeStr<AcTableCap<ToPhantomTypeArgument<T>>>> {
        return phantom(AcTableCap.reified(T));
    }
    static get p() {
        return AcTableCap.phantom;
    }

    static get bcs() {
        return bcs.struct("AcTableCap", {
            id: UID.bcs,
            ownership: Ownership.bcs,
        });
    }

    static fromFields<T extends PhantomReified<PhantomTypeArgument>>(
        typeArg: T,
        fields: Record<string, any>
    ): AcTableCap<ToPhantomTypeArgument<T>> {
        return AcTableCap.reified(typeArg).new({
            id: decodeFromFields(UID.reified(), fields.id),
            ownership: decodeFromFields(Ownership.reified(reified.phantom(AcTableOwnership.reified())), fields.ownership),
        });
    }

    static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(
        typeArg: T,
        item: FieldsWithTypes
    ): AcTableCap<ToPhantomTypeArgument<T>> {
        if (!isAcTableCap(item.type)) {
            throw new Error("not a AcTableCap type");
        }
        assertFieldsWithTypesArgsMatch(item, [typeArg]);

        return AcTableCap.reified(typeArg).new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            ownership: decodeFromFieldsWithTypes(Ownership.reified(reified.phantom(AcTableOwnership.reified())), item.fields.ownership),
        });
    }

    static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, data: Uint8Array): AcTableCap<ToPhantomTypeArgument<T>> {
        return AcTableCap.fromFields(typeArg, AcTableCap.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            ownership: this.ownership.toJSONField(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, field: any): AcTableCap<ToPhantomTypeArgument<T>> {
        return AcTableCap.reified(typeArg).new({
            id: decodeFromJSONField(UID.reified(), field.id),
            ownership: decodeFromJSONField(Ownership.reified(reified.phantom(AcTableOwnership.reified())), field.ownership),
        });
    }

    static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(
        typeArg: T,
        json: Record<string, any>
    ): AcTableCap<ToPhantomTypeArgument<T>> {
        if (json.$typeName !== AcTableCap.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        assertReifiedTypeArgsMatch(composeSuiType(AcTableCap.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg]);

        return AcTableCap.fromJSONField(typeArg, json);
    }

    static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(
        typeArg: T,
        content: SuiParsedData
    ): AcTableCap<ToPhantomTypeArgument<T>> {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isAcTableCap(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a AcTableCap object`);
        }
        return AcTableCap.fromFieldsWithTypes(typeArg, content);
    }

    static async fetch<T extends PhantomReified<PhantomTypeArgument>>(
        client: SuiClient,
        typeArg: T,
        id: string
    ): Promise<AcTableCap<ToPhantomTypeArgument<T>>> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching AcTableCap object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isAcTableCap(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AcTableCap object`);
        }
        return AcTableCap.fromBcs(typeArg, fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== AcTableOwnership =============================== */

export function isAcTableOwnership(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x779b5c547976899f5474f3a5bc0db36ddf4697ad7e5a901db0415c2281d28162::ac_table::AcTableOwnership";
}

export interface AcTableOwnershipFields {
    dummyField: ToField<"bool">;
}

export type AcTableOwnershipReified = Reified<AcTableOwnership, AcTableOwnershipFields>;

export class AcTableOwnership implements StructClass {
    static readonly $typeName = "0x779b5c547976899f5474f3a5bc0db36ddf4697ad7e5a901db0415c2281d28162::ac_table::AcTableOwnership";
    static readonly $numTypeParams = 0;

    readonly $typeName = AcTableOwnership.$typeName;

    readonly $fullTypeName: "0x779b5c547976899f5474f3a5bc0db36ddf4697ad7e5a901db0415c2281d28162::ac_table::AcTableOwnership";

    readonly $typeArgs: [];

    readonly dummyField: ToField<"bool">;

    private constructor(typeArgs: [], fields: AcTableOwnershipFields) {
        this.$fullTypeName = composeSuiType(
            AcTableOwnership.$typeName,
            ...typeArgs
        ) as "0x779b5c547976899f5474f3a5bc0db36ddf4697ad7e5a901db0415c2281d28162::ac_table::AcTableOwnership";
        this.$typeArgs = typeArgs;

        this.dummyField = fields.dummyField;
    }

    static reified(): AcTableOwnershipReified {
        return {
            typeName: AcTableOwnership.$typeName,
            fullTypeName: composeSuiType(
                AcTableOwnership.$typeName,
                ...[]
            ) as "0x779b5c547976899f5474f3a5bc0db36ddf4697ad7e5a901db0415c2281d28162::ac_table::AcTableOwnership",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => AcTableOwnership.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => AcTableOwnership.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => AcTableOwnership.fromBcs(data),
            bcs: AcTableOwnership.bcs,
            fromJSONField: (field: any) => AcTableOwnership.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => AcTableOwnership.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => AcTableOwnership.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => AcTableOwnership.fetch(client, id),
            new: (fields: AcTableOwnershipFields) => {
                return new AcTableOwnership([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return AcTableOwnership.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<AcTableOwnership>> {
        return phantom(AcTableOwnership.reified());
    }
    static get p() {
        return AcTableOwnership.phantom();
    }

    static get bcs() {
        return bcs.struct("AcTableOwnership", {
            dummy_field: bcs.bool(),
        });
    }

    static fromFields(fields: Record<string, any>): AcTableOwnership {
        return AcTableOwnership.reified().new({ dummyField: decodeFromFields("bool", fields.dummy_field) });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): AcTableOwnership {
        if (!isAcTableOwnership(item.type)) {
            throw new Error("not a AcTableOwnership type");
        }

        return AcTableOwnership.reified().new({ dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) });
    }

    static fromBcs(data: Uint8Array): AcTableOwnership {
        return AcTableOwnership.fromFields(AcTableOwnership.bcs.parse(data));
    }

    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): AcTableOwnership {
        return AcTableOwnership.reified().new({ dummyField: decodeFromJSONField("bool", field.dummyField) });
    }

    static fromJSON(json: Record<string, any>): AcTableOwnership {
        if (json.$typeName !== AcTableOwnership.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return AcTableOwnership.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): AcTableOwnership {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isAcTableOwnership(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a AcTableOwnership object`);
        }
        return AcTableOwnership.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<AcTableOwnership> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching AcTableOwnership object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isAcTableOwnership(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AcTableOwnership object`);
        }
        return AcTableOwnership.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}
