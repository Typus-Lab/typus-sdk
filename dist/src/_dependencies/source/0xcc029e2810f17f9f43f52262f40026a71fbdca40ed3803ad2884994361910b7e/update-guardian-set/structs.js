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
exports.UpdateGuardianSet = exports.GuardianSetAdded = exports.GovernanceWitness = void 0;
exports.isGovernanceWitness = isGovernanceWitness;
exports.isGuardianSetAdded = isGuardianSetAdded;
exports.isUpdateGuardianSet = isUpdateGuardianSet;
var reified = __importStar(require("../../../../_framework/reified"));
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var structs_1 = require("../guardian/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== GovernanceWitness =============================== */
function isGovernanceWitness(type) { type = (0, util_1.compressSuiType)(type); return type === "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::update_guardian_set::GovernanceWitness"; }
var GovernanceWitness = /** @class */ (function () {
    function GovernanceWitness(typeArgs, fields) {
        this.$typeName = GovernanceWitness.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([GovernanceWitness.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    GovernanceWitness.reified = function () {
        var _this = this;
        return { typeName: GovernanceWitness.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([GovernanceWitness.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return GovernanceWitness.fromFields(fields); }, fromFieldsWithTypes: function (item) { return GovernanceWitness.fromFieldsWithTypes(item); }, fromBcs: function (data) { return GovernanceWitness.fromBcs(data); }, bcs: GovernanceWitness.bcs, fromJSONField: function (field) { return GovernanceWitness.fromJSONField(field); }, fromJSON: function (json) { return GovernanceWitness.fromJSON(json); }, fromSuiParsedData: function (content) { return GovernanceWitness.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, GovernanceWitness.fetch(client, id)];
            }); }); }, new: function (fields) { return new GovernanceWitness([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(GovernanceWitness, "r", {
        get: function () { return GovernanceWitness.reified(); },
        enumerable: false,
        configurable: true
    });
    GovernanceWitness.phantom = function () { return (0, reified_1.phantom)(GovernanceWitness.reified()); };
    Object.defineProperty(GovernanceWitness, "p", {
        get: function () { return GovernanceWitness.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GovernanceWitness, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("GovernanceWitness", {
                dummy_field: bcs_1.bcs.bool()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    GovernanceWitness.fromFields = function (fields) { return GovernanceWitness.reified().new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) }); };
    GovernanceWitness.fromFieldsWithTypes = function (item) {
        if (!isGovernanceWitness(item.type)) {
            throw new Error("not a GovernanceWitness type");
        }
        return GovernanceWitness.reified().new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    };
    GovernanceWitness.fromBcs = function (data) { return GovernanceWitness.fromFields(GovernanceWitness.bcs.parse(data)); };
    GovernanceWitness.prototype.toJSONField = function () {
        return {
            dummyField: this.dummyField,
        };
    };
    GovernanceWitness.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    GovernanceWitness.fromJSONField = function (field) { return GovernanceWitness.reified().new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) }); };
    GovernanceWitness.fromJSON = function (json) {
        if (json.$typeName !== GovernanceWitness.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return GovernanceWitness.fromJSONField(json);
    };
    GovernanceWitness.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isGovernanceWitness(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a GovernanceWitness object"));
    } return GovernanceWitness.fromFieldsWithTypes(content); };
    GovernanceWitness.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching GovernanceWitness object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isGovernanceWitness(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a GovernanceWitness object"));
                        }
                        return [2 /*return*/, GovernanceWitness.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    GovernanceWitness.$typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::update_guardian_set::GovernanceWitness";
    GovernanceWitness.$numTypeParams = 0;
    return GovernanceWitness;
}());
exports.GovernanceWitness = GovernanceWitness;
/* ============================== GuardianSetAdded =============================== */
function isGuardianSetAdded(type) { type = (0, util_1.compressSuiType)(type); return type === "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::update_guardian_set::GuardianSetAdded"; }
var GuardianSetAdded = /** @class */ (function () {
    function GuardianSetAdded(typeArgs, fields) {
        this.$typeName = GuardianSetAdded.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([GuardianSetAdded.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.newIndex = fields.newIndex;
    }
    GuardianSetAdded.reified = function () {
        var _this = this;
        return { typeName: GuardianSetAdded.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([GuardianSetAdded.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return GuardianSetAdded.fromFields(fields); }, fromFieldsWithTypes: function (item) { return GuardianSetAdded.fromFieldsWithTypes(item); }, fromBcs: function (data) { return GuardianSetAdded.fromBcs(data); }, bcs: GuardianSetAdded.bcs, fromJSONField: function (field) { return GuardianSetAdded.fromJSONField(field); }, fromJSON: function (json) { return GuardianSetAdded.fromJSON(json); }, fromSuiParsedData: function (content) { return GuardianSetAdded.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, GuardianSetAdded.fetch(client, id)];
            }); }); }, new: function (fields) { return new GuardianSetAdded([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(GuardianSetAdded, "r", {
        get: function () { return GuardianSetAdded.reified(); },
        enumerable: false,
        configurable: true
    });
    GuardianSetAdded.phantom = function () { return (0, reified_1.phantom)(GuardianSetAdded.reified()); };
    Object.defineProperty(GuardianSetAdded, "p", {
        get: function () { return GuardianSetAdded.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuardianSetAdded, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("GuardianSetAdded", {
                new_index: bcs_1.bcs.u32()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    GuardianSetAdded.fromFields = function (fields) { return GuardianSetAdded.reified().new({ newIndex: (0, reified_1.decodeFromFields)("u32", fields.new_index) }); };
    GuardianSetAdded.fromFieldsWithTypes = function (item) {
        if (!isGuardianSetAdded(item.type)) {
            throw new Error("not a GuardianSetAdded type");
        }
        return GuardianSetAdded.reified().new({ newIndex: (0, reified_1.decodeFromFieldsWithTypes)("u32", item.fields.new_index) });
    };
    GuardianSetAdded.fromBcs = function (data) { return GuardianSetAdded.fromFields(GuardianSetAdded.bcs.parse(data)); };
    GuardianSetAdded.prototype.toJSONField = function () {
        return {
            newIndex: this.newIndex,
        };
    };
    GuardianSetAdded.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    GuardianSetAdded.fromJSONField = function (field) { return GuardianSetAdded.reified().new({ newIndex: (0, reified_1.decodeFromJSONField)("u32", field.newIndex) }); };
    GuardianSetAdded.fromJSON = function (json) {
        if (json.$typeName !== GuardianSetAdded.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return GuardianSetAdded.fromJSONField(json);
    };
    GuardianSetAdded.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isGuardianSetAdded(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a GuardianSetAdded object"));
    } return GuardianSetAdded.fromFieldsWithTypes(content); };
    GuardianSetAdded.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching GuardianSetAdded object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isGuardianSetAdded(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a GuardianSetAdded object"));
                        }
                        return [2 /*return*/, GuardianSetAdded.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    GuardianSetAdded.$typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::update_guardian_set::GuardianSetAdded";
    GuardianSetAdded.$numTypeParams = 0;
    return GuardianSetAdded;
}());
exports.GuardianSetAdded = GuardianSetAdded;
/* ============================== UpdateGuardianSet =============================== */
function isUpdateGuardianSet(type) { type = (0, util_1.compressSuiType)(type); return type === "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::update_guardian_set::UpdateGuardianSet"; }
var UpdateGuardianSet = /** @class */ (function () {
    function UpdateGuardianSet(typeArgs, fields) {
        this.$typeName = UpdateGuardianSet.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([UpdateGuardianSet.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.newIndex = fields.newIndex;
        ;
        this.guardians = fields.guardians;
    }
    UpdateGuardianSet.reified = function () {
        var _this = this;
        return { typeName: UpdateGuardianSet.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([UpdateGuardianSet.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return UpdateGuardianSet.fromFields(fields); }, fromFieldsWithTypes: function (item) { return UpdateGuardianSet.fromFieldsWithTypes(item); }, fromBcs: function (data) { return UpdateGuardianSet.fromBcs(data); }, bcs: UpdateGuardianSet.bcs, fromJSONField: function (field) { return UpdateGuardianSet.fromJSONField(field); }, fromJSON: function (json) { return UpdateGuardianSet.fromJSON(json); }, fromSuiParsedData: function (content) { return UpdateGuardianSet.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, UpdateGuardianSet.fetch(client, id)];
            }); }); }, new: function (fields) { return new UpdateGuardianSet([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(UpdateGuardianSet, "r", {
        get: function () { return UpdateGuardianSet.reified(); },
        enumerable: false,
        configurable: true
    });
    UpdateGuardianSet.phantom = function () { return (0, reified_1.phantom)(UpdateGuardianSet.reified()); };
    Object.defineProperty(UpdateGuardianSet, "p", {
        get: function () { return UpdateGuardianSet.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UpdateGuardianSet, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("UpdateGuardianSet", {
                new_index: bcs_1.bcs.u32(), guardians: bcs_1.bcs.vector(structs_1.Guardian.bcs)
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    UpdateGuardianSet.fromFields = function (fields) { return UpdateGuardianSet.reified().new({ newIndex: (0, reified_1.decodeFromFields)("u32", fields.new_index), guardians: (0, reified_1.decodeFromFields)(reified.vector(structs_1.Guardian.reified()), fields.guardians) }); };
    UpdateGuardianSet.fromFieldsWithTypes = function (item) {
        if (!isUpdateGuardianSet(item.type)) {
            throw new Error("not a UpdateGuardianSet type");
        }
        return UpdateGuardianSet.reified().new({ newIndex: (0, reified_1.decodeFromFieldsWithTypes)("u32", item.fields.new_index), guardians: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(structs_1.Guardian.reified()), item.fields.guardians) });
    };
    UpdateGuardianSet.fromBcs = function (data) { return UpdateGuardianSet.fromFields(UpdateGuardianSet.bcs.parse(data)); };
    UpdateGuardianSet.prototype.toJSONField = function () {
        return {
            newIndex: this.newIndex, guardians: (0, reified_1.fieldToJSON)("vector<0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::guardian::Guardian>", this.guardians),
        };
    };
    UpdateGuardianSet.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    UpdateGuardianSet.fromJSONField = function (field) { return UpdateGuardianSet.reified().new({ newIndex: (0, reified_1.decodeFromJSONField)("u32", field.newIndex), guardians: (0, reified_1.decodeFromJSONField)(reified.vector(structs_1.Guardian.reified()), field.guardians) }); };
    UpdateGuardianSet.fromJSON = function (json) {
        if (json.$typeName !== UpdateGuardianSet.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return UpdateGuardianSet.fromJSONField(json);
    };
    UpdateGuardianSet.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUpdateGuardianSet(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a UpdateGuardianSet object"));
    } return UpdateGuardianSet.fromFieldsWithTypes(content); };
    UpdateGuardianSet.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching UpdateGuardianSet object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUpdateGuardianSet(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a UpdateGuardianSet object"));
                        }
                        return [2 /*return*/, UpdateGuardianSet.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    UpdateGuardianSet.$typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::update_guardian_set::UpdateGuardianSet";
    UpdateGuardianSet.$numTypeParams = 0;
    return UpdateGuardianSet;
}());
exports.UpdateGuardianSet = UpdateGuardianSet;
