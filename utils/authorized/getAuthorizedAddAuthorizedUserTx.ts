export async function getAuthorizedAddAuthorizedUserTx(
    gasBudget: number,
    packageId: string,
    registry: string,
    managerCap: string,
    address: string
): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'add_authorized_user',
        typeArguments: [],
        arguments: [managerCap, registry, address],
        gasBudget: gasBudget,
    };
    return tx;
}
