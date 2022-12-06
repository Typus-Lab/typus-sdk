import CryptoJS from "crypto-js";
import { BcsWriter } from '@mysten/bcs';
import { sha3_256 } from "js-sha3"
import { randomInt } from "crypto"

// Encrypt bid info
export function encryptBid(price: number, size: number, secret: string): [number, string] {
    let rdnNumber = randomInt(Number.MAX_SAFE_INTEGER)
    let msg = constructBidInfo(price, size, rdnNumber)
    let encryptedBid = CryptoJS.AES.encrypt(msg, secret).toString();
    return [rdnNumber, encryptedBid]
}

// Decrypt to bid info
export function decryptBid(encryptMsg: string, secret: string): [number, number, number] {
    let bytes = CryptoJS.AES.decrypt(encryptMsg, secret).toString();
    let price = bytes.slice(0, bytes.length / 3)
    let size = bytes.slice(bytes.length / 3, bytes.length / 3 * 2)
    let blindingFactor = bytes.slice(bytes.length / 3 * 2)
    return [parseInt(price), parseInt(size), parseInt(blindingFactor)]
}

// get hash of bid info  - should be same as onchain
export function getBidHash(price: number, size: number, blindingFactor: number): any {
    let msg = constructBidInfo(price, size, blindingFactor)
    let hash = sha3_256(msg.toBytes());
    return hash
}

// serialize bid info to BCS buffer - should be same as onchain
export function constructBidInfo(price: number, size: number, blindingFactor: number): BcsWriter {
    return new BcsWriter().write64(price).write64(size).write64(blindingFactor)
}


