import { getVaultHistoryFromDB, VaultHistory } from "src/typus-dov-single-v2";

// let provider = new SuiClient({
//     url: config.rpcEndpoint,
// });

(async () => {
    // letdatas = await getVaultHistoryEvents(provider, config.packageOrigin.dovSingle, 1702278000000);
    // letgroupEvents = await parseGroupEvents(datas);
    // letvaultHistory = await parseVaultHistory(groupEvents);

    let index = undefined;
    let startTs = "1708300420000";
    let endTs = "1708340420000";
    let vaultHistory = await getVaultHistoryFromDB(index, startTs, endTs);
    console.log(vaultHistory);

    // writeResultToJson(vaultHistory, "vaultHistory.json");
})();

import * as fs from "fs";

function writeResultToJson(result: Map<string, Map<string, VaultHistory | undefined>>, filePath: string): void {
    let resultObject: { [key: string]: { [key: string]: VaultHistory | undefined } } = {};
    result.forEach((innerMap, outerKey) => {
        let innerObject: { [key: string]: VaultHistory | undefined } = {};

        innerMap.forEach((vaultHistory, innerKey) => {
            innerObject[innerKey] = vaultHistory;
        });

        resultObject[outerKey] = innerObject;
    });
    let jsonString = JSON.stringify(resultObject, null, 2);
    fs.writeFileSync(filePath, jsonString, "utf-8");
}
