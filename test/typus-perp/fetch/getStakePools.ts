import { TypusConfig } from "src/utils";
import { SuiClient } from "@mysten/sui.js/client";
import { getStakePools } from "src/typus-perp";

const config = TypusConfig.default("TESTNET");

const provider = new SuiClient({
    url: config.rpcEndpoint,
});

(async () => {
    const stakePools = await getStakePools(provider, config);
    console.log(stakePools[0]); // 1 lpPool inclueded
})();
