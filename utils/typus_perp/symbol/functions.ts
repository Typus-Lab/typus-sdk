import { PUBLISHED_AT } from "..";
import { ObjectArg, obj } from "../../_framework/util";
import { TransactionBlock } from "@mysten/sui.js/transactions";

export function new_(txb: TransactionBlock, typeArgs: [string, string]) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::symbol::new`,
        typeArguments: typeArgs,
        arguments: [],
    });
}

export interface CreateArgs {
    baseToken: ObjectArg;
    quoteToken: ObjectArg;
}

export function create(txb: TransactionBlock, args: CreateArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::symbol::create`,
        arguments: [obj(txb, args.baseToken), obj(txb, args.quoteToken)],
    });
}

export function baseToken(txb: TransactionBlock, self: ObjectArg) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::symbol::base_token`,
        arguments: [obj(txb, self)],
    });
}

export function quoteToken(txb: TransactionBlock, self: ObjectArg) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::symbol::quote_token`,
        arguments: [obj(txb, self)],
    });
}
