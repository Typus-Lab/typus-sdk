export async function getWithdrawTx(packageId: string, registry: string, typeArgument: string, vaultIndex: string, isRolling: Boolean, amount: string): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'withdraw',
        typeArguments: [typeArgument],
        arguments: [
            registry,
            vaultIndex,
            amount,
            isRolling,
        ],
        gasBudget: 1000,
    }
    return tx
}

