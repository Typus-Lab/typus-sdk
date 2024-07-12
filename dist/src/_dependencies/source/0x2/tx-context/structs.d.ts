import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, Vector } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isTxContext(type: string): boolean;
export interface TxContextFields {
    sender: ToField<"address">;
    txHash: ToField<Vector<"u8">>;
    epoch: ToField<"u64">;
    epochTimestampMs: ToField<"u64">;
    idsCreated: ToField<"u64">;
}
export type TxContextReified = Reified<TxContext, TxContextFields>;
export declare class TxContext implements StructClass {
    static readonly $typeName = "0x2::tx_context::TxContext";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x2::tx_context::TxContext";
    readonly $fullTypeName: "0x2::tx_context::TxContext";
    readonly $typeArgs: [];
    readonly sender: ToField<"address">;
    readonly txHash: ToField<Vector<"u8">>;
    readonly epoch: ToField<"u64">;
    readonly epochTimestampMs: ToField<"u64">;
    readonly idsCreated: ToField<"u64">;
    private constructor();
    static reified(): TxContextReified;
    static get r(): reified.StructClassReified<TxContext, TxContextFields>;
    static phantom(): PhantomReified<ToTypeStr<TxContext>>;
    static get p(): reified.PhantomReified<"0x2::tx_context::TxContext">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        sender: string;
        tx_hash: number[];
        epoch: string;
        epoch_timestamp_ms: string;
        ids_created: string;
    }, {
        sender: string;
        tx_hash: Iterable<number> & {
            length: number;
        };
        epoch: string | number | bigint;
        epoch_timestamp_ms: string | number | bigint;
        ids_created: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): TxContext;
    static fromFieldsWithTypes(item: FieldsWithTypes): TxContext;
    static fromBcs(data: Uint8Array): TxContext;
    toJSONField(): {
        sender: string;
        txHash: number[];
        epoch: string;
        epochTimestampMs: string;
        idsCreated: string;
    };
    toJSON(): {
        sender: string;
        txHash: number[];
        epoch: string;
        epochTimestampMs: string;
        idsCreated: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): TxContext;
    static fromJSON(json: Record<string, any>): TxContext;
    static fromSuiParsedData(content: SuiParsedData): TxContext;
    static fetch(client: SuiClient, id: string): Promise<TxContext>;
}
