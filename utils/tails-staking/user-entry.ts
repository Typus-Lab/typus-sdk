import { TransactionBlock } from "@mysten/sui.js/transactions";
import { CLOCK } from "../../constants";

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
export async function getStakeTailsTx(input: {
    tx: TransactionBlock;
    typusPackageId: string;
    typusEcosystemVersion: string;
    typusTailsStakingRegistry: string;
    kiosk: string;
    kioskCap: string;
    tails: string;
    fee: string;
    personalKioskPackageId: string | undefined;
}) {
    let [coin] = input.tx.splitCoins(input.tx.gas, [input.tx.pure(input.fee)]);

    if (input.personalKioskPackageId) {
        const [personalKioskCap, borrow] = input.tx.moveCall({
            target: `${input.personalKioskPackageId}::personal_kiosk::borrow_val`,
            arguments: [input.tx.object(input.kioskCap)],
        });
        input.tx.moveCall({
            target: `${input.typusPackageId}::tails_staking::stake_tails`,
            typeArguments: [],
            arguments: [
                input.tx.object(input.typusEcosystemVersion),
                input.tx.object(input.typusTailsStakingRegistry),
                input.tx.object(input.kiosk),
                personalKioskCap,
                input.tx.pure(input.tails),
                coin,
            ],
        });
        input.tx.moveCall({
            target: `${input.personalKioskPackageId}::personal_kiosk::return_val`,
            arguments: [input.tx.object(input.kioskCap), personalKioskCap, borrow],
        });
    } else {
        input.tx.moveCall({
            target: `${input.typusPackageId}::tails_staking::stake_tails`,
            typeArguments: [],
            arguments: [
                input.tx.object(input.typusEcosystemVersion),
                input.tx.object(input.typusTailsStakingRegistry),
                input.tx.object(input.kiosk),
                input.tx.object(input.kioskCap),
                input.tx.pure(input.tails),
                coin,
            ],
        });
    }

    return input.tx;
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
export async function getUnstakeTailsTx(input: {
    tx: TransactionBlock;
    typusPackageId: string;
    typusEcosystemVersion: string;
    typusTailsStakingRegistry: string;
    kiosk: string;
    kioskCap: string;
    tails: string;
    personalKioskPackageId: string | undefined;
}) {
    if (input.personalKioskPackageId) {
        const [personalKioskCap, borrow] = input.tx.moveCall({
            target: `${input.personalKioskPackageId}::personal_kiosk::borrow_val`,
            arguments: [input.tx.object(input.kioskCap)],
        });
        input.tx.moveCall({
            target: `${input.typusPackageId}::tails_staking::unstake_tails`,
            typeArguments: [],
            arguments: [
                input.tx.object(input.typusEcosystemVersion),
                input.tx.object(input.typusTailsStakingRegistry),
                input.tx.object(input.kiosk),
                personalKioskCap,
                input.tx.pure(input.tails),
            ],
        });
        input.tx.moveCall({
            target: `${input.personalKioskPackageId}::personal_kiosk::return_val`,
            arguments: [input.tx.object(input.kioskCap), personalKioskCap, borrow],
        });
    } else {
        input.tx.moveCall({
            target: `${input.typusPackageId}::tails_staking::unstake_tails`,
            typeArguments: [],
            arguments: [
                input.tx.object(input.typusEcosystemVersion),
                input.tx.object(input.typusTailsStakingRegistry),
                input.tx.object(input.kiosk),
                input.tx.object(input.kioskCap),
                input.tx.pure(input.tails),
            ],
        });
    }

    return input.tx;
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
export async function getTransferTailsTx(input: {
    tx: TransactionBlock;
    typusPackageId: string;
    typusEcosystemVersion: string;
    typusTailsStakingRegistry: string;
    kiosk: string;
    kioskCap: string;
    tails: string;
    recipient: string;
    fee: string;
    personalKioskPackageId: string | undefined;
}) {
    let [coin] = input.tx.splitCoins(input.tx.gas, [input.tx.pure(input.fee)]);

    if (input.personalKioskPackageId) {
        const [personalKioskCap, borrow] = input.tx.moveCall({
            target: `${input.personalKioskPackageId}::personal_kiosk::borrow_val`,
            arguments: [input.tx.object(input.kioskCap)],
        });
        input.tx.moveCall({
            target: `${input.typusPackageId}::tails_staking::transfer_tails`,
            typeArguments: [],
            arguments: [
                input.tx.object(input.typusEcosystemVersion),
                input.tx.object(input.typusTailsStakingRegistry),
                input.tx.object(input.kiosk),
                personalKioskCap,
                input.tx.pure(input.tails),
                coin,
                input.tx.pure(input.recipient),
            ],
        });
        input.tx.moveCall({
            target: `${input.personalKioskPackageId}::personal_kiosk::return_val`,
            arguments: [input.tx.object(input.kioskCap), personalKioskCap, borrow],
        });
    } else {
        input.tx.moveCall({
            target: `${input.typusPackageId}::tails_staking::transfer_tails`,
            typeArguments: [],
            arguments: [
                input.tx.object(input.typusEcosystemVersion),
                input.tx.object(input.typusTailsStakingRegistry),
                input.tx.object(input.kiosk),
                input.tx.object(input.kioskCap),
                input.tx.pure(input.tails),
                coin,
                input.tx.pure(input.recipient),
            ],
        });
    }

    return input.tx;
}

/**
    entry fun daily_sign_up(
        version: &Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        clock: &Clock,
        ctx: &TxContext,
    ) {
*/
export async function getDailySignUpTx(input: {
    tx: TransactionBlock;
    typusPackageId: string;
    typusEcosystemVersion: string;
    typusTailsStakingRegistry: string;
}) {
    let result = input.tx.moveCall({
        target: `${input.typusPackageId}::tails_staking::daily_sign_up`,
        typeArguments: [],
        arguments: [input.tx.object(input.typusEcosystemVersion), input.tx.object(input.typusTailsStakingRegistry), input.tx.pure(CLOCK)],
    });

    return input.tx;
}

/**
    public fun claim_profit_sharing<TOKEN>(
        version: &mut Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        ctx: &mut TxContext,
    ): Balance<TOKEN>
*/
export async function getClaimProfitSharingTx(input: {
    tx: TransactionBlock;
    typusPackageId: string;
    typusEcosystemVersion: string;
    typusTailsStakingRegistry: string;
    typeArguments: string[];
    user: string;
}) {
    let result = input.tx.moveCall({
        target: `${input.typusPackageId}::tails_staking::claim_profit_sharing`,
        typeArguments: input.typeArguments,
        arguments: [input.tx.object(input.typusEcosystemVersion), input.tx.object(input.typusTailsStakingRegistry)],
    });
    input.tx.moveCall({
        target: `${input.typusPackageId}::utility::transfer_balance`,
        typeArguments: input.typeArguments,
        arguments: [input.tx.object(result[0]), input.tx.pure(input.user)],
    });

    return input.tx;
}
