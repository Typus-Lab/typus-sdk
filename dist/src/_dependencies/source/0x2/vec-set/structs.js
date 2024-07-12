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
exports.VecSet = void 0;
exports.isVecSet = isVecSet;
var reified = __importStar(require("../../../../_framework/reified"));
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var bcs_1 = require("@mysten/bcs");
/* ============================== VecSet =============================== */
function isVecSet(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::vec_set::VecSet<"); }
var VecSet = /** @class */ (function () {
    function VecSet(typeArgs, fields) {
        this.$typeName = VecSet.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([VecSet.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.contents = fields.contents;
    }
    VecSet.reified = function (K) {
        var _this = this;
        return { typeName: VecSet.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([VecSet.$typeName], [(0, reified_1.extractType)(K)], false)), typeArgs: [(0, reified_1.extractType)(K)], reifiedTypeArgs: [K], fromFields: function (fields) { return VecSet.fromFields(K, fields); }, fromFieldsWithTypes: function (item) { return VecSet.fromFieldsWithTypes(K, item); }, fromBcs: function (data) { return VecSet.fromBcs(K, data); }, bcs: VecSet.bcs((0, reified_1.toBcs)(K)), fromJSONField: function (field) { return VecSet.fromJSONField(K, field); }, fromJSON: function (json) { return VecSet.fromJSON(K, json); }, fromSuiParsedData: function (content) { return VecSet.fromSuiParsedData(K, content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, VecSet.fetch(client, K, id)];
            }); }); }, new: function (fields) { return new VecSet([(0, reified_1.extractType)(K)], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(VecSet, "r", {
        get: function () { return VecSet.reified; },
        enumerable: false,
        configurable: true
    });
    VecSet.phantom = function (K) { return (0, reified_1.phantom)(VecSet.reified(K)); };
    Object.defineProperty(VecSet, "p", {
        get: function () { return VecSet.phantom; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VecSet, "bcs", {
        get: function () {
            return function (K) { return bcs_1.bcs.struct("VecSet<".concat(K.name, ">"), {
                contents: bcs_1.bcs.vector(K)
            }); };
        },
        enumerable: false,
        configurable: true
    });
    ;
    VecSet.fromFields = function (typeArg, fields) { return VecSet.reified(typeArg).new({ contents: (0, reified_1.decodeFromFields)(reified.vector(typeArg), fields.contents) }); };
    VecSet.fromFieldsWithTypes = function (typeArg, item) {
        if (!isVecSet(item.type)) {
            throw new Error("not a VecSet type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return VecSet.reified(typeArg).new({ contents: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(typeArg), item.fields.contents) });
    };
    VecSet.fromBcs = function (typeArg, data) {
        var typeArgs = [typeArg];
        return VecSet.fromFields(typeArg, VecSet.bcs((0, reified_1.toBcs)(typeArgs[0])).parse(data));
    };
    VecSet.prototype.toJSONField = function () {
        return {
            contents: (0, reified_1.fieldToJSON)("vector<".concat(this.$typeArgs[0], ">"), this.contents),
        };
    };
    VecSet.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    VecSet.fromJSONField = function (typeArg, field) { return VecSet.reified(typeArg).new({ contents: (0, reified_1.decodeFromJSONField)(reified.vector(typeArg), field.contents) }); };
    VecSet.fromJSON = function (typeArg, json) {
        if (json.$typeName !== VecSet.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(VecSet.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return VecSet.fromJSONField(typeArg, json);
    };
    VecSet.fromSuiParsedData = function (typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isVecSet(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a VecSet object"));
    } return VecSet.fromFieldsWithTypes(typeArg, content); };
    VecSet.fetch = function (client, typeArg, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching VecSet object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isVecSet(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a VecSet object"));
                        }
                        return [2 /*return*/, VecSet.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    VecSet.$typeName = "0x2::vec_set::VecSet";
    VecSet.$numTypeParams = 1;
    return VecSet;
}());
exports.VecSet = VecSet;
