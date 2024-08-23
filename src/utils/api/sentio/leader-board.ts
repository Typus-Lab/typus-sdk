// const apiUrl = "https://app.sentio.xyz/api/v1/insights/wayne/typus/query";

// const depositorRequestData = {
//     timeRange: {
//         start: "-7d",
//         end: "now",
//         step: 3600,
//     },
//     limit: 200,
//     queries: [
//         {
//             metricsQuery: {
//                 query: "depositTvl",
//                 alias: "",
//                 id: "a",
//                 labelSelector: {},
//                 aggregate: {
//                     op: "SUM",
//                     grouping: ["user", "coin_symbol"],
//                 },
//                 functions: [],
//                 disabled: true,
//             },
//             dataSource: "METRICS",
//         },
//         {
//             priceQuery: {
//                 id: "b",
//                 alias: "",
//                 coinId: [
//                     {
//                         symbol: "SUI",
//                     },
//                     {
//                         symbol: "USDC",
//                     },
//                 ],
//                 disabled: true,
//             },
//             dataSource: "PRICE",
//         },
//     ],
//     formulas: [
//         {
//             expression: "a*b",
//             alias: "{{user}}",
//             id: "A",
//             disabled: false,
//         },
//     ],
// };

// export async function getDepositorLeaderBoard(start?: string, end?: string, step?: number): Promise<LeaderBoard[]> {
//     if (start) {
//         depositorRequestData.timeRange.start = start;
//     }
//     if (end) {
//         depositorRequestData.timeRange.end = end;
//     }
//     if (step) {
//         depositorRequestData.timeRange.step = step;
//     }
//     let jsonData = JSON.stringify(depositorRequestData);

//     let response = await fetch(apiUrl, {
//         method: "POST",
//         headers,
//         body: jsonData,
//     });

//     try {
//         let data = await response.json();

//         let samples = data.results[0].matrix.samples;
//         let len = samples.reduce((acc, curr) => (acc > curr.values.length ? acc : curr.values.length), 0) - 1;
//         let leader_board: LeaderBoard[] = samples
//             .map((element) => {
//                 // console.log("metric:", element.metric, "values: ", element.values);
//                 // console.log("user:", element.metric.labels.user, "score: ", element.values.at(-1).value);
//                 let sum = element.values.reduce((acc, curr) => acc + curr.value / len, 0);

//                 return {
//                     user: element.metric.labels.user,
//                     score: sum,
//                 };
//             })
//             .filter((element) => element.score != 0);

//         let userScoreMap: { [key: string]: number } = leader_board.reduce((map, obj) => {
//             if (map[obj.user]) {
//                 map[obj.user] += obj.score;
//             } else {
//                 map[obj.user] = obj.score;
//             }
//             return map;
//         }, {});

//         let result: LeaderBoard[] = Object.entries(userScoreMap).map(([user, score]) => ({ user, score }));
//         result.sort((a, b) => b.score - a.score);
//         // console.log(result);
//         return result;
//     } catch (e) {
//         return [];
//     }
// }

// const bidderRequestData = {
//     timeRange: {
//         start: "-7d",
//         end: "now",
//         step: 3600,
//     },
//     limit: 200,
//     queries: [
//         {
//             metricsQuery: {
//                 query: "totalNewBid",
//                 alias: "",
//                 id: "a",
//                 labelSelector: {},
//                 aggregate: {
//                     op: "SUM",
//                     grouping: ["user"],
//                 },
//                 functions: [],
//                 disabled: false,
//             },
//             dataSource: "METRICS",
//         },
//     ],
// };

// export async function getBidderLeaderBoard(startTimestamp?: string, end?: string): Promise<LeaderBoard[]> {
//     if (startTimestamp) {
//         bidderRequestData.timeRange.start = startTimestamp;
//     }
//     if (end) {
//         bidderRequestData.timeRange.end = end;
//     }
//     let jsonData = JSON.stringify(bidderRequestData);

//     let response = await fetch(apiUrl, {
//         method: "POST",
//         headers,
//         body: jsonData,
//     });

//     try {
//         let data = await response.json();
//         // console.log(data);
//         let samples = data.results[0].matrix.samples;
//         let leader_board: LeaderBoard[] = samples
//             .map((element) => {
//                 // console.log("metric:", element.metric, "values: ", element.values);
//                 // console.log("user:", element.metric.labels.user, "score: ", element.values.at(-1).value);
//                 let a = 0;
//                 let log_0 = element.values.at(0);
//                 if (log_0.timestamp == startTimestamp) {
//                     a = log_0.value;
//                 }
//                 let b = element.values.at(-1).value;

//                 return {
//                     user: element.metric.labels.user,
//                     score: b - a,
//                 };
//             })
//             .filter((element) => element.score != 0);

//         let userScoreMap: { [key: string]: number } = leader_board.reduce((map, obj) => {
//             if (map[obj.user]) {
//                 map[obj.user] += obj.score;
//             } else {
//                 map[obj.user] = obj.score;
//             }
//             return map;
//         }, {});

//         let result: LeaderBoard[] = Object.entries(userScoreMap).map(([user, score]) => ({ user, score }));
//         result.sort((a, b) => b.score - a.score);
//         // console.log(result);
//         return result;
//     } catch (e) {
//         return [];
//     }
// }

// interface LeaderBoard {
//     user: string;
//     score: number;
// }

export interface ExpLeaderBoard {
    nft_id: string;
    total_exp_earn: number;
    owner: string | undefined;
}

export async function getExpLeaderBoardWithOwner(expLeaderBoard: ExpLeaderBoard[], ownerMap: Map<string, string>) {
    return expLeaderBoard.map((l) => {
        l.owner = ownerMap.get(l.nft_id);
        return l;
    });
}

const headers = {
    "api-key": "tz3JJ6stG7Fux6ueRSRA5mdpC9U0lozI3",
    "Content-Type": "application/json",
};

export async function getExpLeaderBoard(startTimestamp: string, endTimestamp?: string): Promise<ExpLeaderBoard[]> {
    let apiUrl = "https://app.sentio.xyz/api/v1/analytics/typus/typus_v2/sql/execute";

    let _endTimestamp = endTimestamp ? endTimestamp : "9999999999";

    let requestData = {
        sqlQuery: {
            // sql: `SELECT S.distinct_id AS owner, SUM(E.exp_earn) AS total_exp_earn
            //         FROM ExpUp E
            //         JOIN (
            //             SELECT number, distinct_id
            //             FROM StakeNft
            //             WHERE (number, timestamp) IN (
            //                 SELECT number, MAX(timestamp) AS max_timestamp
            //                 FROM StakeNft
            //                 GROUP BY number
            //             )
            //         ) S ON E.number = S.number
            //         WHERE E.timestamp >= ${startTimestamp} && E.timestamp < ${_endTimestamp}
            //         GROUP BY owner
            //         ORDER BY total_exp_earn DESC;`,
            sql: `
                SELECT E.nft_id as nft_id, SUM(E.exp_earn) as total_exp_earn
                FROM ExpUp E
                WHERE E.timestamp >= ${startTimestamp} && E.timestamp < ${_endTimestamp}
                GROUP BY nft_id
                ORDER BY total_exp_earn DESC;
            `,
            size: 200,
        },
    };

    let jsonData = JSON.stringify(requestData);

    let response = await fetch(apiUrl, {
        method: "POST",
        headers,
        body: jsonData,
    });

    let data = await response.json();

    return data.result.rows as ExpLeaderBoard[];
}

// (async () => {
//     let res1 = await getExpLeaderBoard("0");
//     console.log(res1);
// })();
