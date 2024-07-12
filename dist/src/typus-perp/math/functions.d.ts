import { TransactionArgument, TransactionBlock } from "@mysten/sui.js/transactions";
export declare function multiplier(txb: TransactionBlock, decimal: bigint | TransactionArgument): import("@mysten/sui.js/transactions").TransactionResult;
export interface AmountToUsdArgs {
    amount: bigint | TransactionArgument;
    amountDecimal: bigint | TransactionArgument;
    price: bigint | TransactionArgument;
    priceDecimal: bigint | TransactionArgument;
}
export declare function amountToUsd(txb: TransactionBlock, args: AmountToUsdArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function getFundingRateDecimal(txb: TransactionBlock): import("@mysten/sui.js/transactions").TransactionResult;
export declare function getUsdDecimal(txb: TransactionBlock): import("@mysten/sui.js/transactions").TransactionResult;
export interface UsdToAmountArgs {
    usd: bigint | TransactionArgument;
    amountDecimal: bigint | TransactionArgument;
    price: bigint | TransactionArgument;
    priceDecimal: bigint | TransactionArgument;
}
export declare function usdToAmount(txb: TransactionBlock, args: UsdToAmountArgs): import("@mysten/sui.js/transactions").TransactionResult;
