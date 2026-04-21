import { Vault } from "src/typus-dov-single-v2";
import { assetToDecimal, TOKEN, typeArgToAsset } from "src/constants";
import BigNumber from "bignumber.js";
export { getNewBidFromSentio, getExerciseFromSentio } from "src/utils/api/sentio/events";
import { DropVaults } from "src/constants/valut";
import { SuiGraphQLClient } from "@mysten/sui/graphql";
import { getEvents } from "src/utils/graphQl";

export async function getUserEvents(graphQlClient: SuiGraphQLClient, sender: string, cursor?: string | null) {
    const { events, beforeCursor } = await getEvents(graphQlClient, null, sender, cursor);
    // console.log(events.map(x => x.timestamp))
    return { events: events.reverse(), beforeCursor };
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

export async function parseTxHistory(datas: Array<any>, vaults: { [key: string]: Vault }): Promise<Array<TxHistory>> {
    let results = await datas
        .filter((event) => {
            let type: string = event.contents.type.repr;
            return (
                event.transactionModule == "tds_user_entry" ||
                type.includes("typus_dov_single") ||
                type.includes("auto_bid") ||
                type.includes("typus_nft::First") ||
                type.includes("typus_nft::ExpUpEvent") ||
                type.includes("tails_staking")
            );
        })
        .reduce(async (promise, event) => {
            let txHistory: TxHistory[] = await promise;
            // console.log(event);
            let functionType = new RegExp("^([^::]+)::([^::]+)::([^<]+)").exec(event.contents.type.repr)?.slice(1, 4)!;
            let action = functionType[2];
            let json = event.contents.json;

            let Action: string | undefined;
            let Amount: string | undefined;
            let Index: string | undefined;
            let Period: string | undefined;
            let Vault: string | undefined;
            let RiskLevel: string | undefined;
            var Tails: string | undefined = undefined;
            let Exp: string | undefined;
            var d_token: TOKEN | undefined;
            var b_token: TOKEN | undefined;
            var o_token: TOKEN | undefined;

            Index = json.index || json.vault_index;
            if (Index) {
                [Period, Vault, RiskLevel, d_token, b_token, o_token] = parseVaultInfo(vaults, Index, action);
            }

            switch (action) {
                // new version events
                case "StakeTailsEvent":
                    Action = "Stake";
                    Amount = "0.05 SUI";
                    Tails = `#${json.log[0]}`;
                    break;
                case "UnstakeTailsEvent":
                    Action = "Unstake";
                    Tails = `#${json.log[0]}`;
                    break;
                case "DailySignUpEvent":
                    Action = "Check In";
                    if (json.log[1]) {
                        Amount = `${Number(json.log[1]) / 10 ** 9} SUI`;
                    }
                    Tails = json.tails.map((num) => `#${num}`).join(" ");
                    Exp = json.log[0];
                    break;
                case "TransferTailsEvent":
                    Action = "Transfer";
                    Amount = "0.01 SUI";
                    Tails = `#${json.log[0]}`;
                    break;
                case "ExpUpEvent":
                    if (json.log) {
                        Action = "Train Tail";
                        Tails = `#${json.log[0]}`;
                        Exp = json.log[1];
                        if (Number(Exp) == 0) {
                            return txHistory;
                        }
                    }
                    break;
                case "ExpDownEvent":
                    Action = "Extract Exp";
                    Tails = `#${json.log[0]}`;
                    Exp = json.log[1];
                    break;
                case "LevelUpEvent":
                    if (json.log) {
                        Action = `Level Up to Level ${json.log[1]}`;
                        Tails = `#${json.log[0]}`;
                    }
                    break;
                case "ClaimProfitSharingEvent":
                    if (json.profit_asset) {
                        var token = typeArgToAsset("0x" + json.profit_asset);
                        var amount = Number(json.log[0]) / 10 ** assetToDecimal(token)!;
                        Action = "Harvest Dice Profit";
                        Tails = json.tails.map((num) => `#${num}`).join(" ");
                        Amount = `${BigNumber(amount).toFixed()} ${token}`;
                    }
                    break;
                // old version events
                case "StakeNftEvent":
                    Action = "Stake";
                    Amount = "0.05 SUI";
                    Tails = `#${json.number}`;
                    break;
                case "UnstakeNftEvent":
                    Action = "Unstake";
                    Tails = `#${json.number}`;
                    break;
                case "ExpUpEvent":
                    var i = txHistory.findIndex(
                        (x) => x.txDigest == event.transaction.digest && x.Action != "First Deposit" && x.Action != "Stake"
                    );
                    if (i != -1 && txHistory[i].Tails == undefined) {
                        txHistory[i].Tails = `#${json.number}`;
                        txHistory[i].Exp = json.exp_earn;
                        return txHistory;
                    } else if (event.id.eventSeq == 0) {
                        Action = "Collect EXP";
                        Tails = `#${json.number}`;
                        Exp = json.exp_earn;
                    } else {
                        return txHistory;
                    }
                    break;
                case "TransferNftEvent":
                    Action = "Transfer";
                    Amount = "0.01 SUI";
                    Tails = `#${json.number}`;
                    break;
                case "DailyAttendEvent":
                    var i = txHistory.findIndex((x) => x.txDigest == event.transaction.digest && x.Action == "Collect EXP");
                    if (i != -1) {
                        txHistory[i].Action = "Check In";
                        return txHistory;
                    }
                    break;
                case "FirstDepositEvent":
                    Action = "First Deposit";
                    Tails = `#${json.number}`;
                    Exp = json.exp_earn;
                    break;
                case "FirstBidEvent":
                    Action = "First Bid";
                    Tails = `#${json.number}`;
                    Exp = json.exp_earn;
                    break;
                case "LevelUpEvent":
                    Action = `Level Up to Level ${json.level}`;
                    if (json.number) {
                        Tails = `#${json.number}`;
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
                    var i = txHistory.findIndex((x) => x.txDigest == event.transaction.digest && x.Action == "Collect EXP");
                    var token = typeArgToAsset("0x" + json.token);
                    var amount = Number(json.amount) / 10 ** Number(json.decimal);
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
                    Index = json.log[0];
                    [Period, Vault, RiskLevel, d_token, b_token, o_token] = parseVaultInfo(vaults, Index!, action);
                    var token = typeArgToAsset("0x" + json.token);
                    if (json.log[4] > 0) {
                        // deposit
                        Action = "Deposit";
                        var amount = Number(json.log[4]) / 10 ** assetToDecimal(token)!;
                        Amount = `${BigNumber(amount).toFixed()} ${token}`;
                    } else if (json.log[5] > 0) {
                        // compound
                        Action = "Compound";
                        var amount = Number(json.log[5]) / 10 ** assetToDecimal(token)!;
                        Amount = `${BigNumber(amount).toFixed()} ${token}`;
                    }
                    break;
                case "ReduceFundEvent":
                    Index = json.log[0];
                    [Period, Vault, RiskLevel, d_token, b_token, o_token] = parseVaultInfo(vaults, Index!, action);
                    if (json.log[4] > 0) {
                        // withdraw
                        Action = "Withdraw";
                        var token = typeArgToAsset("0x" + json.d_token);
                        var amount = Number(json.log[4]) / 10 ** assetToDecimal(token)!;
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
                            Date: new Date(event.timestamp),
                            txDigest: event.transaction.digest,
                        });
                    }
                    if (json.log[5] > 0) {
                        // unsubscribe
                        Action = "Unsubscribe";
                        var token = typeArgToAsset("0x" + json.d_token);
                        var amount = Number(json.log[5]) / 10 ** assetToDecimal(token)!;
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
                            Date: new Date(event.timestamp),
                            txDigest: event.transaction.digest,
                        });
                    }
                    if (json.log[9] > 0) {
                        // claim
                        Action = "Claim";
                        var token = typeArgToAsset("0x" + json.d_token);
                        var amount = Number(json.log[9]) / 10 ** assetToDecimal(token)!;
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
                            Date: new Date(event.timestamp),
                            txDigest: event.transaction.digest,
                        });
                    }
                    if (json.log[6] > 0 && json.log[10] > 0) {
                        // Harvest d token and i token
                        Action = "Harvest Reward";
                        var b_token_name = typeArgToAsset("0x" + json.b_token);
                        var b_token_amount = Number(json.log[6]) / 10 ** assetToDecimal(b_token_name)!;

                        var i_token_name = typeArgToAsset("0x" + json.i_token);
                        var i_token_amount = Number(json.log[10]) / 10 ** assetToDecimal(i_token_name)!;

                        Amount = `${BigNumber(b_token_amount).toFixed()} ${b_token_name!}\n${BigNumber(i_token_amount).toFixed()} ${i_token_name!}`;

                        // var amount =
                        //     Number(json.log[6]) / 10 ** assetToDecimal(token)!
                        //     Number(json.log[10]) / 10 ** assetToDecimal(token)!;
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
                            Date: new Date(event.timestamp),
                            txDigest: event.transaction.digest,
                        });
                    } else {
                        if (json.log[6] > 0) {
                            // harvest
                            Action = "Harvest Reward";
                            var token = typeArgToAsset("0x" + json.b_token);
                            var amount = Number(json.log[6]) / 10 ** assetToDecimal(token)!;
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
                                Date: new Date(event.timestamp),
                                txDigest: event.transaction.digest,
                            });
                        }
                        if (json.log[10] > 0) {
                            // redeem
                            Action = "Harvest Reward";
                            var token = typeArgToAsset("0x" + json.i_token);
                            var amount = Number(json.log[10]) / 10 ** assetToDecimal(token)!;
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
                                Date: new Date(event.timestamp),
                                txDigest: event.transaction.digest,
                            });
                        }
                    }

                    return txHistory;
                case "NewStrategyEventV2":
                    Action = "Create Strategy";
                    var deposit_amount = Number(json.deposit_amount) / 10 ** assetToDecimal(b_token!)!;
                    Amount = `${BigNumber(deposit_amount).toFixed()} ${b_token!}`;
                    break;
                case "UpdateStrategyEvent":
                    Action = "Update Strategy";
                    var deposit_amount = Number(json.deposit_amount) / 10 ** assetToDecimal(b_token!)!;
                    Amount = `${BigNumber(deposit_amount).toFixed()} ${b_token!}`;
                    break;
                case "CloseStrategyEventV2":
                    Action = "Close Strategy";
                    if (b_token == d_token) {
                        var balance = (Number(json.u64_padding[0]) + Number(json.u64_padding[1])) / 10 ** assetToDecimal(b_token!)!;
                        Amount = `${BigNumber(balance).toFixed()} ${b_token!}`;
                    } else {
                        var balance = Number(json.u64_padding[0]) / 10 ** assetToDecimal(b_token!)!;
                        var profit = Number(json.u64_padding[1]) / 10 ** assetToDecimal(d_token!)!;
                        Amount = `${BigNumber(balance).toFixed()} ${b_token!}\n${BigNumber(profit).toFixed()} ${d_token!}`;
                    }
                    break;
                case "WithdrawProfitEvent":
                    Action = "Harvest Gain";
                    var profit = Number(json.profit) / 10 ** assetToDecimal(d_token!)!;
                    Amount = `${BigNumber(profit).toFixed()} ${d_token!}`;
                    break;
                case "RedeemEvent":
                    if (event.type == "0xc654c3634a10567b329de1226c2629cae39cdc16ec5d594897d87b250d46e958::typus_dov_single::RedeemEvent") {
                        break;
                    }
                    var token = typeArgToAsset("0x" + json.token);
                    var amount = Number(json.amount) / 10 ** assetToDecimal(token)!;
                    Action = "Harvest Reward";
                    Amount = `${BigNumber(amount).toFixed()} ${token}`;
                    Index = Index;
                    break;
                case "TransferBidReceiptEvent":
                    var amount = Number(json.amount) / 10 ** Number(json.decimal);
                    Action = "Transfer Receipt";
                    Amount = `${BigNumber(amount).toFixed()} ${o_token}`;
                    break;
                case "ExerciseEvent":
                    var token = typeArgToAsset("0x" + json.token);
                    var amount = Number(json.amount) / 10 ** assetToDecimal(token)!;
                    Action = "Exercise";
                    Amount = `${BigNumber(amount).toFixed()} ${token}`;
                    if (json.u64_padding[0]) {
                        var size = Number(json.u64_padding[0]) / 10 ** assetToDecimal(o_token!)!;
                        Action = `Exercise ${size} ${o_token}`;
                    }
                    if (event.sender != json.signer) {
                        Action = "Auto " + Action;
                    }
                    break;
                case "RefundEvent":
                    var token = typeArgToAsset("0x" + json.token);
                    var amount = Number(json.amount) / 10 ** assetToDecimal(token)!;
                    Action = "Rebate";
                    Amount = `${BigNumber(amount).toFixed()} ${token}`;
                    break;
                // case "ClaimProfitSharingEvent":
                //     var token = typeArgToAsset("0x" + json.token);
                //     var amount = Number(json.value) / 10 ** assetToDecimal(token)!;
                //     Action = "Claim Profit Sharing";
                //     Amount = `${BigNumber(amount).toFixed()} ${token}`;
                //     Tails = `#${json.number}`;
                //     break;
                case "ClaimProfitSharingEventV2":
                    var token = typeArgToAsset("0x" + json.token);
                    var amount = Number(json.value) / 10 ** assetToDecimal(token)!;
                    // dice_profit, exp_profit
                    // TODO: filter amount != 0
                    switch (json) {
                        case "dice_profit":
                            Action = "Harvest Dice Profit";
                            break;
                        case "exp_profit":
                            Action = "Harvest Leaderboard Prize";
                            break;
                    }
                    Amount = `${BigNumber(amount).toFixed()} ${token}`;
                    Tails = `#${json.number}`;
                    break;
                case "NewBidEvent":
                    o_token = typeArgToAsset("0x" + json.o_token);
                    b_token = typeArgToAsset("0x" + json.b_token);

                    var size = Number(json.size) / 10 ** assetToDecimal(o_token)!;
                    var bidder_balance = Number(json.bidder_balance) / 10 ** assetToDecimal(b_token)!;

                    Action = action.slice(0, action.length - 5) + ` ${size} ${o_token}`;
                    Amount = `${BigNumber(bidder_balance).toFixed()} ${b_token}`;

                    if (event.sender != json.signer) {
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
                Date: new Date(event.timestamp),
                txDigest: event.transaction.digest,
            });

            return txHistory;
        }, Promise.resolve(new Array<TxHistory>()));

    return results.filter((result) => result.Action);
}

const parsePeriodName = (period: string) => {
    switch (period) {
        case "0":
            return "Daily";

        case "1":
            return "Weekly";
        case "2":
            return "Monthly";
        case "3":
            return "Hourly";
        case "4":
            return "10min";
        default:
            return "";
    }
};

const parseOptionTypeName = (optionType: string, action: string) => {
    let optionTypeName = "";
    switch (optionType) {
        case "0":
            switch (action) {
                case "DepositEvent":
                case "WithdrawEvent":
                case "UnsubscribeEvent":
                case "ClaimEvent":
                case "CompoundEvent":
                case "HarvestEvent":
                case "RedeemEvent":
                case "ReduceFundEvent":
                case "RaiseFundEvent":
                    optionTypeName = "Covered Call";
                    break;
                default:
                    optionTypeName = "Call";
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
                case "ReduceFundEvent":
                case "RaiseFundEvent":
                    optionTypeName = "Put Selling";
                    break;
                default:
                    optionTypeName = "Put";
                    break;
            }
            break;
        case "2":
            optionTypeName = "Call Spread";
            break;
        case "3":
            optionTypeName = "Put Spread";
            break;
        case "4":
            optionTypeName = "Capped Call";
            break;
        case "5":
            optionTypeName = "Capped Put";
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
                case "ReduceFundEvent":
                case "RaiseFundEvent":
                    // for depositor
                    optionTypeName = "Call Selling";
                    break;
                default:
                    // for bidder
                    optionTypeName = "Capped Call";
                    break;
            }
            break;
        default:
            optionTypeName = "";
            break;
    }
    return optionTypeName;
};

const parseRiskLevelName = (riskLevel: string) => {
    let riskLevelName = "";
    switch (riskLevel) {
        case "1":
            riskLevelName = "Conservative";
            break;
        case "2":
            riskLevelName = "Moderate";
            break;
        case "3":
            riskLevelName = "Aggressive";
            break;
        default:
            riskLevelName = "";
            break;
    }

    return riskLevelName;
};

export function parseVaultInfo(
    vaults: { [key: string]: Vault },
    Index: string,
    action: string
): [string | undefined, string | undefined, string | undefined, TOKEN | undefined, TOKEN | undefined, TOKEN | undefined] {
    const dropVaultIndexs = Object.keys(DropVaults);
    let v = vaults[Index];

    let Period: string | undefined;
    let Vault: string | undefined;
    let RiskLevel: string | undefined;
    var d_token: TOKEN | undefined;
    var b_token: TOKEN | undefined;
    var o_token: TOKEN | undefined;

    let period: string;

    if (v) {
        period = parsePeriodName(v.info.period);
        Period = period;

        let optionType: string;
        optionType = parseOptionTypeName(v.info.optionType, action);

        RiskLevel = parseRiskLevelName(v.config.riskLevel);

        Vault = `${v.info.settlementBaseName} ${period} ${optionType}`;
        d_token = typeArgToAsset("0x" + v.info.depositToken);
        b_token = typeArgToAsset("0x" + v.info.bidToken);
        o_token = typeArgToAsset("0x" + v.info.settlementBase);
    } else if (dropVaultIndexs.includes(Index)) {
        period = parsePeriodName(DropVaults[Index].period);
        Period = period;

        let optionType = parseOptionTypeName(DropVaults[Index].optionType, action);
        RiskLevel = parseRiskLevelName("1");

        Vault = `TYPUS ${period} ${optionType}`;
        d_token = "TYPUS";
        b_token = "TYPUS";
        o_token = "TYPUS";
    }

    return [Period, Vault, RiskLevel, d_token, b_token, o_token];
}

export function getDepositorCashFlows(userHistory: TxHistory[]) {
    let depositorCashFlows = new Map<string, DepositorCashFlow>();

    for (let history of userHistory) {
        let index = history.Index!;

        if (history.Action!.startsWith("Harvest Reward")) {
            let historyAmounts = history.Amount?.split("\n")!;
            for (let historyAmount of historyAmounts) {
                let [amount, token] = historyAmount.split(" ")!;
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
            }
        } else if (history.Action!.startsWith("Deposit")) {
            let [amount, token] = history.Amount?.split(" ")!;
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
        } else if (history.Action!.startsWith("Withdraw")) {
            let [amount, token] = history.Amount?.split(" ")!;
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
            let [amount, token] = history.Amount?.split(" ")!;
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
            let [amount, token] = history.Amount?.split(" ")!;
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

export async function getGraphQLEvents(module: string, sender: string) {
    var graphql = JSON.stringify({
        query: `
        {
        events(
          last: 50,
          filter: {
            emittingModule: "${module}",
            sender: "${sender}"
            }
        ) {
          nodes {
            sendingModule {
              name
              package { digest }
            }
            sender { address }
            timestamp
            contents {
              type { repr }
              json
            }
            bcs
          }
        }}
          `,
    });

    let response = await fetch("https://sui-mainnet.mystenlabs.com/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: graphql,
    });

    // console.log(response);

    if (response.ok) {
        let data = await response.json();
        console.log(data.data.events.nodes[0]);
        console.log(data.data.events.nodes.length);
        return data;
    }
}

// getGraphQLEvents(
//     "0xa76499eda1d37751473de5f30e106f35943ada2f6ea764861243e7f5aa5bcc97",
//     "0x978f65df8570a075298598a9965c18de9087f9e888eb3430fe20334f5c554cfd"
// );
