export async function getClaimAllTx(
    packageId: string, registry: string, typeArgument: string, index: string): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'claim_all',
        typeArguments: [typeArgument],
        arguments: [
            registry,
            [index],
        ],
        gasBudget: 10000,
    }
    return tx
}