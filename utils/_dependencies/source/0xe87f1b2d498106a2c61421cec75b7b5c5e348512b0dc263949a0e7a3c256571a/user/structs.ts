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
import { ID } from "../../0x2/object/structs";
import { bcs, fromB64, fromHEX, toHEX } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";

/* ============================== CreateSpoolAccountEvent =============================== */

export function isCreateSpoolAccountEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xe87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a::user::CreateSpoolAccountEvent";
}

export interface CreateSpoolAccountEventFields {
    spoolAccountId: ToField<ID>;
    spoolId: ToField<ID>;
    stakingType: ToField<TypeName>;
    createdAt: ToField<"u64">;
}

export type CreateSpoolAccountEventReified = Reified<CreateSpoolAccountEvent, CreateSpoolAccountEventFields>;

export class CreateSpoolAccountEvent implements StructClass {
    static readonly $typeName = "0xe87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a::user::CreateSpoolAccountEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = CreateSpoolAccountEvent.$typeName;

    readonly $fullTypeName: "0xe87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a::user::CreateSpoolAccountEvent";

    readonly $typeArgs: [];

    readonly spoolAccountId: ToField<ID>;
    readonly spoolId: ToField<ID>;
    readonly stakingType: ToField<TypeName>;
    readonly createdAt: ToField<"u64">;

    private constructor(typeArgs: [], fields: CreateSpoolAccountEventFields) {
        this.$fullTypeName = composeSuiType(
            CreateSpoolAccountEvent.$typeName,
            ...typeArgs
        ) as "0xe87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a::user::CreateSpoolAccountEvent";
        this.$typeArgs = typeArgs;

        this.spoolAccountId = fields.spoolAccountId;
        this.spoolId = fields.spoolId;
        this.stakingType = fields.stakingType;
        this.createdAt = fields.createdAt;
    }

    static reified(): CreateSpoolAccountEventReified {
        return {
            typeName: CreateSpoolAccountEvent.$typeName,
            fullTypeName: composeSuiType(
                CreateSpoolAccountEvent.$typeName,
                ...[]
            ) as "0xe87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a::user::CreateSpoolAccountEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => CreateSpoolAccountEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => CreateSpoolAccountEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => CreateSpoolAccountEvent.fromBcs(data),
            bcs: CreateSpoolAccountEvent.bcs,
            fromJSONField: (field: any) => CreateSpoolAccountEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => CreateSpoolAccountEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => CreateSpoolAccountEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => CreateSpoolAccountEvent.fetch(client, id),
            new: (fields: CreateSpoolAccountEventFields) => {
                return new CreateSpoolAccountEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return CreateSpoolAccountEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<CreateSpoolAccountEvent>> {
        return phantom(CreateSpoolAccountEvent.reified());
    }
    static get p() {
        return CreateSpoolAccountEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("CreateSpoolAccountEvent", {
            spool_account_id: ID.bcs,
            spool_id: ID.bcs,
            staking_type: TypeName.bcs,
            created_at: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): CreateSpoolAccountEvent {
        return CreateSpoolAccountEvent.reified().new({
            spoolAccountId: decodeFromFields(ID.reified(), fields.spool_account_id),
            spoolId: decodeFromFields(ID.reified(), fields.spool_id),
            stakingType: decodeFromFields(TypeName.reified(), fields.staking_type),
            createdAt: decodeFromFields("u64", fields.created_at),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): CreateSpoolAccountEvent {
        if (!isCreateSpoolAccountEvent(item.type)) {
            throw new Error("not a CreateSpoolAccountEvent type");
        }

        return CreateSpoolAccountEvent.reified().new({
            spoolAccountId: decodeFromFieldsWithTypes(ID.reified(), item.fields.spool_account_id),
            spoolId: decodeFromFieldsWithTypes(ID.reified(), item.fields.spool_id),
            stakingType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.staking_type),
            createdAt: decodeFromFieldsWithTypes("u64", item.fields.created_at),
        });
    }

    static fromBcs(data: Uint8Array): CreateSpoolAccountEvent {
        return CreateSpoolAccountEvent.fromFields(CreateSpoolAccountEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            spoolAccountId: this.spoolAccountId,
            spoolId: this.spoolId,
            stakingType: this.stakingType.toJSONField(),
            createdAt: this.createdAt.toString(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): CreateSpoolAccountEvent {
        return CreateSpoolAccountEvent.reified().new({
            spoolAccountId: decodeFromJSONField(ID.reified(), field.spoolAccountId),
            spoolId: decodeFromJSONField(ID.reified(), field.spoolId),
            stakingType: decodeFromJSONField(TypeName.reified(), field.stakingType),
            createdAt: decodeFromJSONField("u64", field.createdAt),
        });
    }

    static fromJSON(json: Record<string, any>): CreateSpoolAccountEvent {
        if (json.$typeName !== CreateSpoolAccountEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return CreateSpoolAccountEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): CreateSpoolAccountEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isCreateSpoolAccountEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a CreateSpoolAccountEvent object`);
        }
        return CreateSpoolAccountEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<CreateSpoolAccountEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching CreateSpoolAccountEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isCreateSpoolAccountEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a CreateSpoolAccountEvent object`);
        }
        return CreateSpoolAccountEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== SpoolAccountRedeemRewardsEvent =============================== */

export function isSpoolAccountRedeemRewardsEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xe87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a::user::SpoolAccountRedeemRewardsEvent";
}

export interface SpoolAccountRedeemRewardsEventFields {
    sender: ToField<"address">;
    spoolAccountId: ToField<ID>;
    spoolId: ToField<ID>;
    rewardsPoolId: ToField<ID>;
    stakingType: ToField<TypeName>;
    rewardsType: ToField<TypeName>;
    redeemedPoints: ToField<"u64">;
    previousPoints: ToField<"u64">;
    rewards: ToField<"u64">;
    totalClaimedRewards: ToField<"u64">;
    totalUserPoints: ToField<"u64">;
    timestamp: ToField<"u64">;
}

export type SpoolAccountRedeemRewardsEventReified = Reified<SpoolAccountRedeemRewardsEvent, SpoolAccountRedeemRewardsEventFields>;

export class SpoolAccountRedeemRewardsEvent implements StructClass {
    static readonly $typeName = "0xe87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a::user::SpoolAccountRedeemRewardsEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = SpoolAccountRedeemRewardsEvent.$typeName;

    readonly $fullTypeName: "0xe87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a::user::SpoolAccountRedeemRewardsEvent";

    readonly $typeArgs: [];

    readonly sender: ToField<"address">;
    readonly spoolAccountId: ToField<ID>;
    readonly spoolId: ToField<ID>;
    readonly rewardsPoolId: ToField<ID>;
    readonly stakingType: ToField<TypeName>;
    readonly rewardsType: ToField<TypeName>;
    readonly redeemedPoints: ToField<"u64">;
    readonly previousPoints: ToField<"u64">;
    readonly rewards: ToField<"u64">;
    readonly totalClaimedRewards: ToField<"u64">;
    readonly totalUserPoints: ToField<"u64">;
    readonly timestamp: ToField<"u64">;

    private constructor(typeArgs: [], fields: SpoolAccountRedeemRewardsEventFields) {
        this.$fullTypeName = composeSuiType(
            SpoolAccountRedeemRewardsEvent.$typeName,
            ...typeArgs
        ) as "0xe87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a::user::SpoolAccountRedeemRewardsEvent";
        this.$typeArgs = typeArgs;

        this.sender = fields.sender;
        this.spoolAccountId = fields.spoolAccountId;
        this.spoolId = fields.spoolId;
        this.rewardsPoolId = fields.rewardsPoolId;
        this.stakingType = fields.stakingType;
        this.rewardsType = fields.rewardsType;
        this.redeemedPoints = fields.redeemedPoints;
        this.previousPoints = fields.previousPoints;
        this.rewards = fields.rewards;
        this.totalClaimedRewards = fields.totalClaimedRewards;
        this.totalUserPoints = fields.totalUserPoints;
        this.timestamp = fields.timestamp;
    }

    static reified(): SpoolAccountRedeemRewardsEventReified {
        return {
            typeName: SpoolAccountRedeemRewardsEvent.$typeName,
            fullTypeName: composeSuiType(
                SpoolAccountRedeemRewardsEvent.$typeName,
                ...[]
            ) as "0xe87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a::user::SpoolAccountRedeemRewardsEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => SpoolAccountRedeemRewardsEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => SpoolAccountRedeemRewardsEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => SpoolAccountRedeemRewardsEvent.fromBcs(data),
            bcs: SpoolAccountRedeemRewardsEvent.bcs,
            fromJSONField: (field: any) => SpoolAccountRedeemRewardsEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => SpoolAccountRedeemRewardsEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => SpoolAccountRedeemRewardsEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => SpoolAccountRedeemRewardsEvent.fetch(client, id),
            new: (fields: SpoolAccountRedeemRewardsEventFields) => {
                return new SpoolAccountRedeemRewardsEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return SpoolAccountRedeemRewardsEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<SpoolAccountRedeemRewardsEvent>> {
        return phantom(SpoolAccountRedeemRewardsEvent.reified());
    }
    static get p() {
        return SpoolAccountRedeemRewardsEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("SpoolAccountRedeemRewardsEvent", {
            sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            spool_account_id: ID.bcs,
            spool_id: ID.bcs,
            rewards_pool_id: ID.bcs,
            staking_type: TypeName.bcs,
            rewards_type: TypeName.bcs,
            redeemed_points: bcs.u64(),
            previous_points: bcs.u64(),
            rewards: bcs.u64(),
            total_claimed_rewards: bcs.u64(),
            total_user_points: bcs.u64(),
            timestamp: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): SpoolAccountRedeemRewardsEvent {
        return SpoolAccountRedeemRewardsEvent.reified().new({
            sender: decodeFromFields("address", fields.sender),
            spoolAccountId: decodeFromFields(ID.reified(), fields.spool_account_id),
            spoolId: decodeFromFields(ID.reified(), fields.spool_id),
            rewardsPoolId: decodeFromFields(ID.reified(), fields.rewards_pool_id),
            stakingType: decodeFromFields(TypeName.reified(), fields.staking_type),
            rewardsType: decodeFromFields(TypeName.reified(), fields.rewards_type),
            redeemedPoints: decodeFromFields("u64", fields.redeemed_points),
            previousPoints: decodeFromFields("u64", fields.previous_points),
            rewards: decodeFromFields("u64", fields.rewards),
            totalClaimedRewards: decodeFromFields("u64", fields.total_claimed_rewards),
            totalUserPoints: decodeFromFields("u64", fields.total_user_points),
            timestamp: decodeFromFields("u64", fields.timestamp),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): SpoolAccountRedeemRewardsEvent {
        if (!isSpoolAccountRedeemRewardsEvent(item.type)) {
            throw new Error("not a SpoolAccountRedeemRewardsEvent type");
        }

        return SpoolAccountRedeemRewardsEvent.reified().new({
            sender: decodeFromFieldsWithTypes("address", item.fields.sender),
            spoolAccountId: decodeFromFieldsWithTypes(ID.reified(), item.fields.spool_account_id),
            spoolId: decodeFromFieldsWithTypes(ID.reified(), item.fields.spool_id),
            rewardsPoolId: decodeFromFieldsWithTypes(ID.reified(), item.fields.rewards_pool_id),
            stakingType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.staking_type),
            rewardsType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.rewards_type),
            redeemedPoints: decodeFromFieldsWithTypes("u64", item.fields.redeemed_points),
            previousPoints: decodeFromFieldsWithTypes("u64", item.fields.previous_points),
            rewards: decodeFromFieldsWithTypes("u64", item.fields.rewards),
            totalClaimedRewards: decodeFromFieldsWithTypes("u64", item.fields.total_claimed_rewards),
            totalUserPoints: decodeFromFieldsWithTypes("u64", item.fields.total_user_points),
            timestamp: decodeFromFieldsWithTypes("u64", item.fields.timestamp),
        });
    }

    static fromBcs(data: Uint8Array): SpoolAccountRedeemRewardsEvent {
        return SpoolAccountRedeemRewardsEvent.fromFields(SpoolAccountRedeemRewardsEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            sender: this.sender,
            spoolAccountId: this.spoolAccountId,
            spoolId: this.spoolId,
            rewardsPoolId: this.rewardsPoolId,
            stakingType: this.stakingType.toJSONField(),
            rewardsType: this.rewardsType.toJSONField(),
            redeemedPoints: this.redeemedPoints.toString(),
            previousPoints: this.previousPoints.toString(),
            rewards: this.rewards.toString(),
            totalClaimedRewards: this.totalClaimedRewards.toString(),
            totalUserPoints: this.totalUserPoints.toString(),
            timestamp: this.timestamp.toString(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): SpoolAccountRedeemRewardsEvent {
        return SpoolAccountRedeemRewardsEvent.reified().new({
            sender: decodeFromJSONField("address", field.sender),
            spoolAccountId: decodeFromJSONField(ID.reified(), field.spoolAccountId),
            spoolId: decodeFromJSONField(ID.reified(), field.spoolId),
            rewardsPoolId: decodeFromJSONField(ID.reified(), field.rewardsPoolId),
            stakingType: decodeFromJSONField(TypeName.reified(), field.stakingType),
            rewardsType: decodeFromJSONField(TypeName.reified(), field.rewardsType),
            redeemedPoints: decodeFromJSONField("u64", field.redeemedPoints),
            previousPoints: decodeFromJSONField("u64", field.previousPoints),
            rewards: decodeFromJSONField("u64", field.rewards),
            totalClaimedRewards: decodeFromJSONField("u64", field.totalClaimedRewards),
            totalUserPoints: decodeFromJSONField("u64", field.totalUserPoints),
            timestamp: decodeFromJSONField("u64", field.timestamp),
        });
    }

    static fromJSON(json: Record<string, any>): SpoolAccountRedeemRewardsEvent {
        if (json.$typeName !== SpoolAccountRedeemRewardsEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return SpoolAccountRedeemRewardsEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): SpoolAccountRedeemRewardsEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isSpoolAccountRedeemRewardsEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a SpoolAccountRedeemRewardsEvent object`);
        }
        return SpoolAccountRedeemRewardsEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<SpoolAccountRedeemRewardsEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching SpoolAccountRedeemRewardsEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isSpoolAccountRedeemRewardsEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SpoolAccountRedeemRewardsEvent object`);
        }
        return SpoolAccountRedeemRewardsEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== SpoolAccountStakeEvent =============================== */

export function isSpoolAccountStakeEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xe87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a::user::SpoolAccountStakeEvent";
}

export interface SpoolAccountStakeEventFields {
    sender: ToField<"address">;
    spoolAccountId: ToField<ID>;
    spoolId: ToField<ID>;
    stakingType: ToField<TypeName>;
    stakeAmount: ToField<"u64">;
    previousAmount: ToField<"u64">;
    timestamp: ToField<"u64">;
}

export type SpoolAccountStakeEventReified = Reified<SpoolAccountStakeEvent, SpoolAccountStakeEventFields>;

export class SpoolAccountStakeEvent implements StructClass {
    static readonly $typeName = "0xe87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a::user::SpoolAccountStakeEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = SpoolAccountStakeEvent.$typeName;

    readonly $fullTypeName: "0xe87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a::user::SpoolAccountStakeEvent";

    readonly $typeArgs: [];

    readonly sender: ToField<"address">;
    readonly spoolAccountId: ToField<ID>;
    readonly spoolId: ToField<ID>;
    readonly stakingType: ToField<TypeName>;
    readonly stakeAmount: ToField<"u64">;
    readonly previousAmount: ToField<"u64">;
    readonly timestamp: ToField<"u64">;

    private constructor(typeArgs: [], fields: SpoolAccountStakeEventFields) {
        this.$fullTypeName = composeSuiType(
            SpoolAccountStakeEvent.$typeName,
            ...typeArgs
        ) as "0xe87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a::user::SpoolAccountStakeEvent";
        this.$typeArgs = typeArgs;

        this.sender = fields.sender;
        this.spoolAccountId = fields.spoolAccountId;
        this.spoolId = fields.spoolId;
        this.stakingType = fields.stakingType;
        this.stakeAmount = fields.stakeAmount;
        this.previousAmount = fields.previousAmount;
        this.timestamp = fields.timestamp;
    }

    static reified(): SpoolAccountStakeEventReified {
        return {
            typeName: SpoolAccountStakeEvent.$typeName,
            fullTypeName: composeSuiType(
                SpoolAccountStakeEvent.$typeName,
                ...[]
            ) as "0xe87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a::user::SpoolAccountStakeEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => SpoolAccountStakeEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => SpoolAccountStakeEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => SpoolAccountStakeEvent.fromBcs(data),
            bcs: SpoolAccountStakeEvent.bcs,
            fromJSONField: (field: any) => SpoolAccountStakeEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => SpoolAccountStakeEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => SpoolAccountStakeEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => SpoolAccountStakeEvent.fetch(client, id),
            new: (fields: SpoolAccountStakeEventFields) => {
                return new SpoolAccountStakeEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return SpoolAccountStakeEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<SpoolAccountStakeEvent>> {
        return phantom(SpoolAccountStakeEvent.reified());
    }
    static get p() {
        return SpoolAccountStakeEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("SpoolAccountStakeEvent", {
            sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            spool_account_id: ID.bcs,
            spool_id: ID.bcs,
            staking_type: TypeName.bcs,
            stake_amount: bcs.u64(),
            previous_amount: bcs.u64(),
            timestamp: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): SpoolAccountStakeEvent {
        return SpoolAccountStakeEvent.reified().new({
            sender: decodeFromFields("address", fields.sender),
            spoolAccountId: decodeFromFields(ID.reified(), fields.spool_account_id),
            spoolId: decodeFromFields(ID.reified(), fields.spool_id),
            stakingType: decodeFromFields(TypeName.reified(), fields.staking_type),
            stakeAmount: decodeFromFields("u64", fields.stake_amount),
            previousAmount: decodeFromFields("u64", fields.previous_amount),
            timestamp: decodeFromFields("u64", fields.timestamp),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): SpoolAccountStakeEvent {
        if (!isSpoolAccountStakeEvent(item.type)) {
            throw new Error("not a SpoolAccountStakeEvent type");
        }

        return SpoolAccountStakeEvent.reified().new({
            sender: decodeFromFieldsWithTypes("address", item.fields.sender),
            spoolAccountId: decodeFromFieldsWithTypes(ID.reified(), item.fields.spool_account_id),
            spoolId: decodeFromFieldsWithTypes(ID.reified(), item.fields.spool_id),
            stakingType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.staking_type),
            stakeAmount: decodeFromFieldsWithTypes("u64", item.fields.stake_amount),
            previousAmount: decodeFromFieldsWithTypes("u64", item.fields.previous_amount),
            timestamp: decodeFromFieldsWithTypes("u64", item.fields.timestamp),
        });
    }

    static fromBcs(data: Uint8Array): SpoolAccountStakeEvent {
        return SpoolAccountStakeEvent.fromFields(SpoolAccountStakeEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            sender: this.sender,
            spoolAccountId: this.spoolAccountId,
            spoolId: this.spoolId,
            stakingType: this.stakingType.toJSONField(),
            stakeAmount: this.stakeAmount.toString(),
            previousAmount: this.previousAmount.toString(),
            timestamp: this.timestamp.toString(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): SpoolAccountStakeEvent {
        return SpoolAccountStakeEvent.reified().new({
            sender: decodeFromJSONField("address", field.sender),
            spoolAccountId: decodeFromJSONField(ID.reified(), field.spoolAccountId),
            spoolId: decodeFromJSONField(ID.reified(), field.spoolId),
            stakingType: decodeFromJSONField(TypeName.reified(), field.stakingType),
            stakeAmount: decodeFromJSONField("u64", field.stakeAmount),
            previousAmount: decodeFromJSONField("u64", field.previousAmount),
            timestamp: decodeFromJSONField("u64", field.timestamp),
        });
    }

    static fromJSON(json: Record<string, any>): SpoolAccountStakeEvent {
        if (json.$typeName !== SpoolAccountStakeEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return SpoolAccountStakeEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): SpoolAccountStakeEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isSpoolAccountStakeEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a SpoolAccountStakeEvent object`);
        }
        return SpoolAccountStakeEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<SpoolAccountStakeEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching SpoolAccountStakeEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isSpoolAccountStakeEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SpoolAccountStakeEvent object`);
        }
        return SpoolAccountStakeEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== SpoolAccountUnstakeEvent =============================== */

export function isSpoolAccountUnstakeEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xe87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a::user::SpoolAccountUnstakeEvent";
}

export interface SpoolAccountUnstakeEventFields {
    spoolAccountId: ToField<ID>;
    spoolId: ToField<ID>;
    stakingType: ToField<TypeName>;
    unstakeAmount: ToField<"u64">;
    remainingAmount: ToField<"u64">;
    timestamp: ToField<"u64">;
}

export type SpoolAccountUnstakeEventReified = Reified<SpoolAccountUnstakeEvent, SpoolAccountUnstakeEventFields>;

export class SpoolAccountUnstakeEvent implements StructClass {
    static readonly $typeName = "0xe87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a::user::SpoolAccountUnstakeEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = SpoolAccountUnstakeEvent.$typeName;

    readonly $fullTypeName: "0xe87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a::user::SpoolAccountUnstakeEvent";

    readonly $typeArgs: [];

    readonly spoolAccountId: ToField<ID>;
    readonly spoolId: ToField<ID>;
    readonly stakingType: ToField<TypeName>;
    readonly unstakeAmount: ToField<"u64">;
    readonly remainingAmount: ToField<"u64">;
    readonly timestamp: ToField<"u64">;

    private constructor(typeArgs: [], fields: SpoolAccountUnstakeEventFields) {
        this.$fullTypeName = composeSuiType(
            SpoolAccountUnstakeEvent.$typeName,
            ...typeArgs
        ) as "0xe87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a::user::SpoolAccountUnstakeEvent";
        this.$typeArgs = typeArgs;

        this.spoolAccountId = fields.spoolAccountId;
        this.spoolId = fields.spoolId;
        this.stakingType = fields.stakingType;
        this.unstakeAmount = fields.unstakeAmount;
        this.remainingAmount = fields.remainingAmount;
        this.timestamp = fields.timestamp;
    }

    static reified(): SpoolAccountUnstakeEventReified {
        return {
            typeName: SpoolAccountUnstakeEvent.$typeName,
            fullTypeName: composeSuiType(
                SpoolAccountUnstakeEvent.$typeName,
                ...[]
            ) as "0xe87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a::user::SpoolAccountUnstakeEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => SpoolAccountUnstakeEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => SpoolAccountUnstakeEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => SpoolAccountUnstakeEvent.fromBcs(data),
            bcs: SpoolAccountUnstakeEvent.bcs,
            fromJSONField: (field: any) => SpoolAccountUnstakeEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => SpoolAccountUnstakeEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => SpoolAccountUnstakeEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => SpoolAccountUnstakeEvent.fetch(client, id),
            new: (fields: SpoolAccountUnstakeEventFields) => {
                return new SpoolAccountUnstakeEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return SpoolAccountUnstakeEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<SpoolAccountUnstakeEvent>> {
        return phantom(SpoolAccountUnstakeEvent.reified());
    }
    static get p() {
        return SpoolAccountUnstakeEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("SpoolAccountUnstakeEvent", {
            spool_account_id: ID.bcs,
            spool_id: ID.bcs,
            staking_type: TypeName.bcs,
            unstake_amount: bcs.u64(),
            remaining_amount: bcs.u64(),
            timestamp: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): SpoolAccountUnstakeEvent {
        return SpoolAccountUnstakeEvent.reified().new({
            spoolAccountId: decodeFromFields(ID.reified(), fields.spool_account_id),
            spoolId: decodeFromFields(ID.reified(), fields.spool_id),
            stakingType: decodeFromFields(TypeName.reified(), fields.staking_type),
            unstakeAmount: decodeFromFields("u64", fields.unstake_amount),
            remainingAmount: decodeFromFields("u64", fields.remaining_amount),
            timestamp: decodeFromFields("u64", fields.timestamp),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): SpoolAccountUnstakeEvent {
        if (!isSpoolAccountUnstakeEvent(item.type)) {
            throw new Error("not a SpoolAccountUnstakeEvent type");
        }

        return SpoolAccountUnstakeEvent.reified().new({
            spoolAccountId: decodeFromFieldsWithTypes(ID.reified(), item.fields.spool_account_id),
            spoolId: decodeFromFieldsWithTypes(ID.reified(), item.fields.spool_id),
            stakingType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.staking_type),
            unstakeAmount: decodeFromFieldsWithTypes("u64", item.fields.unstake_amount),
            remainingAmount: decodeFromFieldsWithTypes("u64", item.fields.remaining_amount),
            timestamp: decodeFromFieldsWithTypes("u64", item.fields.timestamp),
        });
    }

    static fromBcs(data: Uint8Array): SpoolAccountUnstakeEvent {
        return SpoolAccountUnstakeEvent.fromFields(SpoolAccountUnstakeEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            spoolAccountId: this.spoolAccountId,
            spoolId: this.spoolId,
            stakingType: this.stakingType.toJSONField(),
            unstakeAmount: this.unstakeAmount.toString(),
            remainingAmount: this.remainingAmount.toString(),
            timestamp: this.timestamp.toString(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): SpoolAccountUnstakeEvent {
        return SpoolAccountUnstakeEvent.reified().new({
            spoolAccountId: decodeFromJSONField(ID.reified(), field.spoolAccountId),
            spoolId: decodeFromJSONField(ID.reified(), field.spoolId),
            stakingType: decodeFromJSONField(TypeName.reified(), field.stakingType),
            unstakeAmount: decodeFromJSONField("u64", field.unstakeAmount),
            remainingAmount: decodeFromJSONField("u64", field.remainingAmount),
            timestamp: decodeFromJSONField("u64", field.timestamp),
        });
    }

    static fromJSON(json: Record<string, any>): SpoolAccountUnstakeEvent {
        if (json.$typeName !== SpoolAccountUnstakeEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return SpoolAccountUnstakeEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): SpoolAccountUnstakeEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isSpoolAccountUnstakeEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a SpoolAccountUnstakeEvent object`);
        }
        return SpoolAccountUnstakeEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<SpoolAccountUnstakeEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching SpoolAccountUnstakeEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isSpoolAccountUnstakeEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SpoolAccountUnstakeEvent object`);
        }
        return SpoolAccountUnstakeEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}
