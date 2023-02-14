export async function getAddCoveredCallVaultAuthorizedUserTx(
    gasBudget: number,
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
        gasBudget: gasBudget,
    }
    return tx
}