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
    fieldToJSON,
    phantom,
} from "../../../../_framework/reified";
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../../../_framework/util";
import { Vector } from "../../../../_framework/vector";
import { TypeName } from "../../0x1/type-name/structs";
import { PKG_V1 } from "../index";
import { Config, VaultConfig } from "../typus-dov-single/structs";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromB64, fromHEX, toHEX } from "@mysten/sui/utils";

/* ============================== AddPortfolioVaultAuthorizedUserEvent =============================== */

export function isAddPortfolioVaultAuthorizedUserEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::tds_authorized_entry::AddPortfolioVaultAuthorizedUserEvent`;
}

export interface AddPortfolioVaultAuthorizedUserEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    users: ToField<Vector<"address">>;
}

export type AddPortfolioVaultAuthorizedUserEventReified = Reified<
    AddPortfolioVaultAuthorizedUserEvent,
    AddPortfolioVaultAuthorizedUserEventFields
>;

export class AddPortfolioVaultAuthorizedUserEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::tds_authorized_entry::AddPortfolioVaultAuthorizedUserEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = AddPortfolioVaultAuthorizedUserEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::tds_authorized_entry::AddPortfolioVaultAuthorizedUserEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = AddPortfolioVaultAuthorizedUserEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly users: ToField<Vector<"address">>;

    private constructor(typeArgs: [], fields: AddPortfolioVaultAuthorizedUserEventFields) {
        this.$fullTypeName = composeSuiType(
            AddPortfolioVaultAuthorizedUserEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::tds_authorized_entry::AddPortfolioVaultAuthorizedUserEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.users = fields.users;
    }

    static reified(): AddPortfolioVaultAuthorizedUserEventReified {
        return {
            typeName: AddPortfolioVaultAuthorizedUserEvent.$typeName,
            fullTypeName: composeSuiType(
                AddPortfolioVaultAuthorizedUserEvent.$typeName,
                ...[]
            ) as `${typeof PKG_V1}::tds_authorized_entry::AddPortfolioVaultAuthorizedUserEvent`,
            typeArgs: [] as [],
            isPhantom: AddPortfolioVaultAuthorizedUserEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => AddPortfolioVaultAuthorizedUserEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => AddPortfolioVaultAuthorizedUserEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => AddPortfolioVaultAuthorizedUserEvent.fromBcs(data),
            bcs: AddPortfolioVaultAuthorizedUserEvent.bcs,
            fromJSONField: (field: any) => AddPortfolioVaultAuthorizedUserEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => AddPortfolioVaultAuthorizedUserEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => AddPortfolioVaultAuthorizedUserEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => AddPortfolioVaultAuthorizedUserEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => AddPortfolioVaultAuthorizedUserEvent.fetch(client, id),
            new: (fields: AddPortfolioVaultAuthorizedUserEventFields) => {
                return new AddPortfolioVaultAuthorizedUserEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return AddPortfolioVaultAuthorizedUserEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<AddPortfolioVaultAuthorizedUserEvent>> {
        return phantom(AddPortfolioVaultAuthorizedUserEvent.reified());
    }
    static get p() {
        return AddPortfolioVaultAuthorizedUserEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("AddPortfolioVaultAuthorizedUserEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            users: bcs.vector(
                bcs.bytes(32).transform({
                    input: (val: string) => fromHEX(val),
                    output: (val: Uint8Array) => toHEX(val),
                })
            ),
        });
    }

    static fromFields(fields: Record<string, any>): AddPortfolioVaultAuthorizedUserEvent {
        return AddPortfolioVaultAuthorizedUserEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            users: decodeFromFields(reified.vector("address"), fields.users),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): AddPortfolioVaultAuthorizedUserEvent {
        if (!isAddPortfolioVaultAuthorizedUserEvent(item.type)) {
            throw new Error("not a AddPortfolioVaultAuthorizedUserEvent type");
        }

        return AddPortfolioVaultAuthorizedUserEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            users: decodeFromFieldsWithTypes(reified.vector("address"), item.fields.users),
        });
    }

    static fromBcs(data: Uint8Array): AddPortfolioVaultAuthorizedUserEvent {
        return AddPortfolioVaultAuthorizedUserEvent.fromFields(AddPortfolioVaultAuthorizedUserEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            users: fieldToJSON<Vector<"address">>(`vector<address>`, this.users),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): AddPortfolioVaultAuthorizedUserEvent {
        return AddPortfolioVaultAuthorizedUserEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            users: decodeFromJSONField(reified.vector("address"), field.users),
        });
    }

    static fromJSON(json: Record<string, any>): AddPortfolioVaultAuthorizedUserEvent {
        if (json.$typeName !== AddPortfolioVaultAuthorizedUserEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return AddPortfolioVaultAuthorizedUserEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): AddPortfolioVaultAuthorizedUserEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isAddPortfolioVaultAuthorizedUserEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a AddPortfolioVaultAuthorizedUserEvent object`);
        }
        return AddPortfolioVaultAuthorizedUserEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): AddPortfolioVaultAuthorizedUserEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isAddPortfolioVaultAuthorizedUserEvent(data.bcs.type)) {
                throw new Error(`object at is not a AddPortfolioVaultAuthorizedUserEvent object`);
            }

            return AddPortfolioVaultAuthorizedUserEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return AddPortfolioVaultAuthorizedUserEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<AddPortfolioVaultAuthorizedUserEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching AddPortfolioVaultAuthorizedUserEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isAddPortfolioVaultAuthorizedUserEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AddPortfolioVaultAuthorizedUserEvent object`);
        }

        return AddPortfolioVaultAuthorizedUserEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== FixedIncentiviseEvent =============================== */

export function isFixedIncentiviseEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::tds_authorized_entry::FixedIncentiviseEvent`;
}

export interface FixedIncentiviseEventFields {
    signer: ToField<"address">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
    fixedIncentiveAmount: ToField<"u64">;
}

export type FixedIncentiviseEventReified = Reified<FixedIncentiviseEvent, FixedIncentiviseEventFields>;

export class FixedIncentiviseEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::tds_authorized_entry::FixedIncentiviseEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = FixedIncentiviseEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::tds_authorized_entry::FixedIncentiviseEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = FixedIncentiviseEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;
    readonly fixedIncentiveAmount: ToField<"u64">;

    private constructor(typeArgs: [], fields: FixedIncentiviseEventFields) {
        this.$fullTypeName = composeSuiType(
            FixedIncentiviseEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::tds_authorized_entry::FixedIncentiviseEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.token = fields.token;
        this.amount = fields.amount;
        this.fixedIncentiveAmount = fields.fixedIncentiveAmount;
    }

    static reified(): FixedIncentiviseEventReified {
        return {
            typeName: FixedIncentiviseEvent.$typeName,
            fullTypeName: composeSuiType(
                FixedIncentiviseEvent.$typeName,
                ...[]
            ) as `${typeof PKG_V1}::tds_authorized_entry::FixedIncentiviseEvent`,
            typeArgs: [] as [],
            isPhantom: FixedIncentiviseEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => FixedIncentiviseEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => FixedIncentiviseEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => FixedIncentiviseEvent.fromBcs(data),
            bcs: FixedIncentiviseEvent.bcs,
            fromJSONField: (field: any) => FixedIncentiviseEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => FixedIncentiviseEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => FixedIncentiviseEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => FixedIncentiviseEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => FixedIncentiviseEvent.fetch(client, id),
            new: (fields: FixedIncentiviseEventFields) => {
                return new FixedIncentiviseEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return FixedIncentiviseEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<FixedIncentiviseEvent>> {
        return phantom(FixedIncentiviseEvent.reified());
    }
    static get p() {
        return FixedIncentiviseEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("FixedIncentiviseEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            token: TypeName.bcs,
            amount: bcs.u64(),
            fixed_incentive_amount: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): FixedIncentiviseEvent {
        return FixedIncentiviseEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            token: decodeFromFields(TypeName.reified(), fields.token),
            amount: decodeFromFields("u64", fields.amount),
            fixedIncentiveAmount: decodeFromFields("u64", fields.fixed_incentive_amount),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): FixedIncentiviseEvent {
        if (!isFixedIncentiviseEvent(item.type)) {
            throw new Error("not a FixedIncentiviseEvent type");
        }

        return FixedIncentiviseEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token),
            amount: decodeFromFieldsWithTypes("u64", item.fields.amount),
            fixedIncentiveAmount: decodeFromFieldsWithTypes("u64", item.fields.fixed_incentive_amount),
        });
    }

    static fromBcs(data: Uint8Array): FixedIncentiviseEvent {
        return FixedIncentiviseEvent.fromFields(FixedIncentiviseEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            token: this.token.toJSONField(),
            amount: this.amount.toString(),
            fixedIncentiveAmount: this.fixedIncentiveAmount.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): FixedIncentiviseEvent {
        return FixedIncentiviseEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            token: decodeFromJSONField(TypeName.reified(), field.token),
            amount: decodeFromJSONField("u64", field.amount),
            fixedIncentiveAmount: decodeFromJSONField("u64", field.fixedIncentiveAmount),
        });
    }

    static fromJSON(json: Record<string, any>): FixedIncentiviseEvent {
        if (json.$typeName !== FixedIncentiviseEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return FixedIncentiviseEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): FixedIncentiviseEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isFixedIncentiviseEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a FixedIncentiviseEvent object`);
        }
        return FixedIncentiviseEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): FixedIncentiviseEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isFixedIncentiviseEvent(data.bcs.type)) {
                throw new Error(`object at is not a FixedIncentiviseEvent object`);
            }

            return FixedIncentiviseEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return FixedIncentiviseEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<FixedIncentiviseEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching FixedIncentiviseEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isFixedIncentiviseEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a FixedIncentiviseEvent object`);
        }

        return FixedIncentiviseEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== RemovePortfolioVaultAuthorizedUserEvent =============================== */

export function isRemovePortfolioVaultAuthorizedUserEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::tds_authorized_entry::RemovePortfolioVaultAuthorizedUserEvent`;
}

export interface RemovePortfolioVaultAuthorizedUserEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    users: ToField<Vector<"address">>;
}

export type RemovePortfolioVaultAuthorizedUserEventReified = Reified<
    RemovePortfolioVaultAuthorizedUserEvent,
    RemovePortfolioVaultAuthorizedUserEventFields
>;

export class RemovePortfolioVaultAuthorizedUserEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::tds_authorized_entry::RemovePortfolioVaultAuthorizedUserEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = RemovePortfolioVaultAuthorizedUserEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::tds_authorized_entry::RemovePortfolioVaultAuthorizedUserEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = RemovePortfolioVaultAuthorizedUserEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly users: ToField<Vector<"address">>;

    private constructor(typeArgs: [], fields: RemovePortfolioVaultAuthorizedUserEventFields) {
        this.$fullTypeName = composeSuiType(
            RemovePortfolioVaultAuthorizedUserEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::tds_authorized_entry::RemovePortfolioVaultAuthorizedUserEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.users = fields.users;
    }

    static reified(): RemovePortfolioVaultAuthorizedUserEventReified {
        return {
            typeName: RemovePortfolioVaultAuthorizedUserEvent.$typeName,
            fullTypeName: composeSuiType(
                RemovePortfolioVaultAuthorizedUserEvent.$typeName,
                ...[]
            ) as `${typeof PKG_V1}::tds_authorized_entry::RemovePortfolioVaultAuthorizedUserEvent`,
            typeArgs: [] as [],
            isPhantom: RemovePortfolioVaultAuthorizedUserEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => RemovePortfolioVaultAuthorizedUserEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => RemovePortfolioVaultAuthorizedUserEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => RemovePortfolioVaultAuthorizedUserEvent.fromBcs(data),
            bcs: RemovePortfolioVaultAuthorizedUserEvent.bcs,
            fromJSONField: (field: any) => RemovePortfolioVaultAuthorizedUserEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => RemovePortfolioVaultAuthorizedUserEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => RemovePortfolioVaultAuthorizedUserEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => RemovePortfolioVaultAuthorizedUserEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => RemovePortfolioVaultAuthorizedUserEvent.fetch(client, id),
            new: (fields: RemovePortfolioVaultAuthorizedUserEventFields) => {
                return new RemovePortfolioVaultAuthorizedUserEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return RemovePortfolioVaultAuthorizedUserEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<RemovePortfolioVaultAuthorizedUserEvent>> {
        return phantom(RemovePortfolioVaultAuthorizedUserEvent.reified());
    }
    static get p() {
        return RemovePortfolioVaultAuthorizedUserEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("RemovePortfolioVaultAuthorizedUserEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            users: bcs.vector(
                bcs.bytes(32).transform({
                    input: (val: string) => fromHEX(val),
                    output: (val: Uint8Array) => toHEX(val),
                })
            ),
        });
    }

    static fromFields(fields: Record<string, any>): RemovePortfolioVaultAuthorizedUserEvent {
        return RemovePortfolioVaultAuthorizedUserEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            users: decodeFromFields(reified.vector("address"), fields.users),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): RemovePortfolioVaultAuthorizedUserEvent {
        if (!isRemovePortfolioVaultAuthorizedUserEvent(item.type)) {
            throw new Error("not a RemovePortfolioVaultAuthorizedUserEvent type");
        }

        return RemovePortfolioVaultAuthorizedUserEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            users: decodeFromFieldsWithTypes(reified.vector("address"), item.fields.users),
        });
    }

    static fromBcs(data: Uint8Array): RemovePortfolioVaultAuthorizedUserEvent {
        return RemovePortfolioVaultAuthorizedUserEvent.fromFields(RemovePortfolioVaultAuthorizedUserEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            users: fieldToJSON<Vector<"address">>(`vector<address>`, this.users),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): RemovePortfolioVaultAuthorizedUserEvent {
        return RemovePortfolioVaultAuthorizedUserEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            users: decodeFromJSONField(reified.vector("address"), field.users),
        });
    }

    static fromJSON(json: Record<string, any>): RemovePortfolioVaultAuthorizedUserEvent {
        if (json.$typeName !== RemovePortfolioVaultAuthorizedUserEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return RemovePortfolioVaultAuthorizedUserEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): RemovePortfolioVaultAuthorizedUserEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRemovePortfolioVaultAuthorizedUserEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a RemovePortfolioVaultAuthorizedUserEvent object`);
        }
        return RemovePortfolioVaultAuthorizedUserEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): RemovePortfolioVaultAuthorizedUserEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isRemovePortfolioVaultAuthorizedUserEvent(data.bcs.type)) {
                throw new Error(`object at is not a RemovePortfolioVaultAuthorizedUserEvent object`);
            }

            return RemovePortfolioVaultAuthorizedUserEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return RemovePortfolioVaultAuthorizedUserEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<RemovePortfolioVaultAuthorizedUserEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching RemovePortfolioVaultAuthorizedUserEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isRemovePortfolioVaultAuthorizedUserEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RemovePortfolioVaultAuthorizedUserEvent object`);
        }

        return RemovePortfolioVaultAuthorizedUserEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== UpdateActiveVaultConfigEvent =============================== */

export function isUpdateActiveVaultConfigEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::tds_authorized_entry::UpdateActiveVaultConfigEvent`;
}

export interface UpdateActiveVaultConfigEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    previous: ToField<VaultConfig>;
    current: ToField<VaultConfig>;
}

export type UpdateActiveVaultConfigEventReified = Reified<UpdateActiveVaultConfigEvent, UpdateActiveVaultConfigEventFields>;

export class UpdateActiveVaultConfigEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::tds_authorized_entry::UpdateActiveVaultConfigEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = UpdateActiveVaultConfigEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::tds_authorized_entry::UpdateActiveVaultConfigEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = UpdateActiveVaultConfigEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly previous: ToField<VaultConfig>;
    readonly current: ToField<VaultConfig>;

    private constructor(typeArgs: [], fields: UpdateActiveVaultConfigEventFields) {
        this.$fullTypeName = composeSuiType(
            UpdateActiveVaultConfigEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::tds_authorized_entry::UpdateActiveVaultConfigEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.previous = fields.previous;
        this.current = fields.current;
    }

    static reified(): UpdateActiveVaultConfigEventReified {
        return {
            typeName: UpdateActiveVaultConfigEvent.$typeName,
            fullTypeName: composeSuiType(
                UpdateActiveVaultConfigEvent.$typeName,
                ...[]
            ) as `${typeof PKG_V1}::tds_authorized_entry::UpdateActiveVaultConfigEvent`,
            typeArgs: [] as [],
            isPhantom: UpdateActiveVaultConfigEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => UpdateActiveVaultConfigEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => UpdateActiveVaultConfigEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => UpdateActiveVaultConfigEvent.fromBcs(data),
            bcs: UpdateActiveVaultConfigEvent.bcs,
            fromJSONField: (field: any) => UpdateActiveVaultConfigEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => UpdateActiveVaultConfigEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => UpdateActiveVaultConfigEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => UpdateActiveVaultConfigEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => UpdateActiveVaultConfigEvent.fetch(client, id),
            new: (fields: UpdateActiveVaultConfigEventFields) => {
                return new UpdateActiveVaultConfigEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return UpdateActiveVaultConfigEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<UpdateActiveVaultConfigEvent>> {
        return phantom(UpdateActiveVaultConfigEvent.reified());
    }
    static get p() {
        return UpdateActiveVaultConfigEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("UpdateActiveVaultConfigEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            previous: VaultConfig.bcs,
            current: VaultConfig.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): UpdateActiveVaultConfigEvent {
        return UpdateActiveVaultConfigEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            previous: decodeFromFields(VaultConfig.reified(), fields.previous),
            current: decodeFromFields(VaultConfig.reified(), fields.current),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): UpdateActiveVaultConfigEvent {
        if (!isUpdateActiveVaultConfigEvent(item.type)) {
            throw new Error("not a UpdateActiveVaultConfigEvent type");
        }

        return UpdateActiveVaultConfigEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            previous: decodeFromFieldsWithTypes(VaultConfig.reified(), item.fields.previous),
            current: decodeFromFieldsWithTypes(VaultConfig.reified(), item.fields.current),
        });
    }

    static fromBcs(data: Uint8Array): UpdateActiveVaultConfigEvent {
        return UpdateActiveVaultConfigEvent.fromFields(UpdateActiveVaultConfigEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            previous: this.previous.toJSONField(),
            current: this.current.toJSONField(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): UpdateActiveVaultConfigEvent {
        return UpdateActiveVaultConfigEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            previous: decodeFromJSONField(VaultConfig.reified(), field.previous),
            current: decodeFromJSONField(VaultConfig.reified(), field.current),
        });
    }

    static fromJSON(json: Record<string, any>): UpdateActiveVaultConfigEvent {
        if (json.$typeName !== UpdateActiveVaultConfigEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return UpdateActiveVaultConfigEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): UpdateActiveVaultConfigEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUpdateActiveVaultConfigEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a UpdateActiveVaultConfigEvent object`);
        }
        return UpdateActiveVaultConfigEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): UpdateActiveVaultConfigEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isUpdateActiveVaultConfigEvent(data.bcs.type)) {
                throw new Error(`object at is not a UpdateActiveVaultConfigEvent object`);
            }

            return UpdateActiveVaultConfigEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return UpdateActiveVaultConfigEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<UpdateActiveVaultConfigEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching UpdateActiveVaultConfigEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isUpdateActiveVaultConfigEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UpdateActiveVaultConfigEvent object`);
        }

        return UpdateActiveVaultConfigEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== UpdateAuctionConfigEvent =============================== */

export function isUpdateAuctionConfigEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::tds_authorized_entry::UpdateAuctionConfigEvent`;
}

export interface UpdateAuctionConfigEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    startTsMs: ToField<"u64">;
    endTsMs: ToField<"u64">;
    decaySpeed: ToField<"u64">;
    initialPrice: ToField<"u64">;
    finalPrice: ToField<"u64">;
    feeBp: ToField<"u64">;
    incentiveBp: ToField<"u64">;
    tokenDecimal: ToField<"u64">;
    sizeDecimal: ToField<"u64">;
    ableToRemoveBid: ToField<"bool">;
}

export type UpdateAuctionConfigEventReified = Reified<UpdateAuctionConfigEvent, UpdateAuctionConfigEventFields>;

export class UpdateAuctionConfigEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::tds_authorized_entry::UpdateAuctionConfigEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = UpdateAuctionConfigEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::tds_authorized_entry::UpdateAuctionConfigEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = UpdateAuctionConfigEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly startTsMs: ToField<"u64">;
    readonly endTsMs: ToField<"u64">;
    readonly decaySpeed: ToField<"u64">;
    readonly initialPrice: ToField<"u64">;
    readonly finalPrice: ToField<"u64">;
    readonly feeBp: ToField<"u64">;
    readonly incentiveBp: ToField<"u64">;
    readonly tokenDecimal: ToField<"u64">;
    readonly sizeDecimal: ToField<"u64">;
    readonly ableToRemoveBid: ToField<"bool">;

    private constructor(typeArgs: [], fields: UpdateAuctionConfigEventFields) {
        this.$fullTypeName = composeSuiType(
            UpdateAuctionConfigEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::tds_authorized_entry::UpdateAuctionConfigEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.startTsMs = fields.startTsMs;
        this.endTsMs = fields.endTsMs;
        this.decaySpeed = fields.decaySpeed;
        this.initialPrice = fields.initialPrice;
        this.finalPrice = fields.finalPrice;
        this.feeBp = fields.feeBp;
        this.incentiveBp = fields.incentiveBp;
        this.tokenDecimal = fields.tokenDecimal;
        this.sizeDecimal = fields.sizeDecimal;
        this.ableToRemoveBid = fields.ableToRemoveBid;
    }

    static reified(): UpdateAuctionConfigEventReified {
        return {
            typeName: UpdateAuctionConfigEvent.$typeName,
            fullTypeName: composeSuiType(
                UpdateAuctionConfigEvent.$typeName,
                ...[]
            ) as `${typeof PKG_V1}::tds_authorized_entry::UpdateAuctionConfigEvent`,
            typeArgs: [] as [],
            isPhantom: UpdateAuctionConfigEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => UpdateAuctionConfigEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => UpdateAuctionConfigEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => UpdateAuctionConfigEvent.fromBcs(data),
            bcs: UpdateAuctionConfigEvent.bcs,
            fromJSONField: (field: any) => UpdateAuctionConfigEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => UpdateAuctionConfigEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => UpdateAuctionConfigEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => UpdateAuctionConfigEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => UpdateAuctionConfigEvent.fetch(client, id),
            new: (fields: UpdateAuctionConfigEventFields) => {
                return new UpdateAuctionConfigEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return UpdateAuctionConfigEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<UpdateAuctionConfigEvent>> {
        return phantom(UpdateAuctionConfigEvent.reified());
    }
    static get p() {
        return UpdateAuctionConfigEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("UpdateAuctionConfigEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            start_ts_ms: bcs.u64(),
            end_ts_ms: bcs.u64(),
            decay_speed: bcs.u64(),
            initial_price: bcs.u64(),
            final_price: bcs.u64(),
            fee_bp: bcs.u64(),
            incentive_bp: bcs.u64(),
            token_decimal: bcs.u64(),
            size_decimal: bcs.u64(),
            able_to_remove_bid: bcs.bool(),
        });
    }

    static fromFields(fields: Record<string, any>): UpdateAuctionConfigEvent {
        return UpdateAuctionConfigEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            startTsMs: decodeFromFields("u64", fields.start_ts_ms),
            endTsMs: decodeFromFields("u64", fields.end_ts_ms),
            decaySpeed: decodeFromFields("u64", fields.decay_speed),
            initialPrice: decodeFromFields("u64", fields.initial_price),
            finalPrice: decodeFromFields("u64", fields.final_price),
            feeBp: decodeFromFields("u64", fields.fee_bp),
            incentiveBp: decodeFromFields("u64", fields.incentive_bp),
            tokenDecimal: decodeFromFields("u64", fields.token_decimal),
            sizeDecimal: decodeFromFields("u64", fields.size_decimal),
            ableToRemoveBid: decodeFromFields("bool", fields.able_to_remove_bid),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): UpdateAuctionConfigEvent {
        if (!isUpdateAuctionConfigEvent(item.type)) {
            throw new Error("not a UpdateAuctionConfigEvent type");
        }

        return UpdateAuctionConfigEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            startTsMs: decodeFromFieldsWithTypes("u64", item.fields.start_ts_ms),
            endTsMs: decodeFromFieldsWithTypes("u64", item.fields.end_ts_ms),
            decaySpeed: decodeFromFieldsWithTypes("u64", item.fields.decay_speed),
            initialPrice: decodeFromFieldsWithTypes("u64", item.fields.initial_price),
            finalPrice: decodeFromFieldsWithTypes("u64", item.fields.final_price),
            feeBp: decodeFromFieldsWithTypes("u64", item.fields.fee_bp),
            incentiveBp: decodeFromFieldsWithTypes("u64", item.fields.incentive_bp),
            tokenDecimal: decodeFromFieldsWithTypes("u64", item.fields.token_decimal),
            sizeDecimal: decodeFromFieldsWithTypes("u64", item.fields.size_decimal),
            ableToRemoveBid: decodeFromFieldsWithTypes("bool", item.fields.able_to_remove_bid),
        });
    }

    static fromBcs(data: Uint8Array): UpdateAuctionConfigEvent {
        return UpdateAuctionConfigEvent.fromFields(UpdateAuctionConfigEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            startTsMs: this.startTsMs.toString(),
            endTsMs: this.endTsMs.toString(),
            decaySpeed: this.decaySpeed.toString(),
            initialPrice: this.initialPrice.toString(),
            finalPrice: this.finalPrice.toString(),
            feeBp: this.feeBp.toString(),
            incentiveBp: this.incentiveBp.toString(),
            tokenDecimal: this.tokenDecimal.toString(),
            sizeDecimal: this.sizeDecimal.toString(),
            ableToRemoveBid: this.ableToRemoveBid,
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): UpdateAuctionConfigEvent {
        return UpdateAuctionConfigEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            startTsMs: decodeFromJSONField("u64", field.startTsMs),
            endTsMs: decodeFromJSONField("u64", field.endTsMs),
            decaySpeed: decodeFromJSONField("u64", field.decaySpeed),
            initialPrice: decodeFromJSONField("u64", field.initialPrice),
            finalPrice: decodeFromJSONField("u64", field.finalPrice),
            feeBp: decodeFromJSONField("u64", field.feeBp),
            incentiveBp: decodeFromJSONField("u64", field.incentiveBp),
            tokenDecimal: decodeFromJSONField("u64", field.tokenDecimal),
            sizeDecimal: decodeFromJSONField("u64", field.sizeDecimal),
            ableToRemoveBid: decodeFromJSONField("bool", field.ableToRemoveBid),
        });
    }

    static fromJSON(json: Record<string, any>): UpdateAuctionConfigEvent {
        if (json.$typeName !== UpdateAuctionConfigEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return UpdateAuctionConfigEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): UpdateAuctionConfigEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUpdateAuctionConfigEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a UpdateAuctionConfigEvent object`);
        }
        return UpdateAuctionConfigEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): UpdateAuctionConfigEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isUpdateAuctionConfigEvent(data.bcs.type)) {
                throw new Error(`object at is not a UpdateAuctionConfigEvent object`);
            }

            return UpdateAuctionConfigEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return UpdateAuctionConfigEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<UpdateAuctionConfigEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching UpdateAuctionConfigEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isUpdateAuctionConfigEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UpdateAuctionConfigEvent object`);
        }

        return UpdateAuctionConfigEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== UpdateConfigEvent =============================== */

export function isUpdateConfigEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::tds_authorized_entry::UpdateConfigEvent`;
}

export interface UpdateConfigEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    previous: ToField<Config>;
    current: ToField<Config>;
}

export type UpdateConfigEventReified = Reified<UpdateConfigEvent, UpdateConfigEventFields>;

export class UpdateConfigEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::tds_authorized_entry::UpdateConfigEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = UpdateConfigEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::tds_authorized_entry::UpdateConfigEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = UpdateConfigEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly previous: ToField<Config>;
    readonly current: ToField<Config>;

    private constructor(typeArgs: [], fields: UpdateConfigEventFields) {
        this.$fullTypeName = composeSuiType(
            UpdateConfigEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::tds_authorized_entry::UpdateConfigEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.previous = fields.previous;
        this.current = fields.current;
    }

    static reified(): UpdateConfigEventReified {
        return {
            typeName: UpdateConfigEvent.$typeName,
            fullTypeName: composeSuiType(UpdateConfigEvent.$typeName, ...[]) as `${typeof PKG_V1}::tds_authorized_entry::UpdateConfigEvent`,
            typeArgs: [] as [],
            isPhantom: UpdateConfigEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => UpdateConfigEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => UpdateConfigEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => UpdateConfigEvent.fromBcs(data),
            bcs: UpdateConfigEvent.bcs,
            fromJSONField: (field: any) => UpdateConfigEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => UpdateConfigEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => UpdateConfigEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => UpdateConfigEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => UpdateConfigEvent.fetch(client, id),
            new: (fields: UpdateConfigEventFields) => {
                return new UpdateConfigEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return UpdateConfigEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<UpdateConfigEvent>> {
        return phantom(UpdateConfigEvent.reified());
    }
    static get p() {
        return UpdateConfigEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("UpdateConfigEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            previous: Config.bcs,
            current: Config.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): UpdateConfigEvent {
        return UpdateConfigEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            previous: decodeFromFields(Config.reified(), fields.previous),
            current: decodeFromFields(Config.reified(), fields.current),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): UpdateConfigEvent {
        if (!isUpdateConfigEvent(item.type)) {
            throw new Error("not a UpdateConfigEvent type");
        }

        return UpdateConfigEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            previous: decodeFromFieldsWithTypes(Config.reified(), item.fields.previous),
            current: decodeFromFieldsWithTypes(Config.reified(), item.fields.current),
        });
    }

    static fromBcs(data: Uint8Array): UpdateConfigEvent {
        return UpdateConfigEvent.fromFields(UpdateConfigEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            previous: this.previous.toJSONField(),
            current: this.current.toJSONField(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): UpdateConfigEvent {
        return UpdateConfigEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            previous: decodeFromJSONField(Config.reified(), field.previous),
            current: decodeFromJSONField(Config.reified(), field.current),
        });
    }

    static fromJSON(json: Record<string, any>): UpdateConfigEvent {
        if (json.$typeName !== UpdateConfigEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return UpdateConfigEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): UpdateConfigEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUpdateConfigEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a UpdateConfigEvent object`);
        }
        return UpdateConfigEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): UpdateConfigEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isUpdateConfigEvent(data.bcs.type)) {
                throw new Error(`object at is not a UpdateConfigEvent object`);
            }

            return UpdateConfigEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return UpdateConfigEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<UpdateConfigEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching UpdateConfigEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isUpdateConfigEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UpdateConfigEvent object`);
        }

        return UpdateConfigEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== UpdateStrikeEvent =============================== */

export function isUpdateStrikeEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::tds_authorized_entry::UpdateStrikeEvent`;
}

export interface UpdateStrikeEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    oraclePrice: ToField<"u64">;
    oraclePriceDecimal: ToField<"u64">;
    vaultConfig: ToField<VaultConfig>;
}

export type UpdateStrikeEventReified = Reified<UpdateStrikeEvent, UpdateStrikeEventFields>;

export class UpdateStrikeEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::tds_authorized_entry::UpdateStrikeEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = UpdateStrikeEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::tds_authorized_entry::UpdateStrikeEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = UpdateStrikeEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly oraclePrice: ToField<"u64">;
    readonly oraclePriceDecimal: ToField<"u64">;
    readonly vaultConfig: ToField<VaultConfig>;

    private constructor(typeArgs: [], fields: UpdateStrikeEventFields) {
        this.$fullTypeName = composeSuiType(
            UpdateStrikeEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::tds_authorized_entry::UpdateStrikeEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.oraclePrice = fields.oraclePrice;
        this.oraclePriceDecimal = fields.oraclePriceDecimal;
        this.vaultConfig = fields.vaultConfig;
    }

    static reified(): UpdateStrikeEventReified {
        return {
            typeName: UpdateStrikeEvent.$typeName,
            fullTypeName: composeSuiType(UpdateStrikeEvent.$typeName, ...[]) as `${typeof PKG_V1}::tds_authorized_entry::UpdateStrikeEvent`,
            typeArgs: [] as [],
            isPhantom: UpdateStrikeEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => UpdateStrikeEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => UpdateStrikeEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => UpdateStrikeEvent.fromBcs(data),
            bcs: UpdateStrikeEvent.bcs,
            fromJSONField: (field: any) => UpdateStrikeEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => UpdateStrikeEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => UpdateStrikeEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => UpdateStrikeEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => UpdateStrikeEvent.fetch(client, id),
            new: (fields: UpdateStrikeEventFields) => {
                return new UpdateStrikeEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return UpdateStrikeEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<UpdateStrikeEvent>> {
        return phantom(UpdateStrikeEvent.reified());
    }
    static get p() {
        return UpdateStrikeEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("UpdateStrikeEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            oracle_price: bcs.u64(),
            oracle_price_decimal: bcs.u64(),
            vault_config: VaultConfig.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): UpdateStrikeEvent {
        return UpdateStrikeEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            oraclePrice: decodeFromFields("u64", fields.oracle_price),
            oraclePriceDecimal: decodeFromFields("u64", fields.oracle_price_decimal),
            vaultConfig: decodeFromFields(VaultConfig.reified(), fields.vault_config),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): UpdateStrikeEvent {
        if (!isUpdateStrikeEvent(item.type)) {
            throw new Error("not a UpdateStrikeEvent type");
        }

        return UpdateStrikeEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            oraclePrice: decodeFromFieldsWithTypes("u64", item.fields.oracle_price),
            oraclePriceDecimal: decodeFromFieldsWithTypes("u64", item.fields.oracle_price_decimal),
            vaultConfig: decodeFromFieldsWithTypes(VaultConfig.reified(), item.fields.vault_config),
        });
    }

    static fromBcs(data: Uint8Array): UpdateStrikeEvent {
        return UpdateStrikeEvent.fromFields(UpdateStrikeEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            oraclePrice: this.oraclePrice.toString(),
            oraclePriceDecimal: this.oraclePriceDecimal.toString(),
            vaultConfig: this.vaultConfig.toJSONField(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): UpdateStrikeEvent {
        return UpdateStrikeEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            oraclePrice: decodeFromJSONField("u64", field.oraclePrice),
            oraclePriceDecimal: decodeFromJSONField("u64", field.oraclePriceDecimal),
            vaultConfig: decodeFromJSONField(VaultConfig.reified(), field.vaultConfig),
        });
    }

    static fromJSON(json: Record<string, any>): UpdateStrikeEvent {
        if (json.$typeName !== UpdateStrikeEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return UpdateStrikeEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): UpdateStrikeEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUpdateStrikeEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a UpdateStrikeEvent object`);
        }
        return UpdateStrikeEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): UpdateStrikeEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isUpdateStrikeEvent(data.bcs.type)) {
                throw new Error(`object at is not a UpdateStrikeEvent object`);
            }

            return UpdateStrikeEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return UpdateStrikeEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<UpdateStrikeEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching UpdateStrikeEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isUpdateStrikeEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UpdateStrikeEvent object`);
        }

        return UpdateStrikeEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== UpdateWarmupVaultConfigEvent =============================== */

export function isUpdateWarmupVaultConfigEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::tds_authorized_entry::UpdateWarmupVaultConfigEvent`;
}

export interface UpdateWarmupVaultConfigEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    previous: ToField<VaultConfig>;
    current: ToField<VaultConfig>;
}

export type UpdateWarmupVaultConfigEventReified = Reified<UpdateWarmupVaultConfigEvent, UpdateWarmupVaultConfigEventFields>;

export class UpdateWarmupVaultConfigEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::tds_authorized_entry::UpdateWarmupVaultConfigEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = UpdateWarmupVaultConfigEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::tds_authorized_entry::UpdateWarmupVaultConfigEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = UpdateWarmupVaultConfigEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly previous: ToField<VaultConfig>;
    readonly current: ToField<VaultConfig>;

    private constructor(typeArgs: [], fields: UpdateWarmupVaultConfigEventFields) {
        this.$fullTypeName = composeSuiType(
            UpdateWarmupVaultConfigEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::tds_authorized_entry::UpdateWarmupVaultConfigEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.previous = fields.previous;
        this.current = fields.current;
    }

    static reified(): UpdateWarmupVaultConfigEventReified {
        return {
            typeName: UpdateWarmupVaultConfigEvent.$typeName,
            fullTypeName: composeSuiType(
                UpdateWarmupVaultConfigEvent.$typeName,
                ...[]
            ) as `${typeof PKG_V1}::tds_authorized_entry::UpdateWarmupVaultConfigEvent`,
            typeArgs: [] as [],
            isPhantom: UpdateWarmupVaultConfigEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => UpdateWarmupVaultConfigEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => UpdateWarmupVaultConfigEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => UpdateWarmupVaultConfigEvent.fromBcs(data),
            bcs: UpdateWarmupVaultConfigEvent.bcs,
            fromJSONField: (field: any) => UpdateWarmupVaultConfigEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => UpdateWarmupVaultConfigEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => UpdateWarmupVaultConfigEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => UpdateWarmupVaultConfigEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => UpdateWarmupVaultConfigEvent.fetch(client, id),
            new: (fields: UpdateWarmupVaultConfigEventFields) => {
                return new UpdateWarmupVaultConfigEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return UpdateWarmupVaultConfigEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<UpdateWarmupVaultConfigEvent>> {
        return phantom(UpdateWarmupVaultConfigEvent.reified());
    }
    static get p() {
        return UpdateWarmupVaultConfigEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("UpdateWarmupVaultConfigEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            previous: VaultConfig.bcs,
            current: VaultConfig.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): UpdateWarmupVaultConfigEvent {
        return UpdateWarmupVaultConfigEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            previous: decodeFromFields(VaultConfig.reified(), fields.previous),
            current: decodeFromFields(VaultConfig.reified(), fields.current),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): UpdateWarmupVaultConfigEvent {
        if (!isUpdateWarmupVaultConfigEvent(item.type)) {
            throw new Error("not a UpdateWarmupVaultConfigEvent type");
        }

        return UpdateWarmupVaultConfigEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            previous: decodeFromFieldsWithTypes(VaultConfig.reified(), item.fields.previous),
            current: decodeFromFieldsWithTypes(VaultConfig.reified(), item.fields.current),
        });
    }

    static fromBcs(data: Uint8Array): UpdateWarmupVaultConfigEvent {
        return UpdateWarmupVaultConfigEvent.fromFields(UpdateWarmupVaultConfigEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            previous: this.previous.toJSONField(),
            current: this.current.toJSONField(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): UpdateWarmupVaultConfigEvent {
        return UpdateWarmupVaultConfigEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            previous: decodeFromJSONField(VaultConfig.reified(), field.previous),
            current: decodeFromJSONField(VaultConfig.reified(), field.current),
        });
    }

    static fromJSON(json: Record<string, any>): UpdateWarmupVaultConfigEvent {
        if (json.$typeName !== UpdateWarmupVaultConfigEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return UpdateWarmupVaultConfigEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): UpdateWarmupVaultConfigEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUpdateWarmupVaultConfigEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a UpdateWarmupVaultConfigEvent object`);
        }
        return UpdateWarmupVaultConfigEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): UpdateWarmupVaultConfigEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isUpdateWarmupVaultConfigEvent(data.bcs.type)) {
                throw new Error(`object at is not a UpdateWarmupVaultConfigEvent object`);
            }

            return UpdateWarmupVaultConfigEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return UpdateWarmupVaultConfigEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<UpdateWarmupVaultConfigEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching UpdateWarmupVaultConfigEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isUpdateWarmupVaultConfigEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UpdateWarmupVaultConfigEvent object`);
        }

        return UpdateWarmupVaultConfigEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== WithdrawFixedIncentiveEvent =============================== */

export function isWithdrawFixedIncentiveEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::tds_authorized_entry::WithdrawFixedIncentiveEvent`;
}

export interface WithdrawFixedIncentiveEventFields {
    signer: ToField<"address">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
}

export type WithdrawFixedIncentiveEventReified = Reified<WithdrawFixedIncentiveEvent, WithdrawFixedIncentiveEventFields>;

export class WithdrawFixedIncentiveEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::tds_authorized_entry::WithdrawFixedIncentiveEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = WithdrawFixedIncentiveEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::tds_authorized_entry::WithdrawFixedIncentiveEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = WithdrawFixedIncentiveEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;

    private constructor(typeArgs: [], fields: WithdrawFixedIncentiveEventFields) {
        this.$fullTypeName = composeSuiType(
            WithdrawFixedIncentiveEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::tds_authorized_entry::WithdrawFixedIncentiveEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.token = fields.token;
        this.amount = fields.amount;
    }

    static reified(): WithdrawFixedIncentiveEventReified {
        return {
            typeName: WithdrawFixedIncentiveEvent.$typeName,
            fullTypeName: composeSuiType(
                WithdrawFixedIncentiveEvent.$typeName,
                ...[]
            ) as `${typeof PKG_V1}::tds_authorized_entry::WithdrawFixedIncentiveEvent`,
            typeArgs: [] as [],
            isPhantom: WithdrawFixedIncentiveEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => WithdrawFixedIncentiveEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => WithdrawFixedIncentiveEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => WithdrawFixedIncentiveEvent.fromBcs(data),
            bcs: WithdrawFixedIncentiveEvent.bcs,
            fromJSONField: (field: any) => WithdrawFixedIncentiveEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => WithdrawFixedIncentiveEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => WithdrawFixedIncentiveEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => WithdrawFixedIncentiveEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => WithdrawFixedIncentiveEvent.fetch(client, id),
            new: (fields: WithdrawFixedIncentiveEventFields) => {
                return new WithdrawFixedIncentiveEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return WithdrawFixedIncentiveEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<WithdrawFixedIncentiveEvent>> {
        return phantom(WithdrawFixedIncentiveEvent.reified());
    }
    static get p() {
        return WithdrawFixedIncentiveEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("WithdrawFixedIncentiveEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            token: TypeName.bcs,
            amount: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): WithdrawFixedIncentiveEvent {
        return WithdrawFixedIncentiveEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            token: decodeFromFields(TypeName.reified(), fields.token),
            amount: decodeFromFields("u64", fields.amount),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): WithdrawFixedIncentiveEvent {
        if (!isWithdrawFixedIncentiveEvent(item.type)) {
            throw new Error("not a WithdrawFixedIncentiveEvent type");
        }

        return WithdrawFixedIncentiveEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token),
            amount: decodeFromFieldsWithTypes("u64", item.fields.amount),
        });
    }

    static fromBcs(data: Uint8Array): WithdrawFixedIncentiveEvent {
        return WithdrawFixedIncentiveEvent.fromFields(WithdrawFixedIncentiveEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            token: this.token.toJSONField(),
            amount: this.amount.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): WithdrawFixedIncentiveEvent {
        return WithdrawFixedIncentiveEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            token: decodeFromJSONField(TypeName.reified(), field.token),
            amount: decodeFromJSONField("u64", field.amount),
        });
    }

    static fromJSON(json: Record<string, any>): WithdrawFixedIncentiveEvent {
        if (json.$typeName !== WithdrawFixedIncentiveEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return WithdrawFixedIncentiveEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): WithdrawFixedIncentiveEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isWithdrawFixedIncentiveEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a WithdrawFixedIncentiveEvent object`);
        }
        return WithdrawFixedIncentiveEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): WithdrawFixedIncentiveEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isWithdrawFixedIncentiveEvent(data.bcs.type)) {
                throw new Error(`object at is not a WithdrawFixedIncentiveEvent object`);
            }

            return WithdrawFixedIncentiveEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return WithdrawFixedIncentiveEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<WithdrawFixedIncentiveEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching WithdrawFixedIncentiveEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isWithdrawFixedIncentiveEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a WithdrawFixedIncentiveEvent object`);
        }

        return WithdrawFixedIncentiveEvent.fromSuiObjectData(res.data);
    }
}
