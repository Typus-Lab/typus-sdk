export async function getRefundTx(
    gasBudget: number,
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
        gasBudget: gasBudget,
    }
    return tx
}