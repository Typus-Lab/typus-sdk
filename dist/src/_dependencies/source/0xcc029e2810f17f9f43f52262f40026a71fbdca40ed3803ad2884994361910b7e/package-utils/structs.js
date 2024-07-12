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
exports.PendingPackage = exports.PackageInfo = exports.CurrentPackage = exports.CurrentVersion = void 0;
exports.isCurrentVersion = isCurrentVersion;
exports.isCurrentPackage = isCurrentPackage;
exports.isPackageInfo = isPackageInfo;
exports.isPendingPackage = isPendingPackage;
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var structs_1 = require("../../0x2/object/structs");
var structs_2 = require("../bytes32/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== CurrentVersion =============================== */
function isCurrentVersion(type) { type = (0, util_1.compressSuiType)(type); return type === "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::package_utils::CurrentVersion"; }
var CurrentVersion = /** @class */ (function () {
    function CurrentVersion(typeArgs, fields) {
        this.$typeName = CurrentVersion.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([CurrentVersion.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    CurrentVersion.reified = function () {
        var _this = this;
        return { typeName: CurrentVersion.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([CurrentVersion.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return CurrentVersion.fromFields(fields); }, fromFieldsWithTypes: function (item) { return CurrentVersion.fromFieldsWithTypes(item); }, fromBcs: function (data) { return CurrentVersion.fromBcs(data); }, bcs: CurrentVersion.bcs, fromJSONField: function (field) { return CurrentVersion.fromJSONField(field); }, fromJSON: function (json) { return CurrentVersion.fromJSON(json); }, fromSuiParsedData: function (content) { return CurrentVersion.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, CurrentVersion.fetch(client, id)];
            }); }); }, new: function (fields) { return new CurrentVersion([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(CurrentVersion, "r", {
        get: function () { return CurrentVersion.reified(); },
        enumerable: false,
        configurable: true
    });
    CurrentVersion.phantom = function () { return (0, reified_1.phantom)(CurrentVersion.reified()); };
    Object.defineProperty(CurrentVersion, "p", {
        get: function () { return CurrentVersion.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CurrentVersion, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("CurrentVersion", {
                dummy_field: bcs_1.bcs.bool()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    CurrentVersion.fromFields = function (fields) { return CurrentVersion.reified().new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) }); };
    CurrentVersion.fromFieldsWithTypes = function (item) {
        if (!isCurrentVersion(item.type)) {
            throw new Error("not a CurrentVersion type");
        }
        return CurrentVersion.reified().new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    };
    CurrentVersion.fromBcs = function (data) { return CurrentVersion.fromFields(CurrentVersion.bcs.parse(data)); };
    CurrentVersion.prototype.toJSONField = function () {
        return {
            dummyField: this.dummyField,
        };
    };
    CurrentVersion.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    CurrentVersion.fromJSONField = function (field) { return CurrentVersion.reified().new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) }); };
    CurrentVersion.fromJSON = function (json) {
        if (json.$typeName !== CurrentVersion.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return CurrentVersion.fromJSONField(json);
    };
    CurrentVersion.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isCurrentVersion(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a CurrentVersion object"));
    } return CurrentVersion.fromFieldsWithTypes(content); };
    CurrentVersion.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching CurrentVersion object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isCurrentVersion(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a CurrentVersion object"));
                        }
                        return [2 /*return*/, CurrentVersion.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    CurrentVersion.$typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::package_utils::CurrentVersion";
    CurrentVersion.$numTypeParams = 0;
    return CurrentVersion;
}());
exports.CurrentVersion = CurrentVersion;
/* ============================== CurrentPackage =============================== */
function isCurrentPackage(type) { type = (0, util_1.compressSuiType)(type); return type === "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::package_utils::CurrentPackage"; }
var CurrentPackage = /** @class */ (function () {
    function CurrentPackage(typeArgs, fields) {
        this.$typeName = CurrentPackage.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([CurrentPackage.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    CurrentPackage.reified = function () {
        var _this = this;
        return { typeName: CurrentPackage.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([CurrentPackage.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return CurrentPackage.fromFields(fields); }, fromFieldsWithTypes: function (item) { return CurrentPackage.fromFieldsWithTypes(item); }, fromBcs: function (data) { return CurrentPackage.fromBcs(data); }, bcs: CurrentPackage.bcs, fromJSONField: function (field) { return CurrentPackage.fromJSONField(field); }, fromJSON: function (json) { return CurrentPackage.fromJSON(json); }, fromSuiParsedData: function (content) { return CurrentPackage.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, CurrentPackage.fetch(client, id)];
            }); }); }, new: function (fields) { return new CurrentPackage([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(CurrentPackage, "r", {
        get: function () { return CurrentPackage.reified(); },
        enumerable: false,
        configurable: true
    });
    CurrentPackage.phantom = function () { return (0, reified_1.phantom)(CurrentPackage.reified()); };
    Object.defineProperty(CurrentPackage, "p", {
        get: function () { return CurrentPackage.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CurrentPackage, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("CurrentPackage", {
                dummy_field: bcs_1.bcs.bool()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    CurrentPackage.fromFields = function (fields) { return CurrentPackage.reified().new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) }); };
    CurrentPackage.fromFieldsWithTypes = function (item) {
        if (!isCurrentPackage(item.type)) {
            throw new Error("not a CurrentPackage type");
        }
        return CurrentPackage.reified().new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    };
    CurrentPackage.fromBcs = function (data) { return CurrentPackage.fromFields(CurrentPackage.bcs.parse(data)); };
    CurrentPackage.prototype.toJSONField = function () {
        return {
            dummyField: this.dummyField,
        };
    };
    CurrentPackage.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    CurrentPackage.fromJSONField = function (field) { return CurrentPackage.reified().new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) }); };
    CurrentPackage.fromJSON = function (json) {
        if (json.$typeName !== CurrentPackage.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return CurrentPackage.fromJSONField(json);
    };
    CurrentPackage.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isCurrentPackage(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a CurrentPackage object"));
    } return CurrentPackage.fromFieldsWithTypes(content); };
    CurrentPackage.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching CurrentPackage object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isCurrentPackage(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a CurrentPackage object"));
                        }
                        return [2 /*return*/, CurrentPackage.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    CurrentPackage.$typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::package_utils::CurrentPackage";
    CurrentPackage.$numTypeParams = 0;
    return CurrentPackage;
}());
exports.CurrentPackage = CurrentPackage;
/* ============================== PackageInfo =============================== */
function isPackageInfo(type) { type = (0, util_1.compressSuiType)(type); return type === "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::package_utils::PackageInfo"; }
var PackageInfo = /** @class */ (function () {
    function PackageInfo(typeArgs, fields) {
        this.$typeName = PackageInfo.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([PackageInfo.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.package = fields.package;
        ;
        this.digest = fields.digest;
    }
    PackageInfo.reified = function () {
        var _this = this;
        return { typeName: PackageInfo.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([PackageInfo.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return PackageInfo.fromFields(fields); }, fromFieldsWithTypes: function (item) { return PackageInfo.fromFieldsWithTypes(item); }, fromBcs: function (data) { return PackageInfo.fromBcs(data); }, bcs: PackageInfo.bcs, fromJSONField: function (field) { return PackageInfo.fromJSONField(field); }, fromJSON: function (json) { return PackageInfo.fromJSON(json); }, fromSuiParsedData: function (content) { return PackageInfo.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, PackageInfo.fetch(client, id)];
            }); }); }, new: function (fields) { return new PackageInfo([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(PackageInfo, "r", {
        get: function () { return PackageInfo.reified(); },
        enumerable: false,
        configurable: true
    });
    PackageInfo.phantom = function () { return (0, reified_1.phantom)(PackageInfo.reified()); };
    Object.defineProperty(PackageInfo, "p", {
        get: function () { return PackageInfo.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PackageInfo, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("PackageInfo", {
                package: structs_1.ID.bcs, digest: structs_2.Bytes32.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    PackageInfo.fromFields = function (fields) { return PackageInfo.reified().new({ package: (0, reified_1.decodeFromFields)(structs_1.ID.reified(), fields.package), digest: (0, reified_1.decodeFromFields)(structs_2.Bytes32.reified(), fields.digest) }); };
    PackageInfo.fromFieldsWithTypes = function (item) {
        if (!isPackageInfo(item.type)) {
            throw new Error("not a PackageInfo type");
        }
        return PackageInfo.reified().new({ package: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.ID.reified(), item.fields.package), digest: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Bytes32.reified(), item.fields.digest) });
    };
    PackageInfo.fromBcs = function (data) { return PackageInfo.fromFields(PackageInfo.bcs.parse(data)); };
    PackageInfo.prototype.toJSONField = function () {
        return {
            package: this.package, digest: this.digest.toJSONField(),
        };
    };
    PackageInfo.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    PackageInfo.fromJSONField = function (field) { return PackageInfo.reified().new({ package: (0, reified_1.decodeFromJSONField)(structs_1.ID.reified(), field.package), digest: (0, reified_1.decodeFromJSONField)(structs_2.Bytes32.reified(), field.digest) }); };
    PackageInfo.fromJSON = function (json) {
        if (json.$typeName !== PackageInfo.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return PackageInfo.fromJSONField(json);
    };
    PackageInfo.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isPackageInfo(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a PackageInfo object"));
    } return PackageInfo.fromFieldsWithTypes(content); };
    PackageInfo.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching PackageInfo object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isPackageInfo(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a PackageInfo object"));
                        }
                        return [2 /*return*/, PackageInfo.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    PackageInfo.$typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::package_utils::PackageInfo";
    PackageInfo.$numTypeParams = 0;
    return PackageInfo;
}());
exports.PackageInfo = PackageInfo;
/* ============================== PendingPackage =============================== */
function isPendingPackage(type) { type = (0, util_1.compressSuiType)(type); return type === "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::package_utils::PendingPackage"; }
var PendingPackage = /** @class */ (function () {
    function PendingPackage(typeArgs, fields) {
        this.$typeName = PendingPackage.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([PendingPackage.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    PendingPackage.reified = function () {
        var _this = this;
        return { typeName: PendingPackage.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([PendingPackage.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return PendingPackage.fromFields(fields); }, fromFieldsWithTypes: function (item) { return PendingPackage.fromFieldsWithTypes(item); }, fromBcs: function (data) { return PendingPackage.fromBcs(data); }, bcs: PendingPackage.bcs, fromJSONField: function (field) { return PendingPackage.fromJSONField(field); }, fromJSON: function (json) { return PendingPackage.fromJSON(json); }, fromSuiParsedData: function (content) { return PendingPackage.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, PendingPackage.fetch(client, id)];
            }); }); }, new: function (fields) { return new PendingPackage([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(PendingPackage, "r", {
        get: function () { return PendingPackage.reified(); },
        enumerable: false,
        configurable: true
    });
    PendingPackage.phantom = function () { return (0, reified_1.phantom)(PendingPackage.reified()); };
    Object.defineProperty(PendingPackage, "p", {
        get: function () { return PendingPackage.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PendingPackage, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("PendingPackage", {
                dummy_field: bcs_1.bcs.bool()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    PendingPackage.fromFields = function (fields) { return PendingPackage.reified().new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) }); };
    PendingPackage.fromFieldsWithTypes = function (item) {
        if (!isPendingPackage(item.type)) {
            throw new Error("not a PendingPackage type");
        }
        return PendingPackage.reified().new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    };
    PendingPackage.fromBcs = function (data) { return PendingPackage.fromFields(PendingPackage.bcs.parse(data)); };
    PendingPackage.prototype.toJSONField = function () {
        return {
            dummyField: this.dummyField,
        };
    };
    PendingPackage.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    PendingPackage.fromJSONField = function (field) { return PendingPackage.reified().new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) }); };
    PendingPackage.fromJSON = function (json) {
        if (json.$typeName !== PendingPackage.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return PendingPackage.fromJSONField(json);
    };
    PendingPackage.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isPendingPackage(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a PendingPackage object"));
    } return PendingPackage.fromFieldsWithTypes(content); };
    PendingPackage.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching PendingPackage object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isPendingPackage(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a PendingPackage object"));
                        }
                        return [2 /*return*/, PendingPackage.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    PendingPackage.$typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::package_utils::PendingPackage";
    PendingPackage.$numTypeParams = 0;
    return PendingPackage;
}());
exports.PendingPackage = PendingPackage;
