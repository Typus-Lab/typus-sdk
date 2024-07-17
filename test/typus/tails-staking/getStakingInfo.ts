import configs from "../../../config.json";
import { SuiClient } from "@mysten/sui.js/client";
import { getStakingInfo } from "../../../src";

const config = configs.TESTNET;
const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});

(async () => {
    let result = await getStakingInfo({
        provider,
        typusPackageId: config.PACKAGE.TYPUS,
        typusEcosystemVersion: config.OBJECT.TYPUS_VERSION,
        typusTailsStakingRegistry: config.REGISTRY.TAILS_STAKING,
        user: "0xb6b29d18c728503fb59cc59ecbe52611d26b2746b2cedc8d38cabf81428cae6c",
    });
    console.log(JSON.stringify(result, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));
})();
