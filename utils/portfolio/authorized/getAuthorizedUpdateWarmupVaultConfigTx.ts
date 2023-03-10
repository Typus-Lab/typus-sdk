export async function getAuthorizedUpdateWarmupVaultConfigTx(
    gasBudget: number,
    packageId: string,
    typeArguments: string[],
    registry: string,
    index: string,
    strikeIncrement: string,
    decaySpeed: string,
    initialPrice: string,
    finalPrice: string,
    auctionDurationInMs: string
): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'portfolio',
        function: 'authorized_update_warmup_vault_config',
        typeArguments,
        arguments: [
            registry,
            index,
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