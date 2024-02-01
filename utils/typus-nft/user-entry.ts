import { TransactionArgument, TransactionBlock } from "@mysten/sui.js/transactions";
import { CLOCK } from "../../constants";

/**
    entry fun free_mint(
        pool: &mut Pool,
        whitelist_token: Whitelist,
        ctx: &mut TxContext,
    )
*/
export async function getMintTx(gasBudget: number, nftPackageId: string, policy: string, pool: string, whitelist_token: string) {
    let tx = new TransactionBlock();

    tx.moveCall({
        target: `${nftPackageId}::typus_nft::free_mint`,
        typeArguments: [],
        arguments: [tx.object(pool), tx.object(policy), tx.object(whitelist_token), tx.object(CLOCK)],
    });
    tx.setGasBudget(gasBudget);

    return tx;
}

/**
    entry fun free_mint_into_kiosk(
        pool: &mut Pool,
        whitelist_token: Whitelist,
        kiosk: &mut Kiosk,
        kiosk_cap: &KioskOwnerCap,
        ctx: &mut TxContext,
    )
*/
export async function getMintToKioskTx(
    gasBudget: number,
    nftPackageId: string,
    pool: string,
    policy: string,
    whitelist_token: string,
    kiosk: string,
    kiosk_cap: string
) {
    let tx = new TransactionBlock();

    tx.moveCall({
        target: `${nftPackageId}::typus_nft::free_mint_into_kiosk`,
        typeArguments: [],
        arguments: [
            tx.object(pool),
            tx.object(policy),
            tx.object(whitelist_token),
            tx.object(kiosk),
            tx.object(kiosk_cap),
            tx.object(CLOCK),
        ],
    });
    tx.setGasBudget(gasBudget);

    return tx;
}

/**
    public fun pay<T>(
        policy: &mut TransferPolicy<T>,
        request: &mut TransferRequest<T>,
        payment: Coin<SUI>
    )
*/
export async function getPayRoyaltyTx(tx: TransactionBlock, nftPackageId: string, policy: string, request: TransactionArgument, coin) {
    tx.moveCall({
        target: `${nftPackageId}::royalty_rule::pay`,
        typeArguments: [`${nftPackageId}::typus_nft::Tails`],
        arguments: [tx.object(policy), request, coin],
    });

    return tx;
}

/**
    entry fun request_mint(
        pool: &mut Pool,
        seed: u64, // 0, 1, 2
        coin: Coin<SUI>,
        clock: &Clock,
        ctx: & TxContext
    )
*/
export async function getRequestMintTx(gasBudget: number, nftPackageId: string, pool: string, seed: string, price: string) {
    let tx = new TransactionBlock();

    let [coin] = tx.splitCoins(tx.gas, [tx.pure(price)]);

    tx.moveCall({
        target: `${nftPackageId}::discount_mint::request_mint`,
        typeArguments: [],
        arguments: [tx.object(pool), tx.pure(seed), coin, tx.object(CLOCK)],
    });
    tx.setGasBudget(gasBudget);

    return tx;
}

export async function getIsWhitelistTx(gasBudget: number, nftPackageId: string, pool: string, user: string) {
    let tx = new TransactionBlock();

    tx.moveCall({
        target: `${nftPackageId}::discount_mint::is_whitelist`,
        typeArguments: [],
        arguments: [tx.object(pool), tx.pure(user)],
    });
    tx.setGasBudget(gasBudget);

    return tx;
}
