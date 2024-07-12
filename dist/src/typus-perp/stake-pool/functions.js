"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = init;
exports.unsubscribe = unsubscribe;
exports.activateIncentiveToken = activateIncentiveToken;
exports.addIncentiveToken = addIncentiveToken;
exports.allocateIncentive = allocateIncentive;
exports.calculateIncentive = calculateIncentive;
exports.createUserLastIncentiveTsMs = createUserLastIncentiveTsMs;
exports.deactivateIncentiveToken = deactivateIncentiveToken;
exports.depositIncentive = depositIncentive;
exports.getIncentive = getIncentive;
exports.getIncentiveTokens = getIncentiveTokens;
exports.getLastIncentivePriceIndex = getLastIncentivePriceIndex;
exports.getMutIncentive = getMutIncentive;
exports.getMutStakePool = getMutStakePool;
exports.getStakePool = getStakePool;
exports.getUserShareIds = getUserShareIds;
exports.getUserShares = getUserShares;
exports.harvestPerUserShare = harvestPerUserShare;
exports.newStakePool = newStakePool;
exports.removeIncentive = removeIncentive;
exports.removeIncentiveToken = removeIncentiveToken;
exports.removeUserShareById = removeUserShareById;
exports.stake = stake;
exports.storeUserShares = storeUserShares;
exports.unstake = unstake;
exports.updateIncentiveConfig = updateIncentiveConfig;
exports.updateUnlockCountdownTsMs = updateUnlockCountdownTsMs;
exports.withdrawIncentive = withdrawIncentive;
var __1 = require("..");
var util_1 = require("../../_framework/util");
function init(txb) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::stake_pool::init"), arguments: [] });
}
function unsubscribe(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::stake_pool::unsubscribe"),
        typeArguments: [typeArg],
        arguments: [
            (0, util_1.obj)(txb, args.version),
            (0, util_1.obj)(txb, args.registry),
            (0, util_1.pure)(txb, args.index, "u64"),
            (0, util_1.pure)(txb, args.userShareId, "u64"),
            (0, util_1.pure)(txb, args.unsubscribedShares, "0x1::option::Option<u64>"),
            (0, util_1.obj)(txb, args.clock),
        ],
    });
}
function activateIncentiveToken(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::stake_pool::activate_incentive_token"),
        typeArguments: [typeArg],
        arguments: [(0, util_1.obj)(txb, args.version), (0, util_1.obj)(txb, args.registry), (0, util_1.pure)(txb, args.index, "u64")],
    });
}
function addIncentiveToken(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::stake_pool::add_incentive_token"),
        typeArguments: [typeArg],
        arguments: [
            (0, util_1.obj)(txb, args.version),
            (0, util_1.obj)(txb, args.registry),
            (0, util_1.pure)(txb, args.index, "u64"),
            (0, util_1.pure)(txb, args.periodIncentiveAmount, "u64"),
            (0, util_1.pure)(txb, args.incentiveIntervalTsMs, "u64"),
            (0, util_1.obj)(txb, args.clock),
        ],
    });
}
function allocateIncentive(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::stake_pool::allocate_incentive"),
        arguments: [(0, util_1.obj)(txb, args.version), (0, util_1.obj)(txb, args.registry), (0, util_1.pure)(txb, args.index, "u64"), (0, util_1.obj)(txb, args.clock)],
    });
}
function calculateIncentive(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::stake_pool::calculate_incentive"),
        arguments: [(0, util_1.obj)(txb, args.stakePool), (0, util_1.obj)(txb, args.incentiveToken), (0, util_1.obj)(txb, args.lpUserShare)],
    });
}
function createUserLastIncentiveTsMs(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::stake_pool::create_user_last_incentive_ts_ms"),
        arguments: [(0, util_1.obj)(txb, args.stakePool), (0, util_1.pure)(txb, args.currentTsMs, "u64")],
    });
}
function deactivateIncentiveToken(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::stake_pool::deactivate_incentive_token"),
        typeArguments: [typeArg],
        arguments: [(0, util_1.obj)(txb, args.version), (0, util_1.obj)(txb, args.registry), (0, util_1.pure)(txb, args.index, "u64")],
    });
}
function depositIncentive(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::stake_pool::deposit_incentive"),
        typeArguments: [typeArg],
        arguments: [(0, util_1.obj)(txb, args.version), (0, util_1.obj)(txb, args.registry), (0, util_1.pure)(txb, args.index, "u64"), (0, util_1.obj)(txb, args.coin)],
    });
}
function getIncentive(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::stake_pool::get_incentive"),
        arguments: [(0, util_1.obj)(txb, args.stakePool), (0, util_1.obj)(txb, args.tokenType)],
    });
}
function getIncentiveTokens(txb, stakePool) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::stake_pool::get_incentive_tokens"), arguments: [(0, util_1.obj)(txb, stakePool)] });
}
function getLastIncentivePriceIndex(txb, stakePool) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::stake_pool::get_last_incentive_price_index"), arguments: [(0, util_1.obj)(txb, stakePool)] });
}
function getMutIncentive(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::stake_pool::get_mut_incentive"),
        arguments: [(0, util_1.obj)(txb, args.stakePool), (0, util_1.obj)(txb, args.tokenType)],
    });
}
function getMutStakePool(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::stake_pool::get_mut_stake_pool"),
        arguments: [(0, util_1.obj)(txb, args.id), (0, util_1.pure)(txb, args.index, "u64")],
    });
}
function getStakePool(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::stake_pool::get_stake_pool"),
        arguments: [(0, util_1.obj)(txb, args.id), (0, util_1.pure)(txb, args.index, "u64")],
    });
}
function getUserShareIds(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::stake_pool::get_user_share_ids"),
        arguments: [(0, util_1.obj)(txb, args.stakePool), (0, util_1.pure)(txb, args.user, "address")],
    });
}
function getUserShares(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::stake_pool::get_user_shares"),
        arguments: [(0, util_1.obj)(txb, args.registry), (0, util_1.pure)(txb, args.index, "u64"), (0, util_1.pure)(txb, args.user, "address")],
    });
}
function harvestPerUserShare(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::stake_pool::harvest_per_user_share"),
        typeArguments: [typeArg],
        arguments: [
            (0, util_1.obj)(txb, args.version),
            (0, util_1.obj)(txb, args.registry),
            (0, util_1.pure)(txb, args.index, "u64"),
            (0, util_1.pure)(txb, args.userShareId, "u64"),
            (0, util_1.obj)(txb, args.clock),
        ],
    });
}
function newStakePool(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::stake_pool::new_stake_pool"),
        typeArguments: [typeArg],
        arguments: [(0, util_1.obj)(txb, args.version), (0, util_1.obj)(txb, args.registry), (0, util_1.pure)(txb, args.unlockCountdownTsMs, "u64")],
    });
}
function removeIncentive(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::stake_pool::remove_incentive"),
        arguments: [(0, util_1.obj)(txb, args.stakePool), (0, util_1.obj)(txb, args.tokenType)],
    });
}
function removeIncentiveToken(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::stake_pool::remove_incentive_token"),
        typeArguments: [typeArg],
        arguments: [(0, util_1.obj)(txb, args.version), (0, util_1.obj)(txb, args.registry), (0, util_1.pure)(txb, args.index, "u64")],
    });
}
function removeUserShareById(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::stake_pool::remove_user_share_by_id"),
        arguments: [(0, util_1.obj)(txb, args.id), (0, util_1.pure)(txb, args.user, "address"), (0, util_1.pure)(txb, args.userShareId, "u64")],
    });
}
function stake(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::stake_pool::stake"),
        typeArguments: [typeArg],
        arguments: [
            (0, util_1.obj)(txb, args.version),
            (0, util_1.obj)(txb, args.registry),
            (0, util_1.pure)(txb, args.index, "u64"),
            (0, util_1.obj)(txb, args.lpToken),
            (0, util_1.pure)(txb, args.userShareId, "0x1::option::Option<u64>"),
            (0, util_1.obj)(txb, args.clock),
        ],
    });
}
function storeUserShares(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::stake_pool::store_user_shares"),
        arguments: [
            (0, util_1.obj)(txb, args.id),
            (0, util_1.pure)(txb, args.user, "address"),
            (0, util_1.vector)(txb, "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::LpUserShare", args.userShares),
        ],
    });
}
function unstake(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::stake_pool::unstake"),
        typeArguments: [typeArg],
        arguments: [
            (0, util_1.obj)(txb, args.version),
            (0, util_1.obj)(txb, args.registry),
            (0, util_1.pure)(txb, args.index, "u64"),
            (0, util_1.pure)(txb, args.userShareId, "u64"),
            (0, util_1.pure)(txb, args.unstakedShares, "0x1::option::Option<u64>"),
            (0, util_1.obj)(txb, args.clock),
        ],
    });
}
function updateIncentiveConfig(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::stake_pool::update_incentive_config"),
        typeArguments: [typeArg],
        arguments: [
            (0, util_1.obj)(txb, args.version),
            (0, util_1.obj)(txb, args.registry),
            (0, util_1.pure)(txb, args.index, "u64"),
            (0, util_1.pure)(txb, args.periodIncentiveAmount, "0x1::option::Option<u64>"),
            (0, util_1.pure)(txb, args.incentiveIntervalTsMs, "0x1::option::Option<u64>"),
            (0, util_1.pure)(txb, args.u64Padding, "0x1::option::Option<vector<u64>>"),
        ],
    });
}
function updateUnlockCountdownTsMs(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::stake_pool::update_unlock_countdown_ts_ms"),
        arguments: [
            (0, util_1.obj)(txb, args.version),
            (0, util_1.obj)(txb, args.registry),
            (0, util_1.pure)(txb, args.index, "u64"),
            (0, util_1.pure)(txb, args.unlockCountdownTsMs, "u64"),
        ],
    });
}
function withdrawIncentive(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::stake_pool::withdraw_incentive"),
        typeArguments: [typeArg],
        arguments: [
            (0, util_1.obj)(txb, args.version),
            (0, util_1.obj)(txb, args.registry),
            (0, util_1.pure)(txb, args.index, "u64"),
            (0, util_1.pure)(txb, args.amount, "0x1::option::Option<u64>"),
        ],
    });
}
