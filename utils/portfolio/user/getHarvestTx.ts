/**
    public(friend) entry fun harvest<D_TOKEN, B_TOKEN, O_TOKEN>(
        registry: &mut Registry,
        index: u64,
        ctx: &mut TxContext
    )
 * @param typeArguments [D_TOKEN, B_TOKEN, O_TOKEN]
*/
export async function getHarvestTx(
    gasBudget: number,
    packageId: string, registry: string, typeArguments: string[], index: string): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'portfolio',
        function: 'harvest',
        typeArguments,
        arguments: [
            registry,
            index,
        ],
        gasBudget: gasBudget,
    }
    return tx
}