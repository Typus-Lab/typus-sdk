import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { UID } from "../object/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isClock(type: string): boolean;
export interface ClockFields {
    id: ToField<UID>;
    timestampMs: ToField<"u64">;
}
export type ClockReified = Reified<Clock, ClockFields>;
export declare class Clock implements StructClass {
    static readonly $typeName = "0x2::clock::Clock";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x2::clock::Clock";
    readonly $fullTypeName: "0x2::clock::Clock";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly timestampMs: ToField<"u64">;
    private constructor();
    static reified(): ClockReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<Clock, ClockFields>;
    static phantom(): PhantomReified<ToTypeStr<Clock>>;
    static get p(): PhantomReified<"0x2::clock::Clock">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        timestamp_ms: string;
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        timestamp_ms: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): Clock;
    static fromFieldsWithTypes(item: FieldsWithTypes): Clock;
    static fromBcs(data: Uint8Array): Clock;
    toJSONField(): {
        id: string;
        timestampMs: string;
    };
    toJSON(): {
        id: string;
        timestampMs: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Clock;
    static fromJSON(json: Record<string, any>): Clock;
    static fromSuiParsedData(content: SuiParsedData): Clock;
    static fetch(client: SuiClient, id: string): Promise<Clock>;
}
