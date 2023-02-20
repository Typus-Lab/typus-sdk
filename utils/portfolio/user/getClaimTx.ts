export async function getClaimTx(
    gasBudget: number,
    packageId: string, registry: string, typeArguments: string[], index: string[]): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'portfolio',
        function: 'claim',
        typeArguments,
        arguments: [
            registry,
            index,
        ],
        gasBudget: gasBudget,
    }
    return tx
}