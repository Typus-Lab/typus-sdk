import { Transaction } from "@mysten/sui/transactions";
import { SuiClient, getFullnodeUrl } from "@mysten/sui/client";
import { BcsReader } from "@mysten/bcs";
import loadBls from "bls-signatures";
import { SENDER } from "src/constants";
import { TypusConfig } from "src/utils";

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
