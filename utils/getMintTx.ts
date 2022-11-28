export async function getMintTx(packageId: string, registry: string, amount: number): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'token',
        function: 'mint',
        typeArguments: [],
        arguments: [
            registry,
            amount,

        ],
        gasBudget: 10000,
    }
    return tx
}

/*
sui client call --gas-budget 10000 --package $PACKAGE --module "token" --function "mint" --args $REGISTRY 10000
*/