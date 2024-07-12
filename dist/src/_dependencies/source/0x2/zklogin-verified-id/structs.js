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
exports.VerifiedID = void 0;
exports.isVerifiedID = isVerifiedID;
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var structs_1 = require("../../0x1/string/structs");
var structs_2 = require("../object/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== VerifiedID =============================== */
function isVerifiedID(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::zklogin_verified_id::VerifiedID"; }
var VerifiedID = /** @class */ (function () {
    function VerifiedID(typeArgs, fields) {
        this.$typeName = VerifiedID.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([VerifiedID.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.owner = fields.owner;
        ;
        this.keyClaimName = fields.keyClaimName;
        ;
        this.keyClaimValue = fields.keyClaimValue;
        ;
        this.issuer = fields.issuer;
        ;
        this.audience = fields.audience;
    }
    VerifiedID.reified = function () {
        var _this = this;
        return { typeName: VerifiedID.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([VerifiedID.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return VerifiedID.fromFields(fields); }, fromFieldsWithTypes: function (item) { return VerifiedID.fromFieldsWithTypes(item); }, fromBcs: function (data) { return VerifiedID.fromBcs(data); }, bcs: VerifiedID.bcs, fromJSONField: function (field) { return VerifiedID.fromJSONField(field); }, fromJSON: function (json) { return VerifiedID.fromJSON(json); }, fromSuiParsedData: function (content) { return VerifiedID.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, VerifiedID.fetch(client, id)];
            }); }); }, new: function (fields) { return new VerifiedID([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(VerifiedID, "r", {
        get: function () { return VerifiedID.reified(); },
        enumerable: false,
        configurable: true
    });
    VerifiedID.phantom = function () { return (0, reified_1.phantom)(VerifiedID.reified()); };
    Object.defineProperty(VerifiedID, "p", {
        get: function () { return VerifiedID.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VerifiedID, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("VerifiedID", {
                id: structs_2.UID.bcs, owner: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), key_claim_name: structs_1.String.bcs, key_claim_value: structs_1.String.bcs, issuer: structs_1.String.bcs, audience: structs_1.String.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    VerifiedID.fromFields = function (fields) { return VerifiedID.reified().new({ id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id), owner: (0, reified_1.decodeFromFields)("address", fields.owner), keyClaimName: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.key_claim_name), keyClaimValue: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.key_claim_value), issuer: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.issuer), audience: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.audience) }); };
    VerifiedID.fromFieldsWithTypes = function (item) {
        if (!isVerifiedID(item.type)) {
            throw new Error("not a VerifiedID type");
        }
        return VerifiedID.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id), owner: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.owner), keyClaimName: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.key_claim_name), keyClaimValue: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.key_claim_value), issuer: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.issuer), audience: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.audience) });
    };
    VerifiedID.fromBcs = function (data) { return VerifiedID.fromFields(VerifiedID.bcs.parse(data)); };
    VerifiedID.prototype.toJSONField = function () {
        return {
            id: this.id, owner: this.owner, keyClaimName: this.keyClaimName, keyClaimValue: this.keyClaimValue, issuer: this.issuer, audience: this.audience,
        };
    };
    VerifiedID.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    VerifiedID.fromJSONField = function (field) { return VerifiedID.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id), owner: (0, reified_1.decodeFromJSONField)("address", field.owner), keyClaimName: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.keyClaimName), keyClaimValue: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.keyClaimValue), issuer: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.issuer), audience: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.audience) }); };
    VerifiedID.fromJSON = function (json) {
        if (json.$typeName !== VerifiedID.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return VerifiedID.fromJSONField(json);
    };
    VerifiedID.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isVerifiedID(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a VerifiedID object"));
    } return VerifiedID.fromFieldsWithTypes(content); };
    VerifiedID.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching VerifiedID object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isVerifiedID(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a VerifiedID object"));
                        }
                        return [2 /*return*/, VerifiedID.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    VerifiedID.$typeName = "0x2::zklogin_verified_id::VerifiedID";
    VerifiedID.$numTypeParams = 0;
    return VerifiedID;
}());
exports.VerifiedID = VerifiedID;
