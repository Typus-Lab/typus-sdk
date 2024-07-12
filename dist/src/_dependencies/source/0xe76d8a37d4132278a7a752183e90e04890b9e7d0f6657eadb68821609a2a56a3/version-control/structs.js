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
exports.V__DUMMY = exports.V__0_1_1 = void 0;
exports.isV__0_1_1 = isV__0_1_1;
exports.isV__DUMMY = isV__DUMMY;
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var bcs_1 = require("@mysten/bcs");
/* ============================== V__0_1_1 =============================== */
function isV__0_1_1(type) { type = (0, util_1.compressSuiType)(type); return type === "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::version_control::V__0_1_1"; }
var V__0_1_1 = /** @class */ (function () {
    function V__0_1_1(typeArgs, fields) {
        this.$typeName = V__0_1_1.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([V__0_1_1.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    V__0_1_1.reified = function () {
        var _this = this;
        return { typeName: V__0_1_1.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([V__0_1_1.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return V__0_1_1.fromFields(fields); }, fromFieldsWithTypes: function (item) { return V__0_1_1.fromFieldsWithTypes(item); }, fromBcs: function (data) { return V__0_1_1.fromBcs(data); }, bcs: V__0_1_1.bcs, fromJSONField: function (field) { return V__0_1_1.fromJSONField(field); }, fromJSON: function (json) { return V__0_1_1.fromJSON(json); }, fromSuiParsedData: function (content) { return V__0_1_1.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, V__0_1_1.fetch(client, id)];
            }); }); }, new: function (fields) { return new V__0_1_1([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(V__0_1_1, "r", {
        get: function () { return V__0_1_1.reified(); },
        enumerable: false,
        configurable: true
    });
    V__0_1_1.phantom = function () { return (0, reified_1.phantom)(V__0_1_1.reified()); };
    Object.defineProperty(V__0_1_1, "p", {
        get: function () { return V__0_1_1.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(V__0_1_1, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("V__0_1_1", {
                dummy_field: bcs_1.bcs.bool()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    V__0_1_1.fromFields = function (fields) { return V__0_1_1.reified().new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) }); };
    V__0_1_1.fromFieldsWithTypes = function (item) {
        if (!isV__0_1_1(item.type)) {
            throw new Error("not a V__0_1_1 type");
        }
        return V__0_1_1.reified().new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    };
    V__0_1_1.fromBcs = function (data) { return V__0_1_1.fromFields(V__0_1_1.bcs.parse(data)); };
    V__0_1_1.prototype.toJSONField = function () {
        return {
            dummyField: this.dummyField,
        };
    };
    V__0_1_1.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    V__0_1_1.fromJSONField = function (field) { return V__0_1_1.reified().new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) }); };
    V__0_1_1.fromJSON = function (json) {
        if (json.$typeName !== V__0_1_1.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return V__0_1_1.fromJSONField(json);
    };
    V__0_1_1.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isV__0_1_1(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a V__0_1_1 object"));
    } return V__0_1_1.fromFieldsWithTypes(content); };
    V__0_1_1.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching V__0_1_1 object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isV__0_1_1(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a V__0_1_1 object"));
                        }
                        return [2 /*return*/, V__0_1_1.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    V__0_1_1.$typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::version_control::V__0_1_1";
    V__0_1_1.$numTypeParams = 0;
    return V__0_1_1;
}());
exports.V__0_1_1 = V__0_1_1;
/* ============================== V__DUMMY =============================== */
function isV__DUMMY(type) { type = (0, util_1.compressSuiType)(type); return type === "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::version_control::V__DUMMY"; }
var V__DUMMY = /** @class */ (function () {
    function V__DUMMY(typeArgs, fields) {
        this.$typeName = V__DUMMY.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([V__DUMMY.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    V__DUMMY.reified = function () {
        var _this = this;
        return { typeName: V__DUMMY.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([V__DUMMY.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return V__DUMMY.fromFields(fields); }, fromFieldsWithTypes: function (item) { return V__DUMMY.fromFieldsWithTypes(item); }, fromBcs: function (data) { return V__DUMMY.fromBcs(data); }, bcs: V__DUMMY.bcs, fromJSONField: function (field) { return V__DUMMY.fromJSONField(field); }, fromJSON: function (json) { return V__DUMMY.fromJSON(json); }, fromSuiParsedData: function (content) { return V__DUMMY.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, V__DUMMY.fetch(client, id)];
            }); }); }, new: function (fields) { return new V__DUMMY([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(V__DUMMY, "r", {
        get: function () { return V__DUMMY.reified(); },
        enumerable: false,
        configurable: true
    });
    V__DUMMY.phantom = function () { return (0, reified_1.phantom)(V__DUMMY.reified()); };
    Object.defineProperty(V__DUMMY, "p", {
        get: function () { return V__DUMMY.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(V__DUMMY, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("V__DUMMY", {
                dummy_field: bcs_1.bcs.bool()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    V__DUMMY.fromFields = function (fields) { return V__DUMMY.reified().new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) }); };
    V__DUMMY.fromFieldsWithTypes = function (item) {
        if (!isV__DUMMY(item.type)) {
            throw new Error("not a V__DUMMY type");
        }
        return V__DUMMY.reified().new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    };
    V__DUMMY.fromBcs = function (data) { return V__DUMMY.fromFields(V__DUMMY.bcs.parse(data)); };
    V__DUMMY.prototype.toJSONField = function () {
        return {
            dummyField: this.dummyField,
        };
    };
    V__DUMMY.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    V__DUMMY.fromJSONField = function (field) { return V__DUMMY.reified().new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) }); };
    V__DUMMY.fromJSON = function (json) {
        if (json.$typeName !== V__DUMMY.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return V__DUMMY.fromJSONField(json);
    };
    V__DUMMY.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isV__DUMMY(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a V__DUMMY object"));
    } return V__DUMMY.fromFieldsWithTypes(content); };
    V__DUMMY.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching V__DUMMY object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isV__DUMMY(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a V__DUMMY object"));
                        }
                        return [2 /*return*/, V__DUMMY.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    V__DUMMY.$typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::version_control::V__DUMMY";
    V__DUMMY.$numTypeParams = 0;
    return V__DUMMY;
}());
exports.V__DUMMY = V__DUMMY;
