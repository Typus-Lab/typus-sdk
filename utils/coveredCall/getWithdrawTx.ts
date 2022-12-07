export async function getWithdrawTx(packageId: string, registry: string, typeArgument: string, vaultIndex: number, isRolling: Boolean, amount: number): Promise<any> {
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

