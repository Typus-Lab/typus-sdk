import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { ExternalAddress } from "../../0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e/external-address/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isDataSource(type: string): boolean;
export interface DataSourceFields {
    emitterChain: ToField<"u64">;
    emitterAddress: ToField<ExternalAddress>;
}
export type DataSourceReified = Reified<DataSource, DataSourceFields>;
export declare class DataSource implements StructClass {
    static readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::data_source::DataSource";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::data_source::DataSource";
    readonly $fullTypeName: "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::data_source::DataSource";
    readonly $typeArgs: [];
    readonly emitterChain: ToField<"u64">;
    readonly emitterAddress: ToField<ExternalAddress>;
    private constructor();
    static reified(): DataSourceReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<DataSource, DataSourceFields>;
    static phantom(): PhantomReified<ToTypeStr<DataSource>>;
    static get p(): PhantomReified<"0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::data_source::DataSource">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        emitter_chain: string;
        emitter_address: {
            value: {
                data: number[];
            };
        };
    }, {
        emitter_chain: string | number | bigint;
        emitter_address: {
            value: {
                data: Iterable<number> & {
                    length: number;
                };
            };
        };
    }>;
    static fromFields(fields: Record<string, any>): DataSource;
    static fromFieldsWithTypes(item: FieldsWithTypes): DataSource;
    static fromBcs(data: Uint8Array): DataSource;
    toJSONField(): {
        emitterChain: string;
        emitterAddress: {
            value: {
                data: number[];
            };
        };
    };
    toJSON(): {
        emitterChain: string;
        emitterAddress: {
            value: {
                data: number[];
            };
        };
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): DataSource;
    static fromJSON(json: Record<string, any>): DataSource;
    static fromSuiParsedData(content: SuiParsedData): DataSource;
    static fetch(client: SuiClient, id: string): Promise<DataSource>;
}
