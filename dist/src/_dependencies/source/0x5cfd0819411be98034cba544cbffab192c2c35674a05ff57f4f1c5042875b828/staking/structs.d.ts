import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, ToTypeStr as ToPhantom } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { ID, UID } from "../../0x2/object/structs";
import { Table } from "../../0x2/table/structs";
import { Tails, ManagerCap as ManagerCap1 } from "../typus-nft/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isManagerCap(type: string): boolean;
export interface ManagerCapFields {
    id: ToField<UID>;
}
export type ManagerCapReified = Reified<ManagerCap, ManagerCapFields>;
export declare class ManagerCap implements StructClass {
    static readonly $typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::staking::ManagerCap";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::staking::ManagerCap";
    readonly $fullTypeName: "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::staking::ManagerCap";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    private constructor();
    static reified(): ManagerCapReified;
    static get r(): reified.StructClassReified<ManagerCap, ManagerCapFields>;
    static phantom(): PhantomReified<ToTypeStr<ManagerCap>>;
    static get p(): reified.PhantomReified<"0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::staking::ManagerCap">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
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
    }>;
    static fromFields(fields: Record<string, any>): ManagerCap;
    static fromFieldsWithTypes(item: FieldsWithTypes): ManagerCap;
    static fromBcs(data: Uint8Array): ManagerCap;
    toJSONField(): {
        id: string;
    };
    toJSON(): {
        id: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): ManagerCap;
    static fromJSON(json: Record<string, any>): ManagerCap;
    static fromSuiParsedData(content: SuiParsedData): ManagerCap;
    static fetch(client: SuiClient, id: string): Promise<ManagerCap>;
}
export declare function isRegistry(type: string): boolean;
export interface RegistryFields {
    id: ToField<UID>;
}
export type RegistryReified = Reified<Registry, RegistryFields>;
export declare class Registry implements StructClass {
    static readonly $typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::staking::Registry";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::staking::Registry";
    readonly $fullTypeName: "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::staking::Registry";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    private constructor();
    static reified(): RegistryReified;
    static get r(): reified.StructClassReified<Registry, RegistryFields>;
    static phantom(): PhantomReified<ToTypeStr<Registry>>;
    static get p(): reified.PhantomReified<"0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::staking::Registry">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
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
    }>;
    static fromFields(fields: Record<string, any>): Registry;
    static fromFieldsWithTypes(item: FieldsWithTypes): Registry;
    static fromBcs(data: Uint8Array): Registry;
    toJSONField(): {
        id: string;
    };
    toJSON(): {
        id: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Registry;
    static fromJSON(json: Record<string, any>): Registry;
    static fromSuiParsedData(content: SuiParsedData): Registry;
    static fetch(client: SuiClient, id: string): Promise<Registry>;
}
export declare function isLevelUpEvent(type: string): boolean;
export interface LevelUpEventFields {
    nftId: ToField<ID>;
    sender: ToField<"address">;
    number: ToField<"u64">;
    level: ToField<"u64">;
}
export type LevelUpEventReified = Reified<LevelUpEvent, LevelUpEventFields>;
export declare class LevelUpEvent implements StructClass {
    static readonly $typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::staking::LevelUpEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::staking::LevelUpEvent";
    readonly $fullTypeName: "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::staking::LevelUpEvent";
    readonly $typeArgs: [];
    readonly nftId: ToField<ID>;
    readonly sender: ToField<"address">;
    readonly number: ToField<"u64">;
    readonly level: ToField<"u64">;
    private constructor();
    static reified(): LevelUpEventReified;
    static get r(): reified.StructClassReified<LevelUpEvent, LevelUpEventFields>;
    static phantom(): PhantomReified<ToTypeStr<LevelUpEvent>>;
    static get p(): reified.PhantomReified<"0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::staking::LevelUpEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        nft_id: {
            bytes: string;
        };
        sender: string;
        number: string;
        level: string;
    }, {
        nft_id: {
            bytes: string;
        };
        sender: string;
        number: string | number | bigint;
        level: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): LevelUpEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): LevelUpEvent;
    static fromBcs(data: Uint8Array): LevelUpEvent;
    toJSONField(): {
        nftId: string;
        sender: string;
        number: string;
        level: string;
    };
    toJSON(): {
        nftId: string;
        sender: string;
        number: string;
        level: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): LevelUpEvent;
    static fromJSON(json: Record<string, any>): LevelUpEvent;
    static fromSuiParsedData(content: SuiParsedData): LevelUpEvent;
    static fetch(client: SuiClient, id: string): Promise<LevelUpEvent>;
}
export declare function isNftExtension(type: string): boolean;
export interface NftExtensionFields {
    nftTable: ToField<Table<"address", ToPhantom<StakingTails>>>;
    nftManagerCap: ToField<ManagerCap1>;
}
export type NftExtensionReified = Reified<NftExtension, NftExtensionFields>;
export declare class NftExtension implements StructClass {
    static readonly $typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::staking::NftExtension";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::staking::NftExtension";
    readonly $fullTypeName: "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::staking::NftExtension";
    readonly $typeArgs: [];
    readonly nftTable: ToField<Table<"address", ToPhantom<StakingTails>>>;
    readonly nftManagerCap: ToField<ManagerCap1>;
    private constructor();
    static reified(): NftExtensionReified;
    static get r(): reified.StructClassReified<NftExtension, NftExtensionFields>;
    static phantom(): PhantomReified<ToTypeStr<NftExtension>>;
    static get p(): reified.PhantomReified<"0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::staking::NftExtension">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        nft_table: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string;
        };
        nft_manager_cap: {
            id: {
                id: {
                    bytes: string;
                };
            };
        };
    }, {
        nft_table: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string | number | bigint;
        };
        nft_manager_cap: {
            id: {
                id: {
                    bytes: string;
                };
            };
        };
    }>;
    static fromFields(fields: Record<string, any>): NftExtension;
    static fromFieldsWithTypes(item: FieldsWithTypes): NftExtension;
    static fromBcs(data: Uint8Array): NftExtension;
    toJSONField(): {
        nftTable: {
            id: string;
            size: string;
        };
        nftManagerCap: {
            id: string;
        };
    };
    toJSON(): {
        nftTable: {
            id: string;
            size: string;
        };
        nftManagerCap: {
            id: string;
        };
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): NftExtension;
    static fromJSON(json: Record<string, any>): NftExtension;
    static fromSuiParsedData(content: SuiParsedData): NftExtension;
    static fetch(client: SuiClient, id: string): Promise<NftExtension>;
}
export declare function isStakingTails(type: string): boolean;
export interface StakingTailsFields {
    nft: ToField<Tails>;
    snapshotMs: ToField<"u64">;
    updatingUrl: ToField<"bool">;
}
export type StakingTailsReified = Reified<StakingTails, StakingTailsFields>;
export declare class StakingTails implements StructClass {
    static readonly $typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::staking::StakingTails";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::staking::StakingTails";
    readonly $fullTypeName: "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::staking::StakingTails";
    readonly $typeArgs: [];
    readonly nft: ToField<Tails>;
    readonly snapshotMs: ToField<"u64">;
    readonly updatingUrl: ToField<"bool">;
    private constructor();
    static reified(): StakingTailsReified;
    static get r(): reified.StructClassReified<StakingTails, StakingTailsFields>;
    static phantom(): PhantomReified<ToTypeStr<StakingTails>>;
    static get p(): reified.PhantomReified<"0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::staking::StakingTails">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        nft: {
            id: {
                id: {
                    bytes: string;
                };
            };
            name: {
                bytes: number[];
            };
            description: {
                bytes: number[];
            };
            number: string;
            url: {
                url: {
                    bytes: number[];
                };
            };
            attributes: {
                contents: {
                    key: {
                        bytes: number[];
                    };
                    value: {
                        bytes: number[];
                    };
                }[];
            };
            level: string;
            exp: string;
            first_bid: boolean;
            first_deposit: boolean;
            first_deposit_nft: boolean;
            u64_padding: {
                contents: {
                    key: {
                        bytes: number[];
                    };
                    value: string;
                }[];
            };
        };
        snapshot_ms: string;
        updating_url: boolean;
    }, {
        nft: {
            id: {
                id: {
                    bytes: string;
                };
            };
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
            description: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
            number: string | number | bigint;
            url: {
                url: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
            };
            attributes: {
                contents: Iterable<{
                    key: {
                        bytes: Iterable<number> & {
                            length: number;
                        };
                    };
                    value: {
                        bytes: Iterable<number> & {
                            length: number;
                        };
                    };
                }> & {
                    length: number;
                };
            };
            level: string | number | bigint;
            exp: string | number | bigint;
            first_bid: boolean;
            first_deposit: boolean;
            first_deposit_nft: boolean;
            u64_padding: {
                contents: Iterable<{
                    key: {
                        bytes: Iterable<number> & {
                            length: number;
                        };
                    };
                    value: string | number | bigint;
                }> & {
                    length: number;
                };
            };
        };
        snapshot_ms: string | number | bigint;
        updating_url: boolean;
    }>;
    static fromFields(fields: Record<string, any>): StakingTails;
    static fromFieldsWithTypes(item: FieldsWithTypes): StakingTails;
    static fromBcs(data: Uint8Array): StakingTails;
    toJSONField(): {
        nft: {
            id: string;
            name: string;
            description: string;
            number: string;
            url: string;
            attributes: {
                contents: {
                    key: string;
                    value: string;
                }[];
            };
            level: string;
            exp: string;
            firstBid: boolean;
            firstDeposit: boolean;
            firstDepositNft: boolean;
            u64Padding: {
                contents: {
                    key: string;
                    value: string;
                }[];
            };
        };
        snapshotMs: string;
        updatingUrl: boolean;
    };
    toJSON(): {
        nft: {
            id: string;
            name: string;
            description: string;
            number: string;
            url: string;
            attributes: {
                contents: {
                    key: string;
                    value: string;
                }[];
            };
            level: string;
            exp: string;
            firstBid: boolean;
            firstDeposit: boolean;
            firstDepositNft: boolean;
            u64Padding: {
                contents: {
                    key: string;
                    value: string;
                }[];
            };
        };
        snapshotMs: string;
        updatingUrl: boolean;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): StakingTails;
    static fromJSON(json: Record<string, any>): StakingTails;
    static fromSuiParsedData(content: SuiParsedData): StakingTails;
    static fetch(client: SuiClient, id: string): Promise<StakingTails>;
}
