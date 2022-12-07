export async function getNewBidTx(packageId: string, registry: string, typeArgument: string, vaultIndex: number, size: number, coin: string, time: string): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'new_bid',
        typeArguments: [typeArgument],
        arguments: [
            registry,
            vaultIndex,
            size,
            coin,
            time,
        ],
        gasBudget: 1000,
    }
    return tx
}

