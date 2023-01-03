export async function getClaimTx(
    packageId: string, registry: string, typeArgument: string, index: number): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'claim',
        typeArguments: [typeArgument],
        arguments: [
            registry,
            index,
        ],
        gasBudget: 10000,
    }
    return tx
}