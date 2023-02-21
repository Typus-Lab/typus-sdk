export async function getRemoveAuthorizedUserTx(
    gasBudget: number,
    packageId: string,
    managerCap: string,
    registry: string,
    address: string,
): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'portfolio',
        function: 'remove_authorized_user',
        typeArguments: [],
        arguments: [
            managerCap,
            registry,
            address,
        ],
        gasBudget: gasBudget,
    }
    return tx
}