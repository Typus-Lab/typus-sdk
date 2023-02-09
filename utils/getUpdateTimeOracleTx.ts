export async function getUpdateTimeOracleTx(packageId: string, oracle: string, managerCap: string, ts: number): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'unix_time',
        function: 'update',
        typeArguments: [],
        arguments: [
            oracle,
            managerCap,

            ts
        ],
        gasBudget: 100000,
    }
    return tx
}
