const headers = {
    "api-key": "tz3JJ6stG7Fux6ueRSRA5mdpC9U0lozI3",
    "Content-Type": "application/json",
};

export async function getTotalDepositorIncentive(): Promise<TokenAmount> {
    const apiUrl = "https://app.sentio.xyz/api/v1/analytics/typus/typus_v2/sql/execute";

    const requestData = {
        sqlQuery: {
            sql: `
                SELECT SUM(E.depositor_incentive_value) as incentive
                FROM Delivery E
            `,
            size: 2000000,
        },
    };

    const jsonData = JSON.stringify(requestData);

    let response = await fetch(apiUrl, {
        method: "POST",
        headers,
        body: jsonData,
    });

    let data = await response.json();

    return { token: "SUI", total_amount: data.result.rows[0].incentive } as TokenAmount;
}

export async function getTotalPremium(): Promise<number> {
    const apiUrl = "https://app.sentio.xyz/api/v1/insights/typus/typus_v2/query";

    const requestData = {
        timeRange: {
            start: "now",
            end: "now",
            step: 3600,
            timezone: "Europe/Paris",
        },
        limit: 1,
        queries: [
            {
                metricsQuery: {
                    query: "PremiumUSD",
                    alias: "",
                    id: "a",
                    labelSelector: {},
                    aggregate: {
                        op: "SUM",
                        grouping: ["chain"],
                    },
                    functions: [
                        {
                            name: "sum_over_time",
                            arguments: [
                                {
                                    durationValue: {
                                        value: 520,
                                        unit: "w",
                                    },
                                },
                            ],
                        },
                    ],
                    disabled: false,
                },
                dataSource: "METRICS",
                sourceName: "",
            },
        ],
        formulas: [],
    };

    const jsonData = JSON.stringify(requestData);

    let response = await fetch(apiUrl, {
        method: "POST",
        headers,
        body: jsonData,
    });

    let data = await response.json();

    return data.results[0].matrix.samples[0].values[0].value;
}

export async function getTotalProfitSharing(): Promise<TokenAmount[]> {
    const apiUrl = "https://app.sentio.xyz/api/v1/analytics/typus/typus_v2/sql/execute";

    const requestData = {
        sqlQuery: {
            sql: `
                SELECT token, SUM(amount) AS total_amount
                FROM ClaimProfitSharing
                GROUP BY token;
            `,
            size: 2000000,
        },
    };

    const jsonData = JSON.stringify(requestData);

    let response = await fetch(apiUrl, {
        method: "POST",
        headers,
        body: jsonData,
    });

    let data = await response.json();

    return data.result.rows as TokenAmount[];
}

interface TokenAmount {
    token: string;
    total_amount: string;
}

// (async () => {
//     const res1 = await getTotalDepositorIncentive();
//     console.log(res1);
//     const res2 = await getTotalPremium();
//     console.log(res2);
//     const res3 = await getTotalProfitSharing();
//     console.log(res3);
// })();
