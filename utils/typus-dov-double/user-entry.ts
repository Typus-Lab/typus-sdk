import { TransactionBlock } from "@mysten/sui.js";

/**
    public(friend) entry fun deposit<O_TOKEN, U_TOKEN, B_TOKEN>(
        registry: &mut Registry,
        index: u64,
        token_coins: vector<Coin<O_TOKEN>>,
        usd_coins: vector<Coin<U_TOKEN>>,
        token_amount: u64,
        ctx: &mut TxContext
    )
    @param typeArguments [Token Deposit Vault Token, Usd Deposit Vault Token, Bid Vault Token]
*/
export async function getDepositTx(
    gasBudget: number,
    packageId: string,
    typeArguments: string[],
    registry: string,
    index: string,
    o_coins: string[],
    u_coins: string[],
    amount: string
) {
    let tx = new TransactionBlock();
    tx.moveCall({
        target: `${packageId}::multiple_collateral::deposit`,
        typeArguments,
        arguments: [
            tx.pure(registry),
            tx.pure(index),
            tx.makeMoveVec({ objects: o_coins.map((id) => tx.object(id)) }),
            tx.makeMoveVec({ objects: u_coins.map((id) => tx.object(id)) }),
            tx.pure(amount),
        ],
    });
    tx.setGasBudget(gasBudget);

    return tx;
}
/**
    public(friend) entry fun withdraw<O_TOKEN, U_TOKEN, B_TOKEN>(
        registry: &mut Registry,
        index: u64,
        share: Option<u64>,
        ctx: &mut TxContext
    )
    @param typeArguments [Token Deposit Vault Token, Usd Deposit Vault Token, Bid Vault Token]
*/
export async function getWithdrawTx(gasBudget: number, packageId: string, typeArguments: string[], registry: string, index: string, share?: string) {
    let tx = new TransactionBlock();
    tx.moveCall({
        target: `${packageId}::multiple_collateral::withdraw`,
        typeArguments,
        arguments: [tx.pure(registry), tx.pure(index), tx.pure(share ? [share] : [])],
    });
    tx.setGasBudget(gasBudget);

    return tx;
}
/**
    public(friend) entry fun claim<O_TOKEN, U_TOKEN>(
        registry: &mut Registry,
        index: u64,
        ctx: &mut TxContext
    )
    @param typeArguments [Token Deposit Vault Token, Usd Deposit Vault Token]
*/
export async function getClaimTx(gasBudget: number, packageId: string, typeArguments: string[], registry: string, index: string) {
    let tx = new TransactionBlock();
    tx.moveCall({
        target: `${packageId}::multiple_collateral::claim`,
        typeArguments,
        arguments: [tx.pure(registry), tx.pure(index)],
    });
    tx.setGasBudget(gasBudget);

    return tx;
}
/**
    public(friend) entry fun harvest<TOKEN>(
        registry: &mut Registry,
        index: u64,
        ctx: &mut TxContext
    )
    @param typeArguments [Bid Vault Token]
*/
export async function getHarvestTx(gasBudget: number, packageId: string, typeArguments: string[], registry: string, index: string) {
    let tx = new TransactionBlock();
    tx.moveCall({
        target: `${packageId}::multiple_collateral::harvest`,
        typeArguments,
        arguments: [tx.pure(registry), tx.pure(index)],
    });
    tx.setGasBudget(gasBudget);

    return tx;
}
/**
    public(friend) entry fun claim_and_harvest<O_TOKEN, U_TOKEN, B_TOKEN>(
        registry: &mut Registry,
        index: u64,
        ctx: &mut TxContext
    )
    @param typeArguments [Token Deposit Vault Token, Usd Deposit Vault Token, Bid Vault Token]
*/
export async function getClaimAndHarvestTx(gasBudget: number, packageId: string, typeArguments: string[], registry: string, index: string) {
    let tx = new TransactionBlock();
    tx.moveCall({
        target: `${packageId}::multiple_collateral::claim_and_harvest`,
        typeArguments,
        arguments: [tx.pure(registry), tx.pure(index)],
    });
    tx.setGasBudget(gasBudget);

    return tx;
}
/**
    public(friend) entry fun compound_token<TOKEN, U_TOKEN>(
        registry: &mut Registry,
        index: u64,
        usd_coins: vector<Coin<U_TOKEN>>,
        ctx: &mut TxContext,
    )
    @param typeArguments [Token Deposit Vault Token, Usd Deposit Vault Token]
*/
export async function getCompoundTokenTx(
    gasBudget: number,
    packageId: string,
    typeArguments: string[],
    registry: string,
    index: string,
    u_coins: string[]
) {
    let tx = new TransactionBlock();
    tx.moveCall({
        target: `${packageId}::multiple_collateral::compound_token`,
        typeArguments,
        arguments: [tx.pure(registry), tx.pure(index), tx.makeMoveVec({ objects: u_coins.map((id) => tx.object(id)) })],
    });
    tx.setGasBudget(gasBudget);

    return tx;
}
/**
    public(friend) entry fun compound_usd<O_TOKEN, TOKEN>(
        registry: &mut Registry,
        index: u64,
        token_coins: vector<Coin<O_TOKEN>>,
        ctx: &mut TxContext,
    )
    @param typeArguments [Token Deposit Vault Token, Usd Deposit Vault Token]
*/
export async function getCompoundUsdTx(
    gasBudget: number,
    packageId: string,
    typeArguments: string[],
    registry: string,
    index: string,
    o_coins: string[]
) {
    let tx = new TransactionBlock();
    tx.moveCall({
        target: `${packageId}::multiple_collateral::compound_usd`,
        typeArguments,
        arguments: [tx.pure(registry), tx.pure(index), tx.makeMoveVec({ objects: o_coins.map((id) => tx.object(id)) })],
    });
    tx.setGasBudget(gasBudget);

    return tx;
}
/**
    public(friend) entry fun unsubscribe<O_TOKEN, U_TOKEN>(
        registry: &mut Registry,
        index: u64,
        share: Option<u64>,
        ctx: &mut TxContext
    )
    @param typeArguments [Token Deposit Vault Token, Usd Deposit Vault Token]
*/
export async function getUnsubscribeTx(
    gasBudget: number,
    packageId: string,
    typeArguments: string[],
    registry: string,
    index: string,
    share?: string
) {
    let tx = new TransactionBlock();
    tx.moveCall({
        target: `${packageId}::multiple_collateral::unsubscribe`,
        typeArguments,
        arguments: [tx.pure(registry), tx.pure(index), tx.pure(share ? [share] : [])],
    });
    tx.setGasBudget(gasBudget);

    return tx;
}
/**
    public(friend) entry fun new_bid<O_TOKEN, U_TOKEN, B_TOKEN>(
        registry: &mut Registry,
        index: u64,
        price_oracle: &Oracle<O_TOKEN>,
        clock: &Clock,
        coins: vector<Coin<B_TOKEN>>,
        size: u64,
        ctx: &mut TxContext,
    )
    @param typeArguments [Token Deposit Vault Token, Usd Deposit Vault Token, Bid Vault Token]
*/
export async function getNewBidTx(
    gasBudget: number,
    packageId: string,
    typeArguments: string[],
    registry: string,
    index: string,
    priceOracle: string,
    b_coins: string[],
    size: string
) {
    let tx = new TransactionBlock();
    tx.moveCall({
        target: `${packageId}::multiple_collateral::new_bid`,
        typeArguments,
        arguments: [
            tx.pure(registry),
            tx.pure(index),
            tx.pure(priceOracle),
            tx.pure("0x6"),
            tx.makeMoveVec({ objects: b_coins.map((id) => tx.object(id)) }),
            tx.pure(size),
        ],
    });
    tx.setGasBudget(gasBudget);

    return tx;
}
