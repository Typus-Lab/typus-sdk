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
import { UID } from "../../0x2/object/structs";
import { Authority } from "../authority/structs";
import { bcs, fromB64 } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";

/* ============================== BalanceInfo =============================== */

export function isBalanceInfo(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xa2de2f04907b77ef03800a8969bb4f88c821737ee133aba4bc0485b267ad2118::balance_pool::BalanceInfo";
}

export interface BalanceInfoFields {
    token: ToField<TypeName>;
    value: ToField<"u64">;
}

export type BalanceInfoReified = Reified<BalanceInfo, BalanceInfoFields>;

export class BalanceInfo implements StructClass {
    static readonly $typeName = "0xa2de2f04907b77ef03800a8969bb4f88c821737ee133aba4bc0485b267ad2118::balance_pool::BalanceInfo";
    static readonly $numTypeParams = 0;

    readonly $typeName = BalanceInfo.$typeName;

    readonly $fullTypeName: "0xa2de2f04907b77ef03800a8969bb4f88c821737ee133aba4bc0485b267ad2118::balance_pool::BalanceInfo";

    readonly $typeArgs: [];

    readonly token: ToField<TypeName>;
    readonly value: ToField<"u64">;

    private constructor(typeArgs: [], fields: BalanceInfoFields) {
        this.$fullTypeName = composeSuiType(
            BalanceInfo.$typeName,
            ...typeArgs
        ) as "0xa2de2f04907b77ef03800a8969bb4f88c821737ee133aba4bc0485b267ad2118::balance_pool::BalanceInfo";
        this.$typeArgs = typeArgs;

        this.token = fields.token;
        this.value = fields.value;
    }

    static reified(): BalanceInfoReified {
        return {
            typeName: BalanceInfo.$typeName,
            fullTypeName: composeSuiType(
                BalanceInfo.$typeName,
                ...[]
            ) as "0xa2de2f04907b77ef03800a8969bb4f88c821737ee133aba4bc0485b267ad2118::balance_pool::BalanceInfo",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => BalanceInfo.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => BalanceInfo.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => BalanceInfo.fromBcs(data),
            bcs: BalanceInfo.bcs,
            fromJSONField: (field: any) => BalanceInfo.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => BalanceInfo.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => BalanceInfo.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => BalanceInfo.fetch(client, id),
            new: (fields: BalanceInfoFields) => {
                return new BalanceInfo([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return BalanceInfo.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<BalanceInfo>> {
        return phantom(BalanceInfo.reified());
    }
    static get p() {
        return BalanceInfo.phantom();
    }

    static get bcs() {
        return bcs.struct("BalanceInfo", {
            token: TypeName.bcs,
            value: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): BalanceInfo {
        return BalanceInfo.reified().new({
            token: decodeFromFields(TypeName.reified(), fields.token),
            value: decodeFromFields("u64", fields.value),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): BalanceInfo {
        if (!isBalanceInfo(item.type)) {
            throw new Error("not a BalanceInfo type");
        }

        return BalanceInfo.reified().new({
            token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token),
            value: decodeFromFieldsWithTypes("u64", item.fields.value),
        });
    }

    static fromBcs(data: Uint8Array): BalanceInfo {
        return BalanceInfo.fromFields(BalanceInfo.bcs.parse(data));
    }

    toJSONField() {
        return {
            token: this.token.toJSONField(),
            value: this.value.toString(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): BalanceInfo {
        return BalanceInfo.reified().new({
            token: decodeFromJSONField(TypeName.reified(), field.token),
            value: decodeFromJSONField("u64", field.value),
        });
    }

    static fromJSON(json: Record<string, any>): BalanceInfo {
        if (json.$typeName !== BalanceInfo.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return BalanceInfo.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): BalanceInfo {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isBalanceInfo(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a BalanceInfo object`);
        }
        return BalanceInfo.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<BalanceInfo> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching BalanceInfo object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isBalanceInfo(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BalanceInfo object`);
        }
        return BalanceInfo.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== BalancePool =============================== */

export function isBalancePool(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xa2de2f04907b77ef03800a8969bb4f88c821737ee133aba4bc0485b267ad2118::balance_pool::BalancePool";
}

export interface BalancePoolFields {
    id: ToField<UID>;
    balanceInfos: ToField<Vector<BalanceInfo>>;
    authority: ToField<Authority>;
}

export type BalancePoolReified = Reified<BalancePool, BalancePoolFields>;

export class BalancePool implements StructClass {
    static readonly $typeName = "0xa2de2f04907b77ef03800a8969bb4f88c821737ee133aba4bc0485b267ad2118::balance_pool::BalancePool";
    static readonly $numTypeParams = 0;

    readonly $typeName = BalancePool.$typeName;

    readonly $fullTypeName: "0xa2de2f04907b77ef03800a8969bb4f88c821737ee133aba4bc0485b267ad2118::balance_pool::BalancePool";

    readonly $typeArgs: [];

    readonly id: ToField<UID>;
    readonly balanceInfos: ToField<Vector<BalanceInfo>>;
    readonly authority: ToField<Authority>;

    private constructor(typeArgs: [], fields: BalancePoolFields) {
        this.$fullTypeName = composeSuiType(
            BalancePool.$typeName,
            ...typeArgs
        ) as "0xa2de2f04907b77ef03800a8969bb4f88c821737ee133aba4bc0485b267ad2118::balance_pool::BalancePool";
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.balanceInfos = fields.balanceInfos;
        this.authority = fields.authority;
    }

    static reified(): BalancePoolReified {
        return {
            typeName: BalancePool.$typeName,
            fullTypeName: composeSuiType(
                BalancePool.$typeName,
                ...[]
            ) as "0xa2de2f04907b77ef03800a8969bb4f88c821737ee133aba4bc0485b267ad2118::balance_pool::BalancePool",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => BalancePool.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => BalancePool.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => BalancePool.fromBcs(data),
            bcs: BalancePool.bcs,
            fromJSONField: (field: any) => BalancePool.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => BalancePool.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => BalancePool.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => BalancePool.fetch(client, id),
            new: (fields: BalancePoolFields) => {
                return new BalancePool([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return BalancePool.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<BalancePool>> {
        return phantom(BalancePool.reified());
    }
    static get p() {
        return BalancePool.phantom();
    }

    static get bcs() {
        return bcs.struct("BalancePool", {
            id: UID.bcs,
            balance_infos: bcs.vector(BalanceInfo.bcs),
            authority: Authority.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): BalancePool {
        return BalancePool.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            balanceInfos: decodeFromFields(reified.vector(BalanceInfo.reified()), fields.balance_infos),
            authority: decodeFromFields(Authority.reified(), fields.authority),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): BalancePool {
        if (!isBalancePool(item.type)) {
            throw new Error("not a BalancePool type");
        }

        return BalancePool.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            balanceInfos: decodeFromFieldsWithTypes(reified.vector(BalanceInfo.reified()), item.fields.balance_infos),
            authority: decodeFromFieldsWithTypes(Authority.reified(), item.fields.authority),
        });
    }

    static fromBcs(data: Uint8Array): BalancePool {
        return BalancePool.fromFields(BalancePool.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            balanceInfos: fieldToJSON<Vector<BalanceInfo>>(
                `vector<0xa2de2f04907b77ef03800a8969bb4f88c821737ee133aba4bc0485b267ad2118::balance_pool::BalanceInfo>`,
                this.balanceInfos
            ),
            authority: this.authority.toJSONField(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): BalancePool {
        return BalancePool.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            balanceInfos: decodeFromJSONField(reified.vector(BalanceInfo.reified()), field.balanceInfos),
            authority: decodeFromJSONField(Authority.reified(), field.authority),
        });
    }

    static fromJSON(json: Record<string, any>): BalancePool {
        if (json.$typeName !== BalancePool.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return BalancePool.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): BalancePool {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isBalancePool(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a BalancePool object`);
        }
        return BalancePool.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<BalancePool> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching BalancePool object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isBalancePool(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BalancePool object`);
        }
        return BalancePool.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== SharedBalancePool =============================== */

export function isSharedBalancePool(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xa2de2f04907b77ef03800a8969bb4f88c821737ee133aba4bc0485b267ad2118::balance_pool::SharedBalancePool";
}

export interface SharedBalancePoolFields {
    id: ToField<UID>;
    balanceInfos: ToField<Vector<BalanceInfo>>;
    authority: ToField<Authority>;
}

export type SharedBalancePoolReified = Reified<SharedBalancePool, SharedBalancePoolFields>;

export class SharedBalancePool implements StructClass {
    static readonly $typeName = "0xa2de2f04907b77ef03800a8969bb4f88c821737ee133aba4bc0485b267ad2118::balance_pool::SharedBalancePool";
    static readonly $numTypeParams = 0;

    readonly $typeName = SharedBalancePool.$typeName;

    readonly $fullTypeName: "0xa2de2f04907b77ef03800a8969bb4f88c821737ee133aba4bc0485b267ad2118::balance_pool::SharedBalancePool";

    readonly $typeArgs: [];

    readonly id: ToField<UID>;
    readonly balanceInfos: ToField<Vector<BalanceInfo>>;
    readonly authority: ToField<Authority>;

    private constructor(typeArgs: [], fields: SharedBalancePoolFields) {
        this.$fullTypeName = composeSuiType(
            SharedBalancePool.$typeName,
            ...typeArgs
        ) as "0xa2de2f04907b77ef03800a8969bb4f88c821737ee133aba4bc0485b267ad2118::balance_pool::SharedBalancePool";
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.balanceInfos = fields.balanceInfos;
        this.authority = fields.authority;
    }

    static reified(): SharedBalancePoolReified {
        return {
            typeName: SharedBalancePool.$typeName,
            fullTypeName: composeSuiType(
                SharedBalancePool.$typeName,
                ...[]
            ) as "0xa2de2f04907b77ef03800a8969bb4f88c821737ee133aba4bc0485b267ad2118::balance_pool::SharedBalancePool",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => SharedBalancePool.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => SharedBalancePool.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => SharedBalancePool.fromBcs(data),
            bcs: SharedBalancePool.bcs,
            fromJSONField: (field: any) => SharedBalancePool.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => SharedBalancePool.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => SharedBalancePool.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => SharedBalancePool.fetch(client, id),
            new: (fields: SharedBalancePoolFields) => {
                return new SharedBalancePool([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return SharedBalancePool.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<SharedBalancePool>> {
        return phantom(SharedBalancePool.reified());
    }
    static get p() {
        return SharedBalancePool.phantom();
    }

    static get bcs() {
        return bcs.struct("SharedBalancePool", {
            id: UID.bcs,
            balance_infos: bcs.vector(BalanceInfo.bcs),
            authority: Authority.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): SharedBalancePool {
        return SharedBalancePool.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            balanceInfos: decodeFromFields(reified.vector(BalanceInfo.reified()), fields.balance_infos),
            authority: decodeFromFields(Authority.reified(), fields.authority),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): SharedBalancePool {
        if (!isSharedBalancePool(item.type)) {
            throw new Error("not a SharedBalancePool type");
        }

        return SharedBalancePool.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            balanceInfos: decodeFromFieldsWithTypes(reified.vector(BalanceInfo.reified()), item.fields.balance_infos),
            authority: decodeFromFieldsWithTypes(Authority.reified(), item.fields.authority),
        });
    }

    static fromBcs(data: Uint8Array): SharedBalancePool {
        return SharedBalancePool.fromFields(SharedBalancePool.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            balanceInfos: fieldToJSON<Vector<BalanceInfo>>(
                `vector<0xa2de2f04907b77ef03800a8969bb4f88c821737ee133aba4bc0485b267ad2118::balance_pool::BalanceInfo>`,
                this.balanceInfos
            ),
            authority: this.authority.toJSONField(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): SharedBalancePool {
        return SharedBalancePool.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            balanceInfos: decodeFromJSONField(reified.vector(BalanceInfo.reified()), field.balanceInfos),
            authority: decodeFromJSONField(Authority.reified(), field.authority),
        });
    }

    static fromJSON(json: Record<string, any>): SharedBalancePool {
        if (json.$typeName !== SharedBalancePool.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return SharedBalancePool.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): SharedBalancePool {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isSharedBalancePool(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a SharedBalancePool object`);
        }
        return SharedBalancePool.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<SharedBalancePool> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching SharedBalancePool object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isSharedBalancePool(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SharedBalancePool object`);
        }
        return SharedBalancePool.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}
