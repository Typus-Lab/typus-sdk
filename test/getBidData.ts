import { getBid } from "../utils/auction/getBid"

(async () => {
    let vault = "0x1e5807f118c2fc7e0f74eeb439b34f448532a900"
    let bid = await getBid(vault)
    console.log(bid)
})()