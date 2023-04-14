import { decryptBid, encryptBid, getBidHash } from "../utils/auction/sealedAuction"

(async () => {

    let price = BigInt(100)
    let size = BigInt(2)
    let secret = "my secret"
   
    // encrypt bid info
    let encryptedBid = encryptBid(price, size, secret)
    console.log("encryptedBid: ", encryptedBid)

    // get bid hash
    let hash = getBidHash(price, size, encryptedBid[0])
    console.log("hash: ", hash)

    // decrypt bid
    let bid = decryptBid(encryptedBid[1], "my secret")
    console.log("bid: ", bid)
})()