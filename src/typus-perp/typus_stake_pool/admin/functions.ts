import { PUBLISHED_AT } from "..";
import { obj, pure } from "../../_framework/util";
import { Transaction, TransactionArgument, TransactionObjectInput } from "@mysten/sui/transactions";

export function upgrade(tx: Transaction, version: TransactionObjectInput) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::admin::upgrade`,
        arguments: [obj(tx, version)],
    });
}

export function init(tx: Transaction) {
    return tx.moveCall({ target: `${PUBLISHED_AT}::admin::init`, arguments: [] });
}

export function verify(tx: Transaction, version: TransactionObjectInput) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::admin::verify`,
        arguments: [obj(tx, version)],
    });
}

export interface AddAuthorizedUserArgs {
    version: TransactionObjectInput;
    userAddress: string | TransactionArgument;
}

export function addAuthorizedUser(tx: Transaction, args: AddAuthorizedUserArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::admin::add_authorized_user`,
        arguments: [obj(tx, args.version), pure(tx, args.userAddress, `address`)],
    });
}

export interface ChargeFeeArgs {
    version: TransactionObjectInput;
    balance: TransactionObjectInput;
}

export function chargeFee(tx: Transaction, typeArg: string, args: ChargeFeeArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::admin::charge_fee`,
        typeArguments: [typeArg],
        arguments: [obj(tx, args.version), obj(tx, args.balance)],
    });
}

export function issueManagerCap(tx: Transaction, version: TransactionObjectInput) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::admin::issue_manager_cap`,
        arguments: [obj(tx, version)],
    });
}

export interface RemoveAuthorizedUserArgs {
    version: TransactionObjectInput;
    userAddress: string | TransactionArgument;
}

export function removeAuthorizedUser(tx: Transaction, args: RemoveAuthorizedUserArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::admin::remove_authorized_user`,
        arguments: [obj(tx, args.version), pure(tx, args.userAddress, `address`)],
    });
}

export function sendFee(tx: Transaction, typeArg: string, version: TransactionObjectInput) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::admin::send_fee`,
        typeArguments: [typeArg],
        arguments: [obj(tx, version)],
    });
}

export function versionCheck(tx: Transaction, version: TransactionObjectInput) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::admin::version_check`,
        arguments: [obj(tx, version)],
    });
}

export interface AddTailsExpAmountArgs {
    version: TransactionObjectInput;
    typusEcosystemVersion: TransactionObjectInput;
    typusUserRegistry: TransactionObjectInput;
    user: string | TransactionArgument;
    amount: bigint | TransactionArgument;
}

export function addTailsExpAmount(tx: Transaction, args: AddTailsExpAmountArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::admin::add_tails_exp_amount`,
        arguments: [
            obj(tx, args.version),
            obj(tx, args.typusEcosystemVersion),
            obj(tx, args.typusUserRegistry),
            pure(tx, args.user, `address`),
            pure(tx, args.amount, `u64`),
        ],
    });
}

export interface AddExpLeaderboardArgs {
    version: TransactionObjectInput;
    typusEcosystemVersion: TransactionObjectInput;
    typusLeaderboardRegistry: TransactionObjectInput;
    user: string | TransactionArgument;
    score: bigint | TransactionArgument;
    clock: TransactionObjectInput;
}

export function addExpLeaderboard(tx: Transaction, args: AddExpLeaderboardArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::admin::add_exp_leaderboard`,
        arguments: [
            obj(tx, args.version),
            obj(tx, args.typusEcosystemVersion),
            obj(tx, args.typusLeaderboardRegistry),
            pure(tx, args.user, `address`),
            pure(tx, args.score, `u64`),
            obj(tx, args.clock),
        ],
    });
}

export interface ChargeLiquidatorFeeArgs {
    version: TransactionObjectInput;
    balance: TransactionObjectInput;
}

export function chargeLiquidatorFee(tx: Transaction, typeArg: string, args: ChargeLiquidatorFeeArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::admin::charge_liquidator_fee`,
        typeArguments: [typeArg],
        arguments: [obj(tx, args.version), obj(tx, args.balance)],
    });
}

export interface InstallEcosystemManagerCapEntryArgs {
    version: TransactionObjectInput;
    typusEcosystemVersion: TransactionObjectInput;
}

export function installEcosystemManagerCapEntry(tx: Transaction, args: InstallEcosystemManagerCapEntryArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::admin::install_ecosystem_manager_cap_entry`,
        arguments: [obj(tx, args.version), obj(tx, args.typusEcosystemVersion)],
    });
}

export function sendLiquidatorFee(tx: Transaction, typeArg: string, version: TransactionObjectInput) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::admin::send_liquidator_fee`,
        typeArguments: [typeArg],
        arguments: [obj(tx, version)],
    });
}
