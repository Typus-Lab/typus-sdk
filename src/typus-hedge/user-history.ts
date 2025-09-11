import { BcsReader } from "@mysten/bcs";
import { assetToDecimal, typeArgToAsset } from "src/constants";

export interface TxHistory {
    Action: string;
    Index: string;
    Amount: number[];
    Token: string[];
    Exp: string | undefined;
    Date: Date;
    txDigest: string;
    log: string[];
}

export async function parseTxHistory(datas: Array<any>): Promise<Array<TxHistory>> {
    let results = await datas
        .filter((event) => {
            return event.type == "0xe7fa4dae529d137d79ad1160950408451dc4c28e76610a999d463a4ef64c5f55::event::UserEvent";
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
            let action = event.parsedJson!.action;
            let log = toMap(event.parsedJson!.log.contents);
            let bcs_padding = toMap(event.parsedJson!.bcs_padding.contents);
            // console.log(action, log, bcs_padding);

            if (bcs_padding.size == 0) {
                return txHistory;
            }

            let mainToken = typeArgToAsset(bcsToString(bcs_padding["main_token"]));
            let mainTokenDecimal = assetToDecimal(mainToken);
            // console.log(mainToken, mainTokenDecimal);

            let hedgeToken = typeArgToAsset(bcsToString(bcs_padding["hedge_token"]));
            let hedgeTokenDecimal = assetToDecimal(hedgeToken);
            // console.log(hedgeToken, hedgeTokenDecimal);

            switch (action) {
                case "raise_fund":
                    // index
                    // round
                    // main_balance_value
                    // hedge_balance_value
                    // main_deactivating_value
                    // hedge_deactivating_value
                    // main_inactive_value
                    // hedge_inactive_value
                    // exps
                    // points
                    var mainTokenAmount = divByDecimal(Number(log["main_balance_value"]), mainTokenDecimal!);
                    var hedgeTokenAmount = divByDecimal(Number(log["hedge_balance_value"]), hedgeTokenDecimal!);

                    txHistory.push({
                        Action: "Deposit",
                        Index: log["index"],
                        Amount: [mainTokenAmount, hedgeTokenAmount],
                        Token: [mainToken, hedgeToken],
                        Exp: log["exps"],
                        Date: new Date(Number(event.timestampMs)),
                        txDigest: event.id.txDigest,
                        log: [],
                    });

                    break;
                case "reduce_fund":
                    // index;
                    // round;
                    // main_warmup_value;
                    // hedge_warmup_value;
                    // main_active_value;
                    // hedge_active_value;
                    // main_inactive_value;
                    // hedge_inactive_value;
                    // exps;
                    // points;

                    var mainTokenWarmupAmount = divByDecimal(Number(log["main_warmup_value"]), mainTokenDecimal!);
                    var hedgeTokenWarmupAmount = divByDecimal(Number(log["hedge_warmup_value"]), hedgeTokenDecimal!);

                    if (mainTokenWarmupAmount + hedgeTokenWarmupAmount > 0) {
                        txHistory.push({
                            Action: "Withdraw",
                            Index: log["index"],
                            Amount: [mainTokenWarmupAmount, hedgeTokenWarmupAmount],
                            Token: [mainToken, hedgeToken],
                            Exp: log["exps"],
                            Date: new Date(Number(event.timestampMs)),
                            txDigest: event.id.txDigest,
                            log: [],
                        });
                    }

                    var mainTokenActiveAmount = divByDecimal(Number(log["main_active_value"]), mainTokenDecimal!);
                    var hedgeTokenActiveAmount = divByDecimal(Number(log["hedge_active_value"]), hedgeTokenDecimal!);

                    if (mainTokenActiveAmount + hedgeTokenActiveAmount > 0) {
                        txHistory.push({
                            Action: "Unsubscribe",
                            Index: log["index"],
                            Amount: [mainTokenActiveAmount, hedgeTokenActiveAmount],
                            Token: [mainToken, hedgeToken],
                            Exp: log["exps"],
                            Date: new Date(Number(event.timestampMs)),
                            txDigest: event.id.txDigest,
                            log: [],
                        });
                    }

                    break;
            }

            return txHistory;
        }, Promise.resolve(new Array<TxHistory>()));

    return results;
}

function divByDecimal(numerator: number, decimal: number): number {
    return numerator / 10 ** decimal;
}

function bcsToString(bcs): string {
    let reader = new BcsReader(new Uint8Array(bcs));
    return String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB())));
}

function toMap(contents): Map<string, string> {
    return new Map(contents.map((item) => [item.key, item.value]));
}
