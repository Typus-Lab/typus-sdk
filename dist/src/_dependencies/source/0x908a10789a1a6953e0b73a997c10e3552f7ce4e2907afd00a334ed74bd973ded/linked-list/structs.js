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
exports.LinkedList = exports.Node = void 0;
exports.isNode = isNode;
exports.isLinkedList = isLinkedList;
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var structs_1 = require("../../0x1/option/structs");
var structs_2 = require("../../0x2/object/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== Node =============================== */
function isNode(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::linked_list::Node<"); }
var Node = /** @class */ (function () {
    function Node(typeArgs, fields) {
        this.$typeName = Node.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Node.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.value = fields.value;
        ;
        this.prev = fields.prev;
        ;
        this.next = fields.next;
        ;
        this.exists = fields.exists;
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
                value: V, prev: structs_1.Option.bcs(K), next: structs_1.Option.bcs(K), exists: bcs_1.bcs.bool()
            }); };
        },
        enumerable: false,
        configurable: true
    });
    ;
    Node.fromFields = function (typeArgs, fields) { return Node.reified(typeArgs[0], typeArgs[1]).new({ value: (0, reified_1.decodeFromFields)(typeArgs[1], fields.value), prev: (0, reified_1.decodeFromFields)(structs_1.Option.reified(typeArgs[0]), fields.prev), next: (0, reified_1.decodeFromFields)(structs_1.Option.reified(typeArgs[0]), fields.next), exists: (0, reified_1.decodeFromFields)("bool", fields.exists) }); };
    Node.fromFieldsWithTypes = function (typeArgs, item) {
        if (!isNode(item.type)) {
            throw new Error("not a Node type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, typeArgs);
        return Node.reified(typeArgs[0], typeArgs[1]).new({ value: (0, reified_1.decodeFromFieldsWithTypes)(typeArgs[1], item.fields.value), prev: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(typeArgs[0]), item.fields.prev), next: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(typeArgs[0]), item.fields.next), exists: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.exists) });
    };
    Node.fromBcs = function (typeArgs, data) { return Node.fromFields(typeArgs, Node.bcs((0, reified_1.toBcs)(typeArgs[0]), (0, reified_1.toBcs)(typeArgs[1])).parse(data)); };
    Node.prototype.toJSONField = function () {
        return {
            value: (0, reified_1.fieldToJSON)(this.$typeArgs[1], this.value), prev: (0, reified_1.fieldToJSON)("0x1::option::Option<".concat(this.$typeArgs[0], ">"), this.prev), next: (0, reified_1.fieldToJSON)("0x1::option::Option<".concat(this.$typeArgs[0], ">"), this.next), exists: this.exists,
        };
    };
    Node.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Node.fromJSONField = function (typeArgs, field) { return Node.reified(typeArgs[0], typeArgs[1]).new({ value: (0, reified_1.decodeFromJSONField)(typeArgs[1], field.value), prev: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(typeArgs[0]), field.prev), next: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(typeArgs[0]), field.next), exists: (0, reified_1.decodeFromJSONField)("bool", field.exists) }); };
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
    Node.$typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::linked_list::Node";
    Node.$numTypeParams = 2;
    return Node;
}());
exports.Node = Node;
/* ============================== LinkedList =============================== */
function isLinkedList(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::linked_list::LinkedList<"); }
var LinkedList = /** @class */ (function () {
    function LinkedList(typeArgs, fields) {
        this.$typeName = LinkedList.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([LinkedList.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.first = fields.first;
        ;
        this.last = fields.last;
        ;
        this.length = fields.length;
    }
    LinkedList.reified = function (K, V) {
        var _this = this;
        return { typeName: LinkedList.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([LinkedList.$typeName], [(0, reified_1.extractType)(K), (0, reified_1.extractType)(V)], false)), typeArgs: [(0, reified_1.extractType)(K), (0, reified_1.extractType)(V)], reifiedTypeArgs: [K, V], fromFields: function (fields) { return LinkedList.fromFields([K, V], fields); }, fromFieldsWithTypes: function (item) { return LinkedList.fromFieldsWithTypes([K, V], item); }, fromBcs: function (data) { return LinkedList.fromBcs([K, V], data); }, bcs: LinkedList.bcs((0, reified_1.toBcs)(K)), fromJSONField: function (field) { return LinkedList.fromJSONField([K, V], field); }, fromJSON: function (json) { return LinkedList.fromJSON([K, V], json); }, fromSuiParsedData: function (content) { return LinkedList.fromSuiParsedData([K, V], content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, LinkedList.fetch(client, [K, V], id)];
            }); }); }, new: function (fields) { return new LinkedList([(0, reified_1.extractType)(K), (0, reified_1.extractType)(V)], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(LinkedList, "r", {
        get: function () { return LinkedList.reified; },
        enumerable: false,
        configurable: true
    });
    LinkedList.phantom = function (K, V) { return (0, reified_1.phantom)(LinkedList.reified(K, V)); };
    Object.defineProperty(LinkedList, "p", {
        get: function () { return LinkedList.phantom; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LinkedList, "bcs", {
        get: function () {
            return function (K) { return bcs_1.bcs.struct("LinkedList<".concat(K.name, ">"), {
                id: structs_2.ID.bcs, first: structs_1.Option.bcs(K), last: structs_1.Option.bcs(K), length: bcs_1.bcs.u64()
            }); };
        },
        enumerable: false,
        configurable: true
    });
    ;
    LinkedList.fromFields = function (typeArgs, fields) { return LinkedList.reified(typeArgs[0], typeArgs[1]).new({ id: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.id), first: (0, reified_1.decodeFromFields)(structs_1.Option.reified(typeArgs[0]), fields.first), last: (0, reified_1.decodeFromFields)(structs_1.Option.reified(typeArgs[0]), fields.last), length: (0, reified_1.decodeFromFields)("u64", fields.length) }); };
    LinkedList.fromFieldsWithTypes = function (typeArgs, item) {
        if (!isLinkedList(item.type)) {
            throw new Error("not a LinkedList type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, typeArgs);
        return LinkedList.reified(typeArgs[0], typeArgs[1]).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.id), first: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(typeArgs[0]), item.fields.first), last: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(typeArgs[0]), item.fields.last), length: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.length) });
    };
    LinkedList.fromBcs = function (typeArgs, data) { return LinkedList.fromFields(typeArgs, LinkedList.bcs((0, reified_1.toBcs)(typeArgs[0])).parse(data)); };
    LinkedList.prototype.toJSONField = function () {
        return {
            id: this.id, first: (0, reified_1.fieldToJSON)("0x1::option::Option<".concat(this.$typeArgs[0], ">"), this.first), last: (0, reified_1.fieldToJSON)("0x1::option::Option<".concat(this.$typeArgs[0], ">"), this.last), length: this.length.toString(),
        };
    };
    LinkedList.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    LinkedList.fromJSONField = function (typeArgs, field) { return LinkedList.reified(typeArgs[0], typeArgs[1]).new({ id: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.id), first: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(typeArgs[0]), field.first), last: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(typeArgs[0]), field.last), length: (0, reified_1.decodeFromJSONField)("u64", field.length) }); };
    LinkedList.fromJSON = function (typeArgs, json) {
        if (json.$typeName !== LinkedList.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)(util_1.composeSuiType.apply(void 0, __spreadArray([LinkedList.$typeName], __read(typeArgs.map(reified_1.extractType)), false)), json.$typeArgs, typeArgs);
        return LinkedList.fromJSONField(typeArgs, json);
    };
    LinkedList.fromSuiParsedData = function (typeArgs, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isLinkedList(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a LinkedList object"));
    } return LinkedList.fromFieldsWithTypes(typeArgs, content); };
    LinkedList.fetch = function (client, typeArgs, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching LinkedList object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isLinkedList(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a LinkedList object"));
                        }
                        return [2 /*return*/, LinkedList.fromBcs(typeArgs, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    LinkedList.$typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::linked_list::LinkedList";
    LinkedList.$numTypeParams = 2;
    return LinkedList;
}());
exports.LinkedList = LinkedList;
