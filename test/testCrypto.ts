import { getBidHash } from "../utils/auction/sealedAuction"

(async () => {
    let hash = getBidHash(100, 2, 123456)
    console.log("hash: ", hash)
})()