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
exports.Leaf = exports.InternalNode = exports.CritbitTree = void 0;
exports.isCritbitTree = isCritbitTree;
exports.isInternalNode = isInternalNode;
exports.isLeaf = isLeaf;
var reified = __importStar(require("../../../../_framework/reified"));
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var structs_1 = require("../../0x2/table/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== CritbitTree =============================== */
function isCritbitTree(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::critbit::CritbitTree<"); }
var CritbitTree = /** @class */ (function () {
    function CritbitTree(typeArgs, fields) {
        this.$typeName = CritbitTree.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([CritbitTree.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.root = fields.root;
        ;
        this.internalNodes = fields.internalNodes;
        ;
        this.leaves = fields.leaves;
        ;
        this.minLeafIndex = fields.minLeafIndex;
        ;
        this.maxLeafIndex = fields.maxLeafIndex;
        ;
        this.nextInternalNodeIndex = fields.nextInternalNodeIndex;
        ;
        this.nextLeafIndex = fields.nextLeafIndex;
    }
    CritbitTree.reified = function (V) {
        var _this = this;
        return { typeName: CritbitTree.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([CritbitTree.$typeName], [(0, reified_1.extractType)(V)], false)), typeArgs: [(0, reified_1.extractType)(V)], reifiedTypeArgs: [V], fromFields: function (fields) { return CritbitTree.fromFields(V, fields); }, fromFieldsWithTypes: function (item) { return CritbitTree.fromFieldsWithTypes(V, item); }, fromBcs: function (data) { return CritbitTree.fromBcs(V, data); }, bcs: CritbitTree.bcs((0, reified_1.toBcs)(V)), fromJSONField: function (field) { return CritbitTree.fromJSONField(V, field); }, fromJSON: function (json) { return CritbitTree.fromJSON(V, json); }, fromSuiParsedData: function (content) { return CritbitTree.fromSuiParsedData(V, content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, CritbitTree.fetch(client, V, id)];
            }); }); }, new: function (fields) { return new CritbitTree([(0, reified_1.extractType)(V)], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(CritbitTree, "r", {
        get: function () { return CritbitTree.reified; },
        enumerable: false,
        configurable: true
    });
    CritbitTree.phantom = function (V) { return (0, reified_1.phantom)(CritbitTree.reified(V)); };
    Object.defineProperty(CritbitTree, "p", {
        get: function () { return CritbitTree.phantom; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CritbitTree, "bcs", {
        get: function () {
            return function (V) { return bcs_1.bcs.struct("CritbitTree<".concat(V.name, ">"), {
                root: bcs_1.bcs.u64(), internal_nodes: structs_1.Table.bcs, leaves: structs_1.Table.bcs, min_leaf_index: bcs_1.bcs.u64(), max_leaf_index: bcs_1.bcs.u64(), next_internal_node_index: bcs_1.bcs.u64(), next_leaf_index: bcs_1.bcs.u64()
            }); };
        },
        enumerable: false,
        configurable: true
    });
    ;
    CritbitTree.fromFields = function (typeArg, fields) { return CritbitTree.reified(typeArg).new({ root: (0, reified_1.decodeFromFields)("u64", fields.root), internalNodes: (0, reified_1.decodeFromFields)(structs_1.Table.reified(reified.phantom("u64"), reified.phantom(InternalNode.reified())), fields.internal_nodes), leaves: (0, reified_1.decodeFromFields)(structs_1.Table.reified(reified.phantom("u64"), reified.phantom(Leaf.reified(typeArg))), fields.leaves), minLeafIndex: (0, reified_1.decodeFromFields)("u64", fields.min_leaf_index), maxLeafIndex: (0, reified_1.decodeFromFields)("u64", fields.max_leaf_index), nextInternalNodeIndex: (0, reified_1.decodeFromFields)("u64", fields.next_internal_node_index), nextLeafIndex: (0, reified_1.decodeFromFields)("u64", fields.next_leaf_index) }); };
    CritbitTree.fromFieldsWithTypes = function (typeArg, item) {
        if (!isCritbitTree(item.type)) {
            throw new Error("not a CritbitTree type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return CritbitTree.reified(typeArg).new({ root: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.root), internalNodes: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Table.reified(reified.phantom("u64"), reified.phantom(InternalNode.reified())), item.fields.internal_nodes), leaves: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Table.reified(reified.phantom("u64"), reified.phantom(Leaf.reified(typeArg))), item.fields.leaves), minLeafIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.min_leaf_index), maxLeafIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.max_leaf_index), nextInternalNodeIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.next_internal_node_index), nextLeafIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.next_leaf_index) });
    };
    CritbitTree.fromBcs = function (typeArg, data) {
        var typeArgs = [typeArg];
        return CritbitTree.fromFields(typeArg, CritbitTree.bcs((0, reified_1.toBcs)(typeArgs[0])).parse(data));
    };
    CritbitTree.prototype.toJSONField = function () {
        return {
            root: this.root.toString(), internalNodes: this.internalNodes.toJSONField(), leaves: this.leaves.toJSONField(), minLeafIndex: this.minLeafIndex.toString(), maxLeafIndex: this.maxLeafIndex.toString(), nextInternalNodeIndex: this.nextInternalNodeIndex.toString(), nextLeafIndex: this.nextLeafIndex.toString(),
        };
    };
    CritbitTree.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    CritbitTree.fromJSONField = function (typeArg, field) { return CritbitTree.reified(typeArg).new({ root: (0, reified_1.decodeFromJSONField)("u64", field.root), internalNodes: (0, reified_1.decodeFromJSONField)(structs_1.Table.reified(reified.phantom("u64"), reified.phantom(InternalNode.reified())), field.internalNodes), leaves: (0, reified_1.decodeFromJSONField)(structs_1.Table.reified(reified.phantom("u64"), reified.phantom(Leaf.reified(typeArg))), field.leaves), minLeafIndex: (0, reified_1.decodeFromJSONField)("u64", field.minLeafIndex), maxLeafIndex: (0, reified_1.decodeFromJSONField)("u64", field.maxLeafIndex), nextInternalNodeIndex: (0, reified_1.decodeFromJSONField)("u64", field.nextInternalNodeIndex), nextLeafIndex: (0, reified_1.decodeFromJSONField)("u64", field.nextLeafIndex) }); };
    CritbitTree.fromJSON = function (typeArg, json) {
        if (json.$typeName !== CritbitTree.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(CritbitTree.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return CritbitTree.fromJSONField(typeArg, json);
    };
    CritbitTree.fromSuiParsedData = function (typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isCritbitTree(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a CritbitTree object"));
    } return CritbitTree.fromFieldsWithTypes(typeArg, content); };
    CritbitTree.fetch = function (client, typeArg, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching CritbitTree object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isCritbitTree(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a CritbitTree object"));
                        }
                        return [2 /*return*/, CritbitTree.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    CritbitTree.$typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::critbit::CritbitTree";
    CritbitTree.$numTypeParams = 1;
    return CritbitTree;
}());
exports.CritbitTree = CritbitTree;
/* ============================== InternalNode =============================== */
function isInternalNode(type) { type = (0, util_1.compressSuiType)(type); return type === "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::critbit::InternalNode"; }
var InternalNode = /** @class */ (function () {
    function InternalNode(typeArgs, fields) {
        this.$typeName = InternalNode.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([InternalNode.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.mask = fields.mask;
        ;
        this.leftChild = fields.leftChild;
        ;
        this.rightChild = fields.rightChild;
        ;
        this.parent = fields.parent;
    }
    InternalNode.reified = function () {
        var _this = this;
        return { typeName: InternalNode.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([InternalNode.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return InternalNode.fromFields(fields); }, fromFieldsWithTypes: function (item) { return InternalNode.fromFieldsWithTypes(item); }, fromBcs: function (data) { return InternalNode.fromBcs(data); }, bcs: InternalNode.bcs, fromJSONField: function (field) { return InternalNode.fromJSONField(field); }, fromJSON: function (json) { return InternalNode.fromJSON(json); }, fromSuiParsedData: function (content) { return InternalNode.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, InternalNode.fetch(client, id)];
            }); }); }, new: function (fields) { return new InternalNode([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(InternalNode, "r", {
        get: function () { return InternalNode.reified(); },
        enumerable: false,
        configurable: true
    });
    InternalNode.phantom = function () { return (0, reified_1.phantom)(InternalNode.reified()); };
    Object.defineProperty(InternalNode, "p", {
        get: function () { return InternalNode.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InternalNode, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("InternalNode", {
                mask: bcs_1.bcs.u64(), left_child: bcs_1.bcs.u64(), right_child: bcs_1.bcs.u64(), parent: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    InternalNode.fromFields = function (fields) { return InternalNode.reified().new({ mask: (0, reified_1.decodeFromFields)("u64", fields.mask), leftChild: (0, reified_1.decodeFromFields)("u64", fields.left_child), rightChild: (0, reified_1.decodeFromFields)("u64", fields.right_child), parent: (0, reified_1.decodeFromFields)("u64", fields.parent) }); };
    InternalNode.fromFieldsWithTypes = function (item) {
        if (!isInternalNode(item.type)) {
            throw new Error("not a InternalNode type");
        }
        return InternalNode.reified().new({ mask: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.mask), leftChild: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.left_child), rightChild: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.right_child), parent: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.parent) });
    };
    InternalNode.fromBcs = function (data) { return InternalNode.fromFields(InternalNode.bcs.parse(data)); };
    InternalNode.prototype.toJSONField = function () {
        return {
            mask: this.mask.toString(), leftChild: this.leftChild.toString(), rightChild: this.rightChild.toString(), parent: this.parent.toString(),
        };
    };
    InternalNode.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    InternalNode.fromJSONField = function (field) { return InternalNode.reified().new({ mask: (0, reified_1.decodeFromJSONField)("u64", field.mask), leftChild: (0, reified_1.decodeFromJSONField)("u64", field.leftChild), rightChild: (0, reified_1.decodeFromJSONField)("u64", field.rightChild), parent: (0, reified_1.decodeFromJSONField)("u64", field.parent) }); };
    InternalNode.fromJSON = function (json) {
        if (json.$typeName !== InternalNode.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return InternalNode.fromJSONField(json);
    };
    InternalNode.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isInternalNode(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a InternalNode object"));
    } return InternalNode.fromFieldsWithTypes(content); };
    InternalNode.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching InternalNode object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isInternalNode(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a InternalNode object"));
                        }
                        return [2 /*return*/, InternalNode.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    InternalNode.$typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::critbit::InternalNode";
    InternalNode.$numTypeParams = 0;
    return InternalNode;
}());
exports.InternalNode = InternalNode;
/* ============================== Leaf =============================== */
function isLeaf(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::critbit::Leaf<"); }
var Leaf = /** @class */ (function () {
    function Leaf(typeArgs, fields) {
        this.$typeName = Leaf.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Leaf.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.key = fields.key;
        ;
        this.value = fields.value;
        ;
        this.parent = fields.parent;
    }
    Leaf.reified = function (V) {
        var _this = this;
        return { typeName: Leaf.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Leaf.$typeName], [(0, reified_1.extractType)(V)], false)), typeArgs: [(0, reified_1.extractType)(V)], reifiedTypeArgs: [V], fromFields: function (fields) { return Leaf.fromFields(V, fields); }, fromFieldsWithTypes: function (item) { return Leaf.fromFieldsWithTypes(V, item); }, fromBcs: function (data) { return Leaf.fromBcs(V, data); }, bcs: Leaf.bcs((0, reified_1.toBcs)(V)), fromJSONField: function (field) { return Leaf.fromJSONField(V, field); }, fromJSON: function (json) { return Leaf.fromJSON(V, json); }, fromSuiParsedData: function (content) { return Leaf.fromSuiParsedData(V, content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Leaf.fetch(client, V, id)];
            }); }); }, new: function (fields) { return new Leaf([(0, reified_1.extractType)(V)], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Leaf, "r", {
        get: function () { return Leaf.reified; },
        enumerable: false,
        configurable: true
    });
    Leaf.phantom = function (V) { return (0, reified_1.phantom)(Leaf.reified(V)); };
    Object.defineProperty(Leaf, "p", {
        get: function () { return Leaf.phantom; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Leaf, "bcs", {
        get: function () {
            return function (V) { return bcs_1.bcs.struct("Leaf<".concat(V.name, ">"), {
                key: bcs_1.bcs.u64(), value: V, parent: bcs_1.bcs.u64()
            }); };
        },
        enumerable: false,
        configurable: true
    });
    ;
    Leaf.fromFields = function (typeArg, fields) { return Leaf.reified(typeArg).new({ key: (0, reified_1.decodeFromFields)("u64", fields.key), value: (0, reified_1.decodeFromFields)(typeArg, fields.value), parent: (0, reified_1.decodeFromFields)("u64", fields.parent) }); };
    Leaf.fromFieldsWithTypes = function (typeArg, item) {
        if (!isLeaf(item.type)) {
            throw new Error("not a Leaf type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return Leaf.reified(typeArg).new({ key: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.key), value: (0, reified_1.decodeFromFieldsWithTypes)(typeArg, item.fields.value), parent: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.parent) });
    };
    Leaf.fromBcs = function (typeArg, data) {
        var typeArgs = [typeArg];
        return Leaf.fromFields(typeArg, Leaf.bcs((0, reified_1.toBcs)(typeArgs[0])).parse(data));
    };
    Leaf.prototype.toJSONField = function () {
        return {
            key: this.key.toString(), value: (0, reified_1.fieldToJSON)(this.$typeArgs[0], this.value), parent: this.parent.toString(),
        };
    };
    Leaf.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Leaf.fromJSONField = function (typeArg, field) { return Leaf.reified(typeArg).new({ key: (0, reified_1.decodeFromJSONField)("u64", field.key), value: (0, reified_1.decodeFromJSONField)(typeArg, field.value), parent: (0, reified_1.decodeFromJSONField)("u64", field.parent) }); };
    Leaf.fromJSON = function (typeArg, json) {
        if (json.$typeName !== Leaf.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(Leaf.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return Leaf.fromJSONField(typeArg, json);
    };
    Leaf.fromSuiParsedData = function (typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isLeaf(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Leaf object"));
    } return Leaf.fromFieldsWithTypes(typeArg, content); };
    Leaf.fetch = function (client, typeArg, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Leaf object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isLeaf(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Leaf object"));
                        }
                        return [2 /*return*/, Leaf.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Leaf.$typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::critbit::Leaf";
    Leaf.$numTypeParams = 1;
    return Leaf;
}());
exports.Leaf = Leaf;
