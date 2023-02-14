export async function getAuthorizedEvolutionTx(
    gasBudget: string,
    packageId: string,
    registry: string,
    typeArgument: string,
    index: string,
    priceOracle: string,
    timeOracle: string,
    activationTsMs: string,
    expirationTsMs: string
): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'authorized_evolution',
        typeArguments: [typeArgument],
        arguments: [registry, index, priceOracle, timeOracle, activationTsMs, expirationTsMs],
        gasBudget: gasBudget,
    };
    return tx;
}
