export async function getNewTimeOracleTx(packageId: string): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'unix_time',
        function: 'new_time',
        typeArguments: [],
        arguments: [],
        gasBudget: 100000,
    }
    return tx
}

