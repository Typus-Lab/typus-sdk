import "src/utils/load_env";
import { TypusConfig } from "src/utils";
import { getRankings, Rankings } from "src/typus/leaderboard";
import * as fs from "fs";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);

    const trading_competition = await getRankings(config, {
        key: "trading_competition",
        id: "0x21491761bd4428a322e81785a7166616008b988797fdf656d47521f395921be7", // 5/12 0x571a9134c5fe68731a7955a63dfb453d287a130fa1d5beb8b6313a7df13faa04
        ranks: 300,
        user: "0x51f7f4abb6a4cf83ed59ce634f7c17dc1df2f04abe6842317049a3df0f8be8e4",
        active: true,
    });
    console.log(JSON.stringify(trading_competition, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));

    console.log(trading_competition.leaderboard.length);
    saveToFile(trading_competition, "trading_competition_0520.csv");

    // const depositor_program = await getRankings(config, {
    //     key: "depositor_program",
    //     id: "0x9b145a4d3f5ddb4594201c7df97ea9e02ef2fd77dfff53fc9a45dfde7cfb3543",
    //     ranks: 300,
    //     user: "0x0000000000000000000000000000000000000000000000000000000000000123",
    //     active: true,
    // });

    // console.log(depositor_program.leaderboard.length);
    // saveToFile(depositor_program, "depositor_program.csv");
})();

function saveToFile(data: Rankings, filename: string) {
    const headers = ["score", "users", "percentage"];

    var total = 0;
    data.leaderboard.forEach((leader) => (total += Number(leader.score)));

    const csvRows = [
        headers.join(","),
        ...data.leaderboard.map((leader) => {
            return `${leader.score},"${leader.users.join(";")}",${Number(leader.score) / total}`;
        }),
    ];

    const csvContent = csvRows.join("\n");
    fs.writeFileSync(filename, csvContent);
}
