"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.LevelExpVec = exports.necklaces = void 0;
exports.getPool = getPool;
exports.getPoolMap = getPoolMap;
exports.getWhitelistMap = getWhitelistMap;
exports.getkioskOwnerCaps = getkioskOwnerCaps;
exports.getTailsIds = getTailsIds;
exports.getTails = getTails;
exports.getTailsDynamicField = getTailsDynamicField;
exports.getTailsKiosk = getTailsKiosk;
exports.getKioskOwner = getKioskOwner;
exports.fieldsToTails = fieldsToTails;
exports.getLevelExp = getLevelExp;
exports.getTableTails = getTableTails;
exports.getDiscountPool = getDiscountPool;
exports.getMintHistory = getMintHistory;
function getPool(provider, pool) {
    return __awaiter(this, void 0, void 0, function () {
        var res, fields, poolData;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, provider.getObject({ id: pool, options: { showContent: true } })];
                case 1:
                    res = _b.sent();
                    fields = (_a = res.data) === null || _a === void 0 ? void 0 : _a.content.fields;
                    poolData = {
                        pool_id: pool,
                        is_live: fields.is_live,
                        start_ms: fields.start_ms,
                        num: Number(fields.num),
                        remaining: Number(fields.tails.fields.contents.fields.size),
                        table: fields.tails.fields.contents.fields.id.id,
                    };
                    return [2 /*return*/, poolData];
            }
        });
    });
}
exports.necklaces = [
    "none",
    "bucket_protocol",
    "kriya_dex",
    "cetus_protocol",
    "ethos_wallet",
    "typus",
    "mysten_labs",
    "navi_protocol",
    "scallop_sui",
    "shinami_corp",
    "studio_mirai",
    "sui_network",
    "blockvision",
    "team",
    "nft_vault",
];
function getPoolMap(provider, nftConfig) {
    return __awaiter(this, void 0, void 0, function () {
        var pools, res, poolMap;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    pools = exports.necklaces.map(function (necklace) { return nftConfig[necklace]; });
                    return [4 /*yield*/, provider.multiGetObjects({ ids: pools, options: { showContent: true } })];
                case 1:
                    res = _a.sent();
                    poolMap = new Map();
                    exports.necklaces.forEach(function (necklace, i) { return __awaiter(_this, void 0, void 0, function () {
                        var fields, poolData;
                        var _a;
                        return __generator(this, function (_b) {
                            fields = (_a = res[i].data) === null || _a === void 0 ? void 0 : _a.content.fields;
                            poolData = {
                                pool_id: pools[i],
                                is_live: fields.is_live,
                                start_ms: fields.start_ms,
                                num: Number(fields.num),
                                remaining: Number(fields.tails.fields.contents.fields.size),
                                table: fields.tails.fields.contents.fields.id.id,
                            };
                            poolMap.set(necklace, poolData);
                            return [2 /*return*/];
                        });
                    }); });
                    return [2 /*return*/, poolMap];
            }
        });
    });
}
function getWhitelistMap(nftConfig, wlTokens) {
    return __awaiter(this, void 0, void 0, function () {
        var pools, whitelistMap;
        var _this = this;
        return __generator(this, function (_a) {
            pools = exports.necklaces.map(function (necklace) { return nftConfig[necklace]; });
            whitelistMap = new Map();
            exports.necklaces.forEach(function (necklace, i) { return __awaiter(_this, void 0, void 0, function () {
                var tokens;
                return __generator(this, function (_a) {
                    tokens = wlTokens.filter(function (wlToken) { var _a, _b; 
                    // @ts-ignore
                    return ((_b = (_a = wlToken.data) === null || _a === void 0 ? void 0 : _a.content) === null || _b === void 0 ? void 0 : _b.fields.for) == pools[i]; });
                    whitelistMap.set(necklace, tokens.map(function (token) { var _a; return (_a = token.data) === null || _a === void 0 ? void 0 : _a.objectId; }));
                    return [2 /*return*/];
                });
            }); });
            return [2 /*return*/, whitelistMap];
        });
    });
}
function getkioskOwnerCaps(datas) {
    var e_1, _a;
    var _b, _c, _d;
    var kioskOwnerCaps = [];
    try {
        for (var datas_1 = __values(datas), datas_1_1 = datas_1.next(); !datas_1_1.done; datas_1_1 = datas_1.next()) {
            var data = datas_1_1.value;
            if (((_b = data.data) === null || _b === void 0 ? void 0 : _b.type) == "0x2::kiosk::KioskOwnerCap") {
                // console.log(data.data?.content);
                // @ts-ignore
                var fields = data.data.content.fields;
                kioskOwnerCaps.push({ objectId: fields.id.id, kioskId: fields.for, isPersonal: false });
            }
            else if ((_d = (_c = data.data) === null || _c === void 0 ? void 0 : _c.type) === null || _d === void 0 ? void 0 : _d.endsWith("personal_kiosk::PersonalKioskCap")) {
                // @ts-ignore
                var fields = data.data.content.fields;
                kioskOwnerCaps.push({ objectId: fields.id.id, kioskId: fields.cap.fields.for, isPersonal: true });
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (datas_1_1 && !datas_1_1.done && (_a = datas_1.return)) _a.call(datas_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return kioskOwnerCaps;
}
function getTailsIds(kioskClient, NFT_PACKAGE_ORIGIN, kioskOwnerCaps) {
    return __awaiter(this, void 0, void 0, function () {
        var Tails, _loop_1, kioskOwnerCaps_1, kioskOwnerCaps_1_1, kioskOwnerCap, e_2_1;
        var e_2, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    Tails = [];
                    _loop_1 = function (kioskOwnerCap) {
                        var res, tails;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0: return [4 /*yield*/, kioskClient.getKiosk({ id: kioskOwnerCap.kioskId })];
                                case 1:
                                    res = _c.sent();
                                    tails = res.items
                                        .filter(function (item) { return item.type == "".concat(NFT_PACKAGE_ORIGIN, "::typus_nft::Tails"); })
                                        .map(function (item) {
                                        // console.log(item);
                                        // @ts-ignore
                                        var tails = item.data;
                                        var t = {
                                            kiosk: kioskOwnerCap.kioskId,
                                            kioskCap: kioskOwnerCap.objectId,
                                            isPersonal: kioskOwnerCap.isPersonal,
                                            nftId: item.objectId,
                                            listing: item.listing,
                                            tails: tails,
                                        };
                                        return t;
                                    });
                                    // console.log(tails);
                                    Tails = Tails.concat(tails);
                                    return [2 /*return*/];
                            }
                        });
                    };
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 6, 7, 8]);
                    kioskOwnerCaps_1 = __values(kioskOwnerCaps), kioskOwnerCaps_1_1 = kioskOwnerCaps_1.next();
                    _b.label = 2;
                case 2:
                    if (!!kioskOwnerCaps_1_1.done) return [3 /*break*/, 5];
                    kioskOwnerCap = kioskOwnerCaps_1_1.value;
                    return [5 /*yield**/, _loop_1(kioskOwnerCap)];
                case 3:
                    _b.sent();
                    _b.label = 4;
                case 4:
                    kioskOwnerCaps_1_1 = kioskOwnerCaps_1.next();
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 8];
                case 6:
                    e_2_1 = _b.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 8];
                case 7:
                    try {
                        if (kioskOwnerCaps_1_1 && !kioskOwnerCaps_1_1.done && (_a = kioskOwnerCaps_1.return)) _a.call(kioskOwnerCaps_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/, Tails];
            }
        });
    });
}
function getTails(provider, tailsIds) {
    return __awaiter(this, void 0, void 0, function () {
        var Tails, len, results, results_1, results_1_1, result, fields, tails;
        var e_3, _a;
        var _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    Tails = [];
                    _d.label = 1;
                case 1:
                    if (!(tailsIds.length > 0)) return [3 /*break*/, 3];
                    len = tailsIds.length > 50 ? 50 : tailsIds.length;
                    return [4 /*yield*/, provider.multiGetObjects({ ids: tailsIds.splice(0, len), options: { showContent: true } })];
                case 2:
                    results = _d.sent();
                    try {
                        for (results_1 = (e_3 = void 0, __values(results)), results_1_1 = results_1.next(); !results_1_1.done; results_1_1 = results_1.next()) {
                            result = results_1_1.value;
                            fields = (_b = result.data) === null || _b === void 0 ? void 0 : _b.content.fields;
                            tails = fieldsToTails(fields);
                            Tails.push(__assign(__assign({}, tails), { type: (_c = result.data) === null || _c === void 0 ? void 0 : _c.type }));
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (results_1_1 && !results_1_1.done && (_a = results_1.return)) _a.call(results_1);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/, Tails];
            }
        });
    });
}
function getTailsDynamicField(provider, tailsIds) {
    return __awaiter(this, void 0, void 0, function () {
        var Tails, tailsToDynamicField, len, results, results_2, results_2_1, result, owner, fields, tails;
        var e_4, _a;
        var _b, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    Tails = [];
                    tailsToDynamicField = new Map();
                    _e.label = 1;
                case 1:
                    if (!(tailsIds.length > 0)) return [3 /*break*/, 3];
                    len = tailsIds.length > 50 ? 50 : tailsIds.length;
                    return [4 /*yield*/, provider.multiGetObjects({ ids: tailsIds.splice(0, len), options: { showContent: true, showOwner: true } })];
                case 2:
                    results = _e.sent();
                    try {
                        for (results_2 = (e_4 = void 0, __values(results)), results_2_1 = results_2.next(); !results_2_1.done; results_2_1 = results_2.next()) {
                            result = results_2_1.value;
                            owner = (_b = result.data) === null || _b === void 0 ? void 0 : _b.owner.ObjectOwner;
                            fields = (_c = result.data) === null || _c === void 0 ? void 0 : _c.content.fields;
                            tails = fieldsToTails(fields);
                            Tails.push(__assign(__assign({}, tails), { type: (_d = result.data) === null || _d === void 0 ? void 0 : _d.type }));
                            if (owner) {
                                tailsToDynamicField.set(tails.id, owner);
                            }
                            else {
                                tailsToDynamicField.set(tails.id, "");
                            }
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (results_2_1 && !results_2_1.done && (_a = results_2.return)) _a.call(results_2);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/, [Tails, tailsToDynamicField]];
            }
        });
    });
}
function getTailsKiosk(provider, tailsToDynamicField) {
    return __awaiter(this, void 0, void 0, function () {
        var DynamicFieldToKiosk, dynamicFields, i, len, results, results_3, results_3_1, result, owner;
        var e_5, _a;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    DynamicFieldToKiosk = new Map();
                    dynamicFields = Array.from(tailsToDynamicField.values());
                    i = 0;
                    _c.label = 1;
                case 1:
                    if (!(dynamicFields.length > 0)) return [3 /*break*/, 3];
                    len = dynamicFields.length > 50 ? 50 : dynamicFields.length;
                    return [4 /*yield*/, provider.multiGetObjects({
                            ids: dynamicFields.splice(0, len),
                            options: { showOwner: true },
                        })];
                case 2:
                    results = _c.sent();
                    try {
                        for (results_3 = (e_5 = void 0, __values(results)), results_3_1 = results_3.next(); !results_3_1.done; results_3_1 = results_3.next()) {
                            result = results_3_1.value;
                            owner = (_b = result.data) === null || _b === void 0 ? void 0 : _b.owner.ObjectOwner;
                            DynamicFieldToKiosk.set(dynamicFields.at(i), owner);
                            i += 1;
                        }
                    }
                    catch (e_5_1) { e_5 = { error: e_5_1 }; }
                    finally {
                        try {
                            if (results_3_1 && !results_3_1.done && (_a = results_3.return)) _a.call(results_3);
                        }
                        finally { if (e_5) throw e_5.error; }
                    }
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/, DynamicFieldToKiosk];
            }
        });
    });
}
function getKioskOwner(provider, DynamicFieldToKiosk) {
    return __awaiter(this, void 0, void 0, function () {
        var KioskToOwner, kiosks, uniqueKiosks, i, len, results, results_4, results_4_1, result, owner;
        var e_6, _a;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    KioskToOwner = new Map();
                    kiosks = Array.from(DynamicFieldToKiosk.values());
                    uniqueKiosks = kiosks.filter(function (value, index, self) {
                        return self.findIndex(function (obj) { return obj === value; }) === index;
                    });
                    i = 0;
                    _c.label = 1;
                case 1:
                    if (!(uniqueKiosks.length > 0)) return [3 /*break*/, 3];
                    len = uniqueKiosks.length > 50 ? 50 : uniqueKiosks.length;
                    return [4 /*yield*/, provider.multiGetObjects({
                            ids: uniqueKiosks.splice(0, len),
                            options: { showContent: true },
                        })];
                case 2:
                    results = _c.sent();
                    try {
                        for (results_4 = (e_6 = void 0, __values(results)), results_4_1 = results_4.next(); !results_4_1.done; results_4_1 = results_4.next()) {
                            result = results_4_1.value;
                            owner = (_b = result.data) === null || _b === void 0 ? void 0 : _b.content.fields.owner;
                            KioskToOwner.set(uniqueKiosks.at(i), owner);
                            i += 1;
                        }
                    }
                    catch (e_6_1) { e_6 = { error: e_6_1 }; }
                    finally {
                        try {
                            if (results_4_1 && !results_4_1.done && (_a = results_4.return)) _a.call(results_4);
                        }
                        finally { if (e_6) throw e_6.error; }
                    }
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/, KioskToOwner];
            }
        });
    });
}
function fieldsToTails(fields) {
    var id = fields.id.id;
    if (fields.value) {
        fields = fields.value.fields;
    }
    // console.log(fields.attributes.fields.contents);
    var attributes = new Map();
    fields.attributes.fields.contents.forEach(function (f) { return attributes.set(f.fields.key, f.fields.value); });
    var u64_padding = new Map();
    fields.u64_padding.fields.contents.forEach(function (f) { return u64_padding.set(f.fields.key, f.fields.value); });
    var tails = {
        id: id,
        name: fields.name,
        number: fields.number,
        url: fields.url,
        level: fields.level,
        exp: fields.exp,
        first_bid: fields.first_bid,
        first_deposit: fields.first_deposit,
        first_deposit_nft: fields.first_deposit_nft,
        attributes: attributes,
        u64_padding: u64_padding,
    };
    return tails;
}
function getLevelExp(level) {
    switch (level) {
        case 1:
            return exports.LevelExpVec[1];
        case 2:
            return exports.LevelExpVec[2];
        case 3:
            return exports.LevelExpVec[3];
        case 4:
            return exports.LevelExpVec[4];
        case 5:
            return exports.LevelExpVec[5];
        case 6:
            return exports.LevelExpVec[6];
        case 7:
            return exports.LevelExpVec[7];
    }
}
exports.LevelExpVec = [0, 0, 1000, 50000, 250000, 1000000, 5000000, 20000000];
function getTableTails(provider, parentId) {
    return __awaiter(this, void 0, void 0, function () {
        var result, datas, tails, levelUsers;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, provider.getDynamicFields({
                        parentId: parentId,
                    })];
                case 1:
                    result = _a.sent();
                    datas = result.data;
                    _a.label = 2;
                case 2:
                    if (!result.hasNextPage) return [3 /*break*/, 4];
                    return [4 /*yield*/, provider.getDynamicFields({
                            parentId: parentId,
                            cursor: result.nextCursor,
                        })];
                case 3:
                    result = _a.sent();
                    datas = datas.concat(result.data);
                    return [3 /*break*/, 2];
                case 4: return [4 /*yield*/, getTails(provider, datas.map(function (data) { return data.objectId; }))];
                case 5:
                    tails = _a.sent();
                    levelUsers = [0, 0, 0, 0, 0, 0, 0];
                    tails.forEach(function (tail) { return (levelUsers[Number(tail.level) - 1] += 1); });
                    console.log("Level Users: ", levelUsers);
                    return [2 /*return*/, tails];
            }
        });
    });
}
function getDiscountPool(provider, pool) {
    return __awaiter(this, void 0, void 0, function () {
        var res, poolData, inventory, dynamicField, total;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, provider.getObject({ id: pool, options: { showContent: true } })];
                case 1:
                    res = _c.sent();
                    poolData = (_a = res.data) === null || _a === void 0 ? void 0 : _a.content.fields;
                    inventory = poolData.tails.fields.contents.fields.size - poolData.requests.length;
                    poolData.inventory = inventory;
                    return [4 /*yield*/, provider.getDynamicFieldObject({
                            parentId: pool,
                            name: { type: "0x1::string::String", value: "total" },
                        })];
                case 2:
                    dynamicField = _c.sent();
                    total = (_b = dynamicField.data) === null || _b === void 0 ? void 0 : _b.content.fields.value;
                    poolData.total = total;
                    return [2 /*return*/, poolData];
            }
        });
    });
}
function getMintHistory(provider, NFT_PACKAGE, vrf_input) {
    return __awaiter(this, void 0, void 0, function () {
        var eventFilter, result, res, eventFilter_1, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    eventFilter = {
                        MoveEventType: "".concat(NFT_PACKAGE, "::discount_mint::DiscountEventV3"),
                    };
                    return [4 /*yield*/, provider.queryEvents({ query: eventFilter, order: "descending" })];
                case 1:
                    result = _a.sent();
                    res = result.data.filter(function (d) { return d.parsedJson.vrf_input.toString() == vrf_input.toString(); });
                    if (!(res.length > 0)) return [3 /*break*/, 3];
                    eventFilter_1 = {
                        Transaction: res[0].id.txDigest,
                    };
                    return [4 /*yield*/, provider.queryEvents({ query: eventFilter_1, order: "descending" })];
                case 2:
                    result = _a.sent();
                    // console.log(result);
                    return [2 /*return*/, result];
                case 3: return [2 /*return*/];
            }
        });
    });
}
