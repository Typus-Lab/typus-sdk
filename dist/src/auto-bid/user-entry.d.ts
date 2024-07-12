import { TransactionBlock } from "@mysten/sui.js/transactions";
/**
    entry fun new_strategy<B_TOKEN>(
        strategy_pool: &mut StrategyPool,
        vault_index: u64,
        signal_index: u64,
        size: u64,
        price_percentage: u64,
        max_times: u64,
        target_rounds: vector<u64>,
        coin: Coin<B_TOKEN>,
        ctx: &mut TxContext
    )
*/
export declare function getNewStrategyTx(gasBudget: number, packageId: string, typeArguments: string[], // D_TOKEN, B_TOKEN
registry: string, strategy_pool: string, vault_index: string, signal_index: string, coins: string[], amount: string, size: string, price_percentage: string, max_times: string, target_rounds: string[]): TransactionBlock;
/**
    entry fun close_strategy<D_TOKEN, B_TOKEN>(
        strategy_pool: &mut StrategyPoolV2,
        vault_index: u64,
        signal_index: u64,
        strategy_index: u64,
        ctx: &mut TxContext
    )
*/
export declare function getCloseStrategyTx(gasBudget: number, packageId: string, typeArguments: string[], // D_TOKEN, B_TOKEN
registry: string, strategy_pool: string, vault_index: string, signal_index: string, strategy_index: string, sender: string, txBlock?: TransactionBlock): TransactionBlock;
export declare function getWithdrawProfitStrategyTx(gasBudget: number, packageId: string, typeArguments: string[], // D_TOKEN, B_TOKEN
registry: string, strategy_pool: string, vault_index: string, signal_index: string, strategy_index: string, sender: string, txBlock?: TransactionBlock): TransactionBlock;
/**
    entry fun update_strategy<D_TOKEN, B_TOKEN>(
        strategy_pool: &mut StrategyPoolV2,
        vault_index: u64,
        signal_index: u64,
        strategy_index: u64,
        size: Option<u64>,
        price_percentage: Option<u64>,
        max_times: Option<u64>,
        target_rounds: vector<u64>,
        coins: vector<Coin<B_TOKEN>>,
        ctx: & TxContext
    )
*/
export declare function getUpdateStrategyTx(gasBudget: number, packageId: string, typeArguments: string[], // D_TOKEN, B_TOKEN
registry: string, strategy_pool: string, vault_index: string, signal_index: string, strategy_index: string, coins: string[], amount: string, size: string | null, price_percentage: string | null, max_times: string | null, target_rounds: string[]): TransactionBlock;
