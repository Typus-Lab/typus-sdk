export async function getCreateTokenRegistryTx(packageId: string): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'token',
        function: 'new',
        typeArguments: [],
        arguments: [],
        gasBudget: 10000,
    }
    return tx
}

/*
    sui client call --gas-budget 10000 --package $PACKAGE --module "token" --function "new" 
*/