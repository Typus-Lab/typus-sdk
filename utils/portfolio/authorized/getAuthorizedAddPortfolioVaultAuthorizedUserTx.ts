/**
 * @param  typeArguments [D_TOKEN, B_TOKEN, O_TOKEN]
*/
export async function getAuthorizedAddPortfolioVaultAuthorizedUserTx(
    gasBudget: number,
    packageId: string,
    registry: string,
    typeArguments: string[],
    index: string,
    address: string,
): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'portfolio',
        function: 'authorized_add_portfolio_vault_authorized_user',
        typeArguments,
        arguments: [
            registry,
            index,
            address,
        ],
        gasBudget: gasBudget,
    }
    return tx
}