import { BcsWriter } from '@mysten/bcs';
import { sha3_256 } from "js-sha3"
import encryptpwd from "encrypt-with-password";
import random  from "random-bigint"

/**
 * Encrypt bid info
 * @param {bigint} price bid price
 * @param {bigint} size bid size
 * @param {string} secret secret to encrypt the bid info
 * @returns the first element is the random number generated during bid encryption process,
 * and the second is bid ciphertext
 */
export function encryptBid(price: bigint, size: bigint, secret: string): [bigint, string] {
    let randomNumber = random(64)
    let msg = constructBidInfo(price, size, randomNumber)
    let res = encryptpwd.encrypt(msg.toString("hex"), secret)
    return [randomNumber, res]
}

/**
 * Decrypt to bid info
 * @param {string} encryptedBid bid ciphertext
 * @param {string} secret secret to decrypt the ciphertext to plain bid info
 * @returns [bid price, bid size, blindingFactor]
 */
export function decryptBid(encryptedBid: string, secret: string): [BigInt, BigInt, BigInt] {
    let res = encryptpwd.decrypt(encryptedBid, secret)
    let buffer = Buffer.from(res, "hex")
    let price = buffer.slice(0, buffer.length / 3).readBigUInt64LE(0)
    let size = buffer.slice(buffer.length / 3, buffer.length / 3 * 2).readBigUInt64LE(0)
    let blindingFactor = buffer.slice(buffer.length / 3 * 2).readBigUInt64LE(0)
    return [price, size, blindingFactor]
}

/**
 * Get hash of bid info  - should be same as onchain
 * @param {bigint} price bid price
 * @param {bigint} size bid size
 * @param {bigint} blindingFactor a random number
 * @returns {string} the hash of bid info
 */
export function getBidHash(price: bigint, size: bigint, blindingFactor: bigint): string {
    let msg = constructBidInfo(price, size, blindingFactor)
    let hash = sha3_256(msg.toBytes());
    return hash
}

/**
 * Serialize bid info to BCS buffer - should be same as onchain
 * @param {bigint} price bid price
 * @param {bigint} size bid size
 * @param {bigint} blindingFactor a random number
 * @returns {BcsWriter} the serialized bid info
 */
export function constructBidInfo(price: bigint, size: bigint, blindingFactor: bigint): BcsWriter {
    return new BcsWriter().write64(price).write64(size).write64(blindingFactor)
}


