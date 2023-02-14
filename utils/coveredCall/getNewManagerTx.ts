export async function getNewManagerTx(
    gasBudget: number, packageId: string, managerCap: string, user: string): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'new_manager',
        typeArguments: [],
        arguments: [
            managerCap,
            user,
        ],
        gasBudget: gasBudget,
    }
    return tx
}