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
exports.TgldRegistry = exports.TGLD = exports.MintEvent = exports.BurnEvent = void 0;
exports.isBurnEvent = isBurnEvent;
exports.isMintEvent = isMintEvent;
exports.isTGLD = isTGLD;
exports.isTgldRegistry = isTgldRegistry;
var reified = __importStar(require("../../../../_framework/reified"));
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var structs_1 = require("../../0x2/coin/structs");
var structs_2 = require("../../0x2/object/structs");
var structs_3 = require("../../0x2/token/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== BurnEvent =============================== */
function isBurnEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::tgld::BurnEvent"; }
var BurnEvent = /** @class */ (function () {
    function BurnEvent(typeArgs, fields) {
        this.$typeName = BurnEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([BurnEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.log = fields.log;
        ;
        this.bcsPadding = fields.bcsPadding;
    }
    BurnEvent.reified = function () {
        var _this = this;
        return { typeName: BurnEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([BurnEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return BurnEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return BurnEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return BurnEvent.fromBcs(data); }, bcs: BurnEvent.bcs, fromJSONField: function (field) { return BurnEvent.fromJSONField(field); }, fromJSON: function (json) { return BurnEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return BurnEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, BurnEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new BurnEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(BurnEvent, "r", {
        get: function () { return BurnEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    BurnEvent.phantom = function () { return (0, reified_1.phantom)(BurnEvent.reified()); };
    Object.defineProperty(BurnEvent, "p", {
        get: function () { return BurnEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BurnEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("BurnEvent", {
                log: bcs_1.bcs.vector(bcs_1.bcs.u64()), bcs_padding: bcs_1.bcs.vector(bcs_1.bcs.vector(bcs_1.bcs.u8()))
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    BurnEvent.fromFields = function (fields) { return BurnEvent.reified().new({ log: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.log), bcsPadding: (0, reified_1.decodeFromFields)(reified.vector(reified.vector("u8")), fields.bcs_padding) }); };
    BurnEvent.fromFieldsWithTypes = function (item) {
        if (!isBurnEvent(item.type)) {
            throw new Error("not a BurnEvent type");
        }
        return BurnEvent.reified().new({ log: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.log), bcsPadding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(reified.vector("u8")), item.fields.bcs_padding) });
    };
    BurnEvent.fromBcs = function (data) { return BurnEvent.fromFields(BurnEvent.bcs.parse(data)); };
    BurnEvent.prototype.toJSONField = function () {
        return {
            log: (0, reified_1.fieldToJSON)("vector<u64>", this.log), bcsPadding: (0, reified_1.fieldToJSON)("vector<vector<u8>>", this.bcsPadding),
        };
    };
    BurnEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    BurnEvent.fromJSONField = function (field) { return BurnEvent.reified().new({ log: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.log), bcsPadding: (0, reified_1.decodeFromJSONField)(reified.vector(reified.vector("u8")), field.bcsPadding) }); };
    BurnEvent.fromJSON = function (json) {
        if (json.$typeName !== BurnEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BurnEvent.fromJSONField(json);
    };
    BurnEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBurnEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a BurnEvent object"));
    } return BurnEvent.fromFieldsWithTypes(content); };
    BurnEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching BurnEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBurnEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a BurnEvent object"));
                        }
                        return [2 /*return*/, BurnEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    BurnEvent.$typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::tgld::BurnEvent";
    BurnEvent.$numTypeParams = 0;
    return BurnEvent;
}());
exports.BurnEvent = BurnEvent;
/* ============================== MintEvent =============================== */
function isMintEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::tgld::MintEvent"; }
var MintEvent = /** @class */ (function () {
    function MintEvent(typeArgs, fields) {
        this.$typeName = MintEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([MintEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.recipient = fields.recipient;
        ;
        this.log = fields.log;
        ;
        this.bcsPadding = fields.bcsPadding;
    }
    MintEvent.reified = function () {
        var _this = this;
        return { typeName: MintEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([MintEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return MintEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return MintEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return MintEvent.fromBcs(data); }, bcs: MintEvent.bcs, fromJSONField: function (field) { return MintEvent.fromJSONField(field); }, fromJSON: function (json) { return MintEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return MintEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, MintEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new MintEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(MintEvent, "r", {
        get: function () { return MintEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    MintEvent.phantom = function () { return (0, reified_1.phantom)(MintEvent.reified()); };
    Object.defineProperty(MintEvent, "p", {
        get: function () { return MintEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MintEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("MintEvent", {
                recipient: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), log: bcs_1.bcs.vector(bcs_1.bcs.u64()), bcs_padding: bcs_1.bcs.vector(bcs_1.bcs.vector(bcs_1.bcs.u8()))
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    MintEvent.fromFields = function (fields) { return MintEvent.reified().new({ recipient: (0, reified_1.decodeFromFields)("address", fields.recipient), log: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.log), bcsPadding: (0, reified_1.decodeFromFields)(reified.vector(reified.vector("u8")), fields.bcs_padding) }); };
    MintEvent.fromFieldsWithTypes = function (item) {
        if (!isMintEvent(item.type)) {
            throw new Error("not a MintEvent type");
        }
        return MintEvent.reified().new({ recipient: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.recipient), log: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.log), bcsPadding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(reified.vector("u8")), item.fields.bcs_padding) });
    };
    MintEvent.fromBcs = function (data) { return MintEvent.fromFields(MintEvent.bcs.parse(data)); };
    MintEvent.prototype.toJSONField = function () {
        return {
            recipient: this.recipient, log: (0, reified_1.fieldToJSON)("vector<u64>", this.log), bcsPadding: (0, reified_1.fieldToJSON)("vector<vector<u8>>", this.bcsPadding),
        };
    };
    MintEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    MintEvent.fromJSONField = function (field) { return MintEvent.reified().new({ recipient: (0, reified_1.decodeFromJSONField)("address", field.recipient), log: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.log), bcsPadding: (0, reified_1.decodeFromJSONField)(reified.vector(reified.vector("u8")), field.bcsPadding) }); };
    MintEvent.fromJSON = function (json) {
        if (json.$typeName !== MintEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return MintEvent.fromJSONField(json);
    };
    MintEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isMintEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a MintEvent object"));
    } return MintEvent.fromFieldsWithTypes(content); };
    MintEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching MintEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isMintEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a MintEvent object"));
                        }
                        return [2 /*return*/, MintEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    MintEvent.$typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::tgld::MintEvent";
    MintEvent.$numTypeParams = 0;
    return MintEvent;
}());
exports.MintEvent = MintEvent;
/* ============================== TGLD =============================== */
function isTGLD(type) { type = (0, util_1.compressSuiType)(type); return type === "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::tgld::TGLD"; }
var TGLD = /** @class */ (function () {
    function TGLD(typeArgs, fields) {
        this.$typeName = TGLD.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([TGLD.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    TGLD.reified = function () {
        var _this = this;
        return { typeName: TGLD.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([TGLD.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return TGLD.fromFields(fields); }, fromFieldsWithTypes: function (item) { return TGLD.fromFieldsWithTypes(item); }, fromBcs: function (data) { return TGLD.fromBcs(data); }, bcs: TGLD.bcs, fromJSONField: function (field) { return TGLD.fromJSONField(field); }, fromJSON: function (json) { return TGLD.fromJSON(json); }, fromSuiParsedData: function (content) { return TGLD.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, TGLD.fetch(client, id)];
            }); }); }, new: function (fields) { return new TGLD([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(TGLD, "r", {
        get: function () { return TGLD.reified(); },
        enumerable: false,
        configurable: true
    });
    TGLD.phantom = function () { return (0, reified_1.phantom)(TGLD.reified()); };
    Object.defineProperty(TGLD, "p", {
        get: function () { return TGLD.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TGLD, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("TGLD", {
                dummy_field: bcs_1.bcs.bool()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    TGLD.fromFields = function (fields) { return TGLD.reified().new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) }); };
    TGLD.fromFieldsWithTypes = function (item) {
        if (!isTGLD(item.type)) {
            throw new Error("not a TGLD type");
        }
        return TGLD.reified().new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    };
    TGLD.fromBcs = function (data) { return TGLD.fromFields(TGLD.bcs.parse(data)); };
    TGLD.prototype.toJSONField = function () {
        return {
            dummyField: this.dummyField,
        };
    };
    TGLD.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    TGLD.fromJSONField = function (field) { return TGLD.reified().new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) }); };
    TGLD.fromJSON = function (json) {
        if (json.$typeName !== TGLD.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return TGLD.fromJSONField(json);
    };
    TGLD.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTGLD(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a TGLD object"));
    } return TGLD.fromFieldsWithTypes(content); };
    TGLD.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching TGLD object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTGLD(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a TGLD object"));
                        }
                        return [2 /*return*/, TGLD.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    TGLD.$typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::tgld::TGLD";
    TGLD.$numTypeParams = 0;
    return TGLD;
}());
exports.TGLD = TGLD;
/* ============================== TgldRegistry =============================== */
function isTgldRegistry(type) { type = (0, util_1.compressSuiType)(type); return type === "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::tgld::TgldRegistry"; }
var TgldRegistry = /** @class */ (function () {
    function TgldRegistry(typeArgs, fields) {
        this.$typeName = TgldRegistry.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([TgldRegistry.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.treasuryCap = fields.treasuryCap;
        ;
        this.tokenPolicyCap = fields.tokenPolicyCap;
    }
    TgldRegistry.reified = function () {
        var _this = this;
        return { typeName: TgldRegistry.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([TgldRegistry.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return TgldRegistry.fromFields(fields); }, fromFieldsWithTypes: function (item) { return TgldRegistry.fromFieldsWithTypes(item); }, fromBcs: function (data) { return TgldRegistry.fromBcs(data); }, bcs: TgldRegistry.bcs, fromJSONField: function (field) { return TgldRegistry.fromJSONField(field); }, fromJSON: function (json) { return TgldRegistry.fromJSON(json); }, fromSuiParsedData: function (content) { return TgldRegistry.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, TgldRegistry.fetch(client, id)];
            }); }); }, new: function (fields) { return new TgldRegistry([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(TgldRegistry, "r", {
        get: function () { return TgldRegistry.reified(); },
        enumerable: false,
        configurable: true
    });
    TgldRegistry.phantom = function () { return (0, reified_1.phantom)(TgldRegistry.reified()); };
    Object.defineProperty(TgldRegistry, "p", {
        get: function () { return TgldRegistry.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TgldRegistry, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("TgldRegistry", {
                id: structs_2.UID.bcs, treasury_cap: structs_1.TreasuryCap.bcs, token_policy_cap: structs_3.TokenPolicyCap.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    TgldRegistry.fromFields = function (fields) { return TgldRegistry.reified().new({ id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id), treasuryCap: (0, reified_1.decodeFromFields)(structs_1.TreasuryCap.reified(reified.phantom(TGLD.reified())), fields.treasury_cap), tokenPolicyCap: (0, reified_1.decodeFromFields)(structs_3.TokenPolicyCap.reified(reified.phantom(TGLD.reified())), fields.token_policy_cap) }); };
    TgldRegistry.fromFieldsWithTypes = function (item) {
        if (!isTgldRegistry(item.type)) {
            throw new Error("not a TgldRegistry type");
        }
        return TgldRegistry.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id), treasuryCap: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.TreasuryCap.reified(reified.phantom(TGLD.reified())), item.fields.treasury_cap), tokenPolicyCap: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TokenPolicyCap.reified(reified.phantom(TGLD.reified())), item.fields.token_policy_cap) });
    };
    TgldRegistry.fromBcs = function (data) { return TgldRegistry.fromFields(TgldRegistry.bcs.parse(data)); };
    TgldRegistry.prototype.toJSONField = function () {
        return {
            id: this.id, treasuryCap: this.treasuryCap.toJSONField(), tokenPolicyCap: this.tokenPolicyCap.toJSONField(),
        };
    };
    TgldRegistry.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    TgldRegistry.fromJSONField = function (field) { return TgldRegistry.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id), treasuryCap: (0, reified_1.decodeFromJSONField)(structs_1.TreasuryCap.reified(reified.phantom(TGLD.reified())), field.treasuryCap), tokenPolicyCap: (0, reified_1.decodeFromJSONField)(structs_3.TokenPolicyCap.reified(reified.phantom(TGLD.reified())), field.tokenPolicyCap) }); };
    TgldRegistry.fromJSON = function (json) {
        if (json.$typeName !== TgldRegistry.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return TgldRegistry.fromJSONField(json);
    };
    TgldRegistry.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTgldRegistry(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a TgldRegistry object"));
    } return TgldRegistry.fromFieldsWithTypes(content); };
    TgldRegistry.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching TgldRegistry object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTgldRegistry(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a TgldRegistry object"));
                        }
                        return [2 /*return*/, TgldRegistry.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    TgldRegistry.$typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::tgld::TgldRegistry";
    TgldRegistry.$numTypeParams = 0;
    return TgldRegistry;
}());
exports.TgldRegistry = TgldRegistry;
