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
import { TypeName } from "../../0x1/type-name/structs";
import { ID, UID } from "../../0x2/object/structs";
import { bcs, fromB64 } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";

/* ============================== AdminCap =============================== */

export function isAdminCap(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xe87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a::admin::AdminCap";
}

export interface AdminCapFields {
    id: ToField<UID>;
}

export type AdminCapReified = Reified<AdminCap, AdminCapFields>;

export class AdminCap implements StructClass {
    static readonly $typeName = "0xe87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a::admin::AdminCap";
    static readonly $numTypeParams = 0;

    readonly $typeName = AdminCap.$typeName;

    readonly $fullTypeName: "0xe87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a::admin::AdminCap";

    readonly $typeArgs: [];

    readonly id: ToField<UID>;

    private constructor(typeArgs: [], fields: AdminCapFields) {
        this.$fullTypeName = composeSuiType(
            AdminCap.$typeName,
            ...typeArgs
        ) as "0xe87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a::admin::AdminCap";
        this.$typeArgs = typeArgs;

        this.id = fields.id;
    }

    static reified(): AdminCapReified {
        return {
            typeName: AdminCap.$typeName,
            fullTypeName: composeSuiType(
                AdminCap.$typeName,
                ...[]
            ) as "0xe87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a::admin::AdminCap",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => AdminCap.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => AdminCap.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => AdminCap.fromBcs(data),
            bcs: AdminCap.bcs,
            fromJSONField: (field: any) => AdminCap.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => AdminCap.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => AdminCap.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => AdminCap.fetch(client, id),
            new: (fields: AdminCapFields) => {
                return new AdminCap([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return AdminCap.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<AdminCap>> {
        return phantom(AdminCap.reified());
    }
    static get p() {
        return AdminCap.phantom();
    }

    static get bcs() {
        return bcs.struct("AdminCap", {
            id: UID.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): AdminCap {
        return AdminCap.reified().new({ id: decodeFromFields(UID.reified(), fields.id) });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): AdminCap {
        if (!isAdminCap(item.type)) {
            throw new Error("not a AdminCap type");
        }

        return AdminCap.reified().new({ id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id) });
    }

    static fromBcs(data: Uint8Array): AdminCap {
        return AdminCap.fromFields(AdminCap.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): AdminCap {
        return AdminCap.reified().new({ id: decodeFromJSONField(UID.reified(), field.id) });
    }

    static fromJSON(json: Record<string, any>): AdminCap {
        if (json.$typeName !== AdminCap.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return AdminCap.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): AdminCap {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isAdminCap(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a AdminCap object`);
        }
        return AdminCap.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<AdminCap> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching AdminCap object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isAdminCap(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AdminCap object`);
        }
        return AdminCap.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== CreateSpoolEvent =============================== */

export function isCreateSpoolEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xe87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a::admin::CreateSpoolEvent";
}

export interface CreateSpoolEventFields {
    spoolId: ToField<ID>;
    stakingType: ToField<TypeName>;
    distributedPointPerPeriod: ToField<"u64">;
    pointDistributionTime: ToField<"u64">;
    maxDistributedPoint: ToField<"u64">;
    maxStakes: ToField<"u64">;
    createdAt: ToField<"u64">;
}

export type CreateSpoolEventReified = Reified<CreateSpoolEvent, CreateSpoolEventFields>;

export class CreateSpoolEvent implements StructClass {
    static readonly $typeName = "0xe87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a::admin::CreateSpoolEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = CreateSpoolEvent.$typeName;

    readonly $fullTypeName: "0xe87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a::admin::CreateSpoolEvent";

    readonly $typeArgs: [];

    readonly spoolId: ToField<ID>;
    readonly stakingType: ToField<TypeName>;
    readonly distributedPointPerPeriod: ToField<"u64">;
    readonly pointDistributionTime: ToField<"u64">;
    readonly maxDistributedPoint: ToField<"u64">;
    readonly maxStakes: ToField<"u64">;
    readonly createdAt: ToField<"u64">;

    private constructor(typeArgs: [], fields: CreateSpoolEventFields) {
        this.$fullTypeName = composeSuiType(
            CreateSpoolEvent.$typeName,
            ...typeArgs
        ) as "0xe87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a::admin::CreateSpoolEvent";
        this.$typeArgs = typeArgs;

        this.spoolId = fields.spoolId;
        this.stakingType = fields.stakingType;
        this.distributedPointPerPeriod = fields.distributedPointPerPeriod;
        this.pointDistributionTime = fields.pointDistributionTime;
        this.maxDistributedPoint = fields.maxDistributedPoint;
        this.maxStakes = fields.maxStakes;
        this.createdAt = fields.createdAt;
    }

    static reified(): CreateSpoolEventReified {
        return {
            typeName: CreateSpoolEvent.$typeName,
            fullTypeName: composeSuiType(
                CreateSpoolEvent.$typeName,
                ...[]
            ) as "0xe87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a::admin::CreateSpoolEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => CreateSpoolEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => CreateSpoolEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => CreateSpoolEvent.fromBcs(data),
            bcs: CreateSpoolEvent.bcs,
            fromJSONField: (field: any) => CreateSpoolEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => CreateSpoolEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => CreateSpoolEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => CreateSpoolEvent.fetch(client, id),
            new: (fields: CreateSpoolEventFields) => {
                return new CreateSpoolEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return CreateSpoolEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<CreateSpoolEvent>> {
        return phantom(CreateSpoolEvent.reified());
    }
    static get p() {
        return CreateSpoolEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("CreateSpoolEvent", {
            spool_id: ID.bcs,
            staking_type: TypeName.bcs,
            distributed_point_per_period: bcs.u64(),
            point_distribution_time: bcs.u64(),
            max_distributed_point: bcs.u64(),
            max_stakes: bcs.u64(),
            created_at: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): CreateSpoolEvent {
        return CreateSpoolEvent.reified().new({
            spoolId: decodeFromFields(ID.reified(), fields.spool_id),
            stakingType: decodeFromFields(TypeName.reified(), fields.staking_type),
            distributedPointPerPeriod: decodeFromFields("u64", fields.distributed_point_per_period),
            pointDistributionTime: decodeFromFields("u64", fields.point_distribution_time),
            maxDistributedPoint: decodeFromFields("u64", fields.max_distributed_point),
            maxStakes: decodeFromFields("u64", fields.max_stakes),
            createdAt: decodeFromFields("u64", fields.created_at),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): CreateSpoolEvent {
        if (!isCreateSpoolEvent(item.type)) {
            throw new Error("not a CreateSpoolEvent type");
        }

        return CreateSpoolEvent.reified().new({
            spoolId: decodeFromFieldsWithTypes(ID.reified(), item.fields.spool_id),
            stakingType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.staking_type),
            distributedPointPerPeriod: decodeFromFieldsWithTypes("u64", item.fields.distributed_point_per_period),
            pointDistributionTime: decodeFromFieldsWithTypes("u64", item.fields.point_distribution_time),
            maxDistributedPoint: decodeFromFieldsWithTypes("u64", item.fields.max_distributed_point),
            maxStakes: decodeFromFieldsWithTypes("u64", item.fields.max_stakes),
            createdAt: decodeFromFieldsWithTypes("u64", item.fields.created_at),
        });
    }

    static fromBcs(data: Uint8Array): CreateSpoolEvent {
        return CreateSpoolEvent.fromFields(CreateSpoolEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            spoolId: this.spoolId,
            stakingType: this.stakingType.toJSONField(),
            distributedPointPerPeriod: this.distributedPointPerPeriod.toString(),
            pointDistributionTime: this.pointDistributionTime.toString(),
            maxDistributedPoint: this.maxDistributedPoint.toString(),
            maxStakes: this.maxStakes.toString(),
            createdAt: this.createdAt.toString(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): CreateSpoolEvent {
        return CreateSpoolEvent.reified().new({
            spoolId: decodeFromJSONField(ID.reified(), field.spoolId),
            stakingType: decodeFromJSONField(TypeName.reified(), field.stakingType),
            distributedPointPerPeriod: decodeFromJSONField("u64", field.distributedPointPerPeriod),
            pointDistributionTime: decodeFromJSONField("u64", field.pointDistributionTime),
            maxDistributedPoint: decodeFromJSONField("u64", field.maxDistributedPoint),
            maxStakes: decodeFromJSONField("u64", field.maxStakes),
            createdAt: decodeFromJSONField("u64", field.createdAt),
        });
    }

    static fromJSON(json: Record<string, any>): CreateSpoolEvent {
        if (json.$typeName !== CreateSpoolEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return CreateSpoolEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): CreateSpoolEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isCreateSpoolEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a CreateSpoolEvent object`);
        }
        return CreateSpoolEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<CreateSpoolEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching CreateSpoolEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isCreateSpoolEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a CreateSpoolEvent object`);
        }
        return CreateSpoolEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== UpdateSpoolConfigEvent =============================== */

export function isUpdateSpoolConfigEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xe87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a::admin::UpdateSpoolConfigEvent";
}

export interface UpdateSpoolConfigEventFields {
    spoolId: ToField<ID>;
    distributedPointPerPeriod: ToField<"u64">;
    pointDistributionTime: ToField<"u64">;
    maxDistributedPoint: ToField<"u64">;
    maxStakes: ToField<"u64">;
    updatedAt: ToField<"u64">;
}

export type UpdateSpoolConfigEventReified = Reified<UpdateSpoolConfigEvent, UpdateSpoolConfigEventFields>;

export class UpdateSpoolConfigEvent implements StructClass {
    static readonly $typeName = "0xe87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a::admin::UpdateSpoolConfigEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = UpdateSpoolConfigEvent.$typeName;

    readonly $fullTypeName: "0xe87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a::admin::UpdateSpoolConfigEvent";

    readonly $typeArgs: [];

    readonly spoolId: ToField<ID>;
    readonly distributedPointPerPeriod: ToField<"u64">;
    readonly pointDistributionTime: ToField<"u64">;
    readonly maxDistributedPoint: ToField<"u64">;
    readonly maxStakes: ToField<"u64">;
    readonly updatedAt: ToField<"u64">;

    private constructor(typeArgs: [], fields: UpdateSpoolConfigEventFields) {
        this.$fullTypeName = composeSuiType(
            UpdateSpoolConfigEvent.$typeName,
            ...typeArgs
        ) as "0xe87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a::admin::UpdateSpoolConfigEvent";
        this.$typeArgs = typeArgs;

        this.spoolId = fields.spoolId;
        this.distributedPointPerPeriod = fields.distributedPointPerPeriod;
        this.pointDistributionTime = fields.pointDistributionTime;
        this.maxDistributedPoint = fields.maxDistributedPoint;
        this.maxStakes = fields.maxStakes;
        this.updatedAt = fields.updatedAt;
    }

    static reified(): UpdateSpoolConfigEventReified {
        return {
            typeName: UpdateSpoolConfigEvent.$typeName,
            fullTypeName: composeSuiType(
                UpdateSpoolConfigEvent.$typeName,
                ...[]
            ) as "0xe87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a::admin::UpdateSpoolConfigEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => UpdateSpoolConfigEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => UpdateSpoolConfigEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => UpdateSpoolConfigEvent.fromBcs(data),
            bcs: UpdateSpoolConfigEvent.bcs,
            fromJSONField: (field: any) => UpdateSpoolConfigEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => UpdateSpoolConfigEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => UpdateSpoolConfigEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => UpdateSpoolConfigEvent.fetch(client, id),
            new: (fields: UpdateSpoolConfigEventFields) => {
                return new UpdateSpoolConfigEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return UpdateSpoolConfigEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<UpdateSpoolConfigEvent>> {
        return phantom(UpdateSpoolConfigEvent.reified());
    }
    static get p() {
        return UpdateSpoolConfigEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("UpdateSpoolConfigEvent", {
            spool_id: ID.bcs,
            distributed_point_per_period: bcs.u64(),
            point_distribution_time: bcs.u64(),
            max_distributed_point: bcs.u64(),
            max_stakes: bcs.u64(),
            updated_at: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): UpdateSpoolConfigEvent {
        return UpdateSpoolConfigEvent.reified().new({
            spoolId: decodeFromFields(ID.reified(), fields.spool_id),
            distributedPointPerPeriod: decodeFromFields("u64", fields.distributed_point_per_period),
            pointDistributionTime: decodeFromFields("u64", fields.point_distribution_time),
            maxDistributedPoint: decodeFromFields("u64", fields.max_distributed_point),
            maxStakes: decodeFromFields("u64", fields.max_stakes),
            updatedAt: decodeFromFields("u64", fields.updated_at),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): UpdateSpoolConfigEvent {
        if (!isUpdateSpoolConfigEvent(item.type)) {
            throw new Error("not a UpdateSpoolConfigEvent type");
        }

        return UpdateSpoolConfigEvent.reified().new({
            spoolId: decodeFromFieldsWithTypes(ID.reified(), item.fields.spool_id),
            distributedPointPerPeriod: decodeFromFieldsWithTypes("u64", item.fields.distributed_point_per_period),
            pointDistributionTime: decodeFromFieldsWithTypes("u64", item.fields.point_distribution_time),
            maxDistributedPoint: decodeFromFieldsWithTypes("u64", item.fields.max_distributed_point),
            maxStakes: decodeFromFieldsWithTypes("u64", item.fields.max_stakes),
            updatedAt: decodeFromFieldsWithTypes("u64", item.fields.updated_at),
        });
    }

    static fromBcs(data: Uint8Array): UpdateSpoolConfigEvent {
        return UpdateSpoolConfigEvent.fromFields(UpdateSpoolConfigEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            spoolId: this.spoolId,
            distributedPointPerPeriod: this.distributedPointPerPeriod.toString(),
            pointDistributionTime: this.pointDistributionTime.toString(),
            maxDistributedPoint: this.maxDistributedPoint.toString(),
            maxStakes: this.maxStakes.toString(),
            updatedAt: this.updatedAt.toString(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): UpdateSpoolConfigEvent {
        return UpdateSpoolConfigEvent.reified().new({
            spoolId: decodeFromJSONField(ID.reified(), field.spoolId),
            distributedPointPerPeriod: decodeFromJSONField("u64", field.distributedPointPerPeriod),
            pointDistributionTime: decodeFromJSONField("u64", field.pointDistributionTime),
            maxDistributedPoint: decodeFromJSONField("u64", field.maxDistributedPoint),
            maxStakes: decodeFromJSONField("u64", field.maxStakes),
            updatedAt: decodeFromJSONField("u64", field.updatedAt),
        });
    }

    static fromJSON(json: Record<string, any>): UpdateSpoolConfigEvent {
        if (json.$typeName !== UpdateSpoolConfigEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return UpdateSpoolConfigEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): UpdateSpoolConfigEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUpdateSpoolConfigEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a UpdateSpoolConfigEvent object`);
        }
        return UpdateSpoolConfigEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<UpdateSpoolConfigEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching UpdateSpoolConfigEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isUpdateSpoolConfigEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UpdateSpoolConfigEvent object`);
        }
        return UpdateSpoolConfigEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}
