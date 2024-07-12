import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, ToTypeStr as ToPhantom } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { UID } from "../../0x2/object/structs";
import { UpgradeCap } from "../../0x2/package/structs";
import { Table } from "../../0x2/table/structs";
import { ConsumedVAAs } from "../consumed-vaas/structs";
import { ExternalAddress } from "../external-address/structs";
import { FeeCollector } from "../fee-collector/structs";
import { GuardianSet } from "../guardian-set/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isLatestOnly(type: string): boolean;
export interface LatestOnlyFields {
    dummyField: ToField<"bool">;
}
export type LatestOnlyReified = Reified<LatestOnly, LatestOnlyFields>;
export declare class LatestOnly implements StructClass {
    static readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::state::LatestOnly";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::state::LatestOnly";
    readonly $fullTypeName: "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::state::LatestOnly";
    readonly $typeArgs: [];
    readonly dummyField: ToField<"bool">;
    private constructor();
    static reified(): LatestOnlyReified;
    static get r(): reified.StructClassReified<LatestOnly, LatestOnlyFields>;
    static phantom(): PhantomReified<ToTypeStr<LatestOnly>>;
    static get p(): reified.PhantomReified<"0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::state::LatestOnly">;
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
    governanceChain: ToField<"u16">;
    governanceContract: ToField<ExternalAddress>;
    guardianSetIndex: ToField<"u32">;
    guardianSets: ToField<Table<"u32", ToPhantom<GuardianSet>>>;
    guardianSetSecondsToLive: ToField<"u32">;
    consumedVaas: ToField<ConsumedVAAs>;
    feeCollector: ToField<FeeCollector>;
    upgradeCap: ToField<UpgradeCap>;
}
export type StateReified = Reified<State, StateFields>;
export declare class State implements StructClass {
    static readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::state::State";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::state::State";
    readonly $fullTypeName: "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::state::State";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly governanceChain: ToField<"u16">;
    readonly governanceContract: ToField<ExternalAddress>;
    readonly guardianSetIndex: ToField<"u32">;
    readonly guardianSets: ToField<Table<"u32", ToPhantom<GuardianSet>>>;
    readonly guardianSetSecondsToLive: ToField<"u32">;
    readonly consumedVaas: ToField<ConsumedVAAs>;
    readonly feeCollector: ToField<FeeCollector>;
    readonly upgradeCap: ToField<UpgradeCap>;
    private constructor();
    static reified(): StateReified;
    static get r(): reified.StructClassReified<State, StateFields>;
    static phantom(): PhantomReified<ToTypeStr<State>>;
    static get p(): reified.PhantomReified<"0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::state::State">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        governance_chain: number;
        governance_contract: {
            value: {
                data: number[];
            };
        };
        guardian_set_index: number;
        guardian_sets: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string;
        };
        guardian_set_seconds_to_live: number;
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
        fee_collector: {
            fee_amount: string;
            balance: {
                value: string;
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
        governance_chain: number;
        governance_contract: {
            value: {
                data: Iterable<number> & {
                    length: number;
                };
            };
        };
        guardian_set_index: number;
        guardian_sets: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string | number | bigint;
        };
        guardian_set_seconds_to_live: number;
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
        fee_collector: {
            fee_amount: string | number | bigint;
            balance: {
                value: string | number | bigint;
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
        governanceChain: number;
        governanceContract: {
            value: {
                data: number[];
            };
        };
        guardianSetIndex: number;
        guardianSets: {
            id: string;
            size: string;
        };
        guardianSetSecondsToLive: number;
        consumedVaas: {
            hashes: {
                items: {
                    id: string;
                    size: string;
                };
            };
        };
        feeCollector: {
            feeAmount: string;
            balance: {
                value: string;
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
        governanceChain: number;
        governanceContract: {
            value: {
                data: number[];
            };
        };
        guardianSetIndex: number;
        guardianSets: {
            id: string;
            size: string;
        };
        guardianSetSecondsToLive: number;
        consumedVaas: {
            hashes: {
                items: {
                    id: string;
                    size: string;
                };
            };
        };
        feeCollector: {
            feeAmount: string;
            balance: {
                value: string;
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
