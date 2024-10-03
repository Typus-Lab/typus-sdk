import { TransactionBlock } from "@mysten/sui.js/transactions";
import { CLOCK } from "src/constants";
import { KIOSK_TYPE, KioskClient, KioskTransaction } from "@mysten/kiosk";
import { TypusConfig } from "src/utils";
/**
    public fun stake_tails(
        version: &mut Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        kiosk: &mut Kiosk,
        kiosk_owner_cap: &KioskOwnerCap,
        tails: address,
        coin: Coin<SUI>,
        ctx: &mut TxContext,
    ) {
*/
export function getStakeTailsTx(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        kiosk: string;
        kioskCap: string;
        tails: string;
        fee: string;
        personalKioskPackageId: string | undefined;
    }
) {
    let [coin] = tx.splitCoins(tx.gas, [tx.pure(input.fee)]);

    if (input.personalKioskPackageId) {
        let [personalKioskCap, borrow] = tx.moveCall({
            target: `${input.personalKioskPackageId}::personal_kiosk::borrow_val`,
            arguments: [tx.object(input.kioskCap)],
        });
        tx.moveCall({
            target: `${config.package.typus}::tails_staking::stake_tails`,
            typeArguments: [],
            arguments: [
                tx.object(config.version.typus),
                tx.object(config.registry.typus.tailsStaking),
                tx.object(input.kiosk),
                personalKioskCap,
                tx.pure(input.tails),
                coin,
            ],
        });
        tx.moveCall({
            target: `${input.personalKioskPackageId}::personal_kiosk::return_val`,
            arguments: [tx.object(input.kioskCap), personalKioskCap, borrow],
        });
    } else {
        tx.moveCall({
            target: `${config.package.typus}::tails_staking::stake_tails`,
            typeArguments: [],
            arguments: [
                tx.object(config.version.typus),
                tx.object(config.registry.typus.tailsStaking),
                tx.object(input.kiosk),
                tx.object(input.kioskCap),
                tx.pure(input.tails),
                coin,
            ],
        });
    }

    return tx;
}

/**
    public fun unstake_tails(
        version: &mut Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        kiosk: &mut Kiosk,
        kiosk_owner_cap: &KioskOwnerCap,
        tails: address,
        ctx: &TxContext,
    ) {
*/
export function getUnstakeTailsTx(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        kiosk: string;
        kioskCap: string;
        tails: string;
        personalKioskPackageId: string | undefined;
    }
) {
    if (input.personalKioskPackageId) {
        let [personalKioskCap, borrow] = tx.moveCall({
            target: `${input.personalKioskPackageId}::personal_kiosk::borrow_val`,
            arguments: [tx.object(input.kioskCap)],
        });
        tx.moveCall({
            target: `${config.package.typus}::tails_staking::unstake_tails`,
            typeArguments: [],
            arguments: [
                tx.object(config.version.typus),
                tx.object(config.registry.typus.tailsStaking),
                tx.object(input.kiosk),
                personalKioskCap,
                tx.pure(input.tails),
            ],
        });
        tx.moveCall({
            target: `${input.personalKioskPackageId}::personal_kiosk::return_val`,
            arguments: [tx.object(input.kioskCap), personalKioskCap, borrow],
        });
    } else {
        tx.moveCall({
            target: `${config.package.typus}::tails_staking::unstake_tails`,
            typeArguments: [],
            arguments: [
                tx.object(config.version.typus),
                tx.object(config.registry.typus.tailsStaking),
                tx.object(input.kiosk),
                tx.object(input.kioskCap),
                tx.pure(input.tails),
            ],
        });
    }

    return tx;
}

/**
    public fun transfer_tails(
        version: &mut Version,
        tails_staking_registry: &TailsStakingRegistry,
        kiosk: &mut Kiosk,
        kiosk_owner_cap: &KioskOwnerCap,
        tails: address,
        coin: Coin<SUI>,
        recipient: address,
        ctx: &mut TxContext,
    ) {
*/
export function getTransferTailsTx(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        kiosk: string;
        kioskCap: string;
        tails: string;
        recipient: string;
        fee: string;
        personalKioskPackageId: string | undefined;
    }
) {
    let [coin] = tx.splitCoins(tx.gas, [tx.pure(input.fee)]);

    if (input.personalKioskPackageId) {
        let [personalKioskCap, borrow] = tx.moveCall({
            target: `${input.personalKioskPackageId}::personal_kiosk::borrow_val`,
            arguments: [tx.object(input.kioskCap)],
        });
        tx.moveCall({
            target: `${config.package.typus}::tails_staking::transfer_tails`,
            typeArguments: [],
            arguments: [
                tx.object(config.version.typus),
                tx.object(config.registry.typus.tailsStaking),
                tx.object(input.kiosk),
                personalKioskCap,
                tx.pure(input.tails),
                coin,
                tx.pure(input.recipient),
            ],
        });
        tx.moveCall({
            target: `${input.personalKioskPackageId}::personal_kiosk::return_val`,
            arguments: [tx.object(input.kioskCap), personalKioskCap, borrow],
        });
    } else {
        tx.moveCall({
            target: `${config.package.typus}::tails_staking::transfer_tails`,
            typeArguments: [],
            arguments: [
                tx.object(config.version.typus),
                tx.object(config.registry.typus.tailsStaking),
                tx.object(input.kiosk),
                tx.object(input.kioskCap),
                tx.pure(input.tails),
                coin,
                tx.pure(input.recipient),
            ],
        });
    }

    return tx;
}

/**
    entry fun daily_sign_up(
        version: &Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        clock: &Clock,
        ctx: &TxContext,
    ) {
*/
export function getDailySignUpTx(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        fee: string;
    }
) {
    let [coin] = tx.splitCoins(tx.gas, [tx.pure(input.fee)]);
    tx.moveCall({
        target: `${config.package.typus}::tails_staking::daily_sign_up`,
        typeArguments: [],
        arguments: [tx.object(config.version.typus), tx.object(config.registry.typus.tailsStaking), tx.object(coin), tx.object(CLOCK)],
    });

    return tx;
}

/**
    public fun claim_profit_sharing<TOKEN>(
        version: &mut Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        ctx: &mut TxContext,
    ): Balance<TOKEN>
*/
export function getClaimProfitSharingTx(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        typeArguments: string[];
        user: string;
    }
) {
    let result = tx.moveCall({
        target: `${config.package.typus}::tails_staking::claim_profit_sharing`,
        typeArguments: input.typeArguments,
        arguments: [tx.object(config.version.typus), tx.object(config.registry.typus.tailsStaking)],
    });
    tx.moveCall({
        target: `${config.package.typus}::utility::transfer_balance`,
        typeArguments: input.typeArguments,
        arguments: [tx.object(result[0]), tx.pure(input.user)],
    });

    return tx;
}

/**
    entry fun level_up(
        version: &Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        tails: address,
        raw: bool,
    ) {
*/
export function getLevelUpTx(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        tails: string;
        raw: boolean;
    }
) {
    tx.moveCall({
        target: `${config.package.typus}::tails_staking::level_up`,
        typeArguments: [],
        arguments: [
            tx.object(config.version.typus),
            tx.object(config.registry.typus.tailsStaking),
            tx.pure(input.tails),
            tx.pure(input.raw),
        ],
    });

    return tx;
}

/**
    entry fun exp_up(
        version: &Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        typus_user_registry: &mut TypusUserRegistry,
        tails: address,
        amount: u64,
        ctx: &TxContext,
    ) {
*/
export function getExpUpTx(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        tails: string;
        amount: string;
    }
) {
    tx.moveCall({
        target: `${config.package.typus}::tails_staking::exp_up`,
        typeArguments: [],
        arguments: [
            tx.object(config.version.typus),
            tx.object(config.registry.typus.tailsStaking),
            tx.object(config.registry.typus.user),
            tx.pure(input.tails),
            tx.pure(input.amount),
        ],
    });

    return tx;
}
/**
    entry fun exp_up_without_staking(
        version: &Version,
        tails_staking_registry: &TailsStakingRegistry,
        typus_user_registry: &mut TypusUserRegistry,
        kiosk: &mut Kiosk,
        kiosk_owner_cap: &KioskOwnerCap,
        tails: address,
        amount: u64,
        ctx: &TxContext,
    ) {
*/
export function getExpUpWithoutStakingTx(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        kiosk: string;
        kioskCap: string;
        tails: string;
        amount: string;
        personalKioskPackageId: string | undefined;
    }
) {
    if (input.personalKioskPackageId) {
        let [personalKioskCap, borrow] = tx.moveCall({
            target: `${input.personalKioskPackageId}::personal_kiosk::borrow_val`,
            arguments: [tx.object(input.kioskCap)],
        });
        tx.moveCall({
            target: `${config.package.typus}::tails_staking::exp_up_without_staking`,
            typeArguments: [],
            arguments: [
                tx.object(config.version.typus),
                tx.object(config.registry.typus.tailsStaking),
                tx.object(config.registry.typus.user),
                tx.object(input.kiosk),
                personalKioskCap,
                tx.pure(input.tails),
                tx.pure(input.amount),
            ],
        });
        tx.moveCall({
            target: `${input.personalKioskPackageId}::personal_kiosk::return_val`,
            arguments: [tx.object(input.kioskCap), personalKioskCap, borrow],
        });
    } else {
        tx.moveCall({
            target: `${config.package.typus}::tails_staking::exp_up_without_staking`,
            typeArguments: [],
            arguments: [
                tx.object(config.version.typus),
                tx.object(config.registry.typus.tailsStaking),
                tx.object(config.registry.typus.user),
                tx.object(input.kiosk),
                tx.object(input.kioskCap),
                tx.pure(input.tails),
                tx.pure(input.amount),
            ],
        });
    }

    return tx;
}

/**
    entry fun exp_down(
        version: &Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        typus_user_registry: &mut TypusUserRegistry,
        tails: address,
        amount: u64,
        ctx: &TxContext,
    ) {
*/
export function getExpDownTx(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        tails: string;
        amount: string;
    }
) {
    tx.moveCall({
        target: `${config.package.typus}::tails_staking::exp_down`,
        typeArguments: [],
        arguments: [
            tx.object(config.version.typus),
            tx.object(config.registry.typus.tailsStaking),
            tx.object(config.registry.typus.user),
            tx.pure(input.tails),
            tx.pure(input.amount),
        ],
    });

    return tx;
}
/**
    entry fun exp_down_without_staking(
        version: &Version,
        tails_staking_registry: &TailsStakingRegistry,
        typus_user_registry: &mut TypusUserRegistry,
        kiosk: &mut Kiosk,
        kiosk_owner_cap: &KioskOwnerCap,
        tails: address,
        amount: u64,
        ctx: &TxContext,
    ) {
*/
export function getExpDownWithoutStakingTx(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        kiosk: string;
        kioskCap: string;
        tails: string;
        amount: string;
        personalKioskPackageId: string | undefined;
    }
) {
    if (input.personalKioskPackageId) {
        let [personalKioskCap, borrow] = tx.moveCall({
            target: `${input.personalKioskPackageId}::personal_kiosk::borrow_val`,
            arguments: [tx.object(input.kioskCap)],
        });
        tx.moveCall({
            target: `${config.package.typus}::tails_staking::exp_down_without_staking`,
            typeArguments: [],
            arguments: [
                tx.object(config.version.typus),
                tx.object(config.registry.typus.tailsStaking),
                tx.object(config.registry.typus.user),
                tx.object(input.kiosk),
                personalKioskCap,
                tx.pure(input.tails),
                tx.pure(input.amount),
            ],
        });
        tx.moveCall({
            target: `${input.personalKioskPackageId}::personal_kiosk::return_val`,
            arguments: [tx.object(input.kioskCap), personalKioskCap, borrow],
        });
    } else {
        tx.moveCall({
            target: `${config.package.typus}::tails_staking::exp_down_without_staking`,
            typeArguments: [],
            arguments: [
                tx.object(config.version.typus),
                tx.object(config.registry.typus.tailsStaking),
                tx.object(config.registry.typus.user),
                tx.object(input.kiosk),
                tx.object(input.kioskCap),
                tx.pure(input.tails),
                tx.pure(input.amount),
            ],
        });
    }

    return tx;
}

export function getCreateKioskAndLockNftTx(
    config: TypusConfig,
    tx: TransactionBlock,
    kioskClient: KioskClient,
    input: {
        nft_policy: string;
        nft_id: string;
        user: string;
    }
) {
    let kioskTx = new KioskTransaction({ transactionBlock: tx, kioskClient });
    kioskTx.create();
    kioskTx.lock({
        itemType: `${config.package.nft}::typus_nft::Tails`,
        itemId: input.nft_id,
        policy: input.nft_policy,
        item: input.nft_id,
    });
    let { kiosk, kioskCap } = kioskTx;
    if (kiosk && kioskCap) {
        tx.moveCall({
            target: `0x2::transfer::public_share_object`,
            typeArguments: [KIOSK_TYPE],
            arguments: [kiosk],
        });
        tx.transferObjects([kioskCap], tx.pure(input.user));
    } else {
        console.error("Fail to Create Kiosk Tx!!");
    }

    return tx;
}
