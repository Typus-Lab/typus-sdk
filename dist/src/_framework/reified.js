"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = void 0;
exports.phantom = phantom;
exports.vector = vector;
exports.toBcs = toBcs;
exports.extractType = extractType;
exports.decodeFromFields = decodeFromFields;
exports.decodeFromFieldsWithTypes = decodeFromFieldsWithTypes;
exports.assertReifiedTypeArgsMatch = assertReifiedTypeArgsMatch;
exports.assertFieldsWithTypesArgsMatch = assertFieldsWithTypesArgsMatch;
exports.fieldToJSON = fieldToJSON;
exports.decodeFromJSONField = decodeFromJSONField;
var bcs_1 = require("@mysten/bcs");
var util_1 = require("./util");
var Vector = /** @class */ (function () {
    function Vector(fullTypeName, vec) {
        this.kind = "VectorClass";
        this.$fullTypeName = fullTypeName;
        this.vec = vec;
    }
    Vector.prototype.toJSONField = function () {
        return null;
    };
    return Vector;
}());
exports.Vector = Vector;
function phantom(type) {
    if (typeof type === "string") {
        return {
            phantomType: type,
            kind: "PhantomReified",
        };
    }
    else {
        return {
            phantomType: type.fullTypeName,
            kind: "PhantomReified",
        };
    }
}
function vector(T) {
    var fullTypeName = "vector<".concat(extractType(T), ">");
    return {
        fullTypeName: fullTypeName,
        bcs: bcs_1.bcs.vector(toBcs(T)),
        fromFieldsWithTypes: function (item) {
            return new Vector(fullTypeName, item.map(function (field) { return decodeFromFieldsWithTypes(T, field); }));
        },
        fromFields: function (fields) {
            return new Vector(fullTypeName, fields.map(function (field) { return decodeFromFields(T, field); }));
        },
        fromJSONField: function (field) {
            return new Vector(fullTypeName, field.map(function (field) { return decodeFromJSONField(T, field); }));
        },
        kind: "VectorClassReified",
    };
}
var Address = bcs_1.bcs.bytes(32).transform({
    input: function (val) { return (0, bcs_1.fromHEX)(val); },
    output: function (val) { return (0, bcs_1.toHEX)(val); },
});
function toBcs(arg) {
    switch (arg) {
        case "bool":
            return bcs_1.bcs.bool();
        case "u8":
            return bcs_1.bcs.u8();
        case "u16":
            return bcs_1.bcs.u16();
        case "u32":
            return bcs_1.bcs.u32();
        case "u64":
            return bcs_1.bcs.u64();
        case "u128":
            return bcs_1.bcs.u128();
        case "u256":
            return bcs_1.bcs.u256();
        case "address":
            return Address;
        default:
            return arg.bcs;
    }
}
function extractType(reified) {
    switch (reified) {
        case "u8":
        case "u16":
        case "u32":
        case "u64":
        case "u128":
        case "u256":
        case "bool":
        case "address":
            return reified;
    }
    switch (reified.kind) {
        case "PhantomReified":
            return reified.phantomType;
        case "StructClassReified":
            return reified.fullTypeName;
        case "VectorClassReified":
            return reified.fullTypeName;
    }
    throw new Error("unreachable");
}
function decodeFromFields(reified, field) {
    switch (reified) {
        case "bool":
        case "u8":
        case "u16":
        case "u32":
            return field;
        case "u64":
        case "u128":
        case "u256":
            return BigInt(field);
        case "address":
            return "0x".concat(field);
    }
    if (reified.kind === "VectorClassReified") {
        return reified.fromFields(field).vec;
    }
    switch (reified.typeName) {
        case "0x1::string::String":
        case "0x1::ascii::String":
            return new TextDecoder().decode(Uint8Array.from(field.bytes)).toString();
        case "0x2::url::Url":
            return new TextDecoder().decode(Uint8Array.from(field.url.bytes)).toString();
        case "0x2::object::ID":
            return "0x".concat(field.bytes);
        case "0x2::object::UID":
            return "0x".concat(field.id.bytes);
        case "0x1::option::Option": {
            if (field.vec.length === 0) {
                return null;
            }
            return reified.fromFields(field).vec[0];
        }
        default:
            return reified.fromFields(field);
    }
}
function decodeFromFieldsWithTypes(reified, item) {
    switch (reified) {
        case "bool":
        case "u8":
        case "u16":
        case "u32":
            return item;
        case "u64":
        case "u128":
        case "u256":
            return BigInt(item);
        case "address":
            return item;
    }
    if (reified.kind === "VectorClassReified") {
        return reified.fromFieldsWithTypes(item).vec;
    }
    switch (reified.typeName) {
        case "0x1::string::String":
        case "0x1::ascii::String":
        case "0x2::url::Url":
        case "0x2::object::ID":
            return item;
        case "0x2::object::UID":
            return item.id;
        case "0x2::balance::Balance":
            return reified.fromFields({ value: BigInt(item) });
        case "0x1::option::Option": {
            if (item === null) {
                return null;
            }
            return decodeFromFieldsWithTypes(reified.reifiedTypeArgs[0], item);
        }
        default:
            return reified.fromFieldsWithTypes(item);
    }
}
function assertReifiedTypeArgsMatch(fullType, typeArgs, reifiedTypeArgs) {
    if (reifiedTypeArgs.length !== typeArgs.length) {
        throw new Error("provided item has mismatching number of type argments ".concat(fullType, " (expected ").concat(reifiedTypeArgs.length, ", got ").concat(typeArgs.length, "))"));
    }
    for (var i = 0; i < typeArgs.length; i++) {
        if ((0, util_1.compressSuiType)(typeArgs[i]) !== (0, util_1.compressSuiType)(extractType(reifiedTypeArgs[i]))) {
            throw new Error("provided item has mismatching type argments ".concat(fullType, " (expected ").concat(extractType(reifiedTypeArgs[i]), ", got ").concat(typeArgs[i], "))"));
        }
    }
}
function assertFieldsWithTypesArgsMatch(item, reifiedTypeArgs) {
    var itemTypeArgs = (0, util_1.parseTypeName)(item.type).typeArgs;
    assertReifiedTypeArgsMatch(item.type, itemTypeArgs, reifiedTypeArgs);
}
function fieldToJSON(type, field) {
    var _a = (0, util_1.parseTypeName)(type), typeName = _a.typeName, typeArgs = _a.typeArgs;
    switch (typeName) {
        case "bool":
            return field;
        case "u8":
        case "u16":
        case "u32":
            return field;
        case "u64":
        case "u128":
        case "u256":
            return field.toString();
        case "address":
        case "signer":
            return field;
        case "vector":
            return field.map(function (item) { return fieldToJSON(typeArgs[0], item); });
        // handle special types
        case "0x1::string::String":
        case "0x1::ascii::String":
        case "0x2::url::Url":
        case "0x2::object::ID":
        case "0x2::object::UID":
            return field;
        case "0x1::option::Option": {
            if (field === null) {
                return null;
            }
            return fieldToJSON(typeArgs[0], field);
        }
        default:
            return field.toJSONField();
    }
}
function decodeFromJSONField(typeArg, field) {
    switch (typeArg) {
        case "bool":
        case "u8":
        case "u16":
        case "u32":
            return field;
        case "u64":
        case "u128":
        case "u256":
            return BigInt(field);
        case "address":
            return field;
    }
    if (typeArg.kind === "VectorClassReified") {
        return typeArg.fromJSONField(field).vec;
    }
    switch (typeArg.typeName) {
        case "0x1::string::String":
        case "0x1::ascii::String":
        case "0x2::url::Url":
        case "0x2::object::ID":
        case "0x2::object::UID":
            return field;
        case "0x1::option::Option": {
            if (field === null) {
                return null;
            }
            return decodeFromJSONField(typeArg.reifiedTypeArgs[0], field);
        }
        default:
            return typeArg.fromJSONField(field);
    }
}
