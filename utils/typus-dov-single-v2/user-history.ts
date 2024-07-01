import { EventId, SuiClient, SuiEvent, SuiEventFilter } from "@mysten/sui.js/client";
import { Vault } from "./view-function";
import { assetToDecimal, typeArgToAsset } from "../token";
import BigNumber from "bignumber.js";

export async function getUserEvents(
    provider: SuiClient,
    sender: string,
    cursor?: EventId | null
): Promise<[SuiEvent[], EventId | null | undefined]> {
    const senderFilter: SuiEventFilter = {
        Sender: sender,
    };

    var hasNextPage = true;

    const datas: SuiEvent[] = [];

    while (hasNextPage) {
        const result = await provider.queryEvents({
            query: senderFilter,
            order: "ascending",
            cursor,
        });
        // console.log(result);

        hasNextPage = result.hasNextPage;
        cursor = result.nextCursor;

        // @ts-ignore
        datas = datas.concat(result.data);
    }

    return [datas, cursor];
}

export async function getAutoBidEvents(provider: SuiClient, originPackage: string, startTimeMs: number): Promise<SuiEvent[]> {
    const moduleFilter: SuiEventFilter = {
        MoveModule: { package: originPackage, module: "auto_bid" },
    };

    var hasNextPage = true;
    var cursor: any | undefined = undefined;

    const datas: SuiEvent[] = [];

    while (hasNextPage) {
        const result = await provider.queryEvents({
            query: moduleFilter,
            order: "descending",
            cursor,
        });
        // console.log(result);

        hasNextPage = result.hasNextPage;
        cursor = result.nextCursor;

        // @ts-ignore
        datas = datas.concat(result.data);

        if (hasNextPage && Number(result.data[result.data.length - 1].timestampMs) < startTimeMs) {
            break;
        }
    }

    return datas;
}

export interface TxHistory {
    Index: string | undefined;
    Action: string | undefined;
    Period: string | undefined;
    Amount: string | undefined;
    Vault: string | undefined;
    RiskLevel: string | undefined;
    Tails: string | undefined;
    Exp: string | undefined;
    Date: Date;
    txDigest: string;
}

export async function parseTxHistory(
    datas: Array<any>,
    originPackage: string,
    vaults: { [key: string]: Vault }
): Promise<Array<TxHistory>> {
    const results = await datas
        .filter((event) => {
            const type: string = event.type;
            return (
                event.packageId == originPackage ||
                type.includes("typus_nft::First") ||
                type.includes("typus_nft::ExpUpEvent") ||
                type.includes("tails_staking")
            );
        })
        .sort((a, b) => {
            // From Old to New!
            if (a.timestampMs == b.timestampMs) {
                return Number(a.id.eventSeq) - Number(b.id.eventSeq);
            } else {
                return Number(a.timestampMs) - Number(b.timestampMs);
            }
        })
        .reduce(async (promise, event) => {
            let txHistory: TxHistory[] = await promise;
            // console.log(event);
            const functionType = new RegExp("^([^::]+)::([^::]+)::([^<]+)").exec(event.type)?.slice(1, 4)!;
            const action = functionType[2];

            let Action: string | undefined;
            let Amount: string | undefined;
            let Index: string | undefined;
            let Period: string | undefined;
            let Vault: string | undefined;
            let RiskLevel: string | undefined;
            var Tails: string | undefined = undefined;
            let Exp: string | undefined;
            var d_token: string | undefined;
            var b_token: string | undefined;
            var o_token: string | undefined;

            Index = event.parsedJson!.index || event.parsedJson!.vault_index;
            if (Index) {
                [Period, Vault, RiskLevel, d_token, b_token, o_token] = parseVaultInfo(vaults, Index, action);
            }

            switch (action) {
                // new version events
                case "StakeTailsEvent":
                    Action = "Stake";
                    Amount = "0.05 SUI";
                    Tails = `#${event.parsedJson!.log[0]}`;
                    break;
                case "UnstakeTailsEvent":
                    Action = "Unstake";
                    Tails = `#${event.parsedJson!.log[0]}`;
                    break;
                case "DailySignUpEvent":
                    Action = "Check In";
                    Tails = event.parsedJson!.tails.map((num) => `#${num}`).join(" ");
                    Exp = event.parsedJson!.log[0];
                    break;
                case "TransferTailsEvent":
                    Action = "Transfer";
                    Amount = "0.01 SUI";
                    Tails = `#${event.parsedJson!.log[0]}`;
                    break;
                case "ExpUpEvent":
                    if (event.parsedJson!.log) {
                        Action = "Train Tail";
                        Tails = `#${event.parsedJson!.log[0]}`;
                        Exp = event.parsedJson!.log[1];
                        if (Number(Exp) == 0) {
                            return txHistory;
                        }
                    }
                    break;
                case "LevelUpEvent":
                    if (event.parsedJson!.log) {
                        Action = `Level Up to Level ${event.parsedJson!.log[1]}`;
                        Tails = `#${event.parsedJson!.log[0]}`;
                    }
                    break;
                // old version events
                case "StakeNftEvent":
                    Action = "Stake";
                    Amount = "0.05 SUI";
                    Tails = `#${event.parsedJson!.number}`;
                    break;
                case "UnstakeNftEvent":
                    Action = "Unstake";
                    Tails = `#${event.parsedJson!.number}`;
                    break;
                case "ExpUpEvent":
                    var i = txHistory.findIndex(
                        (x) => x.txDigest == event.id.txDigest && x.Action != "First Deposit" && x.Action != "Stake"
                    );
                    if (i != -1 && txHistory[i].Tails == undefined) {
                        txHistory[i].Tails = `#${event.parsedJson!.number}`;
                        txHistory[i].Exp = event.parsedJson!.exp_earn;
                        return txHistory;
                    } else if (event.id.eventSeq == 0) {
                        Action = "Collect EXP";
                        Tails = `#${event.parsedJson!.number}`;
                        Exp = event.parsedJson!.exp_earn;
                    } else {
                        return txHistory;
                    }
                    break;
                case "TransferNftEvent":
                    Action = "Transfer";
                    Amount = "0.01 SUI";
                    Tails = `#${event.parsedJson!.number}`;
                    break;
                case "DailyAttendEvent":
                    var i = txHistory.findIndex((x) => x.txDigest == event.id.txDigest && x.Action == "Collect EXP");
                    if (i != -1) {
                        txHistory[i].Action = "Check In";
                        return txHistory;
                    }
                    break;
                case "FirstDepositEvent":
                    Action = "First Deposit";
                    Tails = `#${event.parsedJson!.number}`;
                    Exp = event.parsedJson!.exp_earn;
                    break;
                case "FirstBidEvent":
                    Action = "First Bid";
                    Tails = `#${event.parsedJson!.number}`;
                    Exp = event.parsedJson!.exp_earn;
                    break;
                case "LevelUpEvent":
                    Action = `Level Up to Level ${event.parsedJson!.level}`;
                    if (event.parsedJson!.number) {
                        Tails = `#${event.parsedJson!.number}`;
                        break;
                    } else {
                        return txHistory;
                    }
                case "DepositEvent":
                case "WithdrawEvent":
                case "UnsubscribeEvent":
                case "ClaimEvent":
                case "CompoundEvent":
                case "HarvestEvent":
                    var i = txHistory.findIndex((x) => x.txDigest == event.id.txDigest && x.Action == "Collect EXP");
                    var token = typeArgToAsset("0x" + event.parsedJson!.token.name);
                    var amount = Number(event.parsedJson!.amount) / 10 ** Number(event.parsedJson!.decimal);
                    Action = action.slice(0, action.length - 5);
                    if (Action == "Harvest") {
                        Action = "Harvest Reward";
                    }
                    Amount = `${BigNumber(amount).toFixed()} ${token}`;
                    Index = Index;
                    if (i != -1) {
                        txHistory[i].Action = Action;
                        txHistory[i].Amount = Amount;
                        txHistory[i].Vault = Vault;
                        txHistory[i].RiskLevel = RiskLevel;
                        txHistory[i].Index = Index;
                        return txHistory;
                    }
                    break;
                case "RaiseFundEvent":
                    Index = event.parsedJson!.log[0];
                    [Period, Vault, RiskLevel, d_token, b_token, o_token] = parseVaultInfo(vaults, Index!, action);
                    var token = typeArgToAsset("0x" + event.parsedJson!.token.name);
                    if (event.parsedJson!.log[4] > 0) {
                        // deposit
                        Action = "Deposit";
                        var amount = Number(event.parsedJson!.log[4]) / 10 ** assetToDecimal(token)!;
                        Amount = `${BigNumber(amount).toFixed()} ${token}`;
                    } else if (event.parsedJson!.log[5] > 0) {
                        // compound
                        Action = "Compound";
                        var amount = Number(event.parsedJson!.log[5]) / 10 ** assetToDecimal(token)!;
                        Amount = `${BigNumber(amount).toFixed()} ${token}`;
                    }
                    break;
                case "ReduceFundEvent":
                    Index = event.parsedJson!.log[0];
                    [Period, Vault, RiskLevel, d_token, b_token, o_token] = parseVaultInfo(vaults, Index!, action);
                    if (event.parsedJson!.log[4] > 0) {
                        // withdraw
                        Action = "Withdraw";
                        var token = typeArgToAsset("0x" + event.parsedJson!.d_token.name);
                        var amount = Number(event.parsedJson!.log[4]) / 10 ** assetToDecimal(token)!;
                        Amount = `${BigNumber(amount).toFixed()} ${token}`;
                        txHistory.push({
                            Index,
                            Period,
                            Action,
                            Amount,
                            Vault,
                            RiskLevel,
                            Tails,
                            Exp,
                            Date: new Date(Number(event.timestampMs)),
                            txDigest: event.id.txDigest,
                        });
                    }
                    if (event.parsedJson!.log[5] > 0) {
                        // unsubscribe
                        Action = "Unsubscribe";
                        var token = typeArgToAsset("0x" + event.parsedJson!.d_token.name);
                        var amount = Number(event.parsedJson!.log[5]) / 10 ** assetToDecimal(token)!;
                        Amount = `${BigNumber(amount).toFixed()} ${token}`;
                        txHistory.push({
                            Index,
                            Period,
                            Action,
                            Amount,
                            Vault,
                            RiskLevel,
                            Tails,
                            Exp,
                            Date: new Date(Number(event.timestampMs)),
                            txDigest: event.id.txDigest,
                        });
                    }
                    if (event.parsedJson!.log[9] > 0) {
                        // claim
                        Action = "Claim";
                        var token = typeArgToAsset("0x" + event.parsedJson!.d_token.name);
                        var amount = Number(event.parsedJson!.log[9]) / 10 ** assetToDecimal(token)!;
                        Amount = `${BigNumber(amount).toFixed()} ${token}`;
                        txHistory.push({
                            Index,
                            Period,
                            Action,
                            Amount,
                            Vault,
                            RiskLevel,
                            Tails,
                            Exp,
                            Date: new Date(Number(event.timestampMs)),
                            txDigest: event.id.txDigest,
                        });
                    }
                    if (event.parsedJson!.log[6] > 0 && event.parsedJson!.log[10] > 0) {
                        // Harvest d token and i token
                        Action = "Harvest Reward";
                        var b_token_name = typeArgToAsset("0x" + event.parsedJson!.b_token.name);
                        var b_token_amount = Number(event.parsedJson!.log[6]) / 10 ** assetToDecimal(b_token_name)!;

                        var i_token_name = typeArgToAsset("0x" + event.parsedJson!.i_token.name);
                        var i_token_amount = Number(event.parsedJson!.log[10]) / 10 ** assetToDecimal(i_token_name)!;

                        Amount = `${BigNumber(b_token_amount).toFixed()} ${b_token_name!}\n${BigNumber(i_token_amount).toFixed()} ${i_token_name!}`;

                        // var amount =
                        //     Number(event.parsedJson!.log[6]) / 10 ** assetToDecimal(token)!
                        //     Number(event.parsedJson!.log[10]) / 10 ** assetToDecimal(token)!;
                        // Amount = `${BigNumber(amount).toFixed()} ${token}`;
                        txHistory.push({
                            Index,
                            Period,
                            Action,
                            Amount,
                            Vault,
                            RiskLevel,
                            Tails,
                            Exp,
                            Date: new Date(Number(event.timestampMs)),
                            txDigest: event.id.txDigest,
                        });
                    } else {
                        if (event.parsedJson!.log[6] > 0) {
                            // harvest
                            Action = "Harvest Reward";
                            var token = typeArgToAsset("0x" + event.parsedJson!.b_token.name);
                            var amount = Number(event.parsedJson!.log[6]) / 10 ** assetToDecimal(token)!;
                            Amount = `${BigNumber(amount).toFixed()} ${token}`;
                            txHistory.push({
                                Index,
                                Period,
                                Action,
                                Amount,
                                Vault,
                                RiskLevel,
                                Tails,
                                Exp,
                                Date: new Date(Number(event.timestampMs)),
                                txDigest: event.id.txDigest,
                            });
                        }
                        if (event.parsedJson!.log[10] > 0) {
                            // redeem
                            Action = "Harvest Reward";
                            var token = typeArgToAsset("0x" + event.parsedJson!.i_token.name);
                            var amount = Number(event.parsedJson!.log[10]) / 10 ** assetToDecimal(token)!;
                            Amount = `${BigNumber(amount).toFixed()} ${token}`;
                            txHistory.push({
                                Index,
                                Period,
                                Action,
                                Amount,
                                Vault,
                                RiskLevel,
                                Tails,
                                Exp,
                                Date: new Date(Number(event.timestampMs)),
                                txDigest: event.id.txDigest,
                            });
                        }
                    }

                    return txHistory;
                case "NewStrategyEventV2":
                    Action = "Create Strategy";
                    var deposit_amount = Number(event.parsedJson!.deposit_amount) / 10 ** assetToDecimal(b_token!)!;
                    Amount = `${BigNumber(deposit_amount).toFixed()} ${b_token!}`;
                    break;
                case "UpdateStrategyEvent":
                    Action = "Update Strategy";
                    var deposit_amount = Number(event.parsedJson!.deposit_amount) / 10 ** assetToDecimal(b_token!)!;
                    Amount = `${BigNumber(deposit_amount).toFixed()} ${b_token!}`;
                    break;
                case "CloseStrategyEventV2":
                    Action = "Close Strategy";
                    if (b_token == d_token) {
                        var balance =
                            (Number(event.parsedJson!.u64_padding[0]) + Number(event.parsedJson!.u64_padding[1])) /
                            10 ** assetToDecimal(b_token!)!;
                        Amount = `${BigNumber(balance).toFixed()} ${b_token!}`;
                    } else {
                        var balance = Number(event.parsedJson!.u64_padding[0]) / 10 ** assetToDecimal(b_token!)!;
                        var profit = Number(event.parsedJson!.u64_padding[1]) / 10 ** assetToDecimal(d_token!)!;
                        Amount = `${BigNumber(balance).toFixed()} ${b_token!}\n${BigNumber(profit).toFixed()} ${d_token!}`;
                    }
                    break;
                case "WithdrawProfitEvent":
                    Action = "Harvest Gain";
                    var profit = Number(event.parsedJson!.profit) / 10 ** assetToDecimal(d_token!)!;
                    Amount = `${BigNumber(profit).toFixed()} ${d_token!}`;
                    break;
                case "RedeemEvent":
                    var token = typeArgToAsset("0x" + event.parsedJson!.token.name);
                    var amount = Number(event.parsedJson!.amount) / 10 ** assetToDecimal(token)!;
                    Action = "Harvest Reward";
                    Amount = `${BigNumber(amount).toFixed()} ${token}`;
                    Index = Index;
                    break;
                case "TransferBidReceiptEvent":
                    var amount = Number(event.parsedJson!.amount) / 10 ** Number(event.parsedJson!.decimal);
                    Action = "Transfer Receipt";
                    Amount = `${BigNumber(amount).toFixed()} ${o_token}`;
                    break;
                case "ExerciseEvent":
                    var token = typeArgToAsset("0x" + event.parsedJson!.token.name);
                    var amount = Number(event.parsedJson!.amount) / 10 ** Number(event.parsedJson!.decimal);
                    Action = "Exercise";
                    Amount = `${BigNumber(amount).toFixed()} ${token}`;
                    if (event.parsedJson!.u64_padding[0]) {
                        var size = Number(event.parsedJson!.u64_padding[0]) / 10 ** assetToDecimal(o_token!)!;
                        Action = `Exercise ${size} ${o_token}`;
                    }
                    if (event.sender != event.parsedJson!.signer) {
                        Action = "Auto " + Action;
                    }
                    break;
                case "RefundEvent":
                    var token = typeArgToAsset("0x" + event.parsedJson!.token.name);
                    var amount = Number(event.parsedJson!.amount) / 10 ** assetToDecimal(token)!;
                    Action = "Rebate";
                    Amount = `${BigNumber(amount).toFixed()} ${token}`;
                    break;
                // case "ClaimProfitSharingEvent":
                //     var token = typeArgToAsset("0x" + event.parsedJson!.token.name);
                //     var amount = Number(event.parsedJson!.value) / 10 ** assetToDecimal(token)!;
                //     Action = "Claim Profit Sharing";
                //     Amount = `${BigNumber(amount).toFixed()} ${token}`;
                //     Tails = `#${event.parsedJson!.number}`;
                //     break;
                case "ClaimProfitSharingEventV2":
                    var token = typeArgToAsset("0x" + event.parsedJson!.token.name);
                    var amount = Number(event.parsedJson!.value) / 10 ** assetToDecimal(token)!;
                    // dice_profit, exp_profit
                    // TODO: filter amount != 0
                    switch (event.parsedJson!.name) {
                        case "dice_profit":
                            Action = "Harvest Dice Profit";
                            break;
                        case "exp_profit":
                            Action = "Harvest Leaderboard Prize";
                            break;
                    }
                    Amount = `${BigNumber(amount).toFixed()} ${token}`;
                    Tails = `#${event.parsedJson!.number}`;
                    break;
                case "NewBidEvent":
                    o_token = typeArgToAsset("0x" + event.parsedJson!.o_token.name);
                    b_token = typeArgToAsset("0x" + event.parsedJson!.b_token.name);

                    var size = Number(event.parsedJson!.size) / 10 ** assetToDecimal(o_token)!;
                    var bidder_balance = Number(event.parsedJson!.bidder_balance) / 10 ** assetToDecimal(b_token)!;

                    Action = action.slice(0, action.length - 5) + ` ${size} ${o_token}`;
                    Amount = `${BigNumber(bidder_balance).toFixed()} ${b_token}`;

                    if (event.sender != event.parsedJson!.signer) {
                        Action = "Auto " + Action;
                    }
                    break;
                default:
                    return txHistory;
            }
            txHistory.push({
                Index,
                Period,
                Action,
                Amount,
                Vault,
                RiskLevel,
                Tails,
                Exp,
                Date: new Date(Number(event.timestampMs)),
                txDigest: event.id.txDigest,
            });

            return txHistory;
        }, Promise.resolve(new Array<TxHistory>()));

    return results.filter((result) => result.Action);
}

export async function getFromSentio(event: string, userAddress: string, startTimestamp: string): Promise<any[]> {
    const apiUrl = "https://app.sentio.xyz/api/v1/analytics/typus/typus_v2/sql/execute";

    const headers = {
        "api-key": "tz3JJ6stG7Fux6ueRSRA5mdpC9U0lozI3",
        "Content-Type": "application/json",
    };

    const requestData = {
        sqlQuery: {
            sql: `
                SELECT *
                FROM ${event}
                WHERE distinct_id = "${userAddress}" && timestamp >= ${startTimestamp}
                ORDER BY timestamp DESC;
            `,
            size: 1000,
        },
    };

    const jsonData = JSON.stringify(requestData);

    let response = await fetch(apiUrl, {
        method: "POST",
        headers,
        body: jsonData,
    });

    let data = await response.json();

    return data.result.rows as any[];
}

export async function getNewBidFromSentio(vaults: { [key: string]: Vault }, userAddress: string, startTimestamp: number) {
    const apiUrl = "https://app.sentio.xyz/api/v1/analytics/typus/typus_v2/sql/execute";

    const headers = {
        "api-key": "tz3JJ6stG7Fux6ueRSRA5mdpC9U0lozI3",
        "Content-Type": "application/json",
    };

    const requestData = {
        sqlQuery: {
            sql: `
                SELECT *
                FROM NewBid N
                LEFT JOIN (
                    SELECT number, distinct_id, exp_earn, transaction_hash, log_index
                    FROM ExpUp
                ) S ON N.transaction_hash = S.transaction_hash && N.log_index + 1 = S.log_index
                WHERE N.distinct_id = "${userAddress}" && N.timestamp >= ${startTimestamp}
                ORDER BY N.timestamp DESC;
            `,
            size: 1000,
        },
    };

    const jsonData = JSON.stringify(requestData);

    let response = await fetch(apiUrl, {
        method: "POST",
        headers,
        body: jsonData,
    });

    let data = await response.json();

    return data.result.rows.map((x) => {
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
    const apiUrl = "https://app.sentio.xyz/api/v1/analytics/typus/typus_v2/sql/execute";

    const headers = {
        "api-key": "tz3JJ6stG7Fux6ueRSRA5mdpC9U0lozI3",
        "Content-Type": "application/json",
    };

    const requestData = {
        sqlQuery: {
            sql: `
                SELECT *
                FROM Exercise N
                WHERE N.distinct_id = "${userAddress}" && N.timestamp >= ${startTimestamp}
                ORDER BY N.timestamp DESC;
            `,
            size: 1000,
        },
    };

    const jsonData = JSON.stringify(requestData);

    let response = await fetch(apiUrl, {
        method: "POST",
        headers,
        body: jsonData,
    });

    let data = await response.json();

    return data.result.rows.map((x) => {
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

function parseVaultInfo(vaults: { [key: string]: Vault }, Index: string, action: string) {
    let v = vaults[Index];

    let Period: string | undefined;
    let Vault: string | undefined;
    let RiskLevel: string | undefined;
    var d_token: string | undefined;
    var b_token: string | undefined;
    var o_token: string | undefined;

    let period: string;

    if (v) {
        switch (v.info.period) {
            case "0":
                period = "Daily";
                break;
            case "1":
                period = "Weekly";
                break;
            case "2":
                period = "Monthly";
                break;
            case "3":
                period = "Hourly";
                break;
            case "4":
                period = "10 Minutes";
                break;
            default:
                period = "";
                break;
        }
        Period = period;
        let optionType: string;
        switch (v.info.optionType) {
            case "0":
                switch (action) {
                    case "DepositEvent":
                    case "WithdrawEvent":
                    case "UnsubscribeEvent":
                    case "ClaimEvent":
                    case "CompoundEvent":
                    case "HarvestEvent":
                    case "RedeemEvent":
                        optionType = "Covered Call";
                        break;
                    default:
                        optionType = "Call";
                        break;
                }
                break;
            case "1":
                switch (action) {
                    case "DepositEvent":
                    case "WithdrawEvent":
                    case "UnsubscribeEvent":
                    case "ClaimEvent":
                    case "CompoundEvent":
                    case "HarvestEvent":
                    case "RedeemEvent":
                        optionType = "Put Selling";
                        break;
                    default:
                        optionType = "Put";
                        break;
                }
                break;
            case "2":
                optionType = "Call Spread";
                break;
            case "3":
                optionType = "Put Spread";
                break;
            case "4":
                optionType = "Capped Call";
                break;
            case "5":
                optionType = "Capped Put";
                break;
            case "6":
                switch (action) {
                    case "DepositEvent":
                    case "WithdrawEvent":
                    case "UnsubscribeEvent":
                    case "ClaimEvent":
                    case "CompoundEvent":
                    case "HarvestEvent":
                    case "RedeemEvent":
                        optionType = "Call Selling";
                        break;
                    default:
                        optionType = "Capped Call";
                        break;
                }
                break;
            default:
                optionType = "";
                break;
        }
        switch (v.config.riskLevel) {
            case "1":
                RiskLevel = "Conservative";
                break;
            case "2":
                RiskLevel = "Moderate";
                break;
            case "3":
                RiskLevel = "Aggressive";
                break;
            default:
                RiskLevel = "";
                break;
        }
        Vault = `${v.info.settlementBaseName} ${period} ${optionType}`;
        d_token = typeArgToAsset("0x" + v.info.depositToken);
        b_token = typeArgToAsset("0x" + v.info.bidToken);
        o_token = typeArgToAsset("0x" + v.info.settlementBase);
    }
    return [Period, Vault, RiskLevel, d_token, b_token, o_token];
}
