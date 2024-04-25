import {
    PhantomReified,
    Reified,
    StructClass,
    ToField,
    ToTypeStr,
    decodeFromFields,
    decodeFromFieldsWithTypes,
    decodeFromJSONField,
    phantom,
} from "../../../../_framework/reified";
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../../../_framework/util";
import { ID } from "../../0x2/object/structs";
import { Bytes32 } from "../bytes32/structs";
import { bcs, fromB64 } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";

/* ============================== ContractUpgraded =============================== */

export function isContractUpgraded(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::upgrade_contract::ContractUpgraded";
}

export interface ContractUpgradedFields {
    oldContract: ToField<ID>;
    newContract: ToField<ID>;
}

export type ContractUpgradedReified = Reified<ContractUpgraded, ContractUpgradedFields>;

export class ContractUpgraded implements StructClass {
    static readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::upgrade_contract::ContractUpgraded";
    static readonly $numTypeParams = 0;

    readonly $typeName = ContractUpgraded.$typeName;

    readonly $fullTypeName: "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::upgrade_contract::ContractUpgraded";

    readonly $typeArgs: [];

    readonly oldContract: ToField<ID>;
    readonly newContract: ToField<ID>;

    private constructor(typeArgs: [], fields: ContractUpgradedFields) {
        this.$fullTypeName = composeSuiType(
            ContractUpgraded.$typeName,
            ...typeArgs
        ) as "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::upgrade_contract::ContractUpgraded";
        this.$typeArgs = typeArgs;

        this.oldContract = fields.oldContract;
        this.newContract = fields.newContract;
    }

    static reified(): ContractUpgradedReified {
        return {
            typeName: ContractUpgraded.$typeName,
            fullTypeName: composeSuiType(
                ContractUpgraded.$typeName,
                ...[]
            ) as "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::upgrade_contract::ContractUpgraded",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => ContractUpgraded.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => ContractUpgraded.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => ContractUpgraded.fromBcs(data),
            bcs: ContractUpgraded.bcs,
            fromJSONField: (field: any) => ContractUpgraded.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => ContractUpgraded.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => ContractUpgraded.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => ContractUpgraded.fetch(client, id),
            new: (fields: ContractUpgradedFields) => {
                return new ContractUpgraded([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return ContractUpgraded.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<ContractUpgraded>> {
        return phantom(ContractUpgraded.reified());
    }
    static get p() {
        return ContractUpgraded.phantom();
    }

    static get bcs() {
        return bcs.struct("ContractUpgraded", {
            old_contract: ID.bcs,
            new_contract: ID.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): ContractUpgraded {
        return ContractUpgraded.reified().new({
            oldContract: decodeFromFields(ID.reified(), fields.old_contract),
            newContract: decodeFromFields(ID.reified(), fields.new_contract),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): ContractUpgraded {
        if (!isContractUpgraded(item.type)) {
            throw new Error("not a ContractUpgraded type");
        }

        return ContractUpgraded.reified().new({
            oldContract: decodeFromFieldsWithTypes(ID.reified(), item.fields.old_contract),
            newContract: decodeFromFieldsWithTypes(ID.reified(), item.fields.new_contract),
        });
    }

    static fromBcs(data: Uint8Array): ContractUpgraded {
        return ContractUpgraded.fromFields(ContractUpgraded.bcs.parse(data));
    }

    toJSONField() {
        return {
            oldContract: this.oldContract,
            newContract: this.newContract,
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): ContractUpgraded {
        return ContractUpgraded.reified().new({
            oldContract: decodeFromJSONField(ID.reified(), field.oldContract),
            newContract: decodeFromJSONField(ID.reified(), field.newContract),
        });
    }

    static fromJSON(json: Record<string, any>): ContractUpgraded {
        if (json.$typeName !== ContractUpgraded.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return ContractUpgraded.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): ContractUpgraded {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isContractUpgraded(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a ContractUpgraded object`);
        }
        return ContractUpgraded.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<ContractUpgraded> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching ContractUpgraded object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isContractUpgraded(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ContractUpgraded object`);
        }
        return ContractUpgraded.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== GovernanceWitness =============================== */

export function isGovernanceWitness(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::upgrade_contract::GovernanceWitness";
}

export interface GovernanceWitnessFields {
    dummyField: ToField<"bool">;
}

export type GovernanceWitnessReified = Reified<GovernanceWitness, GovernanceWitnessFields>;

export class GovernanceWitness implements StructClass {
    static readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::upgrade_contract::GovernanceWitness";
    static readonly $numTypeParams = 0;

    readonly $typeName = GovernanceWitness.$typeName;

    readonly $fullTypeName: "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::upgrade_contract::GovernanceWitness";

    readonly $typeArgs: [];

    readonly dummyField: ToField<"bool">;

    private constructor(typeArgs: [], fields: GovernanceWitnessFields) {
        this.$fullTypeName = composeSuiType(
            GovernanceWitness.$typeName,
            ...typeArgs
        ) as "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::upgrade_contract::GovernanceWitness";
        this.$typeArgs = typeArgs;

        this.dummyField = fields.dummyField;
    }

    static reified(): GovernanceWitnessReified {
        return {
            typeName: GovernanceWitness.$typeName,
            fullTypeName: composeSuiType(
                GovernanceWitness.$typeName,
                ...[]
            ) as "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::upgrade_contract::GovernanceWitness",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => GovernanceWitness.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => GovernanceWitness.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => GovernanceWitness.fromBcs(data),
            bcs: GovernanceWitness.bcs,
            fromJSONField: (field: any) => GovernanceWitness.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => GovernanceWitness.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => GovernanceWitness.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => GovernanceWitness.fetch(client, id),
            new: (fields: GovernanceWitnessFields) => {
                return new GovernanceWitness([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return GovernanceWitness.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<GovernanceWitness>> {
        return phantom(GovernanceWitness.reified());
    }
    static get p() {
        return GovernanceWitness.phantom();
    }

    static get bcs() {
        return bcs.struct("GovernanceWitness", {
            dummy_field: bcs.bool(),
        });
    }

    static fromFields(fields: Record<string, any>): GovernanceWitness {
        return GovernanceWitness.reified().new({ dummyField: decodeFromFields("bool", fields.dummy_field) });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): GovernanceWitness {
        if (!isGovernanceWitness(item.type)) {
            throw new Error("not a GovernanceWitness type");
        }

        return GovernanceWitness.reified().new({ dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) });
    }

    static fromBcs(data: Uint8Array): GovernanceWitness {
        return GovernanceWitness.fromFields(GovernanceWitness.bcs.parse(data));
    }

    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): GovernanceWitness {
        return GovernanceWitness.reified().new({ dummyField: decodeFromJSONField("bool", field.dummyField) });
    }

    static fromJSON(json: Record<string, any>): GovernanceWitness {
        if (json.$typeName !== GovernanceWitness.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return GovernanceWitness.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): GovernanceWitness {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isGovernanceWitness(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a GovernanceWitness object`);
        }
        return GovernanceWitness.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<GovernanceWitness> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching GovernanceWitness object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isGovernanceWitness(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a GovernanceWitness object`);
        }
        return GovernanceWitness.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== UpgradeContract =============================== */

export function isUpgradeContract(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::upgrade_contract::UpgradeContract";
}

export interface UpgradeContractFields {
    digest: ToField<Bytes32>;
}

export type UpgradeContractReified = Reified<UpgradeContract, UpgradeContractFields>;

export class UpgradeContract implements StructClass {
    static readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::upgrade_contract::UpgradeContract";
    static readonly $numTypeParams = 0;

    readonly $typeName = UpgradeContract.$typeName;

    readonly $fullTypeName: "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::upgrade_contract::UpgradeContract";

    readonly $typeArgs: [];

    readonly digest: ToField<Bytes32>;

    private constructor(typeArgs: [], fields: UpgradeContractFields) {
        this.$fullTypeName = composeSuiType(
            UpgradeContract.$typeName,
            ...typeArgs
        ) as "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::upgrade_contract::UpgradeContract";
        this.$typeArgs = typeArgs;

        this.digest = fields.digest;
    }

    static reified(): UpgradeContractReified {
        return {
            typeName: UpgradeContract.$typeName,
            fullTypeName: composeSuiType(
                UpgradeContract.$typeName,
                ...[]
            ) as "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::upgrade_contract::UpgradeContract",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => UpgradeContract.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => UpgradeContract.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => UpgradeContract.fromBcs(data),
            bcs: UpgradeContract.bcs,
            fromJSONField: (field: any) => UpgradeContract.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => UpgradeContract.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => UpgradeContract.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => UpgradeContract.fetch(client, id),
            new: (fields: UpgradeContractFields) => {
                return new UpgradeContract([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return UpgradeContract.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<UpgradeContract>> {
        return phantom(UpgradeContract.reified());
    }
    static get p() {
        return UpgradeContract.phantom();
    }

    static get bcs() {
        return bcs.struct("UpgradeContract", {
            digest: Bytes32.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): UpgradeContract {
        return UpgradeContract.reified().new({ digest: decodeFromFields(Bytes32.reified(), fields.digest) });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): UpgradeContract {
        if (!isUpgradeContract(item.type)) {
            throw new Error("not a UpgradeContract type");
        }

        return UpgradeContract.reified().new({ digest: decodeFromFieldsWithTypes(Bytes32.reified(), item.fields.digest) });
    }

    static fromBcs(data: Uint8Array): UpgradeContract {
        return UpgradeContract.fromFields(UpgradeContract.bcs.parse(data));
    }

    toJSONField() {
        return {
            digest: this.digest.toJSONField(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): UpgradeContract {
        return UpgradeContract.reified().new({ digest: decodeFromJSONField(Bytes32.reified(), field.digest) });
    }

    static fromJSON(json: Record<string, any>): UpgradeContract {
        if (json.$typeName !== UpgradeContract.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return UpgradeContract.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): UpgradeContract {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUpgradeContract(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a UpgradeContract object`);
        }
        return UpgradeContract.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<UpgradeContract> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching UpgradeContract object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isUpgradeContract(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UpgradeContract object`);
        }
        return UpgradeContract.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}
