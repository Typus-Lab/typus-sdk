export async function getNewSharkFinVaultTx(packageId: string, registry: string, typeArgument: string,
    expiration: number, bullish: Boolean, lowBarrierPrice: number, highBarrierPrice: number): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'shark_fin',
        function: 'new_shark_fin_vault',
        typeArguments: [typeArgument],
        arguments: [
            registry,
            expiration,
            bullish,
            lowBarrierPrice,
            highBarrierPrice,
        ],
        gasBudget: 10000,
    }
    return tx
}

/*
    sui client call --gas-budget 1000 --package $PACKAGE --module "shark_fin" --function "new_shark_fin_vault" 
    --type-args 0x27b3674c685046f66cad1d5496d2967894fa5329::token::USDC 
    --args $VAULT_REGISTRY 1671344789 true 1 10
*/