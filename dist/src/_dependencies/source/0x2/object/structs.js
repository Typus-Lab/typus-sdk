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
exports.UID = exports.ID = void 0;
exports.isID = isID;
exports.isUID = isUID;
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var bcs_1 = require("@mysten/bcs");
/* ============================== ID =============================== */
function isID(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::object::ID"; }
var ID = /** @class */ (function () {
    function ID(typeArgs, fields) {
        this.$typeName = ID.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([ID.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.bytes = fields.bytes;
    }
    ID.reified = function () {
        var _this = this;
        return { typeName: ID.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([ID.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return ID.fromFields(fields); }, fromFieldsWithTypes: function (item) { return ID.fromFieldsWithTypes(item); }, fromBcs: function (data) { return ID.fromBcs(data); }, bcs: ID.bcs, fromJSONField: function (field) { return ID.fromJSONField(field); }, fromJSON: function (json) { return ID.fromJSON(json); }, fromSuiParsedData: function (content) { return ID.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, ID.fetch(client, id)];
            }); }); }, new: function (fields) { return new ID([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(ID, "r", {
        get: function () { return ID.reified(); },
        enumerable: false,
        configurable: true
    });
    ID.phantom = function () { return (0, reified_1.phantom)(ID.reified()); };
    Object.defineProperty(ID, "p", {
        get: function () { return ID.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ID, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("ID", {
                bytes: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, })
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    ID.fromFields = function (fields) { return ID.reified().new({ bytes: (0, reified_1.decodeFromFields)("address", fields.bytes) }); };
    ID.fromFieldsWithTypes = function (item) {
        if (!isID(item.type)) {
            throw new Error("not a ID type");
        }
        return ID.reified().new({ bytes: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.bytes) });
    };
    ID.fromBcs = function (data) { return ID.fromFields(ID.bcs.parse(data)); };
    ID.prototype.toJSONField = function () {
        return {
            bytes: this.bytes,
        };
    };
    ID.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    ID.fromJSONField = function (field) { return ID.reified().new({ bytes: (0, reified_1.decodeFromJSONField)("address", field.bytes) }); };
    ID.fromJSON = function (json) {
        if (json.$typeName !== ID.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ID.fromJSONField(json);
    };
    ID.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isID(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a ID object"));
    } return ID.fromFieldsWithTypes(content); };
    ID.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching ID object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isID(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a ID object"));
                        }
                        return [2 /*return*/, ID.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    ID.$typeName = "0x2::object::ID";
    ID.$numTypeParams = 0;
    return ID;
}());
exports.ID = ID;
/* ============================== UID =============================== */
function isUID(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::object::UID"; }
var UID = /** @class */ (function () {
    function UID(typeArgs, fields) {
        this.$typeName = UID.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([UID.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
    }
    UID.reified = function () {
        var _this = this;
        return { typeName: UID.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([UID.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return UID.fromFields(fields); }, fromFieldsWithTypes: function (item) { return UID.fromFieldsWithTypes(item); }, fromBcs: function (data) { return UID.fromBcs(data); }, bcs: UID.bcs, fromJSONField: function (field) { return UID.fromJSONField(field); }, fromJSON: function (json) { return UID.fromJSON(json); }, fromSuiParsedData: function (content) { return UID.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, UID.fetch(client, id)];
            }); }); }, new: function (fields) { return new UID([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(UID, "r", {
        get: function () { return UID.reified(); },
        enumerable: false,
        configurable: true
    });
    UID.phantom = function () { return (0, reified_1.phantom)(UID.reified()); };
    Object.defineProperty(UID, "p", {
        get: function () { return UID.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UID, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("UID", {
                id: ID.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    UID.fromFields = function (fields) { return UID.reified().new({ id: (0, reified_1.decodeFromFields)(ID.reified(), fields.id) }); };
    UID.fromFieldsWithTypes = function (item) {
        if (!isUID(item.type)) {
            throw new Error("not a UID type");
        }
        return UID.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(ID.reified(), item.fields.id) });
    };
    UID.fromBcs = function (data) { return UID.fromFields(UID.bcs.parse(data)); };
    UID.prototype.toJSONField = function () {
        return {
            id: this.id,
        };
    };
    UID.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    UID.fromJSONField = function (field) { return UID.reified().new({ id: (0, reified_1.decodeFromJSONField)(ID.reified(), field.id) }); };
    UID.fromJSON = function (json) {
        if (json.$typeName !== UID.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return UID.fromJSONField(json);
    };
    UID.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUID(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a UID object"));
    } return UID.fromFieldsWithTypes(content); };
    UID.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching UID object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUID(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a UID object"));
                        }
                        return [2 /*return*/, UID.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    UID.$typeName = "0x2::object::UID";
    UID.$numTypeParams = 0;
    return UID;
}());
exports.UID = UID;
