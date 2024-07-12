import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, Vector } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { UID } from "../../0x2/object/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isQuote(type: string): boolean;
export interface QuoteFields {
    id: ToField<UID>;
    nodeAddr: ToField<"address">;
    nodeAuthority: ToField<"address">;
    queueAddr: ToField<"address">;
    quoteBuffer: ToField<Vector<"u8">>;
    verificationStatus: ToField<"u8">;
    verificationTimestamp: ToField<"u64">;
    validUntil: ToField<"u64">;
    contentHashEnabled: ToField<"bool">;
    friendKey: ToField<Vector<"u8">>;
    version: ToField<"u64">;
}
export type QuoteReified = Reified<Quote, QuoteFields>;
export declare class Quote implements StructClass {
    static readonly $typeName = "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::quote::Quote";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::quote::Quote";
    readonly $fullTypeName: "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::quote::Quote";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly nodeAddr: ToField<"address">;
    readonly nodeAuthority: ToField<"address">;
    readonly queueAddr: ToField<"address">;
    readonly quoteBuffer: ToField<Vector<"u8">>;
    readonly verificationStatus: ToField<"u8">;
    readonly verificationTimestamp: ToField<"u64">;
    readonly validUntil: ToField<"u64">;
    readonly contentHashEnabled: ToField<"bool">;
    readonly friendKey: ToField<Vector<"u8">>;
    readonly version: ToField<"u64">;
    private constructor();
    static reified(): QuoteReified;
    static get r(): reified.StructClassReified<Quote, QuoteFields>;
    static phantom(): PhantomReified<ToTypeStr<Quote>>;
    static get p(): reified.PhantomReified<"0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::quote::Quote">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        node_addr: string;
        node_authority: string;
        queue_addr: string;
        quote_buffer: number[];
        verification_status: number;
        verification_timestamp: string;
        valid_until: string;
        content_hash_enabled: boolean;
        friend_key: number[];
        version: string;
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        node_addr: string;
        node_authority: string;
        queue_addr: string;
        quote_buffer: Iterable<number> & {
            length: number;
        };
        verification_status: number;
        verification_timestamp: string | number | bigint;
        valid_until: string | number | bigint;
        content_hash_enabled: boolean;
        friend_key: Iterable<number> & {
            length: number;
        };
        version: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): Quote;
    static fromFieldsWithTypes(item: FieldsWithTypes): Quote;
    static fromBcs(data: Uint8Array): Quote;
    toJSONField(): {
        id: string;
        nodeAddr: string;
        nodeAuthority: string;
        queueAddr: string;
        quoteBuffer: number[];
        verificationStatus: number;
        verificationTimestamp: string;
        validUntil: string;
        contentHashEnabled: boolean;
        friendKey: number[];
        version: string;
    };
    toJSON(): {
        id: string;
        nodeAddr: string;
        nodeAuthority: string;
        queueAddr: string;
        quoteBuffer: number[];
        verificationStatus: number;
        verificationTimestamp: string;
        validUntil: string;
        contentHashEnabled: boolean;
        friendKey: number[];
        version: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Quote;
    static fromJSON(json: Record<string, any>): Quote;
    static fromSuiParsedData(content: SuiParsedData): Quote;
    static fetch(client: SuiClient, id: string): Promise<Quote>;
}
