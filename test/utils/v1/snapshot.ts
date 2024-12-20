import "src/utils/load_env";
import { SuiClient } from "@mysten/sui/client";
import { TypusConfig } from "src/utils";
import * as fs from "fs";

(async () => {
    let config = await TypusConfig.default("MAINNET", "https://sui-mainnet.blastapi.io:443/df8b799c-1e3b-4309-b289-ddfb76cc090d");
    let provider = new SuiClient({ url: config.rpcEndpoint });

    const parentId = "0x6a355cba462b62ad9e835b889af0417e080ac7ca2d9c98105b6778d75736d7bf";

    // 如果文件不存在，先寫入表頭，然後再追加數據
    if (!fs.existsSync("v1_bid.csv")) {
        const header = ["index", "tag", "user", "exists", "value"].join(",") + "\n";
        fs.writeFileSync("v1_bid.csv", header);
    }

    var hasNextPage = true;
    var cursor: string | null = null;
    var count = 0;

    while (hasNextPage) {
        console.log(count, ",", cursor);
        var result = await provider.getDynamicFields({
            parentId,
            cursor,
        });

        hasNextPage = result.hasNextPage;
        cursor = result.nextCursor;

        var objects = await provider.multiGetObjects({
            ids: result.data.map((item) => item.objectId),
            options: { showContent: true },
        });

        var datas = objects.map((item) => {
            // @ts-ignore
            let name = item.data?.content.fields.name.fields;
            // @ts-ignore
            let value = item.data?.content.fields.value.fields;

            return [name.index, name.tag, name.user, value.exists, value.value];
        });

        console.log(cursor);
        break;

        var csvContent =
            [
                ...datas.map((data) => {
                    return data.join(",");
                }),
            ].join("\n") + "\n";

        fs.appendFileSync("v1_bid.csv", csvContent);

        count++;
    }
})();
