import { PUBLISHED_AT } from "..";
import { ObjectArg, obj, pure } from "../../_framework/util";
import { TransactionArgument, TransactionBlock } from "@mysten/sui.js/transactions";

export interface GetPriceArgs {
    state: ObjectArg;
    priceInfoObject: ObjectArg;
    clock: ObjectArg;
}

export function getPrice(txb: TransactionBlock, args: GetPriceArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::oracle::get_price`,
        arguments: [obj(txb, args.state), obj(txb, args.priceInfoObject), obj(txb, args.clock)],
    });
}

export function getEmaPrice(txb: TransactionBlock, priceInfoObject: ObjectArg) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::oracle::get_ema_price`,
        arguments: [obj(txb, priceInfoObject)],
    });
}

export interface GetPriceInfoObjectIdArgs {
    state: ObjectArg;
    priceIdentifierBytes: Array<number | TransactionArgument> | TransactionArgument;
}

export function getPriceInfoObjectId(txb: TransactionBlock, args: GetPriceInfoObjectIdArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::oracle::get_price_info_object_id`,
        arguments: [obj(txb, args.state), pure(txb, args.priceIdentifierBytes, `vector<u8>`)],
    });
}
