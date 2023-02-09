export async function getAuthorizedRemoveCoveredCallVaultAuthorizedUserTx(
    packageId: string,
    registry: string,
    typeArgument: string,
    index: string,
    address: string,
): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'authorized_remove_covered_call_vault_authorized_user',
        typeArguments: [typeArgument],
        arguments: [
            registry,
            index,
            address,
        ],
        gasBudget: 100000,
    }
    return tx
}