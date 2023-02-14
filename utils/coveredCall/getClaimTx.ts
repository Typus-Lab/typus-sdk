export async function getClaimTx(
    gasBudget: number,
    packageId: string, registry: string, typeArgument: string, index: string): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'claim',
        typeArguments: [typeArgument],
        arguments: [
            registry,
            index,
        ],
        gasBudget: gasBudget,
    }
    return tx
}