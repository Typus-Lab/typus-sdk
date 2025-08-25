import { Transaction } from "@mysten/sui/transactions";
import { CLOCK } from "src/constants";
import { splitCoin, TypusConfig } from "src/utils";

/**
    public(friend) entry fun update_config(
        registry: &mut Registry,
        index: u64,
        oracle_id: Option<address>,
        deposit_lot_size: Option<u64>,
        bid_lot_size: Option<u64>,
        min_deposit_size: Option<u64>,
        min_bid_size: Option<u64>,
        max_deposit_entry: Option<u64>,
        max_bid_entry: Option<u64>,
        deposit_fee_bp: Option<u64>,
        deposit_fee_share_bp: Option<u64>,
        deposit_shared_fee_pool: Option<Option<vector<u8>>>,
        bid_fee_bp: Option<u64>,
        deposit_incentive_bp: Option<u64>,
        bid_incentive_bp: Option<u64>,
        auction_delay_ts_ms: Option<u64>,
        auction_duration_ts_ms: Option<u64>,
        recoup_delay_ts_ms: Option<u64>,
        capacity: Option<u64>,
        leverage: Option<u64>,
        risk_level: Option<u64>,
        ctx: &TxContext,
    ) {
 */
export async function getUpdateConfigTx(
    config: TypusConfig,
    tx: Transaction,
    requests: {
        index: string;
        input: {
            oracleId?: string;
            depositLotSize?: string;
            bidLotSize?: string;
            minDepositSize?: string;
            minBidSize?: string;
            maxDepositEntry?: string;
            maxBidEntry?: string;
            depositFeeBp?: string;
            depositFeeShareBp?: string;
            depositSharedFeePool?: number[];
            bidFeeBp?: string;
            depositIncentiveBp?: string;
            bidIncentiveBp?: string;
            auctionDelayTsMs?: string;
            auctionDurationTsMs?: string;
            recoupDelayTsMs?: string;
            capacity?: string;
            leverage?: string;
            riskLevel?: string;
            depositIncentiveBpDivisorDecimal?: string;
            incentiveFeeBp?: string;
        };
    }[]
) {
    requests.forEach((request) => {
        tx.moveCall({
            target: `${config.package.dovSingle}::tds_authorized_entry::update_config`,
            typeArguments: [],
            arguments: [
                tx.object(config.registry.dov.dovSingle),
                tx.pure.u64(request.index),
                tx.pure.option("address", request.input.oracleId),
                tx.pure.option("u64", request.input.depositLotSize),
                tx.pure.option("u64", request.input.bidLotSize),
                tx.pure.option("u64", request.input.minDepositSize),
                tx.pure.option("u64", request.input.minBidSize),
                tx.pure.option("u64", request.input.maxDepositEntry),
                tx.pure.option("u64", request.input.maxBidEntry),
                tx.pure.option("u64", request.input.depositFeeBp),
                tx.pure.option("u64", request.input.depositFeeShareBp),
                tx.pure.option("option<vector<u8>>", request.input.depositSharedFeePool), // ???
                tx.pure.option("u64", request.input.bidFeeBp),
                tx.pure.option("u64", request.input.depositIncentiveBp),
                tx.pure.option("u64", request.input.bidIncentiveBp),
                tx.pure.option("u64", request.input.auctionDelayTsMs),
                tx.pure.option("u64", request.input.auctionDurationTsMs),
                tx.pure.option("u64", request.input.recoupDelayTsMs),
                tx.pure.option("u64", request.input.capacity),
                tx.pure.option("u64", request.input.leverage),
                tx.pure.option("u64", request.input.riskLevel),
                tx.pure.option("u64", request.input.depositIncentiveBpDivisorDecimal),
                tx.pure.option("u64", request.input.incentiveFeeBp),
            ],
        });
    });

    return tx;
}

/**
    public entry fun deposit_collateral_navi<TOKEN>(
        registry: &mut Registry,
        index: u64,
        storage: &mut lending_core::storage::Storage,
        pool: &mut lending_core::pool::Pool<TOKEN>,
        asset: u8,
        incentive_v2: &mut lending_core::incentive_v2::Incentive,
        incentive_v3: &mut lending_core::incentive_v3::Incentive,
        coin: Coin<TOKEN>,
        clock: &Clock,
        ctx: &mut TxContext,
    ) {
 */
export function depositCollateralNavi(
    config: TypusConfig,
    tx: Transaction,
    input: {
        typeArguments: string[];
        index: string;
        raiseCoins: string[];
        raiseAmount: string;
        naviStorage: string;
        naviPool: string;
        naviAsset: number;
        naviIncentiveV2: string;
        naviIncentiveV3: string;
    }
) {
    let coin = splitCoin(tx, input.typeArguments[0], input.raiseCoins, input.raiseAmount);
    tx.moveCall({
        target: `${config.package.dovSingle}::tds_authorized_entry::deposit_collateral_navi`,
        typeArguments: input.typeArguments,
        arguments: [
            tx.object(config.registry.dov.dovSingle),
            tx.pure.u64(input.index),
            tx.object(input.naviStorage),
            tx.object(input.naviPool),
            tx.pure.u8(input.naviAsset),
            tx.object(input.naviIncentiveV2),
            tx.object(input.naviIncentiveV3),
            tx.object(coin),
            tx.object(CLOCK),
        ],
    });
}

/**
    public entry fun withdraw_collateral_navi<TOKEN>(
        registry: &mut Registry,
        index: u64,
        oracle_config: &mut OracleConfig,
        price_oracle: &mut PriceOracle,
        supra_oracle_holder: &SupraOracle::SupraSValueFeed::OracleHolder,
        pyth_price_info: &pyth::price_info::PriceInfoObject,
        feed_address: address,
        storage: &mut lending_core::storage::Storage,
        pool: &mut lending_core::pool::Pool<TOKEN>,
        asset: u8,
        incentive_v2: &mut lending_core::incentive_v2::Incentive,
        incentive_v3: &mut lending_core::incentive_v3::Incentive,
        amount: Option<u64>,
        clock: &Clock,
        ctx: &mut TxContext,
    ) {
 */
export function withdrawCollateralNavi(
    config: TypusConfig,
    tx: Transaction,
    input: {
        typeArguments: string[];
        index: string;
        naviOracleConfig: string;
        naviPriceOracle: string;
        naviSupraOracleHolder: string;
        naviPythPriceInfo: string;
        naviFeedAddress: string;
        naviStorage: string;
        naviPool: string;
        naviAsset: number;
        naviIncentiveV2: string;
        naviIncentiveV3: string;
        amount: string | undefined;
    }
) {
    tx.moveCall({
        target: `${config.package.dovSingle}::tds_authorized_entry::withdraw_collateral_navi`,
        typeArguments: input.typeArguments,
        arguments: [
            tx.object(config.registry.dov.dovSingle),
            tx.pure.u64(input.index),
            tx.object(input.naviOracleConfig),
            tx.object(input.naviPriceOracle),
            tx.object(input.naviSupraOracleHolder),
            tx.object(input.naviPythPriceInfo),
            tx.pure.address(input.naviFeedAddress),
            tx.object(input.naviStorage),
            tx.object(input.naviPool),
            tx.pure.u8(input.naviAsset),
            tx.object(input.naviIncentiveV2),
            tx.object(input.naviIncentiveV3),
            tx.pure.option("u64", input.amount),
            tx.object(CLOCK),
        ],
    });
}

/**
    public entry fun borrow_navi<TOKEN>(
        registry: &mut Registry,
        index: u64,
        deposit_index: u64,
        oracle_config: &mut OracleConfig,
        price_oracle: &mut PriceOracle,
        supra_oracle_holder: &SupraOracle::SupraSValueFeed::OracleHolder,
        pyth_price_info: &pyth::price_info::PriceInfoObject,
        feed_address: address,
        storage: &mut lending_core::storage::Storage,
        pool: &mut lending_core::pool::Pool<TOKEN>,
        asset: u8,
        incentive_v2: &mut lending_core::incentive_v2::Incentive,
        incentive_v3: &mut lending_core::incentive_v3::Incentive,
        amount: u64,
        clock: &Clock,
        ctx: &mut TxContext,
    ) {
 */
export function borrowNavi(
    config: TypusConfig,
    tx: Transaction,
    input: {
        typeArguments: string[];
        index: string;
        deposit_index: string;
        naviOracleConfig: string;
        naviPriceOracle: string;
        naviSupraOracleHolder: string;
        naviPythPriceInfo: string;
        naviFeedAddress: string;
        naviStorage: string;
        naviPool: string;
        naviAsset: number;
        naviIncentiveV2: string;
        naviIncentiveV3: string;
        amount: string;
    }
) {
    tx.moveCall({
        target: `${config.package.dovSingle}::tds_authorized_entry::borrow_navi`,
        typeArguments: input.typeArguments,
        arguments: [
            tx.object(config.registry.dov.dovSingle),
            tx.pure.u64(input.index),
            tx.pure.u64(input.deposit_index),
            tx.object(input.naviOracleConfig),
            tx.object(input.naviPriceOracle),
            tx.object(input.naviSupraOracleHolder),
            tx.object(input.naviPythPriceInfo),
            tx.pure.address(input.naviFeedAddress),
            tx.object(input.naviStorage),
            tx.object(input.naviPool),
            tx.pure.u8(input.naviAsset),
            tx.object(input.naviIncentiveV2),
            tx.object(input.naviIncentiveV3),
            tx.pure.u64(input.amount),
            tx.object(CLOCK),
        ],
    });
}
