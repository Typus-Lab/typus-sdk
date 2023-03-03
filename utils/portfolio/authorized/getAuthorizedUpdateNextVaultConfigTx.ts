export async function getAuthorizedUpdateNextVaultConfigTx(
    gasBudget: number,
    packageId: string,
    registry: string,
    typeArguments: string[],
    index: string,
    strikePct: string[], // vector<u64>
    weight: string[],       // vector<u64>
    isBuyer: string[],      // vector<bool>
    strikeIncrement: string,
    decaySpeed: string,
    initialPrice: string,
    finalPrice: string,
    auctionDurationInMs: string,
): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'portfolio',
        function: 'authorized_update_next_vault_config',
        typeArguments,
        arguments: [
            registry,
            index,
            strikePct,
            weight,
            isBuyer,
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