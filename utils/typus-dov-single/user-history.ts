import { JsonRpcProvider, SuiEventFilter } from "@mysten/sui.js";
import { assetToDecimal, typeArgsToAssets } from "../token";

export async function getUserHistory(
    provider: JsonRpcProvider,
    originPackage: string,
    sender: string,
    startTimeMs: number
): Promise<TxHistory[]> {
    const senderFilter: SuiEventFilter = {
        Sender: sender,
    };

    var result = await provider.queryEvents({ query: senderFilter, order: "descending" });
    // console.log(result);

    var txHistory = await parseTxHistory(result.data, originPackage);

    while (result.hasNextPage) {
        result = await provider.queryEvents({ query: senderFilter, cursor: result.nextCursor });
        const nextPage = await parseTxHistory(result.data, originPackage);
        txHistory = txHistory.concat(nextPage);
        if (result.hasNextPage && Number(result.data[24].timestampMs) < startTimeMs) {
            break;
        }
    }

    // console.log(txHistory.length);

    return txHistory;
}

interface TxHistory {
    Vault: string; // vault index
    Action: string; // function
    Date: Date;
    txDigest: string;
    Asset: string;
    // Deposit, Withdraw, Unsubscribe, Claim, Compound
    Amount: number;
    // Claim
    Fee: number;
    // NewBid (3 typeArgs)
    BidSize: number;
    BidPaid: number;
}

async function parseTxHistory(datas: Array<any>, originPackage: string): Promise<Array<TxHistory>> {
    return await datas
        .filter((event) => {
            const type: string = event.type;
            return type.startsWith(originPackage);
        })
        .reduce(async (promise, event) => {
            let txHistory: TxHistory[] = await promise;

            const functionType = new RegExp("^([^::]+)::([^::]+)::([^<]+)").exec(event.type)?.slice(1, 4)!;
            const action = functionType[2];

            let matches = new RegExp("<([^>]+)>").exec(event.type);
            if (matches) {
                const typeArgs = matches[1].split(", ");
                // console.log(typeArgs);

                const assets = typeArgsToAssets(typeArgs);
                // console.log(assets);
                let asset = action == "NewBid" ? assets[2] : assets[0];
                let b_asset = assets[1];

                const parsedJson = event.parsedJson!;

                if (action == "IncentiveNewBid") {
                    let i = txHistory.findIndex((x) => x.txDigest == event.id.txDigest);
                    let incentive_value = Number(parsedJson.incentive_value) / 10 ** assetToDecimal(asset)!;
                    txHistory[i].BidPaid = txHistory[i].BidPaid - incentive_value;
                } else {
                    txHistory.push({
                        Vault: parsedJson.index,
                        Action: action,
                        Date: new Date(Number(event.timestampMs)),
                        txDigest: event.id.txDigest,
                        Asset: asset,
                        Amount: Number(parsedJson.amount) / 10 ** assetToDecimal(asset)!,
                        Fee: Number(parsedJson.fee) / 10 ** assetToDecimal(asset)!,
                        BidSize: Number(parsedJson.size) / 10 ** assetToDecimal(asset)!,
                        BidPaid: Number(parsedJson.coin_value) / 10 ** assetToDecimal(b_asset)!,
                    });
                }

                return txHistory;
            }
        }, Promise.resolve(new Array<TxHistory>()));
}
