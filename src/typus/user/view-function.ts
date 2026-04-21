import { Transaction } from "@mysten/sui/transactions";
import { SuiGrpcClient } from "@mysten/sui/grpc";
import { BcsReader } from "@mysten/bcs";
import { TypusConfig } from "src/utils";
import { SENDER } from "src/constants";

export async function getUserMetadata(
    config: TypusConfig,
    input: {
        user: string;
    }
): Promise<string[]> {
    const provider = config.gRpcClient();
    let transaction = new Transaction();
    transaction.moveCall({
        target: `${config.package.typus}::user::get_user_metadata`,
        typeArguments: [],
        arguments: [
            transaction.object(config.version.typus),
            transaction.object(config.registry.typus.user),
            transaction.pure.address(input.user),
        ],
    });
    let results = (await provider.simulateTransaction({ transaction, checksEnabled: false, include: { commandResults: true } }))
        .commandResults;
    // console.log(JSON.stringify(results));
    // @ts-ignore
    let bytes = results[results.length - 1].returnValues[0].bcs;
    // console.log(JSON.stringify(bytes));
    let reader = new BcsReader(new Uint8Array(bytes));
    reader.readULEB();
    return reader.readVec((reader) => {
        return reader.read64();
    });
}
