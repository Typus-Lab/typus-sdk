import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, Vector } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { TypeName } from "../../0x1/type-name/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isSendFeeEvent(type: string): boolean;
export interface SendFeeEventFields {
    signer: ToField<"address">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
    recipient: ToField<"address">;
}
export type SendFeeEventReified = Reified<SendFeeEvent, SendFeeEventFields>;
export declare class SendFeeEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_fee_pool_entry::SendFeeEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_fee_pool_entry::SendFeeEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_fee_pool_entry::SendFeeEvent";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;
    readonly recipient: ToField<"address">;
    private constructor();
    static reified(): SendFeeEventReified;
    static get r(): reified.StructClassReified<SendFeeEvent, SendFeeEventFields>;
    static phantom(): PhantomReified<ToTypeStr<SendFeeEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_fee_pool_entry::SendFeeEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        token: {
            name: {
                bytes: number[];
            };
        };
        amount: string;
        recipient: string;
    }, {
        signer: string;
        token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        amount: string | number | bigint;
        recipient: string;
    }>;
    static fromFields(fields: Record<string, any>): SendFeeEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): SendFeeEvent;
    static fromBcs(data: Uint8Array): SendFeeEvent;
    toJSONField(): {
        signer: string;
        token: {
            name: string;
        };
        amount: string;
        recipient: string;
    };
    toJSON(): {
        signer: string;
        token: {
            name: string;
        };
        amount: string;
        recipient: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): SendFeeEvent;
    static fromJSON(json: Record<string, any>): SendFeeEvent;
    static fromSuiParsedData(content: SuiParsedData): SendFeeEvent;
    static fetch(client: SuiClient, id: string): Promise<SendFeeEvent>;
}
export declare function isAddFeePoolAuthorizedUserEvent(type: string): boolean;
export interface AddFeePoolAuthorizedUserEventFields {
    signer: ToField<"address">;
    users: ToField<Vector<"address">>;
}
export type AddFeePoolAuthorizedUserEventReified = Reified<AddFeePoolAuthorizedUserEvent, AddFeePoolAuthorizedUserEventFields>;
export declare class AddFeePoolAuthorizedUserEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_fee_pool_entry::AddFeePoolAuthorizedUserEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_fee_pool_entry::AddFeePoolAuthorizedUserEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_fee_pool_entry::AddFeePoolAuthorizedUserEvent";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly users: ToField<Vector<"address">>;
    private constructor();
    static reified(): AddFeePoolAuthorizedUserEventReified;
    static get r(): reified.StructClassReified<AddFeePoolAuthorizedUserEvent, AddFeePoolAuthorizedUserEventFields>;
    static phantom(): PhantomReified<ToTypeStr<AddFeePoolAuthorizedUserEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_fee_pool_entry::AddFeePoolAuthorizedUserEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        users: string[];
    }, {
        signer: string;
        users: Iterable<string> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): AddFeePoolAuthorizedUserEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): AddFeePoolAuthorizedUserEvent;
    static fromBcs(data: Uint8Array): AddFeePoolAuthorizedUserEvent;
    toJSONField(): {
        signer: string;
        users: string[];
    };
    toJSON(): {
        signer: string;
        users: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): AddFeePoolAuthorizedUserEvent;
    static fromJSON(json: Record<string, any>): AddFeePoolAuthorizedUserEvent;
    static fromSuiParsedData(content: SuiParsedData): AddFeePoolAuthorizedUserEvent;
    static fetch(client: SuiClient, id: string): Promise<AddFeePoolAuthorizedUserEvent>;
}
export declare function isAddSharedFeePoolAuthorizedUserEvent(type: string): boolean;
export interface AddSharedFeePoolAuthorizedUserEventFields {
    signer: ToField<"address">;
    users: ToField<Vector<"address">>;
}
export type AddSharedFeePoolAuthorizedUserEventReified = Reified<AddSharedFeePoolAuthorizedUserEvent, AddSharedFeePoolAuthorizedUserEventFields>;
export declare class AddSharedFeePoolAuthorizedUserEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_fee_pool_entry::AddSharedFeePoolAuthorizedUserEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_fee_pool_entry::AddSharedFeePoolAuthorizedUserEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_fee_pool_entry::AddSharedFeePoolAuthorizedUserEvent";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly users: ToField<Vector<"address">>;
    private constructor();
    static reified(): AddSharedFeePoolAuthorizedUserEventReified;
    static get r(): reified.StructClassReified<AddSharedFeePoolAuthorizedUserEvent, AddSharedFeePoolAuthorizedUserEventFields>;
    static phantom(): PhantomReified<ToTypeStr<AddSharedFeePoolAuthorizedUserEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_fee_pool_entry::AddSharedFeePoolAuthorizedUserEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        users: string[];
    }, {
        signer: string;
        users: Iterable<string> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): AddSharedFeePoolAuthorizedUserEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): AddSharedFeePoolAuthorizedUserEvent;
    static fromBcs(data: Uint8Array): AddSharedFeePoolAuthorizedUserEvent;
    toJSONField(): {
        signer: string;
        users: string[];
    };
    toJSON(): {
        signer: string;
        users: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): AddSharedFeePoolAuthorizedUserEvent;
    static fromJSON(json: Record<string, any>): AddSharedFeePoolAuthorizedUserEvent;
    static fromSuiParsedData(content: SuiParsedData): AddSharedFeePoolAuthorizedUserEvent;
    static fetch(client: SuiClient, id: string): Promise<AddSharedFeePoolAuthorizedUserEvent>;
}
export declare function isRemoveFeePoolAuthorizedUserEvent(type: string): boolean;
export interface RemoveFeePoolAuthorizedUserEventFields {
    signer: ToField<"address">;
    users: ToField<Vector<"address">>;
}
export type RemoveFeePoolAuthorizedUserEventReified = Reified<RemoveFeePoolAuthorizedUserEvent, RemoveFeePoolAuthorizedUserEventFields>;
export declare class RemoveFeePoolAuthorizedUserEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_fee_pool_entry::RemoveFeePoolAuthorizedUserEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_fee_pool_entry::RemoveFeePoolAuthorizedUserEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_fee_pool_entry::RemoveFeePoolAuthorizedUserEvent";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly users: ToField<Vector<"address">>;
    private constructor();
    static reified(): RemoveFeePoolAuthorizedUserEventReified;
    static get r(): reified.StructClassReified<RemoveFeePoolAuthorizedUserEvent, RemoveFeePoolAuthorizedUserEventFields>;
    static phantom(): PhantomReified<ToTypeStr<RemoveFeePoolAuthorizedUserEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_fee_pool_entry::RemoveFeePoolAuthorizedUserEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        users: string[];
    }, {
        signer: string;
        users: Iterable<string> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): RemoveFeePoolAuthorizedUserEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): RemoveFeePoolAuthorizedUserEvent;
    static fromBcs(data: Uint8Array): RemoveFeePoolAuthorizedUserEvent;
    toJSONField(): {
        signer: string;
        users: string[];
    };
    toJSON(): {
        signer: string;
        users: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): RemoveFeePoolAuthorizedUserEvent;
    static fromJSON(json: Record<string, any>): RemoveFeePoolAuthorizedUserEvent;
    static fromSuiParsedData(content: SuiParsedData): RemoveFeePoolAuthorizedUserEvent;
    static fetch(client: SuiClient, id: string): Promise<RemoveFeePoolAuthorizedUserEvent>;
}
export declare function isRemoveSharedFeePoolAuthorizedUserEvent(type: string): boolean;
export interface RemoveSharedFeePoolAuthorizedUserEventFields {
    signer: ToField<"address">;
    users: ToField<Vector<"address">>;
}
export type RemoveSharedFeePoolAuthorizedUserEventReified = Reified<RemoveSharedFeePoolAuthorizedUserEvent, RemoveSharedFeePoolAuthorizedUserEventFields>;
export declare class RemoveSharedFeePoolAuthorizedUserEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_fee_pool_entry::RemoveSharedFeePoolAuthorizedUserEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_fee_pool_entry::RemoveSharedFeePoolAuthorizedUserEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_fee_pool_entry::RemoveSharedFeePoolAuthorizedUserEvent";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly users: ToField<Vector<"address">>;
    private constructor();
    static reified(): RemoveSharedFeePoolAuthorizedUserEventReified;
    static get r(): reified.StructClassReified<RemoveSharedFeePoolAuthorizedUserEvent, RemoveSharedFeePoolAuthorizedUserEventFields>;
    static phantom(): PhantomReified<ToTypeStr<RemoveSharedFeePoolAuthorizedUserEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_fee_pool_entry::RemoveSharedFeePoolAuthorizedUserEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        users: string[];
    }, {
        signer: string;
        users: Iterable<string> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): RemoveSharedFeePoolAuthorizedUserEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): RemoveSharedFeePoolAuthorizedUserEvent;
    static fromBcs(data: Uint8Array): RemoveSharedFeePoolAuthorizedUserEvent;
    toJSONField(): {
        signer: string;
        users: string[];
    };
    toJSON(): {
        signer: string;
        users: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): RemoveSharedFeePoolAuthorizedUserEvent;
    static fromJSON(json: Record<string, any>): RemoveSharedFeePoolAuthorizedUserEvent;
    static fromSuiParsedData(content: SuiParsedData): RemoveSharedFeePoolAuthorizedUserEvent;
    static fetch(client: SuiClient, id: string): Promise<RemoveSharedFeePoolAuthorizedUserEvent>;
}
export declare function isTakeFeeEvent(type: string): boolean;
export interface TakeFeeEventFields {
    signer: ToField<"address">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
}
export type TakeFeeEventReified = Reified<TakeFeeEvent, TakeFeeEventFields>;
export declare class TakeFeeEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_fee_pool_entry::TakeFeeEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_fee_pool_entry::TakeFeeEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_fee_pool_entry::TakeFeeEvent";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;
    private constructor();
    static reified(): TakeFeeEventReified;
    static get r(): reified.StructClassReified<TakeFeeEvent, TakeFeeEventFields>;
    static phantom(): PhantomReified<ToTypeStr<TakeFeeEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_fee_pool_entry::TakeFeeEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        token: {
            name: {
                bytes: number[];
            };
        };
        amount: string;
    }, {
        signer: string;
        token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        amount: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): TakeFeeEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): TakeFeeEvent;
    static fromBcs(data: Uint8Array): TakeFeeEvent;
    toJSONField(): {
        signer: string;
        token: {
            name: string;
        };
        amount: string;
    };
    toJSON(): {
        signer: string;
        token: {
            name: string;
        };
        amount: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): TakeFeeEvent;
    static fromJSON(json: Record<string, any>): TakeFeeEvent;
    static fromSuiParsedData(content: SuiParsedData): TakeFeeEvent;
    static fetch(client: SuiClient, id: string): Promise<TakeFeeEvent>;
}
export declare function isTakeSharedFeeEvent(type: string): boolean;
export interface TakeSharedFeeEventFields {
    signer: ToField<"address">;
    key: ToField<Vector<"u8">>;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
}
export type TakeSharedFeeEventReified = Reified<TakeSharedFeeEvent, TakeSharedFeeEventFields>;
export declare class TakeSharedFeeEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_fee_pool_entry::TakeSharedFeeEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_fee_pool_entry::TakeSharedFeeEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_fee_pool_entry::TakeSharedFeeEvent";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly key: ToField<Vector<"u8">>;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;
    private constructor();
    static reified(): TakeSharedFeeEventReified;
    static get r(): reified.StructClassReified<TakeSharedFeeEvent, TakeSharedFeeEventFields>;
    static phantom(): PhantomReified<ToTypeStr<TakeSharedFeeEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_fee_pool_entry::TakeSharedFeeEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        key: number[];
        token: {
            name: {
                bytes: number[];
            };
        };
        amount: string;
    }, {
        signer: string;
        key: Iterable<number> & {
            length: number;
        };
        token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        amount: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): TakeSharedFeeEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): TakeSharedFeeEvent;
    static fromBcs(data: Uint8Array): TakeSharedFeeEvent;
    toJSONField(): {
        signer: string;
        key: number[];
        token: {
            name: string;
        };
        amount: string;
    };
    toJSON(): {
        signer: string;
        key: number[];
        token: {
            name: string;
        };
        amount: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): TakeSharedFeeEvent;
    static fromJSON(json: Record<string, any>): TakeSharedFeeEvent;
    static fromSuiParsedData(content: SuiParsedData): TakeSharedFeeEvent;
    static fetch(client: SuiClient, id: string): Promise<TakeSharedFeeEvent>;
}
