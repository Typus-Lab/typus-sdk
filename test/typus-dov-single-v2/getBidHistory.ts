import config from "../../mainnet.json";
import { getVaultHistoryEvents, parseBidEvents } from "../../utils/typus-dov-single-v2/vault-history";
import { getVaults } from "../../utils/typus-dov-single-v2/view-function";
import { SuiClient } from "@mysten/sui.js/client";

const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});

(async () => {
    const vaults = await getVaults(provider, config.SINGLE_COLLATERAL_PACKAGE, config.SINGLE_COLLATERAL_REGISTRY, []);
    const datas = await getVaultHistoryEvents(provider, config.SINGLE_COLLATERAL_PACKAGE_ORIGIN, 1704931200000);

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
