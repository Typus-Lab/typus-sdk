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
export declare function newGameTx(gasBudget: number, packageId: string, typeArguments: string[], // [TOKEN]
registry: string, index: string, coins: string[], amount: string): Promise<TransactionBlock>;
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
export declare function playGuessTx(gasBudget: number, packageId: string, registry: string, index: string, guess_1: string, larger_than_1: boolean, guess_2: string, larger_than_2: boolean): Promise<TransactionBlock>;
export declare function newGamePlayGuessTx(gasBudget: number, packageId: string, typeArguments: string[], // [TOKEN]
registry: string, index: string, coins: string[], amount: string, guess_1: string, larger_than_1: boolean, guess_2: string, larger_than_2: boolean): Promise<TransactionBlock>;
/**
    public fun consume_exp_coin_staked(
        registry: &mut Registry,
        version: &Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        tails: address,
        coin: Coin<TAILS_EXP>,
    ) {
 */
export declare function getConsumeExpCoinStakedTx(input: {
    tx: TransactionBlock;
    packageId: string;
    tailsExpRegistry: string;
    typusEcosystemVersion: string;
    tailsStakingRegistry: string;
    tails: string;
    coins: string[];
    amount: string;
}): TransactionBlock;
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
export declare function getConsumeExpCoinUnstakedTx(input: {
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
}): TransactionBlock;
