import { SuiClient } from "@mysten/sui/client";
import * as fs from "fs";
import { TypusConfig } from "src/utils";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    let provider = new SuiClient({ url: config.rpcEndpoint });

    var hasNextPage = true;
    var cursor: any | undefined = undefined;

    const nftIDs: string[] = [];

    while (hasNextPage) {
        var result = await provider.queryEvents({
            query: { MoveEventType: `${config.packageOrigin.nft}::typus_nft::MintEvent` },
            order: "descending",
            cursor,
        });
        // console.log(result);

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
