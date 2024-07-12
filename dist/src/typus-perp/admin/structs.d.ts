import * as reified from "../../_framework/reified";
import { TypeName } from "../../_dependencies/source/0x1/type-name/structs";
import { UID } from "../../_dependencies/source/0x2/object/structs";
import { VecSet } from "../../_dependencies/source/0x2/vec-set/structs";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, Vector } from "../../_framework/reified";
import { FieldsWithTypes } from "../../_framework/util";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isVersion(type: string): boolean;
export interface VersionFields {
    id: ToField<UID>;
    value: ToField<"u64">;
    feePool: ToField<FeePool>;
    liquidatorFeePool: ToField<FeePool>;
    authority: ToField<VecSet<"address">>;
    u64Padding: ToField<Vector<"u64">>;
}
export type VersionReified = Reified<Version, VersionFields>;
export declare class Version implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::admin::Version";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::admin::Version";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::admin::Version";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly value: ToField<"u64">;
    readonly feePool: ToField<FeePool>;
    readonly liquidatorFeePool: ToField<FeePool>;
    readonly authority: ToField<VecSet<"address">>;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): VersionReified;
    static get r(): reified.StructClassReified<Version, VersionFields>;
    static phantom(): PhantomReified<ToTypeStr<Version>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::admin::Version">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        value: string;
        fee_pool: {
            id: {
                id: {
                    bytes: string;
                };
            };
            fee_infos: {
                token: {
                    name: {
                        bytes: number[];
                    };
                };
                value: string;
            }[];
        };
        liquidator_fee_pool: {
            id: {
                id: {
                    bytes: string;
                };
            };
            fee_infos: {
                token: {
                    name: {
                        bytes: number[];
                    };
                };
                value: string;
            }[];
        };
        authority: {
            contents: any[];
        };
        u64_padding: string[];
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        value: string | number | bigint;
        fee_pool: {
            id: {
                id: {
                    bytes: string;
                };
            };
            fee_infos: Iterable<{
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
        };
        liquidator_fee_pool: {
            id: {
                id: {
                    bytes: string;
                };
            };
            fee_infos: Iterable<{
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
        };
        authority: {
            contents: Iterable<any> & {
                length: number;
            };
        };
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): Version;
    static fromFieldsWithTypes(item: FieldsWithTypes): Version;
    static fromBcs(data: Uint8Array): Version;
    toJSONField(): {
        id: string;
        value: string;
        feePool: {
            id: string;
            feeInfos: {
                token: {
                    name: string;
                };
                value: string;
            }[];
        };
        liquidatorFeePool: {
            id: string;
            feeInfos: {
                token: {
                    name: string;
                };
                value: string;
            }[];
        };
        authority: {
            contents: string[];
        };
        u64Padding: string[];
    };
    toJSON(): {
        id: string;
        value: string;
        feePool: {
            id: string;
            feeInfos: {
                token: {
                    name: string;
                };
                value: string;
            }[];
        };
        liquidatorFeePool: {
            id: string;
            feeInfos: {
                token: {
                    name: string;
                };
                value: string;
            }[];
        };
        authority: {
            contents: string[];
        };
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Version;
    static fromJSON(json: Record<string, any>): Version;
    static fromSuiParsedData(content: SuiParsedData): Version;
    static fetch(client: SuiClient, id: string): Promise<Version>;
}
export declare function isManagerCap(type: string): boolean;
export interface ManagerCapFields {
    dummyField: ToField<"bool">;
}
export type ManagerCapReified = Reified<ManagerCap, ManagerCapFields>;
export declare class ManagerCap implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::admin::ManagerCap";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::admin::ManagerCap";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::admin::ManagerCap";
    readonly $typeArgs: [];
    readonly dummyField: ToField<"bool">;
    private constructor();
    static reified(): ManagerCapReified;
    static get r(): reified.StructClassReified<ManagerCap, ManagerCapFields>;
    static phantom(): PhantomReified<ToTypeStr<ManagerCap>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::admin::ManagerCap">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        dummy_field: boolean;
    }, {
        dummy_field: boolean;
    }>;
    static fromFields(fields: Record<string, any>): ManagerCap;
    static fromFieldsWithTypes(item: FieldsWithTypes): ManagerCap;
    static fromBcs(data: Uint8Array): ManagerCap;
    toJSONField(): {
        dummyField: boolean;
    };
    toJSON(): {
        dummyField: boolean;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): ManagerCap;
    static fromJSON(json: Record<string, any>): ManagerCap;
    static fromSuiParsedData(content: SuiParsedData): ManagerCap;
    static fetch(client: SuiClient, id: string): Promise<ManagerCap>;
}
export declare function isFeeInfo(type: string): boolean;
export interface FeeInfoFields {
    token: ToField<TypeName>;
    value: ToField<"u64">;
}
export type FeeInfoReified = Reified<FeeInfo, FeeInfoFields>;
export declare class FeeInfo implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::admin::FeeInfo";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::admin::FeeInfo";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::admin::FeeInfo";
    readonly $typeArgs: [];
    readonly token: ToField<TypeName>;
    readonly value: ToField<"u64">;
    private constructor();
    static reified(): FeeInfoReified;
    static get r(): reified.StructClassReified<FeeInfo, FeeInfoFields>;
    static phantom(): PhantomReified<ToTypeStr<FeeInfo>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::admin::FeeInfo">;
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
    static fromFields(fields: Record<string, any>): FeeInfo;
    static fromFieldsWithTypes(item: FieldsWithTypes): FeeInfo;
    static fromBcs(data: Uint8Array): FeeInfo;
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
    static fromJSONField(field: any): FeeInfo;
    static fromJSON(json: Record<string, any>): FeeInfo;
    static fromSuiParsedData(content: SuiParsedData): FeeInfo;
    static fetch(client: SuiClient, id: string): Promise<FeeInfo>;
}
export declare function isFeePool(type: string): boolean;
export interface FeePoolFields {
    id: ToField<UID>;
    feeInfos: ToField<Vector<FeeInfo>>;
}
export type FeePoolReified = Reified<FeePool, FeePoolFields>;
export declare class FeePool implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::admin::FeePool";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::admin::FeePool";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::admin::FeePool";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly feeInfos: ToField<Vector<FeeInfo>>;
    private constructor();
    static reified(): FeePoolReified;
    static get r(): reified.StructClassReified<FeePool, FeePoolFields>;
    static phantom(): PhantomReified<ToTypeStr<FeePool>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::admin::FeePool">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        fee_infos: {
            token: {
                name: {
                    bytes: number[];
                };
            };
            value: string;
        }[];
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        fee_infos: Iterable<{
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
    }>;
    static fromFields(fields: Record<string, any>): FeePool;
    static fromFieldsWithTypes(item: FieldsWithTypes): FeePool;
    static fromBcs(data: Uint8Array): FeePool;
    toJSONField(): {
        id: string;
        feeInfos: {
            token: {
                name: string;
            };
            value: string;
        }[];
    };
    toJSON(): {
        id: string;
        feeInfos: {
            token: {
                name: string;
            };
            value: string;
        }[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): FeePool;
    static fromJSON(json: Record<string, any>): FeePool;
    static fromSuiParsedData(content: SuiParsedData): FeePool;
    static fetch(client: SuiClient, id: string): Promise<FeePool>;
}
export declare function isSendFeeEvent(type: string): boolean;
export interface SendFeeEventFields {
    token: ToField<TypeName>;
    amount: ToField<"u64">;
}
export type SendFeeEventReified = Reified<SendFeeEvent, SendFeeEventFields>;
export declare class SendFeeEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::admin::SendFeeEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::admin::SendFeeEvent";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::admin::SendFeeEvent";
    readonly $typeArgs: [];
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;
    private constructor();
    static reified(): SendFeeEventReified;
    static get r(): reified.StructClassReified<SendFeeEvent, SendFeeEventFields>;
    static phantom(): PhantomReified<ToTypeStr<SendFeeEvent>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::admin::SendFeeEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        token: {
            name: {
                bytes: number[];
            };
        };
        amount: string;
    }, {
        token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        amount: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): SendFeeEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): SendFeeEvent;
    static fromBcs(data: Uint8Array): SendFeeEvent;
    toJSONField(): {
        token: {
            name: string;
        };
        amount: string;
    };
    toJSON(): {
        token: {
            name: string;
        };
        amount: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): SendFeeEvent;
    static fromJSON(json: Record<string, any>): SendFeeEvent;
    static fromSuiParsedData(content: SuiParsedData): SendFeeEvent;
    static fetch(client: SuiClient, id: string): Promise<SendFeeEvent>;
}
