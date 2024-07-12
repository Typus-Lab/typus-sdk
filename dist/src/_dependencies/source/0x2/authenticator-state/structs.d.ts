import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, Vector } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { String } from "../../0x1/string/structs";
import { UID } from "../object/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isActiveJwk(type: string): boolean;
export interface ActiveJwkFields {
    jwkId: ToField<JwkId>;
    jwk: ToField<JWK>;
    epoch: ToField<"u64">;
}
export type ActiveJwkReified = Reified<ActiveJwk, ActiveJwkFields>;
export declare class ActiveJwk implements StructClass {
    static readonly $typeName = "0x2::authenticator_state::ActiveJwk";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x2::authenticator_state::ActiveJwk";
    readonly $fullTypeName: "0x2::authenticator_state::ActiveJwk";
    readonly $typeArgs: [];
    readonly jwkId: ToField<JwkId>;
    readonly jwk: ToField<JWK>;
    readonly epoch: ToField<"u64">;
    private constructor();
    static reified(): ActiveJwkReified;
    static get r(): reified.StructClassReified<ActiveJwk, ActiveJwkFields>;
    static phantom(): PhantomReified<ToTypeStr<ActiveJwk>>;
    static get p(): reified.PhantomReified<"0x2::authenticator_state::ActiveJwk">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        jwk_id: {
            iss: {
                bytes: number[];
            };
            kid: {
                bytes: number[];
            };
        };
        jwk: {
            kty: {
                bytes: number[];
            };
            e: {
                bytes: number[];
            };
            n: {
                bytes: number[];
            };
            alg: {
                bytes: number[];
            };
        };
        epoch: string;
    }, {
        jwk_id: {
            iss: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
            kid: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        jwk: {
            kty: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
            e: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
            n: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
            alg: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        epoch: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): ActiveJwk;
    static fromFieldsWithTypes(item: FieldsWithTypes): ActiveJwk;
    static fromBcs(data: Uint8Array): ActiveJwk;
    toJSONField(): {
        jwkId: {
            iss: string;
            kid: string;
        };
        jwk: {
            kty: string;
            e: string;
            n: string;
            alg: string;
        };
        epoch: string;
    };
    toJSON(): {
        jwkId: {
            iss: string;
            kid: string;
        };
        jwk: {
            kty: string;
            e: string;
            n: string;
            alg: string;
        };
        epoch: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): ActiveJwk;
    static fromJSON(json: Record<string, any>): ActiveJwk;
    static fromSuiParsedData(content: SuiParsedData): ActiveJwk;
    static fetch(client: SuiClient, id: string): Promise<ActiveJwk>;
}
export declare function isAuthenticatorState(type: string): boolean;
export interface AuthenticatorStateFields {
    id: ToField<UID>;
    version: ToField<"u64">;
}
export type AuthenticatorStateReified = Reified<AuthenticatorState, AuthenticatorStateFields>;
export declare class AuthenticatorState implements StructClass {
    static readonly $typeName = "0x2::authenticator_state::AuthenticatorState";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x2::authenticator_state::AuthenticatorState";
    readonly $fullTypeName: "0x2::authenticator_state::AuthenticatorState";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly version: ToField<"u64">;
    private constructor();
    static reified(): AuthenticatorStateReified;
    static get r(): reified.StructClassReified<AuthenticatorState, AuthenticatorStateFields>;
    static phantom(): PhantomReified<ToTypeStr<AuthenticatorState>>;
    static get p(): reified.PhantomReified<"0x2::authenticator_state::AuthenticatorState">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        version: string;
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        version: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): AuthenticatorState;
    static fromFieldsWithTypes(item: FieldsWithTypes): AuthenticatorState;
    static fromBcs(data: Uint8Array): AuthenticatorState;
    toJSONField(): {
        id: string;
        version: string;
    };
    toJSON(): {
        id: string;
        version: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): AuthenticatorState;
    static fromJSON(json: Record<string, any>): AuthenticatorState;
    static fromSuiParsedData(content: SuiParsedData): AuthenticatorState;
    static fetch(client: SuiClient, id: string): Promise<AuthenticatorState>;
}
export declare function isAuthenticatorStateInner(type: string): boolean;
export interface AuthenticatorStateInnerFields {
    version: ToField<"u64">;
    activeJwks: ToField<Vector<ActiveJwk>>;
}
export type AuthenticatorStateInnerReified = Reified<AuthenticatorStateInner, AuthenticatorStateInnerFields>;
export declare class AuthenticatorStateInner implements StructClass {
    static readonly $typeName = "0x2::authenticator_state::AuthenticatorStateInner";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x2::authenticator_state::AuthenticatorStateInner";
    readonly $fullTypeName: "0x2::authenticator_state::AuthenticatorStateInner";
    readonly $typeArgs: [];
    readonly version: ToField<"u64">;
    readonly activeJwks: ToField<Vector<ActiveJwk>>;
    private constructor();
    static reified(): AuthenticatorStateInnerReified;
    static get r(): reified.StructClassReified<AuthenticatorStateInner, AuthenticatorStateInnerFields>;
    static phantom(): PhantomReified<ToTypeStr<AuthenticatorStateInner>>;
    static get p(): reified.PhantomReified<"0x2::authenticator_state::AuthenticatorStateInner">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        version: string;
        active_jwks: {
            jwk_id: {
                iss: {
                    bytes: number[];
                };
                kid: {
                    bytes: number[];
                };
            };
            jwk: {
                kty: {
                    bytes: number[];
                };
                e: {
                    bytes: number[];
                };
                n: {
                    bytes: number[];
                };
                alg: {
                    bytes: number[];
                };
            };
            epoch: string;
        }[];
    }, {
        version: string | number | bigint;
        active_jwks: Iterable<{
            jwk_id: {
                iss: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
                kid: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
            };
            jwk: {
                kty: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
                e: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
                n: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
                alg: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
            };
            epoch: string | number | bigint;
        }> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): AuthenticatorStateInner;
    static fromFieldsWithTypes(item: FieldsWithTypes): AuthenticatorStateInner;
    static fromBcs(data: Uint8Array): AuthenticatorStateInner;
    toJSONField(): {
        version: string;
        activeJwks: {
            jwkId: {
                iss: string;
                kid: string;
            };
            jwk: {
                kty: string;
                e: string;
                n: string;
                alg: string;
            };
            epoch: string;
        }[];
    };
    toJSON(): {
        version: string;
        activeJwks: {
            jwkId: {
                iss: string;
                kid: string;
            };
            jwk: {
                kty: string;
                e: string;
                n: string;
                alg: string;
            };
            epoch: string;
        }[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): AuthenticatorStateInner;
    static fromJSON(json: Record<string, any>): AuthenticatorStateInner;
    static fromSuiParsedData(content: SuiParsedData): AuthenticatorStateInner;
    static fetch(client: SuiClient, id: string): Promise<AuthenticatorStateInner>;
}
export declare function isJWK(type: string): boolean;
export interface JWKFields {
    kty: ToField<String>;
    e: ToField<String>;
    n: ToField<String>;
    alg: ToField<String>;
}
export type JWKReified = Reified<JWK, JWKFields>;
export declare class JWK implements StructClass {
    static readonly $typeName = "0x2::authenticator_state::JWK";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x2::authenticator_state::JWK";
    readonly $fullTypeName: "0x2::authenticator_state::JWK";
    readonly $typeArgs: [];
    readonly kty: ToField<String>;
    readonly e: ToField<String>;
    readonly n: ToField<String>;
    readonly alg: ToField<String>;
    private constructor();
    static reified(): JWKReified;
    static get r(): reified.StructClassReified<JWK, JWKFields>;
    static phantom(): PhantomReified<ToTypeStr<JWK>>;
    static get p(): reified.PhantomReified<"0x2::authenticator_state::JWK">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        kty: {
            bytes: number[];
        };
        e: {
            bytes: number[];
        };
        n: {
            bytes: number[];
        };
        alg: {
            bytes: number[];
        };
    }, {
        kty: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        e: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        n: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        alg: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
    }>;
    static fromFields(fields: Record<string, any>): JWK;
    static fromFieldsWithTypes(item: FieldsWithTypes): JWK;
    static fromBcs(data: Uint8Array): JWK;
    toJSONField(): {
        kty: string;
        e: string;
        n: string;
        alg: string;
    };
    toJSON(): {
        kty: string;
        e: string;
        n: string;
        alg: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): JWK;
    static fromJSON(json: Record<string, any>): JWK;
    static fromSuiParsedData(content: SuiParsedData): JWK;
    static fetch(client: SuiClient, id: string): Promise<JWK>;
}
export declare function isJwkId(type: string): boolean;
export interface JwkIdFields {
    iss: ToField<String>;
    kid: ToField<String>;
}
export type JwkIdReified = Reified<JwkId, JwkIdFields>;
export declare class JwkId implements StructClass {
    static readonly $typeName = "0x2::authenticator_state::JwkId";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x2::authenticator_state::JwkId";
    readonly $fullTypeName: "0x2::authenticator_state::JwkId";
    readonly $typeArgs: [];
    readonly iss: ToField<String>;
    readonly kid: ToField<String>;
    private constructor();
    static reified(): JwkIdReified;
    static get r(): reified.StructClassReified<JwkId, JwkIdFields>;
    static phantom(): PhantomReified<ToTypeStr<JwkId>>;
    static get p(): reified.PhantomReified<"0x2::authenticator_state::JwkId">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        iss: {
            bytes: number[];
        };
        kid: {
            bytes: number[];
        };
    }, {
        iss: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        kid: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
    }>;
    static fromFields(fields: Record<string, any>): JwkId;
    static fromFieldsWithTypes(item: FieldsWithTypes): JwkId;
    static fromBcs(data: Uint8Array): JwkId;
    toJSONField(): {
        iss: string;
        kid: string;
    };
    toJSON(): {
        iss: string;
        kid: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): JwkId;
    static fromJSON(json: Record<string, any>): JwkId;
    static fromSuiParsedData(content: SuiParsedData): JwkId;
    static fetch(client: SuiClient, id: string): Promise<JwkId>;
}
