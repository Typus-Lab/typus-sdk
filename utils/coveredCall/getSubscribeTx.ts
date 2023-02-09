export async function getSubscribeTx(
    packageId: string, registry: string, typeArgument: string, index: string, share: string): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'subscribe',
        typeArguments: [typeArgument],
        arguments: [
            registry,
            index,
            share,
        ],
        gasBudget: 100000,
    }
    return tx
}
