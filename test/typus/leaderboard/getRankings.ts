import "src/utils/load_env";
import { TypusConfig } from "src/utils";
import { getRankings, Rankings } from "src/typus/leaderboard";
import * as fs from "fs";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);

    const bidding_leaderboard = await getRankings(config, {
        key: "bidding_leaderboard",
        id: "0x8a40d11311beee02be5ade3fc7077aefba80e4b92a02823688596cf4d0d10895",
        ranks: 329,
        user: "0x0000000000000000000000000000000000000000000000000000000000000123",
        active: true,
    });
    console.log(bidding_leaderboard.leaderboard.length);
    saveToFile(bidding_leaderboard, "bidding_leaderboard.csv");

    const depositor_program = await getRankings(config, {
        key: "depositor_program",
        id: "0x9b145a4d3f5ddb4594201c7df97ea9e02ef2fd77dfff53fc9a45dfde7cfb3543",
        ranks: 329,
        user: "0x0000000000000000000000000000000000000000000000000000000000000123",
        active: true,
    });

    console.log(depositor_program.leaderboard.length);
    saveToFile(depositor_program, "depositor_program.csv");
})();

function saveToFile(data: Rankings, filename: string) {
    const headers = ["score", "users"];
    const csvRows = [
        headers.join(","),
        ...data.leaderboard.map((leader) => {
            return `${leader.score},"${leader.users.join(";")}"`;
        }),
    ];

    const csvContent = csvRows.join("\n");
    fs.writeFileSync(filename, csvContent);
}
