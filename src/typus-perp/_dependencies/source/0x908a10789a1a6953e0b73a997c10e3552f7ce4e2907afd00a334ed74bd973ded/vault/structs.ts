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
import { Option } from "../../0x1/option/structs";
import { String } from "../../0x1/string/structs";
import { TypeName } from "../../0x1/type-name/structs";
import { ID, UID } from "../../0x2/object/structs";
import { PKG_V1 } from "../index";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromB64, fromHEX, toHEX } from "@mysten/sui/utils";

/* ============================== Activate =============================== */

export function isActivate(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::vault::Activate`;
}

export interface ActivateFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
    hasNext: ToField<"bool">;
}

export type ActivateReified = Reified<Activate, ActivateFields>;

export class Activate implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::vault::Activate`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = Activate.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::vault::Activate`;
    readonly $typeArgs: [];
    readonly $isPhantom = Activate.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;
    readonly hasNext: ToField<"bool">;

    private constructor(typeArgs: [], fields: ActivateFields) {
        this.$fullTypeName = composeSuiType(Activate.$typeName, ...typeArgs) as `${typeof PKG_V1}::vault::Activate`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.token = fields.token;
        this.amount = fields.amount;
        this.hasNext = fields.hasNext;
    }

    static reified(): ActivateReified {
        return {
            typeName: Activate.$typeName,
            fullTypeName: composeSuiType(Activate.$typeName, ...[]) as `${typeof PKG_V1}::vault::Activate`,
            typeArgs: [] as [],
            isPhantom: Activate.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Activate.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Activate.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Activate.fromBcs(data),
            bcs: Activate.bcs,
            fromJSONField: (field: any) => Activate.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Activate.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Activate.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => Activate.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => Activate.fetch(client, id),
            new: (fields: ActivateFields) => {
                return new Activate([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Activate.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<Activate>> {
        return phantom(Activate.reified());
    }
    static get p() {
        return Activate.phantom();
    }

    static get bcs() {
        return bcs.struct("Activate", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            token: TypeName.bcs,
            amount: bcs.u64(),
            has_next: bcs.bool(),
        });
    }

    static fromFields(fields: Record<string, any>): Activate {
        return Activate.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            token: decodeFromFields(TypeName.reified(), fields.token),
            amount: decodeFromFields("u64", fields.amount),
            hasNext: decodeFromFields("bool", fields.has_next),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Activate {
        if (!isActivate(item.type)) {
            throw new Error("not a Activate type");
        }

        return Activate.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token),
            amount: decodeFromFieldsWithTypes("u64", item.fields.amount),
            hasNext: decodeFromFieldsWithTypes("bool", item.fields.has_next),
        });
    }

    static fromBcs(data: Uint8Array): Activate {
        return Activate.fromFields(Activate.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            token: this.token.toJSONField(),
            amount: this.amount.toString(),
            hasNext: this.hasNext,
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): Activate {
        return Activate.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            token: decodeFromJSONField(TypeName.reified(), field.token),
            amount: decodeFromJSONField("u64", field.amount),
            hasNext: decodeFromJSONField("bool", field.hasNext),
        });
    }

    static fromJSON(json: Record<string, any>): Activate {
        if (json.$typeName !== Activate.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return Activate.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): Activate {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isActivate(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Activate object`);
        }
        return Activate.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): Activate {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isActivate(data.bcs.type)) {
                throw new Error(`object at is not a Activate object`);
            }

            return Activate.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Activate.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<Activate> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Activate object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isActivate(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Activate object`);
        }

        return Activate.fromSuiObjectData(res.data);
    }
}

/* ============================== BidShare =============================== */

export function isBidShare(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::vault::BidShare`;
}

export interface BidShareFields {
    receipt: ToField<"address">;
    share: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type BidShareReified = Reified<BidShare, BidShareFields>;

export class BidShare implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::vault::BidShare`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = BidShare.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::vault::BidShare`;
    readonly $typeArgs: [];
    readonly $isPhantom = BidShare.$isPhantom;

    readonly receipt: ToField<"address">;
    readonly share: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: BidShareFields) {
        this.$fullTypeName = composeSuiType(BidShare.$typeName, ...typeArgs) as `${typeof PKG_V1}::vault::BidShare`;
        this.$typeArgs = typeArgs;

        this.receipt = fields.receipt;
        this.share = fields.share;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): BidShareReified {
        return {
            typeName: BidShare.$typeName,
            fullTypeName: composeSuiType(BidShare.$typeName, ...[]) as `${typeof PKG_V1}::vault::BidShare`,
            typeArgs: [] as [],
            isPhantom: BidShare.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => BidShare.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => BidShare.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => BidShare.fromBcs(data),
            bcs: BidShare.bcs,
            fromJSONField: (field: any) => BidShare.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => BidShare.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => BidShare.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => BidShare.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => BidShare.fetch(client, id),
            new: (fields: BidShareFields) => {
                return new BidShare([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return BidShare.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<BidShare>> {
        return phantom(BidShare.reified());
    }
    static get p() {
        return BidShare.phantom();
    }

    static get bcs() {
        return bcs.struct("BidShare", {
            receipt: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            share: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): BidShare {
        return BidShare.reified().new({
            receipt: decodeFromFields("address", fields.receipt),
            share: decodeFromFields("u64", fields.share),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): BidShare {
        if (!isBidShare(item.type)) {
            throw new Error("not a BidShare type");
        }

        return BidShare.reified().new({
            receipt: decodeFromFieldsWithTypes("address", item.fields.receipt),
            share: decodeFromFieldsWithTypes("u64", item.fields.share),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): BidShare {
        return BidShare.fromFields(BidShare.bcs.parse(data));
    }

    toJSONField() {
        return {
            receipt: this.receipt,
            share: this.share.toString(),
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

    static fromJSONField(field: any): BidShare {
        return BidShare.reified().new({
            receipt: decodeFromJSONField("address", field.receipt),
            share: decodeFromJSONField("u64", field.share),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): BidShare {
        if (json.$typeName !== BidShare.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return BidShare.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): BidShare {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isBidShare(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a BidShare object`);
        }
        return BidShare.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): BidShare {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBidShare(data.bcs.type)) {
                throw new Error(`object at is not a BidShare object`);
            }

            return BidShare.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return BidShare.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<BidShare> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching BidShare object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isBidShare(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BidShare object`);
        }

        return BidShare.fromSuiObjectData(res.data);
    }
}

/* ============================== BidVault =============================== */

export function isBidVault(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::vault::BidVault`;
}

export interface BidVaultFields {
    id: ToField<UID>;
    depositToken: ToField<TypeName>;
    bidToken: ToField<TypeName>;
    incentiveToken: ToField<Option<TypeName>>;
    index: ToField<"u64">;
    shareSupply: ToField<"u64">;
    metadata: ToField<String>;
    u64Padding: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<"u8">>;
}

export type BidVaultReified = Reified<BidVault, BidVaultFields>;

export class BidVault implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::vault::BidVault`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = BidVault.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::vault::BidVault`;
    readonly $typeArgs: [];
    readonly $isPhantom = BidVault.$isPhantom;

    readonly id: ToField<UID>;
    readonly depositToken: ToField<TypeName>;
    readonly bidToken: ToField<TypeName>;
    readonly incentiveToken: ToField<Option<TypeName>>;
    readonly index: ToField<"u64">;
    readonly shareSupply: ToField<"u64">;
    readonly metadata: ToField<String>;
    readonly u64Padding: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<"u8">>;

    private constructor(typeArgs: [], fields: BidVaultFields) {
        this.$fullTypeName = composeSuiType(BidVault.$typeName, ...typeArgs) as `${typeof PKG_V1}::vault::BidVault`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.depositToken = fields.depositToken;
        this.bidToken = fields.bidToken;
        this.incentiveToken = fields.incentiveToken;
        this.index = fields.index;
        this.shareSupply = fields.shareSupply;
        this.metadata = fields.metadata;
        this.u64Padding = fields.u64Padding;
        this.bcsPadding = fields.bcsPadding;
    }

    static reified(): BidVaultReified {
        return {
            typeName: BidVault.$typeName,
            fullTypeName: composeSuiType(BidVault.$typeName, ...[]) as `${typeof PKG_V1}::vault::BidVault`,
            typeArgs: [] as [],
            isPhantom: BidVault.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => BidVault.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => BidVault.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => BidVault.fromBcs(data),
            bcs: BidVault.bcs,
            fromJSONField: (field: any) => BidVault.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => BidVault.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => BidVault.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => BidVault.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => BidVault.fetch(client, id),
            new: (fields: BidVaultFields) => {
                return new BidVault([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return BidVault.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<BidVault>> {
        return phantom(BidVault.reified());
    }
    static get p() {
        return BidVault.phantom();
    }

    static get bcs() {
        return bcs.struct("BidVault", {
            id: UID.bcs,
            deposit_token: TypeName.bcs,
            bid_token: TypeName.bcs,
            incentive_token: Option.bcs(TypeName.bcs),
            index: bcs.u64(),
            share_supply: bcs.u64(),
            metadata: String.bcs,
            u64_padding: bcs.vector(bcs.u64()),
            bcs_padding: bcs.vector(bcs.u8()),
        });
    }

    static fromFields(fields: Record<string, any>): BidVault {
        return BidVault.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            depositToken: decodeFromFields(TypeName.reified(), fields.deposit_token),
            bidToken: decodeFromFields(TypeName.reified(), fields.bid_token),
            incentiveToken: decodeFromFields(Option.reified(TypeName.reified()), fields.incentive_token),
            index: decodeFromFields("u64", fields.index),
            shareSupply: decodeFromFields("u64", fields.share_supply),
            metadata: decodeFromFields(String.reified(), fields.metadata),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
            bcsPadding: decodeFromFields(reified.vector("u8"), fields.bcs_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): BidVault {
        if (!isBidVault(item.type)) {
            throw new Error("not a BidVault type");
        }

        return BidVault.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            depositToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.deposit_token),
            bidToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.bid_token),
            incentiveToken: decodeFromFieldsWithTypes(Option.reified(TypeName.reified()), item.fields.incentive_token),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            shareSupply: decodeFromFieldsWithTypes("u64", item.fields.share_supply),
            metadata: decodeFromFieldsWithTypes(String.reified(), item.fields.metadata),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
            bcsPadding: decodeFromFieldsWithTypes(reified.vector("u8"), item.fields.bcs_padding),
        });
    }

    static fromBcs(data: Uint8Array): BidVault {
        return BidVault.fromFields(BidVault.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            depositToken: this.depositToken.toJSONField(),
            bidToken: this.bidToken.toJSONField(),
            incentiveToken: fieldToJSON<Option<TypeName>>(`${Option.$typeName}<${TypeName.$typeName}>`, this.incentiveToken),
            index: this.index.toString(),
            shareSupply: this.shareSupply.toString(),
            metadata: this.metadata,
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
            bcsPadding: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.bcsPadding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): BidVault {
        return BidVault.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            depositToken: decodeFromJSONField(TypeName.reified(), field.depositToken),
            bidToken: decodeFromJSONField(TypeName.reified(), field.bidToken),
            incentiveToken: decodeFromJSONField(Option.reified(TypeName.reified()), field.incentiveToken),
            index: decodeFromJSONField("u64", field.index),
            shareSupply: decodeFromJSONField("u64", field.shareSupply),
            metadata: decodeFromJSONField(String.reified(), field.metadata),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
            bcsPadding: decodeFromJSONField(reified.vector("u8"), field.bcsPadding),
        });
    }

    static fromJSON(json: Record<string, any>): BidVault {
        if (json.$typeName !== BidVault.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return BidVault.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): BidVault {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isBidVault(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a BidVault object`);
        }
        return BidVault.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): BidVault {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBidVault(data.bcs.type)) {
                throw new Error(`object at is not a BidVault object`);
            }

            return BidVault.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return BidVault.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<BidVault> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching BidVault object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isBidVault(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BidVault object`);
        }

        return BidVault.fromSuiObjectData(res.data);
    }
}

/* ============================== Claim =============================== */

export function isClaim(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::vault::Claim`;
}

export interface ClaimFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
}

export type ClaimReified = Reified<Claim, ClaimFields>;

export class Claim implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::vault::Claim`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = Claim.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::vault::Claim`;
    readonly $typeArgs: [];
    readonly $isPhantom = Claim.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;

    private constructor(typeArgs: [], fields: ClaimFields) {
        this.$fullTypeName = composeSuiType(Claim.$typeName, ...typeArgs) as `${typeof PKG_V1}::vault::Claim`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.token = fields.token;
        this.amount = fields.amount;
    }

    static reified(): ClaimReified {
        return {
            typeName: Claim.$typeName,
            fullTypeName: composeSuiType(Claim.$typeName, ...[]) as `${typeof PKG_V1}::vault::Claim`,
            typeArgs: [] as [],
            isPhantom: Claim.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Claim.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Claim.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Claim.fromBcs(data),
            bcs: Claim.bcs,
            fromJSONField: (field: any) => Claim.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Claim.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Claim.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => Claim.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => Claim.fetch(client, id),
            new: (fields: ClaimFields) => {
                return new Claim([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Claim.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<Claim>> {
        return phantom(Claim.reified());
    }
    static get p() {
        return Claim.phantom();
    }

    static get bcs() {
        return bcs.struct("Claim", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            token: TypeName.bcs,
            amount: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): Claim {
        return Claim.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            token: decodeFromFields(TypeName.reified(), fields.token),
            amount: decodeFromFields("u64", fields.amount),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Claim {
        if (!isClaim(item.type)) {
            throw new Error("not a Claim type");
        }

        return Claim.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token),
            amount: decodeFromFieldsWithTypes("u64", item.fields.amount),
        });
    }

    static fromBcs(data: Uint8Array): Claim {
        return Claim.fromFields(Claim.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            token: this.token.toJSONField(),
            amount: this.amount.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): Claim {
        return Claim.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            token: decodeFromJSONField(TypeName.reified(), field.token),
            amount: decodeFromJSONField("u64", field.amount),
        });
    }

    static fromJSON(json: Record<string, any>): Claim {
        if (json.$typeName !== Claim.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return Claim.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): Claim {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isClaim(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Claim object`);
        }
        return Claim.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): Claim {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isClaim(data.bcs.type)) {
                throw new Error(`object at is not a Claim object`);
            }

            return Claim.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Claim.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<Claim> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Claim object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isClaim(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Claim object`);
        }

        return Claim.fromSuiObjectData(res.data);
    }
}

/* ============================== Compound =============================== */

export function isCompound(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::vault::Compound`;
}

export interface CompoundFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
    feeAmount: ToField<"u64">;
    feeShareAmount: ToField<"u64">;
    sharedFeePool: ToField<Option<Vector<"u8">>>;
}

export type CompoundReified = Reified<Compound, CompoundFields>;

export class Compound implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::vault::Compound`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = Compound.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::vault::Compound`;
    readonly $typeArgs: [];
    readonly $isPhantom = Compound.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;
    readonly feeAmount: ToField<"u64">;
    readonly feeShareAmount: ToField<"u64">;
    readonly sharedFeePool: ToField<Option<Vector<"u8">>>;

    private constructor(typeArgs: [], fields: CompoundFields) {
        this.$fullTypeName = composeSuiType(Compound.$typeName, ...typeArgs) as `${typeof PKG_V1}::vault::Compound`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.token = fields.token;
        this.amount = fields.amount;
        this.feeAmount = fields.feeAmount;
        this.feeShareAmount = fields.feeShareAmount;
        this.sharedFeePool = fields.sharedFeePool;
    }

    static reified(): CompoundReified {
        return {
            typeName: Compound.$typeName,
            fullTypeName: composeSuiType(Compound.$typeName, ...[]) as `${typeof PKG_V1}::vault::Compound`,
            typeArgs: [] as [],
            isPhantom: Compound.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Compound.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Compound.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Compound.fromBcs(data),
            bcs: Compound.bcs,
            fromJSONField: (field: any) => Compound.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Compound.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Compound.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => Compound.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => Compound.fetch(client, id),
            new: (fields: CompoundFields) => {
                return new Compound([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Compound.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<Compound>> {
        return phantom(Compound.reified());
    }
    static get p() {
        return Compound.phantom();
    }

    static get bcs() {
        return bcs.struct("Compound", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            token: TypeName.bcs,
            amount: bcs.u64(),
            fee_amount: bcs.u64(),
            fee_share_amount: bcs.u64(),
            shared_fee_pool: Option.bcs(bcs.vector(bcs.u8())),
        });
    }

    static fromFields(fields: Record<string, any>): Compound {
        return Compound.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            token: decodeFromFields(TypeName.reified(), fields.token),
            amount: decodeFromFields("u64", fields.amount),
            feeAmount: decodeFromFields("u64", fields.fee_amount),
            feeShareAmount: decodeFromFields("u64", fields.fee_share_amount),
            sharedFeePool: decodeFromFields(Option.reified(reified.vector("u8")), fields.shared_fee_pool),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Compound {
        if (!isCompound(item.type)) {
            throw new Error("not a Compound type");
        }

        return Compound.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token),
            amount: decodeFromFieldsWithTypes("u64", item.fields.amount),
            feeAmount: decodeFromFieldsWithTypes("u64", item.fields.fee_amount),
            feeShareAmount: decodeFromFieldsWithTypes("u64", item.fields.fee_share_amount),
            sharedFeePool: decodeFromFieldsWithTypes(Option.reified(reified.vector("u8")), item.fields.shared_fee_pool),
        });
    }

    static fromBcs(data: Uint8Array): Compound {
        return Compound.fromFields(Compound.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            token: this.token.toJSONField(),
            amount: this.amount.toString(),
            feeAmount: this.feeAmount.toString(),
            feeShareAmount: this.feeShareAmount.toString(),
            sharedFeePool: fieldToJSON<Option<Vector<"u8">>>(`${Option.$typeName}<vector<u8>>`, this.sharedFeePool),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): Compound {
        return Compound.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            token: decodeFromJSONField(TypeName.reified(), field.token),
            amount: decodeFromJSONField("u64", field.amount),
            feeAmount: decodeFromJSONField("u64", field.feeAmount),
            feeShareAmount: decodeFromJSONField("u64", field.feeShareAmount),
            sharedFeePool: decodeFromJSONField(Option.reified(reified.vector("u8")), field.sharedFeePool),
        });
    }

    static fromJSON(json: Record<string, any>): Compound {
        if (json.$typeName !== Compound.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return Compound.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): Compound {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isCompound(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Compound object`);
        }
        return Compound.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): Compound {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isCompound(data.bcs.type)) {
                throw new Error(`object at is not a Compound object`);
            }

            return Compound.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Compound.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<Compound> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Compound object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isCompound(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Compound object`);
        }

        return Compound.fromSuiObjectData(res.data);
    }
}

/* ============================== Delivery =============================== */

export function isDelivery(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::vault::Delivery`;
}

export interface DeliveryFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    premiumToken: ToField<TypeName>;
    incentiveToken: ToField<TypeName>;
    premium: ToField<"u64">;
    incentive: ToField<"u64">;
}

export type DeliveryReified = Reified<Delivery, DeliveryFields>;

export class Delivery implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::vault::Delivery`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = Delivery.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::vault::Delivery`;
    readonly $typeArgs: [];
    readonly $isPhantom = Delivery.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly premiumToken: ToField<TypeName>;
    readonly incentiveToken: ToField<TypeName>;
    readonly premium: ToField<"u64">;
    readonly incentive: ToField<"u64">;

    private constructor(typeArgs: [], fields: DeliveryFields) {
        this.$fullTypeName = composeSuiType(Delivery.$typeName, ...typeArgs) as `${typeof PKG_V1}::vault::Delivery`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.premiumToken = fields.premiumToken;
        this.incentiveToken = fields.incentiveToken;
        this.premium = fields.premium;
        this.incentive = fields.incentive;
    }

    static reified(): DeliveryReified {
        return {
            typeName: Delivery.$typeName,
            fullTypeName: composeSuiType(Delivery.$typeName, ...[]) as `${typeof PKG_V1}::vault::Delivery`,
            typeArgs: [] as [],
            isPhantom: Delivery.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Delivery.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Delivery.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Delivery.fromBcs(data),
            bcs: Delivery.bcs,
            fromJSONField: (field: any) => Delivery.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Delivery.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Delivery.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => Delivery.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => Delivery.fetch(client, id),
            new: (fields: DeliveryFields) => {
                return new Delivery([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Delivery.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<Delivery>> {
        return phantom(Delivery.reified());
    }
    static get p() {
        return Delivery.phantom();
    }

    static get bcs() {
        return bcs.struct("Delivery", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            premium_token: TypeName.bcs,
            incentive_token: TypeName.bcs,
            premium: bcs.u64(),
            incentive: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): Delivery {
        return Delivery.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            premiumToken: decodeFromFields(TypeName.reified(), fields.premium_token),
            incentiveToken: decodeFromFields(TypeName.reified(), fields.incentive_token),
            premium: decodeFromFields("u64", fields.premium),
            incentive: decodeFromFields("u64", fields.incentive),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Delivery {
        if (!isDelivery(item.type)) {
            throw new Error("not a Delivery type");
        }

        return Delivery.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            premiumToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.premium_token),
            incentiveToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.incentive_token),
            premium: decodeFromFieldsWithTypes("u64", item.fields.premium),
            incentive: decodeFromFieldsWithTypes("u64", item.fields.incentive),
        });
    }

    static fromBcs(data: Uint8Array): Delivery {
        return Delivery.fromFields(Delivery.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            premiumToken: this.premiumToken.toJSONField(),
            incentiveToken: this.incentiveToken.toJSONField(),
            premium: this.premium.toString(),
            incentive: this.incentive.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): Delivery {
        return Delivery.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            premiumToken: decodeFromJSONField(TypeName.reified(), field.premiumToken),
            incentiveToken: decodeFromJSONField(TypeName.reified(), field.incentiveToken),
            premium: decodeFromJSONField("u64", field.premium),
            incentive: decodeFromJSONField("u64", field.incentive),
        });
    }

    static fromJSON(json: Record<string, any>): Delivery {
        if (json.$typeName !== Delivery.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return Delivery.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): Delivery {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isDelivery(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Delivery object`);
        }
        return Delivery.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): Delivery {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDelivery(data.bcs.type)) {
                throw new Error(`object at is not a Delivery object`);
            }

            return Delivery.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Delivery.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<Delivery> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Delivery object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isDelivery(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Delivery object`);
        }

        return Delivery.fromSuiObjectData(res.data);
    }
}

/* ============================== Deposit =============================== */

export function isDeposit(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::vault::Deposit`;
}

export interface DepositFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
}

export type DepositReified = Reified<Deposit, DepositFields>;

export class Deposit implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::vault::Deposit`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = Deposit.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::vault::Deposit`;
    readonly $typeArgs: [];
    readonly $isPhantom = Deposit.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;

    private constructor(typeArgs: [], fields: DepositFields) {
        this.$fullTypeName = composeSuiType(Deposit.$typeName, ...typeArgs) as `${typeof PKG_V1}::vault::Deposit`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.token = fields.token;
        this.amount = fields.amount;
    }

    static reified(): DepositReified {
        return {
            typeName: Deposit.$typeName,
            fullTypeName: composeSuiType(Deposit.$typeName, ...[]) as `${typeof PKG_V1}::vault::Deposit`,
            typeArgs: [] as [],
            isPhantom: Deposit.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Deposit.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Deposit.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Deposit.fromBcs(data),
            bcs: Deposit.bcs,
            fromJSONField: (field: any) => Deposit.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Deposit.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Deposit.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => Deposit.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => Deposit.fetch(client, id),
            new: (fields: DepositFields) => {
                return new Deposit([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Deposit.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<Deposit>> {
        return phantom(Deposit.reified());
    }
    static get p() {
        return Deposit.phantom();
    }

    static get bcs() {
        return bcs.struct("Deposit", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            token: TypeName.bcs,
            amount: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): Deposit {
        return Deposit.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            token: decodeFromFields(TypeName.reified(), fields.token),
            amount: decodeFromFields("u64", fields.amount),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Deposit {
        if (!isDeposit(item.type)) {
            throw new Error("not a Deposit type");
        }

        return Deposit.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token),
            amount: decodeFromFieldsWithTypes("u64", item.fields.amount),
        });
    }

    static fromBcs(data: Uint8Array): Deposit {
        return Deposit.fromFields(Deposit.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            token: this.token.toJSONField(),
            amount: this.amount.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): Deposit {
        return Deposit.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            token: decodeFromJSONField(TypeName.reified(), field.token),
            amount: decodeFromJSONField("u64", field.amount),
        });
    }

    static fromJSON(json: Record<string, any>): Deposit {
        if (json.$typeName !== Deposit.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return Deposit.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): Deposit {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isDeposit(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Deposit object`);
        }
        return Deposit.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): Deposit {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDeposit(data.bcs.type)) {
                throw new Error(`object at is not a Deposit object`);
            }

            return Deposit.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Deposit.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<Deposit> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Deposit object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isDeposit(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Deposit object`);
        }

        return Deposit.fromSuiObjectData(res.data);
    }
}

/* ============================== DepositShare =============================== */

export function isDepositShare(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::vault::DepositShare`;
}

export interface DepositShareFields {
    receipt: ToField<"address">;
    activeShare: ToField<"u64">;
    deactivatingShare: ToField<"u64">;
    inactiveShare: ToField<"u64">;
    warmupShare: ToField<"u64">;
    premiumShare: ToField<"u64">;
    incentiveShare: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type DepositShareReified = Reified<DepositShare, DepositShareFields>;

export class DepositShare implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::vault::DepositShare`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = DepositShare.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::vault::DepositShare`;
    readonly $typeArgs: [];
    readonly $isPhantom = DepositShare.$isPhantom;

    readonly receipt: ToField<"address">;
    readonly activeShare: ToField<"u64">;
    readonly deactivatingShare: ToField<"u64">;
    readonly inactiveShare: ToField<"u64">;
    readonly warmupShare: ToField<"u64">;
    readonly premiumShare: ToField<"u64">;
    readonly incentiveShare: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: DepositShareFields) {
        this.$fullTypeName = composeSuiType(DepositShare.$typeName, ...typeArgs) as `${typeof PKG_V1}::vault::DepositShare`;
        this.$typeArgs = typeArgs;

        this.receipt = fields.receipt;
        this.activeShare = fields.activeShare;
        this.deactivatingShare = fields.deactivatingShare;
        this.inactiveShare = fields.inactiveShare;
        this.warmupShare = fields.warmupShare;
        this.premiumShare = fields.premiumShare;
        this.incentiveShare = fields.incentiveShare;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): DepositShareReified {
        return {
            typeName: DepositShare.$typeName,
            fullTypeName: composeSuiType(DepositShare.$typeName, ...[]) as `${typeof PKG_V1}::vault::DepositShare`,
            typeArgs: [] as [],
            isPhantom: DepositShare.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => DepositShare.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => DepositShare.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => DepositShare.fromBcs(data),
            bcs: DepositShare.bcs,
            fromJSONField: (field: any) => DepositShare.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => DepositShare.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => DepositShare.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => DepositShare.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => DepositShare.fetch(client, id),
            new: (fields: DepositShareFields) => {
                return new DepositShare([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return DepositShare.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<DepositShare>> {
        return phantom(DepositShare.reified());
    }
    static get p() {
        return DepositShare.phantom();
    }

    static get bcs() {
        return bcs.struct("DepositShare", {
            receipt: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            active_share: bcs.u64(),
            deactivating_share: bcs.u64(),
            inactive_share: bcs.u64(),
            warmup_share: bcs.u64(),
            premium_share: bcs.u64(),
            incentive_share: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): DepositShare {
        return DepositShare.reified().new({
            receipt: decodeFromFields("address", fields.receipt),
            activeShare: decodeFromFields("u64", fields.active_share),
            deactivatingShare: decodeFromFields("u64", fields.deactivating_share),
            inactiveShare: decodeFromFields("u64", fields.inactive_share),
            warmupShare: decodeFromFields("u64", fields.warmup_share),
            premiumShare: decodeFromFields("u64", fields.premium_share),
            incentiveShare: decodeFromFields("u64", fields.incentive_share),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): DepositShare {
        if (!isDepositShare(item.type)) {
            throw new Error("not a DepositShare type");
        }

        return DepositShare.reified().new({
            receipt: decodeFromFieldsWithTypes("address", item.fields.receipt),
            activeShare: decodeFromFieldsWithTypes("u64", item.fields.active_share),
            deactivatingShare: decodeFromFieldsWithTypes("u64", item.fields.deactivating_share),
            inactiveShare: decodeFromFieldsWithTypes("u64", item.fields.inactive_share),
            warmupShare: decodeFromFieldsWithTypes("u64", item.fields.warmup_share),
            premiumShare: decodeFromFieldsWithTypes("u64", item.fields.premium_share),
            incentiveShare: decodeFromFieldsWithTypes("u64", item.fields.incentive_share),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): DepositShare {
        return DepositShare.fromFields(DepositShare.bcs.parse(data));
    }

    toJSONField() {
        return {
            receipt: this.receipt,
            activeShare: this.activeShare.toString(),
            deactivatingShare: this.deactivatingShare.toString(),
            inactiveShare: this.inactiveShare.toString(),
            warmupShare: this.warmupShare.toString(),
            premiumShare: this.premiumShare.toString(),
            incentiveShare: this.incentiveShare.toString(),
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

    static fromJSONField(field: any): DepositShare {
        return DepositShare.reified().new({
            receipt: decodeFromJSONField("address", field.receipt),
            activeShare: decodeFromJSONField("u64", field.activeShare),
            deactivatingShare: decodeFromJSONField("u64", field.deactivatingShare),
            inactiveShare: decodeFromJSONField("u64", field.inactiveShare),
            warmupShare: decodeFromJSONField("u64", field.warmupShare),
            premiumShare: decodeFromJSONField("u64", field.premiumShare),
            incentiveShare: decodeFromJSONField("u64", field.incentiveShare),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): DepositShare {
        if (json.$typeName !== DepositShare.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return DepositShare.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): DepositShare {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isDepositShare(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a DepositShare object`);
        }
        return DepositShare.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): DepositShare {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDepositShare(data.bcs.type)) {
                throw new Error(`object at is not a DepositShare object`);
            }

            return DepositShare.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return DepositShare.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<DepositShare> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching DepositShare object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isDepositShare(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DepositShare object`);
        }

        return DepositShare.fromSuiObjectData(res.data);
    }
}

/* ============================== DepositVault =============================== */

export function isDepositVault(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::vault::DepositVault`;
}

export interface DepositVaultFields {
    id: ToField<UID>;
    depositToken: ToField<TypeName>;
    bidToken: ToField<TypeName>;
    incentiveToken: ToField<Option<TypeName>>;
    index: ToField<"u64">;
    feeBp: ToField<"u64">;
    feeShareBp: ToField<"u64">;
    sharedFeePool: ToField<Option<Vector<"u8">>>;
    activeShareSupply: ToField<"u64">;
    deactivatingShareSupply: ToField<"u64">;
    inactiveShareSupply: ToField<"u64">;
    warmupShareSupply: ToField<"u64">;
    premiumShareSupply: ToField<"u64">;
    incentiveShareSupply: ToField<"u64">;
    hasNext: ToField<"bool">;
    metadata: ToField<String>;
    u64Padding: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<"u8">>;
}

export type DepositVaultReified = Reified<DepositVault, DepositVaultFields>;

export class DepositVault implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::vault::DepositVault`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = DepositVault.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::vault::DepositVault`;
    readonly $typeArgs: [];
    readonly $isPhantom = DepositVault.$isPhantom;

    readonly id: ToField<UID>;
    readonly depositToken: ToField<TypeName>;
    readonly bidToken: ToField<TypeName>;
    readonly incentiveToken: ToField<Option<TypeName>>;
    readonly index: ToField<"u64">;
    readonly feeBp: ToField<"u64">;
    readonly feeShareBp: ToField<"u64">;
    readonly sharedFeePool: ToField<Option<Vector<"u8">>>;
    readonly activeShareSupply: ToField<"u64">;
    readonly deactivatingShareSupply: ToField<"u64">;
    readonly inactiveShareSupply: ToField<"u64">;
    readonly warmupShareSupply: ToField<"u64">;
    readonly premiumShareSupply: ToField<"u64">;
    readonly incentiveShareSupply: ToField<"u64">;
    readonly hasNext: ToField<"bool">;
    readonly metadata: ToField<String>;
    readonly u64Padding: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<"u8">>;

    private constructor(typeArgs: [], fields: DepositVaultFields) {
        this.$fullTypeName = composeSuiType(DepositVault.$typeName, ...typeArgs) as `${typeof PKG_V1}::vault::DepositVault`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.depositToken = fields.depositToken;
        this.bidToken = fields.bidToken;
        this.incentiveToken = fields.incentiveToken;
        this.index = fields.index;
        this.feeBp = fields.feeBp;
        this.feeShareBp = fields.feeShareBp;
        this.sharedFeePool = fields.sharedFeePool;
        this.activeShareSupply = fields.activeShareSupply;
        this.deactivatingShareSupply = fields.deactivatingShareSupply;
        this.inactiveShareSupply = fields.inactiveShareSupply;
        this.warmupShareSupply = fields.warmupShareSupply;
        this.premiumShareSupply = fields.premiumShareSupply;
        this.incentiveShareSupply = fields.incentiveShareSupply;
        this.hasNext = fields.hasNext;
        this.metadata = fields.metadata;
        this.u64Padding = fields.u64Padding;
        this.bcsPadding = fields.bcsPadding;
    }

    static reified(): DepositVaultReified {
        return {
            typeName: DepositVault.$typeName,
            fullTypeName: composeSuiType(DepositVault.$typeName, ...[]) as `${typeof PKG_V1}::vault::DepositVault`,
            typeArgs: [] as [],
            isPhantom: DepositVault.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => DepositVault.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => DepositVault.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => DepositVault.fromBcs(data),
            bcs: DepositVault.bcs,
            fromJSONField: (field: any) => DepositVault.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => DepositVault.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => DepositVault.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => DepositVault.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => DepositVault.fetch(client, id),
            new: (fields: DepositVaultFields) => {
                return new DepositVault([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return DepositVault.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<DepositVault>> {
        return phantom(DepositVault.reified());
    }
    static get p() {
        return DepositVault.phantom();
    }

    static get bcs() {
        return bcs.struct("DepositVault", {
            id: UID.bcs,
            deposit_token: TypeName.bcs,
            bid_token: TypeName.bcs,
            incentive_token: Option.bcs(TypeName.bcs),
            index: bcs.u64(),
            fee_bp: bcs.u64(),
            fee_share_bp: bcs.u64(),
            shared_fee_pool: Option.bcs(bcs.vector(bcs.u8())),
            active_share_supply: bcs.u64(),
            deactivating_share_supply: bcs.u64(),
            inactive_share_supply: bcs.u64(),
            warmup_share_supply: bcs.u64(),
            premium_share_supply: bcs.u64(),
            incentive_share_supply: bcs.u64(),
            has_next: bcs.bool(),
            metadata: String.bcs,
            u64_padding: bcs.vector(bcs.u64()),
            bcs_padding: bcs.vector(bcs.u8()),
        });
    }

    static fromFields(fields: Record<string, any>): DepositVault {
        return DepositVault.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            depositToken: decodeFromFields(TypeName.reified(), fields.deposit_token),
            bidToken: decodeFromFields(TypeName.reified(), fields.bid_token),
            incentiveToken: decodeFromFields(Option.reified(TypeName.reified()), fields.incentive_token),
            index: decodeFromFields("u64", fields.index),
            feeBp: decodeFromFields("u64", fields.fee_bp),
            feeShareBp: decodeFromFields("u64", fields.fee_share_bp),
            sharedFeePool: decodeFromFields(Option.reified(reified.vector("u8")), fields.shared_fee_pool),
            activeShareSupply: decodeFromFields("u64", fields.active_share_supply),
            deactivatingShareSupply: decodeFromFields("u64", fields.deactivating_share_supply),
            inactiveShareSupply: decodeFromFields("u64", fields.inactive_share_supply),
            warmupShareSupply: decodeFromFields("u64", fields.warmup_share_supply),
            premiumShareSupply: decodeFromFields("u64", fields.premium_share_supply),
            incentiveShareSupply: decodeFromFields("u64", fields.incentive_share_supply),
            hasNext: decodeFromFields("bool", fields.has_next),
            metadata: decodeFromFields(String.reified(), fields.metadata),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
            bcsPadding: decodeFromFields(reified.vector("u8"), fields.bcs_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): DepositVault {
        if (!isDepositVault(item.type)) {
            throw new Error("not a DepositVault type");
        }

        return DepositVault.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            depositToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.deposit_token),
            bidToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.bid_token),
            incentiveToken: decodeFromFieldsWithTypes(Option.reified(TypeName.reified()), item.fields.incentive_token),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            feeBp: decodeFromFieldsWithTypes("u64", item.fields.fee_bp),
            feeShareBp: decodeFromFieldsWithTypes("u64", item.fields.fee_share_bp),
            sharedFeePool: decodeFromFieldsWithTypes(Option.reified(reified.vector("u8")), item.fields.shared_fee_pool),
            activeShareSupply: decodeFromFieldsWithTypes("u64", item.fields.active_share_supply),
            deactivatingShareSupply: decodeFromFieldsWithTypes("u64", item.fields.deactivating_share_supply),
            inactiveShareSupply: decodeFromFieldsWithTypes("u64", item.fields.inactive_share_supply),
            warmupShareSupply: decodeFromFieldsWithTypes("u64", item.fields.warmup_share_supply),
            premiumShareSupply: decodeFromFieldsWithTypes("u64", item.fields.premium_share_supply),
            incentiveShareSupply: decodeFromFieldsWithTypes("u64", item.fields.incentive_share_supply),
            hasNext: decodeFromFieldsWithTypes("bool", item.fields.has_next),
            metadata: decodeFromFieldsWithTypes(String.reified(), item.fields.metadata),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
            bcsPadding: decodeFromFieldsWithTypes(reified.vector("u8"), item.fields.bcs_padding),
        });
    }

    static fromBcs(data: Uint8Array): DepositVault {
        return DepositVault.fromFields(DepositVault.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            depositToken: this.depositToken.toJSONField(),
            bidToken: this.bidToken.toJSONField(),
            incentiveToken: fieldToJSON<Option<TypeName>>(`${Option.$typeName}<${TypeName.$typeName}>`, this.incentiveToken),
            index: this.index.toString(),
            feeBp: this.feeBp.toString(),
            feeShareBp: this.feeShareBp.toString(),
            sharedFeePool: fieldToJSON<Option<Vector<"u8">>>(`${Option.$typeName}<vector<u8>>`, this.sharedFeePool),
            activeShareSupply: this.activeShareSupply.toString(),
            deactivatingShareSupply: this.deactivatingShareSupply.toString(),
            inactiveShareSupply: this.inactiveShareSupply.toString(),
            warmupShareSupply: this.warmupShareSupply.toString(),
            premiumShareSupply: this.premiumShareSupply.toString(),
            incentiveShareSupply: this.incentiveShareSupply.toString(),
            hasNext: this.hasNext,
            metadata: this.metadata,
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
            bcsPadding: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.bcsPadding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): DepositVault {
        return DepositVault.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            depositToken: decodeFromJSONField(TypeName.reified(), field.depositToken),
            bidToken: decodeFromJSONField(TypeName.reified(), field.bidToken),
            incentiveToken: decodeFromJSONField(Option.reified(TypeName.reified()), field.incentiveToken),
            index: decodeFromJSONField("u64", field.index),
            feeBp: decodeFromJSONField("u64", field.feeBp),
            feeShareBp: decodeFromJSONField("u64", field.feeShareBp),
            sharedFeePool: decodeFromJSONField(Option.reified(reified.vector("u8")), field.sharedFeePool),
            activeShareSupply: decodeFromJSONField("u64", field.activeShareSupply),
            deactivatingShareSupply: decodeFromJSONField("u64", field.deactivatingShareSupply),
            inactiveShareSupply: decodeFromJSONField("u64", field.inactiveShareSupply),
            warmupShareSupply: decodeFromJSONField("u64", field.warmupShareSupply),
            premiumShareSupply: decodeFromJSONField("u64", field.premiumShareSupply),
            incentiveShareSupply: decodeFromJSONField("u64", field.incentiveShareSupply),
            hasNext: decodeFromJSONField("bool", field.hasNext),
            metadata: decodeFromJSONField(String.reified(), field.metadata),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
            bcsPadding: decodeFromJSONField(reified.vector("u8"), field.bcsPadding),
        });
    }

    static fromJSON(json: Record<string, any>): DepositVault {
        if (json.$typeName !== DepositVault.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return DepositVault.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): DepositVault {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isDepositVault(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a DepositVault object`);
        }
        return DepositVault.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): DepositVault {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDepositVault(data.bcs.type)) {
                throw new Error(`object at is not a DepositVault object`);
            }

            return DepositVault.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return DepositVault.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<DepositVault> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching DepositVault object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isDepositVault(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DepositVault object`);
        }

        return DepositVault.fromSuiObjectData(res.data);
    }
}

/* ============================== Exercise =============================== */

export function isExercise(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::vault::Exercise`;
}

export interface ExerciseFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    depositToken: ToField<TypeName>;
    incentiveToken: ToField<Option<TypeName>>;
    amount: ToField<"u64">;
}

export type ExerciseReified = Reified<Exercise, ExerciseFields>;

export class Exercise implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::vault::Exercise`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = Exercise.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::vault::Exercise`;
    readonly $typeArgs: [];
    readonly $isPhantom = Exercise.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly depositToken: ToField<TypeName>;
    readonly incentiveToken: ToField<Option<TypeName>>;
    readonly amount: ToField<"u64">;

    private constructor(typeArgs: [], fields: ExerciseFields) {
        this.$fullTypeName = composeSuiType(Exercise.$typeName, ...typeArgs) as `${typeof PKG_V1}::vault::Exercise`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.depositToken = fields.depositToken;
        this.incentiveToken = fields.incentiveToken;
        this.amount = fields.amount;
    }

    static reified(): ExerciseReified {
        return {
            typeName: Exercise.$typeName,
            fullTypeName: composeSuiType(Exercise.$typeName, ...[]) as `${typeof PKG_V1}::vault::Exercise`,
            typeArgs: [] as [],
            isPhantom: Exercise.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Exercise.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Exercise.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Exercise.fromBcs(data),
            bcs: Exercise.bcs,
            fromJSONField: (field: any) => Exercise.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Exercise.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Exercise.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => Exercise.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => Exercise.fetch(client, id),
            new: (fields: ExerciseFields) => {
                return new Exercise([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Exercise.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<Exercise>> {
        return phantom(Exercise.reified());
    }
    static get p() {
        return Exercise.phantom();
    }

    static get bcs() {
        return bcs.struct("Exercise", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            deposit_token: TypeName.bcs,
            incentive_token: Option.bcs(TypeName.bcs),
            amount: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): Exercise {
        return Exercise.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            depositToken: decodeFromFields(TypeName.reified(), fields.deposit_token),
            incentiveToken: decodeFromFields(Option.reified(TypeName.reified()), fields.incentive_token),
            amount: decodeFromFields("u64", fields.amount),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Exercise {
        if (!isExercise(item.type)) {
            throw new Error("not a Exercise type");
        }

        return Exercise.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            depositToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.deposit_token),
            incentiveToken: decodeFromFieldsWithTypes(Option.reified(TypeName.reified()), item.fields.incentive_token),
            amount: decodeFromFieldsWithTypes("u64", item.fields.amount),
        });
    }

    static fromBcs(data: Uint8Array): Exercise {
        return Exercise.fromFields(Exercise.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            depositToken: this.depositToken.toJSONField(),
            incentiveToken: fieldToJSON<Option<TypeName>>(`${Option.$typeName}<${TypeName.$typeName}>`, this.incentiveToken),
            amount: this.amount.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): Exercise {
        return Exercise.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            depositToken: decodeFromJSONField(TypeName.reified(), field.depositToken),
            incentiveToken: decodeFromJSONField(Option.reified(TypeName.reified()), field.incentiveToken),
            amount: decodeFromJSONField("u64", field.amount),
        });
    }

    static fromJSON(json: Record<string, any>): Exercise {
        if (json.$typeName !== Exercise.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return Exercise.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): Exercise {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isExercise(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Exercise object`);
        }
        return Exercise.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): Exercise {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isExercise(data.bcs.type)) {
                throw new Error(`object at is not a Exercise object`);
            }

            return Exercise.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Exercise.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<Exercise> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Exercise object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isExercise(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Exercise object`);
        }

        return Exercise.fromSuiObjectData(res.data);
    }
}

/* ============================== Harvest =============================== */

export function isHarvest(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::vault::Harvest`;
}

export interface HarvestFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
    feeAmount: ToField<"u64">;
    feeShareAmount: ToField<"u64">;
    sharedFeePool: ToField<Option<Vector<"u8">>>;
}

export type HarvestReified = Reified<Harvest, HarvestFields>;

export class Harvest implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::vault::Harvest`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = Harvest.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::vault::Harvest`;
    readonly $typeArgs: [];
    readonly $isPhantom = Harvest.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;
    readonly feeAmount: ToField<"u64">;
    readonly feeShareAmount: ToField<"u64">;
    readonly sharedFeePool: ToField<Option<Vector<"u8">>>;

    private constructor(typeArgs: [], fields: HarvestFields) {
        this.$fullTypeName = composeSuiType(Harvest.$typeName, ...typeArgs) as `${typeof PKG_V1}::vault::Harvest`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.token = fields.token;
        this.amount = fields.amount;
        this.feeAmount = fields.feeAmount;
        this.feeShareAmount = fields.feeShareAmount;
        this.sharedFeePool = fields.sharedFeePool;
    }

    static reified(): HarvestReified {
        return {
            typeName: Harvest.$typeName,
            fullTypeName: composeSuiType(Harvest.$typeName, ...[]) as `${typeof PKG_V1}::vault::Harvest`,
            typeArgs: [] as [],
            isPhantom: Harvest.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Harvest.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Harvest.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Harvest.fromBcs(data),
            bcs: Harvest.bcs,
            fromJSONField: (field: any) => Harvest.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Harvest.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Harvest.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => Harvest.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => Harvest.fetch(client, id),
            new: (fields: HarvestFields) => {
                return new Harvest([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Harvest.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<Harvest>> {
        return phantom(Harvest.reified());
    }
    static get p() {
        return Harvest.phantom();
    }

    static get bcs() {
        return bcs.struct("Harvest", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            token: TypeName.bcs,
            amount: bcs.u64(),
            fee_amount: bcs.u64(),
            fee_share_amount: bcs.u64(),
            shared_fee_pool: Option.bcs(bcs.vector(bcs.u8())),
        });
    }

    static fromFields(fields: Record<string, any>): Harvest {
        return Harvest.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            token: decodeFromFields(TypeName.reified(), fields.token),
            amount: decodeFromFields("u64", fields.amount),
            feeAmount: decodeFromFields("u64", fields.fee_amount),
            feeShareAmount: decodeFromFields("u64", fields.fee_share_amount),
            sharedFeePool: decodeFromFields(Option.reified(reified.vector("u8")), fields.shared_fee_pool),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Harvest {
        if (!isHarvest(item.type)) {
            throw new Error("not a Harvest type");
        }

        return Harvest.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token),
            amount: decodeFromFieldsWithTypes("u64", item.fields.amount),
            feeAmount: decodeFromFieldsWithTypes("u64", item.fields.fee_amount),
            feeShareAmount: decodeFromFieldsWithTypes("u64", item.fields.fee_share_amount),
            sharedFeePool: decodeFromFieldsWithTypes(Option.reified(reified.vector("u8")), item.fields.shared_fee_pool),
        });
    }

    static fromBcs(data: Uint8Array): Harvest {
        return Harvest.fromFields(Harvest.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            token: this.token.toJSONField(),
            amount: this.amount.toString(),
            feeAmount: this.feeAmount.toString(),
            feeShareAmount: this.feeShareAmount.toString(),
            sharedFeePool: fieldToJSON<Option<Vector<"u8">>>(`${Option.$typeName}<vector<u8>>`, this.sharedFeePool),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): Harvest {
        return Harvest.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            token: decodeFromJSONField(TypeName.reified(), field.token),
            amount: decodeFromJSONField("u64", field.amount),
            feeAmount: decodeFromJSONField("u64", field.feeAmount),
            feeShareAmount: decodeFromJSONField("u64", field.feeShareAmount),
            sharedFeePool: decodeFromJSONField(Option.reified(reified.vector("u8")), field.sharedFeePool),
        });
    }

    static fromJSON(json: Record<string, any>): Harvest {
        if (json.$typeName !== Harvest.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return Harvest.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): Harvest {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isHarvest(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Harvest object`);
        }
        return Harvest.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): Harvest {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isHarvest(data.bcs.type)) {
                throw new Error(`object at is not a Harvest object`);
            }

            return Harvest.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Harvest.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<Harvest> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Harvest object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isHarvest(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Harvest object`);
        }

        return Harvest.fromSuiObjectData(res.data);
    }
}

/* ============================== IncentiviseBidder =============================== */

export function isIncentiviseBidder(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::vault::IncentiviseBidder`;
}

export interface IncentiviseBidderFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
}

export type IncentiviseBidderReified = Reified<IncentiviseBidder, IncentiviseBidderFields>;

export class IncentiviseBidder implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::vault::IncentiviseBidder`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = IncentiviseBidder.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::vault::IncentiviseBidder`;
    readonly $typeArgs: [];
    readonly $isPhantom = IncentiviseBidder.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;

    private constructor(typeArgs: [], fields: IncentiviseBidderFields) {
        this.$fullTypeName = composeSuiType(IncentiviseBidder.$typeName, ...typeArgs) as `${typeof PKG_V1}::vault::IncentiviseBidder`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.token = fields.token;
        this.amount = fields.amount;
    }

    static reified(): IncentiviseBidderReified {
        return {
            typeName: IncentiviseBidder.$typeName,
            fullTypeName: composeSuiType(IncentiviseBidder.$typeName, ...[]) as `${typeof PKG_V1}::vault::IncentiviseBidder`,
            typeArgs: [] as [],
            isPhantom: IncentiviseBidder.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => IncentiviseBidder.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => IncentiviseBidder.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => IncentiviseBidder.fromBcs(data),
            bcs: IncentiviseBidder.bcs,
            fromJSONField: (field: any) => IncentiviseBidder.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => IncentiviseBidder.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => IncentiviseBidder.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => IncentiviseBidder.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => IncentiviseBidder.fetch(client, id),
            new: (fields: IncentiviseBidderFields) => {
                return new IncentiviseBidder([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return IncentiviseBidder.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<IncentiviseBidder>> {
        return phantom(IncentiviseBidder.reified());
    }
    static get p() {
        return IncentiviseBidder.phantom();
    }

    static get bcs() {
        return bcs.struct("IncentiviseBidder", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            token: TypeName.bcs,
            amount: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): IncentiviseBidder {
        return IncentiviseBidder.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            token: decodeFromFields(TypeName.reified(), fields.token),
            amount: decodeFromFields("u64", fields.amount),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): IncentiviseBidder {
        if (!isIncentiviseBidder(item.type)) {
            throw new Error("not a IncentiviseBidder type");
        }

        return IncentiviseBidder.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token),
            amount: decodeFromFieldsWithTypes("u64", item.fields.amount),
        });
    }

    static fromBcs(data: Uint8Array): IncentiviseBidder {
        return IncentiviseBidder.fromFields(IncentiviseBidder.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            token: this.token.toJSONField(),
            amount: this.amount.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): IncentiviseBidder {
        return IncentiviseBidder.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            token: decodeFromJSONField(TypeName.reified(), field.token),
            amount: decodeFromJSONField("u64", field.amount),
        });
    }

    static fromJSON(json: Record<string, any>): IncentiviseBidder {
        if (json.$typeName !== IncentiviseBidder.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return IncentiviseBidder.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): IncentiviseBidder {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isIncentiviseBidder(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a IncentiviseBidder object`);
        }
        return IncentiviseBidder.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): IncentiviseBidder {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isIncentiviseBidder(data.bcs.type)) {
                throw new Error(`object at is not a IncentiviseBidder object`);
            }

            return IncentiviseBidder.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return IncentiviseBidder.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<IncentiviseBidder> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching IncentiviseBidder object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isIncentiviseBidder(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a IncentiviseBidder object`);
        }

        return IncentiviseBidder.fromSuiObjectData(res.data);
    }
}

/* ============================== NewBidVault =============================== */

export function isNewBidVault(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::vault::NewBidVault`;
}

export interface NewBidVaultFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    bidToken: ToField<TypeName>;
}

export type NewBidVaultReified = Reified<NewBidVault, NewBidVaultFields>;

export class NewBidVault implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::vault::NewBidVault`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = NewBidVault.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::vault::NewBidVault`;
    readonly $typeArgs: [];
    readonly $isPhantom = NewBidVault.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly bidToken: ToField<TypeName>;

    private constructor(typeArgs: [], fields: NewBidVaultFields) {
        this.$fullTypeName = composeSuiType(NewBidVault.$typeName, ...typeArgs) as `${typeof PKG_V1}::vault::NewBidVault`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.bidToken = fields.bidToken;
    }

    static reified(): NewBidVaultReified {
        return {
            typeName: NewBidVault.$typeName,
            fullTypeName: composeSuiType(NewBidVault.$typeName, ...[]) as `${typeof PKG_V1}::vault::NewBidVault`,
            typeArgs: [] as [],
            isPhantom: NewBidVault.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => NewBidVault.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => NewBidVault.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => NewBidVault.fromBcs(data),
            bcs: NewBidVault.bcs,
            fromJSONField: (field: any) => NewBidVault.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => NewBidVault.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => NewBidVault.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => NewBidVault.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => NewBidVault.fetch(client, id),
            new: (fields: NewBidVaultFields) => {
                return new NewBidVault([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return NewBidVault.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<NewBidVault>> {
        return phantom(NewBidVault.reified());
    }
    static get p() {
        return NewBidVault.phantom();
    }

    static get bcs() {
        return bcs.struct("NewBidVault", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            bid_token: TypeName.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): NewBidVault {
        return NewBidVault.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            bidToken: decodeFromFields(TypeName.reified(), fields.bid_token),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): NewBidVault {
        if (!isNewBidVault(item.type)) {
            throw new Error("not a NewBidVault type");
        }

        return NewBidVault.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            bidToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.bid_token),
        });
    }

    static fromBcs(data: Uint8Array): NewBidVault {
        return NewBidVault.fromFields(NewBidVault.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            bidToken: this.bidToken.toJSONField(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): NewBidVault {
        return NewBidVault.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            bidToken: decodeFromJSONField(TypeName.reified(), field.bidToken),
        });
    }

    static fromJSON(json: Record<string, any>): NewBidVault {
        if (json.$typeName !== NewBidVault.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return NewBidVault.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): NewBidVault {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isNewBidVault(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a NewBidVault object`);
        }
        return NewBidVault.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): NewBidVault {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isNewBidVault(data.bcs.type)) {
                throw new Error(`object at is not a NewBidVault object`);
            }

            return NewBidVault.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return NewBidVault.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<NewBidVault> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching NewBidVault object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isNewBidVault(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a NewBidVault object`);
        }

        return NewBidVault.fromSuiObjectData(res.data);
    }
}

/* ============================== NewDepositVault =============================== */

export function isNewDepositVault(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::vault::NewDepositVault`;
}

export interface NewDepositVaultFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    depositToken: ToField<TypeName>;
    bidToken: ToField<TypeName>;
}

export type NewDepositVaultReified = Reified<NewDepositVault, NewDepositVaultFields>;

export class NewDepositVault implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::vault::NewDepositVault`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = NewDepositVault.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::vault::NewDepositVault`;
    readonly $typeArgs: [];
    readonly $isPhantom = NewDepositVault.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly depositToken: ToField<TypeName>;
    readonly bidToken: ToField<TypeName>;

    private constructor(typeArgs: [], fields: NewDepositVaultFields) {
        this.$fullTypeName = composeSuiType(NewDepositVault.$typeName, ...typeArgs) as `${typeof PKG_V1}::vault::NewDepositVault`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.depositToken = fields.depositToken;
        this.bidToken = fields.bidToken;
    }

    static reified(): NewDepositVaultReified {
        return {
            typeName: NewDepositVault.$typeName,
            fullTypeName: composeSuiType(NewDepositVault.$typeName, ...[]) as `${typeof PKG_V1}::vault::NewDepositVault`,
            typeArgs: [] as [],
            isPhantom: NewDepositVault.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => NewDepositVault.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => NewDepositVault.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => NewDepositVault.fromBcs(data),
            bcs: NewDepositVault.bcs,
            fromJSONField: (field: any) => NewDepositVault.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => NewDepositVault.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => NewDepositVault.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => NewDepositVault.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => NewDepositVault.fetch(client, id),
            new: (fields: NewDepositVaultFields) => {
                return new NewDepositVault([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return NewDepositVault.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<NewDepositVault>> {
        return phantom(NewDepositVault.reified());
    }
    static get p() {
        return NewDepositVault.phantom();
    }

    static get bcs() {
        return bcs.struct("NewDepositVault", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            deposit_token: TypeName.bcs,
            bid_token: TypeName.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): NewDepositVault {
        return NewDepositVault.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            depositToken: decodeFromFields(TypeName.reified(), fields.deposit_token),
            bidToken: decodeFromFields(TypeName.reified(), fields.bid_token),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): NewDepositVault {
        if (!isNewDepositVault(item.type)) {
            throw new Error("not a NewDepositVault type");
        }

        return NewDepositVault.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            depositToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.deposit_token),
            bidToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.bid_token),
        });
    }

    static fromBcs(data: Uint8Array): NewDepositVault {
        return NewDepositVault.fromFields(NewDepositVault.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            depositToken: this.depositToken.toJSONField(),
            bidToken: this.bidToken.toJSONField(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): NewDepositVault {
        return NewDepositVault.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            depositToken: decodeFromJSONField(TypeName.reified(), field.depositToken),
            bidToken: decodeFromJSONField(TypeName.reified(), field.bidToken),
        });
    }

    static fromJSON(json: Record<string, any>): NewDepositVault {
        if (json.$typeName !== NewDepositVault.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return NewDepositVault.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): NewDepositVault {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isNewDepositVault(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a NewDepositVault object`);
        }
        return NewDepositVault.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): NewDepositVault {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isNewDepositVault(data.bcs.type)) {
                throw new Error(`object at is not a NewDepositVault object`);
            }

            return NewDepositVault.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return NewDepositVault.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<NewDepositVault> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching NewDepositVault object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isNewDepositVault(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a NewDepositVault object`);
        }

        return NewDepositVault.fromSuiObjectData(res.data);
    }
}

/* ============================== NewRefundVault =============================== */

export function isNewRefundVault(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::vault::NewRefundVault`;
}

export interface NewRefundVaultFields {
    signer: ToField<"address">;
    token: ToField<TypeName>;
}

export type NewRefundVaultReified = Reified<NewRefundVault, NewRefundVaultFields>;

export class NewRefundVault implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::vault::NewRefundVault`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = NewRefundVault.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::vault::NewRefundVault`;
    readonly $typeArgs: [];
    readonly $isPhantom = NewRefundVault.$isPhantom;

    readonly signer: ToField<"address">;
    readonly token: ToField<TypeName>;

    private constructor(typeArgs: [], fields: NewRefundVaultFields) {
        this.$fullTypeName = composeSuiType(NewRefundVault.$typeName, ...typeArgs) as `${typeof PKG_V1}::vault::NewRefundVault`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.token = fields.token;
    }

    static reified(): NewRefundVaultReified {
        return {
            typeName: NewRefundVault.$typeName,
            fullTypeName: composeSuiType(NewRefundVault.$typeName, ...[]) as `${typeof PKG_V1}::vault::NewRefundVault`,
            typeArgs: [] as [],
            isPhantom: NewRefundVault.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => NewRefundVault.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => NewRefundVault.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => NewRefundVault.fromBcs(data),
            bcs: NewRefundVault.bcs,
            fromJSONField: (field: any) => NewRefundVault.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => NewRefundVault.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => NewRefundVault.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => NewRefundVault.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => NewRefundVault.fetch(client, id),
            new: (fields: NewRefundVaultFields) => {
                return new NewRefundVault([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return NewRefundVault.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<NewRefundVault>> {
        return phantom(NewRefundVault.reified());
    }
    static get p() {
        return NewRefundVault.phantom();
    }

    static get bcs() {
        return bcs.struct("NewRefundVault", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            token: TypeName.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): NewRefundVault {
        return NewRefundVault.reified().new({
            signer: decodeFromFields("address", fields.signer),
            token: decodeFromFields(TypeName.reified(), fields.token),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): NewRefundVault {
        if (!isNewRefundVault(item.type)) {
            throw new Error("not a NewRefundVault type");
        }

        return NewRefundVault.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token),
        });
    }

    static fromBcs(data: Uint8Array): NewRefundVault {
        return NewRefundVault.fromFields(NewRefundVault.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            token: this.token.toJSONField(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): NewRefundVault {
        return NewRefundVault.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            token: decodeFromJSONField(TypeName.reified(), field.token),
        });
    }

    static fromJSON(json: Record<string, any>): NewRefundVault {
        if (json.$typeName !== NewRefundVault.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return NewRefundVault.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): NewRefundVault {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isNewRefundVault(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a NewRefundVault object`);
        }
        return NewRefundVault.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): NewRefundVault {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isNewRefundVault(data.bcs.type)) {
                throw new Error(`object at is not a NewRefundVault object`);
            }

            return NewRefundVault.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return NewRefundVault.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<NewRefundVault> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching NewRefundVault object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isNewRefundVault(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a NewRefundVault object`);
        }

        return NewRefundVault.fromSuiObjectData(res.data);
    }
}

/* ============================== Recoup =============================== */

export function isRecoup(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::vault::Recoup`;
}

export interface RecoupFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    token: ToField<TypeName>;
    active: ToField<"u64">;
    deactivating: ToField<"u64">;
}

export type RecoupReified = Reified<Recoup, RecoupFields>;

export class Recoup implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::vault::Recoup`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = Recoup.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::vault::Recoup`;
    readonly $typeArgs: [];
    readonly $isPhantom = Recoup.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly token: ToField<TypeName>;
    readonly active: ToField<"u64">;
    readonly deactivating: ToField<"u64">;

    private constructor(typeArgs: [], fields: RecoupFields) {
        this.$fullTypeName = composeSuiType(Recoup.$typeName, ...typeArgs) as `${typeof PKG_V1}::vault::Recoup`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.token = fields.token;
        this.active = fields.active;
        this.deactivating = fields.deactivating;
    }

    static reified(): RecoupReified {
        return {
            typeName: Recoup.$typeName,
            fullTypeName: composeSuiType(Recoup.$typeName, ...[]) as `${typeof PKG_V1}::vault::Recoup`,
            typeArgs: [] as [],
            isPhantom: Recoup.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Recoup.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Recoup.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Recoup.fromBcs(data),
            bcs: Recoup.bcs,
            fromJSONField: (field: any) => Recoup.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Recoup.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Recoup.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => Recoup.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => Recoup.fetch(client, id),
            new: (fields: RecoupFields) => {
                return new Recoup([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Recoup.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<Recoup>> {
        return phantom(Recoup.reified());
    }
    static get p() {
        return Recoup.phantom();
    }

    static get bcs() {
        return bcs.struct("Recoup", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            token: TypeName.bcs,
            active: bcs.u64(),
            deactivating: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): Recoup {
        return Recoup.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            token: decodeFromFields(TypeName.reified(), fields.token),
            active: decodeFromFields("u64", fields.active),
            deactivating: decodeFromFields("u64", fields.deactivating),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Recoup {
        if (!isRecoup(item.type)) {
            throw new Error("not a Recoup type");
        }

        return Recoup.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token),
            active: decodeFromFieldsWithTypes("u64", item.fields.active),
            deactivating: decodeFromFieldsWithTypes("u64", item.fields.deactivating),
        });
    }

    static fromBcs(data: Uint8Array): Recoup {
        return Recoup.fromFields(Recoup.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            token: this.token.toJSONField(),
            active: this.active.toString(),
            deactivating: this.deactivating.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): Recoup {
        return Recoup.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            token: decodeFromJSONField(TypeName.reified(), field.token),
            active: decodeFromJSONField("u64", field.active),
            deactivating: decodeFromJSONField("u64", field.deactivating),
        });
    }

    static fromJSON(json: Record<string, any>): Recoup {
        if (json.$typeName !== Recoup.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return Recoup.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): Recoup {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRecoup(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Recoup object`);
        }
        return Recoup.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): Recoup {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isRecoup(data.bcs.type)) {
                throw new Error(`object at is not a Recoup object`);
            }

            return Recoup.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Recoup.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<Recoup> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Recoup object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isRecoup(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Recoup object`);
        }

        return Recoup.fromSuiObjectData(res.data);
    }
}

/* ============================== Redeem =============================== */

export function isRedeem(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::vault::Redeem`;
}

export interface RedeemFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
}

export type RedeemReified = Reified<Redeem, RedeemFields>;

export class Redeem implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::vault::Redeem`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = Redeem.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::vault::Redeem`;
    readonly $typeArgs: [];
    readonly $isPhantom = Redeem.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;

    private constructor(typeArgs: [], fields: RedeemFields) {
        this.$fullTypeName = composeSuiType(Redeem.$typeName, ...typeArgs) as `${typeof PKG_V1}::vault::Redeem`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.token = fields.token;
        this.amount = fields.amount;
    }

    static reified(): RedeemReified {
        return {
            typeName: Redeem.$typeName,
            fullTypeName: composeSuiType(Redeem.$typeName, ...[]) as `${typeof PKG_V1}::vault::Redeem`,
            typeArgs: [] as [],
            isPhantom: Redeem.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Redeem.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Redeem.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Redeem.fromBcs(data),
            bcs: Redeem.bcs,
            fromJSONField: (field: any) => Redeem.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Redeem.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Redeem.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => Redeem.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => Redeem.fetch(client, id),
            new: (fields: RedeemFields) => {
                return new Redeem([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Redeem.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<Redeem>> {
        return phantom(Redeem.reified());
    }
    static get p() {
        return Redeem.phantom();
    }

    static get bcs() {
        return bcs.struct("Redeem", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            token: TypeName.bcs,
            amount: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): Redeem {
        return Redeem.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            token: decodeFromFields(TypeName.reified(), fields.token),
            amount: decodeFromFields("u64", fields.amount),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Redeem {
        if (!isRedeem(item.type)) {
            throw new Error("not a Redeem type");
        }

        return Redeem.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token),
            amount: decodeFromFieldsWithTypes("u64", item.fields.amount),
        });
    }

    static fromBcs(data: Uint8Array): Redeem {
        return Redeem.fromFields(Redeem.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            token: this.token.toJSONField(),
            amount: this.amount.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): Redeem {
        return Redeem.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            token: decodeFromJSONField(TypeName.reified(), field.token),
            amount: decodeFromJSONField("u64", field.amount),
        });
    }

    static fromJSON(json: Record<string, any>): Redeem {
        if (json.$typeName !== Redeem.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return Redeem.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): Redeem {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRedeem(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Redeem object`);
        }
        return Redeem.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): Redeem {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isRedeem(data.bcs.type)) {
                throw new Error(`object at is not a Redeem object`);
            }

            return Redeem.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Redeem.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<Redeem> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Redeem object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isRedeem(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Redeem object`);
        }

        return Redeem.fromSuiObjectData(res.data);
    }
}

/* ============================== RefundShare =============================== */

export function isRefundShare(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::vault::RefundShare`;
}

export interface RefundShareFields {
    user: ToField<"address">;
    share: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type RefundShareReified = Reified<RefundShare, RefundShareFields>;

export class RefundShare implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::vault::RefundShare`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = RefundShare.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::vault::RefundShare`;
    readonly $typeArgs: [];
    readonly $isPhantom = RefundShare.$isPhantom;

    readonly user: ToField<"address">;
    readonly share: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: RefundShareFields) {
        this.$fullTypeName = composeSuiType(RefundShare.$typeName, ...typeArgs) as `${typeof PKG_V1}::vault::RefundShare`;
        this.$typeArgs = typeArgs;

        this.user = fields.user;
        this.share = fields.share;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): RefundShareReified {
        return {
            typeName: RefundShare.$typeName,
            fullTypeName: composeSuiType(RefundShare.$typeName, ...[]) as `${typeof PKG_V1}::vault::RefundShare`,
            typeArgs: [] as [],
            isPhantom: RefundShare.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => RefundShare.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => RefundShare.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => RefundShare.fromBcs(data),
            bcs: RefundShare.bcs,
            fromJSONField: (field: any) => RefundShare.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => RefundShare.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => RefundShare.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => RefundShare.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => RefundShare.fetch(client, id),
            new: (fields: RefundShareFields) => {
                return new RefundShare([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return RefundShare.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<RefundShare>> {
        return phantom(RefundShare.reified());
    }
    static get p() {
        return RefundShare.phantom();
    }

    static get bcs() {
        return bcs.struct("RefundShare", {
            user: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            share: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): RefundShare {
        return RefundShare.reified().new({
            user: decodeFromFields("address", fields.user),
            share: decodeFromFields("u64", fields.share),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): RefundShare {
        if (!isRefundShare(item.type)) {
            throw new Error("not a RefundShare type");
        }

        return RefundShare.reified().new({
            user: decodeFromFieldsWithTypes("address", item.fields.user),
            share: decodeFromFieldsWithTypes("u64", item.fields.share),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): RefundShare {
        return RefundShare.fromFields(RefundShare.bcs.parse(data));
    }

    toJSONField() {
        return {
            user: this.user,
            share: this.share.toString(),
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

    static fromJSONField(field: any): RefundShare {
        return RefundShare.reified().new({
            user: decodeFromJSONField("address", field.user),
            share: decodeFromJSONField("u64", field.share),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): RefundShare {
        if (json.$typeName !== RefundShare.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return RefundShare.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): RefundShare {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRefundShare(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a RefundShare object`);
        }
        return RefundShare.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): RefundShare {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isRefundShare(data.bcs.type)) {
                throw new Error(`object at is not a RefundShare object`);
            }

            return RefundShare.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return RefundShare.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<RefundShare> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching RefundShare object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isRefundShare(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RefundShare object`);
        }

        return RefundShare.fromSuiObjectData(res.data);
    }
}

/* ============================== RefundVault =============================== */

export function isRefundVault(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::vault::RefundVault`;
}

export interface RefundVaultFields {
    id: ToField<UID>;
    token: ToField<TypeName>;
    shareSupply: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<"u8">>;
}

export type RefundVaultReified = Reified<RefundVault, RefundVaultFields>;

export class RefundVault implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::vault::RefundVault`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = RefundVault.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::vault::RefundVault`;
    readonly $typeArgs: [];
    readonly $isPhantom = RefundVault.$isPhantom;

    readonly id: ToField<UID>;
    readonly token: ToField<TypeName>;
    readonly shareSupply: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<"u8">>;

    private constructor(typeArgs: [], fields: RefundVaultFields) {
        this.$fullTypeName = composeSuiType(RefundVault.$typeName, ...typeArgs) as `${typeof PKG_V1}::vault::RefundVault`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.token = fields.token;
        this.shareSupply = fields.shareSupply;
        this.u64Padding = fields.u64Padding;
        this.bcsPadding = fields.bcsPadding;
    }

    static reified(): RefundVaultReified {
        return {
            typeName: RefundVault.$typeName,
            fullTypeName: composeSuiType(RefundVault.$typeName, ...[]) as `${typeof PKG_V1}::vault::RefundVault`,
            typeArgs: [] as [],
            isPhantom: RefundVault.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => RefundVault.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => RefundVault.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => RefundVault.fromBcs(data),
            bcs: RefundVault.bcs,
            fromJSONField: (field: any) => RefundVault.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => RefundVault.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => RefundVault.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => RefundVault.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => RefundVault.fetch(client, id),
            new: (fields: RefundVaultFields) => {
                return new RefundVault([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return RefundVault.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<RefundVault>> {
        return phantom(RefundVault.reified());
    }
    static get p() {
        return RefundVault.phantom();
    }

    static get bcs() {
        return bcs.struct("RefundVault", {
            id: UID.bcs,
            token: TypeName.bcs,
            share_supply: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
            bcs_padding: bcs.vector(bcs.u8()),
        });
    }

    static fromFields(fields: Record<string, any>): RefundVault {
        return RefundVault.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            token: decodeFromFields(TypeName.reified(), fields.token),
            shareSupply: decodeFromFields("u64", fields.share_supply),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
            bcsPadding: decodeFromFields(reified.vector("u8"), fields.bcs_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): RefundVault {
        if (!isRefundVault(item.type)) {
            throw new Error("not a RefundVault type");
        }

        return RefundVault.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token),
            shareSupply: decodeFromFieldsWithTypes("u64", item.fields.share_supply),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
            bcsPadding: decodeFromFieldsWithTypes(reified.vector("u8"), item.fields.bcs_padding),
        });
    }

    static fromBcs(data: Uint8Array): RefundVault {
        return RefundVault.fromFields(RefundVault.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            token: this.token.toJSONField(),
            shareSupply: this.shareSupply.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
            bcsPadding: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.bcsPadding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): RefundVault {
        return RefundVault.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            token: decodeFromJSONField(TypeName.reified(), field.token),
            shareSupply: decodeFromJSONField("u64", field.shareSupply),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
            bcsPadding: decodeFromJSONField(reified.vector("u8"), field.bcsPadding),
        });
    }

    static fromJSON(json: Record<string, any>): RefundVault {
        if (json.$typeName !== RefundVault.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return RefundVault.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): RefundVault {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRefundVault(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a RefundVault object`);
        }
        return RefundVault.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): RefundVault {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isRefundVault(data.bcs.type)) {
                throw new Error(`object at is not a RefundVault object`);
            }

            return RefundVault.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return RefundVault.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<RefundVault> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching RefundVault object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isRefundVault(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RefundVault object`);
        }

        return RefundVault.fromSuiObjectData(res.data);
    }
}

/* ============================== Settle =============================== */

export function isSettle(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::vault::Settle`;
}

export interface SettleFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    depositToken: ToField<TypeName>;
    bidToken: ToField<TypeName>;
    sharePrice: ToField<"u64">;
    sharePriceDecimal: ToField<"u64">;
}

export type SettleReified = Reified<Settle, SettleFields>;

export class Settle implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::vault::Settle`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = Settle.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::vault::Settle`;
    readonly $typeArgs: [];
    readonly $isPhantom = Settle.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly depositToken: ToField<TypeName>;
    readonly bidToken: ToField<TypeName>;
    readonly sharePrice: ToField<"u64">;
    readonly sharePriceDecimal: ToField<"u64">;

    private constructor(typeArgs: [], fields: SettleFields) {
        this.$fullTypeName = composeSuiType(Settle.$typeName, ...typeArgs) as `${typeof PKG_V1}::vault::Settle`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.depositToken = fields.depositToken;
        this.bidToken = fields.bidToken;
        this.sharePrice = fields.sharePrice;
        this.sharePriceDecimal = fields.sharePriceDecimal;
    }

    static reified(): SettleReified {
        return {
            typeName: Settle.$typeName,
            fullTypeName: composeSuiType(Settle.$typeName, ...[]) as `${typeof PKG_V1}::vault::Settle`,
            typeArgs: [] as [],
            isPhantom: Settle.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Settle.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Settle.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Settle.fromBcs(data),
            bcs: Settle.bcs,
            fromJSONField: (field: any) => Settle.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Settle.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Settle.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => Settle.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => Settle.fetch(client, id),
            new: (fields: SettleFields) => {
                return new Settle([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Settle.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<Settle>> {
        return phantom(Settle.reified());
    }
    static get p() {
        return Settle.phantom();
    }

    static get bcs() {
        return bcs.struct("Settle", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            deposit_token: TypeName.bcs,
            bid_token: TypeName.bcs,
            share_price: bcs.u64(),
            share_price_decimal: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): Settle {
        return Settle.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            depositToken: decodeFromFields(TypeName.reified(), fields.deposit_token),
            bidToken: decodeFromFields(TypeName.reified(), fields.bid_token),
            sharePrice: decodeFromFields("u64", fields.share_price),
            sharePriceDecimal: decodeFromFields("u64", fields.share_price_decimal),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Settle {
        if (!isSettle(item.type)) {
            throw new Error("not a Settle type");
        }

        return Settle.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            depositToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.deposit_token),
            bidToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.bid_token),
            sharePrice: decodeFromFieldsWithTypes("u64", item.fields.share_price),
            sharePriceDecimal: decodeFromFieldsWithTypes("u64", item.fields.share_price_decimal),
        });
    }

    static fromBcs(data: Uint8Array): Settle {
        return Settle.fromFields(Settle.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            depositToken: this.depositToken.toJSONField(),
            bidToken: this.bidToken.toJSONField(),
            sharePrice: this.sharePrice.toString(),
            sharePriceDecimal: this.sharePriceDecimal.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): Settle {
        return Settle.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            depositToken: decodeFromJSONField(TypeName.reified(), field.depositToken),
            bidToken: decodeFromJSONField(TypeName.reified(), field.bidToken),
            sharePrice: decodeFromJSONField("u64", field.sharePrice),
            sharePriceDecimal: decodeFromJSONField("u64", field.sharePriceDecimal),
        });
    }

    static fromJSON(json: Record<string, any>): Settle {
        if (json.$typeName !== Settle.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return Settle.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): Settle {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isSettle(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Settle object`);
        }
        return Settle.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): Settle {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isSettle(data.bcs.type)) {
                throw new Error(`object at is not a Settle object`);
            }

            return Settle.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Settle.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<Settle> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Settle object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isSettle(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Settle object`);
        }

        return Settle.fromSuiObjectData(res.data);
    }
}

/* ============================== Terminate =============================== */

export function isTerminate(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::vault::Terminate`;
}

export interface TerminateFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    token: ToField<TypeName>;
}

export type TerminateReified = Reified<Terminate, TerminateFields>;

export class Terminate implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::vault::Terminate`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = Terminate.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::vault::Terminate`;
    readonly $typeArgs: [];
    readonly $isPhantom = Terminate.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly token: ToField<TypeName>;

    private constructor(typeArgs: [], fields: TerminateFields) {
        this.$fullTypeName = composeSuiType(Terminate.$typeName, ...typeArgs) as `${typeof PKG_V1}::vault::Terminate`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.token = fields.token;
    }

    static reified(): TerminateReified {
        return {
            typeName: Terminate.$typeName,
            fullTypeName: composeSuiType(Terminate.$typeName, ...[]) as `${typeof PKG_V1}::vault::Terminate`,
            typeArgs: [] as [],
            isPhantom: Terminate.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Terminate.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Terminate.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Terminate.fromBcs(data),
            bcs: Terminate.bcs,
            fromJSONField: (field: any) => Terminate.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Terminate.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Terminate.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => Terminate.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => Terminate.fetch(client, id),
            new: (fields: TerminateFields) => {
                return new Terminate([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Terminate.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<Terminate>> {
        return phantom(Terminate.reified());
    }
    static get p() {
        return Terminate.phantom();
    }

    static get bcs() {
        return bcs.struct("Terminate", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            token: TypeName.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): Terminate {
        return Terminate.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            token: decodeFromFields(TypeName.reified(), fields.token),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Terminate {
        if (!isTerminate(item.type)) {
            throw new Error("not a Terminate type");
        }

        return Terminate.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token),
        });
    }

    static fromBcs(data: Uint8Array): Terminate {
        return Terminate.fromFields(Terminate.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            token: this.token.toJSONField(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): Terminate {
        return Terminate.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            token: decodeFromJSONField(TypeName.reified(), field.token),
        });
    }

    static fromJSON(json: Record<string, any>): Terminate {
        if (json.$typeName !== Terminate.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return Terminate.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): Terminate {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isTerminate(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Terminate object`);
        }
        return Terminate.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): Terminate {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isTerminate(data.bcs.type)) {
                throw new Error(`object at is not a Terminate object`);
            }

            return Terminate.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Terminate.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<Terminate> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Terminate object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isTerminate(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Terminate object`);
        }

        return Terminate.fromSuiObjectData(res.data);
    }
}

/* ============================== TypusBidReceipt =============================== */

export function isTypusBidReceipt(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::vault::TypusBidReceipt`;
}

export interface TypusBidReceiptFields {
    id: ToField<UID>;
    vid: ToField<ID>;
    index: ToField<"u64">;
    metadata: ToField<String>;
    u64Padding: ToField<Vector<"u64">>;
}

export type TypusBidReceiptReified = Reified<TypusBidReceipt, TypusBidReceiptFields>;

export class TypusBidReceipt implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::vault::TypusBidReceipt`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = TypusBidReceipt.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::vault::TypusBidReceipt`;
    readonly $typeArgs: [];
    readonly $isPhantom = TypusBidReceipt.$isPhantom;

    readonly id: ToField<UID>;
    readonly vid: ToField<ID>;
    readonly index: ToField<"u64">;
    readonly metadata: ToField<String>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: TypusBidReceiptFields) {
        this.$fullTypeName = composeSuiType(TypusBidReceipt.$typeName, ...typeArgs) as `${typeof PKG_V1}::vault::TypusBidReceipt`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.vid = fields.vid;
        this.index = fields.index;
        this.metadata = fields.metadata;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): TypusBidReceiptReified {
        return {
            typeName: TypusBidReceipt.$typeName,
            fullTypeName: composeSuiType(TypusBidReceipt.$typeName, ...[]) as `${typeof PKG_V1}::vault::TypusBidReceipt`,
            typeArgs: [] as [],
            isPhantom: TypusBidReceipt.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => TypusBidReceipt.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => TypusBidReceipt.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => TypusBidReceipt.fromBcs(data),
            bcs: TypusBidReceipt.bcs,
            fromJSONField: (field: any) => TypusBidReceipt.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => TypusBidReceipt.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => TypusBidReceipt.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => TypusBidReceipt.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => TypusBidReceipt.fetch(client, id),
            new: (fields: TypusBidReceiptFields) => {
                return new TypusBidReceipt([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return TypusBidReceipt.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<TypusBidReceipt>> {
        return phantom(TypusBidReceipt.reified());
    }
    static get p() {
        return TypusBidReceipt.phantom();
    }

    static get bcs() {
        return bcs.struct("TypusBidReceipt", {
            id: UID.bcs,
            vid: ID.bcs,
            index: bcs.u64(),
            metadata: String.bcs,
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): TypusBidReceipt {
        return TypusBidReceipt.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            vid: decodeFromFields(ID.reified(), fields.vid),
            index: decodeFromFields("u64", fields.index),
            metadata: decodeFromFields(String.reified(), fields.metadata),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): TypusBidReceipt {
        if (!isTypusBidReceipt(item.type)) {
            throw new Error("not a TypusBidReceipt type");
        }

        return TypusBidReceipt.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            vid: decodeFromFieldsWithTypes(ID.reified(), item.fields.vid),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            metadata: decodeFromFieldsWithTypes(String.reified(), item.fields.metadata),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): TypusBidReceipt {
        return TypusBidReceipt.fromFields(TypusBidReceipt.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            vid: this.vid,
            index: this.index.toString(),
            metadata: this.metadata,
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

    static fromJSONField(field: any): TypusBidReceipt {
        return TypusBidReceipt.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            vid: decodeFromJSONField(ID.reified(), field.vid),
            index: decodeFromJSONField("u64", field.index),
            metadata: decodeFromJSONField(String.reified(), field.metadata),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): TypusBidReceipt {
        if (json.$typeName !== TypusBidReceipt.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return TypusBidReceipt.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): TypusBidReceipt {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isTypusBidReceipt(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a TypusBidReceipt object`);
        }
        return TypusBidReceipt.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): TypusBidReceipt {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isTypusBidReceipt(data.bcs.type)) {
                throw new Error(`object at is not a TypusBidReceipt object`);
            }

            return TypusBidReceipt.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return TypusBidReceipt.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<TypusBidReceipt> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching TypusBidReceipt object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isTypusBidReceipt(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TypusBidReceipt object`);
        }

        return TypusBidReceipt.fromSuiObjectData(res.data);
    }
}

/* ============================== TypusDepositReceipt =============================== */

export function isTypusDepositReceipt(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::vault::TypusDepositReceipt`;
}

export interface TypusDepositReceiptFields {
    id: ToField<UID>;
    vid: ToField<ID>;
    index: ToField<"u64">;
    metadata: ToField<String>;
    u64Padding: ToField<Vector<"u64">>;
}

export type TypusDepositReceiptReified = Reified<TypusDepositReceipt, TypusDepositReceiptFields>;

export class TypusDepositReceipt implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::vault::TypusDepositReceipt`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = TypusDepositReceipt.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::vault::TypusDepositReceipt`;
    readonly $typeArgs: [];
    readonly $isPhantom = TypusDepositReceipt.$isPhantom;

    readonly id: ToField<UID>;
    readonly vid: ToField<ID>;
    readonly index: ToField<"u64">;
    readonly metadata: ToField<String>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: TypusDepositReceiptFields) {
        this.$fullTypeName = composeSuiType(TypusDepositReceipt.$typeName, ...typeArgs) as `${typeof PKG_V1}::vault::TypusDepositReceipt`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.vid = fields.vid;
        this.index = fields.index;
        this.metadata = fields.metadata;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): TypusDepositReceiptReified {
        return {
            typeName: TypusDepositReceipt.$typeName,
            fullTypeName: composeSuiType(TypusDepositReceipt.$typeName, ...[]) as `${typeof PKG_V1}::vault::TypusDepositReceipt`,
            typeArgs: [] as [],
            isPhantom: TypusDepositReceipt.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => TypusDepositReceipt.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => TypusDepositReceipt.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => TypusDepositReceipt.fromBcs(data),
            bcs: TypusDepositReceipt.bcs,
            fromJSONField: (field: any) => TypusDepositReceipt.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => TypusDepositReceipt.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => TypusDepositReceipt.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => TypusDepositReceipt.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => TypusDepositReceipt.fetch(client, id),
            new: (fields: TypusDepositReceiptFields) => {
                return new TypusDepositReceipt([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return TypusDepositReceipt.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<TypusDepositReceipt>> {
        return phantom(TypusDepositReceipt.reified());
    }
    static get p() {
        return TypusDepositReceipt.phantom();
    }

    static get bcs() {
        return bcs.struct("TypusDepositReceipt", {
            id: UID.bcs,
            vid: ID.bcs,
            index: bcs.u64(),
            metadata: String.bcs,
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): TypusDepositReceipt {
        return TypusDepositReceipt.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            vid: decodeFromFields(ID.reified(), fields.vid),
            index: decodeFromFields("u64", fields.index),
            metadata: decodeFromFields(String.reified(), fields.metadata),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): TypusDepositReceipt {
        if (!isTypusDepositReceipt(item.type)) {
            throw new Error("not a TypusDepositReceipt type");
        }

        return TypusDepositReceipt.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            vid: decodeFromFieldsWithTypes(ID.reified(), item.fields.vid),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            metadata: decodeFromFieldsWithTypes(String.reified(), item.fields.metadata),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): TypusDepositReceipt {
        return TypusDepositReceipt.fromFields(TypusDepositReceipt.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            vid: this.vid,
            index: this.index.toString(),
            metadata: this.metadata,
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

    static fromJSONField(field: any): TypusDepositReceipt {
        return TypusDepositReceipt.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            vid: decodeFromJSONField(ID.reified(), field.vid),
            index: decodeFromJSONField("u64", field.index),
            metadata: decodeFromJSONField(String.reified(), field.metadata),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): TypusDepositReceipt {
        if (json.$typeName !== TypusDepositReceipt.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return TypusDepositReceipt.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): TypusDepositReceipt {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isTypusDepositReceipt(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a TypusDepositReceipt object`);
        }
        return TypusDepositReceipt.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): TypusDepositReceipt {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isTypusDepositReceipt(data.bcs.type)) {
                throw new Error(`object at is not a TypusDepositReceipt object`);
            }

            return TypusDepositReceipt.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return TypusDepositReceipt.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<TypusDepositReceipt> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching TypusDepositReceipt object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isTypusDepositReceipt(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TypusDepositReceipt object`);
        }

        return TypusDepositReceipt.fromSuiObjectData(res.data);
    }
}

/* ============================== Unsubscribe =============================== */

export function isUnsubscribe(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::vault::Unsubscribe`;
}

export interface UnsubscribeFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
}

export type UnsubscribeReified = Reified<Unsubscribe, UnsubscribeFields>;

export class Unsubscribe implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::vault::Unsubscribe`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = Unsubscribe.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::vault::Unsubscribe`;
    readonly $typeArgs: [];
    readonly $isPhantom = Unsubscribe.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;

    private constructor(typeArgs: [], fields: UnsubscribeFields) {
        this.$fullTypeName = composeSuiType(Unsubscribe.$typeName, ...typeArgs) as `${typeof PKG_V1}::vault::Unsubscribe`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.token = fields.token;
        this.amount = fields.amount;
    }

    static reified(): UnsubscribeReified {
        return {
            typeName: Unsubscribe.$typeName,
            fullTypeName: composeSuiType(Unsubscribe.$typeName, ...[]) as `${typeof PKG_V1}::vault::Unsubscribe`,
            typeArgs: [] as [],
            isPhantom: Unsubscribe.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Unsubscribe.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Unsubscribe.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Unsubscribe.fromBcs(data),
            bcs: Unsubscribe.bcs,
            fromJSONField: (field: any) => Unsubscribe.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Unsubscribe.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Unsubscribe.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => Unsubscribe.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => Unsubscribe.fetch(client, id),
            new: (fields: UnsubscribeFields) => {
                return new Unsubscribe([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Unsubscribe.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<Unsubscribe>> {
        return phantom(Unsubscribe.reified());
    }
    static get p() {
        return Unsubscribe.phantom();
    }

    static get bcs() {
        return bcs.struct("Unsubscribe", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            token: TypeName.bcs,
            amount: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): Unsubscribe {
        return Unsubscribe.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            token: decodeFromFields(TypeName.reified(), fields.token),
            amount: decodeFromFields("u64", fields.amount),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Unsubscribe {
        if (!isUnsubscribe(item.type)) {
            throw new Error("not a Unsubscribe type");
        }

        return Unsubscribe.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token),
            amount: decodeFromFieldsWithTypes("u64", item.fields.amount),
        });
    }

    static fromBcs(data: Uint8Array): Unsubscribe {
        return Unsubscribe.fromFields(Unsubscribe.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            token: this.token.toJSONField(),
            amount: this.amount.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): Unsubscribe {
        return Unsubscribe.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            token: decodeFromJSONField(TypeName.reified(), field.token),
            amount: decodeFromJSONField("u64", field.amount),
        });
    }

    static fromJSON(json: Record<string, any>): Unsubscribe {
        if (json.$typeName !== Unsubscribe.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return Unsubscribe.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): Unsubscribe {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUnsubscribe(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Unsubscribe object`);
        }
        return Unsubscribe.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): Unsubscribe {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isUnsubscribe(data.bcs.type)) {
                throw new Error(`object at is not a Unsubscribe object`);
            }

            return Unsubscribe.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Unsubscribe.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<Unsubscribe> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Unsubscribe object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isUnsubscribe(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Unsubscribe object`);
        }

        return Unsubscribe.fromSuiObjectData(res.data);
    }
}

/* ============================== UpdateFeeConfig =============================== */

export function isUpdateFeeConfig(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::vault::UpdateFeeConfig`;
}

export interface UpdateFeeConfigFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    prevFeeBp: ToField<"u64">;
    feeBp: ToField<"u64">;
}

export type UpdateFeeConfigReified = Reified<UpdateFeeConfig, UpdateFeeConfigFields>;

export class UpdateFeeConfig implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::vault::UpdateFeeConfig`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = UpdateFeeConfig.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::vault::UpdateFeeConfig`;
    readonly $typeArgs: [];
    readonly $isPhantom = UpdateFeeConfig.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly prevFeeBp: ToField<"u64">;
    readonly feeBp: ToField<"u64">;

    private constructor(typeArgs: [], fields: UpdateFeeConfigFields) {
        this.$fullTypeName = composeSuiType(UpdateFeeConfig.$typeName, ...typeArgs) as `${typeof PKG_V1}::vault::UpdateFeeConfig`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.prevFeeBp = fields.prevFeeBp;
        this.feeBp = fields.feeBp;
    }

    static reified(): UpdateFeeConfigReified {
        return {
            typeName: UpdateFeeConfig.$typeName,
            fullTypeName: composeSuiType(UpdateFeeConfig.$typeName, ...[]) as `${typeof PKG_V1}::vault::UpdateFeeConfig`,
            typeArgs: [] as [],
            isPhantom: UpdateFeeConfig.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => UpdateFeeConfig.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => UpdateFeeConfig.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => UpdateFeeConfig.fromBcs(data),
            bcs: UpdateFeeConfig.bcs,
            fromJSONField: (field: any) => UpdateFeeConfig.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => UpdateFeeConfig.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => UpdateFeeConfig.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => UpdateFeeConfig.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => UpdateFeeConfig.fetch(client, id),
            new: (fields: UpdateFeeConfigFields) => {
                return new UpdateFeeConfig([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return UpdateFeeConfig.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<UpdateFeeConfig>> {
        return phantom(UpdateFeeConfig.reified());
    }
    static get p() {
        return UpdateFeeConfig.phantom();
    }

    static get bcs() {
        return bcs.struct("UpdateFeeConfig", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            prev_fee_bp: bcs.u64(),
            fee_bp: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): UpdateFeeConfig {
        return UpdateFeeConfig.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            prevFeeBp: decodeFromFields("u64", fields.prev_fee_bp),
            feeBp: decodeFromFields("u64", fields.fee_bp),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): UpdateFeeConfig {
        if (!isUpdateFeeConfig(item.type)) {
            throw new Error("not a UpdateFeeConfig type");
        }

        return UpdateFeeConfig.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            prevFeeBp: decodeFromFieldsWithTypes("u64", item.fields.prev_fee_bp),
            feeBp: decodeFromFieldsWithTypes("u64", item.fields.fee_bp),
        });
    }

    static fromBcs(data: Uint8Array): UpdateFeeConfig {
        return UpdateFeeConfig.fromFields(UpdateFeeConfig.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            prevFeeBp: this.prevFeeBp.toString(),
            feeBp: this.feeBp.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): UpdateFeeConfig {
        return UpdateFeeConfig.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            prevFeeBp: decodeFromJSONField("u64", field.prevFeeBp),
            feeBp: decodeFromJSONField("u64", field.feeBp),
        });
    }

    static fromJSON(json: Record<string, any>): UpdateFeeConfig {
        if (json.$typeName !== UpdateFeeConfig.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return UpdateFeeConfig.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): UpdateFeeConfig {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUpdateFeeConfig(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a UpdateFeeConfig object`);
        }
        return UpdateFeeConfig.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): UpdateFeeConfig {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isUpdateFeeConfig(data.bcs.type)) {
                throw new Error(`object at is not a UpdateFeeConfig object`);
            }

            return UpdateFeeConfig.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return UpdateFeeConfig.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<UpdateFeeConfig> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching UpdateFeeConfig object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isUpdateFeeConfig(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UpdateFeeConfig object`);
        }

        return UpdateFeeConfig.fromSuiObjectData(res.data);
    }
}

/* ============================== UpdateFeeShareConfig =============================== */

export function isUpdateFeeShareConfig(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::vault::UpdateFeeShareConfig`;
}

export interface UpdateFeeShareConfigFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    prevFeeBp: ToField<"u64">;
    prevSharedFeePool: ToField<Option<Vector<"u8">>>;
    feeBp: ToField<"u64">;
    sharedFeePool: ToField<Option<Vector<"u8">>>;
}

export type UpdateFeeShareConfigReified = Reified<UpdateFeeShareConfig, UpdateFeeShareConfigFields>;

export class UpdateFeeShareConfig implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::vault::UpdateFeeShareConfig`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = UpdateFeeShareConfig.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::vault::UpdateFeeShareConfig`;
    readonly $typeArgs: [];
    readonly $isPhantom = UpdateFeeShareConfig.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly prevFeeBp: ToField<"u64">;
    readonly prevSharedFeePool: ToField<Option<Vector<"u8">>>;
    readonly feeBp: ToField<"u64">;
    readonly sharedFeePool: ToField<Option<Vector<"u8">>>;

    private constructor(typeArgs: [], fields: UpdateFeeShareConfigFields) {
        this.$fullTypeName = composeSuiType(UpdateFeeShareConfig.$typeName, ...typeArgs) as `${typeof PKG_V1}::vault::UpdateFeeShareConfig`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.prevFeeBp = fields.prevFeeBp;
        this.prevSharedFeePool = fields.prevSharedFeePool;
        this.feeBp = fields.feeBp;
        this.sharedFeePool = fields.sharedFeePool;
    }

    static reified(): UpdateFeeShareConfigReified {
        return {
            typeName: UpdateFeeShareConfig.$typeName,
            fullTypeName: composeSuiType(UpdateFeeShareConfig.$typeName, ...[]) as `${typeof PKG_V1}::vault::UpdateFeeShareConfig`,
            typeArgs: [] as [],
            isPhantom: UpdateFeeShareConfig.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => UpdateFeeShareConfig.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => UpdateFeeShareConfig.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => UpdateFeeShareConfig.fromBcs(data),
            bcs: UpdateFeeShareConfig.bcs,
            fromJSONField: (field: any) => UpdateFeeShareConfig.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => UpdateFeeShareConfig.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => UpdateFeeShareConfig.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => UpdateFeeShareConfig.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => UpdateFeeShareConfig.fetch(client, id),
            new: (fields: UpdateFeeShareConfigFields) => {
                return new UpdateFeeShareConfig([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return UpdateFeeShareConfig.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<UpdateFeeShareConfig>> {
        return phantom(UpdateFeeShareConfig.reified());
    }
    static get p() {
        return UpdateFeeShareConfig.phantom();
    }

    static get bcs() {
        return bcs.struct("UpdateFeeShareConfig", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            prev_fee_bp: bcs.u64(),
            prev_shared_fee_pool: Option.bcs(bcs.vector(bcs.u8())),
            fee_bp: bcs.u64(),
            shared_fee_pool: Option.bcs(bcs.vector(bcs.u8())),
        });
    }

    static fromFields(fields: Record<string, any>): UpdateFeeShareConfig {
        return UpdateFeeShareConfig.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            prevFeeBp: decodeFromFields("u64", fields.prev_fee_bp),
            prevSharedFeePool: decodeFromFields(Option.reified(reified.vector("u8")), fields.prev_shared_fee_pool),
            feeBp: decodeFromFields("u64", fields.fee_bp),
            sharedFeePool: decodeFromFields(Option.reified(reified.vector("u8")), fields.shared_fee_pool),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): UpdateFeeShareConfig {
        if (!isUpdateFeeShareConfig(item.type)) {
            throw new Error("not a UpdateFeeShareConfig type");
        }

        return UpdateFeeShareConfig.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            prevFeeBp: decodeFromFieldsWithTypes("u64", item.fields.prev_fee_bp),
            prevSharedFeePool: decodeFromFieldsWithTypes(Option.reified(reified.vector("u8")), item.fields.prev_shared_fee_pool),
            feeBp: decodeFromFieldsWithTypes("u64", item.fields.fee_bp),
            sharedFeePool: decodeFromFieldsWithTypes(Option.reified(reified.vector("u8")), item.fields.shared_fee_pool),
        });
    }

    static fromBcs(data: Uint8Array): UpdateFeeShareConfig {
        return UpdateFeeShareConfig.fromFields(UpdateFeeShareConfig.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            prevFeeBp: this.prevFeeBp.toString(),
            prevSharedFeePool: fieldToJSON<Option<Vector<"u8">>>(`${Option.$typeName}<vector<u8>>`, this.prevSharedFeePool),
            feeBp: this.feeBp.toString(),
            sharedFeePool: fieldToJSON<Option<Vector<"u8">>>(`${Option.$typeName}<vector<u8>>`, this.sharedFeePool),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): UpdateFeeShareConfig {
        return UpdateFeeShareConfig.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            prevFeeBp: decodeFromJSONField("u64", field.prevFeeBp),
            prevSharedFeePool: decodeFromJSONField(Option.reified(reified.vector("u8")), field.prevSharedFeePool),
            feeBp: decodeFromJSONField("u64", field.feeBp),
            sharedFeePool: decodeFromJSONField(Option.reified(reified.vector("u8")), field.sharedFeePool),
        });
    }

    static fromJSON(json: Record<string, any>): UpdateFeeShareConfig {
        if (json.$typeName !== UpdateFeeShareConfig.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return UpdateFeeShareConfig.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): UpdateFeeShareConfig {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUpdateFeeShareConfig(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a UpdateFeeShareConfig object`);
        }
        return UpdateFeeShareConfig.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): UpdateFeeShareConfig {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isUpdateFeeShareConfig(data.bcs.type)) {
                throw new Error(`object at is not a UpdateFeeShareConfig object`);
            }

            return UpdateFeeShareConfig.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return UpdateFeeShareConfig.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<UpdateFeeShareConfig> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching UpdateFeeShareConfig object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isUpdateFeeShareConfig(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UpdateFeeShareConfig object`);
        }

        return UpdateFeeShareConfig.fromSuiObjectData(res.data);
    }
}

/* ============================== VAULT =============================== */

export function isVAULT(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::vault::VAULT`;
}

export interface VAULTFields {
    dummyField: ToField<"bool">;
}

export type VAULTReified = Reified<VAULT, VAULTFields>;

export class VAULT implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::vault::VAULT`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = VAULT.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::vault::VAULT`;
    readonly $typeArgs: [];
    readonly $isPhantom = VAULT.$isPhantom;

    readonly dummyField: ToField<"bool">;

    private constructor(typeArgs: [], fields: VAULTFields) {
        this.$fullTypeName = composeSuiType(VAULT.$typeName, ...typeArgs) as `${typeof PKG_V1}::vault::VAULT`;
        this.$typeArgs = typeArgs;

        this.dummyField = fields.dummyField;
    }

    static reified(): VAULTReified {
        return {
            typeName: VAULT.$typeName,
            fullTypeName: composeSuiType(VAULT.$typeName, ...[]) as `${typeof PKG_V1}::vault::VAULT`,
            typeArgs: [] as [],
            isPhantom: VAULT.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => VAULT.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => VAULT.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => VAULT.fromBcs(data),
            bcs: VAULT.bcs,
            fromJSONField: (field: any) => VAULT.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => VAULT.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => VAULT.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => VAULT.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => VAULT.fetch(client, id),
            new: (fields: VAULTFields) => {
                return new VAULT([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return VAULT.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<VAULT>> {
        return phantom(VAULT.reified());
    }
    static get p() {
        return VAULT.phantom();
    }

    static get bcs() {
        return bcs.struct("VAULT", {
            dummy_field: bcs.bool(),
        });
    }

    static fromFields(fields: Record<string, any>): VAULT {
        return VAULT.reified().new({
            dummyField: decodeFromFields("bool", fields.dummy_field),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): VAULT {
        if (!isVAULT(item.type)) {
            throw new Error("not a VAULT type");
        }

        return VAULT.reified().new({
            dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
        });
    }

    static fromBcs(data: Uint8Array): VAULT {
        return VAULT.fromFields(VAULT.bcs.parse(data));
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

    static fromJSONField(field: any): VAULT {
        return VAULT.reified().new({
            dummyField: decodeFromJSONField("bool", field.dummyField),
        });
    }

    static fromJSON(json: Record<string, any>): VAULT {
        if (json.$typeName !== VAULT.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return VAULT.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): VAULT {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isVAULT(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a VAULT object`);
        }
        return VAULT.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): VAULT {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isVAULT(data.bcs.type)) {
                throw new Error(`object at is not a VAULT object`);
            }

            return VAULT.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return VAULT.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<VAULT> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching VAULT object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isVAULT(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a VAULT object`);
        }

        return VAULT.fromSuiObjectData(res.data);
    }
}

/* ============================== Withdraw =============================== */

export function isWithdraw(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::vault::Withdraw`;
}

export interface WithdrawFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
}

export type WithdrawReified = Reified<Withdraw, WithdrawFields>;

export class Withdraw implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::vault::Withdraw`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = Withdraw.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::vault::Withdraw`;
    readonly $typeArgs: [];
    readonly $isPhantom = Withdraw.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;

    private constructor(typeArgs: [], fields: WithdrawFields) {
        this.$fullTypeName = composeSuiType(Withdraw.$typeName, ...typeArgs) as `${typeof PKG_V1}::vault::Withdraw`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.token = fields.token;
        this.amount = fields.amount;
    }

    static reified(): WithdrawReified {
        return {
            typeName: Withdraw.$typeName,
            fullTypeName: composeSuiType(Withdraw.$typeName, ...[]) as `${typeof PKG_V1}::vault::Withdraw`,
            typeArgs: [] as [],
            isPhantom: Withdraw.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Withdraw.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Withdraw.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Withdraw.fromBcs(data),
            bcs: Withdraw.bcs,
            fromJSONField: (field: any) => Withdraw.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Withdraw.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Withdraw.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => Withdraw.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => Withdraw.fetch(client, id),
            new: (fields: WithdrawFields) => {
                return new Withdraw([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Withdraw.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<Withdraw>> {
        return phantom(Withdraw.reified());
    }
    static get p() {
        return Withdraw.phantom();
    }

    static get bcs() {
        return bcs.struct("Withdraw", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            token: TypeName.bcs,
            amount: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): Withdraw {
        return Withdraw.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            token: decodeFromFields(TypeName.reified(), fields.token),
            amount: decodeFromFields("u64", fields.amount),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Withdraw {
        if (!isWithdraw(item.type)) {
            throw new Error("not a Withdraw type");
        }

        return Withdraw.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token),
            amount: decodeFromFieldsWithTypes("u64", item.fields.amount),
        });
    }

    static fromBcs(data: Uint8Array): Withdraw {
        return Withdraw.fromFields(Withdraw.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            token: this.token.toJSONField(),
            amount: this.amount.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): Withdraw {
        return Withdraw.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            token: decodeFromJSONField(TypeName.reified(), field.token),
            amount: decodeFromJSONField("u64", field.amount),
        });
    }

    static fromJSON(json: Record<string, any>): Withdraw {
        if (json.$typeName !== Withdraw.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return Withdraw.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): Withdraw {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isWithdraw(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Withdraw object`);
        }
        return Withdraw.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): Withdraw {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isWithdraw(data.bcs.type)) {
                throw new Error(`object at is not a Withdraw object`);
            }

            return Withdraw.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Withdraw.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<Withdraw> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Withdraw object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isWithdraw(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Withdraw object`);
        }

        return Withdraw.fromSuiObjectData(res.data);
    }
}
