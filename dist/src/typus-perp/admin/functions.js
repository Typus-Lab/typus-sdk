"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upgrade = upgrade;
exports.init = init;
exports.verify = verify;
exports.addAuthorizedUser = addAuthorizedUser;
exports.chargeFee = chargeFee;
exports.issueManagerCap = issueManagerCap;
exports.removeAuthorizedUser = removeAuthorizedUser;
exports.sendFee = sendFee;
exports.versionCheck = versionCheck;
exports.addTailsExpAmount = addTailsExpAmount;
exports.addExpLeaderboard = addExpLeaderboard;
exports.chargeLiquidatorFee = chargeLiquidatorFee;
exports.installEcosystemManagerCapEntry = installEcosystemManagerCapEntry;
exports.sendLiquidatorFee = sendLiquidatorFee;
var __1 = require("..");
var util_1 = require("../../_framework/util");
function upgrade(txb, version) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::admin::upgrade"), arguments: [(0, util_1.obj)(txb, version)] });
}
function init(txb) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::admin::init"), arguments: [] });
}
function verify(txb, version) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::admin::verify"), arguments: [(0, util_1.obj)(txb, version)] });
}
function addAuthorizedUser(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::admin::add_authorized_user"),
        arguments: [(0, util_1.obj)(txb, args.version), (0, util_1.pure)(txb, args.userAddress, "address")],
    });
}
function chargeFee(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::admin::charge_fee"),
        typeArguments: [typeArg],
        arguments: [(0, util_1.obj)(txb, args.version), (0, util_1.obj)(txb, args.balance)],
    });
}
function issueManagerCap(txb, version) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::admin::issue_manager_cap"), arguments: [(0, util_1.obj)(txb, version)] });
}
function removeAuthorizedUser(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::admin::remove_authorized_user"),
        arguments: [(0, util_1.obj)(txb, args.version), (0, util_1.pure)(txb, args.userAddress, "address")],
    });
}
function sendFee(txb, typeArg, version) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::admin::send_fee"), typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, version)] });
}
function versionCheck(txb, version) {
    return txb.moveCall({ target: "".concat(__1.PUBLISHED_AT, "::admin::version_check"), arguments: [(0, util_1.obj)(txb, version)] });
}
function addTailsExpAmount(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::admin::add_tails_exp_amount"),
        arguments: [
            (0, util_1.obj)(txb, args.version),
            (0, util_1.obj)(txb, args.typusEcosystemVersion),
            (0, util_1.obj)(txb, args.typusUserRegistry),
            (0, util_1.pure)(txb, args.user, "address"),
            (0, util_1.pure)(txb, args.amount, "u64"),
        ],
    });
}
function addExpLeaderboard(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::admin::add_exp_leaderboard"),
        arguments: [
            (0, util_1.obj)(txb, args.version),
            (0, util_1.obj)(txb, args.typusEcosystemVersion),
            (0, util_1.obj)(txb, args.typusLeaderboardRegistry),
            (0, util_1.pure)(txb, args.user, "address"),
            (0, util_1.pure)(txb, args.score, "u64"),
            (0, util_1.obj)(txb, args.clock),
        ],
    });
}
function chargeLiquidatorFee(txb, typeArg, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::admin::charge_liquidator_fee"),
        typeArguments: [typeArg],
        arguments: [(0, util_1.obj)(txb, args.version), (0, util_1.obj)(txb, args.balance)],
    });
}
function installEcosystemManagerCapEntry(txb, args) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::admin::install_ecosystem_manager_cap_entry"),
        arguments: [(0, util_1.obj)(txb, args.version), (0, util_1.obj)(txb, args.typusEcosystemVersion)],
    });
}
function sendLiquidatorFee(txb, typeArg, version) {
    return txb.moveCall({
        target: "".concat(__1.PUBLISHED_AT, "::admin::send_liquidator_fee"),
        typeArguments: [typeArg],
        arguments: [(0, util_1.obj)(txb, version)],
    });
}
