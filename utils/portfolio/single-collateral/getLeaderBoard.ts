const apiUrl = "https://app.sentio.xyz/api/v1/metrics/wayne/typus/query_range";

const headers = {
    "api-key": "oBOW8DsO1izVrINCy6Tmxga9YcWeOL87O",
    "Content-Type": "application/json",
};

const depositorRequestData = {
    queries: [
        {
            query: "callPortfolioHarvest",
            alias: "",
            id: "a",
            labelSelector: {},
            aggregate: {
                op: "SUM",
                grouping: ["user"],
            },
            functions: [],
            disabled: true,
        },
        {
            query: "callPortfolioCompound",
            alias: "",
            id: "b",
            labelSelector: {},
            aggregate: {
                op: "SUM",
                grouping: ["user"],
            },
            functions: [],
            disabled: true,
        },
    ],
    formulas: [
        {
            expression: "a+b",
            alias: "Score",
            id: "A",
            disabled: false,
        },
    ],
    timeRange: {
        start: "now",
        end: "now",
        step: 1,
        timezone: "Asia/Taipei",
    },
    samplesLimit: 200,
};

export async function getDepositorLeaderBoard(): Promise<LeaderBoard[]> {
    const jsonData = JSON.stringify(depositorRequestData);

    let response = await fetch(apiUrl, {
        method: "POST",
        headers,
        body: jsonData,
    });

    if (response.ok) {
        let data = await response.json();
        let samples = data.results[0].matrix.samples;
        let leader_board: LeaderBoard[] = samples.map((element) => {
            //   console.log("metric:", element.metric, "values: ", element.values);
            //   console.log("user:", element.metric.labels.user, "score: ", element.values[0].value);
            return { user: element.metric.labels.user, score: element.values[0].value };
        });
        leader_board.sort((a, b) => b.score - a.score);
        // console.log(leader_board);
        return leader_board;
    } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
}

const bidderRequestData = {
    queries: [
        {
            query: "callPortfolioNewBid",
            alias: "Score",
            id: "a",
            labelSelector: {},
            aggregate: {
                op: "SUM",
                grouping: ["user"],
            },
            functions: [],
            disabled: false,
        },
    ],
    formulas: [],
    timeRange: {
        start: "now",
        end: "now",
        step: 1,
        timezone: "Asia/Taipei",
    },
    samplesLimit: 200,
};

export async function getBidderLeaderBoard(): Promise<LeaderBoard[]> {
    const jsonData = JSON.stringify(bidderRequestData);

    let response = await fetch(apiUrl, {
        method: "POST",
        headers,
        body: jsonData,
    });

    if (response.ok) {
        let data = await response.json();
        let samples = data.results[0].matrix.samples;
        let leader_board: LeaderBoard[] = samples.map((element) => {
            //   console.log("metric:", element.metric, "values: ", element.values);
            //   console.log("user:", element.metric.labels.user, "score: ", element.values[0].value);
            return { user: element.metric.labels.user, score: element.values[0].value };
        });
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
