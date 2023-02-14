export async function getNewTimeOracleTx(
    gasBudget: number, packageId: string): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'unix_time',
        function: 'new_time',
        typeArguments: [],
        arguments: [],
        gasBudget: gasBudget,
    }
    return tx
}

