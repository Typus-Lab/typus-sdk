export async function getDeliveryTx(
    packageId: string, managerCap: string, registry: string, typeArgument: string, index: number,): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'delivery',
        typeArguments: [typeArgument],
        arguments: [
            managerCap,
            registry,
            index,
        ],
        gasBudget: 10000,
    }
    return tx
}