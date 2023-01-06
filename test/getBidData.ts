import { getBid } from "../utils/auction/getBid"

(async () => {
    let vault = "0x581011726bf37fa444edb53f72abb54de547c7f5"
    let bid = await getBid(vault)
    console.log(bid)
})()