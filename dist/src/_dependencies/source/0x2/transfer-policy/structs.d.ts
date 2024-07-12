import * as reified from "../../../../_framework/reified";
import { PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, ToTypeStr as ToPhantom } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { TypeName } from "../../0x1/type-name/structs";
import { Balance } from "../balance/structs";
import { ID, UID } from "../object/structs";
import { SUI } from "../sui/structs";
import { VecSet } from "../vec-set/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isRuleKey(type: string): boolean;
export interface RuleKeyFields<T extends PhantomTypeArgument> {
    dummyField: ToField<"bool">;
}
export type RuleKeyReified<T extends PhantomTypeArgument> = Reified<RuleKey<T>, RuleKeyFields<T>>;
export declare class RuleKey<T extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0x2::transfer_policy::RuleKey";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0x2::transfer_policy::RuleKey";
    readonly $fullTypeName: `0x2::transfer_policy::RuleKey<${PhantomToTypeStr<T>}>`;
    readonly $typeArgs: [PhantomToTypeStr<T>];
    readonly dummyField: ToField<"bool">;
    private constructor();
    static reified<T extends PhantomReified<PhantomTypeArgument>>(T: T): RuleKeyReified<ToPhantomTypeArgument<T>>;
    static get r(): typeof RuleKey.reified;
    static phantom<T extends PhantomReified<PhantomTypeArgument>>(T: T): PhantomReified<ToTypeStr<RuleKey<ToPhantomTypeArgument<T>>>>;
    static get p(): typeof RuleKey.phantom;
    static get bcs(): import("@mysten/bcs").BcsType<{
        dummy_field: boolean;
    }, {
        dummy_field: boolean;
    }>;
    static fromFields<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, fields: Record<string, any>): RuleKey<ToPhantomTypeArgument<T>>;
    static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, item: FieldsWithTypes): RuleKey<ToPhantomTypeArgument<T>>;
    static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, data: Uint8Array): RuleKey<ToPhantomTypeArgument<T>>;
    toJSONField(): {
        dummyField: boolean;
    };
    toJSON(): {
        dummyField: boolean;
        $typeName: string;
        $typeArgs: [reified.PhantomToTypeStr<T>];
    };
    static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, field: any): RuleKey<ToPhantomTypeArgument<T>>;
    static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, json: Record<string, any>): RuleKey<ToPhantomTypeArgument<T>>;
    static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, content: SuiParsedData): RuleKey<ToPhantomTypeArgument<T>>;
    static fetch<T extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: T, id: string): Promise<RuleKey<ToPhantomTypeArgument<T>>>;
}
export declare function isTransferPolicy(type: string): boolean;
export interface TransferPolicyFields<T extends PhantomTypeArgument> {
    id: ToField<UID>;
    balance: ToField<Balance<ToPhantom<SUI>>>;
    rules: ToField<VecSet<TypeName>>;
}
export type TransferPolicyReified<T extends PhantomTypeArgument> = Reified<TransferPolicy<T>, TransferPolicyFields<T>>;
export declare class TransferPolicy<T extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0x2::transfer_policy::TransferPolicy";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0x2::transfer_policy::TransferPolicy";
    readonly $fullTypeName: `0x2::transfer_policy::TransferPolicy<${PhantomToTypeStr<T>}>`;
    readonly $typeArgs: [PhantomToTypeStr<T>];
    readonly id: ToField<UID>;
    readonly balance: ToField<Balance<ToPhantom<SUI>>>;
    readonly rules: ToField<VecSet<TypeName>>;
    private constructor();
    static reified<T extends PhantomReified<PhantomTypeArgument>>(T: T): TransferPolicyReified<ToPhantomTypeArgument<T>>;
    static get r(): typeof TransferPolicy.reified;
    static phantom<T extends PhantomReified<PhantomTypeArgument>>(T: T): PhantomReified<ToTypeStr<TransferPolicy<ToPhantomTypeArgument<T>>>>;
    static get p(): typeof TransferPolicy.phantom;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        balance: {
            value: string;
        };
        rules: {
            contents: any[];
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        balance: {
            value: string | number | bigint;
        };
        rules: {
            contents: Iterable<any> & {
                length: number;
            };
        };
    }>;
    static fromFields<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, fields: Record<string, any>): TransferPolicy<ToPhantomTypeArgument<T>>;
    static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, item: FieldsWithTypes): TransferPolicy<ToPhantomTypeArgument<T>>;
    static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, data: Uint8Array): TransferPolicy<ToPhantomTypeArgument<T>>;
    toJSONField(): {
        id: string;
        balance: {
            value: string;
        };
        rules: {
            contents: {
                name: string;
            }[];
        };
    };
    toJSON(): {
        id: string;
        balance: {
            value: string;
        };
        rules: {
            contents: {
                name: string;
            }[];
        };
        $typeName: string;
        $typeArgs: [reified.PhantomToTypeStr<T>];
    };
    static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, field: any): TransferPolicy<ToPhantomTypeArgument<T>>;
    static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, json: Record<string, any>): TransferPolicy<ToPhantomTypeArgument<T>>;
    static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, content: SuiParsedData): TransferPolicy<ToPhantomTypeArgument<T>>;
    static fetch<T extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: T, id: string): Promise<TransferPolicy<ToPhantomTypeArgument<T>>>;
}
export declare function isTransferPolicyCap(type: string): boolean;
export interface TransferPolicyCapFields<T extends PhantomTypeArgument> {
    id: ToField<UID>;
    policyId: ToField<ID>;
}
export type TransferPolicyCapReified<T extends PhantomTypeArgument> = Reified<TransferPolicyCap<T>, TransferPolicyCapFields<T>>;
export declare class TransferPolicyCap<T extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0x2::transfer_policy::TransferPolicyCap";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0x2::transfer_policy::TransferPolicyCap";
    readonly $fullTypeName: `0x2::transfer_policy::TransferPolicyCap<${PhantomToTypeStr<T>}>`;
    readonly $typeArgs: [PhantomToTypeStr<T>];
    readonly id: ToField<UID>;
    readonly policyId: ToField<ID>;
    private constructor();
    static reified<T extends PhantomReified<PhantomTypeArgument>>(T: T): TransferPolicyCapReified<ToPhantomTypeArgument<T>>;
    static get r(): typeof TransferPolicyCap.reified;
    static phantom<T extends PhantomReified<PhantomTypeArgument>>(T: T): PhantomReified<ToTypeStr<TransferPolicyCap<ToPhantomTypeArgument<T>>>>;
    static get p(): typeof TransferPolicyCap.phantom;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        policy_id: {
            bytes: string;
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        policy_id: {
            bytes: string;
        };
    }>;
    static fromFields<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, fields: Record<string, any>): TransferPolicyCap<ToPhantomTypeArgument<T>>;
    static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, item: FieldsWithTypes): TransferPolicyCap<ToPhantomTypeArgument<T>>;
    static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, data: Uint8Array): TransferPolicyCap<ToPhantomTypeArgument<T>>;
    toJSONField(): {
        id: string;
        policyId: string;
    };
    toJSON(): {
        id: string;
        policyId: string;
        $typeName: string;
        $typeArgs: [reified.PhantomToTypeStr<T>];
    };
    static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, field: any): TransferPolicyCap<ToPhantomTypeArgument<T>>;
    static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, json: Record<string, any>): TransferPolicyCap<ToPhantomTypeArgument<T>>;
    static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, content: SuiParsedData): TransferPolicyCap<ToPhantomTypeArgument<T>>;
    static fetch<T extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: T, id: string): Promise<TransferPolicyCap<ToPhantomTypeArgument<T>>>;
}
export declare function isTransferPolicyCreated(type: string): boolean;
export interface TransferPolicyCreatedFields<T extends PhantomTypeArgument> {
    id: ToField<ID>;
}
export type TransferPolicyCreatedReified<T extends PhantomTypeArgument> = Reified<TransferPolicyCreated<T>, TransferPolicyCreatedFields<T>>;
export declare class TransferPolicyCreated<T extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0x2::transfer_policy::TransferPolicyCreated";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0x2::transfer_policy::TransferPolicyCreated";
    readonly $fullTypeName: `0x2::transfer_policy::TransferPolicyCreated<${PhantomToTypeStr<T>}>`;
    readonly $typeArgs: [PhantomToTypeStr<T>];
    readonly id: ToField<ID>;
    private constructor();
    static reified<T extends PhantomReified<PhantomTypeArgument>>(T: T): TransferPolicyCreatedReified<ToPhantomTypeArgument<T>>;
    static get r(): typeof TransferPolicyCreated.reified;
    static phantom<T extends PhantomReified<PhantomTypeArgument>>(T: T): PhantomReified<ToTypeStr<TransferPolicyCreated<ToPhantomTypeArgument<T>>>>;
    static get p(): typeof TransferPolicyCreated.phantom;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            bytes: string;
        };
    }, {
        id: {
            bytes: string;
        };
    }>;
    static fromFields<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, fields: Record<string, any>): TransferPolicyCreated<ToPhantomTypeArgument<T>>;
    static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, item: FieldsWithTypes): TransferPolicyCreated<ToPhantomTypeArgument<T>>;
    static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, data: Uint8Array): TransferPolicyCreated<ToPhantomTypeArgument<T>>;
    toJSONField(): {
        id: string;
    };
    toJSON(): {
        id: string;
        $typeName: string;
        $typeArgs: [reified.PhantomToTypeStr<T>];
    };
    static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, field: any): TransferPolicyCreated<ToPhantomTypeArgument<T>>;
    static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, json: Record<string, any>): TransferPolicyCreated<ToPhantomTypeArgument<T>>;
    static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, content: SuiParsedData): TransferPolicyCreated<ToPhantomTypeArgument<T>>;
    static fetch<T extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: T, id: string): Promise<TransferPolicyCreated<ToPhantomTypeArgument<T>>>;
}
export declare function isTransferPolicyDestroyed(type: string): boolean;
export interface TransferPolicyDestroyedFields<T extends PhantomTypeArgument> {
    id: ToField<ID>;
}
export type TransferPolicyDestroyedReified<T extends PhantomTypeArgument> = Reified<TransferPolicyDestroyed<T>, TransferPolicyDestroyedFields<T>>;
export declare class TransferPolicyDestroyed<T extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0x2::transfer_policy::TransferPolicyDestroyed";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0x2::transfer_policy::TransferPolicyDestroyed";
    readonly $fullTypeName: `0x2::transfer_policy::TransferPolicyDestroyed<${PhantomToTypeStr<T>}>`;
    readonly $typeArgs: [PhantomToTypeStr<T>];
    readonly id: ToField<ID>;
    private constructor();
    static reified<T extends PhantomReified<PhantomTypeArgument>>(T: T): TransferPolicyDestroyedReified<ToPhantomTypeArgument<T>>;
    static get r(): typeof TransferPolicyDestroyed.reified;
    static phantom<T extends PhantomReified<PhantomTypeArgument>>(T: T): PhantomReified<ToTypeStr<TransferPolicyDestroyed<ToPhantomTypeArgument<T>>>>;
    static get p(): typeof TransferPolicyDestroyed.phantom;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            bytes: string;
        };
    }, {
        id: {
            bytes: string;
        };
    }>;
    static fromFields<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, fields: Record<string, any>): TransferPolicyDestroyed<ToPhantomTypeArgument<T>>;
    static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, item: FieldsWithTypes): TransferPolicyDestroyed<ToPhantomTypeArgument<T>>;
    static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, data: Uint8Array): TransferPolicyDestroyed<ToPhantomTypeArgument<T>>;
    toJSONField(): {
        id: string;
    };
    toJSON(): {
        id: string;
        $typeName: string;
        $typeArgs: [reified.PhantomToTypeStr<T>];
    };
    static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, field: any): TransferPolicyDestroyed<ToPhantomTypeArgument<T>>;
    static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, json: Record<string, any>): TransferPolicyDestroyed<ToPhantomTypeArgument<T>>;
    static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, content: SuiParsedData): TransferPolicyDestroyed<ToPhantomTypeArgument<T>>;
    static fetch<T extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: T, id: string): Promise<TransferPolicyDestroyed<ToPhantomTypeArgument<T>>>;
}
export declare function isTransferRequest(type: string): boolean;
export interface TransferRequestFields<T extends PhantomTypeArgument> {
    item: ToField<ID>;
    paid: ToField<"u64">;
    from: ToField<ID>;
    receipts: ToField<VecSet<TypeName>>;
}
export type TransferRequestReified<T extends PhantomTypeArgument> = Reified<TransferRequest<T>, TransferRequestFields<T>>;
export declare class TransferRequest<T extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0x2::transfer_policy::TransferRequest";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0x2::transfer_policy::TransferRequest";
    readonly $fullTypeName: `0x2::transfer_policy::TransferRequest<${PhantomToTypeStr<T>}>`;
    readonly $typeArgs: [PhantomToTypeStr<T>];
    readonly item: ToField<ID>;
    readonly paid: ToField<"u64">;
    readonly from: ToField<ID>;
    readonly receipts: ToField<VecSet<TypeName>>;
    private constructor();
    static reified<T extends PhantomReified<PhantomTypeArgument>>(T: T): TransferRequestReified<ToPhantomTypeArgument<T>>;
    static get r(): typeof TransferRequest.reified;
    static phantom<T extends PhantomReified<PhantomTypeArgument>>(T: T): PhantomReified<ToTypeStr<TransferRequest<ToPhantomTypeArgument<T>>>>;
    static get p(): typeof TransferRequest.phantom;
    static get bcs(): import("@mysten/bcs").BcsType<{
        item: {
            bytes: string;
        };
        paid: string;
        from: {
            bytes: string;
        };
        receipts: {
            contents: any[];
        };
    }, {
        item: {
            bytes: string;
        };
        paid: string | number | bigint;
        from: {
            bytes: string;
        };
        receipts: {
            contents: Iterable<any> & {
                length: number;
            };
        };
    }>;
    static fromFields<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, fields: Record<string, any>): TransferRequest<ToPhantomTypeArgument<T>>;
    static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, item: FieldsWithTypes): TransferRequest<ToPhantomTypeArgument<T>>;
    static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, data: Uint8Array): TransferRequest<ToPhantomTypeArgument<T>>;
    toJSONField(): {
        item: string;
        paid: string;
        from: string;
        receipts: {
            contents: {
                name: string;
            }[];
        };
    };
    toJSON(): {
        item: string;
        paid: string;
        from: string;
        receipts: {
            contents: {
                name: string;
            }[];
        };
        $typeName: string;
        $typeArgs: [reified.PhantomToTypeStr<T>];
    };
    static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, field: any): TransferRequest<ToPhantomTypeArgument<T>>;
    static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, json: Record<string, any>): TransferRequest<ToPhantomTypeArgument<T>>;
    static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, content: SuiParsedData): TransferRequest<ToPhantomTypeArgument<T>>;
    static fetch<T extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: T, id: string): Promise<TransferRequest<ToPhantomTypeArgument<T>>>;
}
