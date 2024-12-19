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
import { String } from "../../0x1/string/structs";
import { ID, UID } from "../../0x2/object/structs";
import { TransferPolicyCap } from "../../0x2/transfer-policy/structs";
import { Url } from "../../0x2/url/structs";
import { VecMap } from "../../0x2/vec-map/structs";
import { PKG_V1, PKG_V17, PKG_V2 } from "../index";
import { TableVec } from "../table-vec/structs";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromB64, fromHEX, toHEX } from "@mysten/sui/utils";

/* ============================== ManagerCap =============================== */

export function isManagerCap(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::typus_nft::ManagerCap`;
}

export interface ManagerCapFields {
    id: ToField<UID>;
}

export type ManagerCapReified = Reified<ManagerCap, ManagerCapFields>;

export class ManagerCap implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::typus_nft::ManagerCap`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = ManagerCap.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::typus_nft::ManagerCap`;
    readonly $typeArgs: [];
    readonly $isPhantom = ManagerCap.$isPhantom;

    readonly id: ToField<UID>;

    private constructor(typeArgs: [], fields: ManagerCapFields) {
        this.$fullTypeName = composeSuiType(ManagerCap.$typeName, ...typeArgs) as `${typeof PKG_V1}::typus_nft::ManagerCap`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
    }

    static reified(): ManagerCapReified {
        return {
            typeName: ManagerCap.$typeName,
            fullTypeName: composeSuiType(ManagerCap.$typeName, ...[]) as `${typeof PKG_V1}::typus_nft::ManagerCap`,
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

/* ============================== ExpDownEvent =============================== */

export function isExpDownEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V17}::typus_nft::ExpDownEvent`;
}

export interface ExpDownEventFields {
    nftId: ToField<ID>;
    number: ToField<"u64">;
    expRemove: ToField<"u64">;
}

export type ExpDownEventReified = Reified<ExpDownEvent, ExpDownEventFields>;

export class ExpDownEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V17}::typus_nft::ExpDownEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = ExpDownEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V17}::typus_nft::ExpDownEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = ExpDownEvent.$isPhantom;

    readonly nftId: ToField<ID>;
    readonly number: ToField<"u64">;
    readonly expRemove: ToField<"u64">;

    private constructor(typeArgs: [], fields: ExpDownEventFields) {
        this.$fullTypeName = composeSuiType(ExpDownEvent.$typeName, ...typeArgs) as `${typeof PKG_V17}::typus_nft::ExpDownEvent`;
        this.$typeArgs = typeArgs;

        this.nftId = fields.nftId;
        this.number = fields.number;
        this.expRemove = fields.expRemove;
    }

    static reified(): ExpDownEventReified {
        return {
            typeName: ExpDownEvent.$typeName,
            fullTypeName: composeSuiType(ExpDownEvent.$typeName, ...[]) as `${typeof PKG_V17}::typus_nft::ExpDownEvent`,
            typeArgs: [] as [],
            isPhantom: ExpDownEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => ExpDownEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => ExpDownEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => ExpDownEvent.fromBcs(data),
            bcs: ExpDownEvent.bcs,
            fromJSONField: (field: any) => ExpDownEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => ExpDownEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => ExpDownEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => ExpDownEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => ExpDownEvent.fetch(client, id),
            new: (fields: ExpDownEventFields) => {
                return new ExpDownEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return ExpDownEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<ExpDownEvent>> {
        return phantom(ExpDownEvent.reified());
    }
    static get p() {
        return ExpDownEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("ExpDownEvent", {
            nft_id: ID.bcs,
            number: bcs.u64(),
            exp_remove: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): ExpDownEvent {
        return ExpDownEvent.reified().new({
            nftId: decodeFromFields(ID.reified(), fields.nft_id),
            number: decodeFromFields("u64", fields.number),
            expRemove: decodeFromFields("u64", fields.exp_remove),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): ExpDownEvent {
        if (!isExpDownEvent(item.type)) {
            throw new Error("not a ExpDownEvent type");
        }

        return ExpDownEvent.reified().new({
            nftId: decodeFromFieldsWithTypes(ID.reified(), item.fields.nft_id),
            number: decodeFromFieldsWithTypes("u64", item.fields.number),
            expRemove: decodeFromFieldsWithTypes("u64", item.fields.exp_remove),
        });
    }

    static fromBcs(data: Uint8Array): ExpDownEvent {
        return ExpDownEvent.fromFields(ExpDownEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            nftId: this.nftId,
            number: this.number.toString(),
            expRemove: this.expRemove.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): ExpDownEvent {
        return ExpDownEvent.reified().new({
            nftId: decodeFromJSONField(ID.reified(), field.nftId),
            number: decodeFromJSONField("u64", field.number),
            expRemove: decodeFromJSONField("u64", field.expRemove),
        });
    }

    static fromJSON(json: Record<string, any>): ExpDownEvent {
        if (json.$typeName !== ExpDownEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return ExpDownEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): ExpDownEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isExpDownEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a ExpDownEvent object`);
        }
        return ExpDownEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): ExpDownEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isExpDownEvent(data.bcs.type)) {
                throw new Error(`object at is not a ExpDownEvent object`);
            }

            return ExpDownEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ExpDownEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<ExpDownEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching ExpDownEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isExpDownEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ExpDownEvent object`);
        }

        return ExpDownEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== ExpUpEvent =============================== */

export function isExpUpEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V2}::typus_nft::ExpUpEvent`;
}

export interface ExpUpEventFields {
    nftId: ToField<ID>;
    number: ToField<"u64">;
    expEarn: ToField<"u64">;
}

export type ExpUpEventReified = Reified<ExpUpEvent, ExpUpEventFields>;

export class ExpUpEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V2}::typus_nft::ExpUpEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = ExpUpEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V2}::typus_nft::ExpUpEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = ExpUpEvent.$isPhantom;

    readonly nftId: ToField<ID>;
    readonly number: ToField<"u64">;
    readonly expEarn: ToField<"u64">;

    private constructor(typeArgs: [], fields: ExpUpEventFields) {
        this.$fullTypeName = composeSuiType(ExpUpEvent.$typeName, ...typeArgs) as `${typeof PKG_V2}::typus_nft::ExpUpEvent`;
        this.$typeArgs = typeArgs;

        this.nftId = fields.nftId;
        this.number = fields.number;
        this.expEarn = fields.expEarn;
    }

    static reified(): ExpUpEventReified {
        return {
            typeName: ExpUpEvent.$typeName,
            fullTypeName: composeSuiType(ExpUpEvent.$typeName, ...[]) as `${typeof PKG_V2}::typus_nft::ExpUpEvent`,
            typeArgs: [] as [],
            isPhantom: ExpUpEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => ExpUpEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => ExpUpEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => ExpUpEvent.fromBcs(data),
            bcs: ExpUpEvent.bcs,
            fromJSONField: (field: any) => ExpUpEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => ExpUpEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => ExpUpEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => ExpUpEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => ExpUpEvent.fetch(client, id),
            new: (fields: ExpUpEventFields) => {
                return new ExpUpEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return ExpUpEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<ExpUpEvent>> {
        return phantom(ExpUpEvent.reified());
    }
    static get p() {
        return ExpUpEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("ExpUpEvent", {
            nft_id: ID.bcs,
            number: bcs.u64(),
            exp_earn: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): ExpUpEvent {
        return ExpUpEvent.reified().new({
            nftId: decodeFromFields(ID.reified(), fields.nft_id),
            number: decodeFromFields("u64", fields.number),
            expEarn: decodeFromFields("u64", fields.exp_earn),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): ExpUpEvent {
        if (!isExpUpEvent(item.type)) {
            throw new Error("not a ExpUpEvent type");
        }

        return ExpUpEvent.reified().new({
            nftId: decodeFromFieldsWithTypes(ID.reified(), item.fields.nft_id),
            number: decodeFromFieldsWithTypes("u64", item.fields.number),
            expEarn: decodeFromFieldsWithTypes("u64", item.fields.exp_earn),
        });
    }

    static fromBcs(data: Uint8Array): ExpUpEvent {
        return ExpUpEvent.fromFields(ExpUpEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            nftId: this.nftId,
            number: this.number.toString(),
            expEarn: this.expEarn.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): ExpUpEvent {
        return ExpUpEvent.reified().new({
            nftId: decodeFromJSONField(ID.reified(), field.nftId),
            number: decodeFromJSONField("u64", field.number),
            expEarn: decodeFromJSONField("u64", field.expEarn),
        });
    }

    static fromJSON(json: Record<string, any>): ExpUpEvent {
        if (json.$typeName !== ExpUpEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return ExpUpEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): ExpUpEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isExpUpEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a ExpUpEvent object`);
        }
        return ExpUpEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): ExpUpEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isExpUpEvent(data.bcs.type)) {
                throw new Error(`object at is not a ExpUpEvent object`);
            }

            return ExpUpEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ExpUpEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<ExpUpEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching ExpUpEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isExpUpEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ExpUpEvent object`);
        }

        return ExpUpEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== FirstBidEvent =============================== */

export function isFirstBidEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::typus_nft::FirstBidEvent`;
}

export interface FirstBidEventFields {
    nftId: ToField<ID>;
    number: ToField<"u64">;
    expEarn: ToField<"u64">;
}

export type FirstBidEventReified = Reified<FirstBidEvent, FirstBidEventFields>;

export class FirstBidEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::typus_nft::FirstBidEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = FirstBidEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::typus_nft::FirstBidEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = FirstBidEvent.$isPhantom;

    readonly nftId: ToField<ID>;
    readonly number: ToField<"u64">;
    readonly expEarn: ToField<"u64">;

    private constructor(typeArgs: [], fields: FirstBidEventFields) {
        this.$fullTypeName = composeSuiType(FirstBidEvent.$typeName, ...typeArgs) as `${typeof PKG_V1}::typus_nft::FirstBidEvent`;
        this.$typeArgs = typeArgs;

        this.nftId = fields.nftId;
        this.number = fields.number;
        this.expEarn = fields.expEarn;
    }

    static reified(): FirstBidEventReified {
        return {
            typeName: FirstBidEvent.$typeName,
            fullTypeName: composeSuiType(FirstBidEvent.$typeName, ...[]) as `${typeof PKG_V1}::typus_nft::FirstBidEvent`,
            typeArgs: [] as [],
            isPhantom: FirstBidEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => FirstBidEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => FirstBidEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => FirstBidEvent.fromBcs(data),
            bcs: FirstBidEvent.bcs,
            fromJSONField: (field: any) => FirstBidEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => FirstBidEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => FirstBidEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => FirstBidEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => FirstBidEvent.fetch(client, id),
            new: (fields: FirstBidEventFields) => {
                return new FirstBidEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return FirstBidEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<FirstBidEvent>> {
        return phantom(FirstBidEvent.reified());
    }
    static get p() {
        return FirstBidEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("FirstBidEvent", {
            nft_id: ID.bcs,
            number: bcs.u64(),
            exp_earn: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): FirstBidEvent {
        return FirstBidEvent.reified().new({
            nftId: decodeFromFields(ID.reified(), fields.nft_id),
            number: decodeFromFields("u64", fields.number),
            expEarn: decodeFromFields("u64", fields.exp_earn),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): FirstBidEvent {
        if (!isFirstBidEvent(item.type)) {
            throw new Error("not a FirstBidEvent type");
        }

        return FirstBidEvent.reified().new({
            nftId: decodeFromFieldsWithTypes(ID.reified(), item.fields.nft_id),
            number: decodeFromFieldsWithTypes("u64", item.fields.number),
            expEarn: decodeFromFieldsWithTypes("u64", item.fields.exp_earn),
        });
    }

    static fromBcs(data: Uint8Array): FirstBidEvent {
        return FirstBidEvent.fromFields(FirstBidEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            nftId: this.nftId,
            number: this.number.toString(),
            expEarn: this.expEarn.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): FirstBidEvent {
        return FirstBidEvent.reified().new({
            nftId: decodeFromJSONField(ID.reified(), field.nftId),
            number: decodeFromJSONField("u64", field.number),
            expEarn: decodeFromJSONField("u64", field.expEarn),
        });
    }

    static fromJSON(json: Record<string, any>): FirstBidEvent {
        if (json.$typeName !== FirstBidEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return FirstBidEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): FirstBidEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isFirstBidEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a FirstBidEvent object`);
        }
        return FirstBidEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): FirstBidEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isFirstBidEvent(data.bcs.type)) {
                throw new Error(`object at is not a FirstBidEvent object`);
            }

            return FirstBidEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return FirstBidEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<FirstBidEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching FirstBidEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isFirstBidEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a FirstBidEvent object`);
        }

        return FirstBidEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== FirstDepositEvent =============================== */

export function isFirstDepositEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::typus_nft::FirstDepositEvent`;
}

export interface FirstDepositEventFields {
    nftId: ToField<ID>;
    number: ToField<"u64">;
    expEarn: ToField<"u64">;
}

export type FirstDepositEventReified = Reified<FirstDepositEvent, FirstDepositEventFields>;

export class FirstDepositEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::typus_nft::FirstDepositEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = FirstDepositEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::typus_nft::FirstDepositEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = FirstDepositEvent.$isPhantom;

    readonly nftId: ToField<ID>;
    readonly number: ToField<"u64">;
    readonly expEarn: ToField<"u64">;

    private constructor(typeArgs: [], fields: FirstDepositEventFields) {
        this.$fullTypeName = composeSuiType(FirstDepositEvent.$typeName, ...typeArgs) as `${typeof PKG_V1}::typus_nft::FirstDepositEvent`;
        this.$typeArgs = typeArgs;

        this.nftId = fields.nftId;
        this.number = fields.number;
        this.expEarn = fields.expEarn;
    }

    static reified(): FirstDepositEventReified {
        return {
            typeName: FirstDepositEvent.$typeName,
            fullTypeName: composeSuiType(FirstDepositEvent.$typeName, ...[]) as `${typeof PKG_V1}::typus_nft::FirstDepositEvent`,
            typeArgs: [] as [],
            isPhantom: FirstDepositEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => FirstDepositEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => FirstDepositEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => FirstDepositEvent.fromBcs(data),
            bcs: FirstDepositEvent.bcs,
            fromJSONField: (field: any) => FirstDepositEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => FirstDepositEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => FirstDepositEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => FirstDepositEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => FirstDepositEvent.fetch(client, id),
            new: (fields: FirstDepositEventFields) => {
                return new FirstDepositEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return FirstDepositEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<FirstDepositEvent>> {
        return phantom(FirstDepositEvent.reified());
    }
    static get p() {
        return FirstDepositEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("FirstDepositEvent", {
            nft_id: ID.bcs,
            number: bcs.u64(),
            exp_earn: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): FirstDepositEvent {
        return FirstDepositEvent.reified().new({
            nftId: decodeFromFields(ID.reified(), fields.nft_id),
            number: decodeFromFields("u64", fields.number),
            expEarn: decodeFromFields("u64", fields.exp_earn),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): FirstDepositEvent {
        if (!isFirstDepositEvent(item.type)) {
            throw new Error("not a FirstDepositEvent type");
        }

        return FirstDepositEvent.reified().new({
            nftId: decodeFromFieldsWithTypes(ID.reified(), item.fields.nft_id),
            number: decodeFromFieldsWithTypes("u64", item.fields.number),
            expEarn: decodeFromFieldsWithTypes("u64", item.fields.exp_earn),
        });
    }

    static fromBcs(data: Uint8Array): FirstDepositEvent {
        return FirstDepositEvent.fromFields(FirstDepositEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            nftId: this.nftId,
            number: this.number.toString(),
            expEarn: this.expEarn.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): FirstDepositEvent {
        return FirstDepositEvent.reified().new({
            nftId: decodeFromJSONField(ID.reified(), field.nftId),
            number: decodeFromJSONField("u64", field.number),
            expEarn: decodeFromJSONField("u64", field.expEarn),
        });
    }

    static fromJSON(json: Record<string, any>): FirstDepositEvent {
        if (json.$typeName !== FirstDepositEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return FirstDepositEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): FirstDepositEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isFirstDepositEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a FirstDepositEvent object`);
        }
        return FirstDepositEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): FirstDepositEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isFirstDepositEvent(data.bcs.type)) {
                throw new Error(`object at is not a FirstDepositEvent object`);
            }

            return FirstDepositEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return FirstDepositEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<FirstDepositEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching FirstDepositEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isFirstDepositEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a FirstDepositEvent object`);
        }

        return FirstDepositEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== LevelUpEvent =============================== */

export function isLevelUpEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::typus_nft::LevelUpEvent`;
}

export interface LevelUpEventFields {
    nftId: ToField<ID>;
    level: ToField<"u64">;
}

export type LevelUpEventReified = Reified<LevelUpEvent, LevelUpEventFields>;

export class LevelUpEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::typus_nft::LevelUpEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = LevelUpEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::typus_nft::LevelUpEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = LevelUpEvent.$isPhantom;

    readonly nftId: ToField<ID>;
    readonly level: ToField<"u64">;

    private constructor(typeArgs: [], fields: LevelUpEventFields) {
        this.$fullTypeName = composeSuiType(LevelUpEvent.$typeName, ...typeArgs) as `${typeof PKG_V1}::typus_nft::LevelUpEvent`;
        this.$typeArgs = typeArgs;

        this.nftId = fields.nftId;
        this.level = fields.level;
    }

    static reified(): LevelUpEventReified {
        return {
            typeName: LevelUpEvent.$typeName,
            fullTypeName: composeSuiType(LevelUpEvent.$typeName, ...[]) as `${typeof PKG_V1}::typus_nft::LevelUpEvent`,
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
            level: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): LevelUpEvent {
        return LevelUpEvent.reified().new({
            nftId: decodeFromFields(ID.reified(), fields.nft_id),
            level: decodeFromFields("u64", fields.level),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): LevelUpEvent {
        if (!isLevelUpEvent(item.type)) {
            throw new Error("not a LevelUpEvent type");
        }

        return LevelUpEvent.reified().new({
            nftId: decodeFromFieldsWithTypes(ID.reified(), item.fields.nft_id),
            level: decodeFromFieldsWithTypes("u64", item.fields.level),
        });
    }

    static fromBcs(data: Uint8Array): LevelUpEvent {
        return LevelUpEvent.fromFields(LevelUpEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            nftId: this.nftId,
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

/* ============================== MintEvent =============================== */

export function isMintEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::typus_nft::MintEvent`;
}

export interface MintEventFields {
    id: ToField<ID>;
    name: ToField<String>;
    description: ToField<String>;
    number: ToField<"u64">;
    url: ToField<Url>;
    attributes: ToField<VecMap<String, String>>;
    sender: ToField<"address">;
}

export type MintEventReified = Reified<MintEvent, MintEventFields>;

export class MintEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::typus_nft::MintEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = MintEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::typus_nft::MintEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = MintEvent.$isPhantom;

    readonly id: ToField<ID>;
    readonly name: ToField<String>;
    readonly description: ToField<String>;
    readonly number: ToField<"u64">;
    readonly url: ToField<Url>;
    readonly attributes: ToField<VecMap<String, String>>;
    readonly sender: ToField<"address">;

    private constructor(typeArgs: [], fields: MintEventFields) {
        this.$fullTypeName = composeSuiType(MintEvent.$typeName, ...typeArgs) as `${typeof PKG_V1}::typus_nft::MintEvent`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.name = fields.name;
        this.description = fields.description;
        this.number = fields.number;
        this.url = fields.url;
        this.attributes = fields.attributes;
        this.sender = fields.sender;
    }

    static reified(): MintEventReified {
        return {
            typeName: MintEvent.$typeName,
            fullTypeName: composeSuiType(MintEvent.$typeName, ...[]) as `${typeof PKG_V1}::typus_nft::MintEvent`,
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
            id: ID.bcs,
            name: String.bcs,
            description: String.bcs,
            number: bcs.u64(),
            url: Url.bcs,
            attributes: VecMap.bcs(String.bcs, String.bcs),
            sender: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        });
    }

    static fromFields(fields: Record<string, any>): MintEvent {
        return MintEvent.reified().new({
            id: decodeFromFields(ID.reified(), fields.id),
            name: decodeFromFields(String.reified(), fields.name),
            description: decodeFromFields(String.reified(), fields.description),
            number: decodeFromFields("u64", fields.number),
            url: decodeFromFields(Url.reified(), fields.url),
            attributes: decodeFromFields(VecMap.reified(String.reified(), String.reified()), fields.attributes),
            sender: decodeFromFields("address", fields.sender),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): MintEvent {
        if (!isMintEvent(item.type)) {
            throw new Error("not a MintEvent type");
        }

        return MintEvent.reified().new({
            id: decodeFromFieldsWithTypes(ID.reified(), item.fields.id),
            name: decodeFromFieldsWithTypes(String.reified(), item.fields.name),
            description: decodeFromFieldsWithTypes(String.reified(), item.fields.description),
            number: decodeFromFieldsWithTypes("u64", item.fields.number),
            url: decodeFromFieldsWithTypes(Url.reified(), item.fields.url),
            attributes: decodeFromFieldsWithTypes(VecMap.reified(String.reified(), String.reified()), item.fields.attributes),
            sender: decodeFromFieldsWithTypes("address", item.fields.sender),
        });
    }

    static fromBcs(data: Uint8Array): MintEvent {
        return MintEvent.fromFields(MintEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            number: this.number.toString(),
            url: this.url,
            attributes: this.attributes.toJSONField(),
            sender: this.sender,
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
            id: decodeFromJSONField(ID.reified(), field.id),
            name: decodeFromJSONField(String.reified(), field.name),
            description: decodeFromJSONField(String.reified(), field.description),
            number: decodeFromJSONField("u64", field.number),
            url: decodeFromJSONField(Url.reified(), field.url),
            attributes: decodeFromJSONField(VecMap.reified(String.reified(), String.reified()), field.attributes),
            sender: decodeFromJSONField("address", field.sender),
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

/* ============================== NewManagerCapEvent =============================== */

export function isNewManagerCapEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::typus_nft::NewManagerCapEvent`;
}

export interface NewManagerCapEventFields {
    id: ToField<ID>;
    sender: ToField<"address">;
}

export type NewManagerCapEventReified = Reified<NewManagerCapEvent, NewManagerCapEventFields>;

export class NewManagerCapEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::typus_nft::NewManagerCapEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = NewManagerCapEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::typus_nft::NewManagerCapEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = NewManagerCapEvent.$isPhantom;

    readonly id: ToField<ID>;
    readonly sender: ToField<"address">;

    private constructor(typeArgs: [], fields: NewManagerCapEventFields) {
        this.$fullTypeName = composeSuiType(NewManagerCapEvent.$typeName, ...typeArgs) as `${typeof PKG_V1}::typus_nft::NewManagerCapEvent`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.sender = fields.sender;
    }

    static reified(): NewManagerCapEventReified {
        return {
            typeName: NewManagerCapEvent.$typeName,
            fullTypeName: composeSuiType(NewManagerCapEvent.$typeName, ...[]) as `${typeof PKG_V1}::typus_nft::NewManagerCapEvent`,
            typeArgs: [] as [],
            isPhantom: NewManagerCapEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => NewManagerCapEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => NewManagerCapEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => NewManagerCapEvent.fromBcs(data),
            bcs: NewManagerCapEvent.bcs,
            fromJSONField: (field: any) => NewManagerCapEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => NewManagerCapEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => NewManagerCapEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => NewManagerCapEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => NewManagerCapEvent.fetch(client, id),
            new: (fields: NewManagerCapEventFields) => {
                return new NewManagerCapEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return NewManagerCapEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<NewManagerCapEvent>> {
        return phantom(NewManagerCapEvent.reified());
    }
    static get p() {
        return NewManagerCapEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("NewManagerCapEvent", {
            id: ID.bcs,
            sender: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        });
    }

    static fromFields(fields: Record<string, any>): NewManagerCapEvent {
        return NewManagerCapEvent.reified().new({
            id: decodeFromFields(ID.reified(), fields.id),
            sender: decodeFromFields("address", fields.sender),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): NewManagerCapEvent {
        if (!isNewManagerCapEvent(item.type)) {
            throw new Error("not a NewManagerCapEvent type");
        }

        return NewManagerCapEvent.reified().new({
            id: decodeFromFieldsWithTypes(ID.reified(), item.fields.id),
            sender: decodeFromFieldsWithTypes("address", item.fields.sender),
        });
    }

    static fromBcs(data: Uint8Array): NewManagerCapEvent {
        return NewManagerCapEvent.fromFields(NewManagerCapEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            sender: this.sender,
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): NewManagerCapEvent {
        return NewManagerCapEvent.reified().new({
            id: decodeFromJSONField(ID.reified(), field.id),
            sender: decodeFromJSONField("address", field.sender),
        });
    }

    static fromJSON(json: Record<string, any>): NewManagerCapEvent {
        if (json.$typeName !== NewManagerCapEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return NewManagerCapEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): NewManagerCapEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isNewManagerCapEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a NewManagerCapEvent object`);
        }
        return NewManagerCapEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): NewManagerCapEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isNewManagerCapEvent(data.bcs.type)) {
                throw new Error(`object at is not a NewManagerCapEvent object`);
            }

            return NewManagerCapEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return NewManagerCapEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<NewManagerCapEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching NewManagerCapEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isNewManagerCapEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a NewManagerCapEvent object`);
        }

        return NewManagerCapEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== Pool =============================== */

export function isPool(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::typus_nft::Pool`;
}

export interface PoolFields {
    id: ToField<UID>;
    tails: ToField<TableVec<ToPhantom<Tails>>>;
    num: ToField<"u64">;
    isLive: ToField<"bool">;
    startMs: ToField<"u64">;
}

export type PoolReified = Reified<Pool, PoolFields>;

export class Pool implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::typus_nft::Pool`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = Pool.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::typus_nft::Pool`;
    readonly $typeArgs: [];
    readonly $isPhantom = Pool.$isPhantom;

    readonly id: ToField<UID>;
    readonly tails: ToField<TableVec<ToPhantom<Tails>>>;
    readonly num: ToField<"u64">;
    readonly isLive: ToField<"bool">;
    readonly startMs: ToField<"u64">;

    private constructor(typeArgs: [], fields: PoolFields) {
        this.$fullTypeName = composeSuiType(Pool.$typeName, ...typeArgs) as `${typeof PKG_V1}::typus_nft::Pool`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.tails = fields.tails;
        this.num = fields.num;
        this.isLive = fields.isLive;
        this.startMs = fields.startMs;
    }

    static reified(): PoolReified {
        return {
            typeName: Pool.$typeName,
            fullTypeName: composeSuiType(Pool.$typeName, ...[]) as `${typeof PKG_V1}::typus_nft::Pool`,
            typeArgs: [] as [],
            isPhantom: Pool.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Pool.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Pool.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Pool.fromBcs(data),
            bcs: Pool.bcs,
            fromJSONField: (field: any) => Pool.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Pool.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Pool.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => Pool.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => Pool.fetch(client, id),
            new: (fields: PoolFields) => {
                return new Pool([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Pool.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<Pool>> {
        return phantom(Pool.reified());
    }
    static get p() {
        return Pool.phantom();
    }

    static get bcs() {
        return bcs.struct("Pool", {
            id: UID.bcs,
            tails: TableVec.bcs,
            num: bcs.u64(),
            is_live: bcs.bool(),
            start_ms: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): Pool {
        return Pool.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            tails: decodeFromFields(TableVec.reified(reified.phantom(Tails.reified())), fields.tails),
            num: decodeFromFields("u64", fields.num),
            isLive: decodeFromFields("bool", fields.is_live),
            startMs: decodeFromFields("u64", fields.start_ms),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Pool {
        if (!isPool(item.type)) {
            throw new Error("not a Pool type");
        }

        return Pool.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            tails: decodeFromFieldsWithTypes(TableVec.reified(reified.phantom(Tails.reified())), item.fields.tails),
            num: decodeFromFieldsWithTypes("u64", item.fields.num),
            isLive: decodeFromFieldsWithTypes("bool", item.fields.is_live),
            startMs: decodeFromFieldsWithTypes("u64", item.fields.start_ms),
        });
    }

    static fromBcs(data: Uint8Array): Pool {
        return Pool.fromFields(Pool.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            tails: this.tails.toJSONField(),
            num: this.num.toString(),
            isLive: this.isLive,
            startMs: this.startMs.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): Pool {
        return Pool.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            tails: decodeFromJSONField(TableVec.reified(reified.phantom(Tails.reified())), field.tails),
            num: decodeFromJSONField("u64", field.num),
            isLive: decodeFromJSONField("bool", field.isLive),
            startMs: decodeFromJSONField("u64", field.startMs),
        });
    }

    static fromJSON(json: Record<string, any>): Pool {
        if (json.$typeName !== Pool.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return Pool.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): Pool {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isPool(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Pool object`);
        }
        return Pool.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): Pool {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isPool(data.bcs.type)) {
                throw new Error(`object at is not a Pool object`);
            }

            return Pool.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Pool.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<Pool> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Pool object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isPool(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Pool object`);
        }

        return Pool.fromSuiObjectData(res.data);
    }
}

/* ============================== Royalty =============================== */

export function isRoyalty(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::typus_nft::Royalty`;
}

export interface RoyaltyFields {
    id: ToField<UID>;
    recipients: ToField<VecMap<"address", "u64">>;
    policyCap: ToField<TransferPolicyCap<ToPhantom<Tails>>>;
}

export type RoyaltyReified = Reified<Royalty, RoyaltyFields>;

export class Royalty implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::typus_nft::Royalty`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = Royalty.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::typus_nft::Royalty`;
    readonly $typeArgs: [];
    readonly $isPhantom = Royalty.$isPhantom;

    readonly id: ToField<UID>;
    readonly recipients: ToField<VecMap<"address", "u64">>;
    readonly policyCap: ToField<TransferPolicyCap<ToPhantom<Tails>>>;

    private constructor(typeArgs: [], fields: RoyaltyFields) {
        this.$fullTypeName = composeSuiType(Royalty.$typeName, ...typeArgs) as `${typeof PKG_V1}::typus_nft::Royalty`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.recipients = fields.recipients;
        this.policyCap = fields.policyCap;
    }

    static reified(): RoyaltyReified {
        return {
            typeName: Royalty.$typeName,
            fullTypeName: composeSuiType(Royalty.$typeName, ...[]) as `${typeof PKG_V1}::typus_nft::Royalty`,
            typeArgs: [] as [],
            isPhantom: Royalty.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Royalty.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Royalty.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Royalty.fromBcs(data),
            bcs: Royalty.bcs,
            fromJSONField: (field: any) => Royalty.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Royalty.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Royalty.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => Royalty.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => Royalty.fetch(client, id),
            new: (fields: RoyaltyFields) => {
                return new Royalty([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Royalty.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<Royalty>> {
        return phantom(Royalty.reified());
    }
    static get p() {
        return Royalty.phantom();
    }

    static get bcs() {
        return bcs.struct("Royalty", {
            id: UID.bcs,
            recipients: VecMap.bcs(
                bcs.bytes(32).transform({
                    input: (val: string) => fromHEX(val),
                    output: (val: Uint8Array) => toHEX(val),
                }),
                bcs.u64()
            ),
            policy_cap: TransferPolicyCap.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): Royalty {
        return Royalty.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            recipients: decodeFromFields(VecMap.reified("address", "u64"), fields.recipients),
            policyCap: decodeFromFields(TransferPolicyCap.reified(reified.phantom(Tails.reified())), fields.policy_cap),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Royalty {
        if (!isRoyalty(item.type)) {
            throw new Error("not a Royalty type");
        }

        return Royalty.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            recipients: decodeFromFieldsWithTypes(VecMap.reified("address", "u64"), item.fields.recipients),
            policyCap: decodeFromFieldsWithTypes(TransferPolicyCap.reified(reified.phantom(Tails.reified())), item.fields.policy_cap),
        });
    }

    static fromBcs(data: Uint8Array): Royalty {
        return Royalty.fromFields(Royalty.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            recipients: this.recipients.toJSONField(),
            policyCap: this.policyCap.toJSONField(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): Royalty {
        return Royalty.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            recipients: decodeFromJSONField(VecMap.reified("address", "u64"), field.recipients),
            policyCap: decodeFromJSONField(TransferPolicyCap.reified(reified.phantom(Tails.reified())), field.policyCap),
        });
    }

    static fromJSON(json: Record<string, any>): Royalty {
        if (json.$typeName !== Royalty.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return Royalty.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): Royalty {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRoyalty(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Royalty object`);
        }
        return Royalty.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): Royalty {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isRoyalty(data.bcs.type)) {
                throw new Error(`object at is not a Royalty object`);
            }

            return Royalty.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Royalty.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<Royalty> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Royalty object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isRoyalty(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Royalty object`);
        }

        return Royalty.fromSuiObjectData(res.data);
    }
}

/* ============================== RoyaltyUpdateEvent =============================== */

export function isRoyaltyUpdateEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::typus_nft::RoyaltyUpdateEvent`;
}

export interface RoyaltyUpdateEventFields {
    sender: ToField<"address">;
    recipients: ToField<VecMap<"address", "u64">>;
}

export type RoyaltyUpdateEventReified = Reified<RoyaltyUpdateEvent, RoyaltyUpdateEventFields>;

export class RoyaltyUpdateEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::typus_nft::RoyaltyUpdateEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = RoyaltyUpdateEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::typus_nft::RoyaltyUpdateEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = RoyaltyUpdateEvent.$isPhantom;

    readonly sender: ToField<"address">;
    readonly recipients: ToField<VecMap<"address", "u64">>;

    private constructor(typeArgs: [], fields: RoyaltyUpdateEventFields) {
        this.$fullTypeName = composeSuiType(RoyaltyUpdateEvent.$typeName, ...typeArgs) as `${typeof PKG_V1}::typus_nft::RoyaltyUpdateEvent`;
        this.$typeArgs = typeArgs;

        this.sender = fields.sender;
        this.recipients = fields.recipients;
    }

    static reified(): RoyaltyUpdateEventReified {
        return {
            typeName: RoyaltyUpdateEvent.$typeName,
            fullTypeName: composeSuiType(RoyaltyUpdateEvent.$typeName, ...[]) as `${typeof PKG_V1}::typus_nft::RoyaltyUpdateEvent`,
            typeArgs: [] as [],
            isPhantom: RoyaltyUpdateEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => RoyaltyUpdateEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => RoyaltyUpdateEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => RoyaltyUpdateEvent.fromBcs(data),
            bcs: RoyaltyUpdateEvent.bcs,
            fromJSONField: (field: any) => RoyaltyUpdateEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => RoyaltyUpdateEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => RoyaltyUpdateEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => RoyaltyUpdateEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => RoyaltyUpdateEvent.fetch(client, id),
            new: (fields: RoyaltyUpdateEventFields) => {
                return new RoyaltyUpdateEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return RoyaltyUpdateEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<RoyaltyUpdateEvent>> {
        return phantom(RoyaltyUpdateEvent.reified());
    }
    static get p() {
        return RoyaltyUpdateEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("RoyaltyUpdateEvent", {
            sender: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            recipients: VecMap.bcs(
                bcs.bytes(32).transform({
                    input: (val: string) => fromHEX(val),
                    output: (val: Uint8Array) => toHEX(val),
                }),
                bcs.u64()
            ),
        });
    }

    static fromFields(fields: Record<string, any>): RoyaltyUpdateEvent {
        return RoyaltyUpdateEvent.reified().new({
            sender: decodeFromFields("address", fields.sender),
            recipients: decodeFromFields(VecMap.reified("address", "u64"), fields.recipients),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): RoyaltyUpdateEvent {
        if (!isRoyaltyUpdateEvent(item.type)) {
            throw new Error("not a RoyaltyUpdateEvent type");
        }

        return RoyaltyUpdateEvent.reified().new({
            sender: decodeFromFieldsWithTypes("address", item.fields.sender),
            recipients: decodeFromFieldsWithTypes(VecMap.reified("address", "u64"), item.fields.recipients),
        });
    }

    static fromBcs(data: Uint8Array): RoyaltyUpdateEvent {
        return RoyaltyUpdateEvent.fromFields(RoyaltyUpdateEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            sender: this.sender,
            recipients: this.recipients.toJSONField(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): RoyaltyUpdateEvent {
        return RoyaltyUpdateEvent.reified().new({
            sender: decodeFromJSONField("address", field.sender),
            recipients: decodeFromJSONField(VecMap.reified("address", "u64"), field.recipients),
        });
    }

    static fromJSON(json: Record<string, any>): RoyaltyUpdateEvent {
        if (json.$typeName !== RoyaltyUpdateEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return RoyaltyUpdateEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): RoyaltyUpdateEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRoyaltyUpdateEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a RoyaltyUpdateEvent object`);
        }
        return RoyaltyUpdateEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): RoyaltyUpdateEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isRoyaltyUpdateEvent(data.bcs.type)) {
                throw new Error(`object at is not a RoyaltyUpdateEvent object`);
            }

            return RoyaltyUpdateEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return RoyaltyUpdateEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<RoyaltyUpdateEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching RoyaltyUpdateEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isRoyaltyUpdateEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RoyaltyUpdateEvent object`);
        }

        return RoyaltyUpdateEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== TYPUS_NFT =============================== */

export function isTYPUS_NFT(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::typus_nft::TYPUS_NFT`;
}

export interface TYPUS_NFTFields {
    dummyField: ToField<"bool">;
}

export type TYPUS_NFTReified = Reified<TYPUS_NFT, TYPUS_NFTFields>;

export class TYPUS_NFT implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::typus_nft::TYPUS_NFT`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = TYPUS_NFT.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::typus_nft::TYPUS_NFT`;
    readonly $typeArgs: [];
    readonly $isPhantom = TYPUS_NFT.$isPhantom;

    readonly dummyField: ToField<"bool">;

    private constructor(typeArgs: [], fields: TYPUS_NFTFields) {
        this.$fullTypeName = composeSuiType(TYPUS_NFT.$typeName, ...typeArgs) as `${typeof PKG_V1}::typus_nft::TYPUS_NFT`;
        this.$typeArgs = typeArgs;

        this.dummyField = fields.dummyField;
    }

    static reified(): TYPUS_NFTReified {
        return {
            typeName: TYPUS_NFT.$typeName,
            fullTypeName: composeSuiType(TYPUS_NFT.$typeName, ...[]) as `${typeof PKG_V1}::typus_nft::TYPUS_NFT`,
            typeArgs: [] as [],
            isPhantom: TYPUS_NFT.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => TYPUS_NFT.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => TYPUS_NFT.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => TYPUS_NFT.fromBcs(data),
            bcs: TYPUS_NFT.bcs,
            fromJSONField: (field: any) => TYPUS_NFT.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => TYPUS_NFT.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => TYPUS_NFT.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => TYPUS_NFT.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => TYPUS_NFT.fetch(client, id),
            new: (fields: TYPUS_NFTFields) => {
                return new TYPUS_NFT([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return TYPUS_NFT.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<TYPUS_NFT>> {
        return phantom(TYPUS_NFT.reified());
    }
    static get p() {
        return TYPUS_NFT.phantom();
    }

    static get bcs() {
        return bcs.struct("TYPUS_NFT", {
            dummy_field: bcs.bool(),
        });
    }

    static fromFields(fields: Record<string, any>): TYPUS_NFT {
        return TYPUS_NFT.reified().new({
            dummyField: decodeFromFields("bool", fields.dummy_field),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): TYPUS_NFT {
        if (!isTYPUS_NFT(item.type)) {
            throw new Error("not a TYPUS_NFT type");
        }

        return TYPUS_NFT.reified().new({
            dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
        });
    }

    static fromBcs(data: Uint8Array): TYPUS_NFT {
        return TYPUS_NFT.fromFields(TYPUS_NFT.bcs.parse(data));
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

    static fromJSONField(field: any): TYPUS_NFT {
        return TYPUS_NFT.reified().new({
            dummyField: decodeFromJSONField("bool", field.dummyField),
        });
    }

    static fromJSON(json: Record<string, any>): TYPUS_NFT {
        if (json.$typeName !== TYPUS_NFT.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return TYPUS_NFT.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): TYPUS_NFT {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isTYPUS_NFT(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a TYPUS_NFT object`);
        }
        return TYPUS_NFT.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): TYPUS_NFT {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isTYPUS_NFT(data.bcs.type)) {
                throw new Error(`object at is not a TYPUS_NFT object`);
            }

            return TYPUS_NFT.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return TYPUS_NFT.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<TYPUS_NFT> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching TYPUS_NFT object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isTYPUS_NFT(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TYPUS_NFT object`);
        }

        return TYPUS_NFT.fromSuiObjectData(res.data);
    }
}

/* ============================== Tails =============================== */

export function isTails(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::typus_nft::Tails`;
}

export interface TailsFields {
    id: ToField<UID>;
    name: ToField<String>;
    description: ToField<String>;
    number: ToField<"u64">;
    url: ToField<Url>;
    attributes: ToField<VecMap<String, String>>;
    level: ToField<"u64">;
    exp: ToField<"u64">;
    firstBid: ToField<"bool">;
    firstDeposit: ToField<"bool">;
    firstDepositNft: ToField<"bool">;
    u64Padding: ToField<VecMap<String, "u64">>;
}

export type TailsReified = Reified<Tails, TailsFields>;

export class Tails implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::typus_nft::Tails`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = Tails.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::typus_nft::Tails`;
    readonly $typeArgs: [];
    readonly $isPhantom = Tails.$isPhantom;

    readonly id: ToField<UID>;
    readonly name: ToField<String>;
    readonly description: ToField<String>;
    readonly number: ToField<"u64">;
    readonly url: ToField<Url>;
    readonly attributes: ToField<VecMap<String, String>>;
    readonly level: ToField<"u64">;
    readonly exp: ToField<"u64">;
    readonly firstBid: ToField<"bool">;
    readonly firstDeposit: ToField<"bool">;
    readonly firstDepositNft: ToField<"bool">;
    readonly u64Padding: ToField<VecMap<String, "u64">>;

    private constructor(typeArgs: [], fields: TailsFields) {
        this.$fullTypeName = composeSuiType(Tails.$typeName, ...typeArgs) as `${typeof PKG_V1}::typus_nft::Tails`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.name = fields.name;
        this.description = fields.description;
        this.number = fields.number;
        this.url = fields.url;
        this.attributes = fields.attributes;
        this.level = fields.level;
        this.exp = fields.exp;
        this.firstBid = fields.firstBid;
        this.firstDeposit = fields.firstDeposit;
        this.firstDepositNft = fields.firstDepositNft;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): TailsReified {
        return {
            typeName: Tails.$typeName,
            fullTypeName: composeSuiType(Tails.$typeName, ...[]) as `${typeof PKG_V1}::typus_nft::Tails`,
            typeArgs: [] as [],
            isPhantom: Tails.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Tails.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Tails.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Tails.fromBcs(data),
            bcs: Tails.bcs,
            fromJSONField: (field: any) => Tails.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Tails.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Tails.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => Tails.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => Tails.fetch(client, id),
            new: (fields: TailsFields) => {
                return new Tails([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Tails.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<Tails>> {
        return phantom(Tails.reified());
    }
    static get p() {
        return Tails.phantom();
    }

    static get bcs() {
        return bcs.struct("Tails", {
            id: UID.bcs,
            name: String.bcs,
            description: String.bcs,
            number: bcs.u64(),
            url: Url.bcs,
            attributes: VecMap.bcs(String.bcs, String.bcs),
            level: bcs.u64(),
            exp: bcs.u64(),
            first_bid: bcs.bool(),
            first_deposit: bcs.bool(),
            first_deposit_nft: bcs.bool(),
            u64_padding: VecMap.bcs(String.bcs, bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): Tails {
        return Tails.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            name: decodeFromFields(String.reified(), fields.name),
            description: decodeFromFields(String.reified(), fields.description),
            number: decodeFromFields("u64", fields.number),
            url: decodeFromFields(Url.reified(), fields.url),
            attributes: decodeFromFields(VecMap.reified(String.reified(), String.reified()), fields.attributes),
            level: decodeFromFields("u64", fields.level),
            exp: decodeFromFields("u64", fields.exp),
            firstBid: decodeFromFields("bool", fields.first_bid),
            firstDeposit: decodeFromFields("bool", fields.first_deposit),
            firstDepositNft: decodeFromFields("bool", fields.first_deposit_nft),
            u64Padding: decodeFromFields(VecMap.reified(String.reified(), "u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Tails {
        if (!isTails(item.type)) {
            throw new Error("not a Tails type");
        }

        return Tails.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            name: decodeFromFieldsWithTypes(String.reified(), item.fields.name),
            description: decodeFromFieldsWithTypes(String.reified(), item.fields.description),
            number: decodeFromFieldsWithTypes("u64", item.fields.number),
            url: decodeFromFieldsWithTypes(Url.reified(), item.fields.url),
            attributes: decodeFromFieldsWithTypes(VecMap.reified(String.reified(), String.reified()), item.fields.attributes),
            level: decodeFromFieldsWithTypes("u64", item.fields.level),
            exp: decodeFromFieldsWithTypes("u64", item.fields.exp),
            firstBid: decodeFromFieldsWithTypes("bool", item.fields.first_bid),
            firstDeposit: decodeFromFieldsWithTypes("bool", item.fields.first_deposit),
            firstDepositNft: decodeFromFieldsWithTypes("bool", item.fields.first_deposit_nft),
            u64Padding: decodeFromFieldsWithTypes(VecMap.reified(String.reified(), "u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): Tails {
        return Tails.fromFields(Tails.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            number: this.number.toString(),
            url: this.url,
            attributes: this.attributes.toJSONField(),
            level: this.level.toString(),
            exp: this.exp.toString(),
            firstBid: this.firstBid,
            firstDeposit: this.firstDeposit,
            firstDepositNft: this.firstDepositNft,
            u64Padding: this.u64Padding.toJSONField(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): Tails {
        return Tails.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            name: decodeFromJSONField(String.reified(), field.name),
            description: decodeFromJSONField(String.reified(), field.description),
            number: decodeFromJSONField("u64", field.number),
            url: decodeFromJSONField(Url.reified(), field.url),
            attributes: decodeFromJSONField(VecMap.reified(String.reified(), String.reified()), field.attributes),
            level: decodeFromJSONField("u64", field.level),
            exp: decodeFromJSONField("u64", field.exp),
            firstBid: decodeFromJSONField("bool", field.firstBid),
            firstDeposit: decodeFromJSONField("bool", field.firstDeposit),
            firstDepositNft: decodeFromJSONField("bool", field.firstDepositNft),
            u64Padding: decodeFromJSONField(VecMap.reified(String.reified(), "u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): Tails {
        if (json.$typeName !== Tails.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return Tails.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): Tails {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isTails(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Tails object`);
        }
        return Tails.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): Tails {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isTails(data.bcs.type)) {
                throw new Error(`object at is not a Tails object`);
            }

            return Tails.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Tails.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<Tails> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Tails object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isTails(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Tails object`);
        }

        return Tails.fromSuiObjectData(res.data);
    }
}

/* ============================== Whitelist =============================== */

export function isWhitelist(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::typus_nft::Whitelist`;
}

export interface WhitelistFields {
    id: ToField<UID>;
    for: ToField<ID>;
}

export type WhitelistReified = Reified<Whitelist, WhitelistFields>;

export class Whitelist implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::typus_nft::Whitelist`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = Whitelist.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::typus_nft::Whitelist`;
    readonly $typeArgs: [];
    readonly $isPhantom = Whitelist.$isPhantom;

    readonly id: ToField<UID>;
    readonly for: ToField<ID>;

    private constructor(typeArgs: [], fields: WhitelistFields) {
        this.$fullTypeName = composeSuiType(Whitelist.$typeName, ...typeArgs) as `${typeof PKG_V1}::typus_nft::Whitelist`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.for = fields.for;
    }

    static reified(): WhitelistReified {
        return {
            typeName: Whitelist.$typeName,
            fullTypeName: composeSuiType(Whitelist.$typeName, ...[]) as `${typeof PKG_V1}::typus_nft::Whitelist`,
            typeArgs: [] as [],
            isPhantom: Whitelist.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Whitelist.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Whitelist.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Whitelist.fromBcs(data),
            bcs: Whitelist.bcs,
            fromJSONField: (field: any) => Whitelist.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Whitelist.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Whitelist.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => Whitelist.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => Whitelist.fetch(client, id),
            new: (fields: WhitelistFields) => {
                return new Whitelist([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Whitelist.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<Whitelist>> {
        return phantom(Whitelist.reified());
    }
    static get p() {
        return Whitelist.phantom();
    }

    static get bcs() {
        return bcs.struct("Whitelist", {
            id: UID.bcs,
            for: ID.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): Whitelist {
        return Whitelist.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            for: decodeFromFields(ID.reified(), fields.for),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Whitelist {
        if (!isWhitelist(item.type)) {
            throw new Error("not a Whitelist type");
        }

        return Whitelist.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            for: decodeFromFieldsWithTypes(ID.reified(), item.fields.for),
        });
    }

    static fromBcs(data: Uint8Array): Whitelist {
        return Whitelist.fromFields(Whitelist.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            for: this.for,
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): Whitelist {
        return Whitelist.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            for: decodeFromJSONField(ID.reified(), field.for),
        });
    }

    static fromJSON(json: Record<string, any>): Whitelist {
        if (json.$typeName !== Whitelist.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return Whitelist.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): Whitelist {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isWhitelist(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Whitelist object`);
        }
        return Whitelist.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): Whitelist {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isWhitelist(data.bcs.type)) {
                throw new Error(`object at is not a Whitelist object`);
            }

            return Whitelist.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Whitelist.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<Whitelist> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Whitelist object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isWhitelist(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Whitelist object`);
        }

        return Whitelist.fromSuiObjectData(res.data);
    }
}
