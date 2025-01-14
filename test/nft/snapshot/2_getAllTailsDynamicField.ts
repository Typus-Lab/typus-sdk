import { SuiClient } from "@mysten/sui/client";
import * as fs from "fs";
import { TypusConfig } from "src/utils";
import { getTailsDynamicField } from "src/typus-nft";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    let provider = new SuiClient({ url: config.rpcEndpoint });

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
