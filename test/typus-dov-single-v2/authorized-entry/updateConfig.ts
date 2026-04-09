import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { SuiGrpcClient } from "@mysten/sui/grpc";
import { Transaction } from "@mysten/sui/transactions";
import { getUpdateConfigTx } from "src/typus-dov-single-v2";
import { TypusConfig } from "src/utils";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    const provider = config.gRpcClient();

    let transaction = await getUpdateConfigTx(config, new Transaction(), [{ index: "125", input: { incentiveFeeBp: "0" } }]);
    let res = await provider.signAndExecuteTransaction({ signer, transaction });
    console.log(res);
})();
