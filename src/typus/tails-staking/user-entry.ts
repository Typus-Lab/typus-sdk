import { TransactionBlock } from "@mysten/sui.js/transactions";
import { CLOCK } from "../../constants";
import { KIOSK_TYPE, KioskClient, KioskTransaction } from "@mysten/kiosk";
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

/**
    entry fun level_up(
        version: &Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        tails: address,
        raw: bool,
    ) {
*/
export async function getLevelUpTx(input: {
    tx: TransactionBlock;
    typusPackageId: string;
    typusEcosystemVersion: string;
    typusTailsStakingRegistry: string;
    tails: string;
    raw: boolean;
}) {
    input.tx.moveCall({
        target: `${input.typusPackageId}::tails_staking::level_up`,
        typeArguments: [],
        arguments: [
            input.tx.object(input.typusEcosystemVersion),
            input.tx.object(input.typusTailsStakingRegistry),
            input.tx.pure(input.tails),
            input.tx.pure(input.raw),
        ],
    });

    return input.tx;
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
export async function getExpUpTx(input: {
    tx: TransactionBlock;
    typusPackageId: string;
    typusEcosystemVersion: string;
    typusTailsStakingRegistry: string;
    typusUserRegistry: string;
    tails: string;
    amount: string;
}) {
    input.tx.moveCall({
        target: `${input.typusPackageId}::tails_staking::exp_up`,
        typeArguments: [],
        arguments: [
            input.tx.object(input.typusEcosystemVersion),
            input.tx.object(input.typusTailsStakingRegistry),
            input.tx.object(input.typusUserRegistry),
            input.tx.pure(input.tails),
            input.tx.pure(input.amount),
        ],
    });

    return input.tx;
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
export async function getExpUpWithoutStakingTx(input: {
    tx: TransactionBlock;
    typusPackageId: string;
    typusEcosystemVersion: string;
    typusTailsStakingRegistry: string;
    typusUserRegistry: string;
    kiosk: string;
    kioskCap: string;
    tails: string;
    amount: string;
    personalKioskPackageId: string | undefined;
}) {
    if (input.personalKioskPackageId) {
        const [personalKioskCap, borrow] = input.tx.moveCall({
            target: `${input.personalKioskPackageId}::personal_kiosk::borrow_val`,
            arguments: [input.tx.object(input.kioskCap)],
        });
        input.tx.moveCall({
            target: `${input.typusPackageId}::tails_staking::exp_up_without_staking`,
            typeArguments: [],
            arguments: [
                input.tx.object(input.typusEcosystemVersion),
                input.tx.object(input.typusTailsStakingRegistry),
                input.tx.object(input.typusUserRegistry),
                input.tx.object(input.kiosk),
                personalKioskCap,
                input.tx.pure(input.tails),
                input.tx.pure(input.amount),
            ],
        });
        input.tx.moveCall({
            target: `${input.personalKioskPackageId}::personal_kiosk::return_val`,
            arguments: [input.tx.object(input.kioskCap), personalKioskCap, borrow],
        });
    } else {
        input.tx.moveCall({
            target: `${input.typusPackageId}::tails_staking::exp_up_without_staking`,
            typeArguments: [],
            arguments: [
                input.tx.object(input.typusEcosystemVersion),
                input.tx.object(input.typusTailsStakingRegistry),
                input.tx.object(input.typusUserRegistry),
                input.tx.object(input.kiosk),
                input.tx.object(input.kioskCap),
                input.tx.pure(input.tails),
                input.tx.pure(input.amount),
            ],
        });
    }

    return input.tx;
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
