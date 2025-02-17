import { EventId, SuiClient, SuiEvent, SuiEventFilter } from "@mysten/sui/client";
import { parseVaultInfo, TxHistory, Vault } from "src/typus-dov-single-v2";
import { assetToDecimal, typeArgToAsset } from "src/constants";
import BigNumber from "bignumber.js";

const headers = {
    "api-key": "RIobs1PpAZ4SmHxY2InErtz0pL5LqHTtY",
    "Content-Type": "application/json",
};

export async function getFromSentio(event: string, userAddress: string, startTimestamp: string): Promise<any[]> {
    let apiUrl = "https://app.sentio.xyz/api/v1/analytics/typus/typus_v2/sql/execute";

    let requestData = {
        sqlQuery: {
            sql: `
                SELECT *
                FROM ${event}
                WHERE distinct_id = '${userAddress}' AND timestamp >= ${startTimestamp}
                ORDER BY timestamp DESC;
            `,
            size: 1000,
        },
    };

    let jsonData = JSON.stringify(requestData);

    let response = await fetch(apiUrl, {
        method: "POST",
        headers,
        body: jsonData,
    });

    let data = await response.json();
    // console.log(data);

    return data.result.rows as any[];
}
export async function getFromSentioWithExpUp(event: string, userAddress: string, startTimestamp: string): Promise<any[]> {
    let apiUrl = "https://app.sentio.xyz/api/v1/analytics/typus/typus_v2/sql/execute";

    let requestData = {
        sqlQuery: {
            sql: `
                SELECT *
                FROM ${event} N
                LEFT JOIN (
                    SELECT number, distinct_id, exp_earn, transaction_hash, log_index
                    FROM ExpUp
                ) S ON N.transaction_hash = S.transaction_hash AND N.log_index + 1 = S.log_index
                WHERE N.distinct_id = '${userAddress}' AND N.timestamp >= ${startTimestamp}
                ORDER BY N.timestamp DESC;
            `,
            size: 1000,
        },
    };

    let jsonData = JSON.stringify(requestData);

    let response = await fetch(apiUrl, {
        method: "POST",
        headers,
        body: jsonData,
    });

    let data = await response.json();
    // console.log(data);

    return data.result.rows as any[];
}

export async function getNewBidFromSentio(vaults: { [key: string]: Vault }, userAddress: string, startTimestamp: number) {
    const datas = await getFromSentio("NewBid", userAddress, startTimestamp.toString());
    return datas.map((x) => {
        let [Period, Vault, RiskLevel, d_token, b_token, o_token] = parseVaultInfo(vaults, x.index, "NewBidEvent");

        if (x.number == "0" && x.exp_earn == "0") {
            x.number = undefined;
            x.exp_earn = undefined;
        }

        let txHistory: TxHistory = {
            Index: x.index,
            Period,
            Vault,
            RiskLevel,
            Action: "Auto Bid" + ` ${x.size} ${x.o_token}`,
            Amount: x.bidder_balance + ` ${x.b_token}`,
            Tails: x.number,
            Exp: x.exp_earn,
            Date: new Date(Number(x.ts_ms)),
            txDigest: x.transaction_hash,
        };

        return txHistory;
    });
}

export async function getExerciseFromSentio(vaults: { [key: string]: Vault }, userAddress: string, startTimestamp: number) {
    const datas = await getFromSentio("Exercise", userAddress, startTimestamp.toString());
    return datas.map((x) => {
        let [Period, Vault, RiskLevel, d_token, b_token, o_token] = parseVaultInfo(vaults, x.index, "ExerciseEvent");

        // console.log(x);
        var Action = "Auto Exercise";
        if (x.raw_share) {
            var size = Number(x.raw_share) / 10 ** assetToDecimal(o_token!)!;
            Action = `Auto Exercise ${size} ${o_token}`;
        }

        let txHistory: TxHistory = {
            Index: x.index,
            Period,
            Vault,
            RiskLevel,
            Action,
            Amount: `${x.amount} ${x.coin_symbol}`,
            Tails: x.number,
            Exp: x.exp_earn,
            Date: new Date(x.timestamp),
            txDigest: x.transaction_hash,
        };

        return txHistory;
    });
}
