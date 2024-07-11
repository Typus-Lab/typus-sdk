import "@/utils/load_env";
import config_v2 from "../../../mainnet.json";
import { getKioskOwner, getTailsDynamicField, getTailsKiosk } from "../../../utils/typus-nft/fetch";
import { SuiClient, SuiEventFilter } from "@mysten/sui.js/client";
import * as fs from "fs";

const provider = new SuiClient({ url: config_v2.RPC_ENDPOINT });

(async () => {
    const raw = fs.readFileSync("tails.csv", "utf-8");
    // console.log(nfts);

    const nfts = JSON.parse(raw);

    const [tails, tailsToDynamicField] = await getTailsDynamicField(
        provider,
        nfts.map((nft) => nft.id)
    );
    // console.log(tailsToDynamicField);

    const tailsToDynamicFieldArray = Array.from(tailsToDynamicField.entries());

    fs.writeFileSync(
        "tailsDynamicField.csv",
        JSON.stringify(
            tailsToDynamicFieldArray.map(([k, v], i) => {
                let t: any = tails.at(i)!;
                t.DynamicField = v;
                const attributes: [string, string][] = Array.from(t.attributes.entries());
                for (let [k, v] of attributes) {
                    t[k] = v;
                }
                const u64_padding: [string, string][] = Array.from(t.u64_padding.entries());
                for (let [k, v] of u64_padding) {
                    t[k] = v;
                }
                return t;
            }),
            null,
            2
        ),
        "utf-8"
    );
})();
