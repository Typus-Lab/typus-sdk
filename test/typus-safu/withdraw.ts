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
    let config = await TypusConfig.default("MAINNET", null, "test/safu");
    let provider = new SuiClient({ url: config.rpcEndpoint });
    console.log(config.package.safu);

    // INPUT
    let transaction = getReduceFundTx(config, new Transaction(), {
        typeArguments: [config.token.sui],
        index: "28",
        reduceFromWarmup: "1000000000",
        reduceFromActive: "0",
        reduceFromInactive: "0",
        feeAmount: "0",
        user,
    });

    let res = await provider.signAndExecuteTransaction({ signer, transaction });
    console.log(res);
})();
