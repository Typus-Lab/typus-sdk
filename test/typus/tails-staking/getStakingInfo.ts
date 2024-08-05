import configs from "config.json";
import { SuiClient } from "@mysten/sui.js/client";
import { getStakingInfo } from "src/typus/tails-staking";

const config = configs.MAINNET;
const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});

(async () => {
    let result = await getStakingInfo({
        provider,
        typusPackageId: config.PACKAGE.TYPUS,
        typusEcosystemVersion: config.OBJECT.TYPUS_VERSION,
        typusTailsStakingRegistry: config.REGISTRY.TAILS_STAKING,
        user: "0x603272d1e61de086a18751482684f882642eb080144aee425c4c34b5e56470b0",
    });
    console.log(JSON.stringify(result, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));
})();
