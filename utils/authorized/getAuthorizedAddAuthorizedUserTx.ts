export async function getAuthorizedAddAuthorizedUserTx(
    packageId: string,
    registry: string,
    managerCap: string,
    address: string,
): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'add_authorized_user',
        typeArguments: [],
        arguments: [
            managerCap,
            registry,
            address,
        ],
        gasBudget: 100000,
    }
    return tx
}