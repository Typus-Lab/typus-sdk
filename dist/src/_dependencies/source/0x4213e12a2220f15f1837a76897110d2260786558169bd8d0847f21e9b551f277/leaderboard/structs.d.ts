import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, Vector } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { String } from "../../0x1/ascii/structs";
import { UID } from "../../0x2/object/structs";
import { Table } from "../../0x2/table/structs";
import { CritbitTree } from "../critbit/structs";
import { LinkedSet } from "../linked-set/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isActivateLeaderboardEvent(type: string): boolean;
export interface ActivateLeaderboardEventFields {
    key: ToField<String>;
    id: ToField<"address">;
    log: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<Vector<"u8">>>;
}
export type ActivateLeaderboardEventReified = Reified<ActivateLeaderboardEvent, ActivateLeaderboardEventFields>;
export declare class ActivateLeaderboardEvent implements StructClass {
    static readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::leaderboard::ActivateLeaderboardEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::leaderboard::ActivateLeaderboardEvent";
    readonly $fullTypeName: "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::leaderboard::ActivateLeaderboardEvent";
    readonly $typeArgs: [];
    readonly key: ToField<String>;
    readonly id: ToField<"address">;
    readonly log: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<Vector<"u8">>>;
    private constructor();
    static reified(): ActivateLeaderboardEventReified;
    static get r(): reified.StructClassReified<ActivateLeaderboardEvent, ActivateLeaderboardEventFields>;
    static phantom(): PhantomReified<ToTypeStr<ActivateLeaderboardEvent>>;
    static get p(): reified.PhantomReified<"0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::leaderboard::ActivateLeaderboardEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        key: {
            bytes: number[];
        };
        id: string;
        log: string[];
        bcs_padding: number[][];
    }, {
        key: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        id: string;
        log: Iterable<string | number | bigint> & {
            length: number;
        };
        bcs_padding: Iterable<Iterable<number> & {
            length: number;
        }> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): ActivateLeaderboardEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): ActivateLeaderboardEvent;
    static fromBcs(data: Uint8Array): ActivateLeaderboardEvent;
    toJSONField(): {
        key: string;
        id: string;
        log: string[];
        bcsPadding: number[][];
    };
    toJSON(): {
        key: string;
        id: string;
        log: string[];
        bcsPadding: number[][];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): ActivateLeaderboardEvent;
    static fromJSON(json: Record<string, any>): ActivateLeaderboardEvent;
    static fromSuiParsedData(content: SuiParsedData): ActivateLeaderboardEvent;
    static fetch(client: SuiClient, id: string): Promise<ActivateLeaderboardEvent>;
}
export declare function isDeactivateLeaderboardEvent(type: string): boolean;
export interface DeactivateLeaderboardEventFields {
    key: ToField<String>;
    id: ToField<"address">;
    log: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<Vector<"u8">>>;
}
export type DeactivateLeaderboardEventReified = Reified<DeactivateLeaderboardEvent, DeactivateLeaderboardEventFields>;
export declare class DeactivateLeaderboardEvent implements StructClass {
    static readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::leaderboard::DeactivateLeaderboardEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::leaderboard::DeactivateLeaderboardEvent";
    readonly $fullTypeName: "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::leaderboard::DeactivateLeaderboardEvent";
    readonly $typeArgs: [];
    readonly key: ToField<String>;
    readonly id: ToField<"address">;
    readonly log: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<Vector<"u8">>>;
    private constructor();
    static reified(): DeactivateLeaderboardEventReified;
    static get r(): reified.StructClassReified<DeactivateLeaderboardEvent, DeactivateLeaderboardEventFields>;
    static phantom(): PhantomReified<ToTypeStr<DeactivateLeaderboardEvent>>;
    static get p(): reified.PhantomReified<"0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::leaderboard::DeactivateLeaderboardEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        key: {
            bytes: number[];
        };
        id: string;
        log: string[];
        bcs_padding: number[][];
    }, {
        key: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        id: string;
        log: Iterable<string | number | bigint> & {
            length: number;
        };
        bcs_padding: Iterable<Iterable<number> & {
            length: number;
        }> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): DeactivateLeaderboardEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): DeactivateLeaderboardEvent;
    static fromBcs(data: Uint8Array): DeactivateLeaderboardEvent;
    toJSONField(): {
        key: string;
        id: string;
        log: string[];
        bcsPadding: number[][];
    };
    toJSON(): {
        key: string;
        id: string;
        log: string[];
        bcsPadding: number[][];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): DeactivateLeaderboardEvent;
    static fromJSON(json: Record<string, any>): DeactivateLeaderboardEvent;
    static fromSuiParsedData(content: SuiParsedData): DeactivateLeaderboardEvent;
    static fetch(client: SuiClient, id: string): Promise<DeactivateLeaderboardEvent>;
}
export declare function isExtendLeaderboardEvent(type: string): boolean;
export interface ExtendLeaderboardEventFields {
    key: ToField<String>;
    id: ToField<"address">;
    log: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<Vector<"u8">>>;
}
export type ExtendLeaderboardEventReified = Reified<ExtendLeaderboardEvent, ExtendLeaderboardEventFields>;
export declare class ExtendLeaderboardEvent implements StructClass {
    static readonly $typeName = "0x9ae906bfba335c86e93498f8016c06943865bc81e2da82f7e25b6d0b32d31e44::leaderboard::ExtendLeaderboardEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x9ae906bfba335c86e93498f8016c06943865bc81e2da82f7e25b6d0b32d31e44::leaderboard::ExtendLeaderboardEvent";
    readonly $fullTypeName: "0x9ae906bfba335c86e93498f8016c06943865bc81e2da82f7e25b6d0b32d31e44::leaderboard::ExtendLeaderboardEvent";
    readonly $typeArgs: [];
    readonly key: ToField<String>;
    readonly id: ToField<"address">;
    readonly log: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<Vector<"u8">>>;
    private constructor();
    static reified(): ExtendLeaderboardEventReified;
    static get r(): reified.StructClassReified<ExtendLeaderboardEvent, ExtendLeaderboardEventFields>;
    static phantom(): PhantomReified<ToTypeStr<ExtendLeaderboardEvent>>;
    static get p(): reified.PhantomReified<"0x9ae906bfba335c86e93498f8016c06943865bc81e2da82f7e25b6d0b32d31e44::leaderboard::ExtendLeaderboardEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        key: {
            bytes: number[];
        };
        id: string;
        log: string[];
        bcs_padding: number[][];
    }, {
        key: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        id: string;
        log: Iterable<string | number | bigint> & {
            length: number;
        };
        bcs_padding: Iterable<Iterable<number> & {
            length: number;
        }> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): ExtendLeaderboardEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): ExtendLeaderboardEvent;
    static fromBcs(data: Uint8Array): ExtendLeaderboardEvent;
    toJSONField(): {
        key: string;
        id: string;
        log: string[];
        bcsPadding: number[][];
    };
    toJSON(): {
        key: string;
        id: string;
        log: string[];
        bcsPadding: number[][];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): ExtendLeaderboardEvent;
    static fromJSON(json: Record<string, any>): ExtendLeaderboardEvent;
    static fromSuiParsedData(content: SuiParsedData): ExtendLeaderboardEvent;
    static fetch(client: SuiClient, id: string): Promise<ExtendLeaderboardEvent>;
}
export declare function isLeaderboard(type: string): boolean;
export interface LeaderboardFields {
    id: ToField<UID>;
    startTsMs: ToField<"u64">;
    endTsMs: ToField<"u64">;
    score: ToField<Table<"address", "u64">>;
    ranking: ToField<CritbitTree<LinkedSet<"address">>>;
}
export type LeaderboardReified = Reified<Leaderboard, LeaderboardFields>;
export declare class Leaderboard implements StructClass {
    static readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::leaderboard::Leaderboard";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::leaderboard::Leaderboard";
    readonly $fullTypeName: "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::leaderboard::Leaderboard";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly startTsMs: ToField<"u64">;
    readonly endTsMs: ToField<"u64">;
    readonly score: ToField<Table<"address", "u64">>;
    readonly ranking: ToField<CritbitTree<LinkedSet<"address">>>;
    private constructor();
    static reified(): LeaderboardReified;
    static get r(): reified.StructClassReified<Leaderboard, LeaderboardFields>;
    static phantom(): PhantomReified<ToTypeStr<Leaderboard>>;
    static get p(): reified.PhantomReified<"0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::leaderboard::Leaderboard">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        start_ts_ms: string;
        end_ts_ms: string;
        score: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string;
        };
        ranking: {
            root: string;
            internal_nodes: {
                id: {
                    id: {
                        bytes: string;
                    };
                };
                size: string;
            };
            leaves: {
                id: {
                    id: {
                        bytes: string;
                    };
                };
                size: string;
            };
            min_leaf_index: string;
            max_leaf_index: string;
            next_internal_node_index: string;
            next_leaf_index: string;
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        start_ts_ms: string | number | bigint;
        end_ts_ms: string | number | bigint;
        score: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string | number | bigint;
        };
        ranking: {
            root: string | number | bigint;
            internal_nodes: {
                id: {
                    id: {
                        bytes: string;
                    };
                };
                size: string | number | bigint;
            };
            leaves: {
                id: {
                    id: {
                        bytes: string;
                    };
                };
                size: string | number | bigint;
            };
            min_leaf_index: string | number | bigint;
            max_leaf_index: string | number | bigint;
            next_internal_node_index: string | number | bigint;
            next_leaf_index: string | number | bigint;
        };
    }>;
    static fromFields(fields: Record<string, any>): Leaderboard;
    static fromFieldsWithTypes(item: FieldsWithTypes): Leaderboard;
    static fromBcs(data: Uint8Array): Leaderboard;
    toJSONField(): {
        id: string;
        startTsMs: string;
        endTsMs: string;
        score: {
            id: string;
            size: string;
        };
        ranking: {
            root: string;
            internalNodes: {
                id: string;
                size: string;
            };
            leaves: {
                id: string;
                size: string;
            };
            minLeafIndex: string;
            maxLeafIndex: string;
            nextInternalNodeIndex: string;
            nextLeafIndex: string;
        };
    };
    toJSON(): {
        id: string;
        startTsMs: string;
        endTsMs: string;
        score: {
            id: string;
            size: string;
        };
        ranking: {
            root: string;
            internalNodes: {
                id: string;
                size: string;
            };
            leaves: {
                id: string;
                size: string;
            };
            minLeafIndex: string;
            maxLeafIndex: string;
            nextInternalNodeIndex: string;
            nextLeafIndex: string;
        };
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Leaderboard;
    static fromJSON(json: Record<string, any>): Leaderboard;
    static fromSuiParsedData(content: SuiParsedData): Leaderboard;
    static fetch(client: SuiClient, id: string): Promise<Leaderboard>;
}
export declare function isRemoveLeaderboardEvent(type: string): boolean;
export interface RemoveLeaderboardEventFields {
    key: ToField<String>;
    id: ToField<"address">;
    log: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<Vector<"u8">>>;
}
export type RemoveLeaderboardEventReified = Reified<RemoveLeaderboardEvent, RemoveLeaderboardEventFields>;
export declare class RemoveLeaderboardEvent implements StructClass {
    static readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::leaderboard::RemoveLeaderboardEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::leaderboard::RemoveLeaderboardEvent";
    readonly $fullTypeName: "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::leaderboard::RemoveLeaderboardEvent";
    readonly $typeArgs: [];
    readonly key: ToField<String>;
    readonly id: ToField<"address">;
    readonly log: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<Vector<"u8">>>;
    private constructor();
    static reified(): RemoveLeaderboardEventReified;
    static get r(): reified.StructClassReified<RemoveLeaderboardEvent, RemoveLeaderboardEventFields>;
    static phantom(): PhantomReified<ToTypeStr<RemoveLeaderboardEvent>>;
    static get p(): reified.PhantomReified<"0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::leaderboard::RemoveLeaderboardEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        key: {
            bytes: number[];
        };
        id: string;
        log: string[];
        bcs_padding: number[][];
    }, {
        key: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        id: string;
        log: Iterable<string | number | bigint> & {
            length: number;
        };
        bcs_padding: Iterable<Iterable<number> & {
            length: number;
        }> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): RemoveLeaderboardEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): RemoveLeaderboardEvent;
    static fromBcs(data: Uint8Array): RemoveLeaderboardEvent;
    toJSONField(): {
        key: string;
        id: string;
        log: string[];
        bcsPadding: number[][];
    };
    toJSON(): {
        key: string;
        id: string;
        log: string[];
        bcsPadding: number[][];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): RemoveLeaderboardEvent;
    static fromJSON(json: Record<string, any>): RemoveLeaderboardEvent;
    static fromSuiParsedData(content: SuiParsedData): RemoveLeaderboardEvent;
    static fetch(client: SuiClient, id: string): Promise<RemoveLeaderboardEvent>;
}
export declare function isScoreEvent(type: string): boolean;
export interface ScoreEventFields {
    key: ToField<String>;
    id: ToField<"address">;
    user: ToField<"address">;
    log: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<Vector<"u8">>>;
}
export type ScoreEventReified = Reified<ScoreEvent, ScoreEventFields>;
export declare class ScoreEvent implements StructClass {
    static readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::leaderboard::ScoreEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::leaderboard::ScoreEvent";
    readonly $fullTypeName: "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::leaderboard::ScoreEvent";
    readonly $typeArgs: [];
    readonly key: ToField<String>;
    readonly id: ToField<"address">;
    readonly user: ToField<"address">;
    readonly log: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<Vector<"u8">>>;
    private constructor();
    static reified(): ScoreEventReified;
    static get r(): reified.StructClassReified<ScoreEvent, ScoreEventFields>;
    static phantom(): PhantomReified<ToTypeStr<ScoreEvent>>;
    static get p(): reified.PhantomReified<"0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::leaderboard::ScoreEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        key: {
            bytes: number[];
        };
        id: string;
        user: string;
        log: string[];
        bcs_padding: number[][];
    }, {
        key: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        id: string;
        user: string;
        log: Iterable<string | number | bigint> & {
            length: number;
        };
        bcs_padding: Iterable<Iterable<number> & {
            length: number;
        }> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): ScoreEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): ScoreEvent;
    static fromBcs(data: Uint8Array): ScoreEvent;
    toJSONField(): {
        key: string;
        id: string;
        user: string;
        log: string[];
        bcsPadding: number[][];
    };
    toJSON(): {
        key: string;
        id: string;
        user: string;
        log: string[];
        bcsPadding: number[][];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): ScoreEvent;
    static fromJSON(json: Record<string, any>): ScoreEvent;
    static fromSuiParsedData(content: SuiParsedData): ScoreEvent;
    static fetch(client: SuiClient, id: string): Promise<ScoreEvent>;
}
export declare function isTypusLeaderboardRegistry(type: string): boolean;
export interface TypusLeaderboardRegistryFields {
    id: ToField<UID>;
    activeLeaderboardRegistry: ToField<UID>;
    inactiveLeaderboardRegistry: ToField<UID>;
}
export type TypusLeaderboardRegistryReified = Reified<TypusLeaderboardRegistry, TypusLeaderboardRegistryFields>;
export declare class TypusLeaderboardRegistry implements StructClass {
    static readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::leaderboard::TypusLeaderboardRegistry";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::leaderboard::TypusLeaderboardRegistry";
    readonly $fullTypeName: "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::leaderboard::TypusLeaderboardRegistry";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly activeLeaderboardRegistry: ToField<UID>;
    readonly inactiveLeaderboardRegistry: ToField<UID>;
    private constructor();
    static reified(): TypusLeaderboardRegistryReified;
    static get r(): reified.StructClassReified<TypusLeaderboardRegistry, TypusLeaderboardRegistryFields>;
    static phantom(): PhantomReified<ToTypeStr<TypusLeaderboardRegistry>>;
    static get p(): reified.PhantomReified<"0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::leaderboard::TypusLeaderboardRegistry">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        active_leaderboard_registry: {
            id: {
                bytes: string;
            };
        };
        inactive_leaderboard_registry: {
            id: {
                bytes: string;
            };
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        active_leaderboard_registry: {
            id: {
                bytes: string;
            };
        };
        inactive_leaderboard_registry: {
            id: {
                bytes: string;
            };
        };
    }>;
    static fromFields(fields: Record<string, any>): TypusLeaderboardRegistry;
    static fromFieldsWithTypes(item: FieldsWithTypes): TypusLeaderboardRegistry;
    static fromBcs(data: Uint8Array): TypusLeaderboardRegistry;
    toJSONField(): {
        id: string;
        activeLeaderboardRegistry: string;
        inactiveLeaderboardRegistry: string;
    };
    toJSON(): {
        id: string;
        activeLeaderboardRegistry: string;
        inactiveLeaderboardRegistry: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): TypusLeaderboardRegistry;
    static fromJSON(json: Record<string, any>): TypusLeaderboardRegistry;
    static fromSuiParsedData(content: SuiParsedData): TypusLeaderboardRegistry;
    static fetch(client: SuiClient, id: string): Promise<TypusLeaderboardRegistry>;
}
