export async function getEvolutionTx(
    gasBudget: string,
    packageId: string,
    registry: string,
    typeArgument: string,
    managerCap: string,
    index: string,
    priceOracle: string,
    timeOracle: string,
    expirationTsMs: string,
): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'last_evolution',
        typeArguments: [typeArgument],
        arguments: [
            managerCap,
            registry,
            index,
            priceOracle,
            timeOracle,
            expirationTsMs,
        ],
        gasBudget: gasBudget,
    }
    return tx
}