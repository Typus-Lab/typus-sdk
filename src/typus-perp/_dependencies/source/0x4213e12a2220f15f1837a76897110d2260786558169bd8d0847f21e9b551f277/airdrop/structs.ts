import * as reified from "../../../../_framework/reified";
import {
    PhantomReified,
    PhantomToTypeStr,
    PhantomTypeArgument,
    Reified,
    StructClass,
    ToField,
    ToPhantomTypeArgument,
    ToTypeStr,
    assertFieldsWithTypesArgsMatch,
    assertReifiedTypeArgsMatch,
    decodeFromFields,
    decodeFromFieldsWithTypes,
    decodeFromJSONField,
    extractType,
    fieldToJSON,
    phantom,
} from "../../../../_framework/reified";
import { FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName } from "../../../../_framework/util";
import { Vector } from "../../../../_framework/vector";
import { String } from "../../0x1/ascii/structs";
import { TypeName } from "../../0x1/type-name/structs";
import { Balance } from "../../0x2/balance/structs";
import { UID } from "../../0x2/object/structs";
import { BigVector } from "../big-vector/structs";
import { PKG_V1 } from "../index";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromB64, fromHEX, toHEX } from "@mysten/sui/utils";

/* ============================== Airdrop =============================== */

export function isAirdrop(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::airdrop::Airdrop`;
}

export interface AirdropFields {
    user: ToField<"address">;
    value: ToField<"u64">;
}

export type AirdropReified = Reified<Airdrop, AirdropFields>;

export class Airdrop implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::airdrop::Airdrop`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = Airdrop.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::airdrop::Airdrop`;
    readonly $typeArgs: [];
    readonly $isPhantom = Airdrop.$isPhantom;

    readonly user: ToField<"address">;
    readonly value: ToField<"u64">;

    private constructor(typeArgs: [], fields: AirdropFields) {
        this.$fullTypeName = composeSuiType(Airdrop.$typeName, ...typeArgs) as `${typeof PKG_V1}::airdrop::Airdrop`;
        this.$typeArgs = typeArgs;

        this.user = fields.user;
        this.value = fields.value;
    }

    static reified(): AirdropReified {
        return {
            typeName: Airdrop.$typeName,
            fullTypeName: composeSuiType(Airdrop.$typeName, ...[]) as `${typeof PKG_V1}::airdrop::Airdrop`,
            typeArgs: [] as [],
            isPhantom: Airdrop.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Airdrop.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Airdrop.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Airdrop.fromBcs(data),
            bcs: Airdrop.bcs,
            fromJSONField: (field: any) => Airdrop.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Airdrop.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Airdrop.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => Airdrop.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => Airdrop.fetch(client, id),
            new: (fields: AirdropFields) => {
                return new Airdrop([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Airdrop.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<Airdrop>> {
        return phantom(Airdrop.reified());
    }
    static get p() {
        return Airdrop.phantom();
    }

    static get bcs() {
        return bcs.struct("Airdrop", {
            user: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            value: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): Airdrop {
        return Airdrop.reified().new({
            user: decodeFromFields("address", fields.user),
            value: decodeFromFields("u64", fields.value),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Airdrop {
        if (!isAirdrop(item.type)) {
            throw new Error("not a Airdrop type");
        }

        return Airdrop.reified().new({
            user: decodeFromFieldsWithTypes("address", item.fields.user),
            value: decodeFromFieldsWithTypes("u64", item.fields.value),
        });
    }

    static fromBcs(data: Uint8Array): Airdrop {
        return Airdrop.fromFields(Airdrop.bcs.parse(data));
    }

    toJSONField() {
        return {
            user: this.user,
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

    static fromJSONField(field: any): Airdrop {
        return Airdrop.reified().new({
            user: decodeFromJSONField("address", field.user),
            value: decodeFromJSONField("u64", field.value),
        });
    }

    static fromJSON(json: Record<string, any>): Airdrop {
        if (json.$typeName !== Airdrop.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return Airdrop.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): Airdrop {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isAirdrop(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Airdrop object`);
        }
        return Airdrop.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): Airdrop {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isAirdrop(data.bcs.type)) {
                throw new Error(`object at is not a Airdrop object`);
            }

            return Airdrop.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Airdrop.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<Airdrop> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Airdrop object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isAirdrop(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Airdrop object`);
        }

        return Airdrop.fromSuiObjectData(res.data);
    }
}

/* ============================== AirdropInfo =============================== */

export function isAirdropInfo(type: string): boolean {
    type = compressSuiType(type);
    return type.startsWith(`${PKG_V1}::airdrop::AirdropInfo` + "<");
}

export interface AirdropInfoFields<TOKEN extends PhantomTypeArgument> {
    id: ToField<UID>;
    balance: ToField<Balance<TOKEN>>;
    airdrops: ToField<BigVector>;
}

export type AirdropInfoReified<TOKEN extends PhantomTypeArgument> = Reified<AirdropInfo<TOKEN>, AirdropInfoFields<TOKEN>>;

export class AirdropInfo<TOKEN extends PhantomTypeArgument> implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::airdrop::AirdropInfo`;
    static readonly $numTypeParams = 1;
    static readonly $isPhantom = [true] as const;

    readonly $typeName = AirdropInfo.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::airdrop::AirdropInfo<${PhantomToTypeStr<TOKEN>}>`;
    readonly $typeArgs: [PhantomToTypeStr<TOKEN>];
    readonly $isPhantom = AirdropInfo.$isPhantom;

    readonly id: ToField<UID>;
    readonly balance: ToField<Balance<TOKEN>>;
    readonly airdrops: ToField<BigVector>;

    private constructor(typeArgs: [PhantomToTypeStr<TOKEN>], fields: AirdropInfoFields<TOKEN>) {
        this.$fullTypeName = composeSuiType(
            AirdropInfo.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::airdrop::AirdropInfo<${PhantomToTypeStr<TOKEN>}>`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.balance = fields.balance;
        this.airdrops = fields.airdrops;
    }

    static reified<TOKEN extends PhantomReified<PhantomTypeArgument>>(TOKEN: TOKEN): AirdropInfoReified<ToPhantomTypeArgument<TOKEN>> {
        return {
            typeName: AirdropInfo.$typeName,
            fullTypeName: composeSuiType(
                AirdropInfo.$typeName,
                ...[extractType(TOKEN)]
            ) as `${typeof PKG_V1}::airdrop::AirdropInfo<${PhantomToTypeStr<ToPhantomTypeArgument<TOKEN>>}>`,
            typeArgs: [extractType(TOKEN)] as [PhantomToTypeStr<ToPhantomTypeArgument<TOKEN>>],
            isPhantom: AirdropInfo.$isPhantom,
            reifiedTypeArgs: [TOKEN],
            fromFields: (fields: Record<string, any>) => AirdropInfo.fromFields(TOKEN, fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => AirdropInfo.fromFieldsWithTypes(TOKEN, item),
            fromBcs: (data: Uint8Array) => AirdropInfo.fromBcs(TOKEN, data),
            bcs: AirdropInfo.bcs,
            fromJSONField: (field: any) => AirdropInfo.fromJSONField(TOKEN, field),
            fromJSON: (json: Record<string, any>) => AirdropInfo.fromJSON(TOKEN, json),
            fromSuiParsedData: (content: SuiParsedData) => AirdropInfo.fromSuiParsedData(TOKEN, content),
            fromSuiObjectData: (content: SuiObjectData) => AirdropInfo.fromSuiObjectData(TOKEN, content),
            fetch: async (client: SuiClient, id: string) => AirdropInfo.fetch(client, TOKEN, id),
            new: (fields: AirdropInfoFields<ToPhantomTypeArgument<TOKEN>>) => {
                return new AirdropInfo([extractType(TOKEN)], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return AirdropInfo.reified;
    }

    static phantom<TOKEN extends PhantomReified<PhantomTypeArgument>>(
        TOKEN: TOKEN
    ): PhantomReified<ToTypeStr<AirdropInfo<ToPhantomTypeArgument<TOKEN>>>> {
        return phantom(AirdropInfo.reified(TOKEN));
    }
    static get p() {
        return AirdropInfo.phantom;
    }

    static get bcs() {
        return bcs.struct("AirdropInfo", {
            id: UID.bcs,
            balance: Balance.bcs,
            airdrops: BigVector.bcs,
        });
    }

    static fromFields<TOKEN extends PhantomReified<PhantomTypeArgument>>(
        typeArg: TOKEN,
        fields: Record<string, any>
    ): AirdropInfo<ToPhantomTypeArgument<TOKEN>> {
        return AirdropInfo.reified(typeArg).new({
            id: decodeFromFields(UID.reified(), fields.id),
            balance: decodeFromFields(Balance.reified(typeArg), fields.balance),
            airdrops: decodeFromFields(BigVector.reified(), fields.airdrops),
        });
    }

    static fromFieldsWithTypes<TOKEN extends PhantomReified<PhantomTypeArgument>>(
        typeArg: TOKEN,
        item: FieldsWithTypes
    ): AirdropInfo<ToPhantomTypeArgument<TOKEN>> {
        if (!isAirdropInfo(item.type)) {
            throw new Error("not a AirdropInfo type");
        }
        assertFieldsWithTypesArgsMatch(item, [typeArg]);

        return AirdropInfo.reified(typeArg).new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            balance: decodeFromFieldsWithTypes(Balance.reified(typeArg), item.fields.balance),
            airdrops: decodeFromFieldsWithTypes(BigVector.reified(), item.fields.airdrops),
        });
    }

    static fromBcs<TOKEN extends PhantomReified<PhantomTypeArgument>>(
        typeArg: TOKEN,
        data: Uint8Array
    ): AirdropInfo<ToPhantomTypeArgument<TOKEN>> {
        return AirdropInfo.fromFields(typeArg, AirdropInfo.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            balance: this.balance.toJSONField(),
            airdrops: this.airdrops.toJSONField(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField<TOKEN extends PhantomReified<PhantomTypeArgument>>(
        typeArg: TOKEN,
        field: any
    ): AirdropInfo<ToPhantomTypeArgument<TOKEN>> {
        return AirdropInfo.reified(typeArg).new({
            id: decodeFromJSONField(UID.reified(), field.id),
            balance: decodeFromJSONField(Balance.reified(typeArg), field.balance),
            airdrops: decodeFromJSONField(BigVector.reified(), field.airdrops),
        });
    }

    static fromJSON<TOKEN extends PhantomReified<PhantomTypeArgument>>(
        typeArg: TOKEN,
        json: Record<string, any>
    ): AirdropInfo<ToPhantomTypeArgument<TOKEN>> {
        if (json.$typeName !== AirdropInfo.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        assertReifiedTypeArgsMatch(composeSuiType(AirdropInfo.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg]);

        return AirdropInfo.fromJSONField(typeArg, json);
    }

    static fromSuiParsedData<TOKEN extends PhantomReified<PhantomTypeArgument>>(
        typeArg: TOKEN,
        content: SuiParsedData
    ): AirdropInfo<ToPhantomTypeArgument<TOKEN>> {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isAirdropInfo(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a AirdropInfo object`);
        }
        return AirdropInfo.fromFieldsWithTypes(typeArg, content);
    }

    static fromSuiObjectData<TOKEN extends PhantomReified<PhantomTypeArgument>>(
        typeArg: TOKEN,
        data: SuiObjectData
    ): AirdropInfo<ToPhantomTypeArgument<TOKEN>> {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isAirdropInfo(data.bcs.type)) {
                throw new Error(`object at is not a AirdropInfo object`);
            }

            const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
            if (gotTypeArgs.length !== 1) {
                throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`);
            }
            const gotTypeArg = compressSuiType(gotTypeArgs[0]);
            const expectedTypeArg = compressSuiType(extractType(typeArg));
            if (gotTypeArg !== compressSuiType(extractType(typeArg))) {
                throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`);
            }

            return AirdropInfo.fromBcs(typeArg, fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return AirdropInfo.fromSuiParsedData(typeArg, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch<TOKEN extends PhantomReified<PhantomTypeArgument>>(
        client: SuiClient,
        typeArg: TOKEN,
        id: string
    ): Promise<AirdropInfo<ToPhantomTypeArgument<TOKEN>>> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching AirdropInfo object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isAirdropInfo(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AirdropInfo object`);
        }

        return AirdropInfo.fromSuiObjectData(typeArg, res.data);
    }
}

/* ============================== ClaimAirdropEvent =============================== */

export function isClaimAirdropEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::airdrop::ClaimAirdropEvent`;
}

export interface ClaimAirdropEventFields {
    token: ToField<TypeName>;
    key: ToField<String>;
    user: ToField<"address">;
    log: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<Vector<"u8">>>;
}

export type ClaimAirdropEventReified = Reified<ClaimAirdropEvent, ClaimAirdropEventFields>;

export class ClaimAirdropEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::airdrop::ClaimAirdropEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = ClaimAirdropEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::airdrop::ClaimAirdropEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = ClaimAirdropEvent.$isPhantom;

    readonly token: ToField<TypeName>;
    readonly key: ToField<String>;
    readonly user: ToField<"address">;
    readonly log: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<Vector<"u8">>>;

    private constructor(typeArgs: [], fields: ClaimAirdropEventFields) {
        this.$fullTypeName = composeSuiType(ClaimAirdropEvent.$typeName, ...typeArgs) as `${typeof PKG_V1}::airdrop::ClaimAirdropEvent`;
        this.$typeArgs = typeArgs;

        this.token = fields.token;
        this.key = fields.key;
        this.user = fields.user;
        this.log = fields.log;
        this.bcsPadding = fields.bcsPadding;
    }

    static reified(): ClaimAirdropEventReified {
        return {
            typeName: ClaimAirdropEvent.$typeName,
            fullTypeName: composeSuiType(ClaimAirdropEvent.$typeName, ...[]) as `${typeof PKG_V1}::airdrop::ClaimAirdropEvent`,
            typeArgs: [] as [],
            isPhantom: ClaimAirdropEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => ClaimAirdropEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => ClaimAirdropEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => ClaimAirdropEvent.fromBcs(data),
            bcs: ClaimAirdropEvent.bcs,
            fromJSONField: (field: any) => ClaimAirdropEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => ClaimAirdropEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => ClaimAirdropEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => ClaimAirdropEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => ClaimAirdropEvent.fetch(client, id),
            new: (fields: ClaimAirdropEventFields) => {
                return new ClaimAirdropEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return ClaimAirdropEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<ClaimAirdropEvent>> {
        return phantom(ClaimAirdropEvent.reified());
    }
    static get p() {
        return ClaimAirdropEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("ClaimAirdropEvent", {
            token: TypeName.bcs,
            key: String.bcs,
            user: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            log: bcs.vector(bcs.u64()),
            bcs_padding: bcs.vector(bcs.vector(bcs.u8())),
        });
    }

    static fromFields(fields: Record<string, any>): ClaimAirdropEvent {
        return ClaimAirdropEvent.reified().new({
            token: decodeFromFields(TypeName.reified(), fields.token),
            key: decodeFromFields(String.reified(), fields.key),
            user: decodeFromFields("address", fields.user),
            log: decodeFromFields(reified.vector("u64"), fields.log),
            bcsPadding: decodeFromFields(reified.vector(reified.vector("u8")), fields.bcs_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): ClaimAirdropEvent {
        if (!isClaimAirdropEvent(item.type)) {
            throw new Error("not a ClaimAirdropEvent type");
        }

        return ClaimAirdropEvent.reified().new({
            token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token),
            key: decodeFromFieldsWithTypes(String.reified(), item.fields.key),
            user: decodeFromFieldsWithTypes("address", item.fields.user),
            log: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.log),
            bcsPadding: decodeFromFieldsWithTypes(reified.vector(reified.vector("u8")), item.fields.bcs_padding),
        });
    }

    static fromBcs(data: Uint8Array): ClaimAirdropEvent {
        return ClaimAirdropEvent.fromFields(ClaimAirdropEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            token: this.token.toJSONField(),
            key: this.key,
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

    static fromJSONField(field: any): ClaimAirdropEvent {
        return ClaimAirdropEvent.reified().new({
            token: decodeFromJSONField(TypeName.reified(), field.token),
            key: decodeFromJSONField(String.reified(), field.key),
            user: decodeFromJSONField("address", field.user),
            log: decodeFromJSONField(reified.vector("u64"), field.log),
            bcsPadding: decodeFromJSONField(reified.vector(reified.vector("u8")), field.bcsPadding),
        });
    }

    static fromJSON(json: Record<string, any>): ClaimAirdropEvent {
        if (json.$typeName !== ClaimAirdropEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return ClaimAirdropEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): ClaimAirdropEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isClaimAirdropEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a ClaimAirdropEvent object`);
        }
        return ClaimAirdropEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): ClaimAirdropEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isClaimAirdropEvent(data.bcs.type)) {
                throw new Error(`object at is not a ClaimAirdropEvent object`);
            }

            return ClaimAirdropEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ClaimAirdropEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<ClaimAirdropEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching ClaimAirdropEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isClaimAirdropEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ClaimAirdropEvent object`);
        }

        return ClaimAirdropEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== RemoveAirdropEvent =============================== */

export function isRemoveAirdropEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::airdrop::RemoveAirdropEvent`;
}

export interface RemoveAirdropEventFields {
    token: ToField<TypeName>;
    key: ToField<String>;
    log: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<Vector<"u8">>>;
}

export type RemoveAirdropEventReified = Reified<RemoveAirdropEvent, RemoveAirdropEventFields>;

export class RemoveAirdropEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::airdrop::RemoveAirdropEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = RemoveAirdropEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::airdrop::RemoveAirdropEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = RemoveAirdropEvent.$isPhantom;

    readonly token: ToField<TypeName>;
    readonly key: ToField<String>;
    readonly log: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<Vector<"u8">>>;

    private constructor(typeArgs: [], fields: RemoveAirdropEventFields) {
        this.$fullTypeName = composeSuiType(RemoveAirdropEvent.$typeName, ...typeArgs) as `${typeof PKG_V1}::airdrop::RemoveAirdropEvent`;
        this.$typeArgs = typeArgs;

        this.token = fields.token;
        this.key = fields.key;
        this.log = fields.log;
        this.bcsPadding = fields.bcsPadding;
    }

    static reified(): RemoveAirdropEventReified {
        return {
            typeName: RemoveAirdropEvent.$typeName,
            fullTypeName: composeSuiType(RemoveAirdropEvent.$typeName, ...[]) as `${typeof PKG_V1}::airdrop::RemoveAirdropEvent`,
            typeArgs: [] as [],
            isPhantom: RemoveAirdropEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => RemoveAirdropEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => RemoveAirdropEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => RemoveAirdropEvent.fromBcs(data),
            bcs: RemoveAirdropEvent.bcs,
            fromJSONField: (field: any) => RemoveAirdropEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => RemoveAirdropEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => RemoveAirdropEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => RemoveAirdropEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => RemoveAirdropEvent.fetch(client, id),
            new: (fields: RemoveAirdropEventFields) => {
                return new RemoveAirdropEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return RemoveAirdropEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<RemoveAirdropEvent>> {
        return phantom(RemoveAirdropEvent.reified());
    }
    static get p() {
        return RemoveAirdropEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("RemoveAirdropEvent", {
            token: TypeName.bcs,
            key: String.bcs,
            log: bcs.vector(bcs.u64()),
            bcs_padding: bcs.vector(bcs.vector(bcs.u8())),
        });
    }

    static fromFields(fields: Record<string, any>): RemoveAirdropEvent {
        return RemoveAirdropEvent.reified().new({
            token: decodeFromFields(TypeName.reified(), fields.token),
            key: decodeFromFields(String.reified(), fields.key),
            log: decodeFromFields(reified.vector("u64"), fields.log),
            bcsPadding: decodeFromFields(reified.vector(reified.vector("u8")), fields.bcs_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): RemoveAirdropEvent {
        if (!isRemoveAirdropEvent(item.type)) {
            throw new Error("not a RemoveAirdropEvent type");
        }

        return RemoveAirdropEvent.reified().new({
            token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token),
            key: decodeFromFieldsWithTypes(String.reified(), item.fields.key),
            log: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.log),
            bcsPadding: decodeFromFieldsWithTypes(reified.vector(reified.vector("u8")), item.fields.bcs_padding),
        });
    }

    static fromBcs(data: Uint8Array): RemoveAirdropEvent {
        return RemoveAirdropEvent.fromFields(RemoveAirdropEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            token: this.token.toJSONField(),
            key: this.key,
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

    static fromJSONField(field: any): RemoveAirdropEvent {
        return RemoveAirdropEvent.reified().new({
            token: decodeFromJSONField(TypeName.reified(), field.token),
            key: decodeFromJSONField(String.reified(), field.key),
            log: decodeFromJSONField(reified.vector("u64"), field.log),
            bcsPadding: decodeFromJSONField(reified.vector(reified.vector("u8")), field.bcsPadding),
        });
    }

    static fromJSON(json: Record<string, any>): RemoveAirdropEvent {
        if (json.$typeName !== RemoveAirdropEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return RemoveAirdropEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): RemoveAirdropEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRemoveAirdropEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a RemoveAirdropEvent object`);
        }
        return RemoveAirdropEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): RemoveAirdropEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isRemoveAirdropEvent(data.bcs.type)) {
                throw new Error(`object at is not a RemoveAirdropEvent object`);
            }

            return RemoveAirdropEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return RemoveAirdropEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<RemoveAirdropEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching RemoveAirdropEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isRemoveAirdropEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RemoveAirdropEvent object`);
        }

        return RemoveAirdropEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== SetAirdropEvent =============================== */

export function isSetAirdropEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::airdrop::SetAirdropEvent`;
}

export interface SetAirdropEventFields {
    token: ToField<TypeName>;
    key: ToField<String>;
    log: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<Vector<"u8">>>;
}

export type SetAirdropEventReified = Reified<SetAirdropEvent, SetAirdropEventFields>;

export class SetAirdropEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::airdrop::SetAirdropEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = SetAirdropEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::airdrop::SetAirdropEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = SetAirdropEvent.$isPhantom;

    readonly token: ToField<TypeName>;
    readonly key: ToField<String>;
    readonly log: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<Vector<"u8">>>;

    private constructor(typeArgs: [], fields: SetAirdropEventFields) {
        this.$fullTypeName = composeSuiType(SetAirdropEvent.$typeName, ...typeArgs) as `${typeof PKG_V1}::airdrop::SetAirdropEvent`;
        this.$typeArgs = typeArgs;

        this.token = fields.token;
        this.key = fields.key;
        this.log = fields.log;
        this.bcsPadding = fields.bcsPadding;
    }

    static reified(): SetAirdropEventReified {
        return {
            typeName: SetAirdropEvent.$typeName,
            fullTypeName: composeSuiType(SetAirdropEvent.$typeName, ...[]) as `${typeof PKG_V1}::airdrop::SetAirdropEvent`,
            typeArgs: [] as [],
            isPhantom: SetAirdropEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => SetAirdropEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => SetAirdropEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => SetAirdropEvent.fromBcs(data),
            bcs: SetAirdropEvent.bcs,
            fromJSONField: (field: any) => SetAirdropEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => SetAirdropEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => SetAirdropEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => SetAirdropEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => SetAirdropEvent.fetch(client, id),
            new: (fields: SetAirdropEventFields) => {
                return new SetAirdropEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return SetAirdropEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<SetAirdropEvent>> {
        return phantom(SetAirdropEvent.reified());
    }
    static get p() {
        return SetAirdropEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("SetAirdropEvent", {
            token: TypeName.bcs,
            key: String.bcs,
            log: bcs.vector(bcs.u64()),
            bcs_padding: bcs.vector(bcs.vector(bcs.u8())),
        });
    }

    static fromFields(fields: Record<string, any>): SetAirdropEvent {
        return SetAirdropEvent.reified().new({
            token: decodeFromFields(TypeName.reified(), fields.token),
            key: decodeFromFields(String.reified(), fields.key),
            log: decodeFromFields(reified.vector("u64"), fields.log),
            bcsPadding: decodeFromFields(reified.vector(reified.vector("u8")), fields.bcs_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): SetAirdropEvent {
        if (!isSetAirdropEvent(item.type)) {
            throw new Error("not a SetAirdropEvent type");
        }

        return SetAirdropEvent.reified().new({
            token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token),
            key: decodeFromFieldsWithTypes(String.reified(), item.fields.key),
            log: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.log),
            bcsPadding: decodeFromFieldsWithTypes(reified.vector(reified.vector("u8")), item.fields.bcs_padding),
        });
    }

    static fromBcs(data: Uint8Array): SetAirdropEvent {
        return SetAirdropEvent.fromFields(SetAirdropEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            token: this.token.toJSONField(),
            key: this.key,
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

    static fromJSONField(field: any): SetAirdropEvent {
        return SetAirdropEvent.reified().new({
            token: decodeFromJSONField(TypeName.reified(), field.token),
            key: decodeFromJSONField(String.reified(), field.key),
            log: decodeFromJSONField(reified.vector("u64"), field.log),
            bcsPadding: decodeFromJSONField(reified.vector(reified.vector("u8")), field.bcsPadding),
        });
    }

    static fromJSON(json: Record<string, any>): SetAirdropEvent {
        if (json.$typeName !== SetAirdropEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return SetAirdropEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): SetAirdropEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isSetAirdropEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a SetAirdropEvent object`);
        }
        return SetAirdropEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): SetAirdropEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isSetAirdropEvent(data.bcs.type)) {
                throw new Error(`object at is not a SetAirdropEvent object`);
            }

            return SetAirdropEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return SetAirdropEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<SetAirdropEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching SetAirdropEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isSetAirdropEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SetAirdropEvent object`);
        }

        return SetAirdropEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== TypusAirdropRegistry =============================== */

export function isTypusAirdropRegistry(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::airdrop::TypusAirdropRegistry`;
}

export interface TypusAirdropRegistryFields {
    id: ToField<UID>;
}

export type TypusAirdropRegistryReified = Reified<TypusAirdropRegistry, TypusAirdropRegistryFields>;

export class TypusAirdropRegistry implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::airdrop::TypusAirdropRegistry`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = TypusAirdropRegistry.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::airdrop::TypusAirdropRegistry`;
    readonly $typeArgs: [];
    readonly $isPhantom = TypusAirdropRegistry.$isPhantom;

    readonly id: ToField<UID>;

    private constructor(typeArgs: [], fields: TypusAirdropRegistryFields) {
        this.$fullTypeName = composeSuiType(
            TypusAirdropRegistry.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::airdrop::TypusAirdropRegistry`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
    }

    static reified(): TypusAirdropRegistryReified {
        return {
            typeName: TypusAirdropRegistry.$typeName,
            fullTypeName: composeSuiType(TypusAirdropRegistry.$typeName, ...[]) as `${typeof PKG_V1}::airdrop::TypusAirdropRegistry`,
            typeArgs: [] as [],
            isPhantom: TypusAirdropRegistry.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => TypusAirdropRegistry.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => TypusAirdropRegistry.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => TypusAirdropRegistry.fromBcs(data),
            bcs: TypusAirdropRegistry.bcs,
            fromJSONField: (field: any) => TypusAirdropRegistry.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => TypusAirdropRegistry.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => TypusAirdropRegistry.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => TypusAirdropRegistry.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => TypusAirdropRegistry.fetch(client, id),
            new: (fields: TypusAirdropRegistryFields) => {
                return new TypusAirdropRegistry([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return TypusAirdropRegistry.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<TypusAirdropRegistry>> {
        return phantom(TypusAirdropRegistry.reified());
    }
    static get p() {
        return TypusAirdropRegistry.phantom();
    }

    static get bcs() {
        return bcs.struct("TypusAirdropRegistry", {
            id: UID.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): TypusAirdropRegistry {
        return TypusAirdropRegistry.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): TypusAirdropRegistry {
        if (!isTypusAirdropRegistry(item.type)) {
            throw new Error("not a TypusAirdropRegistry type");
        }

        return TypusAirdropRegistry.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
        });
    }

    static fromBcs(data: Uint8Array): TypusAirdropRegistry {
        return TypusAirdropRegistry.fromFields(TypusAirdropRegistry.bcs.parse(data));
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

    static fromJSONField(field: any): TypusAirdropRegistry {
        return TypusAirdropRegistry.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
        });
    }

    static fromJSON(json: Record<string, any>): TypusAirdropRegistry {
        if (json.$typeName !== TypusAirdropRegistry.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return TypusAirdropRegistry.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): TypusAirdropRegistry {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isTypusAirdropRegistry(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a TypusAirdropRegistry object`);
        }
        return TypusAirdropRegistry.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): TypusAirdropRegistry {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isTypusAirdropRegistry(data.bcs.type)) {
                throw new Error(`object at is not a TypusAirdropRegistry object`);
            }

            return TypusAirdropRegistry.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return TypusAirdropRegistry.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<TypusAirdropRegistry> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching TypusAirdropRegistry object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isTypusAirdropRegistry(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TypusAirdropRegistry object`);
        }

        return TypusAirdropRegistry.fromSuiObjectData(res.data);
    }
}
