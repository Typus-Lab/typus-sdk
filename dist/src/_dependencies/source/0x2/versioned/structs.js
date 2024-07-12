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
exports.Versioned = exports.VersionChangeCap = void 0;
exports.isVersionChangeCap = isVersionChangeCap;
exports.isVersioned = isVersioned;
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var structs_1 = require("../object/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== VersionChangeCap =============================== */
function isVersionChangeCap(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::versioned::VersionChangeCap"; }
var VersionChangeCap = /** @class */ (function () {
    function VersionChangeCap(typeArgs, fields) {
        this.$typeName = VersionChangeCap.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([VersionChangeCap.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.versionedId = fields.versionedId;
        ;
        this.oldVersion = fields.oldVersion;
    }
    VersionChangeCap.reified = function () {
        var _this = this;
        return { typeName: VersionChangeCap.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([VersionChangeCap.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return VersionChangeCap.fromFields(fields); }, fromFieldsWithTypes: function (item) { return VersionChangeCap.fromFieldsWithTypes(item); }, fromBcs: function (data) { return VersionChangeCap.fromBcs(data); }, bcs: VersionChangeCap.bcs, fromJSONField: function (field) { return VersionChangeCap.fromJSONField(field); }, fromJSON: function (json) { return VersionChangeCap.fromJSON(json); }, fromSuiParsedData: function (content) { return VersionChangeCap.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, VersionChangeCap.fetch(client, id)];
            }); }); }, new: function (fields) { return new VersionChangeCap([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(VersionChangeCap, "r", {
        get: function () { return VersionChangeCap.reified(); },
        enumerable: false,
        configurable: true
    });
    VersionChangeCap.phantom = function () { return (0, reified_1.phantom)(VersionChangeCap.reified()); };
    Object.defineProperty(VersionChangeCap, "p", {
        get: function () { return VersionChangeCap.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VersionChangeCap, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("VersionChangeCap", {
                versioned_id: structs_1.ID.bcs, old_version: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    VersionChangeCap.fromFields = function (fields) { return VersionChangeCap.reified().new({ versionedId: (0, reified_1.decodeFromFields)(structs_1.ID.reified(), fields.versioned_id), oldVersion: (0, reified_1.decodeFromFields)("u64", fields.old_version) }); };
    VersionChangeCap.fromFieldsWithTypes = function (item) {
        if (!isVersionChangeCap(item.type)) {
            throw new Error("not a VersionChangeCap type");
        }
        return VersionChangeCap.reified().new({ versionedId: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.ID.reified(), item.fields.versioned_id), oldVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.old_version) });
    };
    VersionChangeCap.fromBcs = function (data) { return VersionChangeCap.fromFields(VersionChangeCap.bcs.parse(data)); };
    VersionChangeCap.prototype.toJSONField = function () {
        return {
            versionedId: this.versionedId, oldVersion: this.oldVersion.toString(),
        };
    };
    VersionChangeCap.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    VersionChangeCap.fromJSONField = function (field) { return VersionChangeCap.reified().new({ versionedId: (0, reified_1.decodeFromJSONField)(structs_1.ID.reified(), field.versionedId), oldVersion: (0, reified_1.decodeFromJSONField)("u64", field.oldVersion) }); };
    VersionChangeCap.fromJSON = function (json) {
        if (json.$typeName !== VersionChangeCap.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return VersionChangeCap.fromJSONField(json);
    };
    VersionChangeCap.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isVersionChangeCap(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a VersionChangeCap object"));
    } return VersionChangeCap.fromFieldsWithTypes(content); };
    VersionChangeCap.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching VersionChangeCap object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isVersionChangeCap(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a VersionChangeCap object"));
                        }
                        return [2 /*return*/, VersionChangeCap.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    VersionChangeCap.$typeName = "0x2::versioned::VersionChangeCap";
    VersionChangeCap.$numTypeParams = 0;
    return VersionChangeCap;
}());
exports.VersionChangeCap = VersionChangeCap;
/* ============================== Versioned =============================== */
function isVersioned(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::versioned::Versioned"; }
var Versioned = /** @class */ (function () {
    function Versioned(typeArgs, fields) {
        this.$typeName = Versioned.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Versioned.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.version = fields.version;
    }
    Versioned.reified = function () {
        var _this = this;
        return { typeName: Versioned.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Versioned.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return Versioned.fromFields(fields); }, fromFieldsWithTypes: function (item) { return Versioned.fromFieldsWithTypes(item); }, fromBcs: function (data) { return Versioned.fromBcs(data); }, bcs: Versioned.bcs, fromJSONField: function (field) { return Versioned.fromJSONField(field); }, fromJSON: function (json) { return Versioned.fromJSON(json); }, fromSuiParsedData: function (content) { return Versioned.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Versioned.fetch(client, id)];
            }); }); }, new: function (fields) { return new Versioned([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Versioned, "r", {
        get: function () { return Versioned.reified(); },
        enumerable: false,
        configurable: true
    });
    Versioned.phantom = function () { return (0, reified_1.phantom)(Versioned.reified()); };
    Object.defineProperty(Versioned, "p", {
        get: function () { return Versioned.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Versioned, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Versioned", {
                id: structs_1.UID.bcs, version: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Versioned.fromFields = function (fields) { return Versioned.reified().new({ id: (0, reified_1.decodeFromFields)(structs_1.UID.reified(), fields.id), version: (0, reified_1.decodeFromFields)("u64", fields.version) }); };
    Versioned.fromFieldsWithTypes = function (item) {
        if (!isVersioned(item.type)) {
            throw new Error("not a Versioned type");
        }
        return Versioned.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.UID.reified(), item.fields.id), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version) });
    };
    Versioned.fromBcs = function (data) { return Versioned.fromFields(Versioned.bcs.parse(data)); };
    Versioned.prototype.toJSONField = function () {
        return {
            id: this.id, version: this.version.toString(),
        };
    };
    Versioned.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Versioned.fromJSONField = function (field) { return Versioned.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_1.UID.reified(), field.id), version: (0, reified_1.decodeFromJSONField)("u64", field.version) }); };
    Versioned.fromJSON = function (json) {
        if (json.$typeName !== Versioned.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Versioned.fromJSONField(json);
    };
    Versioned.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isVersioned(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Versioned object"));
    } return Versioned.fromFieldsWithTypes(content); };
    Versioned.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Versioned object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isVersioned(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Versioned object"));
                        }
                        return [2 /*return*/, Versioned.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Versioned.$typeName = "0x2::versioned::Versioned";
    Versioned.$numTypeParams = 0;
    return Versioned;
}());
exports.Versioned = Versioned;
