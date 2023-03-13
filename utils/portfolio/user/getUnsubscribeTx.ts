/**
    public(friend) entry fun unsubscribe<D_TOKEN, B_TOKEN, O_TOKEN>(
        registry: &mut Registry,
        index: u64,
        share: Option<u64>,
        ctx: &mut TxContext
    )
 * @param typeArguments [D_TOKEN, B_TOKEN, O_TOKEN]
*/
export async function getUnsubscribeTx(
    gasBudget: number,
    packageId: string, registry: string, typeArguments: string[], index: string, share: string[]): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'portfolio',
        function: 'unsubscribe',
        typeArguments,
        arguments: [
            registry,
            index,
            share
        ],
        gasBudget: gasBudget,
    }
    return tx
}