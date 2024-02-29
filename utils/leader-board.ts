const apiUrl = "https://app.sentio.xyz/api/v1/insights/wayne/typus/query";

const headers = {
    "api-key": "oBOW8DsO1izVrINCy6Tmxga9YcWeOL87O",
    "Content-Type": "application/json",
};

const depositorRequestData = {
    timeRange: {
        start: "-7d",
        end: "now",
        step: 3600,
    },
    limit: 200,
    queries: [
        {
            metricsQuery: {
                query: "depositTvl",
                alias: "",
                id: "a",
                labelSelector: {},
                aggregate: {
                    op: "SUM",
                    grouping: ["user", "coin_symbol"],
                },
                functions: [],
                disabled: true,
            },
            dataSource: "METRICS",
        },
        {
            priceQuery: {
                id: "b",
                alias: "",
                coinId: [
                    {
                        symbol: "SUI",
                    },
                    {
                        symbol: "USDC",
                    },
                ],
                disabled: true,
            },
            dataSource: "PRICE",
        },
    ],
    formulas: [
        {
            expression: "a*b",
            alias: "{{user}}",
            id: "A",
            disabled: false,
        },
    ],
};

export async function getDepositorLeaderBoard(start?: string, end?: string, step?: number): Promise<LeaderBoard[]> {
    if (start) {
        depositorRequestData.timeRange.start = start;
    }
    if (end) {
        depositorRequestData.timeRange.end = end;
    }
    if (step) {
        depositorRequestData.timeRange.step = step;
    }
    const jsonData = JSON.stringify(depositorRequestData);

    let response = await fetch(apiUrl, {
        method: "POST",
        headers,
        body: jsonData,
    });

    try {
        let data = await response.json();

        let samples = data.results[0].matrix.samples;
        let len = samples.reduce((acc, curr) => (acc > curr.values.length ? acc : curr.values.length), 0) - 1;
        let leader_board: LeaderBoard[] = samples
            .map((element) => {
                // console.log("metric:", element.metric, "values: ", element.values);
                // console.log("user:", element.metric.labels.user, "score: ", element.values.at(-1).value);
                let sum = element.values.reduce((acc, curr) => acc + curr.value / len, 0);

                return {
                    user: element.metric.labels.user,
                    score: sum,
                };
            })
            .filter((element) => element.score != 0);

        const userScoreMap: { [key: string]: number } = leader_board.reduce((map, obj) => {
            if (map[obj.user]) {
                map[obj.user] += obj.score;
            } else {
                map[obj.user] = obj.score;
            }
            return map;
        }, {});

        const result: LeaderBoard[] = Object.entries(userScoreMap).map(([user, score]) => ({ user, score }));
        result.sort((a, b) => b.score - a.score);
        // console.log(result);
        return result;
    } catch (e) {
        return [];
    }
}

const bidderRequestData = {
    timeRange: {
        start: "-7d",
        end: "now",
        step: 3600,
    },
    limit: 200,
    queries: [
        {
            metricsQuery: {
                query: "totalNewBid",
                alias: "",
                id: "a",
                labelSelector: {},
                aggregate: {
                    op: "SUM",
                    grouping: ["user"],
                },
                functions: [],
                disabled: false,
            },
            dataSource: "METRICS",
        },
    ],
};

export async function getBidderLeaderBoard(startTimestamp?: string, end?: string): Promise<LeaderBoard[]> {
    if (startTimestamp) {
        bidderRequestData.timeRange.start = startTimestamp;
    }
    if (end) {
        bidderRequestData.timeRange.end = end;
    }
    const jsonData = JSON.stringify(bidderRequestData);

    let response = await fetch(apiUrl, {
        method: "POST",
        headers,
        body: jsonData,
    });

    try {
        let data = await response.json();
        // console.log(data);
        let samples = data.results[0].matrix.samples;
        let leader_board: LeaderBoard[] = samples
            .map((element) => {
                // console.log("metric:", element.metric, "values: ", element.values);
                // console.log("user:", element.metric.labels.user, "score: ", element.values.at(-1).value);
                let a = 0;
                let log_0 = element.values.at(0);
                if (log_0.timestamp == startTimestamp) {
                    a = log_0.value;
                }
                let b = element.values.at(-1).value;

                return {
                    user: element.metric.labels.user,
                    score: b - a,
                };
            })
            .filter((element) => element.score != 0);

        const userScoreMap: { [key: string]: number } = leader_board.reduce((map, obj) => {
            if (map[obj.user]) {
                map[obj.user] += obj.score;
            } else {
                map[obj.user] = obj.score;
            }
            return map;
        }, {});

        const result: LeaderBoard[] = Object.entries(userScoreMap).map(([user, score]) => ({ user, score }));
        result.sort((a, b) => b.score - a.score);
        // console.log(result);
        return result;
    } catch (e) {
        return [];
    }
}

interface LeaderBoard {
    user: string;
    score: number;
}

interface ExpEarn {
    address: string;
    total_exp_earn: number;
}

export async function getExpLeaderBoard(startTimestamp: string, endTimestamp?: string): Promise<ExpEarn[]> {
    const apiUrl = "https://app.sentio.xyz/api/v1/analytics/typus/typus_v2/sql/execute";

    const headers = {
        "api-key": "tz3JJ6stG7Fux6ueRSRA5mdpC9U0lozI3",
        "Content-Type": "application/json",
    };

    const _endTimestamp = endTimestamp ? endTimestamp : "99999999999";

    const requestData = {
        sqlQuery: {
            sql: `SELECT S.distinct_id as address, SUM(E.exp_earn) as total_exp_earn\nFROM ExpUp E\nJOIN StakeNft S ON E.number = S.number\nWHERE  timestamp < ${_endTimestamp} && timestamp >= ${startTimestamp}\nGROUP BY address\nORDER BY total_exp_earn DESC;`,
            size: 100,
        },
    };

    const jsonData = JSON.stringify(requestData);

    let response = await fetch(apiUrl, {
        method: "POST",
        headers,
        body: jsonData,
    });

    let data = await response.json();

    return data.result.rows as ExpEarn[];
}
