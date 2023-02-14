export async function getUpdateNextVaultConfigTx(
    gasBudget: string,
    packageId: string,
    managerCap: string,
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
        function: 'update_next_vault_config',
        typeArguments: [typeArgument],
        arguments: [
            managerCap,
            registry,
            index,
            strikeOtmPct,
            strikeIncrement,
            decaySpeed,
            initialPrice,
            finalPrice,
            auctionDurationInMs,
        ],
        gasBudget: gasBudget,
    }
    return tx
}