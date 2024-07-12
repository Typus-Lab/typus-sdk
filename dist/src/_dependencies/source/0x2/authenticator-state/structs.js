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
exports.JwkId = exports.JWK = exports.AuthenticatorStateInner = exports.AuthenticatorState = exports.ActiveJwk = void 0;
exports.isActiveJwk = isActiveJwk;
exports.isAuthenticatorState = isAuthenticatorState;
exports.isAuthenticatorStateInner = isAuthenticatorStateInner;
exports.isJWK = isJWK;
exports.isJwkId = isJwkId;
var reified = __importStar(require("../../../../_framework/reified"));
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var structs_1 = require("../../0x1/string/structs");
var structs_2 = require("../object/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== ActiveJwk =============================== */
function isActiveJwk(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::authenticator_state::ActiveJwk"; }
var ActiveJwk = /** @class */ (function () {
    function ActiveJwk(typeArgs, fields) {
        this.$typeName = ActiveJwk.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([ActiveJwk.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.jwkId = fields.jwkId;
        ;
        this.jwk = fields.jwk;
        ;
        this.epoch = fields.epoch;
    }
    ActiveJwk.reified = function () {
        var _this = this;
        return { typeName: ActiveJwk.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([ActiveJwk.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return ActiveJwk.fromFields(fields); }, fromFieldsWithTypes: function (item) { return ActiveJwk.fromFieldsWithTypes(item); }, fromBcs: function (data) { return ActiveJwk.fromBcs(data); }, bcs: ActiveJwk.bcs, fromJSONField: function (field) { return ActiveJwk.fromJSONField(field); }, fromJSON: function (json) { return ActiveJwk.fromJSON(json); }, fromSuiParsedData: function (content) { return ActiveJwk.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, ActiveJwk.fetch(client, id)];
            }); }); }, new: function (fields) { return new ActiveJwk([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(ActiveJwk, "r", {
        get: function () { return ActiveJwk.reified(); },
        enumerable: false,
        configurable: true
    });
    ActiveJwk.phantom = function () { return (0, reified_1.phantom)(ActiveJwk.reified()); };
    Object.defineProperty(ActiveJwk, "p", {
        get: function () { return ActiveJwk.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActiveJwk, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("ActiveJwk", {
                jwk_id: JwkId.bcs, jwk: JWK.bcs, epoch: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    ActiveJwk.fromFields = function (fields) { return ActiveJwk.reified().new({ jwkId: (0, reified_1.decodeFromFields)(JwkId.reified(), fields.jwk_id), jwk: (0, reified_1.decodeFromFields)(JWK.reified(), fields.jwk), epoch: (0, reified_1.decodeFromFields)("u64", fields.epoch) }); };
    ActiveJwk.fromFieldsWithTypes = function (item) {
        if (!isActiveJwk(item.type)) {
            throw new Error("not a ActiveJwk type");
        }
        return ActiveJwk.reified().new({ jwkId: (0, reified_1.decodeFromFieldsWithTypes)(JwkId.reified(), item.fields.jwk_id), jwk: (0, reified_1.decodeFromFieldsWithTypes)(JWK.reified(), item.fields.jwk), epoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.epoch) });
    };
    ActiveJwk.fromBcs = function (data) { return ActiveJwk.fromFields(ActiveJwk.bcs.parse(data)); };
    ActiveJwk.prototype.toJSONField = function () {
        return {
            jwkId: this.jwkId.toJSONField(), jwk: this.jwk.toJSONField(), epoch: this.epoch.toString(),
        };
    };
    ActiveJwk.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    ActiveJwk.fromJSONField = function (field) { return ActiveJwk.reified().new({ jwkId: (0, reified_1.decodeFromJSONField)(JwkId.reified(), field.jwkId), jwk: (0, reified_1.decodeFromJSONField)(JWK.reified(), field.jwk), epoch: (0, reified_1.decodeFromJSONField)("u64", field.epoch) }); };
    ActiveJwk.fromJSON = function (json) {
        if (json.$typeName !== ActiveJwk.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ActiveJwk.fromJSONField(json);
    };
    ActiveJwk.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isActiveJwk(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a ActiveJwk object"));
    } return ActiveJwk.fromFieldsWithTypes(content); };
    ActiveJwk.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching ActiveJwk object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isActiveJwk(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a ActiveJwk object"));
                        }
                        return [2 /*return*/, ActiveJwk.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    ActiveJwk.$typeName = "0x2::authenticator_state::ActiveJwk";
    ActiveJwk.$numTypeParams = 0;
    return ActiveJwk;
}());
exports.ActiveJwk = ActiveJwk;
/* ============================== AuthenticatorState =============================== */
function isAuthenticatorState(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::authenticator_state::AuthenticatorState"; }
var AuthenticatorState = /** @class */ (function () {
    function AuthenticatorState(typeArgs, fields) {
        this.$typeName = AuthenticatorState.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([AuthenticatorState.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.version = fields.version;
    }
    AuthenticatorState.reified = function () {
        var _this = this;
        return { typeName: AuthenticatorState.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([AuthenticatorState.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return AuthenticatorState.fromFields(fields); }, fromFieldsWithTypes: function (item) { return AuthenticatorState.fromFieldsWithTypes(item); }, fromBcs: function (data) { return AuthenticatorState.fromBcs(data); }, bcs: AuthenticatorState.bcs, fromJSONField: function (field) { return AuthenticatorState.fromJSONField(field); }, fromJSON: function (json) { return AuthenticatorState.fromJSON(json); }, fromSuiParsedData: function (content) { return AuthenticatorState.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, AuthenticatorState.fetch(client, id)];
            }); }); }, new: function (fields) { return new AuthenticatorState([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(AuthenticatorState, "r", {
        get: function () { return AuthenticatorState.reified(); },
        enumerable: false,
        configurable: true
    });
    AuthenticatorState.phantom = function () { return (0, reified_1.phantom)(AuthenticatorState.reified()); };
    Object.defineProperty(AuthenticatorState, "p", {
        get: function () { return AuthenticatorState.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthenticatorState, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("AuthenticatorState", {
                id: structs_2.UID.bcs, version: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    AuthenticatorState.fromFields = function (fields) { return AuthenticatorState.reified().new({ id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id), version: (0, reified_1.decodeFromFields)("u64", fields.version) }); };
    AuthenticatorState.fromFieldsWithTypes = function (item) {
        if (!isAuthenticatorState(item.type)) {
            throw new Error("not a AuthenticatorState type");
        }
        return AuthenticatorState.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version) });
    };
    AuthenticatorState.fromBcs = function (data) { return AuthenticatorState.fromFields(AuthenticatorState.bcs.parse(data)); };
    AuthenticatorState.prototype.toJSONField = function () {
        return {
            id: this.id, version: this.version.toString(),
        };
    };
    AuthenticatorState.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    AuthenticatorState.fromJSONField = function (field) { return AuthenticatorState.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id), version: (0, reified_1.decodeFromJSONField)("u64", field.version) }); };
    AuthenticatorState.fromJSON = function (json) {
        if (json.$typeName !== AuthenticatorState.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return AuthenticatorState.fromJSONField(json);
    };
    AuthenticatorState.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isAuthenticatorState(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a AuthenticatorState object"));
    } return AuthenticatorState.fromFieldsWithTypes(content); };
    AuthenticatorState.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching AuthenticatorState object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isAuthenticatorState(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a AuthenticatorState object"));
                        }
                        return [2 /*return*/, AuthenticatorState.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    AuthenticatorState.$typeName = "0x2::authenticator_state::AuthenticatorState";
    AuthenticatorState.$numTypeParams = 0;
    return AuthenticatorState;
}());
exports.AuthenticatorState = AuthenticatorState;
/* ============================== AuthenticatorStateInner =============================== */
function isAuthenticatorStateInner(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::authenticator_state::AuthenticatorStateInner"; }
var AuthenticatorStateInner = /** @class */ (function () {
    function AuthenticatorStateInner(typeArgs, fields) {
        this.$typeName = AuthenticatorStateInner.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([AuthenticatorStateInner.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.activeJwks = fields.activeJwks;
    }
    AuthenticatorStateInner.reified = function () {
        var _this = this;
        return { typeName: AuthenticatorStateInner.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([AuthenticatorStateInner.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return AuthenticatorStateInner.fromFields(fields); }, fromFieldsWithTypes: function (item) { return AuthenticatorStateInner.fromFieldsWithTypes(item); }, fromBcs: function (data) { return AuthenticatorStateInner.fromBcs(data); }, bcs: AuthenticatorStateInner.bcs, fromJSONField: function (field) { return AuthenticatorStateInner.fromJSONField(field); }, fromJSON: function (json) { return AuthenticatorStateInner.fromJSON(json); }, fromSuiParsedData: function (content) { return AuthenticatorStateInner.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, AuthenticatorStateInner.fetch(client, id)];
            }); }); }, new: function (fields) { return new AuthenticatorStateInner([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(AuthenticatorStateInner, "r", {
        get: function () { return AuthenticatorStateInner.reified(); },
        enumerable: false,
        configurable: true
    });
    AuthenticatorStateInner.phantom = function () { return (0, reified_1.phantom)(AuthenticatorStateInner.reified()); };
    Object.defineProperty(AuthenticatorStateInner, "p", {
        get: function () { return AuthenticatorStateInner.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthenticatorStateInner, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("AuthenticatorStateInner", {
                version: bcs_1.bcs.u64(), active_jwks: bcs_1.bcs.vector(ActiveJwk.bcs)
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    AuthenticatorStateInner.fromFields = function (fields) { return AuthenticatorStateInner.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), activeJwks: (0, reified_1.decodeFromFields)(reified.vector(ActiveJwk.reified()), fields.active_jwks) }); };
    AuthenticatorStateInner.fromFieldsWithTypes = function (item) {
        if (!isAuthenticatorStateInner(item.type)) {
            throw new Error("not a AuthenticatorStateInner type");
        }
        return AuthenticatorStateInner.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), activeJwks: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(ActiveJwk.reified()), item.fields.active_jwks) });
    };
    AuthenticatorStateInner.fromBcs = function (data) { return AuthenticatorStateInner.fromFields(AuthenticatorStateInner.bcs.parse(data)); };
    AuthenticatorStateInner.prototype.toJSONField = function () {
        return {
            version: this.version.toString(), activeJwks: (0, reified_1.fieldToJSON)("vector<0x2::authenticator_state::ActiveJwk>", this.activeJwks),
        };
    };
    AuthenticatorStateInner.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    AuthenticatorStateInner.fromJSONField = function (field) { return AuthenticatorStateInner.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), activeJwks: (0, reified_1.decodeFromJSONField)(reified.vector(ActiveJwk.reified()), field.activeJwks) }); };
    AuthenticatorStateInner.fromJSON = function (json) {
        if (json.$typeName !== AuthenticatorStateInner.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return AuthenticatorStateInner.fromJSONField(json);
    };
    AuthenticatorStateInner.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isAuthenticatorStateInner(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a AuthenticatorStateInner object"));
    } return AuthenticatorStateInner.fromFieldsWithTypes(content); };
    AuthenticatorStateInner.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching AuthenticatorStateInner object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isAuthenticatorStateInner(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a AuthenticatorStateInner object"));
                        }
                        return [2 /*return*/, AuthenticatorStateInner.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    AuthenticatorStateInner.$typeName = "0x2::authenticator_state::AuthenticatorStateInner";
    AuthenticatorStateInner.$numTypeParams = 0;
    return AuthenticatorStateInner;
}());
exports.AuthenticatorStateInner = AuthenticatorStateInner;
/* ============================== JWK =============================== */
function isJWK(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::authenticator_state::JWK"; }
var JWK = /** @class */ (function () {
    function JWK(typeArgs, fields) {
        this.$typeName = JWK.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([JWK.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.kty = fields.kty;
        ;
        this.e = fields.e;
        ;
        this.n = fields.n;
        ;
        this.alg = fields.alg;
    }
    JWK.reified = function () {
        var _this = this;
        return { typeName: JWK.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([JWK.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return JWK.fromFields(fields); }, fromFieldsWithTypes: function (item) { return JWK.fromFieldsWithTypes(item); }, fromBcs: function (data) { return JWK.fromBcs(data); }, bcs: JWK.bcs, fromJSONField: function (field) { return JWK.fromJSONField(field); }, fromJSON: function (json) { return JWK.fromJSON(json); }, fromSuiParsedData: function (content) { return JWK.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, JWK.fetch(client, id)];
            }); }); }, new: function (fields) { return new JWK([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(JWK, "r", {
        get: function () { return JWK.reified(); },
        enumerable: false,
        configurable: true
    });
    JWK.phantom = function () { return (0, reified_1.phantom)(JWK.reified()); };
    Object.defineProperty(JWK, "p", {
        get: function () { return JWK.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JWK, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("JWK", {
                kty: structs_1.String.bcs, e: structs_1.String.bcs, n: structs_1.String.bcs, alg: structs_1.String.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    JWK.fromFields = function (fields) { return JWK.reified().new({ kty: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.kty), e: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.e), n: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.n), alg: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.alg) }); };
    JWK.fromFieldsWithTypes = function (item) {
        if (!isJWK(item.type)) {
            throw new Error("not a JWK type");
        }
        return JWK.reified().new({ kty: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.kty), e: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.e), n: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.n), alg: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.alg) });
    };
    JWK.fromBcs = function (data) { return JWK.fromFields(JWK.bcs.parse(data)); };
    JWK.prototype.toJSONField = function () {
        return {
            kty: this.kty, e: this.e, n: this.n, alg: this.alg,
        };
    };
    JWK.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    JWK.fromJSONField = function (field) { return JWK.reified().new({ kty: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.kty), e: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.e), n: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.n), alg: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.alg) }); };
    JWK.fromJSON = function (json) {
        if (json.$typeName !== JWK.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return JWK.fromJSONField(json);
    };
    JWK.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isJWK(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a JWK object"));
    } return JWK.fromFieldsWithTypes(content); };
    JWK.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching JWK object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isJWK(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a JWK object"));
                        }
                        return [2 /*return*/, JWK.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    JWK.$typeName = "0x2::authenticator_state::JWK";
    JWK.$numTypeParams = 0;
    return JWK;
}());
exports.JWK = JWK;
/* ============================== JwkId =============================== */
function isJwkId(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::authenticator_state::JwkId"; }
var JwkId = /** @class */ (function () {
    function JwkId(typeArgs, fields) {
        this.$typeName = JwkId.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([JwkId.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.iss = fields.iss;
        ;
        this.kid = fields.kid;
    }
    JwkId.reified = function () {
        var _this = this;
        return { typeName: JwkId.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([JwkId.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return JwkId.fromFields(fields); }, fromFieldsWithTypes: function (item) { return JwkId.fromFieldsWithTypes(item); }, fromBcs: function (data) { return JwkId.fromBcs(data); }, bcs: JwkId.bcs, fromJSONField: function (field) { return JwkId.fromJSONField(field); }, fromJSON: function (json) { return JwkId.fromJSON(json); }, fromSuiParsedData: function (content) { return JwkId.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, JwkId.fetch(client, id)];
            }); }); }, new: function (fields) { return new JwkId([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(JwkId, "r", {
        get: function () { return JwkId.reified(); },
        enumerable: false,
        configurable: true
    });
    JwkId.phantom = function () { return (0, reified_1.phantom)(JwkId.reified()); };
    Object.defineProperty(JwkId, "p", {
        get: function () { return JwkId.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JwkId, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("JwkId", {
                iss: structs_1.String.bcs, kid: structs_1.String.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    JwkId.fromFields = function (fields) { return JwkId.reified().new({ iss: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.iss), kid: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.kid) }); };
    JwkId.fromFieldsWithTypes = function (item) {
        if (!isJwkId(item.type)) {
            throw new Error("not a JwkId type");
        }
        return JwkId.reified().new({ iss: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.iss), kid: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.kid) });
    };
    JwkId.fromBcs = function (data) { return JwkId.fromFields(JwkId.bcs.parse(data)); };
    JwkId.prototype.toJSONField = function () {
        return {
            iss: this.iss, kid: this.kid,
        };
    };
    JwkId.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    JwkId.fromJSONField = function (field) { return JwkId.reified().new({ iss: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.iss), kid: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.kid) }); };
    JwkId.fromJSON = function (json) {
        if (json.$typeName !== JwkId.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return JwkId.fromJSONField(json);
    };
    JwkId.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isJwkId(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a JwkId object"));
    } return JwkId.fromFieldsWithTypes(content); };
    JwkId.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching JwkId object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isJwkId(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a JwkId object"));
                        }
                        return [2 /*return*/, JwkId.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    JwkId.$typeName = "0x2::authenticator_state::JwkId";
    JwkId.$numTypeParams = 0;
    return JwkId;
}());
exports.JwkId = JwkId;
