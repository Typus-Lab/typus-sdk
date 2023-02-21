
/**
 * @param  typeArguments [D_TOKEN, B_TOKEN, O_TOKEN]
 */
export async function getAddPortfolioVaultAuthorizedUserTx(
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
        function: 'add_portfolio_vault_authorized_user',
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