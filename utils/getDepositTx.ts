export async function getDepositTx(packageId: string, registry: string, isRolling: Boolean, coin: string, amount: number): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'shark_fin',
        function: 'deposit',
        typeArguments: [" 0x2::sui::SUI "],
        arguments: [
            registry,
            0,
            isRolling,
            coin,
            amount,
        ],
        gasBudget: 1000,
    }
    return tx
}

/*
sui client call --gas-budget 1000 --package $PACKAGE --module "shark_fin" --function "deposit" --type-args 0x2::sui::SUI --args $VAULT_REGISTRY 0 true 0x7e200466dc7fee2303d8b19c8b311c6471999f61 9999
*/