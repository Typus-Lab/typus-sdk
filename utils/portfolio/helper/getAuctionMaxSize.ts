/**
    public fun get_auction_max_size<D_TOKEN, B_TOKEN, O_TOKEN>(
        registry: &Registry,
        index: u64,
        price_oracle: &Oracle<O_TOKEN>,
    ): u64
*/
export async function getAuctionMaxSize(
    packageId: string,
    typeArguments: string[],
    registry: string,
    index: string,
    priceOracle: string,
): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'portfolio',
        function: 'get_auction_max_size',
        typeArguments,
        arguments: [
            registry,
            index,
            priceOracle,
        ],
    }
    return tx
}