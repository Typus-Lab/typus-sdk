import { SuiClient } from "@mysten/sui.js/client";
import * as fs from "fs";
import configs from "../../../config.json";
import { getTailsDynamicField } from "../../../src";
import "../../src/utils/load_env";
const config = configs.TESTNET;

const provider = new SuiClient({ url: config.RPC_ENDPOINT });

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
