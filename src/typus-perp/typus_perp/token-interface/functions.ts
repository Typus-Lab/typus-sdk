import { PUBLISHED_AT } from "..";
import { obj, pure } from "../../_framework/util";
import { Transaction, TransactionArgument, TransactionObjectInput } from "@mysten/sui/transactions";

export interface BurnArgs {
    treasuryCap: TransactionObjectInput;
    coin: TransactionObjectInput;
}

export function burn(tx: Transaction, typeArg: string, args: BurnArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::token_interface::burn`,
        typeArguments: [typeArg],
        arguments: [obj(tx, args.treasuryCap), obj(tx, args.coin)],
    });
}

export interface MintArgs {
    treasuryCap: TransactionObjectInput;
    value: bigint | TransactionArgument;
}

export function mint(tx: Transaction, typeArg: string, args: MintArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::token_interface::mint`,
        typeArguments: [typeArg],
        arguments: [obj(tx, args.treasuryCap), pure(tx, args.value, `u64`)],
    });
}
