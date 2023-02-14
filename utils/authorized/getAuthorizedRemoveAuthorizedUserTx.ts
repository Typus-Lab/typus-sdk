export async function getAuthorizedRemoveAuthorizedUserTx(
    gasBudget: string,
    packageId: string,
    registry: string,
    managerCap: string,
    address: string
): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'remove_authorized_user',
        typeArguments: [],
        arguments: [managerCap, registry, address],
        gasBudget: gasBudget,
    };
    return tx;
}
