import * as json2csv from "json2csv";
import { normalizeSuiAddress } from "@mysten/sui.js/utils";
import * as fs from "fs";

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
