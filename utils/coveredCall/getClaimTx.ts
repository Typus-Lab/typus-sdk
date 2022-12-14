export async function getClaimTx(
    packageId: string, registry: string, typeArgument: string, index: number, amount: number, isRolling: boolean): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'claim',
        typeArguments: [typeArgument],
        arguments: [
            registry,
            index,
            amount,
            isRolling,
        ],
        gasBudget: 10000,
    }
    return tx
}