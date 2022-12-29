import { USER_SHARE_TABLE, COVERED_CALL_REGISTRY } from "../constants"
import { getUsersShares, UserShare } from "../utils/getUsersShares"

(async () => {
    let usersShares: UserShare[] = await getUsersShares(USER_SHARE_TABLE, COVERED_CALL_REGISTRY)
    console.log(usersShares)
})()