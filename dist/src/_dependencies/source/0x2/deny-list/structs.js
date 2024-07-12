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
exports.PerTypeList = exports.DenyList = void 0;
exports.isDenyList = isDenyList;
exports.isPerTypeList = isPerTypeList;
var reified = __importStar(require("../../../../_framework/reified"));
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var structs_1 = require("../bag/structs");
var structs_2 = require("../object/structs");
var structs_3 = require("../table/structs");
var structs_4 = require("../vec-set/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== DenyList =============================== */
function isDenyList(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::deny_list::DenyList"; }
var DenyList = /** @class */ (function () {
    function DenyList(typeArgs, fields) {
        this.$typeName = DenyList.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([DenyList.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.lists = fields.lists;
    }
    DenyList.reified = function () {
        var _this = this;
        return { typeName: DenyList.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([DenyList.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return DenyList.fromFields(fields); }, fromFieldsWithTypes: function (item) { return DenyList.fromFieldsWithTypes(item); }, fromBcs: function (data) { return DenyList.fromBcs(data); }, bcs: DenyList.bcs, fromJSONField: function (field) { return DenyList.fromJSONField(field); }, fromJSON: function (json) { return DenyList.fromJSON(json); }, fromSuiParsedData: function (content) { return DenyList.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, DenyList.fetch(client, id)];
            }); }); }, new: function (fields) { return new DenyList([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(DenyList, "r", {
        get: function () { return DenyList.reified(); },
        enumerable: false,
        configurable: true
    });
    DenyList.phantom = function () { return (0, reified_1.phantom)(DenyList.reified()); };
    Object.defineProperty(DenyList, "p", {
        get: function () { return DenyList.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DenyList, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("DenyList", {
                id: structs_2.UID.bcs, lists: structs_1.Bag.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    DenyList.fromFields = function (fields) { return DenyList.reified().new({ id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id), lists: (0, reified_1.decodeFromFields)(structs_1.Bag.reified(), fields.lists) }); };
    DenyList.fromFieldsWithTypes = function (item) {
        if (!isDenyList(item.type)) {
            throw new Error("not a DenyList type");
        }
        return DenyList.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id), lists: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Bag.reified(), item.fields.lists) });
    };
    DenyList.fromBcs = function (data) { return DenyList.fromFields(DenyList.bcs.parse(data)); };
    DenyList.prototype.toJSONField = function () {
        return {
            id: this.id, lists: this.lists.toJSONField(),
        };
    };
    DenyList.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    DenyList.fromJSONField = function (field) { return DenyList.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id), lists: (0, reified_1.decodeFromJSONField)(structs_1.Bag.reified(), field.lists) }); };
    DenyList.fromJSON = function (json) {
        if (json.$typeName !== DenyList.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return DenyList.fromJSONField(json);
    };
    DenyList.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDenyList(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a DenyList object"));
    } return DenyList.fromFieldsWithTypes(content); };
    DenyList.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching DenyList object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDenyList(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a DenyList object"));
                        }
                        return [2 /*return*/, DenyList.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    DenyList.$typeName = "0x2::deny_list::DenyList";
    DenyList.$numTypeParams = 0;
    return DenyList;
}());
exports.DenyList = DenyList;
/* ============================== PerTypeList =============================== */
function isPerTypeList(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::deny_list::PerTypeList"; }
var PerTypeList = /** @class */ (function () {
    function PerTypeList(typeArgs, fields) {
        this.$typeName = PerTypeList.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([PerTypeList.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.deniedCount = fields.deniedCount;
        ;
        this.deniedAddresses = fields.deniedAddresses;
    }
    PerTypeList.reified = function () {
        var _this = this;
        return { typeName: PerTypeList.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([PerTypeList.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return PerTypeList.fromFields(fields); }, fromFieldsWithTypes: function (item) { return PerTypeList.fromFieldsWithTypes(item); }, fromBcs: function (data) { return PerTypeList.fromBcs(data); }, bcs: PerTypeList.bcs, fromJSONField: function (field) { return PerTypeList.fromJSONField(field); }, fromJSON: function (json) { return PerTypeList.fromJSON(json); }, fromSuiParsedData: function (content) { return PerTypeList.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, PerTypeList.fetch(client, id)];
            }); }); }, new: function (fields) { return new PerTypeList([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(PerTypeList, "r", {
        get: function () { return PerTypeList.reified(); },
        enumerable: false,
        configurable: true
    });
    PerTypeList.phantom = function () { return (0, reified_1.phantom)(PerTypeList.reified()); };
    Object.defineProperty(PerTypeList, "p", {
        get: function () { return PerTypeList.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PerTypeList, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("PerTypeList", {
                id: structs_2.UID.bcs, denied_count: structs_3.Table.bcs, denied_addresses: structs_3.Table.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    PerTypeList.fromFields = function (fields) { return PerTypeList.reified().new({ id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id), deniedCount: (0, reified_1.decodeFromFields)(structs_3.Table.reified(reified.phantom("address"), reified.phantom("u64")), fields.denied_count), deniedAddresses: (0, reified_1.decodeFromFields)(structs_3.Table.reified(reified.phantom(reified.vector("u8")), reified.phantom(structs_4.VecSet.reified("address"))), fields.denied_addresses) }); };
    PerTypeList.fromFieldsWithTypes = function (item) {
        if (!isPerTypeList(item.type)) {
            throw new Error("not a PerTypeList type");
        }
        return PerTypeList.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id), deniedCount: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.Table.reified(reified.phantom("address"), reified.phantom("u64")), item.fields.denied_count), deniedAddresses: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.Table.reified(reified.phantom(reified.vector("u8")), reified.phantom(structs_4.VecSet.reified("address"))), item.fields.denied_addresses) });
    };
    PerTypeList.fromBcs = function (data) { return PerTypeList.fromFields(PerTypeList.bcs.parse(data)); };
    PerTypeList.prototype.toJSONField = function () {
        return {
            id: this.id, deniedCount: this.deniedCount.toJSONField(), deniedAddresses: this.deniedAddresses.toJSONField(),
        };
    };
    PerTypeList.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    PerTypeList.fromJSONField = function (field) { return PerTypeList.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id), deniedCount: (0, reified_1.decodeFromJSONField)(structs_3.Table.reified(reified.phantom("address"), reified.phantom("u64")), field.deniedCount), deniedAddresses: (0, reified_1.decodeFromJSONField)(structs_3.Table.reified(reified.phantom(reified.vector("u8")), reified.phantom(structs_4.VecSet.reified("address"))), field.deniedAddresses) }); };
    PerTypeList.fromJSON = function (json) {
        if (json.$typeName !== PerTypeList.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return PerTypeList.fromJSONField(json);
    };
    PerTypeList.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isPerTypeList(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a PerTypeList object"));
    } return PerTypeList.fromFieldsWithTypes(content); };
    PerTypeList.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching PerTypeList object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isPerTypeList(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a PerTypeList object"));
                        }
                        return [2 /*return*/, PerTypeList.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    PerTypeList.$typeName = "0x2::deny_list::PerTypeList";
    PerTypeList.$numTypeParams = 0;
    return PerTypeList;
}());
exports.PerTypeList = PerTypeList;
