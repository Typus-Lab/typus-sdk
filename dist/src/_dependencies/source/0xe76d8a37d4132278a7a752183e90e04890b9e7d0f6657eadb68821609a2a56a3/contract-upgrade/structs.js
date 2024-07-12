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
exports.UpgradeContract = exports.ContractUpgraded = void 0;
exports.isContractUpgraded = isContractUpgraded;
exports.isUpgradeContract = isUpgradeContract;
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var structs_1 = require("../../0x2/object/structs");
var structs_2 = require("../../0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e/bytes32/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== ContractUpgraded =============================== */
function isContractUpgraded(type) { type = (0, util_1.compressSuiType)(type); return type === "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::contract_upgrade::ContractUpgraded"; }
var ContractUpgraded = /** @class */ (function () {
    function ContractUpgraded(typeArgs, fields) {
        this.$typeName = ContractUpgraded.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([ContractUpgraded.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.oldContract = fields.oldContract;
        ;
        this.newContract = fields.newContract;
    }
    ContractUpgraded.reified = function () {
        var _this = this;
        return { typeName: ContractUpgraded.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([ContractUpgraded.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return ContractUpgraded.fromFields(fields); }, fromFieldsWithTypes: function (item) { return ContractUpgraded.fromFieldsWithTypes(item); }, fromBcs: function (data) { return ContractUpgraded.fromBcs(data); }, bcs: ContractUpgraded.bcs, fromJSONField: function (field) { return ContractUpgraded.fromJSONField(field); }, fromJSON: function (json) { return ContractUpgraded.fromJSON(json); }, fromSuiParsedData: function (content) { return ContractUpgraded.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, ContractUpgraded.fetch(client, id)];
            }); }); }, new: function (fields) { return new ContractUpgraded([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(ContractUpgraded, "r", {
        get: function () { return ContractUpgraded.reified(); },
        enumerable: false,
        configurable: true
    });
    ContractUpgraded.phantom = function () { return (0, reified_1.phantom)(ContractUpgraded.reified()); };
    Object.defineProperty(ContractUpgraded, "p", {
        get: function () { return ContractUpgraded.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContractUpgraded, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("ContractUpgraded", {
                old_contract: structs_1.ID.bcs, new_contract: structs_1.ID.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    ContractUpgraded.fromFields = function (fields) { return ContractUpgraded.reified().new({ oldContract: (0, reified_1.decodeFromFields)(structs_1.ID.reified(), fields.old_contract), newContract: (0, reified_1.decodeFromFields)(structs_1.ID.reified(), fields.new_contract) }); };
    ContractUpgraded.fromFieldsWithTypes = function (item) {
        if (!isContractUpgraded(item.type)) {
            throw new Error("not a ContractUpgraded type");
        }
        return ContractUpgraded.reified().new({ oldContract: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.ID.reified(), item.fields.old_contract), newContract: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.ID.reified(), item.fields.new_contract) });
    };
    ContractUpgraded.fromBcs = function (data) { return ContractUpgraded.fromFields(ContractUpgraded.bcs.parse(data)); };
    ContractUpgraded.prototype.toJSONField = function () {
        return {
            oldContract: this.oldContract, newContract: this.newContract,
        };
    };
    ContractUpgraded.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    ContractUpgraded.fromJSONField = function (field) { return ContractUpgraded.reified().new({ oldContract: (0, reified_1.decodeFromJSONField)(structs_1.ID.reified(), field.oldContract), newContract: (0, reified_1.decodeFromJSONField)(structs_1.ID.reified(), field.newContract) }); };
    ContractUpgraded.fromJSON = function (json) {
        if (json.$typeName !== ContractUpgraded.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ContractUpgraded.fromJSONField(json);
    };
    ContractUpgraded.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isContractUpgraded(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a ContractUpgraded object"));
    } return ContractUpgraded.fromFieldsWithTypes(content); };
    ContractUpgraded.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching ContractUpgraded object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isContractUpgraded(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a ContractUpgraded object"));
                        }
                        return [2 /*return*/, ContractUpgraded.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    ContractUpgraded.$typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::contract_upgrade::ContractUpgraded";
    ContractUpgraded.$numTypeParams = 0;
    return ContractUpgraded;
}());
exports.ContractUpgraded = ContractUpgraded;
/* ============================== UpgradeContract =============================== */
function isUpgradeContract(type) { type = (0, util_1.compressSuiType)(type); return type === "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::contract_upgrade::UpgradeContract"; }
var UpgradeContract = /** @class */ (function () {
    function UpgradeContract(typeArgs, fields) {
        this.$typeName = UpgradeContract.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([UpgradeContract.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.digest = fields.digest;
    }
    UpgradeContract.reified = function () {
        var _this = this;
        return { typeName: UpgradeContract.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([UpgradeContract.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return UpgradeContract.fromFields(fields); }, fromFieldsWithTypes: function (item) { return UpgradeContract.fromFieldsWithTypes(item); }, fromBcs: function (data) { return UpgradeContract.fromBcs(data); }, bcs: UpgradeContract.bcs, fromJSONField: function (field) { return UpgradeContract.fromJSONField(field); }, fromJSON: function (json) { return UpgradeContract.fromJSON(json); }, fromSuiParsedData: function (content) { return UpgradeContract.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, UpgradeContract.fetch(client, id)];
            }); }); }, new: function (fields) { return new UpgradeContract([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(UpgradeContract, "r", {
        get: function () { return UpgradeContract.reified(); },
        enumerable: false,
        configurable: true
    });
    UpgradeContract.phantom = function () { return (0, reified_1.phantom)(UpgradeContract.reified()); };
    Object.defineProperty(UpgradeContract, "p", {
        get: function () { return UpgradeContract.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UpgradeContract, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("UpgradeContract", {
                digest: structs_2.Bytes32.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    UpgradeContract.fromFields = function (fields) { return UpgradeContract.reified().new({ digest: (0, reified_1.decodeFromFields)(structs_2.Bytes32.reified(), fields.digest) }); };
    UpgradeContract.fromFieldsWithTypes = function (item) {
        if (!isUpgradeContract(item.type)) {
            throw new Error("not a UpgradeContract type");
        }
        return UpgradeContract.reified().new({ digest: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Bytes32.reified(), item.fields.digest) });
    };
    UpgradeContract.fromBcs = function (data) { return UpgradeContract.fromFields(UpgradeContract.bcs.parse(data)); };
    UpgradeContract.prototype.toJSONField = function () {
        return {
            digest: this.digest.toJSONField(),
        };
    };
    UpgradeContract.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    UpgradeContract.fromJSONField = function (field) { return UpgradeContract.reified().new({ digest: (0, reified_1.decodeFromJSONField)(structs_2.Bytes32.reified(), field.digest) }); };
    UpgradeContract.fromJSON = function (json) {
        if (json.$typeName !== UpgradeContract.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return UpgradeContract.fromJSONField(json);
    };
    UpgradeContract.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUpgradeContract(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a UpgradeContract object"));
    } return UpgradeContract.fromFieldsWithTypes(content); };
    UpgradeContract.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching UpgradeContract object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUpgradeContract(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a UpgradeContract object"));
                        }
                        return [2 /*return*/, UpgradeContract.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    UpgradeContract.$typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::contract_upgrade::UpgradeContract";
    UpgradeContract.$numTypeParams = 0;
    return UpgradeContract;
}());
exports.UpgradeContract = UpgradeContract;
