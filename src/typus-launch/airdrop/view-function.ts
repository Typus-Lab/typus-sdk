import { TransactionBlock } from "@mysten/sui.js/transactions";
import { SuiClient } from "@mysten/sui.js/client";
import { BcsReader } from "@mysten/bcs";
import { AddressFromBytes, TypusConfig } from "src/utils";
import { SENDER } from "src/constants";

export interface Airdrop {
    key: string;
    token: string;
    value: string;
    claimed: boolean;
}
/**
    public(package) fun get_airdrop_bcs(
        registry: &Registry,
        user: address,
    ): vector<u8> {
 */
export async function getAirdrop(
    config: TypusConfig,
    input: {
        user: string;
    }
): Promise<Airdrop[]> {
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let transactionBlock = new TransactionBlock();
    transactionBlock.moveCall({
        target: `${config.package.launch.airdrop}::airdrop::get_airdrop_bcs`,
        arguments: [transactionBlock.pure(config.registry.launch.airdrop), transactionBlock.pure(input.user)],
    });
    // @ts-ignore
    let bytes = (await provider.devInspectTransactionBlock({ sender: SENDER, transactionBlock })).results[0].returnValues[0][0];
    let reader = new BcsReader(new Uint8Array(bytes));
    reader.readULEB();
    return reader.readVec((reader) => {
        reader.readULEB();
        return {
            key: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB()))),
            token: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB()))),
            value: reader.read64(),
            claimed: reader.read8() == 0 ? false : true,
        } as Airdrop;
    });
}
