import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { getReduceFundTx } from "src/typus-safu";
import { SuiClient } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
import { TypusConfig } from "src/utils";
import mnemonic from "mnemonic.json";

(async () => {
    let signer = Ed25519Keypair.deriveKeypair(String(mnemonic.MNEMONIC));
    let user = signer.toSuiAddress();
    let config = await TypusConfig.default("MAINNET", null);
    let provider = new SuiClient({ url: config.rpcEndpoint });

    // INPUT
    let transaction = getReduceFundTx(config, new Transaction(), {
        typeArguments: [config.token.usdc],
        index: "1",
        reduceFromWarmup: "91552",
        reduceFromActive: "0",
        reduceFromInactive: "3000571893",
        user,
    });

    let res = await provider.signAndExecuteTransaction({ signer, transaction });
    console.log(res);
})();
