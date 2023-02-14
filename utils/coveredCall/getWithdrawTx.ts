export async function getWithdrawTx(
    gasBudget: number, packageId: string, registry: string, typeArgument: string, vaultIndex: string, share: string): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'withdraw',
        typeArguments: [typeArgument],
        arguments: [
            registry,
            vaultIndex,
            share,
        ],
        gasBudget: gasBudget,
    }
    return tx
}

