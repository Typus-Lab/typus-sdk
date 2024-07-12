import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { ExternalAddress } from "../../0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e/external-address/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isGovernanceDataSource(type: string): boolean;
export interface GovernanceDataSourceFields {
    emitterChainId: ToField<"u64">;
    emitterAddress: ToField<ExternalAddress>;
    initialSequence: ToField<"u64">;
}
export type GovernanceDataSourceReified = Reified<GovernanceDataSource, GovernanceDataSourceFields>;
export declare class GovernanceDataSource implements StructClass {
    static readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::set_governance_data_source::GovernanceDataSource";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::set_governance_data_source::GovernanceDataSource";
    readonly $fullTypeName: "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::set_governance_data_source::GovernanceDataSource";
    readonly $typeArgs: [];
    readonly emitterChainId: ToField<"u64">;
    readonly emitterAddress: ToField<ExternalAddress>;
    readonly initialSequence: ToField<"u64">;
    private constructor();
    static reified(): GovernanceDataSourceReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<GovernanceDataSource, GovernanceDataSourceFields>;
    static phantom(): PhantomReified<ToTypeStr<GovernanceDataSource>>;
    static get p(): PhantomReified<"0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::set_governance_data_source::GovernanceDataSource">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        emitter_chain_id: string;
        emitter_address: {
            value: {
                data: number[];
            };
        };
        initial_sequence: string;
    }, {
        emitter_chain_id: string | number | bigint;
        emitter_address: {
            value: {
                data: Iterable<number> & {
                    length: number;
                };
            };
        };
        initial_sequence: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): GovernanceDataSource;
    static fromFieldsWithTypes(item: FieldsWithTypes): GovernanceDataSource;
    static fromBcs(data: Uint8Array): GovernanceDataSource;
    toJSONField(): {
        emitterChainId: string;
        emitterAddress: {
            value: {
                data: number[];
            };
        };
        initialSequence: string;
    };
    toJSON(): {
        emitterChainId: string;
        emitterAddress: {
            value: {
                data: number[];
            };
        };
        initialSequence: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): GovernanceDataSource;
    static fromJSON(json: Record<string, any>): GovernanceDataSource;
    static fromSuiParsedData(content: SuiParsedData): GovernanceDataSource;
    static fetch(client: SuiClient, id: string): Promise<GovernanceDataSource>;
}
