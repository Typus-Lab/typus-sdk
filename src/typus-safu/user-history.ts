import { EventId, SuiClient, SuiEvent, SuiEventFilter } from "@mysten/sui.js/client";
import { BcsReader } from "@mysten/bcs";
import { assetToDecimal, typeArgToAsset } from "src/constants";

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

export async function parseTxHistory(
    datas: Array<any>,
    originPackage: string // safu package
): Promise<Array<TxHistory>> {
    const results = await datas
        .filter((event) => {
            return event.packageId == originPackage;
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

            const action = event.parsedJson!.action;
            const log = event.parsedJson!.log;
            // skip the event without tokenType
            if (event.parsedJson!.bcs_padding.length > 0) {
                const reader = new BcsReader(new Uint8Array(event.parsedJson!.bcs_padding[0]));
                const Token = String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8())));
                const asset = typeArgToAsset(Token);
                const decimal = assetToDecimal(asset);
                // console.log(asset, decimal);

                switch (action) {
                    case "raise_fund":
                        if (Number(log[2]) + Number(log[3]) + Number(log[4]) > 0) {
                            txHistory.push({
                                Action: "Deposit",
                                Index: log[0],
                                Amount: divByDecimal(Number(log[2]) + Number(log[3]) + Number(log[4]), decimal!),
                                Token,
                                Exp: log[6],
                                Date: new Date(Number(event.timestampMs)),
                                txDigest: event.id.txDigest,
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
                                Date: new Date(Number(event.timestampMs)),
                                txDigest: event.id.txDigest,
                                log,
                            });
                        }
                        break;
                    case "reduce_fund":
                        if (Number(log[2]) > 0) {
                            txHistory.push({
                                Action: "Withdraw",
                                Index: log[0],
                                Amount: divByDecimal(Number(log[2]), decimal!),
                                Token,
                                Exp: log[5],
                                Date: new Date(Number(event.timestampMs)),
                                txDigest: event.id.txDigest,
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
                                Date: new Date(Number(event.timestampMs)),
                                txDigest: event.id.txDigest,
                                log,
                            });
                        }
                        if (Number(log[4]) > 0) {
                            txHistory.push({
                                Action: "Claim",
                                Index: log[0],
                                Amount: divByDecimal(Number(log[4]), decimal!),
                                Token,
                                Exp: log[5],
                                Date: new Date(Number(event.timestampMs)),
                                txDigest: event.id.txDigest,
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
                            Date: new Date(Number(event.timestampMs)),
                            txDigest: event.id.txDigest,
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
        const index = history.Index!;
        const [amount, token] = [history.Amount, history.Token];
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
