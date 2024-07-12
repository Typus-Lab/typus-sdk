import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { UID } from "../../0x2/object/structs";
import { UpgradeCap } from "../../0x2/package/structs";
import { ConsumedVAAs } from "../../0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e/consumed-vaas/structs";
import { DataSource } from "../data-source/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isCurrentDigest(type: string): boolean;
export interface CurrentDigestFields {
    dummyField: ToField<"bool">;
}
export type CurrentDigestReified = Reified<CurrentDigest, CurrentDigestFields>;
export declare class CurrentDigest implements StructClass {
    static readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::state::CurrentDigest";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::state::CurrentDigest";
    readonly $fullTypeName: "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::state::CurrentDigest";
    readonly $typeArgs: [];
    readonly dummyField: ToField<"bool">;
    private constructor();
    static reified(): CurrentDigestReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<CurrentDigest, CurrentDigestFields>;
    static phantom(): PhantomReified<ToTypeStr<CurrentDigest>>;
    static get p(): PhantomReified<"0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::state::CurrentDigest">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        dummy_field: boolean;
    }, {
        dummy_field: boolean;
    }>;
    static fromFields(fields: Record<string, any>): CurrentDigest;
    static fromFieldsWithTypes(item: FieldsWithTypes): CurrentDigest;
    static fromBcs(data: Uint8Array): CurrentDigest;
    toJSONField(): {
        dummyField: boolean;
    };
    toJSON(): {
        dummyField: boolean;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): CurrentDigest;
    static fromJSON(json: Record<string, any>): CurrentDigest;
    static fromSuiParsedData(content: SuiParsedData): CurrentDigest;
    static fetch(client: SuiClient, id: string): Promise<CurrentDigest>;
}
export declare function isLatestOnly(type: string): boolean;
export interface LatestOnlyFields {
    dummyField: ToField<"bool">;
}
export type LatestOnlyReified = Reified<LatestOnly, LatestOnlyFields>;
export declare class LatestOnly implements StructClass {
    static readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::state::LatestOnly";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::state::LatestOnly";
    readonly $fullTypeName: "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::state::LatestOnly";
    readonly $typeArgs: [];
    readonly dummyField: ToField<"bool">;
    private constructor();
    static reified(): LatestOnlyReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<LatestOnly, LatestOnlyFields>;
    static phantom(): PhantomReified<ToTypeStr<LatestOnly>>;
    static get p(): PhantomReified<"0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::state::LatestOnly">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        dummy_field: boolean;
    }, {
        dummy_field: boolean;
    }>;
    static fromFields(fields: Record<string, any>): LatestOnly;
    static fromFieldsWithTypes(item: FieldsWithTypes): LatestOnly;
    static fromBcs(data: Uint8Array): LatestOnly;
    toJSONField(): {
        dummyField: boolean;
    };
    toJSON(): {
        dummyField: boolean;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): LatestOnly;
    static fromJSON(json: Record<string, any>): LatestOnly;
    static fromSuiParsedData(content: SuiParsedData): LatestOnly;
    static fetch(client: SuiClient, id: string): Promise<LatestOnly>;
}
export declare function isState(type: string): boolean;
export interface StateFields {
    id: ToField<UID>;
    governanceDataSource: ToField<DataSource>;
    stalePriceThreshold: ToField<"u64">;
    baseUpdateFee: ToField<"u64">;
    feeRecipientAddress: ToField<"address">;
    lastExecutedGovernanceSequence: ToField<"u64">;
    consumedVaas: ToField<ConsumedVAAs>;
    upgradeCap: ToField<UpgradeCap>;
}
export type StateReified = Reified<State, StateFields>;
export declare class State implements StructClass {
    static readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::state::State";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::state::State";
    readonly $fullTypeName: "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::state::State";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly governanceDataSource: ToField<DataSource>;
    readonly stalePriceThreshold: ToField<"u64">;
    readonly baseUpdateFee: ToField<"u64">;
    readonly feeRecipientAddress: ToField<"address">;
    readonly lastExecutedGovernanceSequence: ToField<"u64">;
    readonly consumedVaas: ToField<ConsumedVAAs>;
    readonly upgradeCap: ToField<UpgradeCap>;
    private constructor();
    static reified(): StateReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<State, StateFields>;
    static phantom(): PhantomReified<ToTypeStr<State>>;
    static get p(): PhantomReified<"0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::state::State">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        governance_data_source: {
            emitter_chain: string;
            emitter_address: {
                value: {
                    data: number[];
                };
            };
        };
        stale_price_threshold: string;
        base_update_fee: string;
        fee_recipient_address: string;
        last_executed_governance_sequence: string;
        consumed_vaas: {
            hashes: {
                items: {
                    id: {
                        id: {
                            bytes: string;
                        };
                    };
                    size: string;
                };
            };
        };
        upgrade_cap: {
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
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        governance_data_source: {
            emitter_chain: string | number | bigint;
            emitter_address: {
                value: {
                    data: Iterable<number> & {
                        length: number;
                    };
                };
            };
        };
        stale_price_threshold: string | number | bigint;
        base_update_fee: string | number | bigint;
        fee_recipient_address: string;
        last_executed_governance_sequence: string | number | bigint;
        consumed_vaas: {
            hashes: {
                items: {
                    id: {
                        id: {
                            bytes: string;
                        };
                    };
                    size: string | number | bigint;
                };
            };
        };
        upgrade_cap: {
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
        };
    }>;
    static fromFields(fields: Record<string, any>): State;
    static fromFieldsWithTypes(item: FieldsWithTypes): State;
    static fromBcs(data: Uint8Array): State;
    toJSONField(): {
        id: string;
        governanceDataSource: {
            emitterChain: string;
            emitterAddress: {
                value: {
                    data: number[];
                };
            };
        };
        stalePriceThreshold: string;
        baseUpdateFee: string;
        feeRecipientAddress: string;
        lastExecutedGovernanceSequence: string;
        consumedVaas: {
            hashes: {
                items: {
                    id: string;
                    size: string;
                };
            };
        };
        upgradeCap: {
            id: string;
            package: string;
            version: string;
            policy: number;
        };
    };
    toJSON(): {
        id: string;
        governanceDataSource: {
            emitterChain: string;
            emitterAddress: {
                value: {
                    data: number[];
                };
            };
        };
        stalePriceThreshold: string;
        baseUpdateFee: string;
        feeRecipientAddress: string;
        lastExecutedGovernanceSequence: string;
        consumedVaas: {
            hashes: {
                items: {
                    id: string;
                    size: string;
                };
            };
        };
        upgradeCap: {
            id: string;
            package: string;
            version: string;
            policy: number;
        };
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): State;
    static fromJSON(json: Record<string, any>): State;
    static fromSuiParsedData(content: SuiParsedData): State;
    static fetch(client: SuiClient, id: string): Promise<State>;
}
