export async function getNewOracleTx(packageId: string, typeArgument: string): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'oracle',
        function: 'new_oracle',
        typeArguments: [typeArgument],
        arguments: [],
        gasBudget: 1000,
    }
    return tx
}

/*
 sui client call --gas-budget 1000 --package $PACKAGE --module "oracle" --function "new_oracle" --type-args 0x2::sui::SUI
*/