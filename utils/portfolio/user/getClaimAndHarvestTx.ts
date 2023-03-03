/**
    public(friend) entry fun claim_and_harvest<D_TOKEN, B_TOKEN, O_TOKEN>(
        registry: &mut Registry,
        index: vector<u64>,
        ctx: &mut TxContext
    )
 * @param typeArguments [D_TOKEN, B_TOKEN, O_TOKEN]
*/
export async function getClaimAndHarvestTx(gasBudget: number, packageId: string, registry: string, typeArguments: string[], index: string[]): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'portfolio',
        function: 'claim_and_harvest',
        typeArguments,
        arguments: [
            registry,
            index,
        ],
        gasBudget: gasBudget,
    }
    return tx
}