import { TransactionBlock } from "@mysten/sui.js/transactions";
import { SuiClient } from "@mysten/sui.js/client";
import { BcsReader } from "@mysten/bcs";
import { SENDER } from "src/constants";
import { AddressFromBytes, TypusConfig } from "src/utils";

export interface VeTypus {
    id: string;
    balance: string;
    lockUpPeriod: string;
    createTsMs: string;
}
export async function getVeTypus(
    config: TypusConfig,
    input: {
        user: string;
    }
): Promise<VeTypus[]> {
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let transactionBlock = new TransactionBlock();
    transactionBlock.moveCall({
        target: `${config.package.launch.veTypus}::ve_typus::get_ve_typus_bcs`,
        arguments: [transactionBlock.object(config.registry.launch.veTypus), transactionBlock.pure(input.user)],
    });
    // @ts-ignore
    let bytes = (await provider.devInspectTransactionBlock({ sender: SENDER, transactionBlock })).results[0].returnValues[0][0];
    let reader = new BcsReader(new Uint8Array(bytes));
    reader.readULEB();
    return reader.readVec((reader) => {
        reader.readULEB();
        return {
            id: AddressFromBytes(reader.readBytes(32)),
            balance: reader.read64(),
            lockUpPeriod: reader.read64(),
            createTsMs: reader.read64(),
        } as VeTypus;
    });
}
