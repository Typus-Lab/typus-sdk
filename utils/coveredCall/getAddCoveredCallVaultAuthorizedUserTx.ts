export async function getAddCoveredCallVaultAuthorizedUserTx(
    packageId: string,
    managerCap: string,
    registry: string,
    typeArgument: string,
    index: string,
    address: string,
): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'add_covered_call_vault_authorized_user',
        typeArguments: [typeArgument],
        arguments: [
            managerCap,
            registry,
            index,
            address,
        ],
        gasBudget: 10000,
    }
    return tx
}