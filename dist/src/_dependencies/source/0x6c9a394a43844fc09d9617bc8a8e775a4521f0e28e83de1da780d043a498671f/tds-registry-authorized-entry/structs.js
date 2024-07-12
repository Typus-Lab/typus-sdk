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
exports.UpgradeRegistryEvent = exports.SuspendTransactionEvent = exports.SetAvailableIncentiveAmountEvent = exports.ResumeTransactionEvent = exports.RemoveAuthorizedUserEvent = exports.NewPortfolioVaultEvent = exports.IncentiviseEvent = exports.AddAuthorizedUserEvent = exports.WithdrawIncentiveEvent = void 0;
exports.isWithdrawIncentiveEvent = isWithdrawIncentiveEvent;
exports.isAddAuthorizedUserEvent = isAddAuthorizedUserEvent;
exports.isIncentiviseEvent = isIncentiviseEvent;
exports.isNewPortfolioVaultEvent = isNewPortfolioVaultEvent;
exports.isRemoveAuthorizedUserEvent = isRemoveAuthorizedUserEvent;
exports.isResumeTransactionEvent = isResumeTransactionEvent;
exports.isSetAvailableIncentiveAmountEvent = isSetAvailableIncentiveAmountEvent;
exports.isSuspendTransactionEvent = isSuspendTransactionEvent;
exports.isUpgradeRegistryEvent = isUpgradeRegistryEvent;
var reified = __importStar(require("../../../../_framework/reified"));
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var structs_1 = require("../../0x1/type-name/structs");
var structs_2 = require("../typus-dov-single/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== WithdrawIncentiveEvent =============================== */
function isWithdrawIncentiveEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::WithdrawIncentiveEvent"; }
var WithdrawIncentiveEvent = /** @class */ (function () {
    function WithdrawIncentiveEvent(typeArgs, fields) {
        this.$typeName = WithdrawIncentiveEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([WithdrawIncentiveEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.token = fields.token;
        ;
        this.amount = fields.amount;
    }
    WithdrawIncentiveEvent.reified = function () {
        var _this = this;
        return { typeName: WithdrawIncentiveEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([WithdrawIncentiveEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return WithdrawIncentiveEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return WithdrawIncentiveEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return WithdrawIncentiveEvent.fromBcs(data); }, bcs: WithdrawIncentiveEvent.bcs, fromJSONField: function (field) { return WithdrawIncentiveEvent.fromJSONField(field); }, fromJSON: function (json) { return WithdrawIncentiveEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return WithdrawIncentiveEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, WithdrawIncentiveEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new WithdrawIncentiveEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(WithdrawIncentiveEvent, "r", {
        get: function () { return WithdrawIncentiveEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    WithdrawIncentiveEvent.phantom = function () { return (0, reified_1.phantom)(WithdrawIncentiveEvent.reified()); };
    Object.defineProperty(WithdrawIncentiveEvent, "p", {
        get: function () { return WithdrawIncentiveEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WithdrawIncentiveEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("WithdrawIncentiveEvent", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), token: structs_1.TypeName.bcs, amount: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    WithdrawIncentiveEvent.fromFields = function (fields) { return WithdrawIncentiveEvent.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), token: (0, reified_1.decodeFromFields)(structs_1.TypeName.reified(), fields.token), amount: (0, reified_1.decodeFromFields)("u64", fields.amount) }); };
    WithdrawIncentiveEvent.fromFieldsWithTypes = function (item) {
        if (!isWithdrawIncentiveEvent(item.type)) {
            throw new Error("not a WithdrawIncentiveEvent type");
        }
        return WithdrawIncentiveEvent.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), token: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.TypeName.reified(), item.fields.token), amount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.amount) });
    };
    WithdrawIncentiveEvent.fromBcs = function (data) { return WithdrawIncentiveEvent.fromFields(WithdrawIncentiveEvent.bcs.parse(data)); };
    WithdrawIncentiveEvent.prototype.toJSONField = function () {
        return {
            signer: this.signer, token: this.token.toJSONField(), amount: this.amount.toString(),
        };
    };
    WithdrawIncentiveEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    WithdrawIncentiveEvent.fromJSONField = function (field) { return WithdrawIncentiveEvent.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), token: (0, reified_1.decodeFromJSONField)(structs_1.TypeName.reified(), field.token), amount: (0, reified_1.decodeFromJSONField)("u64", field.amount) }); };
    WithdrawIncentiveEvent.fromJSON = function (json) {
        if (json.$typeName !== WithdrawIncentiveEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return WithdrawIncentiveEvent.fromJSONField(json);
    };
    WithdrawIncentiveEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isWithdrawIncentiveEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a WithdrawIncentiveEvent object"));
    } return WithdrawIncentiveEvent.fromFieldsWithTypes(content); };
    WithdrawIncentiveEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching WithdrawIncentiveEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isWithdrawIncentiveEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a WithdrawIncentiveEvent object"));
                        }
                        return [2 /*return*/, WithdrawIncentiveEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    WithdrawIncentiveEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::WithdrawIncentiveEvent";
    WithdrawIncentiveEvent.$numTypeParams = 0;
    return WithdrawIncentiveEvent;
}());
exports.WithdrawIncentiveEvent = WithdrawIncentiveEvent;
/* ============================== AddAuthorizedUserEvent =============================== */
function isAddAuthorizedUserEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::AddAuthorizedUserEvent"; }
var AddAuthorizedUserEvent = /** @class */ (function () {
    function AddAuthorizedUserEvent(typeArgs, fields) {
        this.$typeName = AddAuthorizedUserEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([AddAuthorizedUserEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.users = fields.users;
    }
    AddAuthorizedUserEvent.reified = function () {
        var _this = this;
        return { typeName: AddAuthorizedUserEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([AddAuthorizedUserEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return AddAuthorizedUserEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return AddAuthorizedUserEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return AddAuthorizedUserEvent.fromBcs(data); }, bcs: AddAuthorizedUserEvent.bcs, fromJSONField: function (field) { return AddAuthorizedUserEvent.fromJSONField(field); }, fromJSON: function (json) { return AddAuthorizedUserEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return AddAuthorizedUserEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, AddAuthorizedUserEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new AddAuthorizedUserEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(AddAuthorizedUserEvent, "r", {
        get: function () { return AddAuthorizedUserEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    AddAuthorizedUserEvent.phantom = function () { return (0, reified_1.phantom)(AddAuthorizedUserEvent.reified()); };
    Object.defineProperty(AddAuthorizedUserEvent, "p", {
        get: function () { return AddAuthorizedUserEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddAuthorizedUserEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("AddAuthorizedUserEvent", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), users: bcs_1.bcs.vector(bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }))
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    AddAuthorizedUserEvent.fromFields = function (fields) { return AddAuthorizedUserEvent.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), users: (0, reified_1.decodeFromFields)(reified.vector("address"), fields.users) }); };
    AddAuthorizedUserEvent.fromFieldsWithTypes = function (item) {
        if (!isAddAuthorizedUserEvent(item.type)) {
            throw new Error("not a AddAuthorizedUserEvent type");
        }
        return AddAuthorizedUserEvent.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), users: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("address"), item.fields.users) });
    };
    AddAuthorizedUserEvent.fromBcs = function (data) { return AddAuthorizedUserEvent.fromFields(AddAuthorizedUserEvent.bcs.parse(data)); };
    AddAuthorizedUserEvent.prototype.toJSONField = function () {
        return {
            signer: this.signer, users: (0, reified_1.fieldToJSON)("vector<address>", this.users),
        };
    };
    AddAuthorizedUserEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    AddAuthorizedUserEvent.fromJSONField = function (field) { return AddAuthorizedUserEvent.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), users: (0, reified_1.decodeFromJSONField)(reified.vector("address"), field.users) }); };
    AddAuthorizedUserEvent.fromJSON = function (json) {
        if (json.$typeName !== AddAuthorizedUserEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return AddAuthorizedUserEvent.fromJSONField(json);
    };
    AddAuthorizedUserEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isAddAuthorizedUserEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a AddAuthorizedUserEvent object"));
    } return AddAuthorizedUserEvent.fromFieldsWithTypes(content); };
    AddAuthorizedUserEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching AddAuthorizedUserEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isAddAuthorizedUserEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a AddAuthorizedUserEvent object"));
                        }
                        return [2 /*return*/, AddAuthorizedUserEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    AddAuthorizedUserEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::AddAuthorizedUserEvent";
    AddAuthorizedUserEvent.$numTypeParams = 0;
    return AddAuthorizedUserEvent;
}());
exports.AddAuthorizedUserEvent = AddAuthorizedUserEvent;
/* ============================== IncentiviseEvent =============================== */
function isIncentiviseEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::IncentiviseEvent"; }
var IncentiviseEvent = /** @class */ (function () {
    function IncentiviseEvent(typeArgs, fields) {
        this.$typeName = IncentiviseEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([IncentiviseEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.token = fields.token;
        ;
        this.amount = fields.amount;
    }
    IncentiviseEvent.reified = function () {
        var _this = this;
        return { typeName: IncentiviseEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([IncentiviseEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return IncentiviseEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return IncentiviseEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return IncentiviseEvent.fromBcs(data); }, bcs: IncentiviseEvent.bcs, fromJSONField: function (field) { return IncentiviseEvent.fromJSONField(field); }, fromJSON: function (json) { return IncentiviseEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return IncentiviseEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, IncentiviseEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new IncentiviseEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(IncentiviseEvent, "r", {
        get: function () { return IncentiviseEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    IncentiviseEvent.phantom = function () { return (0, reified_1.phantom)(IncentiviseEvent.reified()); };
    Object.defineProperty(IncentiviseEvent, "p", {
        get: function () { return IncentiviseEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IncentiviseEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("IncentiviseEvent", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), token: structs_1.TypeName.bcs, amount: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    IncentiviseEvent.fromFields = function (fields) { return IncentiviseEvent.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), token: (0, reified_1.decodeFromFields)(structs_1.TypeName.reified(), fields.token), amount: (0, reified_1.decodeFromFields)("u64", fields.amount) }); };
    IncentiviseEvent.fromFieldsWithTypes = function (item) {
        if (!isIncentiviseEvent(item.type)) {
            throw new Error("not a IncentiviseEvent type");
        }
        return IncentiviseEvent.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), token: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.TypeName.reified(), item.fields.token), amount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.amount) });
    };
    IncentiviseEvent.fromBcs = function (data) { return IncentiviseEvent.fromFields(IncentiviseEvent.bcs.parse(data)); };
    IncentiviseEvent.prototype.toJSONField = function () {
        return {
            signer: this.signer, token: this.token.toJSONField(), amount: this.amount.toString(),
        };
    };
    IncentiviseEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    IncentiviseEvent.fromJSONField = function (field) { return IncentiviseEvent.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), token: (0, reified_1.decodeFromJSONField)(structs_1.TypeName.reified(), field.token), amount: (0, reified_1.decodeFromJSONField)("u64", field.amount) }); };
    IncentiviseEvent.fromJSON = function (json) {
        if (json.$typeName !== IncentiviseEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return IncentiviseEvent.fromJSONField(json);
    };
    IncentiviseEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isIncentiviseEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a IncentiviseEvent object"));
    } return IncentiviseEvent.fromFieldsWithTypes(content); };
    IncentiviseEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching IncentiviseEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isIncentiviseEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a IncentiviseEvent object"));
                        }
                        return [2 /*return*/, IncentiviseEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    IncentiviseEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::IncentiviseEvent";
    IncentiviseEvent.$numTypeParams = 0;
    return IncentiviseEvent;
}());
exports.IncentiviseEvent = IncentiviseEvent;
/* ============================== NewPortfolioVaultEvent =============================== */
function isNewPortfolioVaultEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::NewPortfolioVaultEvent"; }
var NewPortfolioVaultEvent = /** @class */ (function () {
    function NewPortfolioVaultEvent(typeArgs, fields) {
        this.$typeName = NewPortfolioVaultEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([NewPortfolioVaultEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.info = fields.info;
        ;
        this.config = fields.config;
    }
    NewPortfolioVaultEvent.reified = function () {
        var _this = this;
        return { typeName: NewPortfolioVaultEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([NewPortfolioVaultEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return NewPortfolioVaultEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return NewPortfolioVaultEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return NewPortfolioVaultEvent.fromBcs(data); }, bcs: NewPortfolioVaultEvent.bcs, fromJSONField: function (field) { return NewPortfolioVaultEvent.fromJSONField(field); }, fromJSON: function (json) { return NewPortfolioVaultEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return NewPortfolioVaultEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, NewPortfolioVaultEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new NewPortfolioVaultEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(NewPortfolioVaultEvent, "r", {
        get: function () { return NewPortfolioVaultEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    NewPortfolioVaultEvent.phantom = function () { return (0, reified_1.phantom)(NewPortfolioVaultEvent.reified()); };
    Object.defineProperty(NewPortfolioVaultEvent, "p", {
        get: function () { return NewPortfolioVaultEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewPortfolioVaultEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("NewPortfolioVaultEvent", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), info: structs_2.Info.bcs, config: structs_2.Config.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    NewPortfolioVaultEvent.fromFields = function (fields) { return NewPortfolioVaultEvent.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), info: (0, reified_1.decodeFromFields)(structs_2.Info.reified(), fields.info), config: (0, reified_1.decodeFromFields)(structs_2.Config.reified(), fields.config) }); };
    NewPortfolioVaultEvent.fromFieldsWithTypes = function (item) {
        if (!isNewPortfolioVaultEvent(item.type)) {
            throw new Error("not a NewPortfolioVaultEvent type");
        }
        return NewPortfolioVaultEvent.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), info: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Info.reified(), item.fields.info), config: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Config.reified(), item.fields.config) });
    };
    NewPortfolioVaultEvent.fromBcs = function (data) { return NewPortfolioVaultEvent.fromFields(NewPortfolioVaultEvent.bcs.parse(data)); };
    NewPortfolioVaultEvent.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), info: this.info.toJSONField(), config: this.config.toJSONField(),
        };
    };
    NewPortfolioVaultEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    NewPortfolioVaultEvent.fromJSONField = function (field) { return NewPortfolioVaultEvent.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), info: (0, reified_1.decodeFromJSONField)(structs_2.Info.reified(), field.info), config: (0, reified_1.decodeFromJSONField)(structs_2.Config.reified(), field.config) }); };
    NewPortfolioVaultEvent.fromJSON = function (json) {
        if (json.$typeName !== NewPortfolioVaultEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return NewPortfolioVaultEvent.fromJSONField(json);
    };
    NewPortfolioVaultEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isNewPortfolioVaultEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a NewPortfolioVaultEvent object"));
    } return NewPortfolioVaultEvent.fromFieldsWithTypes(content); };
    NewPortfolioVaultEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching NewPortfolioVaultEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isNewPortfolioVaultEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a NewPortfolioVaultEvent object"));
                        }
                        return [2 /*return*/, NewPortfolioVaultEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    NewPortfolioVaultEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::NewPortfolioVaultEvent";
    NewPortfolioVaultEvent.$numTypeParams = 0;
    return NewPortfolioVaultEvent;
}());
exports.NewPortfolioVaultEvent = NewPortfolioVaultEvent;
/* ============================== RemoveAuthorizedUserEvent =============================== */
function isRemoveAuthorizedUserEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::RemoveAuthorizedUserEvent"; }
var RemoveAuthorizedUserEvent = /** @class */ (function () {
    function RemoveAuthorizedUserEvent(typeArgs, fields) {
        this.$typeName = RemoveAuthorizedUserEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([RemoveAuthorizedUserEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.users = fields.users;
    }
    RemoveAuthorizedUserEvent.reified = function () {
        var _this = this;
        return { typeName: RemoveAuthorizedUserEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([RemoveAuthorizedUserEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return RemoveAuthorizedUserEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return RemoveAuthorizedUserEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return RemoveAuthorizedUserEvent.fromBcs(data); }, bcs: RemoveAuthorizedUserEvent.bcs, fromJSONField: function (field) { return RemoveAuthorizedUserEvent.fromJSONField(field); }, fromJSON: function (json) { return RemoveAuthorizedUserEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return RemoveAuthorizedUserEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, RemoveAuthorizedUserEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new RemoveAuthorizedUserEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(RemoveAuthorizedUserEvent, "r", {
        get: function () { return RemoveAuthorizedUserEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    RemoveAuthorizedUserEvent.phantom = function () { return (0, reified_1.phantom)(RemoveAuthorizedUserEvent.reified()); };
    Object.defineProperty(RemoveAuthorizedUserEvent, "p", {
        get: function () { return RemoveAuthorizedUserEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RemoveAuthorizedUserEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("RemoveAuthorizedUserEvent", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), users: bcs_1.bcs.vector(bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }))
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    RemoveAuthorizedUserEvent.fromFields = function (fields) { return RemoveAuthorizedUserEvent.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), users: (0, reified_1.decodeFromFields)(reified.vector("address"), fields.users) }); };
    RemoveAuthorizedUserEvent.fromFieldsWithTypes = function (item) {
        if (!isRemoveAuthorizedUserEvent(item.type)) {
            throw new Error("not a RemoveAuthorizedUserEvent type");
        }
        return RemoveAuthorizedUserEvent.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), users: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("address"), item.fields.users) });
    };
    RemoveAuthorizedUserEvent.fromBcs = function (data) { return RemoveAuthorizedUserEvent.fromFields(RemoveAuthorizedUserEvent.bcs.parse(data)); };
    RemoveAuthorizedUserEvent.prototype.toJSONField = function () {
        return {
            signer: this.signer, users: (0, reified_1.fieldToJSON)("vector<address>", this.users),
        };
    };
    RemoveAuthorizedUserEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    RemoveAuthorizedUserEvent.fromJSONField = function (field) { return RemoveAuthorizedUserEvent.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), users: (0, reified_1.decodeFromJSONField)(reified.vector("address"), field.users) }); };
    RemoveAuthorizedUserEvent.fromJSON = function (json) {
        if (json.$typeName !== RemoveAuthorizedUserEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return RemoveAuthorizedUserEvent.fromJSONField(json);
    };
    RemoveAuthorizedUserEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isRemoveAuthorizedUserEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a RemoveAuthorizedUserEvent object"));
    } return RemoveAuthorizedUserEvent.fromFieldsWithTypes(content); };
    RemoveAuthorizedUserEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching RemoveAuthorizedUserEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRemoveAuthorizedUserEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a RemoveAuthorizedUserEvent object"));
                        }
                        return [2 /*return*/, RemoveAuthorizedUserEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    RemoveAuthorizedUserEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::RemoveAuthorizedUserEvent";
    RemoveAuthorizedUserEvent.$numTypeParams = 0;
    return RemoveAuthorizedUserEvent;
}());
exports.RemoveAuthorizedUserEvent = RemoveAuthorizedUserEvent;
/* ============================== ResumeTransactionEvent =============================== */
function isResumeTransactionEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::ResumeTransactionEvent"; }
var ResumeTransactionEvent = /** @class */ (function () {
    function ResumeTransactionEvent(typeArgs, fields) {
        this.$typeName = ResumeTransactionEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([ResumeTransactionEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
    }
    ResumeTransactionEvent.reified = function () {
        var _this = this;
        return { typeName: ResumeTransactionEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([ResumeTransactionEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return ResumeTransactionEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return ResumeTransactionEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return ResumeTransactionEvent.fromBcs(data); }, bcs: ResumeTransactionEvent.bcs, fromJSONField: function (field) { return ResumeTransactionEvent.fromJSONField(field); }, fromJSON: function (json) { return ResumeTransactionEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return ResumeTransactionEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, ResumeTransactionEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new ResumeTransactionEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(ResumeTransactionEvent, "r", {
        get: function () { return ResumeTransactionEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    ResumeTransactionEvent.phantom = function () { return (0, reified_1.phantom)(ResumeTransactionEvent.reified()); };
    Object.defineProperty(ResumeTransactionEvent, "p", {
        get: function () { return ResumeTransactionEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ResumeTransactionEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("ResumeTransactionEvent", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, })
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    ResumeTransactionEvent.fromFields = function (fields) { return ResumeTransactionEvent.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer) }); };
    ResumeTransactionEvent.fromFieldsWithTypes = function (item) {
        if (!isResumeTransactionEvent(item.type)) {
            throw new Error("not a ResumeTransactionEvent type");
        }
        return ResumeTransactionEvent.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer) });
    };
    ResumeTransactionEvent.fromBcs = function (data) { return ResumeTransactionEvent.fromFields(ResumeTransactionEvent.bcs.parse(data)); };
    ResumeTransactionEvent.prototype.toJSONField = function () {
        return {
            signer: this.signer,
        };
    };
    ResumeTransactionEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    ResumeTransactionEvent.fromJSONField = function (field) { return ResumeTransactionEvent.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer) }); };
    ResumeTransactionEvent.fromJSON = function (json) {
        if (json.$typeName !== ResumeTransactionEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ResumeTransactionEvent.fromJSONField(json);
    };
    ResumeTransactionEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isResumeTransactionEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a ResumeTransactionEvent object"));
    } return ResumeTransactionEvent.fromFieldsWithTypes(content); };
    ResumeTransactionEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching ResumeTransactionEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isResumeTransactionEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a ResumeTransactionEvent object"));
                        }
                        return [2 /*return*/, ResumeTransactionEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    ResumeTransactionEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::ResumeTransactionEvent";
    ResumeTransactionEvent.$numTypeParams = 0;
    return ResumeTransactionEvent;
}());
exports.ResumeTransactionEvent = ResumeTransactionEvent;
/* ============================== SetAvailableIncentiveAmountEvent =============================== */
function isSetAvailableIncentiveAmountEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::SetAvailableIncentiveAmountEvent"; }
var SetAvailableIncentiveAmountEvent = /** @class */ (function () {
    function SetAvailableIncentiveAmountEvent(typeArgs, fields) {
        this.$typeName = SetAvailableIncentiveAmountEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([SetAvailableIncentiveAmountEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.prevAmount = fields.prevAmount;
        ;
        this.amount = fields.amount;
    }
    SetAvailableIncentiveAmountEvent.reified = function () {
        var _this = this;
        return { typeName: SetAvailableIncentiveAmountEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([SetAvailableIncentiveAmountEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return SetAvailableIncentiveAmountEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return SetAvailableIncentiveAmountEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return SetAvailableIncentiveAmountEvent.fromBcs(data); }, bcs: SetAvailableIncentiveAmountEvent.bcs, fromJSONField: function (field) { return SetAvailableIncentiveAmountEvent.fromJSONField(field); }, fromJSON: function (json) { return SetAvailableIncentiveAmountEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return SetAvailableIncentiveAmountEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, SetAvailableIncentiveAmountEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new SetAvailableIncentiveAmountEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(SetAvailableIncentiveAmountEvent, "r", {
        get: function () { return SetAvailableIncentiveAmountEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    SetAvailableIncentiveAmountEvent.phantom = function () { return (0, reified_1.phantom)(SetAvailableIncentiveAmountEvent.reified()); };
    Object.defineProperty(SetAvailableIncentiveAmountEvent, "p", {
        get: function () { return SetAvailableIncentiveAmountEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SetAvailableIncentiveAmountEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("SetAvailableIncentiveAmountEvent", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), prev_amount: bcs_1.bcs.u64(), amount: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    SetAvailableIncentiveAmountEvent.fromFields = function (fields) { return SetAvailableIncentiveAmountEvent.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), prevAmount: (0, reified_1.decodeFromFields)("u64", fields.prev_amount), amount: (0, reified_1.decodeFromFields)("u64", fields.amount) }); };
    SetAvailableIncentiveAmountEvent.fromFieldsWithTypes = function (item) {
        if (!isSetAvailableIncentiveAmountEvent(item.type)) {
            throw new Error("not a SetAvailableIncentiveAmountEvent type");
        }
        return SetAvailableIncentiveAmountEvent.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), prevAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.prev_amount), amount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.amount) });
    };
    SetAvailableIncentiveAmountEvent.fromBcs = function (data) { return SetAvailableIncentiveAmountEvent.fromFields(SetAvailableIncentiveAmountEvent.bcs.parse(data)); };
    SetAvailableIncentiveAmountEvent.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), prevAmount: this.prevAmount.toString(), amount: this.amount.toString(),
        };
    };
    SetAvailableIncentiveAmountEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    SetAvailableIncentiveAmountEvent.fromJSONField = function (field) { return SetAvailableIncentiveAmountEvent.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), prevAmount: (0, reified_1.decodeFromJSONField)("u64", field.prevAmount), amount: (0, reified_1.decodeFromJSONField)("u64", field.amount) }); };
    SetAvailableIncentiveAmountEvent.fromJSON = function (json) {
        if (json.$typeName !== SetAvailableIncentiveAmountEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return SetAvailableIncentiveAmountEvent.fromJSONField(json);
    };
    SetAvailableIncentiveAmountEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isSetAvailableIncentiveAmountEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a SetAvailableIncentiveAmountEvent object"));
    } return SetAvailableIncentiveAmountEvent.fromFieldsWithTypes(content); };
    SetAvailableIncentiveAmountEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching SetAvailableIncentiveAmountEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isSetAvailableIncentiveAmountEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a SetAvailableIncentiveAmountEvent object"));
                        }
                        return [2 /*return*/, SetAvailableIncentiveAmountEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    SetAvailableIncentiveAmountEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::SetAvailableIncentiveAmountEvent";
    SetAvailableIncentiveAmountEvent.$numTypeParams = 0;
    return SetAvailableIncentiveAmountEvent;
}());
exports.SetAvailableIncentiveAmountEvent = SetAvailableIncentiveAmountEvent;
/* ============================== SuspendTransactionEvent =============================== */
function isSuspendTransactionEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::SuspendTransactionEvent"; }
var SuspendTransactionEvent = /** @class */ (function () {
    function SuspendTransactionEvent(typeArgs, fields) {
        this.$typeName = SuspendTransactionEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([SuspendTransactionEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
    }
    SuspendTransactionEvent.reified = function () {
        var _this = this;
        return { typeName: SuspendTransactionEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([SuspendTransactionEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return SuspendTransactionEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return SuspendTransactionEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return SuspendTransactionEvent.fromBcs(data); }, bcs: SuspendTransactionEvent.bcs, fromJSONField: function (field) { return SuspendTransactionEvent.fromJSONField(field); }, fromJSON: function (json) { return SuspendTransactionEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return SuspendTransactionEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, SuspendTransactionEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new SuspendTransactionEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(SuspendTransactionEvent, "r", {
        get: function () { return SuspendTransactionEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    SuspendTransactionEvent.phantom = function () { return (0, reified_1.phantom)(SuspendTransactionEvent.reified()); };
    Object.defineProperty(SuspendTransactionEvent, "p", {
        get: function () { return SuspendTransactionEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SuspendTransactionEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("SuspendTransactionEvent", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, })
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    SuspendTransactionEvent.fromFields = function (fields) { return SuspendTransactionEvent.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer) }); };
    SuspendTransactionEvent.fromFieldsWithTypes = function (item) {
        if (!isSuspendTransactionEvent(item.type)) {
            throw new Error("not a SuspendTransactionEvent type");
        }
        return SuspendTransactionEvent.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer) });
    };
    SuspendTransactionEvent.fromBcs = function (data) { return SuspendTransactionEvent.fromFields(SuspendTransactionEvent.bcs.parse(data)); };
    SuspendTransactionEvent.prototype.toJSONField = function () {
        return {
            signer: this.signer,
        };
    };
    SuspendTransactionEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    SuspendTransactionEvent.fromJSONField = function (field) { return SuspendTransactionEvent.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer) }); };
    SuspendTransactionEvent.fromJSON = function (json) {
        if (json.$typeName !== SuspendTransactionEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return SuspendTransactionEvent.fromJSONField(json);
    };
    SuspendTransactionEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isSuspendTransactionEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a SuspendTransactionEvent object"));
    } return SuspendTransactionEvent.fromFieldsWithTypes(content); };
    SuspendTransactionEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching SuspendTransactionEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isSuspendTransactionEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a SuspendTransactionEvent object"));
                        }
                        return [2 /*return*/, SuspendTransactionEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    SuspendTransactionEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::SuspendTransactionEvent";
    SuspendTransactionEvent.$numTypeParams = 0;
    return SuspendTransactionEvent;
}());
exports.SuspendTransactionEvent = SuspendTransactionEvent;
/* ============================== UpgradeRegistryEvent =============================== */
function isUpgradeRegistryEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::UpgradeRegistryEvent"; }
var UpgradeRegistryEvent = /** @class */ (function () {
    function UpgradeRegistryEvent(typeArgs, fields) {
        this.$typeName = UpgradeRegistryEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([UpgradeRegistryEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.prevVersion = fields.prevVersion;
        ;
        this.version = fields.version;
    }
    UpgradeRegistryEvent.reified = function () {
        var _this = this;
        return { typeName: UpgradeRegistryEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([UpgradeRegistryEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return UpgradeRegistryEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return UpgradeRegistryEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return UpgradeRegistryEvent.fromBcs(data); }, bcs: UpgradeRegistryEvent.bcs, fromJSONField: function (field) { return UpgradeRegistryEvent.fromJSONField(field); }, fromJSON: function (json) { return UpgradeRegistryEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return UpgradeRegistryEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, UpgradeRegistryEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new UpgradeRegistryEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(UpgradeRegistryEvent, "r", {
        get: function () { return UpgradeRegistryEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    UpgradeRegistryEvent.phantom = function () { return (0, reified_1.phantom)(UpgradeRegistryEvent.reified()); };
    Object.defineProperty(UpgradeRegistryEvent, "p", {
        get: function () { return UpgradeRegistryEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UpgradeRegistryEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("UpgradeRegistryEvent", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), prev_version: bcs_1.bcs.u64(), version: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    UpgradeRegistryEvent.fromFields = function (fields) { return UpgradeRegistryEvent.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), prevVersion: (0, reified_1.decodeFromFields)("u64", fields.prev_version), version: (0, reified_1.decodeFromFields)("u64", fields.version) }); };
    UpgradeRegistryEvent.fromFieldsWithTypes = function (item) {
        if (!isUpgradeRegistryEvent(item.type)) {
            throw new Error("not a UpgradeRegistryEvent type");
        }
        return UpgradeRegistryEvent.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), prevVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.prev_version), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version) });
    };
    UpgradeRegistryEvent.fromBcs = function (data) { return UpgradeRegistryEvent.fromFields(UpgradeRegistryEvent.bcs.parse(data)); };
    UpgradeRegistryEvent.prototype.toJSONField = function () {
        return {
            signer: this.signer, prevVersion: this.prevVersion.toString(), version: this.version.toString(),
        };
    };
    UpgradeRegistryEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    UpgradeRegistryEvent.fromJSONField = function (field) { return UpgradeRegistryEvent.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), prevVersion: (0, reified_1.decodeFromJSONField)("u64", field.prevVersion), version: (0, reified_1.decodeFromJSONField)("u64", field.version) }); };
    UpgradeRegistryEvent.fromJSON = function (json) {
        if (json.$typeName !== UpgradeRegistryEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return UpgradeRegistryEvent.fromJSONField(json);
    };
    UpgradeRegistryEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUpgradeRegistryEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a UpgradeRegistryEvent object"));
    } return UpgradeRegistryEvent.fromFieldsWithTypes(content); };
    UpgradeRegistryEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching UpgradeRegistryEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUpgradeRegistryEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a UpgradeRegistryEvent object"));
                        }
                        return [2 /*return*/, UpgradeRegistryEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    UpgradeRegistryEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::UpgradeRegistryEvent";
    UpgradeRegistryEvent.$numTypeParams = 0;
    return UpgradeRegistryEvent;
}());
exports.UpgradeRegistryEvent = UpgradeRegistryEvent;
