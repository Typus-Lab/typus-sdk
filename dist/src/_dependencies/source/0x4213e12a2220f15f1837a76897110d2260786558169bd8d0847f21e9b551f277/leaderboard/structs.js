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
exports.TypusLeaderboardRegistry = exports.ScoreEvent = exports.RemoveLeaderboardEvent = exports.Leaderboard = exports.ExtendLeaderboardEvent = exports.DeactivateLeaderboardEvent = exports.ActivateLeaderboardEvent = void 0;
exports.isActivateLeaderboardEvent = isActivateLeaderboardEvent;
exports.isDeactivateLeaderboardEvent = isDeactivateLeaderboardEvent;
exports.isExtendLeaderboardEvent = isExtendLeaderboardEvent;
exports.isLeaderboard = isLeaderboard;
exports.isRemoveLeaderboardEvent = isRemoveLeaderboardEvent;
exports.isScoreEvent = isScoreEvent;
exports.isTypusLeaderboardRegistry = isTypusLeaderboardRegistry;
var reified = __importStar(require("../../../../_framework/reified"));
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var structs_1 = require("../../0x1/ascii/structs");
var structs_2 = require("../../0x2/object/structs");
var structs_3 = require("../../0x2/table/structs");
var structs_4 = require("../critbit/structs");
var structs_5 = require("../linked-set/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== ActivateLeaderboardEvent =============================== */
function isActivateLeaderboardEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::leaderboard::ActivateLeaderboardEvent"; }
var ActivateLeaderboardEvent = /** @class */ (function () {
    function ActivateLeaderboardEvent(typeArgs, fields) {
        this.$typeName = ActivateLeaderboardEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([ActivateLeaderboardEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.key = fields.key;
        ;
        this.id = fields.id;
        ;
        this.log = fields.log;
        ;
        this.bcsPadding = fields.bcsPadding;
    }
    ActivateLeaderboardEvent.reified = function () {
        var _this = this;
        return { typeName: ActivateLeaderboardEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([ActivateLeaderboardEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return ActivateLeaderboardEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return ActivateLeaderboardEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return ActivateLeaderboardEvent.fromBcs(data); }, bcs: ActivateLeaderboardEvent.bcs, fromJSONField: function (field) { return ActivateLeaderboardEvent.fromJSONField(field); }, fromJSON: function (json) { return ActivateLeaderboardEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return ActivateLeaderboardEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, ActivateLeaderboardEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new ActivateLeaderboardEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(ActivateLeaderboardEvent, "r", {
        get: function () { return ActivateLeaderboardEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    ActivateLeaderboardEvent.phantom = function () { return (0, reified_1.phantom)(ActivateLeaderboardEvent.reified()); };
    Object.defineProperty(ActivateLeaderboardEvent, "p", {
        get: function () { return ActivateLeaderboardEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActivateLeaderboardEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("ActivateLeaderboardEvent", {
                key: structs_1.String.bcs, id: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), log: bcs_1.bcs.vector(bcs_1.bcs.u64()), bcs_padding: bcs_1.bcs.vector(bcs_1.bcs.vector(bcs_1.bcs.u8()))
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    ActivateLeaderboardEvent.fromFields = function (fields) { return ActivateLeaderboardEvent.reified().new({ key: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.key), id: (0, reified_1.decodeFromFields)("address", fields.id), log: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.log), bcsPadding: (0, reified_1.decodeFromFields)(reified.vector(reified.vector("u8")), fields.bcs_padding) }); };
    ActivateLeaderboardEvent.fromFieldsWithTypes = function (item) {
        if (!isActivateLeaderboardEvent(item.type)) {
            throw new Error("not a ActivateLeaderboardEvent type");
        }
        return ActivateLeaderboardEvent.reified().new({ key: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.key), id: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.id), log: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.log), bcsPadding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(reified.vector("u8")), item.fields.bcs_padding) });
    };
    ActivateLeaderboardEvent.fromBcs = function (data) { return ActivateLeaderboardEvent.fromFields(ActivateLeaderboardEvent.bcs.parse(data)); };
    ActivateLeaderboardEvent.prototype.toJSONField = function () {
        return {
            key: this.key, id: this.id, log: (0, reified_1.fieldToJSON)("vector<u64>", this.log), bcsPadding: (0, reified_1.fieldToJSON)("vector<vector<u8>>", this.bcsPadding),
        };
    };
    ActivateLeaderboardEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    ActivateLeaderboardEvent.fromJSONField = function (field) { return ActivateLeaderboardEvent.reified().new({ key: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.key), id: (0, reified_1.decodeFromJSONField)("address", field.id), log: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.log), bcsPadding: (0, reified_1.decodeFromJSONField)(reified.vector(reified.vector("u8")), field.bcsPadding) }); };
    ActivateLeaderboardEvent.fromJSON = function (json) {
        if (json.$typeName !== ActivateLeaderboardEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ActivateLeaderboardEvent.fromJSONField(json);
    };
    ActivateLeaderboardEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isActivateLeaderboardEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a ActivateLeaderboardEvent object"));
    } return ActivateLeaderboardEvent.fromFieldsWithTypes(content); };
    ActivateLeaderboardEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching ActivateLeaderboardEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isActivateLeaderboardEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a ActivateLeaderboardEvent object"));
                        }
                        return [2 /*return*/, ActivateLeaderboardEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    ActivateLeaderboardEvent.$typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::leaderboard::ActivateLeaderboardEvent";
    ActivateLeaderboardEvent.$numTypeParams = 0;
    return ActivateLeaderboardEvent;
}());
exports.ActivateLeaderboardEvent = ActivateLeaderboardEvent;
/* ============================== DeactivateLeaderboardEvent =============================== */
function isDeactivateLeaderboardEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::leaderboard::DeactivateLeaderboardEvent"; }
var DeactivateLeaderboardEvent = /** @class */ (function () {
    function DeactivateLeaderboardEvent(typeArgs, fields) {
        this.$typeName = DeactivateLeaderboardEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([DeactivateLeaderboardEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.key = fields.key;
        ;
        this.id = fields.id;
        ;
        this.log = fields.log;
        ;
        this.bcsPadding = fields.bcsPadding;
    }
    DeactivateLeaderboardEvent.reified = function () {
        var _this = this;
        return { typeName: DeactivateLeaderboardEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([DeactivateLeaderboardEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return DeactivateLeaderboardEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return DeactivateLeaderboardEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return DeactivateLeaderboardEvent.fromBcs(data); }, bcs: DeactivateLeaderboardEvent.bcs, fromJSONField: function (field) { return DeactivateLeaderboardEvent.fromJSONField(field); }, fromJSON: function (json) { return DeactivateLeaderboardEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return DeactivateLeaderboardEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, DeactivateLeaderboardEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new DeactivateLeaderboardEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(DeactivateLeaderboardEvent, "r", {
        get: function () { return DeactivateLeaderboardEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    DeactivateLeaderboardEvent.phantom = function () { return (0, reified_1.phantom)(DeactivateLeaderboardEvent.reified()); };
    Object.defineProperty(DeactivateLeaderboardEvent, "p", {
        get: function () { return DeactivateLeaderboardEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeactivateLeaderboardEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("DeactivateLeaderboardEvent", {
                key: structs_1.String.bcs, id: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), log: bcs_1.bcs.vector(bcs_1.bcs.u64()), bcs_padding: bcs_1.bcs.vector(bcs_1.bcs.vector(bcs_1.bcs.u8()))
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    DeactivateLeaderboardEvent.fromFields = function (fields) { return DeactivateLeaderboardEvent.reified().new({ key: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.key), id: (0, reified_1.decodeFromFields)("address", fields.id), log: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.log), bcsPadding: (0, reified_1.decodeFromFields)(reified.vector(reified.vector("u8")), fields.bcs_padding) }); };
    DeactivateLeaderboardEvent.fromFieldsWithTypes = function (item) {
        if (!isDeactivateLeaderboardEvent(item.type)) {
            throw new Error("not a DeactivateLeaderboardEvent type");
        }
        return DeactivateLeaderboardEvent.reified().new({ key: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.key), id: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.id), log: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.log), bcsPadding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(reified.vector("u8")), item.fields.bcs_padding) });
    };
    DeactivateLeaderboardEvent.fromBcs = function (data) { return DeactivateLeaderboardEvent.fromFields(DeactivateLeaderboardEvent.bcs.parse(data)); };
    DeactivateLeaderboardEvent.prototype.toJSONField = function () {
        return {
            key: this.key, id: this.id, log: (0, reified_1.fieldToJSON)("vector<u64>", this.log), bcsPadding: (0, reified_1.fieldToJSON)("vector<vector<u8>>", this.bcsPadding),
        };
    };
    DeactivateLeaderboardEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    DeactivateLeaderboardEvent.fromJSONField = function (field) { return DeactivateLeaderboardEvent.reified().new({ key: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.key), id: (0, reified_1.decodeFromJSONField)("address", field.id), log: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.log), bcsPadding: (0, reified_1.decodeFromJSONField)(reified.vector(reified.vector("u8")), field.bcsPadding) }); };
    DeactivateLeaderboardEvent.fromJSON = function (json) {
        if (json.$typeName !== DeactivateLeaderboardEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return DeactivateLeaderboardEvent.fromJSONField(json);
    };
    DeactivateLeaderboardEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDeactivateLeaderboardEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a DeactivateLeaderboardEvent object"));
    } return DeactivateLeaderboardEvent.fromFieldsWithTypes(content); };
    DeactivateLeaderboardEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching DeactivateLeaderboardEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDeactivateLeaderboardEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a DeactivateLeaderboardEvent object"));
                        }
                        return [2 /*return*/, DeactivateLeaderboardEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    DeactivateLeaderboardEvent.$typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::leaderboard::DeactivateLeaderboardEvent";
    DeactivateLeaderboardEvent.$numTypeParams = 0;
    return DeactivateLeaderboardEvent;
}());
exports.DeactivateLeaderboardEvent = DeactivateLeaderboardEvent;
/* ============================== ExtendLeaderboardEvent =============================== */
function isExtendLeaderboardEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x9ae906bfba335c86e93498f8016c06943865bc81e2da82f7e25b6d0b32d31e44::leaderboard::ExtendLeaderboardEvent"; }
var ExtendLeaderboardEvent = /** @class */ (function () {
    function ExtendLeaderboardEvent(typeArgs, fields) {
        this.$typeName = ExtendLeaderboardEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([ExtendLeaderboardEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.key = fields.key;
        ;
        this.id = fields.id;
        ;
        this.log = fields.log;
        ;
        this.bcsPadding = fields.bcsPadding;
    }
    ExtendLeaderboardEvent.reified = function () {
        var _this = this;
        return { typeName: ExtendLeaderboardEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([ExtendLeaderboardEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return ExtendLeaderboardEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return ExtendLeaderboardEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return ExtendLeaderboardEvent.fromBcs(data); }, bcs: ExtendLeaderboardEvent.bcs, fromJSONField: function (field) { return ExtendLeaderboardEvent.fromJSONField(field); }, fromJSON: function (json) { return ExtendLeaderboardEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return ExtendLeaderboardEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, ExtendLeaderboardEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new ExtendLeaderboardEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(ExtendLeaderboardEvent, "r", {
        get: function () { return ExtendLeaderboardEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    ExtendLeaderboardEvent.phantom = function () { return (0, reified_1.phantom)(ExtendLeaderboardEvent.reified()); };
    Object.defineProperty(ExtendLeaderboardEvent, "p", {
        get: function () { return ExtendLeaderboardEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendLeaderboardEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("ExtendLeaderboardEvent", {
                key: structs_1.String.bcs, id: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), log: bcs_1.bcs.vector(bcs_1.bcs.u64()), bcs_padding: bcs_1.bcs.vector(bcs_1.bcs.vector(bcs_1.bcs.u8()))
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    ExtendLeaderboardEvent.fromFields = function (fields) { return ExtendLeaderboardEvent.reified().new({ key: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.key), id: (0, reified_1.decodeFromFields)("address", fields.id), log: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.log), bcsPadding: (0, reified_1.decodeFromFields)(reified.vector(reified.vector("u8")), fields.bcs_padding) }); };
    ExtendLeaderboardEvent.fromFieldsWithTypes = function (item) {
        if (!isExtendLeaderboardEvent(item.type)) {
            throw new Error("not a ExtendLeaderboardEvent type");
        }
        return ExtendLeaderboardEvent.reified().new({ key: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.key), id: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.id), log: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.log), bcsPadding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(reified.vector("u8")), item.fields.bcs_padding) });
    };
    ExtendLeaderboardEvent.fromBcs = function (data) { return ExtendLeaderboardEvent.fromFields(ExtendLeaderboardEvent.bcs.parse(data)); };
    ExtendLeaderboardEvent.prototype.toJSONField = function () {
        return {
            key: this.key, id: this.id, log: (0, reified_1.fieldToJSON)("vector<u64>", this.log), bcsPadding: (0, reified_1.fieldToJSON)("vector<vector<u8>>", this.bcsPadding),
        };
    };
    ExtendLeaderboardEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    ExtendLeaderboardEvent.fromJSONField = function (field) { return ExtendLeaderboardEvent.reified().new({ key: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.key), id: (0, reified_1.decodeFromJSONField)("address", field.id), log: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.log), bcsPadding: (0, reified_1.decodeFromJSONField)(reified.vector(reified.vector("u8")), field.bcsPadding) }); };
    ExtendLeaderboardEvent.fromJSON = function (json) {
        if (json.$typeName !== ExtendLeaderboardEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ExtendLeaderboardEvent.fromJSONField(json);
    };
    ExtendLeaderboardEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isExtendLeaderboardEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a ExtendLeaderboardEvent object"));
    } return ExtendLeaderboardEvent.fromFieldsWithTypes(content); };
    ExtendLeaderboardEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching ExtendLeaderboardEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isExtendLeaderboardEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a ExtendLeaderboardEvent object"));
                        }
                        return [2 /*return*/, ExtendLeaderboardEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    ExtendLeaderboardEvent.$typeName = "0x9ae906bfba335c86e93498f8016c06943865bc81e2da82f7e25b6d0b32d31e44::leaderboard::ExtendLeaderboardEvent";
    ExtendLeaderboardEvent.$numTypeParams = 0;
    return ExtendLeaderboardEvent;
}());
exports.ExtendLeaderboardEvent = ExtendLeaderboardEvent;
/* ============================== Leaderboard =============================== */
function isLeaderboard(type) { type = (0, util_1.compressSuiType)(type); return type === "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::leaderboard::Leaderboard"; }
var Leaderboard = /** @class */ (function () {
    function Leaderboard(typeArgs, fields) {
        this.$typeName = Leaderboard.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Leaderboard.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.startTsMs = fields.startTsMs;
        ;
        this.endTsMs = fields.endTsMs;
        ;
        this.score = fields.score;
        ;
        this.ranking = fields.ranking;
    }
    Leaderboard.reified = function () {
        var _this = this;
        return { typeName: Leaderboard.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Leaderboard.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return Leaderboard.fromFields(fields); }, fromFieldsWithTypes: function (item) { return Leaderboard.fromFieldsWithTypes(item); }, fromBcs: function (data) { return Leaderboard.fromBcs(data); }, bcs: Leaderboard.bcs, fromJSONField: function (field) { return Leaderboard.fromJSONField(field); }, fromJSON: function (json) { return Leaderboard.fromJSON(json); }, fromSuiParsedData: function (content) { return Leaderboard.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Leaderboard.fetch(client, id)];
            }); }); }, new: function (fields) { return new Leaderboard([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Leaderboard, "r", {
        get: function () { return Leaderboard.reified(); },
        enumerable: false,
        configurable: true
    });
    Leaderboard.phantom = function () { return (0, reified_1.phantom)(Leaderboard.reified()); };
    Object.defineProperty(Leaderboard, "p", {
        get: function () { return Leaderboard.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Leaderboard, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Leaderboard", {
                id: structs_2.UID.bcs, start_ts_ms: bcs_1.bcs.u64(), end_ts_ms: bcs_1.bcs.u64(), score: structs_3.Table.bcs, ranking: structs_4.CritbitTree.bcs(structs_5.LinkedSet.bcs(bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, })))
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Leaderboard.fromFields = function (fields) { return Leaderboard.reified().new({ id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id), startTsMs: (0, reified_1.decodeFromFields)("u64", fields.start_ts_ms), endTsMs: (0, reified_1.decodeFromFields)("u64", fields.end_ts_ms), score: (0, reified_1.decodeFromFields)(structs_3.Table.reified(reified.phantom("address"), reified.phantom("u64")), fields.score), ranking: (0, reified_1.decodeFromFields)(structs_4.CritbitTree.reified(structs_5.LinkedSet.reified("address")), fields.ranking) }); };
    Leaderboard.fromFieldsWithTypes = function (item) {
        if (!isLeaderboard(item.type)) {
            throw new Error("not a Leaderboard type");
        }
        return Leaderboard.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id), startTsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.start_ts_ms), endTsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.end_ts_ms), score: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.Table.reified(reified.phantom("address"), reified.phantom("u64")), item.fields.score), ranking: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.CritbitTree.reified(structs_5.LinkedSet.reified("address")), item.fields.ranking) });
    };
    Leaderboard.fromBcs = function (data) { return Leaderboard.fromFields(Leaderboard.bcs.parse(data)); };
    Leaderboard.prototype.toJSONField = function () {
        return {
            id: this.id, startTsMs: this.startTsMs.toString(), endTsMs: this.endTsMs.toString(), score: this.score.toJSONField(), ranking: this.ranking.toJSONField(),
        };
    };
    Leaderboard.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Leaderboard.fromJSONField = function (field) { return Leaderboard.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id), startTsMs: (0, reified_1.decodeFromJSONField)("u64", field.startTsMs), endTsMs: (0, reified_1.decodeFromJSONField)("u64", field.endTsMs), score: (0, reified_1.decodeFromJSONField)(structs_3.Table.reified(reified.phantom("address"), reified.phantom("u64")), field.score), ranking: (0, reified_1.decodeFromJSONField)(structs_4.CritbitTree.reified(structs_5.LinkedSet.reified("address")), field.ranking) }); };
    Leaderboard.fromJSON = function (json) {
        if (json.$typeName !== Leaderboard.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Leaderboard.fromJSONField(json);
    };
    Leaderboard.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isLeaderboard(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Leaderboard object"));
    } return Leaderboard.fromFieldsWithTypes(content); };
    Leaderboard.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Leaderboard object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isLeaderboard(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Leaderboard object"));
                        }
                        return [2 /*return*/, Leaderboard.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Leaderboard.$typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::leaderboard::Leaderboard";
    Leaderboard.$numTypeParams = 0;
    return Leaderboard;
}());
exports.Leaderboard = Leaderboard;
/* ============================== RemoveLeaderboardEvent =============================== */
function isRemoveLeaderboardEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::leaderboard::RemoveLeaderboardEvent"; }
var RemoveLeaderboardEvent = /** @class */ (function () {
    function RemoveLeaderboardEvent(typeArgs, fields) {
        this.$typeName = RemoveLeaderboardEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([RemoveLeaderboardEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.key = fields.key;
        ;
        this.id = fields.id;
        ;
        this.log = fields.log;
        ;
        this.bcsPadding = fields.bcsPadding;
    }
    RemoveLeaderboardEvent.reified = function () {
        var _this = this;
        return { typeName: RemoveLeaderboardEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([RemoveLeaderboardEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return RemoveLeaderboardEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return RemoveLeaderboardEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return RemoveLeaderboardEvent.fromBcs(data); }, bcs: RemoveLeaderboardEvent.bcs, fromJSONField: function (field) { return RemoveLeaderboardEvent.fromJSONField(field); }, fromJSON: function (json) { return RemoveLeaderboardEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return RemoveLeaderboardEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, RemoveLeaderboardEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new RemoveLeaderboardEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(RemoveLeaderboardEvent, "r", {
        get: function () { return RemoveLeaderboardEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    RemoveLeaderboardEvent.phantom = function () { return (0, reified_1.phantom)(RemoveLeaderboardEvent.reified()); };
    Object.defineProperty(RemoveLeaderboardEvent, "p", {
        get: function () { return RemoveLeaderboardEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RemoveLeaderboardEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("RemoveLeaderboardEvent", {
                key: structs_1.String.bcs, id: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), log: bcs_1.bcs.vector(bcs_1.bcs.u64()), bcs_padding: bcs_1.bcs.vector(bcs_1.bcs.vector(bcs_1.bcs.u8()))
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    RemoveLeaderboardEvent.fromFields = function (fields) { return RemoveLeaderboardEvent.reified().new({ key: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.key), id: (0, reified_1.decodeFromFields)("address", fields.id), log: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.log), bcsPadding: (0, reified_1.decodeFromFields)(reified.vector(reified.vector("u8")), fields.bcs_padding) }); };
    RemoveLeaderboardEvent.fromFieldsWithTypes = function (item) {
        if (!isRemoveLeaderboardEvent(item.type)) {
            throw new Error("not a RemoveLeaderboardEvent type");
        }
        return RemoveLeaderboardEvent.reified().new({ key: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.key), id: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.id), log: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.log), bcsPadding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(reified.vector("u8")), item.fields.bcs_padding) });
    };
    RemoveLeaderboardEvent.fromBcs = function (data) { return RemoveLeaderboardEvent.fromFields(RemoveLeaderboardEvent.bcs.parse(data)); };
    RemoveLeaderboardEvent.prototype.toJSONField = function () {
        return {
            key: this.key, id: this.id, log: (0, reified_1.fieldToJSON)("vector<u64>", this.log), bcsPadding: (0, reified_1.fieldToJSON)("vector<vector<u8>>", this.bcsPadding),
        };
    };
    RemoveLeaderboardEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    RemoveLeaderboardEvent.fromJSONField = function (field) { return RemoveLeaderboardEvent.reified().new({ key: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.key), id: (0, reified_1.decodeFromJSONField)("address", field.id), log: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.log), bcsPadding: (0, reified_1.decodeFromJSONField)(reified.vector(reified.vector("u8")), field.bcsPadding) }); };
    RemoveLeaderboardEvent.fromJSON = function (json) {
        if (json.$typeName !== RemoveLeaderboardEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return RemoveLeaderboardEvent.fromJSONField(json);
    };
    RemoveLeaderboardEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isRemoveLeaderboardEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a RemoveLeaderboardEvent object"));
    } return RemoveLeaderboardEvent.fromFieldsWithTypes(content); };
    RemoveLeaderboardEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching RemoveLeaderboardEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRemoveLeaderboardEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a RemoveLeaderboardEvent object"));
                        }
                        return [2 /*return*/, RemoveLeaderboardEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    RemoveLeaderboardEvent.$typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::leaderboard::RemoveLeaderboardEvent";
    RemoveLeaderboardEvent.$numTypeParams = 0;
    return RemoveLeaderboardEvent;
}());
exports.RemoveLeaderboardEvent = RemoveLeaderboardEvent;
/* ============================== ScoreEvent =============================== */
function isScoreEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::leaderboard::ScoreEvent"; }
var ScoreEvent = /** @class */ (function () {
    function ScoreEvent(typeArgs, fields) {
        this.$typeName = ScoreEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([ScoreEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.key = fields.key;
        ;
        this.id = fields.id;
        ;
        this.user = fields.user;
        ;
        this.log = fields.log;
        ;
        this.bcsPadding = fields.bcsPadding;
    }
    ScoreEvent.reified = function () {
        var _this = this;
        return { typeName: ScoreEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([ScoreEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return ScoreEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return ScoreEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return ScoreEvent.fromBcs(data); }, bcs: ScoreEvent.bcs, fromJSONField: function (field) { return ScoreEvent.fromJSONField(field); }, fromJSON: function (json) { return ScoreEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return ScoreEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, ScoreEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new ScoreEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(ScoreEvent, "r", {
        get: function () { return ScoreEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    ScoreEvent.phantom = function () { return (0, reified_1.phantom)(ScoreEvent.reified()); };
    Object.defineProperty(ScoreEvent, "p", {
        get: function () { return ScoreEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ScoreEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("ScoreEvent", {
                key: structs_1.String.bcs, id: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), user: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), log: bcs_1.bcs.vector(bcs_1.bcs.u64()), bcs_padding: bcs_1.bcs.vector(bcs_1.bcs.vector(bcs_1.bcs.u8()))
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    ScoreEvent.fromFields = function (fields) { return ScoreEvent.reified().new({ key: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.key), id: (0, reified_1.decodeFromFields)("address", fields.id), user: (0, reified_1.decodeFromFields)("address", fields.user), log: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.log), bcsPadding: (0, reified_1.decodeFromFields)(reified.vector(reified.vector("u8")), fields.bcs_padding) }); };
    ScoreEvent.fromFieldsWithTypes = function (item) {
        if (!isScoreEvent(item.type)) {
            throw new Error("not a ScoreEvent type");
        }
        return ScoreEvent.reified().new({ key: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.key), id: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.id), user: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.user), log: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.log), bcsPadding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(reified.vector("u8")), item.fields.bcs_padding) });
    };
    ScoreEvent.fromBcs = function (data) { return ScoreEvent.fromFields(ScoreEvent.bcs.parse(data)); };
    ScoreEvent.prototype.toJSONField = function () {
        return {
            key: this.key, id: this.id, user: this.user, log: (0, reified_1.fieldToJSON)("vector<u64>", this.log), bcsPadding: (0, reified_1.fieldToJSON)("vector<vector<u8>>", this.bcsPadding),
        };
    };
    ScoreEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    ScoreEvent.fromJSONField = function (field) { return ScoreEvent.reified().new({ key: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.key), id: (0, reified_1.decodeFromJSONField)("address", field.id), user: (0, reified_1.decodeFromJSONField)("address", field.user), log: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.log), bcsPadding: (0, reified_1.decodeFromJSONField)(reified.vector(reified.vector("u8")), field.bcsPadding) }); };
    ScoreEvent.fromJSON = function (json) {
        if (json.$typeName !== ScoreEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ScoreEvent.fromJSONField(json);
    };
    ScoreEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isScoreEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a ScoreEvent object"));
    } return ScoreEvent.fromFieldsWithTypes(content); };
    ScoreEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching ScoreEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isScoreEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a ScoreEvent object"));
                        }
                        return [2 /*return*/, ScoreEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    ScoreEvent.$typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::leaderboard::ScoreEvent";
    ScoreEvent.$numTypeParams = 0;
    return ScoreEvent;
}());
exports.ScoreEvent = ScoreEvent;
/* ============================== TypusLeaderboardRegistry =============================== */
function isTypusLeaderboardRegistry(type) { type = (0, util_1.compressSuiType)(type); return type === "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::leaderboard::TypusLeaderboardRegistry"; }
var TypusLeaderboardRegistry = /** @class */ (function () {
    function TypusLeaderboardRegistry(typeArgs, fields) {
        this.$typeName = TypusLeaderboardRegistry.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([TypusLeaderboardRegistry.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.activeLeaderboardRegistry = fields.activeLeaderboardRegistry;
        ;
        this.inactiveLeaderboardRegistry = fields.inactiveLeaderboardRegistry;
    }
    TypusLeaderboardRegistry.reified = function () {
        var _this = this;
        return { typeName: TypusLeaderboardRegistry.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([TypusLeaderboardRegistry.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return TypusLeaderboardRegistry.fromFields(fields); }, fromFieldsWithTypes: function (item) { return TypusLeaderboardRegistry.fromFieldsWithTypes(item); }, fromBcs: function (data) { return TypusLeaderboardRegistry.fromBcs(data); }, bcs: TypusLeaderboardRegistry.bcs, fromJSONField: function (field) { return TypusLeaderboardRegistry.fromJSONField(field); }, fromJSON: function (json) { return TypusLeaderboardRegistry.fromJSON(json); }, fromSuiParsedData: function (content) { return TypusLeaderboardRegistry.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, TypusLeaderboardRegistry.fetch(client, id)];
            }); }); }, new: function (fields) { return new TypusLeaderboardRegistry([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(TypusLeaderboardRegistry, "r", {
        get: function () { return TypusLeaderboardRegistry.reified(); },
        enumerable: false,
        configurable: true
    });
    TypusLeaderboardRegistry.phantom = function () { return (0, reified_1.phantom)(TypusLeaderboardRegistry.reified()); };
    Object.defineProperty(TypusLeaderboardRegistry, "p", {
        get: function () { return TypusLeaderboardRegistry.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TypusLeaderboardRegistry, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("TypusLeaderboardRegistry", {
                id: structs_2.UID.bcs, active_leaderboard_registry: structs_2.UID.bcs, inactive_leaderboard_registry: structs_2.UID.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    TypusLeaderboardRegistry.fromFields = function (fields) { return TypusLeaderboardRegistry.reified().new({ id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id), activeLeaderboardRegistry: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.active_leaderboard_registry), inactiveLeaderboardRegistry: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.inactive_leaderboard_registry) }); };
    TypusLeaderboardRegistry.fromFieldsWithTypes = function (item) {
        if (!isTypusLeaderboardRegistry(item.type)) {
            throw new Error("not a TypusLeaderboardRegistry type");
        }
        return TypusLeaderboardRegistry.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id), activeLeaderboardRegistry: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.active_leaderboard_registry), inactiveLeaderboardRegistry: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.inactive_leaderboard_registry) });
    };
    TypusLeaderboardRegistry.fromBcs = function (data) { return TypusLeaderboardRegistry.fromFields(TypusLeaderboardRegistry.bcs.parse(data)); };
    TypusLeaderboardRegistry.prototype.toJSONField = function () {
        return {
            id: this.id, activeLeaderboardRegistry: this.activeLeaderboardRegistry, inactiveLeaderboardRegistry: this.inactiveLeaderboardRegistry,
        };
    };
    TypusLeaderboardRegistry.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    TypusLeaderboardRegistry.fromJSONField = function (field) { return TypusLeaderboardRegistry.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id), activeLeaderboardRegistry: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.activeLeaderboardRegistry), inactiveLeaderboardRegistry: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.inactiveLeaderboardRegistry) }); };
    TypusLeaderboardRegistry.fromJSON = function (json) {
        if (json.$typeName !== TypusLeaderboardRegistry.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return TypusLeaderboardRegistry.fromJSONField(json);
    };
    TypusLeaderboardRegistry.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTypusLeaderboardRegistry(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a TypusLeaderboardRegistry object"));
    } return TypusLeaderboardRegistry.fromFieldsWithTypes(content); };
    TypusLeaderboardRegistry.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching TypusLeaderboardRegistry object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTypusLeaderboardRegistry(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a TypusLeaderboardRegistry object"));
                        }
                        return [2 /*return*/, TypusLeaderboardRegistry.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    TypusLeaderboardRegistry.$typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::leaderboard::TypusLeaderboardRegistry";
    TypusLeaderboardRegistry.$numTypeParams = 0;
    return TypusLeaderboardRegistry;
}());
exports.TypusLeaderboardRegistry = TypusLeaderboardRegistry;
