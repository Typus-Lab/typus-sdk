export async function getNewAuctionTx(packageId: string, registry: string, typeArgument: string, managerCap: string, index: number, start: number, end: number, decay: number, initialPrice: number, finalPrice: number): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'new_auction',
        typeArguments: [typeArgument],
        arguments: [
            managerCap,
            registry,
            index,
            start,
            end,
            decay,
            initialPrice,
            finalPrice,
        ],
        gasBudget: 1000,
    }
    return tx
}

/*
    sui client call --gas-budget 1000 --package $PACKAGE --module "covered_call" --function "deposit" 
    --type-args 0x27b3674c685046f66cad1d5496d2967894fa5329::token::USDC --args $VAULT_REGISTRY 1 true $TOKENAID 9999
*/