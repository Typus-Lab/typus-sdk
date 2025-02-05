import { Transaction } from "@mysten/sui/transactions";
import { TypusConfig, splitCoins } from "src/utils";

/**
    public(friend) entry fun new_game<TOKEN>(
        registry: &mut Registry,
        index: u64,
        coins: vector<Coin<TOKEN>>,
        stake_amount: u64,
        ctx: &mut TxContext
    )
*/
export async function newGameTx(
    config: TypusConfig,
    tx: Transaction,
    input: {
        module: "tails_exp" | "combo_dice";
        typeArguments: string[]; // [TOKEN]
        index: string;
        coins: string[];
        amount: string;
    }
) {
    let registry = "";
    switch (input.module) {
        case "tails_exp":
            registry = config.registry.dice.tailsExp;
            break;
        case "combo_dice":
            registry = config.registry.dice.comboDice;
            break;
        default:
            break;
    }
    let coin = splitCoins(tx, input.typeArguments[0], input.coins, input.amount);
    tx.moveCall({
        target: `${config.package.dice}::${input.module}::new_game`,
        typeArguments: input.typeArguments,
        arguments: [tx.object(registry), tx.pure.u64(input.index), tx.makeMoveVec({ elements: [coin] }), tx.pure.u64(input.amount)],
    });

    return tx;
}

/**
    public(friend) entry fun play_guess(
        registry: &mut Registry,
        index: u64,
        game_id: u64,
        guess_1: u64,
        larger_than_1: bool,
        guess_2: u64,
        larger_than_2: bool,
        ctx: &mut TxContext
    )
*/
export async function playGuessTx(
    config: TypusConfig,
    tx: Transaction,
    input: {
        module: "tails_exp" | "combo_dice";
        index: string;
        guess_1: string;
        larger_than_1: boolean;
        guess_2: string;
        larger_than_2: boolean;
    }
) {
    let registry = "";
    switch (input.module) {
        case "tails_exp":
            registry = config.registry.dice.tailsExp;
            break;
        case "combo_dice":
            registry = config.registry.dice.comboDice;
            break;
        default:
            break;
    }
    tx.moveCall({
        target: `${config.package.dice}::${input.module}::play_guess`,
        typeArguments: [],
        arguments: [
            tx.object(registry),
            tx.pure.u64(input.index),
            tx.pure.u64(input.guess_1),
            tx.pure.bool(input.larger_than_1),
            tx.pure.u64(input.guess_2),
            tx.pure.bool(input.larger_than_2),
        ],
    });

    return tx;
}

export async function newGamePlayGuessTx(
    config: TypusConfig,
    tx: Transaction,
    input: {
        module: "tails_exp" | "combo_dice";
        typeArguments: string[]; // [TOKEN]
        index: string;
        coins: string[];
        amount: string;
        guess_1: string;
        larger_than_1: boolean;
        guess_2: string;
        larger_than_2: boolean;
    }
) {
    let registry = "";
    switch (input.module) {
        case "tails_exp":
            registry = config.registry.dice.tailsExp;
            break;
        case "combo_dice":
            registry = config.registry.dice.comboDice;
            break;
        default:
            break;
    }

    let coin = splitCoins(tx, input.typeArguments[0], input.coins, input.amount);
    tx.moveCall({
        target: `${config.package.dice}::${input.module}::new_game`,
        typeArguments: input.typeArguments,
        arguments:
            input.module == "combo_dice"
                ? [
                      tx.object(config.registry.dice.comboDice),
                      tx.object(config.registry.dice.tailsExp),
                      tx.pure.u64(input.index),
                      tx.makeMoveVec({ elements: [coin] }),
                      tx.pure.u64(input.amount),
                  ]
                : [tx.object(registry), tx.pure.u64(input.index), tx.makeMoveVec({ elements: [coin] }), tx.pure.u64(input.amount)],
    });

    // tx.moveCall({
    //     target: `${config.package.dice}::${input.module}::play_guess`,
    //     typeArguments: [],
    //     arguments: [
    //         tx.object(registry),
    //         tx.pure.u64(input.index),
    //         tx.pure.u64(input.guess_1),
    //         tx.pure.bool(input.larger_than_1),
    //         tx.pure.u64(input.guess_2),
    //         tx.pure.bool(input.larger_than_2),
    //     ],
    // });

    tx.moveCall({
        target: `${config.package.dice}::${input.module}::play_guess_with_random`,
        typeArguments: input.module == "combo_dice" ? input.typeArguments : [],
        arguments: [
            tx.object(registry),
            tx.pure.u64(input.index),
            tx.pure.u64(input.guess_1),
            tx.pure.bool(input.larger_than_1),
            tx.pure.u64(input.guess_2),
            tx.pure.bool(input.larger_than_2),
            tx.object("0x8"),
        ],
    });

    return tx;
}

/**
    public fun consume_exp_coin_staked(
        registry: &mut Registry,
        version: &Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        tails: address,
        coin: Coin<TAILS_EXP>,
    ) {
 */
export function getConsumeExpCoinStakedTx(
    config: TypusConfig,
    tx: Transaction,
    input: {
        tails: string;
        coins: string[];
        amount: string;
    }
) {
    let coin = input.coins.pop()!;
    if (input.coins.length > 0) {
        tx.mergeCoins(
            tx.object(coin),
            input.coins.map((id) => tx.object(id))
        );
    }
    let [input_coin] = tx.splitCoins(tx.object(coin), [tx.pure.u64(input.amount)]);
    tx.moveCall({
        target: `${config.package.dice}::tails_exp::consume_exp_coin_staked`,
        typeArguments: [],
        arguments: [
            tx.object(config.registry.dice.tailsExp),
            tx.object(config.version.typus),
            tx.object(config.registry.typus.tailsStaking),
            tx.pure.address(input.tails),
            tx.object(input_coin),
        ],
    });

    return tx;
}
/**
    public fun consume_exp_coin_unstaked(
        registry: &mut Registry,
        version: &Version,
        tails_staking_registry: &TailsStakingRegistry,
        kiosk: &mut Kiosk,
        kiosk_owner_cap: &KioskOwnerCap,
        tails: address,
        coin: Coin<TAILS_EXP>,
    ) {
 */
export function getConsumeExpCoinUnstakedTx(
    config: TypusConfig,
    tx: Transaction,
    input: {
        kiosk: string;
        kioskCap: string;
        tails: string;
        coins: string[];
        amount: string;
        personalKioskPackageId: string | undefined;
    }
) {
    let coin = input.coins.pop()!;
    if (input.coins.length > 0) {
        tx.mergeCoins(
            tx.object(coin),
            input.coins.map((id) => tx.object(id))
        );
    }
    let [input_coin] = tx.splitCoins(tx.object(coin), [tx.pure.u64(input.amount)]);
    if (input.personalKioskPackageId) {
        let [personalKioskCap, borrow] = tx.moveCall({
            target: `${input.personalKioskPackageId}::personal_kiosk::borrow_val`,
            arguments: [tx.object(input.kioskCap)],
        });
        tx.moveCall({
            target: `${config.package.dice}::tails_exp::consume_exp_coin_unstaked`,
            typeArguments: [],
            arguments: [
                tx.object(config.registry.dice.tailsExp),
                tx.object(config.version.typus),
                tx.object(config.registry.typus.tailsStaking),
                tx.object(input.kiosk),
                personalKioskCap,
                tx.pure.address(input.tails),
                tx.object(input_coin),
            ],
        });
        tx.moveCall({
            target: `${input.personalKioskPackageId}::personal_kiosk::return_val`,
            arguments: [tx.object(input.kioskCap), personalKioskCap, borrow],
        });
    } else {
        tx.moveCall({
            target: `${config.package.dice}::tails_exp::consume_exp_coin_unstaked`,
            typeArguments: [],
            arguments: [
                tx.object(config.registry.dice.tailsExp),
                tx.object(config.version.typus),
                tx.object(config.registry.typus.tailsStaking),
                tx.object(input.kiosk),
                tx.object(input.kioskCap),
                tx.pure.address(input.tails),
                tx.object(input_coin),
            ],
        });
    }

    return tx;
}
