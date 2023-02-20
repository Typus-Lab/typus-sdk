
/// typeArguments: <TOKEN, O_TOKEN>
export async function getCompoundPremiumTx(
    gasBudget: number,
    packageId: string, registry: string, typeArguments: string[], index: string): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'portfolio',
        function: 'compound_premium',
        typeArguments,
        arguments: [
            registry,
            index,
        ],
        gasBudget: gasBudget,
    }
    return tx
}