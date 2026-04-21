import "src/utils/load_env";
import { withdrawFromDeepbookBalanceManager } from "src/typus-launch/funding-vault";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { SuiGrpcClient } from "@mysten/sui/grpc";
import { Transaction } from "@mysten/sui/transactions";
import { TypusConfig } from "src/utils";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    const provider = config.gRpcClient();

    let transaction = new Transaction();
    withdrawFromDeepbookBalanceManager(config, transaction, {
        typeArguments: ["0xdeeb7a4662eec9f2f3def03fb937a663dddaa2e215b8078a284d026b7946c270::deep::DEEP"],
        index: "1",
        amount: "1000000",
        recipient: signer.toSuiAddress(),
    });
    let res = await provider.signAndExecuteTransaction({ signer, transaction });
    console.log(res);
})();
