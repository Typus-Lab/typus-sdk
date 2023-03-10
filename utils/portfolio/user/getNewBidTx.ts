/**
    public(friend) entry fun new_bid<D_TOKEN, B_TOKEN, O_TOKEN>(
        registry: &mut Registry,
        index: u64,
        price_oracle: &Oracle<O_TOKEN>,
        time: &Time,
        coins: vector<Coin<B_TOKEN>>,
        size: u64,
        ctx: &mut TxContext,
    )
 * @param typeArguments [D_TOKEN, B_TOKEN, O_TOKEN]
*/
export async function getNewBidTx(
    gasBudget: number,
    packageId: string,
    registry: string,
    typeArguments: string[],
    index: string,
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