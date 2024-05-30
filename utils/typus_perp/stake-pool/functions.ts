import { PUBLISHED_AT } from "..";
import { ObjectArg, obj, pure, vector } from "../../_framework/util";
import { TransactionArgument, TransactionBlock } from "@mysten/sui.js/transactions";

export function init(txb: TransactionBlock) {
    return txb.moveCall({ target: `${PUBLISHED_AT}::stake_pool::init`, arguments: [] });
}

export interface HarvestArgs {
    version: ObjectArg;
    registry: ObjectArg;
    index: bigint | TransactionArgument;
    clock: ObjectArg;
}

export function harvest(txb: TransactionBlock, typeArg: string, args: HarvestArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::stake_pool::harvest`,
        typeArguments: [typeArg],
        arguments: [obj(txb, args.version), obj(txb, args.registry), pure(txb, args.index, `u64`), obj(txb, args.clock)],
    });
}

export interface UnsubscribeArgs {
    version: ObjectArg;
    registry: ObjectArg;
    index: bigint | TransactionArgument;
    userShareId: bigint | TransactionArgument;
    clock: ObjectArg;
}

export function unsubscribe(txb: TransactionBlock, typeArg: string, args: UnsubscribeArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::stake_pool::unsubscribe`,
        typeArguments: [typeArg],
        arguments: [
            obj(txb, args.version),
            obj(txb, args.registry),
            pure(txb, args.index, `u64`),
            pure(txb, args.userShareId, `u64`),
            obj(txb, args.clock),
        ],
    });
}

export interface ActivateIncentiveTokenArgs {
    version: ObjectArg;
    registry: ObjectArg;
    index: bigint | TransactionArgument;
}

export function activateIncentiveToken(txb: TransactionBlock, typeArg: string, args: ActivateIncentiveTokenArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::stake_pool::activate_incentive_token`,
        typeArguments: [typeArg],
        arguments: [obj(txb, args.version), obj(txb, args.registry), pure(txb, args.index, `u64`)],
    });
}

export interface AddIncentiveTokenArgs {
    version: ObjectArg;
    registry: ObjectArg;
    index: bigint | TransactionArgument;
    periodIncentiveAmount: bigint | TransactionArgument;
    incentiveIntervalTsMs: bigint | TransactionArgument;
    clock: ObjectArg;
}

export function addIncentiveToken(txb: TransactionBlock, typeArg: string, args: AddIncentiveTokenArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::stake_pool::add_incentive_token`,
        typeArguments: [typeArg],
        arguments: [
            obj(txb, args.version),
            obj(txb, args.registry),
            pure(txb, args.index, `u64`),
            pure(txb, args.periodIncentiveAmount, `u64`),
            pure(txb, args.incentiveIntervalTsMs, `u64`),
            obj(txb, args.clock),
        ],
    });
}

export interface AllocateIncentiveArgs {
    version: ObjectArg;
    registry: ObjectArg;
    index: bigint | TransactionArgument;
    clock: ObjectArg;
}

export function allocateIncentive(txb: TransactionBlock, args: AllocateIncentiveArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::stake_pool::allocate_incentive`,
        arguments: [obj(txb, args.version), obj(txb, args.registry), pure(txb, args.index, `u64`), obj(txb, args.clock)],
    });
}

export interface CalculateIncentiveArgs {
    stakePool: ObjectArg;
    incentiveToken: ObjectArg;
    lpUserShare: ObjectArg;
}

export function calculateIncentive(txb: TransactionBlock, args: CalculateIncentiveArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::stake_pool::calculate_incentive`,
        arguments: [obj(txb, args.stakePool), obj(txb, args.incentiveToken), obj(txb, args.lpUserShare)],
    });
}

export interface CreateUserLastIncentiveTsMsArgs {
    stakePool: ObjectArg;
    currentTsMs: bigint | TransactionArgument;
}

export function createUserLastIncentiveTsMs(txb: TransactionBlock, args: CreateUserLastIncentiveTsMsArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::stake_pool::create_user_last_incentive_ts_ms`,
        arguments: [obj(txb, args.stakePool), pure(txb, args.currentTsMs, `u64`)],
    });
}

export interface DeactivateIncentiveTokenArgs {
    version: ObjectArg;
    registry: ObjectArg;
    index: bigint | TransactionArgument;
}

export function deactivateIncentiveToken(txb: TransactionBlock, typeArg: string, args: DeactivateIncentiveTokenArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::stake_pool::deactivate_incentive_token`,
        typeArguments: [typeArg],
        arguments: [obj(txb, args.version), obj(txb, args.registry), pure(txb, args.index, `u64`)],
    });
}

export interface DepositIncentiveArgs {
    version: ObjectArg;
    registry: ObjectArg;
    index: bigint | TransactionArgument;
    coin: ObjectArg;
    incentiveAmount: bigint | TransactionArgument;
}

export function depositIncentive(txb: TransactionBlock, typeArg: string, args: DepositIncentiveArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::stake_pool::deposit_incentive`,
        typeArguments: [typeArg],
        arguments: [
            obj(txb, args.version),
            obj(txb, args.registry),
            pure(txb, args.index, `u64`),
            obj(txb, args.coin),
            pure(txb, args.incentiveAmount, `u64`),
        ],
    });
}

export interface GetIncentiveArgs {
    stakePool: ObjectArg;
    tokenType: ObjectArg;
}

export function getIncentive(txb: TransactionBlock, args: GetIncentiveArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::stake_pool::get_incentive`,
        arguments: [obj(txb, args.stakePool), obj(txb, args.tokenType)],
    });
}

export function getIncentiveTokens(txb: TransactionBlock, stakePool: ObjectArg) {
    return txb.moveCall({ target: `${PUBLISHED_AT}::stake_pool::get_incentive_tokens`, arguments: [obj(txb, stakePool)] });
}

export function getLastIncentivePriceIndex(txb: TransactionBlock, stakePool: ObjectArg) {
    return txb.moveCall({ target: `${PUBLISHED_AT}::stake_pool::get_last_incentive_price_index`, arguments: [obj(txb, stakePool)] });
}

export interface GetMutIncentiveArgs {
    stakePool: ObjectArg;
    tokenType: ObjectArg;
}

export function getMutIncentive(txb: TransactionBlock, args: GetMutIncentiveArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::stake_pool::get_mut_incentive`,
        arguments: [obj(txb, args.stakePool), obj(txb, args.tokenType)],
    });
}

export interface GetMutStakePoolArgs {
    id: ObjectArg;
    index: bigint | TransactionArgument;
}

export function getMutStakePool(txb: TransactionBlock, args: GetMutStakePoolArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::stake_pool::get_mut_stake_pool`,
        arguments: [obj(txb, args.id), pure(txb, args.index, `u64`)],
    });
}

export interface GetStakePoolArgs {
    id: ObjectArg;
    index: bigint | TransactionArgument;
}

export function getStakePool(txb: TransactionBlock, args: GetStakePoolArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::stake_pool::get_stake_pool`,
        arguments: [obj(txb, args.id), pure(txb, args.index, `u64`)],
    });
}

export interface GetUserShareIdsArgs {
    stakePool: ObjectArg;
    user: string | TransactionArgument;
}

export function getUserShareIds(txb: TransactionBlock, args: GetUserShareIdsArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::stake_pool::get_user_share_ids`,
        arguments: [obj(txb, args.stakePool), pure(txb, args.user, `address`)],
    });
}

export interface HarvestPerUserShareArgs {
    version: ObjectArg;
    registry: ObjectArg;
    index: bigint | TransactionArgument;
    userShareId: bigint | TransactionArgument;
    clock: ObjectArg;
}

export function harvestPerUserShare(txb: TransactionBlock, typeArg: string, args: HarvestPerUserShareArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::stake_pool::harvest_per_user_share`,
        typeArguments: [typeArg],
        arguments: [
            obj(txb, args.version),
            obj(txb, args.registry),
            pure(txb, args.index, `u64`),
            pure(txb, args.userShareId, `u64`),
            obj(txb, args.clock),
        ],
    });
}

export interface NewStakePoolArgs {
    version: ObjectArg;
    registry: ObjectArg;
    unlockCountdownTsMs: bigint | TransactionArgument;
}

export function newStakePool(txb: TransactionBlock, typeArg: string, args: NewStakePoolArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::stake_pool::new_stake_pool`,
        typeArguments: [typeArg],
        arguments: [obj(txb, args.version), obj(txb, args.registry), pure(txb, args.unlockCountdownTsMs, `u64`)],
    });
}

export interface RemoveIncentiveArgs {
    stakePool: ObjectArg;
    tokenType: ObjectArg;
}

export function removeIncentive(txb: TransactionBlock, args: RemoveIncentiveArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::stake_pool::remove_incentive`,
        arguments: [obj(txb, args.stakePool), obj(txb, args.tokenType)],
    });
}

export interface RemoveIncentiveTokenArgs {
    version: ObjectArg;
    registry: ObjectArg;
    index: bigint | TransactionArgument;
}

export function removeIncentiveToken(txb: TransactionBlock, typeArg: string, args: RemoveIncentiveTokenArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::stake_pool::remove_incentive_token`,
        typeArguments: [typeArg],
        arguments: [obj(txb, args.version), obj(txb, args.registry), pure(txb, args.index, `u64`)],
    });
}

export interface RemoveUserShareByIdArgs {
    id: ObjectArg;
    user: string | TransactionArgument;
    userShareId: bigint | TransactionArgument;
}

export function removeUserShareById(txb: TransactionBlock, args: RemoveUserShareByIdArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::stake_pool::remove_user_share_by_id`,
        arguments: [obj(txb, args.id), pure(txb, args.user, `address`), pure(txb, args.userShareId, `u64`)],
    });
}

export interface RemoveUserShareByUserArgs {
    id: ObjectArg;
    user: string | TransactionArgument;
}

export function removeUserShareByUser(txb: TransactionBlock, args: RemoveUserShareByUserArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::stake_pool::remove_user_share_by_user`,
        arguments: [obj(txb, args.id), pure(txb, args.user, `address`)],
    });
}

export interface StakeArgs {
    version: ObjectArg;
    registry: ObjectArg;
    index: bigint | TransactionArgument;
    lpToken: ObjectArg;
    clock: ObjectArg;
}

export function stake(txb: TransactionBlock, typeArg: string, args: StakeArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::stake_pool::stake`,
        typeArguments: [typeArg],
        arguments: [
            obj(txb, args.version),
            obj(txb, args.registry),
            pure(txb, args.index, `u64`),
            obj(txb, args.lpToken),
            obj(txb, args.clock),
        ],
    });
}

export interface StoreUserSharesArgs {
    id: ObjectArg;
    user: string | TransactionArgument;
    userShares: Array<ObjectArg> | TransactionArgument;
}

export function storeUserShares(txb: TransactionBlock, args: StoreUserSharesArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::stake_pool::store_user_shares`,
        arguments: [
            obj(txb, args.id),
            pure(txb, args.user, `address`),
            vector(txb, `0x4c83d54c5b4fa3096550131d62cc28f01594a88e3a7ed2acb3fda8888ec653df::stake_pool::LpUserShare`, args.userShares),
        ],
    });
}

export interface UnstakeArgs {
    version: ObjectArg;
    registry: ObjectArg;
    index: bigint | TransactionArgument;
    userShareId: bigint | TransactionArgument;
    clock: ObjectArg;
}

export function unstake(txb: TransactionBlock, typeArg: string, args: UnstakeArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::stake_pool::unstake`,
        typeArguments: [typeArg],
        arguments: [
            obj(txb, args.version),
            obj(txb, args.registry),
            pure(txb, args.index, `u64`),
            pure(txb, args.userShareId, `u64`),
            obj(txb, args.clock),
        ],
    });
}

export interface UpdateIncentiveConfigArgs {
    version: ObjectArg;
    registry: ObjectArg;
    index: bigint | TransactionArgument;
    incentiveToken: ObjectArg;
    periodIncentiveAmount: bigint | TransactionArgument | TransactionArgument | null;
    incentiveIntervalTsMs: bigint | TransactionArgument | TransactionArgument | null;
    u64Padding: Array<bigint | TransactionArgument> | TransactionArgument | TransactionArgument | null;
}

export function updateIncentiveConfig(txb: TransactionBlock, args: UpdateIncentiveConfigArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::stake_pool::update_incentive_config`,
        arguments: [
            obj(txb, args.version),
            obj(txb, args.registry),
            pure(txb, args.index, `u64`),
            obj(txb, args.incentiveToken),
            pure(txb, args.periodIncentiveAmount, `0x1::option::Option<u64>`),
            pure(txb, args.incentiveIntervalTsMs, `0x1::option::Option<u64>`),
            pure(txb, args.u64Padding, `0x1::option::Option<vector<u64>>`),
        ],
    });
}

export interface UpdateUnlockCountdownTsMsArgs {
    version: ObjectArg;
    registry: ObjectArg;
    index: bigint | TransactionArgument;
    unlockCountdownTsMs: bigint | TransactionArgument;
}

export function updateUnlockCountdownTsMs(txb: TransactionBlock, args: UpdateUnlockCountdownTsMsArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::stake_pool::update_unlock_countdown_ts_ms`,
        arguments: [
            obj(txb, args.version),
            obj(txb, args.registry),
            pure(txb, args.index, `u64`),
            pure(txb, args.unlockCountdownTsMs, `u64`),
        ],
    });
}

export interface WithdrawIncentiveArgs {
    version: ObjectArg;
    registry: ObjectArg;
    index: bigint | TransactionArgument;
    amount: bigint | TransactionArgument | TransactionArgument | null;
}

export function withdrawIncentive(txb: TransactionBlock, typeArg: string, args: WithdrawIncentiveArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::stake_pool::withdraw_incentive`,
        typeArguments: [typeArg],
        arguments: [
            obj(txb, args.version),
            obj(txb, args.registry),
            pure(txb, args.index, `u64`),
            pure(txb, args.amount, `0x1::option::Option<u64>`),
        ],
    });
}
