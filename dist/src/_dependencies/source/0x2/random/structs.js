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
exports.RandomInner = exports.RandomGenerator = exports.Random = void 0;
exports.isRandom = isRandom;
exports.isRandomGenerator = isRandomGenerator;
exports.isRandomInner = isRandomInner;
var reified = __importStar(require("../../../../_framework/reified"));
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var structs_1 = require("../object/structs");
var structs_2 = require("../versioned/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== Random =============================== */
function isRandom(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::random::Random"; }
var Random = /** @class */ (function () {
    function Random(typeArgs, fields) {
        this.$typeName = Random.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Random.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.inner = fields.inner;
    }
    Random.reified = function () {
        var _this = this;
        return { typeName: Random.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Random.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return Random.fromFields(fields); }, fromFieldsWithTypes: function (item) { return Random.fromFieldsWithTypes(item); }, fromBcs: function (data) { return Random.fromBcs(data); }, bcs: Random.bcs, fromJSONField: function (field) { return Random.fromJSONField(field); }, fromJSON: function (json) { return Random.fromJSON(json); }, fromSuiParsedData: function (content) { return Random.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Random.fetch(client, id)];
            }); }); }, new: function (fields) { return new Random([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Random, "r", {
        get: function () { return Random.reified(); },
        enumerable: false,
        configurable: true
    });
    Random.phantom = function () { return (0, reified_1.phantom)(Random.reified()); };
    Object.defineProperty(Random, "p", {
        get: function () { return Random.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Random, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Random", {
                id: structs_1.UID.bcs, inner: structs_2.Versioned.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Random.fromFields = function (fields) { return Random.reified().new({ id: (0, reified_1.decodeFromFields)(structs_1.UID.reified(), fields.id), inner: (0, reified_1.decodeFromFields)(structs_2.Versioned.reified(), fields.inner) }); };
    Random.fromFieldsWithTypes = function (item) {
        if (!isRandom(item.type)) {
            throw new Error("not a Random type");
        }
        return Random.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.UID.reified(), item.fields.id), inner: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Versioned.reified(), item.fields.inner) });
    };
    Random.fromBcs = function (data) { return Random.fromFields(Random.bcs.parse(data)); };
    Random.prototype.toJSONField = function () {
        return {
            id: this.id, inner: this.inner.toJSONField(),
        };
    };
    Random.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Random.fromJSONField = function (field) { return Random.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_1.UID.reified(), field.id), inner: (0, reified_1.decodeFromJSONField)(structs_2.Versioned.reified(), field.inner) }); };
    Random.fromJSON = function (json) {
        if (json.$typeName !== Random.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Random.fromJSONField(json);
    };
    Random.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isRandom(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Random object"));
    } return Random.fromFieldsWithTypes(content); };
    Random.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Random object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRandom(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Random object"));
                        }
                        return [2 /*return*/, Random.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Random.$typeName = "0x2::random::Random";
    Random.$numTypeParams = 0;
    return Random;
}());
exports.Random = Random;
/* ============================== RandomGenerator =============================== */
function isRandomGenerator(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::random::RandomGenerator"; }
var RandomGenerator = /** @class */ (function () {
    function RandomGenerator(typeArgs, fields) {
        this.$typeName = RandomGenerator.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([RandomGenerator.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.seed = fields.seed;
        ;
        this.counter = fields.counter;
        ;
        this.buffer = fields.buffer;
    }
    RandomGenerator.reified = function () {
        var _this = this;
        return { typeName: RandomGenerator.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([RandomGenerator.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return RandomGenerator.fromFields(fields); }, fromFieldsWithTypes: function (item) { return RandomGenerator.fromFieldsWithTypes(item); }, fromBcs: function (data) { return RandomGenerator.fromBcs(data); }, bcs: RandomGenerator.bcs, fromJSONField: function (field) { return RandomGenerator.fromJSONField(field); }, fromJSON: function (json) { return RandomGenerator.fromJSON(json); }, fromSuiParsedData: function (content) { return RandomGenerator.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, RandomGenerator.fetch(client, id)];
            }); }); }, new: function (fields) { return new RandomGenerator([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(RandomGenerator, "r", {
        get: function () { return RandomGenerator.reified(); },
        enumerable: false,
        configurable: true
    });
    RandomGenerator.phantom = function () { return (0, reified_1.phantom)(RandomGenerator.reified()); };
    Object.defineProperty(RandomGenerator, "p", {
        get: function () { return RandomGenerator.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RandomGenerator, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("RandomGenerator", {
                seed: bcs_1.bcs.vector(bcs_1.bcs.u8()), counter: bcs_1.bcs.u16(), buffer: bcs_1.bcs.vector(bcs_1.bcs.u8())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    RandomGenerator.fromFields = function (fields) { return RandomGenerator.reified().new({ seed: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.seed), counter: (0, reified_1.decodeFromFields)("u16", fields.counter), buffer: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.buffer) }); };
    RandomGenerator.fromFieldsWithTypes = function (item) {
        if (!isRandomGenerator(item.type)) {
            throw new Error("not a RandomGenerator type");
        }
        return RandomGenerator.reified().new({ seed: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.seed), counter: (0, reified_1.decodeFromFieldsWithTypes)("u16", item.fields.counter), buffer: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.buffer) });
    };
    RandomGenerator.fromBcs = function (data) { return RandomGenerator.fromFields(RandomGenerator.bcs.parse(data)); };
    RandomGenerator.prototype.toJSONField = function () {
        return {
            seed: (0, reified_1.fieldToJSON)("vector<u8>", this.seed), counter: this.counter, buffer: (0, reified_1.fieldToJSON)("vector<u8>", this.buffer),
        };
    };
    RandomGenerator.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    RandomGenerator.fromJSONField = function (field) { return RandomGenerator.reified().new({ seed: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.seed), counter: (0, reified_1.decodeFromJSONField)("u16", field.counter), buffer: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.buffer) }); };
    RandomGenerator.fromJSON = function (json) {
        if (json.$typeName !== RandomGenerator.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return RandomGenerator.fromJSONField(json);
    };
    RandomGenerator.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isRandomGenerator(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a RandomGenerator object"));
    } return RandomGenerator.fromFieldsWithTypes(content); };
    RandomGenerator.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching RandomGenerator object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRandomGenerator(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a RandomGenerator object"));
                        }
                        return [2 /*return*/, RandomGenerator.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    RandomGenerator.$typeName = "0x2::random::RandomGenerator";
    RandomGenerator.$numTypeParams = 0;
    return RandomGenerator;
}());
exports.RandomGenerator = RandomGenerator;
/* ============================== RandomInner =============================== */
function isRandomInner(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::random::RandomInner"; }
var RandomInner = /** @class */ (function () {
    function RandomInner(typeArgs, fields) {
        this.$typeName = RandomInner.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([RandomInner.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.epoch = fields.epoch;
        ;
        this.randomnessRound = fields.randomnessRound;
        ;
        this.randomBytes = fields.randomBytes;
    }
    RandomInner.reified = function () {
        var _this = this;
        return { typeName: RandomInner.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([RandomInner.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return RandomInner.fromFields(fields); }, fromFieldsWithTypes: function (item) { return RandomInner.fromFieldsWithTypes(item); }, fromBcs: function (data) { return RandomInner.fromBcs(data); }, bcs: RandomInner.bcs, fromJSONField: function (field) { return RandomInner.fromJSONField(field); }, fromJSON: function (json) { return RandomInner.fromJSON(json); }, fromSuiParsedData: function (content) { return RandomInner.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, RandomInner.fetch(client, id)];
            }); }); }, new: function (fields) { return new RandomInner([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(RandomInner, "r", {
        get: function () { return RandomInner.reified(); },
        enumerable: false,
        configurable: true
    });
    RandomInner.phantom = function () { return (0, reified_1.phantom)(RandomInner.reified()); };
    Object.defineProperty(RandomInner, "p", {
        get: function () { return RandomInner.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RandomInner, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("RandomInner", {
                version: bcs_1.bcs.u64(), epoch: bcs_1.bcs.u64(), randomness_round: bcs_1.bcs.u64(), random_bytes: bcs_1.bcs.vector(bcs_1.bcs.u8())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    RandomInner.fromFields = function (fields) { return RandomInner.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), epoch: (0, reified_1.decodeFromFields)("u64", fields.epoch), randomnessRound: (0, reified_1.decodeFromFields)("u64", fields.randomness_round), randomBytes: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.random_bytes) }); };
    RandomInner.fromFieldsWithTypes = function (item) {
        if (!isRandomInner(item.type)) {
            throw new Error("not a RandomInner type");
        }
        return RandomInner.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), epoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.epoch), randomnessRound: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.randomness_round), randomBytes: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.random_bytes) });
    };
    RandomInner.fromBcs = function (data) { return RandomInner.fromFields(RandomInner.bcs.parse(data)); };
    RandomInner.prototype.toJSONField = function () {
        return {
            version: this.version.toString(), epoch: this.epoch.toString(), randomnessRound: this.randomnessRound.toString(), randomBytes: (0, reified_1.fieldToJSON)("vector<u8>", this.randomBytes),
        };
    };
    RandomInner.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    RandomInner.fromJSONField = function (field) { return RandomInner.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), epoch: (0, reified_1.decodeFromJSONField)("u64", field.epoch), randomnessRound: (0, reified_1.decodeFromJSONField)("u64", field.randomnessRound), randomBytes: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.randomBytes) }); };
    RandomInner.fromJSON = function (json) {
        if (json.$typeName !== RandomInner.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return RandomInner.fromJSONField(json);
    };
    RandomInner.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isRandomInner(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a RandomInner object"));
    } return RandomInner.fromFieldsWithTypes(content); };
    RandomInner.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching RandomInner object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRandomInner(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a RandomInner object"));
                        }
                        return [2 /*return*/, RandomInner.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    RandomInner.$typeName = "0x2::random::RandomInner";
    RandomInner.$numTypeParams = 0;
    return RandomInner;
}());
exports.RandomInner = RandomInner;
