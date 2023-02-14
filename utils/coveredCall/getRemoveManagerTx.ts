export async function getRemoveManagerTx(
    gasBudget: string, packageId: string, managerCap: string): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'remove_manager',
        typeArguments: [],
        arguments: [
            managerCap,
        ],
        gasBudget: gasBudget,
    }
    return tx
}