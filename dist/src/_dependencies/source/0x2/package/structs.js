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
exports.UpgradeTicket = exports.UpgradeReceipt = exports.UpgradeCap = exports.Publisher = void 0;
exports.isPublisher = isPublisher;
exports.isUpgradeCap = isUpgradeCap;
exports.isUpgradeReceipt = isUpgradeReceipt;
exports.isUpgradeTicket = isUpgradeTicket;
var reified = __importStar(require("../../../../_framework/reified"));
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var structs_1 = require("../../0x1/ascii/structs");
var structs_2 = require("../object/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== Publisher =============================== */
function isPublisher(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::package::Publisher"; }
var Publisher = /** @class */ (function () {
    function Publisher(typeArgs, fields) {
        this.$typeName = Publisher.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Publisher.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.package = fields.package;
        ;
        this.moduleName = fields.moduleName;
    }
    Publisher.reified = function () {
        var _this = this;
        return { typeName: Publisher.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Publisher.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return Publisher.fromFields(fields); }, fromFieldsWithTypes: function (item) { return Publisher.fromFieldsWithTypes(item); }, fromBcs: function (data) { return Publisher.fromBcs(data); }, bcs: Publisher.bcs, fromJSONField: function (field) { return Publisher.fromJSONField(field); }, fromJSON: function (json) { return Publisher.fromJSON(json); }, fromSuiParsedData: function (content) { return Publisher.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Publisher.fetch(client, id)];
            }); }); }, new: function (fields) { return new Publisher([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Publisher, "r", {
        get: function () { return Publisher.reified(); },
        enumerable: false,
        configurable: true
    });
    Publisher.phantom = function () { return (0, reified_1.phantom)(Publisher.reified()); };
    Object.defineProperty(Publisher, "p", {
        get: function () { return Publisher.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Publisher, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Publisher", {
                id: structs_2.UID.bcs, package: structs_1.String.bcs, module_name: structs_1.String.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Publisher.fromFields = function (fields) { return Publisher.reified().new({ id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id), package: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.package), moduleName: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.module_name) }); };
    Publisher.fromFieldsWithTypes = function (item) {
        if (!isPublisher(item.type)) {
            throw new Error("not a Publisher type");
        }
        return Publisher.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id), package: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.package), moduleName: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.module_name) });
    };
    Publisher.fromBcs = function (data) { return Publisher.fromFields(Publisher.bcs.parse(data)); };
    Publisher.prototype.toJSONField = function () {
        return {
            id: this.id, package: this.package, moduleName: this.moduleName,
        };
    };
    Publisher.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Publisher.fromJSONField = function (field) { return Publisher.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id), package: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.package), moduleName: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.moduleName) }); };
    Publisher.fromJSON = function (json) {
        if (json.$typeName !== Publisher.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Publisher.fromJSONField(json);
    };
    Publisher.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isPublisher(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Publisher object"));
    } return Publisher.fromFieldsWithTypes(content); };
    Publisher.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Publisher object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isPublisher(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Publisher object"));
                        }
                        return [2 /*return*/, Publisher.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Publisher.$typeName = "0x2::package::Publisher";
    Publisher.$numTypeParams = 0;
    return Publisher;
}());
exports.Publisher = Publisher;
/* ============================== UpgradeCap =============================== */
function isUpgradeCap(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::package::UpgradeCap"; }
var UpgradeCap = /** @class */ (function () {
    function UpgradeCap(typeArgs, fields) {
        this.$typeName = UpgradeCap.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([UpgradeCap.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.package = fields.package;
        ;
        this.version = fields.version;
        ;
        this.policy = fields.policy;
    }
    UpgradeCap.reified = function () {
        var _this = this;
        return { typeName: UpgradeCap.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([UpgradeCap.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return UpgradeCap.fromFields(fields); }, fromFieldsWithTypes: function (item) { return UpgradeCap.fromFieldsWithTypes(item); }, fromBcs: function (data) { return UpgradeCap.fromBcs(data); }, bcs: UpgradeCap.bcs, fromJSONField: function (field) { return UpgradeCap.fromJSONField(field); }, fromJSON: function (json) { return UpgradeCap.fromJSON(json); }, fromSuiParsedData: function (content) { return UpgradeCap.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, UpgradeCap.fetch(client, id)];
            }); }); }, new: function (fields) { return new UpgradeCap([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(UpgradeCap, "r", {
        get: function () { return UpgradeCap.reified(); },
        enumerable: false,
        configurable: true
    });
    UpgradeCap.phantom = function () { return (0, reified_1.phantom)(UpgradeCap.reified()); };
    Object.defineProperty(UpgradeCap, "p", {
        get: function () { return UpgradeCap.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UpgradeCap, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("UpgradeCap", {
                id: structs_2.UID.bcs, package: structs_2.ID.bcs, version: bcs_1.bcs.u64(), policy: bcs_1.bcs.u8()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    UpgradeCap.fromFields = function (fields) { return UpgradeCap.reified().new({ id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id), package: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.package), version: (0, reified_1.decodeFromFields)("u64", fields.version), policy: (0, reified_1.decodeFromFields)("u8", fields.policy) }); };
    UpgradeCap.fromFieldsWithTypes = function (item) {
        if (!isUpgradeCap(item.type)) {
            throw new Error("not a UpgradeCap type");
        }
        return UpgradeCap.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id), package: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.package), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), policy: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.policy) });
    };
    UpgradeCap.fromBcs = function (data) { return UpgradeCap.fromFields(UpgradeCap.bcs.parse(data)); };
    UpgradeCap.prototype.toJSONField = function () {
        return {
            id: this.id, package: this.package, version: this.version.toString(), policy: this.policy,
        };
    };
    UpgradeCap.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    UpgradeCap.fromJSONField = function (field) { return UpgradeCap.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id), package: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.package), version: (0, reified_1.decodeFromJSONField)("u64", field.version), policy: (0, reified_1.decodeFromJSONField)("u8", field.policy) }); };
    UpgradeCap.fromJSON = function (json) {
        if (json.$typeName !== UpgradeCap.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return UpgradeCap.fromJSONField(json);
    };
    UpgradeCap.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUpgradeCap(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a UpgradeCap object"));
    } return UpgradeCap.fromFieldsWithTypes(content); };
    UpgradeCap.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching UpgradeCap object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUpgradeCap(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a UpgradeCap object"));
                        }
                        return [2 /*return*/, UpgradeCap.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    UpgradeCap.$typeName = "0x2::package::UpgradeCap";
    UpgradeCap.$numTypeParams = 0;
    return UpgradeCap;
}());
exports.UpgradeCap = UpgradeCap;
/* ============================== UpgradeReceipt =============================== */
function isUpgradeReceipt(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::package::UpgradeReceipt"; }
var UpgradeReceipt = /** @class */ (function () {
    function UpgradeReceipt(typeArgs, fields) {
        this.$typeName = UpgradeReceipt.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([UpgradeReceipt.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.cap = fields.cap;
        ;
        this.package = fields.package;
    }
    UpgradeReceipt.reified = function () {
        var _this = this;
        return { typeName: UpgradeReceipt.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([UpgradeReceipt.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return UpgradeReceipt.fromFields(fields); }, fromFieldsWithTypes: function (item) { return UpgradeReceipt.fromFieldsWithTypes(item); }, fromBcs: function (data) { return UpgradeReceipt.fromBcs(data); }, bcs: UpgradeReceipt.bcs, fromJSONField: function (field) { return UpgradeReceipt.fromJSONField(field); }, fromJSON: function (json) { return UpgradeReceipt.fromJSON(json); }, fromSuiParsedData: function (content) { return UpgradeReceipt.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, UpgradeReceipt.fetch(client, id)];
            }); }); }, new: function (fields) { return new UpgradeReceipt([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(UpgradeReceipt, "r", {
        get: function () { return UpgradeReceipt.reified(); },
        enumerable: false,
        configurable: true
    });
    UpgradeReceipt.phantom = function () { return (0, reified_1.phantom)(UpgradeReceipt.reified()); };
    Object.defineProperty(UpgradeReceipt, "p", {
        get: function () { return UpgradeReceipt.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UpgradeReceipt, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("UpgradeReceipt", {
                cap: structs_2.ID.bcs, package: structs_2.ID.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    UpgradeReceipt.fromFields = function (fields) { return UpgradeReceipt.reified().new({ cap: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.cap), package: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.package) }); };
    UpgradeReceipt.fromFieldsWithTypes = function (item) {
        if (!isUpgradeReceipt(item.type)) {
            throw new Error("not a UpgradeReceipt type");
        }
        return UpgradeReceipt.reified().new({ cap: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.cap), package: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.package) });
    };
    UpgradeReceipt.fromBcs = function (data) { return UpgradeReceipt.fromFields(UpgradeReceipt.bcs.parse(data)); };
    UpgradeReceipt.prototype.toJSONField = function () {
        return {
            cap: this.cap, package: this.package,
        };
    };
    UpgradeReceipt.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    UpgradeReceipt.fromJSONField = function (field) { return UpgradeReceipt.reified().new({ cap: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.cap), package: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.package) }); };
    UpgradeReceipt.fromJSON = function (json) {
        if (json.$typeName !== UpgradeReceipt.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return UpgradeReceipt.fromJSONField(json);
    };
    UpgradeReceipt.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUpgradeReceipt(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a UpgradeReceipt object"));
    } return UpgradeReceipt.fromFieldsWithTypes(content); };
    UpgradeReceipt.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching UpgradeReceipt object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUpgradeReceipt(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a UpgradeReceipt object"));
                        }
                        return [2 /*return*/, UpgradeReceipt.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    UpgradeReceipt.$typeName = "0x2::package::UpgradeReceipt";
    UpgradeReceipt.$numTypeParams = 0;
    return UpgradeReceipt;
}());
exports.UpgradeReceipt = UpgradeReceipt;
/* ============================== UpgradeTicket =============================== */
function isUpgradeTicket(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::package::UpgradeTicket"; }
var UpgradeTicket = /** @class */ (function () {
    function UpgradeTicket(typeArgs, fields) {
        this.$typeName = UpgradeTicket.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([UpgradeTicket.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.cap = fields.cap;
        ;
        this.package = fields.package;
        ;
        this.policy = fields.policy;
        ;
        this.digest = fields.digest;
    }
    UpgradeTicket.reified = function () {
        var _this = this;
        return { typeName: UpgradeTicket.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([UpgradeTicket.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return UpgradeTicket.fromFields(fields); }, fromFieldsWithTypes: function (item) { return UpgradeTicket.fromFieldsWithTypes(item); }, fromBcs: function (data) { return UpgradeTicket.fromBcs(data); }, bcs: UpgradeTicket.bcs, fromJSONField: function (field) { return UpgradeTicket.fromJSONField(field); }, fromJSON: function (json) { return UpgradeTicket.fromJSON(json); }, fromSuiParsedData: function (content) { return UpgradeTicket.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, UpgradeTicket.fetch(client, id)];
            }); }); }, new: function (fields) { return new UpgradeTicket([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(UpgradeTicket, "r", {
        get: function () { return UpgradeTicket.reified(); },
        enumerable: false,
        configurable: true
    });
    UpgradeTicket.phantom = function () { return (0, reified_1.phantom)(UpgradeTicket.reified()); };
    Object.defineProperty(UpgradeTicket, "p", {
        get: function () { return UpgradeTicket.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UpgradeTicket, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("UpgradeTicket", {
                cap: structs_2.ID.bcs, package: structs_2.ID.bcs, policy: bcs_1.bcs.u8(), digest: bcs_1.bcs.vector(bcs_1.bcs.u8())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    UpgradeTicket.fromFields = function (fields) { return UpgradeTicket.reified().new({ cap: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.cap), package: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.package), policy: (0, reified_1.decodeFromFields)("u8", fields.policy), digest: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.digest) }); };
    UpgradeTicket.fromFieldsWithTypes = function (item) {
        if (!isUpgradeTicket(item.type)) {
            throw new Error("not a UpgradeTicket type");
        }
        return UpgradeTicket.reified().new({ cap: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.cap), package: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.package), policy: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.policy), digest: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.digest) });
    };
    UpgradeTicket.fromBcs = function (data) { return UpgradeTicket.fromFields(UpgradeTicket.bcs.parse(data)); };
    UpgradeTicket.prototype.toJSONField = function () {
        return {
            cap: this.cap, package: this.package, policy: this.policy, digest: (0, reified_1.fieldToJSON)("vector<u8>", this.digest),
        };
    };
    UpgradeTicket.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    UpgradeTicket.fromJSONField = function (field) { return UpgradeTicket.reified().new({ cap: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.cap), package: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.package), policy: (0, reified_1.decodeFromJSONField)("u8", field.policy), digest: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.digest) }); };
    UpgradeTicket.fromJSON = function (json) {
        if (json.$typeName !== UpgradeTicket.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return UpgradeTicket.fromJSONField(json);
    };
    UpgradeTicket.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUpgradeTicket(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a UpgradeTicket object"));
    } return UpgradeTicket.fromFieldsWithTypes(content); };
    UpgradeTicket.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching UpgradeTicket object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUpgradeTicket(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a UpgradeTicket object"));
                        }
                        return [2 /*return*/, UpgradeTicket.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    UpgradeTicket.$typeName = "0x2::package::UpgradeTicket";
    UpgradeTicket.$numTypeParams = 0;
    return UpgradeTicket;
}());
exports.UpgradeTicket = UpgradeTicket;
