export async function getUnsubscribeTx(
    gasBudget: number,
    packageId: string, registry: string, typeArguments: string[], index: string, share: string): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'portfolio',
        function: 'unsubscribe',
        typeArguments,
        arguments: [
            registry,
            index,
            share
        ],
        gasBudget: gasBudget,
    }
    return tx
}