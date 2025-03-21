import { getTipVotes } from "src/typus-launch/improvement-proposal";
import { TypusConfig } from "src/utils";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    // let config = TypusConfig.local("../typus-config/config-testnet.json");
    let votes = await getTipVotes(config, { index: "0" });
    console.log(JSON.stringify(votes, null, 2));
})();
