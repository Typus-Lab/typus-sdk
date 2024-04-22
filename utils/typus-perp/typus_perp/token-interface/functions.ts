import { PUBLISHED_AT } from "..";
import { ObjectArg, obj, pure } from "../../_framework/util";
import { TransactionArgument, TransactionBlock } from "@mysten/sui.js/transactions";

export interface BurnArgs {
    treasuryCap: ObjectArg;
    coin: ObjectArg;
}

export function burn(txb: TransactionBlock, typeArg: string, args: BurnArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::token_interface::burn`,
        typeArguments: [typeArg],
        arguments: [obj(txb, args.treasuryCap), obj(txb, args.coin)],
    });
}

export interface MintArgs {
    treasuryCap: ObjectArg;
    value: bigint | TransactionArgument;
}

export function mint(txb: TransactionBlock, typeArg: string, args: MintArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::token_interface::mint`,
        typeArguments: [typeArg],
        arguments: [obj(txb, args.treasuryCap), pure(txb, args.value, `u64`)],
    });
}
