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
                labelSelector: {
                    // user: "0x823bd0c4d601d625b1b1555dbe17da495db71070a4365205467838aecc32cbad",
                },
                aggregate: {
                    op: "SUM",
                    grouping: ["user"],
                },
            },
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

    if (response.ok) {
        let data = await response.json();
        let samples = data.results[0].matrix.samples;
        let leader_board: LeaderBoard[] = samples
            .map((element) => {
                // console.log("metric:", element.metric, "values: ", element.values);
                // console.log("user:", element.metric.labels.user, "score: ", element.values.at(-1).value);
                let sum = element.values.reduce((acc, curr) => acc + curr.value / 1000000000 / 24 / 7 / 2, 0);

                return {
                    user: element.metric.labels.user,
                    score: sum,
                };
            })
            .filter((element) => element.score != 0);
        leader_board.sort((a, b) => b.score - a.score);
        // console.log(leader_board);
        return leader_board;
    } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
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

    if (response.ok) {
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
    } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
}

interface LeaderBoard {
    user: string;
    score: number;
}

(async () => {
    // console.log(await getDepositorLeaderBoard("1684108800"));
    // console.log(await getBidderLeaderBoard("1684108800"));
})();
