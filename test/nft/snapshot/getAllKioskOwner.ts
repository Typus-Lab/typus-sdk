import "@/utils/load_env";
import config_v2 from "../../../mainnet.json";
import { getKioskOwner, getTailsDynamicField, getTailsKiosk } from "../../../utils/typus-nft/fetch";
import { SuiClient, SuiEventFilter } from "@mysten/sui.js/client";
import * as fs from "fs";
import { KioskClient, Network } from "@mysten/kiosk";

const provider = new SuiClient({ url: config_v2.RPC_ENDPOINT });

(async () => {
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
