export async function getLastEvolutionTx(
    gasBudget: number,
    packageId: string,
    registry: string,
    typeArguments: string[],
    managerCap: string,
    index: string,
    priceOracle: string,
    timeOracle: string,
): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'portfolio',
        function: 'last_evolution',
        typeArguments,
        arguments: [
            managerCap,
            registry,
            index,
            priceOracle,
            timeOracle,
        ],
        gasBudget: gasBudget,
    }
    return tx
}