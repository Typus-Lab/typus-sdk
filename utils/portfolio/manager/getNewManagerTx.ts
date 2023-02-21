export async function getNewManagerTx(
    gasBudget: number,
    packageId: string,
    managerCap: string,
    address: string,
): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'portfolio',
        function: 'new_manager',
        typeArguments: [],
        arguments: [
            managerCap,
            address,
        ],
        gasBudget: gasBudget,
    }
    return tx
}