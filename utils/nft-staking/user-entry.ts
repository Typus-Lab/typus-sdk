import { TransactionBlock } from "@mysten/sui.js";
import { CLOCK } from "../../constants";

/**
    public fun stake_nft(
        registry: &mut Registry,
        kiosk: &mut Kiosk,
        kiosk_cap: &KioskOwnerCap,
        id: ID,
        clock: &Clock,
        ctx: &mut TxContext
    )
*/
export async function getStakeNftTx(
    gasBudget: number,
    nftPackageId: string,
    registry: string,
    kiosk: string,
    kiosk_cap: string,
    nft_id: string
) {
    let tx = new TransactionBlock();

    tx.moveCall({
        target: `${nftPackageId}::typus_dov_single::stake_nft`,
        typeArguments: [],
        arguments: [tx.object(registry), tx.object(kiosk), tx.object(kiosk_cap), tx.object(nft_id), tx.object(CLOCK)],
    });
    tx.setGasBudget(gasBudget);

    return tx;
}

/**
    public fun unstake_nft(
        registry: &mut Registry,
        kiosk: &mut Kiosk,
        kiosk_cap: &KioskOwnerCap,
        ctx: &mut TxContext
    )
*/
export async function getUnstakeNftTx(gasBudget: number, nftPackageId: string, registry: string, kiosk: string, kiosk_cap: string) {
    let tx = new TransactionBlock();

    tx.moveCall({
        target: `${nftPackageId}::typus_dov_single::unstake_nft`,
        typeArguments: [],
        arguments: [tx.object(registry), tx.object(kiosk), tx.object(kiosk_cap)],
    });
    tx.setGasBudget(gasBudget);

    return tx;
}

/**
    public fun snapshot(
        registry: &mut Registry,
        clock: &Clock,
        ctx: &mut TxContext
    )
*/
export async function getSnapshotTx(gasBudget: number, nftPackageId: string, registry: string) {
    let tx = new TransactionBlock();

    tx.moveCall({
        target: `${nftPackageId}::typus_dov_single::snapshot`,
        typeArguments: [],
        arguments: [tx.object(registry), tx.object(CLOCK)],
    });
    tx.setGasBudget(gasBudget);

    return tx;
}

export async function getFirstBidTx(gasBudget: number, nftPackageId: string, registry: string) {
    let tx = new TransactionBlock();

    tx.moveCall({
        target: `${nftPackageId}::typus_dov_single::first_bid`,
        typeArguments: [],
        arguments: [tx.object(registry)],
    });
    tx.setGasBudget(gasBudget);

    return tx;
}

export async function getFirstDepositTx(gasBudget: number, nftPackageId: string, registry: string) {
    let tx = new TransactionBlock();

    tx.moveCall({
        target: `${nftPackageId}::typus_dov_single::first_deposit`,
        typeArguments: [],
        arguments: [tx.object(registry)],
    });
    tx.setGasBudget(gasBudget);

    return tx;
}

/**
    public fun level_up(
        registry: &mut Registry,
        ctx: &mut TxContext
    )
*/
export async function getLevelUpTx(gasBudget: number, nftPackageId: string, registry: string) {
    let tx = new TransactionBlock();

    tx.moveCall({
        target: `${nftPackageId}::typus_dov_single::level_up`,
        typeArguments: [],
        arguments: [tx.object(registry)],
    });
    tx.setGasBudget(gasBudget);

    return tx;
}
