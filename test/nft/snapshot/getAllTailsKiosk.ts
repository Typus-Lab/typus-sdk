import { SuiClient } from "@mysten/sui.js/client";
import * as fs from "fs";
import configs from "config.json";
import { getTailsKiosk } from "src/typus-nft";
import "src/utils/load_env";
const config = configs.TESTNET;

const provider = new SuiClient({ url: config.RPC_ENDPOINT });

(async () => {
    const raw = fs.readFileSync("tailsDynamicField.csv", "utf-8");
    const dataArray = JSON.parse(raw);
    const tailsToDynamicField = dataArray.reduce((map, obj) => {
        map.set(obj.id, obj.DynamicField);
        return map;
    }, new Map<string, string>());

    const DynamicFieldToKiosk = await getTailsKiosk(provider, tailsToDynamicField);
    console.log(DynamicFieldToKiosk);

    const DynamicFieldToKioskArray = Array.from(DynamicFieldToKiosk.entries());

    fs.writeFileSync(
        "DynamicFieldToKiosk.csv",
        JSON.stringify(
            DynamicFieldToKioskArray.map(([k, v]) => {
                let t = { DynamicField: k, kiosk: v };
                return t;
            }),
            null,
            2
        ),
        "utf-8"
    );
})();
