/**
    public(friend) entry fun deposit<D_TOKEN, B_TOKEN, O_TOKEN>(
        registry: &mut Registry,
        index: u64,
        coins: vector<Coin<D_TOKEN>>,
        amount: u64,
        ctx: &mut TxContext
    ) 
 * @param typeArguments [D_TOKEN, B_TOKEN, O_TOKEN]
*/
export async function getDepositTx(
    gasBudget: number, packageId: string, registry: string, typeArguments: string[], vaultIndex: string, coins: string[], amount: string): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'portfolio',
        function: 'deposit',
        typeArguments,
        arguments: [
            registry,
            vaultIndex,
            coins,
            amount,
        ],
        gasBudget: gasBudget,
    }
    return tx
}