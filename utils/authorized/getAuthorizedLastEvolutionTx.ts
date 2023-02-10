export async function getAuthorizedLastEvolutionTx(
    packageId: string,
    registry: string,
    typeArgument: string,
    index: string,
    priceOracle: string,
    timeOracle: string,
    expirationTsMs: string
): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'authorized_last_evolution',
        typeArguments: [typeArgument],
        arguments: [registry, index, priceOracle, timeOracle, expirationTsMs],
        gasBudget: 100000,
    };
    return tx;
}
