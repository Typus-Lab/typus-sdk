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
