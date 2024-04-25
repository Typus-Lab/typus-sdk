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
import { FixedPoint32 } from "../../0x1/fixed-point32/structs";
import { TypeName } from "../../0x1/type-name/structs";
import { bcs, fromB64 } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";

/* ============================== RiskModel =============================== */

export function isRiskModel(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::risk_model::RiskModel";
}

export interface RiskModelFields {
    type: ToField<TypeName>;
    collateralFactor: ToField<FixedPoint32>;
    liquidationFactor: ToField<FixedPoint32>;
    liquidationPenalty: ToField<FixedPoint32>;
    liquidationDiscount: ToField<FixedPoint32>;
    liquidationRevenueFactor: ToField<FixedPoint32>;
    maxCollateralAmount: ToField<"u64">;
}

export type RiskModelReified = Reified<RiskModel, RiskModelFields>;

export class RiskModel implements StructClass {
    static readonly $typeName = "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::risk_model::RiskModel";
    static readonly $numTypeParams = 0;

    readonly $typeName = RiskModel.$typeName;

    readonly $fullTypeName: "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::risk_model::RiskModel";

    readonly $typeArgs: [];

    readonly type: ToField<TypeName>;
    readonly collateralFactor: ToField<FixedPoint32>;
    readonly liquidationFactor: ToField<FixedPoint32>;
    readonly liquidationPenalty: ToField<FixedPoint32>;
    readonly liquidationDiscount: ToField<FixedPoint32>;
    readonly liquidationRevenueFactor: ToField<FixedPoint32>;
    readonly maxCollateralAmount: ToField<"u64">;

    private constructor(typeArgs: [], fields: RiskModelFields) {
        this.$fullTypeName = composeSuiType(
            RiskModel.$typeName,
            ...typeArgs
        ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::risk_model::RiskModel";
        this.$typeArgs = typeArgs;

        this.type = fields.type;
        this.collateralFactor = fields.collateralFactor;
        this.liquidationFactor = fields.liquidationFactor;
        this.liquidationPenalty = fields.liquidationPenalty;
        this.liquidationDiscount = fields.liquidationDiscount;
        this.liquidationRevenueFactor = fields.liquidationRevenueFactor;
        this.maxCollateralAmount = fields.maxCollateralAmount;
    }

    static reified(): RiskModelReified {
        return {
            typeName: RiskModel.$typeName,
            fullTypeName: composeSuiType(
                RiskModel.$typeName,
                ...[]
            ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::risk_model::RiskModel",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => RiskModel.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => RiskModel.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => RiskModel.fromBcs(data),
            bcs: RiskModel.bcs,
            fromJSONField: (field: any) => RiskModel.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => RiskModel.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => RiskModel.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => RiskModel.fetch(client, id),
            new: (fields: RiskModelFields) => {
                return new RiskModel([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return RiskModel.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<RiskModel>> {
        return phantom(RiskModel.reified());
    }
    static get p() {
        return RiskModel.phantom();
    }

    static get bcs() {
        return bcs.struct("RiskModel", {
            type: TypeName.bcs,
            collateral_factor: FixedPoint32.bcs,
            liquidation_factor: FixedPoint32.bcs,
            liquidation_penalty: FixedPoint32.bcs,
            liquidation_discount: FixedPoint32.bcs,
            liquidation_revenue_factor: FixedPoint32.bcs,
            max_collateral_amount: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): RiskModel {
        return RiskModel.reified().new({
            type: decodeFromFields(TypeName.reified(), fields.type),
            collateralFactor: decodeFromFields(FixedPoint32.reified(), fields.collateral_factor),
            liquidationFactor: decodeFromFields(FixedPoint32.reified(), fields.liquidation_factor),
            liquidationPenalty: decodeFromFields(FixedPoint32.reified(), fields.liquidation_penalty),
            liquidationDiscount: decodeFromFields(FixedPoint32.reified(), fields.liquidation_discount),
            liquidationRevenueFactor: decodeFromFields(FixedPoint32.reified(), fields.liquidation_revenue_factor),
            maxCollateralAmount: decodeFromFields("u64", fields.max_collateral_amount),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): RiskModel {
        if (!isRiskModel(item.type)) {
            throw new Error("not a RiskModel type");
        }

        return RiskModel.reified().new({
            type: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.type),
            collateralFactor: decodeFromFieldsWithTypes(FixedPoint32.reified(), item.fields.collateral_factor),
            liquidationFactor: decodeFromFieldsWithTypes(FixedPoint32.reified(), item.fields.liquidation_factor),
            liquidationPenalty: decodeFromFieldsWithTypes(FixedPoint32.reified(), item.fields.liquidation_penalty),
            liquidationDiscount: decodeFromFieldsWithTypes(FixedPoint32.reified(), item.fields.liquidation_discount),
            liquidationRevenueFactor: decodeFromFieldsWithTypes(FixedPoint32.reified(), item.fields.liquidation_revenue_factor),
            maxCollateralAmount: decodeFromFieldsWithTypes("u64", item.fields.max_collateral_amount),
        });
    }

    static fromBcs(data: Uint8Array): RiskModel {
        return RiskModel.fromFields(RiskModel.bcs.parse(data));
    }

    toJSONField() {
        return {
            type: this.type.toJSONField(),
            collateralFactor: this.collateralFactor.toJSONField(),
            liquidationFactor: this.liquidationFactor.toJSONField(),
            liquidationPenalty: this.liquidationPenalty.toJSONField(),
            liquidationDiscount: this.liquidationDiscount.toJSONField(),
            liquidationRevenueFactor: this.liquidationRevenueFactor.toJSONField(),
            maxCollateralAmount: this.maxCollateralAmount.toString(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): RiskModel {
        return RiskModel.reified().new({
            type: decodeFromJSONField(TypeName.reified(), field.type),
            collateralFactor: decodeFromJSONField(FixedPoint32.reified(), field.collateralFactor),
            liquidationFactor: decodeFromJSONField(FixedPoint32.reified(), field.liquidationFactor),
            liquidationPenalty: decodeFromJSONField(FixedPoint32.reified(), field.liquidationPenalty),
            liquidationDiscount: decodeFromJSONField(FixedPoint32.reified(), field.liquidationDiscount),
            liquidationRevenueFactor: decodeFromJSONField(FixedPoint32.reified(), field.liquidationRevenueFactor),
            maxCollateralAmount: decodeFromJSONField("u64", field.maxCollateralAmount),
        });
    }

    static fromJSON(json: Record<string, any>): RiskModel {
        if (json.$typeName !== RiskModel.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return RiskModel.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): RiskModel {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRiskModel(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a RiskModel object`);
        }
        return RiskModel.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<RiskModel> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching RiskModel object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isRiskModel(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RiskModel object`);
        }
        return RiskModel.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== RiskModelAdded =============================== */

export function isRiskModelAdded(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::risk_model::RiskModelAdded";
}

export interface RiskModelAddedFields {
    riskModel: ToField<RiskModel>;
    currentEpoch: ToField<"u64">;
}

export type RiskModelAddedReified = Reified<RiskModelAdded, RiskModelAddedFields>;

export class RiskModelAdded implements StructClass {
    static readonly $typeName = "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::risk_model::RiskModelAdded";
    static readonly $numTypeParams = 0;

    readonly $typeName = RiskModelAdded.$typeName;

    readonly $fullTypeName: "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::risk_model::RiskModelAdded";

    readonly $typeArgs: [];

    readonly riskModel: ToField<RiskModel>;
    readonly currentEpoch: ToField<"u64">;

    private constructor(typeArgs: [], fields: RiskModelAddedFields) {
        this.$fullTypeName = composeSuiType(
            RiskModelAdded.$typeName,
            ...typeArgs
        ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::risk_model::RiskModelAdded";
        this.$typeArgs = typeArgs;

        this.riskModel = fields.riskModel;
        this.currentEpoch = fields.currentEpoch;
    }

    static reified(): RiskModelAddedReified {
        return {
            typeName: RiskModelAdded.$typeName,
            fullTypeName: composeSuiType(
                RiskModelAdded.$typeName,
                ...[]
            ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::risk_model::RiskModelAdded",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => RiskModelAdded.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => RiskModelAdded.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => RiskModelAdded.fromBcs(data),
            bcs: RiskModelAdded.bcs,
            fromJSONField: (field: any) => RiskModelAdded.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => RiskModelAdded.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => RiskModelAdded.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => RiskModelAdded.fetch(client, id),
            new: (fields: RiskModelAddedFields) => {
                return new RiskModelAdded([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return RiskModelAdded.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<RiskModelAdded>> {
        return phantom(RiskModelAdded.reified());
    }
    static get p() {
        return RiskModelAdded.phantom();
    }

    static get bcs() {
        return bcs.struct("RiskModelAdded", {
            risk_model: RiskModel.bcs,
            current_epoch: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): RiskModelAdded {
        return RiskModelAdded.reified().new({
            riskModel: decodeFromFields(RiskModel.reified(), fields.risk_model),
            currentEpoch: decodeFromFields("u64", fields.current_epoch),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): RiskModelAdded {
        if (!isRiskModelAdded(item.type)) {
            throw new Error("not a RiskModelAdded type");
        }

        return RiskModelAdded.reified().new({
            riskModel: decodeFromFieldsWithTypes(RiskModel.reified(), item.fields.risk_model),
            currentEpoch: decodeFromFieldsWithTypes("u64", item.fields.current_epoch),
        });
    }

    static fromBcs(data: Uint8Array): RiskModelAdded {
        return RiskModelAdded.fromFields(RiskModelAdded.bcs.parse(data));
    }

    toJSONField() {
        return {
            riskModel: this.riskModel.toJSONField(),
            currentEpoch: this.currentEpoch.toString(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): RiskModelAdded {
        return RiskModelAdded.reified().new({
            riskModel: decodeFromJSONField(RiskModel.reified(), field.riskModel),
            currentEpoch: decodeFromJSONField("u64", field.currentEpoch),
        });
    }

    static fromJSON(json: Record<string, any>): RiskModelAdded {
        if (json.$typeName !== RiskModelAdded.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return RiskModelAdded.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): RiskModelAdded {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRiskModelAdded(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a RiskModelAdded object`);
        }
        return RiskModelAdded.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<RiskModelAdded> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching RiskModelAdded object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isRiskModelAdded(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RiskModelAdded object`);
        }
        return RiskModelAdded.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== RiskModelChangeCreated =============================== */

export function isRiskModelChangeCreated(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::risk_model::RiskModelChangeCreated";
}

export interface RiskModelChangeCreatedFields {
    riskModel: ToField<RiskModel>;
    currentEpoch: ToField<"u64">;
    delayEpoches: ToField<"u64">;
    effectiveEpoches: ToField<"u64">;
}

export type RiskModelChangeCreatedReified = Reified<RiskModelChangeCreated, RiskModelChangeCreatedFields>;

export class RiskModelChangeCreated implements StructClass {
    static readonly $typeName = "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::risk_model::RiskModelChangeCreated";
    static readonly $numTypeParams = 0;

    readonly $typeName = RiskModelChangeCreated.$typeName;

    readonly $fullTypeName: "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::risk_model::RiskModelChangeCreated";

    readonly $typeArgs: [];

    readonly riskModel: ToField<RiskModel>;
    readonly currentEpoch: ToField<"u64">;
    readonly delayEpoches: ToField<"u64">;
    readonly effectiveEpoches: ToField<"u64">;

    private constructor(typeArgs: [], fields: RiskModelChangeCreatedFields) {
        this.$fullTypeName = composeSuiType(
            RiskModelChangeCreated.$typeName,
            ...typeArgs
        ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::risk_model::RiskModelChangeCreated";
        this.$typeArgs = typeArgs;

        this.riskModel = fields.riskModel;
        this.currentEpoch = fields.currentEpoch;
        this.delayEpoches = fields.delayEpoches;
        this.effectiveEpoches = fields.effectiveEpoches;
    }

    static reified(): RiskModelChangeCreatedReified {
        return {
            typeName: RiskModelChangeCreated.$typeName,
            fullTypeName: composeSuiType(
                RiskModelChangeCreated.$typeName,
                ...[]
            ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::risk_model::RiskModelChangeCreated",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => RiskModelChangeCreated.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => RiskModelChangeCreated.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => RiskModelChangeCreated.fromBcs(data),
            bcs: RiskModelChangeCreated.bcs,
            fromJSONField: (field: any) => RiskModelChangeCreated.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => RiskModelChangeCreated.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => RiskModelChangeCreated.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => RiskModelChangeCreated.fetch(client, id),
            new: (fields: RiskModelChangeCreatedFields) => {
                return new RiskModelChangeCreated([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return RiskModelChangeCreated.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<RiskModelChangeCreated>> {
        return phantom(RiskModelChangeCreated.reified());
    }
    static get p() {
        return RiskModelChangeCreated.phantom();
    }

    static get bcs() {
        return bcs.struct("RiskModelChangeCreated", {
            risk_model: RiskModel.bcs,
            current_epoch: bcs.u64(),
            delay_epoches: bcs.u64(),
            effective_epoches: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): RiskModelChangeCreated {
        return RiskModelChangeCreated.reified().new({
            riskModel: decodeFromFields(RiskModel.reified(), fields.risk_model),
            currentEpoch: decodeFromFields("u64", fields.current_epoch),
            delayEpoches: decodeFromFields("u64", fields.delay_epoches),
            effectiveEpoches: decodeFromFields("u64", fields.effective_epoches),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): RiskModelChangeCreated {
        if (!isRiskModelChangeCreated(item.type)) {
            throw new Error("not a RiskModelChangeCreated type");
        }

        return RiskModelChangeCreated.reified().new({
            riskModel: decodeFromFieldsWithTypes(RiskModel.reified(), item.fields.risk_model),
            currentEpoch: decodeFromFieldsWithTypes("u64", item.fields.current_epoch),
            delayEpoches: decodeFromFieldsWithTypes("u64", item.fields.delay_epoches),
            effectiveEpoches: decodeFromFieldsWithTypes("u64", item.fields.effective_epoches),
        });
    }

    static fromBcs(data: Uint8Array): RiskModelChangeCreated {
        return RiskModelChangeCreated.fromFields(RiskModelChangeCreated.bcs.parse(data));
    }

    toJSONField() {
        return {
            riskModel: this.riskModel.toJSONField(),
            currentEpoch: this.currentEpoch.toString(),
            delayEpoches: this.delayEpoches.toString(),
            effectiveEpoches: this.effectiveEpoches.toString(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): RiskModelChangeCreated {
        return RiskModelChangeCreated.reified().new({
            riskModel: decodeFromJSONField(RiskModel.reified(), field.riskModel),
            currentEpoch: decodeFromJSONField("u64", field.currentEpoch),
            delayEpoches: decodeFromJSONField("u64", field.delayEpoches),
            effectiveEpoches: decodeFromJSONField("u64", field.effectiveEpoches),
        });
    }

    static fromJSON(json: Record<string, any>): RiskModelChangeCreated {
        if (json.$typeName !== RiskModelChangeCreated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return RiskModelChangeCreated.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): RiskModelChangeCreated {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRiskModelChangeCreated(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a RiskModelChangeCreated object`);
        }
        return RiskModelChangeCreated.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<RiskModelChangeCreated> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching RiskModelChangeCreated object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isRiskModelChangeCreated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RiskModelChangeCreated object`);
        }
        return RiskModelChangeCreated.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== RiskModels =============================== */

export function isRiskModels(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::risk_model::RiskModels";
}

export interface RiskModelsFields {
    dummyField: ToField<"bool">;
}

export type RiskModelsReified = Reified<RiskModels, RiskModelsFields>;

export class RiskModels implements StructClass {
    static readonly $typeName = "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::risk_model::RiskModels";
    static readonly $numTypeParams = 0;

    readonly $typeName = RiskModels.$typeName;

    readonly $fullTypeName: "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::risk_model::RiskModels";

    readonly $typeArgs: [];

    readonly dummyField: ToField<"bool">;

    private constructor(typeArgs: [], fields: RiskModelsFields) {
        this.$fullTypeName = composeSuiType(
            RiskModels.$typeName,
            ...typeArgs
        ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::risk_model::RiskModels";
        this.$typeArgs = typeArgs;

        this.dummyField = fields.dummyField;
    }

    static reified(): RiskModelsReified {
        return {
            typeName: RiskModels.$typeName,
            fullTypeName: composeSuiType(
                RiskModels.$typeName,
                ...[]
            ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::risk_model::RiskModels",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => RiskModels.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => RiskModels.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => RiskModels.fromBcs(data),
            bcs: RiskModels.bcs,
            fromJSONField: (field: any) => RiskModels.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => RiskModels.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => RiskModels.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => RiskModels.fetch(client, id),
            new: (fields: RiskModelsFields) => {
                return new RiskModels([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return RiskModels.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<RiskModels>> {
        return phantom(RiskModels.reified());
    }
    static get p() {
        return RiskModels.phantom();
    }

    static get bcs() {
        return bcs.struct("RiskModels", {
            dummy_field: bcs.bool(),
        });
    }

    static fromFields(fields: Record<string, any>): RiskModels {
        return RiskModels.reified().new({ dummyField: decodeFromFields("bool", fields.dummy_field) });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): RiskModels {
        if (!isRiskModels(item.type)) {
            throw new Error("not a RiskModels type");
        }

        return RiskModels.reified().new({ dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) });
    }

    static fromBcs(data: Uint8Array): RiskModels {
        return RiskModels.fromFields(RiskModels.bcs.parse(data));
    }

    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): RiskModels {
        return RiskModels.reified().new({ dummyField: decodeFromJSONField("bool", field.dummyField) });
    }

    static fromJSON(json: Record<string, any>): RiskModels {
        if (json.$typeName !== RiskModels.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return RiskModels.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): RiskModels {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRiskModels(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a RiskModels object`);
        }
        return RiskModels.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<RiskModels> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching RiskModels object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isRiskModels(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RiskModels object`);
        }
        return RiskModels.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}
