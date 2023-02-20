export async function getWithdrawTx(
    gasBudget: number, packageId: string, registry: string, typeArguments: string[], vaultIndex: string, share: string): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'portfolio',
        function: 'withdraw',
        typeArguments,
        arguments: [
            registry,
            vaultIndex,
            share,
        ],
        gasBudget: gasBudget,
    }
    return tx
}

