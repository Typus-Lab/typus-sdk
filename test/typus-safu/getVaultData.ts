import { getBigVectorData, getVaultData } from "src/typus-safu";
import { TypusConfig } from "src/utils";
import * as fs from "fs";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);

    let vault = await getVaultData(config, {
        // indexes: [...Array(28).keys()].map((n) => {
        //     return n.toString();
        // }),
        indexes: ["28"],
    });
    console.log(JSON.stringify(vault, null, 2));

    // let shares = await getBigVectorData(config, vault["23"][0].share);
    // console.log(shares);
    // // active_share: string;
    // // deactivating_share: string;
    // // inactive_share: string;
    // // warmup_share: string;
    // // snapshot_share: string;

    // const headers = ["user", "active"];
    // const csvRows = [headers.join(",")];

    // for (const share of shares) {
    //     const user = share.user;
    //     csvRows.push(`${user},${share.share[0] / 1000000000}`);
    // }

    // const csvContent = csvRows.join("\n");
    // fs.writeFileSync("SafuSnapshot_0.csv", csvContent);
})();
