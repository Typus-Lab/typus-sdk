export async function getAuthorizedRemoveCoveredCallVaultAuthorizedUserTx(
    gasBudget: number,
    packageId: string,
    registry: string,
    typeArgument: string,
    index: string,
    address: string
): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'authorized_remove_covered_call_vault_authorized_user',
        typeArguments: [typeArgument],
        arguments: [registry, index, address],
        gasBudget: gasBudget,
    };
    return tx;
}
