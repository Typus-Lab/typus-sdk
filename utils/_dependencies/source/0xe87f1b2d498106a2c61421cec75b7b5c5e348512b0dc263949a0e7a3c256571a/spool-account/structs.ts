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
import { TypeName } from "../../0x1/type-name/structs";
import { Balance } from "../../0x2/balance/structs";
import { ID, UID } from "../../0x2/object/structs";
import { bcs, fromB64 } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";

/* ============================== SpoolAccount =============================== */

export function isSpoolAccount(type: string): boolean {
    type = compressSuiType(type);
    return type.startsWith("0xe87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a::spool_account::SpoolAccount<");
}

export interface SpoolAccountFields<StakeType extends PhantomTypeArgument> {
    id: ToField<UID>;
    spoolId: ToField<ID>;
    stakeType: ToField<TypeName>;
    stakes: ToField<Balance<StakeType>>;
    points: ToField<"u64">;
    totalPoints: ToField<"u64">;
    index: ToField<"u64">;
}

export type SpoolAccountReified<StakeType extends PhantomTypeArgument> = Reified<SpoolAccount<StakeType>, SpoolAccountFields<StakeType>>;

export class SpoolAccount<StakeType extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0xe87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a::spool_account::SpoolAccount";
    static readonly $numTypeParams = 1;

    readonly $typeName = SpoolAccount.$typeName;

    readonly $fullTypeName: `0xe87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a::spool_account::SpoolAccount<${PhantomToTypeStr<StakeType>}>`;

    readonly $typeArgs: [PhantomToTypeStr<StakeType>];

    readonly id: ToField<UID>;
    readonly spoolId: ToField<ID>;
    readonly stakeType: ToField<TypeName>;
    readonly stakes: ToField<Balance<StakeType>>;
    readonly points: ToField<"u64">;
    readonly totalPoints: ToField<"u64">;
    readonly index: ToField<"u64">;

    private constructor(typeArgs: [PhantomToTypeStr<StakeType>], fields: SpoolAccountFields<StakeType>) {
        this.$fullTypeName = composeSuiType(
            SpoolAccount.$typeName,
            ...typeArgs
        ) as `0xe87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a::spool_account::SpoolAccount<${PhantomToTypeStr<StakeType>}>`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.spoolId = fields.spoolId;
        this.stakeType = fields.stakeType;
        this.stakes = fields.stakes;
        this.points = fields.points;
        this.totalPoints = fields.totalPoints;
        this.index = fields.index;
    }

    static reified<StakeType extends PhantomReified<PhantomTypeArgument>>(
        StakeType: StakeType
    ): SpoolAccountReified<ToPhantomTypeArgument<StakeType>> {
        return {
            typeName: SpoolAccount.$typeName,
            fullTypeName: composeSuiType(
                SpoolAccount.$typeName,
                ...[extractType(StakeType)]
            ) as `0xe87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a::spool_account::SpoolAccount<${PhantomToTypeStr<ToPhantomTypeArgument<StakeType>>}>`,
            typeArgs: [extractType(StakeType)] as [PhantomToTypeStr<ToPhantomTypeArgument<StakeType>>],
            reifiedTypeArgs: [StakeType],
            fromFields: (fields: Record<string, any>) => SpoolAccount.fromFields(StakeType, fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => SpoolAccount.fromFieldsWithTypes(StakeType, item),
            fromBcs: (data: Uint8Array) => SpoolAccount.fromBcs(StakeType, data),
            bcs: SpoolAccount.bcs,
            fromJSONField: (field: any) => SpoolAccount.fromJSONField(StakeType, field),
            fromJSON: (json: Record<string, any>) => SpoolAccount.fromJSON(StakeType, json),
            fromSuiParsedData: (content: SuiParsedData) => SpoolAccount.fromSuiParsedData(StakeType, content),
            fetch: async (client: SuiClient, id: string) => SpoolAccount.fetch(client, StakeType, id),
            new: (fields: SpoolAccountFields<ToPhantomTypeArgument<StakeType>>) => {
                return new SpoolAccount([extractType(StakeType)], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return SpoolAccount.reified;
    }

    static phantom<StakeType extends PhantomReified<PhantomTypeArgument>>(
        StakeType: StakeType
    ): PhantomReified<ToTypeStr<SpoolAccount<ToPhantomTypeArgument<StakeType>>>> {
        return phantom(SpoolAccount.reified(StakeType));
    }
    static get p() {
        return SpoolAccount.phantom;
    }

    static get bcs() {
        return bcs.struct("SpoolAccount", {
            id: UID.bcs,
            spool_id: ID.bcs,
            stake_type: TypeName.bcs,
            stakes: Balance.bcs,
            points: bcs.u64(),
            total_points: bcs.u64(),
            index: bcs.u64(),
        });
    }

    static fromFields<StakeType extends PhantomReified<PhantomTypeArgument>>(
        typeArg: StakeType,
        fields: Record<string, any>
    ): SpoolAccount<ToPhantomTypeArgument<StakeType>> {
        return SpoolAccount.reified(typeArg).new({
            id: decodeFromFields(UID.reified(), fields.id),
            spoolId: decodeFromFields(ID.reified(), fields.spool_id),
            stakeType: decodeFromFields(TypeName.reified(), fields.stake_type),
            stakes: decodeFromFields(Balance.reified(typeArg), fields.stakes),
            points: decodeFromFields("u64", fields.points),
            totalPoints: decodeFromFields("u64", fields.total_points),
            index: decodeFromFields("u64", fields.index),
        });
    }

    static fromFieldsWithTypes<StakeType extends PhantomReified<PhantomTypeArgument>>(
        typeArg: StakeType,
        item: FieldsWithTypes
    ): SpoolAccount<ToPhantomTypeArgument<StakeType>> {
        if (!isSpoolAccount(item.type)) {
            throw new Error("not a SpoolAccount type");
        }
        assertFieldsWithTypesArgsMatch(item, [typeArg]);

        return SpoolAccount.reified(typeArg).new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            spoolId: decodeFromFieldsWithTypes(ID.reified(), item.fields.spool_id),
            stakeType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.stake_type),
            stakes: decodeFromFieldsWithTypes(Balance.reified(typeArg), item.fields.stakes),
            points: decodeFromFieldsWithTypes("u64", item.fields.points),
            totalPoints: decodeFromFieldsWithTypes("u64", item.fields.total_points),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
        });
    }

    static fromBcs<StakeType extends PhantomReified<PhantomTypeArgument>>(
        typeArg: StakeType,
        data: Uint8Array
    ): SpoolAccount<ToPhantomTypeArgument<StakeType>> {
        return SpoolAccount.fromFields(typeArg, SpoolAccount.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            spoolId: this.spoolId,
            stakeType: this.stakeType.toJSONField(),
            stakes: this.stakes.toJSONField(),
            points: this.points.toString(),
            totalPoints: this.totalPoints.toString(),
            index: this.index.toString(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField<StakeType extends PhantomReified<PhantomTypeArgument>>(
        typeArg: StakeType,
        field: any
    ): SpoolAccount<ToPhantomTypeArgument<StakeType>> {
        return SpoolAccount.reified(typeArg).new({
            id: decodeFromJSONField(UID.reified(), field.id),
            spoolId: decodeFromJSONField(ID.reified(), field.spoolId),
            stakeType: decodeFromJSONField(TypeName.reified(), field.stakeType),
            stakes: decodeFromJSONField(Balance.reified(typeArg), field.stakes),
            points: decodeFromJSONField("u64", field.points),
            totalPoints: decodeFromJSONField("u64", field.totalPoints),
            index: decodeFromJSONField("u64", field.index),
        });
    }

    static fromJSON<StakeType extends PhantomReified<PhantomTypeArgument>>(
        typeArg: StakeType,
        json: Record<string, any>
    ): SpoolAccount<ToPhantomTypeArgument<StakeType>> {
        if (json.$typeName !== SpoolAccount.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        assertReifiedTypeArgsMatch(composeSuiType(SpoolAccount.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg]);

        return SpoolAccount.fromJSONField(typeArg, json);
    }

    static fromSuiParsedData<StakeType extends PhantomReified<PhantomTypeArgument>>(
        typeArg: StakeType,
        content: SuiParsedData
    ): SpoolAccount<ToPhantomTypeArgument<StakeType>> {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isSpoolAccount(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a SpoolAccount object`);
        }
        return SpoolAccount.fromFieldsWithTypes(typeArg, content);
    }

    static async fetch<StakeType extends PhantomReified<PhantomTypeArgument>>(
        client: SuiClient,
        typeArg: StakeType,
        id: string
    ): Promise<SpoolAccount<ToPhantomTypeArgument<StakeType>>> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching SpoolAccount object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isSpoolAccount(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SpoolAccount object`);
        }
        return SpoolAccount.fromBcs(typeArg, fromB64(res.data.bcs.bcsBytes));
    }
}
