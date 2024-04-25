import * as reified from "../../../../_framework/reified";
import {
    PhantomReified,
    PhantomToTypeStr,
    PhantomTypeArgument,
    Reified,
    StructClass,
    ToField,
    ToPhantomTypeArgument,
    ToTypeStr,
    Vector,
    assertFieldsWithTypesArgsMatch,
    assertReifiedTypeArgsMatch,
    decodeFromFields,
    decodeFromFieldsWithTypes,
    decodeFromJSONField,
    extractType,
    fieldToJSON,
    phantom,
} from "../../../../_framework/reified";
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../../../_framework/util";
import { TypeName } from "../../0x1/type-name/structs";
import { ID, UID } from "../../0x2/object/structs";
import { VecSet } from "../../0x2/vec-set/structs";
import { PriceFeed } from "../price-feed/structs";
import { bcs, fromB64 } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";

/* ============================== PriceUpdatePolicy =============================== */

export function isPriceUpdatePolicy(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1478a432123e4b3d61878b629f2c692969fdb375644f1251cd278a4b1e7d7cd6::price_update_policy::PriceUpdatePolicy";
}

export interface PriceUpdatePolicyFields {
    id: ToField<UID>;
    rules: ToField<VecSet<TypeName>>;
}

export type PriceUpdatePolicyReified = Reified<PriceUpdatePolicy, PriceUpdatePolicyFields>;

export class PriceUpdatePolicy implements StructClass {
    static readonly $typeName =
        "0x1478a432123e4b3d61878b629f2c692969fdb375644f1251cd278a4b1e7d7cd6::price_update_policy::PriceUpdatePolicy";
    static readonly $numTypeParams = 0;

    readonly $typeName = PriceUpdatePolicy.$typeName;

    readonly $fullTypeName: "0x1478a432123e4b3d61878b629f2c692969fdb375644f1251cd278a4b1e7d7cd6::price_update_policy::PriceUpdatePolicy";

    readonly $typeArgs: [];

    readonly id: ToField<UID>;
    readonly rules: ToField<VecSet<TypeName>>;

    private constructor(typeArgs: [], fields: PriceUpdatePolicyFields) {
        this.$fullTypeName = composeSuiType(
            PriceUpdatePolicy.$typeName,
            ...typeArgs
        ) as "0x1478a432123e4b3d61878b629f2c692969fdb375644f1251cd278a4b1e7d7cd6::price_update_policy::PriceUpdatePolicy";
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.rules = fields.rules;
    }

    static reified(): PriceUpdatePolicyReified {
        return {
            typeName: PriceUpdatePolicy.$typeName,
            fullTypeName: composeSuiType(
                PriceUpdatePolicy.$typeName,
                ...[]
            ) as "0x1478a432123e4b3d61878b629f2c692969fdb375644f1251cd278a4b1e7d7cd6::price_update_policy::PriceUpdatePolicy",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => PriceUpdatePolicy.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => PriceUpdatePolicy.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => PriceUpdatePolicy.fromBcs(data),
            bcs: PriceUpdatePolicy.bcs,
            fromJSONField: (field: any) => PriceUpdatePolicy.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => PriceUpdatePolicy.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => PriceUpdatePolicy.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => PriceUpdatePolicy.fetch(client, id),
            new: (fields: PriceUpdatePolicyFields) => {
                return new PriceUpdatePolicy([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return PriceUpdatePolicy.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<PriceUpdatePolicy>> {
        return phantom(PriceUpdatePolicy.reified());
    }
    static get p() {
        return PriceUpdatePolicy.phantom();
    }

    static get bcs() {
        return bcs.struct("PriceUpdatePolicy", {
            id: UID.bcs,
            rules: VecSet.bcs(TypeName.bcs),
        });
    }

    static fromFields(fields: Record<string, any>): PriceUpdatePolicy {
        return PriceUpdatePolicy.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            rules: decodeFromFields(VecSet.reified(TypeName.reified()), fields.rules),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): PriceUpdatePolicy {
        if (!isPriceUpdatePolicy(item.type)) {
            throw new Error("not a PriceUpdatePolicy type");
        }

        return PriceUpdatePolicy.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            rules: decodeFromFieldsWithTypes(VecSet.reified(TypeName.reified()), item.fields.rules),
        });
    }

    static fromBcs(data: Uint8Array): PriceUpdatePolicy {
        return PriceUpdatePolicy.fromFields(PriceUpdatePolicy.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            rules: this.rules.toJSONField(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): PriceUpdatePolicy {
        return PriceUpdatePolicy.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            rules: decodeFromJSONField(VecSet.reified(TypeName.reified()), field.rules),
        });
    }

    static fromJSON(json: Record<string, any>): PriceUpdatePolicy {
        if (json.$typeName !== PriceUpdatePolicy.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return PriceUpdatePolicy.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): PriceUpdatePolicy {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isPriceUpdatePolicy(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a PriceUpdatePolicy object`);
        }
        return PriceUpdatePolicy.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<PriceUpdatePolicy> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching PriceUpdatePolicy object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isPriceUpdatePolicy(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a PriceUpdatePolicy object`);
        }
        return PriceUpdatePolicy.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== PriceUpdatePolicyCap =============================== */

export function isPriceUpdatePolicyCap(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1478a432123e4b3d61878b629f2c692969fdb375644f1251cd278a4b1e7d7cd6::price_update_policy::PriceUpdatePolicyCap";
}

export interface PriceUpdatePolicyCapFields {
    id: ToField<UID>;
    for: ToField<ID>;
}

export type PriceUpdatePolicyCapReified = Reified<PriceUpdatePolicyCap, PriceUpdatePolicyCapFields>;

export class PriceUpdatePolicyCap implements StructClass {
    static readonly $typeName =
        "0x1478a432123e4b3d61878b629f2c692969fdb375644f1251cd278a4b1e7d7cd6::price_update_policy::PriceUpdatePolicyCap";
    static readonly $numTypeParams = 0;

    readonly $typeName = PriceUpdatePolicyCap.$typeName;

    readonly $fullTypeName: "0x1478a432123e4b3d61878b629f2c692969fdb375644f1251cd278a4b1e7d7cd6::price_update_policy::PriceUpdatePolicyCap";

    readonly $typeArgs: [];

    readonly id: ToField<UID>;
    readonly for: ToField<ID>;

    private constructor(typeArgs: [], fields: PriceUpdatePolicyCapFields) {
        this.$fullTypeName = composeSuiType(
            PriceUpdatePolicyCap.$typeName,
            ...typeArgs
        ) as "0x1478a432123e4b3d61878b629f2c692969fdb375644f1251cd278a4b1e7d7cd6::price_update_policy::PriceUpdatePolicyCap";
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.for = fields.for;
    }

    static reified(): PriceUpdatePolicyCapReified {
        return {
            typeName: PriceUpdatePolicyCap.$typeName,
            fullTypeName: composeSuiType(
                PriceUpdatePolicyCap.$typeName,
                ...[]
            ) as "0x1478a432123e4b3d61878b629f2c692969fdb375644f1251cd278a4b1e7d7cd6::price_update_policy::PriceUpdatePolicyCap",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => PriceUpdatePolicyCap.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => PriceUpdatePolicyCap.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => PriceUpdatePolicyCap.fromBcs(data),
            bcs: PriceUpdatePolicyCap.bcs,
            fromJSONField: (field: any) => PriceUpdatePolicyCap.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => PriceUpdatePolicyCap.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => PriceUpdatePolicyCap.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => PriceUpdatePolicyCap.fetch(client, id),
            new: (fields: PriceUpdatePolicyCapFields) => {
                return new PriceUpdatePolicyCap([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return PriceUpdatePolicyCap.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<PriceUpdatePolicyCap>> {
        return phantom(PriceUpdatePolicyCap.reified());
    }
    static get p() {
        return PriceUpdatePolicyCap.phantom();
    }

    static get bcs() {
        return bcs.struct("PriceUpdatePolicyCap", {
            id: UID.bcs,
            for: ID.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): PriceUpdatePolicyCap {
        return PriceUpdatePolicyCap.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            for: decodeFromFields(ID.reified(), fields.for),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): PriceUpdatePolicyCap {
        if (!isPriceUpdatePolicyCap(item.type)) {
            throw new Error("not a PriceUpdatePolicyCap type");
        }

        return PriceUpdatePolicyCap.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            for: decodeFromFieldsWithTypes(ID.reified(), item.fields.for),
        });
    }

    static fromBcs(data: Uint8Array): PriceUpdatePolicyCap {
        return PriceUpdatePolicyCap.fromFields(PriceUpdatePolicyCap.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            for: this.for,
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): PriceUpdatePolicyCap {
        return PriceUpdatePolicyCap.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            for: decodeFromJSONField(ID.reified(), field.for),
        });
    }

    static fromJSON(json: Record<string, any>): PriceUpdatePolicyCap {
        if (json.$typeName !== PriceUpdatePolicyCap.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return PriceUpdatePolicyCap.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): PriceUpdatePolicyCap {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isPriceUpdatePolicyCap(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a PriceUpdatePolicyCap object`);
        }
        return PriceUpdatePolicyCap.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<PriceUpdatePolicyCap> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching PriceUpdatePolicyCap object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isPriceUpdatePolicyCap(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a PriceUpdatePolicyCap object`);
        }
        return PriceUpdatePolicyCap.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== PriceUpdateRequest =============================== */

export function isPriceUpdateRequest(type: string): boolean {
    type = compressSuiType(type);
    return type.startsWith("0x1478a432123e4b3d61878b629f2c692969fdb375644f1251cd278a4b1e7d7cd6::price_update_policy::PriceUpdateRequest<");
}

export interface PriceUpdateRequestFields<T extends PhantomTypeArgument> {
    for: ToField<ID>;
    receipts: ToField<VecSet<TypeName>>;
    priceFeeds: ToField<Vector<PriceFeed>>;
}

export type PriceUpdateRequestReified<T extends PhantomTypeArgument> = Reified<PriceUpdateRequest<T>, PriceUpdateRequestFields<T>>;

export class PriceUpdateRequest<T extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName =
        "0x1478a432123e4b3d61878b629f2c692969fdb375644f1251cd278a4b1e7d7cd6::price_update_policy::PriceUpdateRequest";
    static readonly $numTypeParams = 1;

    readonly $typeName = PriceUpdateRequest.$typeName;

    readonly $fullTypeName: `0x1478a432123e4b3d61878b629f2c692969fdb375644f1251cd278a4b1e7d7cd6::price_update_policy::PriceUpdateRequest<${PhantomToTypeStr<T>}>`;

    readonly $typeArgs: [PhantomToTypeStr<T>];

    readonly for: ToField<ID>;
    readonly receipts: ToField<VecSet<TypeName>>;
    readonly priceFeeds: ToField<Vector<PriceFeed>>;

    private constructor(typeArgs: [PhantomToTypeStr<T>], fields: PriceUpdateRequestFields<T>) {
        this.$fullTypeName = composeSuiType(
            PriceUpdateRequest.$typeName,
            ...typeArgs
        ) as `0x1478a432123e4b3d61878b629f2c692969fdb375644f1251cd278a4b1e7d7cd6::price_update_policy::PriceUpdateRequest<${PhantomToTypeStr<T>}>`;
        this.$typeArgs = typeArgs;

        this.for = fields.for;
        this.receipts = fields.receipts;
        this.priceFeeds = fields.priceFeeds;
    }

    static reified<T extends PhantomReified<PhantomTypeArgument>>(T: T): PriceUpdateRequestReified<ToPhantomTypeArgument<T>> {
        return {
            typeName: PriceUpdateRequest.$typeName,
            fullTypeName: composeSuiType(
                PriceUpdateRequest.$typeName,
                ...[extractType(T)]
            ) as `0x1478a432123e4b3d61878b629f2c692969fdb375644f1251cd278a4b1e7d7cd6::price_update_policy::PriceUpdateRequest<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`,
            typeArgs: [extractType(T)] as [PhantomToTypeStr<ToPhantomTypeArgument<T>>],
            reifiedTypeArgs: [T],
            fromFields: (fields: Record<string, any>) => PriceUpdateRequest.fromFields(T, fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => PriceUpdateRequest.fromFieldsWithTypes(T, item),
            fromBcs: (data: Uint8Array) => PriceUpdateRequest.fromBcs(T, data),
            bcs: PriceUpdateRequest.bcs,
            fromJSONField: (field: any) => PriceUpdateRequest.fromJSONField(T, field),
            fromJSON: (json: Record<string, any>) => PriceUpdateRequest.fromJSON(T, json),
            fromSuiParsedData: (content: SuiParsedData) => PriceUpdateRequest.fromSuiParsedData(T, content),
            fetch: async (client: SuiClient, id: string) => PriceUpdateRequest.fetch(client, T, id),
            new: (fields: PriceUpdateRequestFields<ToPhantomTypeArgument<T>>) => {
                return new PriceUpdateRequest([extractType(T)], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return PriceUpdateRequest.reified;
    }

    static phantom<T extends PhantomReified<PhantomTypeArgument>>(
        T: T
    ): PhantomReified<ToTypeStr<PriceUpdateRequest<ToPhantomTypeArgument<T>>>> {
        return phantom(PriceUpdateRequest.reified(T));
    }
    static get p() {
        return PriceUpdateRequest.phantom;
    }

    static get bcs() {
        return bcs.struct("PriceUpdateRequest", {
            for: ID.bcs,
            receipts: VecSet.bcs(TypeName.bcs),
            price_feeds: bcs.vector(PriceFeed.bcs),
        });
    }

    static fromFields<T extends PhantomReified<PhantomTypeArgument>>(
        typeArg: T,
        fields: Record<string, any>
    ): PriceUpdateRequest<ToPhantomTypeArgument<T>> {
        return PriceUpdateRequest.reified(typeArg).new({
            for: decodeFromFields(ID.reified(), fields.for),
            receipts: decodeFromFields(VecSet.reified(TypeName.reified()), fields.receipts),
            priceFeeds: decodeFromFields(reified.vector(PriceFeed.reified()), fields.price_feeds),
        });
    }

    static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(
        typeArg: T,
        item: FieldsWithTypes
    ): PriceUpdateRequest<ToPhantomTypeArgument<T>> {
        if (!isPriceUpdateRequest(item.type)) {
            throw new Error("not a PriceUpdateRequest type");
        }
        assertFieldsWithTypesArgsMatch(item, [typeArg]);

        return PriceUpdateRequest.reified(typeArg).new({
            for: decodeFromFieldsWithTypes(ID.reified(), item.fields.for),
            receipts: decodeFromFieldsWithTypes(VecSet.reified(TypeName.reified()), item.fields.receipts),
            priceFeeds: decodeFromFieldsWithTypes(reified.vector(PriceFeed.reified()), item.fields.price_feeds),
        });
    }

    static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(
        typeArg: T,
        data: Uint8Array
    ): PriceUpdateRequest<ToPhantomTypeArgument<T>> {
        return PriceUpdateRequest.fromFields(typeArg, PriceUpdateRequest.bcs.parse(data));
    }

    toJSONField() {
        return {
            for: this.for,
            receipts: this.receipts.toJSONField(),
            priceFeeds: fieldToJSON<Vector<PriceFeed>>(
                `vector<0x1478a432123e4b3d61878b629f2c692969fdb375644f1251cd278a4b1e7d7cd6::price_feed::PriceFeed>`,
                this.priceFeeds
            ),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(
        typeArg: T,
        field: any
    ): PriceUpdateRequest<ToPhantomTypeArgument<T>> {
        return PriceUpdateRequest.reified(typeArg).new({
            for: decodeFromJSONField(ID.reified(), field.for),
            receipts: decodeFromJSONField(VecSet.reified(TypeName.reified()), field.receipts),
            priceFeeds: decodeFromJSONField(reified.vector(PriceFeed.reified()), field.priceFeeds),
        });
    }

    static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(
        typeArg: T,
        json: Record<string, any>
    ): PriceUpdateRequest<ToPhantomTypeArgument<T>> {
        if (json.$typeName !== PriceUpdateRequest.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        assertReifiedTypeArgsMatch(composeSuiType(PriceUpdateRequest.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg]);

        return PriceUpdateRequest.fromJSONField(typeArg, json);
    }

    static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(
        typeArg: T,
        content: SuiParsedData
    ): PriceUpdateRequest<ToPhantomTypeArgument<T>> {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isPriceUpdateRequest(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a PriceUpdateRequest object`);
        }
        return PriceUpdateRequest.fromFieldsWithTypes(typeArg, content);
    }

    static async fetch<T extends PhantomReified<PhantomTypeArgument>>(
        client: SuiClient,
        typeArg: T,
        id: string
    ): Promise<PriceUpdateRequest<ToPhantomTypeArgument<T>>> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching PriceUpdateRequest object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isPriceUpdateRequest(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a PriceUpdateRequest object`);
        }
        return PriceUpdateRequest.fromBcs(typeArg, fromB64(res.data.bcs.bcsBytes));
    }
}
