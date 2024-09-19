import { SuiClient } from "@mysten/sui.js/client";
import * as fs from "fs";
import { TypusConfig } from "src/utils";
import { getTailsKiosk } from "src/typus-nft";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    let provider = new SuiClient({ url: config.rpcEndpoint });

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
