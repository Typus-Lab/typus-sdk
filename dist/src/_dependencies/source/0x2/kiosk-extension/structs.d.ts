import { PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { Bag } from "../bag/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isExtension(type: string): boolean;
export interface ExtensionFields {
    storage: ToField<Bag>;
    permissions: ToField<"u128">;
    isEnabled: ToField<"bool">;
}
export type ExtensionReified = Reified<Extension, ExtensionFields>;
export declare class Extension implements StructClass {
    static readonly $typeName = "0x2::kiosk_extension::Extension";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x2::kiosk_extension::Extension";
    readonly $fullTypeName: "0x2::kiosk_extension::Extension";
    readonly $typeArgs: [];
    readonly storage: ToField<Bag>;
    readonly permissions: ToField<"u128">;
    readonly isEnabled: ToField<"bool">;
    private constructor();
    static reified(): ExtensionReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<Extension, ExtensionFields>;
    static phantom(): PhantomReified<ToTypeStr<Extension>>;
    static get p(): PhantomReified<"0x2::kiosk_extension::Extension">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        storage: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string;
        };
        permissions: string;
        is_enabled: boolean;
    }, {
        storage: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string | number | bigint;
        };
        permissions: string | number | bigint;
        is_enabled: boolean;
    }>;
    static fromFields(fields: Record<string, any>): Extension;
    static fromFieldsWithTypes(item: FieldsWithTypes): Extension;
    static fromBcs(data: Uint8Array): Extension;
    toJSONField(): {
        storage: {
            id: string;
            size: string;
        };
        permissions: string;
        isEnabled: boolean;
    };
    toJSON(): {
        storage: {
            id: string;
            size: string;
        };
        permissions: string;
        isEnabled: boolean;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Extension;
    static fromJSON(json: Record<string, any>): Extension;
    static fromSuiParsedData(content: SuiParsedData): Extension;
    static fetch(client: SuiClient, id: string): Promise<Extension>;
}
export declare function isExtensionKey(type: string): boolean;
export interface ExtensionKeyFields<Ext extends PhantomTypeArgument> {
    dummyField: ToField<"bool">;
}
export type ExtensionKeyReified<Ext extends PhantomTypeArgument> = Reified<ExtensionKey<Ext>, ExtensionKeyFields<Ext>>;
export declare class ExtensionKey<Ext extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0x2::kiosk_extension::ExtensionKey";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0x2::kiosk_extension::ExtensionKey";
    readonly $fullTypeName: `0x2::kiosk_extension::ExtensionKey<${PhantomToTypeStr<Ext>}>`;
    readonly $typeArgs: [PhantomToTypeStr<Ext>];
    readonly dummyField: ToField<"bool">;
    private constructor();
    static reified<Ext extends PhantomReified<PhantomTypeArgument>>(Ext: Ext): ExtensionKeyReified<ToPhantomTypeArgument<Ext>>;
    static get r(): typeof ExtensionKey.reified;
    static phantom<Ext extends PhantomReified<PhantomTypeArgument>>(Ext: Ext): PhantomReified<ToTypeStr<ExtensionKey<ToPhantomTypeArgument<Ext>>>>;
    static get p(): typeof ExtensionKey.phantom;
    static get bcs(): import("@mysten/bcs").BcsType<{
        dummy_field: boolean;
    }, {
        dummy_field: boolean;
    }>;
    static fromFields<Ext extends PhantomReified<PhantomTypeArgument>>(typeArg: Ext, fields: Record<string, any>): ExtensionKey<ToPhantomTypeArgument<Ext>>;
    static fromFieldsWithTypes<Ext extends PhantomReified<PhantomTypeArgument>>(typeArg: Ext, item: FieldsWithTypes): ExtensionKey<ToPhantomTypeArgument<Ext>>;
    static fromBcs<Ext extends PhantomReified<PhantomTypeArgument>>(typeArg: Ext, data: Uint8Array): ExtensionKey<ToPhantomTypeArgument<Ext>>;
    toJSONField(): {
        dummyField: boolean;
    };
    toJSON(): {
        dummyField: boolean;
        $typeName: string;
        $typeArgs: [PhantomToTypeStr<Ext>];
    };
    static fromJSONField<Ext extends PhantomReified<PhantomTypeArgument>>(typeArg: Ext, field: any): ExtensionKey<ToPhantomTypeArgument<Ext>>;
    static fromJSON<Ext extends PhantomReified<PhantomTypeArgument>>(typeArg: Ext, json: Record<string, any>): ExtensionKey<ToPhantomTypeArgument<Ext>>;
    static fromSuiParsedData<Ext extends PhantomReified<PhantomTypeArgument>>(typeArg: Ext, content: SuiParsedData): ExtensionKey<ToPhantomTypeArgument<Ext>>;
    static fetch<Ext extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: Ext, id: string): Promise<ExtensionKey<ToPhantomTypeArgument<Ext>>>;
}
