export async function getNewBidTx(
    gasBudget: number,
    packageId: string,
    registry: string,
    typeArguments: string[],
    index: string[],
    priceOracle: string,
    timeOracle: string,
    coins: string[],
    size: string
): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'portfolio',
        function: 'new_bid',
        typeArguments,
        arguments: [
            registry,
            index,
            priceOracle,
            timeOracle,
            coins,
            size
        ],
        gasBudget: gasBudget,
    }
    return tx
}