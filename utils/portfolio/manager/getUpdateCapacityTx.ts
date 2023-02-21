export async function getUpdateCapacityTx(
    gasBudget: number, packageId: string, managerCap: string, typeArguments: string[], registry: string, index: string, capacity: string): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'portfolio',
        function: 'update_capacity',
        typeArguments,
        arguments: [
            managerCap,
            registry,
            index,
            capacity
        ],
        gasBudget: gasBudget,
    }
    return tx
}