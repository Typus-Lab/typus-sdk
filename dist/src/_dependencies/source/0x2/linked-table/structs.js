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
exports.Node = exports.LinkedTable = void 0;
exports.isLinkedTable = isLinkedTable;
exports.isNode = isNode;
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var structs_1 = require("../../0x1/option/structs");
var structs_2 = require("../object/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== LinkedTable =============================== */
function isLinkedTable(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::linked_table::LinkedTable<"); }
var LinkedTable = /** @class */ (function () {
    function LinkedTable(typeArgs, fields) {
        this.$typeName = LinkedTable.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([LinkedTable.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.size = fields.size;
        ;
        this.head = fields.head;
        ;
        this.tail = fields.tail;
    }
    LinkedTable.reified = function (K, V) {
        var _this = this;
        return { typeName: LinkedTable.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([LinkedTable.$typeName], [(0, reified_1.extractType)(K), (0, reified_1.extractType)(V)], false)), typeArgs: [(0, reified_1.extractType)(K), (0, reified_1.extractType)(V)], reifiedTypeArgs: [K, V], fromFields: function (fields) { return LinkedTable.fromFields([K, V], fields); }, fromFieldsWithTypes: function (item) { return LinkedTable.fromFieldsWithTypes([K, V], item); }, fromBcs: function (data) { return LinkedTable.fromBcs([K, V], data); }, bcs: LinkedTable.bcs((0, reified_1.toBcs)(K)), fromJSONField: function (field) { return LinkedTable.fromJSONField([K, V], field); }, fromJSON: function (json) { return LinkedTable.fromJSON([K, V], json); }, fromSuiParsedData: function (content) { return LinkedTable.fromSuiParsedData([K, V], content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, LinkedTable.fetch(client, [K, V], id)];
            }); }); }, new: function (fields) { return new LinkedTable([(0, reified_1.extractType)(K), (0, reified_1.extractType)(V)], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(LinkedTable, "r", {
        get: function () { return LinkedTable.reified; },
        enumerable: false,
        configurable: true
    });
    LinkedTable.phantom = function (K, V) { return (0, reified_1.phantom)(LinkedTable.reified(K, V)); };
    Object.defineProperty(LinkedTable, "p", {
        get: function () { return LinkedTable.phantom; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LinkedTable, "bcs", {
        get: function () {
            return function (K) { return bcs_1.bcs.struct("LinkedTable<".concat(K.name, ">"), {
                id: structs_2.UID.bcs, size: bcs_1.bcs.u64(), head: structs_1.Option.bcs(K), tail: structs_1.Option.bcs(K)
            }); };
        },
        enumerable: false,
        configurable: true
    });
    ;
    LinkedTable.fromFields = function (typeArgs, fields) { return LinkedTable.reified(typeArgs[0], typeArgs[1]).new({ id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id), size: (0, reified_1.decodeFromFields)("u64", fields.size), head: (0, reified_1.decodeFromFields)(structs_1.Option.reified(typeArgs[0]), fields.head), tail: (0, reified_1.decodeFromFields)(structs_1.Option.reified(typeArgs[0]), fields.tail) }); };
    LinkedTable.fromFieldsWithTypes = function (typeArgs, item) {
        if (!isLinkedTable(item.type)) {
            throw new Error("not a LinkedTable type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, typeArgs);
        return LinkedTable.reified(typeArgs[0], typeArgs[1]).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id), size: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.size), head: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(typeArgs[0]), item.fields.head), tail: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(typeArgs[0]), item.fields.tail) });
    };
    LinkedTable.fromBcs = function (typeArgs, data) { return LinkedTable.fromFields(typeArgs, LinkedTable.bcs((0, reified_1.toBcs)(typeArgs[0])).parse(data)); };
    LinkedTable.prototype.toJSONField = function () {
        return {
            id: this.id, size: this.size.toString(), head: (0, reified_1.fieldToJSON)("0x1::option::Option<".concat(this.$typeArgs[0], ">"), this.head), tail: (0, reified_1.fieldToJSON)("0x1::option::Option<".concat(this.$typeArgs[0], ">"), this.tail),
        };
    };
    LinkedTable.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    LinkedTable.fromJSONField = function (typeArgs, field) { return LinkedTable.reified(typeArgs[0], typeArgs[1]).new({ id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id), size: (0, reified_1.decodeFromJSONField)("u64", field.size), head: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(typeArgs[0]), field.head), tail: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(typeArgs[0]), field.tail) }); };
    LinkedTable.fromJSON = function (typeArgs, json) {
        if (json.$typeName !== LinkedTable.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)(util_1.composeSuiType.apply(void 0, __spreadArray([LinkedTable.$typeName], __read(typeArgs.map(reified_1.extractType)), false)), json.$typeArgs, typeArgs);
        return LinkedTable.fromJSONField(typeArgs, json);
    };
    LinkedTable.fromSuiParsedData = function (typeArgs, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isLinkedTable(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a LinkedTable object"));
    } return LinkedTable.fromFieldsWithTypes(typeArgs, content); };
    LinkedTable.fetch = function (client, typeArgs, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching LinkedTable object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isLinkedTable(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a LinkedTable object"));
                        }
                        return [2 /*return*/, LinkedTable.fromBcs(typeArgs, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    LinkedTable.$typeName = "0x2::linked_table::LinkedTable";
    LinkedTable.$numTypeParams = 2;
    return LinkedTable;
}());
exports.LinkedTable = LinkedTable;
/* ============================== Node =============================== */
function isNode(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::linked_table::Node<"); }
var Node = /** @class */ (function () {
    function Node(typeArgs, fields) {
        this.$typeName = Node.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Node.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.prev = fields.prev;
        ;
        this.next = fields.next;
        ;
        this.value = fields.value;
    }
    Node.reified = function (K, V) {
        var _this = this;
        return { typeName: Node.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Node.$typeName], [(0, reified_1.extractType)(K), (0, reified_1.extractType)(V)], false)), typeArgs: [(0, reified_1.extractType)(K), (0, reified_1.extractType)(V)], reifiedTypeArgs: [K, V], fromFields: function (fields) { return Node.fromFields([K, V], fields); }, fromFieldsWithTypes: function (item) { return Node.fromFieldsWithTypes([K, V], item); }, fromBcs: function (data) { return Node.fromBcs([K, V], data); }, bcs: Node.bcs((0, reified_1.toBcs)(K), (0, reified_1.toBcs)(V)), fromJSONField: function (field) { return Node.fromJSONField([K, V], field); }, fromJSON: function (json) { return Node.fromJSON([K, V], json); }, fromSuiParsedData: function (content) { return Node.fromSuiParsedData([K, V], content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Node.fetch(client, [K, V], id)];
            }); }); }, new: function (fields) { return new Node([(0, reified_1.extractType)(K), (0, reified_1.extractType)(V)], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Node, "r", {
        get: function () { return Node.reified; },
        enumerable: false,
        configurable: true
    });
    Node.phantom = function (K, V) { return (0, reified_1.phantom)(Node.reified(K, V)); };
    Object.defineProperty(Node, "p", {
        get: function () { return Node.phantom; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node, "bcs", {
        get: function () {
            return function (K, V) { return bcs_1.bcs.struct("Node<".concat(K.name, ", ").concat(V.name, ">"), {
                prev: structs_1.Option.bcs(K), next: structs_1.Option.bcs(K), value: V
            }); };
        },
        enumerable: false,
        configurable: true
    });
    ;
    Node.fromFields = function (typeArgs, fields) { return Node.reified(typeArgs[0], typeArgs[1]).new({ prev: (0, reified_1.decodeFromFields)(structs_1.Option.reified(typeArgs[0]), fields.prev), next: (0, reified_1.decodeFromFields)(structs_1.Option.reified(typeArgs[0]), fields.next), value: (0, reified_1.decodeFromFields)(typeArgs[1], fields.value) }); };
    Node.fromFieldsWithTypes = function (typeArgs, item) {
        if (!isNode(item.type)) {
            throw new Error("not a Node type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, typeArgs);
        return Node.reified(typeArgs[0], typeArgs[1]).new({ prev: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(typeArgs[0]), item.fields.prev), next: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(typeArgs[0]), item.fields.next), value: (0, reified_1.decodeFromFieldsWithTypes)(typeArgs[1], item.fields.value) });
    };
    Node.fromBcs = function (typeArgs, data) { return Node.fromFields(typeArgs, Node.bcs((0, reified_1.toBcs)(typeArgs[0]), (0, reified_1.toBcs)(typeArgs[1])).parse(data)); };
    Node.prototype.toJSONField = function () {
        return {
            prev: (0, reified_1.fieldToJSON)("0x1::option::Option<".concat(this.$typeArgs[0], ">"), this.prev), next: (0, reified_1.fieldToJSON)("0x1::option::Option<".concat(this.$typeArgs[0], ">"), this.next), value: (0, reified_1.fieldToJSON)(this.$typeArgs[1], this.value),
        };
    };
    Node.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Node.fromJSONField = function (typeArgs, field) { return Node.reified(typeArgs[0], typeArgs[1]).new({ prev: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(typeArgs[0]), field.prev), next: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(typeArgs[0]), field.next), value: (0, reified_1.decodeFromJSONField)(typeArgs[1], field.value) }); };
    Node.fromJSON = function (typeArgs, json) {
        if (json.$typeName !== Node.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)(util_1.composeSuiType.apply(void 0, __spreadArray([Node.$typeName], __read(typeArgs.map(reified_1.extractType)), false)), json.$typeArgs, typeArgs);
        return Node.fromJSONField(typeArgs, json);
    };
    Node.fromSuiParsedData = function (typeArgs, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isNode(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Node object"));
    } return Node.fromFieldsWithTypes(typeArgs, content); };
    Node.fetch = function (client, typeArgs, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Node object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isNode(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Node object"));
                        }
                        return [2 /*return*/, Node.fromBcs(typeArgs, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Node.$typeName = "0x2::linked_table::Node";
    Node.$numTypeParams = 2;
    return Node;
}());
exports.Node = Node;
