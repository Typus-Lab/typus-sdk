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
import { TypeName } from "../../0x1/type-name/structs";
import { Bag } from "../../0x2/bag/structs";
import { ObjectTable } from "../../0x2/object-table/structs";
import { UID } from "../../0x2/object/structs";
import { TransferPolicy } from "../../0x2/transfer-policy/structs";
import { ManagerCap, Tails } from "../../0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828/typus-nft/structs";
import { BigVector } from "../big-vector/structs";
import { PKG_V11, PKG_V6 } from "../index";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromB64, fromHEX, toHEX } from "@mysten/sui/utils";

/* ============================== ExpDownEvent =============================== */

export function isExpDownEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V11}::tails_staking::ExpDownEvent`;
}

export interface ExpDownEventFields {
    tails: ToField<"address">;
    log: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<Vector<"u8">>>;
}

export type ExpDownEventReified = Reified<ExpDownEvent, ExpDownEventFields>;

export class ExpDownEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V11}::tails_staking::ExpDownEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = ExpDownEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V11}::tails_staking::ExpDownEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = ExpDownEvent.$isPhantom;

    readonly tails: ToField<"address">;
    readonly log: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<Vector<"u8">>>;

    private constructor(typeArgs: [], fields: ExpDownEventFields) {
        this.$fullTypeName = composeSuiType(ExpDownEvent.$typeName, ...typeArgs) as `${typeof PKG_V11}::tails_staking::ExpDownEvent`;
        this.$typeArgs = typeArgs;

        this.tails = fields.tails;
        this.log = fields.log;
        this.bcsPadding = fields.bcsPadding;
    }

    static reified(): ExpDownEventReified {
        return {
            typeName: ExpDownEvent.$typeName,
            fullTypeName: composeSuiType(ExpDownEvent.$typeName, ...[]) as `${typeof PKG_V11}::tails_staking::ExpDownEvent`,
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
            tails: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            log: bcs.vector(bcs.u64()),
            bcs_padding: bcs.vector(bcs.vector(bcs.u8())),
        });
    }

    static fromFields(fields: Record<string, any>): ExpDownEvent {
        return ExpDownEvent.reified().new({
            tails: decodeFromFields("address", fields.tails),
            log: decodeFromFields(reified.vector("u64"), fields.log),
            bcsPadding: decodeFromFields(reified.vector(reified.vector("u8")), fields.bcs_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): ExpDownEvent {
        if (!isExpDownEvent(item.type)) {
            throw new Error("not a ExpDownEvent type");
        }

        return ExpDownEvent.reified().new({
            tails: decodeFromFieldsWithTypes("address", item.fields.tails),
            log: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.log),
            bcsPadding: decodeFromFieldsWithTypes(reified.vector(reified.vector("u8")), item.fields.bcs_padding),
        });
    }

    static fromBcs(data: Uint8Array): ExpDownEvent {
        return ExpDownEvent.fromFields(ExpDownEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            tails: this.tails,
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

    static fromJSONField(field: any): ExpDownEvent {
        return ExpDownEvent.reified().new({
            tails: decodeFromJSONField("address", field.tails),
            log: decodeFromJSONField(reified.vector("u64"), field.log),
            bcsPadding: decodeFromJSONField(reified.vector(reified.vector("u8")), field.bcsPadding),
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
    return type === `${PKG_V6}::tails_staking::ExpUpEvent`;
}

export interface ExpUpEventFields {
    tails: ToField<"address">;
    log: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<Vector<"u8">>>;
}

export type ExpUpEventReified = Reified<ExpUpEvent, ExpUpEventFields>;

export class ExpUpEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V6}::tails_staking::ExpUpEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = ExpUpEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V6}::tails_staking::ExpUpEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = ExpUpEvent.$isPhantom;

    readonly tails: ToField<"address">;
    readonly log: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<Vector<"u8">>>;

    private constructor(typeArgs: [], fields: ExpUpEventFields) {
        this.$fullTypeName = composeSuiType(ExpUpEvent.$typeName, ...typeArgs) as `${typeof PKG_V6}::tails_staking::ExpUpEvent`;
        this.$typeArgs = typeArgs;

        this.tails = fields.tails;
        this.log = fields.log;
        this.bcsPadding = fields.bcsPadding;
    }

    static reified(): ExpUpEventReified {
        return {
            typeName: ExpUpEvent.$typeName,
            fullTypeName: composeSuiType(ExpUpEvent.$typeName, ...[]) as `${typeof PKG_V6}::tails_staking::ExpUpEvent`,
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
            tails: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            log: bcs.vector(bcs.u64()),
            bcs_padding: bcs.vector(bcs.vector(bcs.u8())),
        });
    }

    static fromFields(fields: Record<string, any>): ExpUpEvent {
        return ExpUpEvent.reified().new({
            tails: decodeFromFields("address", fields.tails),
            log: decodeFromFields(reified.vector("u64"), fields.log),
            bcsPadding: decodeFromFields(reified.vector(reified.vector("u8")), fields.bcs_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): ExpUpEvent {
        if (!isExpUpEvent(item.type)) {
            throw new Error("not a ExpUpEvent type");
        }

        return ExpUpEvent.reified().new({
            tails: decodeFromFieldsWithTypes("address", item.fields.tails),
            log: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.log),
            bcsPadding: decodeFromFieldsWithTypes(reified.vector(reified.vector("u8")), item.fields.bcs_padding),
        });
    }

    static fromBcs(data: Uint8Array): ExpUpEvent {
        return ExpUpEvent.fromFields(ExpUpEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            tails: this.tails,
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

    static fromJSONField(field: any): ExpUpEvent {
        return ExpUpEvent.reified().new({
            tails: decodeFromJSONField("address", field.tails),
            log: decodeFromJSONField(reified.vector("u64"), field.log),
            bcsPadding: decodeFromJSONField(reified.vector(reified.vector("u8")), field.bcsPadding),
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

/* ============================== LevelUpEvent =============================== */

export function isLevelUpEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V6}::tails_staking::LevelUpEvent`;
}

export interface LevelUpEventFields {
    tails: ToField<"address">;
    log: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<Vector<"u8">>>;
}

export type LevelUpEventReified = Reified<LevelUpEvent, LevelUpEventFields>;

export class LevelUpEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V6}::tails_staking::LevelUpEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = LevelUpEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V6}::tails_staking::LevelUpEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = LevelUpEvent.$isPhantom;

    readonly tails: ToField<"address">;
    readonly log: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<Vector<"u8">>>;

    private constructor(typeArgs: [], fields: LevelUpEventFields) {
        this.$fullTypeName = composeSuiType(LevelUpEvent.$typeName, ...typeArgs) as `${typeof PKG_V6}::tails_staking::LevelUpEvent`;
        this.$typeArgs = typeArgs;

        this.tails = fields.tails;
        this.log = fields.log;
        this.bcsPadding = fields.bcsPadding;
    }

    static reified(): LevelUpEventReified {
        return {
            typeName: LevelUpEvent.$typeName,
            fullTypeName: composeSuiType(LevelUpEvent.$typeName, ...[]) as `${typeof PKG_V6}::tails_staking::LevelUpEvent`,
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
            tails: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            log: bcs.vector(bcs.u64()),
            bcs_padding: bcs.vector(bcs.vector(bcs.u8())),
        });
    }

    static fromFields(fields: Record<string, any>): LevelUpEvent {
        return LevelUpEvent.reified().new({
            tails: decodeFromFields("address", fields.tails),
            log: decodeFromFields(reified.vector("u64"), fields.log),
            bcsPadding: decodeFromFields(reified.vector(reified.vector("u8")), fields.bcs_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): LevelUpEvent {
        if (!isLevelUpEvent(item.type)) {
            throw new Error("not a LevelUpEvent type");
        }

        return LevelUpEvent.reified().new({
            tails: decodeFromFieldsWithTypes("address", item.fields.tails),
            log: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.log),
            bcsPadding: decodeFromFieldsWithTypes(reified.vector(reified.vector("u8")), item.fields.bcs_padding),
        });
    }

    static fromBcs(data: Uint8Array): LevelUpEvent {
        return LevelUpEvent.fromFields(LevelUpEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            tails: this.tails,
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

    static fromJSONField(field: any): LevelUpEvent {
        return LevelUpEvent.reified().new({
            tails: decodeFromJSONField("address", field.tails),
            log: decodeFromJSONField(reified.vector("u64"), field.log),
            bcsPadding: decodeFromJSONField(reified.vector(reified.vector("u8")), field.bcsPadding),
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

/* ============================== ClaimProfitSharingEvent =============================== */

export function isClaimProfitSharingEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V6}::tails_staking::ClaimProfitSharingEvent`;
}

export interface ClaimProfitSharingEventFields {
    tails: ToField<Vector<"u64">>;
    profitAsset: ToField<TypeName>;
    log: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<Vector<"u8">>>;
}

export type ClaimProfitSharingEventReified = Reified<ClaimProfitSharingEvent, ClaimProfitSharingEventFields>;

export class ClaimProfitSharingEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V6}::tails_staking::ClaimProfitSharingEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = ClaimProfitSharingEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V6}::tails_staking::ClaimProfitSharingEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = ClaimProfitSharingEvent.$isPhantom;

    readonly tails: ToField<Vector<"u64">>;
    readonly profitAsset: ToField<TypeName>;
    readonly log: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<Vector<"u8">>>;

    private constructor(typeArgs: [], fields: ClaimProfitSharingEventFields) {
        this.$fullTypeName = composeSuiType(
            ClaimProfitSharingEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V6}::tails_staking::ClaimProfitSharingEvent`;
        this.$typeArgs = typeArgs;

        this.tails = fields.tails;
        this.profitAsset = fields.profitAsset;
        this.log = fields.log;
        this.bcsPadding = fields.bcsPadding;
    }

    static reified(): ClaimProfitSharingEventReified {
        return {
            typeName: ClaimProfitSharingEvent.$typeName,
            fullTypeName: composeSuiType(
                ClaimProfitSharingEvent.$typeName,
                ...[]
            ) as `${typeof PKG_V6}::tails_staking::ClaimProfitSharingEvent`,
            typeArgs: [] as [],
            isPhantom: ClaimProfitSharingEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => ClaimProfitSharingEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => ClaimProfitSharingEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => ClaimProfitSharingEvent.fromBcs(data),
            bcs: ClaimProfitSharingEvent.bcs,
            fromJSONField: (field: any) => ClaimProfitSharingEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => ClaimProfitSharingEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => ClaimProfitSharingEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => ClaimProfitSharingEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => ClaimProfitSharingEvent.fetch(client, id),
            new: (fields: ClaimProfitSharingEventFields) => {
                return new ClaimProfitSharingEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return ClaimProfitSharingEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<ClaimProfitSharingEvent>> {
        return phantom(ClaimProfitSharingEvent.reified());
    }
    static get p() {
        return ClaimProfitSharingEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("ClaimProfitSharingEvent", {
            tails: bcs.vector(bcs.u64()),
            profit_asset: TypeName.bcs,
            log: bcs.vector(bcs.u64()),
            bcs_padding: bcs.vector(bcs.vector(bcs.u8())),
        });
    }

    static fromFields(fields: Record<string, any>): ClaimProfitSharingEvent {
        return ClaimProfitSharingEvent.reified().new({
            tails: decodeFromFields(reified.vector("u64"), fields.tails),
            profitAsset: decodeFromFields(TypeName.reified(), fields.profit_asset),
            log: decodeFromFields(reified.vector("u64"), fields.log),
            bcsPadding: decodeFromFields(reified.vector(reified.vector("u8")), fields.bcs_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): ClaimProfitSharingEvent {
        if (!isClaimProfitSharingEvent(item.type)) {
            throw new Error("not a ClaimProfitSharingEvent type");
        }

        return ClaimProfitSharingEvent.reified().new({
            tails: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.tails),
            profitAsset: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.profit_asset),
            log: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.log),
            bcsPadding: decodeFromFieldsWithTypes(reified.vector(reified.vector("u8")), item.fields.bcs_padding),
        });
    }

    static fromBcs(data: Uint8Array): ClaimProfitSharingEvent {
        return ClaimProfitSharingEvent.fromFields(ClaimProfitSharingEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            tails: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.tails),
            profitAsset: this.profitAsset.toJSONField(),
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

    static fromJSONField(field: any): ClaimProfitSharingEvent {
        return ClaimProfitSharingEvent.reified().new({
            tails: decodeFromJSONField(reified.vector("u64"), field.tails),
            profitAsset: decodeFromJSONField(TypeName.reified(), field.profitAsset),
            log: decodeFromJSONField(reified.vector("u64"), field.log),
            bcsPadding: decodeFromJSONField(reified.vector(reified.vector("u8")), field.bcsPadding),
        });
    }

    static fromJSON(json: Record<string, any>): ClaimProfitSharingEvent {
        if (json.$typeName !== ClaimProfitSharingEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return ClaimProfitSharingEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): ClaimProfitSharingEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isClaimProfitSharingEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a ClaimProfitSharingEvent object`);
        }
        return ClaimProfitSharingEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): ClaimProfitSharingEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isClaimProfitSharingEvent(data.bcs.type)) {
                throw new Error(`object at is not a ClaimProfitSharingEvent object`);
            }

            return ClaimProfitSharingEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ClaimProfitSharingEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<ClaimProfitSharingEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching ClaimProfitSharingEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isClaimProfitSharingEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ClaimProfitSharingEvent object`);
        }

        return ClaimProfitSharingEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== DailySignUpEvent =============================== */

export function isDailySignUpEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V6}::tails_staking::DailySignUpEvent`;
}

export interface DailySignUpEventFields {
    tails: ToField<Vector<"u64">>;
    log: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<Vector<"u8">>>;
}

export type DailySignUpEventReified = Reified<DailySignUpEvent, DailySignUpEventFields>;

export class DailySignUpEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V6}::tails_staking::DailySignUpEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = DailySignUpEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V6}::tails_staking::DailySignUpEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = DailySignUpEvent.$isPhantom;

    readonly tails: ToField<Vector<"u64">>;
    readonly log: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<Vector<"u8">>>;

    private constructor(typeArgs: [], fields: DailySignUpEventFields) {
        this.$fullTypeName = composeSuiType(DailySignUpEvent.$typeName, ...typeArgs) as `${typeof PKG_V6}::tails_staking::DailySignUpEvent`;
        this.$typeArgs = typeArgs;

        this.tails = fields.tails;
        this.log = fields.log;
        this.bcsPadding = fields.bcsPadding;
    }

    static reified(): DailySignUpEventReified {
        return {
            typeName: DailySignUpEvent.$typeName,
            fullTypeName: composeSuiType(DailySignUpEvent.$typeName, ...[]) as `${typeof PKG_V6}::tails_staking::DailySignUpEvent`,
            typeArgs: [] as [],
            isPhantom: DailySignUpEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => DailySignUpEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => DailySignUpEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => DailySignUpEvent.fromBcs(data),
            bcs: DailySignUpEvent.bcs,
            fromJSONField: (field: any) => DailySignUpEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => DailySignUpEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => DailySignUpEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => DailySignUpEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => DailySignUpEvent.fetch(client, id),
            new: (fields: DailySignUpEventFields) => {
                return new DailySignUpEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return DailySignUpEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<DailySignUpEvent>> {
        return phantom(DailySignUpEvent.reified());
    }
    static get p() {
        return DailySignUpEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("DailySignUpEvent", {
            tails: bcs.vector(bcs.u64()),
            log: bcs.vector(bcs.u64()),
            bcs_padding: bcs.vector(bcs.vector(bcs.u8())),
        });
    }

    static fromFields(fields: Record<string, any>): DailySignUpEvent {
        return DailySignUpEvent.reified().new({
            tails: decodeFromFields(reified.vector("u64"), fields.tails),
            log: decodeFromFields(reified.vector("u64"), fields.log),
            bcsPadding: decodeFromFields(reified.vector(reified.vector("u8")), fields.bcs_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): DailySignUpEvent {
        if (!isDailySignUpEvent(item.type)) {
            throw new Error("not a DailySignUpEvent type");
        }

        return DailySignUpEvent.reified().new({
            tails: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.tails),
            log: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.log),
            bcsPadding: decodeFromFieldsWithTypes(reified.vector(reified.vector("u8")), item.fields.bcs_padding),
        });
    }

    static fromBcs(data: Uint8Array): DailySignUpEvent {
        return DailySignUpEvent.fromFields(DailySignUpEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            tails: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.tails),
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

    static fromJSONField(field: any): DailySignUpEvent {
        return DailySignUpEvent.reified().new({
            tails: decodeFromJSONField(reified.vector("u64"), field.tails),
            log: decodeFromJSONField(reified.vector("u64"), field.log),
            bcsPadding: decodeFromJSONField(reified.vector(reified.vector("u8")), field.bcsPadding),
        });
    }

    static fromJSON(json: Record<string, any>): DailySignUpEvent {
        if (json.$typeName !== DailySignUpEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return DailySignUpEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): DailySignUpEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isDailySignUpEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a DailySignUpEvent object`);
        }
        return DailySignUpEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): DailySignUpEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDailySignUpEvent(data.bcs.type)) {
                throw new Error(`object at is not a DailySignUpEvent object`);
            }

            return DailySignUpEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return DailySignUpEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<DailySignUpEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching DailySignUpEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isDailySignUpEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DailySignUpEvent object`);
        }

        return DailySignUpEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== RemoveProfitSharingEvent =============================== */

export function isRemoveProfitSharingEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V6}::tails_staking::RemoveProfitSharingEvent`;
}

export interface RemoveProfitSharingEventFields {
    token: ToField<TypeName>;
    log: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<Vector<"u8">>>;
}

export type RemoveProfitSharingEventReified = Reified<RemoveProfitSharingEvent, RemoveProfitSharingEventFields>;

export class RemoveProfitSharingEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V6}::tails_staking::RemoveProfitSharingEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = RemoveProfitSharingEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V6}::tails_staking::RemoveProfitSharingEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = RemoveProfitSharingEvent.$isPhantom;

    readonly token: ToField<TypeName>;
    readonly log: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<Vector<"u8">>>;

    private constructor(typeArgs: [], fields: RemoveProfitSharingEventFields) {
        this.$fullTypeName = composeSuiType(
            RemoveProfitSharingEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V6}::tails_staking::RemoveProfitSharingEvent`;
        this.$typeArgs = typeArgs;

        this.token = fields.token;
        this.log = fields.log;
        this.bcsPadding = fields.bcsPadding;
    }

    static reified(): RemoveProfitSharingEventReified {
        return {
            typeName: RemoveProfitSharingEvent.$typeName,
            fullTypeName: composeSuiType(
                RemoveProfitSharingEvent.$typeName,
                ...[]
            ) as `${typeof PKG_V6}::tails_staking::RemoveProfitSharingEvent`,
            typeArgs: [] as [],
            isPhantom: RemoveProfitSharingEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => RemoveProfitSharingEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => RemoveProfitSharingEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => RemoveProfitSharingEvent.fromBcs(data),
            bcs: RemoveProfitSharingEvent.bcs,
            fromJSONField: (field: any) => RemoveProfitSharingEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => RemoveProfitSharingEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => RemoveProfitSharingEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => RemoveProfitSharingEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => RemoveProfitSharingEvent.fetch(client, id),
            new: (fields: RemoveProfitSharingEventFields) => {
                return new RemoveProfitSharingEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return RemoveProfitSharingEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<RemoveProfitSharingEvent>> {
        return phantom(RemoveProfitSharingEvent.reified());
    }
    static get p() {
        return RemoveProfitSharingEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("RemoveProfitSharingEvent", {
            token: TypeName.bcs,
            log: bcs.vector(bcs.u64()),
            bcs_padding: bcs.vector(bcs.vector(bcs.u8())),
        });
    }

    static fromFields(fields: Record<string, any>): RemoveProfitSharingEvent {
        return RemoveProfitSharingEvent.reified().new({
            token: decodeFromFields(TypeName.reified(), fields.token),
            log: decodeFromFields(reified.vector("u64"), fields.log),
            bcsPadding: decodeFromFields(reified.vector(reified.vector("u8")), fields.bcs_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): RemoveProfitSharingEvent {
        if (!isRemoveProfitSharingEvent(item.type)) {
            throw new Error("not a RemoveProfitSharingEvent type");
        }

        return RemoveProfitSharingEvent.reified().new({
            token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token),
            log: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.log),
            bcsPadding: decodeFromFieldsWithTypes(reified.vector(reified.vector("u8")), item.fields.bcs_padding),
        });
    }

    static fromBcs(data: Uint8Array): RemoveProfitSharingEvent {
        return RemoveProfitSharingEvent.fromFields(RemoveProfitSharingEvent.bcs.parse(data));
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

    static fromJSONField(field: any): RemoveProfitSharingEvent {
        return RemoveProfitSharingEvent.reified().new({
            token: decodeFromJSONField(TypeName.reified(), field.token),
            log: decodeFromJSONField(reified.vector("u64"), field.log),
            bcsPadding: decodeFromJSONField(reified.vector(reified.vector("u8")), field.bcsPadding),
        });
    }

    static fromJSON(json: Record<string, any>): RemoveProfitSharingEvent {
        if (json.$typeName !== RemoveProfitSharingEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return RemoveProfitSharingEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): RemoveProfitSharingEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRemoveProfitSharingEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a RemoveProfitSharingEvent object`);
        }
        return RemoveProfitSharingEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): RemoveProfitSharingEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isRemoveProfitSharingEvent(data.bcs.type)) {
                throw new Error(`object at is not a RemoveProfitSharingEvent object`);
            }

            return RemoveProfitSharingEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return RemoveProfitSharingEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<RemoveProfitSharingEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching RemoveProfitSharingEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isRemoveProfitSharingEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RemoveProfitSharingEvent object`);
        }

        return RemoveProfitSharingEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== SetProfitSharingEvent =============================== */

export function isSetProfitSharingEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V6}::tails_staking::SetProfitSharingEvent`;
}

export interface SetProfitSharingEventFields {
    token: ToField<TypeName>;
    levelProfits: ToField<Vector<"u64">>;
    levelCounts: ToField<Vector<"u64">>;
    log: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<Vector<"u8">>>;
}

export type SetProfitSharingEventReified = Reified<SetProfitSharingEvent, SetProfitSharingEventFields>;

export class SetProfitSharingEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V6}::tails_staking::SetProfitSharingEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = SetProfitSharingEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V6}::tails_staking::SetProfitSharingEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = SetProfitSharingEvent.$isPhantom;

    readonly token: ToField<TypeName>;
    readonly levelProfits: ToField<Vector<"u64">>;
    readonly levelCounts: ToField<Vector<"u64">>;
    readonly log: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<Vector<"u8">>>;

    private constructor(typeArgs: [], fields: SetProfitSharingEventFields) {
        this.$fullTypeName = composeSuiType(
            SetProfitSharingEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V6}::tails_staking::SetProfitSharingEvent`;
        this.$typeArgs = typeArgs;

        this.token = fields.token;
        this.levelProfits = fields.levelProfits;
        this.levelCounts = fields.levelCounts;
        this.log = fields.log;
        this.bcsPadding = fields.bcsPadding;
    }

    static reified(): SetProfitSharingEventReified {
        return {
            typeName: SetProfitSharingEvent.$typeName,
            fullTypeName: composeSuiType(
                SetProfitSharingEvent.$typeName,
                ...[]
            ) as `${typeof PKG_V6}::tails_staking::SetProfitSharingEvent`,
            typeArgs: [] as [],
            isPhantom: SetProfitSharingEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => SetProfitSharingEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => SetProfitSharingEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => SetProfitSharingEvent.fromBcs(data),
            bcs: SetProfitSharingEvent.bcs,
            fromJSONField: (field: any) => SetProfitSharingEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => SetProfitSharingEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => SetProfitSharingEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => SetProfitSharingEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => SetProfitSharingEvent.fetch(client, id),
            new: (fields: SetProfitSharingEventFields) => {
                return new SetProfitSharingEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return SetProfitSharingEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<SetProfitSharingEvent>> {
        return phantom(SetProfitSharingEvent.reified());
    }
    static get p() {
        return SetProfitSharingEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("SetProfitSharingEvent", {
            token: TypeName.bcs,
            level_profits: bcs.vector(bcs.u64()),
            level_counts: bcs.vector(bcs.u64()),
            log: bcs.vector(bcs.u64()),
            bcs_padding: bcs.vector(bcs.vector(bcs.u8())),
        });
    }

    static fromFields(fields: Record<string, any>): SetProfitSharingEvent {
        return SetProfitSharingEvent.reified().new({
            token: decodeFromFields(TypeName.reified(), fields.token),
            levelProfits: decodeFromFields(reified.vector("u64"), fields.level_profits),
            levelCounts: decodeFromFields(reified.vector("u64"), fields.level_counts),
            log: decodeFromFields(reified.vector("u64"), fields.log),
            bcsPadding: decodeFromFields(reified.vector(reified.vector("u8")), fields.bcs_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): SetProfitSharingEvent {
        if (!isSetProfitSharingEvent(item.type)) {
            throw new Error("not a SetProfitSharingEvent type");
        }

        return SetProfitSharingEvent.reified().new({
            token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token),
            levelProfits: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.level_profits),
            levelCounts: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.level_counts),
            log: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.log),
            bcsPadding: decodeFromFieldsWithTypes(reified.vector(reified.vector("u8")), item.fields.bcs_padding),
        });
    }

    static fromBcs(data: Uint8Array): SetProfitSharingEvent {
        return SetProfitSharingEvent.fromFields(SetProfitSharingEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            token: this.token.toJSONField(),
            levelProfits: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.levelProfits),
            levelCounts: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.levelCounts),
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

    static fromJSONField(field: any): SetProfitSharingEvent {
        return SetProfitSharingEvent.reified().new({
            token: decodeFromJSONField(TypeName.reified(), field.token),
            levelProfits: decodeFromJSONField(reified.vector("u64"), field.levelProfits),
            levelCounts: decodeFromJSONField(reified.vector("u64"), field.levelCounts),
            log: decodeFromJSONField(reified.vector("u64"), field.log),
            bcsPadding: decodeFromJSONField(reified.vector(reified.vector("u8")), field.bcsPadding),
        });
    }

    static fromJSON(json: Record<string, any>): SetProfitSharingEvent {
        if (json.$typeName !== SetProfitSharingEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return SetProfitSharingEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): SetProfitSharingEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isSetProfitSharingEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a SetProfitSharingEvent object`);
        }
        return SetProfitSharingEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): SetProfitSharingEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isSetProfitSharingEvent(data.bcs.type)) {
                throw new Error(`object at is not a SetProfitSharingEvent object`);
            }

            return SetProfitSharingEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return SetProfitSharingEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<SetProfitSharingEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching SetProfitSharingEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isSetProfitSharingEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SetProfitSharingEvent object`);
        }

        return SetProfitSharingEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== StakeTailsEvent =============================== */

export function isStakeTailsEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V6}::tails_staking::StakeTailsEvent`;
}

export interface StakeTailsEventFields {
    tails: ToField<"address">;
    log: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<Vector<"u8">>>;
}

export type StakeTailsEventReified = Reified<StakeTailsEvent, StakeTailsEventFields>;

export class StakeTailsEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V6}::tails_staking::StakeTailsEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = StakeTailsEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V6}::tails_staking::StakeTailsEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = StakeTailsEvent.$isPhantom;

    readonly tails: ToField<"address">;
    readonly log: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<Vector<"u8">>>;

    private constructor(typeArgs: [], fields: StakeTailsEventFields) {
        this.$fullTypeName = composeSuiType(StakeTailsEvent.$typeName, ...typeArgs) as `${typeof PKG_V6}::tails_staking::StakeTailsEvent`;
        this.$typeArgs = typeArgs;

        this.tails = fields.tails;
        this.log = fields.log;
        this.bcsPadding = fields.bcsPadding;
    }

    static reified(): StakeTailsEventReified {
        return {
            typeName: StakeTailsEvent.$typeName,
            fullTypeName: composeSuiType(StakeTailsEvent.$typeName, ...[]) as `${typeof PKG_V6}::tails_staking::StakeTailsEvent`,
            typeArgs: [] as [],
            isPhantom: StakeTailsEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => StakeTailsEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => StakeTailsEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => StakeTailsEvent.fromBcs(data),
            bcs: StakeTailsEvent.bcs,
            fromJSONField: (field: any) => StakeTailsEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => StakeTailsEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => StakeTailsEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => StakeTailsEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => StakeTailsEvent.fetch(client, id),
            new: (fields: StakeTailsEventFields) => {
                return new StakeTailsEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return StakeTailsEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<StakeTailsEvent>> {
        return phantom(StakeTailsEvent.reified());
    }
    static get p() {
        return StakeTailsEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("StakeTailsEvent", {
            tails: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            log: bcs.vector(bcs.u64()),
            bcs_padding: bcs.vector(bcs.vector(bcs.u8())),
        });
    }

    static fromFields(fields: Record<string, any>): StakeTailsEvent {
        return StakeTailsEvent.reified().new({
            tails: decodeFromFields("address", fields.tails),
            log: decodeFromFields(reified.vector("u64"), fields.log),
            bcsPadding: decodeFromFields(reified.vector(reified.vector("u8")), fields.bcs_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): StakeTailsEvent {
        if (!isStakeTailsEvent(item.type)) {
            throw new Error("not a StakeTailsEvent type");
        }

        return StakeTailsEvent.reified().new({
            tails: decodeFromFieldsWithTypes("address", item.fields.tails),
            log: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.log),
            bcsPadding: decodeFromFieldsWithTypes(reified.vector(reified.vector("u8")), item.fields.bcs_padding),
        });
    }

    static fromBcs(data: Uint8Array): StakeTailsEvent {
        return StakeTailsEvent.fromFields(StakeTailsEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            tails: this.tails,
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

    static fromJSONField(field: any): StakeTailsEvent {
        return StakeTailsEvent.reified().new({
            tails: decodeFromJSONField("address", field.tails),
            log: decodeFromJSONField(reified.vector("u64"), field.log),
            bcsPadding: decodeFromJSONField(reified.vector(reified.vector("u8")), field.bcsPadding),
        });
    }

    static fromJSON(json: Record<string, any>): StakeTailsEvent {
        if (json.$typeName !== StakeTailsEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return StakeTailsEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): StakeTailsEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isStakeTailsEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a StakeTailsEvent object`);
        }
        return StakeTailsEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): StakeTailsEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isStakeTailsEvent(data.bcs.type)) {
                throw new Error(`object at is not a StakeTailsEvent object`);
            }

            return StakeTailsEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return StakeTailsEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<StakeTailsEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching StakeTailsEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isStakeTailsEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a StakeTailsEvent object`);
        }

        return StakeTailsEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== StakingInfo =============================== */

export function isStakingInfo(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V6}::tails_staking::StakingInfo`;
}

export interface StakingInfoFields {
    user: ToField<"address">;
    tails: ToField<Vector<"u64">>;
    profits: ToField<Vector<"u64">>;
    u64Padding: ToField<Vector<"u64">>;
}

export type StakingInfoReified = Reified<StakingInfo, StakingInfoFields>;

export class StakingInfo implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V6}::tails_staking::StakingInfo`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = StakingInfo.$typeName;
    readonly $fullTypeName: `${typeof PKG_V6}::tails_staking::StakingInfo`;
    readonly $typeArgs: [];
    readonly $isPhantom = StakingInfo.$isPhantom;

    readonly user: ToField<"address">;
    readonly tails: ToField<Vector<"u64">>;
    readonly profits: ToField<Vector<"u64">>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: StakingInfoFields) {
        this.$fullTypeName = composeSuiType(StakingInfo.$typeName, ...typeArgs) as `${typeof PKG_V6}::tails_staking::StakingInfo`;
        this.$typeArgs = typeArgs;

        this.user = fields.user;
        this.tails = fields.tails;
        this.profits = fields.profits;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): StakingInfoReified {
        return {
            typeName: StakingInfo.$typeName,
            fullTypeName: composeSuiType(StakingInfo.$typeName, ...[]) as `${typeof PKG_V6}::tails_staking::StakingInfo`,
            typeArgs: [] as [],
            isPhantom: StakingInfo.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => StakingInfo.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => StakingInfo.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => StakingInfo.fromBcs(data),
            bcs: StakingInfo.bcs,
            fromJSONField: (field: any) => StakingInfo.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => StakingInfo.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => StakingInfo.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => StakingInfo.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => StakingInfo.fetch(client, id),
            new: (fields: StakingInfoFields) => {
                return new StakingInfo([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return StakingInfo.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<StakingInfo>> {
        return phantom(StakingInfo.reified());
    }
    static get p() {
        return StakingInfo.phantom();
    }

    static get bcs() {
        return bcs.struct("StakingInfo", {
            user: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            tails: bcs.vector(bcs.u64()),
            profits: bcs.vector(bcs.u64()),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): StakingInfo {
        return StakingInfo.reified().new({
            user: decodeFromFields("address", fields.user),
            tails: decodeFromFields(reified.vector("u64"), fields.tails),
            profits: decodeFromFields(reified.vector("u64"), fields.profits),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): StakingInfo {
        if (!isStakingInfo(item.type)) {
            throw new Error("not a StakingInfo type");
        }

        return StakingInfo.reified().new({
            user: decodeFromFieldsWithTypes("address", item.fields.user),
            tails: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.tails),
            profits: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.profits),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): StakingInfo {
        return StakingInfo.fromFields(StakingInfo.bcs.parse(data));
    }

    toJSONField() {
        return {
            user: this.user,
            tails: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.tails),
            profits: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.profits),
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

    static fromJSONField(field: any): StakingInfo {
        return StakingInfo.reified().new({
            user: decodeFromJSONField("address", field.user),
            tails: decodeFromJSONField(reified.vector("u64"), field.tails),
            profits: decodeFromJSONField(reified.vector("u64"), field.profits),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): StakingInfo {
        if (json.$typeName !== StakingInfo.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return StakingInfo.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): StakingInfo {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isStakingInfo(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a StakingInfo object`);
        }
        return StakingInfo.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): StakingInfo {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isStakingInfo(data.bcs.type)) {
                throw new Error(`object at is not a StakingInfo object`);
            }

            return StakingInfo.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return StakingInfo.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<StakingInfo> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching StakingInfo object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isStakingInfo(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a StakingInfo object`);
        }

        return StakingInfo.fromSuiObjectData(res.data);
    }
}

/* ============================== TailsStakingRegistry =============================== */

export function isTailsStakingRegistry(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V6}::tails_staking::TailsStakingRegistry`;
}

export interface TailsStakingRegistryFields {
    id: ToField<UID>;
    config: ToField<Vector<"u64">>;
    tailsManagerCap: ToField<ManagerCap>;
    tails: ToField<ObjectTable<"address", ToPhantom<Tails>>>;
    tailsMetadata: ToField<Bag>;
    stakingInfos: ToField<BigVector>;
    profitAssets: ToField<Vector<TypeName>>;
    transferPolicy: ToField<TransferPolicy<ToPhantom<Tails>>>;
}

export type TailsStakingRegistryReified = Reified<TailsStakingRegistry, TailsStakingRegistryFields>;

export class TailsStakingRegistry implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V6}::tails_staking::TailsStakingRegistry`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = TailsStakingRegistry.$typeName;
    readonly $fullTypeName: `${typeof PKG_V6}::tails_staking::TailsStakingRegistry`;
    readonly $typeArgs: [];
    readonly $isPhantom = TailsStakingRegistry.$isPhantom;

    readonly id: ToField<UID>;
    readonly config: ToField<Vector<"u64">>;
    readonly tailsManagerCap: ToField<ManagerCap>;
    readonly tails: ToField<ObjectTable<"address", ToPhantom<Tails>>>;
    readonly tailsMetadata: ToField<Bag>;
    readonly stakingInfos: ToField<BigVector>;
    readonly profitAssets: ToField<Vector<TypeName>>;
    readonly transferPolicy: ToField<TransferPolicy<ToPhantom<Tails>>>;

    private constructor(typeArgs: [], fields: TailsStakingRegistryFields) {
        this.$fullTypeName = composeSuiType(
            TailsStakingRegistry.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V6}::tails_staking::TailsStakingRegistry`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.config = fields.config;
        this.tailsManagerCap = fields.tailsManagerCap;
        this.tails = fields.tails;
        this.tailsMetadata = fields.tailsMetadata;
        this.stakingInfos = fields.stakingInfos;
        this.profitAssets = fields.profitAssets;
        this.transferPolicy = fields.transferPolicy;
    }

    static reified(): TailsStakingRegistryReified {
        return {
            typeName: TailsStakingRegistry.$typeName,
            fullTypeName: composeSuiType(TailsStakingRegistry.$typeName, ...[]) as `${typeof PKG_V6}::tails_staking::TailsStakingRegistry`,
            typeArgs: [] as [],
            isPhantom: TailsStakingRegistry.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => TailsStakingRegistry.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => TailsStakingRegistry.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => TailsStakingRegistry.fromBcs(data),
            bcs: TailsStakingRegistry.bcs,
            fromJSONField: (field: any) => TailsStakingRegistry.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => TailsStakingRegistry.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => TailsStakingRegistry.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => TailsStakingRegistry.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => TailsStakingRegistry.fetch(client, id),
            new: (fields: TailsStakingRegistryFields) => {
                return new TailsStakingRegistry([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return TailsStakingRegistry.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<TailsStakingRegistry>> {
        return phantom(TailsStakingRegistry.reified());
    }
    static get p() {
        return TailsStakingRegistry.phantom();
    }

    static get bcs() {
        return bcs.struct("TailsStakingRegistry", {
            id: UID.bcs,
            config: bcs.vector(bcs.u64()),
            tails_manager_cap: ManagerCap.bcs,
            tails: ObjectTable.bcs,
            tails_metadata: Bag.bcs,
            staking_infos: BigVector.bcs,
            profit_assets: bcs.vector(TypeName.bcs),
            transfer_policy: TransferPolicy.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): TailsStakingRegistry {
        return TailsStakingRegistry.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            config: decodeFromFields(reified.vector("u64"), fields.config),
            tailsManagerCap: decodeFromFields(ManagerCap.reified(), fields.tails_manager_cap),
            tails: decodeFromFields(ObjectTable.reified(reified.phantom("address"), reified.phantom(Tails.reified())), fields.tails),
            tailsMetadata: decodeFromFields(Bag.reified(), fields.tails_metadata),
            stakingInfos: decodeFromFields(BigVector.reified(), fields.staking_infos),
            profitAssets: decodeFromFields(reified.vector(TypeName.reified()), fields.profit_assets),
            transferPolicy: decodeFromFields(TransferPolicy.reified(reified.phantom(Tails.reified())), fields.transfer_policy),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): TailsStakingRegistry {
        if (!isTailsStakingRegistry(item.type)) {
            throw new Error("not a TailsStakingRegistry type");
        }

        return TailsStakingRegistry.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            config: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.config),
            tailsManagerCap: decodeFromFieldsWithTypes(ManagerCap.reified(), item.fields.tails_manager_cap),
            tails: decodeFromFieldsWithTypes(
                ObjectTable.reified(reified.phantom("address"), reified.phantom(Tails.reified())),
                item.fields.tails
            ),
            tailsMetadata: decodeFromFieldsWithTypes(Bag.reified(), item.fields.tails_metadata),
            stakingInfos: decodeFromFieldsWithTypes(BigVector.reified(), item.fields.staking_infos),
            profitAssets: decodeFromFieldsWithTypes(reified.vector(TypeName.reified()), item.fields.profit_assets),
            transferPolicy: decodeFromFieldsWithTypes(
                TransferPolicy.reified(reified.phantom(Tails.reified())),
                item.fields.transfer_policy
            ),
        });
    }

    static fromBcs(data: Uint8Array): TailsStakingRegistry {
        return TailsStakingRegistry.fromFields(TailsStakingRegistry.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            config: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.config),
            tailsManagerCap: this.tailsManagerCap.toJSONField(),
            tails: this.tails.toJSONField(),
            tailsMetadata: this.tailsMetadata.toJSONField(),
            stakingInfos: this.stakingInfos.toJSONField(),
            profitAssets: fieldToJSON<Vector<TypeName>>(`vector<${TypeName.$typeName}>`, this.profitAssets),
            transferPolicy: this.transferPolicy.toJSONField(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): TailsStakingRegistry {
        return TailsStakingRegistry.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            config: decodeFromJSONField(reified.vector("u64"), field.config),
            tailsManagerCap: decodeFromJSONField(ManagerCap.reified(), field.tailsManagerCap),
            tails: decodeFromJSONField(ObjectTable.reified(reified.phantom("address"), reified.phantom(Tails.reified())), field.tails),
            tailsMetadata: decodeFromJSONField(Bag.reified(), field.tailsMetadata),
            stakingInfos: decodeFromJSONField(BigVector.reified(), field.stakingInfos),
            profitAssets: decodeFromJSONField(reified.vector(TypeName.reified()), field.profitAssets),
            transferPolicy: decodeFromJSONField(TransferPolicy.reified(reified.phantom(Tails.reified())), field.transferPolicy),
        });
    }

    static fromJSON(json: Record<string, any>): TailsStakingRegistry {
        if (json.$typeName !== TailsStakingRegistry.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return TailsStakingRegistry.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): TailsStakingRegistry {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isTailsStakingRegistry(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a TailsStakingRegistry object`);
        }
        return TailsStakingRegistry.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): TailsStakingRegistry {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isTailsStakingRegistry(data.bcs.type)) {
                throw new Error(`object at is not a TailsStakingRegistry object`);
            }

            return TailsStakingRegistry.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return TailsStakingRegistry.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<TailsStakingRegistry> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching TailsStakingRegistry object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isTailsStakingRegistry(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TailsStakingRegistry object`);
        }

        return TailsStakingRegistry.fromSuiObjectData(res.data);
    }
}

/* ============================== TransferTailsEvent =============================== */

export function isTransferTailsEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V6}::tails_staking::TransferTailsEvent`;
}

export interface TransferTailsEventFields {
    tails: ToField<"address">;
    recipient: ToField<"address">;
    log: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<Vector<"u8">>>;
}

export type TransferTailsEventReified = Reified<TransferTailsEvent, TransferTailsEventFields>;

export class TransferTailsEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V6}::tails_staking::TransferTailsEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = TransferTailsEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V6}::tails_staking::TransferTailsEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = TransferTailsEvent.$isPhantom;

    readonly tails: ToField<"address">;
    readonly recipient: ToField<"address">;
    readonly log: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<Vector<"u8">>>;

    private constructor(typeArgs: [], fields: TransferTailsEventFields) {
        this.$fullTypeName = composeSuiType(
            TransferTailsEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V6}::tails_staking::TransferTailsEvent`;
        this.$typeArgs = typeArgs;

        this.tails = fields.tails;
        this.recipient = fields.recipient;
        this.log = fields.log;
        this.bcsPadding = fields.bcsPadding;
    }

    static reified(): TransferTailsEventReified {
        return {
            typeName: TransferTailsEvent.$typeName,
            fullTypeName: composeSuiType(TransferTailsEvent.$typeName, ...[]) as `${typeof PKG_V6}::tails_staking::TransferTailsEvent`,
            typeArgs: [] as [],
            isPhantom: TransferTailsEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => TransferTailsEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => TransferTailsEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => TransferTailsEvent.fromBcs(data),
            bcs: TransferTailsEvent.bcs,
            fromJSONField: (field: any) => TransferTailsEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => TransferTailsEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => TransferTailsEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => TransferTailsEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => TransferTailsEvent.fetch(client, id),
            new: (fields: TransferTailsEventFields) => {
                return new TransferTailsEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return TransferTailsEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<TransferTailsEvent>> {
        return phantom(TransferTailsEvent.reified());
    }
    static get p() {
        return TransferTailsEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("TransferTailsEvent", {
            tails: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            recipient: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            log: bcs.vector(bcs.u64()),
            bcs_padding: bcs.vector(bcs.vector(bcs.u8())),
        });
    }

    static fromFields(fields: Record<string, any>): TransferTailsEvent {
        return TransferTailsEvent.reified().new({
            tails: decodeFromFields("address", fields.tails),
            recipient: decodeFromFields("address", fields.recipient),
            log: decodeFromFields(reified.vector("u64"), fields.log),
            bcsPadding: decodeFromFields(reified.vector(reified.vector("u8")), fields.bcs_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): TransferTailsEvent {
        if (!isTransferTailsEvent(item.type)) {
            throw new Error("not a TransferTailsEvent type");
        }

        return TransferTailsEvent.reified().new({
            tails: decodeFromFieldsWithTypes("address", item.fields.tails),
            recipient: decodeFromFieldsWithTypes("address", item.fields.recipient),
            log: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.log),
            bcsPadding: decodeFromFieldsWithTypes(reified.vector(reified.vector("u8")), item.fields.bcs_padding),
        });
    }

    static fromBcs(data: Uint8Array): TransferTailsEvent {
        return TransferTailsEvent.fromFields(TransferTailsEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            tails: this.tails,
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

    static fromJSONField(field: any): TransferTailsEvent {
        return TransferTailsEvent.reified().new({
            tails: decodeFromJSONField("address", field.tails),
            recipient: decodeFromJSONField("address", field.recipient),
            log: decodeFromJSONField(reified.vector("u64"), field.log),
            bcsPadding: decodeFromJSONField(reified.vector(reified.vector("u8")), field.bcsPadding),
        });
    }

    static fromJSON(json: Record<string, any>): TransferTailsEvent {
        if (json.$typeName !== TransferTailsEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return TransferTailsEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): TransferTailsEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isTransferTailsEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a TransferTailsEvent object`);
        }
        return TransferTailsEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): TransferTailsEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isTransferTailsEvent(data.bcs.type)) {
                throw new Error(`object at is not a TransferTailsEvent object`);
            }

            return TransferTailsEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return TransferTailsEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<TransferTailsEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching TransferTailsEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isTransferTailsEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TransferTailsEvent object`);
        }

        return TransferTailsEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== UnstakeTailsEvent =============================== */

export function isUnstakeTailsEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V6}::tails_staking::UnstakeTailsEvent`;
}

export interface UnstakeTailsEventFields {
    tails: ToField<"address">;
    log: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<Vector<"u8">>>;
}

export type UnstakeTailsEventReified = Reified<UnstakeTailsEvent, UnstakeTailsEventFields>;

export class UnstakeTailsEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V6}::tails_staking::UnstakeTailsEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = UnstakeTailsEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V6}::tails_staking::UnstakeTailsEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = UnstakeTailsEvent.$isPhantom;

    readonly tails: ToField<"address">;
    readonly log: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<Vector<"u8">>>;

    private constructor(typeArgs: [], fields: UnstakeTailsEventFields) {
        this.$fullTypeName = composeSuiType(
            UnstakeTailsEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V6}::tails_staking::UnstakeTailsEvent`;
        this.$typeArgs = typeArgs;

        this.tails = fields.tails;
        this.log = fields.log;
        this.bcsPadding = fields.bcsPadding;
    }

    static reified(): UnstakeTailsEventReified {
        return {
            typeName: UnstakeTailsEvent.$typeName,
            fullTypeName: composeSuiType(UnstakeTailsEvent.$typeName, ...[]) as `${typeof PKG_V6}::tails_staking::UnstakeTailsEvent`,
            typeArgs: [] as [],
            isPhantom: UnstakeTailsEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => UnstakeTailsEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => UnstakeTailsEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => UnstakeTailsEvent.fromBcs(data),
            bcs: UnstakeTailsEvent.bcs,
            fromJSONField: (field: any) => UnstakeTailsEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => UnstakeTailsEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => UnstakeTailsEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => UnstakeTailsEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => UnstakeTailsEvent.fetch(client, id),
            new: (fields: UnstakeTailsEventFields) => {
                return new UnstakeTailsEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return UnstakeTailsEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<UnstakeTailsEvent>> {
        return phantom(UnstakeTailsEvent.reified());
    }
    static get p() {
        return UnstakeTailsEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("UnstakeTailsEvent", {
            tails: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            log: bcs.vector(bcs.u64()),
            bcs_padding: bcs.vector(bcs.vector(bcs.u8())),
        });
    }

    static fromFields(fields: Record<string, any>): UnstakeTailsEvent {
        return UnstakeTailsEvent.reified().new({
            tails: decodeFromFields("address", fields.tails),
            log: decodeFromFields(reified.vector("u64"), fields.log),
            bcsPadding: decodeFromFields(reified.vector(reified.vector("u8")), fields.bcs_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): UnstakeTailsEvent {
        if (!isUnstakeTailsEvent(item.type)) {
            throw new Error("not a UnstakeTailsEvent type");
        }

        return UnstakeTailsEvent.reified().new({
            tails: decodeFromFieldsWithTypes("address", item.fields.tails),
            log: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.log),
            bcsPadding: decodeFromFieldsWithTypes(reified.vector(reified.vector("u8")), item.fields.bcs_padding),
        });
    }

    static fromBcs(data: Uint8Array): UnstakeTailsEvent {
        return UnstakeTailsEvent.fromFields(UnstakeTailsEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            tails: this.tails,
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

    static fromJSONField(field: any): UnstakeTailsEvent {
        return UnstakeTailsEvent.reified().new({
            tails: decodeFromJSONField("address", field.tails),
            log: decodeFromJSONField(reified.vector("u64"), field.log),
            bcsPadding: decodeFromJSONField(reified.vector(reified.vector("u8")), field.bcsPadding),
        });
    }

    static fromJSON(json: Record<string, any>): UnstakeTailsEvent {
        if (json.$typeName !== UnstakeTailsEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return UnstakeTailsEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): UnstakeTailsEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUnstakeTailsEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a UnstakeTailsEvent object`);
        }
        return UnstakeTailsEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): UnstakeTailsEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isUnstakeTailsEvent(data.bcs.type)) {
                throw new Error(`object at is not a UnstakeTailsEvent object`);
            }

            return UnstakeTailsEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return UnstakeTailsEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<UnstakeTailsEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching UnstakeTailsEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isUnstakeTailsEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UnstakeTailsEvent object`);
        }

        return UnstakeTailsEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== UpdateTailsStakingRegistryConfigEvent =============================== */

export function isUpdateTailsStakingRegistryConfigEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V6}::tails_staking::UpdateTailsStakingRegistryConfigEvent`;
}

export interface UpdateTailsStakingRegistryConfigEventFields {
    index: ToField<"u64">;
    log: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<Vector<"u8">>>;
}

export type UpdateTailsStakingRegistryConfigEventReified = Reified<
    UpdateTailsStakingRegistryConfigEvent,
    UpdateTailsStakingRegistryConfigEventFields
>;

export class UpdateTailsStakingRegistryConfigEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V6}::tails_staking::UpdateTailsStakingRegistryConfigEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = UpdateTailsStakingRegistryConfigEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V6}::tails_staking::UpdateTailsStakingRegistryConfigEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = UpdateTailsStakingRegistryConfigEvent.$isPhantom;

    readonly index: ToField<"u64">;
    readonly log: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<Vector<"u8">>>;

    private constructor(typeArgs: [], fields: UpdateTailsStakingRegistryConfigEventFields) {
        this.$fullTypeName = composeSuiType(
            UpdateTailsStakingRegistryConfigEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V6}::tails_staking::UpdateTailsStakingRegistryConfigEvent`;
        this.$typeArgs = typeArgs;

        this.index = fields.index;
        this.log = fields.log;
        this.bcsPadding = fields.bcsPadding;
    }

    static reified(): UpdateTailsStakingRegistryConfigEventReified {
        return {
            typeName: UpdateTailsStakingRegistryConfigEvent.$typeName,
            fullTypeName: composeSuiType(
                UpdateTailsStakingRegistryConfigEvent.$typeName,
                ...[]
            ) as `${typeof PKG_V6}::tails_staking::UpdateTailsStakingRegistryConfigEvent`,
            typeArgs: [] as [],
            isPhantom: UpdateTailsStakingRegistryConfigEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => UpdateTailsStakingRegistryConfigEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => UpdateTailsStakingRegistryConfigEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => UpdateTailsStakingRegistryConfigEvent.fromBcs(data),
            bcs: UpdateTailsStakingRegistryConfigEvent.bcs,
            fromJSONField: (field: any) => UpdateTailsStakingRegistryConfigEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => UpdateTailsStakingRegistryConfigEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => UpdateTailsStakingRegistryConfigEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => UpdateTailsStakingRegistryConfigEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => UpdateTailsStakingRegistryConfigEvent.fetch(client, id),
            new: (fields: UpdateTailsStakingRegistryConfigEventFields) => {
                return new UpdateTailsStakingRegistryConfigEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return UpdateTailsStakingRegistryConfigEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<UpdateTailsStakingRegistryConfigEvent>> {
        return phantom(UpdateTailsStakingRegistryConfigEvent.reified());
    }
    static get p() {
        return UpdateTailsStakingRegistryConfigEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("UpdateTailsStakingRegistryConfigEvent", {
            index: bcs.u64(),
            log: bcs.vector(bcs.u64()),
            bcs_padding: bcs.vector(bcs.vector(bcs.u8())),
        });
    }

    static fromFields(fields: Record<string, any>): UpdateTailsStakingRegistryConfigEvent {
        return UpdateTailsStakingRegistryConfigEvent.reified().new({
            index: decodeFromFields("u64", fields.index),
            log: decodeFromFields(reified.vector("u64"), fields.log),
            bcsPadding: decodeFromFields(reified.vector(reified.vector("u8")), fields.bcs_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): UpdateTailsStakingRegistryConfigEvent {
        if (!isUpdateTailsStakingRegistryConfigEvent(item.type)) {
            throw new Error("not a UpdateTailsStakingRegistryConfigEvent type");
        }

        return UpdateTailsStakingRegistryConfigEvent.reified().new({
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            log: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.log),
            bcsPadding: decodeFromFieldsWithTypes(reified.vector(reified.vector("u8")), item.fields.bcs_padding),
        });
    }

    static fromBcs(data: Uint8Array): UpdateTailsStakingRegistryConfigEvent {
        return UpdateTailsStakingRegistryConfigEvent.fromFields(UpdateTailsStakingRegistryConfigEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            index: this.index.toString(),
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

    static fromJSONField(field: any): UpdateTailsStakingRegistryConfigEvent {
        return UpdateTailsStakingRegistryConfigEvent.reified().new({
            index: decodeFromJSONField("u64", field.index),
            log: decodeFromJSONField(reified.vector("u64"), field.log),
            bcsPadding: decodeFromJSONField(reified.vector(reified.vector("u8")), field.bcsPadding),
        });
    }

    static fromJSON(json: Record<string, any>): UpdateTailsStakingRegistryConfigEvent {
        if (json.$typeName !== UpdateTailsStakingRegistryConfigEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return UpdateTailsStakingRegistryConfigEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): UpdateTailsStakingRegistryConfigEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUpdateTailsStakingRegistryConfigEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a UpdateTailsStakingRegistryConfigEvent object`);
        }
        return UpdateTailsStakingRegistryConfigEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): UpdateTailsStakingRegistryConfigEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isUpdateTailsStakingRegistryConfigEvent(data.bcs.type)) {
                throw new Error(`object at is not a UpdateTailsStakingRegistryConfigEvent object`);
            }

            return UpdateTailsStakingRegistryConfigEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return UpdateTailsStakingRegistryConfigEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<UpdateTailsStakingRegistryConfigEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching UpdateTailsStakingRegistryConfigEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isUpdateTailsStakingRegistryConfigEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UpdateTailsStakingRegistryConfigEvent object`);
        }

        return UpdateTailsStakingRegistryConfigEvent.fromSuiObjectData(res.data);
    }
}
