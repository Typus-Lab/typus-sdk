"use strict";
// const apiUrl = "https://app.sentio.xyz/api/v1/insights/wayne/typus/query";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExpLeaderBoardWithOwner = getExpLeaderBoardWithOwner;
exports.getExpLeaderBoard = getExpLeaderBoard;
function getExpLeaderBoardWithOwner(expLeaderBoard, ownerMap) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, expLeaderBoard.map(function (l) {
                    l.owner = ownerMap.get(l.nft_id);
                    return l;
                })];
        });
    });
}
var headers = {
    "api-key": "tz3JJ6stG7Fux6ueRSRA5mdpC9U0lozI3",
    "Content-Type": "application/json",
};
function getExpLeaderBoard(startTimestamp, endTimestamp) {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrl, _endTimestamp, requestData, jsonData, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiUrl = "https://app.sentio.xyz/api/v1/analytics/typus/typus_v2/sql/execute";
                    _endTimestamp = endTimestamp ? endTimestamp : "9999999999";
                    requestData = {
                        sqlQuery: {
                            // sql: `SELECT S.distinct_id AS owner, SUM(E.exp_earn) AS total_exp_earn
                            //         FROM ExpUp E
                            //         JOIN (
                            //             SELECT number, distinct_id
                            //             FROM StakeNft
                            //             WHERE (number, timestamp) IN (
                            //                 SELECT number, MAX(timestamp) AS max_timestamp
                            //                 FROM StakeNft
                            //                 GROUP BY number
                            //             )
                            //         ) S ON E.number = S.number
                            //         WHERE E.timestamp >= ${startTimestamp} && E.timestamp < ${_endTimestamp}
                            //         GROUP BY owner
                            //         ORDER BY total_exp_earn DESC;`,
                            sql: "\n                SELECT E.nft_id as nft_id, SUM(E.exp_earn) as total_exp_earn\n                FROM ExpUp E\n                WHERE E.timestamp >= ".concat(startTimestamp, " && E.timestamp < ").concat(_endTimestamp, "\n                GROUP BY nft_id\n                ORDER BY total_exp_earn DESC;\n            "),
                            size: 200,
                        },
                    };
                    jsonData = JSON.stringify(requestData);
                    return [4 /*yield*/, fetch(apiUrl, {
                            method: "POST",
                            headers: headers,
                            body: jsonData,
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data.result.rows];
            }
        });
    });
}
// (async () => {
//     const res1 = await getExpLeaderBoard("0");
//     console.log(res1);
// })();
