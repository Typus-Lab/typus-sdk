import configs from "../../config.json";
import { getVaultHistoryEvents, parseBidEvents, getVaults } from "../../src";
import { SuiClient } from "@mysten/sui.js/client";
const config = configs.TESTNET;

const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});

(async () => {
    const vaults = await getVaults(provider, config.PACKAGE.DOV_SINGLE, config.REGISTRY.DOV_SINGLE, []);
    const datas = await getVaultHistoryEvents(provider, config.PACKAGE_ORIGIN.DOV_SINGLE, 1704931200000);

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
