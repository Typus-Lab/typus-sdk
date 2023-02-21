export async function getUpdateVaultConfigTx(
    gasBudget: number,
    packageId: string,
    managerCap: string,
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
        function: 'update_vault_config',
        typeArguments,
        arguments: [
            managerCap,
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