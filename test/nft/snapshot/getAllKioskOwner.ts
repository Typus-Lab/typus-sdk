import { SuiClient } from "@mysten/sui.js/client";
import * as fs from "fs";
import { TypusConfig } from "src/utils";
import { getKioskOwner } from "src/typus-nft";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    let provider = new SuiClient({ url: config.rpcEndpoint });

    const raw = fs.readFileSync("DynamicFieldToKiosk.csv", "utf-8");
    const dataArray = JSON.parse(raw);
    const DynamicFieldToKiosk = dataArray.reduce((map, obj) => {
        map.set(obj.DynamicField, obj.kiosk);
        return map;
    }, new Map<string, string>());

    const KioskToOwner = await getKioskOwner(provider, DynamicFieldToKiosk);
    console.log(KioskToOwner);

    const KioskToOwnerArray = Array.from(KioskToOwner.entries());

    fs.writeFileSync(
        "KioskToOwner.csv",
        JSON.stringify(
            KioskToOwnerArray.map(([k, v]) => {
                let t = { kiosk: k, owner: v };
                return t;
            }),
            null,
            2
        ),
        "utf-8"
    );
})();
