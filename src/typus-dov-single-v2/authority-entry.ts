import { TransactionBlock } from "@mysten/sui.js/transactions";
import { TypusConfig } from "src/utils";

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
    tx: TransactionBlock,
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
            depositIncentiveBpDivisorDecimal?: string;
        };
    }[]
) {
    requests.forEach((request) => {
        tx.moveCall({
            target: `${config.package.dovSingle}::tds_authorized_entry::update_config`,
            typeArguments: [],
            arguments: [
                tx.object(config.registry.dov.dovSingle),
                tx.pure(request.index),
                tx.pure(request.input.oracleId ? [request.input.oracleId] : []),
                tx.pure(request.input.depositLotSize ? [request.input.depositLotSize] : []),
                tx.pure(request.input.bidLotSize ? [request.input.bidLotSize] : []),
                tx.pure(request.input.minDepositSize ? [request.input.minDepositSize] : []),
                tx.pure(request.input.minBidSize ? [request.input.minBidSize] : []),
                tx.pure(request.input.maxDepositEntry ? [request.input.maxDepositEntry] : []),
                tx.pure(request.input.maxBidEntry ? [request.input.maxBidEntry] : []),
                tx.pure(request.input.depositFeeBp ? [request.input.depositFeeBp] : []),
                tx.pure(request.input.depositFeeShareBp ? [request.input.depositFeeShareBp] : []),
                tx.pure(request.input.depositSharedFeePool ? [request.input.depositSharedFeePool] : []),
                tx.pure(request.input.bidFeeBp ? [request.input.bidFeeBp] : []),
                tx.pure(request.input.depositIncentiveBp ? [request.input.depositIncentiveBp] : []),
                tx.pure(request.input.bidIncentiveBp ? [request.input.bidIncentiveBp] : []),
                tx.pure(request.input.auctionDelayTsMs ? [request.input.auctionDelayTsMs] : []),
                tx.pure(request.input.auctionDurationTsMs ? [request.input.auctionDurationTsMs] : []),
                tx.pure(request.input.recoupDelayTsMs ? [request.input.recoupDelayTsMs] : []),
                tx.pure(request.input.capacity ? [request.input.capacity] : []),
                tx.pure(request.input.leverage ? [request.input.leverage] : []),
                tx.pure(request.input.riskLevel ? [request.input.riskLevel] : []),
                tx.pure(request.input.depositIncentiveBpDivisorDecimal ? [request.input.depositIncentiveBpDivisorDecimal] : []),
            ],
        });
    });

    return tx;
}
