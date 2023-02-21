export async function getAddAuthorizedUserTx(
    gasBudget: number,
    packageId: string,
    managerCap: string,
    registry: string,
    address: string,
): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'portfolio',
        function: 'add_authorized_user',
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