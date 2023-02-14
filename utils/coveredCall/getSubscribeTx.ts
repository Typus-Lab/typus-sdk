export async function getSubscribeTx(
    gasBudget: string,
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
        gasBudget: gasBudget,
    }
    return tx
}
