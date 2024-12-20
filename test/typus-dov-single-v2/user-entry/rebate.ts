import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { getRebateTx } from "src/typus-dov-single-v2";
import { SuiClient } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
import { TypusConfig } from "src/utils";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let user = signer.toSuiAddress();
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let transaction = getRebateTx(config, new Transaction(), {
        typeArgument: config.token.sui,
        user,
    });

    let res = await provider.signAndExecuteTransaction({ signer, transaction });

    console.log(res);
})();
