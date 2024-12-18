import { getOngoingTipVotes } from "src/typus-launch/improvement-proposal";
import { TypusConfig } from "src/utils";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    // let config = TypusConfig.local("../typus-config/config-testnet.json");
    let user = "0x603272d1e61de086a18751482684f882642eb080144aee425c4c34b5e56470b0";
    let vaults = await getOngoingTipVotes(config, { user });
    console.log(JSON.stringify(vaults, null, 2));
})();
