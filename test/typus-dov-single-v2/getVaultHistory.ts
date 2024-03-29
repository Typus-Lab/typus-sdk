import config from "../../mainnet.json";
import {
    getVaultHistoryEvents,
    parseGroupEvents,
    parseVaultHistory,
    getVaultHistoryFromDB,
    VaultHistory,
} from "../../utils/typus-dov-single-v2/vault-history";
import { SuiClient } from "@mysten/sui.js/client";

const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});

(async () => {
    // const datas = await getVaultHistoryEvents(provider, config.SINGLE_COLLATERAL_PACKAGE_ORIGIN, 1702278000000);
    // const groupEvents = await parseGroupEvents(datas);
    // const vaultHistory = await parseVaultHistory(groupEvents);

    const index = undefined;
    const startTs = "1708300420000";
    const endTs = "1708340420000";
    const vaultHistory = await getVaultHistoryFromDB(index, startTs, endTs);
    console.log(vaultHistory);

    // writeResultToJson(vaultHistory, "vaultHistory.json");
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
