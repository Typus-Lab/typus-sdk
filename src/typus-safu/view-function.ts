import { TransactionBlock } from "@mysten/sui.js/transactions";
import { SuiClient } from "@mysten/sui.js/client";
import { BcsReader } from "@mysten/bcs";
import { AddressFromBytes, TypusConfig } from "src/utils";

const SENDER = "0xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
export interface Vault {
    id: string;
    depositToken: string;
    rewardToken: string[];
    info: string[];
    config: string[];
    shareSupply: string[];
    u64Padding: string[];
    bcsPadding: string[];
}
export async function getVaultData(
    config: TypusConfig,
    input: {
        provider: SuiClient;
        indexes: string[];
    }
): Promise<{ [key: string]: Vault }> {
    let transactionBlock = new TransactionBlock();
    transactionBlock.moveCall({
        target: `${config.package.safu}::view_function::get_vault_data_bcs`,
        typeArguments: [],
        arguments: [transactionBlock.pure(config.registry.safu.safu), transactionBlock.pure(input.indexes)],
    });
    let results = (await input.provider.devInspectTransactionBlock({ sender: SENDER, transactionBlock })).results;
    // console.log(JSON.stringify(results));
    // @ts-ignore
    let bytes = results[results.length - 1].returnValues[0][0];
    // console.log(JSON.stringify(bytes));
    let reader = new BcsReader(new Uint8Array(bytes));
    let result: {
        [key: string]: Vault;
    } = {};
    reader.readVec((reader) => {
        reader.read16();
        let id = AddressFromBytes(reader.readBytes(32));
        let depositToken = String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8())));
        let rewardToken = reader.readVec((reader) => {
            return String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8())));
        });
        let info = reader.readVec((reader) => {
            return reader.read64();
        });
        let config = reader.readVec((reader) => {
            return reader.read64();
        });
        // skip BigVector
        reader.readBytes(32); // id
        reader.readBytes(reader.read8()); // element_type
        reader.read64(); // slice_idx
        reader.read32(); // slice_size
        reader.read64(); // length
        let shareSupply = reader.readVec((reader) => {
            return reader.read64();
        });
        let u64Padding = reader.readVec((reader) => {
            return reader.read64();
        });
        let bcsPadding = reader.readVec((reader) => {
            return reader.read8();
        });

        result[info[0]] = {
            id,
            depositToken,
            rewardToken,
            info,
            config,
            shareSupply,
            u64Padding,
            bcsPadding,
        };
    });

    return result;
}
