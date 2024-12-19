import { PUBLISHED_AT } from "..";
import { pure } from "../../_framework/util";
import { Transaction, TransactionArgument } from "@mysten/sui/transactions";

export function multiplier(tx: Transaction, decimal: bigint | TransactionArgument) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::math::multiplier`,
        arguments: [pure(tx, decimal, `u64`)],
    });
}

export interface AmountToUsdArgs {
    amount: bigint | TransactionArgument;
    amountDecimal: bigint | TransactionArgument;
    price: bigint | TransactionArgument;
    priceDecimal: bigint | TransactionArgument;
}

export function amountToUsd(tx: Transaction, args: AmountToUsdArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::math::amount_to_usd`,
        arguments: [
            pure(tx, args.amount, `u64`),
            pure(tx, args.amountDecimal, `u64`),
            pure(tx, args.price, `u64`),
            pure(tx, args.priceDecimal, `u64`),
        ],
    });
}

export function getFundingRateDecimal(tx: Transaction) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::math::get_funding_rate_decimal`,
        arguments: [],
    });
}

export function getUsdDecimal(tx: Transaction) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::math::get_usd_decimal`,
        arguments: [],
    });
}

export interface UsdToAmountArgs {
    usd: bigint | TransactionArgument;
    amountDecimal: bigint | TransactionArgument;
    price: bigint | TransactionArgument;
    priceDecimal: bigint | TransactionArgument;
}

export function usdToAmount(tx: Transaction, args: UsdToAmountArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::math::usd_to_amount`,
        arguments: [
            pure(tx, args.usd, `u64`),
            pure(tx, args.amountDecimal, `u64`),
            pure(tx, args.price, `u64`),
            pure(tx, args.priceDecimal, `u64`),
        ],
    });
}
