export async function getDeliveryTx(
    gasBudget: string,
    packageId: string, managerCap: string, registry: string, typeArgument: string, index: string, timeOracle: string): Promise<any> {
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
        ],
        gasBudget: gasBudget,
    }
    return tx
}