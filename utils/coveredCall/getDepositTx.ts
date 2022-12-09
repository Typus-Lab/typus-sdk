export async function getDepositTx(packageId: string, registry: string, typeArgument: string, vaultIndex: number, isRolling: Boolean, coin: string, amount: number): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'deposit',
        typeArguments: [typeArgument],
        arguments: [
            registry,
            vaultIndex,
            coin,
            amount,
            isRolling,
        ],
        gasBudget: 1000,
    }
    return tx
}

/*
    sui client call --gas-budget 1000 --package $PACKAGE --module "covered_call" --function "deposit" 
    --type-args 0x27b3674c685046f66cad1d5496d2967894fa5329::token::USDC --args $VAULT_REGISTRY 1 true $TOKENAID 9999
*/