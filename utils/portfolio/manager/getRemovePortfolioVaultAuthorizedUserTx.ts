/**
    public(friend) entry fun remove_portfolio_vault_authorized_user<D_TOKEN, B_TOKEN, O_TOKEN>(
        manager_cap: &ManagerCap,
        registry: &mut Registry,
        index: u64,
        user_address: address,
    )
 * @param  typeArguments [D_TOKEN, B_TOKEN, O_TOKEN]
 */
export async function getRemovePortfolioVaultAuthorizedUserTx(
    gasBudget: number,
    packageId: string,
    managerCap: string,
    registry: string,
    typeArguments: string[],
    index: string,
    address: string,
): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'portfolio',
        function: 'remove_portfolio_vault_authorized_user',
        typeArguments,
        arguments: [
            managerCap,
            registry,
            index,
            address,
        ],
        gasBudget: gasBudget,
    }
    return tx
}