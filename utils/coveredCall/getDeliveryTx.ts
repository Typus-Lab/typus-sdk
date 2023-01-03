export async function getDeliveryTx(
    packageId: string, managerCap: string, registry: string, typeArgument: string, index: number, size: number, timeOracle: string): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'delivery',
        typeArguments: [typeArgument],
        arguments: [
            managerCap,
            registry,
            index,
            timeOracle,
            size,
        ],
        gasBudget: 10000,
    }
    return tx
}