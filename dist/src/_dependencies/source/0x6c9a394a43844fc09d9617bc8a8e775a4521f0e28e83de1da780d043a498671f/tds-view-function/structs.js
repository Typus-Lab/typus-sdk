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
exports.DepositShare = void 0;
exports.isDepositShare = isDepositShare;
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var bcs_1 = require("@mysten/bcs");
/* ============================== DepositShare =============================== */
function isDepositShare(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_view_function::DepositShare"; }
var DepositShare = /** @class */ (function () {
    function DepositShare(typeArgs, fields) {
        this.$typeName = DepositShare.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([DepositShare.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.index = fields.index;
        ;
        this.activeShare = fields.activeShare;
        ;
        this.deactivatingShare = fields.deactivatingShare;
        ;
        this.inactiveShare = fields.inactiveShare;
        ;
        this.warmupShare = fields.warmupShare;
        ;
        this.premiumShare = fields.premiumShare;
        ;
        this.incentiveShare = fields.incentiveShare;
    }
    DepositShare.reified = function () {
        var _this = this;
        return { typeName: DepositShare.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([DepositShare.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return DepositShare.fromFields(fields); }, fromFieldsWithTypes: function (item) { return DepositShare.fromFieldsWithTypes(item); }, fromBcs: function (data) { return DepositShare.fromBcs(data); }, bcs: DepositShare.bcs, fromJSONField: function (field) { return DepositShare.fromJSONField(field); }, fromJSON: function (json) { return DepositShare.fromJSON(json); }, fromSuiParsedData: function (content) { return DepositShare.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, DepositShare.fetch(client, id)];
            }); }); }, new: function (fields) { return new DepositShare([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(DepositShare, "r", {
        get: function () { return DepositShare.reified(); },
        enumerable: false,
        configurable: true
    });
    DepositShare.phantom = function () { return (0, reified_1.phantom)(DepositShare.reified()); };
    Object.defineProperty(DepositShare, "p", {
        get: function () { return DepositShare.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DepositShare, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("DepositShare", {
                index: bcs_1.bcs.u64(), active_share: bcs_1.bcs.u64(), deactivating_share: bcs_1.bcs.u64(), inactive_share: bcs_1.bcs.u64(), warmup_share: bcs_1.bcs.u64(), premium_share: bcs_1.bcs.u64(), incentive_share: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    DepositShare.fromFields = function (fields) { return DepositShare.reified().new({ index: (0, reified_1.decodeFromFields)("u64", fields.index), activeShare: (0, reified_1.decodeFromFields)("u64", fields.active_share), deactivatingShare: (0, reified_1.decodeFromFields)("u64", fields.deactivating_share), inactiveShare: (0, reified_1.decodeFromFields)("u64", fields.inactive_share), warmupShare: (0, reified_1.decodeFromFields)("u64", fields.warmup_share), premiumShare: (0, reified_1.decodeFromFields)("u64", fields.premium_share), incentiveShare: (0, reified_1.decodeFromFields)("u64", fields.incentive_share) }); };
    DepositShare.fromFieldsWithTypes = function (item) {
        if (!isDepositShare(item.type)) {
            throw new Error("not a DepositShare type");
        }
        return DepositShare.reified().new({ index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), activeShare: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.active_share), deactivatingShare: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.deactivating_share), inactiveShare: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.inactive_share), warmupShare: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.warmup_share), premiumShare: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.premium_share), incentiveShare: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.incentive_share) });
    };
    DepositShare.fromBcs = function (data) { return DepositShare.fromFields(DepositShare.bcs.parse(data)); };
    DepositShare.prototype.toJSONField = function () {
        return {
            index: this.index.toString(), activeShare: this.activeShare.toString(), deactivatingShare: this.deactivatingShare.toString(), inactiveShare: this.inactiveShare.toString(), warmupShare: this.warmupShare.toString(), premiumShare: this.premiumShare.toString(), incentiveShare: this.incentiveShare.toString(),
        };
    };
    DepositShare.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    DepositShare.fromJSONField = function (field) { return DepositShare.reified().new({ index: (0, reified_1.decodeFromJSONField)("u64", field.index), activeShare: (0, reified_1.decodeFromJSONField)("u64", field.activeShare), deactivatingShare: (0, reified_1.decodeFromJSONField)("u64", field.deactivatingShare), inactiveShare: (0, reified_1.decodeFromJSONField)("u64", field.inactiveShare), warmupShare: (0, reified_1.decodeFromJSONField)("u64", field.warmupShare), premiumShare: (0, reified_1.decodeFromJSONField)("u64", field.premiumShare), incentiveShare: (0, reified_1.decodeFromJSONField)("u64", field.incentiveShare) }); };
    DepositShare.fromJSON = function (json) {
        if (json.$typeName !== DepositShare.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return DepositShare.fromJSONField(json);
    };
    DepositShare.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDepositShare(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a DepositShare object"));
    } return DepositShare.fromFieldsWithTypes(content); };
    DepositShare.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching DepositShare object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDepositShare(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a DepositShare object"));
                        }
                        return [2 /*return*/, DepositShare.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    DepositShare.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_view_function::DepositShare";
    DepositShare.$numTypeParams = 0;
    return DepositShare;
}());
exports.DepositShare = DepositShare;
