export async function getUpdateVaultConfigTx(
    gasBudget: string,
    packageId: string,
    managerCap: string,
    typeArgument: string,
    registry: string,
    index: string,
    strikeIncrement: string,
    decaySpeed: string,
    initialPrice: string,
    finalPrice: string,
    auctionDurationInMs: string,
): Promise<any> {
    let tx = {

        packageObjectId: packageId,
        module: 'covered_call',
        function: 'update_vault_config',
        typeArguments: [typeArgument],
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