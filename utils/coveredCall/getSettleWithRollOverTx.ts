export async function getSettleWithRollOverTx(
    packageId: string, registry: string, typeArgument: string, managerCap: string, index: string, priceOracle: string, timeOracle: string): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'settle_with_roll_over',
        typeArguments: [typeArgument],
        arguments: [
            managerCap,
            registry,
            index,
            priceOracle,
            timeOracle,
        ],
        gasBudget: 10000,
    }
    return tx
}