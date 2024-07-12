import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, ToTypeStr as ToPhantom } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { TypeName } from "../../0x1/type-name/structs";
import { UID } from "../../0x2/object/structs";
import { BigVector } from "../big-vector/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isDelivery(type: string): boolean;
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
export declare class Delivery implements StructClass {
    static readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::dutch::Delivery";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::dutch::Delivery";
    readonly $fullTypeName: "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::dutch::Delivery";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly token: ToField<TypeName>;
    readonly price: ToField<"u64">;
    readonly size: ToField<"u64">;
    readonly bidderBidValue: ToField<"u64">;
    readonly bidderFee: ToField<"u64">;
    readonly incentiveBidValue: ToField<"u64">;
    readonly incentiveFee: ToField<"u64">;
    private constructor();
    static reified(): DeliveryReified;
    static get r(): reified.StructClassReified<Delivery, DeliveryFields>;
    static phantom(): PhantomReified<ToTypeStr<Delivery>>;
    static get p(): reified.PhantomReified<"0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::dutch::Delivery">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
        token: {
            name: {
                bytes: number[];
            };
        };
        price: string;
        size: string;
        bidder_bid_value: string;
        bidder_fee: string;
        incentive_bid_value: string;
        incentive_fee: string;
    }, {
        signer: string;
        index: string | number | bigint;
        token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        price: string | number | bigint;
        size: string | number | bigint;
        bidder_bid_value: string | number | bigint;
        bidder_fee: string | number | bigint;
        incentive_bid_value: string | number | bigint;
        incentive_fee: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): Delivery;
    static fromFieldsWithTypes(item: FieldsWithTypes): Delivery;
    static fromBcs(data: Uint8Array): Delivery;
    toJSONField(): {
        signer: string;
        index: string;
        token: {
            name: string;
        };
        price: string;
        size: string;
        bidderBidValue: string;
        bidderFee: string;
        incentiveBidValue: string;
        incentiveFee: string;
    };
    toJSON(): {
        signer: string;
        index: string;
        token: {
            name: string;
        };
        price: string;
        size: string;
        bidderBidValue: string;
        bidderFee: string;
        incentiveBidValue: string;
        incentiveFee: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Delivery;
    static fromJSON(json: Record<string, any>): Delivery;
    static fromSuiParsedData(content: SuiParsedData): Delivery;
    static fetch(client: SuiClient, id: string): Promise<Delivery>;
}
export declare function isTerminate(type: string): boolean;
export interface TerminateFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    token: ToField<TypeName>;
}
export type TerminateReified = Reified<Terminate, TerminateFields>;
export declare class Terminate implements StructClass {
    static readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::dutch::Terminate";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::dutch::Terminate";
    readonly $fullTypeName: "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::dutch::Terminate";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly token: ToField<TypeName>;
    private constructor();
    static reified(): TerminateReified;
    static get r(): reified.StructClassReified<Terminate, TerminateFields>;
    static phantom(): PhantomReified<ToTypeStr<Terminate>>;
    static get p(): reified.PhantomReified<"0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::dutch::Terminate">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
        token: {
            name: {
                bytes: number[];
            };
        };
    }, {
        signer: string;
        index: string | number | bigint;
        token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
    }>;
    static fromFields(fields: Record<string, any>): Terminate;
    static fromFieldsWithTypes(item: FieldsWithTypes): Terminate;
    static fromBcs(data: Uint8Array): Terminate;
    toJSONField(): {
        signer: string;
        index: string;
        token: {
            name: string;
        };
    };
    toJSON(): {
        signer: string;
        index: string;
        token: {
            name: string;
        };
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Terminate;
    static fromJSON(json: Record<string, any>): Terminate;
    static fromSuiParsedData(content: SuiParsedData): Terminate;
    static fetch(client: SuiClient, id: string): Promise<Terminate>;
}
export declare function isAuction(type: string): boolean;
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
export declare class Auction implements StructClass {
    static readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::dutch::Auction";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::dutch::Auction";
    readonly $fullTypeName: "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::dutch::Auction";
    readonly $typeArgs: [];
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
    private constructor();
    static reified(): AuctionReified;
    static get r(): reified.StructClassReified<Auction, AuctionFields>;
    static phantom(): PhantomReified<ToTypeStr<Auction>>;
    static get p(): reified.PhantomReified<"0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::dutch::Auction">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        index: string;
        token: {
            name: {
                bytes: number[];
            };
        };
        start_ts_ms: string;
        end_ts_ms: string;
        size: string;
        decay_speed: string;
        initial_price: string;
        final_price: string;
        fee_bp: string;
        incentive_bp: string;
        token_decimal: string;
        size_decimal: string;
        total_bid_size: string;
        able_to_remove_bid: boolean;
        bids: {
            id: {
                id: {
                    bytes: string;
                };
            };
            slice_count: string;
            slice_size: string;
            length: string;
        };
        bid_index: string;
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        index: string | number | bigint;
        token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        start_ts_ms: string | number | bigint;
        end_ts_ms: string | number | bigint;
        size: string | number | bigint;
        decay_speed: string | number | bigint;
        initial_price: string | number | bigint;
        final_price: string | number | bigint;
        fee_bp: string | number | bigint;
        incentive_bp: string | number | bigint;
        token_decimal: string | number | bigint;
        size_decimal: string | number | bigint;
        total_bid_size: string | number | bigint;
        able_to_remove_bid: boolean;
        bids: {
            id: {
                id: {
                    bytes: string;
                };
            };
            slice_count: string | number | bigint;
            slice_size: string | number | bigint;
            length: string | number | bigint;
        };
        bid_index: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): Auction;
    static fromFieldsWithTypes(item: FieldsWithTypes): Auction;
    static fromBcs(data: Uint8Array): Auction;
    toJSONField(): {
        id: string;
        index: string;
        token: {
            name: string;
        };
        startTsMs: string;
        endTsMs: string;
        size: string;
        decaySpeed: string;
        initialPrice: string;
        finalPrice: string;
        feeBp: string;
        incentiveBp: string;
        tokenDecimal: string;
        sizeDecimal: string;
        totalBidSize: string;
        ableToRemoveBid: boolean;
        bids: {
            id: string;
            sliceCount: string;
            sliceSize: string;
            length: string;
        };
        bidIndex: string;
    };
    toJSON(): {
        id: string;
        index: string;
        token: {
            name: string;
        };
        startTsMs: string;
        endTsMs: string;
        size: string;
        decaySpeed: string;
        initialPrice: string;
        finalPrice: string;
        feeBp: string;
        incentiveBp: string;
        tokenDecimal: string;
        sizeDecimal: string;
        totalBidSize: string;
        ableToRemoveBid: boolean;
        bids: {
            id: string;
            sliceCount: string;
            sliceSize: string;
            length: string;
        };
        bidIndex: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Auction;
    static fromJSON(json: Record<string, any>): Auction;
    static fromSuiParsedData(content: SuiParsedData): Auction;
    static fetch(client: SuiClient, id: string): Promise<Auction>;
}
export declare function isBid(type: string): boolean;
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
export declare class Bid implements StructClass {
    static readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::dutch::Bid";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::dutch::Bid";
    readonly $fullTypeName: "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::dutch::Bid";
    readonly $typeArgs: [];
    readonly index: ToField<"u64">;
    readonly bidder: ToField<"address">;
    readonly price: ToField<"u64">;
    readonly size: ToField<"u64">;
    readonly bidderBalance: ToField<"u64">;
    readonly incentiveBalance: ToField<"u64">;
    readonly feeDiscount: ToField<"u64">;
    readonly tsMs: ToField<"u64">;
    private constructor();
    static reified(): BidReified;
    static get r(): reified.StructClassReified<Bid, BidFields>;
    static phantom(): PhantomReified<ToTypeStr<Bid>>;
    static get p(): reified.PhantomReified<"0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::dutch::Bid">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        index: string;
        bidder: string;
        price: string;
        size: string;
        bidder_balance: string;
        incentive_balance: string;
        fee_discount: string;
        ts_ms: string;
    }, {
        index: string | number | bigint;
        bidder: string;
        price: string | number | bigint;
        size: string | number | bigint;
        bidder_balance: string | number | bigint;
        incentive_balance: string | number | bigint;
        fee_discount: string | number | bigint;
        ts_ms: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): Bid;
    static fromFieldsWithTypes(item: FieldsWithTypes): Bid;
    static fromBcs(data: Uint8Array): Bid;
    toJSONField(): {
        index: string;
        bidder: string;
        price: string;
        size: string;
        bidderBalance: string;
        incentiveBalance: string;
        feeDiscount: string;
        tsMs: string;
    };
    toJSON(): {
        index: string;
        bidder: string;
        price: string;
        size: string;
        bidderBalance: string;
        incentiveBalance: string;
        feeDiscount: string;
        tsMs: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Bid;
    static fromJSON(json: Record<string, any>): Bid;
    static fromSuiParsedData(content: SuiParsedData): Bid;
    static fetch(client: SuiClient, id: string): Promise<Bid>;
}
export declare function isDUTCH(type: string): boolean;
export interface DUTCHFields {
    dummyField: ToField<"bool">;
}
export type DUTCHReified = Reified<DUTCH, DUTCHFields>;
export declare class DUTCH implements StructClass {
    static readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::dutch::DUTCH";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::dutch::DUTCH";
    readonly $fullTypeName: "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::dutch::DUTCH";
    readonly $typeArgs: [];
    readonly dummyField: ToField<"bool">;
    private constructor();
    static reified(): DUTCHReified;
    static get r(): reified.StructClassReified<DUTCH, DUTCHFields>;
    static phantom(): PhantomReified<ToTypeStr<DUTCH>>;
    static get p(): reified.PhantomReified<"0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::dutch::DUTCH">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        dummy_field: boolean;
    }, {
        dummy_field: boolean;
    }>;
    static fromFields(fields: Record<string, any>): DUTCH;
    static fromFieldsWithTypes(item: FieldsWithTypes): DUTCH;
    static fromBcs(data: Uint8Array): DUTCH;
    toJSONField(): {
        dummyField: boolean;
    };
    toJSON(): {
        dummyField: boolean;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): DUTCH;
    static fromJSON(json: Record<string, any>): DUTCH;
    static fromSuiParsedData(content: SuiParsedData): DUTCH;
    static fetch(client: SuiClient, id: string): Promise<DUTCH>;
}
export declare function isNewBid(type: string): boolean;
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
export declare class NewBid implements StructClass {
    static readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::dutch::NewBid";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::dutch::NewBid";
    readonly $fullTypeName: "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::dutch::NewBid";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly token: ToField<TypeName>;
    readonly bidIndex: ToField<"u64">;
    readonly price: ToField<"u64">;
    readonly size: ToField<"u64">;
    readonly bidderBalance: ToField<"u64">;
    readonly incentiveBalance: ToField<"u64">;
    readonly tsMs: ToField<"u64">;
    private constructor();
    static reified(): NewBidReified;
    static get r(): reified.StructClassReified<NewBid, NewBidFields>;
    static phantom(): PhantomReified<ToTypeStr<NewBid>>;
    static get p(): reified.PhantomReified<"0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::dutch::NewBid">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
        token: {
            name: {
                bytes: number[];
            };
        };
        bid_index: string;
        price: string;
        size: string;
        bidder_balance: string;
        incentive_balance: string;
        ts_ms: string;
    }, {
        signer: string;
        index: string | number | bigint;
        token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        bid_index: string | number | bigint;
        price: string | number | bigint;
        size: string | number | bigint;
        bidder_balance: string | number | bigint;
        incentive_balance: string | number | bigint;
        ts_ms: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): NewBid;
    static fromFieldsWithTypes(item: FieldsWithTypes): NewBid;
    static fromBcs(data: Uint8Array): NewBid;
    toJSONField(): {
        signer: string;
        index: string;
        token: {
            name: string;
        };
        bidIndex: string;
        price: string;
        size: string;
        bidderBalance: string;
        incentiveBalance: string;
        tsMs: string;
    };
    toJSON(): {
        signer: string;
        index: string;
        token: {
            name: string;
        };
        bidIndex: string;
        price: string;
        size: string;
        bidderBalance: string;
        incentiveBalance: string;
        tsMs: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): NewBid;
    static fromJSON(json: Record<string, any>): NewBid;
    static fromSuiParsedData(content: SuiParsedData): NewBid;
    static fetch(client: SuiClient, id: string): Promise<NewBid>;
}
export declare function isRemoveBid(type: string): boolean;
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
export declare class RemoveBid implements StructClass {
    static readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::dutch::RemoveBid";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::dutch::RemoveBid";
    readonly $fullTypeName: "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::dutch::RemoveBid";
    readonly $typeArgs: [];
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
    private constructor();
    static reified(): RemoveBidReified;
    static get r(): reified.StructClassReified<RemoveBid, RemoveBidFields>;
    static phantom(): PhantomReified<ToTypeStr<RemoveBid>>;
    static get p(): reified.PhantomReified<"0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::dutch::RemoveBid">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
        token: {
            name: {
                bytes: number[];
            };
        };
        bid_index: string;
        price: string;
        size: string;
        bidder_balance: string;
        incentive_balance: string;
        fee_discount: string;
        ts_ms: string;
    }, {
        signer: string;
        index: string | number | bigint;
        token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        bid_index: string | number | bigint;
        price: string | number | bigint;
        size: string | number | bigint;
        bidder_balance: string | number | bigint;
        incentive_balance: string | number | bigint;
        fee_discount: string | number | bigint;
        ts_ms: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): RemoveBid;
    static fromFieldsWithTypes(item: FieldsWithTypes): RemoveBid;
    static fromBcs(data: Uint8Array): RemoveBid;
    toJSONField(): {
        signer: string;
        index: string;
        token: {
            name: string;
        };
        bidIndex: string;
        price: string;
        size: string;
        bidderBalance: string;
        incentiveBalance: string;
        feeDiscount: string;
        tsMs: string;
    };
    toJSON(): {
        signer: string;
        index: string;
        token: {
            name: string;
        };
        bidIndex: string;
        price: string;
        size: string;
        bidderBalance: string;
        incentiveBalance: string;
        feeDiscount: string;
        tsMs: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): RemoveBid;
    static fromJSON(json: Record<string, any>): RemoveBid;
    static fromSuiParsedData(content: SuiParsedData): RemoveBid;
    static fetch(client: SuiClient, id: string): Promise<RemoveBid>;
}
export declare function isUpdateAuctionConfig(type: string): boolean;
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
export declare class UpdateAuctionConfig implements StructClass {
    static readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::dutch::UpdateAuctionConfig";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::dutch::UpdateAuctionConfig";
    readonly $fullTypeName: "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::dutch::UpdateAuctionConfig";
    readonly $typeArgs: [];
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
    private constructor();
    static reified(): UpdateAuctionConfigReified;
    static get r(): reified.StructClassReified<UpdateAuctionConfig, UpdateAuctionConfigFields>;
    static phantom(): PhantomReified<ToTypeStr<UpdateAuctionConfig>>;
    static get p(): reified.PhantomReified<"0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::dutch::UpdateAuctionConfig">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
        prev_start_ts_ms: string;
        prev_end_ts_ms: string;
        prev_decay_speed: string;
        prev_initial_price: string;
        prev_final_price: string;
        prev_fee_bp: string;
        prev_incentive_bp: string;
        prev_token_decimal: string;
        prev_size_decimal: string;
        prev_able_to_remove_bid: boolean;
        start_ts_ms: string;
        end_ts_ms: string;
        decay_speed: string;
        initial_price: string;
        final_price: string;
        fee_bp: string;
        incentive_bp: string;
        token_decimal: string;
        size_decimal: string;
        able_to_remove_bid: boolean;
    }, {
        signer: string;
        index: string | number | bigint;
        prev_start_ts_ms: string | number | bigint;
        prev_end_ts_ms: string | number | bigint;
        prev_decay_speed: string | number | bigint;
        prev_initial_price: string | number | bigint;
        prev_final_price: string | number | bigint;
        prev_fee_bp: string | number | bigint;
        prev_incentive_bp: string | number | bigint;
        prev_token_decimal: string | number | bigint;
        prev_size_decimal: string | number | bigint;
        prev_able_to_remove_bid: boolean;
        start_ts_ms: string | number | bigint;
        end_ts_ms: string | number | bigint;
        decay_speed: string | number | bigint;
        initial_price: string | number | bigint;
        final_price: string | number | bigint;
        fee_bp: string | number | bigint;
        incentive_bp: string | number | bigint;
        token_decimal: string | number | bigint;
        size_decimal: string | number | bigint;
        able_to_remove_bid: boolean;
    }>;
    static fromFields(fields: Record<string, any>): UpdateAuctionConfig;
    static fromFieldsWithTypes(item: FieldsWithTypes): UpdateAuctionConfig;
    static fromBcs(data: Uint8Array): UpdateAuctionConfig;
    toJSONField(): {
        signer: string;
        index: string;
        prevStartTsMs: string;
        prevEndTsMs: string;
        prevDecaySpeed: string;
        prevInitialPrice: string;
        prevFinalPrice: string;
        prevFeeBp: string;
        prevIncentiveBp: string;
        prevTokenDecimal: string;
        prevSizeDecimal: string;
        prevAbleToRemoveBid: boolean;
        startTsMs: string;
        endTsMs: string;
        decaySpeed: string;
        initialPrice: string;
        finalPrice: string;
        feeBp: string;
        incentiveBp: string;
        tokenDecimal: string;
        sizeDecimal: string;
        ableToRemoveBid: boolean;
    };
    toJSON(): {
        signer: string;
        index: string;
        prevStartTsMs: string;
        prevEndTsMs: string;
        prevDecaySpeed: string;
        prevInitialPrice: string;
        prevFinalPrice: string;
        prevFeeBp: string;
        prevIncentiveBp: string;
        prevTokenDecimal: string;
        prevSizeDecimal: string;
        prevAbleToRemoveBid: boolean;
        startTsMs: string;
        endTsMs: string;
        decaySpeed: string;
        initialPrice: string;
        finalPrice: string;
        feeBp: string;
        incentiveBp: string;
        tokenDecimal: string;
        sizeDecimal: string;
        ableToRemoveBid: boolean;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): UpdateAuctionConfig;
    static fromJSON(json: Record<string, any>): UpdateAuctionConfig;
    static fromSuiParsedData(content: SuiParsedData): UpdateAuctionConfig;
    static fetch(client: SuiClient, id: string): Promise<UpdateAuctionConfig>;
}
