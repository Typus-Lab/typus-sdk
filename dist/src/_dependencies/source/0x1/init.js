"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerClasses = registerClasses;
var ascii = __importStar(require("./ascii/structs"));
var bitVector = __importStar(require("./bit-vector/structs"));
var fixedPoint32 = __importStar(require("./fixed-point32/structs"));
var option = __importStar(require("./option/structs"));
var string = __importStar(require("./string/structs"));
var typeName = __importStar(require("./type-name/structs"));
function registerClasses(loader) {
    loader.register(fixedPoint32.FixedPoint32);
    loader.register(option.Option);
    loader.register(ascii.Char);
    loader.register(ascii.String);
    loader.register(bitVector.BitVector);
    loader.register(string.String);
    loader.register(typeName.TypeName);
}
