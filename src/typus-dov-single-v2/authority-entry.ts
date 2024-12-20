import { Transaction } from "@mysten/sui/transactions";
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
            ],
        });
    });

    return tx;
}
