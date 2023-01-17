import { MAKER_SHARE_TABLE, COVERED_CALL_REGISTRY } from "../constants"
import { MakerShare, getMakersShares } from "../utils/getMakersShares"

(async () => {
    let makersShares: MakerShare[] = await getMakersShares(MAKER_SHARE_TABLE, COVERED_CALL_REGISTRY)
    console.log(makersShares)
})()