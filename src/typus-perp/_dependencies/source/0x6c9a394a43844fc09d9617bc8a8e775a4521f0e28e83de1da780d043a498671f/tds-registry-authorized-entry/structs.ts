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
import { PKG_V1, PKG_V33 } from "../index";
import { Config, Info } from "../typus-dov-single/structs";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromB64, fromHEX, toHEX } from "@mysten/sui/utils";

/* ============================== AddAuthorizedUserEvent =============================== */

export function isAddAuthorizedUserEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::tds_registry_authorized_entry::AddAuthorizedUserEvent`;
}

export interface AddAuthorizedUserEventFields {
    signer: ToField<"address">;
    users: ToField<Vector<"address">>;
}

export type AddAuthorizedUserEventReified = Reified<AddAuthorizedUserEvent, AddAuthorizedUserEventFields>;

export class AddAuthorizedUserEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::tds_registry_authorized_entry::AddAuthorizedUserEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = AddAuthorizedUserEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::tds_registry_authorized_entry::AddAuthorizedUserEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = AddAuthorizedUserEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly users: ToField<Vector<"address">>;

    private constructor(typeArgs: [], fields: AddAuthorizedUserEventFields) {
        this.$fullTypeName = composeSuiType(
            AddAuthorizedUserEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::tds_registry_authorized_entry::AddAuthorizedUserEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.users = fields.users;
    }

    static reified(): AddAuthorizedUserEventReified {
        return {
            typeName: AddAuthorizedUserEvent.$typeName,
            fullTypeName: composeSuiType(
                AddAuthorizedUserEvent.$typeName,
                ...[]
            ) as `${typeof PKG_V1}::tds_registry_authorized_entry::AddAuthorizedUserEvent`,
            typeArgs: [] as [],
            isPhantom: AddAuthorizedUserEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => AddAuthorizedUserEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => AddAuthorizedUserEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => AddAuthorizedUserEvent.fromBcs(data),
            bcs: AddAuthorizedUserEvent.bcs,
            fromJSONField: (field: any) => AddAuthorizedUserEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => AddAuthorizedUserEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => AddAuthorizedUserEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => AddAuthorizedUserEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => AddAuthorizedUserEvent.fetch(client, id),
            new: (fields: AddAuthorizedUserEventFields) => {
                return new AddAuthorizedUserEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return AddAuthorizedUserEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<AddAuthorizedUserEvent>> {
        return phantom(AddAuthorizedUserEvent.reified());
    }
    static get p() {
        return AddAuthorizedUserEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("AddAuthorizedUserEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            users: bcs.vector(
                bcs.bytes(32).transform({
                    input: (val: string) => fromHEX(val),
                    output: (val: Uint8Array) => toHEX(val),
                })
            ),
        });
    }

    static fromFields(fields: Record<string, any>): AddAuthorizedUserEvent {
        return AddAuthorizedUserEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            users: decodeFromFields(reified.vector("address"), fields.users),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): AddAuthorizedUserEvent {
        if (!isAddAuthorizedUserEvent(item.type)) {
            throw new Error("not a AddAuthorizedUserEvent type");
        }

        return AddAuthorizedUserEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            users: decodeFromFieldsWithTypes(reified.vector("address"), item.fields.users),
        });
    }

    static fromBcs(data: Uint8Array): AddAuthorizedUserEvent {
        return AddAuthorizedUserEvent.fromFields(AddAuthorizedUserEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
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

    static fromJSONField(field: any): AddAuthorizedUserEvent {
        return AddAuthorizedUserEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            users: decodeFromJSONField(reified.vector("address"), field.users),
        });
    }

    static fromJSON(json: Record<string, any>): AddAuthorizedUserEvent {
        if (json.$typeName !== AddAuthorizedUserEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return AddAuthorizedUserEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): AddAuthorizedUserEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isAddAuthorizedUserEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a AddAuthorizedUserEvent object`);
        }
        return AddAuthorizedUserEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): AddAuthorizedUserEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isAddAuthorizedUserEvent(data.bcs.type)) {
                throw new Error(`object at is not a AddAuthorizedUserEvent object`);
            }

            return AddAuthorizedUserEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return AddAuthorizedUserEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<AddAuthorizedUserEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching AddAuthorizedUserEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isAddAuthorizedUserEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AddAuthorizedUserEvent object`);
        }

        return AddAuthorizedUserEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== AddWitnessEvent =============================== */

export function isAddWitnessEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V33}::tds_registry_authorized_entry::AddWitnessEvent`;
}

export interface AddWitnessEventFields {
    signer: ToField<"address">;
    witness: ToField<TypeName>;
}

export type AddWitnessEventReified = Reified<AddWitnessEvent, AddWitnessEventFields>;

export class AddWitnessEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V33}::tds_registry_authorized_entry::AddWitnessEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = AddWitnessEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V33}::tds_registry_authorized_entry::AddWitnessEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = AddWitnessEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly witness: ToField<TypeName>;

    private constructor(typeArgs: [], fields: AddWitnessEventFields) {
        this.$fullTypeName = composeSuiType(
            AddWitnessEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V33}::tds_registry_authorized_entry::AddWitnessEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.witness = fields.witness;
    }

    static reified(): AddWitnessEventReified {
        return {
            typeName: AddWitnessEvent.$typeName,
            fullTypeName: composeSuiType(
                AddWitnessEvent.$typeName,
                ...[]
            ) as `${typeof PKG_V33}::tds_registry_authorized_entry::AddWitnessEvent`,
            typeArgs: [] as [],
            isPhantom: AddWitnessEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => AddWitnessEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => AddWitnessEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => AddWitnessEvent.fromBcs(data),
            bcs: AddWitnessEvent.bcs,
            fromJSONField: (field: any) => AddWitnessEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => AddWitnessEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => AddWitnessEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => AddWitnessEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => AddWitnessEvent.fetch(client, id),
            new: (fields: AddWitnessEventFields) => {
                return new AddWitnessEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return AddWitnessEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<AddWitnessEvent>> {
        return phantom(AddWitnessEvent.reified());
    }
    static get p() {
        return AddWitnessEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("AddWitnessEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            witness: TypeName.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): AddWitnessEvent {
        return AddWitnessEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            witness: decodeFromFields(TypeName.reified(), fields.witness),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): AddWitnessEvent {
        if (!isAddWitnessEvent(item.type)) {
            throw new Error("not a AddWitnessEvent type");
        }

        return AddWitnessEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            witness: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.witness),
        });
    }

    static fromBcs(data: Uint8Array): AddWitnessEvent {
        return AddWitnessEvent.fromFields(AddWitnessEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            witness: this.witness.toJSONField(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): AddWitnessEvent {
        return AddWitnessEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            witness: decodeFromJSONField(TypeName.reified(), field.witness),
        });
    }

    static fromJSON(json: Record<string, any>): AddWitnessEvent {
        if (json.$typeName !== AddWitnessEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return AddWitnessEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): AddWitnessEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isAddWitnessEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a AddWitnessEvent object`);
        }
        return AddWitnessEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): AddWitnessEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isAddWitnessEvent(data.bcs.type)) {
                throw new Error(`object at is not a AddWitnessEvent object`);
            }

            return AddWitnessEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return AddWitnessEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<AddWitnessEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching AddWitnessEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isAddWitnessEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AddWitnessEvent object`);
        }

        return AddWitnessEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== IncentiviseEvent =============================== */

export function isIncentiviseEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::tds_registry_authorized_entry::IncentiviseEvent`;
}

export interface IncentiviseEventFields {
    signer: ToField<"address">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
}

export type IncentiviseEventReified = Reified<IncentiviseEvent, IncentiviseEventFields>;

export class IncentiviseEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::tds_registry_authorized_entry::IncentiviseEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = IncentiviseEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::tds_registry_authorized_entry::IncentiviseEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = IncentiviseEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;

    private constructor(typeArgs: [], fields: IncentiviseEventFields) {
        this.$fullTypeName = composeSuiType(
            IncentiviseEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::tds_registry_authorized_entry::IncentiviseEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.token = fields.token;
        this.amount = fields.amount;
    }

    static reified(): IncentiviseEventReified {
        return {
            typeName: IncentiviseEvent.$typeName,
            fullTypeName: composeSuiType(
                IncentiviseEvent.$typeName,
                ...[]
            ) as `${typeof PKG_V1}::tds_registry_authorized_entry::IncentiviseEvent`,
            typeArgs: [] as [],
            isPhantom: IncentiviseEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => IncentiviseEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => IncentiviseEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => IncentiviseEvent.fromBcs(data),
            bcs: IncentiviseEvent.bcs,
            fromJSONField: (field: any) => IncentiviseEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => IncentiviseEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => IncentiviseEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => IncentiviseEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => IncentiviseEvent.fetch(client, id),
            new: (fields: IncentiviseEventFields) => {
                return new IncentiviseEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return IncentiviseEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<IncentiviseEvent>> {
        return phantom(IncentiviseEvent.reified());
    }
    static get p() {
        return IncentiviseEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("IncentiviseEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            token: TypeName.bcs,
            amount: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): IncentiviseEvent {
        return IncentiviseEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            token: decodeFromFields(TypeName.reified(), fields.token),
            amount: decodeFromFields("u64", fields.amount),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): IncentiviseEvent {
        if (!isIncentiviseEvent(item.type)) {
            throw new Error("not a IncentiviseEvent type");
        }

        return IncentiviseEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token),
            amount: decodeFromFieldsWithTypes("u64", item.fields.amount),
        });
    }

    static fromBcs(data: Uint8Array): IncentiviseEvent {
        return IncentiviseEvent.fromFields(IncentiviseEvent.bcs.parse(data));
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

    static fromJSONField(field: any): IncentiviseEvent {
        return IncentiviseEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            token: decodeFromJSONField(TypeName.reified(), field.token),
            amount: decodeFromJSONField("u64", field.amount),
        });
    }

    static fromJSON(json: Record<string, any>): IncentiviseEvent {
        if (json.$typeName !== IncentiviseEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return IncentiviseEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): IncentiviseEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isIncentiviseEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a IncentiviseEvent object`);
        }
        return IncentiviseEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): IncentiviseEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isIncentiviseEvent(data.bcs.type)) {
                throw new Error(`object at is not a IncentiviseEvent object`);
            }

            return IncentiviseEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return IncentiviseEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<IncentiviseEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching IncentiviseEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isIncentiviseEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a IncentiviseEvent object`);
        }

        return IncentiviseEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== NewPortfolioVaultEvent =============================== */

export function isNewPortfolioVaultEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::tds_registry_authorized_entry::NewPortfolioVaultEvent`;
}

export interface NewPortfolioVaultEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    info: ToField<Info>;
    config: ToField<Config>;
}

export type NewPortfolioVaultEventReified = Reified<NewPortfolioVaultEvent, NewPortfolioVaultEventFields>;

export class NewPortfolioVaultEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::tds_registry_authorized_entry::NewPortfolioVaultEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = NewPortfolioVaultEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::tds_registry_authorized_entry::NewPortfolioVaultEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = NewPortfolioVaultEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly info: ToField<Info>;
    readonly config: ToField<Config>;

    private constructor(typeArgs: [], fields: NewPortfolioVaultEventFields) {
        this.$fullTypeName = composeSuiType(
            NewPortfolioVaultEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::tds_registry_authorized_entry::NewPortfolioVaultEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.info = fields.info;
        this.config = fields.config;
    }

    static reified(): NewPortfolioVaultEventReified {
        return {
            typeName: NewPortfolioVaultEvent.$typeName,
            fullTypeName: composeSuiType(
                NewPortfolioVaultEvent.$typeName,
                ...[]
            ) as `${typeof PKG_V1}::tds_registry_authorized_entry::NewPortfolioVaultEvent`,
            typeArgs: [] as [],
            isPhantom: NewPortfolioVaultEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => NewPortfolioVaultEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => NewPortfolioVaultEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => NewPortfolioVaultEvent.fromBcs(data),
            bcs: NewPortfolioVaultEvent.bcs,
            fromJSONField: (field: any) => NewPortfolioVaultEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => NewPortfolioVaultEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => NewPortfolioVaultEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => NewPortfolioVaultEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => NewPortfolioVaultEvent.fetch(client, id),
            new: (fields: NewPortfolioVaultEventFields) => {
                return new NewPortfolioVaultEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return NewPortfolioVaultEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<NewPortfolioVaultEvent>> {
        return phantom(NewPortfolioVaultEvent.reified());
    }
    static get p() {
        return NewPortfolioVaultEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("NewPortfolioVaultEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            info: Info.bcs,
            config: Config.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): NewPortfolioVaultEvent {
        return NewPortfolioVaultEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            info: decodeFromFields(Info.reified(), fields.info),
            config: decodeFromFields(Config.reified(), fields.config),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): NewPortfolioVaultEvent {
        if (!isNewPortfolioVaultEvent(item.type)) {
            throw new Error("not a NewPortfolioVaultEvent type");
        }

        return NewPortfolioVaultEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            info: decodeFromFieldsWithTypes(Info.reified(), item.fields.info),
            config: decodeFromFieldsWithTypes(Config.reified(), item.fields.config),
        });
    }

    static fromBcs(data: Uint8Array): NewPortfolioVaultEvent {
        return NewPortfolioVaultEvent.fromFields(NewPortfolioVaultEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            info: this.info.toJSONField(),
            config: this.config.toJSONField(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): NewPortfolioVaultEvent {
        return NewPortfolioVaultEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            info: decodeFromJSONField(Info.reified(), field.info),
            config: decodeFromJSONField(Config.reified(), field.config),
        });
    }

    static fromJSON(json: Record<string, any>): NewPortfolioVaultEvent {
        if (json.$typeName !== NewPortfolioVaultEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return NewPortfolioVaultEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): NewPortfolioVaultEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isNewPortfolioVaultEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a NewPortfolioVaultEvent object`);
        }
        return NewPortfolioVaultEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): NewPortfolioVaultEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isNewPortfolioVaultEvent(data.bcs.type)) {
                throw new Error(`object at is not a NewPortfolioVaultEvent object`);
            }

            return NewPortfolioVaultEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return NewPortfolioVaultEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<NewPortfolioVaultEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching NewPortfolioVaultEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isNewPortfolioVaultEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a NewPortfolioVaultEvent object`);
        }

        return NewPortfolioVaultEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== RemoveAuthorizedUserEvent =============================== */

export function isRemoveAuthorizedUserEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::tds_registry_authorized_entry::RemoveAuthorizedUserEvent`;
}

export interface RemoveAuthorizedUserEventFields {
    signer: ToField<"address">;
    users: ToField<Vector<"address">>;
}

export type RemoveAuthorizedUserEventReified = Reified<RemoveAuthorizedUserEvent, RemoveAuthorizedUserEventFields>;

export class RemoveAuthorizedUserEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::tds_registry_authorized_entry::RemoveAuthorizedUserEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = RemoveAuthorizedUserEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::tds_registry_authorized_entry::RemoveAuthorizedUserEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = RemoveAuthorizedUserEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly users: ToField<Vector<"address">>;

    private constructor(typeArgs: [], fields: RemoveAuthorizedUserEventFields) {
        this.$fullTypeName = composeSuiType(
            RemoveAuthorizedUserEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::tds_registry_authorized_entry::RemoveAuthorizedUserEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.users = fields.users;
    }

    static reified(): RemoveAuthorizedUserEventReified {
        return {
            typeName: RemoveAuthorizedUserEvent.$typeName,
            fullTypeName: composeSuiType(
                RemoveAuthorizedUserEvent.$typeName,
                ...[]
            ) as `${typeof PKG_V1}::tds_registry_authorized_entry::RemoveAuthorizedUserEvent`,
            typeArgs: [] as [],
            isPhantom: RemoveAuthorizedUserEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => RemoveAuthorizedUserEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => RemoveAuthorizedUserEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => RemoveAuthorizedUserEvent.fromBcs(data),
            bcs: RemoveAuthorizedUserEvent.bcs,
            fromJSONField: (field: any) => RemoveAuthorizedUserEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => RemoveAuthorizedUserEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => RemoveAuthorizedUserEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => RemoveAuthorizedUserEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => RemoveAuthorizedUserEvent.fetch(client, id),
            new: (fields: RemoveAuthorizedUserEventFields) => {
                return new RemoveAuthorizedUserEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return RemoveAuthorizedUserEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<RemoveAuthorizedUserEvent>> {
        return phantom(RemoveAuthorizedUserEvent.reified());
    }
    static get p() {
        return RemoveAuthorizedUserEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("RemoveAuthorizedUserEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            users: bcs.vector(
                bcs.bytes(32).transform({
                    input: (val: string) => fromHEX(val),
                    output: (val: Uint8Array) => toHEX(val),
                })
            ),
        });
    }

    static fromFields(fields: Record<string, any>): RemoveAuthorizedUserEvent {
        return RemoveAuthorizedUserEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            users: decodeFromFields(reified.vector("address"), fields.users),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): RemoveAuthorizedUserEvent {
        if (!isRemoveAuthorizedUserEvent(item.type)) {
            throw new Error("not a RemoveAuthorizedUserEvent type");
        }

        return RemoveAuthorizedUserEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            users: decodeFromFieldsWithTypes(reified.vector("address"), item.fields.users),
        });
    }

    static fromBcs(data: Uint8Array): RemoveAuthorizedUserEvent {
        return RemoveAuthorizedUserEvent.fromFields(RemoveAuthorizedUserEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
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

    static fromJSONField(field: any): RemoveAuthorizedUserEvent {
        return RemoveAuthorizedUserEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            users: decodeFromJSONField(reified.vector("address"), field.users),
        });
    }

    static fromJSON(json: Record<string, any>): RemoveAuthorizedUserEvent {
        if (json.$typeName !== RemoveAuthorizedUserEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return RemoveAuthorizedUserEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): RemoveAuthorizedUserEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRemoveAuthorizedUserEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a RemoveAuthorizedUserEvent object`);
        }
        return RemoveAuthorizedUserEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): RemoveAuthorizedUserEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isRemoveAuthorizedUserEvent(data.bcs.type)) {
                throw new Error(`object at is not a RemoveAuthorizedUserEvent object`);
            }

            return RemoveAuthorizedUserEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return RemoveAuthorizedUserEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<RemoveAuthorizedUserEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching RemoveAuthorizedUserEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isRemoveAuthorizedUserEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RemoveAuthorizedUserEvent object`);
        }

        return RemoveAuthorizedUserEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== RemoveWitnessEvent =============================== */

export function isRemoveWitnessEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V33}::tds_registry_authorized_entry::RemoveWitnessEvent`;
}

export interface RemoveWitnessEventFields {
    signer: ToField<"address">;
    witness: ToField<TypeName>;
}

export type RemoveWitnessEventReified = Reified<RemoveWitnessEvent, RemoveWitnessEventFields>;

export class RemoveWitnessEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V33}::tds_registry_authorized_entry::RemoveWitnessEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = RemoveWitnessEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V33}::tds_registry_authorized_entry::RemoveWitnessEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = RemoveWitnessEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly witness: ToField<TypeName>;

    private constructor(typeArgs: [], fields: RemoveWitnessEventFields) {
        this.$fullTypeName = composeSuiType(
            RemoveWitnessEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V33}::tds_registry_authorized_entry::RemoveWitnessEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.witness = fields.witness;
    }

    static reified(): RemoveWitnessEventReified {
        return {
            typeName: RemoveWitnessEvent.$typeName,
            fullTypeName: composeSuiType(
                RemoveWitnessEvent.$typeName,
                ...[]
            ) as `${typeof PKG_V33}::tds_registry_authorized_entry::RemoveWitnessEvent`,
            typeArgs: [] as [],
            isPhantom: RemoveWitnessEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => RemoveWitnessEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => RemoveWitnessEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => RemoveWitnessEvent.fromBcs(data),
            bcs: RemoveWitnessEvent.bcs,
            fromJSONField: (field: any) => RemoveWitnessEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => RemoveWitnessEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => RemoveWitnessEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => RemoveWitnessEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => RemoveWitnessEvent.fetch(client, id),
            new: (fields: RemoveWitnessEventFields) => {
                return new RemoveWitnessEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return RemoveWitnessEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<RemoveWitnessEvent>> {
        return phantom(RemoveWitnessEvent.reified());
    }
    static get p() {
        return RemoveWitnessEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("RemoveWitnessEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            witness: TypeName.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): RemoveWitnessEvent {
        return RemoveWitnessEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            witness: decodeFromFields(TypeName.reified(), fields.witness),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): RemoveWitnessEvent {
        if (!isRemoveWitnessEvent(item.type)) {
            throw new Error("not a RemoveWitnessEvent type");
        }

        return RemoveWitnessEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            witness: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.witness),
        });
    }

    static fromBcs(data: Uint8Array): RemoveWitnessEvent {
        return RemoveWitnessEvent.fromFields(RemoveWitnessEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            witness: this.witness.toJSONField(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): RemoveWitnessEvent {
        return RemoveWitnessEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            witness: decodeFromJSONField(TypeName.reified(), field.witness),
        });
    }

    static fromJSON(json: Record<string, any>): RemoveWitnessEvent {
        if (json.$typeName !== RemoveWitnessEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return RemoveWitnessEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): RemoveWitnessEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRemoveWitnessEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a RemoveWitnessEvent object`);
        }
        return RemoveWitnessEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): RemoveWitnessEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isRemoveWitnessEvent(data.bcs.type)) {
                throw new Error(`object at is not a RemoveWitnessEvent object`);
            }

            return RemoveWitnessEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return RemoveWitnessEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<RemoveWitnessEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching RemoveWitnessEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isRemoveWitnessEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RemoveWitnessEvent object`);
        }

        return RemoveWitnessEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== ResumeTransactionEvent =============================== */

export function isResumeTransactionEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::tds_registry_authorized_entry::ResumeTransactionEvent`;
}

export interface ResumeTransactionEventFields {
    signer: ToField<"address">;
}

export type ResumeTransactionEventReified = Reified<ResumeTransactionEvent, ResumeTransactionEventFields>;

export class ResumeTransactionEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::tds_registry_authorized_entry::ResumeTransactionEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = ResumeTransactionEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::tds_registry_authorized_entry::ResumeTransactionEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = ResumeTransactionEvent.$isPhantom;

    readonly signer: ToField<"address">;

    private constructor(typeArgs: [], fields: ResumeTransactionEventFields) {
        this.$fullTypeName = composeSuiType(
            ResumeTransactionEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::tds_registry_authorized_entry::ResumeTransactionEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
    }

    static reified(): ResumeTransactionEventReified {
        return {
            typeName: ResumeTransactionEvent.$typeName,
            fullTypeName: composeSuiType(
                ResumeTransactionEvent.$typeName,
                ...[]
            ) as `${typeof PKG_V1}::tds_registry_authorized_entry::ResumeTransactionEvent`,
            typeArgs: [] as [],
            isPhantom: ResumeTransactionEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => ResumeTransactionEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => ResumeTransactionEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => ResumeTransactionEvent.fromBcs(data),
            bcs: ResumeTransactionEvent.bcs,
            fromJSONField: (field: any) => ResumeTransactionEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => ResumeTransactionEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => ResumeTransactionEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => ResumeTransactionEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => ResumeTransactionEvent.fetch(client, id),
            new: (fields: ResumeTransactionEventFields) => {
                return new ResumeTransactionEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return ResumeTransactionEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<ResumeTransactionEvent>> {
        return phantom(ResumeTransactionEvent.reified());
    }
    static get p() {
        return ResumeTransactionEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("ResumeTransactionEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        });
    }

    static fromFields(fields: Record<string, any>): ResumeTransactionEvent {
        return ResumeTransactionEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): ResumeTransactionEvent {
        if (!isResumeTransactionEvent(item.type)) {
            throw new Error("not a ResumeTransactionEvent type");
        }

        return ResumeTransactionEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
        });
    }

    static fromBcs(data: Uint8Array): ResumeTransactionEvent {
        return ResumeTransactionEvent.fromFields(ResumeTransactionEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): ResumeTransactionEvent {
        return ResumeTransactionEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
        });
    }

    static fromJSON(json: Record<string, any>): ResumeTransactionEvent {
        if (json.$typeName !== ResumeTransactionEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return ResumeTransactionEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): ResumeTransactionEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isResumeTransactionEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a ResumeTransactionEvent object`);
        }
        return ResumeTransactionEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): ResumeTransactionEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isResumeTransactionEvent(data.bcs.type)) {
                throw new Error(`object at is not a ResumeTransactionEvent object`);
            }

            return ResumeTransactionEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ResumeTransactionEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<ResumeTransactionEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching ResumeTransactionEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isResumeTransactionEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ResumeTransactionEvent object`);
        }

        return ResumeTransactionEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== SetAvailableIncentiveAmountEvent =============================== */

export function isSetAvailableIncentiveAmountEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::tds_registry_authorized_entry::SetAvailableIncentiveAmountEvent`;
}

export interface SetAvailableIncentiveAmountEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    prevAmount: ToField<"u64">;
    amount: ToField<"u64">;
}

export type SetAvailableIncentiveAmountEventReified = Reified<SetAvailableIncentiveAmountEvent, SetAvailableIncentiveAmountEventFields>;

export class SetAvailableIncentiveAmountEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::tds_registry_authorized_entry::SetAvailableIncentiveAmountEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = SetAvailableIncentiveAmountEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::tds_registry_authorized_entry::SetAvailableIncentiveAmountEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = SetAvailableIncentiveAmountEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly prevAmount: ToField<"u64">;
    readonly amount: ToField<"u64">;

    private constructor(typeArgs: [], fields: SetAvailableIncentiveAmountEventFields) {
        this.$fullTypeName = composeSuiType(
            SetAvailableIncentiveAmountEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::tds_registry_authorized_entry::SetAvailableIncentiveAmountEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.prevAmount = fields.prevAmount;
        this.amount = fields.amount;
    }

    static reified(): SetAvailableIncentiveAmountEventReified {
        return {
            typeName: SetAvailableIncentiveAmountEvent.$typeName,
            fullTypeName: composeSuiType(
                SetAvailableIncentiveAmountEvent.$typeName,
                ...[]
            ) as `${typeof PKG_V1}::tds_registry_authorized_entry::SetAvailableIncentiveAmountEvent`,
            typeArgs: [] as [],
            isPhantom: SetAvailableIncentiveAmountEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => SetAvailableIncentiveAmountEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => SetAvailableIncentiveAmountEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => SetAvailableIncentiveAmountEvent.fromBcs(data),
            bcs: SetAvailableIncentiveAmountEvent.bcs,
            fromJSONField: (field: any) => SetAvailableIncentiveAmountEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => SetAvailableIncentiveAmountEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => SetAvailableIncentiveAmountEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => SetAvailableIncentiveAmountEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => SetAvailableIncentiveAmountEvent.fetch(client, id),
            new: (fields: SetAvailableIncentiveAmountEventFields) => {
                return new SetAvailableIncentiveAmountEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return SetAvailableIncentiveAmountEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<SetAvailableIncentiveAmountEvent>> {
        return phantom(SetAvailableIncentiveAmountEvent.reified());
    }
    static get p() {
        return SetAvailableIncentiveAmountEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("SetAvailableIncentiveAmountEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            prev_amount: bcs.u64(),
            amount: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): SetAvailableIncentiveAmountEvent {
        return SetAvailableIncentiveAmountEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            prevAmount: decodeFromFields("u64", fields.prev_amount),
            amount: decodeFromFields("u64", fields.amount),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): SetAvailableIncentiveAmountEvent {
        if (!isSetAvailableIncentiveAmountEvent(item.type)) {
            throw new Error("not a SetAvailableIncentiveAmountEvent type");
        }

        return SetAvailableIncentiveAmountEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            prevAmount: decodeFromFieldsWithTypes("u64", item.fields.prev_amount),
            amount: decodeFromFieldsWithTypes("u64", item.fields.amount),
        });
    }

    static fromBcs(data: Uint8Array): SetAvailableIncentiveAmountEvent {
        return SetAvailableIncentiveAmountEvent.fromFields(SetAvailableIncentiveAmountEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            prevAmount: this.prevAmount.toString(),
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

    static fromJSONField(field: any): SetAvailableIncentiveAmountEvent {
        return SetAvailableIncentiveAmountEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            prevAmount: decodeFromJSONField("u64", field.prevAmount),
            amount: decodeFromJSONField("u64", field.amount),
        });
    }

    static fromJSON(json: Record<string, any>): SetAvailableIncentiveAmountEvent {
        if (json.$typeName !== SetAvailableIncentiveAmountEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return SetAvailableIncentiveAmountEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): SetAvailableIncentiveAmountEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isSetAvailableIncentiveAmountEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a SetAvailableIncentiveAmountEvent object`);
        }
        return SetAvailableIncentiveAmountEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): SetAvailableIncentiveAmountEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isSetAvailableIncentiveAmountEvent(data.bcs.type)) {
                throw new Error(`object at is not a SetAvailableIncentiveAmountEvent object`);
            }

            return SetAvailableIncentiveAmountEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return SetAvailableIncentiveAmountEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<SetAvailableIncentiveAmountEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching SetAvailableIncentiveAmountEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isSetAvailableIncentiveAmountEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SetAvailableIncentiveAmountEvent object`);
        }

        return SetAvailableIncentiveAmountEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== SuspendTransactionEvent =============================== */

export function isSuspendTransactionEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::tds_registry_authorized_entry::SuspendTransactionEvent`;
}

export interface SuspendTransactionEventFields {
    signer: ToField<"address">;
}

export type SuspendTransactionEventReified = Reified<SuspendTransactionEvent, SuspendTransactionEventFields>;

export class SuspendTransactionEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::tds_registry_authorized_entry::SuspendTransactionEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = SuspendTransactionEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::tds_registry_authorized_entry::SuspendTransactionEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = SuspendTransactionEvent.$isPhantom;

    readonly signer: ToField<"address">;

    private constructor(typeArgs: [], fields: SuspendTransactionEventFields) {
        this.$fullTypeName = composeSuiType(
            SuspendTransactionEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::tds_registry_authorized_entry::SuspendTransactionEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
    }

    static reified(): SuspendTransactionEventReified {
        return {
            typeName: SuspendTransactionEvent.$typeName,
            fullTypeName: composeSuiType(
                SuspendTransactionEvent.$typeName,
                ...[]
            ) as `${typeof PKG_V1}::tds_registry_authorized_entry::SuspendTransactionEvent`,
            typeArgs: [] as [],
            isPhantom: SuspendTransactionEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => SuspendTransactionEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => SuspendTransactionEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => SuspendTransactionEvent.fromBcs(data),
            bcs: SuspendTransactionEvent.bcs,
            fromJSONField: (field: any) => SuspendTransactionEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => SuspendTransactionEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => SuspendTransactionEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => SuspendTransactionEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => SuspendTransactionEvent.fetch(client, id),
            new: (fields: SuspendTransactionEventFields) => {
                return new SuspendTransactionEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return SuspendTransactionEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<SuspendTransactionEvent>> {
        return phantom(SuspendTransactionEvent.reified());
    }
    static get p() {
        return SuspendTransactionEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("SuspendTransactionEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        });
    }

    static fromFields(fields: Record<string, any>): SuspendTransactionEvent {
        return SuspendTransactionEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): SuspendTransactionEvent {
        if (!isSuspendTransactionEvent(item.type)) {
            throw new Error("not a SuspendTransactionEvent type");
        }

        return SuspendTransactionEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
        });
    }

    static fromBcs(data: Uint8Array): SuspendTransactionEvent {
        return SuspendTransactionEvent.fromFields(SuspendTransactionEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): SuspendTransactionEvent {
        return SuspendTransactionEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
        });
    }

    static fromJSON(json: Record<string, any>): SuspendTransactionEvent {
        if (json.$typeName !== SuspendTransactionEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return SuspendTransactionEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): SuspendTransactionEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isSuspendTransactionEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a SuspendTransactionEvent object`);
        }
        return SuspendTransactionEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): SuspendTransactionEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isSuspendTransactionEvent(data.bcs.type)) {
                throw new Error(`object at is not a SuspendTransactionEvent object`);
            }

            return SuspendTransactionEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return SuspendTransactionEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<SuspendTransactionEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching SuspendTransactionEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isSuspendTransactionEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SuspendTransactionEvent object`);
        }

        return SuspendTransactionEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== UpgradeRegistryEvent =============================== */

export function isUpgradeRegistryEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::tds_registry_authorized_entry::UpgradeRegistryEvent`;
}

export interface UpgradeRegistryEventFields {
    signer: ToField<"address">;
    prevVersion: ToField<"u64">;
    version: ToField<"u64">;
}

export type UpgradeRegistryEventReified = Reified<UpgradeRegistryEvent, UpgradeRegistryEventFields>;

export class UpgradeRegistryEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::tds_registry_authorized_entry::UpgradeRegistryEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = UpgradeRegistryEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::tds_registry_authorized_entry::UpgradeRegistryEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = UpgradeRegistryEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly prevVersion: ToField<"u64">;
    readonly version: ToField<"u64">;

    private constructor(typeArgs: [], fields: UpgradeRegistryEventFields) {
        this.$fullTypeName = composeSuiType(
            UpgradeRegistryEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::tds_registry_authorized_entry::UpgradeRegistryEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.prevVersion = fields.prevVersion;
        this.version = fields.version;
    }

    static reified(): UpgradeRegistryEventReified {
        return {
            typeName: UpgradeRegistryEvent.$typeName,
            fullTypeName: composeSuiType(
                UpgradeRegistryEvent.$typeName,
                ...[]
            ) as `${typeof PKG_V1}::tds_registry_authorized_entry::UpgradeRegistryEvent`,
            typeArgs: [] as [],
            isPhantom: UpgradeRegistryEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => UpgradeRegistryEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => UpgradeRegistryEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => UpgradeRegistryEvent.fromBcs(data),
            bcs: UpgradeRegistryEvent.bcs,
            fromJSONField: (field: any) => UpgradeRegistryEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => UpgradeRegistryEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => UpgradeRegistryEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => UpgradeRegistryEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => UpgradeRegistryEvent.fetch(client, id),
            new: (fields: UpgradeRegistryEventFields) => {
                return new UpgradeRegistryEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return UpgradeRegistryEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<UpgradeRegistryEvent>> {
        return phantom(UpgradeRegistryEvent.reified());
    }
    static get p() {
        return UpgradeRegistryEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("UpgradeRegistryEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            prev_version: bcs.u64(),
            version: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): UpgradeRegistryEvent {
        return UpgradeRegistryEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            prevVersion: decodeFromFields("u64", fields.prev_version),
            version: decodeFromFields("u64", fields.version),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): UpgradeRegistryEvent {
        if (!isUpgradeRegistryEvent(item.type)) {
            throw new Error("not a UpgradeRegistryEvent type");
        }

        return UpgradeRegistryEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            prevVersion: decodeFromFieldsWithTypes("u64", item.fields.prev_version),
            version: decodeFromFieldsWithTypes("u64", item.fields.version),
        });
    }

    static fromBcs(data: Uint8Array): UpgradeRegistryEvent {
        return UpgradeRegistryEvent.fromFields(UpgradeRegistryEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            prevVersion: this.prevVersion.toString(),
            version: this.version.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): UpgradeRegistryEvent {
        return UpgradeRegistryEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            prevVersion: decodeFromJSONField("u64", field.prevVersion),
            version: decodeFromJSONField("u64", field.version),
        });
    }

    static fromJSON(json: Record<string, any>): UpgradeRegistryEvent {
        if (json.$typeName !== UpgradeRegistryEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return UpgradeRegistryEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): UpgradeRegistryEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUpgradeRegistryEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a UpgradeRegistryEvent object`);
        }
        return UpgradeRegistryEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): UpgradeRegistryEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isUpgradeRegistryEvent(data.bcs.type)) {
                throw new Error(`object at is not a UpgradeRegistryEvent object`);
            }

            return UpgradeRegistryEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return UpgradeRegistryEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<UpgradeRegistryEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching UpgradeRegistryEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isUpgradeRegistryEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UpgradeRegistryEvent object`);
        }

        return UpgradeRegistryEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== WithdrawIncentiveEvent =============================== */

export function isWithdrawIncentiveEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::tds_registry_authorized_entry::WithdrawIncentiveEvent`;
}

export interface WithdrawIncentiveEventFields {
    signer: ToField<"address">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
}

export type WithdrawIncentiveEventReified = Reified<WithdrawIncentiveEvent, WithdrawIncentiveEventFields>;

export class WithdrawIncentiveEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::tds_registry_authorized_entry::WithdrawIncentiveEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = WithdrawIncentiveEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::tds_registry_authorized_entry::WithdrawIncentiveEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = WithdrawIncentiveEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;

    private constructor(typeArgs: [], fields: WithdrawIncentiveEventFields) {
        this.$fullTypeName = composeSuiType(
            WithdrawIncentiveEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::tds_registry_authorized_entry::WithdrawIncentiveEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.token = fields.token;
        this.amount = fields.amount;
    }

    static reified(): WithdrawIncentiveEventReified {
        return {
            typeName: WithdrawIncentiveEvent.$typeName,
            fullTypeName: composeSuiType(
                WithdrawIncentiveEvent.$typeName,
                ...[]
            ) as `${typeof PKG_V1}::tds_registry_authorized_entry::WithdrawIncentiveEvent`,
            typeArgs: [] as [],
            isPhantom: WithdrawIncentiveEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => WithdrawIncentiveEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => WithdrawIncentiveEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => WithdrawIncentiveEvent.fromBcs(data),
            bcs: WithdrawIncentiveEvent.bcs,
            fromJSONField: (field: any) => WithdrawIncentiveEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => WithdrawIncentiveEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => WithdrawIncentiveEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => WithdrawIncentiveEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => WithdrawIncentiveEvent.fetch(client, id),
            new: (fields: WithdrawIncentiveEventFields) => {
                return new WithdrawIncentiveEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return WithdrawIncentiveEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<WithdrawIncentiveEvent>> {
        return phantom(WithdrawIncentiveEvent.reified());
    }
    static get p() {
        return WithdrawIncentiveEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("WithdrawIncentiveEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            token: TypeName.bcs,
            amount: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): WithdrawIncentiveEvent {
        return WithdrawIncentiveEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            token: decodeFromFields(TypeName.reified(), fields.token),
            amount: decodeFromFields("u64", fields.amount),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): WithdrawIncentiveEvent {
        if (!isWithdrawIncentiveEvent(item.type)) {
            throw new Error("not a WithdrawIncentiveEvent type");
        }

        return WithdrawIncentiveEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token),
            amount: decodeFromFieldsWithTypes("u64", item.fields.amount),
        });
    }

    static fromBcs(data: Uint8Array): WithdrawIncentiveEvent {
        return WithdrawIncentiveEvent.fromFields(WithdrawIncentiveEvent.bcs.parse(data));
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

    static fromJSONField(field: any): WithdrawIncentiveEvent {
        return WithdrawIncentiveEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            token: decodeFromJSONField(TypeName.reified(), field.token),
            amount: decodeFromJSONField("u64", field.amount),
        });
    }

    static fromJSON(json: Record<string, any>): WithdrawIncentiveEvent {
        if (json.$typeName !== WithdrawIncentiveEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return WithdrawIncentiveEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): WithdrawIncentiveEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isWithdrawIncentiveEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a WithdrawIncentiveEvent object`);
        }
        return WithdrawIncentiveEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): WithdrawIncentiveEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isWithdrawIncentiveEvent(data.bcs.type)) {
                throw new Error(`object at is not a WithdrawIncentiveEvent object`);
            }

            return WithdrawIncentiveEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return WithdrawIncentiveEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<WithdrawIncentiveEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching WithdrawIncentiveEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isWithdrawIncentiveEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a WithdrawIncentiveEvent object`);
        }

        return WithdrawIncentiveEvent.fromSuiObjectData(res.data);
    }
}
