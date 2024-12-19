import { PUBLISHED_AT } from "..";
import { obj, pure } from "../../_framework/util";
import { Transaction, TransactionArgument, TransactionObjectInput } from "@mysten/sui/transactions";

export interface BurnArgs {
    treasuryCap: TransactionObjectInput;
    coin: TransactionObjectInput;
}

export function burn(tx: Transaction, typeArg: string, args: BurnArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::tlp::burn`,
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
        target: `${PUBLISHED_AT}::tlp::mint`,
        typeArguments: [typeArg],
        arguments: [obj(tx, args.treasuryCap), pure(tx, args.value, `u64`)],
    });
}

export function totalSupply(tx: Transaction, treasuryCap: TransactionObjectInput) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::tlp::total_supply`,
        arguments: [obj(tx, treasuryCap)],
    });
}

export function init(tx: Transaction, witness: TransactionObjectInput) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::tlp::init`,
        arguments: [obj(tx, witness)],
    });
}

export interface TransferTreasuryCapArgs {
    version: TransactionObjectInput;
    lpRegistry: TransactionObjectInput;
    treasuryCaps: TransactionObjectInput;
}

export function transferTreasuryCap(tx: Transaction, args: TransferTreasuryCapArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::tlp::transfer_treasury_cap`,
        arguments: [obj(tx, args.version), obj(tx, args.lpRegistry), obj(tx, args.treasuryCaps)],
    });
}
