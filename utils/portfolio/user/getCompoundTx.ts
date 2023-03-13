/**
    public entry fun compound<TOKEN, O_TOKEN>(
        registry: &mut Registry,
        index: u64,
        ctx: &mut TxContext,
    )
 * @param typeArguments [TOKEN, O_TOKEN]
*/
export async function getCompoundTx(gasBudget: number, packageId: string, registry: string, typeArguments: string[], index: string): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'portfolio',
        function: 'compound',
        typeArguments,
        arguments: [
            registry,
            index,
        ],
        gasBudget: gasBudget,
    }
    return tx
}