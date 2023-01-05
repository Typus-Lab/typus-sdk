export async function getNewAuctionWithNextCoveredCallVaultTx(
    packageId: string,
    managerCap: string,
    registry: string,
    typeArgument: string,
    index: number,
    priceOracle: string,
    timeOracle: string,
    activationTsMs: number,
    expirationTsMs: number,
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
            priceOracle,
            timeOracle,
            activationTsMs,
            expirationTsMs,
        ],
        gasBudget: 10000,
    }
    return tx
}
