import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, ToTypeStr as ToPhantom } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { Bytes32 } from "../bytes32/structs";
import { Set } from "../set/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isConsumedVAAs(type: string): boolean;
export interface ConsumedVAAsFields {
    hashes: ToField<Set<ToPhantom<Bytes32>>>;
}
export type ConsumedVAAsReified = Reified<ConsumedVAAs, ConsumedVAAsFields>;
export declare class ConsumedVAAs implements StructClass {
    static readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::consumed_vaas::ConsumedVAAs";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::consumed_vaas::ConsumedVAAs";
    readonly $fullTypeName: "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::consumed_vaas::ConsumedVAAs";
    readonly $typeArgs: [];
    readonly hashes: ToField<Set<ToPhantom<Bytes32>>>;
    private constructor();
    static reified(): ConsumedVAAsReified;
    static get r(): reified.StructClassReified<ConsumedVAAs, ConsumedVAAsFields>;
    static phantom(): PhantomReified<ToTypeStr<ConsumedVAAs>>;
    static get p(): reified.PhantomReified<"0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::consumed_vaas::ConsumedVAAs">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        hashes: {
            items: {
                id: {
                    id: {
                        bytes: string;
                    };
                };
                size: string;
            };
        };
    }, {
        hashes: {
            items: {
                id: {
                    id: {
                        bytes: string;
                    };
                };
                size: string | number | bigint;
            };
        };
    }>;
    static fromFields(fields: Record<string, any>): ConsumedVAAs;
    static fromFieldsWithTypes(item: FieldsWithTypes): ConsumedVAAs;
    static fromBcs(data: Uint8Array): ConsumedVAAs;
    toJSONField(): {
        hashes: {
            items: {
                id: string;
                size: string;
            };
        };
    };
    toJSON(): {
        hashes: {
            items: {
                id: string;
                size: string;
            };
        };
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): ConsumedVAAs;
    static fromJSON(json: Record<string, any>): ConsumedVAAs;
    static fromSuiParsedData(content: SuiParsedData): ConsumedVAAs;
    static fetch(client: SuiClient, id: string): Promise<ConsumedVAAs>;
}
