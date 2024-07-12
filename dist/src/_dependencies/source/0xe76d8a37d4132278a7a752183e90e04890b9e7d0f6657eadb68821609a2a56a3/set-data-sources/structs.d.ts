import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, Vector } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { DataSource } from "../data-source/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isDataSources(type: string): boolean;
export interface DataSourcesFields {
    sources: ToField<Vector<DataSource>>;
}
export type DataSourcesReified = Reified<DataSources, DataSourcesFields>;
export declare class DataSources implements StructClass {
    static readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::set_data_sources::DataSources";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::set_data_sources::DataSources";
    readonly $fullTypeName: "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::set_data_sources::DataSources";
    readonly $typeArgs: [];
    readonly sources: ToField<Vector<DataSource>>;
    private constructor();
    static reified(): DataSourcesReified;
    static get r(): reified.StructClassReified<DataSources, DataSourcesFields>;
    static phantom(): PhantomReified<ToTypeStr<DataSources>>;
    static get p(): reified.PhantomReified<"0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::set_data_sources::DataSources">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        sources: {
            emitter_chain: string;
            emitter_address: {
                value: {
                    data: number[];
                };
            };
        }[];
    }, {
        sources: Iterable<{
            emitter_chain: string | number | bigint;
            emitter_address: {
                value: {
                    data: Iterable<number> & {
                        length: number;
                    };
                };
            };
        }> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): DataSources;
    static fromFieldsWithTypes(item: FieldsWithTypes): DataSources;
    static fromBcs(data: Uint8Array): DataSources;
    toJSONField(): {
        sources: {
            emitterChain: string;
            emitterAddress: {
                value: {
                    data: number[];
                };
            };
        }[];
    };
    toJSON(): {
        sources: {
            emitterChain: string;
            emitterAddress: {
                value: {
                    data: number[];
                };
            };
        }[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): DataSources;
    static fromJSON(json: Record<string, any>): DataSources;
    static fromSuiParsedData(content: SuiParsedData): DataSources;
    static fetch(client: SuiClient, id: string): Promise<DataSources>;
}
