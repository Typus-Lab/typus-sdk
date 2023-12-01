import { TransactionBlock } from "@mysten/sui.js/transactions";
import { CLOCK } from "../../constants";
import { KIOSK_TYPE, KioskClient, Network, KioskTransaction } from "@mysten/kiosk";
import { SuiClient } from "@mysten/sui.js/client";

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

    let [coin] = tx.splitCoins(tx.gas, [tx.pure(10000000)]);

    tx.moveCall({
        target: `${nftPackageId}::tails_staking::transfer_nft`,
        typeArguments: [],
        arguments: [tx.object(registry), tx.object(kiosk), tx.object(kiosk_cap), tx.pure(nft_id), tx.pure(receiver), coin],
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
            arguments: [tx.object(registry), tx.object(kiosks[i]), tx.object(kiosk_caps[i]), tx.pure(nft_ids[i]), tx.pure(receiver), coin],
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
        arguments: [tx.object(registry), tx.object(kiosk), tx.object(kiosk_cap), tx.pure(nft_id), tx.object(CLOCK), coin],
    });
    tx.setGasBudget(gasBudget);

    return tx;
}

export async function getCreateKioskAndLockNftTx(
    kioskClient: KioskClient,
    gasBudget: number,
    nftPackageId: string,
    policy: string,
    nft_id: string,
    singer: string
) {
    let tx = new TransactionBlock();

    const kioskTx = new KioskTransaction({ transactionBlock: tx, kioskClient });
    kioskTx.create();
    kioskTx.lock({ itemType: `${nftPackageId}::typus_nft::Tails`, itemId: nft_id, policy });

    const { kiosk, kioskCap } = kioskTx;

    if (kiosk && kioskCap) {
        tx.moveCall({
            target: `0x2::transfer::public_share_object`,
            typeArguments: [KIOSK_TYPE],
            arguments: [kiosk],
        });
        tx.transferObjects([kioskCap], tx.pure(singer));
        tx.setGasBudget(gasBudget);
    } else {
        console.error("Fail to Create Kiosk Tx!!");
    }

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
        target: `${nftPackageId}::tails_staking::snapshot`,
        typeArguments: [],
        arguments: [tx.object(registry), tx.object(CLOCK)],
    });
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
export async function getSnapshotTx(gasBudget: number, nftPackageId: string, registry: string) {
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

export async function getCompoundTx(
    gasBudget: number,
    packageId: string,
    typeArguments: string[],
    registry: string,
    additional_config_registry: string,
    index: string
) {
    let tx = new TransactionBlock();
    tx.moveCall({
        target: `${packageId}::tails_staking::compound`,
        typeArguments,
        arguments: [tx.pure(registry), tx.pure(additional_config_registry), tx.pure(index), tx.object(CLOCK)],
    });
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

/**
    entry fun consume_exp_coin_unstaked<EXP_COIN>(
        registry: &mut Registry,
        kiosk: &mut Kiosk,
        kiosk_cap: &KioskOwnerCap,
        id: ID,
        exp_coin: Coin<EXP_COIN>,
        ctx: &mut TxContext
    )
*/
export async function consumeExpCoinUnstakedTx(
    gasBudget: number,
    nftPackageId: string,
    typeArguments: string[],
    registry: string,
    kiosk: string,
    kiosk_cap: string,
    nft_id: string,
    exp_coins: string[],
    amount: string
) {
    let tx = new TransactionBlock();

    const coin = exp_coins.pop()!;

    if (exp_coins.length > 0) {
        tx.mergeCoins(
            tx.object(coin),
            exp_coins.map((id) => tx.object(id))
        );
    }

    let [input_coin] = tx.splitCoins(tx.object(coin), [tx.pure(amount)]);

    tx.moveCall({
        target: `${nftPackageId}::tails_staking::consume_exp_coin_unstaked`,
        typeArguments,
        arguments: [tx.object(registry), tx.object(kiosk), tx.object(kiosk_cap), tx.pure(nft_id), input_coin],
    });
    tx.setGasBudget(gasBudget);

    return tx;
}

/**
    entry fun consume_exp_coin_staked<EXP_COIN>(
        registry: &mut Registry,
        exp_coin: Coin<EXP_COIN>,
        ctx: &mut TxContext
    )
*/
export async function consumeExpCoinStakedTx(
    gasBudget: number,
    nftPackageId: string,
    typeArguments: string[],
    registry: string,
    exp_coins: string[],
    amount: string
) {
    let tx = new TransactionBlock();

    const coin = exp_coins.pop()!;

    if (exp_coins.length > 0) {
        tx.mergeCoins(
            tx.object(coin),
            exp_coins.map((id) => tx.object(id))
        );
    }

    let [input_coin] = tx.splitCoins(tx.object(coin), [tx.pure(amount)]);

    tx.moveCall({
        target: `${nftPackageId}::tails_staking::consume_exp_coin_staked`,
        typeArguments,
        arguments: [tx.object(registry), input_coin],
    });

    tx.setGasBudget(gasBudget);

    return tx;
}
