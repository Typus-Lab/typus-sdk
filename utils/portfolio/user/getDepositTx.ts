export async function getDepositTx(
    gasBudget: number, packageId: string, registry: string, typeArguments: string[], vaultIndex: string, coins: string[], amount: string): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'portfolio',
        function: 'deposit',
        typeArguments,
        arguments: [
            registry,
            vaultIndex,
            coins,
            amount,
        ],
        gasBudget: gasBudget,
    }
    return tx
}