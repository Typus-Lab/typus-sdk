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
import { UID } from "../../0x2/object/structs";
import { VecSet } from "../../0x2/vec-set/structs";
import { PKG_V1 } from "../index";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromB64, fromHEX, toHEX } from "@mysten/sui/utils";

/* ============================== Version =============================== */

export function isVersion(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::ecosystem::Version`;
}

export interface VersionFields {
    id: ToField<UID>;
    value: ToField<"u64">;
    feePool: ToField<FeePool>;
    authority: ToField<VecSet<"address">>;
    u64Padding: ToField<Vector<"u64">>;
}

export type VersionReified = Reified<Version, VersionFields>;

export class Version implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::ecosystem::Version`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = Version.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::ecosystem::Version`;
    readonly $typeArgs: [];
    readonly $isPhantom = Version.$isPhantom;

    readonly id: ToField<UID>;
    readonly value: ToField<"u64">;
    readonly feePool: ToField<FeePool>;
    readonly authority: ToField<VecSet<"address">>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: VersionFields) {
        this.$fullTypeName = composeSuiType(Version.$typeName, ...typeArgs) as `${typeof PKG_V1}::ecosystem::Version`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.value = fields.value;
        this.feePool = fields.feePool;
        this.authority = fields.authority;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): VersionReified {
        return {
            typeName: Version.$typeName,
            fullTypeName: composeSuiType(Version.$typeName, ...[]) as `${typeof PKG_V1}::ecosystem::Version`,
            typeArgs: [] as [],
            isPhantom: Version.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Version.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Version.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Version.fromBcs(data),
            bcs: Version.bcs,
            fromJSONField: (field: any) => Version.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Version.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Version.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => Version.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => Version.fetch(client, id),
            new: (fields: VersionFields) => {
                return new Version([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Version.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<Version>> {
        return phantom(Version.reified());
    }
    static get p() {
        return Version.phantom();
    }

    static get bcs() {
        return bcs.struct("Version", {
            id: UID.bcs,
            value: bcs.u64(),
            fee_pool: FeePool.bcs,
            authority: VecSet.bcs(
                bcs.bytes(32).transform({
                    input: (val: string) => fromHEX(val),
                    output: (val: Uint8Array) => toHEX(val),
                })
            ),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): Version {
        return Version.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            value: decodeFromFields("u64", fields.value),
            feePool: decodeFromFields(FeePool.reified(), fields.fee_pool),
            authority: decodeFromFields(VecSet.reified("address"), fields.authority),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Version {
        if (!isVersion(item.type)) {
            throw new Error("not a Version type");
        }

        return Version.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            value: decodeFromFieldsWithTypes("u64", item.fields.value),
            feePool: decodeFromFieldsWithTypes(FeePool.reified(), item.fields.fee_pool),
            authority: decodeFromFieldsWithTypes(VecSet.reified("address"), item.fields.authority),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): Version {
        return Version.fromFields(Version.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            value: this.value.toString(),
            feePool: this.feePool.toJSONField(),
            authority: this.authority.toJSONField(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): Version {
        return Version.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            value: decodeFromJSONField("u64", field.value),
            feePool: decodeFromJSONField(FeePool.reified(), field.feePool),
            authority: decodeFromJSONField(VecSet.reified("address"), field.authority),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): Version {
        if (json.$typeName !== Version.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return Version.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): Version {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isVersion(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Version object`);
        }
        return Version.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): Version {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isVersion(data.bcs.type)) {
                throw new Error(`object at is not a Version object`);
            }

            return Version.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Version.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<Version> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Version object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isVersion(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Version object`);
        }

        return Version.fromSuiObjectData(res.data);
    }
}

/* ============================== ManagerCap =============================== */

export function isManagerCap(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::ecosystem::ManagerCap`;
}

export interface ManagerCapFields {
    dummyField: ToField<"bool">;
}

export type ManagerCapReified = Reified<ManagerCap, ManagerCapFields>;

export class ManagerCap implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::ecosystem::ManagerCap`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = ManagerCap.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::ecosystem::ManagerCap`;
    readonly $typeArgs: [];
    readonly $isPhantom = ManagerCap.$isPhantom;

    readonly dummyField: ToField<"bool">;

    private constructor(typeArgs: [], fields: ManagerCapFields) {
        this.$fullTypeName = composeSuiType(ManagerCap.$typeName, ...typeArgs) as `${typeof PKG_V1}::ecosystem::ManagerCap`;
        this.$typeArgs = typeArgs;

        this.dummyField = fields.dummyField;
    }

    static reified(): ManagerCapReified {
        return {
            typeName: ManagerCap.$typeName,
            fullTypeName: composeSuiType(ManagerCap.$typeName, ...[]) as `${typeof PKG_V1}::ecosystem::ManagerCap`,
            typeArgs: [] as [],
            isPhantom: ManagerCap.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => ManagerCap.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => ManagerCap.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => ManagerCap.fromBcs(data),
            bcs: ManagerCap.bcs,
            fromJSONField: (field: any) => ManagerCap.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => ManagerCap.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => ManagerCap.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => ManagerCap.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => ManagerCap.fetch(client, id),
            new: (fields: ManagerCapFields) => {
                return new ManagerCap([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return ManagerCap.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<ManagerCap>> {
        return phantom(ManagerCap.reified());
    }
    static get p() {
        return ManagerCap.phantom();
    }

    static get bcs() {
        return bcs.struct("ManagerCap", {
            dummy_field: bcs.bool(),
        });
    }

    static fromFields(fields: Record<string, any>): ManagerCap {
        return ManagerCap.reified().new({
            dummyField: decodeFromFields("bool", fields.dummy_field),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): ManagerCap {
        if (!isManagerCap(item.type)) {
            throw new Error("not a ManagerCap type");
        }

        return ManagerCap.reified().new({
            dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
        });
    }

    static fromBcs(data: Uint8Array): ManagerCap {
        return ManagerCap.fromFields(ManagerCap.bcs.parse(data));
    }

    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): ManagerCap {
        return ManagerCap.reified().new({
            dummyField: decodeFromJSONField("bool", field.dummyField),
        });
    }

    static fromJSON(json: Record<string, any>): ManagerCap {
        if (json.$typeName !== ManagerCap.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return ManagerCap.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): ManagerCap {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isManagerCap(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a ManagerCap object`);
        }
        return ManagerCap.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): ManagerCap {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isManagerCap(data.bcs.type)) {
                throw new Error(`object at is not a ManagerCap object`);
            }

            return ManagerCap.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ManagerCap.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<ManagerCap> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching ManagerCap object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isManagerCap(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ManagerCap object`);
        }

        return ManagerCap.fromSuiObjectData(res.data);
    }
}

/* ============================== FeeInfo =============================== */

export function isFeeInfo(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::ecosystem::FeeInfo`;
}

export interface FeeInfoFields {
    token: ToField<TypeName>;
    value: ToField<"u64">;
}

export type FeeInfoReified = Reified<FeeInfo, FeeInfoFields>;

export class FeeInfo implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::ecosystem::FeeInfo`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = FeeInfo.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::ecosystem::FeeInfo`;
    readonly $typeArgs: [];
    readonly $isPhantom = FeeInfo.$isPhantom;

    readonly token: ToField<TypeName>;
    readonly value: ToField<"u64">;

    private constructor(typeArgs: [], fields: FeeInfoFields) {
        this.$fullTypeName = composeSuiType(FeeInfo.$typeName, ...typeArgs) as `${typeof PKG_V1}::ecosystem::FeeInfo`;
        this.$typeArgs = typeArgs;

        this.token = fields.token;
        this.value = fields.value;
    }

    static reified(): FeeInfoReified {
        return {
            typeName: FeeInfo.$typeName,
            fullTypeName: composeSuiType(FeeInfo.$typeName, ...[]) as `${typeof PKG_V1}::ecosystem::FeeInfo`,
            typeArgs: [] as [],
            isPhantom: FeeInfo.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => FeeInfo.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => FeeInfo.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => FeeInfo.fromBcs(data),
            bcs: FeeInfo.bcs,
            fromJSONField: (field: any) => FeeInfo.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => FeeInfo.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => FeeInfo.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => FeeInfo.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => FeeInfo.fetch(client, id),
            new: (fields: FeeInfoFields) => {
                return new FeeInfo([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return FeeInfo.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<FeeInfo>> {
        return phantom(FeeInfo.reified());
    }
    static get p() {
        return FeeInfo.phantom();
    }

    static get bcs() {
        return bcs.struct("FeeInfo", {
            token: TypeName.bcs,
            value: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): FeeInfo {
        return FeeInfo.reified().new({
            token: decodeFromFields(TypeName.reified(), fields.token),
            value: decodeFromFields("u64", fields.value),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): FeeInfo {
        if (!isFeeInfo(item.type)) {
            throw new Error("not a FeeInfo type");
        }

        return FeeInfo.reified().new({
            token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token),
            value: decodeFromFieldsWithTypes("u64", item.fields.value),
        });
    }

    static fromBcs(data: Uint8Array): FeeInfo {
        return FeeInfo.fromFields(FeeInfo.bcs.parse(data));
    }

    toJSONField() {
        return {
            token: this.token.toJSONField(),
            value: this.value.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): FeeInfo {
        return FeeInfo.reified().new({
            token: decodeFromJSONField(TypeName.reified(), field.token),
            value: decodeFromJSONField("u64", field.value),
        });
    }

    static fromJSON(json: Record<string, any>): FeeInfo {
        if (json.$typeName !== FeeInfo.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return FeeInfo.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): FeeInfo {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isFeeInfo(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a FeeInfo object`);
        }
        return FeeInfo.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): FeeInfo {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isFeeInfo(data.bcs.type)) {
                throw new Error(`object at is not a FeeInfo object`);
            }

            return FeeInfo.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return FeeInfo.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<FeeInfo> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching FeeInfo object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isFeeInfo(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a FeeInfo object`);
        }

        return FeeInfo.fromSuiObjectData(res.data);
    }
}

/* ============================== FeePool =============================== */

export function isFeePool(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::ecosystem::FeePool`;
}

export interface FeePoolFields {
    id: ToField<UID>;
    feeInfos: ToField<Vector<FeeInfo>>;
}

export type FeePoolReified = Reified<FeePool, FeePoolFields>;

export class FeePool implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::ecosystem::FeePool`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = FeePool.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::ecosystem::FeePool`;
    readonly $typeArgs: [];
    readonly $isPhantom = FeePool.$isPhantom;

    readonly id: ToField<UID>;
    readonly feeInfos: ToField<Vector<FeeInfo>>;

    private constructor(typeArgs: [], fields: FeePoolFields) {
        this.$fullTypeName = composeSuiType(FeePool.$typeName, ...typeArgs) as `${typeof PKG_V1}::ecosystem::FeePool`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.feeInfos = fields.feeInfos;
    }

    static reified(): FeePoolReified {
        return {
            typeName: FeePool.$typeName,
            fullTypeName: composeSuiType(FeePool.$typeName, ...[]) as `${typeof PKG_V1}::ecosystem::FeePool`,
            typeArgs: [] as [],
            isPhantom: FeePool.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => FeePool.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => FeePool.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => FeePool.fromBcs(data),
            bcs: FeePool.bcs,
            fromJSONField: (field: any) => FeePool.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => FeePool.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => FeePool.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => FeePool.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => FeePool.fetch(client, id),
            new: (fields: FeePoolFields) => {
                return new FeePool([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return FeePool.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<FeePool>> {
        return phantom(FeePool.reified());
    }
    static get p() {
        return FeePool.phantom();
    }

    static get bcs() {
        return bcs.struct("FeePool", {
            id: UID.bcs,
            fee_infos: bcs.vector(FeeInfo.bcs),
        });
    }

    static fromFields(fields: Record<string, any>): FeePool {
        return FeePool.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            feeInfos: decodeFromFields(reified.vector(FeeInfo.reified()), fields.fee_infos),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): FeePool {
        if (!isFeePool(item.type)) {
            throw new Error("not a FeePool type");
        }

        return FeePool.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            feeInfos: decodeFromFieldsWithTypes(reified.vector(FeeInfo.reified()), item.fields.fee_infos),
        });
    }

    static fromBcs(data: Uint8Array): FeePool {
        return FeePool.fromFields(FeePool.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            feeInfos: fieldToJSON<Vector<FeeInfo>>(`vector<${FeeInfo.$typeName}>`, this.feeInfos),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): FeePool {
        return FeePool.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            feeInfos: decodeFromJSONField(reified.vector(FeeInfo.reified()), field.feeInfos),
        });
    }

    static fromJSON(json: Record<string, any>): FeePool {
        if (json.$typeName !== FeePool.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return FeePool.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): FeePool {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isFeePool(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a FeePool object`);
        }
        return FeePool.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): FeePool {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isFeePool(data.bcs.type)) {
                throw new Error(`object at is not a FeePool object`);
            }

            return FeePool.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return FeePool.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<FeePool> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching FeePool object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isFeePool(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a FeePool object`);
        }

        return FeePool.fromSuiObjectData(res.data);
    }
}

/* ============================== SendFeeEvent =============================== */

export function isSendFeeEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::ecosystem::SendFeeEvent`;
}

export interface SendFeeEventFields {
    token: ToField<TypeName>;
    log: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<Vector<"u8">>>;
}

export type SendFeeEventReified = Reified<SendFeeEvent, SendFeeEventFields>;

export class SendFeeEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::ecosystem::SendFeeEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = SendFeeEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::ecosystem::SendFeeEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = SendFeeEvent.$isPhantom;

    readonly token: ToField<TypeName>;
    readonly log: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<Vector<"u8">>>;

    private constructor(typeArgs: [], fields: SendFeeEventFields) {
        this.$fullTypeName = composeSuiType(SendFeeEvent.$typeName, ...typeArgs) as `${typeof PKG_V1}::ecosystem::SendFeeEvent`;
        this.$typeArgs = typeArgs;

        this.token = fields.token;
        this.log = fields.log;
        this.bcsPadding = fields.bcsPadding;
    }

    static reified(): SendFeeEventReified {
        return {
            typeName: SendFeeEvent.$typeName,
            fullTypeName: composeSuiType(SendFeeEvent.$typeName, ...[]) as `${typeof PKG_V1}::ecosystem::SendFeeEvent`,
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
            token: TypeName.bcs,
            log: bcs.vector(bcs.u64()),
            bcs_padding: bcs.vector(bcs.vector(bcs.u8())),
        });
    }

    static fromFields(fields: Record<string, any>): SendFeeEvent {
        return SendFeeEvent.reified().new({
            token: decodeFromFields(TypeName.reified(), fields.token),
            log: decodeFromFields(reified.vector("u64"), fields.log),
            bcsPadding: decodeFromFields(reified.vector(reified.vector("u8")), fields.bcs_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): SendFeeEvent {
        if (!isSendFeeEvent(item.type)) {
            throw new Error("not a SendFeeEvent type");
        }

        return SendFeeEvent.reified().new({
            token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token),
            log: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.log),
            bcsPadding: decodeFromFieldsWithTypes(reified.vector(reified.vector("u8")), item.fields.bcs_padding),
        });
    }

    static fromBcs(data: Uint8Array): SendFeeEvent {
        return SendFeeEvent.fromFields(SendFeeEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            token: this.token.toJSONField(),
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

    static fromJSONField(field: any): SendFeeEvent {
        return SendFeeEvent.reified().new({
            token: decodeFromJSONField(TypeName.reified(), field.token),
            log: decodeFromJSONField(reified.vector("u64"), field.log),
            bcsPadding: decodeFromJSONField(reified.vector(reified.vector("u8")), field.bcsPadding),
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
