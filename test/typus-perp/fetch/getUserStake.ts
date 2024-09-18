import { TypusConfig } from "src/utils";
import { getUserStake } from "src/typus-perp";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);

    let user = "0xb6b29d18c728503fb59cc59ecbe52611d26b2746b2cedc8d38cabf81428cae6c";
    console.log(user);

    let stakes = await getUserStake(config, user);
    console.log(stakes);
    // unsubscribedTsMs, unlockedTsMs in deactivatingShares
})();
