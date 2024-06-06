import { PUBLISHED_AT } from "..";
import { ObjectArg, obj } from "../../_framework/util";
import { TransactionBlock } from "@mysten/sui.js/transactions";

export function init(txb: TransactionBlock) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::treasury_caps::init`,
        arguments: [],
    });
}

export function getMutTreasuryCap(txb: TransactionBlock, typeArg: string, treasuryCaps: ObjectArg) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::treasury_caps::get_mut_treasury_cap`,
        typeArguments: [typeArg],
        arguments: [obj(txb, treasuryCaps)],
    });
}

export function removeTreasuryCap(txb: TransactionBlock, typeArg: string, treasuryCaps: ObjectArg) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::treasury_caps::remove_treasury_cap`,
        typeArguments: [typeArg],
        arguments: [obj(txb, treasuryCaps)],
    });
}

export interface StoreTreasuryCapArgs {
    treasuryCaps: ObjectArg;
    treasuryCap: ObjectArg;
}

export function storeTreasuryCap(txb: TransactionBlock, typeArg: string, args: StoreTreasuryCapArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::treasury_caps::store_treasury_cap`,
        typeArguments: [typeArg],
        arguments: [obj(txb, args.treasuryCaps), obj(txb, args.treasuryCap)],
    });
}
