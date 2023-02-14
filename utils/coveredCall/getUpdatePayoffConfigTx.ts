export async function getUpdatePayoffConfigTx(
    gasBudget: number, packageId: string, registry: string, typeArgument: string, managerCap: string, index: string, roi: string, exposureRatio: string): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'update_payoff_config',
        typeArguments: [typeArgument],
        arguments: [
            managerCap,
            registry,
            index,
            roi,
            exposureRatio,
        ],
        gasBudget: gasBudget,
    }
    return tx
}

