/**
    struct GetUserStatusResult has copy, drop {
        active: u64,
        deactivating: u64,
        inactive: u64,
        warmup: u64,
        bidder: u64,
        premium: u64,
        performance_fee: u64,
    }
    public fun get_user_status<D_TOKEN, B_TOKEN, O_TOKEN>(
        registry: &Registry,
        index: u64,
        user: address,
    ): GetUserStatusResult
*/
export async function getUserStatus(
    packageId: string,
    typeArguments: string[],
    registry: string,
    index: string,
    userAddress: string,
): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'portfolio',
        function: 'get_user_status',
        typeArguments,
        arguments: [
            registry,
            index,
            userAddress,
        ],
    }
    return tx
}


interface GetUserStatusResult {
    active: string,
    deactivating: string,
    inactive: string,
    warmup: string,
    bidder: string,
    premium: string,
    performance_fee: string,
}