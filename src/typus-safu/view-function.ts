import { TransactionBlock } from "@mysten/sui.js/transactions";
import { SuiClient } from "@mysten/sui.js/client";
import { BcsReader } from "@mysten/bcs";
import { AddressFromBytes, TypusConfig } from "src/utils";
import { SENDER } from "src/constants";
import { TypusBidReceipt } from "src/auto-bid/view-function";
export interface Vault {
    id: string;
    depositToken: string;
    rewardToken: string[];
    info: Info;
    config: Config;
    shareSupply: ShareSupply;
    u64Padding: string[];
    bcsPadding: string[];
}
export interface Info {
    index: string;
    round: string;
    portfolio_vault_index: string;
    refresh_ts_ms: string;
    status: string;
    lending_enabled: string;
    price_mbp: string;
    mbp_incentivised: string;
    fixed_incentivised: string;
    token_decimal: string;
    lending_apr_mbp: string;
}
export interface Config {
    capacity: string;
    lot_size: string;
    min_size: string;
    fee_bp: string;
    utilization_rate_bp: string;
    point_per_hour_bp: string;
    incentive_mbp: string;
    incentive_fixed: string;
}
export interface ShareSupply {
    active_share: string;
    deactivating_share: string;
    inactive_share: string;
    warmup_share: string;
    snapshot_share: string;
    reward_share: string[];
}
export async function getVaultData(
    config: TypusConfig,
    input: {
        indexes: string[];
    }
): Promise<{ [key: string]: [Vault, TypusBidReceipt | null] }> {
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let transactionBlock = new TransactionBlock();
    transactionBlock.moveCall({
        target: `${config.package.safu}::view_function::get_vault_data_bcs`,
        typeArguments: [`${config.package.framework}::vault::TypusBidReceipt`],
        arguments: [transactionBlock.pure(config.registry.safu.safu), transactionBlock.pure(input.indexes)],
    });
    let results = (await provider.devInspectTransactionBlock({ sender: SENDER, transactionBlock })).results;
    // console.log(JSON.stringify(results));
    // @ts-ignore
    let bytes = results[results.length - 1].returnValues[0][0];
    // console.log(JSON.stringify(bytes));
    let reader = new BcsReader(new Uint8Array(bytes));
    let result: {
        [key: string]: [Vault, TypusBidReceipt | null];
    } = {};
    reader.readVec((reader) => {
        reader.readULEB();
        let id = AddressFromBytes(reader.readBytes(32));
        let depositToken = String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8())));
        let rewardToken = reader.readVec((reader) => {
            return String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8())));
        });
        let infoArray = reader.readVec((reader) => {
            return reader.read64();
        });
        let configArray = reader.readVec((reader) => {
            return reader.read64();
        });
        let info = {
            index: infoArray[0],
            round: infoArray[1],
            portfolio_vault_index: infoArray[2],
            refresh_ts_ms: infoArray[3],
            status: infoArray[4],
            lending_enabled: infoArray[5],
            price_mbp: infoArray[6],
            mbp_incentivised: infoArray[7],
            fixed_incentivised: infoArray[8],
            token_decimal: infoArray[9],
            lending_apr_mbp: infoArray[10],
        };
        let config = {
            capacity: configArray[0],
            lot_size: configArray[1],
            min_size: configArray[2],
            fee_bp: configArray[3],
            utilization_rate_bp: configArray[4],
            point_per_hour_bp: configArray[5],
            incentive_mbp: configArray[6],
            incentive_fixed: configArray[7],
        };
        // skip BigVector
        reader.readBytes(32); // id
        reader.readBytes(reader.read8()); // element_type
        reader.read64(); // slice_idx
        reader.read32(); // slice_size
        reader.read64(); // length

        let shareSupplyArray = reader.readVec((reader) => {
            return reader.read64();
        });
        let shareSupply = {
            active_share: shareSupplyArray[0],
            deactivating_share: shareSupplyArray[1],
            inactive_share: shareSupplyArray[2],
            warmup_share: shareSupplyArray[3],
            snapshot_share: shareSupplyArray[4],
            reward_share: shareSupplyArray.slice(5),
        };
        let u64Padding = reader.readVec((reader) => {
            return reader.read64();
        });
        let bcsPadding = reader.readVec((reader) => {
            return reader.read8();
        });

        let has_bid_receipt = reader.read8() > 0;
        if (has_bid_receipt) {
            result[info.index] = [
                {
                    id,
                    depositToken,
                    rewardToken,
                    info,
                    config,
                    shareSupply,
                    u64Padding,
                    bcsPadding,
                },
                {
                    id: AddressFromBytes(reader.readBytes(32)),
                    vid: AddressFromBytes(reader.readBytes(32)),
                    index: reader.read64(),
                    metadata: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
                    u64_padding: reader.readVec((reader) => {
                        return reader.read64();
                    }),
                },
            ];
        } else {
            result[info.index] = [
                {
                    id,
                    depositToken,
                    rewardToken,
                    info,
                    config,
                    shareSupply,
                    u64Padding,
                    bcsPadding,
                },
                null,
            ];
        }
    });

    return result;
}

export interface Share {
    user: string;
    share: ShareSupply;
    u64Padding: string[];
    bcsPadding: string[];
}
export async function getShareData(
    config: TypusConfig,
    input: {
        user: string;
        indexes: string[];
    }
): Promise<{ [key: string]: Share[] }> {
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let transactionBlock = new TransactionBlock();
    transactionBlock.moveCall({
        target: `${config.package.safu}::view_function::get_share_data_bcs`,
        typeArguments: [],
        arguments: [
            transactionBlock.pure(config.registry.safu.safu),
            transactionBlock.pure(input.user),
            transactionBlock.pure(input.indexes),
        ],
    });
    let results = (await provider.devInspectTransactionBlock({ sender: SENDER, transactionBlock })).results;
    // console.log(JSON.stringify(results));
    // @ts-ignore
    let bytes = results[results.length - 1].returnValues[0][0];
    // console.log(JSON.stringify(bytes));
    let reader = new BcsReader(new Uint8Array(bytes));
    let result: {
        [key: string]: Share[];
    } = {};
    reader.readVec((reader, i) => {
        reader.read8();
        let share = reader.readVec((reader) => {
            let user = AddressFromBytes(reader.readBytes(32));
            let shareSupplyArray = reader.readVec((reader) => {
                return reader.read64();
            });
            let shareSupply = {
                active_share: shareSupplyArray[0],
                deactivating_share: shareSupplyArray[1],
                inactive_share: shareSupplyArray[2],
                warmup_share: shareSupplyArray[3],
                snapshot_share: shareSupplyArray[4],
                reward_share: shareSupplyArray.slice(5),
            };
            return {
                user,
                share: shareSupply,
                u64Padding: reader.readVec((reader) => {
                    return reader.read64();
                }),
                bcsPadding: reader.readVec((reader) => {
                    return reader.read8();
                }),
            };
        });
        let index = input.indexes.pop()!;
        result[index] = share;
    });

    return result;
}
