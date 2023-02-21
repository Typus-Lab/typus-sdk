export async function getUpdateNextVaultConfigTx(
    gasBudget: number,
    packageId: string,
    managerCap: string,
    registry: string,
    typeArguments: string[],
    index: string,
    strikeOtmPct: string[], // vector<u64>
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
        function: 'update_next_vault_config',
        typeArguments,
        arguments: [
            managerCap,
            registry,
            index,
            strikeOtmPct,
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