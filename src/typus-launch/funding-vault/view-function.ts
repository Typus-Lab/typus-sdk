import { TransactionBlock } from "@mysten/sui.js/transactions";
import { SuiClient } from "@mysten/sui.js/client";
import { BcsReader } from "@mysten/bcs";
import { SENDER } from "src/constants";
import { AddressFromBytes, TypusConfig } from "src/utils";

export interface Vault {
    id: string;
    token: string;
    info: string[];
    config: string[];
}
export async function getVault(
    config: TypusConfig,
    input: {
        indexes: string[];
    }
): Promise<{ [key: string]: [Vault] }> {
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let transactionBlock = new TransactionBlock();
    input.indexes.forEach((index) => {
        transactionBlock.moveCall({
            target: `${config.package.launch.fundingVault}::funding_vault::get_vault_bcs`,
            arguments: [transactionBlock.object(config.registry.launch.fundingVault), transactionBlock.pure(index)],
        });
    });
    let results = (await provider.devInspectTransactionBlock({ sender: SENDER, transactionBlock })).results;
    let vaults: {
        [key: string]: [Vault];
    } = {};
    results?.forEach((result) => {
        // @ts-ignore
        let bytes = result.returnValues[0][0];
        let reader = new BcsReader(new Uint8Array(bytes));
        reader.readULEB();
        let id = AddressFromBytes(reader.readBytes(32));
        let token = String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8())));
        let info = reader.readVec((reader) => {
            return reader.read64();
        });
        let config = reader.readVec((reader) => {
            return reader.read64();
        });

        vaults[info[0]] = [
            {
                id,
                token,
                info,
                config,
            },
        ];
    });

    return vaults;
}
