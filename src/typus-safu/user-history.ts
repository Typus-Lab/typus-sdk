import { fromBase64 } from '@mysten/bcs';
import { bcs } from '@mysten/sui/bcs';
import { Event } from "src/utils";
import { assetToDecimal, typeArgToAsset } from "src/constants";
import BigNumber from "bignumber.js";

export interface TxHistory {
    Action: string;
    Index: string;
    Amount: string;
    Token: string;
    Exp: string | undefined;
    Date: Date;
    txDigest: string;
    log: string[];
}

export async function parseTxHistory(datas: Event[]): Promise<Array<TxHistory>> {
    console.log(datas[0])
    let results = await datas
        .filter((event) => {
            return (
                event.contents?.type?.repr.includes("safu") ||
                event.contents?.type?.repr == "0x7dab89563066afa000ee154738aac2cc8e7d3e26cd0b470183db63630ee9f965::funding_vault::RaiseFundEvent"
            );
        })
        .sort((a, b) => {
            // From Old to New!
            if (a.timestamp == b.timestamp) {
                return Number(a.sequenceNumber) - Number(b.sequenceNumber);
            } else {
                return Number(a.timestamp) - Number(b.timestamp);
            }
        })
        .reduce(async (promise, event) => {
            let txHistory: TxHistory[] = await promise;
            // console.log(event);

            if (event.contents?.type?.repr == "0x7dab89563066afa000ee154738aac2cc8e7d3e26cd0b470183db63630ee9f965::funding_vault::RaiseFundEvent") {
                //@ts-ignore
                let log = event.contents?.json?.log;
                if (log.length > 1) {
                    txHistory.push({
                        Action: "Deposit",
                        Index: `deepbook/${log[0]}`,
                        Amount: divByDecimal(Number(log[1]), 9),
                        //@ts-ignore
                        Token: event.contents?.json?.token,
                        Exp: undefined,
                        Date: new Date(Number(event.timestamp)),
                        //@ts-ignore
                        txDigest: event.transaction?.digest,
                        log,
                    });
                } else {
                    txHistory.push({
                        Action: "Deposit",
                        Index: "deepbook/0",
                        Amount: divByDecimal(Number(log[0]), 9),
                        //@ts-ignore
                        Token: event.contents?.json?.token,
                        Exp: undefined,
                        Date: new Date(Number(event.timestamp)),
                        //@ts-ignore
                        txDigest: event.transaction?.digest,
                        log,
                    });
                }
                return txHistory;
            }

            //@ts-ignore
            let action = event.contents!.json.action;
            //@ts-ignore
            let log = event.contents!.json.log;
            // skip the event without tokenType
            //@ts-ignore
            if (event.contents!.json.bcs_padding.length > 0) {
                //@ts-ignore
                let reader = fromBase64(event.contents!.json.bcs_padding[0]);
                let Token = bcs.string().parse(reader);
                let asset = typeArgToAsset(Token);
                let decimal = assetToDecimal(asset);
                // console.log(asset, decimal);

                switch (action) {
                    case "raise_fund":
                        // balance_value, deactivating_value, inactive_value,
                        // Number(log[2]) + Number(log[3]) + Number(log[4])
                        if (Number(log[2]) > 0) {
                            txHistory.push({
                                Action: "Deposit",
                                Index: log[0],
                                Amount: divByDecimal(Number(log[2]), decimal!),
                                Token,
                                Exp: log[6],
                                Date: new Date(Number(event.timestamp)),
                                //@ts-ignore
                                txDigest: event.transaction?.digest,
                                log,
                            });
                        }
                        if (Number(log[3]) > 0) {
                            txHistory.push({
                                Action: "Subscribe",
                                Index: log[0],
                                Amount: divByDecimal(Number(log[3]), decimal!),
                                Token,
                                Exp: log[6],
                                Date: new Date(Number(event.timestamp)),
                                //@ts-ignore
                                txDigest: event.transaction?.digest,
                                log,
                            });
                        }
                        if (Number(log[4]) > 0) {
                            txHistory.push({
                                Action: "Withdraw",
                                Index: log[0],
                                Amount: divByDecimal(Number(log[4]), decimal!),
                                Token,
                                Exp: log[6],
                                Date: new Date(Number(event.timestamp)),
                                //@ts-ignore
                                txDigest: event.transaction?.digest,
                                log,
                            });
                            txHistory.push({
                                Action: "Deposit",
                                Index: log[0],
                                Amount: divByDecimal(Number(log[4]), decimal!),
                                Token,
                                Exp: undefined,
                                Date: new Date(Number(event.timestamp)),
                                //@ts-ignore
                                txDigest: event.transaction?.digest,
                                log,
                            });
                        }
                        if (Number(log[5]) > 0) {
                            txHistory.push({
                                Action: "Compound",
                                Index: log[0],
                                Amount: divByDecimal(Number(log[5]), decimal!),
                                Token,
                                Exp: log[6],
                                Date: new Date(Number(event.timestamp)),
                                //@ts-ignore
                                txDigest: event.transaction?.digest,
                                log,
                            });
                        }
                        break;
                    case "reduce_fund":
                        const totalWithdrawAmount = BigNumber(log[2]).plus(log[4]);
                        if (totalWithdrawAmount.gt(0)) {
                            txHistory.push({
                                Action: "Withdraw",
                                Index: log[0],
                                Amount: divByDecimal(totalWithdrawAmount.toNumber(), decimal!),
                                Token,
                                Exp: log[5],
                                Date: new Date(Number(event.timestamp)),
                                //@ts-ignore
                                txDigest: event.transaction?.digest,
                                log,
                            });
                        }

                        if (Number(log[3]) > 0) {
                            txHistory.push({
                                Action: "Unsubscribe",
                                Index: log[0],
                                Amount: divByDecimal(Number(log[3]), decimal!),
                                Token,
                                Exp: log[5],
                                Date: new Date(Number(event.timestamp)),
                                //@ts-ignore
                                txDigest: event.transaction?.digest,
                                log,
                            });
                        }

                        break;
                    case "claim_reward":
                        txHistory.push({
                            Action: "Harvest Options Profit",
                            Index: log[0],
                            Amount: divByDecimal(Number(log[2]), decimal!),
                            Token,
                            Exp: undefined,
                            Date: new Date(Number(event.timestamp)),
                            //@ts-ignore
                            txDigest: event.transaction?.digest,
                            log,
                        });
                        break;
                }
            }

            return txHistory;
        }, Promise.resolve(new Array<TxHistory>()));

    return results;
}

function divByDecimal(numerator: number, decimal: number): string {
    return (numerator / 10 ** decimal).toString();
}

export function getDepositorCashFlows(userHistory: TxHistory[]) {
    let depositorCashFlows = new Map<string, DepositorCashFlow>();

    for (let history of userHistory) {
        let index = history.Index!;
        let [amount, token] = [history.Amount, history.Token];
        if (history.Action! == "Harvest Options Profit") {
            if (depositorCashFlows.has(index)) {
                let depositorCashFlow = depositorCashFlows.get(index)!;
                let totalHarvest = depositorCashFlow.totalHarvest;
                if (totalHarvest.has(token)) {
                    let sum = totalHarvest.get(token)!;
                    totalHarvest.set(token, sum + Number(amount));
                } else {
                    totalHarvest.set(token, Number(amount));
                }
                depositorCashFlow.totalHarvest = totalHarvest;
                depositorCashFlows.set(index, depositorCashFlow);
            } else {
                let totalHarvest = new Map();
                totalHarvest.set(token, Number(amount));
                let depositorCashFlow: DepositorCashFlow = {
                    D_TOKEN: undefined,
                    totalDeposit: 0,
                    totalWithdraw: 0,
                    totalClaim: 0,
                    totalCompound: 0,
                    netDeposit: undefined,
                    totalHarvest,
                };
                depositorCashFlows.set(index, depositorCashFlow);
            }
        } else if (history.Action! == "Deposit") {
            if (depositorCashFlows.has(index)) {
                let depositorCashFlow = depositorCashFlows.get(index)!;
                depositorCashFlow.D_TOKEN = token;
                depositorCashFlow.totalDeposit += Number(amount);
                depositorCashFlows.set(index, depositorCashFlow);
            } else {
                let depositorCashFlow: DepositorCashFlow = {
                    D_TOKEN: token,
                    totalDeposit: Number(amount),
                    totalWithdraw: 0,
                    totalClaim: 0,
                    totalCompound: 0,
                    netDeposit: undefined,
                    totalHarvest: new Map(),
                };
                depositorCashFlows.set(index, depositorCashFlow);
            }
        } else if (history.Action! == "Withdraw") {
            if (depositorCashFlows.has(index)) {
                let depositorCashFlow = depositorCashFlows.get(index)!;
                depositorCashFlow.D_TOKEN = token;
                depositorCashFlow.totalWithdraw += Number(amount);
                depositorCashFlows.set(index, depositorCashFlow);
            } else {
                let depositorCashFlow: DepositorCashFlow = {
                    D_TOKEN: token,
                    totalDeposit: 0,
                    totalWithdraw: Number(amount),
                    totalClaim: 0,
                    totalCompound: 0,
                    netDeposit: undefined,
                    totalHarvest: new Map(),
                };
                depositorCashFlows.set(index, depositorCashFlow);
            }
        } else if (history.Action! == "Claim") {
            if (depositorCashFlows.has(index)) {
                let depositorCashFlow = depositorCashFlows.get(index)!;
                depositorCashFlow.D_TOKEN = token;
                depositorCashFlow.totalClaim += Number(amount);
                depositorCashFlows.set(index, depositorCashFlow);
            } else {
                let depositorCashFlow: DepositorCashFlow = {
                    D_TOKEN: token,
                    totalDeposit: 0,
                    totalWithdraw: 0,
                    totalClaim: Number(amount),
                    totalCompound: 0,
                    netDeposit: undefined,
                    totalHarvest: new Map(),
                };
                depositorCashFlows.set(index, depositorCashFlow);
            }
        } else if (history.Action! == "Compound") {
            if (depositorCashFlows.has(index)) {
                let depositorCashFlow = depositorCashFlows.get(index)!;
                depositorCashFlow.D_TOKEN = token;
                depositorCashFlow.totalCompound += Number(amount);
                depositorCashFlows.set(index, depositorCashFlow);
            } else {
                let depositorCashFlow: DepositorCashFlow = {
                    D_TOKEN: token,
                    totalDeposit: 0,
                    totalWithdraw: 0,
                    totalClaim: 0,
                    totalCompound: Number(amount),
                    netDeposit: undefined,
                    totalHarvest: new Map(),
                };
                depositorCashFlows.set(index, depositorCashFlow);
            }
        }
    }
    // console.log(depositorCashFlows);

    for (let [index, share] of depositorCashFlows.entries()) {
        share.netDeposit = share.totalDeposit + share.totalCompound - share.totalWithdraw - share.totalClaim;
        depositorCashFlows.set(index, share);
    }

    return depositorCashFlows;
}

export interface DepositorCashFlow {
    D_TOKEN: string | undefined;
    totalDeposit: number;
    totalWithdraw: number;
    totalClaim: number;
    totalCompound: number;
    netDeposit: number | undefined;
    totalHarvest: Map<string, number>;
}
