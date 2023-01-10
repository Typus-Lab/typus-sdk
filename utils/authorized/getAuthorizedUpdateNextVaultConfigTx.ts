export async function getUpdateNextVaultConfigTx(
    packageId: string,
    registry: string,
    typeArgument: string,
    index: string,
    strikeOtmPct: string,
    strikeIncrement: string,
    decaySpeed: string,
    initialPrice: string,
    finalPrice: string,
    auctionDurationInMs: string,
): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'authorized_update_next_vault_config',
        typeArguments: [typeArgument],
        arguments: [
            registry,
            index,
            strikeOtmPct,
            strikeIncrement,
            decaySpeed,
            initialPrice,
            finalPrice,
            auctionDurationInMs,
        ],
        gasBudget: 1000,
    }
    return tx
}