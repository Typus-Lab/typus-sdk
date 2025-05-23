import { SuiClient } from "@mysten/sui/client";
import { BcsReader } from "@mysten/bcs";
import { Transaction } from "@mysten/sui/transactions";
import { AddressFromBytes } from "src/utils/tools";
import { BidShare, BidVault } from "src/typus-dov-single-v2/view-function";
import { TypusConfig } from "src/utils";

export async function getUserStrategies(
    config: TypusConfig,
    input: {
        user: string;
    }
    // typeArguments: string[] // [D_TOKEN, B_TOKEN]
) {
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let transaction = new Transaction();
    let target = `${config.package.dovSingle}::auto_bid::view_user_strategies` as any;
    let transactionBlockArguments = [
        transaction.object(config.registry.dov.dovSingle),
        transaction.object(config.registry.dov.autoBid),
        transaction.pure.address(input.user),
    ];
    transaction.moveCall({
        target,
        typeArguments: [],
        arguments: transactionBlockArguments,
    });
    let results = (await provider.devInspectTransactionBlock({ transactionBlock: transaction, sender: input.user })).results;

    // @ts-ignore
    let objBCS = results[0].returnValues[0][0];
    // console.log(objBCS.length);
    // console.log(objBCS.toString());

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
                    metadata: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB()))),
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

        let my_bids = Array.from(new Map()).reduce((map, [key, value]) => {
            map[key] = value;
            return map;
        }, {});
        reader.readVec((reader, i) => {
            reader.read16();
            let bidVault = {
                id: AddressFromBytes(reader.readBytes(32)),
                depositToken: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB()))),
                bidToken: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB()))),
                incentiveToken: reader
                    .readVec((reader) => {
                        return String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB())));
                    })
                    .at(0),
                index: reader.read64(),
                shareSupply: reader.read64(),
                metadata: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB()))),
                u64Padding: reader.readVec((reader) => {
                    return reader.read64();
                }),
                bcsPadding: reader.readVec((reader) => {
                    return reader.read8();
                }),
            } as BidVault;
            my_bids[bidVault.index + "-" + bidVault.id] = {
                bidVault,
                share: reader.read64(),
            } as BidShare;
        });
        // console.log(my_bids);
        strategy.my_bids = my_bids;

        strategy.remaining_balance = strategy.u64_padding.at(0);
        strategy.gain_to_harvest = strategy.u64_padding.at(1);
        strategy.accumulated_cost = strategy.u64_padding.at(2);

        if (Number(strategy.bid_times) >= Number(strategy.max_times)) {
            strategy.status = "finished";
        } else if (!strategy.active) {
            strategy.status = "insufficient balance";
        } else {
            strategy.status = "active";
        }

        // console.log(strategy);

        strategies.push(strategy);
    });

    return strategies;
}

export async function getStrategyPool(config: TypusConfig) {
    let provider = new SuiClient({ url: config.rpcEndpoint });
    // @ts-ignore
    let pool = (await provider.getObject({ id: config.registry.dov.autoBid, options: { showContent: true } })).data?.content.fields;
    // console.log(pool);

    // console.log(pool.strategies.fields.contents.fields);

    let vaults = pool.strategies.fields.contents;
    // console.log("vaults: ", vaults);

    let strategies = new Map<string, Map<string, string>>();

    for (let vault of vaults) {
        let signals = new Map<string, string>();

        for (let signal of vault.fields.value.fields.contents) {
            let strategyTable = signal.fields.value.fields.contents;
            // console.log(strategyTable);
            signals.set(signal.fields.key, strategyTable.fields.id.id);
        }
        strategies.set(vault.fields.key, signals);
    }

    let strategyPool: StrategyPoolV2 = {
        id: pool.id.id,
        strategies,
        authority: pool.authority,
    };

    return strategyPool;
}

export interface StrategyPoolV2 {
    id: string;
    strategies: Map<string, Map<string, string>>;
    authority: string[];
}

export interface StrategyV2 {
    id: string;
    vault_index: string;
    signal_index: string;
    user: string;
    price_percentage: string;
    size: string;
    max_times: string;
    target_rounds: string[];
    receipts: TypusBidReceipt[];
    active: boolean;
    u64_padding: string[]; // [balance, profit, accumulated_cost]
    // log
    bid_times: string;
    bid_round: string;
    bid_ts_ms: string;
    bid_rounds: string[];
    accumulated_profit: string;
    remaining_balance: string | undefined;
    gain_to_harvest: string | undefined;
    accumulated_cost: string | undefined;
    my_bids: { [key: string]: BidShare };
    status: "active" | "insufficient balance" | "finished";
}

export interface TypusBidReceipt {
    id: string;
    vid: string;
    index: string;
    metadata: string;
    u64_padding: string[];
}

export async function getStrategies(config: TypusConfig, strategyIds: string[]) {
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let strategies = new Map<string, StrategyV2>();

    while (strategyIds.length > 0) {
        let len = strategyIds.length > 50 ? 50 : strategyIds.length;

        let results = await provider.multiGetObjects({ ids: strategyIds.splice(0, len), options: { showContent: true } });

        for (let result of results) {
            // @ts-ignore
            let fields = result.data?.content.fields;
            // console.log(fields);
            strategies.set(fields.name, fields.value.fields as StrategyV2);
        }
    }
    return strategies;
}

export async function getStrategyIds(config: TypusConfig, parentId: string) {
    let provider = new SuiClient({ url: config.rpcEndpoint });
    var result = await provider.getDynamicFields({
        parentId,
    });

    var datas = result.data;

    while (result.hasNextPage) {
        result = await provider.getDynamicFields({
            parentId,
            cursor: result.nextCursor,
        });
        datas = datas.concat(result.data);
    }

    return datas.map((data) => data.objectId);
}
