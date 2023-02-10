export async function getAuthorizedUpdateCapacityTx(
    packageId: string,
    typeArgument: string,
    registry: string,
    index: string,
    capacity: string
): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'authorized_update_capacity',
        typeArguments: [typeArgument],
        arguments: [registry, index, capacity],
        gasBudget: 100000,
    };
    return tx;
}
