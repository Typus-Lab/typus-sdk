import { PUBLISHED_AT } from "..";
import { obj } from "../../_framework/util";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

export function new_(tx: Transaction, typeArgs: [string, string]) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::symbol::new`,
        typeArguments: typeArgs,
        arguments: [],
    });
}

export interface CreateArgs {
    baseToken: TransactionObjectInput;
    quoteToken: TransactionObjectInput;
}

export function create(tx: Transaction, args: CreateArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::symbol::create`,
        arguments: [obj(tx, args.baseToken), obj(tx, args.quoteToken)],
    });
}

export function baseToken(tx: Transaction, self: TransactionObjectInput) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::symbol::base_token`,
        arguments: [obj(tx, self)],
    });
}

export function quoteToken(tx: Transaction, self: TransactionObjectInput) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::symbol::quote_token`,
        arguments: [obj(tx, self)],
    });
}
