import { TransactionArgument, TransactionBlock } from "@mysten/sui.js/transactions";
import { CLOCK } from "src/constants";
import { TypusConfig } from "src/utils";

/**
    entry fun free_mint(
        pool: &mut Pool,
        whitelist_token: Whitelist,
        ctx: &mut TxContext,
    )
*/
export async function getMintTx(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        pool: string;
        whitelist_token: string;
    }
) {
    tx.moveCall({
        target: `${config.package.nft}::typus_nft::free_mint`,
        typeArguments: [],
        arguments: [tx.object(input.pool), tx.object(config.object.nftTransferPolicy), tx.object(input.whitelist_token), tx.object(CLOCK)],
    });

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
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        pool: string;
        whitelist_token: string;
        kiosk: string;
        kiosk_cap: string;
    }
) {
    tx.moveCall({
        target: `${config.package.nft}::typus_nft::free_mint_into_kiosk`,
        typeArguments: [],
        arguments: [
            tx.object(input.pool),
            tx.object(config.object.nftTransferPolicy),
            tx.object(input.whitelist_token),
            tx.object(input.kiosk),
            tx.object(input.kiosk_cap),
            tx.object(CLOCK),
        ],
    });

    return tx;
}

/**
    public fun pay<T>(
        config.object.nftTransferPolicy: &mut TransferPolicy<T>,
        request: &mut TransferRequest<T>,
        payment: Coin<SUI>
    )
*/
export async function getPayRoyaltyTx(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        request: TransactionArgument;
        coin: string;
    }
) {
    tx.moveCall({
        target: `${config.package.nft}::royalty_rule::pay`,
        typeArguments: [`${config.package.nft}::typus_nft::Tails`],
        arguments: [tx.object(config.object.nftTransferPolicy), input.request, tx.object(input.coin)],
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
export async function getRequestMintTx(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        pool: string;
        seed: string;
        price: string;
    }
) {
    let [coin] = tx.splitCoins(tx.gas, [tx.pure(input.price)]);

    tx.moveCall({
        target: `${config.package.nft}::discount_mint::request_mint`,
        typeArguments: [],
        arguments: [tx.object(input.pool), tx.pure(input.seed), coin, tx.object(CLOCK)],
    });

    return tx;
}

export async function getIsWhitelistTx(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        pool: string;
        user: string;
    }
) {
    tx.moveCall({
        target: `${config.package.nft}::discount_mint::is_whitelist`,
        typeArguments: [],
        arguments: [tx.object(input.pool), tx.pure(input.user)],
    });

    return tx;
}
