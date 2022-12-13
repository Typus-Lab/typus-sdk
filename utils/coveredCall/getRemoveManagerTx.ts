export async function getRemoveManagerTx(packageId: string, managerCap: string): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'remove_manager',
        typeArguments: [],
        arguments: [
            managerCap,
        ],
        gasBudget: 1000,
    }
    return tx
}