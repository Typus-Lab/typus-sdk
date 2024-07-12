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
exports.VersionUpdated = exports.DisplayCreated = exports.Display = void 0;
exports.isDisplay = isDisplay;
exports.isDisplayCreated = isDisplayCreated;
exports.isVersionUpdated = isVersionUpdated;
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var structs_1 = require("../../0x1/string/structs");
var structs_2 = require("../object/structs");
var structs_3 = require("../vec-map/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== Display =============================== */
function isDisplay(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::display::Display<"); }
var Display = /** @class */ (function () {
    function Display(typeArgs, fields) {
        this.$typeName = Display.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Display.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.fields = fields.fields;
        ;
        this.version = fields.version;
    }
    Display.reified = function (T) {
        var _this = this;
        return { typeName: Display.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Display.$typeName], [(0, reified_1.extractType)(T)], false)), typeArgs: [(0, reified_1.extractType)(T)], reifiedTypeArgs: [T], fromFields: function (fields) { return Display.fromFields(T, fields); }, fromFieldsWithTypes: function (item) { return Display.fromFieldsWithTypes(T, item); }, fromBcs: function (data) { return Display.fromBcs(T, data); }, bcs: Display.bcs, fromJSONField: function (field) { return Display.fromJSONField(T, field); }, fromJSON: function (json) { return Display.fromJSON(T, json); }, fromSuiParsedData: function (content) { return Display.fromSuiParsedData(T, content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Display.fetch(client, T, id)];
            }); }); }, new: function (fields) { return new Display([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Display, "r", {
        get: function () { return Display.reified; },
        enumerable: false,
        configurable: true
    });
    Display.phantom = function (T) { return (0, reified_1.phantom)(Display.reified(T)); };
    Object.defineProperty(Display, "p", {
        get: function () { return Display.phantom; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Display, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Display", {
                id: structs_2.UID.bcs, fields: structs_3.VecMap.bcs(structs_1.String.bcs, structs_1.String.bcs), version: bcs_1.bcs.u16()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Display.fromFields = function (typeArg, fields) { return Display.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id), fields: (0, reified_1.decodeFromFields)(structs_3.VecMap.reified(structs_1.String.reified(), structs_1.String.reified()), fields.fields), version: (0, reified_1.decodeFromFields)("u16", fields.version) }); };
    Display.fromFieldsWithTypes = function (typeArg, item) {
        if (!isDisplay(item.type)) {
            throw new Error("not a Display type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return Display.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id), fields: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.VecMap.reified(structs_1.String.reified(), structs_1.String.reified()), item.fields.fields), version: (0, reified_1.decodeFromFieldsWithTypes)("u16", item.fields.version) });
    };
    Display.fromBcs = function (typeArg, data) { return Display.fromFields(typeArg, Display.bcs.parse(data)); };
    Display.prototype.toJSONField = function () {
        return {
            id: this.id, fields: this.fields.toJSONField(), version: this.version,
        };
    };
    Display.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Display.fromJSONField = function (typeArg, field) { return Display.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id), fields: (0, reified_1.decodeFromJSONField)(structs_3.VecMap.reified(structs_1.String.reified(), structs_1.String.reified()), field.fields), version: (0, reified_1.decodeFromJSONField)("u16", field.version) }); };
    Display.fromJSON = function (typeArg, json) {
        if (json.$typeName !== Display.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(Display.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return Display.fromJSONField(typeArg, json);
    };
    Display.fromSuiParsedData = function (typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDisplay(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Display object"));
    } return Display.fromFieldsWithTypes(typeArg, content); };
    Display.fetch = function (client, typeArg, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Display object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDisplay(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Display object"));
                        }
                        return [2 /*return*/, Display.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Display.$typeName = "0x2::display::Display";
    Display.$numTypeParams = 1;
    return Display;
}());
exports.Display = Display;
/* ============================== DisplayCreated =============================== */
function isDisplayCreated(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::display::DisplayCreated<"); }
var DisplayCreated = /** @class */ (function () {
    function DisplayCreated(typeArgs, fields) {
        this.$typeName = DisplayCreated.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([DisplayCreated.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
    }
    DisplayCreated.reified = function (T) {
        var _this = this;
        return { typeName: DisplayCreated.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([DisplayCreated.$typeName], [(0, reified_1.extractType)(T)], false)), typeArgs: [(0, reified_1.extractType)(T)], reifiedTypeArgs: [T], fromFields: function (fields) { return DisplayCreated.fromFields(T, fields); }, fromFieldsWithTypes: function (item) { return DisplayCreated.fromFieldsWithTypes(T, item); }, fromBcs: function (data) { return DisplayCreated.fromBcs(T, data); }, bcs: DisplayCreated.bcs, fromJSONField: function (field) { return DisplayCreated.fromJSONField(T, field); }, fromJSON: function (json) { return DisplayCreated.fromJSON(T, json); }, fromSuiParsedData: function (content) { return DisplayCreated.fromSuiParsedData(T, content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, DisplayCreated.fetch(client, T, id)];
            }); }); }, new: function (fields) { return new DisplayCreated([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(DisplayCreated, "r", {
        get: function () { return DisplayCreated.reified; },
        enumerable: false,
        configurable: true
    });
    DisplayCreated.phantom = function (T) { return (0, reified_1.phantom)(DisplayCreated.reified(T)); };
    Object.defineProperty(DisplayCreated, "p", {
        get: function () { return DisplayCreated.phantom; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DisplayCreated, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("DisplayCreated", {
                id: structs_2.ID.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    DisplayCreated.fromFields = function (typeArg, fields) { return DisplayCreated.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.id) }); };
    DisplayCreated.fromFieldsWithTypes = function (typeArg, item) {
        if (!isDisplayCreated(item.type)) {
            throw new Error("not a DisplayCreated type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return DisplayCreated.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.id) });
    };
    DisplayCreated.fromBcs = function (typeArg, data) { return DisplayCreated.fromFields(typeArg, DisplayCreated.bcs.parse(data)); };
    DisplayCreated.prototype.toJSONField = function () {
        return {
            id: this.id,
        };
    };
    DisplayCreated.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    DisplayCreated.fromJSONField = function (typeArg, field) { return DisplayCreated.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.id) }); };
    DisplayCreated.fromJSON = function (typeArg, json) {
        if (json.$typeName !== DisplayCreated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(DisplayCreated.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return DisplayCreated.fromJSONField(typeArg, json);
    };
    DisplayCreated.fromSuiParsedData = function (typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDisplayCreated(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a DisplayCreated object"));
    } return DisplayCreated.fromFieldsWithTypes(typeArg, content); };
    DisplayCreated.fetch = function (client, typeArg, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching DisplayCreated object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDisplayCreated(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a DisplayCreated object"));
                        }
                        return [2 /*return*/, DisplayCreated.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    DisplayCreated.$typeName = "0x2::display::DisplayCreated";
    DisplayCreated.$numTypeParams = 1;
    return DisplayCreated;
}());
exports.DisplayCreated = DisplayCreated;
/* ============================== VersionUpdated =============================== */
function isVersionUpdated(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::display::VersionUpdated<"); }
var VersionUpdated = /** @class */ (function () {
    function VersionUpdated(typeArgs, fields) {
        this.$typeName = VersionUpdated.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([VersionUpdated.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.version = fields.version;
        ;
        this.fields = fields.fields;
    }
    VersionUpdated.reified = function (T) {
        var _this = this;
        return { typeName: VersionUpdated.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([VersionUpdated.$typeName], [(0, reified_1.extractType)(T)], false)), typeArgs: [(0, reified_1.extractType)(T)], reifiedTypeArgs: [T], fromFields: function (fields) { return VersionUpdated.fromFields(T, fields); }, fromFieldsWithTypes: function (item) { return VersionUpdated.fromFieldsWithTypes(T, item); }, fromBcs: function (data) { return VersionUpdated.fromBcs(T, data); }, bcs: VersionUpdated.bcs, fromJSONField: function (field) { return VersionUpdated.fromJSONField(T, field); }, fromJSON: function (json) { return VersionUpdated.fromJSON(T, json); }, fromSuiParsedData: function (content) { return VersionUpdated.fromSuiParsedData(T, content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, VersionUpdated.fetch(client, T, id)];
            }); }); }, new: function (fields) { return new VersionUpdated([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(VersionUpdated, "r", {
        get: function () { return VersionUpdated.reified; },
        enumerable: false,
        configurable: true
    });
    VersionUpdated.phantom = function (T) { return (0, reified_1.phantom)(VersionUpdated.reified(T)); };
    Object.defineProperty(VersionUpdated, "p", {
        get: function () { return VersionUpdated.phantom; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VersionUpdated, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("VersionUpdated", {
                id: structs_2.ID.bcs, version: bcs_1.bcs.u16(), fields: structs_3.VecMap.bcs(structs_1.String.bcs, structs_1.String.bcs)
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    VersionUpdated.fromFields = function (typeArg, fields) { return VersionUpdated.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.id), version: (0, reified_1.decodeFromFields)("u16", fields.version), fields: (0, reified_1.decodeFromFields)(structs_3.VecMap.reified(structs_1.String.reified(), structs_1.String.reified()), fields.fields) }); };
    VersionUpdated.fromFieldsWithTypes = function (typeArg, item) {
        if (!isVersionUpdated(item.type)) {
            throw new Error("not a VersionUpdated type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return VersionUpdated.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.id), version: (0, reified_1.decodeFromFieldsWithTypes)("u16", item.fields.version), fields: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.VecMap.reified(structs_1.String.reified(), structs_1.String.reified()), item.fields.fields) });
    };
    VersionUpdated.fromBcs = function (typeArg, data) { return VersionUpdated.fromFields(typeArg, VersionUpdated.bcs.parse(data)); };
    VersionUpdated.prototype.toJSONField = function () {
        return {
            id: this.id, version: this.version, fields: this.fields.toJSONField(),
        };
    };
    VersionUpdated.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    VersionUpdated.fromJSONField = function (typeArg, field) { return VersionUpdated.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.id), version: (0, reified_1.decodeFromJSONField)("u16", field.version), fields: (0, reified_1.decodeFromJSONField)(structs_3.VecMap.reified(structs_1.String.reified(), structs_1.String.reified()), field.fields) }); };
    VersionUpdated.fromJSON = function (typeArg, json) {
        if (json.$typeName !== VersionUpdated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(VersionUpdated.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return VersionUpdated.fromJSONField(typeArg, json);
    };
    VersionUpdated.fromSuiParsedData = function (typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isVersionUpdated(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a VersionUpdated object"));
    } return VersionUpdated.fromFieldsWithTypes(typeArg, content); };
    VersionUpdated.fetch = function (client, typeArg, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching VersionUpdated object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isVersionUpdated(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a VersionUpdated object"));
                        }
                        return [2 /*return*/, VersionUpdated.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    VersionUpdated.$typeName = "0x2::display::VersionUpdated";
    VersionUpdated.$numTypeParams = 1;
    return VersionUpdated;
}());
exports.VersionUpdated = VersionUpdated;
