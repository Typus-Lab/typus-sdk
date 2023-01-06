export async function getUnsubscribeTx(
    packageId: string, registry: string, typeArgument: string, index: string, share: string): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'unsubscribe',
        typeArguments: [typeArgument],
        arguments: [
            registry,
            index,
            share,
        ],
        gasBudget: 10000,
    }
    return tx
}
/*
sui client call --package 0x1543511bdce9ea3c401c4939126cea518adee965 --module covered_call --function unsubscribe --type-args 0x2::sui::SUI --args 0xb02452d0bbef3cbdc7840ea5bad27bcdd4031675 0 --gas-budget 100000
*/