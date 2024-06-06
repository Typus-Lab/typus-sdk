import { TransactionBlock } from "@mysten/sui.js/transactions";
import { CLOCK } from "../../constants";
import { KIOSK_TYPE, KioskClient, Network, KioskTransaction } from "@mysten/kiosk";
import { SuiClient } from "@mysten/sui.js/client";
import { TailsId, kioskOwnerCap } from "../typus-nft/fetch";

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
    personalKioskPackageId: string,
    tails_id: TailsId,
    receiver: string
) {
    let tx = new TransactionBlock();

    let [coin] = tx.splitCoins(tx.gas, [tx.pure(10000000)]);

    if (tails_id.isPersonal) {
        const [personalKioskCap, borrow] = tx.moveCall({
            target: `${personalKioskPackageId}::personal_kiosk::borrow_val`,
            arguments: [tx.object(tails_id.kioskCap)],
        });
        tx.moveCall({
            target: `${nftPackageId}::tails_staking::transfer_nft`,
            typeArguments: [],
            arguments: [tx.object(registry), tx.object(tails_id.kiosk), personalKioskCap, tx.pure(tails_id.nftId), tx.pure(receiver), coin],
        });
        tx.moveCall({
            target: `${personalKioskPackageId}::personal_kiosk::return_val`,
            arguments: [tx.object(tails_id.kioskCap), personalKioskCap, borrow],
        });
    } else {
        tx.moveCall({
            target: `${nftPackageId}::tails_staking::transfer_nft`,
            typeArguments: [],
            arguments: [
                tx.object(registry),
                tx.object(tails_id.kiosk),
                tx.object(tails_id.kioskCap),
                tx.pure(tails_id.nftId),
                tx.pure(receiver),
                coin,
            ],
        });
    }

    tx.setGasBudget(gasBudget);

    return tx;
}

export async function getTransferNftsTx(
    gasBudget: number,
    nftPackageId: string,
    personalKioskPackageId: string,
    registry: string,
    tailsIds: TailsId[],
    receiver: string
) {
    let tx = new TransactionBlock();
    var i = 0;
    while (i < tailsIds.length) {
        let [coin] = tx.splitCoins(tx.gas, [tx.pure(10000000)]);

        if (tailsIds[i].isPersonal) {
            const [personalKioskCap, borrow] = tx.moveCall({
                target: `${personalKioskPackageId}::personal_kiosk::borrow_val`,
                arguments: [tx.object(tailsIds[i].kioskCap)],
            });
            tx.moveCall({
                target: `${nftPackageId}::tails_staking::transfer_nft`,
                typeArguments: [],
                arguments: [
                    tx.object(registry),
                    tx.object(tailsIds[i].kiosk),
                    personalKioskCap,
                    tx.pure(tailsIds[i].nftId),
                    tx.pure(receiver),
                    coin,
                ],
            });
            tx.moveCall({
                target: `${personalKioskPackageId}::personal_kiosk::return_val`,
                arguments: [tx.object(tailsIds[i].kioskCap), personalKioskCap, borrow],
            });
        } else {
            tx.moveCall({
                target: `${nftPackageId}::tails_staking::transfer_nft`,
                typeArguments: [],
                arguments: [
                    tx.object(registry),
                    tx.object(tailsIds[i].kiosk),
                    tx.object(tailsIds[i].kioskCap),
                    tx.pure(tailsIds[i].nftId),
                    tx.pure(receiver),
                    coin,
                ],
            });
        }
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
    personalKioskPackageId: string,
    tails_id: TailsId
) {
    let tx = new TransactionBlock();

    let [coin] = tx.splitCoins(tx.gas, [tx.pure(50000000)]);

    if (tails_id.isPersonal) {
        const [personalKioskCap, borrow] = tx.moveCall({
            target: `${personalKioskPackageId}::personal_kiosk::borrow_val`,
            arguments: [tx.object(tails_id.kioskCap)],
        });
        tx.moveCall({
            target: `${nftPackageId}::tails_staking::stake_nft`,
            typeArguments: [],
            arguments: [tx.object(registry), tx.object(tails_id.kiosk), personalKioskCap, tx.pure(tails_id.nftId), tx.object(CLOCK), coin],
        });
        tx.moveCall({
            target: `${personalKioskPackageId}::personal_kiosk::return_val`,
            arguments: [tx.object(tails_id.kioskCap), personalKioskCap, borrow],
        });
    } else {
        tx.moveCall({
            target: `${nftPackageId}::tails_staking::stake_nft`,
            typeArguments: [],
            arguments: [
                tx.object(registry),
                tx.object(tails_id.kiosk),
                tx.object(tails_id.kioskCap),
                tx.pure(tails_id.nftId),
                tx.object(CLOCK),
                coin,
            ],
        });
    }
    tx.setGasBudget(gasBudget);

    return tx;
}

export async function getSwitchNftTx(
    gasBudget: number,
    nftPackageId: string,
    registry: string,
    personalKioskPackageId: string,
    tails_id: TailsId,
    typeArguments: string[]
) {
    let tx = new TransactionBlock();

    let [coin] = tx.splitCoins(tx.gas, [tx.pure(50000000)]);
    // tx.moveCall({
    //     target: `${nftPackageId}::tails_staking::snapshot`,
    //     typeArguments: [],
    //     arguments: [tx.object(registry), tx.object(CLOCK)],
    // });
    tx.moveCall({
        target: `${nftPackageId}::tails_staking::claim_profit_sharing`,
        typeArguments,
        arguments: [tx.object(registry), tx.pure("dice_profit")],
    });
    tx.moveCall({
        target: `${nftPackageId}::tails_staking::claim_profit_sharing`,
        typeArguments,
        arguments: [tx.object(registry), tx.pure("exp_profit")],
    });

    if (tails_id.isPersonal) {
        const [personalKioskCap, borrow] = tx.moveCall({
            target: `${personalKioskPackageId}::personal_kiosk::borrow_val`,
            arguments: [tx.object(tails_id.kioskCap)],
        });
        tx.moveCall({
            target: `${nftPackageId}::tails_staking::switch_nft`,
            typeArguments: [],
            arguments: [tx.object(registry), tx.object(tails_id.kiosk), personalKioskCap, tx.pure(tails_id.nftId), tx.object(CLOCK), coin],
        });
        tx.moveCall({
            target: `${personalKioskPackageId}::personal_kiosk::return_val`,
            arguments: [tx.object(tails_id.kioskCap), personalKioskCap, borrow],
        });
    } else {
        tx.moveCall({
            target: `${nftPackageId}::tails_staking::switch_nft`,
            typeArguments: [],
            arguments: [
                tx.object(registry),
                tx.object(tails_id.kiosk),
                tx.object(tails_id.kioskCap),
                tx.pure(tails_id.nftId),
                tx.object(CLOCK),
                coin,
            ],
        });
    }

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
    // @ts-ignore
    kioskTx.lock({ itemType: `${nftPackageId}::typus_nft::Tails`, itemId: nft_id, policy, item: nft_id });

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
export async function getUnstakeNftTx(
    gasBudget: number,
    nftPackageId: string,
    registry: string,
    typeArguments: string[],
    kioskOwnerCap: kioskOwnerCap,
    personalKioskPackageId: string
) {
    let tx = new TransactionBlock();

    // tx.moveCall({
    //     target: `${nftPackageId}::tails_staking::snapshot`,
    //     typeArguments: [],
    //     arguments: [tx.object(registry), tx.object(CLOCK)],
    // });
    tx.moveCall({
        target: `${nftPackageId}::tails_staking::claim_profit_sharing`,
        typeArguments,
        arguments: [tx.object(registry), tx.pure("dice_profit")],
    });
    tx.moveCall({
        target: `${nftPackageId}::tails_staking::claim_profit_sharing`,
        typeArguments,
        arguments: [tx.object(registry), tx.pure("exp_profit")],
    });

    if (kioskOwnerCap.isPersonal) {
        const [personalKioskCap, borrow] = tx.moveCall({
            target: `${personalKioskPackageId}::personal_kiosk::borrow_val`,
            arguments: [tx.object(kioskOwnerCap.objectId)],
        });
        tx.moveCall({
            target: `${nftPackageId}::tails_staking::unstake_nft`,
            typeArguments: [],
            arguments: [tx.object(registry), tx.object(kioskOwnerCap.kioskId), tx.object(personalKioskCap)],
        });
        tx.moveCall({
            target: `${personalKioskPackageId}::personal_kiosk::return_val`,
            arguments: [tx.object(kioskOwnerCap.objectId), personalKioskCap, borrow],
        });
    } else {
        tx.moveCall({
            target: `${nftPackageId}::tails_staking::unstake_nft`,
            typeArguments: [],
            arguments: [tx.object(registry), tx.object(kioskOwnerCap.kioskId), tx.object(kioskOwnerCap.objectId)],
        });
    }
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
export async function getSnapshotTx(
    gasBudget: number,
    typusEcosystemVersion: string,
    typusUserRegistry: string,
    typusDovSinglePackageId: string,
    registry: string,
    amount: string
) {
    let tx = new TransactionBlock();

    tx.moveCall({
        target: `${typusDovSinglePackageId}::tails_staking::snapshot`,
        typeArguments: [],
        arguments: [tx.object(typusEcosystemVersion), tx.object(typusUserRegistry), tx.object(registry), tx.pure(amount)],
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
    personalKioskPackageId: string,
    tails_id: TailsId,
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

    if (tails_id.isPersonal) {
        const [personalKioskCap, borrow] = tx.moveCall({
            target: `${personalKioskPackageId}::personal_kiosk::borrow_val`,
            arguments: [tx.object(tails_id.kioskCap)],
        });
        tx.moveCall({
            target: `${nftPackageId}::tails_staking::consume_exp_coin_unstaked`,
            typeArguments,
            arguments: [tx.object(registry), tx.object(tails_id.kiosk), personalKioskCap, tx.pure(tails_id.nftId), input_coin],
        });

        tx.moveCall({
            target: `${personalKioskPackageId}::personal_kiosk::return_val`,
            arguments: [tx.object(tails_id.kioskCap), personalKioskCap, borrow],
        });
    } else {
        tx.moveCall({
            target: `${nftPackageId}::tails_staking::consume_exp_coin_unstaked`,
            typeArguments,
            arguments: [tx.object(registry), tx.object(tails_id.kiosk), tx.object(tails_id.kioskCap), tx.pure(tails_id.nftId), input_coin],
        });
    }
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

export async function getClaimProfitSharingTx(
    gasBudget: number,
    packageId: string,
    registry: string,
    name: "dice_profit" | "exp_profit",
    typeArguments: string[]
) {
    let tx = new TransactionBlock();

    tx.moveCall({
        target: `${packageId}::tails_staking::claim_profit_sharing`,
        typeArguments,
        arguments: [tx.object(registry), tx.pure(name)],
    });

    tx.setGasBudget(gasBudget);
    return tx;
}
