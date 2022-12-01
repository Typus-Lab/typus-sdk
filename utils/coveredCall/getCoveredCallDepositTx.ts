export async function getCoveredCallDepositTx(
    packageId: string, registry: string, typeArgument: string, index: number,
    rolling: Boolean, coin: string, amount: number
): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'deposit',
        typeArguments: [typeArgument],
        arguments: [
            registry,
            index,
            rolling,
            coin,
            amount
        ],
        gasBudget: 10000,
    }
    return tx
}
/*
sui client call --package 0x1543511bdce9ea3c401c4939126cea518adee965 --module covered_call --function deposit --type-args 0x2::sui::SUI --args 0xb02452d0bbef3cbdc7840ea5bad27bcdd4031675 0 true COIN 9999 --gas-budget 100000
*/