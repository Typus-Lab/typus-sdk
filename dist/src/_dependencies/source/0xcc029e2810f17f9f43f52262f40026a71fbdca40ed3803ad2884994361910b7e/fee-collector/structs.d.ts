import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, ToTypeStr as ToPhantom } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { Balance } from "../../0x2/balance/structs";
import { SUI } from "../../0x2/sui/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isFeeCollector(type: string): boolean;
export interface FeeCollectorFields {
    feeAmount: ToField<"u64">;
    balance: ToField<Balance<ToPhantom<SUI>>>;
}
export type FeeCollectorReified = Reified<FeeCollector, FeeCollectorFields>;
export declare class FeeCollector implements StructClass {
    static readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::fee_collector::FeeCollector";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::fee_collector::FeeCollector";
    readonly $fullTypeName: "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::fee_collector::FeeCollector";
    readonly $typeArgs: [];
    readonly feeAmount: ToField<"u64">;
    readonly balance: ToField<Balance<ToPhantom<SUI>>>;
    private constructor();
    static reified(): FeeCollectorReified;
    static get r(): reified.StructClassReified<FeeCollector, FeeCollectorFields>;
    static phantom(): PhantomReified<ToTypeStr<FeeCollector>>;
    static get p(): reified.PhantomReified<"0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::fee_collector::FeeCollector">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        fee_amount: string;
        balance: {
            value: string;
        };
    }, {
        fee_amount: string | number | bigint;
        balance: {
            value: string | number | bigint;
        };
    }>;
    static fromFields(fields: Record<string, any>): FeeCollector;
    static fromFieldsWithTypes(item: FieldsWithTypes): FeeCollector;
    static fromBcs(data: Uint8Array): FeeCollector;
    toJSONField(): {
        feeAmount: string;
        balance: {
            value: string;
        };
    };
    toJSON(): {
        feeAmount: string;
        balance: {
            value: string;
        };
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): FeeCollector;
    static fromJSON(json: Record<string, any>): FeeCollector;
    static fromSuiParsedData(content: SuiParsedData): FeeCollector;
    static fetch(client: SuiClient, id: string): Promise<FeeCollector>;
}
