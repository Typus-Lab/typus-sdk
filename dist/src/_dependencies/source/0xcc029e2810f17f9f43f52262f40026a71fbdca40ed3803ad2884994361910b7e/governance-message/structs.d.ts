import * as reified from "../../../../_framework/reified";
import { PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, Vector } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { Bytes32 } from "../bytes32/structs";
import { ExternalAddress } from "../external-address/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isDecreeReceipt(type: string): boolean;
export interface DecreeReceiptFields<T extends PhantomTypeArgument> {
    payload: ToField<Vector<"u8">>;
    digest: ToField<Bytes32>;
    sequence: ToField<"u64">;
}
export type DecreeReceiptReified<T extends PhantomTypeArgument> = Reified<DecreeReceipt<T>, DecreeReceiptFields<T>>;
export declare class DecreeReceipt<T extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::governance_message::DecreeReceipt";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::governance_message::DecreeReceipt";
    readonly $fullTypeName: `0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::governance_message::DecreeReceipt<${PhantomToTypeStr<T>}>`;
    readonly $typeArgs: [PhantomToTypeStr<T>];
    readonly payload: ToField<Vector<"u8">>;
    readonly digest: ToField<Bytes32>;
    readonly sequence: ToField<"u64">;
    private constructor();
    static reified<T extends PhantomReified<PhantomTypeArgument>>(T: T): DecreeReceiptReified<ToPhantomTypeArgument<T>>;
    static get r(): typeof DecreeReceipt.reified;
    static phantom<T extends PhantomReified<PhantomTypeArgument>>(T: T): PhantomReified<ToTypeStr<DecreeReceipt<ToPhantomTypeArgument<T>>>>;
    static get p(): typeof DecreeReceipt.phantom;
    static get bcs(): import("@mysten/bcs").BcsType<{
        payload: number[];
        digest: {
            data: number[];
        };
        sequence: string;
    }, {
        payload: Iterable<number> & {
            length: number;
        };
        digest: {
            data: Iterable<number> & {
                length: number;
            };
        };
        sequence: string | number | bigint;
    }>;
    static fromFields<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, fields: Record<string, any>): DecreeReceipt<ToPhantomTypeArgument<T>>;
    static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, item: FieldsWithTypes): DecreeReceipt<ToPhantomTypeArgument<T>>;
    static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, data: Uint8Array): DecreeReceipt<ToPhantomTypeArgument<T>>;
    toJSONField(): {
        payload: number[];
        digest: {
            data: number[];
        };
        sequence: string;
    };
    toJSON(): {
        payload: number[];
        digest: {
            data: number[];
        };
        sequence: string;
        $typeName: string;
        $typeArgs: [reified.PhantomToTypeStr<T>];
    };
    static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, field: any): DecreeReceipt<ToPhantomTypeArgument<T>>;
    static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, json: Record<string, any>): DecreeReceipt<ToPhantomTypeArgument<T>>;
    static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, content: SuiParsedData): DecreeReceipt<ToPhantomTypeArgument<T>>;
    static fetch<T extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: T, id: string): Promise<DecreeReceipt<ToPhantomTypeArgument<T>>>;
}
export declare function isDecreeTicket(type: string): boolean;
export interface DecreeTicketFields<T extends PhantomTypeArgument> {
    governanceChain: ToField<"u16">;
    governanceContract: ToField<ExternalAddress>;
    moduleName: ToField<Bytes32>;
    action: ToField<"u8">;
    global: ToField<"bool">;
}
export type DecreeTicketReified<T extends PhantomTypeArgument> = Reified<DecreeTicket<T>, DecreeTicketFields<T>>;
export declare class DecreeTicket<T extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::governance_message::DecreeTicket";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::governance_message::DecreeTicket";
    readonly $fullTypeName: `0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::governance_message::DecreeTicket<${PhantomToTypeStr<T>}>`;
    readonly $typeArgs: [PhantomToTypeStr<T>];
    readonly governanceChain: ToField<"u16">;
    readonly governanceContract: ToField<ExternalAddress>;
    readonly moduleName: ToField<Bytes32>;
    readonly action: ToField<"u8">;
    readonly global: ToField<"bool">;
    private constructor();
    static reified<T extends PhantomReified<PhantomTypeArgument>>(T: T): DecreeTicketReified<ToPhantomTypeArgument<T>>;
    static get r(): typeof DecreeTicket.reified;
    static phantom<T extends PhantomReified<PhantomTypeArgument>>(T: T): PhantomReified<ToTypeStr<DecreeTicket<ToPhantomTypeArgument<T>>>>;
    static get p(): typeof DecreeTicket.phantom;
    static get bcs(): import("@mysten/bcs").BcsType<{
        governance_chain: number;
        governance_contract: {
            value: {
                data: number[];
            };
        };
        module_name: {
            data: number[];
        };
        action: number;
        global: boolean;
    }, {
        governance_chain: number;
        governance_contract: {
            value: {
                data: Iterable<number> & {
                    length: number;
                };
            };
        };
        module_name: {
            data: Iterable<number> & {
                length: number;
            };
        };
        action: number;
        global: boolean;
    }>;
    static fromFields<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, fields: Record<string, any>): DecreeTicket<ToPhantomTypeArgument<T>>;
    static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, item: FieldsWithTypes): DecreeTicket<ToPhantomTypeArgument<T>>;
    static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, data: Uint8Array): DecreeTicket<ToPhantomTypeArgument<T>>;
    toJSONField(): {
        governanceChain: number;
        governanceContract: {
            value: {
                data: number[];
            };
        };
        moduleName: {
            data: number[];
        };
        action: number;
        global: boolean;
    };
    toJSON(): {
        governanceChain: number;
        governanceContract: {
            value: {
                data: number[];
            };
        };
        moduleName: {
            data: number[];
        };
        action: number;
        global: boolean;
        $typeName: string;
        $typeArgs: [reified.PhantomToTypeStr<T>];
    };
    static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, field: any): DecreeTicket<ToPhantomTypeArgument<T>>;
    static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, json: Record<string, any>): DecreeTicket<ToPhantomTypeArgument<T>>;
    static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, content: SuiParsedData): DecreeTicket<ToPhantomTypeArgument<T>>;
    static fetch<T extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: T, id: string): Promise<DecreeTicket<ToPhantomTypeArgument<T>>>;
}
