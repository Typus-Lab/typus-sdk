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
import { String } from "../../0x1/ascii/structs";
import { UID } from "../../0x2/object/structs";
import { Table } from "../../0x2/table/structs";
import { CritbitTree } from "../critbit/structs";
import { PKG_V1, PKG_V11, PKG_V2 } from "../index";
import { LinkedSet } from "../linked-set/structs";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromB64, fromHEX, toHEX } from "@mysten/sui/utils";

/* ============================== ActivateLeaderboardEvent =============================== */

export function isActivateLeaderboardEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::leaderboard::ActivateLeaderboardEvent`;
}

export interface ActivateLeaderboardEventFields {
    key: ToField<String>;
    id: ToField<"address">;
    log: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<Vector<"u8">>>;
}

export type ActivateLeaderboardEventReified = Reified<ActivateLeaderboardEvent, ActivateLeaderboardEventFields>;

export class ActivateLeaderboardEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::leaderboard::ActivateLeaderboardEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = ActivateLeaderboardEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::leaderboard::ActivateLeaderboardEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = ActivateLeaderboardEvent.$isPhantom;

    readonly key: ToField<String>;
    readonly id: ToField<"address">;
    readonly log: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<Vector<"u8">>>;

    private constructor(typeArgs: [], fields: ActivateLeaderboardEventFields) {
        this.$fullTypeName = composeSuiType(
            ActivateLeaderboardEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::leaderboard::ActivateLeaderboardEvent`;
        this.$typeArgs = typeArgs;

        this.key = fields.key;
        this.id = fields.id;
        this.log = fields.log;
        this.bcsPadding = fields.bcsPadding;
    }

    static reified(): ActivateLeaderboardEventReified {
        return {
            typeName: ActivateLeaderboardEvent.$typeName,
            fullTypeName: composeSuiType(
                ActivateLeaderboardEvent.$typeName,
                ...[]
            ) as `${typeof PKG_V1}::leaderboard::ActivateLeaderboardEvent`,
            typeArgs: [] as [],
            isPhantom: ActivateLeaderboardEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => ActivateLeaderboardEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => ActivateLeaderboardEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => ActivateLeaderboardEvent.fromBcs(data),
            bcs: ActivateLeaderboardEvent.bcs,
            fromJSONField: (field: any) => ActivateLeaderboardEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => ActivateLeaderboardEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => ActivateLeaderboardEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => ActivateLeaderboardEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => ActivateLeaderboardEvent.fetch(client, id),
            new: (fields: ActivateLeaderboardEventFields) => {
                return new ActivateLeaderboardEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return ActivateLeaderboardEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<ActivateLeaderboardEvent>> {
        return phantom(ActivateLeaderboardEvent.reified());
    }
    static get p() {
        return ActivateLeaderboardEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("ActivateLeaderboardEvent", {
            key: String.bcs,
            id: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            log: bcs.vector(bcs.u64()),
            bcs_padding: bcs.vector(bcs.vector(bcs.u8())),
        });
    }

    static fromFields(fields: Record<string, any>): ActivateLeaderboardEvent {
        return ActivateLeaderboardEvent.reified().new({
            key: decodeFromFields(String.reified(), fields.key),
            id: decodeFromFields("address", fields.id),
            log: decodeFromFields(reified.vector("u64"), fields.log),
            bcsPadding: decodeFromFields(reified.vector(reified.vector("u8")), fields.bcs_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): ActivateLeaderboardEvent {
        if (!isActivateLeaderboardEvent(item.type)) {
            throw new Error("not a ActivateLeaderboardEvent type");
        }

        return ActivateLeaderboardEvent.reified().new({
            key: decodeFromFieldsWithTypes(String.reified(), item.fields.key),
            id: decodeFromFieldsWithTypes("address", item.fields.id),
            log: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.log),
            bcsPadding: decodeFromFieldsWithTypes(reified.vector(reified.vector("u8")), item.fields.bcs_padding),
        });
    }

    static fromBcs(data: Uint8Array): ActivateLeaderboardEvent {
        return ActivateLeaderboardEvent.fromFields(ActivateLeaderboardEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            key: this.key,
            id: this.id,
            log: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.log),
            bcsPadding: fieldToJSON<Vector<Vector<"u8">>>(`vector<vector<u8>>`, this.bcsPadding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): ActivateLeaderboardEvent {
        return ActivateLeaderboardEvent.reified().new({
            key: decodeFromJSONField(String.reified(), field.key),
            id: decodeFromJSONField("address", field.id),
            log: decodeFromJSONField(reified.vector("u64"), field.log),
            bcsPadding: decodeFromJSONField(reified.vector(reified.vector("u8")), field.bcsPadding),
        });
    }

    static fromJSON(json: Record<string, any>): ActivateLeaderboardEvent {
        if (json.$typeName !== ActivateLeaderboardEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return ActivateLeaderboardEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): ActivateLeaderboardEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isActivateLeaderboardEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a ActivateLeaderboardEvent object`);
        }
        return ActivateLeaderboardEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): ActivateLeaderboardEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isActivateLeaderboardEvent(data.bcs.type)) {
                throw new Error(`object at is not a ActivateLeaderboardEvent object`);
            }

            return ActivateLeaderboardEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ActivateLeaderboardEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<ActivateLeaderboardEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching ActivateLeaderboardEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isActivateLeaderboardEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ActivateLeaderboardEvent object`);
        }

        return ActivateLeaderboardEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== DeactivateLeaderboardEvent =============================== */

export function isDeactivateLeaderboardEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::leaderboard::DeactivateLeaderboardEvent`;
}

export interface DeactivateLeaderboardEventFields {
    key: ToField<String>;
    id: ToField<"address">;
    log: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<Vector<"u8">>>;
}

export type DeactivateLeaderboardEventReified = Reified<DeactivateLeaderboardEvent, DeactivateLeaderboardEventFields>;

export class DeactivateLeaderboardEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::leaderboard::DeactivateLeaderboardEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = DeactivateLeaderboardEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::leaderboard::DeactivateLeaderboardEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = DeactivateLeaderboardEvent.$isPhantom;

    readonly key: ToField<String>;
    readonly id: ToField<"address">;
    readonly log: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<Vector<"u8">>>;

    private constructor(typeArgs: [], fields: DeactivateLeaderboardEventFields) {
        this.$fullTypeName = composeSuiType(
            DeactivateLeaderboardEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::leaderboard::DeactivateLeaderboardEvent`;
        this.$typeArgs = typeArgs;

        this.key = fields.key;
        this.id = fields.id;
        this.log = fields.log;
        this.bcsPadding = fields.bcsPadding;
    }

    static reified(): DeactivateLeaderboardEventReified {
        return {
            typeName: DeactivateLeaderboardEvent.$typeName,
            fullTypeName: composeSuiType(
                DeactivateLeaderboardEvent.$typeName,
                ...[]
            ) as `${typeof PKG_V1}::leaderboard::DeactivateLeaderboardEvent`,
            typeArgs: [] as [],
            isPhantom: DeactivateLeaderboardEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => DeactivateLeaderboardEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => DeactivateLeaderboardEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => DeactivateLeaderboardEvent.fromBcs(data),
            bcs: DeactivateLeaderboardEvent.bcs,
            fromJSONField: (field: any) => DeactivateLeaderboardEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => DeactivateLeaderboardEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => DeactivateLeaderboardEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => DeactivateLeaderboardEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => DeactivateLeaderboardEvent.fetch(client, id),
            new: (fields: DeactivateLeaderboardEventFields) => {
                return new DeactivateLeaderboardEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return DeactivateLeaderboardEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<DeactivateLeaderboardEvent>> {
        return phantom(DeactivateLeaderboardEvent.reified());
    }
    static get p() {
        return DeactivateLeaderboardEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("DeactivateLeaderboardEvent", {
            key: String.bcs,
            id: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            log: bcs.vector(bcs.u64()),
            bcs_padding: bcs.vector(bcs.vector(bcs.u8())),
        });
    }

    static fromFields(fields: Record<string, any>): DeactivateLeaderboardEvent {
        return DeactivateLeaderboardEvent.reified().new({
            key: decodeFromFields(String.reified(), fields.key),
            id: decodeFromFields("address", fields.id),
            log: decodeFromFields(reified.vector("u64"), fields.log),
            bcsPadding: decodeFromFields(reified.vector(reified.vector("u8")), fields.bcs_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): DeactivateLeaderboardEvent {
        if (!isDeactivateLeaderboardEvent(item.type)) {
            throw new Error("not a DeactivateLeaderboardEvent type");
        }

        return DeactivateLeaderboardEvent.reified().new({
            key: decodeFromFieldsWithTypes(String.reified(), item.fields.key),
            id: decodeFromFieldsWithTypes("address", item.fields.id),
            log: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.log),
            bcsPadding: decodeFromFieldsWithTypes(reified.vector(reified.vector("u8")), item.fields.bcs_padding),
        });
    }

    static fromBcs(data: Uint8Array): DeactivateLeaderboardEvent {
        return DeactivateLeaderboardEvent.fromFields(DeactivateLeaderboardEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            key: this.key,
            id: this.id,
            log: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.log),
            bcsPadding: fieldToJSON<Vector<Vector<"u8">>>(`vector<vector<u8>>`, this.bcsPadding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): DeactivateLeaderboardEvent {
        return DeactivateLeaderboardEvent.reified().new({
            key: decodeFromJSONField(String.reified(), field.key),
            id: decodeFromJSONField("address", field.id),
            log: decodeFromJSONField(reified.vector("u64"), field.log),
            bcsPadding: decodeFromJSONField(reified.vector(reified.vector("u8")), field.bcsPadding),
        });
    }

    static fromJSON(json: Record<string, any>): DeactivateLeaderboardEvent {
        if (json.$typeName !== DeactivateLeaderboardEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return DeactivateLeaderboardEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): DeactivateLeaderboardEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isDeactivateLeaderboardEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a DeactivateLeaderboardEvent object`);
        }
        return DeactivateLeaderboardEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): DeactivateLeaderboardEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDeactivateLeaderboardEvent(data.bcs.type)) {
                throw new Error(`object at is not a DeactivateLeaderboardEvent object`);
            }

            return DeactivateLeaderboardEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return DeactivateLeaderboardEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<DeactivateLeaderboardEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching DeactivateLeaderboardEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isDeactivateLeaderboardEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DeactivateLeaderboardEvent object`);
        }

        return DeactivateLeaderboardEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== DeductEvent =============================== */

export function isDeductEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V11}::leaderboard::DeductEvent`;
}

export interface DeductEventFields {
    key: ToField<String>;
    id: ToField<"address">;
    user: ToField<"address">;
    log: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<Vector<"u8">>>;
}

export type DeductEventReified = Reified<DeductEvent, DeductEventFields>;

export class DeductEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V11}::leaderboard::DeductEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = DeductEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V11}::leaderboard::DeductEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = DeductEvent.$isPhantom;

    readonly key: ToField<String>;
    readonly id: ToField<"address">;
    readonly user: ToField<"address">;
    readonly log: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<Vector<"u8">>>;

    private constructor(typeArgs: [], fields: DeductEventFields) {
        this.$fullTypeName = composeSuiType(DeductEvent.$typeName, ...typeArgs) as `${typeof PKG_V11}::leaderboard::DeductEvent`;
        this.$typeArgs = typeArgs;

        this.key = fields.key;
        this.id = fields.id;
        this.user = fields.user;
        this.log = fields.log;
        this.bcsPadding = fields.bcsPadding;
    }

    static reified(): DeductEventReified {
        return {
            typeName: DeductEvent.$typeName,
            fullTypeName: composeSuiType(DeductEvent.$typeName, ...[]) as `${typeof PKG_V11}::leaderboard::DeductEvent`,
            typeArgs: [] as [],
            isPhantom: DeductEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => DeductEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => DeductEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => DeductEvent.fromBcs(data),
            bcs: DeductEvent.bcs,
            fromJSONField: (field: any) => DeductEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => DeductEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => DeductEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => DeductEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => DeductEvent.fetch(client, id),
            new: (fields: DeductEventFields) => {
                return new DeductEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return DeductEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<DeductEvent>> {
        return phantom(DeductEvent.reified());
    }
    static get p() {
        return DeductEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("DeductEvent", {
            key: String.bcs,
            id: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            user: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            log: bcs.vector(bcs.u64()),
            bcs_padding: bcs.vector(bcs.vector(bcs.u8())),
        });
    }

    static fromFields(fields: Record<string, any>): DeductEvent {
        return DeductEvent.reified().new({
            key: decodeFromFields(String.reified(), fields.key),
            id: decodeFromFields("address", fields.id),
            user: decodeFromFields("address", fields.user),
            log: decodeFromFields(reified.vector("u64"), fields.log),
            bcsPadding: decodeFromFields(reified.vector(reified.vector("u8")), fields.bcs_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): DeductEvent {
        if (!isDeductEvent(item.type)) {
            throw new Error("not a DeductEvent type");
        }

        return DeductEvent.reified().new({
            key: decodeFromFieldsWithTypes(String.reified(), item.fields.key),
            id: decodeFromFieldsWithTypes("address", item.fields.id),
            user: decodeFromFieldsWithTypes("address", item.fields.user),
            log: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.log),
            bcsPadding: decodeFromFieldsWithTypes(reified.vector(reified.vector("u8")), item.fields.bcs_padding),
        });
    }

    static fromBcs(data: Uint8Array): DeductEvent {
        return DeductEvent.fromFields(DeductEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            key: this.key,
            id: this.id,
            user: this.user,
            log: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.log),
            bcsPadding: fieldToJSON<Vector<Vector<"u8">>>(`vector<vector<u8>>`, this.bcsPadding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): DeductEvent {
        return DeductEvent.reified().new({
            key: decodeFromJSONField(String.reified(), field.key),
            id: decodeFromJSONField("address", field.id),
            user: decodeFromJSONField("address", field.user),
            log: decodeFromJSONField(reified.vector("u64"), field.log),
            bcsPadding: decodeFromJSONField(reified.vector(reified.vector("u8")), field.bcsPadding),
        });
    }

    static fromJSON(json: Record<string, any>): DeductEvent {
        if (json.$typeName !== DeductEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return DeductEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): DeductEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isDeductEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a DeductEvent object`);
        }
        return DeductEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): DeductEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDeductEvent(data.bcs.type)) {
                throw new Error(`object at is not a DeductEvent object`);
            }

            return DeductEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return DeductEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<DeductEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching DeductEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isDeductEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DeductEvent object`);
        }

        return DeductEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== ExtendLeaderboardEvent =============================== */

export function isExtendLeaderboardEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V2}::leaderboard::ExtendLeaderboardEvent`;
}

export interface ExtendLeaderboardEventFields {
    key: ToField<String>;
    id: ToField<"address">;
    log: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<Vector<"u8">>>;
}

export type ExtendLeaderboardEventReified = Reified<ExtendLeaderboardEvent, ExtendLeaderboardEventFields>;

export class ExtendLeaderboardEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V2}::leaderboard::ExtendLeaderboardEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = ExtendLeaderboardEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V2}::leaderboard::ExtendLeaderboardEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = ExtendLeaderboardEvent.$isPhantom;

    readonly key: ToField<String>;
    readonly id: ToField<"address">;
    readonly log: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<Vector<"u8">>>;

    private constructor(typeArgs: [], fields: ExtendLeaderboardEventFields) {
        this.$fullTypeName = composeSuiType(
            ExtendLeaderboardEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V2}::leaderboard::ExtendLeaderboardEvent`;
        this.$typeArgs = typeArgs;

        this.key = fields.key;
        this.id = fields.id;
        this.log = fields.log;
        this.bcsPadding = fields.bcsPadding;
    }

    static reified(): ExtendLeaderboardEventReified {
        return {
            typeName: ExtendLeaderboardEvent.$typeName,
            fullTypeName: composeSuiType(
                ExtendLeaderboardEvent.$typeName,
                ...[]
            ) as `${typeof PKG_V2}::leaderboard::ExtendLeaderboardEvent`,
            typeArgs: [] as [],
            isPhantom: ExtendLeaderboardEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => ExtendLeaderboardEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => ExtendLeaderboardEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => ExtendLeaderboardEvent.fromBcs(data),
            bcs: ExtendLeaderboardEvent.bcs,
            fromJSONField: (field: any) => ExtendLeaderboardEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => ExtendLeaderboardEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => ExtendLeaderboardEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => ExtendLeaderboardEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => ExtendLeaderboardEvent.fetch(client, id),
            new: (fields: ExtendLeaderboardEventFields) => {
                return new ExtendLeaderboardEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return ExtendLeaderboardEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<ExtendLeaderboardEvent>> {
        return phantom(ExtendLeaderboardEvent.reified());
    }
    static get p() {
        return ExtendLeaderboardEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("ExtendLeaderboardEvent", {
            key: String.bcs,
            id: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            log: bcs.vector(bcs.u64()),
            bcs_padding: bcs.vector(bcs.vector(bcs.u8())),
        });
    }

    static fromFields(fields: Record<string, any>): ExtendLeaderboardEvent {
        return ExtendLeaderboardEvent.reified().new({
            key: decodeFromFields(String.reified(), fields.key),
            id: decodeFromFields("address", fields.id),
            log: decodeFromFields(reified.vector("u64"), fields.log),
            bcsPadding: decodeFromFields(reified.vector(reified.vector("u8")), fields.bcs_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): ExtendLeaderboardEvent {
        if (!isExtendLeaderboardEvent(item.type)) {
            throw new Error("not a ExtendLeaderboardEvent type");
        }

        return ExtendLeaderboardEvent.reified().new({
            key: decodeFromFieldsWithTypes(String.reified(), item.fields.key),
            id: decodeFromFieldsWithTypes("address", item.fields.id),
            log: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.log),
            bcsPadding: decodeFromFieldsWithTypes(reified.vector(reified.vector("u8")), item.fields.bcs_padding),
        });
    }

    static fromBcs(data: Uint8Array): ExtendLeaderboardEvent {
        return ExtendLeaderboardEvent.fromFields(ExtendLeaderboardEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            key: this.key,
            id: this.id,
            log: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.log),
            bcsPadding: fieldToJSON<Vector<Vector<"u8">>>(`vector<vector<u8>>`, this.bcsPadding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): ExtendLeaderboardEvent {
        return ExtendLeaderboardEvent.reified().new({
            key: decodeFromJSONField(String.reified(), field.key),
            id: decodeFromJSONField("address", field.id),
            log: decodeFromJSONField(reified.vector("u64"), field.log),
            bcsPadding: decodeFromJSONField(reified.vector(reified.vector("u8")), field.bcsPadding),
        });
    }

    static fromJSON(json: Record<string, any>): ExtendLeaderboardEvent {
        if (json.$typeName !== ExtendLeaderboardEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return ExtendLeaderboardEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): ExtendLeaderboardEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isExtendLeaderboardEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a ExtendLeaderboardEvent object`);
        }
        return ExtendLeaderboardEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): ExtendLeaderboardEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isExtendLeaderboardEvent(data.bcs.type)) {
                throw new Error(`object at is not a ExtendLeaderboardEvent object`);
            }

            return ExtendLeaderboardEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ExtendLeaderboardEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<ExtendLeaderboardEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching ExtendLeaderboardEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isExtendLeaderboardEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ExtendLeaderboardEvent object`);
        }

        return ExtendLeaderboardEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== Leaderboard =============================== */

export function isLeaderboard(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::leaderboard::Leaderboard`;
}

export interface LeaderboardFields {
    id: ToField<UID>;
    startTsMs: ToField<"u64">;
    endTsMs: ToField<"u64">;
    score: ToField<Table<"address", "u64">>;
    ranking: ToField<CritbitTree<LinkedSet<"address">>>;
}

export type LeaderboardReified = Reified<Leaderboard, LeaderboardFields>;

export class Leaderboard implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::leaderboard::Leaderboard`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = Leaderboard.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::leaderboard::Leaderboard`;
    readonly $typeArgs: [];
    readonly $isPhantom = Leaderboard.$isPhantom;

    readonly id: ToField<UID>;
    readonly startTsMs: ToField<"u64">;
    readonly endTsMs: ToField<"u64">;
    readonly score: ToField<Table<"address", "u64">>;
    readonly ranking: ToField<CritbitTree<LinkedSet<"address">>>;

    private constructor(typeArgs: [], fields: LeaderboardFields) {
        this.$fullTypeName = composeSuiType(Leaderboard.$typeName, ...typeArgs) as `${typeof PKG_V1}::leaderboard::Leaderboard`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.startTsMs = fields.startTsMs;
        this.endTsMs = fields.endTsMs;
        this.score = fields.score;
        this.ranking = fields.ranking;
    }

    static reified(): LeaderboardReified {
        return {
            typeName: Leaderboard.$typeName,
            fullTypeName: composeSuiType(Leaderboard.$typeName, ...[]) as `${typeof PKG_V1}::leaderboard::Leaderboard`,
            typeArgs: [] as [],
            isPhantom: Leaderboard.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Leaderboard.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Leaderboard.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Leaderboard.fromBcs(data),
            bcs: Leaderboard.bcs,
            fromJSONField: (field: any) => Leaderboard.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Leaderboard.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Leaderboard.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => Leaderboard.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => Leaderboard.fetch(client, id),
            new: (fields: LeaderboardFields) => {
                return new Leaderboard([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Leaderboard.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<Leaderboard>> {
        return phantom(Leaderboard.reified());
    }
    static get p() {
        return Leaderboard.phantom();
    }

    static get bcs() {
        return bcs.struct("Leaderboard", {
            id: UID.bcs,
            start_ts_ms: bcs.u64(),
            end_ts_ms: bcs.u64(),
            score: Table.bcs,
            ranking: CritbitTree.bcs(
                LinkedSet.bcs(
                    bcs.bytes(32).transform({
                        input: (val: string) => fromHEX(val),
                        output: (val: Uint8Array) => toHEX(val),
                    })
                )
            ),
        });
    }

    static fromFields(fields: Record<string, any>): Leaderboard {
        return Leaderboard.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            startTsMs: decodeFromFields("u64", fields.start_ts_ms),
            endTsMs: decodeFromFields("u64", fields.end_ts_ms),
            score: decodeFromFields(Table.reified(reified.phantom("address"), reified.phantom("u64")), fields.score),
            ranking: decodeFromFields(CritbitTree.reified(LinkedSet.reified("address")), fields.ranking),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Leaderboard {
        if (!isLeaderboard(item.type)) {
            throw new Error("not a Leaderboard type");
        }

        return Leaderboard.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            startTsMs: decodeFromFieldsWithTypes("u64", item.fields.start_ts_ms),
            endTsMs: decodeFromFieldsWithTypes("u64", item.fields.end_ts_ms),
            score: decodeFromFieldsWithTypes(Table.reified(reified.phantom("address"), reified.phantom("u64")), item.fields.score),
            ranking: decodeFromFieldsWithTypes(CritbitTree.reified(LinkedSet.reified("address")), item.fields.ranking),
        });
    }

    static fromBcs(data: Uint8Array): Leaderboard {
        return Leaderboard.fromFields(Leaderboard.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            startTsMs: this.startTsMs.toString(),
            endTsMs: this.endTsMs.toString(),
            score: this.score.toJSONField(),
            ranking: this.ranking.toJSONField(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): Leaderboard {
        return Leaderboard.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            startTsMs: decodeFromJSONField("u64", field.startTsMs),
            endTsMs: decodeFromJSONField("u64", field.endTsMs),
            score: decodeFromJSONField(Table.reified(reified.phantom("address"), reified.phantom("u64")), field.score),
            ranking: decodeFromJSONField(CritbitTree.reified(LinkedSet.reified("address")), field.ranking),
        });
    }

    static fromJSON(json: Record<string, any>): Leaderboard {
        if (json.$typeName !== Leaderboard.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return Leaderboard.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): Leaderboard {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isLeaderboard(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Leaderboard object`);
        }
        return Leaderboard.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): Leaderboard {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isLeaderboard(data.bcs.type)) {
                throw new Error(`object at is not a Leaderboard object`);
            }

            return Leaderboard.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Leaderboard.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<Leaderboard> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Leaderboard object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isLeaderboard(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Leaderboard object`);
        }

        return Leaderboard.fromSuiObjectData(res.data);
    }
}

/* ============================== RemoveLeaderboardEvent =============================== */

export function isRemoveLeaderboardEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::leaderboard::RemoveLeaderboardEvent`;
}

export interface RemoveLeaderboardEventFields {
    key: ToField<String>;
    id: ToField<"address">;
    log: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<Vector<"u8">>>;
}

export type RemoveLeaderboardEventReified = Reified<RemoveLeaderboardEvent, RemoveLeaderboardEventFields>;

export class RemoveLeaderboardEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::leaderboard::RemoveLeaderboardEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = RemoveLeaderboardEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::leaderboard::RemoveLeaderboardEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = RemoveLeaderboardEvent.$isPhantom;

    readonly key: ToField<String>;
    readonly id: ToField<"address">;
    readonly log: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<Vector<"u8">>>;

    private constructor(typeArgs: [], fields: RemoveLeaderboardEventFields) {
        this.$fullTypeName = composeSuiType(
            RemoveLeaderboardEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::leaderboard::RemoveLeaderboardEvent`;
        this.$typeArgs = typeArgs;

        this.key = fields.key;
        this.id = fields.id;
        this.log = fields.log;
        this.bcsPadding = fields.bcsPadding;
    }

    static reified(): RemoveLeaderboardEventReified {
        return {
            typeName: RemoveLeaderboardEvent.$typeName,
            fullTypeName: composeSuiType(
                RemoveLeaderboardEvent.$typeName,
                ...[]
            ) as `${typeof PKG_V1}::leaderboard::RemoveLeaderboardEvent`,
            typeArgs: [] as [],
            isPhantom: RemoveLeaderboardEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => RemoveLeaderboardEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => RemoveLeaderboardEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => RemoveLeaderboardEvent.fromBcs(data),
            bcs: RemoveLeaderboardEvent.bcs,
            fromJSONField: (field: any) => RemoveLeaderboardEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => RemoveLeaderboardEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => RemoveLeaderboardEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => RemoveLeaderboardEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => RemoveLeaderboardEvent.fetch(client, id),
            new: (fields: RemoveLeaderboardEventFields) => {
                return new RemoveLeaderboardEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return RemoveLeaderboardEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<RemoveLeaderboardEvent>> {
        return phantom(RemoveLeaderboardEvent.reified());
    }
    static get p() {
        return RemoveLeaderboardEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("RemoveLeaderboardEvent", {
            key: String.bcs,
            id: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            log: bcs.vector(bcs.u64()),
            bcs_padding: bcs.vector(bcs.vector(bcs.u8())),
        });
    }

    static fromFields(fields: Record<string, any>): RemoveLeaderboardEvent {
        return RemoveLeaderboardEvent.reified().new({
            key: decodeFromFields(String.reified(), fields.key),
            id: decodeFromFields("address", fields.id),
            log: decodeFromFields(reified.vector("u64"), fields.log),
            bcsPadding: decodeFromFields(reified.vector(reified.vector("u8")), fields.bcs_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): RemoveLeaderboardEvent {
        if (!isRemoveLeaderboardEvent(item.type)) {
            throw new Error("not a RemoveLeaderboardEvent type");
        }

        return RemoveLeaderboardEvent.reified().new({
            key: decodeFromFieldsWithTypes(String.reified(), item.fields.key),
            id: decodeFromFieldsWithTypes("address", item.fields.id),
            log: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.log),
            bcsPadding: decodeFromFieldsWithTypes(reified.vector(reified.vector("u8")), item.fields.bcs_padding),
        });
    }

    static fromBcs(data: Uint8Array): RemoveLeaderboardEvent {
        return RemoveLeaderboardEvent.fromFields(RemoveLeaderboardEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            key: this.key,
            id: this.id,
            log: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.log),
            bcsPadding: fieldToJSON<Vector<Vector<"u8">>>(`vector<vector<u8>>`, this.bcsPadding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): RemoveLeaderboardEvent {
        return RemoveLeaderboardEvent.reified().new({
            key: decodeFromJSONField(String.reified(), field.key),
            id: decodeFromJSONField("address", field.id),
            log: decodeFromJSONField(reified.vector("u64"), field.log),
            bcsPadding: decodeFromJSONField(reified.vector(reified.vector("u8")), field.bcsPadding),
        });
    }

    static fromJSON(json: Record<string, any>): RemoveLeaderboardEvent {
        if (json.$typeName !== RemoveLeaderboardEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return RemoveLeaderboardEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): RemoveLeaderboardEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRemoveLeaderboardEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a RemoveLeaderboardEvent object`);
        }
        return RemoveLeaderboardEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): RemoveLeaderboardEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isRemoveLeaderboardEvent(data.bcs.type)) {
                throw new Error(`object at is not a RemoveLeaderboardEvent object`);
            }

            return RemoveLeaderboardEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return RemoveLeaderboardEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<RemoveLeaderboardEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching RemoveLeaderboardEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isRemoveLeaderboardEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RemoveLeaderboardEvent object`);
        }

        return RemoveLeaderboardEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== ScoreEvent =============================== */

export function isScoreEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::leaderboard::ScoreEvent`;
}

export interface ScoreEventFields {
    key: ToField<String>;
    id: ToField<"address">;
    user: ToField<"address">;
    log: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<Vector<"u8">>>;
}

export type ScoreEventReified = Reified<ScoreEvent, ScoreEventFields>;

export class ScoreEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::leaderboard::ScoreEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = ScoreEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::leaderboard::ScoreEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = ScoreEvent.$isPhantom;

    readonly key: ToField<String>;
    readonly id: ToField<"address">;
    readonly user: ToField<"address">;
    readonly log: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<Vector<"u8">>>;

    private constructor(typeArgs: [], fields: ScoreEventFields) {
        this.$fullTypeName = composeSuiType(ScoreEvent.$typeName, ...typeArgs) as `${typeof PKG_V1}::leaderboard::ScoreEvent`;
        this.$typeArgs = typeArgs;

        this.key = fields.key;
        this.id = fields.id;
        this.user = fields.user;
        this.log = fields.log;
        this.bcsPadding = fields.bcsPadding;
    }

    static reified(): ScoreEventReified {
        return {
            typeName: ScoreEvent.$typeName,
            fullTypeName: composeSuiType(ScoreEvent.$typeName, ...[]) as `${typeof PKG_V1}::leaderboard::ScoreEvent`,
            typeArgs: [] as [],
            isPhantom: ScoreEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => ScoreEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => ScoreEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => ScoreEvent.fromBcs(data),
            bcs: ScoreEvent.bcs,
            fromJSONField: (field: any) => ScoreEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => ScoreEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => ScoreEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => ScoreEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => ScoreEvent.fetch(client, id),
            new: (fields: ScoreEventFields) => {
                return new ScoreEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return ScoreEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<ScoreEvent>> {
        return phantom(ScoreEvent.reified());
    }
    static get p() {
        return ScoreEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("ScoreEvent", {
            key: String.bcs,
            id: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            user: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            log: bcs.vector(bcs.u64()),
            bcs_padding: bcs.vector(bcs.vector(bcs.u8())),
        });
    }

    static fromFields(fields: Record<string, any>): ScoreEvent {
        return ScoreEvent.reified().new({
            key: decodeFromFields(String.reified(), fields.key),
            id: decodeFromFields("address", fields.id),
            user: decodeFromFields("address", fields.user),
            log: decodeFromFields(reified.vector("u64"), fields.log),
            bcsPadding: decodeFromFields(reified.vector(reified.vector("u8")), fields.bcs_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): ScoreEvent {
        if (!isScoreEvent(item.type)) {
            throw new Error("not a ScoreEvent type");
        }

        return ScoreEvent.reified().new({
            key: decodeFromFieldsWithTypes(String.reified(), item.fields.key),
            id: decodeFromFieldsWithTypes("address", item.fields.id),
            user: decodeFromFieldsWithTypes("address", item.fields.user),
            log: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.log),
            bcsPadding: decodeFromFieldsWithTypes(reified.vector(reified.vector("u8")), item.fields.bcs_padding),
        });
    }

    static fromBcs(data: Uint8Array): ScoreEvent {
        return ScoreEvent.fromFields(ScoreEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            key: this.key,
            id: this.id,
            user: this.user,
            log: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.log),
            bcsPadding: fieldToJSON<Vector<Vector<"u8">>>(`vector<vector<u8>>`, this.bcsPadding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): ScoreEvent {
        return ScoreEvent.reified().new({
            key: decodeFromJSONField(String.reified(), field.key),
            id: decodeFromJSONField("address", field.id),
            user: decodeFromJSONField("address", field.user),
            log: decodeFromJSONField(reified.vector("u64"), field.log),
            bcsPadding: decodeFromJSONField(reified.vector(reified.vector("u8")), field.bcsPadding),
        });
    }

    static fromJSON(json: Record<string, any>): ScoreEvent {
        if (json.$typeName !== ScoreEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return ScoreEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): ScoreEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isScoreEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a ScoreEvent object`);
        }
        return ScoreEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): ScoreEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isScoreEvent(data.bcs.type)) {
                throw new Error(`object at is not a ScoreEvent object`);
            }

            return ScoreEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ScoreEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<ScoreEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching ScoreEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isScoreEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ScoreEvent object`);
        }

        return ScoreEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== TypusLeaderboardRegistry =============================== */

export function isTypusLeaderboardRegistry(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::leaderboard::TypusLeaderboardRegistry`;
}

export interface TypusLeaderboardRegistryFields {
    id: ToField<UID>;
    activeLeaderboardRegistry: ToField<UID>;
    inactiveLeaderboardRegistry: ToField<UID>;
}

export type TypusLeaderboardRegistryReified = Reified<TypusLeaderboardRegistry, TypusLeaderboardRegistryFields>;

export class TypusLeaderboardRegistry implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::leaderboard::TypusLeaderboardRegistry`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = TypusLeaderboardRegistry.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::leaderboard::TypusLeaderboardRegistry`;
    readonly $typeArgs: [];
    readonly $isPhantom = TypusLeaderboardRegistry.$isPhantom;

    readonly id: ToField<UID>;
    readonly activeLeaderboardRegistry: ToField<UID>;
    readonly inactiveLeaderboardRegistry: ToField<UID>;

    private constructor(typeArgs: [], fields: TypusLeaderboardRegistryFields) {
        this.$fullTypeName = composeSuiType(
            TypusLeaderboardRegistry.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::leaderboard::TypusLeaderboardRegistry`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.activeLeaderboardRegistry = fields.activeLeaderboardRegistry;
        this.inactiveLeaderboardRegistry = fields.inactiveLeaderboardRegistry;
    }

    static reified(): TypusLeaderboardRegistryReified {
        return {
            typeName: TypusLeaderboardRegistry.$typeName,
            fullTypeName: composeSuiType(
                TypusLeaderboardRegistry.$typeName,
                ...[]
            ) as `${typeof PKG_V1}::leaderboard::TypusLeaderboardRegistry`,
            typeArgs: [] as [],
            isPhantom: TypusLeaderboardRegistry.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => TypusLeaderboardRegistry.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => TypusLeaderboardRegistry.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => TypusLeaderboardRegistry.fromBcs(data),
            bcs: TypusLeaderboardRegistry.bcs,
            fromJSONField: (field: any) => TypusLeaderboardRegistry.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => TypusLeaderboardRegistry.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => TypusLeaderboardRegistry.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => TypusLeaderboardRegistry.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => TypusLeaderboardRegistry.fetch(client, id),
            new: (fields: TypusLeaderboardRegistryFields) => {
                return new TypusLeaderboardRegistry([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return TypusLeaderboardRegistry.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<TypusLeaderboardRegistry>> {
        return phantom(TypusLeaderboardRegistry.reified());
    }
    static get p() {
        return TypusLeaderboardRegistry.phantom();
    }

    static get bcs() {
        return bcs.struct("TypusLeaderboardRegistry", {
            id: UID.bcs,
            active_leaderboard_registry: UID.bcs,
            inactive_leaderboard_registry: UID.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): TypusLeaderboardRegistry {
        return TypusLeaderboardRegistry.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            activeLeaderboardRegistry: decodeFromFields(UID.reified(), fields.active_leaderboard_registry),
            inactiveLeaderboardRegistry: decodeFromFields(UID.reified(), fields.inactive_leaderboard_registry),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): TypusLeaderboardRegistry {
        if (!isTypusLeaderboardRegistry(item.type)) {
            throw new Error("not a TypusLeaderboardRegistry type");
        }

        return TypusLeaderboardRegistry.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            activeLeaderboardRegistry: decodeFromFieldsWithTypes(UID.reified(), item.fields.active_leaderboard_registry),
            inactiveLeaderboardRegistry: decodeFromFieldsWithTypes(UID.reified(), item.fields.inactive_leaderboard_registry),
        });
    }

    static fromBcs(data: Uint8Array): TypusLeaderboardRegistry {
        return TypusLeaderboardRegistry.fromFields(TypusLeaderboardRegistry.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            activeLeaderboardRegistry: this.activeLeaderboardRegistry,
            inactiveLeaderboardRegistry: this.inactiveLeaderboardRegistry,
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): TypusLeaderboardRegistry {
        return TypusLeaderboardRegistry.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            activeLeaderboardRegistry: decodeFromJSONField(UID.reified(), field.activeLeaderboardRegistry),
            inactiveLeaderboardRegistry: decodeFromJSONField(UID.reified(), field.inactiveLeaderboardRegistry),
        });
    }

    static fromJSON(json: Record<string, any>): TypusLeaderboardRegistry {
        if (json.$typeName !== TypusLeaderboardRegistry.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return TypusLeaderboardRegistry.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): TypusLeaderboardRegistry {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isTypusLeaderboardRegistry(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a TypusLeaderboardRegistry object`);
        }
        return TypusLeaderboardRegistry.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): TypusLeaderboardRegistry {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isTypusLeaderboardRegistry(data.bcs.type)) {
                throw new Error(`object at is not a TypusLeaderboardRegistry object`);
            }

            return TypusLeaderboardRegistry.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return TypusLeaderboardRegistry.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<TypusLeaderboardRegistry> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching TypusLeaderboardRegistry object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isTypusLeaderboardRegistry(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TypusLeaderboardRegistry object`);
        }

        return TypusLeaderboardRegistry.fromSuiObjectData(res.data);
    }
}
