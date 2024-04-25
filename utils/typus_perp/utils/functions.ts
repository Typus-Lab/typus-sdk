import { PUBLISHED_AT } from "..";
import { ObjectArg, obj, pure, vector } from "../../_framework/util";
import { TransactionArgument, TransactionBlock } from "@mysten/sui.js/transactions";

export interface DelegateExtractBalanceArgs {
    user: string | TransactionArgument;
    coins: Array<ObjectArg> | TransactionArgument;
    amount: bigint | TransactionArgument;
}

export function delegateExtractBalance(txb: TransactionBlock, typeArg: string, args: DelegateExtractBalanceArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::utils::delegate_extract_balance`,
        typeArguments: [typeArg],
        arguments: [pure(txb, args.user, `address`), vector(txb, `0x2::coin::Coin<${typeArg}>`, args.coins), pure(txb, args.amount, `u64`)],
    });
}

export interface ExtractBalanceArgs {
    coins: Array<ObjectArg> | TransactionArgument;
    amount: bigint | TransactionArgument;
}

export function extractBalance(txb: TransactionBlock, typeArg: string, args: ExtractBalanceArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::utils::extract_balance`,
        typeArguments: [typeArg],
        arguments: [vector(txb, `0x2::coin::Coin<${typeArg}>`, args.coins), pure(txb, args.amount, `u64`)],
    });
}

export function multiplier(txb: TransactionBlock, decimal: bigint | TransactionArgument) {
    return txb.moveCall({ target: `${PUBLISHED_AT}::utils::multiplier`, arguments: [pure(txb, decimal, `u64`)] });
}

export interface PublicExtractBalanceArgs {
    coins: Array<ObjectArg> | TransactionArgument;
    amount: bigint | TransactionArgument;
}

export function publicExtractBalance(txb: TransactionBlock, typeArg: string, args: PublicExtractBalanceArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::utils::public_extract_balance`,
        typeArguments: [typeArg],
        arguments: [vector(txb, `0x2::coin::Coin<${typeArg}>`, args.coins), pure(txb, args.amount, `u64`)],
    });
}

export interface TransferBalanceArgs {
    balance: ObjectArg;
    user: string | TransactionArgument;
}

export function transferBalance(txb: TransactionBlock, typeArg: string, args: TransferBalanceArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::utils::transfer_balance`,
        typeArguments: [typeArg],
        arguments: [obj(txb, args.balance), pure(txb, args.user, `address`)],
    });
}
