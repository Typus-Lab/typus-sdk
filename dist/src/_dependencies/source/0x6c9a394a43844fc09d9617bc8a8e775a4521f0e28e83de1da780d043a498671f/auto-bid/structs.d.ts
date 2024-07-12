import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, Vector, ToTypeStr as ToPhantom } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { ID, UID } from "../../0x2/object/structs";
import { TableVec } from "../../0x2/table-vec/structs";
import { VecMap } from "../../0x2/vec-map/structs";
import { TypusBidReceipt } from "../../0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded/vault/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isAddAuthorutyEvent(type: string): boolean;
export interface AddAuthorutyEventFields {
    newAuthority: ToField<"address">;
    signer: ToField<"address">;
}
export type AddAuthorutyEventReified = Reified<AddAuthorutyEvent, AddAuthorutyEventFields>;
export declare class AddAuthorutyEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::AddAuthorutyEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::AddAuthorutyEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::AddAuthorutyEvent";
    readonly $typeArgs: [];
    readonly newAuthority: ToField<"address">;
    readonly signer: ToField<"address">;
    private constructor();
    static reified(): AddAuthorutyEventReified;
    static get r(): reified.StructClassReified<AddAuthorutyEvent, AddAuthorutyEventFields>;
    static phantom(): PhantomReified<ToTypeStr<AddAuthorutyEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::AddAuthorutyEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        new_authority: string;
        signer: string;
    }, {
        new_authority: string;
        signer: string;
    }>;
    static fromFields(fields: Record<string, any>): AddAuthorutyEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): AddAuthorutyEvent;
    static fromBcs(data: Uint8Array): AddAuthorutyEvent;
    toJSONField(): {
        newAuthority: string;
        signer: string;
    };
    toJSON(): {
        newAuthority: string;
        signer: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): AddAuthorutyEvent;
    static fromJSON(json: Record<string, any>): AddAuthorutyEvent;
    static fromSuiParsedData(content: SuiParsedData): AddAuthorutyEvent;
    static fetch(client: SuiClient, id: string): Promise<AddAuthorutyEvent>;
}
export declare function isAutoBidEvent(type: string): boolean;
export interface AutoBidEventFields {
    dummyField: ToField<"bool">;
}
export type AutoBidEventReified = Reified<AutoBidEvent, AutoBidEventFields>;
export declare class AutoBidEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::AutoBidEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::AutoBidEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::AutoBidEvent";
    readonly $typeArgs: [];
    readonly dummyField: ToField<"bool">;
    private constructor();
    static reified(): AutoBidEventReified;
    static get r(): reified.StructClassReified<AutoBidEvent, AutoBidEventFields>;
    static phantom(): PhantomReified<ToTypeStr<AutoBidEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::AutoBidEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        dummy_field: boolean;
    }, {
        dummy_field: boolean;
    }>;
    static fromFields(fields: Record<string, any>): AutoBidEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): AutoBidEvent;
    static fromBcs(data: Uint8Array): AutoBidEvent;
    toJSONField(): {
        dummyField: boolean;
    };
    toJSON(): {
        dummyField: boolean;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): AutoBidEvent;
    static fromJSON(json: Record<string, any>): AutoBidEvent;
    static fromSuiParsedData(content: SuiParsedData): AutoBidEvent;
    static fetch(client: SuiClient, id: string): Promise<AutoBidEvent>;
}
export declare function isCloseStrategyEvent(type: string): boolean;
export interface CloseStrategyEventFields {
    vaultIndex: ToField<"u64">;
    signalIndex: ToField<"u64">;
    user: ToField<"address">;
    pricePercentage: ToField<"u64">;
    size: ToField<"u64">;
    maxTimes: ToField<"u64">;
    targetRounds: ToField<Vector<"u64">>;
    u64Padding: ToField<Vector<"u64">>;
    bidTimes: ToField<"u64">;
    bidRound: ToField<"u64">;
    bidTsMs: ToField<"u64">;
}
export type CloseStrategyEventReified = Reified<CloseStrategyEvent, CloseStrategyEventFields>;
export declare class CloseStrategyEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::CloseStrategyEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::CloseStrategyEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::CloseStrategyEvent";
    readonly $typeArgs: [];
    readonly vaultIndex: ToField<"u64">;
    readonly signalIndex: ToField<"u64">;
    readonly user: ToField<"address">;
    readonly pricePercentage: ToField<"u64">;
    readonly size: ToField<"u64">;
    readonly maxTimes: ToField<"u64">;
    readonly targetRounds: ToField<Vector<"u64">>;
    readonly u64Padding: ToField<Vector<"u64">>;
    readonly bidTimes: ToField<"u64">;
    readonly bidRound: ToField<"u64">;
    readonly bidTsMs: ToField<"u64">;
    private constructor();
    static reified(): CloseStrategyEventReified;
    static get r(): reified.StructClassReified<CloseStrategyEvent, CloseStrategyEventFields>;
    static phantom(): PhantomReified<ToTypeStr<CloseStrategyEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::CloseStrategyEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        vault_index: string;
        signal_index: string;
        user: string;
        price_percentage: string;
        size: string;
        max_times: string;
        target_rounds: string[];
        u64_padding: string[];
        bid_times: string;
        bid_round: string;
        bid_ts_ms: string;
    }, {
        vault_index: string | number | bigint;
        signal_index: string | number | bigint;
        user: string;
        price_percentage: string | number | bigint;
        size: string | number | bigint;
        max_times: string | number | bigint;
        target_rounds: Iterable<string | number | bigint> & {
            length: number;
        };
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
        bid_times: string | number | bigint;
        bid_round: string | number | bigint;
        bid_ts_ms: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): CloseStrategyEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): CloseStrategyEvent;
    static fromBcs(data: Uint8Array): CloseStrategyEvent;
    toJSONField(): {
        vaultIndex: string;
        signalIndex: string;
        user: string;
        pricePercentage: string;
        size: string;
        maxTimes: string;
        targetRounds: string[];
        u64Padding: string[];
        bidTimes: string;
        bidRound: string;
        bidTsMs: string;
    };
    toJSON(): {
        vaultIndex: string;
        signalIndex: string;
        user: string;
        pricePercentage: string;
        size: string;
        maxTimes: string;
        targetRounds: string[];
        u64Padding: string[];
        bidTimes: string;
        bidRound: string;
        bidTsMs: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): CloseStrategyEvent;
    static fromJSON(json: Record<string, any>): CloseStrategyEvent;
    static fromSuiParsedData(content: SuiParsedData): CloseStrategyEvent;
    static fetch(client: SuiClient, id: string): Promise<CloseStrategyEvent>;
}
export declare function isCloseStrategyEventV2(type: string): boolean;
export interface CloseStrategyEventV2Fields {
    vaultIndex: ToField<"u64">;
    signalIndex: ToField<"u64">;
    user: ToField<"address">;
    pricePercentage: ToField<"u64">;
    size: ToField<"u64">;
    maxTimes: ToField<"u64">;
    targetRounds: ToField<Vector<"u64">>;
    u64Padding: ToField<Vector<"u64">>;
    bidTimes: ToField<"u64">;
    bidRound: ToField<"u64">;
    bidTsMs: ToField<"u64">;
    bidRounds: ToField<Vector<"u64">>;
    accumulatedProfit: ToField<"u64">;
}
export type CloseStrategyEventV2Reified = Reified<CloseStrategyEventV2, CloseStrategyEventV2Fields>;
export declare class CloseStrategyEventV2 implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::CloseStrategyEventV2";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::CloseStrategyEventV2";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::CloseStrategyEventV2";
    readonly $typeArgs: [];
    readonly vaultIndex: ToField<"u64">;
    readonly signalIndex: ToField<"u64">;
    readonly user: ToField<"address">;
    readonly pricePercentage: ToField<"u64">;
    readonly size: ToField<"u64">;
    readonly maxTimes: ToField<"u64">;
    readonly targetRounds: ToField<Vector<"u64">>;
    readonly u64Padding: ToField<Vector<"u64">>;
    readonly bidTimes: ToField<"u64">;
    readonly bidRound: ToField<"u64">;
    readonly bidTsMs: ToField<"u64">;
    readonly bidRounds: ToField<Vector<"u64">>;
    readonly accumulatedProfit: ToField<"u64">;
    private constructor();
    static reified(): CloseStrategyEventV2Reified;
    static get r(): reified.StructClassReified<CloseStrategyEventV2, CloseStrategyEventV2Fields>;
    static phantom(): PhantomReified<ToTypeStr<CloseStrategyEventV2>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::CloseStrategyEventV2">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        vault_index: string;
        signal_index: string;
        user: string;
        price_percentage: string;
        size: string;
        max_times: string;
        target_rounds: string[];
        u64_padding: string[];
        bid_times: string;
        bid_round: string;
        bid_ts_ms: string;
        bid_rounds: string[];
        accumulated_profit: string;
    }, {
        vault_index: string | number | bigint;
        signal_index: string | number | bigint;
        user: string;
        price_percentage: string | number | bigint;
        size: string | number | bigint;
        max_times: string | number | bigint;
        target_rounds: Iterable<string | number | bigint> & {
            length: number;
        };
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
        bid_times: string | number | bigint;
        bid_round: string | number | bigint;
        bid_ts_ms: string | number | bigint;
        bid_rounds: Iterable<string | number | bigint> & {
            length: number;
        };
        accumulated_profit: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): CloseStrategyEventV2;
    static fromFieldsWithTypes(item: FieldsWithTypes): CloseStrategyEventV2;
    static fromBcs(data: Uint8Array): CloseStrategyEventV2;
    toJSONField(): {
        vaultIndex: string;
        signalIndex: string;
        user: string;
        pricePercentage: string;
        size: string;
        maxTimes: string;
        targetRounds: string[];
        u64Padding: string[];
        bidTimes: string;
        bidRound: string;
        bidTsMs: string;
        bidRounds: string[];
        accumulatedProfit: string;
    };
    toJSON(): {
        vaultIndex: string;
        signalIndex: string;
        user: string;
        pricePercentage: string;
        size: string;
        maxTimes: string;
        targetRounds: string[];
        u64Padding: string[];
        bidTimes: string;
        bidRound: string;
        bidTsMs: string;
        bidRounds: string[];
        accumulatedProfit: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): CloseStrategyEventV2;
    static fromJSON(json: Record<string, any>): CloseStrategyEventV2;
    static fromSuiParsedData(content: SuiParsedData): CloseStrategyEventV2;
    static fetch(client: SuiClient, id: string): Promise<CloseStrategyEventV2>;
}
export declare function isNewStrategyEvent(type: string): boolean;
export interface NewStrategyEventFields {
    vaultIndex: ToField<"u64">;
    signalIndex: ToField<"u64">;
    user: ToField<"address">;
    pricePercentage: ToField<"u64">;
    size: ToField<"u64">;
    maxTimes: ToField<"u64">;
    targetRounds: ToField<Vector<"u64">>;
}
export type NewStrategyEventReified = Reified<NewStrategyEvent, NewStrategyEventFields>;
export declare class NewStrategyEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::NewStrategyEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::NewStrategyEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::NewStrategyEvent";
    readonly $typeArgs: [];
    readonly vaultIndex: ToField<"u64">;
    readonly signalIndex: ToField<"u64">;
    readonly user: ToField<"address">;
    readonly pricePercentage: ToField<"u64">;
    readonly size: ToField<"u64">;
    readonly maxTimes: ToField<"u64">;
    readonly targetRounds: ToField<Vector<"u64">>;
    private constructor();
    static reified(): NewStrategyEventReified;
    static get r(): reified.StructClassReified<NewStrategyEvent, NewStrategyEventFields>;
    static phantom(): PhantomReified<ToTypeStr<NewStrategyEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::NewStrategyEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        vault_index: string;
        signal_index: string;
        user: string;
        price_percentage: string;
        size: string;
        max_times: string;
        target_rounds: string[];
    }, {
        vault_index: string | number | bigint;
        signal_index: string | number | bigint;
        user: string;
        price_percentage: string | number | bigint;
        size: string | number | bigint;
        max_times: string | number | bigint;
        target_rounds: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): NewStrategyEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): NewStrategyEvent;
    static fromBcs(data: Uint8Array): NewStrategyEvent;
    toJSONField(): {
        vaultIndex: string;
        signalIndex: string;
        user: string;
        pricePercentage: string;
        size: string;
        maxTimes: string;
        targetRounds: string[];
    };
    toJSON(): {
        vaultIndex: string;
        signalIndex: string;
        user: string;
        pricePercentage: string;
        size: string;
        maxTimes: string;
        targetRounds: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): NewStrategyEvent;
    static fromJSON(json: Record<string, any>): NewStrategyEvent;
    static fromSuiParsedData(content: SuiParsedData): NewStrategyEvent;
    static fetch(client: SuiClient, id: string): Promise<NewStrategyEvent>;
}
export declare function isNewStrategyEventV2(type: string): boolean;
export interface NewStrategyEventV2Fields {
    vaultIndex: ToField<"u64">;
    signalIndex: ToField<"u64">;
    user: ToField<"address">;
    pricePercentage: ToField<"u64">;
    size: ToField<"u64">;
    maxTimes: ToField<"u64">;
    targetRounds: ToField<Vector<"u64">>;
    depositAmount: ToField<"u64">;
}
export type NewStrategyEventV2Reified = Reified<NewStrategyEventV2, NewStrategyEventV2Fields>;
export declare class NewStrategyEventV2 implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::NewStrategyEventV2";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::NewStrategyEventV2";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::NewStrategyEventV2";
    readonly $typeArgs: [];
    readonly vaultIndex: ToField<"u64">;
    readonly signalIndex: ToField<"u64">;
    readonly user: ToField<"address">;
    readonly pricePercentage: ToField<"u64">;
    readonly size: ToField<"u64">;
    readonly maxTimes: ToField<"u64">;
    readonly targetRounds: ToField<Vector<"u64">>;
    readonly depositAmount: ToField<"u64">;
    private constructor();
    static reified(): NewStrategyEventV2Reified;
    static get r(): reified.StructClassReified<NewStrategyEventV2, NewStrategyEventV2Fields>;
    static phantom(): PhantomReified<ToTypeStr<NewStrategyEventV2>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::NewStrategyEventV2">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        vault_index: string;
        signal_index: string;
        user: string;
        price_percentage: string;
        size: string;
        max_times: string;
        target_rounds: string[];
        deposit_amount: string;
    }, {
        vault_index: string | number | bigint;
        signal_index: string | number | bigint;
        user: string;
        price_percentage: string | number | bigint;
        size: string | number | bigint;
        max_times: string | number | bigint;
        target_rounds: Iterable<string | number | bigint> & {
            length: number;
        };
        deposit_amount: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): NewStrategyEventV2;
    static fromFieldsWithTypes(item: FieldsWithTypes): NewStrategyEventV2;
    static fromBcs(data: Uint8Array): NewStrategyEventV2;
    toJSONField(): {
        vaultIndex: string;
        signalIndex: string;
        user: string;
        pricePercentage: string;
        size: string;
        maxTimes: string;
        targetRounds: string[];
        depositAmount: string;
    };
    toJSON(): {
        vaultIndex: string;
        signalIndex: string;
        user: string;
        pricePercentage: string;
        size: string;
        maxTimes: string;
        targetRounds: string[];
        depositAmount: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): NewStrategyEventV2;
    static fromJSON(json: Record<string, any>): NewStrategyEventV2;
    static fromSuiParsedData(content: SuiParsedData): NewStrategyEventV2;
    static fetch(client: SuiClient, id: string): Promise<NewStrategyEventV2>;
}
export declare function isNewStrategyPoolEvent(type: string): boolean;
export interface NewStrategyPoolEventFields {
    id: ToField<ID>;
    signer: ToField<"address">;
}
export type NewStrategyPoolEventReified = Reified<NewStrategyPoolEvent, NewStrategyPoolEventFields>;
export declare class NewStrategyPoolEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::NewStrategyPoolEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::NewStrategyPoolEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::NewStrategyPoolEvent";
    readonly $typeArgs: [];
    readonly id: ToField<ID>;
    readonly signer: ToField<"address">;
    private constructor();
    static reified(): NewStrategyPoolEventReified;
    static get r(): reified.StructClassReified<NewStrategyPoolEvent, NewStrategyPoolEventFields>;
    static phantom(): PhantomReified<ToTypeStr<NewStrategyPoolEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::NewStrategyPoolEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            bytes: string;
        };
        signer: string;
    }, {
        id: {
            bytes: string;
        };
        signer: string;
    }>;
    static fromFields(fields: Record<string, any>): NewStrategyPoolEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): NewStrategyPoolEvent;
    static fromBcs(data: Uint8Array): NewStrategyPoolEvent;
    toJSONField(): {
        id: string;
        signer: string;
    };
    toJSON(): {
        id: string;
        signer: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): NewStrategyPoolEvent;
    static fromJSON(json: Record<string, any>): NewStrategyPoolEvent;
    static fromSuiParsedData(content: SuiParsedData): NewStrategyPoolEvent;
    static fetch(client: SuiClient, id: string): Promise<NewStrategyPoolEvent>;
}
export declare function isNewStrategySignalEvent(type: string): boolean;
export interface NewStrategySignalEventFields {
    id: ToField<ID>;
    vaultIndex: ToField<"u64">;
    signalIndex: ToField<"u64">;
    signer: ToField<"address">;
}
export type NewStrategySignalEventReified = Reified<NewStrategySignalEvent, NewStrategySignalEventFields>;
export declare class NewStrategySignalEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::NewStrategySignalEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::NewStrategySignalEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::NewStrategySignalEvent";
    readonly $typeArgs: [];
    readonly id: ToField<ID>;
    readonly vaultIndex: ToField<"u64">;
    readonly signalIndex: ToField<"u64">;
    readonly signer: ToField<"address">;
    private constructor();
    static reified(): NewStrategySignalEventReified;
    static get r(): reified.StructClassReified<NewStrategySignalEvent, NewStrategySignalEventFields>;
    static phantom(): PhantomReified<ToTypeStr<NewStrategySignalEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::NewStrategySignalEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            bytes: string;
        };
        vault_index: string;
        signal_index: string;
        signer: string;
    }, {
        id: {
            bytes: string;
        };
        vault_index: string | number | bigint;
        signal_index: string | number | bigint;
        signer: string;
    }>;
    static fromFields(fields: Record<string, any>): NewStrategySignalEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): NewStrategySignalEvent;
    static fromBcs(data: Uint8Array): NewStrategySignalEvent;
    toJSONField(): {
        id: string;
        vaultIndex: string;
        signalIndex: string;
        signer: string;
    };
    toJSON(): {
        id: string;
        vaultIndex: string;
        signalIndex: string;
        signer: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): NewStrategySignalEvent;
    static fromJSON(json: Record<string, any>): NewStrategySignalEvent;
    static fromSuiParsedData(content: SuiParsedData): NewStrategySignalEvent;
    static fetch(client: SuiClient, id: string): Promise<NewStrategySignalEvent>;
}
export declare function isNewStrategyVaultEvent(type: string): boolean;
export interface NewStrategyVaultEventFields {
    id: ToField<ID>;
    vaultIndex: ToField<"u64">;
    signer: ToField<"address">;
}
export type NewStrategyVaultEventReified = Reified<NewStrategyVaultEvent, NewStrategyVaultEventFields>;
export declare class NewStrategyVaultEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::NewStrategyVaultEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::NewStrategyVaultEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::NewStrategyVaultEvent";
    readonly $typeArgs: [];
    readonly id: ToField<ID>;
    readonly vaultIndex: ToField<"u64">;
    readonly signer: ToField<"address">;
    private constructor();
    static reified(): NewStrategyVaultEventReified;
    static get r(): reified.StructClassReified<NewStrategyVaultEvent, NewStrategyVaultEventFields>;
    static phantom(): PhantomReified<ToTypeStr<NewStrategyVaultEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::NewStrategyVaultEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            bytes: string;
        };
        vault_index: string;
        signer: string;
    }, {
        id: {
            bytes: string;
        };
        vault_index: string | number | bigint;
        signer: string;
    }>;
    static fromFields(fields: Record<string, any>): NewStrategyVaultEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): NewStrategyVaultEvent;
    static fromBcs(data: Uint8Array): NewStrategyVaultEvent;
    toJSONField(): {
        id: string;
        vaultIndex: string;
        signer: string;
    };
    toJSON(): {
        id: string;
        vaultIndex: string;
        signer: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): NewStrategyVaultEvent;
    static fromJSON(json: Record<string, any>): NewStrategyVaultEvent;
    static fromSuiParsedData(content: SuiParsedData): NewStrategyVaultEvent;
    static fetch(client: SuiClient, id: string): Promise<NewStrategyVaultEvent>;
}
export declare function isRemoveStrategyVaultEvent(type: string): boolean;
export interface RemoveStrategyVaultEventFields {
    id: ToField<ID>;
    vaultIndex: ToField<"u64">;
    signer: ToField<"address">;
}
export type RemoveStrategyVaultEventReified = Reified<RemoveStrategyVaultEvent, RemoveStrategyVaultEventFields>;
export declare class RemoveStrategyVaultEvent implements StructClass {
    static readonly $typeName = "0x197e13a257d67211cd3bc9ff5b93ffd298afedb43f4c7cbdd9438f5e4e823f4f::auto_bid::RemoveStrategyVaultEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x197e13a257d67211cd3bc9ff5b93ffd298afedb43f4c7cbdd9438f5e4e823f4f::auto_bid::RemoveStrategyVaultEvent";
    readonly $fullTypeName: "0x197e13a257d67211cd3bc9ff5b93ffd298afedb43f4c7cbdd9438f5e4e823f4f::auto_bid::RemoveStrategyVaultEvent";
    readonly $typeArgs: [];
    readonly id: ToField<ID>;
    readonly vaultIndex: ToField<"u64">;
    readonly signer: ToField<"address">;
    private constructor();
    static reified(): RemoveStrategyVaultEventReified;
    static get r(): reified.StructClassReified<RemoveStrategyVaultEvent, RemoveStrategyVaultEventFields>;
    static phantom(): PhantomReified<ToTypeStr<RemoveStrategyVaultEvent>>;
    static get p(): reified.PhantomReified<"0x197e13a257d67211cd3bc9ff5b93ffd298afedb43f4c7cbdd9438f5e4e823f4f::auto_bid::RemoveStrategyVaultEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            bytes: string;
        };
        vault_index: string;
        signer: string;
    }, {
        id: {
            bytes: string;
        };
        vault_index: string | number | bigint;
        signer: string;
    }>;
    static fromFields(fields: Record<string, any>): RemoveStrategyVaultEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): RemoveStrategyVaultEvent;
    static fromBcs(data: Uint8Array): RemoveStrategyVaultEvent;
    toJSONField(): {
        id: string;
        vaultIndex: string;
        signer: string;
    };
    toJSON(): {
        id: string;
        vaultIndex: string;
        signer: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): RemoveStrategyVaultEvent;
    static fromJSON(json: Record<string, any>): RemoveStrategyVaultEvent;
    static fromSuiParsedData(content: SuiParsedData): RemoveStrategyVaultEvent;
    static fetch(client: SuiClient, id: string): Promise<RemoveStrategyVaultEvent>;
}
export declare function isStrategy(type: string): boolean;
export interface StrategyFields {
    id: ToField<UID>;
    vaultIndex: ToField<"u64">;
    signalIndex: ToField<"u64">;
    user: ToField<"address">;
    pricePercentage: ToField<"u64">;
    size: ToField<"u64">;
    maxTimes: ToField<"u64">;
    targetRounds: ToField<Vector<"u64">>;
    receipts: ToField<Vector<TypusBidReceipt>>;
    active: ToField<"bool">;
    u64Padding: ToField<Vector<"u64">>;
    bidTimes: ToField<"u64">;
    bidRound: ToField<"u64">;
    bidTsMs: ToField<"u64">;
}
export type StrategyReified = Reified<Strategy, StrategyFields>;
export declare class Strategy implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::Strategy";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::Strategy";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::Strategy";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly vaultIndex: ToField<"u64">;
    readonly signalIndex: ToField<"u64">;
    readonly user: ToField<"address">;
    readonly pricePercentage: ToField<"u64">;
    readonly size: ToField<"u64">;
    readonly maxTimes: ToField<"u64">;
    readonly targetRounds: ToField<Vector<"u64">>;
    readonly receipts: ToField<Vector<TypusBidReceipt>>;
    readonly active: ToField<"bool">;
    readonly u64Padding: ToField<Vector<"u64">>;
    readonly bidTimes: ToField<"u64">;
    readonly bidRound: ToField<"u64">;
    readonly bidTsMs: ToField<"u64">;
    private constructor();
    static reified(): StrategyReified;
    static get r(): reified.StructClassReified<Strategy, StrategyFields>;
    static phantom(): PhantomReified<ToTypeStr<Strategy>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::Strategy">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        vault_index: string;
        signal_index: string;
        user: string;
        price_percentage: string;
        size: string;
        max_times: string;
        target_rounds: string[];
        receipts: {
            id: {
                id: {
                    bytes: string;
                };
            };
            vid: {
                bytes: string;
            };
            index: string;
            metadata: {
                bytes: number[];
            };
            u64_padding: string[];
        }[];
        active: boolean;
        u64_padding: string[];
        bid_times: string;
        bid_round: string;
        bid_ts_ms: string;
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        vault_index: string | number | bigint;
        signal_index: string | number | bigint;
        user: string;
        price_percentage: string | number | bigint;
        size: string | number | bigint;
        max_times: string | number | bigint;
        target_rounds: Iterable<string | number | bigint> & {
            length: number;
        };
        receipts: Iterable<{
            id: {
                id: {
                    bytes: string;
                };
            };
            vid: {
                bytes: string;
            };
            index: string | number | bigint;
            metadata: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
            u64_padding: Iterable<string | number | bigint> & {
                length: number;
            };
        }> & {
            length: number;
        };
        active: boolean;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
        bid_times: string | number | bigint;
        bid_round: string | number | bigint;
        bid_ts_ms: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): Strategy;
    static fromFieldsWithTypes(item: FieldsWithTypes): Strategy;
    static fromBcs(data: Uint8Array): Strategy;
    toJSONField(): {
        id: string;
        vaultIndex: string;
        signalIndex: string;
        user: string;
        pricePercentage: string;
        size: string;
        maxTimes: string;
        targetRounds: string[];
        receipts: {
            id: string;
            vid: string;
            index: string;
            metadata: string;
            u64Padding: string[];
        }[];
        active: boolean;
        u64Padding: string[];
        bidTimes: string;
        bidRound: string;
        bidTsMs: string;
    };
    toJSON(): {
        id: string;
        vaultIndex: string;
        signalIndex: string;
        user: string;
        pricePercentage: string;
        size: string;
        maxTimes: string;
        targetRounds: string[];
        receipts: {
            id: string;
            vid: string;
            index: string;
            metadata: string;
            u64Padding: string[];
        }[];
        active: boolean;
        u64Padding: string[];
        bidTimes: string;
        bidRound: string;
        bidTsMs: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Strategy;
    static fromJSON(json: Record<string, any>): Strategy;
    static fromSuiParsedData(content: SuiParsedData): Strategy;
    static fetch(client: SuiClient, id: string): Promise<Strategy>;
}
export declare function isStrategyPool(type: string): boolean;
export interface StrategyPoolFields {
    id: ToField<UID>;
    strategies: ToField<VecMap<"u64", VecMap<"u64", TableVec<ToPhantom<Strategy>>>>>;
    authority: ToField<Vector<"address">>;
}
export type StrategyPoolReified = Reified<StrategyPool, StrategyPoolFields>;
export declare class StrategyPool implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::StrategyPool";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::StrategyPool";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::StrategyPool";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly strategies: ToField<VecMap<"u64", VecMap<"u64", TableVec<ToPhantom<Strategy>>>>>;
    readonly authority: ToField<Vector<"address">>;
    private constructor();
    static reified(): StrategyPoolReified;
    static get r(): reified.StructClassReified<StrategyPool, StrategyPoolFields>;
    static phantom(): PhantomReified<ToTypeStr<StrategyPool>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::StrategyPool">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        strategies: {
            contents: {
                key: string;
                value: {
                    contents: {
                        key: string;
                        value: {
                            contents: {
                                id: {
                                    id: {
                                        bytes: string;
                                    };
                                };
                                size: string;
                            };
                        };
                    }[];
                };
            }[];
        };
        authority: string[];
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        strategies: {
            contents: Iterable<{
                key: string | number | bigint;
                value: {
                    contents: Iterable<{
                        key: string | number | bigint;
                        value: {
                            contents: {
                                id: {
                                    id: {
                                        bytes: string;
                                    };
                                };
                                size: string | number | bigint;
                            };
                        };
                    }> & {
                        length: number;
                    };
                };
            }> & {
                length: number;
            };
        };
        authority: Iterable<string> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): StrategyPool;
    static fromFieldsWithTypes(item: FieldsWithTypes): StrategyPool;
    static fromBcs(data: Uint8Array): StrategyPool;
    toJSONField(): {
        id: string;
        strategies: {
            contents: {
                key: string;
                value: {
                    contents: {
                        key: string;
                        value: {
                            contents: {
                                id: string;
                                size: string;
                            };
                        };
                    }[];
                };
            }[];
        };
        authority: string[];
    };
    toJSON(): {
        id: string;
        strategies: {
            contents: {
                key: string;
                value: {
                    contents: {
                        key: string;
                        value: {
                            contents: {
                                id: string;
                                size: string;
                            };
                        };
                    }[];
                };
            }[];
        };
        authority: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): StrategyPool;
    static fromJSON(json: Record<string, any>): StrategyPool;
    static fromSuiParsedData(content: SuiParsedData): StrategyPool;
    static fetch(client: SuiClient, id: string): Promise<StrategyPool>;
}
export declare function isStrategyPoolV2(type: string): boolean;
export interface StrategyPoolV2Fields {
    id: ToField<UID>;
    strategies: ToField<VecMap<"u64", VecMap<"u64", TableVec<ToPhantom<StrategyV2>>>>>;
    authority: ToField<Vector<"address">>;
}
export type StrategyPoolV2Reified = Reified<StrategyPoolV2, StrategyPoolV2Fields>;
export declare class StrategyPoolV2 implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::StrategyPoolV2";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::StrategyPoolV2";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::StrategyPoolV2";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly strategies: ToField<VecMap<"u64", VecMap<"u64", TableVec<ToPhantom<StrategyV2>>>>>;
    readonly authority: ToField<Vector<"address">>;
    private constructor();
    static reified(): StrategyPoolV2Reified;
    static get r(): reified.StructClassReified<StrategyPoolV2, StrategyPoolV2Fields>;
    static phantom(): PhantomReified<ToTypeStr<StrategyPoolV2>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::StrategyPoolV2">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        strategies: {
            contents: {
                key: string;
                value: {
                    contents: {
                        key: string;
                        value: {
                            contents: {
                                id: {
                                    id: {
                                        bytes: string;
                                    };
                                };
                                size: string;
                            };
                        };
                    }[];
                };
            }[];
        };
        authority: string[];
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        strategies: {
            contents: Iterable<{
                key: string | number | bigint;
                value: {
                    contents: Iterable<{
                        key: string | number | bigint;
                        value: {
                            contents: {
                                id: {
                                    id: {
                                        bytes: string;
                                    };
                                };
                                size: string | number | bigint;
                            };
                        };
                    }> & {
                        length: number;
                    };
                };
            }> & {
                length: number;
            };
        };
        authority: Iterable<string> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): StrategyPoolV2;
    static fromFieldsWithTypes(item: FieldsWithTypes): StrategyPoolV2;
    static fromBcs(data: Uint8Array): StrategyPoolV2;
    toJSONField(): {
        id: string;
        strategies: {
            contents: {
                key: string;
                value: {
                    contents: {
                        key: string;
                        value: {
                            contents: {
                                id: string;
                                size: string;
                            };
                        };
                    }[];
                };
            }[];
        };
        authority: string[];
    };
    toJSON(): {
        id: string;
        strategies: {
            contents: {
                key: string;
                value: {
                    contents: {
                        key: string;
                        value: {
                            contents: {
                                id: string;
                                size: string;
                            };
                        };
                    }[];
                };
            }[];
        };
        authority: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): StrategyPoolV2;
    static fromJSON(json: Record<string, any>): StrategyPoolV2;
    static fromSuiParsedData(content: SuiParsedData): StrategyPoolV2;
    static fetch(client: SuiClient, id: string): Promise<StrategyPoolV2>;
}
export declare function isStrategyV2(type: string): boolean;
export interface StrategyV2Fields {
    id: ToField<UID>;
    vaultIndex: ToField<"u64">;
    signalIndex: ToField<"u64">;
    user: ToField<"address">;
    pricePercentage: ToField<"u64">;
    size: ToField<"u64">;
    maxTimes: ToField<"u64">;
    targetRounds: ToField<Vector<"u64">>;
    receipts: ToField<Vector<TypusBidReceipt>>;
    active: ToField<"bool">;
    u64Padding: ToField<Vector<"u64">>;
    bidTimes: ToField<"u64">;
    bidRound: ToField<"u64">;
    bidTsMs: ToField<"u64">;
    bidRounds: ToField<Vector<"u64">>;
    accumulatedProfit: ToField<"u64">;
}
export type StrategyV2Reified = Reified<StrategyV2, StrategyV2Fields>;
export declare class StrategyV2 implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::StrategyV2";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::StrategyV2";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::StrategyV2";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly vaultIndex: ToField<"u64">;
    readonly signalIndex: ToField<"u64">;
    readonly user: ToField<"address">;
    readonly pricePercentage: ToField<"u64">;
    readonly size: ToField<"u64">;
    readonly maxTimes: ToField<"u64">;
    readonly targetRounds: ToField<Vector<"u64">>;
    readonly receipts: ToField<Vector<TypusBidReceipt>>;
    readonly active: ToField<"bool">;
    readonly u64Padding: ToField<Vector<"u64">>;
    readonly bidTimes: ToField<"u64">;
    readonly bidRound: ToField<"u64">;
    readonly bidTsMs: ToField<"u64">;
    readonly bidRounds: ToField<Vector<"u64">>;
    readonly accumulatedProfit: ToField<"u64">;
    private constructor();
    static reified(): StrategyV2Reified;
    static get r(): reified.StructClassReified<StrategyV2, StrategyV2Fields>;
    static phantom(): PhantomReified<ToTypeStr<StrategyV2>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::StrategyV2">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        vault_index: string;
        signal_index: string;
        user: string;
        price_percentage: string;
        size: string;
        max_times: string;
        target_rounds: string[];
        receipts: {
            id: {
                id: {
                    bytes: string;
                };
            };
            vid: {
                bytes: string;
            };
            index: string;
            metadata: {
                bytes: number[];
            };
            u64_padding: string[];
        }[];
        active: boolean;
        u64_padding: string[];
        bid_times: string;
        bid_round: string;
        bid_ts_ms: string;
        bid_rounds: string[];
        accumulated_profit: string;
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        vault_index: string | number | bigint;
        signal_index: string | number | bigint;
        user: string;
        price_percentage: string | number | bigint;
        size: string | number | bigint;
        max_times: string | number | bigint;
        target_rounds: Iterable<string | number | bigint> & {
            length: number;
        };
        receipts: Iterable<{
            id: {
                id: {
                    bytes: string;
                };
            };
            vid: {
                bytes: string;
            };
            index: string | number | bigint;
            metadata: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
            u64_padding: Iterable<string | number | bigint> & {
                length: number;
            };
        }> & {
            length: number;
        };
        active: boolean;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
        bid_times: string | number | bigint;
        bid_round: string | number | bigint;
        bid_ts_ms: string | number | bigint;
        bid_rounds: Iterable<string | number | bigint> & {
            length: number;
        };
        accumulated_profit: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): StrategyV2;
    static fromFieldsWithTypes(item: FieldsWithTypes): StrategyV2;
    static fromBcs(data: Uint8Array): StrategyV2;
    toJSONField(): {
        id: string;
        vaultIndex: string;
        signalIndex: string;
        user: string;
        pricePercentage: string;
        size: string;
        maxTimes: string;
        targetRounds: string[];
        receipts: {
            id: string;
            vid: string;
            index: string;
            metadata: string;
            u64Padding: string[];
        }[];
        active: boolean;
        u64Padding: string[];
        bidTimes: string;
        bidRound: string;
        bidTsMs: string;
        bidRounds: string[];
        accumulatedProfit: string;
    };
    toJSON(): {
        id: string;
        vaultIndex: string;
        signalIndex: string;
        user: string;
        pricePercentage: string;
        size: string;
        maxTimes: string;
        targetRounds: string[];
        receipts: {
            id: string;
            vid: string;
            index: string;
            metadata: string;
            u64Padding: string[];
        }[];
        active: boolean;
        u64Padding: string[];
        bidTimes: string;
        bidRound: string;
        bidTsMs: string;
        bidRounds: string[];
        accumulatedProfit: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): StrategyV2;
    static fromJSON(json: Record<string, any>): StrategyV2;
    static fromSuiParsedData(content: SuiParsedData): StrategyV2;
    static fetch(client: SuiClient, id: string): Promise<StrategyV2>;
}
export declare function isUpdateStrategyEvent(type: string): boolean;
export interface UpdateStrategyEventFields {
    vaultIndex: ToField<"u64">;
    signalIndex: ToField<"u64">;
    strategyIndex: ToField<"u64">;
    user: ToField<"address">;
    pricePercentage: ToField<"u64">;
    size: ToField<"u64">;
    maxTimes: ToField<"u64">;
    targetRounds: ToField<Vector<"u64">>;
    depositAmount: ToField<"u64">;
}
export type UpdateStrategyEventReified = Reified<UpdateStrategyEvent, UpdateStrategyEventFields>;
export declare class UpdateStrategyEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::UpdateStrategyEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::UpdateStrategyEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::UpdateStrategyEvent";
    readonly $typeArgs: [];
    readonly vaultIndex: ToField<"u64">;
    readonly signalIndex: ToField<"u64">;
    readonly strategyIndex: ToField<"u64">;
    readonly user: ToField<"address">;
    readonly pricePercentage: ToField<"u64">;
    readonly size: ToField<"u64">;
    readonly maxTimes: ToField<"u64">;
    readonly targetRounds: ToField<Vector<"u64">>;
    readonly depositAmount: ToField<"u64">;
    private constructor();
    static reified(): UpdateStrategyEventReified;
    static get r(): reified.StructClassReified<UpdateStrategyEvent, UpdateStrategyEventFields>;
    static phantom(): PhantomReified<ToTypeStr<UpdateStrategyEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::UpdateStrategyEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        vault_index: string;
        signal_index: string;
        strategy_index: string;
        user: string;
        price_percentage: string;
        size: string;
        max_times: string;
        target_rounds: string[];
        deposit_amount: string;
    }, {
        vault_index: string | number | bigint;
        signal_index: string | number | bigint;
        strategy_index: string | number | bigint;
        user: string;
        price_percentage: string | number | bigint;
        size: string | number | bigint;
        max_times: string | number | bigint;
        target_rounds: Iterable<string | number | bigint> & {
            length: number;
        };
        deposit_amount: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): UpdateStrategyEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): UpdateStrategyEvent;
    static fromBcs(data: Uint8Array): UpdateStrategyEvent;
    toJSONField(): {
        vaultIndex: string;
        signalIndex: string;
        strategyIndex: string;
        user: string;
        pricePercentage: string;
        size: string;
        maxTimes: string;
        targetRounds: string[];
        depositAmount: string;
    };
    toJSON(): {
        vaultIndex: string;
        signalIndex: string;
        strategyIndex: string;
        user: string;
        pricePercentage: string;
        size: string;
        maxTimes: string;
        targetRounds: string[];
        depositAmount: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): UpdateStrategyEvent;
    static fromJSON(json: Record<string, any>): UpdateStrategyEvent;
    static fromSuiParsedData(content: SuiParsedData): UpdateStrategyEvent;
    static fetch(client: SuiClient, id: string): Promise<UpdateStrategyEvent>;
}
export declare function isWithdrawProfitEvent(type: string): boolean;
export interface WithdrawProfitEventFields {
    vaultIndex: ToField<"u64">;
    signalIndex: ToField<"u64">;
    strategyIndex: ToField<"u64">;
    user: ToField<"address">;
    profit: ToField<"u64">;
}
export type WithdrawProfitEventReified = Reified<WithdrawProfitEvent, WithdrawProfitEventFields>;
export declare class WithdrawProfitEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::WithdrawProfitEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::WithdrawProfitEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::WithdrawProfitEvent";
    readonly $typeArgs: [];
    readonly vaultIndex: ToField<"u64">;
    readonly signalIndex: ToField<"u64">;
    readonly strategyIndex: ToField<"u64">;
    readonly user: ToField<"address">;
    readonly profit: ToField<"u64">;
    private constructor();
    static reified(): WithdrawProfitEventReified;
    static get r(): reified.StructClassReified<WithdrawProfitEvent, WithdrawProfitEventFields>;
    static phantom(): PhantomReified<ToTypeStr<WithdrawProfitEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::WithdrawProfitEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        vault_index: string;
        signal_index: string;
        strategy_index: string;
        user: string;
        profit: string;
    }, {
        vault_index: string | number | bigint;
        signal_index: string | number | bigint;
        strategy_index: string | number | bigint;
        user: string;
        profit: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): WithdrawProfitEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): WithdrawProfitEvent;
    static fromBcs(data: Uint8Array): WithdrawProfitEvent;
    toJSONField(): {
        vaultIndex: string;
        signalIndex: string;
        strategyIndex: string;
        user: string;
        profit: string;
    };
    toJSON(): {
        vaultIndex: string;
        signalIndex: string;
        strategyIndex: string;
        user: string;
        profit: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): WithdrawProfitEvent;
    static fromJSON(json: Record<string, any>): WithdrawProfitEvent;
    static fromSuiParsedData(content: SuiParsedData): WithdrawProfitEvent;
    static fetch(client: SuiClient, id: string): Promise<WithdrawProfitEvent>;
}
