import "src/utils/load_env";
import { bidTx } from "src/typus-launch/auction";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { SuiGrpcClient } from "@mysten/sui/grpc";
import { Transaction } from "@mysten/sui/transactions";
import { TypusConfig } from "src/utils";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    const provider = config.gRpcClient();
    let user = signer.toSuiAddress();

    let size = "1000000000";
    let amount = "1000000000";

    let transaction = bidTx(config, new Transaction(), {
        size,
        amount,
    });
    let res = await provider.signAndExecuteTransaction({ signer, transaction });
    console.log(res);
})();
