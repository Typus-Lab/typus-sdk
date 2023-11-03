import { JsonRpcProvider, SuiEventFilter } from "@mysten/sui.js";
import { Vault } from "./view-function";
import { assetToDecimal, typeArgToAsset } from "../token";
import BigNumber from "bignumber.js";

export async function getUserHistory(
    provider: JsonRpcProvider,
    originPackage: string,
    vaults: { [key: string]: Vault },
    sender: string,
    startTimeMs: number
): Promise<TxHistory[]> {
    const senderFilter: SuiEventFilter = {
        Sender: sender,
    };

    var result = await provider.queryEvents({ query: senderFilter, order: "descending" });
    // console.log(result);

    var txHistory = await parseTxHistory(result.data, originPackage, vaults);

    while (result.hasNextPage) {
        result = await provider.queryEvents({ query: senderFilter, cursor: result.nextCursor });
        const nextPage = await parseTxHistory(result.data, originPackage, vaults);
        txHistory = txHistory.concat(nextPage);
        if (result.hasNextPage && Number(result.data[24].timestampMs) < startTimeMs) {
            break;
        }
    }

    return txHistory;
}

interface TxHistory {
    Action: string;
    Amount: string | undefined;
    Vault: string | undefined;
    RiskLevel: string | undefined;
    Tails: string | undefined;
    Exp: string | undefined;
    Date: Date;
    txDigest: string;
}

async function parseTxHistory(datas: Array<any>, originPackage: string, vaults: { [key: string]: Vault }): Promise<Array<TxHistory>> {
    const results = await datas
        .filter((event) => {
            const type: string = event.type;
            return type.startsWith(originPackage) || type.includes("typus_nft::First") || type.includes("typus_nft::ExpUpEvent");
        })
        .reduce(async (promise, event) => {
            let txHistory: TxHistory[] = await promise;
            // console.log(event);
            const functionType = new RegExp("^([^::]+)::([^::]+)::([^<]+)").exec(event.type)?.slice(1, 4)!;
            const action = functionType[2];
            // console.log(action);

            let Action: string;
            let Amount: string | undefined;
            let Vault: string | undefined;
            let RiskLevel: string | undefined;
            let Tails: string | undefined;
            let Exp: string | undefined;
            var o_token: string | undefined;

            if (event.parsedJson!.index) {
                let v = vaults[event.parsedJson!.index];
                if (v) {
                    let period: string;
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
                        default:
                            period = "";
                            break;
                    }
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
                    o_token = typeArgToAsset("0x" + v.info.settlementBase);
                }
            }

            switch (action) {
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
                    var i = txHistory.findIndex((x) => x.txDigest == event.id.txDigest && x.Action != "First Deposit");
                    if (i != -1) {
                        txHistory[i].Tails = `#${event.parsedJson!.number}`;
                        txHistory[i].Exp = event.parsedJson!.exp_earn;
                        return txHistory;
                    } else {
                        Action = "Collect EXP";
                        Tails = `#${event.parsedJson!.number}`;
                        Exp = event.parsedJson!.exp_earn;
                    }
                    break;
                case "TransferNftEvent":
                    Action = "Transfer";
                    Amount = "0.01 SUI";
                    Tails = `#${event.parsedJson!.number}`;
                    break;
                case "DailyAttendEvent":
                    Action = "Check In";
                    Tails = `#${event.parsedJson!.number}`;
                    Exp = "10";
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
                    Tails = `#${event.parsedJson!.number}`;
                    break;
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
                    Amount = `${BigNumber(amount).toFixed()} ${token}`;
                    if (i != -1) {
                        txHistory[i].Action = Action;
                        txHistory[i].Amount = Amount;
                        txHistory[i].Vault = Vault;
                        txHistory[i].RiskLevel = RiskLevel;
                        return txHistory;
                    }
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
                    break;
                case "RefundEvent":
                    var token = typeArgToAsset("0x" + event.parsedJson!.token.name);
                    var amount = Number(event.parsedJson!.amount) / 10 ** assetToDecimal(token)!;
                    Action = "Rebate";
                    Amount = `${BigNumber(amount).toFixed()} ${token}`;
                    break;
                case "NewBidEvent":
                    var i = txHistory.findIndex((x) => x.txDigest == event.id.txDigest);
                    o_token = typeArgToAsset("0x" + event.parsedJson!.o_token.name);
                    var b_token = typeArgToAsset("0x" + event.parsedJson!.b_token.name);

                    var size = Number(event.parsedJson!.size) / 10 ** assetToDecimal(o_token)!;
                    var bidder_balance = Number(event.parsedJson!.bidder_balance) / 10 ** assetToDecimal(b_token)!;

                    Action = action.slice(0, action.length - 5) + ` ${size} ${o_token}`;
                    Amount = `${BigNumber(bidder_balance).toFixed()} ${b_token}`;

                    if (i != -1) {
                        txHistory[i].Action = Action;
                        txHistory[i].Amount = Amount;
                        txHistory[i].Vault = Vault;
                        txHistory[i].RiskLevel = RiskLevel;
                        return txHistory;
                    }
                    break;
                default:
                    return txHistory;
            }
            txHistory.push({
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
