export async function getMakerClaimTx(
    packageId: string, registry: string, typeArgument: string, index: string): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'maker_claim',
        typeArguments: [typeArgument],
        arguments: [
            registry,
            index,
        ],
        gasBudget: 10000,
    }
    return tx
}