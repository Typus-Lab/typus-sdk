import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { ID } from "../../0x2/object/structs";
import { Bytes32 } from "../../0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e/bytes32/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isContractUpgraded(type: string): boolean;
export interface ContractUpgradedFields {
    oldContract: ToField<ID>;
    newContract: ToField<ID>;
}
export type ContractUpgradedReified = Reified<ContractUpgraded, ContractUpgradedFields>;
export declare class ContractUpgraded implements StructClass {
    static readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::contract_upgrade::ContractUpgraded";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::contract_upgrade::ContractUpgraded";
    readonly $fullTypeName: "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::contract_upgrade::ContractUpgraded";
    readonly $typeArgs: [];
    readonly oldContract: ToField<ID>;
    readonly newContract: ToField<ID>;
    private constructor();
    static reified(): ContractUpgradedReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<ContractUpgraded, ContractUpgradedFields>;
    static phantom(): PhantomReified<ToTypeStr<ContractUpgraded>>;
    static get p(): PhantomReified<"0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::contract_upgrade::ContractUpgraded">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        old_contract: {
            bytes: string;
        };
        new_contract: {
            bytes: string;
        };
    }, {
        old_contract: {
            bytes: string;
        };
        new_contract: {
            bytes: string;
        };
    }>;
    static fromFields(fields: Record<string, any>): ContractUpgraded;
    static fromFieldsWithTypes(item: FieldsWithTypes): ContractUpgraded;
    static fromBcs(data: Uint8Array): ContractUpgraded;
    toJSONField(): {
        oldContract: string;
        newContract: string;
    };
    toJSON(): {
        oldContract: string;
        newContract: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): ContractUpgraded;
    static fromJSON(json: Record<string, any>): ContractUpgraded;
    static fromSuiParsedData(content: SuiParsedData): ContractUpgraded;
    static fetch(client: SuiClient, id: string): Promise<ContractUpgraded>;
}
export declare function isUpgradeContract(type: string): boolean;
export interface UpgradeContractFields {
    digest: ToField<Bytes32>;
}
export type UpgradeContractReified = Reified<UpgradeContract, UpgradeContractFields>;
export declare class UpgradeContract implements StructClass {
    static readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::contract_upgrade::UpgradeContract";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::contract_upgrade::UpgradeContract";
    readonly $fullTypeName: "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::contract_upgrade::UpgradeContract";
    readonly $typeArgs: [];
    readonly digest: ToField<Bytes32>;
    private constructor();
    static reified(): UpgradeContractReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<UpgradeContract, UpgradeContractFields>;
    static phantom(): PhantomReified<ToTypeStr<UpgradeContract>>;
    static get p(): PhantomReified<"0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::contract_upgrade::UpgradeContract">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        digest: {
            data: number[];
        };
    }, {
        digest: {
            data: Iterable<number> & {
                length: number;
            };
        };
    }>;
    static fromFields(fields: Record<string, any>): UpgradeContract;
    static fromFieldsWithTypes(item: FieldsWithTypes): UpgradeContract;
    static fromBcs(data: Uint8Array): UpgradeContract;
    toJSONField(): {
        digest: {
            data: number[];
        };
    };
    toJSON(): {
        digest: {
            data: number[];
        };
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): UpgradeContract;
    static fromJSON(json: Record<string, any>): UpgradeContract;
    static fromSuiParsedData(content: SuiParsedData): UpgradeContract;
    static fetch(client: SuiClient, id: string): Promise<UpgradeContract>;
}
