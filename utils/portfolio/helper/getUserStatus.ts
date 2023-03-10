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
    active: number,
    deactivating: number,
    inactive: number,
    warmup: number,
    bidder: number,
    premium: number,
    performance_fee: number,
}


export function parseUserStatusResult(rawData: Uint8Array): GetUserStatusResult {
    let temp: number[] = [];
    for (var i = 0; i < rawData.length / 8; ++i) {
        // console.log(i)
        temp.push(intFromBytes(rawData.slice(i * 8, (i + 1) * 8).reverse()))
    }
    let userStatusResult: GetUserStatusResult = {
        active: temp[0],
        deactivating: temp[1],
        inactive: temp[2],
        warmup: temp[3],
        bidder: temp[4],
        premium: temp[5],
        performance_fee: temp[6],
    }
    return userStatusResult
}

function intFromBytes(x) {
    var val = 0;
    for (var i = 0; i < x.length; ++i) {
        val += x[i];
        if (i < x.length - 1) {
            val = val << 8;
        }
    }
    return val;
}