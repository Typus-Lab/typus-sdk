export async function getNewAuctionTx(
    gasBudget: string,
    packageId: string,
    registry: string,
    typeArgument: string,
    index: string,
    priceOracle: string,
    timeOracle: string
): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'authorized_new_auction',
        typeArguments: [typeArgument],
        arguments: [registry, index, priceOracle, timeOracle],
        gasBudget: gasBudget,
    };
    return tx;
}
