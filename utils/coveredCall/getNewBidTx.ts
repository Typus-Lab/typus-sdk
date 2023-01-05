export async function getNewBidTx(packageId: string, registry: string, typeArgument: string, vaultIndex: string, size: string, coin: string, time: string): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'new_bid',
        typeArguments: [typeArgument],
        arguments: [
            registry,
            vaultIndex,
            time,
            coin,
            size,
        ],
        gasBudget: 1000,
    }
    return tx
}

