export async function getEvolutionTx(
    gasBudget: string,
    packageId: string,
    registry: string,
    typeArgument: string,
    managerCap: string,
    index: string,
    priceOracle: string,
    timeOracle: string,
    activationTsMs: string,
    expirationTsMs: string,
): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'evolution',
        typeArguments: [typeArgument],
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