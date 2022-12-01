export async function getUpdateOracleTx(packageId: string, typeArgument: string, oracle: string, managerCap: string, price: number, unix: number): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'oracle',
        function: 'update',
        typeArguments: [typeArgument],
        arguments: [
            oracle,
            managerCap,
            price,
            unix
        ],
        gasBudget: 1000,
    }
    return tx
}
/*
 sui client call --gas-budget 1000 --package $PACKAGE --module "oracle" --function "update" --type-args 0x2::sui::SUI --args 0x7158f68a06bc09123fcba1645f4c56ca866a8e90 0xa31180f78ee420b561240214c301df4adf9377ab 1201 1328
*/