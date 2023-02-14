export async function getUpdateTimeOracleTx(
    gasBudget: number, packageId: string, oracle: string, managerCap: string, ts: number): Promise<any> {
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
        gasBudget: gasBudget,
    }
    return tx
}
