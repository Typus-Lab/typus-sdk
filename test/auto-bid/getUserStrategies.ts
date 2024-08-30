import "src/utils/load_env";
import { TypusConfig } from "src/utils";
import { getUserStrategies } from "src/auto-bid";

(async () => {
    let config = await TypusConfig.default("TESTNET");

    let user = "0x8b21d27b7de562512b71ced257825f61fe51f2802e2896312ddc32764ed28cd5";
    let strategies = await getUserStrategies(config, { user });
    console.log(strategies);
})();
