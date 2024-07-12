import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, Vector } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { ID } from "../../0x2/object/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isMessageTicket(type: string): boolean;
export interface MessageTicketFields {
    sender: ToField<ID>;
    sequence: ToField<"u64">;
    nonce: ToField<"u32">;
    payload: ToField<Vector<"u8">>;
}
export type MessageTicketReified = Reified<MessageTicket, MessageTicketFields>;
export declare class MessageTicket implements StructClass {
    static readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::publish_message::MessageTicket";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::publish_message::MessageTicket";
    readonly $fullTypeName: "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::publish_message::MessageTicket";
    readonly $typeArgs: [];
    readonly sender: ToField<ID>;
    readonly sequence: ToField<"u64">;
    readonly nonce: ToField<"u32">;
    readonly payload: ToField<Vector<"u8">>;
    private constructor();
    static reified(): MessageTicketReified;
    static get r(): reified.StructClassReified<MessageTicket, MessageTicketFields>;
    static phantom(): PhantomReified<ToTypeStr<MessageTicket>>;
    static get p(): reified.PhantomReified<"0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::publish_message::MessageTicket">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        sender: {
            bytes: string;
        };
        sequence: string;
        nonce: number;
        payload: number[];
    }, {
        sender: {
            bytes: string;
        };
        sequence: string | number | bigint;
        nonce: number;
        payload: Iterable<number> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): MessageTicket;
    static fromFieldsWithTypes(item: FieldsWithTypes): MessageTicket;
    static fromBcs(data: Uint8Array): MessageTicket;
    toJSONField(): {
        sender: string;
        sequence: string;
        nonce: number;
        payload: number[];
    };
    toJSON(): {
        sender: string;
        sequence: string;
        nonce: number;
        payload: number[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): MessageTicket;
    static fromJSON(json: Record<string, any>): MessageTicket;
    static fromSuiParsedData(content: SuiParsedData): MessageTicket;
    static fetch(client: SuiClient, id: string): Promise<MessageTicket>;
}
export declare function isWormholeMessage(type: string): boolean;
export interface WormholeMessageFields {
    sender: ToField<ID>;
    sequence: ToField<"u64">;
    nonce: ToField<"u32">;
    payload: ToField<Vector<"u8">>;
    consistencyLevel: ToField<"u8">;
    timestamp: ToField<"u64">;
}
export type WormholeMessageReified = Reified<WormholeMessage, WormholeMessageFields>;
export declare class WormholeMessage implements StructClass {
    static readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::publish_message::WormholeMessage";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::publish_message::WormholeMessage";
    readonly $fullTypeName: "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::publish_message::WormholeMessage";
    readonly $typeArgs: [];
    readonly sender: ToField<ID>;
    readonly sequence: ToField<"u64">;
    readonly nonce: ToField<"u32">;
    readonly payload: ToField<Vector<"u8">>;
    readonly consistencyLevel: ToField<"u8">;
    readonly timestamp: ToField<"u64">;
    private constructor();
    static reified(): WormholeMessageReified;
    static get r(): reified.StructClassReified<WormholeMessage, WormholeMessageFields>;
    static phantom(): PhantomReified<ToTypeStr<WormholeMessage>>;
    static get p(): reified.PhantomReified<"0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::publish_message::WormholeMessage">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        sender: {
            bytes: string;
        };
        sequence: string;
        nonce: number;
        payload: number[];
        consistency_level: number;
        timestamp: string;
    }, {
        sender: {
            bytes: string;
        };
        sequence: string | number | bigint;
        nonce: number;
        payload: Iterable<number> & {
            length: number;
        };
        consistency_level: number;
        timestamp: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): WormholeMessage;
    static fromFieldsWithTypes(item: FieldsWithTypes): WormholeMessage;
    static fromBcs(data: Uint8Array): WormholeMessage;
    toJSONField(): {
        sender: string;
        sequence: string;
        nonce: number;
        payload: number[];
        consistencyLevel: number;
        timestamp: string;
    };
    toJSON(): {
        sender: string;
        sequence: string;
        nonce: number;
        payload: number[];
        consistencyLevel: number;
        timestamp: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): WormholeMessage;
    static fromJSON(json: Record<string, any>): WormholeMessage;
    static fromSuiParsedData(content: SuiParsedData): WormholeMessage;
    static fetch(client: SuiClient, id: string): Promise<WormholeMessage>;
}
