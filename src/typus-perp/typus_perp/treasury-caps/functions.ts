import { PUBLISHED_AT } from "..";
import { obj } from "../../_framework/util";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

export function init(tx: Transaction) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::treasury_caps::init`,
        arguments: [],
    });
}

export function getMutTreasuryCap(tx: Transaction, typeArg: string, treasuryCaps: TransactionObjectInput) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::treasury_caps::get_mut_treasury_cap`,
        typeArguments: [typeArg],
        arguments: [obj(tx, treasuryCaps)],
    });
}

export function removeTreasuryCap(tx: Transaction, typeArg: string, treasuryCaps: TransactionObjectInput) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::treasury_caps::remove_treasury_cap`,
        typeArguments: [typeArg],
        arguments: [obj(tx, treasuryCaps)],
    });
}

export interface StoreTreasuryCapArgs {
    treasuryCaps: TransactionObjectInput;
    treasuryCap: TransactionObjectInput;
}

export function storeTreasuryCap(tx: Transaction, typeArg: string, args: StoreTreasuryCapArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::treasury_caps::store_treasury_cap`,
        typeArguments: [typeArg],
        arguments: [obj(tx, args.treasuryCaps), obj(tx, args.treasuryCap)],
    });
}
