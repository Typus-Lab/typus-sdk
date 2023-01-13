export async function getRefundTx(
    packageId: string, registry: string, typeArgument: string, index: string): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'refund',
        typeArguments: [typeArgument],
        arguments: [
            registry,
            index,
        ],
        gasBudget: 10000,
    }
    return tx
}