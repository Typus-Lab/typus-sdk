export async function getCloseAuctionTx(
    gasBudget: number, packageId: string, managerCap: string, typeArguments: string[], registry: string, index: string, priceOracle: string, timeOracle: string): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'portfolio',
        function: 'close_auction',
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