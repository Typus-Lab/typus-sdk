export async function getRollOverTx(
    packageId: string, registry: string, typeArgument: string, managerCap: string, index: number): Promise<any> {
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
        gasBudget: 10000,
    }
    return tx
}