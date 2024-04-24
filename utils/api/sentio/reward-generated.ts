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

export async function getTotalProfitSharingClaimed(): Promise<TokenAmount[]> {
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

import { SuiClient, SuiEvent } from "@mysten/sui.js/client";

export async function getTotalProfitSharing(provider: SuiClient): Promise<TokenAmount[]> {
    var hasNextPage = true;
    var cursor: any | undefined = undefined;

    const datas: SuiEvent[] = [];

    while (hasNextPage) {
        var result = await provider.queryEvents({
            query: {
                MoveEventType: `0x80ff0830313b36bb65ab927af811037f8b175d6e83c43f906b8f55d9263eea99::tails_staking::ProfitSharingEvent`,
            },
            order: "descending",
            cursor,
        });

        hasNextPage = result.hasNextPage;
        cursor = result.nextCursor;

        // @ts-ignore
        datas = datas.concat(result.data);
    }

    const tokenAmountMap = new Map<string, number>();

    for (let data of datas) {
        // @ts-ignore
        const token = typeArgToAsset(data.parsedJson.token.name);
        // @ts-ignore
        const value = data.parsedJson.value;

        const amount = value / 10 ** assetToDecimal(token)!;

        if (tokenAmountMap.has(token)) {
            let sum = tokenAmountMap.get(token)!;
            tokenAmountMap.set(token, sum + Number(amount));
        } else {
            tokenAmountMap.set(token, Number(amount));
        }
    }

    const tokenAmount: TokenAmount[] = [];

    for (let x of tokenAmountMap.entries()) {
        tokenAmount.push({ token: x[0], total_amount: x[1].toString() });
    }

    return tokenAmount;
}

interface TokenAmount {
    token: string;
    total_amount: string;
}

import configs from "../../../config.json";
import { assetToDecimal, typeArgToAsset } from "../../token";

(async () => {
    // const res1 = await getTotalDepositorIncentive();
    // console.log(res1);
    // const res2 = await getTotalPremium();
    // console.log(res2);
    // const res3 = await getTotalProfitSharingClaimed();
    // console.log(res3);
    // const config = configs.MAINNET;
    // const provider = new SuiClient({ url: config.RPC_ENDPOINT });
    // const res4 = await getTotalProfitSharing(provider);
    // console.log(res4);
})();
