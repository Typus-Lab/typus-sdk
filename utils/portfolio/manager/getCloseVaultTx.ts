export async function getCloseVaultTx(
    gasBudget: number, packageId: string, managerCap: string, typeArguments: string[], registry: string, index: string): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'portfolio',
        function: 'close_vault',
        typeArguments,
        arguments: [
            managerCap,
            registry,
            index,
        ],
        gasBudget: gasBudget,
    }
    return tx
}