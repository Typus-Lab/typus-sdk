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
    ToTypeStr as ToPhantom,
} from "../../../../_framework/reified";
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../../../_framework/util";
import { Vector } from "../../../../_framework/vector";
import { TreasuryCap } from "../../0x2/coin/structs";
import { UID } from "../../0x2/object/structs";
import { TokenPolicyCap } from "../../0x2/token/structs";
import { PKG_V1 } from "../index";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromB64, fromHEX, toHEX } from "@mysten/sui/utils";

/* ============================== MintEvent =============================== */

export function isMintEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::tgld::MintEvent`;
}

export interface MintEventFields {
    recipient: ToField<"address">;
    log: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<Vector<"u8">>>;
}

export type MintEventReified = Reified<MintEvent, MintEventFields>;

export class MintEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::tgld::MintEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = MintEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::tgld::MintEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = MintEvent.$isPhantom;

    readonly recipient: ToField<"address">;
    readonly log: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<Vector<"u8">>>;

    private constructor(typeArgs: [], fields: MintEventFields) {
        this.$fullTypeName = composeSuiType(MintEvent.$typeName, ...typeArgs) as `${typeof PKG_V1}::tgld::MintEvent`;
        this.$typeArgs = typeArgs;

        this.recipient = fields.recipient;
        this.log = fields.log;
        this.bcsPadding = fields.bcsPadding;
    }

    static reified(): MintEventReified {
        return {
            typeName: MintEvent.$typeName,
            fullTypeName: composeSuiType(MintEvent.$typeName, ...[]) as `${typeof PKG_V1}::tgld::MintEvent`,
            typeArgs: [] as [],
            isPhantom: MintEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => MintEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => MintEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => MintEvent.fromBcs(data),
            bcs: MintEvent.bcs,
            fromJSONField: (field: any) => MintEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => MintEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => MintEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => MintEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => MintEvent.fetch(client, id),
            new: (fields: MintEventFields) => {
                return new MintEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return MintEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<MintEvent>> {
        return phantom(MintEvent.reified());
    }
    static get p() {
        return MintEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("MintEvent", {
            recipient: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            log: bcs.vector(bcs.u64()),
            bcs_padding: bcs.vector(bcs.vector(bcs.u8())),
        });
    }

    static fromFields(fields: Record<string, any>): MintEvent {
        return MintEvent.reified().new({
            recipient: decodeFromFields("address", fields.recipient),
            log: decodeFromFields(reified.vector("u64"), fields.log),
            bcsPadding: decodeFromFields(reified.vector(reified.vector("u8")), fields.bcs_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): MintEvent {
        if (!isMintEvent(item.type)) {
            throw new Error("not a MintEvent type");
        }

        return MintEvent.reified().new({
            recipient: decodeFromFieldsWithTypes("address", item.fields.recipient),
            log: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.log),
            bcsPadding: decodeFromFieldsWithTypes(reified.vector(reified.vector("u8")), item.fields.bcs_padding),
        });
    }

    static fromBcs(data: Uint8Array): MintEvent {
        return MintEvent.fromFields(MintEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            recipient: this.recipient,
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

    static fromJSONField(field: any): MintEvent {
        return MintEvent.reified().new({
            recipient: decodeFromJSONField("address", field.recipient),
            log: decodeFromJSONField(reified.vector("u64"), field.log),
            bcsPadding: decodeFromJSONField(reified.vector(reified.vector("u8")), field.bcsPadding),
        });
    }

    static fromJSON(json: Record<string, any>): MintEvent {
        if (json.$typeName !== MintEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return MintEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): MintEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isMintEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a MintEvent object`);
        }
        return MintEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): MintEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isMintEvent(data.bcs.type)) {
                throw new Error(`object at is not a MintEvent object`);
            }

            return MintEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return MintEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<MintEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching MintEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isMintEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a MintEvent object`);
        }

        return MintEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== BurnEvent =============================== */

export function isBurnEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::tgld::BurnEvent`;
}

export interface BurnEventFields {
    log: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<Vector<"u8">>>;
}

export type BurnEventReified = Reified<BurnEvent, BurnEventFields>;

export class BurnEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::tgld::BurnEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = BurnEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::tgld::BurnEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = BurnEvent.$isPhantom;

    readonly log: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<Vector<"u8">>>;

    private constructor(typeArgs: [], fields: BurnEventFields) {
        this.$fullTypeName = composeSuiType(BurnEvent.$typeName, ...typeArgs) as `${typeof PKG_V1}::tgld::BurnEvent`;
        this.$typeArgs = typeArgs;

        this.log = fields.log;
        this.bcsPadding = fields.bcsPadding;
    }

    static reified(): BurnEventReified {
        return {
            typeName: BurnEvent.$typeName,
            fullTypeName: composeSuiType(BurnEvent.$typeName, ...[]) as `${typeof PKG_V1}::tgld::BurnEvent`,
            typeArgs: [] as [],
            isPhantom: BurnEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => BurnEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => BurnEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => BurnEvent.fromBcs(data),
            bcs: BurnEvent.bcs,
            fromJSONField: (field: any) => BurnEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => BurnEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => BurnEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => BurnEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => BurnEvent.fetch(client, id),
            new: (fields: BurnEventFields) => {
                return new BurnEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return BurnEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<BurnEvent>> {
        return phantom(BurnEvent.reified());
    }
    static get p() {
        return BurnEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("BurnEvent", {
            log: bcs.vector(bcs.u64()),
            bcs_padding: bcs.vector(bcs.vector(bcs.u8())),
        });
    }

    static fromFields(fields: Record<string, any>): BurnEvent {
        return BurnEvent.reified().new({
            log: decodeFromFields(reified.vector("u64"), fields.log),
            bcsPadding: decodeFromFields(reified.vector(reified.vector("u8")), fields.bcs_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): BurnEvent {
        if (!isBurnEvent(item.type)) {
            throw new Error("not a BurnEvent type");
        }

        return BurnEvent.reified().new({
            log: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.log),
            bcsPadding: decodeFromFieldsWithTypes(reified.vector(reified.vector("u8")), item.fields.bcs_padding),
        });
    }

    static fromBcs(data: Uint8Array): BurnEvent {
        return BurnEvent.fromFields(BurnEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
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

    static fromJSONField(field: any): BurnEvent {
        return BurnEvent.reified().new({
            log: decodeFromJSONField(reified.vector("u64"), field.log),
            bcsPadding: decodeFromJSONField(reified.vector(reified.vector("u8")), field.bcsPadding),
        });
    }

    static fromJSON(json: Record<string, any>): BurnEvent {
        if (json.$typeName !== BurnEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return BurnEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): BurnEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isBurnEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a BurnEvent object`);
        }
        return BurnEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): BurnEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBurnEvent(data.bcs.type)) {
                throw new Error(`object at is not a BurnEvent object`);
            }

            return BurnEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return BurnEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<BurnEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching BurnEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isBurnEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BurnEvent object`);
        }

        return BurnEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== TGLD =============================== */

export function isTGLD(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::tgld::TGLD`;
}

export interface TGLDFields {
    dummyField: ToField<"bool">;
}

export type TGLDReified = Reified<TGLD, TGLDFields>;

export class TGLD implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::tgld::TGLD`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = TGLD.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::tgld::TGLD`;
    readonly $typeArgs: [];
    readonly $isPhantom = TGLD.$isPhantom;

    readonly dummyField: ToField<"bool">;

    private constructor(typeArgs: [], fields: TGLDFields) {
        this.$fullTypeName = composeSuiType(TGLD.$typeName, ...typeArgs) as `${typeof PKG_V1}::tgld::TGLD`;
        this.$typeArgs = typeArgs;

        this.dummyField = fields.dummyField;
    }

    static reified(): TGLDReified {
        return {
            typeName: TGLD.$typeName,
            fullTypeName: composeSuiType(TGLD.$typeName, ...[]) as `${typeof PKG_V1}::tgld::TGLD`,
            typeArgs: [] as [],
            isPhantom: TGLD.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => TGLD.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => TGLD.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => TGLD.fromBcs(data),
            bcs: TGLD.bcs,
            fromJSONField: (field: any) => TGLD.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => TGLD.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => TGLD.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => TGLD.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => TGLD.fetch(client, id),
            new: (fields: TGLDFields) => {
                return new TGLD([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return TGLD.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<TGLD>> {
        return phantom(TGLD.reified());
    }
    static get p() {
        return TGLD.phantom();
    }

    static get bcs() {
        return bcs.struct("TGLD", {
            dummy_field: bcs.bool(),
        });
    }

    static fromFields(fields: Record<string, any>): TGLD {
        return TGLD.reified().new({
            dummyField: decodeFromFields("bool", fields.dummy_field),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): TGLD {
        if (!isTGLD(item.type)) {
            throw new Error("not a TGLD type");
        }

        return TGLD.reified().new({
            dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
        });
    }

    static fromBcs(data: Uint8Array): TGLD {
        return TGLD.fromFields(TGLD.bcs.parse(data));
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

    static fromJSONField(field: any): TGLD {
        return TGLD.reified().new({
            dummyField: decodeFromJSONField("bool", field.dummyField),
        });
    }

    static fromJSON(json: Record<string, any>): TGLD {
        if (json.$typeName !== TGLD.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return TGLD.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): TGLD {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isTGLD(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a TGLD object`);
        }
        return TGLD.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): TGLD {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isTGLD(data.bcs.type)) {
                throw new Error(`object at is not a TGLD object`);
            }

            return TGLD.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return TGLD.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<TGLD> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching TGLD object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isTGLD(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TGLD object`);
        }

        return TGLD.fromSuiObjectData(res.data);
    }
}

/* ============================== TgldRegistry =============================== */

export function isTgldRegistry(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::tgld::TgldRegistry`;
}

export interface TgldRegistryFields {
    id: ToField<UID>;
    treasuryCap: ToField<TreasuryCap<ToPhantom<TGLD>>>;
    tokenPolicyCap: ToField<TokenPolicyCap<ToPhantom<TGLD>>>;
}

export type TgldRegistryReified = Reified<TgldRegistry, TgldRegistryFields>;

export class TgldRegistry implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::tgld::TgldRegistry`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = TgldRegistry.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::tgld::TgldRegistry`;
    readonly $typeArgs: [];
    readonly $isPhantom = TgldRegistry.$isPhantom;

    readonly id: ToField<UID>;
    readonly treasuryCap: ToField<TreasuryCap<ToPhantom<TGLD>>>;
    readonly tokenPolicyCap: ToField<TokenPolicyCap<ToPhantom<TGLD>>>;

    private constructor(typeArgs: [], fields: TgldRegistryFields) {
        this.$fullTypeName = composeSuiType(TgldRegistry.$typeName, ...typeArgs) as `${typeof PKG_V1}::tgld::TgldRegistry`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.treasuryCap = fields.treasuryCap;
        this.tokenPolicyCap = fields.tokenPolicyCap;
    }

    static reified(): TgldRegistryReified {
        return {
            typeName: TgldRegistry.$typeName,
            fullTypeName: composeSuiType(TgldRegistry.$typeName, ...[]) as `${typeof PKG_V1}::tgld::TgldRegistry`,
            typeArgs: [] as [],
            isPhantom: TgldRegistry.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => TgldRegistry.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => TgldRegistry.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => TgldRegistry.fromBcs(data),
            bcs: TgldRegistry.bcs,
            fromJSONField: (field: any) => TgldRegistry.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => TgldRegistry.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => TgldRegistry.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => TgldRegistry.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => TgldRegistry.fetch(client, id),
            new: (fields: TgldRegistryFields) => {
                return new TgldRegistry([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return TgldRegistry.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<TgldRegistry>> {
        return phantom(TgldRegistry.reified());
    }
    static get p() {
        return TgldRegistry.phantom();
    }

    static get bcs() {
        return bcs.struct("TgldRegistry", {
            id: UID.bcs,
            treasury_cap: TreasuryCap.bcs,
            token_policy_cap: TokenPolicyCap.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): TgldRegistry {
        return TgldRegistry.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            treasuryCap: decodeFromFields(TreasuryCap.reified(reified.phantom(TGLD.reified())), fields.treasury_cap),
            tokenPolicyCap: decodeFromFields(TokenPolicyCap.reified(reified.phantom(TGLD.reified())), fields.token_policy_cap),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): TgldRegistry {
        if (!isTgldRegistry(item.type)) {
            throw new Error("not a TgldRegistry type");
        }

        return TgldRegistry.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            treasuryCap: decodeFromFieldsWithTypes(TreasuryCap.reified(reified.phantom(TGLD.reified())), item.fields.treasury_cap),
            tokenPolicyCap: decodeFromFieldsWithTypes(
                TokenPolicyCap.reified(reified.phantom(TGLD.reified())),
                item.fields.token_policy_cap
            ),
        });
    }

    static fromBcs(data: Uint8Array): TgldRegistry {
        return TgldRegistry.fromFields(TgldRegistry.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            treasuryCap: this.treasuryCap.toJSONField(),
            tokenPolicyCap: this.tokenPolicyCap.toJSONField(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): TgldRegistry {
        return TgldRegistry.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            treasuryCap: decodeFromJSONField(TreasuryCap.reified(reified.phantom(TGLD.reified())), field.treasuryCap),
            tokenPolicyCap: decodeFromJSONField(TokenPolicyCap.reified(reified.phantom(TGLD.reified())), field.tokenPolicyCap),
        });
    }

    static fromJSON(json: Record<string, any>): TgldRegistry {
        if (json.$typeName !== TgldRegistry.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return TgldRegistry.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): TgldRegistry {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isTgldRegistry(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a TgldRegistry object`);
        }
        return TgldRegistry.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): TgldRegistry {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isTgldRegistry(data.bcs.type)) {
                throw new Error(`object at is not a TgldRegistry object`);
            }

            return TgldRegistry.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return TgldRegistry.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<TgldRegistry> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching TgldRegistry object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isTgldRegistry(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TgldRegistry object`);
        }

        return TgldRegistry.fromSuiObjectData(res.data);
    }
}
