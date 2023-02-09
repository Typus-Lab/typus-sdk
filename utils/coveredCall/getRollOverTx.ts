export async function getRollOverTx(
    packageId: string, registry: string, typeArgument: string, managerCap: string, index: string): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'roll_over',
        typeArguments: [typeArgument],
        arguments: [
            managerCap,
            registry,
            index,
        ],
        gasBudget: 100000,
    }
    return tx
}