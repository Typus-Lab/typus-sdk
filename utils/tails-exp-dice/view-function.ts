import { TransactionBlock } from "@mysten/sui.js/transactions";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { BcsReader } from "@mysten/bcs";

const signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const SENDER = signer.toSuiAddress();
const PRIVATE_KEY = Uint8Array.from([]); // your draw key. TODO: use env for cloud function

export interface DrawResult {
    answer_1: string;
    result_1: string;
    answer_2: string;
    result_2: string;
    exp: string;
}

export async function simulateGame(
    provider: SuiClient,
    packageId: string,
    registry: string,
    index: string,
    amount: string,
    guess_1: string,
    larger_than_1: boolean,
    guess_2: string,
    larger_than_2: boolean,
    vrf_input_1: Uint8Array,
    vrf_input_2: Uint8Array,
    sender = SENDER
): Promise<DrawResult> {
    let transactionBlock = new TransactionBlock();
    let target = `${packageId}::tails_exp::simulate_game` as any;

    var loadBls = require("bls-signatures");
    var BLS = await loadBls();
    let draw_private_key = BLS.PrivateKey.from_bytes(PRIVATE_KEY, true);

    let bls_signature_1 = BLS.BasicSchemeMPL.sign(draw_private_key, vrf_input_1).serialize();
    let bls_signature_2 = BLS.BasicSchemeMPL.sign(draw_private_key, vrf_input_2).serialize();

    let transactionBlockArguments = [
        transactionBlock.object(registry),
        transactionBlock.pure(index),
        transactionBlock.pure(amount),
        transactionBlock.pure(guess_1),
        transactionBlock.pure(larger_than_1),
        transactionBlock.pure(guess_2),
        transactionBlock.pure(larger_than_2),
        transactionBlock.pure(uint8ArrayToBCSStringArray(vrf_input_1)),
        transactionBlock.pure(uint8ArrayToBCSStringArray(vrf_input_2)),
        transactionBlock.pure(uint8ArrayToBCSStringArray(bls_signature_1)),
        transactionBlock.pure(uint8ArrayToBCSStringArray(bls_signature_2)),
    ];
    transactionBlock.moveCall({
        target,
        typeArguments: [],
        arguments: transactionBlockArguments,
    });
    let results = (await provider.devInspectTransactionBlock({ transactionBlock, sender })).results;
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
    const result: string[] = [];

    for (let i = 0; i < uint8Array.length; i++) {
      // Assume each byte is a UTF-8 character
      const character = String.fromCharCode(uint8Array[i]);

      // Convert character to its BCS representation (you need to implement this part)
      const bcsRepresentation = encodeToBCS(character);

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
