import * as reified from "../../../../_framework/reified";
import { PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, ToTypeStr as ToPhantom } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { Balance } from "../balance/structs";
import { ID, UID } from "../object/structs";
import { SUI } from "../sui/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isBorrow(type: string): boolean;
export interface BorrowFields {
    kioskId: ToField<ID>;
    itemId: ToField<ID>;
}
export type BorrowReified = Reified<Borrow, BorrowFields>;
export declare class Borrow implements StructClass {
    static readonly $typeName = "0x2::kiosk::Borrow";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x2::kiosk::Borrow";
    readonly $fullTypeName: "0x2::kiosk::Borrow";
    readonly $typeArgs: [];
    readonly kioskId: ToField<ID>;
    readonly itemId: ToField<ID>;
    private constructor();
    static reified(): BorrowReified;
    static get r(): reified.StructClassReified<Borrow, BorrowFields>;
    static phantom(): PhantomReified<ToTypeStr<Borrow>>;
    static get p(): reified.PhantomReified<"0x2::kiosk::Borrow">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        kiosk_id: {
            bytes: string;
        };
        item_id: {
            bytes: string;
        };
    }, {
        kiosk_id: {
            bytes: string;
        };
        item_id: {
            bytes: string;
        };
    }>;
    static fromFields(fields: Record<string, any>): Borrow;
    static fromFieldsWithTypes(item: FieldsWithTypes): Borrow;
    static fromBcs(data: Uint8Array): Borrow;
    toJSONField(): {
        kioskId: string;
        itemId: string;
    };
    toJSON(): {
        kioskId: string;
        itemId: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Borrow;
    static fromJSON(json: Record<string, any>): Borrow;
    static fromSuiParsedData(content: SuiParsedData): Borrow;
    static fetch(client: SuiClient, id: string): Promise<Borrow>;
}
export declare function isItem(type: string): boolean;
export interface ItemFields {
    id: ToField<ID>;
}
export type ItemReified = Reified<Item, ItemFields>;
export declare class Item implements StructClass {
    static readonly $typeName = "0x2::kiosk::Item";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x2::kiosk::Item";
    readonly $fullTypeName: "0x2::kiosk::Item";
    readonly $typeArgs: [];
    readonly id: ToField<ID>;
    private constructor();
    static reified(): ItemReified;
    static get r(): reified.StructClassReified<Item, ItemFields>;
    static phantom(): PhantomReified<ToTypeStr<Item>>;
    static get p(): reified.PhantomReified<"0x2::kiosk::Item">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            bytes: string;
        };
    }, {
        id: {
            bytes: string;
        };
    }>;
    static fromFields(fields: Record<string, any>): Item;
    static fromFieldsWithTypes(item: FieldsWithTypes): Item;
    static fromBcs(data: Uint8Array): Item;
    toJSONField(): {
        id: string;
    };
    toJSON(): {
        id: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Item;
    static fromJSON(json: Record<string, any>): Item;
    static fromSuiParsedData(content: SuiParsedData): Item;
    static fetch(client: SuiClient, id: string): Promise<Item>;
}
export declare function isItemDelisted(type: string): boolean;
export interface ItemDelistedFields<T extends PhantomTypeArgument> {
    kiosk: ToField<ID>;
    id: ToField<ID>;
}
export type ItemDelistedReified<T extends PhantomTypeArgument> = Reified<ItemDelisted<T>, ItemDelistedFields<T>>;
export declare class ItemDelisted<T extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0x2::kiosk::ItemDelisted";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0x2::kiosk::ItemDelisted";
    readonly $fullTypeName: `0x2::kiosk::ItemDelisted<${PhantomToTypeStr<T>}>`;
    readonly $typeArgs: [PhantomToTypeStr<T>];
    readonly kiosk: ToField<ID>;
    readonly id: ToField<ID>;
    private constructor();
    static reified<T extends PhantomReified<PhantomTypeArgument>>(T: T): ItemDelistedReified<ToPhantomTypeArgument<T>>;
    static get r(): typeof ItemDelisted.reified;
    static phantom<T extends PhantomReified<PhantomTypeArgument>>(T: T): PhantomReified<ToTypeStr<ItemDelisted<ToPhantomTypeArgument<T>>>>;
    static get p(): typeof ItemDelisted.phantom;
    static get bcs(): import("@mysten/bcs").BcsType<{
        kiosk: {
            bytes: string;
        };
        id: {
            bytes: string;
        };
    }, {
        kiosk: {
            bytes: string;
        };
        id: {
            bytes: string;
        };
    }>;
    static fromFields<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, fields: Record<string, any>): ItemDelisted<ToPhantomTypeArgument<T>>;
    static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, item: FieldsWithTypes): ItemDelisted<ToPhantomTypeArgument<T>>;
    static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, data: Uint8Array): ItemDelisted<ToPhantomTypeArgument<T>>;
    toJSONField(): {
        kiosk: string;
        id: string;
    };
    toJSON(): {
        kiosk: string;
        id: string;
        $typeName: string;
        $typeArgs: [reified.PhantomToTypeStr<T>];
    };
    static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, field: any): ItemDelisted<ToPhantomTypeArgument<T>>;
    static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, json: Record<string, any>): ItemDelisted<ToPhantomTypeArgument<T>>;
    static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, content: SuiParsedData): ItemDelisted<ToPhantomTypeArgument<T>>;
    static fetch<T extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: T, id: string): Promise<ItemDelisted<ToPhantomTypeArgument<T>>>;
}
export declare function isItemListed(type: string): boolean;
export interface ItemListedFields<T extends PhantomTypeArgument> {
    kiosk: ToField<ID>;
    id: ToField<ID>;
    price: ToField<"u64">;
}
export type ItemListedReified<T extends PhantomTypeArgument> = Reified<ItemListed<T>, ItemListedFields<T>>;
export declare class ItemListed<T extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0x2::kiosk::ItemListed";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0x2::kiosk::ItemListed";
    readonly $fullTypeName: `0x2::kiosk::ItemListed<${PhantomToTypeStr<T>}>`;
    readonly $typeArgs: [PhantomToTypeStr<T>];
    readonly kiosk: ToField<ID>;
    readonly id: ToField<ID>;
    readonly price: ToField<"u64">;
    private constructor();
    static reified<T extends PhantomReified<PhantomTypeArgument>>(T: T): ItemListedReified<ToPhantomTypeArgument<T>>;
    static get r(): typeof ItemListed.reified;
    static phantom<T extends PhantomReified<PhantomTypeArgument>>(T: T): PhantomReified<ToTypeStr<ItemListed<ToPhantomTypeArgument<T>>>>;
    static get p(): typeof ItemListed.phantom;
    static get bcs(): import("@mysten/bcs").BcsType<{
        kiosk: {
            bytes: string;
        };
        id: {
            bytes: string;
        };
        price: string;
    }, {
        kiosk: {
            bytes: string;
        };
        id: {
            bytes: string;
        };
        price: string | number | bigint;
    }>;
    static fromFields<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, fields: Record<string, any>): ItemListed<ToPhantomTypeArgument<T>>;
    static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, item: FieldsWithTypes): ItemListed<ToPhantomTypeArgument<T>>;
    static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, data: Uint8Array): ItemListed<ToPhantomTypeArgument<T>>;
    toJSONField(): {
        kiosk: string;
        id: string;
        price: string;
    };
    toJSON(): {
        kiosk: string;
        id: string;
        price: string;
        $typeName: string;
        $typeArgs: [reified.PhantomToTypeStr<T>];
    };
    static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, field: any): ItemListed<ToPhantomTypeArgument<T>>;
    static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, json: Record<string, any>): ItemListed<ToPhantomTypeArgument<T>>;
    static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, content: SuiParsedData): ItemListed<ToPhantomTypeArgument<T>>;
    static fetch<T extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: T, id: string): Promise<ItemListed<ToPhantomTypeArgument<T>>>;
}
export declare function isItemPurchased(type: string): boolean;
export interface ItemPurchasedFields<T extends PhantomTypeArgument> {
    kiosk: ToField<ID>;
    id: ToField<ID>;
    price: ToField<"u64">;
}
export type ItemPurchasedReified<T extends PhantomTypeArgument> = Reified<ItemPurchased<T>, ItemPurchasedFields<T>>;
export declare class ItemPurchased<T extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0x2::kiosk::ItemPurchased";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0x2::kiosk::ItemPurchased";
    readonly $fullTypeName: `0x2::kiosk::ItemPurchased<${PhantomToTypeStr<T>}>`;
    readonly $typeArgs: [PhantomToTypeStr<T>];
    readonly kiosk: ToField<ID>;
    readonly id: ToField<ID>;
    readonly price: ToField<"u64">;
    private constructor();
    static reified<T extends PhantomReified<PhantomTypeArgument>>(T: T): ItemPurchasedReified<ToPhantomTypeArgument<T>>;
    static get r(): typeof ItemPurchased.reified;
    static phantom<T extends PhantomReified<PhantomTypeArgument>>(T: T): PhantomReified<ToTypeStr<ItemPurchased<ToPhantomTypeArgument<T>>>>;
    static get p(): typeof ItemPurchased.phantom;
    static get bcs(): import("@mysten/bcs").BcsType<{
        kiosk: {
            bytes: string;
        };
        id: {
            bytes: string;
        };
        price: string;
    }, {
        kiosk: {
            bytes: string;
        };
        id: {
            bytes: string;
        };
        price: string | number | bigint;
    }>;
    static fromFields<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, fields: Record<string, any>): ItemPurchased<ToPhantomTypeArgument<T>>;
    static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, item: FieldsWithTypes): ItemPurchased<ToPhantomTypeArgument<T>>;
    static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, data: Uint8Array): ItemPurchased<ToPhantomTypeArgument<T>>;
    toJSONField(): {
        kiosk: string;
        id: string;
        price: string;
    };
    toJSON(): {
        kiosk: string;
        id: string;
        price: string;
        $typeName: string;
        $typeArgs: [reified.PhantomToTypeStr<T>];
    };
    static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, field: any): ItemPurchased<ToPhantomTypeArgument<T>>;
    static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, json: Record<string, any>): ItemPurchased<ToPhantomTypeArgument<T>>;
    static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, content: SuiParsedData): ItemPurchased<ToPhantomTypeArgument<T>>;
    static fetch<T extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: T, id: string): Promise<ItemPurchased<ToPhantomTypeArgument<T>>>;
}
export declare function isKiosk(type: string): boolean;
export interface KioskFields {
    id: ToField<UID>;
    profits: ToField<Balance<ToPhantom<SUI>>>;
    owner: ToField<"address">;
    itemCount: ToField<"u32">;
    allowExtensions: ToField<"bool">;
}
export type KioskReified = Reified<Kiosk, KioskFields>;
export declare class Kiosk implements StructClass {
    static readonly $typeName = "0x2::kiosk::Kiosk";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x2::kiosk::Kiosk";
    readonly $fullTypeName: "0x2::kiosk::Kiosk";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly profits: ToField<Balance<ToPhantom<SUI>>>;
    readonly owner: ToField<"address">;
    readonly itemCount: ToField<"u32">;
    readonly allowExtensions: ToField<"bool">;
    private constructor();
    static reified(): KioskReified;
    static get r(): reified.StructClassReified<Kiosk, KioskFields>;
    static phantom(): PhantomReified<ToTypeStr<Kiosk>>;
    static get p(): reified.PhantomReified<"0x2::kiosk::Kiosk">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        profits: {
            value: string;
        };
        owner: string;
        item_count: number;
        allow_extensions: boolean;
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        profits: {
            value: string | number | bigint;
        };
        owner: string;
        item_count: number;
        allow_extensions: boolean;
    }>;
    static fromFields(fields: Record<string, any>): Kiosk;
    static fromFieldsWithTypes(item: FieldsWithTypes): Kiosk;
    static fromBcs(data: Uint8Array): Kiosk;
    toJSONField(): {
        id: string;
        profits: {
            value: string;
        };
        owner: string;
        itemCount: number;
        allowExtensions: boolean;
    };
    toJSON(): {
        id: string;
        profits: {
            value: string;
        };
        owner: string;
        itemCount: number;
        allowExtensions: boolean;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Kiosk;
    static fromJSON(json: Record<string, any>): Kiosk;
    static fromSuiParsedData(content: SuiParsedData): Kiosk;
    static fetch(client: SuiClient, id: string): Promise<Kiosk>;
}
export declare function isKioskOwnerCap(type: string): boolean;
export interface KioskOwnerCapFields {
    id: ToField<UID>;
    for: ToField<ID>;
}
export type KioskOwnerCapReified = Reified<KioskOwnerCap, KioskOwnerCapFields>;
export declare class KioskOwnerCap implements StructClass {
    static readonly $typeName = "0x2::kiosk::KioskOwnerCap";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x2::kiosk::KioskOwnerCap";
    readonly $fullTypeName: "0x2::kiosk::KioskOwnerCap";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly for: ToField<ID>;
    private constructor();
    static reified(): KioskOwnerCapReified;
    static get r(): reified.StructClassReified<KioskOwnerCap, KioskOwnerCapFields>;
    static phantom(): PhantomReified<ToTypeStr<KioskOwnerCap>>;
    static get p(): reified.PhantomReified<"0x2::kiosk::KioskOwnerCap">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        for: {
            bytes: string;
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        for: {
            bytes: string;
        };
    }>;
    static fromFields(fields: Record<string, any>): KioskOwnerCap;
    static fromFieldsWithTypes(item: FieldsWithTypes): KioskOwnerCap;
    static fromBcs(data: Uint8Array): KioskOwnerCap;
    toJSONField(): {
        id: string;
        for: string;
    };
    toJSON(): {
        id: string;
        for: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): KioskOwnerCap;
    static fromJSON(json: Record<string, any>): KioskOwnerCap;
    static fromSuiParsedData(content: SuiParsedData): KioskOwnerCap;
    static fetch(client: SuiClient, id: string): Promise<KioskOwnerCap>;
}
export declare function isListing(type: string): boolean;
export interface ListingFields {
    id: ToField<ID>;
    isExclusive: ToField<"bool">;
}
export type ListingReified = Reified<Listing, ListingFields>;
export declare class Listing implements StructClass {
    static readonly $typeName = "0x2::kiosk::Listing";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x2::kiosk::Listing";
    readonly $fullTypeName: "0x2::kiosk::Listing";
    readonly $typeArgs: [];
    readonly id: ToField<ID>;
    readonly isExclusive: ToField<"bool">;
    private constructor();
    static reified(): ListingReified;
    static get r(): reified.StructClassReified<Listing, ListingFields>;
    static phantom(): PhantomReified<ToTypeStr<Listing>>;
    static get p(): reified.PhantomReified<"0x2::kiosk::Listing">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            bytes: string;
        };
        is_exclusive: boolean;
    }, {
        id: {
            bytes: string;
        };
        is_exclusive: boolean;
    }>;
    static fromFields(fields: Record<string, any>): Listing;
    static fromFieldsWithTypes(item: FieldsWithTypes): Listing;
    static fromBcs(data: Uint8Array): Listing;
    toJSONField(): {
        id: string;
        isExclusive: boolean;
    };
    toJSON(): {
        id: string;
        isExclusive: boolean;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Listing;
    static fromJSON(json: Record<string, any>): Listing;
    static fromSuiParsedData(content: SuiParsedData): Listing;
    static fetch(client: SuiClient, id: string): Promise<Listing>;
}
export declare function isLock(type: string): boolean;
export interface LockFields {
    id: ToField<ID>;
}
export type LockReified = Reified<Lock, LockFields>;
export declare class Lock implements StructClass {
    static readonly $typeName = "0x2::kiosk::Lock";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x2::kiosk::Lock";
    readonly $fullTypeName: "0x2::kiosk::Lock";
    readonly $typeArgs: [];
    readonly id: ToField<ID>;
    private constructor();
    static reified(): LockReified;
    static get r(): reified.StructClassReified<Lock, LockFields>;
    static phantom(): PhantomReified<ToTypeStr<Lock>>;
    static get p(): reified.PhantomReified<"0x2::kiosk::Lock">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            bytes: string;
        };
    }, {
        id: {
            bytes: string;
        };
    }>;
    static fromFields(fields: Record<string, any>): Lock;
    static fromFieldsWithTypes(item: FieldsWithTypes): Lock;
    static fromBcs(data: Uint8Array): Lock;
    toJSONField(): {
        id: string;
    };
    toJSON(): {
        id: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Lock;
    static fromJSON(json: Record<string, any>): Lock;
    static fromSuiParsedData(content: SuiParsedData): Lock;
    static fetch(client: SuiClient, id: string): Promise<Lock>;
}
export declare function isPurchaseCap(type: string): boolean;
export interface PurchaseCapFields<T extends PhantomTypeArgument> {
    id: ToField<UID>;
    kioskId: ToField<ID>;
    itemId: ToField<ID>;
    minPrice: ToField<"u64">;
}
export type PurchaseCapReified<T extends PhantomTypeArgument> = Reified<PurchaseCap<T>, PurchaseCapFields<T>>;
export declare class PurchaseCap<T extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0x2::kiosk::PurchaseCap";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0x2::kiosk::PurchaseCap";
    readonly $fullTypeName: `0x2::kiosk::PurchaseCap<${PhantomToTypeStr<T>}>`;
    readonly $typeArgs: [PhantomToTypeStr<T>];
    readonly id: ToField<UID>;
    readonly kioskId: ToField<ID>;
    readonly itemId: ToField<ID>;
    readonly minPrice: ToField<"u64">;
    private constructor();
    static reified<T extends PhantomReified<PhantomTypeArgument>>(T: T): PurchaseCapReified<ToPhantomTypeArgument<T>>;
    static get r(): typeof PurchaseCap.reified;
    static phantom<T extends PhantomReified<PhantomTypeArgument>>(T: T): PhantomReified<ToTypeStr<PurchaseCap<ToPhantomTypeArgument<T>>>>;
    static get p(): typeof PurchaseCap.phantom;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        kiosk_id: {
            bytes: string;
        };
        item_id: {
            bytes: string;
        };
        min_price: string;
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        kiosk_id: {
            bytes: string;
        };
        item_id: {
            bytes: string;
        };
        min_price: string | number | bigint;
    }>;
    static fromFields<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, fields: Record<string, any>): PurchaseCap<ToPhantomTypeArgument<T>>;
    static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, item: FieldsWithTypes): PurchaseCap<ToPhantomTypeArgument<T>>;
    static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, data: Uint8Array): PurchaseCap<ToPhantomTypeArgument<T>>;
    toJSONField(): {
        id: string;
        kioskId: string;
        itemId: string;
        minPrice: string;
    };
    toJSON(): {
        id: string;
        kioskId: string;
        itemId: string;
        minPrice: string;
        $typeName: string;
        $typeArgs: [reified.PhantomToTypeStr<T>];
    };
    static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, field: any): PurchaseCap<ToPhantomTypeArgument<T>>;
    static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, json: Record<string, any>): PurchaseCap<ToPhantomTypeArgument<T>>;
    static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, content: SuiParsedData): PurchaseCap<ToPhantomTypeArgument<T>>;
    static fetch<T extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: T, id: string): Promise<PurchaseCap<ToPhantomTypeArgument<T>>>;
}
