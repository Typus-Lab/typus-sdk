import * as reified from "../../../../_framework/reified";
import {
    PhantomReified,
    Reified,
    StructClass,
    ToField,
    ToTypeStr,
    Vector,
    decodeFromFields,
    decodeFromFieldsWithTypes,
    decodeFromJSONField,
    fieldToJSON,
    phantom,
} from "../../../../_framework/reified";
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../../../_framework/util";
import { TypeName } from "../../0x1/type-name/structs";
import { Config, VaultConfig } from "../typus-dov-single/structs";
import { bcs, fromB64, fromHEX, toHEX } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";

/* ============================== AddPortfolioVaultAuthorizedUserEvent =============================== */

export function isAddPortfolioVaultAuthorizedUserEvent(type: string): boolean {
    type = compressSuiType(type);
    return (
        type ===
        "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::AddPortfolioVaultAuthorizedUserEvent"
    );
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
    static readonly $typeName =
        "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::AddPortfolioVaultAuthorizedUserEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = AddPortfolioVaultAuthorizedUserEvent.$typeName;

    readonly $fullTypeName: "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::AddPortfolioVaultAuthorizedUserEvent";

    readonly $typeArgs: [];

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly users: ToField<Vector<"address">>;

    private constructor(typeArgs: [], fields: AddPortfolioVaultAuthorizedUserEventFields) {
        this.$fullTypeName = composeSuiType(
            AddPortfolioVaultAuthorizedUserEvent.$typeName,
            ...typeArgs
        ) as "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::AddPortfolioVaultAuthorizedUserEvent";
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
            ) as "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::AddPortfolioVaultAuthorizedUserEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => AddPortfolioVaultAuthorizedUserEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => AddPortfolioVaultAuthorizedUserEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => AddPortfolioVaultAuthorizedUserEvent.fromBcs(data),
            bcs: AddPortfolioVaultAuthorizedUserEvent.bcs,
            fromJSONField: (field: any) => AddPortfolioVaultAuthorizedUserEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => AddPortfolioVaultAuthorizedUserEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => AddPortfolioVaultAuthorizedUserEvent.fromSuiParsedData(content),
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
            signer: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            index: bcs.u64(),
            users: bcs.vector(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) })),
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
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
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

    static async fetch(client: SuiClient, id: string): Promise<AddPortfolioVaultAuthorizedUserEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching AddPortfolioVaultAuthorizedUserEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isAddPortfolioVaultAuthorizedUserEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AddPortfolioVaultAuthorizedUserEvent object`);
        }
        return AddPortfolioVaultAuthorizedUserEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== CreateScallopSpoolAccount =============================== */

export function isCreateScallopSpoolAccount(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::CreateScallopSpoolAccount";
}

export interface CreateScallopSpoolAccountFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    spoolId: ToField<"address">;
    spoolAccountId: ToField<"address">;
}

export type CreateScallopSpoolAccountReified = Reified<CreateScallopSpoolAccount, CreateScallopSpoolAccountFields>;

export class CreateScallopSpoolAccount implements StructClass {
    static readonly $typeName =
        "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::CreateScallopSpoolAccount";
    static readonly $numTypeParams = 0;

    readonly $typeName = CreateScallopSpoolAccount.$typeName;

    readonly $fullTypeName: "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::CreateScallopSpoolAccount";

    readonly $typeArgs: [];

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly spoolId: ToField<"address">;
    readonly spoolAccountId: ToField<"address">;

    private constructor(typeArgs: [], fields: CreateScallopSpoolAccountFields) {
        this.$fullTypeName = composeSuiType(
            CreateScallopSpoolAccount.$typeName,
            ...typeArgs
        ) as "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::CreateScallopSpoolAccount";
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.spoolId = fields.spoolId;
        this.spoolAccountId = fields.spoolAccountId;
    }

    static reified(): CreateScallopSpoolAccountReified {
        return {
            typeName: CreateScallopSpoolAccount.$typeName,
            fullTypeName: composeSuiType(
                CreateScallopSpoolAccount.$typeName,
                ...[]
            ) as "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::CreateScallopSpoolAccount",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => CreateScallopSpoolAccount.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => CreateScallopSpoolAccount.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => CreateScallopSpoolAccount.fromBcs(data),
            bcs: CreateScallopSpoolAccount.bcs,
            fromJSONField: (field: any) => CreateScallopSpoolAccount.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => CreateScallopSpoolAccount.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => CreateScallopSpoolAccount.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => CreateScallopSpoolAccount.fetch(client, id),
            new: (fields: CreateScallopSpoolAccountFields) => {
                return new CreateScallopSpoolAccount([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return CreateScallopSpoolAccount.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<CreateScallopSpoolAccount>> {
        return phantom(CreateScallopSpoolAccount.reified());
    }
    static get p() {
        return CreateScallopSpoolAccount.phantom();
    }

    static get bcs() {
        return bcs.struct("CreateScallopSpoolAccount", {
            signer: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            index: bcs.u64(),
            spool_id: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            spool_account_id: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
        });
    }

    static fromFields(fields: Record<string, any>): CreateScallopSpoolAccount {
        return CreateScallopSpoolAccount.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            spoolId: decodeFromFields("address", fields.spool_id),
            spoolAccountId: decodeFromFields("address", fields.spool_account_id),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): CreateScallopSpoolAccount {
        if (!isCreateScallopSpoolAccount(item.type)) {
            throw new Error("not a CreateScallopSpoolAccount type");
        }

        return CreateScallopSpoolAccount.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            spoolId: decodeFromFieldsWithTypes("address", item.fields.spool_id),
            spoolAccountId: decodeFromFieldsWithTypes("address", item.fields.spool_account_id),
        });
    }

    static fromBcs(data: Uint8Array): CreateScallopSpoolAccount {
        return CreateScallopSpoolAccount.fromFields(CreateScallopSpoolAccount.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            spoolId: this.spoolId,
            spoolAccountId: this.spoolAccountId,
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): CreateScallopSpoolAccount {
        return CreateScallopSpoolAccount.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            spoolId: decodeFromJSONField("address", field.spoolId),
            spoolAccountId: decodeFromJSONField("address", field.spoolAccountId),
        });
    }

    static fromJSON(json: Record<string, any>): CreateScallopSpoolAccount {
        if (json.$typeName !== CreateScallopSpoolAccount.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return CreateScallopSpoolAccount.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): CreateScallopSpoolAccount {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isCreateScallopSpoolAccount(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a CreateScallopSpoolAccount object`);
        }
        return CreateScallopSpoolAccount.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<CreateScallopSpoolAccount> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching CreateScallopSpoolAccount object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isCreateScallopSpoolAccount(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a CreateScallopSpoolAccount object`);
        }
        return CreateScallopSpoolAccount.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== DepositScallop =============================== */

export function isDepositScallop(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::DepositScallop";
}

export interface DepositScallopFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type DepositScallopReified = Reified<DepositScallop, DepositScallopFields>;

export class DepositScallop implements StructClass {
    static readonly $typeName = "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::DepositScallop";
    static readonly $numTypeParams = 0;

    readonly $typeName = DepositScallop.$typeName;

    readonly $fullTypeName: "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::DepositScallop";

    readonly $typeArgs: [];

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: DepositScallopFields) {
        this.$fullTypeName = composeSuiType(
            DepositScallop.$typeName,
            ...typeArgs
        ) as "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::DepositScallop";
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): DepositScallopReified {
        return {
            typeName: DepositScallop.$typeName,
            fullTypeName: composeSuiType(
                DepositScallop.$typeName,
                ...[]
            ) as "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::DepositScallop",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => DepositScallop.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => DepositScallop.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => DepositScallop.fromBcs(data),
            bcs: DepositScallop.bcs,
            fromJSONField: (field: any) => DepositScallop.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => DepositScallop.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => DepositScallop.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => DepositScallop.fetch(client, id),
            new: (fields: DepositScallopFields) => {
                return new DepositScallop([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return DepositScallop.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<DepositScallop>> {
        return phantom(DepositScallop.reified());
    }
    static get p() {
        return DepositScallop.phantom();
    }

    static get bcs() {
        return bcs.struct("DepositScallop", {
            signer: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            index: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): DepositScallop {
        return DepositScallop.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): DepositScallop {
        if (!isDepositScallop(item.type)) {
            throw new Error("not a DepositScallop type");
        }

        return DepositScallop.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): DepositScallop {
        return DepositScallop.fromFields(DepositScallop.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): DepositScallop {
        return DepositScallop.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): DepositScallop {
        if (json.$typeName !== DepositScallop.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return DepositScallop.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): DepositScallop {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isDepositScallop(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a DepositScallop object`);
        }
        return DepositScallop.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<DepositScallop> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching DepositScallop object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isDepositScallop(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DepositScallop object`);
        }
        return DepositScallop.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== DisableScallop =============================== */

export function isDisableScallop(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::DisableScallop";
}

export interface DisableScallopFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
}

export type DisableScallopReified = Reified<DisableScallop, DisableScallopFields>;

export class DisableScallop implements StructClass {
    static readonly $typeName = "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::DisableScallop";
    static readonly $numTypeParams = 0;

    readonly $typeName = DisableScallop.$typeName;

    readonly $fullTypeName: "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::DisableScallop";

    readonly $typeArgs: [];

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;

    private constructor(typeArgs: [], fields: DisableScallopFields) {
        this.$fullTypeName = composeSuiType(
            DisableScallop.$typeName,
            ...typeArgs
        ) as "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::DisableScallop";
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
    }

    static reified(): DisableScallopReified {
        return {
            typeName: DisableScallop.$typeName,
            fullTypeName: composeSuiType(
                DisableScallop.$typeName,
                ...[]
            ) as "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::DisableScallop",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => DisableScallop.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => DisableScallop.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => DisableScallop.fromBcs(data),
            bcs: DisableScallop.bcs,
            fromJSONField: (field: any) => DisableScallop.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => DisableScallop.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => DisableScallop.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => DisableScallop.fetch(client, id),
            new: (fields: DisableScallopFields) => {
                return new DisableScallop([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return DisableScallop.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<DisableScallop>> {
        return phantom(DisableScallop.reified());
    }
    static get p() {
        return DisableScallop.phantom();
    }

    static get bcs() {
        return bcs.struct("DisableScallop", {
            signer: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            index: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): DisableScallop {
        return DisableScallop.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): DisableScallop {
        if (!isDisableScallop(item.type)) {
            throw new Error("not a DisableScallop type");
        }

        return DisableScallop.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
        });
    }

    static fromBcs(data: Uint8Array): DisableScallop {
        return DisableScallop.fromFields(DisableScallop.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): DisableScallop {
        return DisableScallop.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
        });
    }

    static fromJSON(json: Record<string, any>): DisableScallop {
        if (json.$typeName !== DisableScallop.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return DisableScallop.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): DisableScallop {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isDisableScallop(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a DisableScallop object`);
        }
        return DisableScallop.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<DisableScallop> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching DisableScallop object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isDisableScallop(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DisableScallop object`);
        }
        return DisableScallop.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== EnableScallop =============================== */

export function isEnableScallop(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::EnableScallop";
}

export interface EnableScallopFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
}

export type EnableScallopReified = Reified<EnableScallop, EnableScallopFields>;

export class EnableScallop implements StructClass {
    static readonly $typeName = "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::EnableScallop";
    static readonly $numTypeParams = 0;

    readonly $typeName = EnableScallop.$typeName;

    readonly $fullTypeName: "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::EnableScallop";

    readonly $typeArgs: [];

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;

    private constructor(typeArgs: [], fields: EnableScallopFields) {
        this.$fullTypeName = composeSuiType(
            EnableScallop.$typeName,
            ...typeArgs
        ) as "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::EnableScallop";
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
    }

    static reified(): EnableScallopReified {
        return {
            typeName: EnableScallop.$typeName,
            fullTypeName: composeSuiType(
                EnableScallop.$typeName,
                ...[]
            ) as "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::EnableScallop",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => EnableScallop.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => EnableScallop.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => EnableScallop.fromBcs(data),
            bcs: EnableScallop.bcs,
            fromJSONField: (field: any) => EnableScallop.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => EnableScallop.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => EnableScallop.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => EnableScallop.fetch(client, id),
            new: (fields: EnableScallopFields) => {
                return new EnableScallop([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return EnableScallop.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<EnableScallop>> {
        return phantom(EnableScallop.reified());
    }
    static get p() {
        return EnableScallop.phantom();
    }

    static get bcs() {
        return bcs.struct("EnableScallop", {
            signer: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            index: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): EnableScallop {
        return EnableScallop.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): EnableScallop {
        if (!isEnableScallop(item.type)) {
            throw new Error("not a EnableScallop type");
        }

        return EnableScallop.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
        });
    }

    static fromBcs(data: Uint8Array): EnableScallop {
        return EnableScallop.fromFields(EnableScallop.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): EnableScallop {
        return EnableScallop.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
        });
    }

    static fromJSON(json: Record<string, any>): EnableScallop {
        if (json.$typeName !== EnableScallop.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return EnableScallop.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): EnableScallop {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isEnableScallop(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a EnableScallop object`);
        }
        return EnableScallop.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<EnableScallop> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching EnableScallop object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isEnableScallop(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a EnableScallop object`);
        }
        return EnableScallop.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== FixedIncentiviseEvent =============================== */

export function isFixedIncentiviseEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::FixedIncentiviseEvent";
}

export interface FixedIncentiviseEventFields {
    signer: ToField<"address">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
    fixedIncentiveAmount: ToField<"u64">;
}

export type FixedIncentiviseEventReified = Reified<FixedIncentiviseEvent, FixedIncentiviseEventFields>;

export class FixedIncentiviseEvent implements StructClass {
    static readonly $typeName =
        "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::FixedIncentiviseEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = FixedIncentiviseEvent.$typeName;

    readonly $fullTypeName: "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::FixedIncentiviseEvent";

    readonly $typeArgs: [];

    readonly signer: ToField<"address">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;
    readonly fixedIncentiveAmount: ToField<"u64">;

    private constructor(typeArgs: [], fields: FixedIncentiviseEventFields) {
        this.$fullTypeName = composeSuiType(
            FixedIncentiviseEvent.$typeName,
            ...typeArgs
        ) as "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::FixedIncentiviseEvent";
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
            ) as "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::FixedIncentiviseEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => FixedIncentiviseEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => FixedIncentiviseEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => FixedIncentiviseEvent.fromBcs(data),
            bcs: FixedIncentiviseEvent.bcs,
            fromJSONField: (field: any) => FixedIncentiviseEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => FixedIncentiviseEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => FixedIncentiviseEvent.fromSuiParsedData(content),
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
            signer: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
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
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
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

    static async fetch(client: SuiClient, id: string): Promise<FixedIncentiviseEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching FixedIncentiviseEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isFixedIncentiviseEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a FixedIncentiviseEvent object`);
        }
        return FixedIncentiviseEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== RemovePortfolioVaultAuthorizedUserEvent =============================== */

export function isRemovePortfolioVaultAuthorizedUserEvent(type: string): boolean {
    type = compressSuiType(type);
    return (
        type ===
        "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::RemovePortfolioVaultAuthorizedUserEvent"
    );
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
    static readonly $typeName =
        "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::RemovePortfolioVaultAuthorizedUserEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = RemovePortfolioVaultAuthorizedUserEvent.$typeName;

    readonly $fullTypeName: "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::RemovePortfolioVaultAuthorizedUserEvent";

    readonly $typeArgs: [];

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly users: ToField<Vector<"address">>;

    private constructor(typeArgs: [], fields: RemovePortfolioVaultAuthorizedUserEventFields) {
        this.$fullTypeName = composeSuiType(
            RemovePortfolioVaultAuthorizedUserEvent.$typeName,
            ...typeArgs
        ) as "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::RemovePortfolioVaultAuthorizedUserEvent";
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
            ) as "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::RemovePortfolioVaultAuthorizedUserEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => RemovePortfolioVaultAuthorizedUserEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => RemovePortfolioVaultAuthorizedUserEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => RemovePortfolioVaultAuthorizedUserEvent.fromBcs(data),
            bcs: RemovePortfolioVaultAuthorizedUserEvent.bcs,
            fromJSONField: (field: any) => RemovePortfolioVaultAuthorizedUserEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => RemovePortfolioVaultAuthorizedUserEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => RemovePortfolioVaultAuthorizedUserEvent.fromSuiParsedData(content),
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
            signer: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            index: bcs.u64(),
            users: bcs.vector(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) })),
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
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
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

    static async fetch(client: SuiClient, id: string): Promise<RemovePortfolioVaultAuthorizedUserEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching RemovePortfolioVaultAuthorizedUserEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isRemovePortfolioVaultAuthorizedUserEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RemovePortfolioVaultAuthorizedUserEvent object`);
        }
        return RemovePortfolioVaultAuthorizedUserEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== UpdateActiveVaultConfigEvent =============================== */

export function isUpdateActiveVaultConfigEvent(type: string): boolean {
    type = compressSuiType(type);
    return (
        type === "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::UpdateActiveVaultConfigEvent"
    );
}

export interface UpdateActiveVaultConfigEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    previous: ToField<VaultConfig>;
    current: ToField<VaultConfig>;
}

export type UpdateActiveVaultConfigEventReified = Reified<UpdateActiveVaultConfigEvent, UpdateActiveVaultConfigEventFields>;

export class UpdateActiveVaultConfigEvent implements StructClass {
    static readonly $typeName =
        "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::UpdateActiveVaultConfigEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = UpdateActiveVaultConfigEvent.$typeName;

    readonly $fullTypeName: "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::UpdateActiveVaultConfigEvent";

    readonly $typeArgs: [];

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly previous: ToField<VaultConfig>;
    readonly current: ToField<VaultConfig>;

    private constructor(typeArgs: [], fields: UpdateActiveVaultConfigEventFields) {
        this.$fullTypeName = composeSuiType(
            UpdateActiveVaultConfigEvent.$typeName,
            ...typeArgs
        ) as "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::UpdateActiveVaultConfigEvent";
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
            ) as "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::UpdateActiveVaultConfigEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => UpdateActiveVaultConfigEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => UpdateActiveVaultConfigEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => UpdateActiveVaultConfigEvent.fromBcs(data),
            bcs: UpdateActiveVaultConfigEvent.bcs,
            fromJSONField: (field: any) => UpdateActiveVaultConfigEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => UpdateActiveVaultConfigEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => UpdateActiveVaultConfigEvent.fromSuiParsedData(content),
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
            signer: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
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
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
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

    static async fetch(client: SuiClient, id: string): Promise<UpdateActiveVaultConfigEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching UpdateActiveVaultConfigEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isUpdateActiveVaultConfigEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UpdateActiveVaultConfigEvent object`);
        }
        return UpdateActiveVaultConfigEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== UpdateAuctionConfigEvent =============================== */

export function isUpdateAuctionConfigEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::UpdateAuctionConfigEvent";
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
    static readonly $typeName =
        "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::UpdateAuctionConfigEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = UpdateAuctionConfigEvent.$typeName;

    readonly $fullTypeName: "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::UpdateAuctionConfigEvent";

    readonly $typeArgs: [];

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
        ) as "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::UpdateAuctionConfigEvent";
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
            ) as "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::UpdateAuctionConfigEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => UpdateAuctionConfigEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => UpdateAuctionConfigEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => UpdateAuctionConfigEvent.fromBcs(data),
            bcs: UpdateAuctionConfigEvent.bcs,
            fromJSONField: (field: any) => UpdateAuctionConfigEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => UpdateAuctionConfigEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => UpdateAuctionConfigEvent.fromSuiParsedData(content),
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
            signer: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
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
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
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

    static async fetch(client: SuiClient, id: string): Promise<UpdateAuctionConfigEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching UpdateAuctionConfigEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isUpdateAuctionConfigEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UpdateAuctionConfigEvent object`);
        }
        return UpdateAuctionConfigEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== UpdateConfigEvent =============================== */

export function isUpdateConfigEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::UpdateConfigEvent";
}

export interface UpdateConfigEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    previous: ToField<Config>;
    current: ToField<Config>;
}

export type UpdateConfigEventReified = Reified<UpdateConfigEvent, UpdateConfigEventFields>;

export class UpdateConfigEvent implements StructClass {
    static readonly $typeName =
        "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::UpdateConfigEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = UpdateConfigEvent.$typeName;

    readonly $fullTypeName: "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::UpdateConfigEvent";

    readonly $typeArgs: [];

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly previous: ToField<Config>;
    readonly current: ToField<Config>;

    private constructor(typeArgs: [], fields: UpdateConfigEventFields) {
        this.$fullTypeName = composeSuiType(
            UpdateConfigEvent.$typeName,
            ...typeArgs
        ) as "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::UpdateConfigEvent";
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.previous = fields.previous;
        this.current = fields.current;
    }

    static reified(): UpdateConfigEventReified {
        return {
            typeName: UpdateConfigEvent.$typeName,
            fullTypeName: composeSuiType(
                UpdateConfigEvent.$typeName,
                ...[]
            ) as "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::UpdateConfigEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => UpdateConfigEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => UpdateConfigEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => UpdateConfigEvent.fromBcs(data),
            bcs: UpdateConfigEvent.bcs,
            fromJSONField: (field: any) => UpdateConfigEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => UpdateConfigEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => UpdateConfigEvent.fromSuiParsedData(content),
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
            signer: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
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
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
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

    static async fetch(client: SuiClient, id: string): Promise<UpdateConfigEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching UpdateConfigEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isUpdateConfigEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UpdateConfigEvent object`);
        }
        return UpdateConfigEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== UpdateStrikeEvent =============================== */

export function isUpdateStrikeEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::UpdateStrikeEvent";
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
    static readonly $typeName =
        "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::UpdateStrikeEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = UpdateStrikeEvent.$typeName;

    readonly $fullTypeName: "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::UpdateStrikeEvent";

    readonly $typeArgs: [];

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly oraclePrice: ToField<"u64">;
    readonly oraclePriceDecimal: ToField<"u64">;
    readonly vaultConfig: ToField<VaultConfig>;

    private constructor(typeArgs: [], fields: UpdateStrikeEventFields) {
        this.$fullTypeName = composeSuiType(
            UpdateStrikeEvent.$typeName,
            ...typeArgs
        ) as "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::UpdateStrikeEvent";
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
            fullTypeName: composeSuiType(
                UpdateStrikeEvent.$typeName,
                ...[]
            ) as "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::UpdateStrikeEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => UpdateStrikeEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => UpdateStrikeEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => UpdateStrikeEvent.fromBcs(data),
            bcs: UpdateStrikeEvent.bcs,
            fromJSONField: (field: any) => UpdateStrikeEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => UpdateStrikeEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => UpdateStrikeEvent.fromSuiParsedData(content),
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
            signer: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
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
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
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

    static async fetch(client: SuiClient, id: string): Promise<UpdateStrikeEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching UpdateStrikeEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isUpdateStrikeEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UpdateStrikeEvent object`);
        }
        return UpdateStrikeEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== UpdateWarmupVaultConfigEvent =============================== */

export function isUpdateWarmupVaultConfigEvent(type: string): boolean {
    type = compressSuiType(type);
    return (
        type === "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::UpdateWarmupVaultConfigEvent"
    );
}

export interface UpdateWarmupVaultConfigEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    previous: ToField<VaultConfig>;
    current: ToField<VaultConfig>;
}

export type UpdateWarmupVaultConfigEventReified = Reified<UpdateWarmupVaultConfigEvent, UpdateWarmupVaultConfigEventFields>;

export class UpdateWarmupVaultConfigEvent implements StructClass {
    static readonly $typeName =
        "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::UpdateWarmupVaultConfigEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = UpdateWarmupVaultConfigEvent.$typeName;

    readonly $fullTypeName: "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::UpdateWarmupVaultConfigEvent";

    readonly $typeArgs: [];

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly previous: ToField<VaultConfig>;
    readonly current: ToField<VaultConfig>;

    private constructor(typeArgs: [], fields: UpdateWarmupVaultConfigEventFields) {
        this.$fullTypeName = composeSuiType(
            UpdateWarmupVaultConfigEvent.$typeName,
            ...typeArgs
        ) as "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::UpdateWarmupVaultConfigEvent";
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
            ) as "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::UpdateWarmupVaultConfigEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => UpdateWarmupVaultConfigEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => UpdateWarmupVaultConfigEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => UpdateWarmupVaultConfigEvent.fromBcs(data),
            bcs: UpdateWarmupVaultConfigEvent.bcs,
            fromJSONField: (field: any) => UpdateWarmupVaultConfigEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => UpdateWarmupVaultConfigEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => UpdateWarmupVaultConfigEvent.fromSuiParsedData(content),
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
            signer: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
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
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
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

    static async fetch(client: SuiClient, id: string): Promise<UpdateWarmupVaultConfigEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching UpdateWarmupVaultConfigEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isUpdateWarmupVaultConfigEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UpdateWarmupVaultConfigEvent object`);
        }
        return UpdateWarmupVaultConfigEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== WithdrawFixedIncentiveEvent =============================== */

export function isWithdrawFixedIncentiveEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::WithdrawFixedIncentiveEvent";
}

export interface WithdrawFixedIncentiveEventFields {
    signer: ToField<"address">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
}

export type WithdrawFixedIncentiveEventReified = Reified<WithdrawFixedIncentiveEvent, WithdrawFixedIncentiveEventFields>;

export class WithdrawFixedIncentiveEvent implements StructClass {
    static readonly $typeName =
        "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::WithdrawFixedIncentiveEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = WithdrawFixedIncentiveEvent.$typeName;

    readonly $fullTypeName: "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::WithdrawFixedIncentiveEvent";

    readonly $typeArgs: [];

    readonly signer: ToField<"address">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;

    private constructor(typeArgs: [], fields: WithdrawFixedIncentiveEventFields) {
        this.$fullTypeName = composeSuiType(
            WithdrawFixedIncentiveEvent.$typeName,
            ...typeArgs
        ) as "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::WithdrawFixedIncentiveEvent";
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
            ) as "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::WithdrawFixedIncentiveEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => WithdrawFixedIncentiveEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => WithdrawFixedIncentiveEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => WithdrawFixedIncentiveEvent.fromBcs(data),
            bcs: WithdrawFixedIncentiveEvent.bcs,
            fromJSONField: (field: any) => WithdrawFixedIncentiveEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => WithdrawFixedIncentiveEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => WithdrawFixedIncentiveEvent.fromSuiParsedData(content),
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
            signer: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
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
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
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

    static async fetch(client: SuiClient, id: string): Promise<WithdrawFixedIncentiveEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching WithdrawFixedIncentiveEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isWithdrawFixedIncentiveEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a WithdrawFixedIncentiveEvent object`);
        }
        return WithdrawFixedIncentiveEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== WithdrawScallop =============================== */

export function isWithdrawScallop(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::WithdrawScallop";
}

export interface WithdrawScallopFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type WithdrawScallopReified = Reified<WithdrawScallop, WithdrawScallopFields>;

export class WithdrawScallop implements StructClass {
    static readonly $typeName = "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::WithdrawScallop";
    static readonly $numTypeParams = 0;

    readonly $typeName = WithdrawScallop.$typeName;

    readonly $fullTypeName: "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::WithdrawScallop";

    readonly $typeArgs: [];

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: WithdrawScallopFields) {
        this.$fullTypeName = composeSuiType(
            WithdrawScallop.$typeName,
            ...typeArgs
        ) as "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::WithdrawScallop";
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): WithdrawScallopReified {
        return {
            typeName: WithdrawScallop.$typeName,
            fullTypeName: composeSuiType(
                WithdrawScallop.$typeName,
                ...[]
            ) as "0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455::tds_authorized_entry::WithdrawScallop",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => WithdrawScallop.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => WithdrawScallop.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => WithdrawScallop.fromBcs(data),
            bcs: WithdrawScallop.bcs,
            fromJSONField: (field: any) => WithdrawScallop.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => WithdrawScallop.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => WithdrawScallop.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => WithdrawScallop.fetch(client, id),
            new: (fields: WithdrawScallopFields) => {
                return new WithdrawScallop([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return WithdrawScallop.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<WithdrawScallop>> {
        return phantom(WithdrawScallop.reified());
    }
    static get p() {
        return WithdrawScallop.phantom();
    }

    static get bcs() {
        return bcs.struct("WithdrawScallop", {
            signer: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            index: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): WithdrawScallop {
        return WithdrawScallop.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): WithdrawScallop {
        if (!isWithdrawScallop(item.type)) {
            throw new Error("not a WithdrawScallop type");
        }

        return WithdrawScallop.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): WithdrawScallop {
        return WithdrawScallop.fromFields(WithdrawScallop.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): WithdrawScallop {
        return WithdrawScallop.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): WithdrawScallop {
        if (json.$typeName !== WithdrawScallop.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return WithdrawScallop.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): WithdrawScallop {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isWithdrawScallop(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a WithdrawScallop object`);
        }
        return WithdrawScallop.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<WithdrawScallop> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching WithdrawScallop object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isWithdrawScallop(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a WithdrawScallop object`);
        }
        return WithdrawScallop.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}
