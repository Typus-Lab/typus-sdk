"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.simulateGame = simulateGame;
var transactions_1 = require("@mysten/sui.js/transactions");
var client_1 = require("@mysten/sui.js/client");
var bcs_1 = require("@mysten/bcs");
var bls_signatures_1 = __importDefault(require("bls-signatures"));
function simulateGame(network_1, packageId_1, registry_1, index_1, amount_1, guess_1_1, larger_than_1_1, guess_2_1, larger_than_2_1, vrf_input_1_1, vrf_input_2_1, drawKeys_1) {
    return __awaiter(this, arguments, void 0, function (network, packageId, registry, index, amount, guess_1, larger_than_1, guess_2, larger_than_2, vrf_input_1, vrf_input_2, drawKeys, sender) {
        var provider, transactionBlock, target, BLS, PRIVATE_KEY, draw_private_key, bls_signature_1, bls_signature_2, transactionBlockArguments, results, bytes, reader, answer_1, result_1, answer_2, result_2, exp, result;
        if (sender === void 0) { sender = "0xb6c7e3b1c61ee81516a8317f221daa035f1503e0ac3ae7a50b61834bc7a3ead9"; }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    provider = new client_1.SuiClient({ url: (0, client_1.getFullnodeUrl)(network) });
                    transactionBlock = new transactions_1.TransactionBlock();
                    target = "".concat(packageId, "::tails_exp::simulate_game");
                    return [4 /*yield*/, (0, bls_signatures_1.default)()];
                case 1:
                    BLS = _a.sent();
                    PRIVATE_KEY = Uint8Array.from(drawKeys[network][index]);
                    draw_private_key = BLS.PrivateKey.from_bytes(PRIVATE_KEY, true);
                    bls_signature_1 = BLS.BasicSchemeMPL.sign(draw_private_key, Uint8Array.from(vrf_input_1)).serialize();
                    bls_signature_2 = BLS.BasicSchemeMPL.sign(draw_private_key, Uint8Array.from(vrf_input_2)).serialize();
                    transactionBlockArguments = [
                        transactionBlock.object(registry),
                        transactionBlock.pure(index),
                        transactionBlock.pure(amount),
                        transactionBlock.pure(guess_1),
                        transactionBlock.pure(larger_than_1),
                        transactionBlock.pure(guess_2),
                        transactionBlock.pure(larger_than_2),
                        transactionBlock.pure(uint8ArrayToBCSStringArray(Uint8Array.from(vrf_input_1))),
                        transactionBlock.pure(uint8ArrayToBCSStringArray(Uint8Array.from(vrf_input_2))),
                        transactionBlock.pure(uint8ArrayToBCSStringArray(bls_signature_1)),
                        transactionBlock.pure(uint8ArrayToBCSStringArray(bls_signature_2)),
                    ];
                    transactionBlock.moveCall({
                        target: target,
                        typeArguments: [],
                        arguments: transactionBlockArguments,
                    });
                    return [4 /*yield*/, provider.devInspectTransactionBlock({ transactionBlock: transactionBlock, sender: sender })];
                case 2:
                    results = (_a.sent()).results;
                    bytes = results[results.length - 1].returnValues[0][0];
                    reader = new bcs_1.BcsReader(new Uint8Array(bytes));
                    // vector[
                    //     answer_1,
                    //     result_1,
                    //     answer_2,
                    //     result_2,
                    //     exp
                    // ]
                    // skip vector length byte first
                    reader.read8();
                    answer_1 = reader.read64();
                    result_1 = reader.read64();
                    answer_2 = reader.read64();
                    result_2 = reader.read64();
                    exp = reader.read64();
                    result = {
                        answer_1: answer_1,
                        result_1: result_1,
                        answer_2: answer_2,
                        result_2: result_2,
                        exp: exp,
                    };
                    return [2 /*return*/, result];
            }
        });
    });
}
function uint8ArrayToBCSStringArray(uint8Array) {
    var result = [];
    for (var i = 0; i < uint8Array.length; i++) {
        // Assume each byte is a UTF-8 character
        var character = String.fromCharCode(uint8Array[i]);
        // Convert character to its BCS representation (you need to implement this part)
        var bcsRepresentation = encodeToBCS(character);
        // Add BCS representation to the result array
        result.push(bcsRepresentation);
    }
    return result;
}
// Function to encode a character to its BCS representation
function encodeToBCS(character) {
    // You need to implement this part based on BCS encoding rules
    // This is a placeholder; the actual implementation depends on BCS specifications
    return character.charCodeAt(0).toString();
}
