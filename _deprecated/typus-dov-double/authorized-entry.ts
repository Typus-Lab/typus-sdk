import { TransactionBlock } from "@mysten/sui.js/transactions";

/**
    public(friend) entry fun authorized_add_portfolio_vault_authorized_user<O_TOKEN, U_TOKEN, B_TOKEN>(
        registry: &mut Registry,
        index: u64,
        users: vector<address>,
        ctx: &mut TxContext,
    )
*/
export async function getAuthorizedAddPortfolioVaultAuthorizedUserTx(
    gasBudget: number,
    packageId: string,
    typeArguments: string[],
    registry: string,
    index: string,
    users: string[]
) {
    let tx = new TransactionBlock();
    tx.moveCall({
        target: `${packageId}::typus_dov_double::authorized_add_portfolio_vault_authorized_user`,
        typeArguments,
        arguments: [tx.pure(registry), tx.pure(index), tx.pure(users)],
    });
    tx.setGasBudget(gasBudget);

    return tx;
}
/**
    public(friend) entry fun authorized_remove_portfolio_vault_authorized_user<O_TOKEN, U_TOKEN, B_TOKEN>(
        registry: &mut Registry,
        index: u64,
        users: vector<address>,
        ctx: &mut TxContext,
    )
*/
export async function getAuthorizedRemovePortfolioVaultAuthorizedUserTx(
    gasBudget: number,
    packageId: string,
    typeArguments: string[],
    registry: string,
    index: string,
    users: string[]
) {
    let tx = new TransactionBlock();
    tx.moveCall({
        target: `${packageId}::typus_dov_double::authorized_remove_portfolio_vault_authorized_user`,
        typeArguments,
        arguments: [tx.pure(registry), tx.pure(index), tx.pure(users)],
    });
    tx.setGasBudget(gasBudget);

    return tx;
}
/**
    public(friend) entry fun authorized_new_portfolio_vault<O_TOKEN, U_TOKEN, B_TOKEN>(
        registry: &mut Registry,
        price_oracle: &Oracle<O_TOKEN>,
        clock: &Clock,
        strategy_name: String,
        period: u8,
        activation_ts_ms: u64,
        expiration_ts_ms: u64,
        o_token_decimal: u64,
        u_token_decimal: u64,
        b_token_decimal: u64,
        capacity: u64,
        call_strike_pct: vector<u64>,
        call_weight: vector<u64>,
        call_is_buyer: vector<bool>,
        put_strike_pct: vector<u64>,
        put_weight: vector<u64>,
        put_is_buyer: vector<bool>,
        strike_increment: u64,
        lot_size: u64,
        decay_speed: u64,
        initial_price: u64,
        final_price: u64,
        auction_duration_in_ms: u64,
        leverage: u64,
        has_next: bool,
        whitelist: vector<address>,
        ctx: &mut TxContext
    )
*/
export async function getAuthorizedNewPortfolioVaultTx(
    gasBudget: number,
    packageId: string,
    typeArguments: string[],
    registry: string,
    priceOracle: string,
    strategy_name: String,
    period: string,
    activation_ts_ms: string,
    expiration_ts_ms: string,
    o_token_decimal: string,
    u_token_decimal: string,
    b_token_decimal: string,
    capacity: string,
    call_strike_pct: string[],
    call_weight: string[],
    call_is_buyer: boolean[],
    put_strike_pct: string[],
    put_weight: string[],
    put_is_buyer: boolean[],
    strike_increment: string,
    lot_size: string,
    decay_speed: string,
    initial_price: string,
    final_price: string,
    auction_duration_in_ms: string,
    leverage: string,
    has_next: boolean,
    whitelist: string[]
) {
    let tx = new TransactionBlock();
    tx.moveCall({
        target: `${packageId}::typus_dov_double::authorized_new_portfolio_vault`,
        typeArguments,
        arguments: [
            tx.pure(registry),
            tx.pure(priceOracle),
            tx.pure("0x6"),
            tx.pure(strategy_name),
            tx.pure(period),
            tx.pure(activation_ts_ms),
            tx.pure(expiration_ts_ms),
            tx.pure(o_token_decimal),
            tx.pure(u_token_decimal),
            tx.pure(b_token_decimal),
            tx.pure(capacity),
            tx.pure(call_strike_pct),
            tx.pure(call_weight),
            tx.pure(call_is_buyer),
            tx.pure(put_strike_pct),
            tx.pure(put_weight),
            tx.pure(put_is_buyer),
            tx.pure(strike_increment),
            tx.pure(lot_size),
            tx.pure(decay_speed),
            tx.pure(initial_price),
            tx.pure(final_price),
            tx.pure(auction_duration_in_ms),
            tx.pure(leverage),
            tx.pure(has_next),
            tx.pure(whitelist),
        ],
    });
    tx.setGasBudget(gasBudget);

    return tx;
}
/**
    public(friend) entry fun authorized_update_capacity<O_TOKEN, U_TOKEN, B_TOKEN>(
        registry: &mut Registry,
        index: u64,
        capacity: u64,
        ctx: &mut TxContext,
    )
*/
export async function getAuthorizedUpdateCapacityTx(
    gasBudget: number,
    packageId: string,
    typeArguments: string[],
    registry: string,
    index: string,
    capacity: string
) {
    let tx = new TransactionBlock();
    tx.moveCall({
        target: `${packageId}::typus_dov_double::authorized_update_capacity`,
        typeArguments,
        arguments: [tx.pure(registry), tx.pure(index), tx.pure(capacity)],
    });
    tx.setGasBudget(gasBudget);

    return tx;
}
/**
    public(friend) entry fun authorized_update_warmup_vault_config<O_TOKEN, U_TOKEN, B_TOKEN>(
        registry: &mut Registry,
        index: u64,
        strike_increment: u64,
        decay_speed: u64,
        initial_price: u64,
        final_price: u64,
        auction_duration_in_ms: u64,
        ctx: &mut TxContext,
    )
*/
export async function getAuthorizedUpdateWarmupVaultConfigTx(
    gasBudget: number,
    packageId: string,
    typeArguments: string[],
    registry: string,
    index: string,
    strike_increment: string,
    decay_speed: string,
    initial_price: string,
    final_price: string,
    auction_duration_in_ms: string
) {
    let tx = new TransactionBlock();
    tx.moveCall({
        target: `${packageId}::typus_dov_double::authorized_update_warmup_vault_config`,
        typeArguments,
        arguments: [
            tx.pure(registry),
            tx.pure(index),
            tx.pure(strike_increment),
            tx.pure(decay_speed),
            tx.pure(initial_price),
            tx.pure(final_price),
            tx.pure(auction_duration_in_ms),
        ],
    });
    tx.setGasBudget(gasBudget);

    return tx;
}
/**
    public(friend) entry fun authorized_update_upcoming_vault_config<O_TOKEN, U_TOKEN, B_TOKEN>(
        registry: &mut Registry,
        index: u64,
        call_strike_pct: vector<u64>,
        call_weight: vector<u64>,
        call_is_buyer: vector<bool>,
        put_strike_pct: vector<u64>,
        put_weight: vector<u64>,
        put_is_buyer: vector<bool>,
        strike_increment: u64,
        decay_speed: u64,
        initial_price: u64,
        final_price: u64,
        auction_duration_in_ms: u64,
        ctx: &mut TxContext,
    )
*/
export async function getAuthorizedUpdateUpcomingVaultConfigTx(
    gasBudget: number,
    packageId: string,
    typeArguments: string[],
    registry: string,
    index: string,
    call_strike_pct: string[],
    call_weight: string[],
    call_is_buyer: boolean[],
    put_strike_pct: string[],
    put_weight: string[],
    put_is_buyer: boolean[],
    strike_increment: string,
    decay_speed: string,
    initial_price: string,
    final_price: string,
    auction_duration_in_ms: string
) {
    let tx = new TransactionBlock();
    tx.moveCall({
        target: `${packageId}::typus_dov_double::authorized_update_upcoming_vault_config`,
        typeArguments,
        arguments: [
            tx.pure(registry),
            tx.pure(index),
            tx.pure(call_strike_pct),
            tx.pure(call_weight),
            tx.pure(call_is_buyer),
            tx.pure(put_strike_pct),
            tx.pure(put_weight),
            tx.pure(put_is_buyer),
            tx.pure(strike_increment),
            tx.pure(decay_speed),
            tx.pure(initial_price),
            tx.pure(final_price),
            tx.pure(auction_duration_in_ms),
        ],
    });
    tx.setGasBudget(gasBudget);

    return tx;
}
/**
    public(friend) entry fun authorized_delivery<O_TOKEN, U_TOKEN, B_TOKEN>(
        registry: &mut Registry,
        index: u64,
        price_oracle: &Oracle<O_TOKEN>,
        clock: &Clock,
        ctx: &mut TxContext
    )
*/
export async function getAuthorizedDeliveryTx(
    gasBudget: number,
    packageId: string,
    typeArguments: string[],
    registry: string,
    index: string,
    priceOracle: string
) {
    let tx = new TransactionBlock();
    tx.moveCall({
        target: `${packageId}::typus_dov_double::authorized_delivery`,
        typeArguments,
        arguments: [tx.pure(registry), tx.pure(index), tx.pure(priceOracle), tx.pure("0x6")],
    });
    tx.setGasBudget(gasBudget);

    return tx;
}
