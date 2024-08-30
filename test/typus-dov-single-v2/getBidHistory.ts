import { TypusConfig } from "src/utils";
import { getVaultHistoryEvents, parseBidEvents } from "src/typus-dov-single-v2";

(async () => {
    let config = await TypusConfig.default("TESTNET");

    let datas = await getVaultHistoryEvents(config, 1704931200000);

    let bidEvents = await parseBidEvents(datas, 1705017600000);
    console.log(20);
    bidEvents.get("20")?.forEach((b) => {
        console.log(`${b.signer} ${b.size}`);
    });
    console.log(4);
    bidEvents.get("4")?.forEach((b) => {
        console.log(`${b.signer} ${b.size}`);
    });
})();
