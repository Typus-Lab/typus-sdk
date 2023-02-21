export async function getRemoveManagerTx(
    gasBudget: number,
    packageId: string,
    managerCap: string,
): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'portfolio',
        function: 'remove_manager',
        typeArguments: [],
        arguments: [
            managerCap,
        ],
        gasBudget: gasBudget,
    }
    return tx
}