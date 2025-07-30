import { Transaction } from "@mysten/sui/transactions";
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
    tx: Transaction,
    input: {
        kiosk: string;
        kioskCap: string;
        tails: string;
        fee: string;
        personalKioskPackageId: string | undefined;
    }
) {
    let [coin] = tx.splitCoins(tx.gas, [tx.pure.u64(input.fee)]);

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
                tx.pure.address(input.tails),
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
                tx.pure.address(input.tails),
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
    tx: Transaction,
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
                tx.pure.address(input.tails),
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
                tx.pure.address(input.tails),
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
    tx: Transaction,
    input: {
        kiosk: string;
        kioskCap: string;
        tails: string;
        recipient: string;
        fee: string;
        personalKioskPackageId: string | undefined;
    }
) {
    let [coin] = tx.splitCoins(tx.gas, [tx.pure.u64(input.fee)]);

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
                tx.pure.address(input.tails),
                coin,
                tx.pure.address(input.recipient),
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
                tx.pure.address(input.tails),
                coin,
                tx.pure.address(input.recipient),
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
    tx: Transaction,
    input: {
        fee: string;
    }
) {
    let [coin] = tx.splitCoins(tx.gas, [tx.pure.u64(input.fee)]);
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
    tx: Transaction,
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
        arguments: [tx.object(result[0]), tx.pure.address(input.user)],
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
    tx: Transaction,
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
            tx.pure.address(input.tails),
            tx.pure.bool(input.raw),
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
    tx: Transaction,
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
            tx.pure.address(input.tails),
            tx.pure.u64(input.amount),
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
    tx: Transaction,
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
                tx.pure.address(input.tails),
                tx.pure.u64(input.amount),
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
                tx.pure.address(input.tails),
                tx.pure.u64(input.amount),
            ],
        });
    }

    return tx;
}

/**
    entry fun exp_down_with_fee(
        version: &Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        typus_user_registry: &mut TypusUserRegistry,
        tails: address,
        amount: u64,
        coin: Coin<SUI>,
        ctx: &TxContext,
    ) {
*/
export function getExpDownWithFeeTx(
    config: TypusConfig,
    tx: Transaction,
    input: {
        fee: string;
        tails: string;
        amount: string;
    }
) {
    let [coin] = tx.splitCoins(tx.gas, [tx.pure.u64(input.fee)]);
    tx.moveCall({
        target: `${config.package.typus}::tails_staking::exp_down_with_fee`,
        typeArguments: [],
        arguments: [
            tx.object(config.version.typus),
            tx.object(config.registry.typus.tailsStaking),
            tx.object(config.registry.typus.user),
            tx.pure.address(input.tails),
            tx.pure.u64(input.amount),
            coin,
        ],
    });

    return tx;
}
/**
    entry fun exp_down_without_staking_with_fee(
        version: &Version,
        tails_staking_registry: &TailsStakingRegistry,
        typus_user_registry: &mut TypusUserRegistry,
        kiosk: &mut Kiosk,
        kiosk_owner_cap: &KioskOwnerCap,
        tails: address,
        amount: u64,
        coin: Coin<SUI>,
        ctx: &TxContext,
    ) {
*/
export function getExpDownWithoutStakingWithFeeTx(
    config: TypusConfig,
    tx: Transaction,
    input: {
        fee: string;
        kiosk: string;
        kioskCap: string;
        tails: string;
        amount: string;
        personalKioskPackageId: string | undefined;
    }
) {
    let [coin] = tx.splitCoins(tx.gas, [tx.pure.u64(input.fee)]);
    if (input.personalKioskPackageId) {
        let [personalKioskCap, borrow] = tx.moveCall({
            target: `${input.personalKioskPackageId}::personal_kiosk::borrow_val`,
            arguments: [tx.object(input.kioskCap)],
        });
        tx.moveCall({
            target: `${config.package.typus}::tails_staking::exp_down_without_staking_with_fee`,
            typeArguments: [],
            arguments: [
                tx.object(config.version.typus),
                tx.object(config.registry.typus.tailsStaking),
                tx.object(config.registry.typus.user),
                tx.object(input.kiosk),
                personalKioskCap,
                tx.pure.address(input.tails),
                tx.pure.u64(input.amount),
                coin,
            ],
        });
        tx.moveCall({
            target: `${input.personalKioskPackageId}::personal_kiosk::return_val`,
            arguments: [tx.object(input.kioskCap), personalKioskCap, borrow],
        });
    } else {
        tx.moveCall({
            target: `${config.package.typus}::tails_staking::exp_down_without_staking_with_fee`,
            typeArguments: [],
            arguments: [
                tx.object(config.version.typus),
                tx.object(config.registry.typus.tailsStaking),
                tx.object(config.registry.typus.user),
                tx.object(input.kiosk),
                tx.object(input.kioskCap),
                tx.pure.address(input.tails),
                tx.pure.u64(input.amount),
                coin,
            ],
        });
    }

    return tx;
}

export function getCreateKioskAndLockNftTx(
    config: TypusConfig,
    tx: Transaction,
    kioskClient: KioskClient,
    input: {
        nft_policy: string;
        nft_id: string;
        user: string;
    }
) {
    let kioskTx = new KioskTransaction({ transaction: tx, kioskClient });
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
        tx.transferObjects([kioskCap], tx.pure.address(input.user));
    } else {
        console.error("Fail to Create Kiosk Tx!!");
    }

    return tx;
}
