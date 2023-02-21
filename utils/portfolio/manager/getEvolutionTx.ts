export async function getEvolutionTx(
    gasBudget: number,
    packageId: string,
    registry: string,
    typeArguments: string[],
    managerCap: string,
    index: string,
    priceOracle: string,
    timeOracle: string,
    activationTsMs: string,
    expirationTsMs: string,
): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'portfolio',
        function: 'evolution',
        typeArguments,
        arguments: [
            managerCap,
            registry,
            index,
            priceOracle,
            timeOracle,
            activationTsMs,
            expirationTsMs,
        ],
        gasBudget: gasBudget,
    }
    return tx
}