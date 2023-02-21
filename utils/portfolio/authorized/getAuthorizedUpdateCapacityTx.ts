export async function getAuthorizedUpdateCapacityTx(
    gasBudget: number, packageId: string, typeArguments: string[], registry: string, index: string, capacity: string): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'portfolio',
        function: 'authorized_update_capacity',
        typeArguments,
        arguments: [
            registry,
            index,
            capacity
        ],
        gasBudget: gasBudget,
    }
    return tx
}