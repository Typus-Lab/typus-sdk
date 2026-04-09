import "src/utils/load_env";
import { updateVotes } from "src/typus-launch/improvement-proposal";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { SuiGrpcClient } from "@mysten/sui/grpc";
import { Transaction } from "@mysten/sui/transactions";
import { TypusConfig } from "src/utils";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    // let config = TypusConfig.local("../typus-config/config-testnet.json");
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    const provider = config.gRpcClient();

    let transaction = new Transaction();
    updateVotes(config, transaction);
    let res = await provider.signAndExecuteTransaction({ signer, transaction });
    console.log(res);
})();
