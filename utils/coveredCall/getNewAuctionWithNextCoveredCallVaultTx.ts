export async function getNewAuctionWithNextCoveredCallVaultTx(
    packageId: string,
    managerCap: string,
    registry: string,
    typeArgument: string,
    index: number,
    start: number,
    end: number,
    decay: number,
    initialPrice: number,
    finalPrice: number,
    expiration: number,
    assetName: string,
    strikeOtmPct: number,
    price_oracle: string,

): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'new_auction_with_next_covered_call_vault',
        typeArguments: [typeArgument],
        arguments: [
            managerCap,
            registry,
            index,
            start,
            end,
            decay,
            initialPrice,
            finalPrice,
            expiration,
            assetName,
            strikeOtmPct,
            price_oracle,
        ],
        gasBudget: 10000,
    }
    return tx
}