export async function getAuthorizedEvolutionTx(
    gasBudget: number,
    packageId: string,
    registry: string,
    typeArguments: string[],
    index: string,
    priceOracle: string,
    timeOracle: string,
    activationTsMs: string,
    expirationTsMs: string,
): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'portfolio',
        function: 'authorized_evolution',
        typeArguments,
        arguments: [
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