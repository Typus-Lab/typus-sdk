import configs from "../../../config.json";
import { SuiClient } from "@mysten/sui.js/client";
import { getStakingInfo } from "../../../utils/tails-staking/view-function";

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
        user: "0x7f13e7548f1d0a911e2bdc4892b0b3258fa3fa60ac512f17b828e4d012459d20",
    });
    console.log(JSON.stringify(result, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));
})();
