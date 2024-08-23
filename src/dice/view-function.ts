import { TransactionBlock } from "@mysten/sui.js/transactions";
import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";
import { BcsReader } from "@mysten/bcs";
import loadBls from "bls-signatures";
import { SENDER } from "src/constants";
import { TypusConfig } from "src/utils";

export interface DrawResult {
    answer_1: string;
    result_1: string;
    answer_2: string;
    result_2: string;
    exp: string;
}

export async function simulateGame(
    config: TypusConfig,
    input: {
        network: "mainnet" | "testnet";
        module: "tails_exp" | "combo_dice";
        index: string;
        amount: string;
        guess_1: string;
        larger_than_1: boolean;
        guess_2: string;
        larger_than_2: boolean;
        vrf_input_1: number[];
        vrf_input_2: number[];
        drawKeys;
    }
): Promise<DrawResult> {
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let transactionBlock = new TransactionBlock();
    let BLS = await loadBls();
    let PRIVATE_KEY = Uint8Array.from(input.drawKeys[input.network][input.index]); // your draw key. TODO: use env for cloud function
    let draw_private_key = BLS.PrivateKey.from_bytes(PRIVATE_KEY, true);
    let bls_signature_1 = BLS.BasicSchemeMPL.sign(draw_private_key, Uint8Array.from(input.vrf_input_1)).serialize();
    let bls_signature_2 = BLS.BasicSchemeMPL.sign(draw_private_key, Uint8Array.from(input.vrf_input_2)).serialize();
    let registry = "";
    switch (input.module) {
        case "tails_exp":
            registry = config.registry.dice.tailsExp;
            break;
        case "combo_dice":
            registry = config.registry.dice.comboDice;
            break;
        default:
            break;
    }
    transactionBlock.moveCall({
        target: `${config.package.dice}::${input.module}::simulate_game`,
        typeArguments: [],
        arguments: [
            transactionBlock.object(registry),
            transactionBlock.pure(input.index),
            transactionBlock.pure(input.amount),
            transactionBlock.pure(input.guess_1),
            transactionBlock.pure(input.larger_than_1),
            transactionBlock.pure(input.guess_2),
            transactionBlock.pure(input.larger_than_2),
            transactionBlock.pure(uint8ArrayToBCSStringArray(Uint8Array.from(input.vrf_input_1))),
            transactionBlock.pure(uint8ArrayToBCSStringArray(Uint8Array.from(input.vrf_input_2))),
            transactionBlock.pure(uint8ArrayToBCSStringArray(bls_signature_1)),
            transactionBlock.pure(uint8ArrayToBCSStringArray(bls_signature_2)),
        ],
    });
    let results = (await provider.devInspectTransactionBlock({ transactionBlock, sender: SENDER })).results;
    // @ts-ignore
    let bytes = results[results.length - 1].returnValues[0][0];
    let reader = new BcsReader(new Uint8Array(bytes));
    // vector[
    //     answer_1,
    //     result_1,
    //     answer_2,
    //     result_2,
    //     exp
    // ]
    // skip vector length byte first
    reader.read8();
    let answer_1 = reader.read64();
    let result_1 = reader.read64();
    let answer_2 = reader.read64();
    let result_2 = reader.read64();
    let exp = reader.read64();
    let result = {
        answer_1,
        result_1,
        answer_2,
        result_2,
        exp,
    };

    return result;
}

function uint8ArrayToBCSStringArray(uint8Array: Uint8Array): string[] {
    let result: string[] = [];

    for (let i = 0; i < uint8Array.length; i++) {
        // Assume each byte is a UTF-8 character
        let character = String.fromCharCode(uint8Array[i]);

        // Convert character to its BCS representation (you need to implement this part)
        let bcsRepresentation = encodeToBCS(character);

        // Add BCS representation to the result array
        result.push(bcsRepresentation);
    }

    return result;
}

// Function to encode a character to its BCS representation
function encodeToBCS(character: string): string {
    // You need to implement this part based on BCS encoding rules
    // This is a placeholder; the actual implementation depends on BCS specifications
    return character.charCodeAt(0).toString();
}
