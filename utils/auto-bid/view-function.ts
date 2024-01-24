import { SuiClient, SuiEventFilter } from "@mysten/sui.js/client";
import { assetToDecimal, typeArgToAsset } from "../token";
import { BCS, BcsReader, fromB58, fromB64, getSuiMoveConfig } from "@mysten/bcs";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { AddressFromBytes } from "../tools";

let bcs = new BCS(getSuiMoveConfig());
bcs.registerStructType("StrategyV2", {
    id: "address",
    vault_index: "u64",
    signal_index: "u64",
    user: "address",
    price_percentage: "u64",
    size: "u64",
    max_times: "u64",
    target_rounds: "vector<u64>",
    receipts: "vector<TypusBidReceipt>",
    active: "bool",
    u64_padding: "vector<u64>",
    bid_times: "u64",
    bid_round: "u64",
    bid_ts_ms: "u64",
    bid_rounds: "vector<u64>",
    accumulated_profit: "u64",
    strategy_index: "u64",
});

// struct StrategyV2 has key, store {
//     id: UID,
//     vault_index: u64,
//     signal_index: u64,
//     user: address,
//     // balance: Balance<B_TOKEN>,
//     // profit: Balance<D_TOKEN>,
//     price_percentage: u64,
//     size: u64,
//     max_times: u64,
//     target_rounds: vector<u64>,
//     receipts: vector<TypusBidReceipt>,
//     active: bool,
//     u64_padding: vector<u64>,
//     // log
//     bid_times: u64,
//     bid_round: u64,
//     bid_ts_ms: u64,
//     bid_rounds: vector<u64>,
//     accumulated_profit: u64,
// }

bcs.registerStructType("TypusBidReceipt", {
    id: "address",
    vid: "address",
    index: "u64",
    metadata: "String",
    u64_padding: "vector<u64>",
});

export async function getUserStrategies(provider: SuiClient, packageId: string, strategyPool: string, user: string) {
    let transactionBlock = new TransactionBlock();
    let target = `${packageId}::auto_bid::get_user_strategies` as any;
    let transactionBlockArguments = [transactionBlock.pure(strategyPool), transactionBlock.pure(user)];
    transactionBlock.moveCall({
        target,
        typeArguments: [],
        arguments: transactionBlockArguments,
    });
    let results = (await provider.devInspectTransactionBlock({ transactionBlock, sender: user })).results;

    // @ts-ignore
    let objBCS = results[0].returnValues[0][0];
    // console.log(objBCS.length);
    // console.log(objBCS.toString());

    // let strategies = bcs.de("vector<StrategyV2>", objBCS.toString(), "base64");
    // console.log(strategies);

    let reader = new BcsReader(new Uint8Array(objBCS));

    var strategies: StrategyV2[] = [];

    reader.readVec((reader, i) => {
        reader.read16();
        let strategy = {
            id: AddressFromBytes(reader.readBytes(32)),
            vault_index: reader.read64(),
            signal_index: reader.read64(),
            user: AddressFromBytes(reader.readBytes(32)),
            price_percentage: reader.read64(),
            size: reader.read64(),
            max_times: reader.read64(),
            target_rounds: reader.readVec((reader) => {
                return reader.read64();
            }),
            receipts: reader.readVec((reader) => {
                return {
                    id: AddressFromBytes(reader.readBytes(32)),
                    vid: AddressFromBytes(reader.readBytes(32)),
                    index: reader.read64(),
                    metadata: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
                    u64_padding: reader.readVec((reader) => {
                        return reader.read64();
                    }),
                };
            }),
            active: reader.read8(),
            u64_padding: reader.readVec((reader) => {
                return reader.read64();
            }),
            bid_times: reader.read64(),
            bid_round: reader.read64(),
            bid_ts_ms: reader.read64(),
            bid_rounds: reader.readVec((reader) => {
                return reader.read64();
            }),
            accumulated_profit: reader.read64(),
            strategy_index: reader.read64(),
        } as unknown as StrategyV2;
        // console.log(strategy);

        strategies.push(strategy);
    });

    return strategies;
}

export async function getVaults(provider: SuiClient, strategyPool: string) {
    // @ts-ignore
    const pool = (await provider.getObject({ id: strategyPool, options: { showContent: true } })).data?.content.fields;
    // console.log(pool);

    // console.log(pool.strategies.fields.contents.fields);

    let vaults = pool.strategies.fields.contents;
    // console.log("vaults: ", vaults);

    let strategies = new Map<string, Map<string, StrategyV2[]>>();

    for (let vault of vaults) {
        let signals = new Map<string, StrategyV2[]>();

        for (let signal of vault.fields.value.fields.contents) {
            // let strategyTable = signal.fields.value.fields.contents;
            // console.log(strategyTable);
            // dynamic fields
            signals.set(signal.fields.key, []);
        }
        strategies.set(vault.fields.key, signals);
    }

    let strategy_pool: StrategyPoolV2 = {
        id: pool.id.id,
        strategies,
        authority: pool.authority,
    };

    return strategy_pool;
}

export interface StrategyPoolV2 {
    id: string;
    strategies: Map<string, Map<string, StrategyV2[]>>;
    authority: string[];
}

export interface StrategyV2 {
    id: string;
    vault_index: string;
    signal_index: string;
    user: string;
    // balance: Balance<B_TOKEN>,
    // profit: Balance<D_TOKEN>,
    price_percentage: string;
    size: string;
    max_times: string;
    target_rounds: string[];
    receipts: TypusBidReceipt[];
    active: boolean;
    string_padding: string[];
    // log
    bid_times: string;
    bid_round: string;
    bid_ts_ms: string;
    bid_rounds: string[];
    accumulated_profit: string;
}

export interface TypusBidReceipt {
    id: string;
    vid: string;
    index: string;
    metadata: string;
    u64_padding: string[];
}
