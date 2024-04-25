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
} from "../../../../_framework/reified";
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../../../_framework/util";
import { ID } from "../../0x2/object/structs";
import { bcs, fromB64, fromHEX, toHEX } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";

/* ============================== AllowAllEvent =============================== */

export function isAllowAllEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1318fdc90319ec9c24df1456d960a447521b0a658316155895014a6e39b5482f::whitelist::AllowAllEvent";
}

export interface AllowAllEventFields {
    id: ToField<ID>;
}

export type AllowAllEventReified = Reified<AllowAllEvent, AllowAllEventFields>;

export class AllowAllEvent implements StructClass {
    static readonly $typeName = "0x1318fdc90319ec9c24df1456d960a447521b0a658316155895014a6e39b5482f::whitelist::AllowAllEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = AllowAllEvent.$typeName;

    readonly $fullTypeName: "0x1318fdc90319ec9c24df1456d960a447521b0a658316155895014a6e39b5482f::whitelist::AllowAllEvent";

    readonly $typeArgs: [];

    readonly id: ToField<ID>;

    private constructor(typeArgs: [], fields: AllowAllEventFields) {
        this.$fullTypeName = composeSuiType(
            AllowAllEvent.$typeName,
            ...typeArgs
        ) as "0x1318fdc90319ec9c24df1456d960a447521b0a658316155895014a6e39b5482f::whitelist::AllowAllEvent";
        this.$typeArgs = typeArgs;

        this.id = fields.id;
    }

    static reified(): AllowAllEventReified {
        return {
            typeName: AllowAllEvent.$typeName,
            fullTypeName: composeSuiType(
                AllowAllEvent.$typeName,
                ...[]
            ) as "0x1318fdc90319ec9c24df1456d960a447521b0a658316155895014a6e39b5482f::whitelist::AllowAllEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => AllowAllEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => AllowAllEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => AllowAllEvent.fromBcs(data),
            bcs: AllowAllEvent.bcs,
            fromJSONField: (field: any) => AllowAllEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => AllowAllEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => AllowAllEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => AllowAllEvent.fetch(client, id),
            new: (fields: AllowAllEventFields) => {
                return new AllowAllEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return AllowAllEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<AllowAllEvent>> {
        return phantom(AllowAllEvent.reified());
    }
    static get p() {
        return AllowAllEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("AllowAllEvent", {
            id: ID.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): AllowAllEvent {
        return AllowAllEvent.reified().new({ id: decodeFromFields(ID.reified(), fields.id) });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): AllowAllEvent {
        if (!isAllowAllEvent(item.type)) {
            throw new Error("not a AllowAllEvent type");
        }

        return AllowAllEvent.reified().new({ id: decodeFromFieldsWithTypes(ID.reified(), item.fields.id) });
    }

    static fromBcs(data: Uint8Array): AllowAllEvent {
        return AllowAllEvent.fromFields(AllowAllEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): AllowAllEvent {
        return AllowAllEvent.reified().new({ id: decodeFromJSONField(ID.reified(), field.id) });
    }

    static fromJSON(json: Record<string, any>): AllowAllEvent {
        if (json.$typeName !== AllowAllEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return AllowAllEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): AllowAllEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isAllowAllEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a AllowAllEvent object`);
        }
        return AllowAllEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<AllowAllEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching AllowAllEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isAllowAllEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AllowAllEvent object`);
        }
        return AllowAllEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== AllowAllKey =============================== */

export function isAllowAllKey(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1318fdc90319ec9c24df1456d960a447521b0a658316155895014a6e39b5482f::whitelist::AllowAllKey";
}

export interface AllowAllKeyFields {
    dummyField: ToField<"bool">;
}

export type AllowAllKeyReified = Reified<AllowAllKey, AllowAllKeyFields>;

export class AllowAllKey implements StructClass {
    static readonly $typeName = "0x1318fdc90319ec9c24df1456d960a447521b0a658316155895014a6e39b5482f::whitelist::AllowAllKey";
    static readonly $numTypeParams = 0;

    readonly $typeName = AllowAllKey.$typeName;

    readonly $fullTypeName: "0x1318fdc90319ec9c24df1456d960a447521b0a658316155895014a6e39b5482f::whitelist::AllowAllKey";

    readonly $typeArgs: [];

    readonly dummyField: ToField<"bool">;

    private constructor(typeArgs: [], fields: AllowAllKeyFields) {
        this.$fullTypeName = composeSuiType(
            AllowAllKey.$typeName,
            ...typeArgs
        ) as "0x1318fdc90319ec9c24df1456d960a447521b0a658316155895014a6e39b5482f::whitelist::AllowAllKey";
        this.$typeArgs = typeArgs;

        this.dummyField = fields.dummyField;
    }

    static reified(): AllowAllKeyReified {
        return {
            typeName: AllowAllKey.$typeName,
            fullTypeName: composeSuiType(
                AllowAllKey.$typeName,
                ...[]
            ) as "0x1318fdc90319ec9c24df1456d960a447521b0a658316155895014a6e39b5482f::whitelist::AllowAllKey",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => AllowAllKey.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => AllowAllKey.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => AllowAllKey.fromBcs(data),
            bcs: AllowAllKey.bcs,
            fromJSONField: (field: any) => AllowAllKey.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => AllowAllKey.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => AllowAllKey.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => AllowAllKey.fetch(client, id),
            new: (fields: AllowAllKeyFields) => {
                return new AllowAllKey([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return AllowAllKey.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<AllowAllKey>> {
        return phantom(AllowAllKey.reified());
    }
    static get p() {
        return AllowAllKey.phantom();
    }

    static get bcs() {
        return bcs.struct("AllowAllKey", {
            dummy_field: bcs.bool(),
        });
    }

    static fromFields(fields: Record<string, any>): AllowAllKey {
        return AllowAllKey.reified().new({ dummyField: decodeFromFields("bool", fields.dummy_field) });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): AllowAllKey {
        if (!isAllowAllKey(item.type)) {
            throw new Error("not a AllowAllKey type");
        }

        return AllowAllKey.reified().new({ dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) });
    }

    static fromBcs(data: Uint8Array): AllowAllKey {
        return AllowAllKey.fromFields(AllowAllKey.bcs.parse(data));
    }

    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): AllowAllKey {
        return AllowAllKey.reified().new({ dummyField: decodeFromJSONField("bool", field.dummyField) });
    }

    static fromJSON(json: Record<string, any>): AllowAllKey {
        if (json.$typeName !== AllowAllKey.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return AllowAllKey.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): AllowAllKey {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isAllowAllKey(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a AllowAllKey object`);
        }
        return AllowAllKey.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<AllowAllKey> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching AllowAllKey object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isAllowAllKey(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AllowAllKey object`);
        }
        return AllowAllKey.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== RejectAllEvent =============================== */

export function isRejectAllEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1318fdc90319ec9c24df1456d960a447521b0a658316155895014a6e39b5482f::whitelist::RejectAllEvent";
}

export interface RejectAllEventFields {
    id: ToField<ID>;
}

export type RejectAllEventReified = Reified<RejectAllEvent, RejectAllEventFields>;

export class RejectAllEvent implements StructClass {
    static readonly $typeName = "0x1318fdc90319ec9c24df1456d960a447521b0a658316155895014a6e39b5482f::whitelist::RejectAllEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = RejectAllEvent.$typeName;

    readonly $fullTypeName: "0x1318fdc90319ec9c24df1456d960a447521b0a658316155895014a6e39b5482f::whitelist::RejectAllEvent";

    readonly $typeArgs: [];

    readonly id: ToField<ID>;

    private constructor(typeArgs: [], fields: RejectAllEventFields) {
        this.$fullTypeName = composeSuiType(
            RejectAllEvent.$typeName,
            ...typeArgs
        ) as "0x1318fdc90319ec9c24df1456d960a447521b0a658316155895014a6e39b5482f::whitelist::RejectAllEvent";
        this.$typeArgs = typeArgs;

        this.id = fields.id;
    }

    static reified(): RejectAllEventReified {
        return {
            typeName: RejectAllEvent.$typeName,
            fullTypeName: composeSuiType(
                RejectAllEvent.$typeName,
                ...[]
            ) as "0x1318fdc90319ec9c24df1456d960a447521b0a658316155895014a6e39b5482f::whitelist::RejectAllEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => RejectAllEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => RejectAllEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => RejectAllEvent.fromBcs(data),
            bcs: RejectAllEvent.bcs,
            fromJSONField: (field: any) => RejectAllEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => RejectAllEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => RejectAllEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => RejectAllEvent.fetch(client, id),
            new: (fields: RejectAllEventFields) => {
                return new RejectAllEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return RejectAllEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<RejectAllEvent>> {
        return phantom(RejectAllEvent.reified());
    }
    static get p() {
        return RejectAllEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("RejectAllEvent", {
            id: ID.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): RejectAllEvent {
        return RejectAllEvent.reified().new({ id: decodeFromFields(ID.reified(), fields.id) });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): RejectAllEvent {
        if (!isRejectAllEvent(item.type)) {
            throw new Error("not a RejectAllEvent type");
        }

        return RejectAllEvent.reified().new({ id: decodeFromFieldsWithTypes(ID.reified(), item.fields.id) });
    }

    static fromBcs(data: Uint8Array): RejectAllEvent {
        return RejectAllEvent.fromFields(RejectAllEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): RejectAllEvent {
        return RejectAllEvent.reified().new({ id: decodeFromJSONField(ID.reified(), field.id) });
    }

    static fromJSON(json: Record<string, any>): RejectAllEvent {
        if (json.$typeName !== RejectAllEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return RejectAllEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): RejectAllEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRejectAllEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a RejectAllEvent object`);
        }
        return RejectAllEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<RejectAllEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching RejectAllEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isRejectAllEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RejectAllEvent object`);
        }
        return RejectAllEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== RejectAllKey =============================== */

export function isRejectAllKey(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1318fdc90319ec9c24df1456d960a447521b0a658316155895014a6e39b5482f::whitelist::RejectAllKey";
}

export interface RejectAllKeyFields {
    dummyField: ToField<"bool">;
}

export type RejectAllKeyReified = Reified<RejectAllKey, RejectAllKeyFields>;

export class RejectAllKey implements StructClass {
    static readonly $typeName = "0x1318fdc90319ec9c24df1456d960a447521b0a658316155895014a6e39b5482f::whitelist::RejectAllKey";
    static readonly $numTypeParams = 0;

    readonly $typeName = RejectAllKey.$typeName;

    readonly $fullTypeName: "0x1318fdc90319ec9c24df1456d960a447521b0a658316155895014a6e39b5482f::whitelist::RejectAllKey";

    readonly $typeArgs: [];

    readonly dummyField: ToField<"bool">;

    private constructor(typeArgs: [], fields: RejectAllKeyFields) {
        this.$fullTypeName = composeSuiType(
            RejectAllKey.$typeName,
            ...typeArgs
        ) as "0x1318fdc90319ec9c24df1456d960a447521b0a658316155895014a6e39b5482f::whitelist::RejectAllKey";
        this.$typeArgs = typeArgs;

        this.dummyField = fields.dummyField;
    }

    static reified(): RejectAllKeyReified {
        return {
            typeName: RejectAllKey.$typeName,
            fullTypeName: composeSuiType(
                RejectAllKey.$typeName,
                ...[]
            ) as "0x1318fdc90319ec9c24df1456d960a447521b0a658316155895014a6e39b5482f::whitelist::RejectAllKey",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => RejectAllKey.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => RejectAllKey.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => RejectAllKey.fromBcs(data),
            bcs: RejectAllKey.bcs,
            fromJSONField: (field: any) => RejectAllKey.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => RejectAllKey.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => RejectAllKey.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => RejectAllKey.fetch(client, id),
            new: (fields: RejectAllKeyFields) => {
                return new RejectAllKey([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return RejectAllKey.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<RejectAllKey>> {
        return phantom(RejectAllKey.reified());
    }
    static get p() {
        return RejectAllKey.phantom();
    }

    static get bcs() {
        return bcs.struct("RejectAllKey", {
            dummy_field: bcs.bool(),
        });
    }

    static fromFields(fields: Record<string, any>): RejectAllKey {
        return RejectAllKey.reified().new({ dummyField: decodeFromFields("bool", fields.dummy_field) });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): RejectAllKey {
        if (!isRejectAllKey(item.type)) {
            throw new Error("not a RejectAllKey type");
        }

        return RejectAllKey.reified().new({ dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) });
    }

    static fromBcs(data: Uint8Array): RejectAllKey {
        return RejectAllKey.fromFields(RejectAllKey.bcs.parse(data));
    }

    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): RejectAllKey {
        return RejectAllKey.reified().new({ dummyField: decodeFromJSONField("bool", field.dummyField) });
    }

    static fromJSON(json: Record<string, any>): RejectAllKey {
        if (json.$typeName !== RejectAllKey.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return RejectAllKey.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): RejectAllKey {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRejectAllKey(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a RejectAllKey object`);
        }
        return RejectAllKey.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<RejectAllKey> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching RejectAllKey object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isRejectAllKey(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RejectAllKey object`);
        }
        return RejectAllKey.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== SwitchToWhitelistModeEvent =============================== */

export function isSwitchToWhitelistModeEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1318fdc90319ec9c24df1456d960a447521b0a658316155895014a6e39b5482f::whitelist::SwitchToWhitelistModeEvent";
}

export interface SwitchToWhitelistModeEventFields {
    id: ToField<ID>;
}

export type SwitchToWhitelistModeEventReified = Reified<SwitchToWhitelistModeEvent, SwitchToWhitelistModeEventFields>;

export class SwitchToWhitelistModeEvent implements StructClass {
    static readonly $typeName = "0x1318fdc90319ec9c24df1456d960a447521b0a658316155895014a6e39b5482f::whitelist::SwitchToWhitelistModeEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = SwitchToWhitelistModeEvent.$typeName;

    readonly $fullTypeName: "0x1318fdc90319ec9c24df1456d960a447521b0a658316155895014a6e39b5482f::whitelist::SwitchToWhitelistModeEvent";

    readonly $typeArgs: [];

    readonly id: ToField<ID>;

    private constructor(typeArgs: [], fields: SwitchToWhitelistModeEventFields) {
        this.$fullTypeName = composeSuiType(
            SwitchToWhitelistModeEvent.$typeName,
            ...typeArgs
        ) as "0x1318fdc90319ec9c24df1456d960a447521b0a658316155895014a6e39b5482f::whitelist::SwitchToWhitelistModeEvent";
        this.$typeArgs = typeArgs;

        this.id = fields.id;
    }

    static reified(): SwitchToWhitelistModeEventReified {
        return {
            typeName: SwitchToWhitelistModeEvent.$typeName,
            fullTypeName: composeSuiType(
                SwitchToWhitelistModeEvent.$typeName,
                ...[]
            ) as "0x1318fdc90319ec9c24df1456d960a447521b0a658316155895014a6e39b5482f::whitelist::SwitchToWhitelistModeEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => SwitchToWhitelistModeEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => SwitchToWhitelistModeEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => SwitchToWhitelistModeEvent.fromBcs(data),
            bcs: SwitchToWhitelistModeEvent.bcs,
            fromJSONField: (field: any) => SwitchToWhitelistModeEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => SwitchToWhitelistModeEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => SwitchToWhitelistModeEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => SwitchToWhitelistModeEvent.fetch(client, id),
            new: (fields: SwitchToWhitelistModeEventFields) => {
                return new SwitchToWhitelistModeEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return SwitchToWhitelistModeEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<SwitchToWhitelistModeEvent>> {
        return phantom(SwitchToWhitelistModeEvent.reified());
    }
    static get p() {
        return SwitchToWhitelistModeEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("SwitchToWhitelistModeEvent", {
            id: ID.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): SwitchToWhitelistModeEvent {
        return SwitchToWhitelistModeEvent.reified().new({ id: decodeFromFields(ID.reified(), fields.id) });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): SwitchToWhitelistModeEvent {
        if (!isSwitchToWhitelistModeEvent(item.type)) {
            throw new Error("not a SwitchToWhitelistModeEvent type");
        }

        return SwitchToWhitelistModeEvent.reified().new({ id: decodeFromFieldsWithTypes(ID.reified(), item.fields.id) });
    }

    static fromBcs(data: Uint8Array): SwitchToWhitelistModeEvent {
        return SwitchToWhitelistModeEvent.fromFields(SwitchToWhitelistModeEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): SwitchToWhitelistModeEvent {
        return SwitchToWhitelistModeEvent.reified().new({ id: decodeFromJSONField(ID.reified(), field.id) });
    }

    static fromJSON(json: Record<string, any>): SwitchToWhitelistModeEvent {
        if (json.$typeName !== SwitchToWhitelistModeEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return SwitchToWhitelistModeEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): SwitchToWhitelistModeEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isSwitchToWhitelistModeEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a SwitchToWhitelistModeEvent object`);
        }
        return SwitchToWhitelistModeEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<SwitchToWhitelistModeEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching SwitchToWhitelistModeEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isSwitchToWhitelistModeEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SwitchToWhitelistModeEvent object`);
        }
        return SwitchToWhitelistModeEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== WhitelistAddEvent =============================== */

export function isWhitelistAddEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1318fdc90319ec9c24df1456d960a447521b0a658316155895014a6e39b5482f::whitelist::WhitelistAddEvent";
}

export interface WhitelistAddEventFields {
    id: ToField<ID>;
    address: ToField<"address">;
}

export type WhitelistAddEventReified = Reified<WhitelistAddEvent, WhitelistAddEventFields>;

export class WhitelistAddEvent implements StructClass {
    static readonly $typeName = "0x1318fdc90319ec9c24df1456d960a447521b0a658316155895014a6e39b5482f::whitelist::WhitelistAddEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = WhitelistAddEvent.$typeName;

    readonly $fullTypeName: "0x1318fdc90319ec9c24df1456d960a447521b0a658316155895014a6e39b5482f::whitelist::WhitelistAddEvent";

    readonly $typeArgs: [];

    readonly id: ToField<ID>;
    readonly address: ToField<"address">;

    private constructor(typeArgs: [], fields: WhitelistAddEventFields) {
        this.$fullTypeName = composeSuiType(
            WhitelistAddEvent.$typeName,
            ...typeArgs
        ) as "0x1318fdc90319ec9c24df1456d960a447521b0a658316155895014a6e39b5482f::whitelist::WhitelistAddEvent";
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.address = fields.address;
    }

    static reified(): WhitelistAddEventReified {
        return {
            typeName: WhitelistAddEvent.$typeName,
            fullTypeName: composeSuiType(
                WhitelistAddEvent.$typeName,
                ...[]
            ) as "0x1318fdc90319ec9c24df1456d960a447521b0a658316155895014a6e39b5482f::whitelist::WhitelistAddEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => WhitelistAddEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => WhitelistAddEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => WhitelistAddEvent.fromBcs(data),
            bcs: WhitelistAddEvent.bcs,
            fromJSONField: (field: any) => WhitelistAddEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => WhitelistAddEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => WhitelistAddEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => WhitelistAddEvent.fetch(client, id),
            new: (fields: WhitelistAddEventFields) => {
                return new WhitelistAddEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return WhitelistAddEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<WhitelistAddEvent>> {
        return phantom(WhitelistAddEvent.reified());
    }
    static get p() {
        return WhitelistAddEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("WhitelistAddEvent", {
            id: ID.bcs,
            address: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
        });
    }

    static fromFields(fields: Record<string, any>): WhitelistAddEvent {
        return WhitelistAddEvent.reified().new({
            id: decodeFromFields(ID.reified(), fields.id),
            address: decodeFromFields("address", fields.address),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): WhitelistAddEvent {
        if (!isWhitelistAddEvent(item.type)) {
            throw new Error("not a WhitelistAddEvent type");
        }

        return WhitelistAddEvent.reified().new({
            id: decodeFromFieldsWithTypes(ID.reified(), item.fields.id),
            address: decodeFromFieldsWithTypes("address", item.fields.address),
        });
    }

    static fromBcs(data: Uint8Array): WhitelistAddEvent {
        return WhitelistAddEvent.fromFields(WhitelistAddEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            address: this.address,
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): WhitelistAddEvent {
        return WhitelistAddEvent.reified().new({
            id: decodeFromJSONField(ID.reified(), field.id),
            address: decodeFromJSONField("address", field.address),
        });
    }

    static fromJSON(json: Record<string, any>): WhitelistAddEvent {
        if (json.$typeName !== WhitelistAddEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return WhitelistAddEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): WhitelistAddEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isWhitelistAddEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a WhitelistAddEvent object`);
        }
        return WhitelistAddEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<WhitelistAddEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching WhitelistAddEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isWhitelistAddEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a WhitelistAddEvent object`);
        }
        return WhitelistAddEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== WhitelistKey =============================== */

export function isWhitelistKey(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1318fdc90319ec9c24df1456d960a447521b0a658316155895014a6e39b5482f::whitelist::WhitelistKey";
}

export interface WhitelistKeyFields {
    address: ToField<"address">;
}

export type WhitelistKeyReified = Reified<WhitelistKey, WhitelistKeyFields>;

export class WhitelistKey implements StructClass {
    static readonly $typeName = "0x1318fdc90319ec9c24df1456d960a447521b0a658316155895014a6e39b5482f::whitelist::WhitelistKey";
    static readonly $numTypeParams = 0;

    readonly $typeName = WhitelistKey.$typeName;

    readonly $fullTypeName: "0x1318fdc90319ec9c24df1456d960a447521b0a658316155895014a6e39b5482f::whitelist::WhitelistKey";

    readonly $typeArgs: [];

    readonly address: ToField<"address">;

    private constructor(typeArgs: [], fields: WhitelistKeyFields) {
        this.$fullTypeName = composeSuiType(
            WhitelistKey.$typeName,
            ...typeArgs
        ) as "0x1318fdc90319ec9c24df1456d960a447521b0a658316155895014a6e39b5482f::whitelist::WhitelistKey";
        this.$typeArgs = typeArgs;

        this.address = fields.address;
    }

    static reified(): WhitelistKeyReified {
        return {
            typeName: WhitelistKey.$typeName,
            fullTypeName: composeSuiType(
                WhitelistKey.$typeName,
                ...[]
            ) as "0x1318fdc90319ec9c24df1456d960a447521b0a658316155895014a6e39b5482f::whitelist::WhitelistKey",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => WhitelistKey.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => WhitelistKey.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => WhitelistKey.fromBcs(data),
            bcs: WhitelistKey.bcs,
            fromJSONField: (field: any) => WhitelistKey.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => WhitelistKey.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => WhitelistKey.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => WhitelistKey.fetch(client, id),
            new: (fields: WhitelistKeyFields) => {
                return new WhitelistKey([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return WhitelistKey.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<WhitelistKey>> {
        return phantom(WhitelistKey.reified());
    }
    static get p() {
        return WhitelistKey.phantom();
    }

    static get bcs() {
        return bcs.struct("WhitelistKey", {
            address: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
        });
    }

    static fromFields(fields: Record<string, any>): WhitelistKey {
        return WhitelistKey.reified().new({ address: decodeFromFields("address", fields.address) });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): WhitelistKey {
        if (!isWhitelistKey(item.type)) {
            throw new Error("not a WhitelistKey type");
        }

        return WhitelistKey.reified().new({ address: decodeFromFieldsWithTypes("address", item.fields.address) });
    }

    static fromBcs(data: Uint8Array): WhitelistKey {
        return WhitelistKey.fromFields(WhitelistKey.bcs.parse(data));
    }

    toJSONField() {
        return {
            address: this.address,
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): WhitelistKey {
        return WhitelistKey.reified().new({ address: decodeFromJSONField("address", field.address) });
    }

    static fromJSON(json: Record<string, any>): WhitelistKey {
        if (json.$typeName !== WhitelistKey.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return WhitelistKey.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): WhitelistKey {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isWhitelistKey(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a WhitelistKey object`);
        }
        return WhitelistKey.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<WhitelistKey> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching WhitelistKey object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isWhitelistKey(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a WhitelistKey object`);
        }
        return WhitelistKey.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== WhitelistRemoveEvent =============================== */

export function isWhitelistRemoveEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1318fdc90319ec9c24df1456d960a447521b0a658316155895014a6e39b5482f::whitelist::WhitelistRemoveEvent";
}

export interface WhitelistRemoveEventFields {
    id: ToField<ID>;
    address: ToField<"address">;
}

export type WhitelistRemoveEventReified = Reified<WhitelistRemoveEvent, WhitelistRemoveEventFields>;

export class WhitelistRemoveEvent implements StructClass {
    static readonly $typeName = "0x1318fdc90319ec9c24df1456d960a447521b0a658316155895014a6e39b5482f::whitelist::WhitelistRemoveEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = WhitelistRemoveEvent.$typeName;

    readonly $fullTypeName: "0x1318fdc90319ec9c24df1456d960a447521b0a658316155895014a6e39b5482f::whitelist::WhitelistRemoveEvent";

    readonly $typeArgs: [];

    readonly id: ToField<ID>;
    readonly address: ToField<"address">;

    private constructor(typeArgs: [], fields: WhitelistRemoveEventFields) {
        this.$fullTypeName = composeSuiType(
            WhitelistRemoveEvent.$typeName,
            ...typeArgs
        ) as "0x1318fdc90319ec9c24df1456d960a447521b0a658316155895014a6e39b5482f::whitelist::WhitelistRemoveEvent";
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.address = fields.address;
    }

    static reified(): WhitelistRemoveEventReified {
        return {
            typeName: WhitelistRemoveEvent.$typeName,
            fullTypeName: composeSuiType(
                WhitelistRemoveEvent.$typeName,
                ...[]
            ) as "0x1318fdc90319ec9c24df1456d960a447521b0a658316155895014a6e39b5482f::whitelist::WhitelistRemoveEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => WhitelistRemoveEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => WhitelistRemoveEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => WhitelistRemoveEvent.fromBcs(data),
            bcs: WhitelistRemoveEvent.bcs,
            fromJSONField: (field: any) => WhitelistRemoveEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => WhitelistRemoveEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => WhitelistRemoveEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => WhitelistRemoveEvent.fetch(client, id),
            new: (fields: WhitelistRemoveEventFields) => {
                return new WhitelistRemoveEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return WhitelistRemoveEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<WhitelistRemoveEvent>> {
        return phantom(WhitelistRemoveEvent.reified());
    }
    static get p() {
        return WhitelistRemoveEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("WhitelistRemoveEvent", {
            id: ID.bcs,
            address: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
        });
    }

    static fromFields(fields: Record<string, any>): WhitelistRemoveEvent {
        return WhitelistRemoveEvent.reified().new({
            id: decodeFromFields(ID.reified(), fields.id),
            address: decodeFromFields("address", fields.address),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): WhitelistRemoveEvent {
        if (!isWhitelistRemoveEvent(item.type)) {
            throw new Error("not a WhitelistRemoveEvent type");
        }

        return WhitelistRemoveEvent.reified().new({
            id: decodeFromFieldsWithTypes(ID.reified(), item.fields.id),
            address: decodeFromFieldsWithTypes("address", item.fields.address),
        });
    }

    static fromBcs(data: Uint8Array): WhitelistRemoveEvent {
        return WhitelistRemoveEvent.fromFields(WhitelistRemoveEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            address: this.address,
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): WhitelistRemoveEvent {
        return WhitelistRemoveEvent.reified().new({
            id: decodeFromJSONField(ID.reified(), field.id),
            address: decodeFromJSONField("address", field.address),
        });
    }

    static fromJSON(json: Record<string, any>): WhitelistRemoveEvent {
        if (json.$typeName !== WhitelistRemoveEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return WhitelistRemoveEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): WhitelistRemoveEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isWhitelistRemoveEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a WhitelistRemoveEvent object`);
        }
        return WhitelistRemoveEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<WhitelistRemoveEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching WhitelistRemoveEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isWhitelistRemoveEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a WhitelistRemoveEvent object`);
        }
        return WhitelistRemoveEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}
