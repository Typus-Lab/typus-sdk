export async function getUpdatePayoffConfigTx(packageId: string, registry: string, typeArgument: string, managerCap: string, index: number, price: number, roi: number, exposureRatio: number): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'update_payoff_config',
        typeArguments: [typeArgument],
        arguments: [
            managerCap,
            registry,
            index,
            price,
            roi,
            exposureRatio,
        ],
        gasBudget: 1000,
    }
    return tx
}

