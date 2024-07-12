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
exports.EmitterDestroyed = exports.EmitterCreated = exports.EmitterCap = void 0;
exports.isEmitterCap = isEmitterCap;
exports.isEmitterCreated = isEmitterCreated;
exports.isEmitterDestroyed = isEmitterDestroyed;
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var structs_1 = require("../../0x2/object/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== EmitterCap =============================== */
function isEmitterCap(type) { type = (0, util_1.compressSuiType)(type); return type === "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::emitter::EmitterCap"; }
var EmitterCap = /** @class */ (function () {
    function EmitterCap(typeArgs, fields) {
        this.$typeName = EmitterCap.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([EmitterCap.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.sequence = fields.sequence;
    }
    EmitterCap.reified = function () {
        var _this = this;
        return { typeName: EmitterCap.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([EmitterCap.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return EmitterCap.fromFields(fields); }, fromFieldsWithTypes: function (item) { return EmitterCap.fromFieldsWithTypes(item); }, fromBcs: function (data) { return EmitterCap.fromBcs(data); }, bcs: EmitterCap.bcs, fromJSONField: function (field) { return EmitterCap.fromJSONField(field); }, fromJSON: function (json) { return EmitterCap.fromJSON(json); }, fromSuiParsedData: function (content) { return EmitterCap.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, EmitterCap.fetch(client, id)];
            }); }); }, new: function (fields) { return new EmitterCap([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(EmitterCap, "r", {
        get: function () { return EmitterCap.reified(); },
        enumerable: false,
        configurable: true
    });
    EmitterCap.phantom = function () { return (0, reified_1.phantom)(EmitterCap.reified()); };
    Object.defineProperty(EmitterCap, "p", {
        get: function () { return EmitterCap.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmitterCap, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("EmitterCap", {
                id: structs_1.UID.bcs, sequence: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    EmitterCap.fromFields = function (fields) { return EmitterCap.reified().new({ id: (0, reified_1.decodeFromFields)(structs_1.UID.reified(), fields.id), sequence: (0, reified_1.decodeFromFields)("u64", fields.sequence) }); };
    EmitterCap.fromFieldsWithTypes = function (item) {
        if (!isEmitterCap(item.type)) {
            throw new Error("not a EmitterCap type");
        }
        return EmitterCap.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.UID.reified(), item.fields.id), sequence: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.sequence) });
    };
    EmitterCap.fromBcs = function (data) { return EmitterCap.fromFields(EmitterCap.bcs.parse(data)); };
    EmitterCap.prototype.toJSONField = function () {
        return {
            id: this.id, sequence: this.sequence.toString(),
        };
    };
    EmitterCap.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    EmitterCap.fromJSONField = function (field) { return EmitterCap.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_1.UID.reified(), field.id), sequence: (0, reified_1.decodeFromJSONField)("u64", field.sequence) }); };
    EmitterCap.fromJSON = function (json) {
        if (json.$typeName !== EmitterCap.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return EmitterCap.fromJSONField(json);
    };
    EmitterCap.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isEmitterCap(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a EmitterCap object"));
    } return EmitterCap.fromFieldsWithTypes(content); };
    EmitterCap.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching EmitterCap object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isEmitterCap(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a EmitterCap object"));
                        }
                        return [2 /*return*/, EmitterCap.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    EmitterCap.$typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::emitter::EmitterCap";
    EmitterCap.$numTypeParams = 0;
    return EmitterCap;
}());
exports.EmitterCap = EmitterCap;
/* ============================== EmitterCreated =============================== */
function isEmitterCreated(type) { type = (0, util_1.compressSuiType)(type); return type === "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::emitter::EmitterCreated"; }
var EmitterCreated = /** @class */ (function () {
    function EmitterCreated(typeArgs, fields) {
        this.$typeName = EmitterCreated.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([EmitterCreated.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.emitterCap = fields.emitterCap;
    }
    EmitterCreated.reified = function () {
        var _this = this;
        return { typeName: EmitterCreated.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([EmitterCreated.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return EmitterCreated.fromFields(fields); }, fromFieldsWithTypes: function (item) { return EmitterCreated.fromFieldsWithTypes(item); }, fromBcs: function (data) { return EmitterCreated.fromBcs(data); }, bcs: EmitterCreated.bcs, fromJSONField: function (field) { return EmitterCreated.fromJSONField(field); }, fromJSON: function (json) { return EmitterCreated.fromJSON(json); }, fromSuiParsedData: function (content) { return EmitterCreated.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, EmitterCreated.fetch(client, id)];
            }); }); }, new: function (fields) { return new EmitterCreated([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(EmitterCreated, "r", {
        get: function () { return EmitterCreated.reified(); },
        enumerable: false,
        configurable: true
    });
    EmitterCreated.phantom = function () { return (0, reified_1.phantom)(EmitterCreated.reified()); };
    Object.defineProperty(EmitterCreated, "p", {
        get: function () { return EmitterCreated.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmitterCreated, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("EmitterCreated", {
                emitter_cap: structs_1.ID.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    EmitterCreated.fromFields = function (fields) { return EmitterCreated.reified().new({ emitterCap: (0, reified_1.decodeFromFields)(structs_1.ID.reified(), fields.emitter_cap) }); };
    EmitterCreated.fromFieldsWithTypes = function (item) {
        if (!isEmitterCreated(item.type)) {
            throw new Error("not a EmitterCreated type");
        }
        return EmitterCreated.reified().new({ emitterCap: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.ID.reified(), item.fields.emitter_cap) });
    };
    EmitterCreated.fromBcs = function (data) { return EmitterCreated.fromFields(EmitterCreated.bcs.parse(data)); };
    EmitterCreated.prototype.toJSONField = function () {
        return {
            emitterCap: this.emitterCap,
        };
    };
    EmitterCreated.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    EmitterCreated.fromJSONField = function (field) { return EmitterCreated.reified().new({ emitterCap: (0, reified_1.decodeFromJSONField)(structs_1.ID.reified(), field.emitterCap) }); };
    EmitterCreated.fromJSON = function (json) {
        if (json.$typeName !== EmitterCreated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return EmitterCreated.fromJSONField(json);
    };
    EmitterCreated.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isEmitterCreated(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a EmitterCreated object"));
    } return EmitterCreated.fromFieldsWithTypes(content); };
    EmitterCreated.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching EmitterCreated object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isEmitterCreated(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a EmitterCreated object"));
                        }
                        return [2 /*return*/, EmitterCreated.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    EmitterCreated.$typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::emitter::EmitterCreated";
    EmitterCreated.$numTypeParams = 0;
    return EmitterCreated;
}());
exports.EmitterCreated = EmitterCreated;
/* ============================== EmitterDestroyed =============================== */
function isEmitterDestroyed(type) { type = (0, util_1.compressSuiType)(type); return type === "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::emitter::EmitterDestroyed"; }
var EmitterDestroyed = /** @class */ (function () {
    function EmitterDestroyed(typeArgs, fields) {
        this.$typeName = EmitterDestroyed.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([EmitterDestroyed.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.emitterCap = fields.emitterCap;
    }
    EmitterDestroyed.reified = function () {
        var _this = this;
        return { typeName: EmitterDestroyed.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([EmitterDestroyed.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return EmitterDestroyed.fromFields(fields); }, fromFieldsWithTypes: function (item) { return EmitterDestroyed.fromFieldsWithTypes(item); }, fromBcs: function (data) { return EmitterDestroyed.fromBcs(data); }, bcs: EmitterDestroyed.bcs, fromJSONField: function (field) { return EmitterDestroyed.fromJSONField(field); }, fromJSON: function (json) { return EmitterDestroyed.fromJSON(json); }, fromSuiParsedData: function (content) { return EmitterDestroyed.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, EmitterDestroyed.fetch(client, id)];
            }); }); }, new: function (fields) { return new EmitterDestroyed([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(EmitterDestroyed, "r", {
        get: function () { return EmitterDestroyed.reified(); },
        enumerable: false,
        configurable: true
    });
    EmitterDestroyed.phantom = function () { return (0, reified_1.phantom)(EmitterDestroyed.reified()); };
    Object.defineProperty(EmitterDestroyed, "p", {
        get: function () { return EmitterDestroyed.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmitterDestroyed, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("EmitterDestroyed", {
                emitter_cap: structs_1.ID.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    EmitterDestroyed.fromFields = function (fields) { return EmitterDestroyed.reified().new({ emitterCap: (0, reified_1.decodeFromFields)(structs_1.ID.reified(), fields.emitter_cap) }); };
    EmitterDestroyed.fromFieldsWithTypes = function (item) {
        if (!isEmitterDestroyed(item.type)) {
            throw new Error("not a EmitterDestroyed type");
        }
        return EmitterDestroyed.reified().new({ emitterCap: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.ID.reified(), item.fields.emitter_cap) });
    };
    EmitterDestroyed.fromBcs = function (data) { return EmitterDestroyed.fromFields(EmitterDestroyed.bcs.parse(data)); };
    EmitterDestroyed.prototype.toJSONField = function () {
        return {
            emitterCap: this.emitterCap,
        };
    };
    EmitterDestroyed.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    EmitterDestroyed.fromJSONField = function (field) { return EmitterDestroyed.reified().new({ emitterCap: (0, reified_1.decodeFromJSONField)(structs_1.ID.reified(), field.emitterCap) }); };
    EmitterDestroyed.fromJSON = function (json) {
        if (json.$typeName !== EmitterDestroyed.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return EmitterDestroyed.fromJSONField(json);
    };
    EmitterDestroyed.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isEmitterDestroyed(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a EmitterDestroyed object"));
    } return EmitterDestroyed.fromFieldsWithTypes(content); };
    EmitterDestroyed.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching EmitterDestroyed object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isEmitterDestroyed(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a EmitterDestroyed object"));
                        }
                        return [2 /*return*/, EmitterDestroyed.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    EmitterDestroyed.$typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::emitter::EmitterDestroyed";
    EmitterDestroyed.$numTypeParams = 0;
    return EmitterDestroyed;
}());
exports.EmitterDestroyed = EmitterDestroyed;
