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
    priceDecimal: number,
    expiration: number,
    strikeOtmPct: number,
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
            priceDecimal,
            expiration,
            strikeOtmPct,
        ],
        gasBudget: 10000,
    }
    return tx
}
