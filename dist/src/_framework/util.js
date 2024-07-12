"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTypeName = parseTypeName;
exports.isTransactionArgument = isTransactionArgument;
exports.isTransactionObjectArgument = isTransactionObjectArgument;
exports.obj = obj;
exports.pure = pure;
exports.option = option;
exports.generic = generic;
exports.vector = vector;
exports.typeArgIsPure = typeArgIsPure;
exports.compressSuiAddress = compressSuiAddress;
exports.compressSuiType = compressSuiType;
exports.composeSuiType = composeSuiType;
var bcs_1 = require("@mysten/sui.js/bcs");
function parseTypeName(name) {
    var parsed = bcs_1.bcs.parseTypeName(name);
    return { typeName: parsed.name, typeArgs: parsed.params };
}
function isTransactionArgument(arg) {
    if (!arg || typeof arg !== "object" || Array.isArray(arg)) {
        return false;
    }
    return "kind" in arg;
}
function isTransactionObjectArgument(arg) {
    if (!isTransactionArgument(arg)) {
        return false;
    }
    if (arg.kind === "Input" && arg.type === "pure") {
        return false;
    }
    return true;
}
function obj(txb, arg) {
    return isTransactionArgument(arg) ? arg : txb.object(arg);
}
function pure(txb, arg, type) {
    if (isTransactionArgument(arg)) {
        return obj(txb, arg);
    }
    function getBcsForType(type) {
        var _a = parseTypeName(type), typeName = _a.typeName, typeArgs = _a.typeArgs;
        switch (typeName) {
            case "bool":
                return bcs_1.bcs.Bool;
            case "u8":
                return bcs_1.bcs.U8;
            case "u16":
                return bcs_1.bcs.U16;
            case "u32":
                return bcs_1.bcs.U32;
            case "u64":
                return bcs_1.bcs.U64;
            case "u128":
                return bcs_1.bcs.U128;
            case "u256":
                return bcs_1.bcs.U256;
            case "address":
                return bcs_1.bcs.Address;
            case "0x1::string::String":
            case "0x1::ascii::String":
                return bcs_1.bcs.String;
            case "0x2::object::ID":
                return bcs_1.bcs.Address;
            case "0x1::option::Option":
                return bcs_1.bcs.option(getBcsForType(typeArgs[0]));
            case "vector":
                return bcs_1.bcs.vector(getBcsForType(typeArgs[0]));
            default:
                throw new Error("invalid primitive type ".concat(type));
        }
    }
    function isOrHasNestedTransactionArgument(arg) {
        if (Array.isArray(arg)) {
            return arg.some(function (item) { return isOrHasNestedTransactionArgument(item); });
        }
        return isTransactionArgument(arg);
    }
    // handle some cases when TransactionArgument is nested within a vector or option
    var _a = parseTypeName(type), typeName = _a.typeName, typeArgs = _a.typeArgs;
    switch (typeName) {
        case "0x1::option::Option":
            if (arg === null) {
                return txb.pure(bcs_1.bcs.option(bcs_1.bcs.Bool).serialize(null)); // bcs.Bool is arbitrary
            }
            if (isOrHasNestedTransactionArgument(arg)) {
                throw new Error("nesting TransactionArgument is not supported");
            }
            break;
        case "vector":
            if (!Array.isArray(arg)) {
                throw new Error("expected an array for vector type");
            }
            if (arg.length === 0) {
                return txb.pure(bcs_1.bcs.vector(bcs_1.bcs.Bool).serialize([])); // bcs.Bool is arbitrary
            }
            if (arg.some(function (arg) { return Array.isArray(arg) && isOrHasNestedTransactionArgument(arg); })) {
                throw new Error("nesting TransactionArgument is not supported");
            }
            if (isTransactionArgument(arg[0]) && arg.filter(function (arg) { return !isTransactionArgument(arg); }).length > 0) {
                throw new Error("mixing TransactionArgument with other types is not supported");
            }
            if (isTransactionObjectArgument(arg[0])) {
                return txb.makeMoveVec({
                    objects: arg,
                    type: typeArgs[0],
                });
            }
    }
    return txb.pure(getBcsForType(type).serialize(arg));
}
function option(txb, type, arg) {
    if (isTransactionArgument(arg)) {
        return arg;
    }
    if (typeArgIsPure(type)) {
        return pure(txb, arg, "0x1::option::Option<".concat(type, ">"));
    }
    if (arg === null) {
        return txb.moveCall({
            target: "0x1::option::none",
            typeArguments: [type],
            arguments: [],
        });
    }
    // wrap it with some
    var val = generic(txb, type, arg);
    return txb.moveCall({
        target: "0x1::option::some",
        typeArguments: [type],
        arguments: [val],
    });
}
function generic(txb, type, arg) {
    if (typeArgIsPure(type)) {
        return pure(txb, arg, type);
    }
    else {
        var _a = parseTypeName(type), typeName = _a.typeName, typeArgs = _a.typeArgs;
        if (typeName === "vector" && Array.isArray(arg)) {
            var itemType = typeArgs[0];
            return txb.makeMoveVec({
                objects: arg.map(function (item) { return obj(txb, item); }),
                type: itemType,
            });
        }
        else {
            return obj(txb, arg);
        }
    }
}
function vector(txb, itemType, items) {
    if (typeArgIsPure(itemType)) {
        return pure(txb, items, "vector<".concat(itemType, ">"));
    }
    else if (isTransactionArgument(items)) {
        return items;
    }
    else {
        var _a = parseTypeName(itemType), itemTypeName = _a.typeName, itemTypeArgs_1 = _a.typeArgs;
        if (itemTypeName === "0x1::option::Option") {
            var objects = items.map(function (item) { return option(txb, itemTypeArgs_1[0], item); });
            return txb.makeMoveVec({
                objects: objects,
                type: itemType,
            });
        }
        return txb.makeMoveVec({
            objects: items,
            type: itemType,
        });
    }
}
function typeArgIsPure(type) {
    var _a = parseTypeName(type), typeName = _a.typeName, typeArgs = _a.typeArgs;
    switch (typeName) {
        case "bool":
        case "u8":
        case "u16":
        case "u32":
        case "u64":
        case "u128":
        case "u256":
        case "address":
        case "signer":
            return true;
        case "vector":
            return typeArgIsPure(typeArgs[0]);
        case "0x1::string::String":
        case "0x1::ascii::String":
        case "0x2::object::ID":
            return true;
        case "0x1::option::Option":
            return typeArgIsPure(typeArgs[0]);
        default:
            return false;
    }
}
function compressSuiAddress(addr) {
    // remove leading zeros
    var stripped = addr.split("0x").join("");
    for (var i = 0; i < stripped.length; i++) {
        if (stripped[i] !== "0") {
            return "0x".concat(stripped.substring(i));
        }
    }
    return "0x0";
}
// Recursively removes leading zeros from a type.
// e.g. `0x00000002::module::Name<0x00001::a::C>` -> `0x2::module::Name<0x1::a::C>`
function compressSuiType(type) {
    var _a = parseTypeName(type), typeName = _a.typeName, typeArgs = _a.typeArgs;
    switch (typeName) {
        case "bool":
        case "u8":
        case "u16":
        case "u32":
        case "u64":
        case "u128":
        case "u256":
        case "address":
        case "signer":
            return typeName;
        case "vector":
            return "vector<".concat(compressSuiType(typeArgs[0]), ">");
        default: {
            var tok = typeName.split("::");
            tok[0] = compressSuiAddress(tok[0]);
            var compressedName = tok.join("::");
            if (typeArgs.length > 0) {
                return "".concat(compressedName, "<").concat(typeArgs.map(function (typeArg) { return compressSuiType(typeArg); }).join(","), ">");
            }
            else {
                return compressedName;
            }
        }
    }
}
function composeSuiType(typeName) {
    var typeArgs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        typeArgs[_i - 1] = arguments[_i];
    }
    if (typeArgs.length > 0) {
        return "".concat(typeName, "<").concat(typeArgs.join(", "), ">");
    }
    else {
        return typeName;
    }
}
