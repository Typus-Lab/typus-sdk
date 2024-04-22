import { PUBLISHED_AT } from "..";
import { ObjectArg, obj, pure } from "../../_framework/util";
import { TransactionArgument, TransactionBlock } from "@mysten/sui.js/transactions";

export interface AddAuthorizedUserArgs {
    version: ObjectArg;
    userAddress: string | TransactionArgument;
}

export function addAuthorizedUser(txb: TransactionBlock, args: AddAuthorizedUserArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::admin::add_authorized_user`,
        arguments: [obj(txb, args.version), pure(txb, args.userAddress, `address`)],
    });
}

export function init(txb: TransactionBlock) {
    return txb.moveCall({ target: `${PUBLISHED_AT}::admin::init`, arguments: [] });
}

export function issueManagerCap(txb: TransactionBlock, version: ObjectArg) {
    return txb.moveCall({ target: `${PUBLISHED_AT}::admin::issue_manager_cap`, arguments: [obj(txb, version)] });
}

export interface RemoveAuthorizedUserArgs {
    version: ObjectArg;
    userAddress: string | TransactionArgument;
}

export function removeAuthorizedUser(txb: TransactionBlock, args: RemoveAuthorizedUserArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::admin::remove_authorized_user`,
        arguments: [obj(txb, args.version), pure(txb, args.userAddress, `address`)],
    });
}

export function sendFee(txb: TransactionBlock, typeArg: string, version: ObjectArg) {
    return txb.moveCall({ target: `${PUBLISHED_AT}::admin::send_fee`, typeArguments: [typeArg], arguments: [obj(txb, version)] });
}

export function upgrade(txb: TransactionBlock, version: ObjectArg) {
    return txb.moveCall({ target: `${PUBLISHED_AT}::admin::upgrade`, arguments: [obj(txb, version)] });
}

export function verify(txb: TransactionBlock, version: ObjectArg) {
    return txb.moveCall({ target: `${PUBLISHED_AT}::admin::verify`, arguments: [obj(txb, version)] });
}

export function versionCheck(txb: TransactionBlock, version: ObjectArg) {
    return txb.moveCall({ target: `${PUBLISHED_AT}::admin::version_check`, arguments: [obj(txb, version)] });
}
