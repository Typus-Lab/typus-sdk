import { SuiClient } from "@mysten/sui.js/client";
import * as fs from "fs";
import configs from "../../../config.json";
import { getTails } from "../../../src";
import "../../src/utils/load_env";
const config = configs.TESTNET;

const provider = new SuiClient({ url: config.RPC_ENDPOINT });

(async () => {
    var hasNextPage = true;
    var cursor: any | undefined = undefined;

    const nftIDs: string[] = [];

    while (hasNextPage) {
        var result = await provider.queryEvents({
            query: { MoveEventType: `${config.PACKAGE_ORIGIN.NFT}::typus_nft::MintEvent` },
            order: "descending",
            cursor,
        });
        console.log(result);

        hasNextPage = result.hasNextPage;
        cursor = result.nextCursor;

        // @ts-ignore
        nftIDs = nftIDs.concat(result.data.map((d) => d.parsedJson.id));
    }

    console.log(nftIDs.length);

    fs.writeFileSync(
        "tails.csv",
        JSON.stringify(
            nftIDs.map((d) => {
                let t: Tails = { id: d, owner: null, level: null };
                return t;
            }),
            null,
            2
        ),
        "utf-8"
    );
})();

interface Tails {
    id: string;
    owner: string | null;
    level: string | null;
}
