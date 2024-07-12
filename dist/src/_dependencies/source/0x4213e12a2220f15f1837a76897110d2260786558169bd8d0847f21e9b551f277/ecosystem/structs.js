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
exports.SendFeeEvent = exports.FeePool = exports.FeeInfo = exports.ManagerCap = exports.Version = void 0;
exports.isVersion = isVersion;
exports.isManagerCap = isManagerCap;
exports.isFeeInfo = isFeeInfo;
exports.isFeePool = isFeePool;
exports.isSendFeeEvent = isSendFeeEvent;
var reified = __importStar(require("../../../../_framework/reified"));
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var structs_1 = require("../../0x1/type-name/structs");
var structs_2 = require("../../0x2/object/structs");
var structs_3 = require("../../0x2/vec-set/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== Version =============================== */
function isVersion(type) { type = (0, util_1.compressSuiType)(type); return type === "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::ecosystem::Version"; }
var Version = /** @class */ (function () {
    function Version(typeArgs, fields) {
        this.$typeName = Version.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Version.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.value = fields.value;
        ;
        this.feePool = fields.feePool;
        ;
        this.authority = fields.authority;
        ;
        this.u64Padding = fields.u64Padding;
    }
    Version.reified = function () {
        var _this = this;
        return { typeName: Version.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Version.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return Version.fromFields(fields); }, fromFieldsWithTypes: function (item) { return Version.fromFieldsWithTypes(item); }, fromBcs: function (data) { return Version.fromBcs(data); }, bcs: Version.bcs, fromJSONField: function (field) { return Version.fromJSONField(field); }, fromJSON: function (json) { return Version.fromJSON(json); }, fromSuiParsedData: function (content) { return Version.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Version.fetch(client, id)];
            }); }); }, new: function (fields) { return new Version([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Version, "r", {
        get: function () { return Version.reified(); },
        enumerable: false,
        configurable: true
    });
    Version.phantom = function () { return (0, reified_1.phantom)(Version.reified()); };
    Object.defineProperty(Version, "p", {
        get: function () { return Version.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Version, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Version", {
                id: structs_2.UID.bcs, value: bcs_1.bcs.u64(), fee_pool: FeePool.bcs, authority: structs_3.VecSet.bcs(bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, })), u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Version.fromFields = function (fields) { return Version.reified().new({ id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id), value: (0, reified_1.decodeFromFields)("u64", fields.value), feePool: (0, reified_1.decodeFromFields)(FeePool.reified(), fields.fee_pool), authority: (0, reified_1.decodeFromFields)(structs_3.VecSet.reified("address"), fields.authority), u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding) }); };
    Version.fromFieldsWithTypes = function (item) {
        if (!isVersion(item.type)) {
            throw new Error("not a Version type");
        }
        return Version.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id), value: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.value), feePool: (0, reified_1.decodeFromFieldsWithTypes)(FeePool.reified(), item.fields.fee_pool), authority: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.VecSet.reified("address"), item.fields.authority), u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding) });
    };
    Version.fromBcs = function (data) { return Version.fromFields(Version.bcs.parse(data)); };
    Version.prototype.toJSONField = function () {
        return {
            id: this.id, value: this.value.toString(), feePool: this.feePool.toJSONField(), authority: this.authority.toJSONField(), u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    Version.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Version.fromJSONField = function (field) { return Version.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id), value: (0, reified_1.decodeFromJSONField)("u64", field.value), feePool: (0, reified_1.decodeFromJSONField)(FeePool.reified(), field.feePool), authority: (0, reified_1.decodeFromJSONField)(structs_3.VecSet.reified("address"), field.authority), u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding) }); };
    Version.fromJSON = function (json) {
        if (json.$typeName !== Version.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Version.fromJSONField(json);
    };
    Version.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isVersion(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Version object"));
    } return Version.fromFieldsWithTypes(content); };
    Version.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Version object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isVersion(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Version object"));
                        }
                        return [2 /*return*/, Version.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Version.$typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::ecosystem::Version";
    Version.$numTypeParams = 0;
    return Version;
}());
exports.Version = Version;
/* ============================== ManagerCap =============================== */
function isManagerCap(type) { type = (0, util_1.compressSuiType)(type); return type === "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::ecosystem::ManagerCap"; }
var ManagerCap = /** @class */ (function () {
    function ManagerCap(typeArgs, fields) {
        this.$typeName = ManagerCap.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([ManagerCap.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    ManagerCap.reified = function () {
        var _this = this;
        return { typeName: ManagerCap.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([ManagerCap.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return ManagerCap.fromFields(fields); }, fromFieldsWithTypes: function (item) { return ManagerCap.fromFieldsWithTypes(item); }, fromBcs: function (data) { return ManagerCap.fromBcs(data); }, bcs: ManagerCap.bcs, fromJSONField: function (field) { return ManagerCap.fromJSONField(field); }, fromJSON: function (json) { return ManagerCap.fromJSON(json); }, fromSuiParsedData: function (content) { return ManagerCap.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, ManagerCap.fetch(client, id)];
            }); }); }, new: function (fields) { return new ManagerCap([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(ManagerCap, "r", {
        get: function () { return ManagerCap.reified(); },
        enumerable: false,
        configurable: true
    });
    ManagerCap.phantom = function () { return (0, reified_1.phantom)(ManagerCap.reified()); };
    Object.defineProperty(ManagerCap, "p", {
        get: function () { return ManagerCap.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ManagerCap, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("ManagerCap", {
                dummy_field: bcs_1.bcs.bool()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    ManagerCap.fromFields = function (fields) { return ManagerCap.reified().new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) }); };
    ManagerCap.fromFieldsWithTypes = function (item) {
        if (!isManagerCap(item.type)) {
            throw new Error("not a ManagerCap type");
        }
        return ManagerCap.reified().new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    };
    ManagerCap.fromBcs = function (data) { return ManagerCap.fromFields(ManagerCap.bcs.parse(data)); };
    ManagerCap.prototype.toJSONField = function () {
        return {
            dummyField: this.dummyField,
        };
    };
    ManagerCap.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    ManagerCap.fromJSONField = function (field) { return ManagerCap.reified().new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) }); };
    ManagerCap.fromJSON = function (json) {
        if (json.$typeName !== ManagerCap.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ManagerCap.fromJSONField(json);
    };
    ManagerCap.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isManagerCap(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a ManagerCap object"));
    } return ManagerCap.fromFieldsWithTypes(content); };
    ManagerCap.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching ManagerCap object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isManagerCap(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a ManagerCap object"));
                        }
                        return [2 /*return*/, ManagerCap.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    ManagerCap.$typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::ecosystem::ManagerCap";
    ManagerCap.$numTypeParams = 0;
    return ManagerCap;
}());
exports.ManagerCap = ManagerCap;
/* ============================== FeeInfo =============================== */
function isFeeInfo(type) { type = (0, util_1.compressSuiType)(type); return type === "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::ecosystem::FeeInfo"; }
var FeeInfo = /** @class */ (function () {
    function FeeInfo(typeArgs, fields) {
        this.$typeName = FeeInfo.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([FeeInfo.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.token = fields.token;
        ;
        this.value = fields.value;
    }
    FeeInfo.reified = function () {
        var _this = this;
        return { typeName: FeeInfo.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([FeeInfo.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return FeeInfo.fromFields(fields); }, fromFieldsWithTypes: function (item) { return FeeInfo.fromFieldsWithTypes(item); }, fromBcs: function (data) { return FeeInfo.fromBcs(data); }, bcs: FeeInfo.bcs, fromJSONField: function (field) { return FeeInfo.fromJSONField(field); }, fromJSON: function (json) { return FeeInfo.fromJSON(json); }, fromSuiParsedData: function (content) { return FeeInfo.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, FeeInfo.fetch(client, id)];
            }); }); }, new: function (fields) { return new FeeInfo([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(FeeInfo, "r", {
        get: function () { return FeeInfo.reified(); },
        enumerable: false,
        configurable: true
    });
    FeeInfo.phantom = function () { return (0, reified_1.phantom)(FeeInfo.reified()); };
    Object.defineProperty(FeeInfo, "p", {
        get: function () { return FeeInfo.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FeeInfo, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("FeeInfo", {
                token: structs_1.TypeName.bcs, value: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    FeeInfo.fromFields = function (fields) { return FeeInfo.reified().new({ token: (0, reified_1.decodeFromFields)(structs_1.TypeName.reified(), fields.token), value: (0, reified_1.decodeFromFields)("u64", fields.value) }); };
    FeeInfo.fromFieldsWithTypes = function (item) {
        if (!isFeeInfo(item.type)) {
            throw new Error("not a FeeInfo type");
        }
        return FeeInfo.reified().new({ token: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.TypeName.reified(), item.fields.token), value: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.value) });
    };
    FeeInfo.fromBcs = function (data) { return FeeInfo.fromFields(FeeInfo.bcs.parse(data)); };
    FeeInfo.prototype.toJSONField = function () {
        return {
            token: this.token.toJSONField(), value: this.value.toString(),
        };
    };
    FeeInfo.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    FeeInfo.fromJSONField = function (field) { return FeeInfo.reified().new({ token: (0, reified_1.decodeFromJSONField)(structs_1.TypeName.reified(), field.token), value: (0, reified_1.decodeFromJSONField)("u64", field.value) }); };
    FeeInfo.fromJSON = function (json) {
        if (json.$typeName !== FeeInfo.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return FeeInfo.fromJSONField(json);
    };
    FeeInfo.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isFeeInfo(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a FeeInfo object"));
    } return FeeInfo.fromFieldsWithTypes(content); };
    FeeInfo.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching FeeInfo object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isFeeInfo(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a FeeInfo object"));
                        }
                        return [2 /*return*/, FeeInfo.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    FeeInfo.$typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::ecosystem::FeeInfo";
    FeeInfo.$numTypeParams = 0;
    return FeeInfo;
}());
exports.FeeInfo = FeeInfo;
/* ============================== FeePool =============================== */
function isFeePool(type) { type = (0, util_1.compressSuiType)(type); return type === "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::ecosystem::FeePool"; }
var FeePool = /** @class */ (function () {
    function FeePool(typeArgs, fields) {
        this.$typeName = FeePool.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([FeePool.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.feeInfos = fields.feeInfos;
    }
    FeePool.reified = function () {
        var _this = this;
        return { typeName: FeePool.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([FeePool.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return FeePool.fromFields(fields); }, fromFieldsWithTypes: function (item) { return FeePool.fromFieldsWithTypes(item); }, fromBcs: function (data) { return FeePool.fromBcs(data); }, bcs: FeePool.bcs, fromJSONField: function (field) { return FeePool.fromJSONField(field); }, fromJSON: function (json) { return FeePool.fromJSON(json); }, fromSuiParsedData: function (content) { return FeePool.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, FeePool.fetch(client, id)];
            }); }); }, new: function (fields) { return new FeePool([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(FeePool, "r", {
        get: function () { return FeePool.reified(); },
        enumerable: false,
        configurable: true
    });
    FeePool.phantom = function () { return (0, reified_1.phantom)(FeePool.reified()); };
    Object.defineProperty(FeePool, "p", {
        get: function () { return FeePool.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FeePool, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("FeePool", {
                id: structs_2.UID.bcs, fee_infos: bcs_1.bcs.vector(FeeInfo.bcs)
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    FeePool.fromFields = function (fields) { return FeePool.reified().new({ id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id), feeInfos: (0, reified_1.decodeFromFields)(reified.vector(FeeInfo.reified()), fields.fee_infos) }); };
    FeePool.fromFieldsWithTypes = function (item) {
        if (!isFeePool(item.type)) {
            throw new Error("not a FeePool type");
        }
        return FeePool.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id), feeInfos: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(FeeInfo.reified()), item.fields.fee_infos) });
    };
    FeePool.fromBcs = function (data) { return FeePool.fromFields(FeePool.bcs.parse(data)); };
    FeePool.prototype.toJSONField = function () {
        return {
            id: this.id, feeInfos: (0, reified_1.fieldToJSON)("vector<0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::ecosystem::FeeInfo>", this.feeInfos),
        };
    };
    FeePool.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    FeePool.fromJSONField = function (field) { return FeePool.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id), feeInfos: (0, reified_1.decodeFromJSONField)(reified.vector(FeeInfo.reified()), field.feeInfos) }); };
    FeePool.fromJSON = function (json) {
        if (json.$typeName !== FeePool.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return FeePool.fromJSONField(json);
    };
    FeePool.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isFeePool(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a FeePool object"));
    } return FeePool.fromFieldsWithTypes(content); };
    FeePool.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching FeePool object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isFeePool(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a FeePool object"));
                        }
                        return [2 /*return*/, FeePool.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    FeePool.$typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::ecosystem::FeePool";
    FeePool.$numTypeParams = 0;
    return FeePool;
}());
exports.FeePool = FeePool;
/* ============================== SendFeeEvent =============================== */
function isSendFeeEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::ecosystem::SendFeeEvent"; }
var SendFeeEvent = /** @class */ (function () {
    function SendFeeEvent(typeArgs, fields) {
        this.$typeName = SendFeeEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([SendFeeEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.token = fields.token;
        ;
        this.log = fields.log;
        ;
        this.bcsPadding = fields.bcsPadding;
    }
    SendFeeEvent.reified = function () {
        var _this = this;
        return { typeName: SendFeeEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([SendFeeEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return SendFeeEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return SendFeeEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return SendFeeEvent.fromBcs(data); }, bcs: SendFeeEvent.bcs, fromJSONField: function (field) { return SendFeeEvent.fromJSONField(field); }, fromJSON: function (json) { return SendFeeEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return SendFeeEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, SendFeeEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new SendFeeEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(SendFeeEvent, "r", {
        get: function () { return SendFeeEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    SendFeeEvent.phantom = function () { return (0, reified_1.phantom)(SendFeeEvent.reified()); };
    Object.defineProperty(SendFeeEvent, "p", {
        get: function () { return SendFeeEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SendFeeEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("SendFeeEvent", {
                token: structs_1.TypeName.bcs, log: bcs_1.bcs.vector(bcs_1.bcs.u64()), bcs_padding: bcs_1.bcs.vector(bcs_1.bcs.vector(bcs_1.bcs.u8()))
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    SendFeeEvent.fromFields = function (fields) { return SendFeeEvent.reified().new({ token: (0, reified_1.decodeFromFields)(structs_1.TypeName.reified(), fields.token), log: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.log), bcsPadding: (0, reified_1.decodeFromFields)(reified.vector(reified.vector("u8")), fields.bcs_padding) }); };
    SendFeeEvent.fromFieldsWithTypes = function (item) {
        if (!isSendFeeEvent(item.type)) {
            throw new Error("not a SendFeeEvent type");
        }
        return SendFeeEvent.reified().new({ token: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.TypeName.reified(), item.fields.token), log: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.log), bcsPadding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(reified.vector("u8")), item.fields.bcs_padding) });
    };
    SendFeeEvent.fromBcs = function (data) { return SendFeeEvent.fromFields(SendFeeEvent.bcs.parse(data)); };
    SendFeeEvent.prototype.toJSONField = function () {
        return {
            token: this.token.toJSONField(), log: (0, reified_1.fieldToJSON)("vector<u64>", this.log), bcsPadding: (0, reified_1.fieldToJSON)("vector<vector<u8>>", this.bcsPadding),
        };
    };
    SendFeeEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    SendFeeEvent.fromJSONField = function (field) { return SendFeeEvent.reified().new({ token: (0, reified_1.decodeFromJSONField)(structs_1.TypeName.reified(), field.token), log: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.log), bcsPadding: (0, reified_1.decodeFromJSONField)(reified.vector(reified.vector("u8")), field.bcsPadding) }); };
    SendFeeEvent.fromJSON = function (json) {
        if (json.$typeName !== SendFeeEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return SendFeeEvent.fromJSONField(json);
    };
    SendFeeEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isSendFeeEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a SendFeeEvent object"));
    } return SendFeeEvent.fromFieldsWithTypes(content); };
    SendFeeEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching SendFeeEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isSendFeeEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a SendFeeEvent object"));
                        }
                        return [2 /*return*/, SendFeeEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    SendFeeEvent.$typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::ecosystem::SendFeeEvent";
    SendFeeEvent.$numTypeParams = 0;
    return SendFeeEvent;
}());
exports.SendFeeEvent = SendFeeEvent;
