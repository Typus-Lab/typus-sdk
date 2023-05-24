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
        let len = samples.reduce((acc, curr) => (acc > curr.values.length ? acc : curr.values.length), 0);
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
        leader_board.sort((a, b) => b.score - a.score);
        // console.log(leader_board);
        return leader_board;
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
                    score: (b - a) / 1000000000,
                };
            })
            .filter((element) => element.score != 0);
        leader_board.sort((a, b) => b.score - a.score);
        // console.log(leader_board);
        return leader_board;
    } catch (e) {
        return [];
    }
}

interface LeaderBoard {
    user: string;
    score: number;
}

(async () => {
    console.log(await getDepositorLeaderBoard("1684922400"));
    console.log(await getBidderLeaderBoard("1684922400"));
})();
