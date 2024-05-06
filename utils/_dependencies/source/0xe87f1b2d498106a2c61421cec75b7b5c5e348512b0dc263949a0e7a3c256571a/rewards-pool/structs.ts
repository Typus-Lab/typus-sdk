import {
    PhantomReified,
    PhantomToTypeStr,
    PhantomTypeArgument,
    Reified,
    StructClass,
    ToField,
    ToPhantomTypeArgument,
    ToTypeStr,
    assertFieldsWithTypesArgsMatch,
    assertReifiedTypeArgsMatch,
    decodeFromFields,
    decodeFromFieldsWithTypes,
    decodeFromJSONField,
    extractType,
    phantom,
} from "../../../../_framework/reified";
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../../../_framework/util";
import { Balance } from "../../0x2/balance/structs";
import { ID, UID } from "../../0x2/object/structs";
import { bcs, fromB64 } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";

/* ============================== RewardsPool =============================== */

export function isRewardsPool(type: string): boolean {
    type = compressSuiType(type);
    return type.startsWith("0xe87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a::rewards_pool::RewardsPool<");
}

export interface RewardsPoolFields<RewardType extends PhantomTypeArgument> {
    id: ToField<UID>;
    spoolId: ToField<ID>;
    exchangeRateNumerator: ToField<"u64">;
    exchangeRateDenominator: ToField<"u64">;
    rewards: ToField<Balance<RewardType>>;
    claimedRewards: ToField<"u64">;
}

export type RewardsPoolReified<RewardType extends PhantomTypeArgument> = Reified<RewardsPool<RewardType>, RewardsPoolFields<RewardType>>;

export class RewardsPool<RewardType extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0xe87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a::rewards_pool::RewardsPool";
    static readonly $numTypeParams = 1;

    readonly $typeName = RewardsPool.$typeName;

    readonly $fullTypeName: `0xe87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a::rewards_pool::RewardsPool<${PhantomToTypeStr<RewardType>}>`;

    readonly $typeArgs: [PhantomToTypeStr<RewardType>];

    readonly id: ToField<UID>;
    readonly spoolId: ToField<ID>;
    readonly exchangeRateNumerator: ToField<"u64">;
    readonly exchangeRateDenominator: ToField<"u64">;
    readonly rewards: ToField<Balance<RewardType>>;
    readonly claimedRewards: ToField<"u64">;

    private constructor(typeArgs: [PhantomToTypeStr<RewardType>], fields: RewardsPoolFields<RewardType>) {
        this.$fullTypeName = composeSuiType(
            RewardsPool.$typeName,
            ...typeArgs
        ) as `0xe87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a::rewards_pool::RewardsPool<${PhantomToTypeStr<RewardType>}>`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.spoolId = fields.spoolId;
        this.exchangeRateNumerator = fields.exchangeRateNumerator;
        this.exchangeRateDenominator = fields.exchangeRateDenominator;
        this.rewards = fields.rewards;
        this.claimedRewards = fields.claimedRewards;
    }

    static reified<RewardType extends PhantomReified<PhantomTypeArgument>>(
        RewardType: RewardType
    ): RewardsPoolReified<ToPhantomTypeArgument<RewardType>> {
        return {
            typeName: RewardsPool.$typeName,
            fullTypeName: composeSuiType(
                RewardsPool.$typeName,
                ...[extractType(RewardType)]
            ) as `0xe87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a::rewards_pool::RewardsPool<${PhantomToTypeStr<ToPhantomTypeArgument<RewardType>>}>`,
            typeArgs: [extractType(RewardType)] as [PhantomToTypeStr<ToPhantomTypeArgument<RewardType>>],
            reifiedTypeArgs: [RewardType],
            fromFields: (fields: Record<string, any>) => RewardsPool.fromFields(RewardType, fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => RewardsPool.fromFieldsWithTypes(RewardType, item),
            fromBcs: (data: Uint8Array) => RewardsPool.fromBcs(RewardType, data),
            bcs: RewardsPool.bcs,
            fromJSONField: (field: any) => RewardsPool.fromJSONField(RewardType, field),
            fromJSON: (json: Record<string, any>) => RewardsPool.fromJSON(RewardType, json),
            fromSuiParsedData: (content: SuiParsedData) => RewardsPool.fromSuiParsedData(RewardType, content),
            fetch: async (client: SuiClient, id: string) => RewardsPool.fetch(client, RewardType, id),
            new: (fields: RewardsPoolFields<ToPhantomTypeArgument<RewardType>>) => {
                return new RewardsPool([extractType(RewardType)], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return RewardsPool.reified;
    }

    static phantom<RewardType extends PhantomReified<PhantomTypeArgument>>(
        RewardType: RewardType
    ): PhantomReified<ToTypeStr<RewardsPool<ToPhantomTypeArgument<RewardType>>>> {
        return phantom(RewardsPool.reified(RewardType));
    }
    static get p() {
        return RewardsPool.phantom;
    }

    static get bcs() {
        return bcs.struct("RewardsPool", {
            id: UID.bcs,
            spool_id: ID.bcs,
            exchange_rate_numerator: bcs.u64(),
            exchange_rate_denominator: bcs.u64(),
            rewards: Balance.bcs,
            claimed_rewards: bcs.u64(),
        });
    }

    static fromFields<RewardType extends PhantomReified<PhantomTypeArgument>>(
        typeArg: RewardType,
        fields: Record<string, any>
    ): RewardsPool<ToPhantomTypeArgument<RewardType>> {
        return RewardsPool.reified(typeArg).new({
            id: decodeFromFields(UID.reified(), fields.id),
            spoolId: decodeFromFields(ID.reified(), fields.spool_id),
            exchangeRateNumerator: decodeFromFields("u64", fields.exchange_rate_numerator),
            exchangeRateDenominator: decodeFromFields("u64", fields.exchange_rate_denominator),
            rewards: decodeFromFields(Balance.reified(typeArg), fields.rewards),
            claimedRewards: decodeFromFields("u64", fields.claimed_rewards),
        });
    }

    static fromFieldsWithTypes<RewardType extends PhantomReified<PhantomTypeArgument>>(
        typeArg: RewardType,
        item: FieldsWithTypes
    ): RewardsPool<ToPhantomTypeArgument<RewardType>> {
        if (!isRewardsPool(item.type)) {
            throw new Error("not a RewardsPool type");
        }
        assertFieldsWithTypesArgsMatch(item, [typeArg]);

        return RewardsPool.reified(typeArg).new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            spoolId: decodeFromFieldsWithTypes(ID.reified(), item.fields.spool_id),
            exchangeRateNumerator: decodeFromFieldsWithTypes("u64", item.fields.exchange_rate_numerator),
            exchangeRateDenominator: decodeFromFieldsWithTypes("u64", item.fields.exchange_rate_denominator),
            rewards: decodeFromFieldsWithTypes(Balance.reified(typeArg), item.fields.rewards),
            claimedRewards: decodeFromFieldsWithTypes("u64", item.fields.claimed_rewards),
        });
    }

    static fromBcs<RewardType extends PhantomReified<PhantomTypeArgument>>(
        typeArg: RewardType,
        data: Uint8Array
    ): RewardsPool<ToPhantomTypeArgument<RewardType>> {
        return RewardsPool.fromFields(typeArg, RewardsPool.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            spoolId: this.spoolId,
            exchangeRateNumerator: this.exchangeRateNumerator.toString(),
            exchangeRateDenominator: this.exchangeRateDenominator.toString(),
            rewards: this.rewards.toJSONField(),
            claimedRewards: this.claimedRewards.toString(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField<RewardType extends PhantomReified<PhantomTypeArgument>>(
        typeArg: RewardType,
        field: any
    ): RewardsPool<ToPhantomTypeArgument<RewardType>> {
        return RewardsPool.reified(typeArg).new({
            id: decodeFromJSONField(UID.reified(), field.id),
            spoolId: decodeFromJSONField(ID.reified(), field.spoolId),
            exchangeRateNumerator: decodeFromJSONField("u64", field.exchangeRateNumerator),
            exchangeRateDenominator: decodeFromJSONField("u64", field.exchangeRateDenominator),
            rewards: decodeFromJSONField(Balance.reified(typeArg), field.rewards),
            claimedRewards: decodeFromJSONField("u64", field.claimedRewards),
        });
    }

    static fromJSON<RewardType extends PhantomReified<PhantomTypeArgument>>(
        typeArg: RewardType,
        json: Record<string, any>
    ): RewardsPool<ToPhantomTypeArgument<RewardType>> {
        if (json.$typeName !== RewardsPool.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        assertReifiedTypeArgsMatch(composeSuiType(RewardsPool.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg]);

        return RewardsPool.fromJSONField(typeArg, json);
    }

    static fromSuiParsedData<RewardType extends PhantomReified<PhantomTypeArgument>>(
        typeArg: RewardType,
        content: SuiParsedData
    ): RewardsPool<ToPhantomTypeArgument<RewardType>> {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRewardsPool(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a RewardsPool object`);
        }
        return RewardsPool.fromFieldsWithTypes(typeArg, content);
    }

    static async fetch<RewardType extends PhantomReified<PhantomTypeArgument>>(
        client: SuiClient,
        typeArg: RewardType,
        id: string
    ): Promise<RewardsPool<ToPhantomTypeArgument<RewardType>>> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching RewardsPool object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isRewardsPool(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RewardsPool object`);
        }
        return RewardsPool.fromBcs(typeArg, fromB64(res.data.bcs.bcsBytes));
    }
}
