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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedBalancePool = exports.BalancePool = exports.BalanceInfo = void 0;
exports.isBalanceInfo = isBalanceInfo;
exports.isBalancePool = isBalancePool;
exports.isSharedBalancePool = isSharedBalancePool;
var reified = __importStar(require("../../../../_framework/reified"));
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var structs_1 = require("../../0x1/type-name/structs");
var structs_2 = require("../../0x2/object/structs");
var structs_3 = require("../authority/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== BalanceInfo =============================== */
function isBalanceInfo(type) { type = (0, util_1.compressSuiType)(type); return type === "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::balance_pool::BalanceInfo"; }
var BalanceInfo = /** @class */ (function () {
    function BalanceInfo(typeArgs, fields) {
        this.$typeName = BalanceInfo.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([BalanceInfo.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.token = fields.token;
        ;
        this.value = fields.value;
    }
    BalanceInfo.reified = function () {
        var _this = this;
        return { typeName: BalanceInfo.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([BalanceInfo.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return BalanceInfo.fromFields(fields); }, fromFieldsWithTypes: function (item) { return BalanceInfo.fromFieldsWithTypes(item); }, fromBcs: function (data) { return BalanceInfo.fromBcs(data); }, bcs: BalanceInfo.bcs, fromJSONField: function (field) { return BalanceInfo.fromJSONField(field); }, fromJSON: function (json) { return BalanceInfo.fromJSON(json); }, fromSuiParsedData: function (content) { return BalanceInfo.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, BalanceInfo.fetch(client, id)];
            }); }); }, new: function (fields) { return new BalanceInfo([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(BalanceInfo, "r", {
        get: function () { return BalanceInfo.reified(); },
        enumerable: false,
        configurable: true
    });
    BalanceInfo.phantom = function () { return (0, reified_1.phantom)(BalanceInfo.reified()); };
    Object.defineProperty(BalanceInfo, "p", {
        get: function () { return BalanceInfo.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BalanceInfo, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("BalanceInfo", {
                token: structs_1.TypeName.bcs, value: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    BalanceInfo.fromFields = function (fields) { return BalanceInfo.reified().new({ token: (0, reified_1.decodeFromFields)(structs_1.TypeName.reified(), fields.token), value: (0, reified_1.decodeFromFields)("u64", fields.value) }); };
    BalanceInfo.fromFieldsWithTypes = function (item) {
        if (!isBalanceInfo(item.type)) {
            throw new Error("not a BalanceInfo type");
        }
        return BalanceInfo.reified().new({ token: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.TypeName.reified(), item.fields.token), value: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.value) });
    };
    BalanceInfo.fromBcs = function (data) { return BalanceInfo.fromFields(BalanceInfo.bcs.parse(data)); };
    BalanceInfo.prototype.toJSONField = function () {
        return {
            token: this.token.toJSONField(), value: this.value.toString(),
        };
    };
    BalanceInfo.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    BalanceInfo.fromJSONField = function (field) { return BalanceInfo.reified().new({ token: (0, reified_1.decodeFromJSONField)(structs_1.TypeName.reified(), field.token), value: (0, reified_1.decodeFromJSONField)("u64", field.value) }); };
    BalanceInfo.fromJSON = function (json) {
        if (json.$typeName !== BalanceInfo.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BalanceInfo.fromJSONField(json);
    };
    BalanceInfo.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBalanceInfo(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a BalanceInfo object"));
    } return BalanceInfo.fromFieldsWithTypes(content); };
    BalanceInfo.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching BalanceInfo object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBalanceInfo(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a BalanceInfo object"));
                        }
                        return [2 /*return*/, BalanceInfo.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    BalanceInfo.$typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::balance_pool::BalanceInfo";
    BalanceInfo.$numTypeParams = 0;
    return BalanceInfo;
}());
exports.BalanceInfo = BalanceInfo;
/* ============================== BalancePool =============================== */
function isBalancePool(type) { type = (0, util_1.compressSuiType)(type); return type === "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::balance_pool::BalancePool"; }
var BalancePool = /** @class */ (function () {
    function BalancePool(typeArgs, fields) {
        this.$typeName = BalancePool.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([BalancePool.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.balanceInfos = fields.balanceInfos;
        ;
        this.authority = fields.authority;
    }
    BalancePool.reified = function () {
        var _this = this;
        return { typeName: BalancePool.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([BalancePool.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return BalancePool.fromFields(fields); }, fromFieldsWithTypes: function (item) { return BalancePool.fromFieldsWithTypes(item); }, fromBcs: function (data) { return BalancePool.fromBcs(data); }, bcs: BalancePool.bcs, fromJSONField: function (field) { return BalancePool.fromJSONField(field); }, fromJSON: function (json) { return BalancePool.fromJSON(json); }, fromSuiParsedData: function (content) { return BalancePool.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, BalancePool.fetch(client, id)];
            }); }); }, new: function (fields) { return new BalancePool([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(BalancePool, "r", {
        get: function () { return BalancePool.reified(); },
        enumerable: false,
        configurable: true
    });
    BalancePool.phantom = function () { return (0, reified_1.phantom)(BalancePool.reified()); };
    Object.defineProperty(BalancePool, "p", {
        get: function () { return BalancePool.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BalancePool, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("BalancePool", {
                id: structs_2.UID.bcs, balance_infos: bcs_1.bcs.vector(BalanceInfo.bcs), authority: structs_3.Authority.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    BalancePool.fromFields = function (fields) { return BalancePool.reified().new({ id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id), balanceInfos: (0, reified_1.decodeFromFields)(reified.vector(BalanceInfo.reified()), fields.balance_infos), authority: (0, reified_1.decodeFromFields)(structs_3.Authority.reified(), fields.authority) }); };
    BalancePool.fromFieldsWithTypes = function (item) {
        if (!isBalancePool(item.type)) {
            throw new Error("not a BalancePool type");
        }
        return BalancePool.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id), balanceInfos: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(BalanceInfo.reified()), item.fields.balance_infos), authority: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.Authority.reified(), item.fields.authority) });
    };
    BalancePool.fromBcs = function (data) { return BalancePool.fromFields(BalancePool.bcs.parse(data)); };
    BalancePool.prototype.toJSONField = function () {
        return {
            id: this.id, balanceInfos: (0, reified_1.fieldToJSON)("vector<0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::balance_pool::BalanceInfo>", this.balanceInfos), authority: this.authority.toJSONField(),
        };
    };
    BalancePool.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    BalancePool.fromJSONField = function (field) { return BalancePool.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id), balanceInfos: (0, reified_1.decodeFromJSONField)(reified.vector(BalanceInfo.reified()), field.balanceInfos), authority: (0, reified_1.decodeFromJSONField)(structs_3.Authority.reified(), field.authority) }); };
    BalancePool.fromJSON = function (json) {
        if (json.$typeName !== BalancePool.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BalancePool.fromJSONField(json);
    };
    BalancePool.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBalancePool(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a BalancePool object"));
    } return BalancePool.fromFieldsWithTypes(content); };
    BalancePool.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching BalancePool object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBalancePool(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a BalancePool object"));
                        }
                        return [2 /*return*/, BalancePool.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    BalancePool.$typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::balance_pool::BalancePool";
    BalancePool.$numTypeParams = 0;
    return BalancePool;
}());
exports.BalancePool = BalancePool;
/* ============================== SharedBalancePool =============================== */
function isSharedBalancePool(type) { type = (0, util_1.compressSuiType)(type); return type === "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::balance_pool::SharedBalancePool"; }
var SharedBalancePool = /** @class */ (function () {
    function SharedBalancePool(typeArgs, fields) {
        this.$typeName = SharedBalancePool.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([SharedBalancePool.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.balanceInfos = fields.balanceInfos;
        ;
        this.authority = fields.authority;
    }
    SharedBalancePool.reified = function () {
        var _this = this;
        return { typeName: SharedBalancePool.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([SharedBalancePool.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return SharedBalancePool.fromFields(fields); }, fromFieldsWithTypes: function (item) { return SharedBalancePool.fromFieldsWithTypes(item); }, fromBcs: function (data) { return SharedBalancePool.fromBcs(data); }, bcs: SharedBalancePool.bcs, fromJSONField: function (field) { return SharedBalancePool.fromJSONField(field); }, fromJSON: function (json) { return SharedBalancePool.fromJSON(json); }, fromSuiParsedData: function (content) { return SharedBalancePool.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, SharedBalancePool.fetch(client, id)];
            }); }); }, new: function (fields) { return new SharedBalancePool([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(SharedBalancePool, "r", {
        get: function () { return SharedBalancePool.reified(); },
        enumerable: false,
        configurable: true
    });
    SharedBalancePool.phantom = function () { return (0, reified_1.phantom)(SharedBalancePool.reified()); };
    Object.defineProperty(SharedBalancePool, "p", {
        get: function () { return SharedBalancePool.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SharedBalancePool, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("SharedBalancePool", {
                id: structs_2.UID.bcs, balance_infos: bcs_1.bcs.vector(BalanceInfo.bcs), authority: structs_3.Authority.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    SharedBalancePool.fromFields = function (fields) { return SharedBalancePool.reified().new({ id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id), balanceInfos: (0, reified_1.decodeFromFields)(reified.vector(BalanceInfo.reified()), fields.balance_infos), authority: (0, reified_1.decodeFromFields)(structs_3.Authority.reified(), fields.authority) }); };
    SharedBalancePool.fromFieldsWithTypes = function (item) {
        if (!isSharedBalancePool(item.type)) {
            throw new Error("not a SharedBalancePool type");
        }
        return SharedBalancePool.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id), balanceInfos: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(BalanceInfo.reified()), item.fields.balance_infos), authority: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.Authority.reified(), item.fields.authority) });
    };
    SharedBalancePool.fromBcs = function (data) { return SharedBalancePool.fromFields(SharedBalancePool.bcs.parse(data)); };
    SharedBalancePool.prototype.toJSONField = function () {
        return {
            id: this.id, balanceInfos: (0, reified_1.fieldToJSON)("vector<0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::balance_pool::BalanceInfo>", this.balanceInfos), authority: this.authority.toJSONField(),
        };
    };
    SharedBalancePool.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    SharedBalancePool.fromJSONField = function (field) { return SharedBalancePool.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id), balanceInfos: (0, reified_1.decodeFromJSONField)(reified.vector(BalanceInfo.reified()), field.balanceInfos), authority: (0, reified_1.decodeFromJSONField)(structs_3.Authority.reified(), field.authority) }); };
    SharedBalancePool.fromJSON = function (json) {
        if (json.$typeName !== SharedBalancePool.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return SharedBalancePool.fromJSONField(json);
    };
    SharedBalancePool.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isSharedBalancePool(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a SharedBalancePool object"));
    } return SharedBalancePool.fromFieldsWithTypes(content); };
    SharedBalancePool.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching SharedBalancePool object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isSharedBalancePool(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a SharedBalancePool object"));
                        }
                        return [2 /*return*/, SharedBalancePool.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    SharedBalancePool.$typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::balance_pool::SharedBalancePool";
    SharedBalancePool.$numTypeParams = 0;
    return SharedBalancePool;
}());
exports.SharedBalancePool = SharedBalancePool;
