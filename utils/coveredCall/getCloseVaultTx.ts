export async function getCloseVaultTx(packageId: string, managerCap: string, typeArgument: string, registry: string, index: string): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'close_vault',
        typeArguments: [typeArgument],
        arguments: [
            managerCap,
            registry,
            index,
        ],
        gasBudget: 1000,
    }
    return tx
}