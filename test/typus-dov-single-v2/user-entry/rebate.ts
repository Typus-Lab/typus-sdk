import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { getRebateTx } from "src/typus-dov-single-v2";
import { SuiGrpcClient } from "@mysten/sui/grpc";
import { Transaction } from "@mysten/sui/transactions";
import { TypusConfig } from "src/utils";
import { tokenType } from "src/constants";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let user = signer.toSuiAddress();
    const provider = config.gRpcClient();

    let transaction = getRebateTx(config, new Transaction(), {
        typeArgument: tokenType["TESTNET"].SUI,
        user,
    });

    let res = await provider.signAndExecuteTransaction({ signer, transaction });

    console.log(res);
})();
