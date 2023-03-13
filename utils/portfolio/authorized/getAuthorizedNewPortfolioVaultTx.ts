/**
 *  registry: & mut Registry,
    time_oracle: & Time,
    option_type: u64,
    period: u8,
    activation_ts_ms: u64,
    expiration_ts_ms: u64,
    d_token_decimal: u64,
    b_token_decimal: u64,
    o_token_decimal: u64,
    capacity: u64,
    strike_pct: vector<u64>,
    weight: vector<u64>,
    is_buyer: vector<bool>,
    strike_increment: u64,
    lot_size: u64,
    decay_speed: u64,
    initial_price: u64,
    final_price: u64,
    auction_duration_in_ms: u64,
    leverage: u64,
    has_next: bool,
    whitelist: vector<address>,
 * @param  typeArguments [D_TOKEN, B_TOKEN, O_TOKEN]
 */
export async function getAuthorizedNewPortfolioVaultTx(
    gasBudget: number,
    packageId: string,
    registry: string,
    typeArguments: string[],
    timeOracle: string,
    optionType: string,     // u64
    period: string,         // u8
    activationTsMs: string, // u64
    expirationTsMs: string, // u64
    dTokenDecimal: string,  // u64
    bTokenDecimal: string,  // u64
    oTokenDecimal: string,  // u64
    capacity: string,       // u64
    strikePct: string[], // vector<u64>
    weight: string[],       // vector<u64>
    isBuyer: boolean[],      // vector<bool>
    strikeIncrement: string,// u64
    lotSize: string,
    decaySpeed: string,
    initialPrice: string,
    finalPrice: string,
    auctionDurationInMs: string,
    whitelist: string[],
    leverage: string,
    hasNext: boolean,        // bool
): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'portfolio',
        function: 'authorized_new_portfolio_vault',
        typeArguments,
        arguments: [
            registry,
            timeOracle,
            optionType,
            period,
            activationTsMs,
            expirationTsMs,
            dTokenDecimal,
            bTokenDecimal,
            oTokenDecimal,
            capacity,
            strikePct,
            weight,
            isBuyer,
            strikeIncrement,
            lotSize,
            decaySpeed,
            initialPrice,
            finalPrice,
            auctionDurationInMs,
            leverage,
            hasNext,
            whitelist,
        ],
        gasBudget: gasBudget,
    }
    return tx
}