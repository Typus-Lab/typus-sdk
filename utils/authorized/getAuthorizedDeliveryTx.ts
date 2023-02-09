export async function getAuthorizedDeliveryTx(
    packageId: string, registry: string, typeArgument: string, index: string, timeOracle: string): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'authorized_delivery',
        typeArguments: [typeArgument],
        arguments: [
            registry,
            index,
            timeOracle,
        ],
        gasBudget: 100000,
    }
    return tx
}