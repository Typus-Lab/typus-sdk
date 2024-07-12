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
exports.Quote = void 0;
exports.isQuote = isQuote;
var reified = __importStar(require("../../../../_framework/reified"));
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var structs_1 = require("../../0x2/object/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== Quote =============================== */
function isQuote(type) { type = (0, util_1.compressSuiType)(type); return type === "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::quote::Quote"; }
var Quote = /** @class */ (function () {
    function Quote(typeArgs, fields) {
        this.$typeName = Quote.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Quote.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.nodeAddr = fields.nodeAddr;
        ;
        this.nodeAuthority = fields.nodeAuthority;
        ;
        this.queueAddr = fields.queueAddr;
        ;
        this.quoteBuffer = fields.quoteBuffer;
        ;
        this.verificationStatus = fields.verificationStatus;
        ;
        this.verificationTimestamp = fields.verificationTimestamp;
        ;
        this.validUntil = fields.validUntil;
        ;
        this.contentHashEnabled = fields.contentHashEnabled;
        ;
        this.friendKey = fields.friendKey;
        ;
        this.version = fields.version;
    }
    Quote.reified = function () {
        var _this = this;
        return { typeName: Quote.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Quote.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return Quote.fromFields(fields); }, fromFieldsWithTypes: function (item) { return Quote.fromFieldsWithTypes(item); }, fromBcs: function (data) { return Quote.fromBcs(data); }, bcs: Quote.bcs, fromJSONField: function (field) { return Quote.fromJSONField(field); }, fromJSON: function (json) { return Quote.fromJSON(json); }, fromSuiParsedData: function (content) { return Quote.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Quote.fetch(client, id)];
            }); }); }, new: function (fields) { return new Quote([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Quote, "r", {
        get: function () { return Quote.reified(); },
        enumerable: false,
        configurable: true
    });
    Quote.phantom = function () { return (0, reified_1.phantom)(Quote.reified()); };
    Object.defineProperty(Quote, "p", {
        get: function () { return Quote.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Quote, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Quote", {
                id: structs_1.UID.bcs, node_addr: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), node_authority: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), queue_addr: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), quote_buffer: bcs_1.bcs.vector(bcs_1.bcs.u8()), verification_status: bcs_1.bcs.u8(), verification_timestamp: bcs_1.bcs.u64(), valid_until: bcs_1.bcs.u64(), content_hash_enabled: bcs_1.bcs.bool(), friend_key: bcs_1.bcs.vector(bcs_1.bcs.u8()), version: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Quote.fromFields = function (fields) { return Quote.reified().new({ id: (0, reified_1.decodeFromFields)(structs_1.UID.reified(), fields.id), nodeAddr: (0, reified_1.decodeFromFields)("address", fields.node_addr), nodeAuthority: (0, reified_1.decodeFromFields)("address", fields.node_authority), queueAddr: (0, reified_1.decodeFromFields)("address", fields.queue_addr), quoteBuffer: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.quote_buffer), verificationStatus: (0, reified_1.decodeFromFields)("u8", fields.verification_status), verificationTimestamp: (0, reified_1.decodeFromFields)("u64", fields.verification_timestamp), validUntil: (0, reified_1.decodeFromFields)("u64", fields.valid_until), contentHashEnabled: (0, reified_1.decodeFromFields)("bool", fields.content_hash_enabled), friendKey: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.friend_key), version: (0, reified_1.decodeFromFields)("u64", fields.version) }); };
    Quote.fromFieldsWithTypes = function (item) {
        if (!isQuote(item.type)) {
            throw new Error("not a Quote type");
        }
        return Quote.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.UID.reified(), item.fields.id), nodeAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.node_addr), nodeAuthority: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.node_authority), queueAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.queue_addr), quoteBuffer: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.quote_buffer), verificationStatus: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.verification_status), verificationTimestamp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.verification_timestamp), validUntil: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.valid_until), contentHashEnabled: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.content_hash_enabled), friendKey: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.friend_key), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version) });
    };
    Quote.fromBcs = function (data) { return Quote.fromFields(Quote.bcs.parse(data)); };
    Quote.prototype.toJSONField = function () {
        return {
            id: this.id, nodeAddr: this.nodeAddr, nodeAuthority: this.nodeAuthority, queueAddr: this.queueAddr, quoteBuffer: (0, reified_1.fieldToJSON)("vector<u8>", this.quoteBuffer), verificationStatus: this.verificationStatus, verificationTimestamp: this.verificationTimestamp.toString(), validUntil: this.validUntil.toString(), contentHashEnabled: this.contentHashEnabled, friendKey: (0, reified_1.fieldToJSON)("vector<u8>", this.friendKey), version: this.version.toString(),
        };
    };
    Quote.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Quote.fromJSONField = function (field) { return Quote.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_1.UID.reified(), field.id), nodeAddr: (0, reified_1.decodeFromJSONField)("address", field.nodeAddr), nodeAuthority: (0, reified_1.decodeFromJSONField)("address", field.nodeAuthority), queueAddr: (0, reified_1.decodeFromJSONField)("address", field.queueAddr), quoteBuffer: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.quoteBuffer), verificationStatus: (0, reified_1.decodeFromJSONField)("u8", field.verificationStatus), verificationTimestamp: (0, reified_1.decodeFromJSONField)("u64", field.verificationTimestamp), validUntil: (0, reified_1.decodeFromJSONField)("u64", field.validUntil), contentHashEnabled: (0, reified_1.decodeFromJSONField)("bool", field.contentHashEnabled), friendKey: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.friendKey), version: (0, reified_1.decodeFromJSONField)("u64", field.version) }); };
    Quote.fromJSON = function (json) {
        if (json.$typeName !== Quote.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Quote.fromJSONField(json);
    };
    Quote.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isQuote(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Quote object"));
    } return Quote.fromFieldsWithTypes(content); };
    Quote.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Quote object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isQuote(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Quote object"));
                        }
                        return [2 /*return*/, Quote.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Quote.$typeName = "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::quote::Quote";
    Quote.$numTypeParams = 0;
    return Quote;
}());
exports.Quote = Quote;
