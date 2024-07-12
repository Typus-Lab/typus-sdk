"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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
exports.structClassLoaderOnchain = exports.structClassLoaderSource = exports.StructClassLoader = void 0;
var util_1 = require("./util");
var reified_1 = require("./reified");
var StructClassLoader = /** @class */ (function () {
    function StructClassLoader() {
        this.map = new Map();
    }
    StructClassLoader.prototype.register = function () {
        var e_1, _a;
        var classes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            classes[_i] = arguments[_i];
        }
        try {
            for (var classes_1 = __values(classes), classes_1_1 = classes_1.next(); !classes_1_1.done; classes_1_1 = classes_1.next()) {
                var cls = classes_1_1.value;
                this.map.set(cls.$typeName, cls);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (classes_1_1 && !classes_1_1.done && (_a = classes_1.return)) _a.call(classes_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    StructClassLoader.prototype.reified = function (type) {
        var _this = this;
        var _a = (0, util_1.parseTypeName)((0, util_1.compressSuiType)(type)), typeName = _a.typeName, typeArgs = _a.typeArgs;
        switch (typeName) {
            case "bool":
            case "u8":
            case "u16":
            case "u32":
            case "u64":
            case "u128":
            case "u256":
            case "address":
                return typeName;
            case "vector": {
                if (typeArgs.length !== 1) {
                    throw new Error("Vector expects 1 type argument, but got ".concat(typeArgs.length));
                }
                return (0, reified_1.vector)(this.reified(typeArgs[0]));
            }
        }
        if (!this.map.has(typeName)) {
            throw new Error("Unknown type ".concat(typeName));
        }
        var cls = this.map.get(typeName);
        if (cls.$numTypeParams !== typeArgs.length) {
            throw new Error("Type ".concat(typeName, " expects ").concat(cls.$numTypeParams, " type arguments, but got ").concat(typeArgs.length));
        }
        return cls.reified.apply(cls, __spreadArray([], __read(typeArgs.map(function (t) { return _this.reified(t); })), false));
    };
    return StructClassLoader;
}());
exports.StructClassLoader = StructClassLoader;
exports.structClassLoaderSource = new StructClassLoader();
exports.structClassLoaderOnchain = new StructClassLoader();
