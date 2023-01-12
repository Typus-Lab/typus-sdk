export async function getWithdrawTx(packageId: string, registry: string, typeArgument: string, vaultIndex: string, share: string): Promise<any> {
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
        gasBudget: 1000,
    }
    return tx
}

