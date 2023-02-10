export async function getAuthorizedSettleTx(
    packageId: string,
    registry: string,
    typeArgument: string,
    index: string,
    priceOracle: string,
    timeOracle: string
): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'authorized_settle',
        typeArguments: [typeArgument],
        arguments: [registry, index, priceOracle, timeOracle],
        gasBudget: 100000,
    };
    return tx;
}
