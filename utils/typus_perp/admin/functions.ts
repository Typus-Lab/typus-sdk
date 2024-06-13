import { PUBLISHED_AT } from "..";
import { ObjectArg, obj, pure } from "../../_framework/util";
import { TransactionArgument, TransactionBlock } from "@mysten/sui.js/transactions";

export function upgrade(txb: TransactionBlock, version: ObjectArg) {
    return txb.moveCall({ target: `${PUBLISHED_AT}::admin::upgrade`, arguments: [obj(txb, version)] });
}

export function init(txb: TransactionBlock) {
    return txb.moveCall({ target: `${PUBLISHED_AT}::admin::init`, arguments: [] });
}

export function verify(txb: TransactionBlock, version: ObjectArg) {
    return txb.moveCall({ target: `${PUBLISHED_AT}::admin::verify`, arguments: [obj(txb, version)] });
}

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

export interface ChargeFeeArgs {
    version: ObjectArg;
    balance: ObjectArg;
}

export function chargeFee(txb: TransactionBlock, typeArg: string, args: ChargeFeeArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::admin::charge_fee`,
        typeArguments: [typeArg],
        arguments: [obj(txb, args.version), obj(txb, args.balance)],
    });
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

export function versionCheck(txb: TransactionBlock, version: ObjectArg) {
    return txb.moveCall({ target: `${PUBLISHED_AT}::admin::version_check`, arguments: [obj(txb, version)] });
}

export interface AddTailsExpAmountArgs {
    version: ObjectArg;
    typusEcosystemVersion: ObjectArg;
    typusUserRegistry: ObjectArg;
    user: string | TransactionArgument;
    amount: bigint | TransactionArgument;
}

export function addTailsExpAmount(txb: TransactionBlock, args: AddTailsExpAmountArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::admin::add_tails_exp_amount`,
        arguments: [
            obj(txb, args.version),
            obj(txb, args.typusEcosystemVersion),
            obj(txb, args.typusUserRegistry),
            pure(txb, args.user, `address`),
            pure(txb, args.amount, `u64`),
        ],
    });
}

export interface AddExpLeaderboardArgs {
    version: ObjectArg;
    typusEcosystemVersion: ObjectArg;
    typusLeaderboardRegistry: ObjectArg;
    user: string | TransactionArgument;
    score: bigint | TransactionArgument;
    clock: ObjectArg;
}

export function addExpLeaderboard(txb: TransactionBlock, args: AddExpLeaderboardArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::admin::add_exp_leaderboard`,
        arguments: [
            obj(txb, args.version),
            obj(txb, args.typusEcosystemVersion),
            obj(txb, args.typusLeaderboardRegistry),
            pure(txb, args.user, `address`),
            pure(txb, args.score, `u64`),
            obj(txb, args.clock),
        ],
    });
}

export interface ChargeLiquidatorFeeArgs {
    version: ObjectArg;
    balance: ObjectArg;
}

export function chargeLiquidatorFee(txb: TransactionBlock, typeArg: string, args: ChargeLiquidatorFeeArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::admin::charge_liquidator_fee`,
        typeArguments: [typeArg],
        arguments: [obj(txb, args.version), obj(txb, args.balance)],
    });
}

export interface InstallEcosystemManagerCapArgs {
    version: ObjectArg;
    managerCap: ObjectArg;
}

export function installEcosystemManagerCap(txb: TransactionBlock, args: InstallEcosystemManagerCapArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::admin::install_ecosystem_manager_cap`,
        arguments: [obj(txb, args.version), obj(txb, args.managerCap)],
    });
}

export interface InstallEcosystemManagerCapEntryArgs {
    version: ObjectArg;
    typusEcosystemVersion: ObjectArg;
}

export function installEcosystemManagerCapEntry(txb: TransactionBlock, args: InstallEcosystemManagerCapEntryArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::admin::install_ecosystem_manager_cap_entry`,
        arguments: [obj(txb, args.version), obj(txb, args.typusEcosystemVersion)],
    });
}

export function sendLiquidatorFee(txb: TransactionBlock, typeArg: string, version: ObjectArg) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::admin::send_liquidator_fee`,
        typeArguments: [typeArg],
        arguments: [obj(txb, version)],
    });
}
