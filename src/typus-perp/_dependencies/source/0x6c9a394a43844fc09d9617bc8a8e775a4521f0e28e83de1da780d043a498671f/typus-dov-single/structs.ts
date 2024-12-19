import * as reified from "../../../../_framework/reified";
import {
    PhantomReified,
    Reified,
    StructClass,
    ToField,
    ToTypeStr,
    decodeFromFields,
    decodeFromFieldsWithTypes,
    decodeFromJSONField,
    fieldToJSON,
    phantom,
} from "../../../../_framework/reified";
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../../../_framework/util";
import { Vector } from "../../../../_framework/vector";
import { Option } from "../../0x1/option/structs";
import { String } from "../../0x1/string/structs";
import { TypeName } from "../../0x1/type-name/structs";
import { UID } from "../../0x2/object/structs";
import { Authority } from "../../0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded/authority/structs";
import { BalancePool } from "../../0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded/balance-pool/structs";
import { PKG_V1, PKG_V19, PKG_V25, PKG_V30, PKG_V31 } from "../index";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromB64, fromHEX, toHEX } from "@mysten/sui/utils";

/* ============================== Config =============================== */

export function isConfig(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::typus_dov_single::Config`;
}

export interface ConfigFields {
    oracleId: ToField<"address">;
    depositLotSize: ToField<"u64">;
    bidLotSize: ToField<"u64">;
    minDepositSize: ToField<"u64">;
    minBidSize: ToField<"u64">;
    maxDepositEntry: ToField<"u64">;
    maxBidEntry: ToField<"u64">;
    depositFeeBp: ToField<"u64">;
    depositFeeShareBp: ToField<"u64">;
    depositSharedFeePool: ToField<Option<Vector<"u8">>>;
    bidFeeBp: ToField<"u64">;
    depositIncentiveBp: ToField<"u64">;
    bidIncentiveBp: ToField<"u64">;
    auctionDelayTsMs: ToField<"u64">;
    auctionDurationTsMs: ToField<"u64">;
    recoupDelayTsMs: ToField<"u64">;
    capacity: ToField<"u64">;
    leverage: ToField<"u64">;
    riskLevel: ToField<"u64">;
    hasNext: ToField<"bool">;
    activeVaultConfig: ToField<VaultConfig>;
    warmupVaultConfig: ToField<VaultConfig>;
    u64Padding: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<"u8">>;
}

export type ConfigReified = Reified<Config, ConfigFields>;

export class Config implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::typus_dov_single::Config`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = Config.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::typus_dov_single::Config`;
    readonly $typeArgs: [];
    readonly $isPhantom = Config.$isPhantom;

    readonly oracleId: ToField<"address">;
    readonly depositLotSize: ToField<"u64">;
    readonly bidLotSize: ToField<"u64">;
    readonly minDepositSize: ToField<"u64">;
    readonly minBidSize: ToField<"u64">;
    readonly maxDepositEntry: ToField<"u64">;
    readonly maxBidEntry: ToField<"u64">;
    readonly depositFeeBp: ToField<"u64">;
    readonly depositFeeShareBp: ToField<"u64">;
    readonly depositSharedFeePool: ToField<Option<Vector<"u8">>>;
    readonly bidFeeBp: ToField<"u64">;
    readonly depositIncentiveBp: ToField<"u64">;
    readonly bidIncentiveBp: ToField<"u64">;
    readonly auctionDelayTsMs: ToField<"u64">;
    readonly auctionDurationTsMs: ToField<"u64">;
    readonly recoupDelayTsMs: ToField<"u64">;
    readonly capacity: ToField<"u64">;
    readonly leverage: ToField<"u64">;
    readonly riskLevel: ToField<"u64">;
    readonly hasNext: ToField<"bool">;
    readonly activeVaultConfig: ToField<VaultConfig>;
    readonly warmupVaultConfig: ToField<VaultConfig>;
    readonly u64Padding: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<"u8">>;

    private constructor(typeArgs: [], fields: ConfigFields) {
        this.$fullTypeName = composeSuiType(Config.$typeName, ...typeArgs) as `${typeof PKG_V1}::typus_dov_single::Config`;
        this.$typeArgs = typeArgs;

        this.oracleId = fields.oracleId;
        this.depositLotSize = fields.depositLotSize;
        this.bidLotSize = fields.bidLotSize;
        this.minDepositSize = fields.minDepositSize;
        this.minBidSize = fields.minBidSize;
        this.maxDepositEntry = fields.maxDepositEntry;
        this.maxBidEntry = fields.maxBidEntry;
        this.depositFeeBp = fields.depositFeeBp;
        this.depositFeeShareBp = fields.depositFeeShareBp;
        this.depositSharedFeePool = fields.depositSharedFeePool;
        this.bidFeeBp = fields.bidFeeBp;
        this.depositIncentiveBp = fields.depositIncentiveBp;
        this.bidIncentiveBp = fields.bidIncentiveBp;
        this.auctionDelayTsMs = fields.auctionDelayTsMs;
        this.auctionDurationTsMs = fields.auctionDurationTsMs;
        this.recoupDelayTsMs = fields.recoupDelayTsMs;
        this.capacity = fields.capacity;
        this.leverage = fields.leverage;
        this.riskLevel = fields.riskLevel;
        this.hasNext = fields.hasNext;
        this.activeVaultConfig = fields.activeVaultConfig;
        this.warmupVaultConfig = fields.warmupVaultConfig;
        this.u64Padding = fields.u64Padding;
        this.bcsPadding = fields.bcsPadding;
    }

    static reified(): ConfigReified {
        return {
            typeName: Config.$typeName,
            fullTypeName: composeSuiType(Config.$typeName, ...[]) as `${typeof PKG_V1}::typus_dov_single::Config`,
            typeArgs: [] as [],
            isPhantom: Config.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Config.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Config.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Config.fromBcs(data),
            bcs: Config.bcs,
            fromJSONField: (field: any) => Config.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Config.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Config.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => Config.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => Config.fetch(client, id),
            new: (fields: ConfigFields) => {
                return new Config([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Config.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<Config>> {
        return phantom(Config.reified());
    }
    static get p() {
        return Config.phantom();
    }

    static get bcs() {
        return bcs.struct("Config", {
            oracle_id: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            deposit_lot_size: bcs.u64(),
            bid_lot_size: bcs.u64(),
            min_deposit_size: bcs.u64(),
            min_bid_size: bcs.u64(),
            max_deposit_entry: bcs.u64(),
            max_bid_entry: bcs.u64(),
            deposit_fee_bp: bcs.u64(),
            deposit_fee_share_bp: bcs.u64(),
            deposit_shared_fee_pool: Option.bcs(bcs.vector(bcs.u8())),
            bid_fee_bp: bcs.u64(),
            deposit_incentive_bp: bcs.u64(),
            bid_incentive_bp: bcs.u64(),
            auction_delay_ts_ms: bcs.u64(),
            auction_duration_ts_ms: bcs.u64(),
            recoup_delay_ts_ms: bcs.u64(),
            capacity: bcs.u64(),
            leverage: bcs.u64(),
            risk_level: bcs.u64(),
            has_next: bcs.bool(),
            active_vault_config: VaultConfig.bcs,
            warmup_vault_config: VaultConfig.bcs,
            u64_padding: bcs.vector(bcs.u64()),
            bcs_padding: bcs.vector(bcs.u8()),
        });
    }

    static fromFields(fields: Record<string, any>): Config {
        return Config.reified().new({
            oracleId: decodeFromFields("address", fields.oracle_id),
            depositLotSize: decodeFromFields("u64", fields.deposit_lot_size),
            bidLotSize: decodeFromFields("u64", fields.bid_lot_size),
            minDepositSize: decodeFromFields("u64", fields.min_deposit_size),
            minBidSize: decodeFromFields("u64", fields.min_bid_size),
            maxDepositEntry: decodeFromFields("u64", fields.max_deposit_entry),
            maxBidEntry: decodeFromFields("u64", fields.max_bid_entry),
            depositFeeBp: decodeFromFields("u64", fields.deposit_fee_bp),
            depositFeeShareBp: decodeFromFields("u64", fields.deposit_fee_share_bp),
            depositSharedFeePool: decodeFromFields(Option.reified(reified.vector("u8")), fields.deposit_shared_fee_pool),
            bidFeeBp: decodeFromFields("u64", fields.bid_fee_bp),
            depositIncentiveBp: decodeFromFields("u64", fields.deposit_incentive_bp),
            bidIncentiveBp: decodeFromFields("u64", fields.bid_incentive_bp),
            auctionDelayTsMs: decodeFromFields("u64", fields.auction_delay_ts_ms),
            auctionDurationTsMs: decodeFromFields("u64", fields.auction_duration_ts_ms),
            recoupDelayTsMs: decodeFromFields("u64", fields.recoup_delay_ts_ms),
            capacity: decodeFromFields("u64", fields.capacity),
            leverage: decodeFromFields("u64", fields.leverage),
            riskLevel: decodeFromFields("u64", fields.risk_level),
            hasNext: decodeFromFields("bool", fields.has_next),
            activeVaultConfig: decodeFromFields(VaultConfig.reified(), fields.active_vault_config),
            warmupVaultConfig: decodeFromFields(VaultConfig.reified(), fields.warmup_vault_config),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
            bcsPadding: decodeFromFields(reified.vector("u8"), fields.bcs_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Config {
        if (!isConfig(item.type)) {
            throw new Error("not a Config type");
        }

        return Config.reified().new({
            oracleId: decodeFromFieldsWithTypes("address", item.fields.oracle_id),
            depositLotSize: decodeFromFieldsWithTypes("u64", item.fields.deposit_lot_size),
            bidLotSize: decodeFromFieldsWithTypes("u64", item.fields.bid_lot_size),
            minDepositSize: decodeFromFieldsWithTypes("u64", item.fields.min_deposit_size),
            minBidSize: decodeFromFieldsWithTypes("u64", item.fields.min_bid_size),
            maxDepositEntry: decodeFromFieldsWithTypes("u64", item.fields.max_deposit_entry),
            maxBidEntry: decodeFromFieldsWithTypes("u64", item.fields.max_bid_entry),
            depositFeeBp: decodeFromFieldsWithTypes("u64", item.fields.deposit_fee_bp),
            depositFeeShareBp: decodeFromFieldsWithTypes("u64", item.fields.deposit_fee_share_bp),
            depositSharedFeePool: decodeFromFieldsWithTypes(Option.reified(reified.vector("u8")), item.fields.deposit_shared_fee_pool),
            bidFeeBp: decodeFromFieldsWithTypes("u64", item.fields.bid_fee_bp),
            depositIncentiveBp: decodeFromFieldsWithTypes("u64", item.fields.deposit_incentive_bp),
            bidIncentiveBp: decodeFromFieldsWithTypes("u64", item.fields.bid_incentive_bp),
            auctionDelayTsMs: decodeFromFieldsWithTypes("u64", item.fields.auction_delay_ts_ms),
            auctionDurationTsMs: decodeFromFieldsWithTypes("u64", item.fields.auction_duration_ts_ms),
            recoupDelayTsMs: decodeFromFieldsWithTypes("u64", item.fields.recoup_delay_ts_ms),
            capacity: decodeFromFieldsWithTypes("u64", item.fields.capacity),
            leverage: decodeFromFieldsWithTypes("u64", item.fields.leverage),
            riskLevel: decodeFromFieldsWithTypes("u64", item.fields.risk_level),
            hasNext: decodeFromFieldsWithTypes("bool", item.fields.has_next),
            activeVaultConfig: decodeFromFieldsWithTypes(VaultConfig.reified(), item.fields.active_vault_config),
            warmupVaultConfig: decodeFromFieldsWithTypes(VaultConfig.reified(), item.fields.warmup_vault_config),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
            bcsPadding: decodeFromFieldsWithTypes(reified.vector("u8"), item.fields.bcs_padding),
        });
    }

    static fromBcs(data: Uint8Array): Config {
        return Config.fromFields(Config.bcs.parse(data));
    }

    toJSONField() {
        return {
            oracleId: this.oracleId,
            depositLotSize: this.depositLotSize.toString(),
            bidLotSize: this.bidLotSize.toString(),
            minDepositSize: this.minDepositSize.toString(),
            minBidSize: this.minBidSize.toString(),
            maxDepositEntry: this.maxDepositEntry.toString(),
            maxBidEntry: this.maxBidEntry.toString(),
            depositFeeBp: this.depositFeeBp.toString(),
            depositFeeShareBp: this.depositFeeShareBp.toString(),
            depositSharedFeePool: fieldToJSON<Option<Vector<"u8">>>(`${Option.$typeName}<vector<u8>>`, this.depositSharedFeePool),
            bidFeeBp: this.bidFeeBp.toString(),
            depositIncentiveBp: this.depositIncentiveBp.toString(),
            bidIncentiveBp: this.bidIncentiveBp.toString(),
            auctionDelayTsMs: this.auctionDelayTsMs.toString(),
            auctionDurationTsMs: this.auctionDurationTsMs.toString(),
            recoupDelayTsMs: this.recoupDelayTsMs.toString(),
            capacity: this.capacity.toString(),
            leverage: this.leverage.toString(),
            riskLevel: this.riskLevel.toString(),
            hasNext: this.hasNext,
            activeVaultConfig: this.activeVaultConfig.toJSONField(),
            warmupVaultConfig: this.warmupVaultConfig.toJSONField(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
            bcsPadding: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.bcsPadding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): Config {
        return Config.reified().new({
            oracleId: decodeFromJSONField("address", field.oracleId),
            depositLotSize: decodeFromJSONField("u64", field.depositLotSize),
            bidLotSize: decodeFromJSONField("u64", field.bidLotSize),
            minDepositSize: decodeFromJSONField("u64", field.minDepositSize),
            minBidSize: decodeFromJSONField("u64", field.minBidSize),
            maxDepositEntry: decodeFromJSONField("u64", field.maxDepositEntry),
            maxBidEntry: decodeFromJSONField("u64", field.maxBidEntry),
            depositFeeBp: decodeFromJSONField("u64", field.depositFeeBp),
            depositFeeShareBp: decodeFromJSONField("u64", field.depositFeeShareBp),
            depositSharedFeePool: decodeFromJSONField(Option.reified(reified.vector("u8")), field.depositSharedFeePool),
            bidFeeBp: decodeFromJSONField("u64", field.bidFeeBp),
            depositIncentiveBp: decodeFromJSONField("u64", field.depositIncentiveBp),
            bidIncentiveBp: decodeFromJSONField("u64", field.bidIncentiveBp),
            auctionDelayTsMs: decodeFromJSONField("u64", field.auctionDelayTsMs),
            auctionDurationTsMs: decodeFromJSONField("u64", field.auctionDurationTsMs),
            recoupDelayTsMs: decodeFromJSONField("u64", field.recoupDelayTsMs),
            capacity: decodeFromJSONField("u64", field.capacity),
            leverage: decodeFromJSONField("u64", field.leverage),
            riskLevel: decodeFromJSONField("u64", field.riskLevel),
            hasNext: decodeFromJSONField("bool", field.hasNext),
            activeVaultConfig: decodeFromJSONField(VaultConfig.reified(), field.activeVaultConfig),
            warmupVaultConfig: decodeFromJSONField(VaultConfig.reified(), field.warmupVaultConfig),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
            bcsPadding: decodeFromJSONField(reified.vector("u8"), field.bcsPadding),
        });
    }

    static fromJSON(json: Record<string, any>): Config {
        if (json.$typeName !== Config.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return Config.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): Config {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isConfig(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Config object`);
        }
        return Config.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): Config {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isConfig(data.bcs.type)) {
                throw new Error(`object at is not a Config object`);
            }

            return Config.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Config.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<Config> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Config object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isConfig(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Config object`);
        }

        return Config.fromSuiObjectData(res.data);
    }
}

/* ============================== Registry =============================== */

export function isRegistry(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::typus_dov_single::Registry`;
}

export interface RegistryFields {
    id: ToField<UID>;
    numOfVault: ToField<"u64">;
    authority: ToField<Authority>;
    feePool: ToField<BalancePool>;
    portfolioVaultRegistry: ToField<UID>;
    depositVaultRegistry: ToField<UID>;
    auctionRegistry: ToField<UID>;
    bidVaultRegistry: ToField<UID>;
    refundVaultRegistry: ToField<UID>;
    additionalConfigRegistry: ToField<UID>;
    version: ToField<"u64">;
    transactionSuspended: ToField<"bool">;
}

export type RegistryReified = Reified<Registry, RegistryFields>;

export class Registry implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::typus_dov_single::Registry`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = Registry.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::typus_dov_single::Registry`;
    readonly $typeArgs: [];
    readonly $isPhantom = Registry.$isPhantom;

    readonly id: ToField<UID>;
    readonly numOfVault: ToField<"u64">;
    readonly authority: ToField<Authority>;
    readonly feePool: ToField<BalancePool>;
    readonly portfolioVaultRegistry: ToField<UID>;
    readonly depositVaultRegistry: ToField<UID>;
    readonly auctionRegistry: ToField<UID>;
    readonly bidVaultRegistry: ToField<UID>;
    readonly refundVaultRegistry: ToField<UID>;
    readonly additionalConfigRegistry: ToField<UID>;
    readonly version: ToField<"u64">;
    readonly transactionSuspended: ToField<"bool">;

    private constructor(typeArgs: [], fields: RegistryFields) {
        this.$fullTypeName = composeSuiType(Registry.$typeName, ...typeArgs) as `${typeof PKG_V1}::typus_dov_single::Registry`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.numOfVault = fields.numOfVault;
        this.authority = fields.authority;
        this.feePool = fields.feePool;
        this.portfolioVaultRegistry = fields.portfolioVaultRegistry;
        this.depositVaultRegistry = fields.depositVaultRegistry;
        this.auctionRegistry = fields.auctionRegistry;
        this.bidVaultRegistry = fields.bidVaultRegistry;
        this.refundVaultRegistry = fields.refundVaultRegistry;
        this.additionalConfigRegistry = fields.additionalConfigRegistry;
        this.version = fields.version;
        this.transactionSuspended = fields.transactionSuspended;
    }

    static reified(): RegistryReified {
        return {
            typeName: Registry.$typeName,
            fullTypeName: composeSuiType(Registry.$typeName, ...[]) as `${typeof PKG_V1}::typus_dov_single::Registry`,
            typeArgs: [] as [],
            isPhantom: Registry.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Registry.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Registry.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Registry.fromBcs(data),
            bcs: Registry.bcs,
            fromJSONField: (field: any) => Registry.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Registry.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Registry.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => Registry.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => Registry.fetch(client, id),
            new: (fields: RegistryFields) => {
                return new Registry([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Registry.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<Registry>> {
        return phantom(Registry.reified());
    }
    static get p() {
        return Registry.phantom();
    }

    static get bcs() {
        return bcs.struct("Registry", {
            id: UID.bcs,
            num_of_vault: bcs.u64(),
            authority: Authority.bcs,
            fee_pool: BalancePool.bcs,
            portfolio_vault_registry: UID.bcs,
            deposit_vault_registry: UID.bcs,
            auction_registry: UID.bcs,
            bid_vault_registry: UID.bcs,
            refund_vault_registry: UID.bcs,
            additional_config_registry: UID.bcs,
            version: bcs.u64(),
            transaction_suspended: bcs.bool(),
        });
    }

    static fromFields(fields: Record<string, any>): Registry {
        return Registry.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            numOfVault: decodeFromFields("u64", fields.num_of_vault),
            authority: decodeFromFields(Authority.reified(), fields.authority),
            feePool: decodeFromFields(BalancePool.reified(), fields.fee_pool),
            portfolioVaultRegistry: decodeFromFields(UID.reified(), fields.portfolio_vault_registry),
            depositVaultRegistry: decodeFromFields(UID.reified(), fields.deposit_vault_registry),
            auctionRegistry: decodeFromFields(UID.reified(), fields.auction_registry),
            bidVaultRegistry: decodeFromFields(UID.reified(), fields.bid_vault_registry),
            refundVaultRegistry: decodeFromFields(UID.reified(), fields.refund_vault_registry),
            additionalConfigRegistry: decodeFromFields(UID.reified(), fields.additional_config_registry),
            version: decodeFromFields("u64", fields.version),
            transactionSuspended: decodeFromFields("bool", fields.transaction_suspended),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Registry {
        if (!isRegistry(item.type)) {
            throw new Error("not a Registry type");
        }

        return Registry.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            numOfVault: decodeFromFieldsWithTypes("u64", item.fields.num_of_vault),
            authority: decodeFromFieldsWithTypes(Authority.reified(), item.fields.authority),
            feePool: decodeFromFieldsWithTypes(BalancePool.reified(), item.fields.fee_pool),
            portfolioVaultRegistry: decodeFromFieldsWithTypes(UID.reified(), item.fields.portfolio_vault_registry),
            depositVaultRegistry: decodeFromFieldsWithTypes(UID.reified(), item.fields.deposit_vault_registry),
            auctionRegistry: decodeFromFieldsWithTypes(UID.reified(), item.fields.auction_registry),
            bidVaultRegistry: decodeFromFieldsWithTypes(UID.reified(), item.fields.bid_vault_registry),
            refundVaultRegistry: decodeFromFieldsWithTypes(UID.reified(), item.fields.refund_vault_registry),
            additionalConfigRegistry: decodeFromFieldsWithTypes(UID.reified(), item.fields.additional_config_registry),
            version: decodeFromFieldsWithTypes("u64", item.fields.version),
            transactionSuspended: decodeFromFieldsWithTypes("bool", item.fields.transaction_suspended),
        });
    }

    static fromBcs(data: Uint8Array): Registry {
        return Registry.fromFields(Registry.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            numOfVault: this.numOfVault.toString(),
            authority: this.authority.toJSONField(),
            feePool: this.feePool.toJSONField(),
            portfolioVaultRegistry: this.portfolioVaultRegistry,
            depositVaultRegistry: this.depositVaultRegistry,
            auctionRegistry: this.auctionRegistry,
            bidVaultRegistry: this.bidVaultRegistry,
            refundVaultRegistry: this.refundVaultRegistry,
            additionalConfigRegistry: this.additionalConfigRegistry,
            version: this.version.toString(),
            transactionSuspended: this.transactionSuspended,
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): Registry {
        return Registry.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            numOfVault: decodeFromJSONField("u64", field.numOfVault),
            authority: decodeFromJSONField(Authority.reified(), field.authority),
            feePool: decodeFromJSONField(BalancePool.reified(), field.feePool),
            portfolioVaultRegistry: decodeFromJSONField(UID.reified(), field.portfolioVaultRegistry),
            depositVaultRegistry: decodeFromJSONField(UID.reified(), field.depositVaultRegistry),
            auctionRegistry: decodeFromJSONField(UID.reified(), field.auctionRegistry),
            bidVaultRegistry: decodeFromJSONField(UID.reified(), field.bidVaultRegistry),
            refundVaultRegistry: decodeFromJSONField(UID.reified(), field.refundVaultRegistry),
            additionalConfigRegistry: decodeFromJSONField(UID.reified(), field.additionalConfigRegistry),
            version: decodeFromJSONField("u64", field.version),
            transactionSuspended: decodeFromJSONField("bool", field.transactionSuspended),
        });
    }

    static fromJSON(json: Record<string, any>): Registry {
        if (json.$typeName !== Registry.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return Registry.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): Registry {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRegistry(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Registry object`);
        }
        return Registry.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): Registry {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isRegistry(data.bcs.type)) {
                throw new Error(`object at is not a Registry object`);
            }

            return Registry.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Registry.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<Registry> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Registry object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isRegistry(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Registry object`);
        }

        return Registry.fromSuiObjectData(res.data);
    }
}

/* ============================== ActivateEvent =============================== */

export function isActivateEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::typus_dov_single::ActivateEvent`;
}

export interface ActivateEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    round: ToField<"u64">;
    depositAmount: ToField<"u64">;
    dTokenDecimal: ToField<"u64">;
    contractSize: ToField<"u64">;
    oTokenDecimal: ToField<"u64">;
    oracleInfo: ToField<OracleInfo>;
    u64Padding: ToField<Vector<"u64">>;
}

export type ActivateEventReified = Reified<ActivateEvent, ActivateEventFields>;

export class ActivateEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::typus_dov_single::ActivateEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = ActivateEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::typus_dov_single::ActivateEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = ActivateEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly round: ToField<"u64">;
    readonly depositAmount: ToField<"u64">;
    readonly dTokenDecimal: ToField<"u64">;
    readonly contractSize: ToField<"u64">;
    readonly oTokenDecimal: ToField<"u64">;
    readonly oracleInfo: ToField<OracleInfo>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: ActivateEventFields) {
        this.$fullTypeName = composeSuiType(ActivateEvent.$typeName, ...typeArgs) as `${typeof PKG_V1}::typus_dov_single::ActivateEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.round = fields.round;
        this.depositAmount = fields.depositAmount;
        this.dTokenDecimal = fields.dTokenDecimal;
        this.contractSize = fields.contractSize;
        this.oTokenDecimal = fields.oTokenDecimal;
        this.oracleInfo = fields.oracleInfo;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): ActivateEventReified {
        return {
            typeName: ActivateEvent.$typeName,
            fullTypeName: composeSuiType(ActivateEvent.$typeName, ...[]) as `${typeof PKG_V1}::typus_dov_single::ActivateEvent`,
            typeArgs: [] as [],
            isPhantom: ActivateEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => ActivateEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => ActivateEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => ActivateEvent.fromBcs(data),
            bcs: ActivateEvent.bcs,
            fromJSONField: (field: any) => ActivateEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => ActivateEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => ActivateEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => ActivateEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => ActivateEvent.fetch(client, id),
            new: (fields: ActivateEventFields) => {
                return new ActivateEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return ActivateEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<ActivateEvent>> {
        return phantom(ActivateEvent.reified());
    }
    static get p() {
        return ActivateEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("ActivateEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            round: bcs.u64(),
            deposit_amount: bcs.u64(),
            d_token_decimal: bcs.u64(),
            contract_size: bcs.u64(),
            o_token_decimal: bcs.u64(),
            oracle_info: OracleInfo.bcs,
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): ActivateEvent {
        return ActivateEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            round: decodeFromFields("u64", fields.round),
            depositAmount: decodeFromFields("u64", fields.deposit_amount),
            dTokenDecimal: decodeFromFields("u64", fields.d_token_decimal),
            contractSize: decodeFromFields("u64", fields.contract_size),
            oTokenDecimal: decodeFromFields("u64", fields.o_token_decimal),
            oracleInfo: decodeFromFields(OracleInfo.reified(), fields.oracle_info),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): ActivateEvent {
        if (!isActivateEvent(item.type)) {
            throw new Error("not a ActivateEvent type");
        }

        return ActivateEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            round: decodeFromFieldsWithTypes("u64", item.fields.round),
            depositAmount: decodeFromFieldsWithTypes("u64", item.fields.deposit_amount),
            dTokenDecimal: decodeFromFieldsWithTypes("u64", item.fields.d_token_decimal),
            contractSize: decodeFromFieldsWithTypes("u64", item.fields.contract_size),
            oTokenDecimal: decodeFromFieldsWithTypes("u64", item.fields.o_token_decimal),
            oracleInfo: decodeFromFieldsWithTypes(OracleInfo.reified(), item.fields.oracle_info),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): ActivateEvent {
        return ActivateEvent.fromFields(ActivateEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            round: this.round.toString(),
            depositAmount: this.depositAmount.toString(),
            dTokenDecimal: this.dTokenDecimal.toString(),
            contractSize: this.contractSize.toString(),
            oTokenDecimal: this.oTokenDecimal.toString(),
            oracleInfo: this.oracleInfo.toJSONField(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): ActivateEvent {
        return ActivateEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            round: decodeFromJSONField("u64", field.round),
            depositAmount: decodeFromJSONField("u64", field.depositAmount),
            dTokenDecimal: decodeFromJSONField("u64", field.dTokenDecimal),
            contractSize: decodeFromJSONField("u64", field.contractSize),
            oTokenDecimal: decodeFromJSONField("u64", field.oTokenDecimal),
            oracleInfo: decodeFromJSONField(OracleInfo.reified(), field.oracleInfo),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): ActivateEvent {
        if (json.$typeName !== ActivateEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return ActivateEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): ActivateEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isActivateEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a ActivateEvent object`);
        }
        return ActivateEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): ActivateEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isActivateEvent(data.bcs.type)) {
                throw new Error(`object at is not a ActivateEvent object`);
            }

            return ActivateEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ActivateEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<ActivateEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching ActivateEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isActivateEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ActivateEvent object`);
        }

        return ActivateEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== AdditionalConfig =============================== */

export function isAdditionalConfig(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::typus_dov_single::AdditionalConfig`;
}

export interface AdditionalConfigFields {
    id: ToField<UID>;
}

export type AdditionalConfigReified = Reified<AdditionalConfig, AdditionalConfigFields>;

export class AdditionalConfig implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::typus_dov_single::AdditionalConfig`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = AdditionalConfig.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::typus_dov_single::AdditionalConfig`;
    readonly $typeArgs: [];
    readonly $isPhantom = AdditionalConfig.$isPhantom;

    readonly id: ToField<UID>;

    private constructor(typeArgs: [], fields: AdditionalConfigFields) {
        this.$fullTypeName = composeSuiType(
            AdditionalConfig.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::typus_dov_single::AdditionalConfig`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
    }

    static reified(): AdditionalConfigReified {
        return {
            typeName: AdditionalConfig.$typeName,
            fullTypeName: composeSuiType(AdditionalConfig.$typeName, ...[]) as `${typeof PKG_V1}::typus_dov_single::AdditionalConfig`,
            typeArgs: [] as [],
            isPhantom: AdditionalConfig.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => AdditionalConfig.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => AdditionalConfig.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => AdditionalConfig.fromBcs(data),
            bcs: AdditionalConfig.bcs,
            fromJSONField: (field: any) => AdditionalConfig.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => AdditionalConfig.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => AdditionalConfig.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => AdditionalConfig.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => AdditionalConfig.fetch(client, id),
            new: (fields: AdditionalConfigFields) => {
                return new AdditionalConfig([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return AdditionalConfig.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<AdditionalConfig>> {
        return phantom(AdditionalConfig.reified());
    }
    static get p() {
        return AdditionalConfig.phantom();
    }

    static get bcs() {
        return bcs.struct("AdditionalConfig", {
            id: UID.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): AdditionalConfig {
        return AdditionalConfig.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): AdditionalConfig {
        if (!isAdditionalConfig(item.type)) {
            throw new Error("not a AdditionalConfig type");
        }

        return AdditionalConfig.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
        });
    }

    static fromBcs(data: Uint8Array): AdditionalConfig {
        return AdditionalConfig.fromFields(AdditionalConfig.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): AdditionalConfig {
        return AdditionalConfig.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
        });
    }

    static fromJSON(json: Record<string, any>): AdditionalConfig {
        if (json.$typeName !== AdditionalConfig.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return AdditionalConfig.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): AdditionalConfig {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isAdditionalConfig(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a AdditionalConfig object`);
        }
        return AdditionalConfig.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): AdditionalConfig {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isAdditionalConfig(data.bcs.type)) {
                throw new Error(`object at is not a AdditionalConfig object`);
            }

            return AdditionalConfig.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return AdditionalConfig.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<AdditionalConfig> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching AdditionalConfig object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isAdditionalConfig(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AdditionalConfig object`);
        }

        return AdditionalConfig.fromSuiObjectData(res.data);
    }
}

/* ============================== ClaimEvent =============================== */

export function isClaimEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::typus_dov_single::ClaimEvent`;
}

export interface ClaimEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
    decimal: ToField<"u64">;
    oracleInfo: ToField<OracleInfo>;
    u64Padding: ToField<Vector<"u64">>;
}

export type ClaimEventReified = Reified<ClaimEvent, ClaimEventFields>;

export class ClaimEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::typus_dov_single::ClaimEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = ClaimEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::typus_dov_single::ClaimEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = ClaimEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;
    readonly decimal: ToField<"u64">;
    readonly oracleInfo: ToField<OracleInfo>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: ClaimEventFields) {
        this.$fullTypeName = composeSuiType(ClaimEvent.$typeName, ...typeArgs) as `${typeof PKG_V1}::typus_dov_single::ClaimEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.token = fields.token;
        this.amount = fields.amount;
        this.decimal = fields.decimal;
        this.oracleInfo = fields.oracleInfo;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): ClaimEventReified {
        return {
            typeName: ClaimEvent.$typeName,
            fullTypeName: composeSuiType(ClaimEvent.$typeName, ...[]) as `${typeof PKG_V1}::typus_dov_single::ClaimEvent`,
            typeArgs: [] as [],
            isPhantom: ClaimEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => ClaimEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => ClaimEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => ClaimEvent.fromBcs(data),
            bcs: ClaimEvent.bcs,
            fromJSONField: (field: any) => ClaimEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => ClaimEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => ClaimEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => ClaimEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => ClaimEvent.fetch(client, id),
            new: (fields: ClaimEventFields) => {
                return new ClaimEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return ClaimEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<ClaimEvent>> {
        return phantom(ClaimEvent.reified());
    }
    static get p() {
        return ClaimEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("ClaimEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            token: TypeName.bcs,
            amount: bcs.u64(),
            decimal: bcs.u64(),
            oracle_info: OracleInfo.bcs,
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): ClaimEvent {
        return ClaimEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            token: decodeFromFields(TypeName.reified(), fields.token),
            amount: decodeFromFields("u64", fields.amount),
            decimal: decodeFromFields("u64", fields.decimal),
            oracleInfo: decodeFromFields(OracleInfo.reified(), fields.oracle_info),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): ClaimEvent {
        if (!isClaimEvent(item.type)) {
            throw new Error("not a ClaimEvent type");
        }

        return ClaimEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token),
            amount: decodeFromFieldsWithTypes("u64", item.fields.amount),
            decimal: decodeFromFieldsWithTypes("u64", item.fields.decimal),
            oracleInfo: decodeFromFieldsWithTypes(OracleInfo.reified(), item.fields.oracle_info),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): ClaimEvent {
        return ClaimEvent.fromFields(ClaimEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            token: this.token.toJSONField(),
            amount: this.amount.toString(),
            decimal: this.decimal.toString(),
            oracleInfo: this.oracleInfo.toJSONField(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): ClaimEvent {
        return ClaimEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            token: decodeFromJSONField(TypeName.reified(), field.token),
            amount: decodeFromJSONField("u64", field.amount),
            decimal: decodeFromJSONField("u64", field.decimal),
            oracleInfo: decodeFromJSONField(OracleInfo.reified(), field.oracleInfo),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): ClaimEvent {
        if (json.$typeName !== ClaimEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return ClaimEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): ClaimEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isClaimEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a ClaimEvent object`);
        }
        return ClaimEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): ClaimEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isClaimEvent(data.bcs.type)) {
                throw new Error(`object at is not a ClaimEvent object`);
            }

            return ClaimEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ClaimEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<ClaimEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching ClaimEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isClaimEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ClaimEvent object`);
        }

        return ClaimEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== CloseEvent =============================== */

export function isCloseEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::typus_dov_single::CloseEvent`;
}

export interface CloseEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    round: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type CloseEventReified = Reified<CloseEvent, CloseEventFields>;

export class CloseEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::typus_dov_single::CloseEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = CloseEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::typus_dov_single::CloseEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = CloseEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly round: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: CloseEventFields) {
        this.$fullTypeName = composeSuiType(CloseEvent.$typeName, ...typeArgs) as `${typeof PKG_V1}::typus_dov_single::CloseEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.round = fields.round;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): CloseEventReified {
        return {
            typeName: CloseEvent.$typeName,
            fullTypeName: composeSuiType(CloseEvent.$typeName, ...[]) as `${typeof PKG_V1}::typus_dov_single::CloseEvent`,
            typeArgs: [] as [],
            isPhantom: CloseEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => CloseEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => CloseEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => CloseEvent.fromBcs(data),
            bcs: CloseEvent.bcs,
            fromJSONField: (field: any) => CloseEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => CloseEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => CloseEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => CloseEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => CloseEvent.fetch(client, id),
            new: (fields: CloseEventFields) => {
                return new CloseEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return CloseEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<CloseEvent>> {
        return phantom(CloseEvent.reified());
    }
    static get p() {
        return CloseEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("CloseEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            round: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): CloseEvent {
        return CloseEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            round: decodeFromFields("u64", fields.round),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): CloseEvent {
        if (!isCloseEvent(item.type)) {
            throw new Error("not a CloseEvent type");
        }

        return CloseEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            round: decodeFromFieldsWithTypes("u64", item.fields.round),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): CloseEvent {
        return CloseEvent.fromFields(CloseEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            round: this.round.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): CloseEvent {
        return CloseEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            round: decodeFromJSONField("u64", field.round),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): CloseEvent {
        if (json.$typeName !== CloseEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return CloseEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): CloseEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isCloseEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a CloseEvent object`);
        }
        return CloseEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): CloseEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isCloseEvent(data.bcs.type)) {
                throw new Error(`object at is not a CloseEvent object`);
            }

            return CloseEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return CloseEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<CloseEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching CloseEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isCloseEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a CloseEvent object`);
        }

        return CloseEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== CompoundEvent =============================== */

export function isCompoundEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::typus_dov_single::CompoundEvent`;
}

export interface CompoundEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
    decimal: ToField<"u64">;
    oracleInfo: ToField<OracleInfo>;
    u64Padding: ToField<Vector<"u64">>;
}

export type CompoundEventReified = Reified<CompoundEvent, CompoundEventFields>;

export class CompoundEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::typus_dov_single::CompoundEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = CompoundEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::typus_dov_single::CompoundEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = CompoundEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;
    readonly decimal: ToField<"u64">;
    readonly oracleInfo: ToField<OracleInfo>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: CompoundEventFields) {
        this.$fullTypeName = composeSuiType(CompoundEvent.$typeName, ...typeArgs) as `${typeof PKG_V1}::typus_dov_single::CompoundEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.token = fields.token;
        this.amount = fields.amount;
        this.decimal = fields.decimal;
        this.oracleInfo = fields.oracleInfo;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): CompoundEventReified {
        return {
            typeName: CompoundEvent.$typeName,
            fullTypeName: composeSuiType(CompoundEvent.$typeName, ...[]) as `${typeof PKG_V1}::typus_dov_single::CompoundEvent`,
            typeArgs: [] as [],
            isPhantom: CompoundEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => CompoundEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => CompoundEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => CompoundEvent.fromBcs(data),
            bcs: CompoundEvent.bcs,
            fromJSONField: (field: any) => CompoundEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => CompoundEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => CompoundEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => CompoundEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => CompoundEvent.fetch(client, id),
            new: (fields: CompoundEventFields) => {
                return new CompoundEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return CompoundEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<CompoundEvent>> {
        return phantom(CompoundEvent.reified());
    }
    static get p() {
        return CompoundEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("CompoundEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            token: TypeName.bcs,
            amount: bcs.u64(),
            decimal: bcs.u64(),
            oracle_info: OracleInfo.bcs,
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): CompoundEvent {
        return CompoundEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            token: decodeFromFields(TypeName.reified(), fields.token),
            amount: decodeFromFields("u64", fields.amount),
            decimal: decodeFromFields("u64", fields.decimal),
            oracleInfo: decodeFromFields(OracleInfo.reified(), fields.oracle_info),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): CompoundEvent {
        if (!isCompoundEvent(item.type)) {
            throw new Error("not a CompoundEvent type");
        }

        return CompoundEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token),
            amount: decodeFromFieldsWithTypes("u64", item.fields.amount),
            decimal: decodeFromFieldsWithTypes("u64", item.fields.decimal),
            oracleInfo: decodeFromFieldsWithTypes(OracleInfo.reified(), item.fields.oracle_info),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): CompoundEvent {
        return CompoundEvent.fromFields(CompoundEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            token: this.token.toJSONField(),
            amount: this.amount.toString(),
            decimal: this.decimal.toString(),
            oracleInfo: this.oracleInfo.toJSONField(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): CompoundEvent {
        return CompoundEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            token: decodeFromJSONField(TypeName.reified(), field.token),
            amount: decodeFromJSONField("u64", field.amount),
            decimal: decodeFromJSONField("u64", field.decimal),
            oracleInfo: decodeFromJSONField(OracleInfo.reified(), field.oracleInfo),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): CompoundEvent {
        if (json.$typeName !== CompoundEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return CompoundEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): CompoundEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isCompoundEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a CompoundEvent object`);
        }
        return CompoundEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): CompoundEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isCompoundEvent(data.bcs.type)) {
                throw new Error(`object at is not a CompoundEvent object`);
            }

            return CompoundEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return CompoundEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<CompoundEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching CompoundEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isCompoundEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a CompoundEvent object`);
        }

        return CompoundEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== DeliveryEvent =============================== */

export function isDeliveryEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::typus_dov_single::DeliveryEvent`;
}

export interface DeliveryEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    round: ToField<"u64">;
    early: ToField<"bool">;
    deliveryPrice: ToField<"u64">;
    deliverySize: ToField<"u64">;
    oTokenDecimal: ToField<"u64">;
    oToken: ToField<TypeName>;
    bidderBidValue: ToField<"u64">;
    bidderFee: ToField<"u64">;
    incentiveBidValue: ToField<"u64">;
    incentiveFee: ToField<"u64">;
    bTokenDecimal: ToField<"u64">;
    bToken: ToField<TypeName>;
    depositorIncentiveValue: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type DeliveryEventReified = Reified<DeliveryEvent, DeliveryEventFields>;

export class DeliveryEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::typus_dov_single::DeliveryEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = DeliveryEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::typus_dov_single::DeliveryEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = DeliveryEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly round: ToField<"u64">;
    readonly early: ToField<"bool">;
    readonly deliveryPrice: ToField<"u64">;
    readonly deliverySize: ToField<"u64">;
    readonly oTokenDecimal: ToField<"u64">;
    readonly oToken: ToField<TypeName>;
    readonly bidderBidValue: ToField<"u64">;
    readonly bidderFee: ToField<"u64">;
    readonly incentiveBidValue: ToField<"u64">;
    readonly incentiveFee: ToField<"u64">;
    readonly bTokenDecimal: ToField<"u64">;
    readonly bToken: ToField<TypeName>;
    readonly depositorIncentiveValue: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: DeliveryEventFields) {
        this.$fullTypeName = composeSuiType(DeliveryEvent.$typeName, ...typeArgs) as `${typeof PKG_V1}::typus_dov_single::DeliveryEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.round = fields.round;
        this.early = fields.early;
        this.deliveryPrice = fields.deliveryPrice;
        this.deliverySize = fields.deliverySize;
        this.oTokenDecimal = fields.oTokenDecimal;
        this.oToken = fields.oToken;
        this.bidderBidValue = fields.bidderBidValue;
        this.bidderFee = fields.bidderFee;
        this.incentiveBidValue = fields.incentiveBidValue;
        this.incentiveFee = fields.incentiveFee;
        this.bTokenDecimal = fields.bTokenDecimal;
        this.bToken = fields.bToken;
        this.depositorIncentiveValue = fields.depositorIncentiveValue;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): DeliveryEventReified {
        return {
            typeName: DeliveryEvent.$typeName,
            fullTypeName: composeSuiType(DeliveryEvent.$typeName, ...[]) as `${typeof PKG_V1}::typus_dov_single::DeliveryEvent`,
            typeArgs: [] as [],
            isPhantom: DeliveryEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => DeliveryEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => DeliveryEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => DeliveryEvent.fromBcs(data),
            bcs: DeliveryEvent.bcs,
            fromJSONField: (field: any) => DeliveryEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => DeliveryEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => DeliveryEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => DeliveryEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => DeliveryEvent.fetch(client, id),
            new: (fields: DeliveryEventFields) => {
                return new DeliveryEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return DeliveryEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<DeliveryEvent>> {
        return phantom(DeliveryEvent.reified());
    }
    static get p() {
        return DeliveryEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("DeliveryEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            round: bcs.u64(),
            early: bcs.bool(),
            delivery_price: bcs.u64(),
            delivery_size: bcs.u64(),
            o_token_decimal: bcs.u64(),
            o_token: TypeName.bcs,
            bidder_bid_value: bcs.u64(),
            bidder_fee: bcs.u64(),
            incentive_bid_value: bcs.u64(),
            incentive_fee: bcs.u64(),
            b_token_decimal: bcs.u64(),
            b_token: TypeName.bcs,
            depositor_incentive_value: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): DeliveryEvent {
        return DeliveryEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            round: decodeFromFields("u64", fields.round),
            early: decodeFromFields("bool", fields.early),
            deliveryPrice: decodeFromFields("u64", fields.delivery_price),
            deliverySize: decodeFromFields("u64", fields.delivery_size),
            oTokenDecimal: decodeFromFields("u64", fields.o_token_decimal),
            oToken: decodeFromFields(TypeName.reified(), fields.o_token),
            bidderBidValue: decodeFromFields("u64", fields.bidder_bid_value),
            bidderFee: decodeFromFields("u64", fields.bidder_fee),
            incentiveBidValue: decodeFromFields("u64", fields.incentive_bid_value),
            incentiveFee: decodeFromFields("u64", fields.incentive_fee),
            bTokenDecimal: decodeFromFields("u64", fields.b_token_decimal),
            bToken: decodeFromFields(TypeName.reified(), fields.b_token),
            depositorIncentiveValue: decodeFromFields("u64", fields.depositor_incentive_value),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): DeliveryEvent {
        if (!isDeliveryEvent(item.type)) {
            throw new Error("not a DeliveryEvent type");
        }

        return DeliveryEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            round: decodeFromFieldsWithTypes("u64", item.fields.round),
            early: decodeFromFieldsWithTypes("bool", item.fields.early),
            deliveryPrice: decodeFromFieldsWithTypes("u64", item.fields.delivery_price),
            deliverySize: decodeFromFieldsWithTypes("u64", item.fields.delivery_size),
            oTokenDecimal: decodeFromFieldsWithTypes("u64", item.fields.o_token_decimal),
            oToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.o_token),
            bidderBidValue: decodeFromFieldsWithTypes("u64", item.fields.bidder_bid_value),
            bidderFee: decodeFromFieldsWithTypes("u64", item.fields.bidder_fee),
            incentiveBidValue: decodeFromFieldsWithTypes("u64", item.fields.incentive_bid_value),
            incentiveFee: decodeFromFieldsWithTypes("u64", item.fields.incentive_fee),
            bTokenDecimal: decodeFromFieldsWithTypes("u64", item.fields.b_token_decimal),
            bToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.b_token),
            depositorIncentiveValue: decodeFromFieldsWithTypes("u64", item.fields.depositor_incentive_value),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): DeliveryEvent {
        return DeliveryEvent.fromFields(DeliveryEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            round: this.round.toString(),
            early: this.early,
            deliveryPrice: this.deliveryPrice.toString(),
            deliverySize: this.deliverySize.toString(),
            oTokenDecimal: this.oTokenDecimal.toString(),
            oToken: this.oToken.toJSONField(),
            bidderBidValue: this.bidderBidValue.toString(),
            bidderFee: this.bidderFee.toString(),
            incentiveBidValue: this.incentiveBidValue.toString(),
            incentiveFee: this.incentiveFee.toString(),
            bTokenDecimal: this.bTokenDecimal.toString(),
            bToken: this.bToken.toJSONField(),
            depositorIncentiveValue: this.depositorIncentiveValue.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): DeliveryEvent {
        return DeliveryEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            round: decodeFromJSONField("u64", field.round),
            early: decodeFromJSONField("bool", field.early),
            deliveryPrice: decodeFromJSONField("u64", field.deliveryPrice),
            deliverySize: decodeFromJSONField("u64", field.deliverySize),
            oTokenDecimal: decodeFromJSONField("u64", field.oTokenDecimal),
            oToken: decodeFromJSONField(TypeName.reified(), field.oToken),
            bidderBidValue: decodeFromJSONField("u64", field.bidderBidValue),
            bidderFee: decodeFromJSONField("u64", field.bidderFee),
            incentiveBidValue: decodeFromJSONField("u64", field.incentiveBidValue),
            incentiveFee: decodeFromJSONField("u64", field.incentiveFee),
            bTokenDecimal: decodeFromJSONField("u64", field.bTokenDecimal),
            bToken: decodeFromJSONField(TypeName.reified(), field.bToken),
            depositorIncentiveValue: decodeFromJSONField("u64", field.depositorIncentiveValue),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): DeliveryEvent {
        if (json.$typeName !== DeliveryEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return DeliveryEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): DeliveryEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isDeliveryEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a DeliveryEvent object`);
        }
        return DeliveryEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): DeliveryEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDeliveryEvent(data.bcs.type)) {
                throw new Error(`object at is not a DeliveryEvent object`);
            }

            return DeliveryEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return DeliveryEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<DeliveryEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching DeliveryEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isDeliveryEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DeliveryEvent object`);
        }

        return DeliveryEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== DeliveryInfo =============================== */

export function isDeliveryInfo(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::typus_dov_single::DeliveryInfo`;
}

export interface DeliveryInfoFields {
    auctionType: ToField<"u64">;
    deliveryPrice: ToField<"u64">;
    deliverySize: ToField<"u64">;
    bidderBidValue: ToField<"u64">;
    bidderFee: ToField<"u64">;
    incentiveBidValue: ToField<"u64">;
    incentiveFee: ToField<"u64">;
    tsMs: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type DeliveryInfoReified = Reified<DeliveryInfo, DeliveryInfoFields>;

export class DeliveryInfo implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::typus_dov_single::DeliveryInfo`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = DeliveryInfo.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::typus_dov_single::DeliveryInfo`;
    readonly $typeArgs: [];
    readonly $isPhantom = DeliveryInfo.$isPhantom;

    readonly auctionType: ToField<"u64">;
    readonly deliveryPrice: ToField<"u64">;
    readonly deliverySize: ToField<"u64">;
    readonly bidderBidValue: ToField<"u64">;
    readonly bidderFee: ToField<"u64">;
    readonly incentiveBidValue: ToField<"u64">;
    readonly incentiveFee: ToField<"u64">;
    readonly tsMs: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: DeliveryInfoFields) {
        this.$fullTypeName = composeSuiType(DeliveryInfo.$typeName, ...typeArgs) as `${typeof PKG_V1}::typus_dov_single::DeliveryInfo`;
        this.$typeArgs = typeArgs;

        this.auctionType = fields.auctionType;
        this.deliveryPrice = fields.deliveryPrice;
        this.deliverySize = fields.deliverySize;
        this.bidderBidValue = fields.bidderBidValue;
        this.bidderFee = fields.bidderFee;
        this.incentiveBidValue = fields.incentiveBidValue;
        this.incentiveFee = fields.incentiveFee;
        this.tsMs = fields.tsMs;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): DeliveryInfoReified {
        return {
            typeName: DeliveryInfo.$typeName,
            fullTypeName: composeSuiType(DeliveryInfo.$typeName, ...[]) as `${typeof PKG_V1}::typus_dov_single::DeliveryInfo`,
            typeArgs: [] as [],
            isPhantom: DeliveryInfo.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => DeliveryInfo.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => DeliveryInfo.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => DeliveryInfo.fromBcs(data),
            bcs: DeliveryInfo.bcs,
            fromJSONField: (field: any) => DeliveryInfo.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => DeliveryInfo.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => DeliveryInfo.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => DeliveryInfo.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => DeliveryInfo.fetch(client, id),
            new: (fields: DeliveryInfoFields) => {
                return new DeliveryInfo([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return DeliveryInfo.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<DeliveryInfo>> {
        return phantom(DeliveryInfo.reified());
    }
    static get p() {
        return DeliveryInfo.phantom();
    }

    static get bcs() {
        return bcs.struct("DeliveryInfo", {
            auction_type: bcs.u64(),
            delivery_price: bcs.u64(),
            delivery_size: bcs.u64(),
            bidder_bid_value: bcs.u64(),
            bidder_fee: bcs.u64(),
            incentive_bid_value: bcs.u64(),
            incentive_fee: bcs.u64(),
            ts_ms: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): DeliveryInfo {
        return DeliveryInfo.reified().new({
            auctionType: decodeFromFields("u64", fields.auction_type),
            deliveryPrice: decodeFromFields("u64", fields.delivery_price),
            deliverySize: decodeFromFields("u64", fields.delivery_size),
            bidderBidValue: decodeFromFields("u64", fields.bidder_bid_value),
            bidderFee: decodeFromFields("u64", fields.bidder_fee),
            incentiveBidValue: decodeFromFields("u64", fields.incentive_bid_value),
            incentiveFee: decodeFromFields("u64", fields.incentive_fee),
            tsMs: decodeFromFields("u64", fields.ts_ms),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): DeliveryInfo {
        if (!isDeliveryInfo(item.type)) {
            throw new Error("not a DeliveryInfo type");
        }

        return DeliveryInfo.reified().new({
            auctionType: decodeFromFieldsWithTypes("u64", item.fields.auction_type),
            deliveryPrice: decodeFromFieldsWithTypes("u64", item.fields.delivery_price),
            deliverySize: decodeFromFieldsWithTypes("u64", item.fields.delivery_size),
            bidderBidValue: decodeFromFieldsWithTypes("u64", item.fields.bidder_bid_value),
            bidderFee: decodeFromFieldsWithTypes("u64", item.fields.bidder_fee),
            incentiveBidValue: decodeFromFieldsWithTypes("u64", item.fields.incentive_bid_value),
            incentiveFee: decodeFromFieldsWithTypes("u64", item.fields.incentive_fee),
            tsMs: decodeFromFieldsWithTypes("u64", item.fields.ts_ms),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): DeliveryInfo {
        return DeliveryInfo.fromFields(DeliveryInfo.bcs.parse(data));
    }

    toJSONField() {
        return {
            auctionType: this.auctionType.toString(),
            deliveryPrice: this.deliveryPrice.toString(),
            deliverySize: this.deliverySize.toString(),
            bidderBidValue: this.bidderBidValue.toString(),
            bidderFee: this.bidderFee.toString(),
            incentiveBidValue: this.incentiveBidValue.toString(),
            incentiveFee: this.incentiveFee.toString(),
            tsMs: this.tsMs.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): DeliveryInfo {
        return DeliveryInfo.reified().new({
            auctionType: decodeFromJSONField("u64", field.auctionType),
            deliveryPrice: decodeFromJSONField("u64", field.deliveryPrice),
            deliverySize: decodeFromJSONField("u64", field.deliverySize),
            bidderBidValue: decodeFromJSONField("u64", field.bidderBidValue),
            bidderFee: decodeFromJSONField("u64", field.bidderFee),
            incentiveBidValue: decodeFromJSONField("u64", field.incentiveBidValue),
            incentiveFee: decodeFromJSONField("u64", field.incentiveFee),
            tsMs: decodeFromJSONField("u64", field.tsMs),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): DeliveryInfo {
        if (json.$typeName !== DeliveryInfo.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return DeliveryInfo.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): DeliveryInfo {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isDeliveryInfo(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a DeliveryInfo object`);
        }
        return DeliveryInfo.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): DeliveryInfo {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDeliveryInfo(data.bcs.type)) {
                throw new Error(`object at is not a DeliveryInfo object`);
            }

            return DeliveryInfo.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return DeliveryInfo.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<DeliveryInfo> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching DeliveryInfo object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isDeliveryInfo(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DeliveryInfo object`);
        }

        return DeliveryInfo.fromSuiObjectData(res.data);
    }
}

/* ============================== DeliveryInfos =============================== */

export function isDeliveryInfos(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::typus_dov_single::DeliveryInfos`;
}

export interface DeliveryInfosFields {
    round: ToField<"u64">;
    maxSize: ToField<"u64">;
    totalDeliverySize: ToField<"u64">;
    totalBidderBidValue: ToField<"u64">;
    totalBidderFee: ToField<"u64">;
    totalIncentiveBidValue: ToField<"u64">;
    totalIncentiveFee: ToField<"u64">;
    deliveryInfo: ToField<Vector<DeliveryInfo>>;
    u64Padding: ToField<Vector<"u64">>;
}

export type DeliveryInfosReified = Reified<DeliveryInfos, DeliveryInfosFields>;

export class DeliveryInfos implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::typus_dov_single::DeliveryInfos`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = DeliveryInfos.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::typus_dov_single::DeliveryInfos`;
    readonly $typeArgs: [];
    readonly $isPhantom = DeliveryInfos.$isPhantom;

    readonly round: ToField<"u64">;
    readonly maxSize: ToField<"u64">;
    readonly totalDeliverySize: ToField<"u64">;
    readonly totalBidderBidValue: ToField<"u64">;
    readonly totalBidderFee: ToField<"u64">;
    readonly totalIncentiveBidValue: ToField<"u64">;
    readonly totalIncentiveFee: ToField<"u64">;
    readonly deliveryInfo: ToField<Vector<DeliveryInfo>>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: DeliveryInfosFields) {
        this.$fullTypeName = composeSuiType(DeliveryInfos.$typeName, ...typeArgs) as `${typeof PKG_V1}::typus_dov_single::DeliveryInfos`;
        this.$typeArgs = typeArgs;

        this.round = fields.round;
        this.maxSize = fields.maxSize;
        this.totalDeliverySize = fields.totalDeliverySize;
        this.totalBidderBidValue = fields.totalBidderBidValue;
        this.totalBidderFee = fields.totalBidderFee;
        this.totalIncentiveBidValue = fields.totalIncentiveBidValue;
        this.totalIncentiveFee = fields.totalIncentiveFee;
        this.deliveryInfo = fields.deliveryInfo;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): DeliveryInfosReified {
        return {
            typeName: DeliveryInfos.$typeName,
            fullTypeName: composeSuiType(DeliveryInfos.$typeName, ...[]) as `${typeof PKG_V1}::typus_dov_single::DeliveryInfos`,
            typeArgs: [] as [],
            isPhantom: DeliveryInfos.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => DeliveryInfos.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => DeliveryInfos.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => DeliveryInfos.fromBcs(data),
            bcs: DeliveryInfos.bcs,
            fromJSONField: (field: any) => DeliveryInfos.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => DeliveryInfos.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => DeliveryInfos.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => DeliveryInfos.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => DeliveryInfos.fetch(client, id),
            new: (fields: DeliveryInfosFields) => {
                return new DeliveryInfos([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return DeliveryInfos.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<DeliveryInfos>> {
        return phantom(DeliveryInfos.reified());
    }
    static get p() {
        return DeliveryInfos.phantom();
    }

    static get bcs() {
        return bcs.struct("DeliveryInfos", {
            round: bcs.u64(),
            max_size: bcs.u64(),
            total_delivery_size: bcs.u64(),
            total_bidder_bid_value: bcs.u64(),
            total_bidder_fee: bcs.u64(),
            total_incentive_bid_value: bcs.u64(),
            total_incentive_fee: bcs.u64(),
            delivery_info: bcs.vector(DeliveryInfo.bcs),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): DeliveryInfos {
        return DeliveryInfos.reified().new({
            round: decodeFromFields("u64", fields.round),
            maxSize: decodeFromFields("u64", fields.max_size),
            totalDeliverySize: decodeFromFields("u64", fields.total_delivery_size),
            totalBidderBidValue: decodeFromFields("u64", fields.total_bidder_bid_value),
            totalBidderFee: decodeFromFields("u64", fields.total_bidder_fee),
            totalIncentiveBidValue: decodeFromFields("u64", fields.total_incentive_bid_value),
            totalIncentiveFee: decodeFromFields("u64", fields.total_incentive_fee),
            deliveryInfo: decodeFromFields(reified.vector(DeliveryInfo.reified()), fields.delivery_info),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): DeliveryInfos {
        if (!isDeliveryInfos(item.type)) {
            throw new Error("not a DeliveryInfos type");
        }

        return DeliveryInfos.reified().new({
            round: decodeFromFieldsWithTypes("u64", item.fields.round),
            maxSize: decodeFromFieldsWithTypes("u64", item.fields.max_size),
            totalDeliverySize: decodeFromFieldsWithTypes("u64", item.fields.total_delivery_size),
            totalBidderBidValue: decodeFromFieldsWithTypes("u64", item.fields.total_bidder_bid_value),
            totalBidderFee: decodeFromFieldsWithTypes("u64", item.fields.total_bidder_fee),
            totalIncentiveBidValue: decodeFromFieldsWithTypes("u64", item.fields.total_incentive_bid_value),
            totalIncentiveFee: decodeFromFieldsWithTypes("u64", item.fields.total_incentive_fee),
            deliveryInfo: decodeFromFieldsWithTypes(reified.vector(DeliveryInfo.reified()), item.fields.delivery_info),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): DeliveryInfos {
        return DeliveryInfos.fromFields(DeliveryInfos.bcs.parse(data));
    }

    toJSONField() {
        return {
            round: this.round.toString(),
            maxSize: this.maxSize.toString(),
            totalDeliverySize: this.totalDeliverySize.toString(),
            totalBidderBidValue: this.totalBidderBidValue.toString(),
            totalBidderFee: this.totalBidderFee.toString(),
            totalIncentiveBidValue: this.totalIncentiveBidValue.toString(),
            totalIncentiveFee: this.totalIncentiveFee.toString(),
            deliveryInfo: fieldToJSON<Vector<DeliveryInfo>>(`vector<${DeliveryInfo.$typeName}>`, this.deliveryInfo),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): DeliveryInfos {
        return DeliveryInfos.reified().new({
            round: decodeFromJSONField("u64", field.round),
            maxSize: decodeFromJSONField("u64", field.maxSize),
            totalDeliverySize: decodeFromJSONField("u64", field.totalDeliverySize),
            totalBidderBidValue: decodeFromJSONField("u64", field.totalBidderBidValue),
            totalBidderFee: decodeFromJSONField("u64", field.totalBidderFee),
            totalIncentiveBidValue: decodeFromJSONField("u64", field.totalIncentiveBidValue),
            totalIncentiveFee: decodeFromJSONField("u64", field.totalIncentiveFee),
            deliveryInfo: decodeFromJSONField(reified.vector(DeliveryInfo.reified()), field.deliveryInfo),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): DeliveryInfos {
        if (json.$typeName !== DeliveryInfos.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return DeliveryInfos.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): DeliveryInfos {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isDeliveryInfos(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a DeliveryInfos object`);
        }
        return DeliveryInfos.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): DeliveryInfos {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDeliveryInfos(data.bcs.type)) {
                throw new Error(`object at is not a DeliveryInfos object`);
            }

            return DeliveryInfos.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return DeliveryInfos.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<DeliveryInfos> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching DeliveryInfos object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isDeliveryInfos(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DeliveryInfos object`);
        }

        return DeliveryInfos.fromSuiObjectData(res.data);
    }
}

/* ============================== DepositEvent =============================== */

export function isDepositEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::typus_dov_single::DepositEvent`;
}

export interface DepositEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
    decimal: ToField<"u64">;
    oracleInfo: ToField<OracleInfo>;
    u64Padding: ToField<Vector<"u64">>;
}

export type DepositEventReified = Reified<DepositEvent, DepositEventFields>;

export class DepositEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::typus_dov_single::DepositEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = DepositEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::typus_dov_single::DepositEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = DepositEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;
    readonly decimal: ToField<"u64">;
    readonly oracleInfo: ToField<OracleInfo>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: DepositEventFields) {
        this.$fullTypeName = composeSuiType(DepositEvent.$typeName, ...typeArgs) as `${typeof PKG_V1}::typus_dov_single::DepositEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.token = fields.token;
        this.amount = fields.amount;
        this.decimal = fields.decimal;
        this.oracleInfo = fields.oracleInfo;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): DepositEventReified {
        return {
            typeName: DepositEvent.$typeName,
            fullTypeName: composeSuiType(DepositEvent.$typeName, ...[]) as `${typeof PKG_V1}::typus_dov_single::DepositEvent`,
            typeArgs: [] as [],
            isPhantom: DepositEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => DepositEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => DepositEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => DepositEvent.fromBcs(data),
            bcs: DepositEvent.bcs,
            fromJSONField: (field: any) => DepositEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => DepositEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => DepositEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => DepositEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => DepositEvent.fetch(client, id),
            new: (fields: DepositEventFields) => {
                return new DepositEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return DepositEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<DepositEvent>> {
        return phantom(DepositEvent.reified());
    }
    static get p() {
        return DepositEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("DepositEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            token: TypeName.bcs,
            amount: bcs.u64(),
            decimal: bcs.u64(),
            oracle_info: OracleInfo.bcs,
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): DepositEvent {
        return DepositEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            token: decodeFromFields(TypeName.reified(), fields.token),
            amount: decodeFromFields("u64", fields.amount),
            decimal: decodeFromFields("u64", fields.decimal),
            oracleInfo: decodeFromFields(OracleInfo.reified(), fields.oracle_info),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): DepositEvent {
        if (!isDepositEvent(item.type)) {
            throw new Error("not a DepositEvent type");
        }

        return DepositEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token),
            amount: decodeFromFieldsWithTypes("u64", item.fields.amount),
            decimal: decodeFromFieldsWithTypes("u64", item.fields.decimal),
            oracleInfo: decodeFromFieldsWithTypes(OracleInfo.reified(), item.fields.oracle_info),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): DepositEvent {
        return DepositEvent.fromFields(DepositEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            token: this.token.toJSONField(),
            amount: this.amount.toString(),
            decimal: this.decimal.toString(),
            oracleInfo: this.oracleInfo.toJSONField(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): DepositEvent {
        return DepositEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            token: decodeFromJSONField(TypeName.reified(), field.token),
            amount: decodeFromJSONField("u64", field.amount),
            decimal: decodeFromJSONField("u64", field.decimal),
            oracleInfo: decodeFromJSONField(OracleInfo.reified(), field.oracleInfo),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): DepositEvent {
        if (json.$typeName !== DepositEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return DepositEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): DepositEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isDepositEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a DepositEvent object`);
        }
        return DepositEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): DepositEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDepositEvent(data.bcs.type)) {
                throw new Error(`object at is not a DepositEvent object`);
            }

            return DepositEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return DepositEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<DepositEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching DepositEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isDepositEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DepositEvent object`);
        }

        return DepositEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== DepositSnapshot =============================== */

export function isDepositSnapshot(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V19}::typus_dov_single::DepositSnapshot`;
}

export interface DepositSnapshotFields {
    snapshots: ToField<Vector<"u64">>;
    totalDeposit: ToField<"u64">;
    snapshotTsMs: ToField<"u64">;
}

export type DepositSnapshotReified = Reified<DepositSnapshot, DepositSnapshotFields>;

export class DepositSnapshot implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V19}::typus_dov_single::DepositSnapshot`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = DepositSnapshot.$typeName;
    readonly $fullTypeName: `${typeof PKG_V19}::typus_dov_single::DepositSnapshot`;
    readonly $typeArgs: [];
    readonly $isPhantom = DepositSnapshot.$isPhantom;

    readonly snapshots: ToField<Vector<"u64">>;
    readonly totalDeposit: ToField<"u64">;
    readonly snapshotTsMs: ToField<"u64">;

    private constructor(typeArgs: [], fields: DepositSnapshotFields) {
        this.$fullTypeName = composeSuiType(
            DepositSnapshot.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V19}::typus_dov_single::DepositSnapshot`;
        this.$typeArgs = typeArgs;

        this.snapshots = fields.snapshots;
        this.totalDeposit = fields.totalDeposit;
        this.snapshotTsMs = fields.snapshotTsMs;
    }

    static reified(): DepositSnapshotReified {
        return {
            typeName: DepositSnapshot.$typeName,
            fullTypeName: composeSuiType(DepositSnapshot.$typeName, ...[]) as `${typeof PKG_V19}::typus_dov_single::DepositSnapshot`,
            typeArgs: [] as [],
            isPhantom: DepositSnapshot.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => DepositSnapshot.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => DepositSnapshot.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => DepositSnapshot.fromBcs(data),
            bcs: DepositSnapshot.bcs,
            fromJSONField: (field: any) => DepositSnapshot.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => DepositSnapshot.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => DepositSnapshot.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => DepositSnapshot.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => DepositSnapshot.fetch(client, id),
            new: (fields: DepositSnapshotFields) => {
                return new DepositSnapshot([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return DepositSnapshot.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<DepositSnapshot>> {
        return phantom(DepositSnapshot.reified());
    }
    static get p() {
        return DepositSnapshot.phantom();
    }

    static get bcs() {
        return bcs.struct("DepositSnapshot", {
            snapshots: bcs.vector(bcs.u64()),
            total_deposit: bcs.u64(),
            snapshot_ts_ms: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): DepositSnapshot {
        return DepositSnapshot.reified().new({
            snapshots: decodeFromFields(reified.vector("u64"), fields.snapshots),
            totalDeposit: decodeFromFields("u64", fields.total_deposit),
            snapshotTsMs: decodeFromFields("u64", fields.snapshot_ts_ms),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): DepositSnapshot {
        if (!isDepositSnapshot(item.type)) {
            throw new Error("not a DepositSnapshot type");
        }

        return DepositSnapshot.reified().new({
            snapshots: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.snapshots),
            totalDeposit: decodeFromFieldsWithTypes("u64", item.fields.total_deposit),
            snapshotTsMs: decodeFromFieldsWithTypes("u64", item.fields.snapshot_ts_ms),
        });
    }

    static fromBcs(data: Uint8Array): DepositSnapshot {
        return DepositSnapshot.fromFields(DepositSnapshot.bcs.parse(data));
    }

    toJSONField() {
        return {
            snapshots: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.snapshots),
            totalDeposit: this.totalDeposit.toString(),
            snapshotTsMs: this.snapshotTsMs.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): DepositSnapshot {
        return DepositSnapshot.reified().new({
            snapshots: decodeFromJSONField(reified.vector("u64"), field.snapshots),
            totalDeposit: decodeFromJSONField("u64", field.totalDeposit),
            snapshotTsMs: decodeFromJSONField("u64", field.snapshotTsMs),
        });
    }

    static fromJSON(json: Record<string, any>): DepositSnapshot {
        if (json.$typeName !== DepositSnapshot.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return DepositSnapshot.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): DepositSnapshot {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isDepositSnapshot(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a DepositSnapshot object`);
        }
        return DepositSnapshot.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): DepositSnapshot {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDepositSnapshot(data.bcs.type)) {
                throw new Error(`object at is not a DepositSnapshot object`);
            }

            return DepositSnapshot.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return DepositSnapshot.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<DepositSnapshot> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching DepositSnapshot object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isDepositSnapshot(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DepositSnapshot object`);
        }

        return DepositSnapshot.fromSuiObjectData(res.data);
    }
}

/* ============================== DropVaultEvent =============================== */

export function isDropVaultEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::typus_dov_single::DropVaultEvent`;
}

export interface DropVaultEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    round: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type DropVaultEventReified = Reified<DropVaultEvent, DropVaultEventFields>;

export class DropVaultEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::typus_dov_single::DropVaultEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = DropVaultEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::typus_dov_single::DropVaultEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = DropVaultEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly round: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: DropVaultEventFields) {
        this.$fullTypeName = composeSuiType(DropVaultEvent.$typeName, ...typeArgs) as `${typeof PKG_V1}::typus_dov_single::DropVaultEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.round = fields.round;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): DropVaultEventReified {
        return {
            typeName: DropVaultEvent.$typeName,
            fullTypeName: composeSuiType(DropVaultEvent.$typeName, ...[]) as `${typeof PKG_V1}::typus_dov_single::DropVaultEvent`,
            typeArgs: [] as [],
            isPhantom: DropVaultEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => DropVaultEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => DropVaultEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => DropVaultEvent.fromBcs(data),
            bcs: DropVaultEvent.bcs,
            fromJSONField: (field: any) => DropVaultEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => DropVaultEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => DropVaultEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => DropVaultEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => DropVaultEvent.fetch(client, id),
            new: (fields: DropVaultEventFields) => {
                return new DropVaultEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return DropVaultEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<DropVaultEvent>> {
        return phantom(DropVaultEvent.reified());
    }
    static get p() {
        return DropVaultEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("DropVaultEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            round: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): DropVaultEvent {
        return DropVaultEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            round: decodeFromFields("u64", fields.round),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): DropVaultEvent {
        if (!isDropVaultEvent(item.type)) {
            throw new Error("not a DropVaultEvent type");
        }

        return DropVaultEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            round: decodeFromFieldsWithTypes("u64", item.fields.round),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): DropVaultEvent {
        return DropVaultEvent.fromFields(DropVaultEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            round: this.round.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): DropVaultEvent {
        return DropVaultEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            round: decodeFromJSONField("u64", field.round),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): DropVaultEvent {
        if (json.$typeName !== DropVaultEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return DropVaultEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): DropVaultEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isDropVaultEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a DropVaultEvent object`);
        }
        return DropVaultEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): DropVaultEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDropVaultEvent(data.bcs.type)) {
                throw new Error(`object at is not a DropVaultEvent object`);
            }

            return DropVaultEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return DropVaultEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<DropVaultEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching DropVaultEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isDropVaultEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DropVaultEvent object`);
        }

        return DropVaultEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== ExerciseEvent =============================== */

export function isExerciseEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::typus_dov_single::ExerciseEvent`;
}

export interface ExerciseEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
    decimal: ToField<"u64">;
    incentiveToken: ToField<Option<TypeName>>;
    incentiveAmount: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type ExerciseEventReified = Reified<ExerciseEvent, ExerciseEventFields>;

export class ExerciseEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::typus_dov_single::ExerciseEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = ExerciseEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::typus_dov_single::ExerciseEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = ExerciseEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;
    readonly decimal: ToField<"u64">;
    readonly incentiveToken: ToField<Option<TypeName>>;
    readonly incentiveAmount: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: ExerciseEventFields) {
        this.$fullTypeName = composeSuiType(ExerciseEvent.$typeName, ...typeArgs) as `${typeof PKG_V1}::typus_dov_single::ExerciseEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.token = fields.token;
        this.amount = fields.amount;
        this.decimal = fields.decimal;
        this.incentiveToken = fields.incentiveToken;
        this.incentiveAmount = fields.incentiveAmount;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): ExerciseEventReified {
        return {
            typeName: ExerciseEvent.$typeName,
            fullTypeName: composeSuiType(ExerciseEvent.$typeName, ...[]) as `${typeof PKG_V1}::typus_dov_single::ExerciseEvent`,
            typeArgs: [] as [],
            isPhantom: ExerciseEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => ExerciseEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => ExerciseEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => ExerciseEvent.fromBcs(data),
            bcs: ExerciseEvent.bcs,
            fromJSONField: (field: any) => ExerciseEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => ExerciseEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => ExerciseEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => ExerciseEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => ExerciseEvent.fetch(client, id),
            new: (fields: ExerciseEventFields) => {
                return new ExerciseEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return ExerciseEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<ExerciseEvent>> {
        return phantom(ExerciseEvent.reified());
    }
    static get p() {
        return ExerciseEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("ExerciseEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            token: TypeName.bcs,
            amount: bcs.u64(),
            decimal: bcs.u64(),
            incentive_token: Option.bcs(TypeName.bcs),
            incentive_amount: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): ExerciseEvent {
        return ExerciseEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            token: decodeFromFields(TypeName.reified(), fields.token),
            amount: decodeFromFields("u64", fields.amount),
            decimal: decodeFromFields("u64", fields.decimal),
            incentiveToken: decodeFromFields(Option.reified(TypeName.reified()), fields.incentive_token),
            incentiveAmount: decodeFromFields("u64", fields.incentive_amount),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): ExerciseEvent {
        if (!isExerciseEvent(item.type)) {
            throw new Error("not a ExerciseEvent type");
        }

        return ExerciseEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token),
            amount: decodeFromFieldsWithTypes("u64", item.fields.amount),
            decimal: decodeFromFieldsWithTypes("u64", item.fields.decimal),
            incentiveToken: decodeFromFieldsWithTypes(Option.reified(TypeName.reified()), item.fields.incentive_token),
            incentiveAmount: decodeFromFieldsWithTypes("u64", item.fields.incentive_amount),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): ExerciseEvent {
        return ExerciseEvent.fromFields(ExerciseEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            token: this.token.toJSONField(),
            amount: this.amount.toString(),
            decimal: this.decimal.toString(),
            incentiveToken: fieldToJSON<Option<TypeName>>(`${Option.$typeName}<${TypeName.$typeName}>`, this.incentiveToken),
            incentiveAmount: this.incentiveAmount.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): ExerciseEvent {
        return ExerciseEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            token: decodeFromJSONField(TypeName.reified(), field.token),
            amount: decodeFromJSONField("u64", field.amount),
            decimal: decodeFromJSONField("u64", field.decimal),
            incentiveToken: decodeFromJSONField(Option.reified(TypeName.reified()), field.incentiveToken),
            incentiveAmount: decodeFromJSONField("u64", field.incentiveAmount),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): ExerciseEvent {
        if (json.$typeName !== ExerciseEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return ExerciseEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): ExerciseEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isExerciseEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a ExerciseEvent object`);
        }
        return ExerciseEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): ExerciseEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isExerciseEvent(data.bcs.type)) {
                throw new Error(`object at is not a ExerciseEvent object`);
            }

            return ExerciseEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ExerciseEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<ExerciseEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching ExerciseEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isExerciseEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ExerciseEvent object`);
        }

        return ExerciseEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== HarvestEvent =============================== */

export function isHarvestEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::typus_dov_single::HarvestEvent`;
}

export interface HarvestEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
    feeAmount: ToField<"u64">;
    decimal: ToField<"u64">;
    oracleInfo: ToField<OracleInfo>;
    u64Padding: ToField<Vector<"u64">>;
}

export type HarvestEventReified = Reified<HarvestEvent, HarvestEventFields>;

export class HarvestEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::typus_dov_single::HarvestEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = HarvestEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::typus_dov_single::HarvestEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = HarvestEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;
    readonly feeAmount: ToField<"u64">;
    readonly decimal: ToField<"u64">;
    readonly oracleInfo: ToField<OracleInfo>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: HarvestEventFields) {
        this.$fullTypeName = composeSuiType(HarvestEvent.$typeName, ...typeArgs) as `${typeof PKG_V1}::typus_dov_single::HarvestEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.token = fields.token;
        this.amount = fields.amount;
        this.feeAmount = fields.feeAmount;
        this.decimal = fields.decimal;
        this.oracleInfo = fields.oracleInfo;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): HarvestEventReified {
        return {
            typeName: HarvestEvent.$typeName,
            fullTypeName: composeSuiType(HarvestEvent.$typeName, ...[]) as `${typeof PKG_V1}::typus_dov_single::HarvestEvent`,
            typeArgs: [] as [],
            isPhantom: HarvestEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => HarvestEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => HarvestEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => HarvestEvent.fromBcs(data),
            bcs: HarvestEvent.bcs,
            fromJSONField: (field: any) => HarvestEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => HarvestEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => HarvestEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => HarvestEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => HarvestEvent.fetch(client, id),
            new: (fields: HarvestEventFields) => {
                return new HarvestEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return HarvestEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<HarvestEvent>> {
        return phantom(HarvestEvent.reified());
    }
    static get p() {
        return HarvestEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("HarvestEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            token: TypeName.bcs,
            amount: bcs.u64(),
            fee_amount: bcs.u64(),
            decimal: bcs.u64(),
            oracle_info: OracleInfo.bcs,
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): HarvestEvent {
        return HarvestEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            token: decodeFromFields(TypeName.reified(), fields.token),
            amount: decodeFromFields("u64", fields.amount),
            feeAmount: decodeFromFields("u64", fields.fee_amount),
            decimal: decodeFromFields("u64", fields.decimal),
            oracleInfo: decodeFromFields(OracleInfo.reified(), fields.oracle_info),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): HarvestEvent {
        if (!isHarvestEvent(item.type)) {
            throw new Error("not a HarvestEvent type");
        }

        return HarvestEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token),
            amount: decodeFromFieldsWithTypes("u64", item.fields.amount),
            feeAmount: decodeFromFieldsWithTypes("u64", item.fields.fee_amount),
            decimal: decodeFromFieldsWithTypes("u64", item.fields.decimal),
            oracleInfo: decodeFromFieldsWithTypes(OracleInfo.reified(), item.fields.oracle_info),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): HarvestEvent {
        return HarvestEvent.fromFields(HarvestEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            token: this.token.toJSONField(),
            amount: this.amount.toString(),
            feeAmount: this.feeAmount.toString(),
            decimal: this.decimal.toString(),
            oracleInfo: this.oracleInfo.toJSONField(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): HarvestEvent {
        return HarvestEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            token: decodeFromJSONField(TypeName.reified(), field.token),
            amount: decodeFromJSONField("u64", field.amount),
            feeAmount: decodeFromJSONField("u64", field.feeAmount),
            decimal: decodeFromJSONField("u64", field.decimal),
            oracleInfo: decodeFromJSONField(OracleInfo.reified(), field.oracleInfo),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): HarvestEvent {
        if (json.$typeName !== HarvestEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return HarvestEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): HarvestEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isHarvestEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a HarvestEvent object`);
        }
        return HarvestEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): HarvestEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isHarvestEvent(data.bcs.type)) {
                throw new Error(`object at is not a HarvestEvent object`);
            }

            return HarvestEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return HarvestEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<HarvestEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching HarvestEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isHarvestEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HarvestEvent object`);
        }

        return HarvestEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== Info =============================== */

export function isInfo(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::typus_dov_single::Info`;
}

export interface InfoFields {
    index: ToField<"u64">;
    optionType: ToField<"u64">;
    period: ToField<"u8">;
    activationTsMs: ToField<"u64">;
    expirationTsMs: ToField<"u64">;
    depositToken: ToField<TypeName>;
    bidToken: ToField<TypeName>;
    settlementBase: ToField<TypeName>;
    settlementQuote: ToField<TypeName>;
    settlementBaseName: ToField<String>;
    settlementQuoteName: ToField<String>;
    dTokenDecimal: ToField<"u64">;
    bTokenDecimal: ToField<"u64">;
    oTokenDecimal: ToField<"u64">;
    creator: ToField<"address">;
    createTsMs: ToField<"u64">;
    round: ToField<"u64">;
    status: ToField<"u64">;
    oracleInfo: ToField<OracleInfo>;
    deliveryInfos: ToField<DeliveryInfos>;
    settlementInfo: ToField<Option<SettlementInfo>>;
    u64Padding: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<"u8">>;
}

export type InfoReified = Reified<Info, InfoFields>;

export class Info implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::typus_dov_single::Info`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = Info.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::typus_dov_single::Info`;
    readonly $typeArgs: [];
    readonly $isPhantom = Info.$isPhantom;

    readonly index: ToField<"u64">;
    readonly optionType: ToField<"u64">;
    readonly period: ToField<"u8">;
    readonly activationTsMs: ToField<"u64">;
    readonly expirationTsMs: ToField<"u64">;
    readonly depositToken: ToField<TypeName>;
    readonly bidToken: ToField<TypeName>;
    readonly settlementBase: ToField<TypeName>;
    readonly settlementQuote: ToField<TypeName>;
    readonly settlementBaseName: ToField<String>;
    readonly settlementQuoteName: ToField<String>;
    readonly dTokenDecimal: ToField<"u64">;
    readonly bTokenDecimal: ToField<"u64">;
    readonly oTokenDecimal: ToField<"u64">;
    readonly creator: ToField<"address">;
    readonly createTsMs: ToField<"u64">;
    readonly round: ToField<"u64">;
    readonly status: ToField<"u64">;
    readonly oracleInfo: ToField<OracleInfo>;
    readonly deliveryInfos: ToField<DeliveryInfos>;
    readonly settlementInfo: ToField<Option<SettlementInfo>>;
    readonly u64Padding: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<"u8">>;

    private constructor(typeArgs: [], fields: InfoFields) {
        this.$fullTypeName = composeSuiType(Info.$typeName, ...typeArgs) as `${typeof PKG_V1}::typus_dov_single::Info`;
        this.$typeArgs = typeArgs;

        this.index = fields.index;
        this.optionType = fields.optionType;
        this.period = fields.period;
        this.activationTsMs = fields.activationTsMs;
        this.expirationTsMs = fields.expirationTsMs;
        this.depositToken = fields.depositToken;
        this.bidToken = fields.bidToken;
        this.settlementBase = fields.settlementBase;
        this.settlementQuote = fields.settlementQuote;
        this.settlementBaseName = fields.settlementBaseName;
        this.settlementQuoteName = fields.settlementQuoteName;
        this.dTokenDecimal = fields.dTokenDecimal;
        this.bTokenDecimal = fields.bTokenDecimal;
        this.oTokenDecimal = fields.oTokenDecimal;
        this.creator = fields.creator;
        this.createTsMs = fields.createTsMs;
        this.round = fields.round;
        this.status = fields.status;
        this.oracleInfo = fields.oracleInfo;
        this.deliveryInfos = fields.deliveryInfos;
        this.settlementInfo = fields.settlementInfo;
        this.u64Padding = fields.u64Padding;
        this.bcsPadding = fields.bcsPadding;
    }

    static reified(): InfoReified {
        return {
            typeName: Info.$typeName,
            fullTypeName: composeSuiType(Info.$typeName, ...[]) as `${typeof PKG_V1}::typus_dov_single::Info`,
            typeArgs: [] as [],
            isPhantom: Info.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Info.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Info.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Info.fromBcs(data),
            bcs: Info.bcs,
            fromJSONField: (field: any) => Info.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Info.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Info.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => Info.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => Info.fetch(client, id),
            new: (fields: InfoFields) => {
                return new Info([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Info.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<Info>> {
        return phantom(Info.reified());
    }
    static get p() {
        return Info.phantom();
    }

    static get bcs() {
        return bcs.struct("Info", {
            index: bcs.u64(),
            option_type: bcs.u64(),
            period: bcs.u8(),
            activation_ts_ms: bcs.u64(),
            expiration_ts_ms: bcs.u64(),
            deposit_token: TypeName.bcs,
            bid_token: TypeName.bcs,
            settlement_base: TypeName.bcs,
            settlement_quote: TypeName.bcs,
            settlement_base_name: String.bcs,
            settlement_quote_name: String.bcs,
            d_token_decimal: bcs.u64(),
            b_token_decimal: bcs.u64(),
            o_token_decimal: bcs.u64(),
            creator: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            create_ts_ms: bcs.u64(),
            round: bcs.u64(),
            status: bcs.u64(),
            oracle_info: OracleInfo.bcs,
            delivery_infos: DeliveryInfos.bcs,
            settlement_info: Option.bcs(SettlementInfo.bcs),
            u64_padding: bcs.vector(bcs.u64()),
            bcs_padding: bcs.vector(bcs.u8()),
        });
    }

    static fromFields(fields: Record<string, any>): Info {
        return Info.reified().new({
            index: decodeFromFields("u64", fields.index),
            optionType: decodeFromFields("u64", fields.option_type),
            period: decodeFromFields("u8", fields.period),
            activationTsMs: decodeFromFields("u64", fields.activation_ts_ms),
            expirationTsMs: decodeFromFields("u64", fields.expiration_ts_ms),
            depositToken: decodeFromFields(TypeName.reified(), fields.deposit_token),
            bidToken: decodeFromFields(TypeName.reified(), fields.bid_token),
            settlementBase: decodeFromFields(TypeName.reified(), fields.settlement_base),
            settlementQuote: decodeFromFields(TypeName.reified(), fields.settlement_quote),
            settlementBaseName: decodeFromFields(String.reified(), fields.settlement_base_name),
            settlementQuoteName: decodeFromFields(String.reified(), fields.settlement_quote_name),
            dTokenDecimal: decodeFromFields("u64", fields.d_token_decimal),
            bTokenDecimal: decodeFromFields("u64", fields.b_token_decimal),
            oTokenDecimal: decodeFromFields("u64", fields.o_token_decimal),
            creator: decodeFromFields("address", fields.creator),
            createTsMs: decodeFromFields("u64", fields.create_ts_ms),
            round: decodeFromFields("u64", fields.round),
            status: decodeFromFields("u64", fields.status),
            oracleInfo: decodeFromFields(OracleInfo.reified(), fields.oracle_info),
            deliveryInfos: decodeFromFields(DeliveryInfos.reified(), fields.delivery_infos),
            settlementInfo: decodeFromFields(Option.reified(SettlementInfo.reified()), fields.settlement_info),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
            bcsPadding: decodeFromFields(reified.vector("u8"), fields.bcs_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Info {
        if (!isInfo(item.type)) {
            throw new Error("not a Info type");
        }

        return Info.reified().new({
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            optionType: decodeFromFieldsWithTypes("u64", item.fields.option_type),
            period: decodeFromFieldsWithTypes("u8", item.fields.period),
            activationTsMs: decodeFromFieldsWithTypes("u64", item.fields.activation_ts_ms),
            expirationTsMs: decodeFromFieldsWithTypes("u64", item.fields.expiration_ts_ms),
            depositToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.deposit_token),
            bidToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.bid_token),
            settlementBase: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.settlement_base),
            settlementQuote: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.settlement_quote),
            settlementBaseName: decodeFromFieldsWithTypes(String.reified(), item.fields.settlement_base_name),
            settlementQuoteName: decodeFromFieldsWithTypes(String.reified(), item.fields.settlement_quote_name),
            dTokenDecimal: decodeFromFieldsWithTypes("u64", item.fields.d_token_decimal),
            bTokenDecimal: decodeFromFieldsWithTypes("u64", item.fields.b_token_decimal),
            oTokenDecimal: decodeFromFieldsWithTypes("u64", item.fields.o_token_decimal),
            creator: decodeFromFieldsWithTypes("address", item.fields.creator),
            createTsMs: decodeFromFieldsWithTypes("u64", item.fields.create_ts_ms),
            round: decodeFromFieldsWithTypes("u64", item.fields.round),
            status: decodeFromFieldsWithTypes("u64", item.fields.status),
            oracleInfo: decodeFromFieldsWithTypes(OracleInfo.reified(), item.fields.oracle_info),
            deliveryInfos: decodeFromFieldsWithTypes(DeliveryInfos.reified(), item.fields.delivery_infos),
            settlementInfo: decodeFromFieldsWithTypes(Option.reified(SettlementInfo.reified()), item.fields.settlement_info),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
            bcsPadding: decodeFromFieldsWithTypes(reified.vector("u8"), item.fields.bcs_padding),
        });
    }

    static fromBcs(data: Uint8Array): Info {
        return Info.fromFields(Info.bcs.parse(data));
    }

    toJSONField() {
        return {
            index: this.index.toString(),
            optionType: this.optionType.toString(),
            period: this.period,
            activationTsMs: this.activationTsMs.toString(),
            expirationTsMs: this.expirationTsMs.toString(),
            depositToken: this.depositToken.toJSONField(),
            bidToken: this.bidToken.toJSONField(),
            settlementBase: this.settlementBase.toJSONField(),
            settlementQuote: this.settlementQuote.toJSONField(),
            settlementBaseName: this.settlementBaseName,
            settlementQuoteName: this.settlementQuoteName,
            dTokenDecimal: this.dTokenDecimal.toString(),
            bTokenDecimal: this.bTokenDecimal.toString(),
            oTokenDecimal: this.oTokenDecimal.toString(),
            creator: this.creator,
            createTsMs: this.createTsMs.toString(),
            round: this.round.toString(),
            status: this.status.toString(),
            oracleInfo: this.oracleInfo.toJSONField(),
            deliveryInfos: this.deliveryInfos.toJSONField(),
            settlementInfo: fieldToJSON<Option<SettlementInfo>>(`${Option.$typeName}<${SettlementInfo.$typeName}>`, this.settlementInfo),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
            bcsPadding: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.bcsPadding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): Info {
        return Info.reified().new({
            index: decodeFromJSONField("u64", field.index),
            optionType: decodeFromJSONField("u64", field.optionType),
            period: decodeFromJSONField("u8", field.period),
            activationTsMs: decodeFromJSONField("u64", field.activationTsMs),
            expirationTsMs: decodeFromJSONField("u64", field.expirationTsMs),
            depositToken: decodeFromJSONField(TypeName.reified(), field.depositToken),
            bidToken: decodeFromJSONField(TypeName.reified(), field.bidToken),
            settlementBase: decodeFromJSONField(TypeName.reified(), field.settlementBase),
            settlementQuote: decodeFromJSONField(TypeName.reified(), field.settlementQuote),
            settlementBaseName: decodeFromJSONField(String.reified(), field.settlementBaseName),
            settlementQuoteName: decodeFromJSONField(String.reified(), field.settlementQuoteName),
            dTokenDecimal: decodeFromJSONField("u64", field.dTokenDecimal),
            bTokenDecimal: decodeFromJSONField("u64", field.bTokenDecimal),
            oTokenDecimal: decodeFromJSONField("u64", field.oTokenDecimal),
            creator: decodeFromJSONField("address", field.creator),
            createTsMs: decodeFromJSONField("u64", field.createTsMs),
            round: decodeFromJSONField("u64", field.round),
            status: decodeFromJSONField("u64", field.status),
            oracleInfo: decodeFromJSONField(OracleInfo.reified(), field.oracleInfo),
            deliveryInfos: decodeFromJSONField(DeliveryInfos.reified(), field.deliveryInfos),
            settlementInfo: decodeFromJSONField(Option.reified(SettlementInfo.reified()), field.settlementInfo),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
            bcsPadding: decodeFromJSONField(reified.vector("u8"), field.bcsPadding),
        });
    }

    static fromJSON(json: Record<string, any>): Info {
        if (json.$typeName !== Info.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return Info.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): Info {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isInfo(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Info object`);
        }
        return Info.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): Info {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isInfo(data.bcs.type)) {
                throw new Error(`object at is not a Info object`);
            }

            return Info.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Info.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<Info> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Info object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isInfo(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Info object`);
        }

        return Info.fromSuiObjectData(res.data);
    }
}

/* ============================== NewAuctionEvent =============================== */

export function isNewAuctionEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::typus_dov_single::NewAuctionEvent`;
}

export interface NewAuctionEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    round: ToField<"u64">;
    startTsMs: ToField<"u64">;
    endTsMs: ToField<"u64">;
    size: ToField<"u64">;
    vaultConfig: ToField<VaultConfig>;
    oracleInfo: ToField<OracleInfo>;
    u64Padding: ToField<Vector<"u64">>;
}

export type NewAuctionEventReified = Reified<NewAuctionEvent, NewAuctionEventFields>;

export class NewAuctionEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::typus_dov_single::NewAuctionEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = NewAuctionEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::typus_dov_single::NewAuctionEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = NewAuctionEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly round: ToField<"u64">;
    readonly startTsMs: ToField<"u64">;
    readonly endTsMs: ToField<"u64">;
    readonly size: ToField<"u64">;
    readonly vaultConfig: ToField<VaultConfig>;
    readonly oracleInfo: ToField<OracleInfo>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: NewAuctionEventFields) {
        this.$fullTypeName = composeSuiType(
            NewAuctionEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::typus_dov_single::NewAuctionEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.round = fields.round;
        this.startTsMs = fields.startTsMs;
        this.endTsMs = fields.endTsMs;
        this.size = fields.size;
        this.vaultConfig = fields.vaultConfig;
        this.oracleInfo = fields.oracleInfo;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): NewAuctionEventReified {
        return {
            typeName: NewAuctionEvent.$typeName,
            fullTypeName: composeSuiType(NewAuctionEvent.$typeName, ...[]) as `${typeof PKG_V1}::typus_dov_single::NewAuctionEvent`,
            typeArgs: [] as [],
            isPhantom: NewAuctionEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => NewAuctionEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => NewAuctionEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => NewAuctionEvent.fromBcs(data),
            bcs: NewAuctionEvent.bcs,
            fromJSONField: (field: any) => NewAuctionEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => NewAuctionEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => NewAuctionEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => NewAuctionEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => NewAuctionEvent.fetch(client, id),
            new: (fields: NewAuctionEventFields) => {
                return new NewAuctionEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return NewAuctionEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<NewAuctionEvent>> {
        return phantom(NewAuctionEvent.reified());
    }
    static get p() {
        return NewAuctionEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("NewAuctionEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            round: bcs.u64(),
            start_ts_ms: bcs.u64(),
            end_ts_ms: bcs.u64(),
            size: bcs.u64(),
            vault_config: VaultConfig.bcs,
            oracle_info: OracleInfo.bcs,
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): NewAuctionEvent {
        return NewAuctionEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            round: decodeFromFields("u64", fields.round),
            startTsMs: decodeFromFields("u64", fields.start_ts_ms),
            endTsMs: decodeFromFields("u64", fields.end_ts_ms),
            size: decodeFromFields("u64", fields.size),
            vaultConfig: decodeFromFields(VaultConfig.reified(), fields.vault_config),
            oracleInfo: decodeFromFields(OracleInfo.reified(), fields.oracle_info),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): NewAuctionEvent {
        if (!isNewAuctionEvent(item.type)) {
            throw new Error("not a NewAuctionEvent type");
        }

        return NewAuctionEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            round: decodeFromFieldsWithTypes("u64", item.fields.round),
            startTsMs: decodeFromFieldsWithTypes("u64", item.fields.start_ts_ms),
            endTsMs: decodeFromFieldsWithTypes("u64", item.fields.end_ts_ms),
            size: decodeFromFieldsWithTypes("u64", item.fields.size),
            vaultConfig: decodeFromFieldsWithTypes(VaultConfig.reified(), item.fields.vault_config),
            oracleInfo: decodeFromFieldsWithTypes(OracleInfo.reified(), item.fields.oracle_info),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): NewAuctionEvent {
        return NewAuctionEvent.fromFields(NewAuctionEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            round: this.round.toString(),
            startTsMs: this.startTsMs.toString(),
            endTsMs: this.endTsMs.toString(),
            size: this.size.toString(),
            vaultConfig: this.vaultConfig.toJSONField(),
            oracleInfo: this.oracleInfo.toJSONField(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): NewAuctionEvent {
        return NewAuctionEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            round: decodeFromJSONField("u64", field.round),
            startTsMs: decodeFromJSONField("u64", field.startTsMs),
            endTsMs: decodeFromJSONField("u64", field.endTsMs),
            size: decodeFromJSONField("u64", field.size),
            vaultConfig: decodeFromJSONField(VaultConfig.reified(), field.vaultConfig),
            oracleInfo: decodeFromJSONField(OracleInfo.reified(), field.oracleInfo),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): NewAuctionEvent {
        if (json.$typeName !== NewAuctionEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return NewAuctionEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): NewAuctionEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isNewAuctionEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a NewAuctionEvent object`);
        }
        return NewAuctionEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): NewAuctionEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isNewAuctionEvent(data.bcs.type)) {
                throw new Error(`object at is not a NewAuctionEvent object`);
            }

            return NewAuctionEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return NewAuctionEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<NewAuctionEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching NewAuctionEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isNewAuctionEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a NewAuctionEvent object`);
        }

        return NewAuctionEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== NewBidEvent =============================== */

export function isNewBidEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::typus_dov_single::NewBidEvent`;
}

export interface NewBidEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    bidIndex: ToField<"u64">;
    price: ToField<"u64">;
    size: ToField<"u64">;
    bToken: ToField<TypeName>;
    oToken: ToField<TypeName>;
    bidderBalance: ToField<"u64">;
    incentiveBalance: ToField<"u64">;
    decimal: ToField<"u64">;
    tsMs: ToField<"u64">;
    oracleInfo: ToField<OracleInfo>;
    u64Padding: ToField<Vector<"u64">>;
}

export type NewBidEventReified = Reified<NewBidEvent, NewBidEventFields>;

export class NewBidEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::typus_dov_single::NewBidEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = NewBidEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::typus_dov_single::NewBidEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = NewBidEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly bidIndex: ToField<"u64">;
    readonly price: ToField<"u64">;
    readonly size: ToField<"u64">;
    readonly bToken: ToField<TypeName>;
    readonly oToken: ToField<TypeName>;
    readonly bidderBalance: ToField<"u64">;
    readonly incentiveBalance: ToField<"u64">;
    readonly decimal: ToField<"u64">;
    readonly tsMs: ToField<"u64">;
    readonly oracleInfo: ToField<OracleInfo>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: NewBidEventFields) {
        this.$fullTypeName = composeSuiType(NewBidEvent.$typeName, ...typeArgs) as `${typeof PKG_V1}::typus_dov_single::NewBidEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.bidIndex = fields.bidIndex;
        this.price = fields.price;
        this.size = fields.size;
        this.bToken = fields.bToken;
        this.oToken = fields.oToken;
        this.bidderBalance = fields.bidderBalance;
        this.incentiveBalance = fields.incentiveBalance;
        this.decimal = fields.decimal;
        this.tsMs = fields.tsMs;
        this.oracleInfo = fields.oracleInfo;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): NewBidEventReified {
        return {
            typeName: NewBidEvent.$typeName,
            fullTypeName: composeSuiType(NewBidEvent.$typeName, ...[]) as `${typeof PKG_V1}::typus_dov_single::NewBidEvent`,
            typeArgs: [] as [],
            isPhantom: NewBidEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => NewBidEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => NewBidEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => NewBidEvent.fromBcs(data),
            bcs: NewBidEvent.bcs,
            fromJSONField: (field: any) => NewBidEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => NewBidEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => NewBidEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => NewBidEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => NewBidEvent.fetch(client, id),
            new: (fields: NewBidEventFields) => {
                return new NewBidEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return NewBidEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<NewBidEvent>> {
        return phantom(NewBidEvent.reified());
    }
    static get p() {
        return NewBidEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("NewBidEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            bid_index: bcs.u64(),
            price: bcs.u64(),
            size: bcs.u64(),
            b_token: TypeName.bcs,
            o_token: TypeName.bcs,
            bidder_balance: bcs.u64(),
            incentive_balance: bcs.u64(),
            decimal: bcs.u64(),
            ts_ms: bcs.u64(),
            oracle_info: OracleInfo.bcs,
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): NewBidEvent {
        return NewBidEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            bidIndex: decodeFromFields("u64", fields.bid_index),
            price: decodeFromFields("u64", fields.price),
            size: decodeFromFields("u64", fields.size),
            bToken: decodeFromFields(TypeName.reified(), fields.b_token),
            oToken: decodeFromFields(TypeName.reified(), fields.o_token),
            bidderBalance: decodeFromFields("u64", fields.bidder_balance),
            incentiveBalance: decodeFromFields("u64", fields.incentive_balance),
            decimal: decodeFromFields("u64", fields.decimal),
            tsMs: decodeFromFields("u64", fields.ts_ms),
            oracleInfo: decodeFromFields(OracleInfo.reified(), fields.oracle_info),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): NewBidEvent {
        if (!isNewBidEvent(item.type)) {
            throw new Error("not a NewBidEvent type");
        }

        return NewBidEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            bidIndex: decodeFromFieldsWithTypes("u64", item.fields.bid_index),
            price: decodeFromFieldsWithTypes("u64", item.fields.price),
            size: decodeFromFieldsWithTypes("u64", item.fields.size),
            bToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.b_token),
            oToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.o_token),
            bidderBalance: decodeFromFieldsWithTypes("u64", item.fields.bidder_balance),
            incentiveBalance: decodeFromFieldsWithTypes("u64", item.fields.incentive_balance),
            decimal: decodeFromFieldsWithTypes("u64", item.fields.decimal),
            tsMs: decodeFromFieldsWithTypes("u64", item.fields.ts_ms),
            oracleInfo: decodeFromFieldsWithTypes(OracleInfo.reified(), item.fields.oracle_info),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): NewBidEvent {
        return NewBidEvent.fromFields(NewBidEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            bidIndex: this.bidIndex.toString(),
            price: this.price.toString(),
            size: this.size.toString(),
            bToken: this.bToken.toJSONField(),
            oToken: this.oToken.toJSONField(),
            bidderBalance: this.bidderBalance.toString(),
            incentiveBalance: this.incentiveBalance.toString(),
            decimal: this.decimal.toString(),
            tsMs: this.tsMs.toString(),
            oracleInfo: this.oracleInfo.toJSONField(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): NewBidEvent {
        return NewBidEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            bidIndex: decodeFromJSONField("u64", field.bidIndex),
            price: decodeFromJSONField("u64", field.price),
            size: decodeFromJSONField("u64", field.size),
            bToken: decodeFromJSONField(TypeName.reified(), field.bToken),
            oToken: decodeFromJSONField(TypeName.reified(), field.oToken),
            bidderBalance: decodeFromJSONField("u64", field.bidderBalance),
            incentiveBalance: decodeFromJSONField("u64", field.incentiveBalance),
            decimal: decodeFromJSONField("u64", field.decimal),
            tsMs: decodeFromJSONField("u64", field.tsMs),
            oracleInfo: decodeFromJSONField(OracleInfo.reified(), field.oracleInfo),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): NewBidEvent {
        if (json.$typeName !== NewBidEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return NewBidEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): NewBidEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isNewBidEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a NewBidEvent object`);
        }
        return NewBidEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): NewBidEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isNewBidEvent(data.bcs.type)) {
                throw new Error(`object at is not a NewBidEvent object`);
            }

            return NewBidEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return NewBidEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<NewBidEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching NewBidEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isNewBidEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a NewBidEvent object`);
        }

        return NewBidEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== OracleInfo =============================== */

export function isOracleInfo(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::typus_dov_single::OracleInfo`;
}

export interface OracleInfoFields {
    price: ToField<"u64">;
    decimal: ToField<"u64">;
}

export type OracleInfoReified = Reified<OracleInfo, OracleInfoFields>;

export class OracleInfo implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::typus_dov_single::OracleInfo`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = OracleInfo.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::typus_dov_single::OracleInfo`;
    readonly $typeArgs: [];
    readonly $isPhantom = OracleInfo.$isPhantom;

    readonly price: ToField<"u64">;
    readonly decimal: ToField<"u64">;

    private constructor(typeArgs: [], fields: OracleInfoFields) {
        this.$fullTypeName = composeSuiType(OracleInfo.$typeName, ...typeArgs) as `${typeof PKG_V1}::typus_dov_single::OracleInfo`;
        this.$typeArgs = typeArgs;

        this.price = fields.price;
        this.decimal = fields.decimal;
    }

    static reified(): OracleInfoReified {
        return {
            typeName: OracleInfo.$typeName,
            fullTypeName: composeSuiType(OracleInfo.$typeName, ...[]) as `${typeof PKG_V1}::typus_dov_single::OracleInfo`,
            typeArgs: [] as [],
            isPhantom: OracleInfo.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => OracleInfo.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => OracleInfo.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => OracleInfo.fromBcs(data),
            bcs: OracleInfo.bcs,
            fromJSONField: (field: any) => OracleInfo.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => OracleInfo.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => OracleInfo.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => OracleInfo.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => OracleInfo.fetch(client, id),
            new: (fields: OracleInfoFields) => {
                return new OracleInfo([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return OracleInfo.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<OracleInfo>> {
        return phantom(OracleInfo.reified());
    }
    static get p() {
        return OracleInfo.phantom();
    }

    static get bcs() {
        return bcs.struct("OracleInfo", {
            price: bcs.u64(),
            decimal: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): OracleInfo {
        return OracleInfo.reified().new({
            price: decodeFromFields("u64", fields.price),
            decimal: decodeFromFields("u64", fields.decimal),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): OracleInfo {
        if (!isOracleInfo(item.type)) {
            throw new Error("not a OracleInfo type");
        }

        return OracleInfo.reified().new({
            price: decodeFromFieldsWithTypes("u64", item.fields.price),
            decimal: decodeFromFieldsWithTypes("u64", item.fields.decimal),
        });
    }

    static fromBcs(data: Uint8Array): OracleInfo {
        return OracleInfo.fromFields(OracleInfo.bcs.parse(data));
    }

    toJSONField() {
        return {
            price: this.price.toString(),
            decimal: this.decimal.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): OracleInfo {
        return OracleInfo.reified().new({
            price: decodeFromJSONField("u64", field.price),
            decimal: decodeFromJSONField("u64", field.decimal),
        });
    }

    static fromJSON(json: Record<string, any>): OracleInfo {
        if (json.$typeName !== OracleInfo.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return OracleInfo.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): OracleInfo {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isOracleInfo(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a OracleInfo object`);
        }
        return OracleInfo.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): OracleInfo {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isOracleInfo(data.bcs.type)) {
                throw new Error(`object at is not a OracleInfo object`);
            }

            return OracleInfo.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return OracleInfo.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<OracleInfo> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching OracleInfo object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isOracleInfo(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a OracleInfo object`);
        }

        return OracleInfo.fromSuiObjectData(res.data);
    }
}

/* ============================== OtcEvent =============================== */

export function isOtcEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::typus_dov_single::OtcEvent`;
}

export interface OtcEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    round: ToField<"u64">;
    deliveryPrice: ToField<"u64">;
    deliverySize: ToField<"u64">;
    oTokenDecimal: ToField<"u64">;
    bidderBidValue: ToField<"u64">;
    bidderFee: ToField<"u64">;
    incentiveBidValue: ToField<"u64">;
    incentiveFee: ToField<"u64">;
    bTokenDecimal: ToField<"u64">;
    depositorIncentiveValue: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type OtcEventReified = Reified<OtcEvent, OtcEventFields>;

export class OtcEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::typus_dov_single::OtcEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = OtcEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::typus_dov_single::OtcEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = OtcEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly round: ToField<"u64">;
    readonly deliveryPrice: ToField<"u64">;
    readonly deliverySize: ToField<"u64">;
    readonly oTokenDecimal: ToField<"u64">;
    readonly bidderBidValue: ToField<"u64">;
    readonly bidderFee: ToField<"u64">;
    readonly incentiveBidValue: ToField<"u64">;
    readonly incentiveFee: ToField<"u64">;
    readonly bTokenDecimal: ToField<"u64">;
    readonly depositorIncentiveValue: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: OtcEventFields) {
        this.$fullTypeName = composeSuiType(OtcEvent.$typeName, ...typeArgs) as `${typeof PKG_V1}::typus_dov_single::OtcEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.round = fields.round;
        this.deliveryPrice = fields.deliveryPrice;
        this.deliverySize = fields.deliverySize;
        this.oTokenDecimal = fields.oTokenDecimal;
        this.bidderBidValue = fields.bidderBidValue;
        this.bidderFee = fields.bidderFee;
        this.incentiveBidValue = fields.incentiveBidValue;
        this.incentiveFee = fields.incentiveFee;
        this.bTokenDecimal = fields.bTokenDecimal;
        this.depositorIncentiveValue = fields.depositorIncentiveValue;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): OtcEventReified {
        return {
            typeName: OtcEvent.$typeName,
            fullTypeName: composeSuiType(OtcEvent.$typeName, ...[]) as `${typeof PKG_V1}::typus_dov_single::OtcEvent`,
            typeArgs: [] as [],
            isPhantom: OtcEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => OtcEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => OtcEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => OtcEvent.fromBcs(data),
            bcs: OtcEvent.bcs,
            fromJSONField: (field: any) => OtcEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => OtcEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => OtcEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => OtcEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => OtcEvent.fetch(client, id),
            new: (fields: OtcEventFields) => {
                return new OtcEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return OtcEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<OtcEvent>> {
        return phantom(OtcEvent.reified());
    }
    static get p() {
        return OtcEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("OtcEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            round: bcs.u64(),
            delivery_price: bcs.u64(),
            delivery_size: bcs.u64(),
            o_token_decimal: bcs.u64(),
            bidder_bid_value: bcs.u64(),
            bidder_fee: bcs.u64(),
            incentive_bid_value: bcs.u64(),
            incentive_fee: bcs.u64(),
            b_token_decimal: bcs.u64(),
            depositor_incentive_value: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): OtcEvent {
        return OtcEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            round: decodeFromFields("u64", fields.round),
            deliveryPrice: decodeFromFields("u64", fields.delivery_price),
            deliverySize: decodeFromFields("u64", fields.delivery_size),
            oTokenDecimal: decodeFromFields("u64", fields.o_token_decimal),
            bidderBidValue: decodeFromFields("u64", fields.bidder_bid_value),
            bidderFee: decodeFromFields("u64", fields.bidder_fee),
            incentiveBidValue: decodeFromFields("u64", fields.incentive_bid_value),
            incentiveFee: decodeFromFields("u64", fields.incentive_fee),
            bTokenDecimal: decodeFromFields("u64", fields.b_token_decimal),
            depositorIncentiveValue: decodeFromFields("u64", fields.depositor_incentive_value),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): OtcEvent {
        if (!isOtcEvent(item.type)) {
            throw new Error("not a OtcEvent type");
        }

        return OtcEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            round: decodeFromFieldsWithTypes("u64", item.fields.round),
            deliveryPrice: decodeFromFieldsWithTypes("u64", item.fields.delivery_price),
            deliverySize: decodeFromFieldsWithTypes("u64", item.fields.delivery_size),
            oTokenDecimal: decodeFromFieldsWithTypes("u64", item.fields.o_token_decimal),
            bidderBidValue: decodeFromFieldsWithTypes("u64", item.fields.bidder_bid_value),
            bidderFee: decodeFromFieldsWithTypes("u64", item.fields.bidder_fee),
            incentiveBidValue: decodeFromFieldsWithTypes("u64", item.fields.incentive_bid_value),
            incentiveFee: decodeFromFieldsWithTypes("u64", item.fields.incentive_fee),
            bTokenDecimal: decodeFromFieldsWithTypes("u64", item.fields.b_token_decimal),
            depositorIncentiveValue: decodeFromFieldsWithTypes("u64", item.fields.depositor_incentive_value),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): OtcEvent {
        return OtcEvent.fromFields(OtcEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            round: this.round.toString(),
            deliveryPrice: this.deliveryPrice.toString(),
            deliverySize: this.deliverySize.toString(),
            oTokenDecimal: this.oTokenDecimal.toString(),
            bidderBidValue: this.bidderBidValue.toString(),
            bidderFee: this.bidderFee.toString(),
            incentiveBidValue: this.incentiveBidValue.toString(),
            incentiveFee: this.incentiveFee.toString(),
            bTokenDecimal: this.bTokenDecimal.toString(),
            depositorIncentiveValue: this.depositorIncentiveValue.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): OtcEvent {
        return OtcEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            round: decodeFromJSONField("u64", field.round),
            deliveryPrice: decodeFromJSONField("u64", field.deliveryPrice),
            deliverySize: decodeFromJSONField("u64", field.deliverySize),
            oTokenDecimal: decodeFromJSONField("u64", field.oTokenDecimal),
            bidderBidValue: decodeFromJSONField("u64", field.bidderBidValue),
            bidderFee: decodeFromJSONField("u64", field.bidderFee),
            incentiveBidValue: decodeFromJSONField("u64", field.incentiveBidValue),
            incentiveFee: decodeFromJSONField("u64", field.incentiveFee),
            bTokenDecimal: decodeFromJSONField("u64", field.bTokenDecimal),
            depositorIncentiveValue: decodeFromJSONField("u64", field.depositorIncentiveValue),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): OtcEvent {
        if (json.$typeName !== OtcEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return OtcEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): OtcEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isOtcEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a OtcEvent object`);
        }
        return OtcEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): OtcEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isOtcEvent(data.bcs.type)) {
                throw new Error(`object at is not a OtcEvent object`);
            }

            return OtcEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return OtcEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<OtcEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching OtcEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isOtcEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a OtcEvent object`);
        }

        return OtcEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== PayoffConfig =============================== */

export function isPayoffConfig(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::typus_dov_single::PayoffConfig`;
}

export interface PayoffConfigFields {
    strikeBp: ToField<"u64">;
    weight: ToField<"u64">;
    isBuyer: ToField<"bool">;
    strike: ToField<Option<"u64">>;
    u64Padding: ToField<Vector<"u64">>;
}

export type PayoffConfigReified = Reified<PayoffConfig, PayoffConfigFields>;

export class PayoffConfig implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::typus_dov_single::PayoffConfig`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = PayoffConfig.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::typus_dov_single::PayoffConfig`;
    readonly $typeArgs: [];
    readonly $isPhantom = PayoffConfig.$isPhantom;

    readonly strikeBp: ToField<"u64">;
    readonly weight: ToField<"u64">;
    readonly isBuyer: ToField<"bool">;
    readonly strike: ToField<Option<"u64">>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: PayoffConfigFields) {
        this.$fullTypeName = composeSuiType(PayoffConfig.$typeName, ...typeArgs) as `${typeof PKG_V1}::typus_dov_single::PayoffConfig`;
        this.$typeArgs = typeArgs;

        this.strikeBp = fields.strikeBp;
        this.weight = fields.weight;
        this.isBuyer = fields.isBuyer;
        this.strike = fields.strike;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): PayoffConfigReified {
        return {
            typeName: PayoffConfig.$typeName,
            fullTypeName: composeSuiType(PayoffConfig.$typeName, ...[]) as `${typeof PKG_V1}::typus_dov_single::PayoffConfig`,
            typeArgs: [] as [],
            isPhantom: PayoffConfig.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => PayoffConfig.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => PayoffConfig.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => PayoffConfig.fromBcs(data),
            bcs: PayoffConfig.bcs,
            fromJSONField: (field: any) => PayoffConfig.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => PayoffConfig.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => PayoffConfig.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => PayoffConfig.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => PayoffConfig.fetch(client, id),
            new: (fields: PayoffConfigFields) => {
                return new PayoffConfig([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return PayoffConfig.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<PayoffConfig>> {
        return phantom(PayoffConfig.reified());
    }
    static get p() {
        return PayoffConfig.phantom();
    }

    static get bcs() {
        return bcs.struct("PayoffConfig", {
            strike_bp: bcs.u64(),
            weight: bcs.u64(),
            is_buyer: bcs.bool(),
            strike: Option.bcs(bcs.u64()),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): PayoffConfig {
        return PayoffConfig.reified().new({
            strikeBp: decodeFromFields("u64", fields.strike_bp),
            weight: decodeFromFields("u64", fields.weight),
            isBuyer: decodeFromFields("bool", fields.is_buyer),
            strike: decodeFromFields(Option.reified("u64"), fields.strike),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): PayoffConfig {
        if (!isPayoffConfig(item.type)) {
            throw new Error("not a PayoffConfig type");
        }

        return PayoffConfig.reified().new({
            strikeBp: decodeFromFieldsWithTypes("u64", item.fields.strike_bp),
            weight: decodeFromFieldsWithTypes("u64", item.fields.weight),
            isBuyer: decodeFromFieldsWithTypes("bool", item.fields.is_buyer),
            strike: decodeFromFieldsWithTypes(Option.reified("u64"), item.fields.strike),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): PayoffConfig {
        return PayoffConfig.fromFields(PayoffConfig.bcs.parse(data));
    }

    toJSONField() {
        return {
            strikeBp: this.strikeBp.toString(),
            weight: this.weight.toString(),
            isBuyer: this.isBuyer,
            strike: fieldToJSON<Option<"u64">>(`${Option.$typeName}<u64>`, this.strike),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): PayoffConfig {
        return PayoffConfig.reified().new({
            strikeBp: decodeFromJSONField("u64", field.strikeBp),
            weight: decodeFromJSONField("u64", field.weight),
            isBuyer: decodeFromJSONField("bool", field.isBuyer),
            strike: decodeFromJSONField(Option.reified("u64"), field.strike),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): PayoffConfig {
        if (json.$typeName !== PayoffConfig.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return PayoffConfig.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): PayoffConfig {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isPayoffConfig(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a PayoffConfig object`);
        }
        return PayoffConfig.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): PayoffConfig {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isPayoffConfig(data.bcs.type)) {
                throw new Error(`object at is not a PayoffConfig object`);
            }

            return PayoffConfig.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return PayoffConfig.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<PayoffConfig> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching PayoffConfig object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isPayoffConfig(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a PayoffConfig object`);
        }

        return PayoffConfig.fromSuiObjectData(res.data);
    }
}

/* ============================== PortfolioVault =============================== */

export function isPortfolioVault(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::typus_dov_single::PortfolioVault`;
}

export interface PortfolioVaultFields {
    id: ToField<UID>;
    info: ToField<Info>;
    config: ToField<Config>;
    authority: ToField<Authority>;
}

export type PortfolioVaultReified = Reified<PortfolioVault, PortfolioVaultFields>;

export class PortfolioVault implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::typus_dov_single::PortfolioVault`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = PortfolioVault.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::typus_dov_single::PortfolioVault`;
    readonly $typeArgs: [];
    readonly $isPhantom = PortfolioVault.$isPhantom;

    readonly id: ToField<UID>;
    readonly info: ToField<Info>;
    readonly config: ToField<Config>;
    readonly authority: ToField<Authority>;

    private constructor(typeArgs: [], fields: PortfolioVaultFields) {
        this.$fullTypeName = composeSuiType(PortfolioVault.$typeName, ...typeArgs) as `${typeof PKG_V1}::typus_dov_single::PortfolioVault`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.info = fields.info;
        this.config = fields.config;
        this.authority = fields.authority;
    }

    static reified(): PortfolioVaultReified {
        return {
            typeName: PortfolioVault.$typeName,
            fullTypeName: composeSuiType(PortfolioVault.$typeName, ...[]) as `${typeof PKG_V1}::typus_dov_single::PortfolioVault`,
            typeArgs: [] as [],
            isPhantom: PortfolioVault.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => PortfolioVault.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => PortfolioVault.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => PortfolioVault.fromBcs(data),
            bcs: PortfolioVault.bcs,
            fromJSONField: (field: any) => PortfolioVault.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => PortfolioVault.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => PortfolioVault.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => PortfolioVault.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => PortfolioVault.fetch(client, id),
            new: (fields: PortfolioVaultFields) => {
                return new PortfolioVault([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return PortfolioVault.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<PortfolioVault>> {
        return phantom(PortfolioVault.reified());
    }
    static get p() {
        return PortfolioVault.phantom();
    }

    static get bcs() {
        return bcs.struct("PortfolioVault", {
            id: UID.bcs,
            info: Info.bcs,
            config: Config.bcs,
            authority: Authority.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): PortfolioVault {
        return PortfolioVault.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            info: decodeFromFields(Info.reified(), fields.info),
            config: decodeFromFields(Config.reified(), fields.config),
            authority: decodeFromFields(Authority.reified(), fields.authority),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): PortfolioVault {
        if (!isPortfolioVault(item.type)) {
            throw new Error("not a PortfolioVault type");
        }

        return PortfolioVault.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            info: decodeFromFieldsWithTypes(Info.reified(), item.fields.info),
            config: decodeFromFieldsWithTypes(Config.reified(), item.fields.config),
            authority: decodeFromFieldsWithTypes(Authority.reified(), item.fields.authority),
        });
    }

    static fromBcs(data: Uint8Array): PortfolioVault {
        return PortfolioVault.fromFields(PortfolioVault.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            info: this.info.toJSONField(),
            config: this.config.toJSONField(),
            authority: this.authority.toJSONField(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): PortfolioVault {
        return PortfolioVault.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            info: decodeFromJSONField(Info.reified(), field.info),
            config: decodeFromJSONField(Config.reified(), field.config),
            authority: decodeFromJSONField(Authority.reified(), field.authority),
        });
    }

    static fromJSON(json: Record<string, any>): PortfolioVault {
        if (json.$typeName !== PortfolioVault.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return PortfolioVault.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): PortfolioVault {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isPortfolioVault(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a PortfolioVault object`);
        }
        return PortfolioVault.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): PortfolioVault {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isPortfolioVault(data.bcs.type)) {
                throw new Error(`object at is not a PortfolioVault object`);
            }

            return PortfolioVault.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return PortfolioVault.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<PortfolioVault> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching PortfolioVault object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isPortfolioVault(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a PortfolioVault object`);
        }

        return PortfolioVault.fromSuiObjectData(res.data);
    }
}

/* ============================== RaiseFundEvent =============================== */

export function isRaiseFundEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V19}::typus_dov_single::RaiseFundEvent`;
}

export interface RaiseFundEventFields {
    signer: ToField<"address">;
    token: ToField<TypeName>;
    log: ToField<Vector<"u64">>;
}

export type RaiseFundEventReified = Reified<RaiseFundEvent, RaiseFundEventFields>;

export class RaiseFundEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V19}::typus_dov_single::RaiseFundEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = RaiseFundEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V19}::typus_dov_single::RaiseFundEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = RaiseFundEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly token: ToField<TypeName>;
    readonly log: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: RaiseFundEventFields) {
        this.$fullTypeName = composeSuiType(RaiseFundEvent.$typeName, ...typeArgs) as `${typeof PKG_V19}::typus_dov_single::RaiseFundEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.token = fields.token;
        this.log = fields.log;
    }

    static reified(): RaiseFundEventReified {
        return {
            typeName: RaiseFundEvent.$typeName,
            fullTypeName: composeSuiType(RaiseFundEvent.$typeName, ...[]) as `${typeof PKG_V19}::typus_dov_single::RaiseFundEvent`,
            typeArgs: [] as [],
            isPhantom: RaiseFundEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => RaiseFundEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => RaiseFundEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => RaiseFundEvent.fromBcs(data),
            bcs: RaiseFundEvent.bcs,
            fromJSONField: (field: any) => RaiseFundEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => RaiseFundEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => RaiseFundEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => RaiseFundEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => RaiseFundEvent.fetch(client, id),
            new: (fields: RaiseFundEventFields) => {
                return new RaiseFundEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return RaiseFundEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<RaiseFundEvent>> {
        return phantom(RaiseFundEvent.reified());
    }
    static get p() {
        return RaiseFundEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("RaiseFundEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            token: TypeName.bcs,
            log: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): RaiseFundEvent {
        return RaiseFundEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            token: decodeFromFields(TypeName.reified(), fields.token),
            log: decodeFromFields(reified.vector("u64"), fields.log),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): RaiseFundEvent {
        if (!isRaiseFundEvent(item.type)) {
            throw new Error("not a RaiseFundEvent type");
        }

        return RaiseFundEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token),
            log: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.log),
        });
    }

    static fromBcs(data: Uint8Array): RaiseFundEvent {
        return RaiseFundEvent.fromFields(RaiseFundEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            token: this.token.toJSONField(),
            log: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.log),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): RaiseFundEvent {
        return RaiseFundEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            token: decodeFromJSONField(TypeName.reified(), field.token),
            log: decodeFromJSONField(reified.vector("u64"), field.log),
        });
    }

    static fromJSON(json: Record<string, any>): RaiseFundEvent {
        if (json.$typeName !== RaiseFundEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return RaiseFundEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): RaiseFundEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRaiseFundEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a RaiseFundEvent object`);
        }
        return RaiseFundEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): RaiseFundEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isRaiseFundEvent(data.bcs.type)) {
                throw new Error(`object at is not a RaiseFundEvent object`);
            }

            return RaiseFundEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return RaiseFundEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<RaiseFundEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching RaiseFundEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isRaiseFundEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RaiseFundEvent object`);
        }

        return RaiseFundEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== RecoupEvent =============================== */

export function isRecoupEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::typus_dov_single::RecoupEvent`;
}

export interface RecoupEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    round: ToField<"u64">;
    activeAmount: ToField<"u64">;
    deactivatingAmount: ToField<"u64">;
    dTokenDecimal: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type RecoupEventReified = Reified<RecoupEvent, RecoupEventFields>;

export class RecoupEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::typus_dov_single::RecoupEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = RecoupEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::typus_dov_single::RecoupEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = RecoupEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly round: ToField<"u64">;
    readonly activeAmount: ToField<"u64">;
    readonly deactivatingAmount: ToField<"u64">;
    readonly dTokenDecimal: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: RecoupEventFields) {
        this.$fullTypeName = composeSuiType(RecoupEvent.$typeName, ...typeArgs) as `${typeof PKG_V1}::typus_dov_single::RecoupEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.round = fields.round;
        this.activeAmount = fields.activeAmount;
        this.deactivatingAmount = fields.deactivatingAmount;
        this.dTokenDecimal = fields.dTokenDecimal;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): RecoupEventReified {
        return {
            typeName: RecoupEvent.$typeName,
            fullTypeName: composeSuiType(RecoupEvent.$typeName, ...[]) as `${typeof PKG_V1}::typus_dov_single::RecoupEvent`,
            typeArgs: [] as [],
            isPhantom: RecoupEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => RecoupEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => RecoupEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => RecoupEvent.fromBcs(data),
            bcs: RecoupEvent.bcs,
            fromJSONField: (field: any) => RecoupEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => RecoupEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => RecoupEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => RecoupEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => RecoupEvent.fetch(client, id),
            new: (fields: RecoupEventFields) => {
                return new RecoupEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return RecoupEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<RecoupEvent>> {
        return phantom(RecoupEvent.reified());
    }
    static get p() {
        return RecoupEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("RecoupEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            round: bcs.u64(),
            active_amount: bcs.u64(),
            deactivating_amount: bcs.u64(),
            d_token_decimal: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): RecoupEvent {
        return RecoupEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            round: decodeFromFields("u64", fields.round),
            activeAmount: decodeFromFields("u64", fields.active_amount),
            deactivatingAmount: decodeFromFields("u64", fields.deactivating_amount),
            dTokenDecimal: decodeFromFields("u64", fields.d_token_decimal),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): RecoupEvent {
        if (!isRecoupEvent(item.type)) {
            throw new Error("not a RecoupEvent type");
        }

        return RecoupEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            round: decodeFromFieldsWithTypes("u64", item.fields.round),
            activeAmount: decodeFromFieldsWithTypes("u64", item.fields.active_amount),
            deactivatingAmount: decodeFromFieldsWithTypes("u64", item.fields.deactivating_amount),
            dTokenDecimal: decodeFromFieldsWithTypes("u64", item.fields.d_token_decimal),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): RecoupEvent {
        return RecoupEvent.fromFields(RecoupEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            round: this.round.toString(),
            activeAmount: this.activeAmount.toString(),
            deactivatingAmount: this.deactivatingAmount.toString(),
            dTokenDecimal: this.dTokenDecimal.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): RecoupEvent {
        return RecoupEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            round: decodeFromJSONField("u64", field.round),
            activeAmount: decodeFromJSONField("u64", field.activeAmount),
            deactivatingAmount: decodeFromJSONField("u64", field.deactivatingAmount),
            dTokenDecimal: decodeFromJSONField("u64", field.dTokenDecimal),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): RecoupEvent {
        if (json.$typeName !== RecoupEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return RecoupEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): RecoupEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRecoupEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a RecoupEvent object`);
        }
        return RecoupEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): RecoupEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isRecoupEvent(data.bcs.type)) {
                throw new Error(`object at is not a RecoupEvent object`);
            }

            return RecoupEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return RecoupEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<RecoupEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching RecoupEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isRecoupEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RecoupEvent object`);
        }

        return RecoupEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== RedeemEvent =============================== */

export function isRedeemEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::typus_dov_single::RedeemEvent`;
}

export interface RedeemEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
    oracleInfo: ToField<OracleInfo>;
    u64Padding: ToField<Vector<"u64">>;
}

export type RedeemEventReified = Reified<RedeemEvent, RedeemEventFields>;

export class RedeemEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::typus_dov_single::RedeemEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = RedeemEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::typus_dov_single::RedeemEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = RedeemEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;
    readonly oracleInfo: ToField<OracleInfo>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: RedeemEventFields) {
        this.$fullTypeName = composeSuiType(RedeemEvent.$typeName, ...typeArgs) as `${typeof PKG_V1}::typus_dov_single::RedeemEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.token = fields.token;
        this.amount = fields.amount;
        this.oracleInfo = fields.oracleInfo;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): RedeemEventReified {
        return {
            typeName: RedeemEvent.$typeName,
            fullTypeName: composeSuiType(RedeemEvent.$typeName, ...[]) as `${typeof PKG_V1}::typus_dov_single::RedeemEvent`,
            typeArgs: [] as [],
            isPhantom: RedeemEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => RedeemEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => RedeemEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => RedeemEvent.fromBcs(data),
            bcs: RedeemEvent.bcs,
            fromJSONField: (field: any) => RedeemEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => RedeemEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => RedeemEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => RedeemEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => RedeemEvent.fetch(client, id),
            new: (fields: RedeemEventFields) => {
                return new RedeemEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return RedeemEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<RedeemEvent>> {
        return phantom(RedeemEvent.reified());
    }
    static get p() {
        return RedeemEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("RedeemEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            token: TypeName.bcs,
            amount: bcs.u64(),
            oracle_info: OracleInfo.bcs,
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): RedeemEvent {
        return RedeemEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            token: decodeFromFields(TypeName.reified(), fields.token),
            amount: decodeFromFields("u64", fields.amount),
            oracleInfo: decodeFromFields(OracleInfo.reified(), fields.oracle_info),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): RedeemEvent {
        if (!isRedeemEvent(item.type)) {
            throw new Error("not a RedeemEvent type");
        }

        return RedeemEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token),
            amount: decodeFromFieldsWithTypes("u64", item.fields.amount),
            oracleInfo: decodeFromFieldsWithTypes(OracleInfo.reified(), item.fields.oracle_info),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): RedeemEvent {
        return RedeemEvent.fromFields(RedeemEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            token: this.token.toJSONField(),
            amount: this.amount.toString(),
            oracleInfo: this.oracleInfo.toJSONField(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): RedeemEvent {
        return RedeemEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            token: decodeFromJSONField(TypeName.reified(), field.token),
            amount: decodeFromJSONField("u64", field.amount),
            oracleInfo: decodeFromJSONField(OracleInfo.reified(), field.oracleInfo),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): RedeemEvent {
        if (json.$typeName !== RedeemEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return RedeemEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): RedeemEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRedeemEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a RedeemEvent object`);
        }
        return RedeemEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): RedeemEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isRedeemEvent(data.bcs.type)) {
                throw new Error(`object at is not a RedeemEvent object`);
            }

            return RedeemEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return RedeemEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<RedeemEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching RedeemEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isRedeemEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RedeemEvent object`);
        }

        return RedeemEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== ReduceFundEvent =============================== */

export function isReduceFundEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V19}::typus_dov_single::ReduceFundEvent`;
}

export interface ReduceFundEventFields {
    signer: ToField<"address">;
    dToken: ToField<TypeName>;
    bToken: ToField<TypeName>;
    iToken: ToField<TypeName>;
    log: ToField<Vector<"u64">>;
}

export type ReduceFundEventReified = Reified<ReduceFundEvent, ReduceFundEventFields>;

export class ReduceFundEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V19}::typus_dov_single::ReduceFundEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = ReduceFundEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V19}::typus_dov_single::ReduceFundEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = ReduceFundEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly dToken: ToField<TypeName>;
    readonly bToken: ToField<TypeName>;
    readonly iToken: ToField<TypeName>;
    readonly log: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: ReduceFundEventFields) {
        this.$fullTypeName = composeSuiType(
            ReduceFundEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V19}::typus_dov_single::ReduceFundEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.dToken = fields.dToken;
        this.bToken = fields.bToken;
        this.iToken = fields.iToken;
        this.log = fields.log;
    }

    static reified(): ReduceFundEventReified {
        return {
            typeName: ReduceFundEvent.$typeName,
            fullTypeName: composeSuiType(ReduceFundEvent.$typeName, ...[]) as `${typeof PKG_V19}::typus_dov_single::ReduceFundEvent`,
            typeArgs: [] as [],
            isPhantom: ReduceFundEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => ReduceFundEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => ReduceFundEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => ReduceFundEvent.fromBcs(data),
            bcs: ReduceFundEvent.bcs,
            fromJSONField: (field: any) => ReduceFundEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => ReduceFundEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => ReduceFundEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => ReduceFundEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => ReduceFundEvent.fetch(client, id),
            new: (fields: ReduceFundEventFields) => {
                return new ReduceFundEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return ReduceFundEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<ReduceFundEvent>> {
        return phantom(ReduceFundEvent.reified());
    }
    static get p() {
        return ReduceFundEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("ReduceFundEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            d_token: TypeName.bcs,
            b_token: TypeName.bcs,
            i_token: TypeName.bcs,
            log: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): ReduceFundEvent {
        return ReduceFundEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            dToken: decodeFromFields(TypeName.reified(), fields.d_token),
            bToken: decodeFromFields(TypeName.reified(), fields.b_token),
            iToken: decodeFromFields(TypeName.reified(), fields.i_token),
            log: decodeFromFields(reified.vector("u64"), fields.log),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): ReduceFundEvent {
        if (!isReduceFundEvent(item.type)) {
            throw new Error("not a ReduceFundEvent type");
        }

        return ReduceFundEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            dToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.d_token),
            bToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.b_token),
            iToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.i_token),
            log: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.log),
        });
    }

    static fromBcs(data: Uint8Array): ReduceFundEvent {
        return ReduceFundEvent.fromFields(ReduceFundEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            dToken: this.dToken.toJSONField(),
            bToken: this.bToken.toJSONField(),
            iToken: this.iToken.toJSONField(),
            log: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.log),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): ReduceFundEvent {
        return ReduceFundEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            dToken: decodeFromJSONField(TypeName.reified(), field.dToken),
            bToken: decodeFromJSONField(TypeName.reified(), field.bToken),
            iToken: decodeFromJSONField(TypeName.reified(), field.iToken),
            log: decodeFromJSONField(reified.vector("u64"), field.log),
        });
    }

    static fromJSON(json: Record<string, any>): ReduceFundEvent {
        if (json.$typeName !== ReduceFundEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return ReduceFundEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): ReduceFundEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isReduceFundEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a ReduceFundEvent object`);
        }
        return ReduceFundEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): ReduceFundEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isReduceFundEvent(data.bcs.type)) {
                throw new Error(`object at is not a ReduceFundEvent object`);
            }

            return ReduceFundEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ReduceFundEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<ReduceFundEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching ReduceFundEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isReduceFundEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ReduceFundEvent object`);
        }

        return ReduceFundEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== RefreshDepositSnapshotEvent =============================== */

export function isRefreshDepositSnapshotEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V25}::typus_dov_single::RefreshDepositSnapshotEvent`;
}

export interface RefreshDepositSnapshotEventFields {
    signer: ToField<"address">;
    token: ToField<TypeName>;
    log: ToField<Vector<"u64">>;
}

export type RefreshDepositSnapshotEventReified = Reified<RefreshDepositSnapshotEvent, RefreshDepositSnapshotEventFields>;

export class RefreshDepositSnapshotEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V25}::typus_dov_single::RefreshDepositSnapshotEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = RefreshDepositSnapshotEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V25}::typus_dov_single::RefreshDepositSnapshotEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = RefreshDepositSnapshotEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly token: ToField<TypeName>;
    readonly log: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: RefreshDepositSnapshotEventFields) {
        this.$fullTypeName = composeSuiType(
            RefreshDepositSnapshotEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V25}::typus_dov_single::RefreshDepositSnapshotEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.token = fields.token;
        this.log = fields.log;
    }

    static reified(): RefreshDepositSnapshotEventReified {
        return {
            typeName: RefreshDepositSnapshotEvent.$typeName,
            fullTypeName: composeSuiType(
                RefreshDepositSnapshotEvent.$typeName,
                ...[]
            ) as `${typeof PKG_V25}::typus_dov_single::RefreshDepositSnapshotEvent`,
            typeArgs: [] as [],
            isPhantom: RefreshDepositSnapshotEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => RefreshDepositSnapshotEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => RefreshDepositSnapshotEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => RefreshDepositSnapshotEvent.fromBcs(data),
            bcs: RefreshDepositSnapshotEvent.bcs,
            fromJSONField: (field: any) => RefreshDepositSnapshotEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => RefreshDepositSnapshotEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => RefreshDepositSnapshotEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => RefreshDepositSnapshotEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => RefreshDepositSnapshotEvent.fetch(client, id),
            new: (fields: RefreshDepositSnapshotEventFields) => {
                return new RefreshDepositSnapshotEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return RefreshDepositSnapshotEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<RefreshDepositSnapshotEvent>> {
        return phantom(RefreshDepositSnapshotEvent.reified());
    }
    static get p() {
        return RefreshDepositSnapshotEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("RefreshDepositSnapshotEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            token: TypeName.bcs,
            log: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): RefreshDepositSnapshotEvent {
        return RefreshDepositSnapshotEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            token: decodeFromFields(TypeName.reified(), fields.token),
            log: decodeFromFields(reified.vector("u64"), fields.log),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): RefreshDepositSnapshotEvent {
        if (!isRefreshDepositSnapshotEvent(item.type)) {
            throw new Error("not a RefreshDepositSnapshotEvent type");
        }

        return RefreshDepositSnapshotEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token),
            log: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.log),
        });
    }

    static fromBcs(data: Uint8Array): RefreshDepositSnapshotEvent {
        return RefreshDepositSnapshotEvent.fromFields(RefreshDepositSnapshotEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            token: this.token.toJSONField(),
            log: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.log),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): RefreshDepositSnapshotEvent {
        return RefreshDepositSnapshotEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            token: decodeFromJSONField(TypeName.reified(), field.token),
            log: decodeFromJSONField(reified.vector("u64"), field.log),
        });
    }

    static fromJSON(json: Record<string, any>): RefreshDepositSnapshotEvent {
        if (json.$typeName !== RefreshDepositSnapshotEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return RefreshDepositSnapshotEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): RefreshDepositSnapshotEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRefreshDepositSnapshotEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a RefreshDepositSnapshotEvent object`);
        }
        return RefreshDepositSnapshotEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): RefreshDepositSnapshotEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isRefreshDepositSnapshotEvent(data.bcs.type)) {
                throw new Error(`object at is not a RefreshDepositSnapshotEvent object`);
            }

            return RefreshDepositSnapshotEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return RefreshDepositSnapshotEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<RefreshDepositSnapshotEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching RefreshDepositSnapshotEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isRefreshDepositSnapshotEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RefreshDepositSnapshotEvent object`);
        }

        return RefreshDepositSnapshotEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== RefundEvent =============================== */

export function isRefundEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::typus_dov_single::RefundEvent`;
}

export interface RefundEventFields {
    signer: ToField<"address">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type RefundEventReified = Reified<RefundEvent, RefundEventFields>;

export class RefundEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::typus_dov_single::RefundEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = RefundEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::typus_dov_single::RefundEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = RefundEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: RefundEventFields) {
        this.$fullTypeName = composeSuiType(RefundEvent.$typeName, ...typeArgs) as `${typeof PKG_V1}::typus_dov_single::RefundEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.token = fields.token;
        this.amount = fields.amount;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): RefundEventReified {
        return {
            typeName: RefundEvent.$typeName,
            fullTypeName: composeSuiType(RefundEvent.$typeName, ...[]) as `${typeof PKG_V1}::typus_dov_single::RefundEvent`,
            typeArgs: [] as [],
            isPhantom: RefundEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => RefundEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => RefundEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => RefundEvent.fromBcs(data),
            bcs: RefundEvent.bcs,
            fromJSONField: (field: any) => RefundEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => RefundEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => RefundEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => RefundEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => RefundEvent.fetch(client, id),
            new: (fields: RefundEventFields) => {
                return new RefundEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return RefundEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<RefundEvent>> {
        return phantom(RefundEvent.reified());
    }
    static get p() {
        return RefundEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("RefundEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            token: TypeName.bcs,
            amount: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): RefundEvent {
        return RefundEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            token: decodeFromFields(TypeName.reified(), fields.token),
            amount: decodeFromFields("u64", fields.amount),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): RefundEvent {
        if (!isRefundEvent(item.type)) {
            throw new Error("not a RefundEvent type");
        }

        return RefundEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token),
            amount: decodeFromFieldsWithTypes("u64", item.fields.amount),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): RefundEvent {
        return RefundEvent.fromFields(RefundEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            token: this.token.toJSONField(),
            amount: this.amount.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): RefundEvent {
        return RefundEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            token: decodeFromJSONField(TypeName.reified(), field.token),
            amount: decodeFromJSONField("u64", field.amount),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): RefundEvent {
        if (json.$typeName !== RefundEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return RefundEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): RefundEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRefundEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a RefundEvent object`);
        }
        return RefundEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): RefundEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isRefundEvent(data.bcs.type)) {
                throw new Error(`object at is not a RefundEvent object`);
            }

            return RefundEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return RefundEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<RefundEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching RefundEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isRefundEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RefundEvent object`);
        }

        return RefundEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== ResumeEvent =============================== */

export function isResumeEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V30}::typus_dov_single::ResumeEvent`;
}

export interface ResumeEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    round: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type ResumeEventReified = Reified<ResumeEvent, ResumeEventFields>;

export class ResumeEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V30}::typus_dov_single::ResumeEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = ResumeEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V30}::typus_dov_single::ResumeEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = ResumeEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly round: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: ResumeEventFields) {
        this.$fullTypeName = composeSuiType(ResumeEvent.$typeName, ...typeArgs) as `${typeof PKG_V30}::typus_dov_single::ResumeEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.round = fields.round;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): ResumeEventReified {
        return {
            typeName: ResumeEvent.$typeName,
            fullTypeName: composeSuiType(ResumeEvent.$typeName, ...[]) as `${typeof PKG_V30}::typus_dov_single::ResumeEvent`,
            typeArgs: [] as [],
            isPhantom: ResumeEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => ResumeEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => ResumeEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => ResumeEvent.fromBcs(data),
            bcs: ResumeEvent.bcs,
            fromJSONField: (field: any) => ResumeEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => ResumeEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => ResumeEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => ResumeEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => ResumeEvent.fetch(client, id),
            new: (fields: ResumeEventFields) => {
                return new ResumeEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return ResumeEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<ResumeEvent>> {
        return phantom(ResumeEvent.reified());
    }
    static get p() {
        return ResumeEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("ResumeEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            round: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): ResumeEvent {
        return ResumeEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            round: decodeFromFields("u64", fields.round),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): ResumeEvent {
        if (!isResumeEvent(item.type)) {
            throw new Error("not a ResumeEvent type");
        }

        return ResumeEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            round: decodeFromFieldsWithTypes("u64", item.fields.round),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): ResumeEvent {
        return ResumeEvent.fromFields(ResumeEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            round: this.round.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): ResumeEvent {
        return ResumeEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            round: decodeFromJSONField("u64", field.round),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): ResumeEvent {
        if (json.$typeName !== ResumeEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return ResumeEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): ResumeEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isResumeEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a ResumeEvent object`);
        }
        return ResumeEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): ResumeEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isResumeEvent(data.bcs.type)) {
                throw new Error(`object at is not a ResumeEvent object`);
            }

            return ResumeEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ResumeEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<ResumeEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching ResumeEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isResumeEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ResumeEvent object`);
        }

        return ResumeEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== SettleEvent =============================== */

export function isSettleEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::typus_dov_single::SettleEvent`;
}

export interface SettleEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    round: ToField<"u64">;
    oraclePrice: ToField<"u64">;
    oraclePriceDecimal: ToField<"u64">;
    settleBalance: ToField<"u64">;
    settledBalance: ToField<"u64">;
    dTokenDecimal: ToField<"u64">;
    dToken: ToField<TypeName>;
    sharePrice: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type SettleEventReified = Reified<SettleEvent, SettleEventFields>;

export class SettleEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::typus_dov_single::SettleEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = SettleEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::typus_dov_single::SettleEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = SettleEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly round: ToField<"u64">;
    readonly oraclePrice: ToField<"u64">;
    readonly oraclePriceDecimal: ToField<"u64">;
    readonly settleBalance: ToField<"u64">;
    readonly settledBalance: ToField<"u64">;
    readonly dTokenDecimal: ToField<"u64">;
    readonly dToken: ToField<TypeName>;
    readonly sharePrice: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: SettleEventFields) {
        this.$fullTypeName = composeSuiType(SettleEvent.$typeName, ...typeArgs) as `${typeof PKG_V1}::typus_dov_single::SettleEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.round = fields.round;
        this.oraclePrice = fields.oraclePrice;
        this.oraclePriceDecimal = fields.oraclePriceDecimal;
        this.settleBalance = fields.settleBalance;
        this.settledBalance = fields.settledBalance;
        this.dTokenDecimal = fields.dTokenDecimal;
        this.dToken = fields.dToken;
        this.sharePrice = fields.sharePrice;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): SettleEventReified {
        return {
            typeName: SettleEvent.$typeName,
            fullTypeName: composeSuiType(SettleEvent.$typeName, ...[]) as `${typeof PKG_V1}::typus_dov_single::SettleEvent`,
            typeArgs: [] as [],
            isPhantom: SettleEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => SettleEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => SettleEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => SettleEvent.fromBcs(data),
            bcs: SettleEvent.bcs,
            fromJSONField: (field: any) => SettleEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => SettleEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => SettleEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => SettleEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => SettleEvent.fetch(client, id),
            new: (fields: SettleEventFields) => {
                return new SettleEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return SettleEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<SettleEvent>> {
        return phantom(SettleEvent.reified());
    }
    static get p() {
        return SettleEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("SettleEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            round: bcs.u64(),
            oracle_price: bcs.u64(),
            oracle_price_decimal: bcs.u64(),
            settle_balance: bcs.u64(),
            settled_balance: bcs.u64(),
            d_token_decimal: bcs.u64(),
            d_token: TypeName.bcs,
            share_price: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): SettleEvent {
        return SettleEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            round: decodeFromFields("u64", fields.round),
            oraclePrice: decodeFromFields("u64", fields.oracle_price),
            oraclePriceDecimal: decodeFromFields("u64", fields.oracle_price_decimal),
            settleBalance: decodeFromFields("u64", fields.settle_balance),
            settledBalance: decodeFromFields("u64", fields.settled_balance),
            dTokenDecimal: decodeFromFields("u64", fields.d_token_decimal),
            dToken: decodeFromFields(TypeName.reified(), fields.d_token),
            sharePrice: decodeFromFields("u64", fields.share_price),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): SettleEvent {
        if (!isSettleEvent(item.type)) {
            throw new Error("not a SettleEvent type");
        }

        return SettleEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            round: decodeFromFieldsWithTypes("u64", item.fields.round),
            oraclePrice: decodeFromFieldsWithTypes("u64", item.fields.oracle_price),
            oraclePriceDecimal: decodeFromFieldsWithTypes("u64", item.fields.oracle_price_decimal),
            settleBalance: decodeFromFieldsWithTypes("u64", item.fields.settle_balance),
            settledBalance: decodeFromFieldsWithTypes("u64", item.fields.settled_balance),
            dTokenDecimal: decodeFromFieldsWithTypes("u64", item.fields.d_token_decimal),
            dToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.d_token),
            sharePrice: decodeFromFieldsWithTypes("u64", item.fields.share_price),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): SettleEvent {
        return SettleEvent.fromFields(SettleEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            round: this.round.toString(),
            oraclePrice: this.oraclePrice.toString(),
            oraclePriceDecimal: this.oraclePriceDecimal.toString(),
            settleBalance: this.settleBalance.toString(),
            settledBalance: this.settledBalance.toString(),
            dTokenDecimal: this.dTokenDecimal.toString(),
            dToken: this.dToken.toJSONField(),
            sharePrice: this.sharePrice.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): SettleEvent {
        return SettleEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            round: decodeFromJSONField("u64", field.round),
            oraclePrice: decodeFromJSONField("u64", field.oraclePrice),
            oraclePriceDecimal: decodeFromJSONField("u64", field.oraclePriceDecimal),
            settleBalance: decodeFromJSONField("u64", field.settleBalance),
            settledBalance: decodeFromJSONField("u64", field.settledBalance),
            dTokenDecimal: decodeFromJSONField("u64", field.dTokenDecimal),
            dToken: decodeFromJSONField(TypeName.reified(), field.dToken),
            sharePrice: decodeFromJSONField("u64", field.sharePrice),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): SettleEvent {
        if (json.$typeName !== SettleEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return SettleEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): SettleEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isSettleEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a SettleEvent object`);
        }
        return SettleEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): SettleEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isSettleEvent(data.bcs.type)) {
                throw new Error(`object at is not a SettleEvent object`);
            }

            return SettleEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return SettleEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<SettleEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching SettleEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isSettleEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SettleEvent object`);
        }

        return SettleEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== SettlementInfo =============================== */

export function isSettlementInfo(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::typus_dov_single::SettlementInfo`;
}

export interface SettlementInfoFields {
    round: ToField<"u64">;
    oraclePrice: ToField<"u64">;
    oraclePriceDecimal: ToField<"u64">;
    settleBalance: ToField<"u64">;
    settledBalance: ToField<"u64">;
    sharePrice: ToField<"u64">;
    sharePriceDecimal: ToField<"u64">;
    tsMs: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type SettlementInfoReified = Reified<SettlementInfo, SettlementInfoFields>;

export class SettlementInfo implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::typus_dov_single::SettlementInfo`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = SettlementInfo.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::typus_dov_single::SettlementInfo`;
    readonly $typeArgs: [];
    readonly $isPhantom = SettlementInfo.$isPhantom;

    readonly round: ToField<"u64">;
    readonly oraclePrice: ToField<"u64">;
    readonly oraclePriceDecimal: ToField<"u64">;
    readonly settleBalance: ToField<"u64">;
    readonly settledBalance: ToField<"u64">;
    readonly sharePrice: ToField<"u64">;
    readonly sharePriceDecimal: ToField<"u64">;
    readonly tsMs: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: SettlementInfoFields) {
        this.$fullTypeName = composeSuiType(SettlementInfo.$typeName, ...typeArgs) as `${typeof PKG_V1}::typus_dov_single::SettlementInfo`;
        this.$typeArgs = typeArgs;

        this.round = fields.round;
        this.oraclePrice = fields.oraclePrice;
        this.oraclePriceDecimal = fields.oraclePriceDecimal;
        this.settleBalance = fields.settleBalance;
        this.settledBalance = fields.settledBalance;
        this.sharePrice = fields.sharePrice;
        this.sharePriceDecimal = fields.sharePriceDecimal;
        this.tsMs = fields.tsMs;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): SettlementInfoReified {
        return {
            typeName: SettlementInfo.$typeName,
            fullTypeName: composeSuiType(SettlementInfo.$typeName, ...[]) as `${typeof PKG_V1}::typus_dov_single::SettlementInfo`,
            typeArgs: [] as [],
            isPhantom: SettlementInfo.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => SettlementInfo.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => SettlementInfo.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => SettlementInfo.fromBcs(data),
            bcs: SettlementInfo.bcs,
            fromJSONField: (field: any) => SettlementInfo.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => SettlementInfo.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => SettlementInfo.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => SettlementInfo.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => SettlementInfo.fetch(client, id),
            new: (fields: SettlementInfoFields) => {
                return new SettlementInfo([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return SettlementInfo.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<SettlementInfo>> {
        return phantom(SettlementInfo.reified());
    }
    static get p() {
        return SettlementInfo.phantom();
    }

    static get bcs() {
        return bcs.struct("SettlementInfo", {
            round: bcs.u64(),
            oracle_price: bcs.u64(),
            oracle_price_decimal: bcs.u64(),
            settle_balance: bcs.u64(),
            settled_balance: bcs.u64(),
            share_price: bcs.u64(),
            share_price_decimal: bcs.u64(),
            ts_ms: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): SettlementInfo {
        return SettlementInfo.reified().new({
            round: decodeFromFields("u64", fields.round),
            oraclePrice: decodeFromFields("u64", fields.oracle_price),
            oraclePriceDecimal: decodeFromFields("u64", fields.oracle_price_decimal),
            settleBalance: decodeFromFields("u64", fields.settle_balance),
            settledBalance: decodeFromFields("u64", fields.settled_balance),
            sharePrice: decodeFromFields("u64", fields.share_price),
            sharePriceDecimal: decodeFromFields("u64", fields.share_price_decimal),
            tsMs: decodeFromFields("u64", fields.ts_ms),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): SettlementInfo {
        if (!isSettlementInfo(item.type)) {
            throw new Error("not a SettlementInfo type");
        }

        return SettlementInfo.reified().new({
            round: decodeFromFieldsWithTypes("u64", item.fields.round),
            oraclePrice: decodeFromFieldsWithTypes("u64", item.fields.oracle_price),
            oraclePriceDecimal: decodeFromFieldsWithTypes("u64", item.fields.oracle_price_decimal),
            settleBalance: decodeFromFieldsWithTypes("u64", item.fields.settle_balance),
            settledBalance: decodeFromFieldsWithTypes("u64", item.fields.settled_balance),
            sharePrice: decodeFromFieldsWithTypes("u64", item.fields.share_price),
            sharePriceDecimal: decodeFromFieldsWithTypes("u64", item.fields.share_price_decimal),
            tsMs: decodeFromFieldsWithTypes("u64", item.fields.ts_ms),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): SettlementInfo {
        return SettlementInfo.fromFields(SettlementInfo.bcs.parse(data));
    }

    toJSONField() {
        return {
            round: this.round.toString(),
            oraclePrice: this.oraclePrice.toString(),
            oraclePriceDecimal: this.oraclePriceDecimal.toString(),
            settleBalance: this.settleBalance.toString(),
            settledBalance: this.settledBalance.toString(),
            sharePrice: this.sharePrice.toString(),
            sharePriceDecimal: this.sharePriceDecimal.toString(),
            tsMs: this.tsMs.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): SettlementInfo {
        return SettlementInfo.reified().new({
            round: decodeFromJSONField("u64", field.round),
            oraclePrice: decodeFromJSONField("u64", field.oraclePrice),
            oraclePriceDecimal: decodeFromJSONField("u64", field.oraclePriceDecimal),
            settleBalance: decodeFromJSONField("u64", field.settleBalance),
            settledBalance: decodeFromJSONField("u64", field.settledBalance),
            sharePrice: decodeFromJSONField("u64", field.sharePrice),
            sharePriceDecimal: decodeFromJSONField("u64", field.sharePriceDecimal),
            tsMs: decodeFromJSONField("u64", field.tsMs),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): SettlementInfo {
        if (json.$typeName !== SettlementInfo.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return SettlementInfo.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): SettlementInfo {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isSettlementInfo(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a SettlementInfo object`);
        }
        return SettlementInfo.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): SettlementInfo {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isSettlementInfo(data.bcs.type)) {
                throw new Error(`object at is not a SettlementInfo object`);
            }

            return SettlementInfo.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return SettlementInfo.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<SettlementInfo> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching SettlementInfo object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isSettlementInfo(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SettlementInfo object`);
        }

        return SettlementInfo.fromSuiObjectData(res.data);
    }
}

/* ============================== SkipEvent =============================== */

export function isSkipEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V30}::typus_dov_single::SkipEvent`;
}

export interface SkipEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    rounds: ToField<Vector<"u64">>;
    u64Padding: ToField<Vector<"u64">>;
}

export type SkipEventReified = Reified<SkipEvent, SkipEventFields>;

export class SkipEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V30}::typus_dov_single::SkipEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = SkipEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V30}::typus_dov_single::SkipEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = SkipEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly rounds: ToField<Vector<"u64">>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: SkipEventFields) {
        this.$fullTypeName = composeSuiType(SkipEvent.$typeName, ...typeArgs) as `${typeof PKG_V30}::typus_dov_single::SkipEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.rounds = fields.rounds;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): SkipEventReified {
        return {
            typeName: SkipEvent.$typeName,
            fullTypeName: composeSuiType(SkipEvent.$typeName, ...[]) as `${typeof PKG_V30}::typus_dov_single::SkipEvent`,
            typeArgs: [] as [],
            isPhantom: SkipEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => SkipEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => SkipEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => SkipEvent.fromBcs(data),
            bcs: SkipEvent.bcs,
            fromJSONField: (field: any) => SkipEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => SkipEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => SkipEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => SkipEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => SkipEvent.fetch(client, id),
            new: (fields: SkipEventFields) => {
                return new SkipEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return SkipEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<SkipEvent>> {
        return phantom(SkipEvent.reified());
    }
    static get p() {
        return SkipEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("SkipEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            rounds: bcs.vector(bcs.u64()),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): SkipEvent {
        return SkipEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            rounds: decodeFromFields(reified.vector("u64"), fields.rounds),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): SkipEvent {
        if (!isSkipEvent(item.type)) {
            throw new Error("not a SkipEvent type");
        }

        return SkipEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            rounds: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.rounds),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): SkipEvent {
        return SkipEvent.fromFields(SkipEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            rounds: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.rounds),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): SkipEvent {
        return SkipEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            rounds: decodeFromJSONField(reified.vector("u64"), field.rounds),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): SkipEvent {
        if (json.$typeName !== SkipEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return SkipEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): SkipEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isSkipEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a SkipEvent object`);
        }
        return SkipEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): SkipEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isSkipEvent(data.bcs.type)) {
                throw new Error(`object at is not a SkipEvent object`);
            }

            return SkipEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return SkipEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<SkipEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching SkipEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isSkipEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SkipEvent object`);
        }

        return SkipEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== TYPUS_DOV_SINGLE =============================== */

export function isTYPUS_DOV_SINGLE(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::typus_dov_single::TYPUS_DOV_SINGLE`;
}

export interface TYPUS_DOV_SINGLEFields {
    dummyField: ToField<"bool">;
}

export type TYPUS_DOV_SINGLEReified = Reified<TYPUS_DOV_SINGLE, TYPUS_DOV_SINGLEFields>;

export class TYPUS_DOV_SINGLE implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::typus_dov_single::TYPUS_DOV_SINGLE`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = TYPUS_DOV_SINGLE.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::typus_dov_single::TYPUS_DOV_SINGLE`;
    readonly $typeArgs: [];
    readonly $isPhantom = TYPUS_DOV_SINGLE.$isPhantom;

    readonly dummyField: ToField<"bool">;

    private constructor(typeArgs: [], fields: TYPUS_DOV_SINGLEFields) {
        this.$fullTypeName = composeSuiType(
            TYPUS_DOV_SINGLE.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::typus_dov_single::TYPUS_DOV_SINGLE`;
        this.$typeArgs = typeArgs;

        this.dummyField = fields.dummyField;
    }

    static reified(): TYPUS_DOV_SINGLEReified {
        return {
            typeName: TYPUS_DOV_SINGLE.$typeName,
            fullTypeName: composeSuiType(TYPUS_DOV_SINGLE.$typeName, ...[]) as `${typeof PKG_V1}::typus_dov_single::TYPUS_DOV_SINGLE`,
            typeArgs: [] as [],
            isPhantom: TYPUS_DOV_SINGLE.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => TYPUS_DOV_SINGLE.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => TYPUS_DOV_SINGLE.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => TYPUS_DOV_SINGLE.fromBcs(data),
            bcs: TYPUS_DOV_SINGLE.bcs,
            fromJSONField: (field: any) => TYPUS_DOV_SINGLE.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => TYPUS_DOV_SINGLE.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => TYPUS_DOV_SINGLE.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => TYPUS_DOV_SINGLE.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => TYPUS_DOV_SINGLE.fetch(client, id),
            new: (fields: TYPUS_DOV_SINGLEFields) => {
                return new TYPUS_DOV_SINGLE([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return TYPUS_DOV_SINGLE.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<TYPUS_DOV_SINGLE>> {
        return phantom(TYPUS_DOV_SINGLE.reified());
    }
    static get p() {
        return TYPUS_DOV_SINGLE.phantom();
    }

    static get bcs() {
        return bcs.struct("TYPUS_DOV_SINGLE", {
            dummy_field: bcs.bool(),
        });
    }

    static fromFields(fields: Record<string, any>): TYPUS_DOV_SINGLE {
        return TYPUS_DOV_SINGLE.reified().new({
            dummyField: decodeFromFields("bool", fields.dummy_field),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): TYPUS_DOV_SINGLE {
        if (!isTYPUS_DOV_SINGLE(item.type)) {
            throw new Error("not a TYPUS_DOV_SINGLE type");
        }

        return TYPUS_DOV_SINGLE.reified().new({
            dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
        });
    }

    static fromBcs(data: Uint8Array): TYPUS_DOV_SINGLE {
        return TYPUS_DOV_SINGLE.fromFields(TYPUS_DOV_SINGLE.bcs.parse(data));
    }

    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): TYPUS_DOV_SINGLE {
        return TYPUS_DOV_SINGLE.reified().new({
            dummyField: decodeFromJSONField("bool", field.dummyField),
        });
    }

    static fromJSON(json: Record<string, any>): TYPUS_DOV_SINGLE {
        if (json.$typeName !== TYPUS_DOV_SINGLE.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return TYPUS_DOV_SINGLE.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): TYPUS_DOV_SINGLE {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isTYPUS_DOV_SINGLE(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a TYPUS_DOV_SINGLE object`);
        }
        return TYPUS_DOV_SINGLE.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): TYPUS_DOV_SINGLE {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isTYPUS_DOV_SINGLE(data.bcs.type)) {
                throw new Error(`object at is not a TYPUS_DOV_SINGLE object`);
            }

            return TYPUS_DOV_SINGLE.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return TYPUS_DOV_SINGLE.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<TYPUS_DOV_SINGLE> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching TYPUS_DOV_SINGLE object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isTYPUS_DOV_SINGLE(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TYPUS_DOV_SINGLE object`);
        }

        return TYPUS_DOV_SINGLE.fromSuiObjectData(res.data);
    }
}

/* ============================== TerminateAuctionEvent =============================== */

export function isTerminateAuctionEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::typus_dov_single::TerminateAuctionEvent`;
}

export interface TerminateAuctionEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    round: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type TerminateAuctionEventReified = Reified<TerminateAuctionEvent, TerminateAuctionEventFields>;

export class TerminateAuctionEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::typus_dov_single::TerminateAuctionEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = TerminateAuctionEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::typus_dov_single::TerminateAuctionEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = TerminateAuctionEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly round: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: TerminateAuctionEventFields) {
        this.$fullTypeName = composeSuiType(
            TerminateAuctionEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::typus_dov_single::TerminateAuctionEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.round = fields.round;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): TerminateAuctionEventReified {
        return {
            typeName: TerminateAuctionEvent.$typeName,
            fullTypeName: composeSuiType(
                TerminateAuctionEvent.$typeName,
                ...[]
            ) as `${typeof PKG_V1}::typus_dov_single::TerminateAuctionEvent`,
            typeArgs: [] as [],
            isPhantom: TerminateAuctionEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => TerminateAuctionEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => TerminateAuctionEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => TerminateAuctionEvent.fromBcs(data),
            bcs: TerminateAuctionEvent.bcs,
            fromJSONField: (field: any) => TerminateAuctionEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => TerminateAuctionEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => TerminateAuctionEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => TerminateAuctionEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => TerminateAuctionEvent.fetch(client, id),
            new: (fields: TerminateAuctionEventFields) => {
                return new TerminateAuctionEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return TerminateAuctionEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<TerminateAuctionEvent>> {
        return phantom(TerminateAuctionEvent.reified());
    }
    static get p() {
        return TerminateAuctionEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("TerminateAuctionEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            round: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): TerminateAuctionEvent {
        return TerminateAuctionEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            round: decodeFromFields("u64", fields.round),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): TerminateAuctionEvent {
        if (!isTerminateAuctionEvent(item.type)) {
            throw new Error("not a TerminateAuctionEvent type");
        }

        return TerminateAuctionEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            round: decodeFromFieldsWithTypes("u64", item.fields.round),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): TerminateAuctionEvent {
        return TerminateAuctionEvent.fromFields(TerminateAuctionEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            round: this.round.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): TerminateAuctionEvent {
        return TerminateAuctionEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            round: decodeFromJSONField("u64", field.round),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): TerminateAuctionEvent {
        if (json.$typeName !== TerminateAuctionEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return TerminateAuctionEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): TerminateAuctionEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isTerminateAuctionEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a TerminateAuctionEvent object`);
        }
        return TerminateAuctionEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): TerminateAuctionEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isTerminateAuctionEvent(data.bcs.type)) {
                throw new Error(`object at is not a TerminateAuctionEvent object`);
            }

            return TerminateAuctionEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return TerminateAuctionEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<TerminateAuctionEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching TerminateAuctionEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isTerminateAuctionEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TerminateAuctionEvent object`);
        }

        return TerminateAuctionEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== TerminateVaultEvent =============================== */

export function isTerminateVaultEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::typus_dov_single::TerminateVaultEvent`;
}

export interface TerminateVaultEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    round: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type TerminateVaultEventReified = Reified<TerminateVaultEvent, TerminateVaultEventFields>;

export class TerminateVaultEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::typus_dov_single::TerminateVaultEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = TerminateVaultEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::typus_dov_single::TerminateVaultEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = TerminateVaultEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly round: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: TerminateVaultEventFields) {
        this.$fullTypeName = composeSuiType(
            TerminateVaultEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::typus_dov_single::TerminateVaultEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.round = fields.round;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): TerminateVaultEventReified {
        return {
            typeName: TerminateVaultEvent.$typeName,
            fullTypeName: composeSuiType(TerminateVaultEvent.$typeName, ...[]) as `${typeof PKG_V1}::typus_dov_single::TerminateVaultEvent`,
            typeArgs: [] as [],
            isPhantom: TerminateVaultEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => TerminateVaultEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => TerminateVaultEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => TerminateVaultEvent.fromBcs(data),
            bcs: TerminateVaultEvent.bcs,
            fromJSONField: (field: any) => TerminateVaultEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => TerminateVaultEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => TerminateVaultEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => TerminateVaultEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => TerminateVaultEvent.fetch(client, id),
            new: (fields: TerminateVaultEventFields) => {
                return new TerminateVaultEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return TerminateVaultEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<TerminateVaultEvent>> {
        return phantom(TerminateVaultEvent.reified());
    }
    static get p() {
        return TerminateVaultEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("TerminateVaultEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            round: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): TerminateVaultEvent {
        return TerminateVaultEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            round: decodeFromFields("u64", fields.round),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): TerminateVaultEvent {
        if (!isTerminateVaultEvent(item.type)) {
            throw new Error("not a TerminateVaultEvent type");
        }

        return TerminateVaultEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            round: decodeFromFieldsWithTypes("u64", item.fields.round),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): TerminateVaultEvent {
        return TerminateVaultEvent.fromFields(TerminateVaultEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            round: this.round.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): TerminateVaultEvent {
        return TerminateVaultEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            round: decodeFromJSONField("u64", field.round),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): TerminateVaultEvent {
        if (json.$typeName !== TerminateVaultEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return TerminateVaultEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): TerminateVaultEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isTerminateVaultEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a TerminateVaultEvent object`);
        }
        return TerminateVaultEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): TerminateVaultEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isTerminateVaultEvent(data.bcs.type)) {
                throw new Error(`object at is not a TerminateVaultEvent object`);
            }

            return TerminateVaultEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return TerminateVaultEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<TerminateVaultEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching TerminateVaultEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isTerminateVaultEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TerminateVaultEvent object`);
        }

        return TerminateVaultEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== TransferBidReceiptEvent =============================== */

export function isTransferBidReceiptEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::typus_dov_single::TransferBidReceiptEvent`;
}

export interface TransferBidReceiptEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    amount: ToField<"u64">;
    decimal: ToField<"u64">;
    recipient: ToField<"address">;
    oracleInfo: ToField<OracleInfo>;
    u64Padding: ToField<Vector<"u64">>;
}

export type TransferBidReceiptEventReified = Reified<TransferBidReceiptEvent, TransferBidReceiptEventFields>;

export class TransferBidReceiptEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::typus_dov_single::TransferBidReceiptEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = TransferBidReceiptEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::typus_dov_single::TransferBidReceiptEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = TransferBidReceiptEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly amount: ToField<"u64">;
    readonly decimal: ToField<"u64">;
    readonly recipient: ToField<"address">;
    readonly oracleInfo: ToField<OracleInfo>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: TransferBidReceiptEventFields) {
        this.$fullTypeName = composeSuiType(
            TransferBidReceiptEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::typus_dov_single::TransferBidReceiptEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.amount = fields.amount;
        this.decimal = fields.decimal;
        this.recipient = fields.recipient;
        this.oracleInfo = fields.oracleInfo;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): TransferBidReceiptEventReified {
        return {
            typeName: TransferBidReceiptEvent.$typeName,
            fullTypeName: composeSuiType(
                TransferBidReceiptEvent.$typeName,
                ...[]
            ) as `${typeof PKG_V1}::typus_dov_single::TransferBidReceiptEvent`,
            typeArgs: [] as [],
            isPhantom: TransferBidReceiptEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => TransferBidReceiptEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => TransferBidReceiptEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => TransferBidReceiptEvent.fromBcs(data),
            bcs: TransferBidReceiptEvent.bcs,
            fromJSONField: (field: any) => TransferBidReceiptEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => TransferBidReceiptEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => TransferBidReceiptEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => TransferBidReceiptEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => TransferBidReceiptEvent.fetch(client, id),
            new: (fields: TransferBidReceiptEventFields) => {
                return new TransferBidReceiptEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return TransferBidReceiptEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<TransferBidReceiptEvent>> {
        return phantom(TransferBidReceiptEvent.reified());
    }
    static get p() {
        return TransferBidReceiptEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("TransferBidReceiptEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            amount: bcs.u64(),
            decimal: bcs.u64(),
            recipient: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            oracle_info: OracleInfo.bcs,
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): TransferBidReceiptEvent {
        return TransferBidReceiptEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            amount: decodeFromFields("u64", fields.amount),
            decimal: decodeFromFields("u64", fields.decimal),
            recipient: decodeFromFields("address", fields.recipient),
            oracleInfo: decodeFromFields(OracleInfo.reified(), fields.oracle_info),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): TransferBidReceiptEvent {
        if (!isTransferBidReceiptEvent(item.type)) {
            throw new Error("not a TransferBidReceiptEvent type");
        }

        return TransferBidReceiptEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            amount: decodeFromFieldsWithTypes("u64", item.fields.amount),
            decimal: decodeFromFieldsWithTypes("u64", item.fields.decimal),
            recipient: decodeFromFieldsWithTypes("address", item.fields.recipient),
            oracleInfo: decodeFromFieldsWithTypes(OracleInfo.reified(), item.fields.oracle_info),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): TransferBidReceiptEvent {
        return TransferBidReceiptEvent.fromFields(TransferBidReceiptEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            amount: this.amount.toString(),
            decimal: this.decimal.toString(),
            recipient: this.recipient,
            oracleInfo: this.oracleInfo.toJSONField(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): TransferBidReceiptEvent {
        return TransferBidReceiptEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            amount: decodeFromJSONField("u64", field.amount),
            decimal: decodeFromJSONField("u64", field.decimal),
            recipient: decodeFromJSONField("address", field.recipient),
            oracleInfo: decodeFromJSONField(OracleInfo.reified(), field.oracleInfo),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): TransferBidReceiptEvent {
        if (json.$typeName !== TransferBidReceiptEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return TransferBidReceiptEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): TransferBidReceiptEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isTransferBidReceiptEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a TransferBidReceiptEvent object`);
        }
        return TransferBidReceiptEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): TransferBidReceiptEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isTransferBidReceiptEvent(data.bcs.type)) {
                throw new Error(`object at is not a TransferBidReceiptEvent object`);
            }

            return TransferBidReceiptEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return TransferBidReceiptEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<TransferBidReceiptEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching TransferBidReceiptEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isTransferBidReceiptEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TransferBidReceiptEvent object`);
        }

        return TransferBidReceiptEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== UnsubscribeEvent =============================== */

export function isUnsubscribeEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::typus_dov_single::UnsubscribeEvent`;
}

export interface UnsubscribeEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
    decimal: ToField<"u64">;
    oracleInfo: ToField<OracleInfo>;
    u64Padding: ToField<Vector<"u64">>;
}

export type UnsubscribeEventReified = Reified<UnsubscribeEvent, UnsubscribeEventFields>;

export class UnsubscribeEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::typus_dov_single::UnsubscribeEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = UnsubscribeEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::typus_dov_single::UnsubscribeEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = UnsubscribeEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;
    readonly decimal: ToField<"u64">;
    readonly oracleInfo: ToField<OracleInfo>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: UnsubscribeEventFields) {
        this.$fullTypeName = composeSuiType(
            UnsubscribeEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::typus_dov_single::UnsubscribeEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.token = fields.token;
        this.amount = fields.amount;
        this.decimal = fields.decimal;
        this.oracleInfo = fields.oracleInfo;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): UnsubscribeEventReified {
        return {
            typeName: UnsubscribeEvent.$typeName,
            fullTypeName: composeSuiType(UnsubscribeEvent.$typeName, ...[]) as `${typeof PKG_V1}::typus_dov_single::UnsubscribeEvent`,
            typeArgs: [] as [],
            isPhantom: UnsubscribeEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => UnsubscribeEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => UnsubscribeEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => UnsubscribeEvent.fromBcs(data),
            bcs: UnsubscribeEvent.bcs,
            fromJSONField: (field: any) => UnsubscribeEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => UnsubscribeEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => UnsubscribeEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => UnsubscribeEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => UnsubscribeEvent.fetch(client, id),
            new: (fields: UnsubscribeEventFields) => {
                return new UnsubscribeEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return UnsubscribeEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<UnsubscribeEvent>> {
        return phantom(UnsubscribeEvent.reified());
    }
    static get p() {
        return UnsubscribeEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("UnsubscribeEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            token: TypeName.bcs,
            amount: bcs.u64(),
            decimal: bcs.u64(),
            oracle_info: OracleInfo.bcs,
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): UnsubscribeEvent {
        return UnsubscribeEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            token: decodeFromFields(TypeName.reified(), fields.token),
            amount: decodeFromFields("u64", fields.amount),
            decimal: decodeFromFields("u64", fields.decimal),
            oracleInfo: decodeFromFields(OracleInfo.reified(), fields.oracle_info),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): UnsubscribeEvent {
        if (!isUnsubscribeEvent(item.type)) {
            throw new Error("not a UnsubscribeEvent type");
        }

        return UnsubscribeEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token),
            amount: decodeFromFieldsWithTypes("u64", item.fields.amount),
            decimal: decodeFromFieldsWithTypes("u64", item.fields.decimal),
            oracleInfo: decodeFromFieldsWithTypes(OracleInfo.reified(), item.fields.oracle_info),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): UnsubscribeEvent {
        return UnsubscribeEvent.fromFields(UnsubscribeEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            token: this.token.toJSONField(),
            amount: this.amount.toString(),
            decimal: this.decimal.toString(),
            oracleInfo: this.oracleInfo.toJSONField(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): UnsubscribeEvent {
        return UnsubscribeEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            token: decodeFromJSONField(TypeName.reified(), field.token),
            amount: decodeFromJSONField("u64", field.amount),
            decimal: decodeFromJSONField("u64", field.decimal),
            oracleInfo: decodeFromJSONField(OracleInfo.reified(), field.oracleInfo),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): UnsubscribeEvent {
        if (json.$typeName !== UnsubscribeEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return UnsubscribeEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): UnsubscribeEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUnsubscribeEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a UnsubscribeEvent object`);
        }
        return UnsubscribeEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): UnsubscribeEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isUnsubscribeEvent(data.bcs.type)) {
                throw new Error(`object at is not a UnsubscribeEvent object`);
            }

            return UnsubscribeEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return UnsubscribeEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<UnsubscribeEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching UnsubscribeEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isUnsubscribeEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UnsubscribeEvent object`);
        }

        return UnsubscribeEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== VaultConfig =============================== */

export function isVaultConfig(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::typus_dov_single::VaultConfig`;
}

export interface VaultConfigFields {
    payoffConfigs: ToField<Vector<PayoffConfig>>;
    strikeIncrement: ToField<"u64">;
    decaySpeed: ToField<"u64">;
    initialPrice: ToField<"u64">;
    finalPrice: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type VaultConfigReified = Reified<VaultConfig, VaultConfigFields>;

export class VaultConfig implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::typus_dov_single::VaultConfig`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = VaultConfig.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::typus_dov_single::VaultConfig`;
    readonly $typeArgs: [];
    readonly $isPhantom = VaultConfig.$isPhantom;

    readonly payoffConfigs: ToField<Vector<PayoffConfig>>;
    readonly strikeIncrement: ToField<"u64">;
    readonly decaySpeed: ToField<"u64">;
    readonly initialPrice: ToField<"u64">;
    readonly finalPrice: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: VaultConfigFields) {
        this.$fullTypeName = composeSuiType(VaultConfig.$typeName, ...typeArgs) as `${typeof PKG_V1}::typus_dov_single::VaultConfig`;
        this.$typeArgs = typeArgs;

        this.payoffConfigs = fields.payoffConfigs;
        this.strikeIncrement = fields.strikeIncrement;
        this.decaySpeed = fields.decaySpeed;
        this.initialPrice = fields.initialPrice;
        this.finalPrice = fields.finalPrice;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): VaultConfigReified {
        return {
            typeName: VaultConfig.$typeName,
            fullTypeName: composeSuiType(VaultConfig.$typeName, ...[]) as `${typeof PKG_V1}::typus_dov_single::VaultConfig`,
            typeArgs: [] as [],
            isPhantom: VaultConfig.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => VaultConfig.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => VaultConfig.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => VaultConfig.fromBcs(data),
            bcs: VaultConfig.bcs,
            fromJSONField: (field: any) => VaultConfig.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => VaultConfig.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => VaultConfig.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => VaultConfig.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => VaultConfig.fetch(client, id),
            new: (fields: VaultConfigFields) => {
                return new VaultConfig([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return VaultConfig.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<VaultConfig>> {
        return phantom(VaultConfig.reified());
    }
    static get p() {
        return VaultConfig.phantom();
    }

    static get bcs() {
        return bcs.struct("VaultConfig", {
            payoff_configs: bcs.vector(PayoffConfig.bcs),
            strike_increment: bcs.u64(),
            decay_speed: bcs.u64(),
            initial_price: bcs.u64(),
            final_price: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): VaultConfig {
        return VaultConfig.reified().new({
            payoffConfigs: decodeFromFields(reified.vector(PayoffConfig.reified()), fields.payoff_configs),
            strikeIncrement: decodeFromFields("u64", fields.strike_increment),
            decaySpeed: decodeFromFields("u64", fields.decay_speed),
            initialPrice: decodeFromFields("u64", fields.initial_price),
            finalPrice: decodeFromFields("u64", fields.final_price),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): VaultConfig {
        if (!isVaultConfig(item.type)) {
            throw new Error("not a VaultConfig type");
        }

        return VaultConfig.reified().new({
            payoffConfigs: decodeFromFieldsWithTypes(reified.vector(PayoffConfig.reified()), item.fields.payoff_configs),
            strikeIncrement: decodeFromFieldsWithTypes("u64", item.fields.strike_increment),
            decaySpeed: decodeFromFieldsWithTypes("u64", item.fields.decay_speed),
            initialPrice: decodeFromFieldsWithTypes("u64", item.fields.initial_price),
            finalPrice: decodeFromFieldsWithTypes("u64", item.fields.final_price),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): VaultConfig {
        return VaultConfig.fromFields(VaultConfig.bcs.parse(data));
    }

    toJSONField() {
        return {
            payoffConfigs: fieldToJSON<Vector<PayoffConfig>>(`vector<${PayoffConfig.$typeName}>`, this.payoffConfigs),
            strikeIncrement: this.strikeIncrement.toString(),
            decaySpeed: this.decaySpeed.toString(),
            initialPrice: this.initialPrice.toString(),
            finalPrice: this.finalPrice.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): VaultConfig {
        return VaultConfig.reified().new({
            payoffConfigs: decodeFromJSONField(reified.vector(PayoffConfig.reified()), field.payoffConfigs),
            strikeIncrement: decodeFromJSONField("u64", field.strikeIncrement),
            decaySpeed: decodeFromJSONField("u64", field.decaySpeed),
            initialPrice: decodeFromJSONField("u64", field.initialPrice),
            finalPrice: decodeFromJSONField("u64", field.finalPrice),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): VaultConfig {
        if (json.$typeName !== VaultConfig.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return VaultConfig.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): VaultConfig {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isVaultConfig(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a VaultConfig object`);
        }
        return VaultConfig.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): VaultConfig {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isVaultConfig(data.bcs.type)) {
                throw new Error(`object at is not a VaultConfig object`);
            }

            return VaultConfig.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return VaultConfig.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<VaultConfig> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching VaultConfig object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isVaultConfig(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a VaultConfig object`);
        }

        return VaultConfig.fromSuiObjectData(res.data);
    }
}

/* ============================== WithdrawEvent =============================== */

export function isWithdrawEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::typus_dov_single::WithdrawEvent`;
}

export interface WithdrawEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
    decimal: ToField<"u64">;
    oracleInfo: ToField<OracleInfo>;
    u64Padding: ToField<Vector<"u64">>;
}

export type WithdrawEventReified = Reified<WithdrawEvent, WithdrawEventFields>;

export class WithdrawEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::typus_dov_single::WithdrawEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = WithdrawEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::typus_dov_single::WithdrawEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = WithdrawEvent.$isPhantom;

    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;
    readonly decimal: ToField<"u64">;
    readonly oracleInfo: ToField<OracleInfo>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: WithdrawEventFields) {
        this.$fullTypeName = composeSuiType(WithdrawEvent.$typeName, ...typeArgs) as `${typeof PKG_V1}::typus_dov_single::WithdrawEvent`;
        this.$typeArgs = typeArgs;

        this.signer = fields.signer;
        this.index = fields.index;
        this.token = fields.token;
        this.amount = fields.amount;
        this.decimal = fields.decimal;
        this.oracleInfo = fields.oracleInfo;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): WithdrawEventReified {
        return {
            typeName: WithdrawEvent.$typeName,
            fullTypeName: composeSuiType(WithdrawEvent.$typeName, ...[]) as `${typeof PKG_V1}::typus_dov_single::WithdrawEvent`,
            typeArgs: [] as [],
            isPhantom: WithdrawEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => WithdrawEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => WithdrawEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => WithdrawEvent.fromBcs(data),
            bcs: WithdrawEvent.bcs,
            fromJSONField: (field: any) => WithdrawEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => WithdrawEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => WithdrawEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => WithdrawEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => WithdrawEvent.fetch(client, id),
            new: (fields: WithdrawEventFields) => {
                return new WithdrawEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return WithdrawEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<WithdrawEvent>> {
        return phantom(WithdrawEvent.reified());
    }
    static get p() {
        return WithdrawEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("WithdrawEvent", {
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            token: TypeName.bcs,
            amount: bcs.u64(),
            decimal: bcs.u64(),
            oracle_info: OracleInfo.bcs,
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): WithdrawEvent {
        return WithdrawEvent.reified().new({
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            token: decodeFromFields(TypeName.reified(), fields.token),
            amount: decodeFromFields("u64", fields.amount),
            decimal: decodeFromFields("u64", fields.decimal),
            oracleInfo: decodeFromFields(OracleInfo.reified(), fields.oracle_info),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): WithdrawEvent {
        if (!isWithdrawEvent(item.type)) {
            throw new Error("not a WithdrawEvent type");
        }

        return WithdrawEvent.reified().new({
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token),
            amount: decodeFromFieldsWithTypes("u64", item.fields.amount),
            decimal: decodeFromFieldsWithTypes("u64", item.fields.decimal),
            oracleInfo: decodeFromFieldsWithTypes(OracleInfo.reified(), item.fields.oracle_info),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): WithdrawEvent {
        return WithdrawEvent.fromFields(WithdrawEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            signer: this.signer,
            index: this.index.toString(),
            token: this.token.toJSONField(),
            amount: this.amount.toString(),
            decimal: this.decimal.toString(),
            oracleInfo: this.oracleInfo.toJSONField(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): WithdrawEvent {
        return WithdrawEvent.reified().new({
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            token: decodeFromJSONField(TypeName.reified(), field.token),
            amount: decodeFromJSONField("u64", field.amount),
            decimal: decodeFromJSONField("u64", field.decimal),
            oracleInfo: decodeFromJSONField(OracleInfo.reified(), field.oracleInfo),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): WithdrawEvent {
        if (json.$typeName !== WithdrawEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return WithdrawEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): WithdrawEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isWithdrawEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a WithdrawEvent object`);
        }
        return WithdrawEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): WithdrawEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isWithdrawEvent(data.bcs.type)) {
                throw new Error(`object at is not a WithdrawEvent object`);
            }

            return WithdrawEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return WithdrawEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<WithdrawEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching WithdrawEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isWithdrawEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a WithdrawEvent object`);
        }

        return WithdrawEvent.fromSuiObjectData(res.data);
    }
}

/* ============================== WitnessOtcEvent =============================== */

export function isWitnessOtcEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V31}::typus_dov_single::WitnessOtcEvent`;
}

export interface WitnessOtcEventFields {
    witness: ToField<TypeName>;
    signer: ToField<"address">;
    index: ToField<"u64">;
    round: ToField<"u64">;
    deliveryPrice: ToField<"u64">;
    deliverySize: ToField<"u64">;
    oTokenDecimal: ToField<"u64">;
    bidderBidValue: ToField<"u64">;
    bidderFee: ToField<"u64">;
    bTokenDecimal: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type WitnessOtcEventReified = Reified<WitnessOtcEvent, WitnessOtcEventFields>;

export class WitnessOtcEvent implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V31}::typus_dov_single::WitnessOtcEvent`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = WitnessOtcEvent.$typeName;
    readonly $fullTypeName: `${typeof PKG_V31}::typus_dov_single::WitnessOtcEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom = WitnessOtcEvent.$isPhantom;

    readonly witness: ToField<TypeName>;
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly round: ToField<"u64">;
    readonly deliveryPrice: ToField<"u64">;
    readonly deliverySize: ToField<"u64">;
    readonly oTokenDecimal: ToField<"u64">;
    readonly bidderBidValue: ToField<"u64">;
    readonly bidderFee: ToField<"u64">;
    readonly bTokenDecimal: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: WitnessOtcEventFields) {
        this.$fullTypeName = composeSuiType(
            WitnessOtcEvent.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V31}::typus_dov_single::WitnessOtcEvent`;
        this.$typeArgs = typeArgs;

        this.witness = fields.witness;
        this.signer = fields.signer;
        this.index = fields.index;
        this.round = fields.round;
        this.deliveryPrice = fields.deliveryPrice;
        this.deliverySize = fields.deliverySize;
        this.oTokenDecimal = fields.oTokenDecimal;
        this.bidderBidValue = fields.bidderBidValue;
        this.bidderFee = fields.bidderFee;
        this.bTokenDecimal = fields.bTokenDecimal;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): WitnessOtcEventReified {
        return {
            typeName: WitnessOtcEvent.$typeName,
            fullTypeName: composeSuiType(WitnessOtcEvent.$typeName, ...[]) as `${typeof PKG_V31}::typus_dov_single::WitnessOtcEvent`,
            typeArgs: [] as [],
            isPhantom: WitnessOtcEvent.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => WitnessOtcEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => WitnessOtcEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => WitnessOtcEvent.fromBcs(data),
            bcs: WitnessOtcEvent.bcs,
            fromJSONField: (field: any) => WitnessOtcEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => WitnessOtcEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => WitnessOtcEvent.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => WitnessOtcEvent.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => WitnessOtcEvent.fetch(client, id),
            new: (fields: WitnessOtcEventFields) => {
                return new WitnessOtcEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return WitnessOtcEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<WitnessOtcEvent>> {
        return phantom(WitnessOtcEvent.reified());
    }
    static get p() {
        return WitnessOtcEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("WitnessOtcEvent", {
            witness: TypeName.bcs,
            signer: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            index: bcs.u64(),
            round: bcs.u64(),
            delivery_price: bcs.u64(),
            delivery_size: bcs.u64(),
            o_token_decimal: bcs.u64(),
            bidder_bid_value: bcs.u64(),
            bidder_fee: bcs.u64(),
            b_token_decimal: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): WitnessOtcEvent {
        return WitnessOtcEvent.reified().new({
            witness: decodeFromFields(TypeName.reified(), fields.witness),
            signer: decodeFromFields("address", fields.signer),
            index: decodeFromFields("u64", fields.index),
            round: decodeFromFields("u64", fields.round),
            deliveryPrice: decodeFromFields("u64", fields.delivery_price),
            deliverySize: decodeFromFields("u64", fields.delivery_size),
            oTokenDecimal: decodeFromFields("u64", fields.o_token_decimal),
            bidderBidValue: decodeFromFields("u64", fields.bidder_bid_value),
            bidderFee: decodeFromFields("u64", fields.bidder_fee),
            bTokenDecimal: decodeFromFields("u64", fields.b_token_decimal),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): WitnessOtcEvent {
        if (!isWitnessOtcEvent(item.type)) {
            throw new Error("not a WitnessOtcEvent type");
        }

        return WitnessOtcEvent.reified().new({
            witness: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.witness),
            signer: decodeFromFieldsWithTypes("address", item.fields.signer),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            round: decodeFromFieldsWithTypes("u64", item.fields.round),
            deliveryPrice: decodeFromFieldsWithTypes("u64", item.fields.delivery_price),
            deliverySize: decodeFromFieldsWithTypes("u64", item.fields.delivery_size),
            oTokenDecimal: decodeFromFieldsWithTypes("u64", item.fields.o_token_decimal),
            bidderBidValue: decodeFromFieldsWithTypes("u64", item.fields.bidder_bid_value),
            bidderFee: decodeFromFieldsWithTypes("u64", item.fields.bidder_fee),
            bTokenDecimal: decodeFromFieldsWithTypes("u64", item.fields.b_token_decimal),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): WitnessOtcEvent {
        return WitnessOtcEvent.fromFields(WitnessOtcEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            witness: this.witness.toJSONField(),
            signer: this.signer,
            index: this.index.toString(),
            round: this.round.toString(),
            deliveryPrice: this.deliveryPrice.toString(),
            deliverySize: this.deliverySize.toString(),
            oTokenDecimal: this.oTokenDecimal.toString(),
            bidderBidValue: this.bidderBidValue.toString(),
            bidderFee: this.bidderFee.toString(),
            bTokenDecimal: this.bTokenDecimal.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): WitnessOtcEvent {
        return WitnessOtcEvent.reified().new({
            witness: decodeFromJSONField(TypeName.reified(), field.witness),
            signer: decodeFromJSONField("address", field.signer),
            index: decodeFromJSONField("u64", field.index),
            round: decodeFromJSONField("u64", field.round),
            deliveryPrice: decodeFromJSONField("u64", field.deliveryPrice),
            deliverySize: decodeFromJSONField("u64", field.deliverySize),
            oTokenDecimal: decodeFromJSONField("u64", field.oTokenDecimal),
            bidderBidValue: decodeFromJSONField("u64", field.bidderBidValue),
            bidderFee: decodeFromJSONField("u64", field.bidderFee),
            bTokenDecimal: decodeFromJSONField("u64", field.bTokenDecimal),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): WitnessOtcEvent {
        if (json.$typeName !== WitnessOtcEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return WitnessOtcEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): WitnessOtcEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isWitnessOtcEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a WitnessOtcEvent object`);
        }
        return WitnessOtcEvent.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): WitnessOtcEvent {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isWitnessOtcEvent(data.bcs.type)) {
                throw new Error(`object at is not a WitnessOtcEvent object`);
            }

            return WitnessOtcEvent.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return WitnessOtcEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<WitnessOtcEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching WitnessOtcEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isWitnessOtcEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a WitnessOtcEvent object`);
        }

        return WitnessOtcEvent.fromSuiObjectData(res.data);
    }
}
