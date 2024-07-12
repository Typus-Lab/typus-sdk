import { TransactionBlock } from "@mysten/sui.js/transactions";
/**
    public fun remove_airdrop<TOKEN>(
        version: &Version,
        typus_airdrop_registry: &mut TypusAirdropRegistry,
        key: String,
        ctx: &mut TxContext,
    ): Balance<TOKEN>
*/
export declare function getRemoveAirdropTx(gasBudget: number, packageId: string, version: string, typusLeaderboardRegistry: string, key: string, typeArguments: string[], sender: string): Promise<TransactionBlock>;
/**
    public fun set_airdrop<TOKEN>(
        version: &Version,
        typus_airdrop_registry: &mut TypusAirdropRegistry,
        key: String,
        mut coins: vector<Coin<TOKEN>>,
        mut users: vector<address>,
        mut values: vector<u64>,
        ctx: &mut TxContext,
    )
*/
export declare function getSetAirdropTx(gasBudget: number, packageId: string, version: string, typusLeaderboardRegistry: string, key: string, coins: string[], amount: string, users: string[], values: string[], typeArguments: string[]): Promise<TransactionBlock>;
