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
exports.TxContext = void 0;
exports.isTxContext = isTxContext;
var reified = __importStar(require("../../../../_framework/reified"));
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var bcs_1 = require("@mysten/bcs");
/* ============================== TxContext =============================== */
function isTxContext(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::tx_context::TxContext"; }
var TxContext = /** @class */ (function () {
    function TxContext(typeArgs, fields) {
        this.$typeName = TxContext.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([TxContext.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.sender = fields.sender;
        ;
        this.txHash = fields.txHash;
        ;
        this.epoch = fields.epoch;
        ;
        this.epochTimestampMs = fields.epochTimestampMs;
        ;
        this.idsCreated = fields.idsCreated;
    }
    TxContext.reified = function () {
        var _this = this;
        return { typeName: TxContext.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([TxContext.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return TxContext.fromFields(fields); }, fromFieldsWithTypes: function (item) { return TxContext.fromFieldsWithTypes(item); }, fromBcs: function (data) { return TxContext.fromBcs(data); }, bcs: TxContext.bcs, fromJSONField: function (field) { return TxContext.fromJSONField(field); }, fromJSON: function (json) { return TxContext.fromJSON(json); }, fromSuiParsedData: function (content) { return TxContext.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, TxContext.fetch(client, id)];
            }); }); }, new: function (fields) { return new TxContext([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(TxContext, "r", {
        get: function () { return TxContext.reified(); },
        enumerable: false,
        configurable: true
    });
    TxContext.phantom = function () { return (0, reified_1.phantom)(TxContext.reified()); };
    Object.defineProperty(TxContext, "p", {
        get: function () { return TxContext.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TxContext, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("TxContext", {
                sender: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), tx_hash: bcs_1.bcs.vector(bcs_1.bcs.u8()), epoch: bcs_1.bcs.u64(), epoch_timestamp_ms: bcs_1.bcs.u64(), ids_created: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    TxContext.fromFields = function (fields) { return TxContext.reified().new({ sender: (0, reified_1.decodeFromFields)("address", fields.sender), txHash: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.tx_hash), epoch: (0, reified_1.decodeFromFields)("u64", fields.epoch), epochTimestampMs: (0, reified_1.decodeFromFields)("u64", fields.epoch_timestamp_ms), idsCreated: (0, reified_1.decodeFromFields)("u64", fields.ids_created) }); };
    TxContext.fromFieldsWithTypes = function (item) {
        if (!isTxContext(item.type)) {
            throw new Error("not a TxContext type");
        }
        return TxContext.reified().new({ sender: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.sender), txHash: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.tx_hash), epoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.epoch), epochTimestampMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.epoch_timestamp_ms), idsCreated: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.ids_created) });
    };
    TxContext.fromBcs = function (data) { return TxContext.fromFields(TxContext.bcs.parse(data)); };
    TxContext.prototype.toJSONField = function () {
        return {
            sender: this.sender, txHash: (0, reified_1.fieldToJSON)("vector<u8>", this.txHash), epoch: this.epoch.toString(), epochTimestampMs: this.epochTimestampMs.toString(), idsCreated: this.idsCreated.toString(),
        };
    };
    TxContext.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    TxContext.fromJSONField = function (field) { return TxContext.reified().new({ sender: (0, reified_1.decodeFromJSONField)("address", field.sender), txHash: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.txHash), epoch: (0, reified_1.decodeFromJSONField)("u64", field.epoch), epochTimestampMs: (0, reified_1.decodeFromJSONField)("u64", field.epochTimestampMs), idsCreated: (0, reified_1.decodeFromJSONField)("u64", field.idsCreated) }); };
    TxContext.fromJSON = function (json) {
        if (json.$typeName !== TxContext.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return TxContext.fromJSONField(json);
    };
    TxContext.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTxContext(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a TxContext object"));
    } return TxContext.fromFieldsWithTypes(content); };
    TxContext.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching TxContext object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTxContext(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a TxContext object"));
                        }
                        return [2 /*return*/, TxContext.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    TxContext.$typeName = "0x2::tx_context::TxContext";
    TxContext.$numTypeParams = 0;
    return TxContext;
}());
exports.TxContext = TxContext;
