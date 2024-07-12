import { TransactionBlock } from "@mysten/sui.js/transactions";
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
export declare function getOtcTx(gasBudget: number, packageId: string, typeArguments: string[], registry: string, index: string, coins: string[], deliveryPrice: string, deliverySize: string, bidderBidValue: string, bidderFeeBalanceValue: string, incentiveBidValue: string, incentiveFeeBalanceValue: string, depositorIncentiveValue: string, usingSponsoredGasCoin?: boolean): Promise<TransactionBlock>;
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
export interface UpdateConfigRequests {
    index: string;
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
        depositIncentiveBpDivisorDecimal?: string;
    };
}
export declare function getUpdateConfigTx(gasBudget: number, packageId: string, registry: string, requests: UpdateConfigRequests[]): Promise<TransactionBlock>;
