export async function getAuthorizedUpdateVaultConfigTx(
    gasBudget: number,
    packageId: string,
    typeArgument: string,
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
        module: 'covered_call',
        function: 'authorized_update_vault_config',
        typeArguments: [typeArgument],
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
    };
    return tx;
}
