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
exports.PurchaseCap = exports.Lock = exports.Listing = exports.KioskOwnerCap = exports.Kiosk = exports.ItemPurchased = exports.ItemListed = exports.ItemDelisted = exports.Item = exports.Borrow = void 0;
exports.isBorrow = isBorrow;
exports.isItem = isItem;
exports.isItemDelisted = isItemDelisted;
exports.isItemListed = isItemListed;
exports.isItemPurchased = isItemPurchased;
exports.isKiosk = isKiosk;
exports.isKioskOwnerCap = isKioskOwnerCap;
exports.isListing = isListing;
exports.isLock = isLock;
exports.isPurchaseCap = isPurchaseCap;
var reified = __importStar(require("../../../../_framework/reified"));
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var structs_1 = require("../balance/structs");
var structs_2 = require("../object/structs");
var structs_3 = require("../sui/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== Borrow =============================== */
function isBorrow(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::kiosk::Borrow"; }
var Borrow = /** @class */ (function () {
    function Borrow(typeArgs, fields) {
        this.$typeName = Borrow.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Borrow.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.kioskId = fields.kioskId;
        ;
        this.itemId = fields.itemId;
    }
    Borrow.reified = function () {
        var _this = this;
        return { typeName: Borrow.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Borrow.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return Borrow.fromFields(fields); }, fromFieldsWithTypes: function (item) { return Borrow.fromFieldsWithTypes(item); }, fromBcs: function (data) { return Borrow.fromBcs(data); }, bcs: Borrow.bcs, fromJSONField: function (field) { return Borrow.fromJSONField(field); }, fromJSON: function (json) { return Borrow.fromJSON(json); }, fromSuiParsedData: function (content) { return Borrow.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Borrow.fetch(client, id)];
            }); }); }, new: function (fields) { return new Borrow([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Borrow, "r", {
        get: function () { return Borrow.reified(); },
        enumerable: false,
        configurable: true
    });
    Borrow.phantom = function () { return (0, reified_1.phantom)(Borrow.reified()); };
    Object.defineProperty(Borrow, "p", {
        get: function () { return Borrow.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Borrow, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Borrow", {
                kiosk_id: structs_2.ID.bcs, item_id: structs_2.ID.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Borrow.fromFields = function (fields) { return Borrow.reified().new({ kioskId: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.kiosk_id), itemId: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.item_id) }); };
    Borrow.fromFieldsWithTypes = function (item) {
        if (!isBorrow(item.type)) {
            throw new Error("not a Borrow type");
        }
        return Borrow.reified().new({ kioskId: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.kiosk_id), itemId: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.item_id) });
    };
    Borrow.fromBcs = function (data) { return Borrow.fromFields(Borrow.bcs.parse(data)); };
    Borrow.prototype.toJSONField = function () {
        return {
            kioskId: this.kioskId, itemId: this.itemId,
        };
    };
    Borrow.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Borrow.fromJSONField = function (field) { return Borrow.reified().new({ kioskId: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.kioskId), itemId: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.itemId) }); };
    Borrow.fromJSON = function (json) {
        if (json.$typeName !== Borrow.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Borrow.fromJSONField(json);
    };
    Borrow.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBorrow(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Borrow object"));
    } return Borrow.fromFieldsWithTypes(content); };
    Borrow.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Borrow object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBorrow(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Borrow object"));
                        }
                        return [2 /*return*/, Borrow.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Borrow.$typeName = "0x2::kiosk::Borrow";
    Borrow.$numTypeParams = 0;
    return Borrow;
}());
exports.Borrow = Borrow;
/* ============================== Item =============================== */
function isItem(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::kiosk::Item"; }
var Item = /** @class */ (function () {
    function Item(typeArgs, fields) {
        this.$typeName = Item.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Item.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
    }
    Item.reified = function () {
        var _this = this;
        return { typeName: Item.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Item.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return Item.fromFields(fields); }, fromFieldsWithTypes: function (item) { return Item.fromFieldsWithTypes(item); }, fromBcs: function (data) { return Item.fromBcs(data); }, bcs: Item.bcs, fromJSONField: function (field) { return Item.fromJSONField(field); }, fromJSON: function (json) { return Item.fromJSON(json); }, fromSuiParsedData: function (content) { return Item.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Item.fetch(client, id)];
            }); }); }, new: function (fields) { return new Item([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Item, "r", {
        get: function () { return Item.reified(); },
        enumerable: false,
        configurable: true
    });
    Item.phantom = function () { return (0, reified_1.phantom)(Item.reified()); };
    Object.defineProperty(Item, "p", {
        get: function () { return Item.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Item, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Item", {
                id: structs_2.ID.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Item.fromFields = function (fields) { return Item.reified().new({ id: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.id) }); };
    Item.fromFieldsWithTypes = function (item) {
        if (!isItem(item.type)) {
            throw new Error("not a Item type");
        }
        return Item.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.id) });
    };
    Item.fromBcs = function (data) { return Item.fromFields(Item.bcs.parse(data)); };
    Item.prototype.toJSONField = function () {
        return {
            id: this.id,
        };
    };
    Item.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Item.fromJSONField = function (field) { return Item.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.id) }); };
    Item.fromJSON = function (json) {
        if (json.$typeName !== Item.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Item.fromJSONField(json);
    };
    Item.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isItem(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Item object"));
    } return Item.fromFieldsWithTypes(content); };
    Item.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Item object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isItem(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Item object"));
                        }
                        return [2 /*return*/, Item.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Item.$typeName = "0x2::kiosk::Item";
    Item.$numTypeParams = 0;
    return Item;
}());
exports.Item = Item;
/* ============================== ItemDelisted =============================== */
function isItemDelisted(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::kiosk::ItemDelisted<"); }
var ItemDelisted = /** @class */ (function () {
    function ItemDelisted(typeArgs, fields) {
        this.$typeName = ItemDelisted.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([ItemDelisted.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.kiosk = fields.kiosk;
        ;
        this.id = fields.id;
    }
    ItemDelisted.reified = function (T) {
        var _this = this;
        return { typeName: ItemDelisted.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([ItemDelisted.$typeName], [(0, reified_1.extractType)(T)], false)), typeArgs: [(0, reified_1.extractType)(T)], reifiedTypeArgs: [T], fromFields: function (fields) { return ItemDelisted.fromFields(T, fields); }, fromFieldsWithTypes: function (item) { return ItemDelisted.fromFieldsWithTypes(T, item); }, fromBcs: function (data) { return ItemDelisted.fromBcs(T, data); }, bcs: ItemDelisted.bcs, fromJSONField: function (field) { return ItemDelisted.fromJSONField(T, field); }, fromJSON: function (json) { return ItemDelisted.fromJSON(T, json); }, fromSuiParsedData: function (content) { return ItemDelisted.fromSuiParsedData(T, content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, ItemDelisted.fetch(client, T, id)];
            }); }); }, new: function (fields) { return new ItemDelisted([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(ItemDelisted, "r", {
        get: function () { return ItemDelisted.reified; },
        enumerable: false,
        configurable: true
    });
    ItemDelisted.phantom = function (T) { return (0, reified_1.phantom)(ItemDelisted.reified(T)); };
    Object.defineProperty(ItemDelisted, "p", {
        get: function () { return ItemDelisted.phantom; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ItemDelisted, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("ItemDelisted", {
                kiosk: structs_2.ID.bcs, id: structs_2.ID.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    ItemDelisted.fromFields = function (typeArg, fields) { return ItemDelisted.reified(typeArg).new({ kiosk: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.kiosk), id: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.id) }); };
    ItemDelisted.fromFieldsWithTypes = function (typeArg, item) {
        if (!isItemDelisted(item.type)) {
            throw new Error("not a ItemDelisted type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return ItemDelisted.reified(typeArg).new({ kiosk: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.kiosk), id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.id) });
    };
    ItemDelisted.fromBcs = function (typeArg, data) { return ItemDelisted.fromFields(typeArg, ItemDelisted.bcs.parse(data)); };
    ItemDelisted.prototype.toJSONField = function () {
        return {
            kiosk: this.kiosk, id: this.id,
        };
    };
    ItemDelisted.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    ItemDelisted.fromJSONField = function (typeArg, field) { return ItemDelisted.reified(typeArg).new({ kiosk: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.kiosk), id: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.id) }); };
    ItemDelisted.fromJSON = function (typeArg, json) {
        if (json.$typeName !== ItemDelisted.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(ItemDelisted.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return ItemDelisted.fromJSONField(typeArg, json);
    };
    ItemDelisted.fromSuiParsedData = function (typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isItemDelisted(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a ItemDelisted object"));
    } return ItemDelisted.fromFieldsWithTypes(typeArg, content); };
    ItemDelisted.fetch = function (client, typeArg, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching ItemDelisted object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isItemDelisted(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a ItemDelisted object"));
                        }
                        return [2 /*return*/, ItemDelisted.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    ItemDelisted.$typeName = "0x2::kiosk::ItemDelisted";
    ItemDelisted.$numTypeParams = 1;
    return ItemDelisted;
}());
exports.ItemDelisted = ItemDelisted;
/* ============================== ItemListed =============================== */
function isItemListed(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::kiosk::ItemListed<"); }
var ItemListed = /** @class */ (function () {
    function ItemListed(typeArgs, fields) {
        this.$typeName = ItemListed.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([ItemListed.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.kiosk = fields.kiosk;
        ;
        this.id = fields.id;
        ;
        this.price = fields.price;
    }
    ItemListed.reified = function (T) {
        var _this = this;
        return { typeName: ItemListed.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([ItemListed.$typeName], [(0, reified_1.extractType)(T)], false)), typeArgs: [(0, reified_1.extractType)(T)], reifiedTypeArgs: [T], fromFields: function (fields) { return ItemListed.fromFields(T, fields); }, fromFieldsWithTypes: function (item) { return ItemListed.fromFieldsWithTypes(T, item); }, fromBcs: function (data) { return ItemListed.fromBcs(T, data); }, bcs: ItemListed.bcs, fromJSONField: function (field) { return ItemListed.fromJSONField(T, field); }, fromJSON: function (json) { return ItemListed.fromJSON(T, json); }, fromSuiParsedData: function (content) { return ItemListed.fromSuiParsedData(T, content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, ItemListed.fetch(client, T, id)];
            }); }); }, new: function (fields) { return new ItemListed([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(ItemListed, "r", {
        get: function () { return ItemListed.reified; },
        enumerable: false,
        configurable: true
    });
    ItemListed.phantom = function (T) { return (0, reified_1.phantom)(ItemListed.reified(T)); };
    Object.defineProperty(ItemListed, "p", {
        get: function () { return ItemListed.phantom; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ItemListed, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("ItemListed", {
                kiosk: structs_2.ID.bcs, id: structs_2.ID.bcs, price: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    ItemListed.fromFields = function (typeArg, fields) { return ItemListed.reified(typeArg).new({ kiosk: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.kiosk), id: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.id), price: (0, reified_1.decodeFromFields)("u64", fields.price) }); };
    ItemListed.fromFieldsWithTypes = function (typeArg, item) {
        if (!isItemListed(item.type)) {
            throw new Error("not a ItemListed type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return ItemListed.reified(typeArg).new({ kiosk: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.kiosk), id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.id), price: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.price) });
    };
    ItemListed.fromBcs = function (typeArg, data) { return ItemListed.fromFields(typeArg, ItemListed.bcs.parse(data)); };
    ItemListed.prototype.toJSONField = function () {
        return {
            kiosk: this.kiosk, id: this.id, price: this.price.toString(),
        };
    };
    ItemListed.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    ItemListed.fromJSONField = function (typeArg, field) { return ItemListed.reified(typeArg).new({ kiosk: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.kiosk), id: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.id), price: (0, reified_1.decodeFromJSONField)("u64", field.price) }); };
    ItemListed.fromJSON = function (typeArg, json) {
        if (json.$typeName !== ItemListed.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(ItemListed.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return ItemListed.fromJSONField(typeArg, json);
    };
    ItemListed.fromSuiParsedData = function (typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isItemListed(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a ItemListed object"));
    } return ItemListed.fromFieldsWithTypes(typeArg, content); };
    ItemListed.fetch = function (client, typeArg, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching ItemListed object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isItemListed(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a ItemListed object"));
                        }
                        return [2 /*return*/, ItemListed.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    ItemListed.$typeName = "0x2::kiosk::ItemListed";
    ItemListed.$numTypeParams = 1;
    return ItemListed;
}());
exports.ItemListed = ItemListed;
/* ============================== ItemPurchased =============================== */
function isItemPurchased(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::kiosk::ItemPurchased<"); }
var ItemPurchased = /** @class */ (function () {
    function ItemPurchased(typeArgs, fields) {
        this.$typeName = ItemPurchased.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([ItemPurchased.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.kiosk = fields.kiosk;
        ;
        this.id = fields.id;
        ;
        this.price = fields.price;
    }
    ItemPurchased.reified = function (T) {
        var _this = this;
        return { typeName: ItemPurchased.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([ItemPurchased.$typeName], [(0, reified_1.extractType)(T)], false)), typeArgs: [(0, reified_1.extractType)(T)], reifiedTypeArgs: [T], fromFields: function (fields) { return ItemPurchased.fromFields(T, fields); }, fromFieldsWithTypes: function (item) { return ItemPurchased.fromFieldsWithTypes(T, item); }, fromBcs: function (data) { return ItemPurchased.fromBcs(T, data); }, bcs: ItemPurchased.bcs, fromJSONField: function (field) { return ItemPurchased.fromJSONField(T, field); }, fromJSON: function (json) { return ItemPurchased.fromJSON(T, json); }, fromSuiParsedData: function (content) { return ItemPurchased.fromSuiParsedData(T, content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, ItemPurchased.fetch(client, T, id)];
            }); }); }, new: function (fields) { return new ItemPurchased([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(ItemPurchased, "r", {
        get: function () { return ItemPurchased.reified; },
        enumerable: false,
        configurable: true
    });
    ItemPurchased.phantom = function (T) { return (0, reified_1.phantom)(ItemPurchased.reified(T)); };
    Object.defineProperty(ItemPurchased, "p", {
        get: function () { return ItemPurchased.phantom; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ItemPurchased, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("ItemPurchased", {
                kiosk: structs_2.ID.bcs, id: structs_2.ID.bcs, price: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    ItemPurchased.fromFields = function (typeArg, fields) { return ItemPurchased.reified(typeArg).new({ kiosk: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.kiosk), id: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.id), price: (0, reified_1.decodeFromFields)("u64", fields.price) }); };
    ItemPurchased.fromFieldsWithTypes = function (typeArg, item) {
        if (!isItemPurchased(item.type)) {
            throw new Error("not a ItemPurchased type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return ItemPurchased.reified(typeArg).new({ kiosk: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.kiosk), id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.id), price: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.price) });
    };
    ItemPurchased.fromBcs = function (typeArg, data) { return ItemPurchased.fromFields(typeArg, ItemPurchased.bcs.parse(data)); };
    ItemPurchased.prototype.toJSONField = function () {
        return {
            kiosk: this.kiosk, id: this.id, price: this.price.toString(),
        };
    };
    ItemPurchased.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    ItemPurchased.fromJSONField = function (typeArg, field) { return ItemPurchased.reified(typeArg).new({ kiosk: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.kiosk), id: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.id), price: (0, reified_1.decodeFromJSONField)("u64", field.price) }); };
    ItemPurchased.fromJSON = function (typeArg, json) {
        if (json.$typeName !== ItemPurchased.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(ItemPurchased.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return ItemPurchased.fromJSONField(typeArg, json);
    };
    ItemPurchased.fromSuiParsedData = function (typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isItemPurchased(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a ItemPurchased object"));
    } return ItemPurchased.fromFieldsWithTypes(typeArg, content); };
    ItemPurchased.fetch = function (client, typeArg, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching ItemPurchased object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isItemPurchased(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a ItemPurchased object"));
                        }
                        return [2 /*return*/, ItemPurchased.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    ItemPurchased.$typeName = "0x2::kiosk::ItemPurchased";
    ItemPurchased.$numTypeParams = 1;
    return ItemPurchased;
}());
exports.ItemPurchased = ItemPurchased;
/* ============================== Kiosk =============================== */
function isKiosk(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::kiosk::Kiosk"; }
var Kiosk = /** @class */ (function () {
    function Kiosk(typeArgs, fields) {
        this.$typeName = Kiosk.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Kiosk.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.profits = fields.profits;
        ;
        this.owner = fields.owner;
        ;
        this.itemCount = fields.itemCount;
        ;
        this.allowExtensions = fields.allowExtensions;
    }
    Kiosk.reified = function () {
        var _this = this;
        return { typeName: Kiosk.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Kiosk.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return Kiosk.fromFields(fields); }, fromFieldsWithTypes: function (item) { return Kiosk.fromFieldsWithTypes(item); }, fromBcs: function (data) { return Kiosk.fromBcs(data); }, bcs: Kiosk.bcs, fromJSONField: function (field) { return Kiosk.fromJSONField(field); }, fromJSON: function (json) { return Kiosk.fromJSON(json); }, fromSuiParsedData: function (content) { return Kiosk.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Kiosk.fetch(client, id)];
            }); }); }, new: function (fields) { return new Kiosk([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Kiosk, "r", {
        get: function () { return Kiosk.reified(); },
        enumerable: false,
        configurable: true
    });
    Kiosk.phantom = function () { return (0, reified_1.phantom)(Kiosk.reified()); };
    Object.defineProperty(Kiosk, "p", {
        get: function () { return Kiosk.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Kiosk, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Kiosk", {
                id: structs_2.UID.bcs, profits: structs_1.Balance.bcs, owner: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), item_count: bcs_1.bcs.u32(), allow_extensions: bcs_1.bcs.bool()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Kiosk.fromFields = function (fields) { return Kiosk.reified().new({ id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id), profits: (0, reified_1.decodeFromFields)(structs_1.Balance.reified(reified.phantom(structs_3.SUI.reified())), fields.profits), owner: (0, reified_1.decodeFromFields)("address", fields.owner), itemCount: (0, reified_1.decodeFromFields)("u32", fields.item_count), allowExtensions: (0, reified_1.decodeFromFields)("bool", fields.allow_extensions) }); };
    Kiosk.fromFieldsWithTypes = function (item) {
        if (!isKiosk(item.type)) {
            throw new Error("not a Kiosk type");
        }
        return Kiosk.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id), profits: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Balance.reified(reified.phantom(structs_3.SUI.reified())), item.fields.profits), owner: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.owner), itemCount: (0, reified_1.decodeFromFieldsWithTypes)("u32", item.fields.item_count), allowExtensions: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.allow_extensions) });
    };
    Kiosk.fromBcs = function (data) { return Kiosk.fromFields(Kiosk.bcs.parse(data)); };
    Kiosk.prototype.toJSONField = function () {
        return {
            id: this.id, profits: this.profits.toJSONField(), owner: this.owner, itemCount: this.itemCount, allowExtensions: this.allowExtensions,
        };
    };
    Kiosk.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Kiosk.fromJSONField = function (field) { return Kiosk.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id), profits: (0, reified_1.decodeFromJSONField)(structs_1.Balance.reified(reified.phantom(structs_3.SUI.reified())), field.profits), owner: (0, reified_1.decodeFromJSONField)("address", field.owner), itemCount: (0, reified_1.decodeFromJSONField)("u32", field.itemCount), allowExtensions: (0, reified_1.decodeFromJSONField)("bool", field.allowExtensions) }); };
    Kiosk.fromJSON = function (json) {
        if (json.$typeName !== Kiosk.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Kiosk.fromJSONField(json);
    };
    Kiosk.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isKiosk(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Kiosk object"));
    } return Kiosk.fromFieldsWithTypes(content); };
    Kiosk.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Kiosk object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isKiosk(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Kiosk object"));
                        }
                        return [2 /*return*/, Kiosk.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Kiosk.$typeName = "0x2::kiosk::Kiosk";
    Kiosk.$numTypeParams = 0;
    return Kiosk;
}());
exports.Kiosk = Kiosk;
/* ============================== KioskOwnerCap =============================== */
function isKioskOwnerCap(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::kiosk::KioskOwnerCap"; }
var KioskOwnerCap = /** @class */ (function () {
    function KioskOwnerCap(typeArgs, fields) {
        this.$typeName = KioskOwnerCap.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([KioskOwnerCap.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.for = fields.for;
    }
    KioskOwnerCap.reified = function () {
        var _this = this;
        return { typeName: KioskOwnerCap.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([KioskOwnerCap.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return KioskOwnerCap.fromFields(fields); }, fromFieldsWithTypes: function (item) { return KioskOwnerCap.fromFieldsWithTypes(item); }, fromBcs: function (data) { return KioskOwnerCap.fromBcs(data); }, bcs: KioskOwnerCap.bcs, fromJSONField: function (field) { return KioskOwnerCap.fromJSONField(field); }, fromJSON: function (json) { return KioskOwnerCap.fromJSON(json); }, fromSuiParsedData: function (content) { return KioskOwnerCap.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, KioskOwnerCap.fetch(client, id)];
            }); }); }, new: function (fields) { return new KioskOwnerCap([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(KioskOwnerCap, "r", {
        get: function () { return KioskOwnerCap.reified(); },
        enumerable: false,
        configurable: true
    });
    KioskOwnerCap.phantom = function () { return (0, reified_1.phantom)(KioskOwnerCap.reified()); };
    Object.defineProperty(KioskOwnerCap, "p", {
        get: function () { return KioskOwnerCap.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KioskOwnerCap, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("KioskOwnerCap", {
                id: structs_2.UID.bcs, for: structs_2.ID.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    KioskOwnerCap.fromFields = function (fields) { return KioskOwnerCap.reified().new({ id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id), for: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.for) }); };
    KioskOwnerCap.fromFieldsWithTypes = function (item) {
        if (!isKioskOwnerCap(item.type)) {
            throw new Error("not a KioskOwnerCap type");
        }
        return KioskOwnerCap.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id), for: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.for) });
    };
    KioskOwnerCap.fromBcs = function (data) { return KioskOwnerCap.fromFields(KioskOwnerCap.bcs.parse(data)); };
    KioskOwnerCap.prototype.toJSONField = function () {
        return {
            id: this.id, for: this.for,
        };
    };
    KioskOwnerCap.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    KioskOwnerCap.fromJSONField = function (field) { return KioskOwnerCap.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id), for: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.for) }); };
    KioskOwnerCap.fromJSON = function (json) {
        if (json.$typeName !== KioskOwnerCap.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return KioskOwnerCap.fromJSONField(json);
    };
    KioskOwnerCap.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isKioskOwnerCap(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a KioskOwnerCap object"));
    } return KioskOwnerCap.fromFieldsWithTypes(content); };
    KioskOwnerCap.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching KioskOwnerCap object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isKioskOwnerCap(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a KioskOwnerCap object"));
                        }
                        return [2 /*return*/, KioskOwnerCap.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    KioskOwnerCap.$typeName = "0x2::kiosk::KioskOwnerCap";
    KioskOwnerCap.$numTypeParams = 0;
    return KioskOwnerCap;
}());
exports.KioskOwnerCap = KioskOwnerCap;
/* ============================== Listing =============================== */
function isListing(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::kiosk::Listing"; }
var Listing = /** @class */ (function () {
    function Listing(typeArgs, fields) {
        this.$typeName = Listing.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Listing.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.isExclusive = fields.isExclusive;
    }
    Listing.reified = function () {
        var _this = this;
        return { typeName: Listing.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Listing.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return Listing.fromFields(fields); }, fromFieldsWithTypes: function (item) { return Listing.fromFieldsWithTypes(item); }, fromBcs: function (data) { return Listing.fromBcs(data); }, bcs: Listing.bcs, fromJSONField: function (field) { return Listing.fromJSONField(field); }, fromJSON: function (json) { return Listing.fromJSON(json); }, fromSuiParsedData: function (content) { return Listing.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Listing.fetch(client, id)];
            }); }); }, new: function (fields) { return new Listing([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Listing, "r", {
        get: function () { return Listing.reified(); },
        enumerable: false,
        configurable: true
    });
    Listing.phantom = function () { return (0, reified_1.phantom)(Listing.reified()); };
    Object.defineProperty(Listing, "p", {
        get: function () { return Listing.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Listing, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Listing", {
                id: structs_2.ID.bcs, is_exclusive: bcs_1.bcs.bool()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Listing.fromFields = function (fields) { return Listing.reified().new({ id: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.id), isExclusive: (0, reified_1.decodeFromFields)("bool", fields.is_exclusive) }); };
    Listing.fromFieldsWithTypes = function (item) {
        if (!isListing(item.type)) {
            throw new Error("not a Listing type");
        }
        return Listing.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.id), isExclusive: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_exclusive) });
    };
    Listing.fromBcs = function (data) { return Listing.fromFields(Listing.bcs.parse(data)); };
    Listing.prototype.toJSONField = function () {
        return {
            id: this.id, isExclusive: this.isExclusive,
        };
    };
    Listing.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Listing.fromJSONField = function (field) { return Listing.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.id), isExclusive: (0, reified_1.decodeFromJSONField)("bool", field.isExclusive) }); };
    Listing.fromJSON = function (json) {
        if (json.$typeName !== Listing.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Listing.fromJSONField(json);
    };
    Listing.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isListing(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Listing object"));
    } return Listing.fromFieldsWithTypes(content); };
    Listing.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Listing object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isListing(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Listing object"));
                        }
                        return [2 /*return*/, Listing.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Listing.$typeName = "0x2::kiosk::Listing";
    Listing.$numTypeParams = 0;
    return Listing;
}());
exports.Listing = Listing;
/* ============================== Lock =============================== */
function isLock(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::kiosk::Lock"; }
var Lock = /** @class */ (function () {
    function Lock(typeArgs, fields) {
        this.$typeName = Lock.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Lock.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
    }
    Lock.reified = function () {
        var _this = this;
        return { typeName: Lock.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Lock.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return Lock.fromFields(fields); }, fromFieldsWithTypes: function (item) { return Lock.fromFieldsWithTypes(item); }, fromBcs: function (data) { return Lock.fromBcs(data); }, bcs: Lock.bcs, fromJSONField: function (field) { return Lock.fromJSONField(field); }, fromJSON: function (json) { return Lock.fromJSON(json); }, fromSuiParsedData: function (content) { return Lock.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Lock.fetch(client, id)];
            }); }); }, new: function (fields) { return new Lock([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Lock, "r", {
        get: function () { return Lock.reified(); },
        enumerable: false,
        configurable: true
    });
    Lock.phantom = function () { return (0, reified_1.phantom)(Lock.reified()); };
    Object.defineProperty(Lock, "p", {
        get: function () { return Lock.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lock, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Lock", {
                id: structs_2.ID.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Lock.fromFields = function (fields) { return Lock.reified().new({ id: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.id) }); };
    Lock.fromFieldsWithTypes = function (item) {
        if (!isLock(item.type)) {
            throw new Error("not a Lock type");
        }
        return Lock.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.id) });
    };
    Lock.fromBcs = function (data) { return Lock.fromFields(Lock.bcs.parse(data)); };
    Lock.prototype.toJSONField = function () {
        return {
            id: this.id,
        };
    };
    Lock.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Lock.fromJSONField = function (field) { return Lock.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.id) }); };
    Lock.fromJSON = function (json) {
        if (json.$typeName !== Lock.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Lock.fromJSONField(json);
    };
    Lock.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isLock(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Lock object"));
    } return Lock.fromFieldsWithTypes(content); };
    Lock.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Lock object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isLock(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Lock object"));
                        }
                        return [2 /*return*/, Lock.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Lock.$typeName = "0x2::kiosk::Lock";
    Lock.$numTypeParams = 0;
    return Lock;
}());
exports.Lock = Lock;
/* ============================== PurchaseCap =============================== */
function isPurchaseCap(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::kiosk::PurchaseCap<"); }
var PurchaseCap = /** @class */ (function () {
    function PurchaseCap(typeArgs, fields) {
        this.$typeName = PurchaseCap.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([PurchaseCap.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.kioskId = fields.kioskId;
        ;
        this.itemId = fields.itemId;
        ;
        this.minPrice = fields.minPrice;
    }
    PurchaseCap.reified = function (T) {
        var _this = this;
        return { typeName: PurchaseCap.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([PurchaseCap.$typeName], [(0, reified_1.extractType)(T)], false)), typeArgs: [(0, reified_1.extractType)(T)], reifiedTypeArgs: [T], fromFields: function (fields) { return PurchaseCap.fromFields(T, fields); }, fromFieldsWithTypes: function (item) { return PurchaseCap.fromFieldsWithTypes(T, item); }, fromBcs: function (data) { return PurchaseCap.fromBcs(T, data); }, bcs: PurchaseCap.bcs, fromJSONField: function (field) { return PurchaseCap.fromJSONField(T, field); }, fromJSON: function (json) { return PurchaseCap.fromJSON(T, json); }, fromSuiParsedData: function (content) { return PurchaseCap.fromSuiParsedData(T, content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, PurchaseCap.fetch(client, T, id)];
            }); }); }, new: function (fields) { return new PurchaseCap([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(PurchaseCap, "r", {
        get: function () { return PurchaseCap.reified; },
        enumerable: false,
        configurable: true
    });
    PurchaseCap.phantom = function (T) { return (0, reified_1.phantom)(PurchaseCap.reified(T)); };
    Object.defineProperty(PurchaseCap, "p", {
        get: function () { return PurchaseCap.phantom; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PurchaseCap, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("PurchaseCap", {
                id: structs_2.UID.bcs, kiosk_id: structs_2.ID.bcs, item_id: structs_2.ID.bcs, min_price: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    PurchaseCap.fromFields = function (typeArg, fields) { return PurchaseCap.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id), kioskId: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.kiosk_id), itemId: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.item_id), minPrice: (0, reified_1.decodeFromFields)("u64", fields.min_price) }); };
    PurchaseCap.fromFieldsWithTypes = function (typeArg, item) {
        if (!isPurchaseCap(item.type)) {
            throw new Error("not a PurchaseCap type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return PurchaseCap.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id), kioskId: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.kiosk_id), itemId: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.item_id), minPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.min_price) });
    };
    PurchaseCap.fromBcs = function (typeArg, data) { return PurchaseCap.fromFields(typeArg, PurchaseCap.bcs.parse(data)); };
    PurchaseCap.prototype.toJSONField = function () {
        return {
            id: this.id, kioskId: this.kioskId, itemId: this.itemId, minPrice: this.minPrice.toString(),
        };
    };
    PurchaseCap.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    PurchaseCap.fromJSONField = function (typeArg, field) { return PurchaseCap.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id), kioskId: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.kioskId), itemId: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.itemId), minPrice: (0, reified_1.decodeFromJSONField)("u64", field.minPrice) }); };
    PurchaseCap.fromJSON = function (typeArg, json) {
        if (json.$typeName !== PurchaseCap.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(PurchaseCap.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return PurchaseCap.fromJSONField(typeArg, json);
    };
    PurchaseCap.fromSuiParsedData = function (typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isPurchaseCap(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a PurchaseCap object"));
    } return PurchaseCap.fromFieldsWithTypes(typeArg, content); };
    PurchaseCap.fetch = function (client, typeArg, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching PurchaseCap object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isPurchaseCap(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a PurchaseCap object"));
                        }
                        return [2 /*return*/, PurchaseCap.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    PurchaseCap.$typeName = "0x2::kiosk::PurchaseCap";
    PurchaseCap.$numTypeParams = 1;
    return PurchaseCap;
}());
exports.PurchaseCap = PurchaseCap;
