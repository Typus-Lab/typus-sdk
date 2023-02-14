export async function getRollOverTx(
    gasBudget: string,
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
        gasBudget: gasBudget,
    }
    return tx
}