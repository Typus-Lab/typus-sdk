export async function getCreateTokenRegistryTx(
    gasBudget: number, packageId: string): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'token',
        function: 'new',
        typeArguments: [],
        arguments: [],
        gasBudget: gasBudget,
    }
    return tx
}

/*
    sui client call --gas-budget 10000 --package $PACKAGE --module "token" --function "new" 
*/