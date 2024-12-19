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
import { ID, UID } from "../../0x2/object/structs";
import { TableVec } from "../../0x2/table-vec/structs";
import { VecMap } from "../../0x2/vec-map/structs";
import { TypusBidReceipt } from "../../0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded/vault/structs";
import { PKG_V1, PKG_V13 } from "../index";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromB64, fromHEX, toHEX } from "@mysten/sui/utils";

/* ============================== AddAuthorutyEvent =============================== */

export function isAddAuthorutyEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::auto_bid::AddAuthorutyEvent`;
}

export interface AddAuthorutyEventFields {
    newAuthority: ToField<"address">;
    signer: ToField<"address">;
}

export type AddAuthorutyEventReified = Reified<AddAuthorutyEvent, AddAuthorutyEventFields>;

export class AddAuthorutyEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::auto_bid::AddAuthorutyEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = AddAuthorutyEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::auto_bid::AddAuthorutyEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = AddAuthorutyEvent.$isPhantom;

    readonly newAuthority: ToField<"address">;
    readonly signer: ToField<"address">;

    private constructor(typeArgs: [], fields: AddAuthorutyEventFields) {
        this.$fullTypeName = composeSuiType(AddAuthorutyEvent.$typeName, ...typeArgs) as `${typeof PKG_V1}::auto_bid::AddAuthorutyEvent`;
        this.$typeArgs = typeArgs;

        this.newAuthority = fields.newAuthority;
        this.signer = fields.signer;
    }

    static reified(): AddAuthorutyEventReified {
        return {
            typeName: AddAuthorutyEvent.$typeName,
            fullTypeName: composeSuiType(AddAuthorutyEvent.$typeName, ...[]) as `${typeof PKG_V1}::auto_bid::AddAuthorutyEvent`,
            typeArgs: [] as [],
            isPhantom: AddAuthorutyEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => AddAuthorutyEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => AddAuthorutyEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => AddAuthorutyEvent.fromBcs(data),
            bcs: AddAuthorutyEvent.bcs,
            fromJSONField: (field: any) => AddAuthorutyEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => AddAuthorutyEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => AddAuthorutyEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => AddAuthorutyEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => AddAuthorutyEvent.fetch(client, id),
            new: (fields: AddAuthorutyEventFields) => {
                return new AddAuthorutyEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return AddAuthorutyEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<AddAuthorutyEvent>> {
        return phantom(AddAuthorutyEvent.reified());
    }
    static get p() {
        return AddAuthorutyEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("AddAuthorutyEvent", {
            new_authority: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        });
    }

    static fromFields(fields: Record<string, any>): AddAuthorutyEvent {
        return AddAuthorutyEvent.reified().new({
            newAuthority: decodeFromFields("address", fields.new_authority),
            signer: decodeFromFields("address", fields.signer),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): AddAuthorutyEvent {
        if (!isAddAuthorutyEvent(item.type)) {
            throw new Error("not a AddAuthorutyEvent type");
        }

        return AddAuthorutyEvent.reified().new({
            newAuthority: decodeFromFieldsWithTypes("address", item.fields.new_authority),
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
        });
    }

    static fromBcs(data: Uint8Array): AddAuthorutyEvent {
        return AddAuthorutyEvent.fromFields(AddAuthorutyEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            newAuthority: this.newAuthority,
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

    static fromJSONField(field: any): AddAuthorutyEvent {
        return AddAuthorutyEvent.reified().new({
            newAuthority: decodeFromJSONField("address", field.newAuthority),
            signer: decodeFromJSONField("address", field.signer),
        });
    }

    static fromJSON(json: Record<string, any>): AddAuthorutyEvent {
        if (json.$typeName !== AddAuthorutyEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return AddAuthorutyEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): AddAuthorutyEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isAddAuthorutyEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a AddAuthorutyEvent object`);
        }
        return AddAuthorutyEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): AddAuthorutyEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isAddAuthorutyEvent(data.bcs.type)) {
                throw new Error(`object at is not a AddAuthorutyEvent object`);
            }

            return AddAuthorutyEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return AddAuthorutyEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<AddAuthorutyEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching AddAuthorutyEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isAddAuthorutyEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AddAuthorutyEvent object`);
        }

        return AddAuthorutyEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== AutoBidEvent =============================== */

export function isAutoBidEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::auto_bid::AutoBidEvent`;
}

export interface AutoBidEventFields {
    dummyField: ToField<"bool">;
}

export type AutoBidEventReified = Reified<AutoBidEvent, AutoBidEventFields>;

export class AutoBidEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::auto_bid::AutoBidEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = AutoBidEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::auto_bid::AutoBidEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = AutoBidEvent.$isPhantom;

    readonly dummyField: ToField<"bool">;

    private constructor(typeArgs: [], fields: AutoBidEventFields) {
        this.$fullTypeName = composeSuiType(AutoBidEvent.$typeName, ...typeArgs) as `${typeof PKG_V1}::auto_bid::AutoBidEvent`;
        this.$typeArgs = typeArgs;

        this.dummyField = fields.dummyField;
    }

    static reified(): AutoBidEventReified {
        return {
            typeName: AutoBidEvent.$typeName,
            fullTypeName: composeSuiType(AutoBidEvent.$typeName, ...[]) as `${typeof PKG_V1}::auto_bid::AutoBidEvent`,
            typeArgs: [] as [],
            isPhantom: AutoBidEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => AutoBidEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => AutoBidEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => AutoBidEvent.fromBcs(data),
            bcs: AutoBidEvent.bcs,
            fromJSONField: (field: any) => AutoBidEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => AutoBidEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => AutoBidEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => AutoBidEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => AutoBidEvent.fetch(client, id),
            new: (fields: AutoBidEventFields) => {
                return new AutoBidEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return AutoBidEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<AutoBidEvent>> {
        return phantom(AutoBidEvent.reified());
    }
    static get p() {
        return AutoBidEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("AutoBidEvent", {
            dummy_field: bcs.bool(),
        });
    }

    static fromFields(fields: Record<string, any>): AutoBidEvent {
        return AutoBidEvent.reified().new({
            dummyField: decodeFromFields("bool", fields.dummy_field),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): AutoBidEvent {
        if (!isAutoBidEvent(item.type)) {
            throw new Error("not a AutoBidEvent type");
        }

        return AutoBidEvent.reified().new({
            dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
        });
    }

    static fromBcs(data: Uint8Array): AutoBidEvent {
        return AutoBidEvent.fromFields(AutoBidEvent.bcs.parse(data));
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

    static fromJSONField(field: any): AutoBidEvent {
        return AutoBidEvent.reified().new({
            dummyField: decodeFromJSONField("bool", field.dummyField),
        });
    }

    static fromJSON(json: Record<string, any>): AutoBidEvent {
        if (json.$typeName !== AutoBidEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return AutoBidEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): AutoBidEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isAutoBidEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a AutoBidEvent object`);
        }
        return AutoBidEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): AutoBidEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isAutoBidEvent(data.bcs.type)) {
                throw new Error(`object at is not a AutoBidEvent object`);
            }

            return AutoBidEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return AutoBidEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<AutoBidEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching AutoBidEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isAutoBidEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AutoBidEvent object`);
        }

        return AutoBidEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== CloseStrategyEvent =============================== */

export function isCloseStrategyEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::auto_bid::CloseStrategyEvent`;
}

export interface CloseStrategyEventFields {
    vaultIndex: ToField<"u64">;
    signalIndex: ToField<"u64">;
    user: ToField<"address">;
    pricePercentage: ToField<"u64">;
    size: ToField<"u64">;
    maxTimes: ToField<"u64">;
    targetRounds: ToField<Vector<"u64">>;
    u64Padding: ToField<Vector<"u64">>;
    bidTimes: ToField<"u64">;
    bidRound: ToField<"u64">;
    bidTsMs: ToField<"u64">;
}

export type CloseStrategyEventReified = Reified<CloseStrategyEvent, CloseStrategyEventFields>;

export class CloseStrategyEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::auto_bid::CloseStrategyEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = CloseStrategyEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::auto_bid::CloseStrategyEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = CloseStrategyEvent.$isPhantom;

    readonly vaultIndex: ToField<"u64">;
    readonly signalIndex: ToField<"u64">;
    readonly user: ToField<"address">;
    readonly pricePercentage: ToField<"u64">;
    readonly size: ToField<"u64">;
    readonly maxTimes: ToField<"u64">;
    readonly targetRounds: ToField<Vector<"u64">>;
    readonly u64Padding: ToField<Vector<"u64">>;
    readonly bidTimes: ToField<"u64">;
    readonly bidRound: ToField<"u64">;
    readonly bidTsMs: ToField<"u64">;

    private constructor(typeArgs: [], fields: CloseStrategyEventFields) {
        this.$fullTypeName = composeSuiType(CloseStrategyEvent.$typeName, ...typeArgs) as `${typeof PKG_V1}::auto_bid::CloseStrategyEvent`;
        this.$typeArgs = typeArgs;

        this.vaultIndex = fields.vaultIndex;
        this.signalIndex = fields.signalIndex;
        this.user = fields.user;
        this.pricePercentage = fields.pricePercentage;
        this.size = fields.size;
        this.maxTimes = fields.maxTimes;
        this.targetRounds = fields.targetRounds;
        this.u64Padding = fields.u64Padding;
        this.bidTimes = fields.bidTimes;
        this.bidRound = fields.bidRound;
        this.bidTsMs = fields.bidTsMs;
    }

    static reified(): CloseStrategyEventReified {
        return {
            typeName: CloseStrategyEvent.$typeName,
            fullTypeName: composeSuiType(CloseStrategyEvent.$typeName, ...[]) as `${typeof PKG_V1}::auto_bid::CloseStrategyEvent`,
            typeArgs: [] as [],
            isPhantom: CloseStrategyEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => CloseStrategyEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => CloseStrategyEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => CloseStrategyEvent.fromBcs(data),
            bcs: CloseStrategyEvent.bcs,
            fromJSONField: (field: any) => CloseStrategyEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => CloseStrategyEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => CloseStrategyEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => CloseStrategyEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => CloseStrategyEvent.fetch(client, id),
            new: (fields: CloseStrategyEventFields) => {
                return new CloseStrategyEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return CloseStrategyEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<CloseStrategyEvent>> {
        return phantom(CloseStrategyEvent.reified());
    }
    static get p() {
        return CloseStrategyEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("CloseStrategyEvent", {
            vault_index: bcs.u64(),
            signal_index: bcs.u64(),
            user: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            price_percentage: bcs.u64(),
            size: bcs.u64(),
            max_times: bcs.u64(),
            target_rounds: bcs.vector(bcs.u64()),
            u64_padding: bcs.vector(bcs.u64()),
            bid_times: bcs.u64(),
            bid_round: bcs.u64(),
            bid_ts_ms: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): CloseStrategyEvent {
        return CloseStrategyEvent.reified().new({
            vaultIndex: decodeFromFields("u64", fields.vault_index),
            signalIndex: decodeFromFields("u64", fields.signal_index),
            user: decodeFromFields("address", fields.user),
            pricePercentage: decodeFromFields("u64", fields.price_percentage),
            size: decodeFromFields("u64", fields.size),
            maxTimes: decodeFromFields("u64", fields.max_times),
            targetRounds: decodeFromFields(reified.vector("u64"), fields.target_rounds),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
            bidTimes: decodeFromFields("u64", fields.bid_times),
            bidRound: decodeFromFields("u64", fields.bid_round),
            bidTsMs: decodeFromFields("u64", fields.bid_ts_ms),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): CloseStrategyEvent {
        if (!isCloseStrategyEvent(item.type)) {
            throw new Error("not a CloseStrategyEvent type");
        }

        return CloseStrategyEvent.reified().new({
            vaultIndex: decodeFromFieldsWithTypes("u64", item.fields.vault_index),
            signalIndex: decodeFromFieldsWithTypes("u64", item.fields.signal_index),
            user: decodeFromFieldsWithTypes("address", item.fields.user),
            pricePercentage: decodeFromFieldsWithTypes("u64", item.fields.price_percentage),
            size: decodeFromFieldsWithTypes("u64", item.fields.size),
            maxTimes: decodeFromFieldsWithTypes("u64", item.fields.max_times),
            targetRounds: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.target_rounds),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
            bidTimes: decodeFromFieldsWithTypes("u64", item.fields.bid_times),
            bidRound: decodeFromFieldsWithTypes("u64", item.fields.bid_round),
            bidTsMs: decodeFromFieldsWithTypes("u64", item.fields.bid_ts_ms),
        });
    }

    static fromBcs(data: Uint8Array): CloseStrategyEvent {
        return CloseStrategyEvent.fromFields(CloseStrategyEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            vaultIndex: this.vaultIndex.toString(),
            signalIndex: this.signalIndex.toString(),
            user: this.user,
            pricePercentage: this.pricePercentage.toString(),
            size: this.size.toString(),
            maxTimes: this.maxTimes.toString(),
            targetRounds: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.targetRounds),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
            bidTimes: this.bidTimes.toString(),
            bidRound: this.bidRound.toString(),
            bidTsMs: this.bidTsMs.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): CloseStrategyEvent {
        return CloseStrategyEvent.reified().new({
            vaultIndex: decodeFromJSONField("u64", field.vaultIndex),
            signalIndex: decodeFromJSONField("u64", field.signalIndex),
            user: decodeFromJSONField("address", field.user),
            pricePercentage: decodeFromJSONField("u64", field.pricePercentage),
            size: decodeFromJSONField("u64", field.size),
            maxTimes: decodeFromJSONField("u64", field.maxTimes),
            targetRounds: decodeFromJSONField(reified.vector("u64"), field.targetRounds),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
            bidTimes: decodeFromJSONField("u64", field.bidTimes),
            bidRound: decodeFromJSONField("u64", field.bidRound),
            bidTsMs: decodeFromJSONField("u64", field.bidTsMs),
        });
    }

    static fromJSON(json: Record<string, any>): CloseStrategyEvent {
        if (json.$typeName !== CloseStrategyEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return CloseStrategyEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): CloseStrategyEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isCloseStrategyEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a CloseStrategyEvent object`);
        }
        return CloseStrategyEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): CloseStrategyEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isCloseStrategyEvent(data.bcs.type)) {
                throw new Error(`object at is not a CloseStrategyEvent object`);
            }

            return CloseStrategyEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return CloseStrategyEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<CloseStrategyEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching CloseStrategyEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isCloseStrategyEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a CloseStrategyEvent object`);
        }

        return CloseStrategyEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== CloseStrategyEventV2 =============================== */

export function isCloseStrategyEventV2(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::auto_bid::CloseStrategyEventV2`;
}

export interface CloseStrategyEventV2Fields {
    vaultIndex: ToField<"u64">;
    signalIndex: ToField<"u64">;
    user: ToField<"address">;
    pricePercentage: ToField<"u64">;
    size: ToField<"u64">;
    maxTimes: ToField<"u64">;
    targetRounds: ToField<Vector<"u64">>;
    u64Padding: ToField<Vector<"u64">>;
    bidTimes: ToField<"u64">;
    bidRound: ToField<"u64">;
    bidTsMs: ToField<"u64">;
    bidRounds: ToField<Vector<"u64">>;
    accumulatedProfit: ToField<"u64">;
}

export type CloseStrategyEventV2Reified = Reified<CloseStrategyEventV2, CloseStrategyEventV2Fields>;

export class CloseStrategyEventV2 implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::auto_bid::CloseStrategyEventV2`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = CloseStrategyEventV2.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::auto_bid::CloseStrategyEventV2`;
    readonly $typeArgs: [];
    readonly $isPhantom = CloseStrategyEventV2.$isPhantom;

    readonly vaultIndex: ToField<"u64">;
    readonly signalIndex: ToField<"u64">;
    readonly user: ToField<"address">;
    readonly pricePercentage: ToField<"u64">;
    readonly size: ToField<"u64">;
    readonly maxTimes: ToField<"u64">;
    readonly targetRounds: ToField<Vector<"u64">>;
    readonly u64Padding: ToField<Vector<"u64">>;
    readonly bidTimes: ToField<"u64">;
    readonly bidRound: ToField<"u64">;
    readonly bidTsMs: ToField<"u64">;
    readonly bidRounds: ToField<Vector<"u64">>;
    readonly accumulatedProfit: ToField<"u64">;

    private constructor(typeArgs: [], fields: CloseStrategyEventV2Fields) {
        this.$fullTypeName = composeSuiType(
            CloseStrategyEventV2.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::auto_bid::CloseStrategyEventV2`;
        this.$typeArgs = typeArgs;

        this.vaultIndex = fields.vaultIndex;
        this.signalIndex = fields.signalIndex;
        this.user = fields.user;
        this.pricePercentage = fields.pricePercentage;
        this.size = fields.size;
        this.maxTimes = fields.maxTimes;
        this.targetRounds = fields.targetRounds;
        this.u64Padding = fields.u64Padding;
        this.bidTimes = fields.bidTimes;
        this.bidRound = fields.bidRound;
        this.bidTsMs = fields.bidTsMs;
        this.bidRounds = fields.bidRounds;
        this.accumulatedProfit = fields.accumulatedProfit;
    }

    static reified(): CloseStrategyEventV2Reified {
        return {
            typeName: CloseStrategyEventV2.$typeName,
            fullTypeName: composeSuiType(CloseStrategyEventV2.$typeName, ...[]) as `${typeof PKG_V1}::auto_bid::CloseStrategyEventV2`,
            typeArgs: [] as [],
            isPhantom: CloseStrategyEventV2.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => CloseStrategyEventV2.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => CloseStrategyEventV2.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => CloseStrategyEventV2.fromBcs(data),
            bcs: CloseStrategyEventV2.bcs,
            fromJSONField: (field: any) => CloseStrategyEventV2.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => CloseStrategyEventV2.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => CloseStrategyEventV2.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => CloseStrategyEventV2.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => CloseStrategyEventV2.fetch(client, id),
            new: (fields: CloseStrategyEventV2Fields) => {
                return new CloseStrategyEventV2([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return CloseStrategyEventV2.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<CloseStrategyEventV2>> {
        return phantom(CloseStrategyEventV2.reified());
    }
    static get p() {
        return CloseStrategyEventV2.phantom();
    }

    static get bcs() {
        return bcs.struct("CloseStrategyEventV2", {
            vault_index: bcs.u64(),
            signal_index: bcs.u64(),
            user: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            price_percentage: bcs.u64(),
            size: bcs.u64(),
            max_times: bcs.u64(),
            target_rounds: bcs.vector(bcs.u64()),
            u64_padding: bcs.vector(bcs.u64()),
            bid_times: bcs.u64(),
            bid_round: bcs.u64(),
            bid_ts_ms: bcs.u64(),
            bid_rounds: bcs.vector(bcs.u64()),
            accumulated_profit: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): CloseStrategyEventV2 {
        return CloseStrategyEventV2.reified().new({
            vaultIndex: decodeFromFields("u64", fields.vault_index),
            signalIndex: decodeFromFields("u64", fields.signal_index),
            user: decodeFromFields("address", fields.user),
            pricePercentage: decodeFromFields("u64", fields.price_percentage),
            size: decodeFromFields("u64", fields.size),
            maxTimes: decodeFromFields("u64", fields.max_times),
            targetRounds: decodeFromFields(reified.vector("u64"), fields.target_rounds),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
            bidTimes: decodeFromFields("u64", fields.bid_times),
            bidRound: decodeFromFields("u64", fields.bid_round),
            bidTsMs: decodeFromFields("u64", fields.bid_ts_ms),
            bidRounds: decodeFromFields(reified.vector("u64"), fields.bid_rounds),
            accumulatedProfit: decodeFromFields("u64", fields.accumulated_profit),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): CloseStrategyEventV2 {
        if (!isCloseStrategyEventV2(item.type)) {
            throw new Error("not a CloseStrategyEventV2 type");
        }

        return CloseStrategyEventV2.reified().new({
            vaultIndex: decodeFromFieldsWithTypes("u64", item.fields.vault_index),
            signalIndex: decodeFromFieldsWithTypes("u64", item.fields.signal_index),
            user: decodeFromFieldsWithTypes("address", item.fields.user),
            pricePercentage: decodeFromFieldsWithTypes("u64", item.fields.price_percentage),
            size: decodeFromFieldsWithTypes("u64", item.fields.size),
            maxTimes: decodeFromFieldsWithTypes("u64", item.fields.max_times),
            targetRounds: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.target_rounds),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
            bidTimes: decodeFromFieldsWithTypes("u64", item.fields.bid_times),
            bidRound: decodeFromFieldsWithTypes("u64", item.fields.bid_round),
            bidTsMs: decodeFromFieldsWithTypes("u64", item.fields.bid_ts_ms),
            bidRounds: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.bid_rounds),
            accumulatedProfit: decodeFromFieldsWithTypes("u64", item.fields.accumulated_profit),
        });
    }

    static fromBcs(data: Uint8Array): CloseStrategyEventV2 {
        return CloseStrategyEventV2.fromFields(CloseStrategyEventV2.bcs.parse(data));
    }

    toJSONField() {
        return {
            vaultIndex: this.vaultIndex.toString(),
            signalIndex: this.signalIndex.toString(),
            user: this.user,
            pricePercentage: this.pricePercentage.toString(),
            size: this.size.toString(),
            maxTimes: this.maxTimes.toString(),
            targetRounds: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.targetRounds),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
            bidTimes: this.bidTimes.toString(),
            bidRound: this.bidRound.toString(),
            bidTsMs: this.bidTsMs.toString(),
            bidRounds: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.bidRounds),
            accumulatedProfit: this.accumulatedProfit.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): CloseStrategyEventV2 {
        return CloseStrategyEventV2.reified().new({
            vaultIndex: decodeFromJSONField("u64", field.vaultIndex),
            signalIndex: decodeFromJSONField("u64", field.signalIndex),
            user: decodeFromJSONField("address", field.user),
            pricePercentage: decodeFromJSONField("u64", field.pricePercentage),
            size: decodeFromJSONField("u64", field.size),
            maxTimes: decodeFromJSONField("u64", field.maxTimes),
            targetRounds: decodeFromJSONField(reified.vector("u64"), field.targetRounds),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
            bidTimes: decodeFromJSONField("u64", field.bidTimes),
            bidRound: decodeFromJSONField("u64", field.bidRound),
            bidTsMs: decodeFromJSONField("u64", field.bidTsMs),
            bidRounds: decodeFromJSONField(reified.vector("u64"), field.bidRounds),
            accumulatedProfit: decodeFromJSONField("u64", field.accumulatedProfit),
        });
    }

    static fromJSON(json: Record<string, any>): CloseStrategyEventV2 {
        if (json.$typeName !== CloseStrategyEventV2.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return CloseStrategyEventV2.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): CloseStrategyEventV2 {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isCloseStrategyEventV2(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a CloseStrategyEventV2 object`);
        }
        return CloseStrategyEventV2.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): CloseStrategyEventV2 {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isCloseStrategyEventV2(data.bcs.type)) {
                throw new Error(`object at is not a CloseStrategyEventV2 object`);
            }

            return CloseStrategyEventV2.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return CloseStrategyEventV2.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<CloseStrategyEventV2> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching CloseStrategyEventV2 object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isCloseStrategyEventV2(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a CloseStrategyEventV2 object`);
        }

        return CloseStrategyEventV2.fromSuiObjectData(res.data);
    }
}

/* ============================== NewStrategyEvent =============================== */

export function isNewStrategyEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::auto_bid::NewStrategyEvent`;
}

export interface NewStrategyEventFields {
    vaultIndex: ToField<"u64">;
    signalIndex: ToField<"u64">;
    user: ToField<"address">;
    pricePercentage: ToField<"u64">;
    size: ToField<"u64">;
    maxTimes: ToField<"u64">;
    targetRounds: ToField<Vector<"u64">>;
}

export type NewStrategyEventReified = Reified<NewStrategyEvent, NewStrategyEventFields>;

export class NewStrategyEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::auto_bid::NewStrategyEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = NewStrategyEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::auto_bid::NewStrategyEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = NewStrategyEvent.$isPhantom;

    readonly vaultIndex: ToField<"u64">;
    readonly signalIndex: ToField<"u64">;
    readonly user: ToField<"address">;
    readonly pricePercentage: ToField<"u64">;
    readonly size: ToField<"u64">;
    readonly maxTimes: ToField<"u64">;
    readonly targetRounds: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: NewStrategyEventFields) {
        this.$fullTypeName = composeSuiType(NewStrategyEvent.$typeName, ...typeArgs) as `${typeof PKG_V1}::auto_bid::NewStrategyEvent`;
        this.$typeArgs = typeArgs;

        this.vaultIndex = fields.vaultIndex;
        this.signalIndex = fields.signalIndex;
        this.user = fields.user;
        this.pricePercentage = fields.pricePercentage;
        this.size = fields.size;
        this.maxTimes = fields.maxTimes;
        this.targetRounds = fields.targetRounds;
    }

    static reified(): NewStrategyEventReified {
        return {
            typeName: NewStrategyEvent.$typeName,
            fullTypeName: composeSuiType(NewStrategyEvent.$typeName, ...[]) as `${typeof PKG_V1}::auto_bid::NewStrategyEvent`,
            typeArgs: [] as [],
            isPhantom: NewStrategyEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => NewStrategyEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => NewStrategyEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => NewStrategyEvent.fromBcs(data),
            bcs: NewStrategyEvent.bcs,
            fromJSONField: (field: any) => NewStrategyEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => NewStrategyEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => NewStrategyEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => NewStrategyEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => NewStrategyEvent.fetch(client, id),
            new: (fields: NewStrategyEventFields) => {
                return new NewStrategyEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return NewStrategyEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<NewStrategyEvent>> {
        return phantom(NewStrategyEvent.reified());
    }
    static get p() {
        return NewStrategyEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("NewStrategyEvent", {
            vault_index: bcs.u64(),
            signal_index: bcs.u64(),
            user: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            price_percentage: bcs.u64(),
            size: bcs.u64(),
            max_times: bcs.u64(),
            target_rounds: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): NewStrategyEvent {
        return NewStrategyEvent.reified().new({
            vaultIndex: decodeFromFields("u64", fields.vault_index),
            signalIndex: decodeFromFields("u64", fields.signal_index),
            user: decodeFromFields("address", fields.user),
            pricePercentage: decodeFromFields("u64", fields.price_percentage),
            size: decodeFromFields("u64", fields.size),
            maxTimes: decodeFromFields("u64", fields.max_times),
            targetRounds: decodeFromFields(reified.vector("u64"), fields.target_rounds),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): NewStrategyEvent {
        if (!isNewStrategyEvent(item.type)) {
            throw new Error("not a NewStrategyEvent type");
        }

        return NewStrategyEvent.reified().new({
            vaultIndex: decodeFromFieldsWithTypes("u64", item.fields.vault_index),
            signalIndex: decodeFromFieldsWithTypes("u64", item.fields.signal_index),
            user: decodeFromFieldsWithTypes("address", item.fields.user),
            pricePercentage: decodeFromFieldsWithTypes("u64", item.fields.price_percentage),
            size: decodeFromFieldsWithTypes("u64", item.fields.size),
            maxTimes: decodeFromFieldsWithTypes("u64", item.fields.max_times),
            targetRounds: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.target_rounds),
        });
    }

    static fromBcs(data: Uint8Array): NewStrategyEvent {
        return NewStrategyEvent.fromFields(NewStrategyEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            vaultIndex: this.vaultIndex.toString(),
            signalIndex: this.signalIndex.toString(),
            user: this.user,
            pricePercentage: this.pricePercentage.toString(),
            size: this.size.toString(),
            maxTimes: this.maxTimes.toString(),
            targetRounds: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.targetRounds),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): NewStrategyEvent {
        return NewStrategyEvent.reified().new({
            vaultIndex: decodeFromJSONField("u64", field.vaultIndex),
            signalIndex: decodeFromJSONField("u64", field.signalIndex),
            user: decodeFromJSONField("address", field.user),
            pricePercentage: decodeFromJSONField("u64", field.pricePercentage),
            size: decodeFromJSONField("u64", field.size),
            maxTimes: decodeFromJSONField("u64", field.maxTimes),
            targetRounds: decodeFromJSONField(reified.vector("u64"), field.targetRounds),
        });
    }

    static fromJSON(json: Record<string, any>): NewStrategyEvent {
        if (json.$typeName !== NewStrategyEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return NewStrategyEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): NewStrategyEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isNewStrategyEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a NewStrategyEvent object`);
        }
        return NewStrategyEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): NewStrategyEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isNewStrategyEvent(data.bcs.type)) {
                throw new Error(`object at is not a NewStrategyEvent object`);
            }

            return NewStrategyEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return NewStrategyEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<NewStrategyEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching NewStrategyEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isNewStrategyEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a NewStrategyEvent object`);
        }

        return NewStrategyEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== NewStrategyEventV2 =============================== */

export function isNewStrategyEventV2(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::auto_bid::NewStrategyEventV2`;
}

export interface NewStrategyEventV2Fields {
    vaultIndex: ToField<"u64">;
    signalIndex: ToField<"u64">;
    user: ToField<"address">;
    pricePercentage: ToField<"u64">;
    size: ToField<"u64">;
    maxTimes: ToField<"u64">;
    targetRounds: ToField<Vector<"u64">>;
    depositAmount: ToField<"u64">;
}

export type NewStrategyEventV2Reified = Reified<NewStrategyEventV2, NewStrategyEventV2Fields>;

export class NewStrategyEventV2 implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::auto_bid::NewStrategyEventV2`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = NewStrategyEventV2.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::auto_bid::NewStrategyEventV2`;
    readonly $typeArgs: [];
    readonly $isPhantom = NewStrategyEventV2.$isPhantom;

    readonly vaultIndex: ToField<"u64">;
    readonly signalIndex: ToField<"u64">;
    readonly user: ToField<"address">;
    readonly pricePercentage: ToField<"u64">;
    readonly size: ToField<"u64">;
    readonly maxTimes: ToField<"u64">;
    readonly targetRounds: ToField<Vector<"u64">>;
    readonly depositAmount: ToField<"u64">;

    private constructor(typeArgs: [], fields: NewStrategyEventV2Fields) {
        this.$fullTypeName = composeSuiType(NewStrategyEventV2.$typeName, ...typeArgs) as `${typeof PKG_V1}::auto_bid::NewStrategyEventV2`;
        this.$typeArgs = typeArgs;

        this.vaultIndex = fields.vaultIndex;
        this.signalIndex = fields.signalIndex;
        this.user = fields.user;
        this.pricePercentage = fields.pricePercentage;
        this.size = fields.size;
        this.maxTimes = fields.maxTimes;
        this.targetRounds = fields.targetRounds;
        this.depositAmount = fields.depositAmount;
    }

    static reified(): NewStrategyEventV2Reified {
        return {
            typeName: NewStrategyEventV2.$typeName,
            fullTypeName: composeSuiType(NewStrategyEventV2.$typeName, ...[]) as `${typeof PKG_V1}::auto_bid::NewStrategyEventV2`,
            typeArgs: [] as [],
            isPhantom: NewStrategyEventV2.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => NewStrategyEventV2.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => NewStrategyEventV2.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => NewStrategyEventV2.fromBcs(data),
            bcs: NewStrategyEventV2.bcs,
            fromJSONField: (field: any) => NewStrategyEventV2.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => NewStrategyEventV2.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => NewStrategyEventV2.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => NewStrategyEventV2.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => NewStrategyEventV2.fetch(client, id),
            new: (fields: NewStrategyEventV2Fields) => {
                return new NewStrategyEventV2([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return NewStrategyEventV2.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<NewStrategyEventV2>> {
        return phantom(NewStrategyEventV2.reified());
    }
    static get p() {
        return NewStrategyEventV2.phantom();
    }

    static get bcs() {
        return bcs.struct("NewStrategyEventV2", {
            vault_index: bcs.u64(),
            signal_index: bcs.u64(),
            user: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            price_percentage: bcs.u64(),
            size: bcs.u64(),
            max_times: bcs.u64(),
            target_rounds: bcs.vector(bcs.u64()),
            deposit_amount: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): NewStrategyEventV2 {
        return NewStrategyEventV2.reified().new({
            vaultIndex: decodeFromFields("u64", fields.vault_index),
            signalIndex: decodeFromFields("u64", fields.signal_index),
            user: decodeFromFields("address", fields.user),
            pricePercentage: decodeFromFields("u64", fields.price_percentage),
            size: decodeFromFields("u64", fields.size),
            maxTimes: decodeFromFields("u64", fields.max_times),
            targetRounds: decodeFromFields(reified.vector("u64"), fields.target_rounds),
            depositAmount: decodeFromFields("u64", fields.deposit_amount),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): NewStrategyEventV2 {
        if (!isNewStrategyEventV2(item.type)) {
            throw new Error("not a NewStrategyEventV2 type");
        }

        return NewStrategyEventV2.reified().new({
            vaultIndex: decodeFromFieldsWithTypes("u64", item.fields.vault_index),
            signalIndex: decodeFromFieldsWithTypes("u64", item.fields.signal_index),
            user: decodeFromFieldsWithTypes("address", item.fields.user),
            pricePercentage: decodeFromFieldsWithTypes("u64", item.fields.price_percentage),
            size: decodeFromFieldsWithTypes("u64", item.fields.size),
            maxTimes: decodeFromFieldsWithTypes("u64", item.fields.max_times),
            targetRounds: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.target_rounds),
            depositAmount: decodeFromFieldsWithTypes("u64", item.fields.deposit_amount),
        });
    }

    static fromBcs(data: Uint8Array): NewStrategyEventV2 {
        return NewStrategyEventV2.fromFields(NewStrategyEventV2.bcs.parse(data));
    }

    toJSONField() {
        return {
            vaultIndex: this.vaultIndex.toString(),
            signalIndex: this.signalIndex.toString(),
            user: this.user,
            pricePercentage: this.pricePercentage.toString(),
            size: this.size.toString(),
            maxTimes: this.maxTimes.toString(),
            targetRounds: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.targetRounds),
            depositAmount: this.depositAmount.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): NewStrategyEventV2 {
        return NewStrategyEventV2.reified().new({
            vaultIndex: decodeFromJSONField("u64", field.vaultIndex),
            signalIndex: decodeFromJSONField("u64", field.signalIndex),
            user: decodeFromJSONField("address", field.user),
            pricePercentage: decodeFromJSONField("u64", field.pricePercentage),
            size: decodeFromJSONField("u64", field.size),
            maxTimes: decodeFromJSONField("u64", field.maxTimes),
            targetRounds: decodeFromJSONField(reified.vector("u64"), field.targetRounds),
            depositAmount: decodeFromJSONField("u64", field.depositAmount),
        });
    }

    static fromJSON(json: Record<string, any>): NewStrategyEventV2 {
        if (json.$typeName !== NewStrategyEventV2.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return NewStrategyEventV2.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): NewStrategyEventV2 {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isNewStrategyEventV2(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a NewStrategyEventV2 object`);
        }
        return NewStrategyEventV2.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): NewStrategyEventV2 {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isNewStrategyEventV2(data.bcs.type)) {
                throw new Error(`object at is not a NewStrategyEventV2 object`);
            }

            return NewStrategyEventV2.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return NewStrategyEventV2.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<NewStrategyEventV2> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching NewStrategyEventV2 object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isNewStrategyEventV2(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a NewStrategyEventV2 object`);
        }

        return NewStrategyEventV2.fromSuiObjectData(res.data);
    }
}

/* ============================== NewStrategyPoolEvent =============================== */

export function isNewStrategyPoolEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::auto_bid::NewStrategyPoolEvent`;
}

export interface NewStrategyPoolEventFields {
    id: ToField<ID>;
    signer: ToField<"address">;
}

export type NewStrategyPoolEventReified = Reified<NewStrategyPoolEvent, NewStrategyPoolEventFields>;

export class NewStrategyPoolEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::auto_bid::NewStrategyPoolEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = NewStrategyPoolEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::auto_bid::NewStrategyPoolEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = NewStrategyPoolEvent.$isPhantom;

    readonly id: ToField<ID>;
    readonly signer: ToField<"address">;

    private constructor(typeArgs: [], fields: NewStrategyPoolEventFields) {
        this.$fullTypeName = composeSuiType(
            NewStrategyPoolEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::auto_bid::NewStrategyPoolEvent`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.signer = fields.signer;
    }

    static reified(): NewStrategyPoolEventReified {
        return {
            typeName: NewStrategyPoolEvent.$typeName,
            fullTypeName: composeSuiType(NewStrategyPoolEvent.$typeName, ...[]) as `${typeof PKG_V1}::auto_bid::NewStrategyPoolEvent`,
            typeArgs: [] as [],
            isPhantom: NewStrategyPoolEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => NewStrategyPoolEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => NewStrategyPoolEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => NewStrategyPoolEvent.fromBcs(data),
            bcs: NewStrategyPoolEvent.bcs,
            fromJSONField: (field: any) => NewStrategyPoolEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => NewStrategyPoolEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => NewStrategyPoolEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => NewStrategyPoolEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => NewStrategyPoolEvent.fetch(client, id),
            new: (fields: NewStrategyPoolEventFields) => {
                return new NewStrategyPoolEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return NewStrategyPoolEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<NewStrategyPoolEvent>> {
        return phantom(NewStrategyPoolEvent.reified());
    }
    static get p() {
        return NewStrategyPoolEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("NewStrategyPoolEvent", {
            id: ID.bcs,
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        });
    }

    static fromFields(fields: Record<string, any>): NewStrategyPoolEvent {
        return NewStrategyPoolEvent.reified().new({
            id: decodeFromFields(ID.reified(), fields.id),
            signer: decodeFromFields("address", fields.signer),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): NewStrategyPoolEvent {
        if (!isNewStrategyPoolEvent(item.type)) {
            throw new Error("not a NewStrategyPoolEvent type");
        }

        return NewStrategyPoolEvent.reified().new({
            id: decodeFromFieldsWithTypes(ID.reified(), item.fields.id),
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
        });
    }

    static fromBcs(data: Uint8Array): NewStrategyPoolEvent {
        return NewStrategyPoolEvent.fromFields(NewStrategyPoolEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
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

    static fromJSONField(field: any): NewStrategyPoolEvent {
        return NewStrategyPoolEvent.reified().new({
            id: decodeFromJSONField(ID.reified(), field.id),
            signer: decodeFromJSONField("address", field.signer),
        });
    }

    static fromJSON(json: Record<string, any>): NewStrategyPoolEvent {
        if (json.$typeName !== NewStrategyPoolEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return NewStrategyPoolEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): NewStrategyPoolEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isNewStrategyPoolEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a NewStrategyPoolEvent object`);
        }
        return NewStrategyPoolEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): NewStrategyPoolEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isNewStrategyPoolEvent(data.bcs.type)) {
                throw new Error(`object at is not a NewStrategyPoolEvent object`);
            }

            return NewStrategyPoolEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return NewStrategyPoolEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<NewStrategyPoolEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching NewStrategyPoolEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isNewStrategyPoolEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a NewStrategyPoolEvent object`);
        }

        return NewStrategyPoolEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== NewStrategySignalEvent =============================== */

export function isNewStrategySignalEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::auto_bid::NewStrategySignalEvent`;
}

export interface NewStrategySignalEventFields {
    id: ToField<ID>;
    vaultIndex: ToField<"u64">;
    signalIndex: ToField<"u64">;
    signer: ToField<"address">;
}

export type NewStrategySignalEventReified = Reified<NewStrategySignalEvent, NewStrategySignalEventFields>;

export class NewStrategySignalEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::auto_bid::NewStrategySignalEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = NewStrategySignalEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::auto_bid::NewStrategySignalEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = NewStrategySignalEvent.$isPhantom;

    readonly id: ToField<ID>;
    readonly vaultIndex: ToField<"u64">;
    readonly signalIndex: ToField<"u64">;
    readonly signer: ToField<"address">;

    private constructor(typeArgs: [], fields: NewStrategySignalEventFields) {
        this.$fullTypeName = composeSuiType(
            NewStrategySignalEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::auto_bid::NewStrategySignalEvent`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.vaultIndex = fields.vaultIndex;
        this.signalIndex = fields.signalIndex;
        this.signer = fields.signer;
    }

    static reified(): NewStrategySignalEventReified {
        return {
            typeName: NewStrategySignalEvent.$typeName,
            fullTypeName: composeSuiType(NewStrategySignalEvent.$typeName, ...[]) as `${typeof PKG_V1}::auto_bid::NewStrategySignalEvent`,
            typeArgs: [] as [],
            isPhantom: NewStrategySignalEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => NewStrategySignalEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => NewStrategySignalEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => NewStrategySignalEvent.fromBcs(data),
            bcs: NewStrategySignalEvent.bcs,
            fromJSONField: (field: any) => NewStrategySignalEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => NewStrategySignalEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => NewStrategySignalEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => NewStrategySignalEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => NewStrategySignalEvent.fetch(client, id),
            new: (fields: NewStrategySignalEventFields) => {
                return new NewStrategySignalEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return NewStrategySignalEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<NewStrategySignalEvent>> {
        return phantom(NewStrategySignalEvent.reified());
    }
    static get p() {
        return NewStrategySignalEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("NewStrategySignalEvent", {
            id: ID.bcs,
            vault_index: bcs.u64(),
            signal_index: bcs.u64(),
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        });
    }

    static fromFields(fields: Record<string, any>): NewStrategySignalEvent {
        return NewStrategySignalEvent.reified().new({
            id: decodeFromFields(ID.reified(), fields.id),
            vaultIndex: decodeFromFields("u64", fields.vault_index),
            signalIndex: decodeFromFields("u64", fields.signal_index),
            signer: decodeFromFields("address", fields.signer),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): NewStrategySignalEvent {
        if (!isNewStrategySignalEvent(item.type)) {
            throw new Error("not a NewStrategySignalEvent type");
        }

        return NewStrategySignalEvent.reified().new({
            id: decodeFromFieldsWithTypes(ID.reified(), item.fields.id),
            vaultIndex: decodeFromFieldsWithTypes("u64", item.fields.vault_index),
            signalIndex: decodeFromFieldsWithTypes("u64", item.fields.signal_index),
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
        });
    }

    static fromBcs(data: Uint8Array): NewStrategySignalEvent {
        return NewStrategySignalEvent.fromFields(NewStrategySignalEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            vaultIndex: this.vaultIndex.toString(),
            signalIndex: this.signalIndex.toString(),
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

    static fromJSONField(field: any): NewStrategySignalEvent {
        return NewStrategySignalEvent.reified().new({
            id: decodeFromJSONField(ID.reified(), field.id),
            vaultIndex: decodeFromJSONField("u64", field.vaultIndex),
            signalIndex: decodeFromJSONField("u64", field.signalIndex),
            signer: decodeFromJSONField("address", field.signer),
        });
    }

    static fromJSON(json: Record<string, any>): NewStrategySignalEvent {
        if (json.$typeName !== NewStrategySignalEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return NewStrategySignalEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): NewStrategySignalEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isNewStrategySignalEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a NewStrategySignalEvent object`);
        }
        return NewStrategySignalEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): NewStrategySignalEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isNewStrategySignalEvent(data.bcs.type)) {
                throw new Error(`object at is not a NewStrategySignalEvent object`);
            }

            return NewStrategySignalEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return NewStrategySignalEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<NewStrategySignalEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching NewStrategySignalEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isNewStrategySignalEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a NewStrategySignalEvent object`);
        }

        return NewStrategySignalEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== NewStrategyVaultEvent =============================== */

export function isNewStrategyVaultEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::auto_bid::NewStrategyVaultEvent`;
}

export interface NewStrategyVaultEventFields {
    id: ToField<ID>;
    vaultIndex: ToField<"u64">;
    signer: ToField<"address">;
}

export type NewStrategyVaultEventReified = Reified<NewStrategyVaultEvent, NewStrategyVaultEventFields>;

export class NewStrategyVaultEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::auto_bid::NewStrategyVaultEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = NewStrategyVaultEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::auto_bid::NewStrategyVaultEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = NewStrategyVaultEvent.$isPhantom;

    readonly id: ToField<ID>;
    readonly vaultIndex: ToField<"u64">;
    readonly signer: ToField<"address">;

    private constructor(typeArgs: [], fields: NewStrategyVaultEventFields) {
        this.$fullTypeName = composeSuiType(
            NewStrategyVaultEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::auto_bid::NewStrategyVaultEvent`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.vaultIndex = fields.vaultIndex;
        this.signer = fields.signer;
    }

    static reified(): NewStrategyVaultEventReified {
        return {
            typeName: NewStrategyVaultEvent.$typeName,
            fullTypeName: composeSuiType(NewStrategyVaultEvent.$typeName, ...[]) as `${typeof PKG_V1}::auto_bid::NewStrategyVaultEvent`,
            typeArgs: [] as [],
            isPhantom: NewStrategyVaultEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => NewStrategyVaultEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => NewStrategyVaultEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => NewStrategyVaultEvent.fromBcs(data),
            bcs: NewStrategyVaultEvent.bcs,
            fromJSONField: (field: any) => NewStrategyVaultEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => NewStrategyVaultEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => NewStrategyVaultEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => NewStrategyVaultEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => NewStrategyVaultEvent.fetch(client, id),
            new: (fields: NewStrategyVaultEventFields) => {
                return new NewStrategyVaultEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return NewStrategyVaultEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<NewStrategyVaultEvent>> {
        return phantom(NewStrategyVaultEvent.reified());
    }
    static get p() {
        return NewStrategyVaultEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("NewStrategyVaultEvent", {
            id: ID.bcs,
            vault_index: bcs.u64(),
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        });
    }

    static fromFields(fields: Record<string, any>): NewStrategyVaultEvent {
        return NewStrategyVaultEvent.reified().new({
            id: decodeFromFields(ID.reified(), fields.id),
            vaultIndex: decodeFromFields("u64", fields.vault_index),
            signer: decodeFromFields("address", fields.signer),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): NewStrategyVaultEvent {
        if (!isNewStrategyVaultEvent(item.type)) {
            throw new Error("not a NewStrategyVaultEvent type");
        }

        return NewStrategyVaultEvent.reified().new({
            id: decodeFromFieldsWithTypes(ID.reified(), item.fields.id),
            vaultIndex: decodeFromFieldsWithTypes("u64", item.fields.vault_index),
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
        });
    }

    static fromBcs(data: Uint8Array): NewStrategyVaultEvent {
        return NewStrategyVaultEvent.fromFields(NewStrategyVaultEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            vaultIndex: this.vaultIndex.toString(),
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

    static fromJSONField(field: any): NewStrategyVaultEvent {
        return NewStrategyVaultEvent.reified().new({
            id: decodeFromJSONField(ID.reified(), field.id),
            vaultIndex: decodeFromJSONField("u64", field.vaultIndex),
            signer: decodeFromJSONField("address", field.signer),
        });
    }

    static fromJSON(json: Record<string, any>): NewStrategyVaultEvent {
        if (json.$typeName !== NewStrategyVaultEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return NewStrategyVaultEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): NewStrategyVaultEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isNewStrategyVaultEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a NewStrategyVaultEvent object`);
        }
        return NewStrategyVaultEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): NewStrategyVaultEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isNewStrategyVaultEvent(data.bcs.type)) {
                throw new Error(`object at is not a NewStrategyVaultEvent object`);
            }

            return NewStrategyVaultEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return NewStrategyVaultEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<NewStrategyVaultEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching NewStrategyVaultEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isNewStrategyVaultEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a NewStrategyVaultEvent object`);
        }

        return NewStrategyVaultEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== RemoveStrategyVaultEvent =============================== */

export function isRemoveStrategyVaultEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V13}::auto_bid::RemoveStrategyVaultEvent`;
}

export interface RemoveStrategyVaultEventFields {
    id: ToField<ID>;
    vaultIndex: ToField<"u64">;
    signer: ToField<"address">;
}

export type RemoveStrategyVaultEventReified = Reified<RemoveStrategyVaultEvent, RemoveStrategyVaultEventFields>;

export class RemoveStrategyVaultEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V13}::auto_bid::RemoveStrategyVaultEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = RemoveStrategyVaultEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V13}::auto_bid::RemoveStrategyVaultEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = RemoveStrategyVaultEvent.$isPhantom;

    readonly id: ToField<ID>;
    readonly vaultIndex: ToField<"u64">;
    readonly signer: ToField<"address">;

    private constructor(typeArgs: [], fields: RemoveStrategyVaultEventFields) {
        this.$fullTypeName = composeSuiType(
            RemoveStrategyVaultEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V13}::auto_bid::RemoveStrategyVaultEvent`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.vaultIndex = fields.vaultIndex;
        this.signer = fields.signer;
    }

    static reified(): RemoveStrategyVaultEventReified {
        return {
            typeName: RemoveStrategyVaultEvent.$typeName,
            fullTypeName: composeSuiType(
                RemoveStrategyVaultEvent.$typeName,
                ...[]
            ) as `${typeof PKG_V13}::auto_bid::RemoveStrategyVaultEvent`,
            typeArgs: [] as [],
            isPhantom: RemoveStrategyVaultEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => RemoveStrategyVaultEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => RemoveStrategyVaultEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => RemoveStrategyVaultEvent.fromBcs(data),
            bcs: RemoveStrategyVaultEvent.bcs,
            fromJSONField: (field: any) => RemoveStrategyVaultEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => RemoveStrategyVaultEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => RemoveStrategyVaultEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => RemoveStrategyVaultEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => RemoveStrategyVaultEvent.fetch(client, id),
            new: (fields: RemoveStrategyVaultEventFields) => {
                return new RemoveStrategyVaultEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return RemoveStrategyVaultEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<RemoveStrategyVaultEvent>> {
        return phantom(RemoveStrategyVaultEvent.reified());
    }
    static get p() {
        return RemoveStrategyVaultEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("RemoveStrategyVaultEvent", {
            id: ID.bcs,
            vault_index: bcs.u64(),
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        });
    }

    static fromFields(fields: Record<string, any>): RemoveStrategyVaultEvent {
        return RemoveStrategyVaultEvent.reified().new({
            id: decodeFromFields(ID.reified(), fields.id),
            vaultIndex: decodeFromFields("u64", fields.vault_index),
            signer: decodeFromFields("address", fields.signer),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): RemoveStrategyVaultEvent {
        if (!isRemoveStrategyVaultEvent(item.type)) {
            throw new Error("not a RemoveStrategyVaultEvent type");
        }

        return RemoveStrategyVaultEvent.reified().new({
            id: decodeFromFieldsWithTypes(ID.reified(), item.fields.id),
            vaultIndex: decodeFromFieldsWithTypes("u64", item.fields.vault_index),
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
        });
    }

    static fromBcs(data: Uint8Array): RemoveStrategyVaultEvent {
        return RemoveStrategyVaultEvent.fromFields(RemoveStrategyVaultEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            vaultIndex: this.vaultIndex.toString(),
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

    static fromJSONField(field: any): RemoveStrategyVaultEvent {
        return RemoveStrategyVaultEvent.reified().new({
            id: decodeFromJSONField(ID.reified(), field.id),
            vaultIndex: decodeFromJSONField("u64", field.vaultIndex),
            signer: decodeFromJSONField("address", field.signer),
        });
    }

    static fromJSON(json: Record<string, any>): RemoveStrategyVaultEvent {
        if (json.$typeName !== RemoveStrategyVaultEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return RemoveStrategyVaultEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): RemoveStrategyVaultEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRemoveStrategyVaultEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a RemoveStrategyVaultEvent object`);
        }
        return RemoveStrategyVaultEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): RemoveStrategyVaultEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isRemoveStrategyVaultEvent(data.bcs.type)) {
                throw new Error(`object at is not a RemoveStrategyVaultEvent object`);
            }

            return RemoveStrategyVaultEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return RemoveStrategyVaultEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<RemoveStrategyVaultEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching RemoveStrategyVaultEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isRemoveStrategyVaultEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RemoveStrategyVaultEvent object`);
        }

        return RemoveStrategyVaultEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== Strategy =============================== */

export function isStrategy(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::auto_bid::Strategy`;
}

export interface StrategyFields {
    id: ToField<UID>;
    vaultIndex: ToField<"u64">;
    signalIndex: ToField<"u64">;
    user: ToField<"address">;
    pricePercentage: ToField<"u64">;
    size: ToField<"u64">;
    maxTimes: ToField<"u64">;
    targetRounds: ToField<Vector<"u64">>;
    receipts: ToField<Vector<TypusBidReceipt>>;
    active: ToField<"bool">;
    u64Padding: ToField<Vector<"u64">>;
    bidTimes: ToField<"u64">;
    bidRound: ToField<"u64">;
    bidTsMs: ToField<"u64">;
}

export type StrategyReified = Reified<Strategy, StrategyFields>;

export class Strategy implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::auto_bid::Strategy`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = Strategy.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::auto_bid::Strategy`;
    readonly $typeArgs: [];
    readonly $isPhantom = Strategy.$isPhantom;

    readonly id: ToField<UID>;
    readonly vaultIndex: ToField<"u64">;
    readonly signalIndex: ToField<"u64">;
    readonly user: ToField<"address">;
    readonly pricePercentage: ToField<"u64">;
    readonly size: ToField<"u64">;
    readonly maxTimes: ToField<"u64">;
    readonly targetRounds: ToField<Vector<"u64">>;
    readonly receipts: ToField<Vector<TypusBidReceipt>>;
    readonly active: ToField<"bool">;
    readonly u64Padding: ToField<Vector<"u64">>;
    readonly bidTimes: ToField<"u64">;
    readonly bidRound: ToField<"u64">;
    readonly bidTsMs: ToField<"u64">;

    private constructor(typeArgs: [], fields: StrategyFields) {
        this.$fullTypeName = composeSuiType(Strategy.$typeName, ...typeArgs) as `${typeof PKG_V1}::auto_bid::Strategy`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.vaultIndex = fields.vaultIndex;
        this.signalIndex = fields.signalIndex;
        this.user = fields.user;
        this.pricePercentage = fields.pricePercentage;
        this.size = fields.size;
        this.maxTimes = fields.maxTimes;
        this.targetRounds = fields.targetRounds;
        this.receipts = fields.receipts;
        this.active = fields.active;
        this.u64Padding = fields.u64Padding;
        this.bidTimes = fields.bidTimes;
        this.bidRound = fields.bidRound;
        this.bidTsMs = fields.bidTsMs;
    }

    static reified(): StrategyReified {
        return {
            typeName: Strategy.$typeName,
            fullTypeName: composeSuiType(Strategy.$typeName, ...[]) as `${typeof PKG_V1}::auto_bid::Strategy`,
            typeArgs: [] as [],
            isPhantom: Strategy.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Strategy.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Strategy.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Strategy.fromBcs(data),
            bcs: Strategy.bcs,
            fromJSONField: (field: any) => Strategy.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Strategy.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Strategy.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => Strategy.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => Strategy.fetch(client, id),
            new: (fields: StrategyFields) => {
                return new Strategy([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Strategy.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<Strategy>> {
        return phantom(Strategy.reified());
    }
    static get p() {
        return Strategy.phantom();
    }

    static get bcs() {
        return bcs.struct("Strategy", {
            id: UID.bcs,
            vault_index: bcs.u64(),
            signal_index: bcs.u64(),
            user: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            price_percentage: bcs.u64(),
            size: bcs.u64(),
            max_times: bcs.u64(),
            target_rounds: bcs.vector(bcs.u64()),
            receipts: bcs.vector(TypusBidReceipt.bcs),
            active: bcs.bool(),
            u64_padding: bcs.vector(bcs.u64()),
            bid_times: bcs.u64(),
            bid_round: bcs.u64(),
            bid_ts_ms: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): Strategy {
        return Strategy.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            vaultIndex: decodeFromFields("u64", fields.vault_index),
            signalIndex: decodeFromFields("u64", fields.signal_index),
            user: decodeFromFields("address", fields.user),
            pricePercentage: decodeFromFields("u64", fields.price_percentage),
            size: decodeFromFields("u64", fields.size),
            maxTimes: decodeFromFields("u64", fields.max_times),
            targetRounds: decodeFromFields(reified.vector("u64"), fields.target_rounds),
            receipts: decodeFromFields(reified.vector(TypusBidReceipt.reified()), fields.receipts),
            active: decodeFromFields("bool", fields.active),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
            bidTimes: decodeFromFields("u64", fields.bid_times),
            bidRound: decodeFromFields("u64", fields.bid_round),
            bidTsMs: decodeFromFields("u64", fields.bid_ts_ms),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Strategy {
        if (!isStrategy(item.type)) {
            throw new Error("not a Strategy type");
        }

        return Strategy.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            vaultIndex: decodeFromFieldsWithTypes("u64", item.fields.vault_index),
            signalIndex: decodeFromFieldsWithTypes("u64", item.fields.signal_index),
            user: decodeFromFieldsWithTypes("address", item.fields.user),
            pricePercentage: decodeFromFieldsWithTypes("u64", item.fields.price_percentage),
            size: decodeFromFieldsWithTypes("u64", item.fields.size),
            maxTimes: decodeFromFieldsWithTypes("u64", item.fields.max_times),
            targetRounds: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.target_rounds),
            receipts: decodeFromFieldsWithTypes(reified.vector(TypusBidReceipt.reified()), item.fields.receipts),
            active: decodeFromFieldsWithTypes("bool", item.fields.active),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
            bidTimes: decodeFromFieldsWithTypes("u64", item.fields.bid_times),
            bidRound: decodeFromFieldsWithTypes("u64", item.fields.bid_round),
            bidTsMs: decodeFromFieldsWithTypes("u64", item.fields.bid_ts_ms),
        });
    }

    static fromBcs(data: Uint8Array): Strategy {
        return Strategy.fromFields(Strategy.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            vaultIndex: this.vaultIndex.toString(),
            signalIndex: this.signalIndex.toString(),
            user: this.user,
            pricePercentage: this.pricePercentage.toString(),
            size: this.size.toString(),
            maxTimes: this.maxTimes.toString(),
            targetRounds: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.targetRounds),
            receipts: fieldToJSON<Vector<TypusBidReceipt>>(`vector<${TypusBidReceipt.$typeName}>`, this.receipts),
            active: this.active,
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
            bidTimes: this.bidTimes.toString(),
            bidRound: this.bidRound.toString(),
            bidTsMs: this.bidTsMs.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): Strategy {
        return Strategy.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            vaultIndex: decodeFromJSONField("u64", field.vaultIndex),
            signalIndex: decodeFromJSONField("u64", field.signalIndex),
            user: decodeFromJSONField("address", field.user),
            pricePercentage: decodeFromJSONField("u64", field.pricePercentage),
            size: decodeFromJSONField("u64", field.size),
            maxTimes: decodeFromJSONField("u64", field.maxTimes),
            targetRounds: decodeFromJSONField(reified.vector("u64"), field.targetRounds),
            receipts: decodeFromJSONField(reified.vector(TypusBidReceipt.reified()), field.receipts),
            active: decodeFromJSONField("bool", field.active),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
            bidTimes: decodeFromJSONField("u64", field.bidTimes),
            bidRound: decodeFromJSONField("u64", field.bidRound),
            bidTsMs: decodeFromJSONField("u64", field.bidTsMs),
        });
    }

    static fromJSON(json: Record<string, any>): Strategy {
        if (json.$typeName !== Strategy.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return Strategy.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): Strategy {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isStrategy(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Strategy object`);
        }
        return Strategy.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): Strategy {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isStrategy(data.bcs.type)) {
                throw new Error(`object at is not a Strategy object`);
            }

            return Strategy.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Strategy.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<Strategy> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Strategy object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isStrategy(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Strategy object`);
        }

        return Strategy.fromSuiObjectData(res.data);
    }
}

/* ============================== StrategyPool =============================== */

export function isStrategyPool(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::auto_bid::StrategyPool`;
}

export interface StrategyPoolFields {
    id: ToField<UID>;
    strategies: ToField<VecMap<"u64", VecMap<"u64", TableVec<ToPhantom<Strategy>>>>>;
    authority: ToField<Vector<"address">>;
}

export type StrategyPoolReified = Reified<StrategyPool, StrategyPoolFields>;

export class StrategyPool implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::auto_bid::StrategyPool`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = StrategyPool.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::auto_bid::StrategyPool`;
    readonly $typeArgs: [];
    readonly $isPhantom = StrategyPool.$isPhantom;

    readonly id: ToField<UID>;
    readonly strategies: ToField<VecMap<"u64", VecMap<"u64", TableVec<ToPhantom<Strategy>>>>>;
    readonly authority: ToField<Vector<"address">>;

    private constructor(typeArgs: [], fields: StrategyPoolFields) {
        this.$fullTypeName = composeSuiType(StrategyPool.$typeName, ...typeArgs) as `${typeof PKG_V1}::auto_bid::StrategyPool`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.strategies = fields.strategies;
        this.authority = fields.authority;
    }

    static reified(): StrategyPoolReified {
        return {
            typeName: StrategyPool.$typeName,
            fullTypeName: composeSuiType(StrategyPool.$typeName, ...[]) as `${typeof PKG_V1}::auto_bid::StrategyPool`,
            typeArgs: [] as [],
            isPhantom: StrategyPool.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => StrategyPool.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => StrategyPool.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => StrategyPool.fromBcs(data),
            bcs: StrategyPool.bcs,
            fromJSONField: (field: any) => StrategyPool.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => StrategyPool.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => StrategyPool.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => StrategyPool.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => StrategyPool.fetch(client, id),
            new: (fields: StrategyPoolFields) => {
                return new StrategyPool([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return StrategyPool.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<StrategyPool>> {
        return phantom(StrategyPool.reified());
    }
    static get p() {
        return StrategyPool.phantom();
    }

    static get bcs() {
        return bcs.struct("StrategyPool", {
            id: UID.bcs,
            strategies: VecMap.bcs(bcs.u64(), VecMap.bcs(bcs.u64(), TableVec.bcs)),
            authority: bcs.vector(
                bcs.bytes(32).transform({
                    input: (val: string) => fromHEX(val),
                    output: (val: Uint8Array) => toHEX(val),
                })
            ),
        });
    }

    static fromFields(fields: Record<string, any>): StrategyPool {
        return StrategyPool.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            strategies: decodeFromFields(
                VecMap.reified("u64", VecMap.reified("u64", TableVec.reified(reified.phantom(Strategy.reified())))),
                fields.strategies
            ),
            authority: decodeFromFields(reified.vector("address"), fields.authority),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): StrategyPool {
        if (!isStrategyPool(item.type)) {
            throw new Error("not a StrategyPool type");
        }

        return StrategyPool.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            strategies: decodeFromFieldsWithTypes(
                VecMap.reified("u64", VecMap.reified("u64", TableVec.reified(reified.phantom(Strategy.reified())))),
                item.fields.strategies
            ),
            authority: decodeFromFieldsWithTypes(reified.vector("address"), item.fields.authority),
        });
    }

    static fromBcs(data: Uint8Array): StrategyPool {
        return StrategyPool.fromFields(StrategyPool.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            strategies: this.strategies.toJSONField(),
            authority: fieldToJSON<Vector<"address">>(`vector<address>`, this.authority),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): StrategyPool {
        return StrategyPool.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            strategies: decodeFromJSONField(
                VecMap.reified("u64", VecMap.reified("u64", TableVec.reified(reified.phantom(Strategy.reified())))),
                field.strategies
            ),
            authority: decodeFromJSONField(reified.vector("address"), field.authority),
        });
    }

    static fromJSON(json: Record<string, any>): StrategyPool {
        if (json.$typeName !== StrategyPool.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return StrategyPool.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): StrategyPool {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isStrategyPool(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a StrategyPool object`);
        }
        return StrategyPool.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): StrategyPool {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isStrategyPool(data.bcs.type)) {
                throw new Error(`object at is not a StrategyPool object`);
            }

            return StrategyPool.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return StrategyPool.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<StrategyPool> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching StrategyPool object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isStrategyPool(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a StrategyPool object`);
        }

        return StrategyPool.fromSuiObjectData(res.data);
    }
}

/* ============================== StrategyPoolV2 =============================== */

export function isStrategyPoolV2(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::auto_bid::StrategyPoolV2`;
}

export interface StrategyPoolV2Fields {
    id: ToField<UID>;
    strategies: ToField<VecMap<"u64", VecMap<"u64", TableVec<ToPhantom<StrategyV2>>>>>;
    authority: ToField<Vector<"address">>;
}

export type StrategyPoolV2Reified = Reified<StrategyPoolV2, StrategyPoolV2Fields>;

export class StrategyPoolV2 implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::auto_bid::StrategyPoolV2`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = StrategyPoolV2.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::auto_bid::StrategyPoolV2`;
    readonly $typeArgs: [];
    readonly $isPhantom = StrategyPoolV2.$isPhantom;

    readonly id: ToField<UID>;
    readonly strategies: ToField<VecMap<"u64", VecMap<"u64", TableVec<ToPhantom<StrategyV2>>>>>;
    readonly authority: ToField<Vector<"address">>;

    private constructor(typeArgs: [], fields: StrategyPoolV2Fields) {
        this.$fullTypeName = composeSuiType(StrategyPoolV2.$typeName, ...typeArgs) as `${typeof PKG_V1}::auto_bid::StrategyPoolV2`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.strategies = fields.strategies;
        this.authority = fields.authority;
    }

    static reified(): StrategyPoolV2Reified {
        return {
            typeName: StrategyPoolV2.$typeName,
            fullTypeName: composeSuiType(StrategyPoolV2.$typeName, ...[]) as `${typeof PKG_V1}::auto_bid::StrategyPoolV2`,
            typeArgs: [] as [],
            isPhantom: StrategyPoolV2.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => StrategyPoolV2.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => StrategyPoolV2.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => StrategyPoolV2.fromBcs(data),
            bcs: StrategyPoolV2.bcs,
            fromJSONField: (field: any) => StrategyPoolV2.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => StrategyPoolV2.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => StrategyPoolV2.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => StrategyPoolV2.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => StrategyPoolV2.fetch(client, id),
            new: (fields: StrategyPoolV2Fields) => {
                return new StrategyPoolV2([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return StrategyPoolV2.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<StrategyPoolV2>> {
        return phantom(StrategyPoolV2.reified());
    }
    static get p() {
        return StrategyPoolV2.phantom();
    }

    static get bcs() {
        return bcs.struct("StrategyPoolV2", {
            id: UID.bcs,
            strategies: VecMap.bcs(bcs.u64(), VecMap.bcs(bcs.u64(), TableVec.bcs)),
            authority: bcs.vector(
                bcs.bytes(32).transform({
                    input: (val: string) => fromHEX(val),
                    output: (val: Uint8Array) => toHEX(val),
                })
            ),
        });
    }

    static fromFields(fields: Record<string, any>): StrategyPoolV2 {
        return StrategyPoolV2.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            strategies: decodeFromFields(
                VecMap.reified("u64", VecMap.reified("u64", TableVec.reified(reified.phantom(StrategyV2.reified())))),
                fields.strategies
            ),
            authority: decodeFromFields(reified.vector("address"), fields.authority),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): StrategyPoolV2 {
        if (!isStrategyPoolV2(item.type)) {
            throw new Error("not a StrategyPoolV2 type");
        }

        return StrategyPoolV2.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            strategies: decodeFromFieldsWithTypes(
                VecMap.reified("u64", VecMap.reified("u64", TableVec.reified(reified.phantom(StrategyV2.reified())))),
                item.fields.strategies
            ),
            authority: decodeFromFieldsWithTypes(reified.vector("address"), item.fields.authority),
        });
    }

    static fromBcs(data: Uint8Array): StrategyPoolV2 {
        return StrategyPoolV2.fromFields(StrategyPoolV2.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            strategies: this.strategies.toJSONField(),
            authority: fieldToJSON<Vector<"address">>(`vector<address>`, this.authority),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): StrategyPoolV2 {
        return StrategyPoolV2.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            strategies: decodeFromJSONField(
                VecMap.reified("u64", VecMap.reified("u64", TableVec.reified(reified.phantom(StrategyV2.reified())))),
                field.strategies
            ),
            authority: decodeFromJSONField(reified.vector("address"), field.authority),
        });
    }

    static fromJSON(json: Record<string, any>): StrategyPoolV2 {
        if (json.$typeName !== StrategyPoolV2.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return StrategyPoolV2.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): StrategyPoolV2 {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isStrategyPoolV2(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a StrategyPoolV2 object`);
        }
        return StrategyPoolV2.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): StrategyPoolV2 {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isStrategyPoolV2(data.bcs.type)) {
                throw new Error(`object at is not a StrategyPoolV2 object`);
            }

            return StrategyPoolV2.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return StrategyPoolV2.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<StrategyPoolV2> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching StrategyPoolV2 object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isStrategyPoolV2(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a StrategyPoolV2 object`);
        }

        return StrategyPoolV2.fromSuiObjectData(res.data);
    }
}

/* ============================== StrategyV2 =============================== */

export function isStrategyV2(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::auto_bid::StrategyV2`;
}

export interface StrategyV2Fields {
    id: ToField<UID>;
    vaultIndex: ToField<"u64">;
    signalIndex: ToField<"u64">;
    user: ToField<"address">;
    pricePercentage: ToField<"u64">;
    size: ToField<"u64">;
    maxTimes: ToField<"u64">;
    targetRounds: ToField<Vector<"u64">>;
    receipts: ToField<Vector<TypusBidReceipt>>;
    active: ToField<"bool">;
    u64Padding: ToField<Vector<"u64">>;
    bidTimes: ToField<"u64">;
    bidRound: ToField<"u64">;
    bidTsMs: ToField<"u64">;
    bidRounds: ToField<Vector<"u64">>;
    accumulatedProfit: ToField<"u64">;
}

export type StrategyV2Reified = Reified<StrategyV2, StrategyV2Fields>;

export class StrategyV2 implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::auto_bid::StrategyV2`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = StrategyV2.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::auto_bid::StrategyV2`;
    readonly $typeArgs: [];
    readonly $isPhantom = StrategyV2.$isPhantom;

    readonly id: ToField<UID>;
    readonly vaultIndex: ToField<"u64">;
    readonly signalIndex: ToField<"u64">;
    readonly user: ToField<"address">;
    readonly pricePercentage: ToField<"u64">;
    readonly size: ToField<"u64">;
    readonly maxTimes: ToField<"u64">;
    readonly targetRounds: ToField<Vector<"u64">>;
    readonly receipts: ToField<Vector<TypusBidReceipt>>;
    readonly active: ToField<"bool">;
    readonly u64Padding: ToField<Vector<"u64">>;
    readonly bidTimes: ToField<"u64">;
    readonly bidRound: ToField<"u64">;
    readonly bidTsMs: ToField<"u64">;
    readonly bidRounds: ToField<Vector<"u64">>;
    readonly accumulatedProfit: ToField<"u64">;

    private constructor(typeArgs: [], fields: StrategyV2Fields) {
        this.$fullTypeName = composeSuiType(StrategyV2.$typeName, ...typeArgs) as `${typeof PKG_V1}::auto_bid::StrategyV2`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.vaultIndex = fields.vaultIndex;
        this.signalIndex = fields.signalIndex;
        this.user = fields.user;
        this.pricePercentage = fields.pricePercentage;
        this.size = fields.size;
        this.maxTimes = fields.maxTimes;
        this.targetRounds = fields.targetRounds;
        this.receipts = fields.receipts;
        this.active = fields.active;
        this.u64Padding = fields.u64Padding;
        this.bidTimes = fields.bidTimes;
        this.bidRound = fields.bidRound;
        this.bidTsMs = fields.bidTsMs;
        this.bidRounds = fields.bidRounds;
        this.accumulatedProfit = fields.accumulatedProfit;
    }

    static reified(): StrategyV2Reified {
        return {
            typeName: StrategyV2.$typeName,
            fullTypeName: composeSuiType(StrategyV2.$typeName, ...[]) as `${typeof PKG_V1}::auto_bid::StrategyV2`,
            typeArgs: [] as [],
            isPhantom: StrategyV2.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => StrategyV2.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => StrategyV2.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => StrategyV2.fromBcs(data),
            bcs: StrategyV2.bcs,
            fromJSONField: (field: any) => StrategyV2.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => StrategyV2.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => StrategyV2.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => StrategyV2.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => StrategyV2.fetch(client, id),
            new: (fields: StrategyV2Fields) => {
                return new StrategyV2([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return StrategyV2.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<StrategyV2>> {
        return phantom(StrategyV2.reified());
    }
    static get p() {
        return StrategyV2.phantom();
    }

    static get bcs() {
        return bcs.struct("StrategyV2", {
            id: UID.bcs,
            vault_index: bcs.u64(),
            signal_index: bcs.u64(),
            user: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            price_percentage: bcs.u64(),
            size: bcs.u64(),
            max_times: bcs.u64(),
            target_rounds: bcs.vector(bcs.u64()),
            receipts: bcs.vector(TypusBidReceipt.bcs),
            active: bcs.bool(),
            u64_padding: bcs.vector(bcs.u64()),
            bid_times: bcs.u64(),
            bid_round: bcs.u64(),
            bid_ts_ms: bcs.u64(),
            bid_rounds: bcs.vector(bcs.u64()),
            accumulated_profit: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): StrategyV2 {
        return StrategyV2.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            vaultIndex: decodeFromFields("u64", fields.vault_index),
            signalIndex: decodeFromFields("u64", fields.signal_index),
            user: decodeFromFields("address", fields.user),
            pricePercentage: decodeFromFields("u64", fields.price_percentage),
            size: decodeFromFields("u64", fields.size),
            maxTimes: decodeFromFields("u64", fields.max_times),
            targetRounds: decodeFromFields(reified.vector("u64"), fields.target_rounds),
            receipts: decodeFromFields(reified.vector(TypusBidReceipt.reified()), fields.receipts),
            active: decodeFromFields("bool", fields.active),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
            bidTimes: decodeFromFields("u64", fields.bid_times),
            bidRound: decodeFromFields("u64", fields.bid_round),
            bidTsMs: decodeFromFields("u64", fields.bid_ts_ms),
            bidRounds: decodeFromFields(reified.vector("u64"), fields.bid_rounds),
            accumulatedProfit: decodeFromFields("u64", fields.accumulated_profit),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): StrategyV2 {
        if (!isStrategyV2(item.type)) {
            throw new Error("not a StrategyV2 type");
        }

        return StrategyV2.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            vaultIndex: decodeFromFieldsWithTypes("u64", item.fields.vault_index),
            signalIndex: decodeFromFieldsWithTypes("u64", item.fields.signal_index),
            user: decodeFromFieldsWithTypes("address", item.fields.user),
            pricePercentage: decodeFromFieldsWithTypes("u64", item.fields.price_percentage),
            size: decodeFromFieldsWithTypes("u64", item.fields.size),
            maxTimes: decodeFromFieldsWithTypes("u64", item.fields.max_times),
            targetRounds: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.target_rounds),
            receipts: decodeFromFieldsWithTypes(reified.vector(TypusBidReceipt.reified()), item.fields.receipts),
            active: decodeFromFieldsWithTypes("bool", item.fields.active),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
            bidTimes: decodeFromFieldsWithTypes("u64", item.fields.bid_times),
            bidRound: decodeFromFieldsWithTypes("u64", item.fields.bid_round),
            bidTsMs: decodeFromFieldsWithTypes("u64", item.fields.bid_ts_ms),
            bidRounds: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.bid_rounds),
            accumulatedProfit: decodeFromFieldsWithTypes("u64", item.fields.accumulated_profit),
        });
    }

    static fromBcs(data: Uint8Array): StrategyV2 {
        return StrategyV2.fromFields(StrategyV2.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            vaultIndex: this.vaultIndex.toString(),
            signalIndex: this.signalIndex.toString(),
            user: this.user,
            pricePercentage: this.pricePercentage.toString(),
            size: this.size.toString(),
            maxTimes: this.maxTimes.toString(),
            targetRounds: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.targetRounds),
            receipts: fieldToJSON<Vector<TypusBidReceipt>>(`vector<${TypusBidReceipt.$typeName}>`, this.receipts),
            active: this.active,
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
            bidTimes: this.bidTimes.toString(),
            bidRound: this.bidRound.toString(),
            bidTsMs: this.bidTsMs.toString(),
            bidRounds: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.bidRounds),
            accumulatedProfit: this.accumulatedProfit.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): StrategyV2 {
        return StrategyV2.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            vaultIndex: decodeFromJSONField("u64", field.vaultIndex),
            signalIndex: decodeFromJSONField("u64", field.signalIndex),
            user: decodeFromJSONField("address", field.user),
            pricePercentage: decodeFromJSONField("u64", field.pricePercentage),
            size: decodeFromJSONField("u64", field.size),
            maxTimes: decodeFromJSONField("u64", field.maxTimes),
            targetRounds: decodeFromJSONField(reified.vector("u64"), field.targetRounds),
            receipts: decodeFromJSONField(reified.vector(TypusBidReceipt.reified()), field.receipts),
            active: decodeFromJSONField("bool", field.active),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
            bidTimes: decodeFromJSONField("u64", field.bidTimes),
            bidRound: decodeFromJSONField("u64", field.bidRound),
            bidTsMs: decodeFromJSONField("u64", field.bidTsMs),
            bidRounds: decodeFromJSONField(reified.vector("u64"), field.bidRounds),
            accumulatedProfit: decodeFromJSONField("u64", field.accumulatedProfit),
        });
    }

    static fromJSON(json: Record<string, any>): StrategyV2 {
        if (json.$typeName !== StrategyV2.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return StrategyV2.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): StrategyV2 {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isStrategyV2(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a StrategyV2 object`);
        }
        return StrategyV2.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): StrategyV2 {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isStrategyV2(data.bcs.type)) {
                throw new Error(`object at is not a StrategyV2 object`);
            }

            return StrategyV2.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return StrategyV2.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<StrategyV2> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching StrategyV2 object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isStrategyV2(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a StrategyV2 object`);
        }

        return StrategyV2.fromSuiObjectData(res.data);
    }
}

/* ============================== UpdateStrategyEvent =============================== */

export function isUpdateStrategyEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::auto_bid::UpdateStrategyEvent`;
}

export interface UpdateStrategyEventFields {
    vaultIndex: ToField<"u64">;
    signalIndex: ToField<"u64">;
    strategyIndex: ToField<"u64">;
    user: ToField<"address">;
    pricePercentage: ToField<"u64">;
    size: ToField<"u64">;
    maxTimes: ToField<"u64">;
    targetRounds: ToField<Vector<"u64">>;
    depositAmount: ToField<"u64">;
}

export type UpdateStrategyEventReified = Reified<UpdateStrategyEvent, UpdateStrategyEventFields>;

export class UpdateStrategyEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::auto_bid::UpdateStrategyEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = UpdateStrategyEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::auto_bid::UpdateStrategyEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = UpdateStrategyEvent.$isPhantom;

    readonly vaultIndex: ToField<"u64">;
    readonly signalIndex: ToField<"u64">;
    readonly strategyIndex: ToField<"u64">;
    readonly user: ToField<"address">;
    readonly pricePercentage: ToField<"u64">;
    readonly size: ToField<"u64">;
    readonly maxTimes: ToField<"u64">;
    readonly targetRounds: ToField<Vector<"u64">>;
    readonly depositAmount: ToField<"u64">;

    private constructor(typeArgs: [], fields: UpdateStrategyEventFields) {
        this.$fullTypeName = composeSuiType(
            UpdateStrategyEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::auto_bid::UpdateStrategyEvent`;
        this.$typeArgs = typeArgs;

        this.vaultIndex = fields.vaultIndex;
        this.signalIndex = fields.signalIndex;
        this.strategyIndex = fields.strategyIndex;
        this.user = fields.user;
        this.pricePercentage = fields.pricePercentage;
        this.size = fields.size;
        this.maxTimes = fields.maxTimes;
        this.targetRounds = fields.targetRounds;
        this.depositAmount = fields.depositAmount;
    }

    static reified(): UpdateStrategyEventReified {
        return {
            typeName: UpdateStrategyEvent.$typeName,
            fullTypeName: composeSuiType(UpdateStrategyEvent.$typeName, ...[]) as `${typeof PKG_V1}::auto_bid::UpdateStrategyEvent`,
            typeArgs: [] as [],
            isPhantom: UpdateStrategyEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => UpdateStrategyEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => UpdateStrategyEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => UpdateStrategyEvent.fromBcs(data),
            bcs: UpdateStrategyEvent.bcs,
            fromJSONField: (field: any) => UpdateStrategyEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => UpdateStrategyEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => UpdateStrategyEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => UpdateStrategyEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => UpdateStrategyEvent.fetch(client, id),
            new: (fields: UpdateStrategyEventFields) => {
                return new UpdateStrategyEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return UpdateStrategyEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<UpdateStrategyEvent>> {
        return phantom(UpdateStrategyEvent.reified());
    }
    static get p() {
        return UpdateStrategyEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("UpdateStrategyEvent", {
            vault_index: bcs.u64(),
            signal_index: bcs.u64(),
            strategy_index: bcs.u64(),
            user: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            price_percentage: bcs.u64(),
            size: bcs.u64(),
            max_times: bcs.u64(),
            target_rounds: bcs.vector(bcs.u64()),
            deposit_amount: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): UpdateStrategyEvent {
        return UpdateStrategyEvent.reified().new({
            vaultIndex: decodeFromFields("u64", fields.vault_index),
            signalIndex: decodeFromFields("u64", fields.signal_index),
            strategyIndex: decodeFromFields("u64", fields.strategy_index),
            user: decodeFromFields("address", fields.user),
            pricePercentage: decodeFromFields("u64", fields.price_percentage),
            size: decodeFromFields("u64", fields.size),
            maxTimes: decodeFromFields("u64", fields.max_times),
            targetRounds: decodeFromFields(reified.vector("u64"), fields.target_rounds),
            depositAmount: decodeFromFields("u64", fields.deposit_amount),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): UpdateStrategyEvent {
        if (!isUpdateStrategyEvent(item.type)) {
            throw new Error("not a UpdateStrategyEvent type");
        }

        return UpdateStrategyEvent.reified().new({
            vaultIndex: decodeFromFieldsWithTypes("u64", item.fields.vault_index),
            signalIndex: decodeFromFieldsWithTypes("u64", item.fields.signal_index),
            strategyIndex: decodeFromFieldsWithTypes("u64", item.fields.strategy_index),
            user: decodeFromFieldsWithTypes("address", item.fields.user),
            pricePercentage: decodeFromFieldsWithTypes("u64", item.fields.price_percentage),
            size: decodeFromFieldsWithTypes("u64", item.fields.size),
            maxTimes: decodeFromFieldsWithTypes("u64", item.fields.max_times),
            targetRounds: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.target_rounds),
            depositAmount: decodeFromFieldsWithTypes("u64", item.fields.deposit_amount),
        });
    }

    static fromBcs(data: Uint8Array): UpdateStrategyEvent {
        return UpdateStrategyEvent.fromFields(UpdateStrategyEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            vaultIndex: this.vaultIndex.toString(),
            signalIndex: this.signalIndex.toString(),
            strategyIndex: this.strategyIndex.toString(),
            user: this.user,
            pricePercentage: this.pricePercentage.toString(),
            size: this.size.toString(),
            maxTimes: this.maxTimes.toString(),
            targetRounds: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.targetRounds),
            depositAmount: this.depositAmount.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): UpdateStrategyEvent {
        return UpdateStrategyEvent.reified().new({
            vaultIndex: decodeFromJSONField("u64", field.vaultIndex),
            signalIndex: decodeFromJSONField("u64", field.signalIndex),
            strategyIndex: decodeFromJSONField("u64", field.strategyIndex),
            user: decodeFromJSONField("address", field.user),
            pricePercentage: decodeFromJSONField("u64", field.pricePercentage),
            size: decodeFromJSONField("u64", field.size),
            maxTimes: decodeFromJSONField("u64", field.maxTimes),
            targetRounds: decodeFromJSONField(reified.vector("u64"), field.targetRounds),
            depositAmount: decodeFromJSONField("u64", field.depositAmount),
        });
    }

    static fromJSON(json: Record<string, any>): UpdateStrategyEvent {
        if (json.$typeName !== UpdateStrategyEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return UpdateStrategyEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): UpdateStrategyEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUpdateStrategyEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a UpdateStrategyEvent object`);
        }
        return UpdateStrategyEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): UpdateStrategyEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isUpdateStrategyEvent(data.bcs.type)) {
                throw new Error(`object at is not a UpdateStrategyEvent object`);
            }

            return UpdateStrategyEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return UpdateStrategyEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<UpdateStrategyEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching UpdateStrategyEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isUpdateStrategyEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UpdateStrategyEvent object`);
        }

        return UpdateStrategyEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== WithdrawProfitEvent =============================== */

export function isWithdrawProfitEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::auto_bid::WithdrawProfitEvent`;
}

export interface WithdrawProfitEventFields {
    vaultIndex: ToField<"u64">;
    signalIndex: ToField<"u64">;
    strategyIndex: ToField<"u64">;
    user: ToField<"address">;
    profit: ToField<"u64">;
}

export type WithdrawProfitEventReified = Reified<WithdrawProfitEvent, WithdrawProfitEventFields>;

export class WithdrawProfitEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::auto_bid::WithdrawProfitEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = WithdrawProfitEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::auto_bid::WithdrawProfitEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = WithdrawProfitEvent.$isPhantom;

    readonly vaultIndex: ToField<"u64">;
    readonly signalIndex: ToField<"u64">;
    readonly strategyIndex: ToField<"u64">;
    readonly user: ToField<"address">;
    readonly profit: ToField<"u64">;

    private constructor(typeArgs: [], fields: WithdrawProfitEventFields) {
        this.$fullTypeName = composeSuiType(
            WithdrawProfitEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::auto_bid::WithdrawProfitEvent`;
        this.$typeArgs = typeArgs;

        this.vaultIndex = fields.vaultIndex;
        this.signalIndex = fields.signalIndex;
        this.strategyIndex = fields.strategyIndex;
        this.user = fields.user;
        this.profit = fields.profit;
    }

    static reified(): WithdrawProfitEventReified {
        return {
            typeName: WithdrawProfitEvent.$typeName,
            fullTypeName: composeSuiType(WithdrawProfitEvent.$typeName, ...[]) as `${typeof PKG_V1}::auto_bid::WithdrawProfitEvent`,
            typeArgs: [] as [],
            isPhantom: WithdrawProfitEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => WithdrawProfitEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => WithdrawProfitEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => WithdrawProfitEvent.fromBcs(data),
            bcs: WithdrawProfitEvent.bcs,
            fromJSONField: (field: any) => WithdrawProfitEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => WithdrawProfitEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => WithdrawProfitEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => WithdrawProfitEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => WithdrawProfitEvent.fetch(client, id),
            new: (fields: WithdrawProfitEventFields) => {
                return new WithdrawProfitEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return WithdrawProfitEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<WithdrawProfitEvent>> {
        return phantom(WithdrawProfitEvent.reified());
    }
    static get p() {
        return WithdrawProfitEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("WithdrawProfitEvent", {
            vault_index: bcs.u64(),
            signal_index: bcs.u64(),
            strategy_index: bcs.u64(),
            user: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            profit: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): WithdrawProfitEvent {
        return WithdrawProfitEvent.reified().new({
            vaultIndex: decodeFromFields("u64", fields.vault_index),
            signalIndex: decodeFromFields("u64", fields.signal_index),
            strategyIndex: decodeFromFields("u64", fields.strategy_index),
            user: decodeFromFields("address", fields.user),
            profit: decodeFromFields("u64", fields.profit),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): WithdrawProfitEvent {
        if (!isWithdrawProfitEvent(item.type)) {
            throw new Error("not a WithdrawProfitEvent type");
        }

        return WithdrawProfitEvent.reified().new({
            vaultIndex: decodeFromFieldsWithTypes("u64", item.fields.vault_index),
            signalIndex: decodeFromFieldsWithTypes("u64", item.fields.signal_index),
            strategyIndex: decodeFromFieldsWithTypes("u64", item.fields.strategy_index),
            user: decodeFromFieldsWithTypes("address", item.fields.user),
            profit: decodeFromFieldsWithTypes("u64", item.fields.profit),
        });
    }

    static fromBcs(data: Uint8Array): WithdrawProfitEvent {
        return WithdrawProfitEvent.fromFields(WithdrawProfitEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            vaultIndex: this.vaultIndex.toString(),
            signalIndex: this.signalIndex.toString(),
            strategyIndex: this.strategyIndex.toString(),
            user: this.user,
            profit: this.profit.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): WithdrawProfitEvent {
        return WithdrawProfitEvent.reified().new({
            vaultIndex: decodeFromJSONField("u64", field.vaultIndex),
            signalIndex: decodeFromJSONField("u64", field.signalIndex),
            strategyIndex: decodeFromJSONField("u64", field.strategyIndex),
            user: decodeFromJSONField("address", field.user),
            profit: decodeFromJSONField("u64", field.profit),
        });
    }

    static fromJSON(json: Record<string, any>): WithdrawProfitEvent {
        if (json.$typeName !== WithdrawProfitEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return WithdrawProfitEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): WithdrawProfitEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isWithdrawProfitEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a WithdrawProfitEvent object`);
        }
        return WithdrawProfitEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): WithdrawProfitEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isWithdrawProfitEvent(data.bcs.type)) {
                throw new Error(`object at is not a WithdrawProfitEvent object`);
            }

            return WithdrawProfitEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return WithdrawProfitEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<WithdrawProfitEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching WithdrawProfitEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isWithdrawProfitEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a WithdrawProfitEvent object`);
        }

        return WithdrawProfitEvent.fromSuiObjectData(res.data);
    }
}
