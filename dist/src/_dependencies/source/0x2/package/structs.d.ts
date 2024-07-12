import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, Vector } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { String } from "../../0x1/ascii/structs";
import { ID, UID } from "../object/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isPublisher(type: string): boolean;
export interface PublisherFields {
    id: ToField<UID>;
    package: ToField<String>;
    moduleName: ToField<String>;
}
export type PublisherReified = Reified<Publisher, PublisherFields>;
export declare class Publisher implements StructClass {
    static readonly $typeName = "0x2::package::Publisher";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x2::package::Publisher";
    readonly $fullTypeName: "0x2::package::Publisher";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly package: ToField<String>;
    readonly moduleName: ToField<String>;
    private constructor();
    static reified(): PublisherReified;
    static get r(): reified.StructClassReified<Publisher, PublisherFields>;
    static phantom(): PhantomReified<ToTypeStr<Publisher>>;
    static get p(): reified.PhantomReified<"0x2::package::Publisher">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        package: {
            bytes: number[];
        };
        module_name: {
            bytes: number[];
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        package: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        module_name: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
    }>;
    static fromFields(fields: Record<string, any>): Publisher;
    static fromFieldsWithTypes(item: FieldsWithTypes): Publisher;
    static fromBcs(data: Uint8Array): Publisher;
    toJSONField(): {
        id: string;
        package: string;
        moduleName: string;
    };
    toJSON(): {
        id: string;
        package: string;
        moduleName: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Publisher;
    static fromJSON(json: Record<string, any>): Publisher;
    static fromSuiParsedData(content: SuiParsedData): Publisher;
    static fetch(client: SuiClient, id: string): Promise<Publisher>;
}
export declare function isUpgradeCap(type: string): boolean;
export interface UpgradeCapFields {
    id: ToField<UID>;
    package: ToField<ID>;
    version: ToField<"u64">;
    policy: ToField<"u8">;
}
export type UpgradeCapReified = Reified<UpgradeCap, UpgradeCapFields>;
export declare class UpgradeCap implements StructClass {
    static readonly $typeName = "0x2::package::UpgradeCap";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x2::package::UpgradeCap";
    readonly $fullTypeName: "0x2::package::UpgradeCap";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly package: ToField<ID>;
    readonly version: ToField<"u64">;
    readonly policy: ToField<"u8">;
    private constructor();
    static reified(): UpgradeCapReified;
    static get r(): reified.StructClassReified<UpgradeCap, UpgradeCapFields>;
    static phantom(): PhantomReified<ToTypeStr<UpgradeCap>>;
    static get p(): reified.PhantomReified<"0x2::package::UpgradeCap">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        package: {
            bytes: string;
        };
        version: string;
        policy: number;
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        package: {
            bytes: string;
        };
        version: string | number | bigint;
        policy: number;
    }>;
    static fromFields(fields: Record<string, any>): UpgradeCap;
    static fromFieldsWithTypes(item: FieldsWithTypes): UpgradeCap;
    static fromBcs(data: Uint8Array): UpgradeCap;
    toJSONField(): {
        id: string;
        package: string;
        version: string;
        policy: number;
    };
    toJSON(): {
        id: string;
        package: string;
        version: string;
        policy: number;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): UpgradeCap;
    static fromJSON(json: Record<string, any>): UpgradeCap;
    static fromSuiParsedData(content: SuiParsedData): UpgradeCap;
    static fetch(client: SuiClient, id: string): Promise<UpgradeCap>;
}
export declare function isUpgradeReceipt(type: string): boolean;
export interface UpgradeReceiptFields {
    cap: ToField<ID>;
    package: ToField<ID>;
}
export type UpgradeReceiptReified = Reified<UpgradeReceipt, UpgradeReceiptFields>;
export declare class UpgradeReceipt implements StructClass {
    static readonly $typeName = "0x2::package::UpgradeReceipt";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x2::package::UpgradeReceipt";
    readonly $fullTypeName: "0x2::package::UpgradeReceipt";
    readonly $typeArgs: [];
    readonly cap: ToField<ID>;
    readonly package: ToField<ID>;
    private constructor();
    static reified(): UpgradeReceiptReified;
    static get r(): reified.StructClassReified<UpgradeReceipt, UpgradeReceiptFields>;
    static phantom(): PhantomReified<ToTypeStr<UpgradeReceipt>>;
    static get p(): reified.PhantomReified<"0x2::package::UpgradeReceipt">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        cap: {
            bytes: string;
        };
        package: {
            bytes: string;
        };
    }, {
        cap: {
            bytes: string;
        };
        package: {
            bytes: string;
        };
    }>;
    static fromFields(fields: Record<string, any>): UpgradeReceipt;
    static fromFieldsWithTypes(item: FieldsWithTypes): UpgradeReceipt;
    static fromBcs(data: Uint8Array): UpgradeReceipt;
    toJSONField(): {
        cap: string;
        package: string;
    };
    toJSON(): {
        cap: string;
        package: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): UpgradeReceipt;
    static fromJSON(json: Record<string, any>): UpgradeReceipt;
    static fromSuiParsedData(content: SuiParsedData): UpgradeReceipt;
    static fetch(client: SuiClient, id: string): Promise<UpgradeReceipt>;
}
export declare function isUpgradeTicket(type: string): boolean;
export interface UpgradeTicketFields {
    cap: ToField<ID>;
    package: ToField<ID>;
    policy: ToField<"u8">;
    digest: ToField<Vector<"u8">>;
}
export type UpgradeTicketReified = Reified<UpgradeTicket, UpgradeTicketFields>;
export declare class UpgradeTicket implements StructClass {
    static readonly $typeName = "0x2::package::UpgradeTicket";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x2::package::UpgradeTicket";
    readonly $fullTypeName: "0x2::package::UpgradeTicket";
    readonly $typeArgs: [];
    readonly cap: ToField<ID>;
    readonly package: ToField<ID>;
    readonly policy: ToField<"u8">;
    readonly digest: ToField<Vector<"u8">>;
    private constructor();
    static reified(): UpgradeTicketReified;
    static get r(): reified.StructClassReified<UpgradeTicket, UpgradeTicketFields>;
    static phantom(): PhantomReified<ToTypeStr<UpgradeTicket>>;
    static get p(): reified.PhantomReified<"0x2::package::UpgradeTicket">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        cap: {
            bytes: string;
        };
        package: {
            bytes: string;
        };
        policy: number;
        digest: number[];
    }, {
        cap: {
            bytes: string;
        };
        package: {
            bytes: string;
        };
        policy: number;
        digest: Iterable<number> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): UpgradeTicket;
    static fromFieldsWithTypes(item: FieldsWithTypes): UpgradeTicket;
    static fromBcs(data: Uint8Array): UpgradeTicket;
    toJSONField(): {
        cap: string;
        package: string;
        policy: number;
        digest: number[];
    };
    toJSON(): {
        cap: string;
        package: string;
        policy: number;
        digest: number[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): UpgradeTicket;
    static fromJSON(json: Record<string, any>): UpgradeTicket;
    static fromSuiParsedData(content: SuiParsedData): UpgradeTicket;
    static fetch(client: SuiClient, id: string): Promise<UpgradeTicket>;
}
