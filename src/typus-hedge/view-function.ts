import { Transaction } from "@mysten/sui/transactions";
import { SuiClient } from "@mysten/sui/client";
import { BcsReader } from "@mysten/bcs";
import { AddressFromBytes, TypusConfig } from "src/utils";
import { SENDER } from "src/constants";
export interface Vault {
    id: string;
    mainToken: string;
    hedgeToken: string;
    rewardTokens: string[];
    info: Map<string, string>;
    config: Map<string, string>;
    mainTokenShare: KeyedBigVector;
    mainTokenShareSupply: string[];
    hedgeTokenShare: KeyedBigVector;
    hedgeTokenShareSupply: string[];
    rewardTokenShare: KeyedBigVector;
    rewardTokenShareSupply: string[];
    u64Padding: Map<string, string>;
    bcsPadding: Map<string, number[]>;
}

export interface KeyedBigVector {
    id: string;
    keyType: string;
    valueType: string;
    sliceIdx: string;
    sliceSize: number;
    length: string;
}

export async function getVaultData(
    config: TypusConfig,
    input: {
        indexes: string[];
    }
): Promise<{ [key: string]: [Vault] }> {
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let transaction = new Transaction();
    transaction.moveCall({
        target: `${config.package.hedge.hedge}::view_function::get_vault_data_bcs`,
        typeArguments: [],
        arguments: [transaction.object(config.registry.hedge), transaction.pure.vector("u64", input.indexes)],
    });
    let results = (await provider.devInspectTransactionBlock({ transactionBlock: transaction, sender: SENDER })).results;
    // console.log(JSON.stringify(results));
    // @ts-ignore
    let bytes = results[results.length - 1].returnValues[0][0];
    // console.log(JSON.stringify(bytes));
    let reader = new BcsReader(new Uint8Array(bytes));
    let result: {
        [key: string]: [Vault];
    } = {};
    reader.readVec((reader) => {
        reader.readULEB();
        let id = AddressFromBytes(reader.readBytes(32));
        let mainToken = String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB())));
        let hedgeToken = String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB())));
        let rewardTokens = reader.readVec((reader) => {
            return String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB())));
        });
        let info = new Map<string, string>();
        reader.readVec((reader) => {
            info.set(String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB()))), reader.read64());
        });
        let config = new Map<string, string>();
        reader.readVec((reader) => {
            config.set(String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB()))), reader.read64());
        });
        let mainTokenShare = {
            id: AddressFromBytes(reader.readBytes(32)),
            keyType: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB()))),
            valueType: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB()))),
            sliceIdx: reader.read64(), // slice_idx
            sliceSize: reader.read32(), // slice_size
            length: reader.read64(), // length
        };
        let mainTokenShareSupply = reader.readVec((reader) => {
            return reader.read64();
        });
        let hedgeTokenShare = {
            id: AddressFromBytes(reader.readBytes(32)),
            keyType: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB()))),
            valueType: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB()))),
            sliceIdx: reader.read64(), // slice_idx
            sliceSize: reader.read32(), // slice_size
            length: reader.read64(), // length
        };
        let hedgeTokenShareSupply = reader.readVec((reader) => {
            return reader.read64();
        });
        let rewardTokenShare = {
            id: AddressFromBytes(reader.readBytes(32)),
            keyType: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB()))),
            valueType: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB()))),
            sliceIdx: reader.read64(), // slice_idx
            sliceSize: reader.read32(), // slice_size
            length: reader.read64(), // length
        };
        let rewardTokenShareSupply = reader.readVec((reader) => {
            return reader.read64();
        });
        let u64Padding = new Map<string, string>();
        reader.readVec((reader) => {
            u64Padding.set(String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB()))), reader.read64());
        });
        let bcsPadding = new Map<string, number[]>();
        reader.readVec((reader) => {
            bcsPadding.set(
                String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB()))),
                reader.readVec((reader) => {
                    return reader.read8();
                })
            );
        });
        result[info["index"]] = [
            {
                id,
                mainToken,
                hedgeToken,
                rewardTokens,
                info,
                config,
                mainTokenShare,
                mainTokenShareSupply,
                hedgeTokenShare,
                hedgeTokenShareSupply,
                rewardTokenShare,
                rewardTokenShareSupply,
                u64Padding,
                bcsPadding,
            },
        ];
    });

    return result;
}

// export interface Share {
//     user: string;
//     share: ShareSupply;
//     u64Padding: string[];
//     bcsPadding: string[];
// }
// export async function getShareData(
//     config: TypusConfig,
//     input: {
//         user: string;
//         indexes: string[];
//     }
// ): Promise<{ [key: string]: Share[] }> {
//     let provider = new SuiClient({ url: config.rpcEndpoint });
//     let transaction = new Transaction();
//     transaction.moveCall({
//         target: `${config.package.safu}::view_function::get_share_data_bcs`,
//         typeArguments: [],
//         arguments: [
//             transaction.object(config.registry.safu.safu),
//             transaction.pure.address(input.user),
//             transaction.pure.vector("u64", input.indexes),
//         ],
//     });
//     let results = (await provider.devInspectTransactionBlock({ transactionBlock: transaction, sender: SENDER })).results;
//     // console.log(JSON.stringify(results));
//     // @ts-ignore
//     let bytes = results[results.length - 1].returnValues[0][0];
//     // console.log(JSON.stringify(bytes));
//     let reader = new BcsReader(new Uint8Array(bytes));
//     let result: {
//         [key: string]: Share[];
//     } = {};
//     reader.readVec((reader, i) => {
//         reader.read8();
//         let share = reader.readVec((reader) => {
//             let user = AddressFromBytes(reader.readBytes(32));
//             let shareSupplyArray = reader.readVec((reader) => {
//                 return reader.read64();
//             });
//             let shareSupply = {
//                 active_share: shareSupplyArray[0],
//                 deactivating_share: shareSupplyArray[1],
//                 inactive_share: shareSupplyArray[2],
//                 warmup_share: shareSupplyArray[3],
//                 snapshot_share: shareSupplyArray[4],
//                 reward_share: shareSupplyArray.slice(5),
//             };
//             return {
//                 user,
//                 share: shareSupply,
//                 u64Padding: reader.readVec((reader) => {
//                     return reader.read64();
//                 }),
//                 bcsPadding: reader.readVec((reader) => {
//                     return reader.read8();
//                 }),
//             };
//         });
//         let index = input.indexes.pop()!;
//         result[index] = share;
//     });

//     return result;
// }
