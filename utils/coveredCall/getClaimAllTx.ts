export async function getClaimAllTx(
    gasBudget: string,
    packageId: string, registry: string, typeArgument: string, index: string[]): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'claim_all',
        typeArguments: [typeArgument],
        arguments: [
            registry,
            index,
        ],
        gasBudget: gasBudget,
    }
    return tx
}