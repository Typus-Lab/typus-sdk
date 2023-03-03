/**
public(friend) entry fun evolution<D_TOKEN, B_TOKEN, O_TOKEN>(
    manager_cap: & ManagerCap,
    registry: & mut Registry,
    index: u64,
    price_oracle: & Oracle<O_TOKEN>,
    time_oracle: & Time,
    activation_ts_ms: Option<u64>,
    expiration_ts_ms: Option<u64>,
    ctx: & mut TxContext,
) 
* @param  activationTsMs if has_next gives ['<number>'], if not gives []
* @param  expirationTsMs if has_next gives ['<number>'], if not gives []
*/
export async function getEvolutionTx(
    gasBudget: number,
    packageId: string,
    registry: string,
    typeArguments: string[],
    managerCap: string,
    index: string,
    priceOracle: string,
    timeOracle: string,
    activationTsMs: string[],
    expirationTsMs: string[],
): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'portfolio',
        function: 'evolution',
        typeArguments,
        arguments: [
            managerCap,
            registry,
            index,
            priceOracle,
            timeOracle,
            activationTsMs,
            expirationTsMs,
        ],
        gasBudget: gasBudget,
    }
    return tx
}