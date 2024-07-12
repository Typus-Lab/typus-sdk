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
exports.WithdrawFixedIncentiveEvent = exports.UpdateWarmupVaultConfigEvent = exports.UpdateStrikeEvent = exports.UpdateConfigEvent = exports.UpdateAuctionConfigEvent = exports.UpdateActiveVaultConfigEvent = exports.RemovePortfolioVaultAuthorizedUserEvent = exports.FixedIncentiviseEvent = exports.AddPortfolioVaultAuthorizedUserEvent = void 0;
exports.isAddPortfolioVaultAuthorizedUserEvent = isAddPortfolioVaultAuthorizedUserEvent;
exports.isFixedIncentiviseEvent = isFixedIncentiviseEvent;
exports.isRemovePortfolioVaultAuthorizedUserEvent = isRemovePortfolioVaultAuthorizedUserEvent;
exports.isUpdateActiveVaultConfigEvent = isUpdateActiveVaultConfigEvent;
exports.isUpdateAuctionConfigEvent = isUpdateAuctionConfigEvent;
exports.isUpdateConfigEvent = isUpdateConfigEvent;
exports.isUpdateStrikeEvent = isUpdateStrikeEvent;
exports.isUpdateWarmupVaultConfigEvent = isUpdateWarmupVaultConfigEvent;
exports.isWithdrawFixedIncentiveEvent = isWithdrawFixedIncentiveEvent;
var reified = __importStar(require("../../../../_framework/reified"));
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var structs_1 = require("../../0x1/type-name/structs");
var structs_2 = require("../typus-dov-single/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== AddPortfolioVaultAuthorizedUserEvent =============================== */
function isAddPortfolioVaultAuthorizedUserEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::AddPortfolioVaultAuthorizedUserEvent"; }
var AddPortfolioVaultAuthorizedUserEvent = /** @class */ (function () {
    function AddPortfolioVaultAuthorizedUserEvent(typeArgs, fields) {
        this.$typeName = AddPortfolioVaultAuthorizedUserEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([AddPortfolioVaultAuthorizedUserEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.users = fields.users;
    }
    AddPortfolioVaultAuthorizedUserEvent.reified = function () {
        var _this = this;
        return { typeName: AddPortfolioVaultAuthorizedUserEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([AddPortfolioVaultAuthorizedUserEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return AddPortfolioVaultAuthorizedUserEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return AddPortfolioVaultAuthorizedUserEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return AddPortfolioVaultAuthorizedUserEvent.fromBcs(data); }, bcs: AddPortfolioVaultAuthorizedUserEvent.bcs, fromJSONField: function (field) { return AddPortfolioVaultAuthorizedUserEvent.fromJSONField(field); }, fromJSON: function (json) { return AddPortfolioVaultAuthorizedUserEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return AddPortfolioVaultAuthorizedUserEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, AddPortfolioVaultAuthorizedUserEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new AddPortfolioVaultAuthorizedUserEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(AddPortfolioVaultAuthorizedUserEvent, "r", {
        get: function () { return AddPortfolioVaultAuthorizedUserEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    AddPortfolioVaultAuthorizedUserEvent.phantom = function () { return (0, reified_1.phantom)(AddPortfolioVaultAuthorizedUserEvent.reified()); };
    Object.defineProperty(AddPortfolioVaultAuthorizedUserEvent, "p", {
        get: function () { return AddPortfolioVaultAuthorizedUserEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddPortfolioVaultAuthorizedUserEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("AddPortfolioVaultAuthorizedUserEvent", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), users: bcs_1.bcs.vector(bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }))
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    AddPortfolioVaultAuthorizedUserEvent.fromFields = function (fields) { return AddPortfolioVaultAuthorizedUserEvent.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), users: (0, reified_1.decodeFromFields)(reified.vector("address"), fields.users) }); };
    AddPortfolioVaultAuthorizedUserEvent.fromFieldsWithTypes = function (item) {
        if (!isAddPortfolioVaultAuthorizedUserEvent(item.type)) {
            throw new Error("not a AddPortfolioVaultAuthorizedUserEvent type");
        }
        return AddPortfolioVaultAuthorizedUserEvent.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), users: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("address"), item.fields.users) });
    };
    AddPortfolioVaultAuthorizedUserEvent.fromBcs = function (data) { return AddPortfolioVaultAuthorizedUserEvent.fromFields(AddPortfolioVaultAuthorizedUserEvent.bcs.parse(data)); };
    AddPortfolioVaultAuthorizedUserEvent.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), users: (0, reified_1.fieldToJSON)("vector<address>", this.users),
        };
    };
    AddPortfolioVaultAuthorizedUserEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    AddPortfolioVaultAuthorizedUserEvent.fromJSONField = function (field) { return AddPortfolioVaultAuthorizedUserEvent.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), users: (0, reified_1.decodeFromJSONField)(reified.vector("address"), field.users) }); };
    AddPortfolioVaultAuthorizedUserEvent.fromJSON = function (json) {
        if (json.$typeName !== AddPortfolioVaultAuthorizedUserEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return AddPortfolioVaultAuthorizedUserEvent.fromJSONField(json);
    };
    AddPortfolioVaultAuthorizedUserEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isAddPortfolioVaultAuthorizedUserEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a AddPortfolioVaultAuthorizedUserEvent object"));
    } return AddPortfolioVaultAuthorizedUserEvent.fromFieldsWithTypes(content); };
    AddPortfolioVaultAuthorizedUserEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching AddPortfolioVaultAuthorizedUserEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isAddPortfolioVaultAuthorizedUserEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a AddPortfolioVaultAuthorizedUserEvent object"));
                        }
                        return [2 /*return*/, AddPortfolioVaultAuthorizedUserEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    AddPortfolioVaultAuthorizedUserEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::AddPortfolioVaultAuthorizedUserEvent";
    AddPortfolioVaultAuthorizedUserEvent.$numTypeParams = 0;
    return AddPortfolioVaultAuthorizedUserEvent;
}());
exports.AddPortfolioVaultAuthorizedUserEvent = AddPortfolioVaultAuthorizedUserEvent;
/* ============================== FixedIncentiviseEvent =============================== */
function isFixedIncentiviseEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::FixedIncentiviseEvent"; }
var FixedIncentiviseEvent = /** @class */ (function () {
    function FixedIncentiviseEvent(typeArgs, fields) {
        this.$typeName = FixedIncentiviseEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([FixedIncentiviseEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.token = fields.token;
        ;
        this.amount = fields.amount;
        ;
        this.fixedIncentiveAmount = fields.fixedIncentiveAmount;
    }
    FixedIncentiviseEvent.reified = function () {
        var _this = this;
        return { typeName: FixedIncentiviseEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([FixedIncentiviseEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return FixedIncentiviseEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return FixedIncentiviseEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return FixedIncentiviseEvent.fromBcs(data); }, bcs: FixedIncentiviseEvent.bcs, fromJSONField: function (field) { return FixedIncentiviseEvent.fromJSONField(field); }, fromJSON: function (json) { return FixedIncentiviseEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return FixedIncentiviseEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, FixedIncentiviseEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new FixedIncentiviseEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(FixedIncentiviseEvent, "r", {
        get: function () { return FixedIncentiviseEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    FixedIncentiviseEvent.phantom = function () { return (0, reified_1.phantom)(FixedIncentiviseEvent.reified()); };
    Object.defineProperty(FixedIncentiviseEvent, "p", {
        get: function () { return FixedIncentiviseEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FixedIncentiviseEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("FixedIncentiviseEvent", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), token: structs_1.TypeName.bcs, amount: bcs_1.bcs.u64(), fixed_incentive_amount: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    FixedIncentiviseEvent.fromFields = function (fields) { return FixedIncentiviseEvent.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), token: (0, reified_1.decodeFromFields)(structs_1.TypeName.reified(), fields.token), amount: (0, reified_1.decodeFromFields)("u64", fields.amount), fixedIncentiveAmount: (0, reified_1.decodeFromFields)("u64", fields.fixed_incentive_amount) }); };
    FixedIncentiviseEvent.fromFieldsWithTypes = function (item) {
        if (!isFixedIncentiviseEvent(item.type)) {
            throw new Error("not a FixedIncentiviseEvent type");
        }
        return FixedIncentiviseEvent.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), token: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.TypeName.reified(), item.fields.token), amount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.amount), fixedIncentiveAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.fixed_incentive_amount) });
    };
    FixedIncentiviseEvent.fromBcs = function (data) { return FixedIncentiviseEvent.fromFields(FixedIncentiviseEvent.bcs.parse(data)); };
    FixedIncentiviseEvent.prototype.toJSONField = function () {
        return {
            signer: this.signer, token: this.token.toJSONField(), amount: this.amount.toString(), fixedIncentiveAmount: this.fixedIncentiveAmount.toString(),
        };
    };
    FixedIncentiviseEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    FixedIncentiviseEvent.fromJSONField = function (field) { return FixedIncentiviseEvent.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), token: (0, reified_1.decodeFromJSONField)(structs_1.TypeName.reified(), field.token), amount: (0, reified_1.decodeFromJSONField)("u64", field.amount), fixedIncentiveAmount: (0, reified_1.decodeFromJSONField)("u64", field.fixedIncentiveAmount) }); };
    FixedIncentiviseEvent.fromJSON = function (json) {
        if (json.$typeName !== FixedIncentiviseEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return FixedIncentiviseEvent.fromJSONField(json);
    };
    FixedIncentiviseEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isFixedIncentiviseEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a FixedIncentiviseEvent object"));
    } return FixedIncentiviseEvent.fromFieldsWithTypes(content); };
    FixedIncentiviseEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching FixedIncentiviseEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isFixedIncentiviseEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a FixedIncentiviseEvent object"));
                        }
                        return [2 /*return*/, FixedIncentiviseEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    FixedIncentiviseEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::FixedIncentiviseEvent";
    FixedIncentiviseEvent.$numTypeParams = 0;
    return FixedIncentiviseEvent;
}());
exports.FixedIncentiviseEvent = FixedIncentiviseEvent;
/* ============================== RemovePortfolioVaultAuthorizedUserEvent =============================== */
function isRemovePortfolioVaultAuthorizedUserEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::RemovePortfolioVaultAuthorizedUserEvent"; }
var RemovePortfolioVaultAuthorizedUserEvent = /** @class */ (function () {
    function RemovePortfolioVaultAuthorizedUserEvent(typeArgs, fields) {
        this.$typeName = RemovePortfolioVaultAuthorizedUserEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([RemovePortfolioVaultAuthorizedUserEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.users = fields.users;
    }
    RemovePortfolioVaultAuthorizedUserEvent.reified = function () {
        var _this = this;
        return { typeName: RemovePortfolioVaultAuthorizedUserEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([RemovePortfolioVaultAuthorizedUserEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return RemovePortfolioVaultAuthorizedUserEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return RemovePortfolioVaultAuthorizedUserEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return RemovePortfolioVaultAuthorizedUserEvent.fromBcs(data); }, bcs: RemovePortfolioVaultAuthorizedUserEvent.bcs, fromJSONField: function (field) { return RemovePortfolioVaultAuthorizedUserEvent.fromJSONField(field); }, fromJSON: function (json) { return RemovePortfolioVaultAuthorizedUserEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return RemovePortfolioVaultAuthorizedUserEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, RemovePortfolioVaultAuthorizedUserEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new RemovePortfolioVaultAuthorizedUserEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(RemovePortfolioVaultAuthorizedUserEvent, "r", {
        get: function () { return RemovePortfolioVaultAuthorizedUserEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    RemovePortfolioVaultAuthorizedUserEvent.phantom = function () { return (0, reified_1.phantom)(RemovePortfolioVaultAuthorizedUserEvent.reified()); };
    Object.defineProperty(RemovePortfolioVaultAuthorizedUserEvent, "p", {
        get: function () { return RemovePortfolioVaultAuthorizedUserEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RemovePortfolioVaultAuthorizedUserEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("RemovePortfolioVaultAuthorizedUserEvent", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), users: bcs_1.bcs.vector(bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }))
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    RemovePortfolioVaultAuthorizedUserEvent.fromFields = function (fields) { return RemovePortfolioVaultAuthorizedUserEvent.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), users: (0, reified_1.decodeFromFields)(reified.vector("address"), fields.users) }); };
    RemovePortfolioVaultAuthorizedUserEvent.fromFieldsWithTypes = function (item) {
        if (!isRemovePortfolioVaultAuthorizedUserEvent(item.type)) {
            throw new Error("not a RemovePortfolioVaultAuthorizedUserEvent type");
        }
        return RemovePortfolioVaultAuthorizedUserEvent.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), users: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("address"), item.fields.users) });
    };
    RemovePortfolioVaultAuthorizedUserEvent.fromBcs = function (data) { return RemovePortfolioVaultAuthorizedUserEvent.fromFields(RemovePortfolioVaultAuthorizedUserEvent.bcs.parse(data)); };
    RemovePortfolioVaultAuthorizedUserEvent.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), users: (0, reified_1.fieldToJSON)("vector<address>", this.users),
        };
    };
    RemovePortfolioVaultAuthorizedUserEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    RemovePortfolioVaultAuthorizedUserEvent.fromJSONField = function (field) { return RemovePortfolioVaultAuthorizedUserEvent.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), users: (0, reified_1.decodeFromJSONField)(reified.vector("address"), field.users) }); };
    RemovePortfolioVaultAuthorizedUserEvent.fromJSON = function (json) {
        if (json.$typeName !== RemovePortfolioVaultAuthorizedUserEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return RemovePortfolioVaultAuthorizedUserEvent.fromJSONField(json);
    };
    RemovePortfolioVaultAuthorizedUserEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isRemovePortfolioVaultAuthorizedUserEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a RemovePortfolioVaultAuthorizedUserEvent object"));
    } return RemovePortfolioVaultAuthorizedUserEvent.fromFieldsWithTypes(content); };
    RemovePortfolioVaultAuthorizedUserEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching RemovePortfolioVaultAuthorizedUserEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRemovePortfolioVaultAuthorizedUserEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a RemovePortfolioVaultAuthorizedUserEvent object"));
                        }
                        return [2 /*return*/, RemovePortfolioVaultAuthorizedUserEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    RemovePortfolioVaultAuthorizedUserEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::RemovePortfolioVaultAuthorizedUserEvent";
    RemovePortfolioVaultAuthorizedUserEvent.$numTypeParams = 0;
    return RemovePortfolioVaultAuthorizedUserEvent;
}());
exports.RemovePortfolioVaultAuthorizedUserEvent = RemovePortfolioVaultAuthorizedUserEvent;
/* ============================== UpdateActiveVaultConfigEvent =============================== */
function isUpdateActiveVaultConfigEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::UpdateActiveVaultConfigEvent"; }
var UpdateActiveVaultConfigEvent = /** @class */ (function () {
    function UpdateActiveVaultConfigEvent(typeArgs, fields) {
        this.$typeName = UpdateActiveVaultConfigEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([UpdateActiveVaultConfigEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.previous = fields.previous;
        ;
        this.current = fields.current;
    }
    UpdateActiveVaultConfigEvent.reified = function () {
        var _this = this;
        return { typeName: UpdateActiveVaultConfigEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([UpdateActiveVaultConfigEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return UpdateActiveVaultConfigEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return UpdateActiveVaultConfigEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return UpdateActiveVaultConfigEvent.fromBcs(data); }, bcs: UpdateActiveVaultConfigEvent.bcs, fromJSONField: function (field) { return UpdateActiveVaultConfigEvent.fromJSONField(field); }, fromJSON: function (json) { return UpdateActiveVaultConfigEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return UpdateActiveVaultConfigEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, UpdateActiveVaultConfigEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new UpdateActiveVaultConfigEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(UpdateActiveVaultConfigEvent, "r", {
        get: function () { return UpdateActiveVaultConfigEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    UpdateActiveVaultConfigEvent.phantom = function () { return (0, reified_1.phantom)(UpdateActiveVaultConfigEvent.reified()); };
    Object.defineProperty(UpdateActiveVaultConfigEvent, "p", {
        get: function () { return UpdateActiveVaultConfigEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UpdateActiveVaultConfigEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("UpdateActiveVaultConfigEvent", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), previous: structs_2.VaultConfig.bcs, current: structs_2.VaultConfig.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    UpdateActiveVaultConfigEvent.fromFields = function (fields) { return UpdateActiveVaultConfigEvent.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), previous: (0, reified_1.decodeFromFields)(structs_2.VaultConfig.reified(), fields.previous), current: (0, reified_1.decodeFromFields)(structs_2.VaultConfig.reified(), fields.current) }); };
    UpdateActiveVaultConfigEvent.fromFieldsWithTypes = function (item) {
        if (!isUpdateActiveVaultConfigEvent(item.type)) {
            throw new Error("not a UpdateActiveVaultConfigEvent type");
        }
        return UpdateActiveVaultConfigEvent.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), previous: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.VaultConfig.reified(), item.fields.previous), current: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.VaultConfig.reified(), item.fields.current) });
    };
    UpdateActiveVaultConfigEvent.fromBcs = function (data) { return UpdateActiveVaultConfigEvent.fromFields(UpdateActiveVaultConfigEvent.bcs.parse(data)); };
    UpdateActiveVaultConfigEvent.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), previous: this.previous.toJSONField(), current: this.current.toJSONField(),
        };
    };
    UpdateActiveVaultConfigEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    UpdateActiveVaultConfigEvent.fromJSONField = function (field) { return UpdateActiveVaultConfigEvent.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), previous: (0, reified_1.decodeFromJSONField)(structs_2.VaultConfig.reified(), field.previous), current: (0, reified_1.decodeFromJSONField)(structs_2.VaultConfig.reified(), field.current) }); };
    UpdateActiveVaultConfigEvent.fromJSON = function (json) {
        if (json.$typeName !== UpdateActiveVaultConfigEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return UpdateActiveVaultConfigEvent.fromJSONField(json);
    };
    UpdateActiveVaultConfigEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUpdateActiveVaultConfigEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a UpdateActiveVaultConfigEvent object"));
    } return UpdateActiveVaultConfigEvent.fromFieldsWithTypes(content); };
    UpdateActiveVaultConfigEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching UpdateActiveVaultConfigEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUpdateActiveVaultConfigEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a UpdateActiveVaultConfigEvent object"));
                        }
                        return [2 /*return*/, UpdateActiveVaultConfigEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    UpdateActiveVaultConfigEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::UpdateActiveVaultConfigEvent";
    UpdateActiveVaultConfigEvent.$numTypeParams = 0;
    return UpdateActiveVaultConfigEvent;
}());
exports.UpdateActiveVaultConfigEvent = UpdateActiveVaultConfigEvent;
/* ============================== UpdateAuctionConfigEvent =============================== */
function isUpdateAuctionConfigEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::UpdateAuctionConfigEvent"; }
var UpdateAuctionConfigEvent = /** @class */ (function () {
    function UpdateAuctionConfigEvent(typeArgs, fields) {
        this.$typeName = UpdateAuctionConfigEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([UpdateAuctionConfigEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.startTsMs = fields.startTsMs;
        ;
        this.endTsMs = fields.endTsMs;
        ;
        this.decaySpeed = fields.decaySpeed;
        ;
        this.initialPrice = fields.initialPrice;
        ;
        this.finalPrice = fields.finalPrice;
        ;
        this.feeBp = fields.feeBp;
        ;
        this.incentiveBp = fields.incentiveBp;
        ;
        this.tokenDecimal = fields.tokenDecimal;
        ;
        this.sizeDecimal = fields.sizeDecimal;
        ;
        this.ableToRemoveBid = fields.ableToRemoveBid;
    }
    UpdateAuctionConfigEvent.reified = function () {
        var _this = this;
        return { typeName: UpdateAuctionConfigEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([UpdateAuctionConfigEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return UpdateAuctionConfigEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return UpdateAuctionConfigEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return UpdateAuctionConfigEvent.fromBcs(data); }, bcs: UpdateAuctionConfigEvent.bcs, fromJSONField: function (field) { return UpdateAuctionConfigEvent.fromJSONField(field); }, fromJSON: function (json) { return UpdateAuctionConfigEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return UpdateAuctionConfigEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, UpdateAuctionConfigEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new UpdateAuctionConfigEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(UpdateAuctionConfigEvent, "r", {
        get: function () { return UpdateAuctionConfigEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    UpdateAuctionConfigEvent.phantom = function () { return (0, reified_1.phantom)(UpdateAuctionConfigEvent.reified()); };
    Object.defineProperty(UpdateAuctionConfigEvent, "p", {
        get: function () { return UpdateAuctionConfigEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UpdateAuctionConfigEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("UpdateAuctionConfigEvent", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), start_ts_ms: bcs_1.bcs.u64(), end_ts_ms: bcs_1.bcs.u64(), decay_speed: bcs_1.bcs.u64(), initial_price: bcs_1.bcs.u64(), final_price: bcs_1.bcs.u64(), fee_bp: bcs_1.bcs.u64(), incentive_bp: bcs_1.bcs.u64(), token_decimal: bcs_1.bcs.u64(), size_decimal: bcs_1.bcs.u64(), able_to_remove_bid: bcs_1.bcs.bool()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    UpdateAuctionConfigEvent.fromFields = function (fields) { return UpdateAuctionConfigEvent.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), startTsMs: (0, reified_1.decodeFromFields)("u64", fields.start_ts_ms), endTsMs: (0, reified_1.decodeFromFields)("u64", fields.end_ts_ms), decaySpeed: (0, reified_1.decodeFromFields)("u64", fields.decay_speed), initialPrice: (0, reified_1.decodeFromFields)("u64", fields.initial_price), finalPrice: (0, reified_1.decodeFromFields)("u64", fields.final_price), feeBp: (0, reified_1.decodeFromFields)("u64", fields.fee_bp), incentiveBp: (0, reified_1.decodeFromFields)("u64", fields.incentive_bp), tokenDecimal: (0, reified_1.decodeFromFields)("u64", fields.token_decimal), sizeDecimal: (0, reified_1.decodeFromFields)("u64", fields.size_decimal), ableToRemoveBid: (0, reified_1.decodeFromFields)("bool", fields.able_to_remove_bid) }); };
    UpdateAuctionConfigEvent.fromFieldsWithTypes = function (item) {
        if (!isUpdateAuctionConfigEvent(item.type)) {
            throw new Error("not a UpdateAuctionConfigEvent type");
        }
        return UpdateAuctionConfigEvent.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), startTsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.start_ts_ms), endTsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.end_ts_ms), decaySpeed: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.decay_speed), initialPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.initial_price), finalPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.final_price), feeBp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.fee_bp), incentiveBp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.incentive_bp), tokenDecimal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.token_decimal), sizeDecimal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.size_decimal), ableToRemoveBid: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.able_to_remove_bid) });
    };
    UpdateAuctionConfigEvent.fromBcs = function (data) { return UpdateAuctionConfigEvent.fromFields(UpdateAuctionConfigEvent.bcs.parse(data)); };
    UpdateAuctionConfigEvent.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), startTsMs: this.startTsMs.toString(), endTsMs: this.endTsMs.toString(), decaySpeed: this.decaySpeed.toString(), initialPrice: this.initialPrice.toString(), finalPrice: this.finalPrice.toString(), feeBp: this.feeBp.toString(), incentiveBp: this.incentiveBp.toString(), tokenDecimal: this.tokenDecimal.toString(), sizeDecimal: this.sizeDecimal.toString(), ableToRemoveBid: this.ableToRemoveBid,
        };
    };
    UpdateAuctionConfigEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    UpdateAuctionConfigEvent.fromJSONField = function (field) { return UpdateAuctionConfigEvent.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), startTsMs: (0, reified_1.decodeFromJSONField)("u64", field.startTsMs), endTsMs: (0, reified_1.decodeFromJSONField)("u64", field.endTsMs), decaySpeed: (0, reified_1.decodeFromJSONField)("u64", field.decaySpeed), initialPrice: (0, reified_1.decodeFromJSONField)("u64", field.initialPrice), finalPrice: (0, reified_1.decodeFromJSONField)("u64", field.finalPrice), feeBp: (0, reified_1.decodeFromJSONField)("u64", field.feeBp), incentiveBp: (0, reified_1.decodeFromJSONField)("u64", field.incentiveBp), tokenDecimal: (0, reified_1.decodeFromJSONField)("u64", field.tokenDecimal), sizeDecimal: (0, reified_1.decodeFromJSONField)("u64", field.sizeDecimal), ableToRemoveBid: (0, reified_1.decodeFromJSONField)("bool", field.ableToRemoveBid) }); };
    UpdateAuctionConfigEvent.fromJSON = function (json) {
        if (json.$typeName !== UpdateAuctionConfigEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return UpdateAuctionConfigEvent.fromJSONField(json);
    };
    UpdateAuctionConfigEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUpdateAuctionConfigEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a UpdateAuctionConfigEvent object"));
    } return UpdateAuctionConfigEvent.fromFieldsWithTypes(content); };
    UpdateAuctionConfigEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching UpdateAuctionConfigEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUpdateAuctionConfigEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a UpdateAuctionConfigEvent object"));
                        }
                        return [2 /*return*/, UpdateAuctionConfigEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    UpdateAuctionConfigEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::UpdateAuctionConfigEvent";
    UpdateAuctionConfigEvent.$numTypeParams = 0;
    return UpdateAuctionConfigEvent;
}());
exports.UpdateAuctionConfigEvent = UpdateAuctionConfigEvent;
/* ============================== UpdateConfigEvent =============================== */
function isUpdateConfigEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::UpdateConfigEvent"; }
var UpdateConfigEvent = /** @class */ (function () {
    function UpdateConfigEvent(typeArgs, fields) {
        this.$typeName = UpdateConfigEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([UpdateConfigEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.previous = fields.previous;
        ;
        this.current = fields.current;
    }
    UpdateConfigEvent.reified = function () {
        var _this = this;
        return { typeName: UpdateConfigEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([UpdateConfigEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return UpdateConfigEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return UpdateConfigEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return UpdateConfigEvent.fromBcs(data); }, bcs: UpdateConfigEvent.bcs, fromJSONField: function (field) { return UpdateConfigEvent.fromJSONField(field); }, fromJSON: function (json) { return UpdateConfigEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return UpdateConfigEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, UpdateConfigEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new UpdateConfigEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(UpdateConfigEvent, "r", {
        get: function () { return UpdateConfigEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    UpdateConfigEvent.phantom = function () { return (0, reified_1.phantom)(UpdateConfigEvent.reified()); };
    Object.defineProperty(UpdateConfigEvent, "p", {
        get: function () { return UpdateConfigEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UpdateConfigEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("UpdateConfigEvent", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), previous: structs_2.Config.bcs, current: structs_2.Config.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    UpdateConfigEvent.fromFields = function (fields) { return UpdateConfigEvent.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), previous: (0, reified_1.decodeFromFields)(structs_2.Config.reified(), fields.previous), current: (0, reified_1.decodeFromFields)(structs_2.Config.reified(), fields.current) }); };
    UpdateConfigEvent.fromFieldsWithTypes = function (item) {
        if (!isUpdateConfigEvent(item.type)) {
            throw new Error("not a UpdateConfigEvent type");
        }
        return UpdateConfigEvent.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), previous: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Config.reified(), item.fields.previous), current: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Config.reified(), item.fields.current) });
    };
    UpdateConfigEvent.fromBcs = function (data) { return UpdateConfigEvent.fromFields(UpdateConfigEvent.bcs.parse(data)); };
    UpdateConfigEvent.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), previous: this.previous.toJSONField(), current: this.current.toJSONField(),
        };
    };
    UpdateConfigEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    UpdateConfigEvent.fromJSONField = function (field) { return UpdateConfigEvent.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), previous: (0, reified_1.decodeFromJSONField)(structs_2.Config.reified(), field.previous), current: (0, reified_1.decodeFromJSONField)(structs_2.Config.reified(), field.current) }); };
    UpdateConfigEvent.fromJSON = function (json) {
        if (json.$typeName !== UpdateConfigEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return UpdateConfigEvent.fromJSONField(json);
    };
    UpdateConfigEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUpdateConfigEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a UpdateConfigEvent object"));
    } return UpdateConfigEvent.fromFieldsWithTypes(content); };
    UpdateConfigEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching UpdateConfigEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUpdateConfigEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a UpdateConfigEvent object"));
                        }
                        return [2 /*return*/, UpdateConfigEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    UpdateConfigEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::UpdateConfigEvent";
    UpdateConfigEvent.$numTypeParams = 0;
    return UpdateConfigEvent;
}());
exports.UpdateConfigEvent = UpdateConfigEvent;
/* ============================== UpdateStrikeEvent =============================== */
function isUpdateStrikeEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::UpdateStrikeEvent"; }
var UpdateStrikeEvent = /** @class */ (function () {
    function UpdateStrikeEvent(typeArgs, fields) {
        this.$typeName = UpdateStrikeEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([UpdateStrikeEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.oraclePrice = fields.oraclePrice;
        ;
        this.oraclePriceDecimal = fields.oraclePriceDecimal;
        ;
        this.vaultConfig = fields.vaultConfig;
    }
    UpdateStrikeEvent.reified = function () {
        var _this = this;
        return { typeName: UpdateStrikeEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([UpdateStrikeEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return UpdateStrikeEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return UpdateStrikeEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return UpdateStrikeEvent.fromBcs(data); }, bcs: UpdateStrikeEvent.bcs, fromJSONField: function (field) { return UpdateStrikeEvent.fromJSONField(field); }, fromJSON: function (json) { return UpdateStrikeEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return UpdateStrikeEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, UpdateStrikeEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new UpdateStrikeEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(UpdateStrikeEvent, "r", {
        get: function () { return UpdateStrikeEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    UpdateStrikeEvent.phantom = function () { return (0, reified_1.phantom)(UpdateStrikeEvent.reified()); };
    Object.defineProperty(UpdateStrikeEvent, "p", {
        get: function () { return UpdateStrikeEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UpdateStrikeEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("UpdateStrikeEvent", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), oracle_price: bcs_1.bcs.u64(), oracle_price_decimal: bcs_1.bcs.u64(), vault_config: structs_2.VaultConfig.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    UpdateStrikeEvent.fromFields = function (fields) { return UpdateStrikeEvent.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), oraclePrice: (0, reified_1.decodeFromFields)("u64", fields.oracle_price), oraclePriceDecimal: (0, reified_1.decodeFromFields)("u64", fields.oracle_price_decimal), vaultConfig: (0, reified_1.decodeFromFields)(structs_2.VaultConfig.reified(), fields.vault_config) }); };
    UpdateStrikeEvent.fromFieldsWithTypes = function (item) {
        if (!isUpdateStrikeEvent(item.type)) {
            throw new Error("not a UpdateStrikeEvent type");
        }
        return UpdateStrikeEvent.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), oraclePrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.oracle_price), oraclePriceDecimal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.oracle_price_decimal), vaultConfig: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.VaultConfig.reified(), item.fields.vault_config) });
    };
    UpdateStrikeEvent.fromBcs = function (data) { return UpdateStrikeEvent.fromFields(UpdateStrikeEvent.bcs.parse(data)); };
    UpdateStrikeEvent.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), oraclePrice: this.oraclePrice.toString(), oraclePriceDecimal: this.oraclePriceDecimal.toString(), vaultConfig: this.vaultConfig.toJSONField(),
        };
    };
    UpdateStrikeEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    UpdateStrikeEvent.fromJSONField = function (field) { return UpdateStrikeEvent.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), oraclePrice: (0, reified_1.decodeFromJSONField)("u64", field.oraclePrice), oraclePriceDecimal: (0, reified_1.decodeFromJSONField)("u64", field.oraclePriceDecimal), vaultConfig: (0, reified_1.decodeFromJSONField)(structs_2.VaultConfig.reified(), field.vaultConfig) }); };
    UpdateStrikeEvent.fromJSON = function (json) {
        if (json.$typeName !== UpdateStrikeEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return UpdateStrikeEvent.fromJSONField(json);
    };
    UpdateStrikeEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUpdateStrikeEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a UpdateStrikeEvent object"));
    } return UpdateStrikeEvent.fromFieldsWithTypes(content); };
    UpdateStrikeEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching UpdateStrikeEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUpdateStrikeEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a UpdateStrikeEvent object"));
                        }
                        return [2 /*return*/, UpdateStrikeEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    UpdateStrikeEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::UpdateStrikeEvent";
    UpdateStrikeEvent.$numTypeParams = 0;
    return UpdateStrikeEvent;
}());
exports.UpdateStrikeEvent = UpdateStrikeEvent;
/* ============================== UpdateWarmupVaultConfigEvent =============================== */
function isUpdateWarmupVaultConfigEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::UpdateWarmupVaultConfigEvent"; }
var UpdateWarmupVaultConfigEvent = /** @class */ (function () {
    function UpdateWarmupVaultConfigEvent(typeArgs, fields) {
        this.$typeName = UpdateWarmupVaultConfigEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([UpdateWarmupVaultConfigEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.previous = fields.previous;
        ;
        this.current = fields.current;
    }
    UpdateWarmupVaultConfigEvent.reified = function () {
        var _this = this;
        return { typeName: UpdateWarmupVaultConfigEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([UpdateWarmupVaultConfigEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return UpdateWarmupVaultConfigEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return UpdateWarmupVaultConfigEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return UpdateWarmupVaultConfigEvent.fromBcs(data); }, bcs: UpdateWarmupVaultConfigEvent.bcs, fromJSONField: function (field) { return UpdateWarmupVaultConfigEvent.fromJSONField(field); }, fromJSON: function (json) { return UpdateWarmupVaultConfigEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return UpdateWarmupVaultConfigEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, UpdateWarmupVaultConfigEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new UpdateWarmupVaultConfigEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(UpdateWarmupVaultConfigEvent, "r", {
        get: function () { return UpdateWarmupVaultConfigEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    UpdateWarmupVaultConfigEvent.phantom = function () { return (0, reified_1.phantom)(UpdateWarmupVaultConfigEvent.reified()); };
    Object.defineProperty(UpdateWarmupVaultConfigEvent, "p", {
        get: function () { return UpdateWarmupVaultConfigEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UpdateWarmupVaultConfigEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("UpdateWarmupVaultConfigEvent", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), previous: structs_2.VaultConfig.bcs, current: structs_2.VaultConfig.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    UpdateWarmupVaultConfigEvent.fromFields = function (fields) { return UpdateWarmupVaultConfigEvent.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), previous: (0, reified_1.decodeFromFields)(structs_2.VaultConfig.reified(), fields.previous), current: (0, reified_1.decodeFromFields)(structs_2.VaultConfig.reified(), fields.current) }); };
    UpdateWarmupVaultConfigEvent.fromFieldsWithTypes = function (item) {
        if (!isUpdateWarmupVaultConfigEvent(item.type)) {
            throw new Error("not a UpdateWarmupVaultConfigEvent type");
        }
        return UpdateWarmupVaultConfigEvent.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), previous: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.VaultConfig.reified(), item.fields.previous), current: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.VaultConfig.reified(), item.fields.current) });
    };
    UpdateWarmupVaultConfigEvent.fromBcs = function (data) { return UpdateWarmupVaultConfigEvent.fromFields(UpdateWarmupVaultConfigEvent.bcs.parse(data)); };
    UpdateWarmupVaultConfigEvent.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), previous: this.previous.toJSONField(), current: this.current.toJSONField(),
        };
    };
    UpdateWarmupVaultConfigEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    UpdateWarmupVaultConfigEvent.fromJSONField = function (field) { return UpdateWarmupVaultConfigEvent.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), previous: (0, reified_1.decodeFromJSONField)(structs_2.VaultConfig.reified(), field.previous), current: (0, reified_1.decodeFromJSONField)(structs_2.VaultConfig.reified(), field.current) }); };
    UpdateWarmupVaultConfigEvent.fromJSON = function (json) {
        if (json.$typeName !== UpdateWarmupVaultConfigEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return UpdateWarmupVaultConfigEvent.fromJSONField(json);
    };
    UpdateWarmupVaultConfigEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUpdateWarmupVaultConfigEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a UpdateWarmupVaultConfigEvent object"));
    } return UpdateWarmupVaultConfigEvent.fromFieldsWithTypes(content); };
    UpdateWarmupVaultConfigEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching UpdateWarmupVaultConfigEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUpdateWarmupVaultConfigEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a UpdateWarmupVaultConfigEvent object"));
                        }
                        return [2 /*return*/, UpdateWarmupVaultConfigEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    UpdateWarmupVaultConfigEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::UpdateWarmupVaultConfigEvent";
    UpdateWarmupVaultConfigEvent.$numTypeParams = 0;
    return UpdateWarmupVaultConfigEvent;
}());
exports.UpdateWarmupVaultConfigEvent = UpdateWarmupVaultConfigEvent;
/* ============================== WithdrawFixedIncentiveEvent =============================== */
function isWithdrawFixedIncentiveEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::WithdrawFixedIncentiveEvent"; }
var WithdrawFixedIncentiveEvent = /** @class */ (function () {
    function WithdrawFixedIncentiveEvent(typeArgs, fields) {
        this.$typeName = WithdrawFixedIncentiveEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([WithdrawFixedIncentiveEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.token = fields.token;
        ;
        this.amount = fields.amount;
    }
    WithdrawFixedIncentiveEvent.reified = function () {
        var _this = this;
        return { typeName: WithdrawFixedIncentiveEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([WithdrawFixedIncentiveEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return WithdrawFixedIncentiveEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return WithdrawFixedIncentiveEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return WithdrawFixedIncentiveEvent.fromBcs(data); }, bcs: WithdrawFixedIncentiveEvent.bcs, fromJSONField: function (field) { return WithdrawFixedIncentiveEvent.fromJSONField(field); }, fromJSON: function (json) { return WithdrawFixedIncentiveEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return WithdrawFixedIncentiveEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, WithdrawFixedIncentiveEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new WithdrawFixedIncentiveEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(WithdrawFixedIncentiveEvent, "r", {
        get: function () { return WithdrawFixedIncentiveEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    WithdrawFixedIncentiveEvent.phantom = function () { return (0, reified_1.phantom)(WithdrawFixedIncentiveEvent.reified()); };
    Object.defineProperty(WithdrawFixedIncentiveEvent, "p", {
        get: function () { return WithdrawFixedIncentiveEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WithdrawFixedIncentiveEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("WithdrawFixedIncentiveEvent", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), token: structs_1.TypeName.bcs, amount: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    WithdrawFixedIncentiveEvent.fromFields = function (fields) { return WithdrawFixedIncentiveEvent.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), token: (0, reified_1.decodeFromFields)(structs_1.TypeName.reified(), fields.token), amount: (0, reified_1.decodeFromFields)("u64", fields.amount) }); };
    WithdrawFixedIncentiveEvent.fromFieldsWithTypes = function (item) {
        if (!isWithdrawFixedIncentiveEvent(item.type)) {
            throw new Error("not a WithdrawFixedIncentiveEvent type");
        }
        return WithdrawFixedIncentiveEvent.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), token: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.TypeName.reified(), item.fields.token), amount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.amount) });
    };
    WithdrawFixedIncentiveEvent.fromBcs = function (data) { return WithdrawFixedIncentiveEvent.fromFields(WithdrawFixedIncentiveEvent.bcs.parse(data)); };
    WithdrawFixedIncentiveEvent.prototype.toJSONField = function () {
        return {
            signer: this.signer, token: this.token.toJSONField(), amount: this.amount.toString(),
        };
    };
    WithdrawFixedIncentiveEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    WithdrawFixedIncentiveEvent.fromJSONField = function (field) { return WithdrawFixedIncentiveEvent.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), token: (0, reified_1.decodeFromJSONField)(structs_1.TypeName.reified(), field.token), amount: (0, reified_1.decodeFromJSONField)("u64", field.amount) }); };
    WithdrawFixedIncentiveEvent.fromJSON = function (json) {
        if (json.$typeName !== WithdrawFixedIncentiveEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return WithdrawFixedIncentiveEvent.fromJSONField(json);
    };
    WithdrawFixedIncentiveEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isWithdrawFixedIncentiveEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a WithdrawFixedIncentiveEvent object"));
    } return WithdrawFixedIncentiveEvent.fromFieldsWithTypes(content); };
    WithdrawFixedIncentiveEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching WithdrawFixedIncentiveEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isWithdrawFixedIncentiveEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a WithdrawFixedIncentiveEvent object"));
                        }
                        return [2 /*return*/, WithdrawFixedIncentiveEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    WithdrawFixedIncentiveEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::WithdrawFixedIncentiveEvent";
    WithdrawFixedIncentiveEvent.$numTypeParams = 0;
    return WithdrawFixedIncentiveEvent;
}());
exports.WithdrawFixedIncentiveEvent = WithdrawFixedIncentiveEvent;
