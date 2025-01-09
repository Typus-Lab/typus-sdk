import "src/utils/load_env";
import { SuiClient } from "@mysten/sui/client";
import { TypusConfig } from "src/utils";
import * as fs from "fs";
import { typeArgToAsset } from "src/constants";

(async () => {
    let config = await TypusConfig.default("MAINNET", "https://sui-mainnet.blastapi.io:443/df8b799c-1e3b-4309-b289-ddfb76cc090d");
    let provider = new SuiClient({ url: config.rpcEndpoint });

    const parentId = "0xb44c0fa1ab40f7699be3dce02475965a636ed850348435abb3b797b273f6c551";

    var result = await provider.getDynamicFields({
        parentId,
        cursor: null,
    });

    const vaults = new Map<number, Vault>();

    result.data.forEach((x) => {
        if (x.objectType.includes("PortfolioVault")) {
            let tokens = x.objectType.split("<")[1].split(", ");

            let vault: Vault = {
                d_token: typeArgToAsset(tokens[0]),
                b_token: typeArgToAsset(tokens[1]),
            };
            vaults.set(Number(x.name.value), vault);
        }
    });

    console.log(vaults);

    const raw = fs.readFileSync("v1_deposit.csv", "utf-8");
    const lines = raw.split("\n");
    const headers = lines.shift();
    console.log(headers);
    console.log(lines.length);
    const shares = lines
        .map((l) => {
            let x = l.split(",");
            return {
                index: parseInt(x[0]),
                tag: parseInt(x[1]),
                user: x[2],
                exists: x[3] === "true",
                value: parseFloat(x[4]),
            } as Share;
        })
        .filter((s) => s.exists);
    console.log(shares.length);

    const userMap = new Map<string, Map<string, number>>();
    const allTokens = new Set<string>();

    shares.forEach((s) => {
        let token = vaults.get(s.index)!.d_token;
        allTokens.add(token);
        let value = s.value;
        if (!userMap.has(s.user)) {
            let tokenMap = new Map<string, number>();
            tokenMap.set(token, value);
            userMap.set(s.user, tokenMap);
        } else {
            let tokenMap = userMap.get(s.user)!;
            if (!tokenMap.has(token)) {
                tokenMap.set(token, value);
            } else {
                let v0 = tokenMap.get(token)!;
                tokenMap.set(token, v0 + value);
            }
            userMap.set(s.user, tokenMap);
        }
    });

    console.log(userMap.size);
    // console.log(userMap.get("0xd15f079d5f60b8fdfdcf3ca66c0d3473790c758b04b6418929d5d2991c5443ee")!);
    // console.log(userMap);

    const tokenList = Array.from(allTokens); // 動態生成 token 名稱列表

    // 2. 準備 CSV 標題
    const csvRows: string[] = ["address," + tokenList.join(",")];

    // 3. 遍歷資料，生成每行數據
    for (const [address, tokenMap] of userMap.entries()) {
        const row = [address];
        for (const token of tokenList) {
            // 填充值，如果 token 不存在則為空
            row.push(tokenMap.get(token)?.toFixed() ?? "0");
        }
        csvRows.push(row.join(","));
    }

    // 4. 合併所有行並生成 CSV 文件
    const csvContent = csvRows.join("\n");
    fs.writeFileSync("v1_deposit_output.csv", csvContent);

    console.log("CSV 已生成，檢查 output.csv");
})();

interface Share {
    index: number;
    tag: number;
    user: string;
    exists: boolean;
    value: number;
}

interface Vault {
    d_token: string;
    b_token: string;
}
