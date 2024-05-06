import * as reified from "../../../../_framework/reified";
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
    ToTypeStr as ToPhantom,
} from "../../../../_framework/reified";
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../../../_framework/util";
import { TypeName } from "../../0x1/type-name/structs";
import { WitTable } from "../../0x779b5c547976899f5474f3a5bc0db36ddf4697ad7e5a901db0415c2281d28162/wit-table/structs";
import { bcs, fromB64 } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";

/* ============================== AssetActiveStates =============================== */

export function isAssetActiveStates(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::asset_active_state::AssetActiveStates";
}

export interface AssetActiveStatesFields {
    base: ToField<WitTable<ToPhantom<BaseAssetActiveStates>, TypeName, "bool">>;
    collateral: ToField<WitTable<ToPhantom<CollateralActiveStates>, TypeName, "bool">>;
}

export type AssetActiveStatesReified = Reified<AssetActiveStates, AssetActiveStatesFields>;

export class AssetActiveStates implements StructClass {
    static readonly $typeName = "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::asset_active_state::AssetActiveStates";
    static readonly $numTypeParams = 0;

    readonly $typeName = AssetActiveStates.$typeName;

    readonly $fullTypeName: "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::asset_active_state::AssetActiveStates";

    readonly $typeArgs: [];

    readonly base: ToField<WitTable<ToPhantom<BaseAssetActiveStates>, TypeName, "bool">>;
    readonly collateral: ToField<WitTable<ToPhantom<CollateralActiveStates>, TypeName, "bool">>;

    private constructor(typeArgs: [], fields: AssetActiveStatesFields) {
        this.$fullTypeName = composeSuiType(
            AssetActiveStates.$typeName,
            ...typeArgs
        ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::asset_active_state::AssetActiveStates";
        this.$typeArgs = typeArgs;

        this.base = fields.base;
        this.collateral = fields.collateral;
    }

    static reified(): AssetActiveStatesReified {
        return {
            typeName: AssetActiveStates.$typeName,
            fullTypeName: composeSuiType(
                AssetActiveStates.$typeName,
                ...[]
            ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::asset_active_state::AssetActiveStates",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => AssetActiveStates.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => AssetActiveStates.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => AssetActiveStates.fromBcs(data),
            bcs: AssetActiveStates.bcs,
            fromJSONField: (field: any) => AssetActiveStates.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => AssetActiveStates.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => AssetActiveStates.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => AssetActiveStates.fetch(client, id),
            new: (fields: AssetActiveStatesFields) => {
                return new AssetActiveStates([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return AssetActiveStates.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<AssetActiveStates>> {
        return phantom(AssetActiveStates.reified());
    }
    static get p() {
        return AssetActiveStates.phantom();
    }

    static get bcs() {
        return bcs.struct("AssetActiveStates", {
            base: WitTable.bcs(TypeName.bcs),
            collateral: WitTable.bcs(TypeName.bcs),
        });
    }

    static fromFields(fields: Record<string, any>): AssetActiveStates {
        return AssetActiveStates.reified().new({
            base: decodeFromFields(
                WitTable.reified(reified.phantom(BaseAssetActiveStates.reified()), TypeName.reified(), reified.phantom("bool")),
                fields.base
            ),
            collateral: decodeFromFields(
                WitTable.reified(reified.phantom(CollateralActiveStates.reified()), TypeName.reified(), reified.phantom("bool")),
                fields.collateral
            ),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): AssetActiveStates {
        if (!isAssetActiveStates(item.type)) {
            throw new Error("not a AssetActiveStates type");
        }

        return AssetActiveStates.reified().new({
            base: decodeFromFieldsWithTypes(
                WitTable.reified(reified.phantom(BaseAssetActiveStates.reified()), TypeName.reified(), reified.phantom("bool")),
                item.fields.base
            ),
            collateral: decodeFromFieldsWithTypes(
                WitTable.reified(reified.phantom(CollateralActiveStates.reified()), TypeName.reified(), reified.phantom("bool")),
                item.fields.collateral
            ),
        });
    }

    static fromBcs(data: Uint8Array): AssetActiveStates {
        return AssetActiveStates.fromFields(AssetActiveStates.bcs.parse(data));
    }

    toJSONField() {
        return {
            base: this.base.toJSONField(),
            collateral: this.collateral.toJSONField(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): AssetActiveStates {
        return AssetActiveStates.reified().new({
            base: decodeFromJSONField(
                WitTable.reified(reified.phantom(BaseAssetActiveStates.reified()), TypeName.reified(), reified.phantom("bool")),
                field.base
            ),
            collateral: decodeFromJSONField(
                WitTable.reified(reified.phantom(CollateralActiveStates.reified()), TypeName.reified(), reified.phantom("bool")),
                field.collateral
            ),
        });
    }

    static fromJSON(json: Record<string, any>): AssetActiveStates {
        if (json.$typeName !== AssetActiveStates.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return AssetActiveStates.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): AssetActiveStates {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isAssetActiveStates(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a AssetActiveStates object`);
        }
        return AssetActiveStates.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<AssetActiveStates> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching AssetActiveStates object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isAssetActiveStates(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AssetActiveStates object`);
        }
        return AssetActiveStates.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== BaseAssetActiveStates =============================== */

export function isBaseAssetActiveStates(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::asset_active_state::BaseAssetActiveStates";
}

export interface BaseAssetActiveStatesFields {
    dummyField: ToField<"bool">;
}

export type BaseAssetActiveStatesReified = Reified<BaseAssetActiveStates, BaseAssetActiveStatesFields>;

export class BaseAssetActiveStates implements StructClass {
    static readonly $typeName =
        "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::asset_active_state::BaseAssetActiveStates";
    static readonly $numTypeParams = 0;

    readonly $typeName = BaseAssetActiveStates.$typeName;

    readonly $fullTypeName: "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::asset_active_state::BaseAssetActiveStates";

    readonly $typeArgs: [];

    readonly dummyField: ToField<"bool">;

    private constructor(typeArgs: [], fields: BaseAssetActiveStatesFields) {
        this.$fullTypeName = composeSuiType(
            BaseAssetActiveStates.$typeName,
            ...typeArgs
        ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::asset_active_state::BaseAssetActiveStates";
        this.$typeArgs = typeArgs;

        this.dummyField = fields.dummyField;
    }

    static reified(): BaseAssetActiveStatesReified {
        return {
            typeName: BaseAssetActiveStates.$typeName,
            fullTypeName: composeSuiType(
                BaseAssetActiveStates.$typeName,
                ...[]
            ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::asset_active_state::BaseAssetActiveStates",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => BaseAssetActiveStates.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => BaseAssetActiveStates.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => BaseAssetActiveStates.fromBcs(data),
            bcs: BaseAssetActiveStates.bcs,
            fromJSONField: (field: any) => BaseAssetActiveStates.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => BaseAssetActiveStates.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => BaseAssetActiveStates.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => BaseAssetActiveStates.fetch(client, id),
            new: (fields: BaseAssetActiveStatesFields) => {
                return new BaseAssetActiveStates([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return BaseAssetActiveStates.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<BaseAssetActiveStates>> {
        return phantom(BaseAssetActiveStates.reified());
    }
    static get p() {
        return BaseAssetActiveStates.phantom();
    }

    static get bcs() {
        return bcs.struct("BaseAssetActiveStates", {
            dummy_field: bcs.bool(),
        });
    }

    static fromFields(fields: Record<string, any>): BaseAssetActiveStates {
        return BaseAssetActiveStates.reified().new({ dummyField: decodeFromFields("bool", fields.dummy_field) });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): BaseAssetActiveStates {
        if (!isBaseAssetActiveStates(item.type)) {
            throw new Error("not a BaseAssetActiveStates type");
        }

        return BaseAssetActiveStates.reified().new({ dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) });
    }

    static fromBcs(data: Uint8Array): BaseAssetActiveStates {
        return BaseAssetActiveStates.fromFields(BaseAssetActiveStates.bcs.parse(data));
    }

    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): BaseAssetActiveStates {
        return BaseAssetActiveStates.reified().new({ dummyField: decodeFromJSONField("bool", field.dummyField) });
    }

    static fromJSON(json: Record<string, any>): BaseAssetActiveStates {
        if (json.$typeName !== BaseAssetActiveStates.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return BaseAssetActiveStates.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): BaseAssetActiveStates {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isBaseAssetActiveStates(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a BaseAssetActiveStates object`);
        }
        return BaseAssetActiveStates.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<BaseAssetActiveStates> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching BaseAssetActiveStates object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isBaseAssetActiveStates(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BaseAssetActiveStates object`);
        }
        return BaseAssetActiveStates.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== CollateralActiveStates =============================== */

export function isCollateralActiveStates(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::asset_active_state::CollateralActiveStates";
}

export interface CollateralActiveStatesFields {
    dummyField: ToField<"bool">;
}

export type CollateralActiveStatesReified = Reified<CollateralActiveStates, CollateralActiveStatesFields>;

export class CollateralActiveStates implements StructClass {
    static readonly $typeName =
        "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::asset_active_state::CollateralActiveStates";
    static readonly $numTypeParams = 0;

    readonly $typeName = CollateralActiveStates.$typeName;

    readonly $fullTypeName: "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::asset_active_state::CollateralActiveStates";

    readonly $typeArgs: [];

    readonly dummyField: ToField<"bool">;

    private constructor(typeArgs: [], fields: CollateralActiveStatesFields) {
        this.$fullTypeName = composeSuiType(
            CollateralActiveStates.$typeName,
            ...typeArgs
        ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::asset_active_state::CollateralActiveStates";
        this.$typeArgs = typeArgs;

        this.dummyField = fields.dummyField;
    }

    static reified(): CollateralActiveStatesReified {
        return {
            typeName: CollateralActiveStates.$typeName,
            fullTypeName: composeSuiType(
                CollateralActiveStates.$typeName,
                ...[]
            ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::asset_active_state::CollateralActiveStates",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => CollateralActiveStates.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => CollateralActiveStates.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => CollateralActiveStates.fromBcs(data),
            bcs: CollateralActiveStates.bcs,
            fromJSONField: (field: any) => CollateralActiveStates.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => CollateralActiveStates.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => CollateralActiveStates.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => CollateralActiveStates.fetch(client, id),
            new: (fields: CollateralActiveStatesFields) => {
                return new CollateralActiveStates([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return CollateralActiveStates.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<CollateralActiveStates>> {
        return phantom(CollateralActiveStates.reified());
    }
    static get p() {
        return CollateralActiveStates.phantom();
    }

    static get bcs() {
        return bcs.struct("CollateralActiveStates", {
            dummy_field: bcs.bool(),
        });
    }

    static fromFields(fields: Record<string, any>): CollateralActiveStates {
        return CollateralActiveStates.reified().new({ dummyField: decodeFromFields("bool", fields.dummy_field) });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): CollateralActiveStates {
        if (!isCollateralActiveStates(item.type)) {
            throw new Error("not a CollateralActiveStates type");
        }

        return CollateralActiveStates.reified().new({ dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) });
    }

    static fromBcs(data: Uint8Array): CollateralActiveStates {
        return CollateralActiveStates.fromFields(CollateralActiveStates.bcs.parse(data));
    }

    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): CollateralActiveStates {
        return CollateralActiveStates.reified().new({ dummyField: decodeFromJSONField("bool", field.dummyField) });
    }

    static fromJSON(json: Record<string, any>): CollateralActiveStates {
        if (json.$typeName !== CollateralActiveStates.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return CollateralActiveStates.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): CollateralActiveStates {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isCollateralActiveStates(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a CollateralActiveStates object`);
        }
        return CollateralActiveStates.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<CollateralActiveStates> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching CollateralActiveStates object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isCollateralActiveStates(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a CollateralActiveStates object`);
        }
        return CollateralActiveStates.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}
