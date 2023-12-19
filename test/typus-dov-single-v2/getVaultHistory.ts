import config from "../../mainnet.json";
import { getVaultHistoryEvents, parseGroupEvents, parseVaultHistory, VaultHistory } from "../../utils/typus-dov-single-v2/vault-history";
import { getVaults } from "../../utils/typus-dov-single-v2/view-function";
import { SuiClient } from "@mysten/sui.js/client";

const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});

(async () => {
    const vaults = await getVaults(provider, config.SINGLE_COLLATERAL_PACKAGE, config.SINGLE_COLLATERAL_REGISTRY, []);
    const datas = await getVaultHistoryEvents(provider, config.SINGLE_COLLATERAL_PACKAGE_ORIGIN, 1702278000000);
    const groupEvents = await parseGroupEvents(datas);
    const vaultHistory = await parseVaultHistory(groupEvents);
    console.log(vaultHistory);

    writeResultToJson(vaultHistory, "vaultHistory.json");
})();

import * as fs from "fs";

function writeResultToJson(result: Map<string, Map<string, VaultHistory | undefined>>, filePath: string): void {
    const resultObject: { [key: string]: { [key: string]: VaultHistory | undefined } } = {};
    result.forEach((innerMap, outerKey) => {
        const innerObject: { [key: string]: VaultHistory | undefined } = {};

        innerMap.forEach((vaultHistory, innerKey) => {
            innerObject[innerKey] = vaultHistory;
        });

        resultObject[outerKey] = innerObject;
    });
    const jsonString = JSON.stringify(resultObject, null, 2);
    fs.writeFileSync(filePath, jsonString, "utf-8");
}
