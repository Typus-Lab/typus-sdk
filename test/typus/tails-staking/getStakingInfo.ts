import { TypusConfig } from "src/utils";
import { SuiClient } from "@mysten/sui.js/client";
import { getStakingInfo } from "src/typus/tails-staking";

const config = TypusConfig.default("MAINNET");
const provider = new SuiClient({
    url: config.rpcEndpoint,
});

(async () => {
    let result = await getStakingInfo({
        provider,
        typusPackageId: config.package.typus,
        typusEcosystemVersion: config.version.typus,
        typusTailsStakingRegistry: config.registry.typus.tailsStaking,
        user: "0x603272d1e61de086a18751482684f882642eb080144aee425c4c34b5e56470b0",
    });
    console.log(JSON.stringify(result, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));
})();
