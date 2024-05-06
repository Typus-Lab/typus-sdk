import { PUBLISHED_AT } from "..";
import { pure } from "../../_framework/util";
import { TransactionArgument, TransactionBlock } from "@mysten/sui.js/transactions";

export interface AmountToUsdArgs {
    amount: bigint | TransactionArgument;
    amountDecimal: bigint | TransactionArgument;
    price: bigint | TransactionArgument;
    priceDecimal: bigint | TransactionArgument;
}

export function amountToUsd(txb: TransactionBlock, args: AmountToUsdArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::math::amount_to_usd`,
        arguments: [
            pure(txb, args.amount, `u64`),
            pure(txb, args.amountDecimal, `u64`),
            pure(txb, args.price, `u64`),
            pure(txb, args.priceDecimal, `u64`),
        ],
    });
}

export function getUsdDecimal(txb: TransactionBlock) {
    return txb.moveCall({ target: `${PUBLISHED_AT}::math::get_usd_decimal`, arguments: [] });
}

export interface UsdToAmountArgs {
    usd: bigint | TransactionArgument;
    amountDecimal: bigint | TransactionArgument;
    price: bigint | TransactionArgument;
    priceDecimal: bigint | TransactionArgument;
}

export function usdToAmount(txb: TransactionBlock, args: UsdToAmountArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::math::usd_to_amount`,
        arguments: [
            pure(txb, args.usd, `u64`),
            pure(txb, args.amountDecimal, `u64`),
            pure(txb, args.price, `u64`),
            pure(txb, args.priceDecimal, `u64`),
        ],
    });
}
