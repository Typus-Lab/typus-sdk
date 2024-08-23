import { TypusConfig } from "src/utils";
import { getStakingInfo } from "src/typus/tails-staking";

(async () => {
    let config = TypusConfig.default("TESTNET");

    let result = await getStakingInfo(config, {
        user: "0x603272d1e61de086a18751482684f882642eb080144aee425c4c34b5e56470b0",
    });
    console.log(JSON.stringify(result, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));
})();
