import { TransactionBlock } from "@mysten/sui.js";
import { CLOCK } from "../../constants";

/**
    public(friend) entry fun otc<D_TOKEN, B_TOKEN>(
        registry: &mut Registry,
        index: u64,
        coins: vector<Coin<B_TOKEN>>,
        delivery_price: u64,
        delivery_size: u64,
        bidder_bid_value: u64,
        bidder_fee_balance_value: u64,
        incentive_bid_value: u64,
        incentive_fee_balance_value: u64,
        depositor_incentive_value: u64,
        clock: &Clock,
        ctx: &mut TxContext,
    )
*/
export async function getOtcTx(
    gasBudget: number,
    packageId: string,
    typeArguments: string[],
    registry: string,
    index: string,
    coins: string[],
    deliveryPrice: string,
    deliverySize: string,
    bidderBidValue: string,
    bidderFeeBalanceValue: string,
    incentiveBidValue: string,
    incentiveFeeBalanceValue: string,
    depositorIncentiveValue: string,
    usingSponsoredGasCoin = false
) {
    let tx = new TransactionBlock();
    if (
        !usingSponsoredGasCoin &&
        (typeArguments[0] == "0x2::sui::SUI" ||
            typeArguments[0] == "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI")
    ) {
        let amount = BigInt(bidderBidValue) + BigInt(bidderFeeBalanceValue);
        let [coin] = tx.splitCoins(tx.gas, [tx.pure(amount.toString())]);
        tx.moveCall({
            target: `${packageId}::tds_authorized_entry::otc`,
            typeArguments,
            arguments: [
                tx.object(registry),
                tx.pure(index),
                tx.makeMoveVec({ objects: [coin] }),
                tx.pure(deliveryPrice),
                tx.pure(deliverySize),
                tx.pure(bidderBidValue),
                tx.pure(bidderFeeBalanceValue),
                tx.pure(incentiveBidValue),
                tx.pure(incentiveFeeBalanceValue),
                tx.pure(depositorIncentiveValue),
                tx.pure(CLOCK),
            ],
        });
    } else {
        tx.moveCall({
            target: `${packageId}::tds_authorized_entry::otc`,
            typeArguments,
            arguments: [
                tx.object(registry),
                tx.pure(index),
                tx.makeMoveVec({ objects: coins.map((id) => tx.object(id)) }),
                tx.pure(deliveryPrice),
                tx.pure(deliverySize),
                tx.pure(bidderBidValue),
                tx.pure(bidderFeeBalanceValue),
                tx.pure(incentiveBidValue),
                tx.pure(incentiveFeeBalanceValue),
                tx.pure(depositorIncentiveValue),
                tx.pure(CLOCK),
            ],
        });
    }
    tx.setGasBudget(gasBudget);

    return tx;
}

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
    gasBudget: number,
    packageId: string,
    registry: string,
    index: string,
    config: {
        oracleId?: string;
        depositLotSize?: string;
        bidLotSize?: string;
        minDepositSize?: string;
        minBidSize?: string;
        maxDepositEntry?: string;
        maxBidEntry?: string;
        depositFeeBp?: string;
        depositFeeShareBp?: string;
        depositSharedFeePool?: string;
        bidFeeBp?: string;
        depositIncentiveBp?: string;
        bidIncentiveBp?: string;
        auctionDelayTsMs?: string;
        auctionDurationTsMs?: string;
        recoupDelayTsMs?: string;
        capacity?: string;
        leverage?: string;
        riskLevel?: string;
    }
) {
    let tx = new TransactionBlock();
    tx.moveCall({
        target: `${packageId}::tds_authorized_entry::update_config`,
        typeArguments: [],
        arguments: [
            tx.object(registry),
            tx.pure(index),
            tx.pure(config.oracleId ? [config.oracleId] : []),
            tx.pure(config.depositLotSize ? [config.depositLotSize] : []),
            tx.pure(config.bidLotSize ? [config.bidLotSize] : []),
            tx.pure(config.minDepositSize ? [config.minDepositSize] : []),
            tx.pure(config.minBidSize ? [config.minBidSize] : []),
            tx.pure(config.maxDepositEntry ? [config.maxDepositEntry] : []),
            tx.pure(config.maxBidEntry ? [config.maxBidEntry] : []),
            tx.pure(config.depositFeeBp ? [config.depositFeeBp] : []),
            tx.pure(config.depositFeeShareBp ? [config.depositFeeShareBp] : []),
            tx.pure(config.depositSharedFeePool ? [config.depositSharedFeePool] : []),
            tx.pure(config.bidFeeBp ? [config.bidFeeBp] : []),
            tx.pure(config.depositIncentiveBp ? [config.depositIncentiveBp] : []),
            tx.pure(config.bidIncentiveBp ? [config.bidIncentiveBp] : []),
            tx.pure(config.auctionDelayTsMs ? [config.auctionDelayTsMs] : []),
            tx.pure(config.auctionDurationTsMs ? [config.auctionDurationTsMs] : []),
            tx.pure(config.recoupDelayTsMs ? [config.recoupDelayTsMs] : []),
            tx.pure(config.capacity ? [config.capacity] : []),
            tx.pure(config.leverage ? [config.leverage] : []),
            tx.pure(config.riskLevel ? [config.riskLevel] : []),
        ],
    });
    tx.setGasBudget(gasBudget);

    return tx;
}
