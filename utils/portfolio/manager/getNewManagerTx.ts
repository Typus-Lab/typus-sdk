/**
    public(friend) entry fun new_manager(
        _manager_cap: &ManagerCap,
        users: vector<address>,
        ctx: &mut TxContext
    )
*/
export async function getNewManagerTx(
    gasBudget: number,
    packageId: string,
    managerCap: string,
    addresses: string[],
): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'portfolio',
        function: 'new_manager',
        typeArguments: [],
        arguments: [
            managerCap,
            addresses,
        ],
        gasBudget: gasBudget,
    }
    return tx
}