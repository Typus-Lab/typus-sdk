import { JsonRpcProvider, SuiEventFilter } from "@mysten/sui.js";
import { Vault } from "./view-function";
import { assetToDecimal, typeArgsToAssets } from "../token";

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
    return await datas
        .filter((event) => {
            const type: string = event.type;
            return type.startsWith(originPackage) || type.includes("typus_nft::First");
        })
        .reduce(async (promise, event) => {
            let txHistory: TxHistory[] = await promise;
            // console.log(event);
            const functionType = new RegExp("^([^::]+)::([^::]+)::([^<]+)").exec(event.type)?.slice(1, 4)!;
            const action = functionType[2];
            // console.log(action);

            let Action;
            let Amount;
            let Vault;
            let RiskLevel;
            let Tails;
            let Exp;

            if (event.parsedJson!.index) {
                let v = vaults[event.parsedJson!.index];
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
                        optionType = "Call";
                        break;
                    case "1":
                        optionType = "Put";
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
                case "SnapshotNftEvent":
                    var i = txHistory.findIndex((x) => x.txDigest == event.id.txDigest);
                    if (i == -1) {
                        Action = "Collect EXP";
                        Tails = `#${event.parsedJson!.number}`;
                        Exp = event.parsedJson!.exp_earn;
                    } else {
                        txHistory[i].Exp = event.parsedJson!.exp_earn;
                        txHistory[i].Tails = `#${event.parsedJson!.number}`;
                        return txHistory;
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
                case "HarvestEvent":
                    var i = txHistory.findIndex((x) => x.txDigest == event.id.txDigest);
                    var token = typeArgsToAssets(["0x" + event.parsedJson!.token.name])[0];
                    var amount = Number(event.parsedJson!.amount) / 10 ** Number(event.parsedJson!.decimal);
                    Action = action.slice(0, action.length - 5);
                    Amount = `${amount} ${token}`;
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
}
