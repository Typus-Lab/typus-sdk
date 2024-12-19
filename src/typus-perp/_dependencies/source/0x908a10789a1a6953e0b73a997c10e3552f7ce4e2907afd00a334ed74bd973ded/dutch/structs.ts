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
import { TypeName } from "../../0x1/type-name/structs";
import { UID } from "../../0x2/object/structs";
import { BigVector } from "../big-vector/structs";
import { PKG_V1 } from "../index";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromB64, fromHEX, toHEX } from "@mysten/sui/utils";

/* ============================== Delivery =============================== */

export function isDelivery(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::dutch::Delivery`;
}

export interface DeliveryFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    token: ToField<TypeName>;
    price: ToField<"u64">;
    size: ToField<"u64">;
    bidderBidValue: ToField<"u64">;
    bidderFee: ToField<"u64">;
    incentiveBidValue: ToField<"u64">;
    incentiveFee: ToField<"u64">;
}

export type DeliveryReified = Reified<Delivery, DeliveryFields>;

export class Delivery implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::dutch::Delivery`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = Delivery.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::dutch::Delivery`;
    readonly $typeArgs: [];
    readonly $isPhantom = Delivery.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly token: ToField<TypeName>;
    readonly price: ToField<"u64">;
    readonly size: ToField<"u64">;
    readonly bidderBidValue: ToField<"u64">;
    readonly bidderFee: ToField<"u64">;
    readonly incentiveBidValue: ToField<"u64">;
    readonly incentiveFee: ToField<"u64">;

    private constructor(typeArgs: [], fields: DeliveryFields) {
        this.$fullTypeName = composeSuiType(Delivery.$typeName, ...typeArgs) as `${typeof PKG_V1}::dutch::Delivery`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.token = fields.token;
        this.price = fields.price;
        this.size = fields.size;
        this.bidderBidValue = fields.bidderBidValue;
        this.bidderFee = fields.bidderFee;
        this.incentiveBidValue = fields.incentiveBidValue;
        this.incentiveFee = fields.incentiveFee;
    }

    static reified(): DeliveryReified {
        return {
            typeName: Delivery.$typeName,
            fullTypeName: composeSuiType(Delivery.$typeName, ...[]) as `${typeof PKG_V1}::dutch::Delivery`,
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
            token: TypeName.bcs,
            price: bcs.u64(),
            size: bcs.u64(),
            bidder_bid_value: bcs.u64(),
            bidder_fee: bcs.u64(),
            incentive_bid_value: bcs.u64(),
            incentive_fee: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): Delivery {
        return Delivery.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            token: decodeFromFields(TypeName.reified(), fields.token),
            price: decodeFromFields("u64", fields.price),
            size: decodeFromFields("u64", fields.size),
            bidderBidValue: decodeFromFields("u64", fields.bidder_bid_value),
            bidderFee: decodeFromFields("u64", fields.bidder_fee),
            incentiveBidValue: decodeFromFields("u64", fields.incentive_bid_value),
            incentiveFee: decodeFromFields("u64", fields.incentive_fee),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Delivery {
        if (!isDelivery(item.type)) {
            throw new Error("not a Delivery type");
        }

        return Delivery.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token),
            price: decodeFromFieldsWithTypes("u64", item.fields.price),
            size: decodeFromFieldsWithTypes("u64", item.fields.size),
            bidderBidValue: decodeFromFieldsWithTypes("u64", item.fields.bidder_bid_value),
            bidderFee: decodeFromFieldsWithTypes("u64", item.fields.bidder_fee),
            incentiveBidValue: decodeFromFieldsWithTypes("u64", item.fields.incentive_bid_value),
            incentiveFee: decodeFromFieldsWithTypes("u64", item.fields.incentive_fee),
        });
    }

    static fromBcs(data: Uint8Array): Delivery {
        return Delivery.fromFields(Delivery.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            token: this.token.toJSONField(),
            price: this.price.toString(),
            size: this.size.toString(),
            bidderBidValue: this.bidderBidValue.toString(),
            bidderFee: this.bidderFee.toString(),
            incentiveBidValue: this.incentiveBidValue.toString(),
            incentiveFee: this.incentiveFee.toString(),
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
            token: decodeFromJSONField(TypeName.reified(), field.token),
            price: decodeFromJSONField("u64", field.price),
            size: decodeFromJSONField("u64", field.size),
            bidderBidValue: decodeFromJSONField("u64", field.bidderBidValue),
            bidderFee: decodeFromJSONField("u64", field.bidderFee),
            incentiveBidValue: decodeFromJSONField("u64", field.incentiveBidValue),
            incentiveFee: decodeFromJSONField("u64", field.incentiveFee),
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

/* ============================== Terminate =============================== */

export function isTerminate(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::dutch::Terminate`;
}

export interface TerminateFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    token: ToField<TypeName>;
}

export type TerminateReified = Reified<Terminate, TerminateFields>;

export class Terminate implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::dutch::Terminate`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = Terminate.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::dutch::Terminate`;
    readonly $typeArgs: [];
    readonly $isPhantom = Terminate.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly token: ToField<TypeName>;

    private constructor(typeArgs: [], fields: TerminateFields) {
        this.$fullTypeName = composeSuiType(Terminate.$typeName, ...typeArgs) as `${typeof PKG_V1}::dutch::Terminate`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.token = fields.token;
    }

    static reified(): TerminateReified {
        return {
            typeName: Terminate.$typeName,
            fullTypeName: composeSuiType(Terminate.$typeName, ...[]) as `${typeof PKG_V1}::dutch::Terminate`,
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

/* ============================== Auction =============================== */

export function isAuction(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::dutch::Auction`;
}

export interface AuctionFields {
    id: ToField<UID>;
    index: ToField<"u64">;
    token: ToField<TypeName>;
    startTsMs: ToField<"u64">;
    endTsMs: ToField<"u64">;
    size: ToField<"u64">;
    decaySpeed: ToField<"u64">;
    initialPrice: ToField<"u64">;
    finalPrice: ToField<"u64">;
    feeBp: ToField<"u64">;
    incentiveBp: ToField<"u64">;
    tokenDecimal: ToField<"u64">;
    sizeDecimal: ToField<"u64">;
    totalBidSize: ToField<"u64">;
    ableToRemoveBid: ToField<"bool">;
    bids: ToField<BigVector<ToPhantom<Bid>>>;
    bidIndex: ToField<"u64">;
}

export type AuctionReified = Reified<Auction, AuctionFields>;

export class Auction implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::dutch::Auction`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = Auction.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::dutch::Auction`;
    readonly $typeArgs: [];
    readonly $isPhantom = Auction.$isPhantom;

    readonly id: ToField<UID>;
    readonly index: ToField<"u64">;
    readonly token: ToField<TypeName>;
    readonly startTsMs: ToField<"u64">;
    readonly endTsMs: ToField<"u64">;
    readonly size: ToField<"u64">;
    readonly decaySpeed: ToField<"u64">;
    readonly initialPrice: ToField<"u64">;
    readonly finalPrice: ToField<"u64">;
    readonly feeBp: ToField<"u64">;
    readonly incentiveBp: ToField<"u64">;
    readonly tokenDecimal: ToField<"u64">;
    readonly sizeDecimal: ToField<"u64">;
    readonly totalBidSize: ToField<"u64">;
    readonly ableToRemoveBid: ToField<"bool">;
    readonly bids: ToField<BigVector<ToPhantom<Bid>>>;
    readonly bidIndex: ToField<"u64">;

    private constructor(typeArgs: [], fields: AuctionFields) {
        this.$fullTypeName = composeSuiType(Auction.$typeName, ...typeArgs) as `${typeof PKG_V1}::dutch::Auction`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.index = fields.index;
        this.token = fields.token;
        this.startTsMs = fields.startTsMs;
        this.endTsMs = fields.endTsMs;
        this.size = fields.size;
        this.decaySpeed = fields.decaySpeed;
        this.initialPrice = fields.initialPrice;
        this.finalPrice = fields.finalPrice;
        this.feeBp = fields.feeBp;
        this.incentiveBp = fields.incentiveBp;
        this.tokenDecimal = fields.tokenDecimal;
        this.sizeDecimal = fields.sizeDecimal;
        this.totalBidSize = fields.totalBidSize;
        this.ableToRemoveBid = fields.ableToRemoveBid;
        this.bids = fields.bids;
        this.bidIndex = fields.bidIndex;
    }

    static reified(): AuctionReified {
        return {
            typeName: Auction.$typeName,
            fullTypeName: composeSuiType(Auction.$typeName, ...[]) as `${typeof PKG_V1}::dutch::Auction`,
            typeArgs: [] as [],
            isPhantom: Auction.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Auction.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Auction.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Auction.fromBcs(data),
            bcs: Auction.bcs,
            fromJSONField: (field: any) => Auction.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Auction.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Auction.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => Auction.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => Auction.fetch(client, id),
            new: (fields: AuctionFields) => {
                return new Auction([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Auction.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<Auction>> {
        return phantom(Auction.reified());
    }
    static get p() {
        return Auction.phantom();
    }

    static get bcs() {
        return bcs.struct("Auction", {
            id: UID.bcs,
            index: bcs.u64(),
            token: TypeName.bcs,
            start_ts_ms: bcs.u64(),
            end_ts_ms: bcs.u64(),
            size: bcs.u64(),
            decay_speed: bcs.u64(),
            initial_price: bcs.u64(),
            final_price: bcs.u64(),
            fee_bp: bcs.u64(),
            incentive_bp: bcs.u64(),
            token_decimal: bcs.u64(),
            size_decimal: bcs.u64(),
            total_bid_size: bcs.u64(),
            able_to_remove_bid: bcs.bool(),
            bids: BigVector.bcs,
            bid_index: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): Auction {
        return Auction.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            index: decodeFromFields("u64", fields.index),
            token: decodeFromFields(TypeName.reified(), fields.token),
            startTsMs: decodeFromFields("u64", fields.start_ts_ms),
            endTsMs: decodeFromFields("u64", fields.end_ts_ms),
            size: decodeFromFields("u64", fields.size),
            decaySpeed: decodeFromFields("u64", fields.decay_speed),
            initialPrice: decodeFromFields("u64", fields.initial_price),
            finalPrice: decodeFromFields("u64", fields.final_price),
            feeBp: decodeFromFields("u64", fields.fee_bp),
            incentiveBp: decodeFromFields("u64", fields.incentive_bp),
            tokenDecimal: decodeFromFields("u64", fields.token_decimal),
            sizeDecimal: decodeFromFields("u64", fields.size_decimal),
            totalBidSize: decodeFromFields("u64", fields.total_bid_size),
            ableToRemoveBid: decodeFromFields("bool", fields.able_to_remove_bid),
            bids: decodeFromFields(BigVector.reified(reified.phantom(Bid.reified())), fields.bids),
            bidIndex: decodeFromFields("u64", fields.bid_index),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Auction {
        if (!isAuction(item.type)) {
            throw new Error("not a Auction type");
        }

        return Auction.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token),
            startTsMs: decodeFromFieldsWithTypes("u64", item.fields.start_ts_ms),
            endTsMs: decodeFromFieldsWithTypes("u64", item.fields.end_ts_ms),
            size: decodeFromFieldsWithTypes("u64", item.fields.size),
            decaySpeed: decodeFromFieldsWithTypes("u64", item.fields.decay_speed),
            initialPrice: decodeFromFieldsWithTypes("u64", item.fields.initial_price),
            finalPrice: decodeFromFieldsWithTypes("u64", item.fields.final_price),
            feeBp: decodeFromFieldsWithTypes("u64", item.fields.fee_bp),
            incentiveBp: decodeFromFieldsWithTypes("u64", item.fields.incentive_bp),
            tokenDecimal: decodeFromFieldsWithTypes("u64", item.fields.token_decimal),
            sizeDecimal: decodeFromFieldsWithTypes("u64", item.fields.size_decimal),
            totalBidSize: decodeFromFieldsWithTypes("u64", item.fields.total_bid_size),
            ableToRemoveBid: decodeFromFieldsWithTypes("bool", item.fields.able_to_remove_bid),
            bids: decodeFromFieldsWithTypes(BigVector.reified(reified.phantom(Bid.reified())), item.fields.bids),
            bidIndex: decodeFromFieldsWithTypes("u64", item.fields.bid_index),
        });
    }

    static fromBcs(data: Uint8Array): Auction {
        return Auction.fromFields(Auction.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            index: this.index.toString(),
            token: this.token.toJSONField(),
            startTsMs: this.startTsMs.toString(),
            endTsMs: this.endTsMs.toString(),
            size: this.size.toString(),
            decaySpeed: this.decaySpeed.toString(),
            initialPrice: this.initialPrice.toString(),
            finalPrice: this.finalPrice.toString(),
            feeBp: this.feeBp.toString(),
            incentiveBp: this.incentiveBp.toString(),
            tokenDecimal: this.tokenDecimal.toString(),
            sizeDecimal: this.sizeDecimal.toString(),
            totalBidSize: this.totalBidSize.toString(),
            ableToRemoveBid: this.ableToRemoveBid,
            bids: this.bids.toJSONField(),
            bidIndex: this.bidIndex.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): Auction {
        return Auction.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            index: decodeFromJSONField("u64", field.index),
            token: decodeFromJSONField(TypeName.reified(), field.token),
            startTsMs: decodeFromJSONField("u64", field.startTsMs),
            endTsMs: decodeFromJSONField("u64", field.endTsMs),
            size: decodeFromJSONField("u64", field.size),
            decaySpeed: decodeFromJSONField("u64", field.decaySpeed),
            initialPrice: decodeFromJSONField("u64", field.initialPrice),
            finalPrice: decodeFromJSONField("u64", field.finalPrice),
            feeBp: decodeFromJSONField("u64", field.feeBp),
            incentiveBp: decodeFromJSONField("u64", field.incentiveBp),
            tokenDecimal: decodeFromJSONField("u64", field.tokenDecimal),
            sizeDecimal: decodeFromJSONField("u64", field.sizeDecimal),
            totalBidSize: decodeFromJSONField("u64", field.totalBidSize),
            ableToRemoveBid: decodeFromJSONField("bool", field.ableToRemoveBid),
            bids: decodeFromJSONField(BigVector.reified(reified.phantom(Bid.reified())), field.bids),
            bidIndex: decodeFromJSONField("u64", field.bidIndex),
        });
    }

    static fromJSON(json: Record<string, any>): Auction {
        if (json.$typeName !== Auction.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return Auction.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): Auction {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isAuction(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Auction object`);
        }
        return Auction.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): Auction {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isAuction(data.bcs.type)) {
                throw new Error(`object at is not a Auction object`);
            }

            return Auction.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Auction.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<Auction> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Auction object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isAuction(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Auction object`);
        }

        return Auction.fromSuiObjectData(res.data);
    }
}

/* ============================== Bid =============================== */

export function isBid(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::dutch::Bid`;
}

export interface BidFields {
    index: ToField<"u64">;
    bidder: ToField<"address">;
    price: ToField<"u64">;
    size: ToField<"u64">;
    bidderBalance: ToField<"u64">;
    incentiveBalance: ToField<"u64">;
    feeDiscount: ToField<"u64">;
    tsMs: ToField<"u64">;
}

export type BidReified = Reified<Bid, BidFields>;

export class Bid implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::dutch::Bid`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = Bid.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::dutch::Bid`;
    readonly $typeArgs: [];
    readonly $isPhantom = Bid.$isPhantom;

    readonly index: ToField<"u64">;
    readonly bidder: ToField<"address">;
    readonly price: ToField<"u64">;
    readonly size: ToField<"u64">;
    readonly bidderBalance: ToField<"u64">;
    readonly incentiveBalance: ToField<"u64">;
    readonly feeDiscount: ToField<"u64">;
    readonly tsMs: ToField<"u64">;

    private constructor(typeArgs: [], fields: BidFields) {
        this.$fullTypeName = composeSuiType(Bid.$typeName, ...typeArgs) as `${typeof PKG_V1}::dutch::Bid`;
        this.$typeArgs = typeArgs;

        this.index = fields.index;
        this.bidder = fields.bidder;
        this.price = fields.price;
        this.size = fields.size;
        this.bidderBalance = fields.bidderBalance;
        this.incentiveBalance = fields.incentiveBalance;
        this.feeDiscount = fields.feeDiscount;
        this.tsMs = fields.tsMs;
    }

    static reified(): BidReified {
        return {
            typeName: Bid.$typeName,
            fullTypeName: composeSuiType(Bid.$typeName, ...[]) as `${typeof PKG_V1}::dutch::Bid`,
            typeArgs: [] as [],
            isPhantom: Bid.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Bid.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Bid.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Bid.fromBcs(data),
            bcs: Bid.bcs,
            fromJSONField: (field: any) => Bid.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Bid.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Bid.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => Bid.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => Bid.fetch(client, id),
            new: (fields: BidFields) => {
                return new Bid([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Bid.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<Bid>> {
        return phantom(Bid.reified());
    }
    static get p() {
        return Bid.phantom();
    }

    static get bcs() {
        return bcs.struct("Bid", {
            index: bcs.u64(),
            bidder: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            price: bcs.u64(),
            size: bcs.u64(),
            bidder_balance: bcs.u64(),
            incentive_balance: bcs.u64(),
            fee_discount: bcs.u64(),
            ts_ms: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): Bid {
        return Bid.reified().new({
            index: decodeFromFields("u64", fields.index),
            bidder: decodeFromFields("address", fields.bidder),
            price: decodeFromFields("u64", fields.price),
            size: decodeFromFields("u64", fields.size),
            bidderBalance: decodeFromFields("u64", fields.bidder_balance),
            incentiveBalance: decodeFromFields("u64", fields.incentive_balance),
            feeDiscount: decodeFromFields("u64", fields.fee_discount),
            tsMs: decodeFromFields("u64", fields.ts_ms),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Bid {
        if (!isBid(item.type)) {
            throw new Error("not a Bid type");
        }

        return Bid.reified().new({
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            bidder: decodeFromFieldsWithTypes("address", item.fields.bidder),
            price: decodeFromFieldsWithTypes("u64", item.fields.price),
            size: decodeFromFieldsWithTypes("u64", item.fields.size),
            bidderBalance: decodeFromFieldsWithTypes("u64", item.fields.bidder_balance),
            incentiveBalance: decodeFromFieldsWithTypes("u64", item.fields.incentive_balance),
            feeDiscount: decodeFromFieldsWithTypes("u64", item.fields.fee_discount),
            tsMs: decodeFromFieldsWithTypes("u64", item.fields.ts_ms),
        });
    }

    static fromBcs(data: Uint8Array): Bid {
        return Bid.fromFields(Bid.bcs.parse(data));
    }

    toJSONField() {
        return {
            index: this.index.toString(),
            bidder: this.bidder,
            price: this.price.toString(),
            size: this.size.toString(),
            bidderBalance: this.bidderBalance.toString(),
            incentiveBalance: this.incentiveBalance.toString(),
            feeDiscount: this.feeDiscount.toString(),
            tsMs: this.tsMs.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): Bid {
        return Bid.reified().new({
            index: decodeFromJSONField("u64", field.index),
            bidder: decodeFromJSONField("address", field.bidder),
            price: decodeFromJSONField("u64", field.price),
            size: decodeFromJSONField("u64", field.size),
            bidderBalance: decodeFromJSONField("u64", field.bidderBalance),
            incentiveBalance: decodeFromJSONField("u64", field.incentiveBalance),
            feeDiscount: decodeFromJSONField("u64", field.feeDiscount),
            tsMs: decodeFromJSONField("u64", field.tsMs),
        });
    }

    static fromJSON(json: Record<string, any>): Bid {
        if (json.$typeName !== Bid.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return Bid.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): Bid {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isBid(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Bid object`);
        }
        return Bid.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): Bid {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBid(data.bcs.type)) {
                throw new Error(`object at is not a Bid object`);
            }

            return Bid.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Bid.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<Bid> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Bid object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isBid(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Bid object`);
        }

        return Bid.fromSuiObjectData(res.data);
    }
}

/* ============================== DUTCH =============================== */

export function isDUTCH(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::dutch::DUTCH`;
}

export interface DUTCHFields {
    dummyField: ToField<"bool">;
}

export type DUTCHReified = Reified<DUTCH, DUTCHFields>;

export class DUTCH implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::dutch::DUTCH`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = DUTCH.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::dutch::DUTCH`;
    readonly $typeArgs: [];
    readonly $isPhantom = DUTCH.$isPhantom;

    readonly dummyField: ToField<"bool">;

    private constructor(typeArgs: [], fields: DUTCHFields) {
        this.$fullTypeName = composeSuiType(DUTCH.$typeName, ...typeArgs) as `${typeof PKG_V1}::dutch::DUTCH`;
        this.$typeArgs = typeArgs;

        this.dummyField = fields.dummyField;
    }

    static reified(): DUTCHReified {
        return {
            typeName: DUTCH.$typeName,
            fullTypeName: composeSuiType(DUTCH.$typeName, ...[]) as `${typeof PKG_V1}::dutch::DUTCH`,
            typeArgs: [] as [],
            isPhantom: DUTCH.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => DUTCH.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => DUTCH.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => DUTCH.fromBcs(data),
            bcs: DUTCH.bcs,
            fromJSONField: (field: any) => DUTCH.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => DUTCH.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => DUTCH.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => DUTCH.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => DUTCH.fetch(client, id),
            new: (fields: DUTCHFields) => {
                return new DUTCH([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return DUTCH.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<DUTCH>> {
        return phantom(DUTCH.reified());
    }
    static get p() {
        return DUTCH.phantom();
    }

    static get bcs() {
        return bcs.struct("DUTCH", {
            dummy_field: bcs.bool(),
        });
    }

    static fromFields(fields: Record<string, any>): DUTCH {
        return DUTCH.reified().new({
            dummyField: decodeFromFields("bool", fields.dummy_field),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): DUTCH {
        if (!isDUTCH(item.type)) {
            throw new Error("not a DUTCH type");
        }

        return DUTCH.reified().new({
            dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
        });
    }

    static fromBcs(data: Uint8Array): DUTCH {
        return DUTCH.fromFields(DUTCH.bcs.parse(data));
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

    static fromJSONField(field: any): DUTCH {
        return DUTCH.reified().new({
            dummyField: decodeFromJSONField("bool", field.dummyField),
        });
    }

    static fromJSON(json: Record<string, any>): DUTCH {
        if (json.$typeName !== DUTCH.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return DUTCH.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): DUTCH {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isDUTCH(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a DUTCH object`);
        }
        return DUTCH.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): DUTCH {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDUTCH(data.bcs.type)) {
                throw new Error(`object at is not a DUTCH object`);
            }

            return DUTCH.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return DUTCH.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<DUTCH> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching DUTCH object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isDUTCH(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DUTCH object`);
        }

        return DUTCH.fromSuiObjectData(res.data);
    }
}

/* ============================== NewBid =============================== */

export function isNewBid(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::dutch::NewBid`;
}

export interface NewBidFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    token: ToField<TypeName>;
    bidIndex: ToField<"u64">;
    price: ToField<"u64">;
    size: ToField<"u64">;
    bidderBalance: ToField<"u64">;
    incentiveBalance: ToField<"u64">;
    tsMs: ToField<"u64">;
}

export type NewBidReified = Reified<NewBid, NewBidFields>;

export class NewBid implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::dutch::NewBid`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = NewBid.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::dutch::NewBid`;
    readonly $typeArgs: [];
    readonly $isPhantom = NewBid.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly token: ToField<TypeName>;
    readonly bidIndex: ToField<"u64">;
    readonly price: ToField<"u64">;
    readonly size: ToField<"u64">;
    readonly bidderBalance: ToField<"u64">;
    readonly incentiveBalance: ToField<"u64">;
    readonly tsMs: ToField<"u64">;

    private constructor(typeArgs: [], fields: NewBidFields) {
        this.$fullTypeName = composeSuiType(NewBid.$typeName, ...typeArgs) as `${typeof PKG_V1}::dutch::NewBid`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.token = fields.token;
        this.bidIndex = fields.bidIndex;
        this.price = fields.price;
        this.size = fields.size;
        this.bidderBalance = fields.bidderBalance;
        this.incentiveBalance = fields.incentiveBalance;
        this.tsMs = fields.tsMs;
    }

    static reified(): NewBidReified {
        return {
            typeName: NewBid.$typeName,
            fullTypeName: composeSuiType(NewBid.$typeName, ...[]) as `${typeof PKG_V1}::dutch::NewBid`,
            typeArgs: [] as [],
            isPhantom: NewBid.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => NewBid.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => NewBid.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => NewBid.fromBcs(data),
            bcs: NewBid.bcs,
            fromJSONField: (field: any) => NewBid.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => NewBid.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => NewBid.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => NewBid.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => NewBid.fetch(client, id),
            new: (fields: NewBidFields) => {
                return new NewBid([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return NewBid.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<NewBid>> {
        return phantom(NewBid.reified());
    }
    static get p() {
        return NewBid.phantom();
    }

    static get bcs() {
        return bcs.struct("NewBid", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            token: TypeName.bcs,
            bid_index: bcs.u64(),
            price: bcs.u64(),
            size: bcs.u64(),
            bidder_balance: bcs.u64(),
            incentive_balance: bcs.u64(),
            ts_ms: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): NewBid {
        return NewBid.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            token: decodeFromFields(TypeName.reified(), fields.token),
            bidIndex: decodeFromFields("u64", fields.bid_index),
            price: decodeFromFields("u64", fields.price),
            size: decodeFromFields("u64", fields.size),
            bidderBalance: decodeFromFields("u64", fields.bidder_balance),
            incentiveBalance: decodeFromFields("u64", fields.incentive_balance),
            tsMs: decodeFromFields("u64", fields.ts_ms),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): NewBid {
        if (!isNewBid(item.type)) {
            throw new Error("not a NewBid type");
        }

        return NewBid.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token),
            bidIndex: decodeFromFieldsWithTypes("u64", item.fields.bid_index),
            price: decodeFromFieldsWithTypes("u64", item.fields.price),
            size: decodeFromFieldsWithTypes("u64", item.fields.size),
            bidderBalance: decodeFromFieldsWithTypes("u64", item.fields.bidder_balance),
            incentiveBalance: decodeFromFieldsWithTypes("u64", item.fields.incentive_balance),
            tsMs: decodeFromFieldsWithTypes("u64", item.fields.ts_ms),
        });
    }

    static fromBcs(data: Uint8Array): NewBid {
        return NewBid.fromFields(NewBid.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            token: this.token.toJSONField(),
            bidIndex: this.bidIndex.toString(),
            price: this.price.toString(),
            size: this.size.toString(),
            bidderBalance: this.bidderBalance.toString(),
            incentiveBalance: this.incentiveBalance.toString(),
            tsMs: this.tsMs.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): NewBid {
        return NewBid.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            token: decodeFromJSONField(TypeName.reified(), field.token),
            bidIndex: decodeFromJSONField("u64", field.bidIndex),
            price: decodeFromJSONField("u64", field.price),
            size: decodeFromJSONField("u64", field.size),
            bidderBalance: decodeFromJSONField("u64", field.bidderBalance),
            incentiveBalance: decodeFromJSONField("u64", field.incentiveBalance),
            tsMs: decodeFromJSONField("u64", field.tsMs),
        });
    }

    static fromJSON(json: Record<string, any>): NewBid {
        if (json.$typeName !== NewBid.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return NewBid.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): NewBid {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isNewBid(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a NewBid object`);
        }
        return NewBid.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): NewBid {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isNewBid(data.bcs.type)) {
                throw new Error(`object at is not a NewBid object`);
            }

            return NewBid.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return NewBid.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<NewBid> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching NewBid object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isNewBid(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a NewBid object`);
        }

        return NewBid.fromSuiObjectData(res.data);
    }
}

/* ============================== RemoveBid =============================== */

export function isRemoveBid(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::dutch::RemoveBid`;
}

export interface RemoveBidFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    token: ToField<TypeName>;
    bidIndex: ToField<"u64">;
    price: ToField<"u64">;
    size: ToField<"u64">;
    bidderBalance: ToField<"u64">;
    incentiveBalance: ToField<"u64">;
    feeDiscount: ToField<"u64">;
    tsMs: ToField<"u64">;
}

export type RemoveBidReified = Reified<RemoveBid, RemoveBidFields>;

export class RemoveBid implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::dutch::RemoveBid`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = RemoveBid.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::dutch::RemoveBid`;
    readonly $typeArgs: [];
    readonly $isPhantom = RemoveBid.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly token: ToField<TypeName>;
    readonly bidIndex: ToField<"u64">;
    readonly price: ToField<"u64">;
    readonly size: ToField<"u64">;
    readonly bidderBalance: ToField<"u64">;
    readonly incentiveBalance: ToField<"u64">;
    readonly feeDiscount: ToField<"u64">;
    readonly tsMs: ToField<"u64">;

    private constructor(typeArgs: [], fields: RemoveBidFields) {
        this.$fullTypeName = composeSuiType(RemoveBid.$typeName, ...typeArgs) as `${typeof PKG_V1}::dutch::RemoveBid`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.token = fields.token;
        this.bidIndex = fields.bidIndex;
        this.price = fields.price;
        this.size = fields.size;
        this.bidderBalance = fields.bidderBalance;
        this.incentiveBalance = fields.incentiveBalance;
        this.feeDiscount = fields.feeDiscount;
        this.tsMs = fields.tsMs;
    }

    static reified(): RemoveBidReified {
        return {
            typeName: RemoveBid.$typeName,
            fullTypeName: composeSuiType(RemoveBid.$typeName, ...[]) as `${typeof PKG_V1}::dutch::RemoveBid`,
            typeArgs: [] as [],
            isPhantom: RemoveBid.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => RemoveBid.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => RemoveBid.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => RemoveBid.fromBcs(data),
            bcs: RemoveBid.bcs,
            fromJSONField: (field: any) => RemoveBid.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => RemoveBid.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => RemoveBid.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => RemoveBid.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => RemoveBid.fetch(client, id),
            new: (fields: RemoveBidFields) => {
                return new RemoveBid([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return RemoveBid.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<RemoveBid>> {
        return phantom(RemoveBid.reified());
    }
    static get p() {
        return RemoveBid.phantom();
    }

    static get bcs() {
        return bcs.struct("RemoveBid", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            token: TypeName.bcs,
            bid_index: bcs.u64(),
            price: bcs.u64(),
            size: bcs.u64(),
            bidder_balance: bcs.u64(),
            incentive_balance: bcs.u64(),
            fee_discount: bcs.u64(),
            ts_ms: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): RemoveBid {
        return RemoveBid.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            token: decodeFromFields(TypeName.reified(), fields.token),
            bidIndex: decodeFromFields("u64", fields.bid_index),
            price: decodeFromFields("u64", fields.price),
            size: decodeFromFields("u64", fields.size),
            bidderBalance: decodeFromFields("u64", fields.bidder_balance),
            incentiveBalance: decodeFromFields("u64", fields.incentive_balance),
            feeDiscount: decodeFromFields("u64", fields.fee_discount),
            tsMs: decodeFromFields("u64", fields.ts_ms),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): RemoveBid {
        if (!isRemoveBid(item.type)) {
            throw new Error("not a RemoveBid type");
        }

        return RemoveBid.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token),
            bidIndex: decodeFromFieldsWithTypes("u64", item.fields.bid_index),
            price: decodeFromFieldsWithTypes("u64", item.fields.price),
            size: decodeFromFieldsWithTypes("u64", item.fields.size),
            bidderBalance: decodeFromFieldsWithTypes("u64", item.fields.bidder_balance),
            incentiveBalance: decodeFromFieldsWithTypes("u64", item.fields.incentive_balance),
            feeDiscount: decodeFromFieldsWithTypes("u64", item.fields.fee_discount),
            tsMs: decodeFromFieldsWithTypes("u64", item.fields.ts_ms),
        });
    }

    static fromBcs(data: Uint8Array): RemoveBid {
        return RemoveBid.fromFields(RemoveBid.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            token: this.token.toJSONField(),
            bidIndex: this.bidIndex.toString(),
            price: this.price.toString(),
            size: this.size.toString(),
            bidderBalance: this.bidderBalance.toString(),
            incentiveBalance: this.incentiveBalance.toString(),
            feeDiscount: this.feeDiscount.toString(),
            tsMs: this.tsMs.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): RemoveBid {
        return RemoveBid.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            token: decodeFromJSONField(TypeName.reified(), field.token),
            bidIndex: decodeFromJSONField("u64", field.bidIndex),
            price: decodeFromJSONField("u64", field.price),
            size: decodeFromJSONField("u64", field.size),
            bidderBalance: decodeFromJSONField("u64", field.bidderBalance),
            incentiveBalance: decodeFromJSONField("u64", field.incentiveBalance),
            feeDiscount: decodeFromJSONField("u64", field.feeDiscount),
            tsMs: decodeFromJSONField("u64", field.tsMs),
        });
    }

    static fromJSON(json: Record<string, any>): RemoveBid {
        if (json.$typeName !== RemoveBid.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return RemoveBid.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): RemoveBid {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRemoveBid(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a RemoveBid object`);
        }
        return RemoveBid.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): RemoveBid {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isRemoveBid(data.bcs.type)) {
                throw new Error(`object at is not a RemoveBid object`);
            }

            return RemoveBid.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return RemoveBid.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<RemoveBid> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching RemoveBid object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isRemoveBid(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RemoveBid object`);
        }

        return RemoveBid.fromSuiObjectData(res.data);
    }
}

/* ============================== UpdateAuctionConfig =============================== */

export function isUpdateAuctionConfig(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::dutch::UpdateAuctionConfig`;
}

export interface UpdateAuctionConfigFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    prevStartTsMs: ToField<"u64">;
    prevEndTsMs: ToField<"u64">;
    prevDecaySpeed: ToField<"u64">;
    prevInitialPrice: ToField<"u64">;
    prevFinalPrice: ToField<"u64">;
    prevFeeBp: ToField<"u64">;
    prevIncentiveBp: ToField<"u64">;
    prevTokenDecimal: ToField<"u64">;
    prevSizeDecimal: ToField<"u64">;
    prevAbleToRemoveBid: ToField<"bool">;
    startTsMs: ToField<"u64">;
    endTsMs: ToField<"u64">;
    decaySpeed: ToField<"u64">;
    initialPrice: ToField<"u64">;
    finalPrice: ToField<"u64">;
    feeBp: ToField<"u64">;
    incentiveBp: ToField<"u64">;
    tokenDecimal: ToField<"u64">;
    sizeDecimal: ToField<"u64">;
    ableToRemoveBid: ToField<"bool">;
}

export type UpdateAuctionConfigReified = Reified<UpdateAuctionConfig, UpdateAuctionConfigFields>;

export class UpdateAuctionConfig implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::dutch::UpdateAuctionConfig`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = UpdateAuctionConfig.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::dutch::UpdateAuctionConfig`;
    readonly $typeArgs: [];
    readonly $isPhantom = UpdateAuctionConfig.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly prevStartTsMs: ToField<"u64">;
    readonly prevEndTsMs: ToField<"u64">;
    readonly prevDecaySpeed: ToField<"u64">;
    readonly prevInitialPrice: ToField<"u64">;
    readonly prevFinalPrice: ToField<"u64">;
    readonly prevFeeBp: ToField<"u64">;
    readonly prevIncentiveBp: ToField<"u64">;
    readonly prevTokenDecimal: ToField<"u64">;
    readonly prevSizeDecimal: ToField<"u64">;
    readonly prevAbleToRemoveBid: ToField<"bool">;
    readonly startTsMs: ToField<"u64">;
    readonly endTsMs: ToField<"u64">;
    readonly decaySpeed: ToField<"u64">;
    readonly initialPrice: ToField<"u64">;
    readonly finalPrice: ToField<"u64">;
    readonly feeBp: ToField<"u64">;
    readonly incentiveBp: ToField<"u64">;
    readonly tokenDecimal: ToField<"u64">;
    readonly sizeDecimal: ToField<"u64">;
    readonly ableToRemoveBid: ToField<"bool">;

    private constructor(typeArgs: [], fields: UpdateAuctionConfigFields) {
        this.$fullTypeName = composeSuiType(UpdateAuctionConfig.$typeName, ...typeArgs) as `${typeof PKG_V1}::dutch::UpdateAuctionConfig`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.prevStartTsMs = fields.prevStartTsMs;
        this.prevEndTsMs = fields.prevEndTsMs;
        this.prevDecaySpeed = fields.prevDecaySpeed;
        this.prevInitialPrice = fields.prevInitialPrice;
        this.prevFinalPrice = fields.prevFinalPrice;
        this.prevFeeBp = fields.prevFeeBp;
        this.prevIncentiveBp = fields.prevIncentiveBp;
        this.prevTokenDecimal = fields.prevTokenDecimal;
        this.prevSizeDecimal = fields.prevSizeDecimal;
        this.prevAbleToRemoveBid = fields.prevAbleToRemoveBid;
        this.startTsMs = fields.startTsMs;
        this.endTsMs = fields.endTsMs;
        this.decaySpeed = fields.decaySpeed;
        this.initialPrice = fields.initialPrice;
        this.finalPrice = fields.finalPrice;
        this.feeBp = fields.feeBp;
        this.incentiveBp = fields.incentiveBp;
        this.tokenDecimal = fields.tokenDecimal;
        this.sizeDecimal = fields.sizeDecimal;
        this.ableToRemoveBid = fields.ableToRemoveBid;
    }

    static reified(): UpdateAuctionConfigReified {
        return {
            typeName: UpdateAuctionConfig.$typeName,
            fullTypeName: composeSuiType(UpdateAuctionConfig.$typeName, ...[]) as `${typeof PKG_V1}::dutch::UpdateAuctionConfig`,
            typeArgs: [] as [],
            isPhantom: UpdateAuctionConfig.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => UpdateAuctionConfig.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => UpdateAuctionConfig.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => UpdateAuctionConfig.fromBcs(data),
            bcs: UpdateAuctionConfig.bcs,
            fromJSONField: (field: any) => UpdateAuctionConfig.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => UpdateAuctionConfig.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => UpdateAuctionConfig.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => UpdateAuctionConfig.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => UpdateAuctionConfig.fetch(client, id),
            new: (fields: UpdateAuctionConfigFields) => {
                return new UpdateAuctionConfig([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return UpdateAuctionConfig.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<UpdateAuctionConfig>> {
        return phantom(UpdateAuctionConfig.reified());
    }
    static get p() {
        return UpdateAuctionConfig.phantom();
    }

    static get bcs() {
        return bcs.struct("UpdateAuctionConfig", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            prev_start_ts_ms: bcs.u64(),
            prev_end_ts_ms: bcs.u64(),
            prev_decay_speed: bcs.u64(),
            prev_initial_price: bcs.u64(),
            prev_final_price: bcs.u64(),
            prev_fee_bp: bcs.u64(),
            prev_incentive_bp: bcs.u64(),
            prev_token_decimal: bcs.u64(),
            prev_size_decimal: bcs.u64(),
            prev_able_to_remove_bid: bcs.bool(),
            start_ts_ms: bcs.u64(),
            end_ts_ms: bcs.u64(),
            decay_speed: bcs.u64(),
            initial_price: bcs.u64(),
            final_price: bcs.u64(),
            fee_bp: bcs.u64(),
            incentive_bp: bcs.u64(),
            token_decimal: bcs.u64(),
            size_decimal: bcs.u64(),
            able_to_remove_bid: bcs.bool(),
        });
    }

    static fromFields(fields: Record<string, any>): UpdateAuctionConfig {
        return UpdateAuctionConfig.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            prevStartTsMs: decodeFromFields("u64", fields.prev_start_ts_ms),
            prevEndTsMs: decodeFromFields("u64", fields.prev_end_ts_ms),
            prevDecaySpeed: decodeFromFields("u64", fields.prev_decay_speed),
            prevInitialPrice: decodeFromFields("u64", fields.prev_initial_price),
            prevFinalPrice: decodeFromFields("u64", fields.prev_final_price),
            prevFeeBp: decodeFromFields("u64", fields.prev_fee_bp),
            prevIncentiveBp: decodeFromFields("u64", fields.prev_incentive_bp),
            prevTokenDecimal: decodeFromFields("u64", fields.prev_token_decimal),
            prevSizeDecimal: decodeFromFields("u64", fields.prev_size_decimal),
            prevAbleToRemoveBid: decodeFromFields("bool", fields.prev_able_to_remove_bid),
            startTsMs: decodeFromFields("u64", fields.start_ts_ms),
            endTsMs: decodeFromFields("u64", fields.end_ts_ms),
            decaySpeed: decodeFromFields("u64", fields.decay_speed),
            initialPrice: decodeFromFields("u64", fields.initial_price),
            finalPrice: decodeFromFields("u64", fields.final_price),
            feeBp: decodeFromFields("u64", fields.fee_bp),
            incentiveBp: decodeFromFields("u64", fields.incentive_bp),
            tokenDecimal: decodeFromFields("u64", fields.token_decimal),
            sizeDecimal: decodeFromFields("u64", fields.size_decimal),
            ableToRemoveBid: decodeFromFields("bool", fields.able_to_remove_bid),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): UpdateAuctionConfig {
        if (!isUpdateAuctionConfig(item.type)) {
            throw new Error("not a UpdateAuctionConfig type");
        }

        return UpdateAuctionConfig.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            prevStartTsMs: decodeFromFieldsWithTypes("u64", item.fields.prev_start_ts_ms),
            prevEndTsMs: decodeFromFieldsWithTypes("u64", item.fields.prev_end_ts_ms),
            prevDecaySpeed: decodeFromFieldsWithTypes("u64", item.fields.prev_decay_speed),
            prevInitialPrice: decodeFromFieldsWithTypes("u64", item.fields.prev_initial_price),
            prevFinalPrice: decodeFromFieldsWithTypes("u64", item.fields.prev_final_price),
            prevFeeBp: decodeFromFieldsWithTypes("u64", item.fields.prev_fee_bp),
            prevIncentiveBp: decodeFromFieldsWithTypes("u64", item.fields.prev_incentive_bp),
            prevTokenDecimal: decodeFromFieldsWithTypes("u64", item.fields.prev_token_decimal),
            prevSizeDecimal: decodeFromFieldsWithTypes("u64", item.fields.prev_size_decimal),
            prevAbleToRemoveBid: decodeFromFieldsWithTypes("bool", item.fields.prev_able_to_remove_bid),
            startTsMs: decodeFromFieldsWithTypes("u64", item.fields.start_ts_ms),
            endTsMs: decodeFromFieldsWithTypes("u64", item.fields.end_ts_ms),
            decaySpeed: decodeFromFieldsWithTypes("u64", item.fields.decay_speed),
            initialPrice: decodeFromFieldsWithTypes("u64", item.fields.initial_price),
            finalPrice: decodeFromFieldsWithTypes("u64", item.fields.final_price),
            feeBp: decodeFromFieldsWithTypes("u64", item.fields.fee_bp),
            incentiveBp: decodeFromFieldsWithTypes("u64", item.fields.incentive_bp),
            tokenDecimal: decodeFromFieldsWithTypes("u64", item.fields.token_decimal),
            sizeDecimal: decodeFromFieldsWithTypes("u64", item.fields.size_decimal),
            ableToRemoveBid: decodeFromFieldsWithTypes("bool", item.fields.able_to_remove_bid),
        });
    }

    static fromBcs(data: Uint8Array): UpdateAuctionConfig {
        return UpdateAuctionConfig.fromFields(UpdateAuctionConfig.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            prevStartTsMs: this.prevStartTsMs.toString(),
            prevEndTsMs: this.prevEndTsMs.toString(),
            prevDecaySpeed: this.prevDecaySpeed.toString(),
            prevInitialPrice: this.prevInitialPrice.toString(),
            prevFinalPrice: this.prevFinalPrice.toString(),
            prevFeeBp: this.prevFeeBp.toString(),
            prevIncentiveBp: this.prevIncentiveBp.toString(),
            prevTokenDecimal: this.prevTokenDecimal.toString(),
            prevSizeDecimal: this.prevSizeDecimal.toString(),
            prevAbleToRemoveBid: this.prevAbleToRemoveBid,
            startTsMs: this.startTsMs.toString(),
            endTsMs: this.endTsMs.toString(),
            decaySpeed: this.decaySpeed.toString(),
            initialPrice: this.initialPrice.toString(),
            finalPrice: this.finalPrice.toString(),
            feeBp: this.feeBp.toString(),
            incentiveBp: this.incentiveBp.toString(),
            tokenDecimal: this.tokenDecimal.toString(),
            sizeDecimal: this.sizeDecimal.toString(),
            ableToRemoveBid: this.ableToRemoveBid,
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): UpdateAuctionConfig {
        return UpdateAuctionConfig.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            prevStartTsMs: decodeFromJSONField("u64", field.prevStartTsMs),
            prevEndTsMs: decodeFromJSONField("u64", field.prevEndTsMs),
            prevDecaySpeed: decodeFromJSONField("u64", field.prevDecaySpeed),
            prevInitialPrice: decodeFromJSONField("u64", field.prevInitialPrice),
            prevFinalPrice: decodeFromJSONField("u64", field.prevFinalPrice),
            prevFeeBp: decodeFromJSONField("u64", field.prevFeeBp),
            prevIncentiveBp: decodeFromJSONField("u64", field.prevIncentiveBp),
            prevTokenDecimal: decodeFromJSONField("u64", field.prevTokenDecimal),
            prevSizeDecimal: decodeFromJSONField("u64", field.prevSizeDecimal),
            prevAbleToRemoveBid: decodeFromJSONField("bool", field.prevAbleToRemoveBid),
            startTsMs: decodeFromJSONField("u64", field.startTsMs),
            endTsMs: decodeFromJSONField("u64", field.endTsMs),
            decaySpeed: decodeFromJSONField("u64", field.decaySpeed),
            initialPrice: decodeFromJSONField("u64", field.initialPrice),
            finalPrice: decodeFromJSONField("u64", field.finalPrice),
            feeBp: decodeFromJSONField("u64", field.feeBp),
            incentiveBp: decodeFromJSONField("u64", field.incentiveBp),
            tokenDecimal: decodeFromJSONField("u64", field.tokenDecimal),
            sizeDecimal: decodeFromJSONField("u64", field.sizeDecimal),
            ableToRemoveBid: decodeFromJSONField("bool", field.ableToRemoveBid),
        });
    }

    static fromJSON(json: Record<string, any>): UpdateAuctionConfig {
        if (json.$typeName !== UpdateAuctionConfig.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return UpdateAuctionConfig.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): UpdateAuctionConfig {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUpdateAuctionConfig(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a UpdateAuctionConfig object`);
        }
        return UpdateAuctionConfig.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): UpdateAuctionConfig {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isUpdateAuctionConfig(data.bcs.type)) {
                throw new Error(`object at is not a UpdateAuctionConfig object`);
            }

            return UpdateAuctionConfig.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return UpdateAuctionConfig.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<UpdateAuctionConfig> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching UpdateAuctionConfig object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isUpdateAuctionConfig(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UpdateAuctionConfig object`);
        }

        return UpdateAuctionConfig.fromSuiObjectData(res.data);
    }
}
