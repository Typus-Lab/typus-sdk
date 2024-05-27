import { TransactionBlock } from "@mysten/sui.js/transactions";
import { CLOCK } from "../../constants";

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
    personalKioskPackageId: string | undefined;
}) {
    let [coin] = input.tx.splitCoins(input.tx.gas, [input.tx.pure(50000000)]);

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
