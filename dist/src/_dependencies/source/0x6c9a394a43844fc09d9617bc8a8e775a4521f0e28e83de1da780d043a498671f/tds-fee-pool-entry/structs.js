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
exports.TakeSharedFeeEvent = exports.TakeFeeEvent = exports.RemoveSharedFeePoolAuthorizedUserEvent = exports.RemoveFeePoolAuthorizedUserEvent = exports.AddSharedFeePoolAuthorizedUserEvent = exports.AddFeePoolAuthorizedUserEvent = exports.SendFeeEvent = void 0;
exports.isSendFeeEvent = isSendFeeEvent;
exports.isAddFeePoolAuthorizedUserEvent = isAddFeePoolAuthorizedUserEvent;
exports.isAddSharedFeePoolAuthorizedUserEvent = isAddSharedFeePoolAuthorizedUserEvent;
exports.isRemoveFeePoolAuthorizedUserEvent = isRemoveFeePoolAuthorizedUserEvent;
exports.isRemoveSharedFeePoolAuthorizedUserEvent = isRemoveSharedFeePoolAuthorizedUserEvent;
exports.isTakeFeeEvent = isTakeFeeEvent;
exports.isTakeSharedFeeEvent = isTakeSharedFeeEvent;
var reified = __importStar(require("../../../../_framework/reified"));
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var structs_1 = require("../../0x1/type-name/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== SendFeeEvent =============================== */
function isSendFeeEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_fee_pool_entry::SendFeeEvent"; }
var SendFeeEvent = /** @class */ (function () {
    function SendFeeEvent(typeArgs, fields) {
        this.$typeName = SendFeeEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([SendFeeEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.token = fields.token;
        ;
        this.amount = fields.amount;
        ;
        this.recipient = fields.recipient;
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
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), token: structs_1.TypeName.bcs, amount: bcs_1.bcs.u64(), recipient: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, })
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    SendFeeEvent.fromFields = function (fields) { return SendFeeEvent.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), token: (0, reified_1.decodeFromFields)(structs_1.TypeName.reified(), fields.token), amount: (0, reified_1.decodeFromFields)("u64", fields.amount), recipient: (0, reified_1.decodeFromFields)("address", fields.recipient) }); };
    SendFeeEvent.fromFieldsWithTypes = function (item) {
        if (!isSendFeeEvent(item.type)) {
            throw new Error("not a SendFeeEvent type");
        }
        return SendFeeEvent.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), token: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.TypeName.reified(), item.fields.token), amount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.amount), recipient: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.recipient) });
    };
    SendFeeEvent.fromBcs = function (data) { return SendFeeEvent.fromFields(SendFeeEvent.bcs.parse(data)); };
    SendFeeEvent.prototype.toJSONField = function () {
        return {
            signer: this.signer, token: this.token.toJSONField(), amount: this.amount.toString(), recipient: this.recipient,
        };
    };
    SendFeeEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    SendFeeEvent.fromJSONField = function (field) { return SendFeeEvent.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), token: (0, reified_1.decodeFromJSONField)(structs_1.TypeName.reified(), field.token), amount: (0, reified_1.decodeFromJSONField)("u64", field.amount), recipient: (0, reified_1.decodeFromJSONField)("address", field.recipient) }); };
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
    SendFeeEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_fee_pool_entry::SendFeeEvent";
    SendFeeEvent.$numTypeParams = 0;
    return SendFeeEvent;
}());
exports.SendFeeEvent = SendFeeEvent;
/* ============================== AddFeePoolAuthorizedUserEvent =============================== */
function isAddFeePoolAuthorizedUserEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_fee_pool_entry::AddFeePoolAuthorizedUserEvent"; }
var AddFeePoolAuthorizedUserEvent = /** @class */ (function () {
    function AddFeePoolAuthorizedUserEvent(typeArgs, fields) {
        this.$typeName = AddFeePoolAuthorizedUserEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([AddFeePoolAuthorizedUserEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.users = fields.users;
    }
    AddFeePoolAuthorizedUserEvent.reified = function () {
        var _this = this;
        return { typeName: AddFeePoolAuthorizedUserEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([AddFeePoolAuthorizedUserEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return AddFeePoolAuthorizedUserEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return AddFeePoolAuthorizedUserEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return AddFeePoolAuthorizedUserEvent.fromBcs(data); }, bcs: AddFeePoolAuthorizedUserEvent.bcs, fromJSONField: function (field) { return AddFeePoolAuthorizedUserEvent.fromJSONField(field); }, fromJSON: function (json) { return AddFeePoolAuthorizedUserEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return AddFeePoolAuthorizedUserEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, AddFeePoolAuthorizedUserEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new AddFeePoolAuthorizedUserEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(AddFeePoolAuthorizedUserEvent, "r", {
        get: function () { return AddFeePoolAuthorizedUserEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    AddFeePoolAuthorizedUserEvent.phantom = function () { return (0, reified_1.phantom)(AddFeePoolAuthorizedUserEvent.reified()); };
    Object.defineProperty(AddFeePoolAuthorizedUserEvent, "p", {
        get: function () { return AddFeePoolAuthorizedUserEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddFeePoolAuthorizedUserEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("AddFeePoolAuthorizedUserEvent", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), users: bcs_1.bcs.vector(bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }))
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    AddFeePoolAuthorizedUserEvent.fromFields = function (fields) { return AddFeePoolAuthorizedUserEvent.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), users: (0, reified_1.decodeFromFields)(reified.vector("address"), fields.users) }); };
    AddFeePoolAuthorizedUserEvent.fromFieldsWithTypes = function (item) {
        if (!isAddFeePoolAuthorizedUserEvent(item.type)) {
            throw new Error("not a AddFeePoolAuthorizedUserEvent type");
        }
        return AddFeePoolAuthorizedUserEvent.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), users: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("address"), item.fields.users) });
    };
    AddFeePoolAuthorizedUserEvent.fromBcs = function (data) { return AddFeePoolAuthorizedUserEvent.fromFields(AddFeePoolAuthorizedUserEvent.bcs.parse(data)); };
    AddFeePoolAuthorizedUserEvent.prototype.toJSONField = function () {
        return {
            signer: this.signer, users: (0, reified_1.fieldToJSON)("vector<address>", this.users),
        };
    };
    AddFeePoolAuthorizedUserEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    AddFeePoolAuthorizedUserEvent.fromJSONField = function (field) { return AddFeePoolAuthorizedUserEvent.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), users: (0, reified_1.decodeFromJSONField)(reified.vector("address"), field.users) }); };
    AddFeePoolAuthorizedUserEvent.fromJSON = function (json) {
        if (json.$typeName !== AddFeePoolAuthorizedUserEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return AddFeePoolAuthorizedUserEvent.fromJSONField(json);
    };
    AddFeePoolAuthorizedUserEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isAddFeePoolAuthorizedUserEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a AddFeePoolAuthorizedUserEvent object"));
    } return AddFeePoolAuthorizedUserEvent.fromFieldsWithTypes(content); };
    AddFeePoolAuthorizedUserEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching AddFeePoolAuthorizedUserEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isAddFeePoolAuthorizedUserEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a AddFeePoolAuthorizedUserEvent object"));
                        }
                        return [2 /*return*/, AddFeePoolAuthorizedUserEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    AddFeePoolAuthorizedUserEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_fee_pool_entry::AddFeePoolAuthorizedUserEvent";
    AddFeePoolAuthorizedUserEvent.$numTypeParams = 0;
    return AddFeePoolAuthorizedUserEvent;
}());
exports.AddFeePoolAuthorizedUserEvent = AddFeePoolAuthorizedUserEvent;
/* ============================== AddSharedFeePoolAuthorizedUserEvent =============================== */
function isAddSharedFeePoolAuthorizedUserEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_fee_pool_entry::AddSharedFeePoolAuthorizedUserEvent"; }
var AddSharedFeePoolAuthorizedUserEvent = /** @class */ (function () {
    function AddSharedFeePoolAuthorizedUserEvent(typeArgs, fields) {
        this.$typeName = AddSharedFeePoolAuthorizedUserEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([AddSharedFeePoolAuthorizedUserEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.users = fields.users;
    }
    AddSharedFeePoolAuthorizedUserEvent.reified = function () {
        var _this = this;
        return { typeName: AddSharedFeePoolAuthorizedUserEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([AddSharedFeePoolAuthorizedUserEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return AddSharedFeePoolAuthorizedUserEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return AddSharedFeePoolAuthorizedUserEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return AddSharedFeePoolAuthorizedUserEvent.fromBcs(data); }, bcs: AddSharedFeePoolAuthorizedUserEvent.bcs, fromJSONField: function (field) { return AddSharedFeePoolAuthorizedUserEvent.fromJSONField(field); }, fromJSON: function (json) { return AddSharedFeePoolAuthorizedUserEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return AddSharedFeePoolAuthorizedUserEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, AddSharedFeePoolAuthorizedUserEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new AddSharedFeePoolAuthorizedUserEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(AddSharedFeePoolAuthorizedUserEvent, "r", {
        get: function () { return AddSharedFeePoolAuthorizedUserEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    AddSharedFeePoolAuthorizedUserEvent.phantom = function () { return (0, reified_1.phantom)(AddSharedFeePoolAuthorizedUserEvent.reified()); };
    Object.defineProperty(AddSharedFeePoolAuthorizedUserEvent, "p", {
        get: function () { return AddSharedFeePoolAuthorizedUserEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddSharedFeePoolAuthorizedUserEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("AddSharedFeePoolAuthorizedUserEvent", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), users: bcs_1.bcs.vector(bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }))
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    AddSharedFeePoolAuthorizedUserEvent.fromFields = function (fields) { return AddSharedFeePoolAuthorizedUserEvent.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), users: (0, reified_1.decodeFromFields)(reified.vector("address"), fields.users) }); };
    AddSharedFeePoolAuthorizedUserEvent.fromFieldsWithTypes = function (item) {
        if (!isAddSharedFeePoolAuthorizedUserEvent(item.type)) {
            throw new Error("not a AddSharedFeePoolAuthorizedUserEvent type");
        }
        return AddSharedFeePoolAuthorizedUserEvent.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), users: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("address"), item.fields.users) });
    };
    AddSharedFeePoolAuthorizedUserEvent.fromBcs = function (data) { return AddSharedFeePoolAuthorizedUserEvent.fromFields(AddSharedFeePoolAuthorizedUserEvent.bcs.parse(data)); };
    AddSharedFeePoolAuthorizedUserEvent.prototype.toJSONField = function () {
        return {
            signer: this.signer, users: (0, reified_1.fieldToJSON)("vector<address>", this.users),
        };
    };
    AddSharedFeePoolAuthorizedUserEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    AddSharedFeePoolAuthorizedUserEvent.fromJSONField = function (field) { return AddSharedFeePoolAuthorizedUserEvent.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), users: (0, reified_1.decodeFromJSONField)(reified.vector("address"), field.users) }); };
    AddSharedFeePoolAuthorizedUserEvent.fromJSON = function (json) {
        if (json.$typeName !== AddSharedFeePoolAuthorizedUserEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return AddSharedFeePoolAuthorizedUserEvent.fromJSONField(json);
    };
    AddSharedFeePoolAuthorizedUserEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isAddSharedFeePoolAuthorizedUserEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a AddSharedFeePoolAuthorizedUserEvent object"));
    } return AddSharedFeePoolAuthorizedUserEvent.fromFieldsWithTypes(content); };
    AddSharedFeePoolAuthorizedUserEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching AddSharedFeePoolAuthorizedUserEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isAddSharedFeePoolAuthorizedUserEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a AddSharedFeePoolAuthorizedUserEvent object"));
                        }
                        return [2 /*return*/, AddSharedFeePoolAuthorizedUserEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    AddSharedFeePoolAuthorizedUserEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_fee_pool_entry::AddSharedFeePoolAuthorizedUserEvent";
    AddSharedFeePoolAuthorizedUserEvent.$numTypeParams = 0;
    return AddSharedFeePoolAuthorizedUserEvent;
}());
exports.AddSharedFeePoolAuthorizedUserEvent = AddSharedFeePoolAuthorizedUserEvent;
/* ============================== RemoveFeePoolAuthorizedUserEvent =============================== */
function isRemoveFeePoolAuthorizedUserEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_fee_pool_entry::RemoveFeePoolAuthorizedUserEvent"; }
var RemoveFeePoolAuthorizedUserEvent = /** @class */ (function () {
    function RemoveFeePoolAuthorizedUserEvent(typeArgs, fields) {
        this.$typeName = RemoveFeePoolAuthorizedUserEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([RemoveFeePoolAuthorizedUserEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.users = fields.users;
    }
    RemoveFeePoolAuthorizedUserEvent.reified = function () {
        var _this = this;
        return { typeName: RemoveFeePoolAuthorizedUserEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([RemoveFeePoolAuthorizedUserEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return RemoveFeePoolAuthorizedUserEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return RemoveFeePoolAuthorizedUserEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return RemoveFeePoolAuthorizedUserEvent.fromBcs(data); }, bcs: RemoveFeePoolAuthorizedUserEvent.bcs, fromJSONField: function (field) { return RemoveFeePoolAuthorizedUserEvent.fromJSONField(field); }, fromJSON: function (json) { return RemoveFeePoolAuthorizedUserEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return RemoveFeePoolAuthorizedUserEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, RemoveFeePoolAuthorizedUserEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new RemoveFeePoolAuthorizedUserEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(RemoveFeePoolAuthorizedUserEvent, "r", {
        get: function () { return RemoveFeePoolAuthorizedUserEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    RemoveFeePoolAuthorizedUserEvent.phantom = function () { return (0, reified_1.phantom)(RemoveFeePoolAuthorizedUserEvent.reified()); };
    Object.defineProperty(RemoveFeePoolAuthorizedUserEvent, "p", {
        get: function () { return RemoveFeePoolAuthorizedUserEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RemoveFeePoolAuthorizedUserEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("RemoveFeePoolAuthorizedUserEvent", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), users: bcs_1.bcs.vector(bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }))
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    RemoveFeePoolAuthorizedUserEvent.fromFields = function (fields) { return RemoveFeePoolAuthorizedUserEvent.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), users: (0, reified_1.decodeFromFields)(reified.vector("address"), fields.users) }); };
    RemoveFeePoolAuthorizedUserEvent.fromFieldsWithTypes = function (item) {
        if (!isRemoveFeePoolAuthorizedUserEvent(item.type)) {
            throw new Error("not a RemoveFeePoolAuthorizedUserEvent type");
        }
        return RemoveFeePoolAuthorizedUserEvent.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), users: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("address"), item.fields.users) });
    };
    RemoveFeePoolAuthorizedUserEvent.fromBcs = function (data) { return RemoveFeePoolAuthorizedUserEvent.fromFields(RemoveFeePoolAuthorizedUserEvent.bcs.parse(data)); };
    RemoveFeePoolAuthorizedUserEvent.prototype.toJSONField = function () {
        return {
            signer: this.signer, users: (0, reified_1.fieldToJSON)("vector<address>", this.users),
        };
    };
    RemoveFeePoolAuthorizedUserEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    RemoveFeePoolAuthorizedUserEvent.fromJSONField = function (field) { return RemoveFeePoolAuthorizedUserEvent.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), users: (0, reified_1.decodeFromJSONField)(reified.vector("address"), field.users) }); };
    RemoveFeePoolAuthorizedUserEvent.fromJSON = function (json) {
        if (json.$typeName !== RemoveFeePoolAuthorizedUserEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return RemoveFeePoolAuthorizedUserEvent.fromJSONField(json);
    };
    RemoveFeePoolAuthorizedUserEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isRemoveFeePoolAuthorizedUserEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a RemoveFeePoolAuthorizedUserEvent object"));
    } return RemoveFeePoolAuthorizedUserEvent.fromFieldsWithTypes(content); };
    RemoveFeePoolAuthorizedUserEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching RemoveFeePoolAuthorizedUserEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRemoveFeePoolAuthorizedUserEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a RemoveFeePoolAuthorizedUserEvent object"));
                        }
                        return [2 /*return*/, RemoveFeePoolAuthorizedUserEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    RemoveFeePoolAuthorizedUserEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_fee_pool_entry::RemoveFeePoolAuthorizedUserEvent";
    RemoveFeePoolAuthorizedUserEvent.$numTypeParams = 0;
    return RemoveFeePoolAuthorizedUserEvent;
}());
exports.RemoveFeePoolAuthorizedUserEvent = RemoveFeePoolAuthorizedUserEvent;
/* ============================== RemoveSharedFeePoolAuthorizedUserEvent =============================== */
function isRemoveSharedFeePoolAuthorizedUserEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_fee_pool_entry::RemoveSharedFeePoolAuthorizedUserEvent"; }
var RemoveSharedFeePoolAuthorizedUserEvent = /** @class */ (function () {
    function RemoveSharedFeePoolAuthorizedUserEvent(typeArgs, fields) {
        this.$typeName = RemoveSharedFeePoolAuthorizedUserEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([RemoveSharedFeePoolAuthorizedUserEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.users = fields.users;
    }
    RemoveSharedFeePoolAuthorizedUserEvent.reified = function () {
        var _this = this;
        return { typeName: RemoveSharedFeePoolAuthorizedUserEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([RemoveSharedFeePoolAuthorizedUserEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return RemoveSharedFeePoolAuthorizedUserEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return RemoveSharedFeePoolAuthorizedUserEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return RemoveSharedFeePoolAuthorizedUserEvent.fromBcs(data); }, bcs: RemoveSharedFeePoolAuthorizedUserEvent.bcs, fromJSONField: function (field) { return RemoveSharedFeePoolAuthorizedUserEvent.fromJSONField(field); }, fromJSON: function (json) { return RemoveSharedFeePoolAuthorizedUserEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return RemoveSharedFeePoolAuthorizedUserEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, RemoveSharedFeePoolAuthorizedUserEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new RemoveSharedFeePoolAuthorizedUserEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(RemoveSharedFeePoolAuthorizedUserEvent, "r", {
        get: function () { return RemoveSharedFeePoolAuthorizedUserEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    RemoveSharedFeePoolAuthorizedUserEvent.phantom = function () { return (0, reified_1.phantom)(RemoveSharedFeePoolAuthorizedUserEvent.reified()); };
    Object.defineProperty(RemoveSharedFeePoolAuthorizedUserEvent, "p", {
        get: function () { return RemoveSharedFeePoolAuthorizedUserEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RemoveSharedFeePoolAuthorizedUserEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("RemoveSharedFeePoolAuthorizedUserEvent", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), users: bcs_1.bcs.vector(bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }))
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    RemoveSharedFeePoolAuthorizedUserEvent.fromFields = function (fields) { return RemoveSharedFeePoolAuthorizedUserEvent.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), users: (0, reified_1.decodeFromFields)(reified.vector("address"), fields.users) }); };
    RemoveSharedFeePoolAuthorizedUserEvent.fromFieldsWithTypes = function (item) {
        if (!isRemoveSharedFeePoolAuthorizedUserEvent(item.type)) {
            throw new Error("not a RemoveSharedFeePoolAuthorizedUserEvent type");
        }
        return RemoveSharedFeePoolAuthorizedUserEvent.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), users: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("address"), item.fields.users) });
    };
    RemoveSharedFeePoolAuthorizedUserEvent.fromBcs = function (data) { return RemoveSharedFeePoolAuthorizedUserEvent.fromFields(RemoveSharedFeePoolAuthorizedUserEvent.bcs.parse(data)); };
    RemoveSharedFeePoolAuthorizedUserEvent.prototype.toJSONField = function () {
        return {
            signer: this.signer, users: (0, reified_1.fieldToJSON)("vector<address>", this.users),
        };
    };
    RemoveSharedFeePoolAuthorizedUserEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    RemoveSharedFeePoolAuthorizedUserEvent.fromJSONField = function (field) { return RemoveSharedFeePoolAuthorizedUserEvent.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), users: (0, reified_1.decodeFromJSONField)(reified.vector("address"), field.users) }); };
    RemoveSharedFeePoolAuthorizedUserEvent.fromJSON = function (json) {
        if (json.$typeName !== RemoveSharedFeePoolAuthorizedUserEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return RemoveSharedFeePoolAuthorizedUserEvent.fromJSONField(json);
    };
    RemoveSharedFeePoolAuthorizedUserEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isRemoveSharedFeePoolAuthorizedUserEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a RemoveSharedFeePoolAuthorizedUserEvent object"));
    } return RemoveSharedFeePoolAuthorizedUserEvent.fromFieldsWithTypes(content); };
    RemoveSharedFeePoolAuthorizedUserEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching RemoveSharedFeePoolAuthorizedUserEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRemoveSharedFeePoolAuthorizedUserEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a RemoveSharedFeePoolAuthorizedUserEvent object"));
                        }
                        return [2 /*return*/, RemoveSharedFeePoolAuthorizedUserEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    RemoveSharedFeePoolAuthorizedUserEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_fee_pool_entry::RemoveSharedFeePoolAuthorizedUserEvent";
    RemoveSharedFeePoolAuthorizedUserEvent.$numTypeParams = 0;
    return RemoveSharedFeePoolAuthorizedUserEvent;
}());
exports.RemoveSharedFeePoolAuthorizedUserEvent = RemoveSharedFeePoolAuthorizedUserEvent;
/* ============================== TakeFeeEvent =============================== */
function isTakeFeeEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_fee_pool_entry::TakeFeeEvent"; }
var TakeFeeEvent = /** @class */ (function () {
    function TakeFeeEvent(typeArgs, fields) {
        this.$typeName = TakeFeeEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([TakeFeeEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.token = fields.token;
        ;
        this.amount = fields.amount;
    }
    TakeFeeEvent.reified = function () {
        var _this = this;
        return { typeName: TakeFeeEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([TakeFeeEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return TakeFeeEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return TakeFeeEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return TakeFeeEvent.fromBcs(data); }, bcs: TakeFeeEvent.bcs, fromJSONField: function (field) { return TakeFeeEvent.fromJSONField(field); }, fromJSON: function (json) { return TakeFeeEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return TakeFeeEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, TakeFeeEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new TakeFeeEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(TakeFeeEvent, "r", {
        get: function () { return TakeFeeEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    TakeFeeEvent.phantom = function () { return (0, reified_1.phantom)(TakeFeeEvent.reified()); };
    Object.defineProperty(TakeFeeEvent, "p", {
        get: function () { return TakeFeeEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TakeFeeEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("TakeFeeEvent", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), token: structs_1.TypeName.bcs, amount: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    TakeFeeEvent.fromFields = function (fields) { return TakeFeeEvent.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), token: (0, reified_1.decodeFromFields)(structs_1.TypeName.reified(), fields.token), amount: (0, reified_1.decodeFromFields)("u64", fields.amount) }); };
    TakeFeeEvent.fromFieldsWithTypes = function (item) {
        if (!isTakeFeeEvent(item.type)) {
            throw new Error("not a TakeFeeEvent type");
        }
        return TakeFeeEvent.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), token: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.TypeName.reified(), item.fields.token), amount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.amount) });
    };
    TakeFeeEvent.fromBcs = function (data) { return TakeFeeEvent.fromFields(TakeFeeEvent.bcs.parse(data)); };
    TakeFeeEvent.prototype.toJSONField = function () {
        return {
            signer: this.signer, token: this.token.toJSONField(), amount: this.amount.toString(),
        };
    };
    TakeFeeEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    TakeFeeEvent.fromJSONField = function (field) { return TakeFeeEvent.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), token: (0, reified_1.decodeFromJSONField)(structs_1.TypeName.reified(), field.token), amount: (0, reified_1.decodeFromJSONField)("u64", field.amount) }); };
    TakeFeeEvent.fromJSON = function (json) {
        if (json.$typeName !== TakeFeeEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return TakeFeeEvent.fromJSONField(json);
    };
    TakeFeeEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTakeFeeEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a TakeFeeEvent object"));
    } return TakeFeeEvent.fromFieldsWithTypes(content); };
    TakeFeeEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching TakeFeeEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTakeFeeEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a TakeFeeEvent object"));
                        }
                        return [2 /*return*/, TakeFeeEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    TakeFeeEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_fee_pool_entry::TakeFeeEvent";
    TakeFeeEvent.$numTypeParams = 0;
    return TakeFeeEvent;
}());
exports.TakeFeeEvent = TakeFeeEvent;
/* ============================== TakeSharedFeeEvent =============================== */
function isTakeSharedFeeEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_fee_pool_entry::TakeSharedFeeEvent"; }
var TakeSharedFeeEvent = /** @class */ (function () {
    function TakeSharedFeeEvent(typeArgs, fields) {
        this.$typeName = TakeSharedFeeEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([TakeSharedFeeEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.key = fields.key;
        ;
        this.token = fields.token;
        ;
        this.amount = fields.amount;
    }
    TakeSharedFeeEvent.reified = function () {
        var _this = this;
        return { typeName: TakeSharedFeeEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([TakeSharedFeeEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return TakeSharedFeeEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return TakeSharedFeeEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return TakeSharedFeeEvent.fromBcs(data); }, bcs: TakeSharedFeeEvent.bcs, fromJSONField: function (field) { return TakeSharedFeeEvent.fromJSONField(field); }, fromJSON: function (json) { return TakeSharedFeeEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return TakeSharedFeeEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, TakeSharedFeeEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new TakeSharedFeeEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(TakeSharedFeeEvent, "r", {
        get: function () { return TakeSharedFeeEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    TakeSharedFeeEvent.phantom = function () { return (0, reified_1.phantom)(TakeSharedFeeEvent.reified()); };
    Object.defineProperty(TakeSharedFeeEvent, "p", {
        get: function () { return TakeSharedFeeEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TakeSharedFeeEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("TakeSharedFeeEvent", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), key: bcs_1.bcs.vector(bcs_1.bcs.u8()), token: structs_1.TypeName.bcs, amount: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    TakeSharedFeeEvent.fromFields = function (fields) { return TakeSharedFeeEvent.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), key: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.key), token: (0, reified_1.decodeFromFields)(structs_1.TypeName.reified(), fields.token), amount: (0, reified_1.decodeFromFields)("u64", fields.amount) }); };
    TakeSharedFeeEvent.fromFieldsWithTypes = function (item) {
        if (!isTakeSharedFeeEvent(item.type)) {
            throw new Error("not a TakeSharedFeeEvent type");
        }
        return TakeSharedFeeEvent.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), key: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.key), token: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.TypeName.reified(), item.fields.token), amount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.amount) });
    };
    TakeSharedFeeEvent.fromBcs = function (data) { return TakeSharedFeeEvent.fromFields(TakeSharedFeeEvent.bcs.parse(data)); };
    TakeSharedFeeEvent.prototype.toJSONField = function () {
        return {
            signer: this.signer, key: (0, reified_1.fieldToJSON)("vector<u8>", this.key), token: this.token.toJSONField(), amount: this.amount.toString(),
        };
    };
    TakeSharedFeeEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    TakeSharedFeeEvent.fromJSONField = function (field) { return TakeSharedFeeEvent.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), key: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.key), token: (0, reified_1.decodeFromJSONField)(structs_1.TypeName.reified(), field.token), amount: (0, reified_1.decodeFromJSONField)("u64", field.amount) }); };
    TakeSharedFeeEvent.fromJSON = function (json) {
        if (json.$typeName !== TakeSharedFeeEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return TakeSharedFeeEvent.fromJSONField(json);
    };
    TakeSharedFeeEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTakeSharedFeeEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a TakeSharedFeeEvent object"));
    } return TakeSharedFeeEvent.fromFieldsWithTypes(content); };
    TakeSharedFeeEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching TakeSharedFeeEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTakeSharedFeeEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a TakeSharedFeeEvent object"));
                        }
                        return [2 /*return*/, TakeSharedFeeEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    TakeSharedFeeEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_fee_pool_entry::TakeSharedFeeEvent";
    TakeSharedFeeEvent.$numTypeParams = 0;
    return TakeSharedFeeEvent;
}());
exports.TakeSharedFeeEvent = TakeSharedFeeEvent;
