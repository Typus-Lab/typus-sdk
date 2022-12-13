export async function getNewManagerTx(packageId: string, managerCap: string, user: string): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'new_manager',
        typeArguments: [],
        arguments: [
            managerCap,
            user,
        ],
        gasBudget: 1000,
    }
    return tx
}