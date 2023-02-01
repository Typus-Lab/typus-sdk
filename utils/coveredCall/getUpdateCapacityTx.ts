export async function getUpdateCapacityTx(packageId: string, managerCap: string, typeArgument: string, registry: string, index: string, capacity: string): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'update_capacity',
        typeArguments: [typeArgument],
        arguments: [
            managerCap,
            registry,
            index,
            capacity
        ],
        gasBudget: 1000,
    }
    return tx
}