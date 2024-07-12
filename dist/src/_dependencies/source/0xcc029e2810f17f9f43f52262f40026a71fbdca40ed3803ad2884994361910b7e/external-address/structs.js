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
exports.ExternalAddress = void 0;
exports.isExternalAddress = isExternalAddress;
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var structs_1 = require("../bytes32/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== ExternalAddress =============================== */
function isExternalAddress(type) { type = (0, util_1.compressSuiType)(type); return type === "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::external_address::ExternalAddress"; }
var ExternalAddress = /** @class */ (function () {
    function ExternalAddress(typeArgs, fields) {
        this.$typeName = ExternalAddress.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([ExternalAddress.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.value = fields.value;
    }
    ExternalAddress.reified = function () {
        var _this = this;
        return { typeName: ExternalAddress.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([ExternalAddress.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return ExternalAddress.fromFields(fields); }, fromFieldsWithTypes: function (item) { return ExternalAddress.fromFieldsWithTypes(item); }, fromBcs: function (data) { return ExternalAddress.fromBcs(data); }, bcs: ExternalAddress.bcs, fromJSONField: function (field) { return ExternalAddress.fromJSONField(field); }, fromJSON: function (json) { return ExternalAddress.fromJSON(json); }, fromSuiParsedData: function (content) { return ExternalAddress.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, ExternalAddress.fetch(client, id)];
            }); }); }, new: function (fields) { return new ExternalAddress([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(ExternalAddress, "r", {
        get: function () { return ExternalAddress.reified(); },
        enumerable: false,
        configurable: true
    });
    ExternalAddress.phantom = function () { return (0, reified_1.phantom)(ExternalAddress.reified()); };
    Object.defineProperty(ExternalAddress, "p", {
        get: function () { return ExternalAddress.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExternalAddress, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("ExternalAddress", {
                value: structs_1.Bytes32.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    ExternalAddress.fromFields = function (fields) { return ExternalAddress.reified().new({ value: (0, reified_1.decodeFromFields)(structs_1.Bytes32.reified(), fields.value) }); };
    ExternalAddress.fromFieldsWithTypes = function (item) {
        if (!isExternalAddress(item.type)) {
            throw new Error("not a ExternalAddress type");
        }
        return ExternalAddress.reified().new({ value: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Bytes32.reified(), item.fields.value) });
    };
    ExternalAddress.fromBcs = function (data) { return ExternalAddress.fromFields(ExternalAddress.bcs.parse(data)); };
    ExternalAddress.prototype.toJSONField = function () {
        return {
            value: this.value.toJSONField(),
        };
    };
    ExternalAddress.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    ExternalAddress.fromJSONField = function (field) { return ExternalAddress.reified().new({ value: (0, reified_1.decodeFromJSONField)(structs_1.Bytes32.reified(), field.value) }); };
    ExternalAddress.fromJSON = function (json) {
        if (json.$typeName !== ExternalAddress.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ExternalAddress.fromJSONField(json);
    };
    ExternalAddress.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isExternalAddress(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a ExternalAddress object"));
    } return ExternalAddress.fromFieldsWithTypes(content); };
    ExternalAddress.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching ExternalAddress object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isExternalAddress(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a ExternalAddress object"));
                        }
                        return [2 /*return*/, ExternalAddress.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    ExternalAddress.$typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::external_address::ExternalAddress";
    ExternalAddress.$numTypeParams = 0;
    return ExternalAddress;
}());
exports.ExternalAddress = ExternalAddress;
