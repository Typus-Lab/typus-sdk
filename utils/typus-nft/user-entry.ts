import { TransactionBlock } from "@mysten/sui.js";

/**
    entry fun free_mint(
        pool: &mut Pool,
        whitelist_token: Whitelist,
        ctx: &mut TxContext,
    )
*/
export async function getMintTx(gasBudget: number, nftPackageId: string, pool: string, whitelist_token: string) {
    let tx = new TransactionBlock();

    tx.moveCall({
        target: `${nftPackageId}::typus_nft::free_mint`,
        typeArguments: [],
        arguments: [tx.object(pool), tx.object(whitelist_token)],
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
    whitelist_token: string,
    kiosk: string,
    kiosk_cap: string
) {
    let tx = new TransactionBlock();

    tx.moveCall({
        target: `${nftPackageId}::typus_nft::free_mint_into_kiosk`,
        typeArguments: [],
        arguments: [tx.object(pool), tx.object(whitelist_token), tx.object(kiosk), tx.object(kiosk_cap)],
    });
    tx.setGasBudget(gasBudget);

    return tx;
}
