import "@/utils/load_env";
import config_v2 from "../../../mainnet.json";
import { getKioskOwner, getTailsDynamicField, getTailsKiosk } from "../../../utils/typus-nft/fetch";
import { SuiClient, SuiEventFilter } from "@mysten/sui.js/client";
import * as fs from "fs";
import * as json2csv from "json2csv";
import { normalizeSuiAddress } from "@mysten/sui.js/utils";

const provider = new SuiClient({ url: config_v2.RPC_ENDPOINT });

(async () => {
    var raw = fs.readFileSync("tailsDynamicField.csv", "utf-8");
    var tailsToDynamicFieldArray = JSON.parse(raw);

    var raw = fs.readFileSync("indexer.csv", "utf-8");
    var dataArray = JSON.parse(raw);

    const idToOwner: Map<string, string> = dataArray.listings.reduce((map, obj) => {
        map.set(obj.nft.token_id, obj.nft.owner);
        return map;
    }, new Map<string, string>());

    for (let obj of dataArray.nfts) {
        idToOwner.set(obj.token_id, obj.owner);
    }

    console.log(idToOwner.size);

    const result = tailsToDynamicFieldArray.map((x) => {
        const owner = idToOwner.get(x.id)!;
        x.owner = normalizeSuiAddress(owner);
        return x;
    });

    const csv_data = json2csv.parse(result);
    const csv_file_path = "TailsOwner.csv";
    fs.writeFileSync(csv_file_path, csv_data, "utf-8");
})();
