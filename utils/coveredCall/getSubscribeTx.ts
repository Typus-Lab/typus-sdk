export async function getSubscribeTx(
    packageId: string, registry: string, typeArgument: string, index: string,): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'subscribe',
        typeArguments: [typeArgument],
        arguments: [
            registry,
            index,
        ],
        gasBudget: 10000,
    }
    return tx
}
