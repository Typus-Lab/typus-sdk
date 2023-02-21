export async function getDeliveryTx(
    gasBudget: number,
    packageId: string, managerCap: string, registry: string, typeArguments: string[], index: string, priceOracle: string, timeOracle: string): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'portfolio',
        function: 'delivery',
        typeArguments,
        arguments: [
            managerCap,
            registry,
            index,
            priceOracle,
            timeOracle,
        ],
        gasBudget: gasBudget,
    }
    return tx
}