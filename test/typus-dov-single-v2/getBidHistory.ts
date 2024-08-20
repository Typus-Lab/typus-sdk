import { TypusConfig } from "src/utils";
import { getVaultHistoryEvents, parseBidEvents, getVaults } from "src/typus-dov-single-v2";
import { SuiClient } from "@mysten/sui.js/client";
const config = TypusConfig.default("TESTNET");

const provider = new SuiClient({
    url: config.rpcEndpoint,
});

(async () => {
    const vaults = await getVaults(provider, config.package.dovSingle, config.registry.dov.dovSingle, []);
    const datas = await getVaultHistoryEvents(provider, config.packageOrigin.dovSingle, 1704931200000);

    const bidEvents = await parseBidEvents(datas, 1705017600000);
    console.log(20);
    bidEvents.get("20")?.forEach((b) => {
        console.log(`${b.signer} ${b.size}`);
    });
    console.log(4);
    bidEvents.get("4")?.forEach((b) => {
        console.log(`${b.signer} ${b.size}`);
    });
})();
