import "src/utils/load_env";
import { TypusConfig } from "src/utils";
import { getRankings, Rankings } from "src/typus/leaderboard";
import * as fs from "fs";
import { SuiClient } from "@mysten/sui.js/client";

(async () => {
    let response = await fetch(
        "https://api.sm.xyz/v1/collections/holders/0x034c162f6b594cb5a1805264dd01ca5d80ce3eca6522e6ee37fd9ebfb9d3ddca::factory::PrimeMachin/",
        {
            method: "GET",
        }
    );
    let response_json = await response.json();
    // @ts-ignore
    let response_array: [string, string][] = Object.entries(response_json["data"]).map(([key, value]) => [key, value.toString()]);
    saveToFile(["user", "num"], response_array, "prime_machin_leaderboard.csv");
    const sm_holders = response_array.map((item) => item[0]);

    let config = await TypusConfig.default("MAINNET", null);
    let provider = new SuiClient({ url: config.rpcEndpoint });

    var parentId = "0x8d2b077d51c2b40ab1a8d59f12e29a3c80fdccebcf8e4ef90fe857c197b0cfcc";
    var filename = "depositor_program.csv";
    var datas = await getRankingsV2(provider, parentId, filename);

    var new_datas = datas.map((data) => [
        data[0],
        sm_holders.includes(data[0]),
        data[1],
        sm_holders.includes(data[0]) ? Number(data[1]) * 1.2 : data[1],
    ]);

    saveToFile(["user", "sm_holder", "score", "final_score"], new_datas, filename);

    var parentId = "0xcbc8ba339173e5696e0194d1ef00d843fad9f5fe0c6c7cbf48df38f88a1fc10c";
    var filename = "bidding_leaderboard.csv";
    var datas = await getRankingsV2(provider, parentId, filename);

    var new_datas = datas.map((data) => [
        data[0],
        sm_holders.includes(data[0]),
        data[1],
        sm_holders.includes(data[0]) ? Number(data[1]) * 1.2 : data[1],
    ]);

    saveToFile(["user", "sm_holder", "score", "final_score"], new_datas, filename);
})();

function saveToFile(headers: string[], datas: any[][], filename: string) {
    const csvRows = [
        headers.join(","),
        ...datas.map((data) => {
            return data.join(",");
        }),
    ];

    const csvContent = csvRows.join("\n");
    fs.writeFileSync(filename, csvContent);
}

async function getRankingsV2(provider: SuiClient, parentId: string, filename: string): Promise<[string, string][]> {
    var result = await provider.getDynamicFields({
        parentId,
    });

    var objects = await provider.multiGetObjects({
        ids: result.data.map((item) => item.objectId),
        options: { showContent: true },
    });

    // @ts-ignore
    var datas = objects.map((item) => [item.data?.content.fields.name, item.data?.content.fields.value] as [string, string]);

    while (result.hasNextPage) {
        result = await provider.getDynamicFields({
            parentId,
            cursor: result.nextCursor,
        });

        objects = await provider.multiGetObjects({
            ids: result.data.map((item) => item.objectId),
            options: { showContent: true },
        });

        // @ts-ignore
        datas = datas.concat(objects.map((item) => [item.data?.content.fields.name, item.data?.content.fields.value]));
    }

    return datas;
}
