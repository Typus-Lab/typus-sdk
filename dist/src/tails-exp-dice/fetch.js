"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlaygrounds = getPlaygrounds;
exports.getHistory = getHistory;
exports.waitHistory = waitHistory;
exports.parseHistory = parseHistory;
exports.getLeaderBoard = getLeaderBoard;
exports.getProfitSharing = getProfitSharing;
exports.calculateLevelReward = calculateLevelReward;
var token_1 = require("../constants/token");
function getPlaygrounds(provider, diceRegistry) {
    return __awaiter(this, void 0, void 0, function () {
        var playgroundIds, objects, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, provider.getDynamicFields({ parentId: diceRegistry })];
                case 1:
                    playgroundIds = (_a.sent()).data
                        .filter(function (a) { return a.objectType.endsWith("Playground"); })
                        .sort(function (a, b) { return Number(a.name.value) - Number(b.name.value); })
                        .map(function (x) { return x.objectId; });
                    return [4 /*yield*/, provider.multiGetObjects({
                            ids: playgroundIds,
                            options: { showContent: true },
                        })];
                case 2:
                    objects = _a.sent();
                    result = objects
                        // @ts-ignore
                        .filter(function (object) { var _a, _b; return (_b = (_a = object.data) === null || _a === void 0 ? void 0 : _a.content) === null || _b === void 0 ? void 0 : _b.type.endsWith("Playground"); })
                        .map(function (object) {
                        var _a;
                        // @ts-ignore
                        var fields = (_a = object.data) === null || _a === void 0 ? void 0 : _a.content.fields;
                        // console.log(fields);
                        var opened_games = fields.opened_games.fields.contents.reduce(function (acc, curr) {
                            acc.set(curr.fields.key, curr.fields.value.fields);
                            return acc;
                        }, new Map());
                        var game_config = fields.game_config.fields;
                        // console.log(opened_games);
                        // console.log(game_config);
                        var playground = {
                            id: fields.id.id,
                            house_whitelist: fields.house_whitelist,
                            public_key: fields.public_key,
                            num_of_games: fields.num_of_games,
                            stake_token: fields.stake_token.fields.name,
                            opened_games: opened_games,
                            game_config: game_config,
                            is_active: fields.is_active,
                        };
                        // console.log(playground);
                        return playground;
                    });
                    return [2 /*return*/, result];
            }
        });
    });
}
function getHistory(provider, dicePackage, playgrounds) {
    return __awaiter(this, void 0, void 0, function () {
        var eventFilter, result, history, nextPage;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    eventFilter = {
                        MoveEventType: "".concat(dicePackage, "::tails_exp::Draw"),
                    };
                    return [4 /*yield*/, provider.queryEvents({ query: eventFilter, order: "descending" })];
                case 1:
                    result = _a.sent();
                    return [4 /*yield*/, parseHistory(result.data, playgrounds)];
                case 2:
                    history = _a.sent();
                    _a.label = 3;
                case 3:
                    if (!(result.hasNextPage && history.length <= 60)) return [3 /*break*/, 6];
                    return [4 /*yield*/, provider.queryEvents({ query: eventFilter, order: "descending", cursor: result.nextCursor })];
                case 4:
                    result = _a.sent();
                    return [4 /*yield*/, parseHistory(result.data, playgrounds)];
                case 5:
                    nextPage = _a.sent();
                    history = history.concat(nextPage);
                    return [3 /*break*/, 3];
                case 6: return [2 /*return*/, history];
            }
        });
    });
}
function waitHistory(provider, dicePackage, onMessage) {
    return __awaiter(this, void 0, void 0, function () {
        var eventFilter, unsubscribe;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    eventFilter = {
                        MoveEventType: "".concat(dicePackage, "::tails_exp::Draw"),
                    };
                    return [4 /*yield*/, provider.subscribeEvent({
                            filter: eventFilter,
                            onMessage: onMessage,
                        })];
                case 1:
                    unsubscribe = _a.sent();
                    return [2 /*return*/, unsubscribe];
            }
        });
    });
}
function parseHistory(datas, playgrounds) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            result = datas.map(function (event) {
                var drawEvent = event.parsedJson;
                drawEvent.timestampMs = event.timestampMs;
                var playground = playgrounds[Number(drawEvent.index)];
                var coinType = "0x" + playground.stake_token;
                var asset = (0, token_1.typeArgToAsset)(coinType);
                var decimal = (0, token_1.assetToDecimal)(asset);
                var guess_1 = (drawEvent.larger_than_1 ? "> " : "< ") + "".concat(Number(drawEvent.guess_1) / 100);
                var guess_2 = (drawEvent.larger_than_2 ? "> " : "< ") + "".concat(Number(drawEvent.guess_2) / 100);
                var result_1 = "".concat(Number(drawEvent.answer_1) / 100);
                switch (drawEvent.result_1) {
                    case "0":
                        result_1 += " W";
                        break;
                    case "1":
                        result_1 += " L";
                        break;
                    case "2":
                        result_1 += " C";
                        break;
                }
                var result_2 = "".concat(Number(drawEvent.answer_2) / 100);
                switch (drawEvent.result_2) {
                    case "0":
                        result_2 += " W";
                        break;
                    case "1":
                        result_2 += " L";
                        break;
                    case "2":
                        result_2 += " C";
                        break;
                }
                var stake_amount = Number(drawEvent.stake_amount) / Math.pow(10, decimal);
                var amount = stake_amount > 1000000 ? "".concat(stake_amount / 1000000, "m") : stake_amount;
                var display = {
                    game_id: drawEvent.game_id,
                    player: drawEvent.player,
                    guess_1: guess_1,
                    guess_2: guess_2,
                    result_1: result_1,
                    result_2: result_2,
                    bet_amount: "".concat(amount, " ").concat(asset),
                    exp: "".concat(Number(drawEvent.exp), " EXP"),
                    timestampMs: drawEvent.timestampMs,
                };
                return display;
            });
            return [2 /*return*/, result];
        });
    });
}
function getLeaderBoard(drawDisplays) {
    return __awaiter(this, void 0, void 0, function () {
        var leaderBoard, _loop_1, drawDisplays_1, drawDisplays_1_1, drawDisplay;
        var e_1, _a;
        return __generator(this, function (_b) {
            leaderBoard = [];
            _loop_1 = function (drawDisplay) {
                var i = leaderBoard.findIndex(function (x) { return x.player == drawDisplay.player; });
                if (i == -1) {
                    leaderBoard.push({
                        player: drawDisplay.player,
                        total_bet_amount: Number(drawDisplay.bet_amount.split(" ")[0]),
                        total_earn_exp: Number(drawDisplay.exp.split(" ")[0]),
                    });
                }
                else {
                    leaderBoard[i].total_bet_amount += Number(drawDisplay.bet_amount.split(" ")[0]);
                    leaderBoard[i].total_earn_exp += Number(drawDisplay.exp.split(" ")[0]);
                }
            };
            try {
                for (drawDisplays_1 = __values(drawDisplays), drawDisplays_1_1 = drawDisplays_1.next(); !drawDisplays_1_1.done; drawDisplays_1_1 = drawDisplays_1.next()) {
                    drawDisplay = drawDisplays_1_1.value;
                    _loop_1(drawDisplay);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (drawDisplays_1_1 && !drawDisplays_1_1.done && (_a = drawDisplays_1.return)) _a.call(drawDisplays_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return [2 /*return*/, leaderBoard];
        });
    });
}
function getProfitSharing(provider, diceProfitSharing) {
    return __awaiter(this, void 0, void 0, function () {
        var object, type, tokenType, result;
        var _a, _b, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0: return [4 /*yield*/, provider.getObject({
                        id: diceProfitSharing,
                        options: { showContent: true },
                    })];
                case 1:
                    object = _e.sent();
                    type = (_a = object.data) === null || _a === void 0 ? void 0 : _a.content.type;
                    tokenType = (_b = type.split("<").at(-1)) === null || _b === void 0 ? void 0 : _b.replace(">>", "");
                    result = (_d = (_c = object.data) === null || _c === void 0 ? void 0 : _c.content) === null || _d === void 0 ? void 0 : _d.fields.value.fields;
                    result.tokenType = tokenType;
                    return [2 /*return*/, result];
            }
        });
    });
}
function calculateLevelReward(totalRewards, levelShares, numOfHolders) {
    // Step 1: Calculate original level rewards (per holder)
    var totalShares = levelShares.reduce(function (acc, share) { return acc + share; }, 0);
    var originalRewardPerHolder = levelShares.map(function (levelShare, index) {
        var num = numOfHolders[index];
        var levelRewardPerHolder = num > 0 ? (totalRewards * levelShare) / totalShares / num : 0;
        return Math.floor(levelRewardPerHolder);
    });
    var originalLevelRewards = originalRewardPerHolder.map(function (reward, index) { return reward * numOfHolders[index]; });
    var distributedRewards = originalLevelRewards.reduce(function (acc, reward) { return acc + reward; }, 0);
    var emptyLevelRewards = totalRewards - distributedRewards;
    // console.log("Step 1 - ", originalRewardPerHolder);
    // Step 2: Distribute rewards from empty levels
    var reversedOriginalRewardPerHolder = originalRewardPerHolder.slice().reverse();
    var reversedNumOfHolders = numOfHolders.slice().reverse();
    var reversedScaledRewardPerHolder = [];
    if (emptyLevelRewards > 0) {
        var undistributedRewards_1 = emptyLevelRewards;
        var uncalculatedDistributedRewards_1 = distributedRewards;
        reversedScaledRewardPerHolder = reversedOriginalRewardPerHolder.map(function (rewardPerHolder, index) {
            var num = reversedNumOfHolders[index];
            var scaledRewardPerHolder = num > 0
                ? uncalculatedDistributedRewards_1 > 0
                    ? (rewardPerHolder * (uncalculatedDistributedRewards_1 + undistributedRewards_1)) / uncalculatedDistributedRewards_1
                    : rewardPerHolder
                : 0;
            undistributedRewards_1 -= (scaledRewardPerHolder - rewardPerHolder) * num;
            uncalculatedDistributedRewards_1 -= rewardPerHolder * num;
            return Math.floor(scaledRewardPerHolder);
        });
    }
    else {
        reversedScaledRewardPerHolder = reversedOriginalRewardPerHolder.slice();
    }
    // let scaledRewardPerHolder: number[] = reversedScaledRewardPerHolder.slice().reverse();
    // console.log("Step 2 - ", scaledRewardPerHolder);
    // Step 3: Capped level reward
    var reversedCappedRewardPerHolder = [reversedOriginalRewardPerHolder[0]];
    var tempHighLevelReward = 0;
    reversedScaledRewardPerHolder.forEach(function (highLevelReward, index) {
        var lowLevelReward = reversedScaledRewardPerHolder[index + 1] || 0;
        tempHighLevelReward =
            highLevelReward > 0
                ? tempHighLevelReward > 0
                    ? Math.min(highLevelReward, tempHighLevelReward)
                    : highLevelReward
                : tempHighLevelReward;
        reversedCappedRewardPerHolder.push(tempHighLevelReward > 0 ? Math.min(lowLevelReward, tempHighLevelReward) : lowLevelReward);
    });
    reversedCappedRewardPerHolder.pop();
    var cappedRewardPerHolder = reversedCappedRewardPerHolder.slice().reverse();
    // console.log("Step 3 - ", cappedRewardPerHolder);
    // Step 4: Distribute capped reward from Step 3 into each level
    var distributedRewardsStep4 = reversedCappedRewardPerHolder.reduce(function (acc, reward, index) { return acc + reward * reversedNumOfHolders[index]; }, 0);
    var undistributedRewardsStep4 = totalRewards - distributedRewardsStep4;
    var uncalculatedDistributedRewardsStep4 = distributedRewardsStep4;
    // console.log(distributedRewardsStep4);
    // console.log(totalRewards);
    // console.log(undistributedRewardsStep4);
    // console.log(uncalculatedDistributedRewardsStep4);
    var levelReward = cappedRewardPerHolder.map(function (rewardPerHolder, index) {
        var num = reversedNumOfHolders[index];
        var scaledRewardPerHolder = uncalculatedDistributedRewardsStep4 > 0
            ? (rewardPerHolder * (uncalculatedDistributedRewardsStep4 + undistributedRewardsStep4)) /
                uncalculatedDistributedRewardsStep4
            : rewardPerHolder;
        undistributedRewardsStep4 -= (scaledRewardPerHolder - rewardPerHolder) * num;
        uncalculatedDistributedRewardsStep4 -= rewardPerHolder * num;
        // console.log(undistributedRewardsStep4);
        return Math.floor(scaledRewardPerHolder);
    });
    // console.log("Step 4 - ", levelReward);
    return levelReward;
}
