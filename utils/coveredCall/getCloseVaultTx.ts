export async function getCloseVaultTx(
    gasBudget: number, packageId: string, managerCap: string, typeArgument: string, registry: string, index: string): Promise<any> {
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
        gasBudget: gasBudget,
    }
    return tx
}