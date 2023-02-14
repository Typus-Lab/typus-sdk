export async function getCloseAuctionTx(
    gasBudget: number, packageId: string, managerCap: string, typeArgument: string, registry: string, index: string, time: string): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'close_auction',
        typeArguments: [typeArgument],
        arguments: [
            managerCap,
            registry,
            index,
            time,
        ],
        gasBudget: gasBudget,
    }
    return tx
}