/**
    public(friend) entry fun withdraw<D_TOKEN, B_TOKEN, O_TOKEN>(
        registry: &mut Registry,
        index: u64,
        share: u64,
        ctx: &mut TxContext
    )
 * @param typeArguments [D_TOKEN, B_TOKEN, O_TOKEN]
*/
export async function getWithdrawTx(
    gasBudget: number, packageId: string, registry: string, typeArguments: string[], vaultIndex: string, share: string): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'portfolio',
        function: 'withdraw',
        typeArguments,
        arguments: [
            registry,
            vaultIndex,
            share,
        ],
        gasBudget: gasBudget,
    }
    return tx
}

