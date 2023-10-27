import { TransactionBlock } from "@mysten/sui.js";

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
    typeArguments: string[], // [TOKEN]
    registry: string,
    index: string,
    coins: string[],
    amount: string
) {
    let tx = new TransactionBlock();
    tx.moveCall({
        target: `${packageId}::tails_exp_dice::new_game`,
        typeArguments,
        arguments: [tx.pure(registry), tx.pure(index), tx.makeMoveVec({ objects: coins.map((id) => tx.object(id)) }), tx.pure(amount)],
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
    registry: string,
    index: string,
    game_id: string,
    guess_1: string,
    larger_than_1: boolean,
    guess_2: string,
    larger_than_2: boolean
) {
    let tx = new TransactionBlock();
    tx.moveCall({
        target: `${packageId}::tails_exp_dice::play_guess`,
        typeArguments: [],
        arguments: [
            tx.pure(registry),
            tx.pure(index),
            tx.pure(game_id),
            tx.pure(guess_1),
            tx.pure(larger_than_1),
            tx.pure(guess_2),
            tx.pure(larger_than_2),
        ],
    });
    tx.setGasBudget(gasBudget);

    return tx;
}