import { PUBLISHED_AT } from "..";
import { ObjectArg, obj, pure } from "../../_framework/util";
import { TransactionArgument, TransactionBlock } from "@mysten/sui.js/transactions";

export interface BurnArgs {
    treasuryCap: ObjectArg;
    coin: ObjectArg;
}

export function burn(txb: TransactionBlock, typeArg: string, args: BurnArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::tlp::burn`,
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
        target: `${PUBLISHED_AT}::tlp::mint`,
        typeArguments: [typeArg],
        arguments: [obj(txb, args.treasuryCap), pure(txb, args.value, `u64`)],
    });
}

export function totalSupply(txb: TransactionBlock, treasuryCap: ObjectArg) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::tlp::total_supply`,
        arguments: [obj(txb, treasuryCap)],
    });
}

export function init(txb: TransactionBlock, witness: ObjectArg) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::tlp::init`,
        arguments: [obj(txb, witness)],
    });
}

export interface TransferTreasuryCapArgs {
    version: ObjectArg;
    lpRegistry: ObjectArg;
    treasuryCaps: ObjectArg;
}

export function transferTreasuryCap(txb: TransactionBlock, args: TransferTreasuryCapArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::tlp::transfer_treasury_cap`,
        arguments: [obj(txb, args.version), obj(txb, args.lpRegistry), obj(txb, args.treasuryCaps)],
    });
}
