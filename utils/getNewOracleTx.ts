export async function getNewOracleTx(packageId: string, typeArgument: string, decimal: number): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'oracle',
        function: 'new_oracle',
        typeArguments: [typeArgument],
        arguments: [decimal],
        gasBudget: 100000,
    }
    return tx
}

/*
 sui client call --gas-budget 1000 --package $PACKAGE --module "oracle" --function "new_oracle" --type-args 0x2::sui::SUI
*/