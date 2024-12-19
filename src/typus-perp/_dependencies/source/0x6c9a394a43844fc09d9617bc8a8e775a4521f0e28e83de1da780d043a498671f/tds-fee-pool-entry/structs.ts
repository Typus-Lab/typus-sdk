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
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromB64, fromHEX, toHEX } from "@mysten/sui/utils";

/* ============================== SendFeeEvent =============================== */

export function isSendFeeEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::tds_fee_pool_entry::SendFeeEvent`;
}

export interface SendFeeEventFields {
    signer: ToField<"address">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
    recipient: ToField<"address">;
}

export type SendFeeEventReified = Reified<SendFeeEvent, SendFeeEventFields>;

export class SendFeeEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::tds_fee_pool_entry::SendFeeEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = SendFeeEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::tds_fee_pool_entry::SendFeeEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = SendFeeEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;
    readonly recipient: ToField<"address">;

    private constructor(typeArgs: [], fields: SendFeeEventFields) {
        this.$fullTypeName = composeSuiType(SendFeeEvent.$typeName, ...typeArgs) as `${typeof PKG_V1}::tds_fee_pool_entry::SendFeeEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.token = fields.token;
        this.amount = fields.amount;
        this.recipient = fields.recipient;
    }

    static reified(): SendFeeEventReified {
        return {
            typeName: SendFeeEvent.$typeName,
            fullTypeName: composeSuiType(SendFeeEvent.$typeName, ...[]) as `${typeof PKG_V1}::tds_fee_pool_entry::SendFeeEvent`,
            typeArgs: [] as [],
            isPhantom: SendFeeEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => SendFeeEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => SendFeeEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => SendFeeEvent.fromBcs(data),
            bcs: SendFeeEvent.bcs,
            fromJSONField: (field: any) => SendFeeEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => SendFeeEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => SendFeeEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => SendFeeEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => SendFeeEvent.fetch(client, id),
            new: (fields: SendFeeEventFields) => {
                return new SendFeeEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return SendFeeEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<SendFeeEvent>> {
        return phantom(SendFeeEvent.reified());
    }
    static get p() {
        return SendFeeEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("SendFeeEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            token: TypeName.bcs,
            amount: bcs.u64(),
            recipient: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        });
    }

    static fromFields(fields: Record<string, any>): SendFeeEvent {
        return SendFeeEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            token: decodeFromFields(TypeName.reified(), fields.token),
            amount: decodeFromFields("u64", fields.amount),
            recipient: decodeFromFields("address", fields.recipient),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): SendFeeEvent {
        if (!isSendFeeEvent(item.type)) {
            throw new Error("not a SendFeeEvent type");
        }

        return SendFeeEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token),
            amount: decodeFromFieldsWithTypes("u64", item.fields.amount),
            recipient: decodeFromFieldsWithTypes("address", item.fields.recipient),
        });
    }

    static fromBcs(data: Uint8Array): SendFeeEvent {
        return SendFeeEvent.fromFields(SendFeeEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            token: this.token.toJSONField(),
            amount: this.amount.toString(),
            recipient: this.recipient,
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): SendFeeEvent {
        return SendFeeEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            token: decodeFromJSONField(TypeName.reified(), field.token),
            amount: decodeFromJSONField("u64", field.amount),
            recipient: decodeFromJSONField("address", field.recipient),
        });
    }

    static fromJSON(json: Record<string, any>): SendFeeEvent {
        if (json.$typeName !== SendFeeEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return SendFeeEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): SendFeeEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isSendFeeEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a SendFeeEvent object`);
        }
        return SendFeeEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): SendFeeEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isSendFeeEvent(data.bcs.type)) {
                throw new Error(`object at is not a SendFeeEvent object`);
            }

            return SendFeeEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return SendFeeEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<SendFeeEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching SendFeeEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isSendFeeEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SendFeeEvent object`);
        }

        return SendFeeEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== AddFeePoolAuthorizedUserEvent =============================== */

export function isAddFeePoolAuthorizedUserEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::tds_fee_pool_entry::AddFeePoolAuthorizedUserEvent`;
}

export interface AddFeePoolAuthorizedUserEventFields {
    signer: ToField<"address">;
    users: ToField<Vector<"address">>;
}

export type AddFeePoolAuthorizedUserEventReified = Reified<AddFeePoolAuthorizedUserEvent, AddFeePoolAuthorizedUserEventFields>;

export class AddFeePoolAuthorizedUserEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::tds_fee_pool_entry::AddFeePoolAuthorizedUserEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = AddFeePoolAuthorizedUserEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::tds_fee_pool_entry::AddFeePoolAuthorizedUserEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = AddFeePoolAuthorizedUserEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly users: ToField<Vector<"address">>;

    private constructor(typeArgs: [], fields: AddFeePoolAuthorizedUserEventFields) {
        this.$fullTypeName = composeSuiType(
            AddFeePoolAuthorizedUserEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::tds_fee_pool_entry::AddFeePoolAuthorizedUserEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.users = fields.users;
    }

    static reified(): AddFeePoolAuthorizedUserEventReified {
        return {
            typeName: AddFeePoolAuthorizedUserEvent.$typeName,
            fullTypeName: composeSuiType(
                AddFeePoolAuthorizedUserEvent.$typeName,
                ...[]
            ) as `${typeof PKG_V1}::tds_fee_pool_entry::AddFeePoolAuthorizedUserEvent`,
            typeArgs: [] as [],
            isPhantom: AddFeePoolAuthorizedUserEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => AddFeePoolAuthorizedUserEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => AddFeePoolAuthorizedUserEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => AddFeePoolAuthorizedUserEvent.fromBcs(data),
            bcs: AddFeePoolAuthorizedUserEvent.bcs,
            fromJSONField: (field: any) => AddFeePoolAuthorizedUserEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => AddFeePoolAuthorizedUserEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => AddFeePoolAuthorizedUserEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => AddFeePoolAuthorizedUserEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => AddFeePoolAuthorizedUserEvent.fetch(client, id),
            new: (fields: AddFeePoolAuthorizedUserEventFields) => {
                return new AddFeePoolAuthorizedUserEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return AddFeePoolAuthorizedUserEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<AddFeePoolAuthorizedUserEvent>> {
        return phantom(AddFeePoolAuthorizedUserEvent.reified());
    }
    static get p() {
        return AddFeePoolAuthorizedUserEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("AddFeePoolAuthorizedUserEvent", {
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

    static fromFields(fields: Record<string, any>): AddFeePoolAuthorizedUserEvent {
        return AddFeePoolAuthorizedUserEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            users: decodeFromFields(reified.vector("address"), fields.users),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): AddFeePoolAuthorizedUserEvent {
        if (!isAddFeePoolAuthorizedUserEvent(item.type)) {
            throw new Error("not a AddFeePoolAuthorizedUserEvent type");
        }

        return AddFeePoolAuthorizedUserEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            users: decodeFromFieldsWithTypes(reified.vector("address"), item.fields.users),
        });
    }

    static fromBcs(data: Uint8Array): AddFeePoolAuthorizedUserEvent {
        return AddFeePoolAuthorizedUserEvent.fromFields(AddFeePoolAuthorizedUserEvent.bcs.parse(data));
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

    static fromJSONField(field: any): AddFeePoolAuthorizedUserEvent {
        return AddFeePoolAuthorizedUserEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            users: decodeFromJSONField(reified.vector("address"), field.users),
        });
    }

    static fromJSON(json: Record<string, any>): AddFeePoolAuthorizedUserEvent {
        if (json.$typeName !== AddFeePoolAuthorizedUserEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return AddFeePoolAuthorizedUserEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): AddFeePoolAuthorizedUserEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isAddFeePoolAuthorizedUserEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a AddFeePoolAuthorizedUserEvent object`);
        }
        return AddFeePoolAuthorizedUserEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): AddFeePoolAuthorizedUserEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isAddFeePoolAuthorizedUserEvent(data.bcs.type)) {
                throw new Error(`object at is not a AddFeePoolAuthorizedUserEvent object`);
            }

            return AddFeePoolAuthorizedUserEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return AddFeePoolAuthorizedUserEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<AddFeePoolAuthorizedUserEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching AddFeePoolAuthorizedUserEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isAddFeePoolAuthorizedUserEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AddFeePoolAuthorizedUserEvent object`);
        }

        return AddFeePoolAuthorizedUserEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== AddSharedFeePoolAuthorizedUserEvent =============================== */

export function isAddSharedFeePoolAuthorizedUserEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::tds_fee_pool_entry::AddSharedFeePoolAuthorizedUserEvent`;
}

export interface AddSharedFeePoolAuthorizedUserEventFields {
    signer: ToField<"address">;
    users: ToField<Vector<"address">>;
}

export type AddSharedFeePoolAuthorizedUserEventReified = Reified<
    AddSharedFeePoolAuthorizedUserEvent,
    AddSharedFeePoolAuthorizedUserEventFields
>;

export class AddSharedFeePoolAuthorizedUserEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::tds_fee_pool_entry::AddSharedFeePoolAuthorizedUserEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = AddSharedFeePoolAuthorizedUserEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::tds_fee_pool_entry::AddSharedFeePoolAuthorizedUserEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = AddSharedFeePoolAuthorizedUserEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly users: ToField<Vector<"address">>;

    private constructor(typeArgs: [], fields: AddSharedFeePoolAuthorizedUserEventFields) {
        this.$fullTypeName = composeSuiType(
            AddSharedFeePoolAuthorizedUserEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::tds_fee_pool_entry::AddSharedFeePoolAuthorizedUserEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.users = fields.users;
    }

    static reified(): AddSharedFeePoolAuthorizedUserEventReified {
        return {
            typeName: AddSharedFeePoolAuthorizedUserEvent.$typeName,
            fullTypeName: composeSuiType(
                AddSharedFeePoolAuthorizedUserEvent.$typeName,
                ...[]
            ) as `${typeof PKG_V1}::tds_fee_pool_entry::AddSharedFeePoolAuthorizedUserEvent`,
            typeArgs: [] as [],
            isPhantom: AddSharedFeePoolAuthorizedUserEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => AddSharedFeePoolAuthorizedUserEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => AddSharedFeePoolAuthorizedUserEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => AddSharedFeePoolAuthorizedUserEvent.fromBcs(data),
            bcs: AddSharedFeePoolAuthorizedUserEvent.bcs,
            fromJSONField: (field: any) => AddSharedFeePoolAuthorizedUserEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => AddSharedFeePoolAuthorizedUserEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => AddSharedFeePoolAuthorizedUserEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => AddSharedFeePoolAuthorizedUserEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => AddSharedFeePoolAuthorizedUserEvent.fetch(client, id),
            new: (fields: AddSharedFeePoolAuthorizedUserEventFields) => {
                return new AddSharedFeePoolAuthorizedUserEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return AddSharedFeePoolAuthorizedUserEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<AddSharedFeePoolAuthorizedUserEvent>> {
        return phantom(AddSharedFeePoolAuthorizedUserEvent.reified());
    }
    static get p() {
        return AddSharedFeePoolAuthorizedUserEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("AddSharedFeePoolAuthorizedUserEvent", {
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

    static fromFields(fields: Record<string, any>): AddSharedFeePoolAuthorizedUserEvent {
        return AddSharedFeePoolAuthorizedUserEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            users: decodeFromFields(reified.vector("address"), fields.users),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): AddSharedFeePoolAuthorizedUserEvent {
        if (!isAddSharedFeePoolAuthorizedUserEvent(item.type)) {
            throw new Error("not a AddSharedFeePoolAuthorizedUserEvent type");
        }

        return AddSharedFeePoolAuthorizedUserEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            users: decodeFromFieldsWithTypes(reified.vector("address"), item.fields.users),
        });
    }

    static fromBcs(data: Uint8Array): AddSharedFeePoolAuthorizedUserEvent {
        return AddSharedFeePoolAuthorizedUserEvent.fromFields(AddSharedFeePoolAuthorizedUserEvent.bcs.parse(data));
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

    static fromJSONField(field: any): AddSharedFeePoolAuthorizedUserEvent {
        return AddSharedFeePoolAuthorizedUserEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            users: decodeFromJSONField(reified.vector("address"), field.users),
        });
    }

    static fromJSON(json: Record<string, any>): AddSharedFeePoolAuthorizedUserEvent {
        if (json.$typeName !== AddSharedFeePoolAuthorizedUserEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return AddSharedFeePoolAuthorizedUserEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): AddSharedFeePoolAuthorizedUserEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isAddSharedFeePoolAuthorizedUserEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a AddSharedFeePoolAuthorizedUserEvent object`);
        }
        return AddSharedFeePoolAuthorizedUserEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): AddSharedFeePoolAuthorizedUserEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isAddSharedFeePoolAuthorizedUserEvent(data.bcs.type)) {
                throw new Error(`object at is not a AddSharedFeePoolAuthorizedUserEvent object`);
            }

            return AddSharedFeePoolAuthorizedUserEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return AddSharedFeePoolAuthorizedUserEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<AddSharedFeePoolAuthorizedUserEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching AddSharedFeePoolAuthorizedUserEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isAddSharedFeePoolAuthorizedUserEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AddSharedFeePoolAuthorizedUserEvent object`);
        }

        return AddSharedFeePoolAuthorizedUserEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== RemoveFeePoolAuthorizedUserEvent =============================== */

export function isRemoveFeePoolAuthorizedUserEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::tds_fee_pool_entry::RemoveFeePoolAuthorizedUserEvent`;
}

export interface RemoveFeePoolAuthorizedUserEventFields {
    signer: ToField<"address">;
    users: ToField<Vector<"address">>;
}

export type RemoveFeePoolAuthorizedUserEventReified = Reified<RemoveFeePoolAuthorizedUserEvent, RemoveFeePoolAuthorizedUserEventFields>;

export class RemoveFeePoolAuthorizedUserEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::tds_fee_pool_entry::RemoveFeePoolAuthorizedUserEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = RemoveFeePoolAuthorizedUserEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::tds_fee_pool_entry::RemoveFeePoolAuthorizedUserEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = RemoveFeePoolAuthorizedUserEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly users: ToField<Vector<"address">>;

    private constructor(typeArgs: [], fields: RemoveFeePoolAuthorizedUserEventFields) {
        this.$fullTypeName = composeSuiType(
            RemoveFeePoolAuthorizedUserEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::tds_fee_pool_entry::RemoveFeePoolAuthorizedUserEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.users = fields.users;
    }

    static reified(): RemoveFeePoolAuthorizedUserEventReified {
        return {
            typeName: RemoveFeePoolAuthorizedUserEvent.$typeName,
            fullTypeName: composeSuiType(
                RemoveFeePoolAuthorizedUserEvent.$typeName,
                ...[]
            ) as `${typeof PKG_V1}::tds_fee_pool_entry::RemoveFeePoolAuthorizedUserEvent`,
            typeArgs: [] as [],
            isPhantom: RemoveFeePoolAuthorizedUserEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => RemoveFeePoolAuthorizedUserEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => RemoveFeePoolAuthorizedUserEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => RemoveFeePoolAuthorizedUserEvent.fromBcs(data),
            bcs: RemoveFeePoolAuthorizedUserEvent.bcs,
            fromJSONField: (field: any) => RemoveFeePoolAuthorizedUserEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => RemoveFeePoolAuthorizedUserEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => RemoveFeePoolAuthorizedUserEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => RemoveFeePoolAuthorizedUserEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => RemoveFeePoolAuthorizedUserEvent.fetch(client, id),
            new: (fields: RemoveFeePoolAuthorizedUserEventFields) => {
                return new RemoveFeePoolAuthorizedUserEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return RemoveFeePoolAuthorizedUserEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<RemoveFeePoolAuthorizedUserEvent>> {
        return phantom(RemoveFeePoolAuthorizedUserEvent.reified());
    }
    static get p() {
        return RemoveFeePoolAuthorizedUserEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("RemoveFeePoolAuthorizedUserEvent", {
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

    static fromFields(fields: Record<string, any>): RemoveFeePoolAuthorizedUserEvent {
        return RemoveFeePoolAuthorizedUserEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            users: decodeFromFields(reified.vector("address"), fields.users),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): RemoveFeePoolAuthorizedUserEvent {
        if (!isRemoveFeePoolAuthorizedUserEvent(item.type)) {
            throw new Error("not a RemoveFeePoolAuthorizedUserEvent type");
        }

        return RemoveFeePoolAuthorizedUserEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            users: decodeFromFieldsWithTypes(reified.vector("address"), item.fields.users),
        });
    }

    static fromBcs(data: Uint8Array): RemoveFeePoolAuthorizedUserEvent {
        return RemoveFeePoolAuthorizedUserEvent.fromFields(RemoveFeePoolAuthorizedUserEvent.bcs.parse(data));
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

    static fromJSONField(field: any): RemoveFeePoolAuthorizedUserEvent {
        return RemoveFeePoolAuthorizedUserEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            users: decodeFromJSONField(reified.vector("address"), field.users),
        });
    }

    static fromJSON(json: Record<string, any>): RemoveFeePoolAuthorizedUserEvent {
        if (json.$typeName !== RemoveFeePoolAuthorizedUserEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return RemoveFeePoolAuthorizedUserEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): RemoveFeePoolAuthorizedUserEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRemoveFeePoolAuthorizedUserEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a RemoveFeePoolAuthorizedUserEvent object`);
        }
        return RemoveFeePoolAuthorizedUserEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): RemoveFeePoolAuthorizedUserEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isRemoveFeePoolAuthorizedUserEvent(data.bcs.type)) {
                throw new Error(`object at is not a RemoveFeePoolAuthorizedUserEvent object`);
            }

            return RemoveFeePoolAuthorizedUserEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return RemoveFeePoolAuthorizedUserEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<RemoveFeePoolAuthorizedUserEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching RemoveFeePoolAuthorizedUserEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isRemoveFeePoolAuthorizedUserEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RemoveFeePoolAuthorizedUserEvent object`);
        }

        return RemoveFeePoolAuthorizedUserEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== RemoveSharedFeePoolAuthorizedUserEvent =============================== */

export function isRemoveSharedFeePoolAuthorizedUserEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::tds_fee_pool_entry::RemoveSharedFeePoolAuthorizedUserEvent`;
}

export interface RemoveSharedFeePoolAuthorizedUserEventFields {
    signer: ToField<"address">;
    users: ToField<Vector<"address">>;
}

export type RemoveSharedFeePoolAuthorizedUserEventReified = Reified<
    RemoveSharedFeePoolAuthorizedUserEvent,
    RemoveSharedFeePoolAuthorizedUserEventFields
>;

export class RemoveSharedFeePoolAuthorizedUserEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::tds_fee_pool_entry::RemoveSharedFeePoolAuthorizedUserEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = RemoveSharedFeePoolAuthorizedUserEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::tds_fee_pool_entry::RemoveSharedFeePoolAuthorizedUserEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = RemoveSharedFeePoolAuthorizedUserEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly users: ToField<Vector<"address">>;

    private constructor(typeArgs: [], fields: RemoveSharedFeePoolAuthorizedUserEventFields) {
        this.$fullTypeName = composeSuiType(
            RemoveSharedFeePoolAuthorizedUserEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::tds_fee_pool_entry::RemoveSharedFeePoolAuthorizedUserEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.users = fields.users;
    }

    static reified(): RemoveSharedFeePoolAuthorizedUserEventReified {
        return {
            typeName: RemoveSharedFeePoolAuthorizedUserEvent.$typeName,
            fullTypeName: composeSuiType(
                RemoveSharedFeePoolAuthorizedUserEvent.$typeName,
                ...[]
            ) as `${typeof PKG_V1}::tds_fee_pool_entry::RemoveSharedFeePoolAuthorizedUserEvent`,
            typeArgs: [] as [],
            isPhantom: RemoveSharedFeePoolAuthorizedUserEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => RemoveSharedFeePoolAuthorizedUserEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => RemoveSharedFeePoolAuthorizedUserEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => RemoveSharedFeePoolAuthorizedUserEvent.fromBcs(data),
            bcs: RemoveSharedFeePoolAuthorizedUserEvent.bcs,
            fromJSONField: (field: any) => RemoveSharedFeePoolAuthorizedUserEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => RemoveSharedFeePoolAuthorizedUserEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => RemoveSharedFeePoolAuthorizedUserEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => RemoveSharedFeePoolAuthorizedUserEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => RemoveSharedFeePoolAuthorizedUserEvent.fetch(client, id),
            new: (fields: RemoveSharedFeePoolAuthorizedUserEventFields) => {
                return new RemoveSharedFeePoolAuthorizedUserEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return RemoveSharedFeePoolAuthorizedUserEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<RemoveSharedFeePoolAuthorizedUserEvent>> {
        return phantom(RemoveSharedFeePoolAuthorizedUserEvent.reified());
    }
    static get p() {
        return RemoveSharedFeePoolAuthorizedUserEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("RemoveSharedFeePoolAuthorizedUserEvent", {
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

    static fromFields(fields: Record<string, any>): RemoveSharedFeePoolAuthorizedUserEvent {
        return RemoveSharedFeePoolAuthorizedUserEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            users: decodeFromFields(reified.vector("address"), fields.users),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): RemoveSharedFeePoolAuthorizedUserEvent {
        if (!isRemoveSharedFeePoolAuthorizedUserEvent(item.type)) {
            throw new Error("not a RemoveSharedFeePoolAuthorizedUserEvent type");
        }

        return RemoveSharedFeePoolAuthorizedUserEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            users: decodeFromFieldsWithTypes(reified.vector("address"), item.fields.users),
        });
    }

    static fromBcs(data: Uint8Array): RemoveSharedFeePoolAuthorizedUserEvent {
        return RemoveSharedFeePoolAuthorizedUserEvent.fromFields(RemoveSharedFeePoolAuthorizedUserEvent.bcs.parse(data));
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

    static fromJSONField(field: any): RemoveSharedFeePoolAuthorizedUserEvent {
        return RemoveSharedFeePoolAuthorizedUserEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            users: decodeFromJSONField(reified.vector("address"), field.users),
        });
    }

    static fromJSON(json: Record<string, any>): RemoveSharedFeePoolAuthorizedUserEvent {
        if (json.$typeName !== RemoveSharedFeePoolAuthorizedUserEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return RemoveSharedFeePoolAuthorizedUserEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): RemoveSharedFeePoolAuthorizedUserEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRemoveSharedFeePoolAuthorizedUserEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a RemoveSharedFeePoolAuthorizedUserEvent object`);
        }
        return RemoveSharedFeePoolAuthorizedUserEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): RemoveSharedFeePoolAuthorizedUserEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isRemoveSharedFeePoolAuthorizedUserEvent(data.bcs.type)) {
                throw new Error(`object at is not a RemoveSharedFeePoolAuthorizedUserEvent object`);
            }

            return RemoveSharedFeePoolAuthorizedUserEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return RemoveSharedFeePoolAuthorizedUserEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<RemoveSharedFeePoolAuthorizedUserEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching RemoveSharedFeePoolAuthorizedUserEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isRemoveSharedFeePoolAuthorizedUserEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RemoveSharedFeePoolAuthorizedUserEvent object`);
        }

        return RemoveSharedFeePoolAuthorizedUserEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== TakeFeeEvent =============================== */

export function isTakeFeeEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::tds_fee_pool_entry::TakeFeeEvent`;
}

export interface TakeFeeEventFields {
    signer: ToField<"address">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
}

export type TakeFeeEventReified = Reified<TakeFeeEvent, TakeFeeEventFields>;

export class TakeFeeEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::tds_fee_pool_entry::TakeFeeEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = TakeFeeEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::tds_fee_pool_entry::TakeFeeEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = TakeFeeEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;

    private constructor(typeArgs: [], fields: TakeFeeEventFields) {
        this.$fullTypeName = composeSuiType(TakeFeeEvent.$typeName, ...typeArgs) as `${typeof PKG_V1}::tds_fee_pool_entry::TakeFeeEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.token = fields.token;
        this.amount = fields.amount;
    }

    static reified(): TakeFeeEventReified {
        return {
            typeName: TakeFeeEvent.$typeName,
            fullTypeName: composeSuiType(TakeFeeEvent.$typeName, ...[]) as `${typeof PKG_V1}::tds_fee_pool_entry::TakeFeeEvent`,
            typeArgs: [] as [],
            isPhantom: TakeFeeEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => TakeFeeEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => TakeFeeEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => TakeFeeEvent.fromBcs(data),
            bcs: TakeFeeEvent.bcs,
            fromJSONField: (field: any) => TakeFeeEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => TakeFeeEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => TakeFeeEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => TakeFeeEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => TakeFeeEvent.fetch(client, id),
            new: (fields: TakeFeeEventFields) => {
                return new TakeFeeEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return TakeFeeEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<TakeFeeEvent>> {
        return phantom(TakeFeeEvent.reified());
    }
    static get p() {
        return TakeFeeEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("TakeFeeEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            token: TypeName.bcs,
            amount: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): TakeFeeEvent {
        return TakeFeeEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            token: decodeFromFields(TypeName.reified(), fields.token),
            amount: decodeFromFields("u64", fields.amount),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): TakeFeeEvent {
        if (!isTakeFeeEvent(item.type)) {
            throw new Error("not a TakeFeeEvent type");
        }

        return TakeFeeEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token),
            amount: decodeFromFieldsWithTypes("u64", item.fields.amount),
        });
    }

    static fromBcs(data: Uint8Array): TakeFeeEvent {
        return TakeFeeEvent.fromFields(TakeFeeEvent.bcs.parse(data));
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

    static fromJSONField(field: any): TakeFeeEvent {
        return TakeFeeEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            token: decodeFromJSONField(TypeName.reified(), field.token),
            amount: decodeFromJSONField("u64", field.amount),
        });
    }

    static fromJSON(json: Record<string, any>): TakeFeeEvent {
        if (json.$typeName !== TakeFeeEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return TakeFeeEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): TakeFeeEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isTakeFeeEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a TakeFeeEvent object`);
        }
        return TakeFeeEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): TakeFeeEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isTakeFeeEvent(data.bcs.type)) {
                throw new Error(`object at is not a TakeFeeEvent object`);
            }

            return TakeFeeEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return TakeFeeEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<TakeFeeEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching TakeFeeEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isTakeFeeEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TakeFeeEvent object`);
        }

        return TakeFeeEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== TakeSharedFeeEvent =============================== */

export function isTakeSharedFeeEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::tds_fee_pool_entry::TakeSharedFeeEvent`;
}

export interface TakeSharedFeeEventFields {
    signer: ToField<"address">;
    key: ToField<Vector<"u8">>;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
}

export type TakeSharedFeeEventReified = Reified<TakeSharedFeeEvent, TakeSharedFeeEventFields>;

export class TakeSharedFeeEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::tds_fee_pool_entry::TakeSharedFeeEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = TakeSharedFeeEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::tds_fee_pool_entry::TakeSharedFeeEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = TakeSharedFeeEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly key: ToField<Vector<"u8">>;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;

    private constructor(typeArgs: [], fields: TakeSharedFeeEventFields) {
        this.$fullTypeName = composeSuiType(
            TakeSharedFeeEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::tds_fee_pool_entry::TakeSharedFeeEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.key = fields.key;
        this.token = fields.token;
        this.amount = fields.amount;
    }

    static reified(): TakeSharedFeeEventReified {
        return {
            typeName: TakeSharedFeeEvent.$typeName,
            fullTypeName: composeSuiType(TakeSharedFeeEvent.$typeName, ...[]) as `${typeof PKG_V1}::tds_fee_pool_entry::TakeSharedFeeEvent`,
            typeArgs: [] as [],
            isPhantom: TakeSharedFeeEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => TakeSharedFeeEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => TakeSharedFeeEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => TakeSharedFeeEvent.fromBcs(data),
            bcs: TakeSharedFeeEvent.bcs,
            fromJSONField: (field: any) => TakeSharedFeeEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => TakeSharedFeeEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => TakeSharedFeeEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => TakeSharedFeeEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => TakeSharedFeeEvent.fetch(client, id),
            new: (fields: TakeSharedFeeEventFields) => {
                return new TakeSharedFeeEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return TakeSharedFeeEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<TakeSharedFeeEvent>> {
        return phantom(TakeSharedFeeEvent.reified());
    }
    static get p() {
        return TakeSharedFeeEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("TakeSharedFeeEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            key: bcs.vector(bcs.u8()),
            token: TypeName.bcs,
            amount: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): TakeSharedFeeEvent {
        return TakeSharedFeeEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            key: decodeFromFields(reified.vector("u8"), fields.key),
            token: decodeFromFields(TypeName.reified(), fields.token),
            amount: decodeFromFields("u64", fields.amount),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): TakeSharedFeeEvent {
        if (!isTakeSharedFeeEvent(item.type)) {
            throw new Error("not a TakeSharedFeeEvent type");
        }

        return TakeSharedFeeEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            key: decodeFromFieldsWithTypes(reified.vector("u8"), item.fields.key),
            token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token),
            amount: decodeFromFieldsWithTypes("u64", item.fields.amount),
        });
    }

    static fromBcs(data: Uint8Array): TakeSharedFeeEvent {
        return TakeSharedFeeEvent.fromFields(TakeSharedFeeEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            key: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.key),
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

    static fromJSONField(field: any): TakeSharedFeeEvent {
        return TakeSharedFeeEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            key: decodeFromJSONField(reified.vector("u8"), field.key),
            token: decodeFromJSONField(TypeName.reified(), field.token),
            amount: decodeFromJSONField("u64", field.amount),
        });
    }

    static fromJSON(json: Record<string, any>): TakeSharedFeeEvent {
        if (json.$typeName !== TakeSharedFeeEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return TakeSharedFeeEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): TakeSharedFeeEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isTakeSharedFeeEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a TakeSharedFeeEvent object`);
        }
        return TakeSharedFeeEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): TakeSharedFeeEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isTakeSharedFeeEvent(data.bcs.type)) {
                throw new Error(`object at is not a TakeSharedFeeEvent object`);
            }

            return TakeSharedFeeEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return TakeSharedFeeEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<TakeSharedFeeEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching TakeSharedFeeEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isTakeSharedFeeEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TakeSharedFeeEvent object`);
        }

        return TakeSharedFeeEvent.fromSuiObjectData(res.data);
    }
}
