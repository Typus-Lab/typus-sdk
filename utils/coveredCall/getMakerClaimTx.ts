export async function getMakerClaimTx(
    gasBudget: string,
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
        gasBudget: gasBudget,
    }
    return tx
}