export async function getHarvestTx(
    gasBudget: number,
    packageId: string, registry: string, typeArguments: string[], index: string[]): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'portfolio',
        function: 'harvest',
        typeArguments,
        arguments: [
            registry,
            index,
        ],
        gasBudget: gasBudget,
    }
    return tx
}