import { TransactionBlock } from "@mysten/sui.js/transactions";

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
    gasBudget: number,
    packageId: string,
    module: "tails_exp" | "combo_dice",
    typeArguments: string[], // [TOKEN]
    registry: string,
    index: string,
    coins: string[],
    amount: string
) {
    let tx = new TransactionBlock();
    tx.moveCall({
        target: `${packageId}::${module}::new_game`,
        typeArguments,
        arguments: [tx.object(registry), tx.pure(index), tx.makeMoveVec({ objects: coins.map((id) => tx.object(id)) }), tx.pure(amount)],
    });
    tx.setGasBudget(gasBudget);

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
    gasBudget: number,
    packageId: string,
    module: "tails_exp" | "combo_dice",
    registry: string,
    index: string,
    guess_1: string,
    larger_than_1: boolean,
    guess_2: string,
    larger_than_2: boolean
) {
    let tx = new TransactionBlock();

    tx.moveCall({
        target: `${packageId}::${module}::play_guess`,
        typeArguments: [],
        arguments: [
            tx.object(registry),
            tx.pure(index),
            tx.pure(guess_1),
            tx.pure(larger_than_1),
            tx.pure(guess_2),
            tx.pure(larger_than_2),
        ],
    });
    tx.setGasBudget(gasBudget);

    return tx;
}

export async function newGamePlayGuessTx(
    gasBudget: number,
    packageId: string,
    module: "tails_exp" | "combo_dice",
    typeArguments: string[], // [TOKEN]
    registry: string,
    expRegistry: string,
    index: string,
    coins: string[],
    amount: string,
    guess_1: string,
    larger_than_1: boolean,
    guess_2: string,
    larger_than_2: boolean
) {
    let tx = new TransactionBlock();

    if (
        typeArguments[0] == "0x2::sui::SUI" ||
        typeArguments[0] == "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"
    ) {
        let [coin] = tx.splitCoins(tx.gas, [tx.pure(amount)]);
        tx.moveCall({
            target: `${packageId}::${module}::new_game`,
            typeArguments,
            arguments:
                module == "combo_dice"
                    ? [tx.object(registry), tx.object(expRegistry), tx.pure(index), tx.makeMoveVec({ objects: [coin] }), tx.pure(amount)]
                    : [tx.object(registry), tx.pure(index), tx.makeMoveVec({ objects: [coin] }), tx.pure(amount)],
        });
    } else {
        tx.moveCall({
            target: `${packageId}::${module}::new_game`,
            typeArguments,
            arguments: [
                tx.object(registry),
                tx.pure(index),
                tx.makeMoveVec({ objects: coins.map((id) => tx.object(id)) }),
                tx.pure(amount),
            ],
        });
    }

    tx.moveCall({
        target: `${packageId}::${module}::play_guess`,
        typeArguments: [],
        arguments: [
            tx.object(registry),
            tx.pure(index),
            tx.pure(guess_1),
            tx.pure(larger_than_1),
            tx.pure(guess_2),
            tx.pure(larger_than_2),
        ],
    });

    // TODO: waiting for upgrade
    // tx.moveCall({
    //     target: `${packageId}::${module}::play_guess_with_random`,
    //     typeArguments: module == "combo_dice" ? typeArguments : [],
    //     arguments: [
    //         tx.object(registry),
    //         tx.pure(index),
    //         tx.pure(guess_1),
    //         tx.pure(larger_than_1),
    //         tx.pure(guess_2),
    //         tx.pure(larger_than_2),
    //         tx.object("0x8"),
    //     ],
    // });

    tx.setGasBudget(gasBudget);

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
export function getConsumeExpCoinStakedTx(input: {
    tx: TransactionBlock;
    packageId: string;
    tailsExpRegistry: string;
    typusEcosystemVersion: string;
    tailsStakingRegistry: string;
    tails: string;
    coins: string[];
    amount: string;
}) {
    let coin = input.coins.pop()!;
    if (input.coins.length > 0) {
        input.tx.mergeCoins(
            input.tx.object(coin),
            input.coins.map((id) => input.tx.object(id))
        );
    }
    let [input_coin] = input.tx.splitCoins(input.tx.object(coin), [input.tx.pure(input.amount)]);
    input.tx.moveCall({
        target: `${input.packageId}::tails_exp::consume_exp_coin_staked`,
        typeArguments: [],
        arguments: [
            input.tx.object(input.tailsExpRegistry),
            input.tx.object(input.typusEcosystemVersion),
            input.tx.object(input.tailsStakingRegistry),
            input.tx.pure(input.tails),
            input.tx.object(input_coin),
        ],
    });

    return input.tx;
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
export function getConsumeExpCoinUnstakedTx(input: {
    tx: TransactionBlock;
    packageId: string;
    tailsExpRegistry: string;
    typusEcosystemVersion: string;
    tailsStakingRegistry: string;
    kiosk: string;
    kioskCap: string;
    tails: string;
    coins: string[];
    amount: string;
    personalKioskPackageId: string | undefined;
}) {
    let coin = input.coins.pop()!;
    if (input.coins.length > 0) {
        input.tx.mergeCoins(
            input.tx.object(coin),
            input.coins.map((id) => input.tx.object(id))
        );
    }
    let [input_coin] = input.tx.splitCoins(input.tx.object(coin), [input.tx.pure(input.amount)]);
    if (input.personalKioskPackageId) {
        const [personalKioskCap, borrow] = input.tx.moveCall({
            target: `${input.personalKioskPackageId}::personal_kiosk::borrow_val`,
            arguments: [input.tx.object(input.kioskCap)],
        });
        input.tx.moveCall({
            target: `${input.packageId}::tails_exp::consume_exp_coin_unstaked`,
            typeArguments: [],
            arguments: [
                input.tx.object(input.tailsExpRegistry),
                input.tx.object(input.typusEcosystemVersion),
                input.tx.object(input.tailsStakingRegistry),
                input.tx.object(input.kiosk),
                personalKioskCap,
                input.tx.pure(input.tails),
                input.tx.object(input_coin),
            ],
        });
        input.tx.moveCall({
            target: `${input.personalKioskPackageId}::personal_kiosk::return_val`,
            arguments: [input.tx.object(input.kioskCap), personalKioskCap, borrow],
        });
    } else {
        input.tx.moveCall({
            target: `${input.packageId}::tails_exp::consume_exp_coin_unstaked`,
            typeArguments: [],
            arguments: [
                input.tx.object(input.tailsExpRegistry),
                input.tx.object(input.typusEcosystemVersion),
                input.tx.object(input.tailsStakingRegistry),
                input.tx.object(input.kiosk),
                input.tx.object(input.kioskCap),
                input.tx.pure(input.tails),
                input.tx.object(input_coin),
            ],
        });
    }

    return input.tx;
}
