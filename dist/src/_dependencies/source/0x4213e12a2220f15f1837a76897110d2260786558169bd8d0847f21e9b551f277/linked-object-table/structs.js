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
exports.LinkedObjectTable = exports.Node = void 0;
exports.isNode = isNode;
exports.isLinkedObjectTable = isLinkedObjectTable;
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var structs_1 = require("../../0x1/option/structs");
var structs_2 = require("../../0x2/object/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== Node =============================== */
function isNode(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::linked_object_table::Node<"); }
var Node = /** @class */ (function () {
    function Node(typeArgs, fields) {
        this.$typeName = Node.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Node.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.prev = fields.prev;
        ;
        this.next = fields.next;
    }
    Node.reified = function (K, V) {
        var _this = this;
        return { typeName: Node.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Node.$typeName], [(0, reified_1.extractType)(K), (0, reified_1.extractType)(V)], false)), typeArgs: [(0, reified_1.extractType)(K), (0, reified_1.extractType)(V)], reifiedTypeArgs: [K, V], fromFields: function (fields) { return Node.fromFields([K, V], fields); }, fromFieldsWithTypes: function (item) { return Node.fromFieldsWithTypes([K, V], item); }, fromBcs: function (data) { return Node.fromBcs([K, V], data); }, bcs: Node.bcs((0, reified_1.toBcs)(K)), fromJSONField: function (field) { return Node.fromJSONField([K, V], field); }, fromJSON: function (json) { return Node.fromJSON([K, V], json); }, fromSuiParsedData: function (content) { return Node.fromSuiParsedData([K, V], content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
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
            return function (K) { return bcs_1.bcs.struct("Node<".concat(K.name, ">"), {
                prev: structs_1.Option.bcs(K), next: structs_1.Option.bcs(K)
            }); };
        },
        enumerable: false,
        configurable: true
    });
    ;
    Node.fromFields = function (typeArgs, fields) { return Node.reified(typeArgs[0], typeArgs[1]).new({ prev: (0, reified_1.decodeFromFields)(structs_1.Option.reified(typeArgs[0]), fields.prev), next: (0, reified_1.decodeFromFields)(structs_1.Option.reified(typeArgs[0]), fields.next) }); };
    Node.fromFieldsWithTypes = function (typeArgs, item) {
        if (!isNode(item.type)) {
            throw new Error("not a Node type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, typeArgs);
        return Node.reified(typeArgs[0], typeArgs[1]).new({ prev: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(typeArgs[0]), item.fields.prev), next: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(typeArgs[0]), item.fields.next) });
    };
    Node.fromBcs = function (typeArgs, data) { return Node.fromFields(typeArgs, Node.bcs((0, reified_1.toBcs)(typeArgs[0])).parse(data)); };
    Node.prototype.toJSONField = function () {
        return {
            prev: (0, reified_1.fieldToJSON)("0x1::option::Option<".concat(this.$typeArgs[0], ">"), this.prev), next: (0, reified_1.fieldToJSON)("0x1::option::Option<".concat(this.$typeArgs[0], ">"), this.next),
        };
    };
    Node.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Node.fromJSONField = function (typeArgs, field) { return Node.reified(typeArgs[0], typeArgs[1]).new({ prev: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(typeArgs[0]), field.prev), next: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(typeArgs[0]), field.next) }); };
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
    Node.$typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::linked_object_table::Node";
    Node.$numTypeParams = 2;
    return Node;
}());
exports.Node = Node;
/* ============================== LinkedObjectTable =============================== */
function isLinkedObjectTable(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::linked_object_table::LinkedObjectTable<"); }
var LinkedObjectTable = /** @class */ (function () {
    function LinkedObjectTable(typeArgs, fields) {
        this.$typeName = LinkedObjectTable.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([LinkedObjectTable.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.vid = fields.vid;
        ;
        this.size = fields.size;
        ;
        this.head = fields.head;
        ;
        this.tail = fields.tail;
    }
    LinkedObjectTable.reified = function (K, V) {
        var _this = this;
        return { typeName: LinkedObjectTable.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([LinkedObjectTable.$typeName], [(0, reified_1.extractType)(K), (0, reified_1.extractType)(V)], false)), typeArgs: [(0, reified_1.extractType)(K), (0, reified_1.extractType)(V)], reifiedTypeArgs: [K, V], fromFields: function (fields) { return LinkedObjectTable.fromFields([K, V], fields); }, fromFieldsWithTypes: function (item) { return LinkedObjectTable.fromFieldsWithTypes([K, V], item); }, fromBcs: function (data) { return LinkedObjectTable.fromBcs([K, V], data); }, bcs: LinkedObjectTable.bcs((0, reified_1.toBcs)(K)), fromJSONField: function (field) { return LinkedObjectTable.fromJSONField([K, V], field); }, fromJSON: function (json) { return LinkedObjectTable.fromJSON([K, V], json); }, fromSuiParsedData: function (content) { return LinkedObjectTable.fromSuiParsedData([K, V], content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, LinkedObjectTable.fetch(client, [K, V], id)];
            }); }); }, new: function (fields) { return new LinkedObjectTable([(0, reified_1.extractType)(K), (0, reified_1.extractType)(V)], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(LinkedObjectTable, "r", {
        get: function () { return LinkedObjectTable.reified; },
        enumerable: false,
        configurable: true
    });
    LinkedObjectTable.phantom = function (K, V) { return (0, reified_1.phantom)(LinkedObjectTable.reified(K, V)); };
    Object.defineProperty(LinkedObjectTable, "p", {
        get: function () { return LinkedObjectTable.phantom; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LinkedObjectTable, "bcs", {
        get: function () {
            return function (K) { return bcs_1.bcs.struct("LinkedObjectTable<".concat(K.name, ">"), {
                id: structs_2.UID.bcs, vid: structs_2.UID.bcs, size: bcs_1.bcs.u64(), head: structs_1.Option.bcs(K), tail: structs_1.Option.bcs(K)
            }); };
        },
        enumerable: false,
        configurable: true
    });
    ;
    LinkedObjectTable.fromFields = function (typeArgs, fields) { return LinkedObjectTable.reified(typeArgs[0], typeArgs[1]).new({ id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id), vid: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.vid), size: (0, reified_1.decodeFromFields)("u64", fields.size), head: (0, reified_1.decodeFromFields)(structs_1.Option.reified(typeArgs[0]), fields.head), tail: (0, reified_1.decodeFromFields)(structs_1.Option.reified(typeArgs[0]), fields.tail) }); };
    LinkedObjectTable.fromFieldsWithTypes = function (typeArgs, item) {
        if (!isLinkedObjectTable(item.type)) {
            throw new Error("not a LinkedObjectTable type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, typeArgs);
        return LinkedObjectTable.reified(typeArgs[0], typeArgs[1]).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id), vid: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.vid), size: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.size), head: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(typeArgs[0]), item.fields.head), tail: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(typeArgs[0]), item.fields.tail) });
    };
    LinkedObjectTable.fromBcs = function (typeArgs, data) { return LinkedObjectTable.fromFields(typeArgs, LinkedObjectTable.bcs((0, reified_1.toBcs)(typeArgs[0])).parse(data)); };
    LinkedObjectTable.prototype.toJSONField = function () {
        return {
            id: this.id, vid: this.vid, size: this.size.toString(), head: (0, reified_1.fieldToJSON)("0x1::option::Option<".concat(this.$typeArgs[0], ">"), this.head), tail: (0, reified_1.fieldToJSON)("0x1::option::Option<".concat(this.$typeArgs[0], ">"), this.tail),
        };
    };
    LinkedObjectTable.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    LinkedObjectTable.fromJSONField = function (typeArgs, field) { return LinkedObjectTable.reified(typeArgs[0], typeArgs[1]).new({ id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id), vid: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.vid), size: (0, reified_1.decodeFromJSONField)("u64", field.size), head: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(typeArgs[0]), field.head), tail: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(typeArgs[0]), field.tail) }); };
    LinkedObjectTable.fromJSON = function (typeArgs, json) {
        if (json.$typeName !== LinkedObjectTable.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)(util_1.composeSuiType.apply(void 0, __spreadArray([LinkedObjectTable.$typeName], __read(typeArgs.map(reified_1.extractType)), false)), json.$typeArgs, typeArgs);
        return LinkedObjectTable.fromJSONField(typeArgs, json);
    };
    LinkedObjectTable.fromSuiParsedData = function (typeArgs, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isLinkedObjectTable(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a LinkedObjectTable object"));
    } return LinkedObjectTable.fromFieldsWithTypes(typeArgs, content); };
    LinkedObjectTable.fetch = function (client, typeArgs, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching LinkedObjectTable object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isLinkedObjectTable(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a LinkedObjectTable object"));
                        }
                        return [2 /*return*/, LinkedObjectTable.fromBcs(typeArgs, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    LinkedObjectTable.$typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::linked_object_table::LinkedObjectTable";
    LinkedObjectTable.$numTypeParams = 2;
    return LinkedObjectTable;
}());
exports.LinkedObjectTable = LinkedObjectTable;
