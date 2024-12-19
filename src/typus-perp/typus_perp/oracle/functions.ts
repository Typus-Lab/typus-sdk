import { PUBLISHED_AT } from "..";
import { obj, pure } from "../../_framework/util";
import { Transaction, TransactionArgument, TransactionObjectInput } from "@mysten/sui/transactions";

export interface GetPriceArgs {
    state: TransactionObjectInput;
    priceInfoObject: TransactionObjectInput;
    clock: TransactionObjectInput;
}

export function getPrice(tx: Transaction, args: GetPriceArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::oracle::get_price`,
        arguments: [obj(tx, args.state), obj(tx, args.priceInfoObject), obj(tx, args.clock)],
    });
}

export function getEmaPrice(tx: Transaction, priceInfoObject: TransactionObjectInput) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::oracle::get_ema_price`,
        arguments: [obj(tx, priceInfoObject)],
    });
}

export interface GetPriceInfoObjectIdArgs {
    state: TransactionObjectInput;
    priceIdentifierBytes: Array<number | TransactionArgument> | TransactionArgument;
}

export function getPriceInfoObjectId(tx: Transaction, args: GetPriceInfoObjectIdArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::oracle::get_price_info_object_id`,
        arguments: [obj(tx, args.state), pure(tx, args.priceIdentifierBytes, `vector<u8>`)],
    });
}
