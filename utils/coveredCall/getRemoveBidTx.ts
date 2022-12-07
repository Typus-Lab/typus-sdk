export async function getRemoveBidTx(packageId: string, registry: string, typeArgument: string, index: number, bidIndex: number): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'remove_bid',
        typeArguments: [typeArgument],
        arguments: [
            registry,
            index,
            bidIndex,
        ],
        gasBudget: 1000,
    }
    return tx
}

