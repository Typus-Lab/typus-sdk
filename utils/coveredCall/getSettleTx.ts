export async function getSettleTx(
    packageId: string, registry: string, typeArgument: string, managerCap: string, index: number, priceOracle: string, timeOracle: string): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'settle',
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