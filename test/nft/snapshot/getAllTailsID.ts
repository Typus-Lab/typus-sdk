import "@/utils/load_env";
import config_v2 from "../../../mainnet.json";
import { getTails } from "../../../utils/typus-nft/fetch";
import { SuiClient, SuiEventFilter } from "@mysten/sui.js/client";
import * as fs from "fs";

const provider = new SuiClient({ url: config_v2.RPC_ENDPOINT });

(async () => {
    var hasNextPage = true;
    var cursor: any | undefined = undefined;

    const nftIDs: string[] = [];

    while (hasNextPage) {
        var result = await provider.queryEvents({
            query: { MoveEventType: `${config_v2.NFT_PACKAGE_ORIGIN}::typus_nft::MintEvent` },
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
