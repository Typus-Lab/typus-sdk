import { TransactionBlock } from "@mysten/sui.js";
import { CLOCK } from "../../constants";
import { KIOSK_TYPE, createKiosk, createKioskAndShare, lock, place } from "@mysten/kiosk";

/**
    entry fun transfer_nft(
        registry: &mut Registry,
        from_kiosk: &mut Kiosk,
        from_kiosk_cap: &KioskOwnerCap,
        id: ID,
        receiver: address,
        ctx: &mut TxContext
    )
*/
export async function getTransferNftTx(
    gasBudget: number,
    nftPackageId: string,
    registry: string,
    kiosk: string,
    kiosk_cap: string,
    nft_id: string,
    receiver: string
) {
    let tx = new TransactionBlock();

    tx.moveCall({
        target: `${nftPackageId}::tails_staking::transfer_nft`,
        typeArguments: [],
        arguments: [tx.object(registry), tx.object(kiosk), tx.object(kiosk_cap), tx.object(nft_id), tx.pure(receiver)],
    });
    tx.setGasBudget(gasBudget);

    return tx;
}

export async function getTransferNftsTx(
    gasBudget: number,
    nftPackageId: string,
    registry: string,
    kiosks: string[],
    kiosk_caps: string[],
    nft_ids: string[],
    receiver: string
) {
    let tx = new TransactionBlock();
    var i = 0;
    while (i < kiosks.length) {
        let [coin] = tx.splitCoins(tx.gas, [tx.pure(10000000)]);

        tx.moveCall({
            target: `${nftPackageId}::tails_staking::transfer_nft`,
            typeArguments: [],
            arguments: [
                tx.object(registry),
                tx.object(kiosks[i]),
                tx.object(kiosk_caps[i]),
                tx.object(nft_ids[i]),
                tx.pure(receiver),
                coin,
            ],
        });
        i += 1;
    }
    tx.setGasBudget(gasBudget);

    return tx;
}

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

    let [coin] = tx.splitCoins(tx.gas, [tx.pure(50000000)]);

    tx.moveCall({
        target: `${nftPackageId}::tails_staking::stake_nft`,
        typeArguments: [],
        arguments: [tx.object(registry), tx.object(kiosk), tx.object(kiosk_cap), tx.object(nft_id), tx.object(CLOCK), coin],
    });
    tx.setGasBudget(gasBudget);

    return tx;
}

export async function getCreateKioskAndLockNftTx(gasBudget: number, nftPackageId: string, policy: string, nft_id: string, singer: string) {
    let tx = new TransactionBlock();

    let [kiosk, kiosk_cap] = createKiosk(tx);

    lock(tx, `${nftPackageId}::typus_nft::Tails`, kiosk, kiosk_cap, tx.object(policy), tx.object(nft_id));

    tx.moveCall({
        target: `0x2::transfer::public_share_object`,
        typeArguments: [KIOSK_TYPE],
        arguments: [kiosk],
    });

    tx.transferObjects([kiosk_cap], tx.pure(singer));

    tx.setGasBudget(gasBudget);

    return tx;
}

/**
    public fun unstake_nft(
        registry: &mut Registry,
        kiosk: &mut Kiosk,
        kiosk_cap: &KioskOwnerCap,
        coin: Coin<SUI>,
        ctx: &mut TxContext
    )
*/
export async function getUnstakeNftTx(gasBudget: number, nftPackageId: string, registry: string, kiosk: string, kiosk_cap: string) {
    let tx = new TransactionBlock();

    tx.moveCall({
        target: `${nftPackageId}::tails_staking::unstake_nft`,
        typeArguments: [],
        arguments: [tx.object(registry), tx.object(kiosk), tx.object(kiosk_cap)],
    });
    tx.setGasBudget(gasBudget);

    return tx;
}

/**
    public fun daily_attend(
        registry: &mut Registry,
        clock: &Clock,
        ctx: &mut TxContext
    )
*/
export async function getDailyAttendTx(gasBudget: number, nftPackageId: string, registry: string) {
    let tx = new TransactionBlock();

    tx.moveCall({
        target: `${nftPackageId}::tails_staking::daily_attend`,
        typeArguments: [],
        arguments: [tx.object(registry), tx.object(CLOCK)],
    });
    tx.setGasBudget(gasBudget);

    return tx;
}

/**
    entry fun snapshot(
        registry: &mut Registry,
        clock: &Clock,
        ctx: &mut TxContext
    )
*/
export async function getSanpshotTx(gasBudget: number, nftPackageId: string, registry: string) {
    let tx = new TransactionBlock();

    tx.moveCall({
        target: `${nftPackageId}::tails_staking::snapshot`,
        typeArguments: [],
        arguments: [tx.object(registry), tx.object(CLOCK)],
    });
    tx.setGasBudget(gasBudget);

    return tx;
}

export async function getNewBidTx(
    gasBudget: number,
    packageId: string,
    typeArguments: string[],
    registry: string,
    additional_config_registry: string,
    index: string,
    priceOracle: string,
    coins: string[],
    size: string,
    premium_required: string, // fe float * b_token_decimal
    usingSponsoredGasCoin = false
) {
    let tx = new TransactionBlock();
    if (
        !usingSponsoredGasCoin &&
        (typeArguments[1] == "0x2::sui::SUI" ||
            typeArguments[1] == "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI")
    ) {
        let [coin] = tx.splitCoins(tx.gas, [tx.pure(premium_required)]);
        tx.moveCall({
            target: `${packageId}::tails_staking::new_bid`,
            typeArguments,
            arguments: [
                tx.pure(registry),
                tx.pure(additional_config_registry),
                tx.pure(index),
                tx.pure(priceOracle),
                tx.pure("0x6"),
                tx.makeMoveVec({ objects: [coin] }),
                tx.pure(size),
            ],
        });
    } else {
        tx.moveCall({
            target: `${packageId}::tails_staking::new_bid`,
            typeArguments,
            arguments: [
                tx.pure(registry),
                tx.pure(additional_config_registry),
                tx.pure(index),
                tx.pure(priceOracle),
                tx.pure("0x6"),
                tx.makeMoveVec({ objects: coins.map((id) => tx.object(id)) }),
                tx.pure(size),
            ],
        });
    }
    tx.setGasBudget(gasBudget);

    return tx;
}

export async function getDepositTx(
    gasBudget: number,
    packageId: string,
    typeArguments: string[],
    registry: string,
    additional_config_registry: string,
    index: string,
    coins: string[],
    amount: string,
    usingSponsoredGasCoin = false
) {
    let tx = new TransactionBlock();
    if (
        !usingSponsoredGasCoin &&
        (typeArguments[0] == "0x2::sui::SUI" ||
            typeArguments[0] == "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI")
    ) {
        let [coin] = tx.splitCoins(tx.gas, [tx.pure(amount)]);
        tx.moveCall({
            target: `${packageId}::tails_staking::deposit`,
            typeArguments,
            arguments: [
                tx.pure(registry),
                tx.pure(additional_config_registry),
                tx.pure(index),
                tx.makeMoveVec({ objects: [coin] }),
                tx.pure(amount),
                tx.object(CLOCK),
            ],
        });
    } else {
        tx.moveCall({
            target: `${packageId}::tails_staking::deposit`,
            typeArguments,
            arguments: [
                tx.pure(registry),
                tx.pure(additional_config_registry),
                tx.pure(index),
                tx.makeMoveVec({ objects: coins.map((id) => tx.object(id)) }),
                tx.pure(amount),
                tx.object(CLOCK),
            ],
        });
    }
    tx.setGasBudget(gasBudget);

    return tx;
}

export async function getWithdrawTx(
    gasBudget: number,
    packageId: string,
    typeArguments: string[],
    registry: string,
    additional_config_registry: string,
    index: string,
    share?: string
) {
    let tx = new TransactionBlock();
    tx.moveCall({
        target: `${packageId}::tails_staking::withdraw`,
        typeArguments,
        arguments: [
            tx.pure(registry),
            tx.pure(additional_config_registry),
            tx.pure(index),
            tx.pure(share ? [share] : []),
            tx.object(CLOCK),
        ],
    });
    tx.setGasBudget(gasBudget);

    return tx;
}

export async function getUnsubscribeTx(
    gasBudget: number,
    packageId: string,
    typeArguments: string[],
    registry: string,
    additional_config_registry: string,
    index: string,
    share?: string
) {
    let tx = new TransactionBlock();
    tx.moveCall({
        target: `${packageId}::tails_staking::unsubscribe`,
        typeArguments,
        arguments: [
            tx.pure(registry),
            tx.pure(additional_config_registry),
            tx.pure(index),
            tx.pure(share ? [share] : []),
            tx.object(CLOCK),
        ],
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
        target: `${nftPackageId}::tails_staking::level_up`,
        typeArguments: [],
        arguments: [tx.object(registry)],
    });
    tx.setGasBudget(gasBudget);

    return tx;
}
