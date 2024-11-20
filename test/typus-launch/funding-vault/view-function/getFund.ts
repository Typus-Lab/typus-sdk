import { getFund } from "src/typus-launch/funding-vault";
import { TypusConfig } from "src/utils";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    let vaults = await getFund(config, { indexes: ["0"], user: "0x603272d1e61de086a18751482684f882642eb080144aee425c4c34b5e56470b0" });
    console.log(JSON.stringify(vaults, null, 2));
})();
