/**
    public(friend) entry fun add_authorized_user(
        manager_cap: & ManagerCap,
        registry: & mut Registry,
        user_addresses: vector<address>,
    )
*/
export async function getAddAuthorizedUserTx(
    gasBudget: number,
    packageId: string,
    managerCap: string,
    registry: string,
    userAddresses: string[],
): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'portfolio',
        function: 'add_authorized_user',
        typeArguments: [],
        arguments: [
            managerCap,
            registry,
            userAddresses,
        ],
        gasBudget: gasBudget,
    }
    return tx
}