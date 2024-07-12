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
exports.TypusUserRegistry = exports.RemoveTailsExpAmount = exports.Metadata = exports.AddTailsExpAmount = exports.AddAccumulatedTgldAmount = void 0;
exports.isAddAccumulatedTgldAmount = isAddAccumulatedTgldAmount;
exports.isAddTailsExpAmount = isAddTailsExpAmount;
exports.isMetadata = isMetadata;
exports.isRemoveTailsExpAmount = isRemoveTailsExpAmount;
exports.isTypusUserRegistry = isTypusUserRegistry;
var reified = __importStar(require("../../../../_framework/reified"));
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var structs_1 = require("../../0x2/linked-table/structs");
var structs_2 = require("../../0x2/object/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== AddAccumulatedTgldAmount =============================== */
function isAddAccumulatedTgldAmount(type) { type = (0, util_1.compressSuiType)(type); return type === "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::user::AddAccumulatedTgldAmount"; }
var AddAccumulatedTgldAmount = /** @class */ (function () {
    function AddAccumulatedTgldAmount(typeArgs, fields) {
        this.$typeName = AddAccumulatedTgldAmount.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([AddAccumulatedTgldAmount.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.user = fields.user;
        ;
        this.log = fields.log;
        ;
        this.bcsPadding = fields.bcsPadding;
    }
    AddAccumulatedTgldAmount.reified = function () {
        var _this = this;
        return { typeName: AddAccumulatedTgldAmount.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([AddAccumulatedTgldAmount.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return AddAccumulatedTgldAmount.fromFields(fields); }, fromFieldsWithTypes: function (item) { return AddAccumulatedTgldAmount.fromFieldsWithTypes(item); }, fromBcs: function (data) { return AddAccumulatedTgldAmount.fromBcs(data); }, bcs: AddAccumulatedTgldAmount.bcs, fromJSONField: function (field) { return AddAccumulatedTgldAmount.fromJSONField(field); }, fromJSON: function (json) { return AddAccumulatedTgldAmount.fromJSON(json); }, fromSuiParsedData: function (content) { return AddAccumulatedTgldAmount.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, AddAccumulatedTgldAmount.fetch(client, id)];
            }); }); }, new: function (fields) { return new AddAccumulatedTgldAmount([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(AddAccumulatedTgldAmount, "r", {
        get: function () { return AddAccumulatedTgldAmount.reified(); },
        enumerable: false,
        configurable: true
    });
    AddAccumulatedTgldAmount.phantom = function () { return (0, reified_1.phantom)(AddAccumulatedTgldAmount.reified()); };
    Object.defineProperty(AddAccumulatedTgldAmount, "p", {
        get: function () { return AddAccumulatedTgldAmount.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddAccumulatedTgldAmount, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("AddAccumulatedTgldAmount", {
                user: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), log: bcs_1.bcs.vector(bcs_1.bcs.u64()), bcs_padding: bcs_1.bcs.vector(bcs_1.bcs.vector(bcs_1.bcs.u8()))
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    AddAccumulatedTgldAmount.fromFields = function (fields) { return AddAccumulatedTgldAmount.reified().new({ user: (0, reified_1.decodeFromFields)("address", fields.user), log: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.log), bcsPadding: (0, reified_1.decodeFromFields)(reified.vector(reified.vector("u8")), fields.bcs_padding) }); };
    AddAccumulatedTgldAmount.fromFieldsWithTypes = function (item) {
        if (!isAddAccumulatedTgldAmount(item.type)) {
            throw new Error("not a AddAccumulatedTgldAmount type");
        }
        return AddAccumulatedTgldAmount.reified().new({ user: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.user), log: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.log), bcsPadding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(reified.vector("u8")), item.fields.bcs_padding) });
    };
    AddAccumulatedTgldAmount.fromBcs = function (data) { return AddAccumulatedTgldAmount.fromFields(AddAccumulatedTgldAmount.bcs.parse(data)); };
    AddAccumulatedTgldAmount.prototype.toJSONField = function () {
        return {
            user: this.user, log: (0, reified_1.fieldToJSON)("vector<u64>", this.log), bcsPadding: (0, reified_1.fieldToJSON)("vector<vector<u8>>", this.bcsPadding),
        };
    };
    AddAccumulatedTgldAmount.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    AddAccumulatedTgldAmount.fromJSONField = function (field) { return AddAccumulatedTgldAmount.reified().new({ user: (0, reified_1.decodeFromJSONField)("address", field.user), log: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.log), bcsPadding: (0, reified_1.decodeFromJSONField)(reified.vector(reified.vector("u8")), field.bcsPadding) }); };
    AddAccumulatedTgldAmount.fromJSON = function (json) {
        if (json.$typeName !== AddAccumulatedTgldAmount.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return AddAccumulatedTgldAmount.fromJSONField(json);
    };
    AddAccumulatedTgldAmount.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isAddAccumulatedTgldAmount(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a AddAccumulatedTgldAmount object"));
    } return AddAccumulatedTgldAmount.fromFieldsWithTypes(content); };
    AddAccumulatedTgldAmount.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching AddAccumulatedTgldAmount object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isAddAccumulatedTgldAmount(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a AddAccumulatedTgldAmount object"));
                        }
                        return [2 /*return*/, AddAccumulatedTgldAmount.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    AddAccumulatedTgldAmount.$typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::user::AddAccumulatedTgldAmount";
    AddAccumulatedTgldAmount.$numTypeParams = 0;
    return AddAccumulatedTgldAmount;
}());
exports.AddAccumulatedTgldAmount = AddAccumulatedTgldAmount;
/* ============================== AddTailsExpAmount =============================== */
function isAddTailsExpAmount(type) { type = (0, util_1.compressSuiType)(type); return type === "0x1840fac0c84618087065346acdbac28bdec4326c416fcd2dc6d2f1b7d86fe62::user::AddTailsExpAmount"; }
var AddTailsExpAmount = /** @class */ (function () {
    function AddTailsExpAmount(typeArgs, fields) {
        this.$typeName = AddTailsExpAmount.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([AddTailsExpAmount.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.user = fields.user;
        ;
        this.log = fields.log;
        ;
        this.bcsPadding = fields.bcsPadding;
    }
    AddTailsExpAmount.reified = function () {
        var _this = this;
        return { typeName: AddTailsExpAmount.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([AddTailsExpAmount.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return AddTailsExpAmount.fromFields(fields); }, fromFieldsWithTypes: function (item) { return AddTailsExpAmount.fromFieldsWithTypes(item); }, fromBcs: function (data) { return AddTailsExpAmount.fromBcs(data); }, bcs: AddTailsExpAmount.bcs, fromJSONField: function (field) { return AddTailsExpAmount.fromJSONField(field); }, fromJSON: function (json) { return AddTailsExpAmount.fromJSON(json); }, fromSuiParsedData: function (content) { return AddTailsExpAmount.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, AddTailsExpAmount.fetch(client, id)];
            }); }); }, new: function (fields) { return new AddTailsExpAmount([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(AddTailsExpAmount, "r", {
        get: function () { return AddTailsExpAmount.reified(); },
        enumerable: false,
        configurable: true
    });
    AddTailsExpAmount.phantom = function () { return (0, reified_1.phantom)(AddTailsExpAmount.reified()); };
    Object.defineProperty(AddTailsExpAmount, "p", {
        get: function () { return AddTailsExpAmount.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddTailsExpAmount, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("AddTailsExpAmount", {
                user: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), log: bcs_1.bcs.vector(bcs_1.bcs.u64()), bcs_padding: bcs_1.bcs.vector(bcs_1.bcs.vector(bcs_1.bcs.u8()))
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    AddTailsExpAmount.fromFields = function (fields) { return AddTailsExpAmount.reified().new({ user: (0, reified_1.decodeFromFields)("address", fields.user), log: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.log), bcsPadding: (0, reified_1.decodeFromFields)(reified.vector(reified.vector("u8")), fields.bcs_padding) }); };
    AddTailsExpAmount.fromFieldsWithTypes = function (item) {
        if (!isAddTailsExpAmount(item.type)) {
            throw new Error("not a AddTailsExpAmount type");
        }
        return AddTailsExpAmount.reified().new({ user: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.user), log: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.log), bcsPadding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(reified.vector("u8")), item.fields.bcs_padding) });
    };
    AddTailsExpAmount.fromBcs = function (data) { return AddTailsExpAmount.fromFields(AddTailsExpAmount.bcs.parse(data)); };
    AddTailsExpAmount.prototype.toJSONField = function () {
        return {
            user: this.user, log: (0, reified_1.fieldToJSON)("vector<u64>", this.log), bcsPadding: (0, reified_1.fieldToJSON)("vector<vector<u8>>", this.bcsPadding),
        };
    };
    AddTailsExpAmount.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    AddTailsExpAmount.fromJSONField = function (field) { return AddTailsExpAmount.reified().new({ user: (0, reified_1.decodeFromJSONField)("address", field.user), log: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.log), bcsPadding: (0, reified_1.decodeFromJSONField)(reified.vector(reified.vector("u8")), field.bcsPadding) }); };
    AddTailsExpAmount.fromJSON = function (json) {
        if (json.$typeName !== AddTailsExpAmount.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return AddTailsExpAmount.fromJSONField(json);
    };
    AddTailsExpAmount.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isAddTailsExpAmount(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a AddTailsExpAmount object"));
    } return AddTailsExpAmount.fromFieldsWithTypes(content); };
    AddTailsExpAmount.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching AddTailsExpAmount object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isAddTailsExpAmount(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a AddTailsExpAmount object"));
                        }
                        return [2 /*return*/, AddTailsExpAmount.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    AddTailsExpAmount.$typeName = "0x1840fac0c84618087065346acdbac28bdec4326c416fcd2dc6d2f1b7d86fe62::user::AddTailsExpAmount";
    AddTailsExpAmount.$numTypeParams = 0;
    return AddTailsExpAmount;
}());
exports.AddTailsExpAmount = AddTailsExpAmount;
/* ============================== Metadata =============================== */
function isMetadata(type) { type = (0, util_1.compressSuiType)(type); return type === "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::user::Metadata"; }
var Metadata = /** @class */ (function () {
    function Metadata(typeArgs, fields) {
        this.$typeName = Metadata.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Metadata.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.content = fields.content;
    }
    Metadata.reified = function () {
        var _this = this;
        return { typeName: Metadata.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Metadata.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return Metadata.fromFields(fields); }, fromFieldsWithTypes: function (item) { return Metadata.fromFieldsWithTypes(item); }, fromBcs: function (data) { return Metadata.fromBcs(data); }, bcs: Metadata.bcs, fromJSONField: function (field) { return Metadata.fromJSONField(field); }, fromJSON: function (json) { return Metadata.fromJSON(json); }, fromSuiParsedData: function (content) { return Metadata.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Metadata.fetch(client, id)];
            }); }); }, new: function (fields) { return new Metadata([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Metadata, "r", {
        get: function () { return Metadata.reified(); },
        enumerable: false,
        configurable: true
    });
    Metadata.phantom = function () { return (0, reified_1.phantom)(Metadata.reified()); };
    Object.defineProperty(Metadata, "p", {
        get: function () { return Metadata.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Metadata, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Metadata", {
                content: bcs_1.bcs.vector(bcs_1.bcs.u64())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Metadata.fromFields = function (fields) { return Metadata.reified().new({ content: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.content) }); };
    Metadata.fromFieldsWithTypes = function (item) {
        if (!isMetadata(item.type)) {
            throw new Error("not a Metadata type");
        }
        return Metadata.reified().new({ content: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.content) });
    };
    Metadata.fromBcs = function (data) { return Metadata.fromFields(Metadata.bcs.parse(data)); };
    Metadata.prototype.toJSONField = function () {
        return {
            content: (0, reified_1.fieldToJSON)("vector<u64>", this.content),
        };
    };
    Metadata.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Metadata.fromJSONField = function (field) { return Metadata.reified().new({ content: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.content) }); };
    Metadata.fromJSON = function (json) {
        if (json.$typeName !== Metadata.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Metadata.fromJSONField(json);
    };
    Metadata.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isMetadata(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Metadata object"));
    } return Metadata.fromFieldsWithTypes(content); };
    Metadata.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Metadata object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isMetadata(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Metadata object"));
                        }
                        return [2 /*return*/, Metadata.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Metadata.$typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::user::Metadata";
    Metadata.$numTypeParams = 0;
    return Metadata;
}());
exports.Metadata = Metadata;
/* ============================== RemoveTailsExpAmount =============================== */
function isRemoveTailsExpAmount(type) { type = (0, util_1.compressSuiType)(type); return type === "0x1840fac0c84618087065346acdbac28bdec4326c416fcd2dc6d2f1b7d86fe62::user::RemoveTailsExpAmount"; }
var RemoveTailsExpAmount = /** @class */ (function () {
    function RemoveTailsExpAmount(typeArgs, fields) {
        this.$typeName = RemoveTailsExpAmount.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([RemoveTailsExpAmount.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.user = fields.user;
        ;
        this.log = fields.log;
        ;
        this.bcsPadding = fields.bcsPadding;
    }
    RemoveTailsExpAmount.reified = function () {
        var _this = this;
        return { typeName: RemoveTailsExpAmount.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([RemoveTailsExpAmount.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return RemoveTailsExpAmount.fromFields(fields); }, fromFieldsWithTypes: function (item) { return RemoveTailsExpAmount.fromFieldsWithTypes(item); }, fromBcs: function (data) { return RemoveTailsExpAmount.fromBcs(data); }, bcs: RemoveTailsExpAmount.bcs, fromJSONField: function (field) { return RemoveTailsExpAmount.fromJSONField(field); }, fromJSON: function (json) { return RemoveTailsExpAmount.fromJSON(json); }, fromSuiParsedData: function (content) { return RemoveTailsExpAmount.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, RemoveTailsExpAmount.fetch(client, id)];
            }); }); }, new: function (fields) { return new RemoveTailsExpAmount([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(RemoveTailsExpAmount, "r", {
        get: function () { return RemoveTailsExpAmount.reified(); },
        enumerable: false,
        configurable: true
    });
    RemoveTailsExpAmount.phantom = function () { return (0, reified_1.phantom)(RemoveTailsExpAmount.reified()); };
    Object.defineProperty(RemoveTailsExpAmount, "p", {
        get: function () { return RemoveTailsExpAmount.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RemoveTailsExpAmount, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("RemoveTailsExpAmount", {
                user: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), log: bcs_1.bcs.vector(bcs_1.bcs.u64()), bcs_padding: bcs_1.bcs.vector(bcs_1.bcs.vector(bcs_1.bcs.u8()))
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    RemoveTailsExpAmount.fromFields = function (fields) { return RemoveTailsExpAmount.reified().new({ user: (0, reified_1.decodeFromFields)("address", fields.user), log: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.log), bcsPadding: (0, reified_1.decodeFromFields)(reified.vector(reified.vector("u8")), fields.bcs_padding) }); };
    RemoveTailsExpAmount.fromFieldsWithTypes = function (item) {
        if (!isRemoveTailsExpAmount(item.type)) {
            throw new Error("not a RemoveTailsExpAmount type");
        }
        return RemoveTailsExpAmount.reified().new({ user: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.user), log: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.log), bcsPadding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(reified.vector("u8")), item.fields.bcs_padding) });
    };
    RemoveTailsExpAmount.fromBcs = function (data) { return RemoveTailsExpAmount.fromFields(RemoveTailsExpAmount.bcs.parse(data)); };
    RemoveTailsExpAmount.prototype.toJSONField = function () {
        return {
            user: this.user, log: (0, reified_1.fieldToJSON)("vector<u64>", this.log), bcsPadding: (0, reified_1.fieldToJSON)("vector<vector<u8>>", this.bcsPadding),
        };
    };
    RemoveTailsExpAmount.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    RemoveTailsExpAmount.fromJSONField = function (field) { return RemoveTailsExpAmount.reified().new({ user: (0, reified_1.decodeFromJSONField)("address", field.user), log: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.log), bcsPadding: (0, reified_1.decodeFromJSONField)(reified.vector(reified.vector("u8")), field.bcsPadding) }); };
    RemoveTailsExpAmount.fromJSON = function (json) {
        if (json.$typeName !== RemoveTailsExpAmount.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return RemoveTailsExpAmount.fromJSONField(json);
    };
    RemoveTailsExpAmount.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isRemoveTailsExpAmount(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a RemoveTailsExpAmount object"));
    } return RemoveTailsExpAmount.fromFieldsWithTypes(content); };
    RemoveTailsExpAmount.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching RemoveTailsExpAmount object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRemoveTailsExpAmount(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a RemoveTailsExpAmount object"));
                        }
                        return [2 /*return*/, RemoveTailsExpAmount.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    RemoveTailsExpAmount.$typeName = "0x1840fac0c84618087065346acdbac28bdec4326c416fcd2dc6d2f1b7d86fe62::user::RemoveTailsExpAmount";
    RemoveTailsExpAmount.$numTypeParams = 0;
    return RemoveTailsExpAmount;
}());
exports.RemoveTailsExpAmount = RemoveTailsExpAmount;
/* ============================== TypusUserRegistry =============================== */
function isTypusUserRegistry(type) { type = (0, util_1.compressSuiType)(type); return type === "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::user::TypusUserRegistry"; }
var TypusUserRegistry = /** @class */ (function () {
    function TypusUserRegistry(typeArgs, fields) {
        this.$typeName = TypusUserRegistry.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([TypusUserRegistry.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.metadata = fields.metadata;
    }
    TypusUserRegistry.reified = function () {
        var _this = this;
        return { typeName: TypusUserRegistry.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([TypusUserRegistry.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return TypusUserRegistry.fromFields(fields); }, fromFieldsWithTypes: function (item) { return TypusUserRegistry.fromFieldsWithTypes(item); }, fromBcs: function (data) { return TypusUserRegistry.fromBcs(data); }, bcs: TypusUserRegistry.bcs, fromJSONField: function (field) { return TypusUserRegistry.fromJSONField(field); }, fromJSON: function (json) { return TypusUserRegistry.fromJSON(json); }, fromSuiParsedData: function (content) { return TypusUserRegistry.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, TypusUserRegistry.fetch(client, id)];
            }); }); }, new: function (fields) { return new TypusUserRegistry([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(TypusUserRegistry, "r", {
        get: function () { return TypusUserRegistry.reified(); },
        enumerable: false,
        configurable: true
    });
    TypusUserRegistry.phantom = function () { return (0, reified_1.phantom)(TypusUserRegistry.reified()); };
    Object.defineProperty(TypusUserRegistry, "p", {
        get: function () { return TypusUserRegistry.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TypusUserRegistry, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("TypusUserRegistry", {
                id: structs_2.UID.bcs, metadata: structs_1.LinkedTable.bcs(bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }))
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    TypusUserRegistry.fromFields = function (fields) { return TypusUserRegistry.reified().new({ id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id), metadata: (0, reified_1.decodeFromFields)(structs_1.LinkedTable.reified("address", reified.phantom(Metadata.reified())), fields.metadata) }); };
    TypusUserRegistry.fromFieldsWithTypes = function (item) {
        if (!isTypusUserRegistry(item.type)) {
            throw new Error("not a TypusUserRegistry type");
        }
        return TypusUserRegistry.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id), metadata: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.LinkedTable.reified("address", reified.phantom(Metadata.reified())), item.fields.metadata) });
    };
    TypusUserRegistry.fromBcs = function (data) { return TypusUserRegistry.fromFields(TypusUserRegistry.bcs.parse(data)); };
    TypusUserRegistry.prototype.toJSONField = function () {
        return {
            id: this.id, metadata: this.metadata.toJSONField(),
        };
    };
    TypusUserRegistry.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    TypusUserRegistry.fromJSONField = function (field) { return TypusUserRegistry.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id), metadata: (0, reified_1.decodeFromJSONField)(structs_1.LinkedTable.reified("address", reified.phantom(Metadata.reified())), field.metadata) }); };
    TypusUserRegistry.fromJSON = function (json) {
        if (json.$typeName !== TypusUserRegistry.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return TypusUserRegistry.fromJSONField(json);
    };
    TypusUserRegistry.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTypusUserRegistry(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a TypusUserRegistry object"));
    } return TypusUserRegistry.fromFieldsWithTypes(content); };
    TypusUserRegistry.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching TypusUserRegistry object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTypusUserRegistry(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a TypusUserRegistry object"));
                        }
                        return [2 /*return*/, TypusUserRegistry.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    TypusUserRegistry.$typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::user::TypusUserRegistry";
    TypusUserRegistry.$numTypeParams = 0;
    return TypusUserRegistry;
}());
exports.TypusUserRegistry = TypusUserRegistry;
