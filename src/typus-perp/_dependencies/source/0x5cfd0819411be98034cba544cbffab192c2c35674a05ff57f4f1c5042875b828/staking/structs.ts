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
import { ID, UID } from "../../0x2/object/structs";
import { Table } from "../../0x2/table/structs";
import { PKG_V1 } from "../index";
import { Tails, ManagerCap as ManagerCap1 } from "../typus-nft/structs";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromB64, fromHEX, toHEX } from "@mysten/sui/utils";

/* ============================== ManagerCap =============================== */

export function isManagerCap(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::staking::ManagerCap`;
}

export interface ManagerCapFields {
    id: ToField<UID>;
}

export type ManagerCapReified = Reified<ManagerCap, ManagerCapFields>;

export class ManagerCap implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::staking::ManagerCap`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = ManagerCap.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::staking::ManagerCap`;
    readonly $typeArgs: [];
    readonly $isPhantom = ManagerCap.$isPhantom;

    readonly id: ToField<UID>;

    private constructor(typeArgs: [], fields: ManagerCapFields) {
        this.$fullTypeName = composeSuiType(ManagerCap.$typeName, ...typeArgs) as `${typeof PKG_V1}::staking::ManagerCap`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
    }

    static reified(): ManagerCapReified {
        return {
            typeName: ManagerCap.$typeName,
            fullTypeName: composeSuiType(ManagerCap.$typeName, ...[]) as `${typeof PKG_V1}::staking::ManagerCap`,
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
            id: UID.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): ManagerCap {
        return ManagerCap.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): ManagerCap {
        if (!isManagerCap(item.type)) {
            throw new Error("not a ManagerCap type");
        }

        return ManagerCap.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
        });
    }

    static fromBcs(data: Uint8Array): ManagerCap {
        return ManagerCap.fromFields(ManagerCap.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
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
            id: decodeFromJSONField(UID.reified(), field.id),
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

/* ============================== LevelUpEvent =============================== */

export function isLevelUpEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::staking::LevelUpEvent`;
}

export interface LevelUpEventFields {
    nftId: ToField<ID>;
    sender: ToField<"address">;
    number: ToField<"u64">;
    level: ToField<"u64">;
}

export type LevelUpEventReified = Reified<LevelUpEvent, LevelUpEventFields>;

export class LevelUpEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::staking::LevelUpEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = LevelUpEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::staking::LevelUpEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = LevelUpEvent.$isPhantom;

    readonly nftId: ToField<ID>;
    readonly sender: ToField<"address">;
    readonly number: ToField<"u64">;
    readonly level: ToField<"u64">;

    private constructor(typeArgs: [], fields: LevelUpEventFields) {
        this.$fullTypeName = composeSuiType(LevelUpEvent.$typeName, ...typeArgs) as `${typeof PKG_V1}::staking::LevelUpEvent`;
        this.$typeArgs = typeArgs;

        this.nftId = fields.nftId;
        this.sender = fields.sender;
        this.number = fields.number;
        this.level = fields.level;
    }

    static reified(): LevelUpEventReified {
        return {
            typeName: LevelUpEvent.$typeName,
            fullTypeName: composeSuiType(LevelUpEvent.$typeName, ...[]) as `${typeof PKG_V1}::staking::LevelUpEvent`,
            typeArgs: [] as [],
            isPhantom: LevelUpEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => LevelUpEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => LevelUpEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => LevelUpEvent.fromBcs(data),
            bcs: LevelUpEvent.bcs,
            fromJSONField: (field: any) => LevelUpEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => LevelUpEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => LevelUpEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => LevelUpEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => LevelUpEvent.fetch(client, id),
            new: (fields: LevelUpEventFields) => {
                return new LevelUpEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return LevelUpEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<LevelUpEvent>> {
        return phantom(LevelUpEvent.reified());
    }
    static get p() {
        return LevelUpEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("LevelUpEvent", {
            nft_id: ID.bcs,
            sender: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            number: bcs.u64(),
            level: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): LevelUpEvent {
        return LevelUpEvent.reified().new({
            nftId: decodeFromFields(ID.reified(), fields.nft_id),
            sender: decodeFromFields("address", fields.sender),
            number: decodeFromFields("u64", fields.number),
            level: decodeFromFields("u64", fields.level),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): LevelUpEvent {
        if (!isLevelUpEvent(item.type)) {
            throw new Error("not a LevelUpEvent type");
        }

        return LevelUpEvent.reified().new({
            nftId: decodeFromFieldsWithTypes(ID.reified(), item.fields.nft_id),
            sender: decodeFromFieldsWithTypes("address", item.fields.sender),
            number: decodeFromFieldsWithTypes("u64", item.fields.number),
            level: decodeFromFieldsWithTypes("u64", item.fields.level),
        });
    }

    static fromBcs(data: Uint8Array): LevelUpEvent {
        return LevelUpEvent.fromFields(LevelUpEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            nftId: this.nftId,
            sender: this.sender,
            number: this.number.toString(),
            level: this.level.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): LevelUpEvent {
        return LevelUpEvent.reified().new({
            nftId: decodeFromJSONField(ID.reified(), field.nftId),
            sender: decodeFromJSONField("address", field.sender),
            number: decodeFromJSONField("u64", field.number),
            level: decodeFromJSONField("u64", field.level),
        });
    }

    static fromJSON(json: Record<string, any>): LevelUpEvent {
        if (json.$typeName !== LevelUpEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return LevelUpEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): LevelUpEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isLevelUpEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a LevelUpEvent object`);
        }
        return LevelUpEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): LevelUpEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isLevelUpEvent(data.bcs.type)) {
                throw new Error(`object at is not a LevelUpEvent object`);
            }

            return LevelUpEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return LevelUpEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<LevelUpEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching LevelUpEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isLevelUpEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a LevelUpEvent object`);
        }

        return LevelUpEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== NftExtension =============================== */

export function isNftExtension(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::staking::NftExtension`;
}

export interface NftExtensionFields {
    nftTable: ToField<Table<"address", ToPhantom<StakingTails>>>;
    nftManagerCap: ToField<ManagerCap1>;
}

export type NftExtensionReified = Reified<NftExtension, NftExtensionFields>;

export class NftExtension implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::staking::NftExtension`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = NftExtension.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::staking::NftExtension`;
    readonly $typeArgs: [];
    readonly $isPhantom = NftExtension.$isPhantom;

    readonly nftTable: ToField<Table<"address", ToPhantom<StakingTails>>>;
    readonly nftManagerCap: ToField<ManagerCap1>;

    private constructor(typeArgs: [], fields: NftExtensionFields) {
        this.$fullTypeName = composeSuiType(NftExtension.$typeName, ...typeArgs) as `${typeof PKG_V1}::staking::NftExtension`;
        this.$typeArgs = typeArgs;

        this.nftTable = fields.nftTable;
        this.nftManagerCap = fields.nftManagerCap;
    }

    static reified(): NftExtensionReified {
        return {
            typeName: NftExtension.$typeName,
            fullTypeName: composeSuiType(NftExtension.$typeName, ...[]) as `${typeof PKG_V1}::staking::NftExtension`,
            typeArgs: [] as [],
            isPhantom: NftExtension.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => NftExtension.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => NftExtension.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => NftExtension.fromBcs(data),
            bcs: NftExtension.bcs,
            fromJSONField: (field: any) => NftExtension.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => NftExtension.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => NftExtension.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => NftExtension.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => NftExtension.fetch(client, id),
            new: (fields: NftExtensionFields) => {
                return new NftExtension([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return NftExtension.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<NftExtension>> {
        return phantom(NftExtension.reified());
    }
    static get p() {
        return NftExtension.phantom();
    }

    static get bcs() {
        return bcs.struct("NftExtension", {
            nft_table: Table.bcs,
            nft_manager_cap: ManagerCap1.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): NftExtension {
        return NftExtension.reified().new({
            nftTable: decodeFromFields(
                Table.reified(reified.phantom("address"), reified.phantom(StakingTails.reified())),
                fields.nft_table
            ),
            nftManagerCap: decodeFromFields(ManagerCap1.reified(), fields.nft_manager_cap),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): NftExtension {
        if (!isNftExtension(item.type)) {
            throw new Error("not a NftExtension type");
        }

        return NftExtension.reified().new({
            nftTable: decodeFromFieldsWithTypes(
                Table.reified(reified.phantom("address"), reified.phantom(StakingTails.reified())),
                item.fields.nft_table
            ),
            nftManagerCap: decodeFromFieldsWithTypes(ManagerCap1.reified(), item.fields.nft_manager_cap),
        });
    }

    static fromBcs(data: Uint8Array): NftExtension {
        return NftExtension.fromFields(NftExtension.bcs.parse(data));
    }

    toJSONField() {
        return {
            nftTable: this.nftTable.toJSONField(),
            nftManagerCap: this.nftManagerCap.toJSONField(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): NftExtension {
        return NftExtension.reified().new({
            nftTable: decodeFromJSONField(
                Table.reified(reified.phantom("address"), reified.phantom(StakingTails.reified())),
                field.nftTable
            ),
            nftManagerCap: decodeFromJSONField(ManagerCap1.reified(), field.nftManagerCap),
        });
    }

    static fromJSON(json: Record<string, any>): NftExtension {
        if (json.$typeName !== NftExtension.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return NftExtension.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): NftExtension {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isNftExtension(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a NftExtension object`);
        }
        return NftExtension.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): NftExtension {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isNftExtension(data.bcs.type)) {
                throw new Error(`object at is not a NftExtension object`);
            }

            return NftExtension.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return NftExtension.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<NftExtension> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching NftExtension object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isNftExtension(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a NftExtension object`);
        }

        return NftExtension.fromSuiObjectData(res.data);
    }
}

/* ============================== Registry =============================== */

export function isRegistry(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::staking::Registry`;
}

export interface RegistryFields {
    id: ToField<UID>;
}

export type RegistryReified = Reified<Registry, RegistryFields>;

export class Registry implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::staking::Registry`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = Registry.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::staking::Registry`;
    readonly $typeArgs: [];
    readonly $isPhantom = Registry.$isPhantom;

    readonly id: ToField<UID>;

    private constructor(typeArgs: [], fields: RegistryFields) {
        this.$fullTypeName = composeSuiType(Registry.$typeName, ...typeArgs) as `${typeof PKG_V1}::staking::Registry`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
    }

    static reified(): RegistryReified {
        return {
            typeName: Registry.$typeName,
            fullTypeName: composeSuiType(Registry.$typeName, ...[]) as `${typeof PKG_V1}::staking::Registry`,
            typeArgs: [] as [],
            isPhantom: Registry.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Registry.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Registry.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Registry.fromBcs(data),
            bcs: Registry.bcs,
            fromJSONField: (field: any) => Registry.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Registry.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Registry.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => Registry.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => Registry.fetch(client, id),
            new: (fields: RegistryFields) => {
                return new Registry([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Registry.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<Registry>> {
        return phantom(Registry.reified());
    }
    static get p() {
        return Registry.phantom();
    }

    static get bcs() {
        return bcs.struct("Registry", {
            id: UID.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): Registry {
        return Registry.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Registry {
        if (!isRegistry(item.type)) {
            throw new Error("not a Registry type");
        }

        return Registry.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
        });
    }

    static fromBcs(data: Uint8Array): Registry {
        return Registry.fromFields(Registry.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): Registry {
        return Registry.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
        });
    }

    static fromJSON(json: Record<string, any>): Registry {
        if (json.$typeName !== Registry.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return Registry.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): Registry {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRegistry(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Registry object`);
        }
        return Registry.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): Registry {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isRegistry(data.bcs.type)) {
                throw new Error(`object at is not a Registry object`);
            }

            return Registry.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Registry.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<Registry> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Registry object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isRegistry(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Registry object`);
        }

        return Registry.fromSuiObjectData(res.data);
    }
}

/* ============================== StakingTails =============================== */

export function isStakingTails(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::staking::StakingTails`;
}

export interface StakingTailsFields {
    nft: ToField<Tails>;
    snapshotMs: ToField<"u64">;
    updatingUrl: ToField<"bool">;
}

export type StakingTailsReified = Reified<StakingTails, StakingTailsFields>;

export class StakingTails implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::staking::StakingTails`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = StakingTails.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::staking::StakingTails`;
    readonly $typeArgs: [];
    readonly $isPhantom = StakingTails.$isPhantom;

    readonly nft: ToField<Tails>;
    readonly snapshotMs: ToField<"u64">;
    readonly updatingUrl: ToField<"bool">;

    private constructor(typeArgs: [], fields: StakingTailsFields) {
        this.$fullTypeName = composeSuiType(StakingTails.$typeName, ...typeArgs) as `${typeof PKG_V1}::staking::StakingTails`;
        this.$typeArgs = typeArgs;

        this.nft = fields.nft;
        this.snapshotMs = fields.snapshotMs;
        this.updatingUrl = fields.updatingUrl;
    }

    static reified(): StakingTailsReified {
        return {
            typeName: StakingTails.$typeName,
            fullTypeName: composeSuiType(StakingTails.$typeName, ...[]) as `${typeof PKG_V1}::staking::StakingTails`,
            typeArgs: [] as [],
            isPhantom: StakingTails.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => StakingTails.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => StakingTails.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => StakingTails.fromBcs(data),
            bcs: StakingTails.bcs,
            fromJSONField: (field: any) => StakingTails.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => StakingTails.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => StakingTails.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => StakingTails.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => StakingTails.fetch(client, id),
            new: (fields: StakingTailsFields) => {
                return new StakingTails([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return StakingTails.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<StakingTails>> {
        return phantom(StakingTails.reified());
    }
    static get p() {
        return StakingTails.phantom();
    }

    static get bcs() {
        return bcs.struct("StakingTails", {
            nft: Tails.bcs,
            snapshot_ms: bcs.u64(),
            updating_url: bcs.bool(),
        });
    }

    static fromFields(fields: Record<string, any>): StakingTails {
        return StakingTails.reified().new({
            nft: decodeFromFields(Tails.reified(), fields.nft),
            snapshotMs: decodeFromFields("u64", fields.snapshot_ms),
            updatingUrl: decodeFromFields("bool", fields.updating_url),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): StakingTails {
        if (!isStakingTails(item.type)) {
            throw new Error("not a StakingTails type");
        }

        return StakingTails.reified().new({
            nft: decodeFromFieldsWithTypes(Tails.reified(), item.fields.nft),
            snapshotMs: decodeFromFieldsWithTypes("u64", item.fields.snapshot_ms),
            updatingUrl: decodeFromFieldsWithTypes("bool", item.fields.updating_url),
        });
    }

    static fromBcs(data: Uint8Array): StakingTails {
        return StakingTails.fromFields(StakingTails.bcs.parse(data));
    }

    toJSONField() {
        return {
            nft: this.nft.toJSONField(),
            snapshotMs: this.snapshotMs.toString(),
            updatingUrl: this.updatingUrl,
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): StakingTails {
        return StakingTails.reified().new({
            nft: decodeFromJSONField(Tails.reified(), field.nft),
            snapshotMs: decodeFromJSONField("u64", field.snapshotMs),
            updatingUrl: decodeFromJSONField("bool", field.updatingUrl),
        });
    }

    static fromJSON(json: Record<string, any>): StakingTails {
        if (json.$typeName !== StakingTails.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return StakingTails.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): StakingTails {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isStakingTails(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a StakingTails object`);
        }
        return StakingTails.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): StakingTails {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isStakingTails(data.bcs.type)) {
                throw new Error(`object at is not a StakingTails object`);
            }

            return StakingTails.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return StakingTails.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<StakingTails> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching StakingTails object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isStakingTails(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a StakingTails object`);
        }

        return StakingTails.fromSuiObjectData(res.data);
    }
}
