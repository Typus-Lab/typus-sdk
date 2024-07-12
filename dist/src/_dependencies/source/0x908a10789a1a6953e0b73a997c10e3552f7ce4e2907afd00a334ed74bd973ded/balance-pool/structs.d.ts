import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, Vector } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { TypeName } from "../../0x1/type-name/structs";
import { UID } from "../../0x2/object/structs";
import { Authority } from "../authority/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isBalanceInfo(type: string): boolean;
export interface BalanceInfoFields {
    token: ToField<TypeName>;
    value: ToField<"u64">;
}
export type BalanceInfoReified = Reified<BalanceInfo, BalanceInfoFields>;
export declare class BalanceInfo implements StructClass {
    static readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::balance_pool::BalanceInfo";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::balance_pool::BalanceInfo";
    readonly $fullTypeName: "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::balance_pool::BalanceInfo";
    readonly $typeArgs: [];
    readonly token: ToField<TypeName>;
    readonly value: ToField<"u64">;
    private constructor();
    static reified(): BalanceInfoReified;
    static get r(): reified.StructClassReified<BalanceInfo, BalanceInfoFields>;
    static phantom(): PhantomReified<ToTypeStr<BalanceInfo>>;
    static get p(): reified.PhantomReified<"0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::balance_pool::BalanceInfo">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        token: {
            name: {
                bytes: number[];
            };
        };
        value: string;
    }, {
        token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        value: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): BalanceInfo;
    static fromFieldsWithTypes(item: FieldsWithTypes): BalanceInfo;
    static fromBcs(data: Uint8Array): BalanceInfo;
    toJSONField(): {
        token: {
            name: string;
        };
        value: string;
    };
    toJSON(): {
        token: {
            name: string;
        };
        value: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): BalanceInfo;
    static fromJSON(json: Record<string, any>): BalanceInfo;
    static fromSuiParsedData(content: SuiParsedData): BalanceInfo;
    static fetch(client: SuiClient, id: string): Promise<BalanceInfo>;
}
export declare function isBalancePool(type: string): boolean;
export interface BalancePoolFields {
    id: ToField<UID>;
    balanceInfos: ToField<Vector<BalanceInfo>>;
    authority: ToField<Authority>;
}
export type BalancePoolReified = Reified<BalancePool, BalancePoolFields>;
export declare class BalancePool implements StructClass {
    static readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::balance_pool::BalancePool";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::balance_pool::BalancePool";
    readonly $fullTypeName: "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::balance_pool::BalancePool";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly balanceInfos: ToField<Vector<BalanceInfo>>;
    readonly authority: ToField<Authority>;
    private constructor();
    static reified(): BalancePoolReified;
    static get r(): reified.StructClassReified<BalancePool, BalancePoolFields>;
    static phantom(): PhantomReified<ToTypeStr<BalancePool>>;
    static get p(): reified.PhantomReified<"0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::balance_pool::BalancePool">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        balance_infos: {
            token: {
                name: {
                    bytes: number[];
                };
            };
            value: string;
        }[];
        authority: {
            whitelist: {
                id: {
                    id: {
                        bytes: string;
                    };
                };
                size: string;
                head: {
                    vec: any[];
                };
                tail: {
                    vec: any[];
                };
            };
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        balance_infos: Iterable<{
            token: {
                name: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
            };
            value: string | number | bigint;
        }> & {
            length: number;
        };
        authority: {
            whitelist: {
                id: {
                    id: {
                        bytes: string;
                    };
                };
                size: string | number | bigint;
                head: {
                    vec: Iterable<any> & {
                        length: number;
                    };
                };
                tail: {
                    vec: Iterable<any> & {
                        length: number;
                    };
                };
            };
        };
    }>;
    static fromFields(fields: Record<string, any>): BalancePool;
    static fromFieldsWithTypes(item: FieldsWithTypes): BalancePool;
    static fromBcs(data: Uint8Array): BalancePool;
    toJSONField(): {
        id: string;
        balanceInfos: {
            token: {
                name: string;
            };
            value: string;
        }[];
        authority: {
            whitelist: {
                id: string;
                size: string;
                head: string | null;
                tail: string | null;
            };
        };
    };
    toJSON(): {
        id: string;
        balanceInfos: {
            token: {
                name: string;
            };
            value: string;
        }[];
        authority: {
            whitelist: {
                id: string;
                size: string;
                head: string | null;
                tail: string | null;
            };
        };
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): BalancePool;
    static fromJSON(json: Record<string, any>): BalancePool;
    static fromSuiParsedData(content: SuiParsedData): BalancePool;
    static fetch(client: SuiClient, id: string): Promise<BalancePool>;
}
export declare function isSharedBalancePool(type: string): boolean;
export interface SharedBalancePoolFields {
    id: ToField<UID>;
    balanceInfos: ToField<Vector<BalanceInfo>>;
    authority: ToField<Authority>;
}
export type SharedBalancePoolReified = Reified<SharedBalancePool, SharedBalancePoolFields>;
export declare class SharedBalancePool implements StructClass {
    static readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::balance_pool::SharedBalancePool";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::balance_pool::SharedBalancePool";
    readonly $fullTypeName: "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::balance_pool::SharedBalancePool";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly balanceInfos: ToField<Vector<BalanceInfo>>;
    readonly authority: ToField<Authority>;
    private constructor();
    static reified(): SharedBalancePoolReified;
    static get r(): reified.StructClassReified<SharedBalancePool, SharedBalancePoolFields>;
    static phantom(): PhantomReified<ToTypeStr<SharedBalancePool>>;
    static get p(): reified.PhantomReified<"0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::balance_pool::SharedBalancePool">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        balance_infos: {
            token: {
                name: {
                    bytes: number[];
                };
            };
            value: string;
        }[];
        authority: {
            whitelist: {
                id: {
                    id: {
                        bytes: string;
                    };
                };
                size: string;
                head: {
                    vec: any[];
                };
                tail: {
                    vec: any[];
                };
            };
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        balance_infos: Iterable<{
            token: {
                name: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
            };
            value: string | number | bigint;
        }> & {
            length: number;
        };
        authority: {
            whitelist: {
                id: {
                    id: {
                        bytes: string;
                    };
                };
                size: string | number | bigint;
                head: {
                    vec: Iterable<any> & {
                        length: number;
                    };
                };
                tail: {
                    vec: Iterable<any> & {
                        length: number;
                    };
                };
            };
        };
    }>;
    static fromFields(fields: Record<string, any>): SharedBalancePool;
    static fromFieldsWithTypes(item: FieldsWithTypes): SharedBalancePool;
    static fromBcs(data: Uint8Array): SharedBalancePool;
    toJSONField(): {
        id: string;
        balanceInfos: {
            token: {
                name: string;
            };
            value: string;
        }[];
        authority: {
            whitelist: {
                id: string;
                size: string;
                head: string | null;
                tail: string | null;
            };
        };
    };
    toJSON(): {
        id: string;
        balanceInfos: {
            token: {
                name: string;
            };
            value: string;
        }[];
        authority: {
            whitelist: {
                id: string;
                size: string;
                head: string | null;
                tail: string | null;
            };
        };
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): SharedBalancePool;
    static fromJSON(json: Record<string, any>): SharedBalancePool;
    static fromSuiParsedData(content: SuiParsedData): SharedBalancePool;
    static fetch(client: SuiClient, id: string): Promise<SharedBalancePool>;
}
