import { PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { Option } from "../../0x1/option/structs";
import { String } from "../../0x1/string/structs";
import { TypeName } from "../../0x1/type-name/structs";
import { Balance } from "../balance/structs";
import { ID, UID } from "../object/structs";
import { VecMap } from "../vec-map/structs";
import { VecSet } from "../vec-set/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isRuleKey(type: string): boolean;
export interface RuleKeyFields<T extends PhantomTypeArgument> {
    isProtected: ToField<"bool">;
}
export type RuleKeyReified<T extends PhantomTypeArgument> = Reified<RuleKey<T>, RuleKeyFields<T>>;
export declare class RuleKey<T extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0x2::token::RuleKey";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0x2::token::RuleKey";
    readonly $fullTypeName: `0x2::token::RuleKey<${PhantomToTypeStr<T>}>`;
    readonly $typeArgs: [PhantomToTypeStr<T>];
    readonly isProtected: ToField<"bool">;
    private constructor();
    static reified<T extends PhantomReified<PhantomTypeArgument>>(T: T): RuleKeyReified<ToPhantomTypeArgument<T>>;
    static get r(): typeof RuleKey.reified;
    static phantom<T extends PhantomReified<PhantomTypeArgument>>(T: T): PhantomReified<ToTypeStr<RuleKey<ToPhantomTypeArgument<T>>>>;
    static get p(): typeof RuleKey.phantom;
    static get bcs(): import("@mysten/bcs").BcsType<{
        is_protected: boolean;
    }, {
        is_protected: boolean;
    }>;
    static fromFields<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, fields: Record<string, any>): RuleKey<ToPhantomTypeArgument<T>>;
    static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, item: FieldsWithTypes): RuleKey<ToPhantomTypeArgument<T>>;
    static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, data: Uint8Array): RuleKey<ToPhantomTypeArgument<T>>;
    toJSONField(): {
        isProtected: boolean;
    };
    toJSON(): {
        isProtected: boolean;
        $typeName: string;
        $typeArgs: [PhantomToTypeStr<T>];
    };
    static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, field: any): RuleKey<ToPhantomTypeArgument<T>>;
    static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, json: Record<string, any>): RuleKey<ToPhantomTypeArgument<T>>;
    static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, content: SuiParsedData): RuleKey<ToPhantomTypeArgument<T>>;
    static fetch<T extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: T, id: string): Promise<RuleKey<ToPhantomTypeArgument<T>>>;
}
export declare function isActionRequest(type: string): boolean;
export interface ActionRequestFields<T extends PhantomTypeArgument> {
    name: ToField<String>;
    amount: ToField<"u64">;
    sender: ToField<"address">;
    recipient: ToField<Option<"address">>;
    spentBalance: ToField<Option<Balance<T>>>;
    approvals: ToField<VecSet<TypeName>>;
}
export type ActionRequestReified<T extends PhantomTypeArgument> = Reified<ActionRequest<T>, ActionRequestFields<T>>;
export declare class ActionRequest<T extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0x2::token::ActionRequest";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0x2::token::ActionRequest";
    readonly $fullTypeName: `0x2::token::ActionRequest<${PhantomToTypeStr<T>}>`;
    readonly $typeArgs: [PhantomToTypeStr<T>];
    readonly name: ToField<String>;
    readonly amount: ToField<"u64">;
    readonly sender: ToField<"address">;
    readonly recipient: ToField<Option<"address">>;
    readonly spentBalance: ToField<Option<Balance<T>>>;
    readonly approvals: ToField<VecSet<TypeName>>;
    private constructor();
    static reified<T extends PhantomReified<PhantomTypeArgument>>(T: T): ActionRequestReified<ToPhantomTypeArgument<T>>;
    static get r(): typeof ActionRequest.reified;
    static phantom<T extends PhantomReified<PhantomTypeArgument>>(T: T): PhantomReified<ToTypeStr<ActionRequest<ToPhantomTypeArgument<T>>>>;
    static get p(): typeof ActionRequest.phantom;
    static get bcs(): import("@mysten/bcs").BcsType<{
        name: {
            bytes: number[];
        };
        amount: string;
        sender: string;
        recipient: {
            vec: any[];
        };
        spent_balance: {
            vec: any[];
        };
        approvals: {
            contents: any[];
        };
    }, {
        name: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        amount: string | number | bigint;
        sender: string;
        recipient: {
            vec: Iterable<any> & {
                length: number;
            };
        };
        spent_balance: {
            vec: Iterable<any> & {
                length: number;
            };
        };
        approvals: {
            contents: Iterable<any> & {
                length: number;
            };
        };
    }>;
    static fromFields<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, fields: Record<string, any>): ActionRequest<ToPhantomTypeArgument<T>>;
    static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, item: FieldsWithTypes): ActionRequest<ToPhantomTypeArgument<T>>;
    static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, data: Uint8Array): ActionRequest<ToPhantomTypeArgument<T>>;
    toJSONField(): {
        name: string;
        amount: string;
        sender: string;
        recipient: string | null;
        spentBalance: {
            value: string;
        } | null;
        approvals: {
            contents: {
                name: string;
            }[];
        };
    };
    toJSON(): {
        name: string;
        amount: string;
        sender: string;
        recipient: string | null;
        spentBalance: {
            value: string;
        } | null;
        approvals: {
            contents: {
                name: string;
            }[];
        };
        $typeName: string;
        $typeArgs: [PhantomToTypeStr<T>];
    };
    static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, field: any): ActionRequest<ToPhantomTypeArgument<T>>;
    static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, json: Record<string, any>): ActionRequest<ToPhantomTypeArgument<T>>;
    static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, content: SuiParsedData): ActionRequest<ToPhantomTypeArgument<T>>;
    static fetch<T extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: T, id: string): Promise<ActionRequest<ToPhantomTypeArgument<T>>>;
}
export declare function isToken(type: string): boolean;
export interface TokenFields<T extends PhantomTypeArgument> {
    id: ToField<UID>;
    balance: ToField<Balance<T>>;
}
export type TokenReified<T extends PhantomTypeArgument> = Reified<Token<T>, TokenFields<T>>;
export declare class Token<T extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0x2::token::Token";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0x2::token::Token";
    readonly $fullTypeName: `0x2::token::Token<${PhantomToTypeStr<T>}>`;
    readonly $typeArgs: [PhantomToTypeStr<T>];
    readonly id: ToField<UID>;
    readonly balance: ToField<Balance<T>>;
    private constructor();
    static reified<T extends PhantomReified<PhantomTypeArgument>>(T: T): TokenReified<ToPhantomTypeArgument<T>>;
    static get r(): typeof Token.reified;
    static phantom<T extends PhantomReified<PhantomTypeArgument>>(T: T): PhantomReified<ToTypeStr<Token<ToPhantomTypeArgument<T>>>>;
    static get p(): typeof Token.phantom;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        balance: {
            value: string;
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
    }>;
    static fromFields<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, fields: Record<string, any>): Token<ToPhantomTypeArgument<T>>;
    static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, item: FieldsWithTypes): Token<ToPhantomTypeArgument<T>>;
    static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, data: Uint8Array): Token<ToPhantomTypeArgument<T>>;
    toJSONField(): {
        id: string;
        balance: {
            value: string;
        };
    };
    toJSON(): {
        id: string;
        balance: {
            value: string;
        };
        $typeName: string;
        $typeArgs: [PhantomToTypeStr<T>];
    };
    static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, field: any): Token<ToPhantomTypeArgument<T>>;
    static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, json: Record<string, any>): Token<ToPhantomTypeArgument<T>>;
    static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, content: SuiParsedData): Token<ToPhantomTypeArgument<T>>;
    static fetch<T extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: T, id: string): Promise<Token<ToPhantomTypeArgument<T>>>;
}
export declare function isTokenPolicy(type: string): boolean;
export interface TokenPolicyFields<T extends PhantomTypeArgument> {
    id: ToField<UID>;
    spentBalance: ToField<Balance<T>>;
    rules: ToField<VecMap<String, VecSet<TypeName>>>;
}
export type TokenPolicyReified<T extends PhantomTypeArgument> = Reified<TokenPolicy<T>, TokenPolicyFields<T>>;
export declare class TokenPolicy<T extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0x2::token::TokenPolicy";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0x2::token::TokenPolicy";
    readonly $fullTypeName: `0x2::token::TokenPolicy<${PhantomToTypeStr<T>}>`;
    readonly $typeArgs: [PhantomToTypeStr<T>];
    readonly id: ToField<UID>;
    readonly spentBalance: ToField<Balance<T>>;
    readonly rules: ToField<VecMap<String, VecSet<TypeName>>>;
    private constructor();
    static reified<T extends PhantomReified<PhantomTypeArgument>>(T: T): TokenPolicyReified<ToPhantomTypeArgument<T>>;
    static get r(): typeof TokenPolicy.reified;
    static phantom<T extends PhantomReified<PhantomTypeArgument>>(T: T): PhantomReified<ToTypeStr<TokenPolicy<ToPhantomTypeArgument<T>>>>;
    static get p(): typeof TokenPolicy.phantom;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        spent_balance: {
            value: string;
        };
        rules: {
            contents: {
                key: {
                    bytes: number[];
                };
                value: {
                    contents: any[];
                };
            }[];
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        spent_balance: {
            value: string | number | bigint;
        };
        rules: {
            contents: Iterable<{
                key: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
                value: {
                    contents: Iterable<any> & {
                        length: number;
                    };
                };
            }> & {
                length: number;
            };
        };
    }>;
    static fromFields<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, fields: Record<string, any>): TokenPolicy<ToPhantomTypeArgument<T>>;
    static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, item: FieldsWithTypes): TokenPolicy<ToPhantomTypeArgument<T>>;
    static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, data: Uint8Array): TokenPolicy<ToPhantomTypeArgument<T>>;
    toJSONField(): {
        id: string;
        spentBalance: {
            value: string;
        };
        rules: {
            contents: {
                key: string;
                value: {
                    contents: {
                        name: string;
                    }[];
                };
            }[];
        };
    };
    toJSON(): {
        id: string;
        spentBalance: {
            value: string;
        };
        rules: {
            contents: {
                key: string;
                value: {
                    contents: {
                        name: string;
                    }[];
                };
            }[];
        };
        $typeName: string;
        $typeArgs: [PhantomToTypeStr<T>];
    };
    static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, field: any): TokenPolicy<ToPhantomTypeArgument<T>>;
    static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, json: Record<string, any>): TokenPolicy<ToPhantomTypeArgument<T>>;
    static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, content: SuiParsedData): TokenPolicy<ToPhantomTypeArgument<T>>;
    static fetch<T extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: T, id: string): Promise<TokenPolicy<ToPhantomTypeArgument<T>>>;
}
export declare function isTokenPolicyCap(type: string): boolean;
export interface TokenPolicyCapFields<T extends PhantomTypeArgument> {
    id: ToField<UID>;
    for: ToField<ID>;
}
export type TokenPolicyCapReified<T extends PhantomTypeArgument> = Reified<TokenPolicyCap<T>, TokenPolicyCapFields<T>>;
export declare class TokenPolicyCap<T extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0x2::token::TokenPolicyCap";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0x2::token::TokenPolicyCap";
    readonly $fullTypeName: `0x2::token::TokenPolicyCap<${PhantomToTypeStr<T>}>`;
    readonly $typeArgs: [PhantomToTypeStr<T>];
    readonly id: ToField<UID>;
    readonly for: ToField<ID>;
    private constructor();
    static reified<T extends PhantomReified<PhantomTypeArgument>>(T: T): TokenPolicyCapReified<ToPhantomTypeArgument<T>>;
    static get r(): typeof TokenPolicyCap.reified;
    static phantom<T extends PhantomReified<PhantomTypeArgument>>(T: T): PhantomReified<ToTypeStr<TokenPolicyCap<ToPhantomTypeArgument<T>>>>;
    static get p(): typeof TokenPolicyCap.phantom;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        for: {
            bytes: string;
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        for: {
            bytes: string;
        };
    }>;
    static fromFields<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, fields: Record<string, any>): TokenPolicyCap<ToPhantomTypeArgument<T>>;
    static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, item: FieldsWithTypes): TokenPolicyCap<ToPhantomTypeArgument<T>>;
    static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, data: Uint8Array): TokenPolicyCap<ToPhantomTypeArgument<T>>;
    toJSONField(): {
        id: string;
        for: string;
    };
    toJSON(): {
        id: string;
        for: string;
        $typeName: string;
        $typeArgs: [PhantomToTypeStr<T>];
    };
    static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, field: any): TokenPolicyCap<ToPhantomTypeArgument<T>>;
    static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, json: Record<string, any>): TokenPolicyCap<ToPhantomTypeArgument<T>>;
    static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, content: SuiParsedData): TokenPolicyCap<ToPhantomTypeArgument<T>>;
    static fetch<T extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: T, id: string): Promise<TokenPolicyCap<ToPhantomTypeArgument<T>>>;
}
export declare function isTokenPolicyCreated(type: string): boolean;
export interface TokenPolicyCreatedFields<T extends PhantomTypeArgument> {
    id: ToField<ID>;
    isMutable: ToField<"bool">;
}
export type TokenPolicyCreatedReified<T extends PhantomTypeArgument> = Reified<TokenPolicyCreated<T>, TokenPolicyCreatedFields<T>>;
export declare class TokenPolicyCreated<T extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0x2::token::TokenPolicyCreated";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0x2::token::TokenPolicyCreated";
    readonly $fullTypeName: `0x2::token::TokenPolicyCreated<${PhantomToTypeStr<T>}>`;
    readonly $typeArgs: [PhantomToTypeStr<T>];
    readonly id: ToField<ID>;
    readonly isMutable: ToField<"bool">;
    private constructor();
    static reified<T extends PhantomReified<PhantomTypeArgument>>(T: T): TokenPolicyCreatedReified<ToPhantomTypeArgument<T>>;
    static get r(): typeof TokenPolicyCreated.reified;
    static phantom<T extends PhantomReified<PhantomTypeArgument>>(T: T): PhantomReified<ToTypeStr<TokenPolicyCreated<ToPhantomTypeArgument<T>>>>;
    static get p(): typeof TokenPolicyCreated.phantom;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            bytes: string;
        };
        is_mutable: boolean;
    }, {
        id: {
            bytes: string;
        };
        is_mutable: boolean;
    }>;
    static fromFields<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, fields: Record<string, any>): TokenPolicyCreated<ToPhantomTypeArgument<T>>;
    static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, item: FieldsWithTypes): TokenPolicyCreated<ToPhantomTypeArgument<T>>;
    static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, data: Uint8Array): TokenPolicyCreated<ToPhantomTypeArgument<T>>;
    toJSONField(): {
        id: string;
        isMutable: boolean;
    };
    toJSON(): {
        id: string;
        isMutable: boolean;
        $typeName: string;
        $typeArgs: [PhantomToTypeStr<T>];
    };
    static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, field: any): TokenPolicyCreated<ToPhantomTypeArgument<T>>;
    static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, json: Record<string, any>): TokenPolicyCreated<ToPhantomTypeArgument<T>>;
    static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, content: SuiParsedData): TokenPolicyCreated<ToPhantomTypeArgument<T>>;
    static fetch<T extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: T, id: string): Promise<TokenPolicyCreated<ToPhantomTypeArgument<T>>>;
}
