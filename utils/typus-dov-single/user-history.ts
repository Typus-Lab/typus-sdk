import { JsonRpcProvider, SuiEventFilter } from "@mysten/sui.js";
import { assetToDecimal, typeArgsToAssets } from "../token";

export async function getUserHistory(provider: JsonRpcProvider, originPackage: string, sender: string): Promise<TxHistory[]> {
    const senderFilter: SuiEventFilter = {
        Sender: sender,
    };

    var result = await provider.queryEvents({ query: senderFilter });
    // console.log(result);

    var txHistory = await parseTxHistory(result.data, originPackage);

    while (result.hasNextPage) {
        result = await provider.queryEvents({ query: senderFilter, cursor: result.nextCursor });
        const nextPage = await parseTxHistory(result.data, originPackage);
        txHistory = txHistory.concat(nextPage);
    }

    // console.log(txHistory);

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
                const typeArgs = matches[1].split(",");
                // console.log(typeArgs);

                const assets = typeArgsToAssets(typeArgs);
                // console.log(assets);
                let asset = action == "NewBid" ? assets[2] : assets[0];

                const parsedJson = event.parsedJson!;

                txHistory.push({
                    Vault: parsedJson.index,
                    Action: action,
                    Date: new Date(Number(event.timestampMs)),
                    txDigest: event.id.txDigest,
                    Asset: asset,
                    Amount: Number(parsedJson.amount) / 10 ** assetToDecimal(asset)!,
                    Fee: Number(parsedJson.fee) / 10 ** assetToDecimal(asset)!,
                    BidSize: Number(parsedJson.size) / 10 ** assetToDecimal(asset)!,
                });

                return txHistory;
            }
        }, Promise.resolve(new Array<TxHistory>()));
}
