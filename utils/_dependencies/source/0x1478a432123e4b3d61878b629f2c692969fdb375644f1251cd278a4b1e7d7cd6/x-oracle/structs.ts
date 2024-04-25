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
    assertFieldsWithTypesArgsMatch,
    assertReifiedTypeArgsMatch,
    decodeFromFields,
    decodeFromFieldsWithTypes,
    decodeFromJSONField,
    extractType,
    phantom,
    ToTypeStr as ToPhantom,
} from "../../../../_framework/reified";
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../../../_framework/util";
import { TypeName } from "../../0x1/type-name/structs";
import { UID } from "../../0x2/object/structs";
import { Table } from "../../0x2/table/structs";
import { PriceFeed } from "../price-feed/structs";
import { PriceUpdatePolicy, PriceUpdatePolicyCap, PriceUpdateRequest } from "../price-update-policy/structs";
import { bcs, fromB64 } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";

/* ============================== XOracle =============================== */

export function isXOracle(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1478a432123e4b3d61878b629f2c692969fdb375644f1251cd278a4b1e7d7cd6::x_oracle::XOracle";
}

export interface XOracleFields {
    id: ToField<UID>;
    primaryPriceUpdatePolicy: ToField<PriceUpdatePolicy>;
    secondaryPriceUpdatePolicy: ToField<PriceUpdatePolicy>;
    prices: ToField<Table<ToPhantom<TypeName>, ToPhantom<PriceFeed>>>;
    emaPrices: ToField<Table<ToPhantom<TypeName>, ToPhantom<PriceFeed>>>;
}

export type XOracleReified = Reified<XOracle, XOracleFields>;

export class XOracle implements StructClass {
    static readonly $typeName = "0x1478a432123e4b3d61878b629f2c692969fdb375644f1251cd278a4b1e7d7cd6::x_oracle::XOracle";
    static readonly $numTypeParams = 0;

    readonly $typeName = XOracle.$typeName;

    readonly $fullTypeName: "0x1478a432123e4b3d61878b629f2c692969fdb375644f1251cd278a4b1e7d7cd6::x_oracle::XOracle";

    readonly $typeArgs: [];

    readonly id: ToField<UID>;
    readonly primaryPriceUpdatePolicy: ToField<PriceUpdatePolicy>;
    readonly secondaryPriceUpdatePolicy: ToField<PriceUpdatePolicy>;
    readonly prices: ToField<Table<ToPhantom<TypeName>, ToPhantom<PriceFeed>>>;
    readonly emaPrices: ToField<Table<ToPhantom<TypeName>, ToPhantom<PriceFeed>>>;

    private constructor(typeArgs: [], fields: XOracleFields) {
        this.$fullTypeName = composeSuiType(
            XOracle.$typeName,
            ...typeArgs
        ) as "0x1478a432123e4b3d61878b629f2c692969fdb375644f1251cd278a4b1e7d7cd6::x_oracle::XOracle";
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.primaryPriceUpdatePolicy = fields.primaryPriceUpdatePolicy;
        this.secondaryPriceUpdatePolicy = fields.secondaryPriceUpdatePolicy;
        this.prices = fields.prices;
        this.emaPrices = fields.emaPrices;
    }

    static reified(): XOracleReified {
        return {
            typeName: XOracle.$typeName,
            fullTypeName: composeSuiType(
                XOracle.$typeName,
                ...[]
            ) as "0x1478a432123e4b3d61878b629f2c692969fdb375644f1251cd278a4b1e7d7cd6::x_oracle::XOracle",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => XOracle.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => XOracle.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => XOracle.fromBcs(data),
            bcs: XOracle.bcs,
            fromJSONField: (field: any) => XOracle.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => XOracle.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => XOracle.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => XOracle.fetch(client, id),
            new: (fields: XOracleFields) => {
                return new XOracle([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return XOracle.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<XOracle>> {
        return phantom(XOracle.reified());
    }
    static get p() {
        return XOracle.phantom();
    }

    static get bcs() {
        return bcs.struct("XOracle", {
            id: UID.bcs,
            primary_price_update_policy: PriceUpdatePolicy.bcs,
            secondary_price_update_policy: PriceUpdatePolicy.bcs,
            prices: Table.bcs,
            ema_prices: Table.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): XOracle {
        return XOracle.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            primaryPriceUpdatePolicy: decodeFromFields(PriceUpdatePolicy.reified(), fields.primary_price_update_policy),
            secondaryPriceUpdatePolicy: decodeFromFields(PriceUpdatePolicy.reified(), fields.secondary_price_update_policy),
            prices: decodeFromFields(
                Table.reified(reified.phantom(TypeName.reified()), reified.phantom(PriceFeed.reified())),
                fields.prices
            ),
            emaPrices: decodeFromFields(
                Table.reified(reified.phantom(TypeName.reified()), reified.phantom(PriceFeed.reified())),
                fields.ema_prices
            ),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): XOracle {
        if (!isXOracle(item.type)) {
            throw new Error("not a XOracle type");
        }

        return XOracle.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            primaryPriceUpdatePolicy: decodeFromFieldsWithTypes(PriceUpdatePolicy.reified(), item.fields.primary_price_update_policy),
            secondaryPriceUpdatePolicy: decodeFromFieldsWithTypes(PriceUpdatePolicy.reified(), item.fields.secondary_price_update_policy),
            prices: decodeFromFieldsWithTypes(
                Table.reified(reified.phantom(TypeName.reified()), reified.phantom(PriceFeed.reified())),
                item.fields.prices
            ),
            emaPrices: decodeFromFieldsWithTypes(
                Table.reified(reified.phantom(TypeName.reified()), reified.phantom(PriceFeed.reified())),
                item.fields.ema_prices
            ),
        });
    }

    static fromBcs(data: Uint8Array): XOracle {
        return XOracle.fromFields(XOracle.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            primaryPriceUpdatePolicy: this.primaryPriceUpdatePolicy.toJSONField(),
            secondaryPriceUpdatePolicy: this.secondaryPriceUpdatePolicy.toJSONField(),
            prices: this.prices.toJSONField(),
            emaPrices: this.emaPrices.toJSONField(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): XOracle {
        return XOracle.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            primaryPriceUpdatePolicy: decodeFromJSONField(PriceUpdatePolicy.reified(), field.primaryPriceUpdatePolicy),
            secondaryPriceUpdatePolicy: decodeFromJSONField(PriceUpdatePolicy.reified(), field.secondaryPriceUpdatePolicy),
            prices: decodeFromJSONField(
                Table.reified(reified.phantom(TypeName.reified()), reified.phantom(PriceFeed.reified())),
                field.prices
            ),
            emaPrices: decodeFromJSONField(
                Table.reified(reified.phantom(TypeName.reified()), reified.phantom(PriceFeed.reified())),
                field.emaPrices
            ),
        });
    }

    static fromJSON(json: Record<string, any>): XOracle {
        if (json.$typeName !== XOracle.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return XOracle.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): XOracle {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isXOracle(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a XOracle object`);
        }
        return XOracle.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<XOracle> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching XOracle object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isXOracle(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a XOracle object`);
        }
        return XOracle.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== XOraclePolicyCap =============================== */

export function isXOraclePolicyCap(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1478a432123e4b3d61878b629f2c692969fdb375644f1251cd278a4b1e7d7cd6::x_oracle::XOraclePolicyCap";
}

export interface XOraclePolicyCapFields {
    id: ToField<UID>;
    primaryPriceUpdatePolicyCap: ToField<PriceUpdatePolicyCap>;
    secondaryPriceUpdatePolicyCap: ToField<PriceUpdatePolicyCap>;
}

export type XOraclePolicyCapReified = Reified<XOraclePolicyCap, XOraclePolicyCapFields>;

export class XOraclePolicyCap implements StructClass {
    static readonly $typeName = "0x1478a432123e4b3d61878b629f2c692969fdb375644f1251cd278a4b1e7d7cd6::x_oracle::XOraclePolicyCap";
    static readonly $numTypeParams = 0;

    readonly $typeName = XOraclePolicyCap.$typeName;

    readonly $fullTypeName: "0x1478a432123e4b3d61878b629f2c692969fdb375644f1251cd278a4b1e7d7cd6::x_oracle::XOraclePolicyCap";

    readonly $typeArgs: [];

    readonly id: ToField<UID>;
    readonly primaryPriceUpdatePolicyCap: ToField<PriceUpdatePolicyCap>;
    readonly secondaryPriceUpdatePolicyCap: ToField<PriceUpdatePolicyCap>;

    private constructor(typeArgs: [], fields: XOraclePolicyCapFields) {
        this.$fullTypeName = composeSuiType(
            XOraclePolicyCap.$typeName,
            ...typeArgs
        ) as "0x1478a432123e4b3d61878b629f2c692969fdb375644f1251cd278a4b1e7d7cd6::x_oracle::XOraclePolicyCap";
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.primaryPriceUpdatePolicyCap = fields.primaryPriceUpdatePolicyCap;
        this.secondaryPriceUpdatePolicyCap = fields.secondaryPriceUpdatePolicyCap;
    }

    static reified(): XOraclePolicyCapReified {
        return {
            typeName: XOraclePolicyCap.$typeName,
            fullTypeName: composeSuiType(
                XOraclePolicyCap.$typeName,
                ...[]
            ) as "0x1478a432123e4b3d61878b629f2c692969fdb375644f1251cd278a4b1e7d7cd6::x_oracle::XOraclePolicyCap",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => XOraclePolicyCap.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => XOraclePolicyCap.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => XOraclePolicyCap.fromBcs(data),
            bcs: XOraclePolicyCap.bcs,
            fromJSONField: (field: any) => XOraclePolicyCap.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => XOraclePolicyCap.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => XOraclePolicyCap.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => XOraclePolicyCap.fetch(client, id),
            new: (fields: XOraclePolicyCapFields) => {
                return new XOraclePolicyCap([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return XOraclePolicyCap.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<XOraclePolicyCap>> {
        return phantom(XOraclePolicyCap.reified());
    }
    static get p() {
        return XOraclePolicyCap.phantom();
    }

    static get bcs() {
        return bcs.struct("XOraclePolicyCap", {
            id: UID.bcs,
            primary_price_update_policy_cap: PriceUpdatePolicyCap.bcs,
            secondary_price_update_policy_cap: PriceUpdatePolicyCap.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): XOraclePolicyCap {
        return XOraclePolicyCap.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            primaryPriceUpdatePolicyCap: decodeFromFields(PriceUpdatePolicyCap.reified(), fields.primary_price_update_policy_cap),
            secondaryPriceUpdatePolicyCap: decodeFromFields(PriceUpdatePolicyCap.reified(), fields.secondary_price_update_policy_cap),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): XOraclePolicyCap {
        if (!isXOraclePolicyCap(item.type)) {
            throw new Error("not a XOraclePolicyCap type");
        }

        return XOraclePolicyCap.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            primaryPriceUpdatePolicyCap: decodeFromFieldsWithTypes(
                PriceUpdatePolicyCap.reified(),
                item.fields.primary_price_update_policy_cap
            ),
            secondaryPriceUpdatePolicyCap: decodeFromFieldsWithTypes(
                PriceUpdatePolicyCap.reified(),
                item.fields.secondary_price_update_policy_cap
            ),
        });
    }

    static fromBcs(data: Uint8Array): XOraclePolicyCap {
        return XOraclePolicyCap.fromFields(XOraclePolicyCap.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            primaryPriceUpdatePolicyCap: this.primaryPriceUpdatePolicyCap.toJSONField(),
            secondaryPriceUpdatePolicyCap: this.secondaryPriceUpdatePolicyCap.toJSONField(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): XOraclePolicyCap {
        return XOraclePolicyCap.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            primaryPriceUpdatePolicyCap: decodeFromJSONField(PriceUpdatePolicyCap.reified(), field.primaryPriceUpdatePolicyCap),
            secondaryPriceUpdatePolicyCap: decodeFromJSONField(PriceUpdatePolicyCap.reified(), field.secondaryPriceUpdatePolicyCap),
        });
    }

    static fromJSON(json: Record<string, any>): XOraclePolicyCap {
        if (json.$typeName !== XOraclePolicyCap.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return XOraclePolicyCap.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): XOraclePolicyCap {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isXOraclePolicyCap(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a XOraclePolicyCap object`);
        }
        return XOraclePolicyCap.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<XOraclePolicyCap> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching XOraclePolicyCap object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isXOraclePolicyCap(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a XOraclePolicyCap object`);
        }
        return XOraclePolicyCap.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== XOraclePriceUpdateRequest =============================== */

export function isXOraclePriceUpdateRequest(type: string): boolean {
    type = compressSuiType(type);
    return type.startsWith("0x1478a432123e4b3d61878b629f2c692969fdb375644f1251cd278a4b1e7d7cd6::x_oracle::XOraclePriceUpdateRequest<");
}

export interface XOraclePriceUpdateRequestFields<T extends PhantomTypeArgument> {
    primaryPriceUpdateRequest: ToField<PriceUpdateRequest<T>>;
    secondaryPriceUpdateRequest: ToField<PriceUpdateRequest<T>>;
}

export type XOraclePriceUpdateRequestReified<T extends PhantomTypeArgument> = Reified<
    XOraclePriceUpdateRequest<T>,
    XOraclePriceUpdateRequestFields<T>
>;

export class XOraclePriceUpdateRequest<T extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0x1478a432123e4b3d61878b629f2c692969fdb375644f1251cd278a4b1e7d7cd6::x_oracle::XOraclePriceUpdateRequest";
    static readonly $numTypeParams = 1;

    readonly $typeName = XOraclePriceUpdateRequest.$typeName;

    readonly $fullTypeName: `0x1478a432123e4b3d61878b629f2c692969fdb375644f1251cd278a4b1e7d7cd6::x_oracle::XOraclePriceUpdateRequest<${PhantomToTypeStr<T>}>`;

    readonly $typeArgs: [PhantomToTypeStr<T>];

    readonly primaryPriceUpdateRequest: ToField<PriceUpdateRequest<T>>;
    readonly secondaryPriceUpdateRequest: ToField<PriceUpdateRequest<T>>;

    private constructor(typeArgs: [PhantomToTypeStr<T>], fields: XOraclePriceUpdateRequestFields<T>) {
        this.$fullTypeName = composeSuiType(
            XOraclePriceUpdateRequest.$typeName,
            ...typeArgs
        ) as `0x1478a432123e4b3d61878b629f2c692969fdb375644f1251cd278a4b1e7d7cd6::x_oracle::XOraclePriceUpdateRequest<${PhantomToTypeStr<T>}>`;
        this.$typeArgs = typeArgs;

        this.primaryPriceUpdateRequest = fields.primaryPriceUpdateRequest;
        this.secondaryPriceUpdateRequest = fields.secondaryPriceUpdateRequest;
    }

    static reified<T extends PhantomReified<PhantomTypeArgument>>(T: T): XOraclePriceUpdateRequestReified<ToPhantomTypeArgument<T>> {
        return {
            typeName: XOraclePriceUpdateRequest.$typeName,
            fullTypeName: composeSuiType(
                XOraclePriceUpdateRequest.$typeName,
                ...[extractType(T)]
            ) as `0x1478a432123e4b3d61878b629f2c692969fdb375644f1251cd278a4b1e7d7cd6::x_oracle::XOraclePriceUpdateRequest<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`,
            typeArgs: [extractType(T)] as [PhantomToTypeStr<ToPhantomTypeArgument<T>>],
            reifiedTypeArgs: [T],
            fromFields: (fields: Record<string, any>) => XOraclePriceUpdateRequest.fromFields(T, fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => XOraclePriceUpdateRequest.fromFieldsWithTypes(T, item),
            fromBcs: (data: Uint8Array) => XOraclePriceUpdateRequest.fromBcs(T, data),
            bcs: XOraclePriceUpdateRequest.bcs,
            fromJSONField: (field: any) => XOraclePriceUpdateRequest.fromJSONField(T, field),
            fromJSON: (json: Record<string, any>) => XOraclePriceUpdateRequest.fromJSON(T, json),
            fromSuiParsedData: (content: SuiParsedData) => XOraclePriceUpdateRequest.fromSuiParsedData(T, content),
            fetch: async (client: SuiClient, id: string) => XOraclePriceUpdateRequest.fetch(client, T, id),
            new: (fields: XOraclePriceUpdateRequestFields<ToPhantomTypeArgument<T>>) => {
                return new XOraclePriceUpdateRequest([extractType(T)], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return XOraclePriceUpdateRequest.reified;
    }

    static phantom<T extends PhantomReified<PhantomTypeArgument>>(
        T: T
    ): PhantomReified<ToTypeStr<XOraclePriceUpdateRequest<ToPhantomTypeArgument<T>>>> {
        return phantom(XOraclePriceUpdateRequest.reified(T));
    }
    static get p() {
        return XOraclePriceUpdateRequest.phantom;
    }

    static get bcs() {
        return bcs.struct("XOraclePriceUpdateRequest", {
            primary_price_update_request: PriceUpdateRequest.bcs,
            secondary_price_update_request: PriceUpdateRequest.bcs,
        });
    }

    static fromFields<T extends PhantomReified<PhantomTypeArgument>>(
        typeArg: T,
        fields: Record<string, any>
    ): XOraclePriceUpdateRequest<ToPhantomTypeArgument<T>> {
        return XOraclePriceUpdateRequest.reified(typeArg).new({
            primaryPriceUpdateRequest: decodeFromFields(PriceUpdateRequest.reified(typeArg), fields.primary_price_update_request),
            secondaryPriceUpdateRequest: decodeFromFields(PriceUpdateRequest.reified(typeArg), fields.secondary_price_update_request),
        });
    }

    static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(
        typeArg: T,
        item: FieldsWithTypes
    ): XOraclePriceUpdateRequest<ToPhantomTypeArgument<T>> {
        if (!isXOraclePriceUpdateRequest(item.type)) {
            throw new Error("not a XOraclePriceUpdateRequest type");
        }
        assertFieldsWithTypesArgsMatch(item, [typeArg]);

        return XOraclePriceUpdateRequest.reified(typeArg).new({
            primaryPriceUpdateRequest: decodeFromFieldsWithTypes(
                PriceUpdateRequest.reified(typeArg),
                item.fields.primary_price_update_request
            ),
            secondaryPriceUpdateRequest: decodeFromFieldsWithTypes(
                PriceUpdateRequest.reified(typeArg),
                item.fields.secondary_price_update_request
            ),
        });
    }

    static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(
        typeArg: T,
        data: Uint8Array
    ): XOraclePriceUpdateRequest<ToPhantomTypeArgument<T>> {
        return XOraclePriceUpdateRequest.fromFields(typeArg, XOraclePriceUpdateRequest.bcs.parse(data));
    }

    toJSONField() {
        return {
            primaryPriceUpdateRequest: this.primaryPriceUpdateRequest.toJSONField(),
            secondaryPriceUpdateRequest: this.secondaryPriceUpdateRequest.toJSONField(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(
        typeArg: T,
        field: any
    ): XOraclePriceUpdateRequest<ToPhantomTypeArgument<T>> {
        return XOraclePriceUpdateRequest.reified(typeArg).new({
            primaryPriceUpdateRequest: decodeFromJSONField(PriceUpdateRequest.reified(typeArg), field.primaryPriceUpdateRequest),
            secondaryPriceUpdateRequest: decodeFromJSONField(PriceUpdateRequest.reified(typeArg), field.secondaryPriceUpdateRequest),
        });
    }

    static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(
        typeArg: T,
        json: Record<string, any>
    ): XOraclePriceUpdateRequest<ToPhantomTypeArgument<T>> {
        if (json.$typeName !== XOraclePriceUpdateRequest.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        assertReifiedTypeArgsMatch(composeSuiType(XOraclePriceUpdateRequest.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg]);

        return XOraclePriceUpdateRequest.fromJSONField(typeArg, json);
    }

    static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(
        typeArg: T,
        content: SuiParsedData
    ): XOraclePriceUpdateRequest<ToPhantomTypeArgument<T>> {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isXOraclePriceUpdateRequest(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a XOraclePriceUpdateRequest object`);
        }
        return XOraclePriceUpdateRequest.fromFieldsWithTypes(typeArg, content);
    }

    static async fetch<T extends PhantomReified<PhantomTypeArgument>>(
        client: SuiClient,
        typeArg: T,
        id: string
    ): Promise<XOraclePriceUpdateRequest<ToPhantomTypeArgument<T>>> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching XOraclePriceUpdateRequest object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isXOraclePriceUpdateRequest(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a XOraclePriceUpdateRequest object`);
        }
        return XOraclePriceUpdateRequest.fromBcs(typeArg, fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== X_ORACLE =============================== */

export function isX_ORACLE(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1478a432123e4b3d61878b629f2c692969fdb375644f1251cd278a4b1e7d7cd6::x_oracle::X_ORACLE";
}

export interface X_ORACLEFields {
    dummyField: ToField<"bool">;
}

export type X_ORACLEReified = Reified<X_ORACLE, X_ORACLEFields>;

export class X_ORACLE implements StructClass {
    static readonly $typeName = "0x1478a432123e4b3d61878b629f2c692969fdb375644f1251cd278a4b1e7d7cd6::x_oracle::X_ORACLE";
    static readonly $numTypeParams = 0;

    readonly $typeName = X_ORACLE.$typeName;

    readonly $fullTypeName: "0x1478a432123e4b3d61878b629f2c692969fdb375644f1251cd278a4b1e7d7cd6::x_oracle::X_ORACLE";

    readonly $typeArgs: [];

    readonly dummyField: ToField<"bool">;

    private constructor(typeArgs: [], fields: X_ORACLEFields) {
        this.$fullTypeName = composeSuiType(
            X_ORACLE.$typeName,
            ...typeArgs
        ) as "0x1478a432123e4b3d61878b629f2c692969fdb375644f1251cd278a4b1e7d7cd6::x_oracle::X_ORACLE";
        this.$typeArgs = typeArgs;

        this.dummyField = fields.dummyField;
    }

    static reified(): X_ORACLEReified {
        return {
            typeName: X_ORACLE.$typeName,
            fullTypeName: composeSuiType(
                X_ORACLE.$typeName,
                ...[]
            ) as "0x1478a432123e4b3d61878b629f2c692969fdb375644f1251cd278a4b1e7d7cd6::x_oracle::X_ORACLE",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => X_ORACLE.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => X_ORACLE.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => X_ORACLE.fromBcs(data),
            bcs: X_ORACLE.bcs,
            fromJSONField: (field: any) => X_ORACLE.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => X_ORACLE.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => X_ORACLE.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => X_ORACLE.fetch(client, id),
            new: (fields: X_ORACLEFields) => {
                return new X_ORACLE([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return X_ORACLE.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<X_ORACLE>> {
        return phantom(X_ORACLE.reified());
    }
    static get p() {
        return X_ORACLE.phantom();
    }

    static get bcs() {
        return bcs.struct("X_ORACLE", {
            dummy_field: bcs.bool(),
        });
    }

    static fromFields(fields: Record<string, any>): X_ORACLE {
        return X_ORACLE.reified().new({ dummyField: decodeFromFields("bool", fields.dummy_field) });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): X_ORACLE {
        if (!isX_ORACLE(item.type)) {
            throw new Error("not a X_ORACLE type");
        }

        return X_ORACLE.reified().new({ dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) });
    }

    static fromBcs(data: Uint8Array): X_ORACLE {
        return X_ORACLE.fromFields(X_ORACLE.bcs.parse(data));
    }

    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): X_ORACLE {
        return X_ORACLE.reified().new({ dummyField: decodeFromJSONField("bool", field.dummyField) });
    }

    static fromJSON(json: Record<string, any>): X_ORACLE {
        if (json.$typeName !== X_ORACLE.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return X_ORACLE.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): X_ORACLE {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isX_ORACLE(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a X_ORACLE object`);
        }
        return X_ORACLE.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<X_ORACLE> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching X_ORACLE object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isX_ORACLE(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a X_ORACLE object`);
        }
        return X_ORACLE.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}
