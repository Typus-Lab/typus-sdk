export async function getAuthorizedDeliveryTx(
    gasBudget: string,
    packageId: string,
    registry: string,
    typeArgument: string,
    index: string,
    timeOracle: string
): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'authorized_delivery',
        typeArguments: [typeArgument],
        arguments: [registry, index, timeOracle],
        gasBudget: gasBudget,
    };
    return tx;
}
