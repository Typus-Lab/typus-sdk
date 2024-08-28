import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getReduceFundTx } from "src/typus-safu";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import config_json from "config-mainnet.json";
import { TypusConfig } from "src/utils";

(async () => {
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let user = signer.toSuiAddress();
    let config = TypusConfig.parse(config_json);
    let provider = new SuiClient({ url: config.rpcEndpoint });

    // INPUT
    let transactionBlock = getReduceFundTx(config, new TransactionBlock(), {
        typeArguments: [config.token.usdc],
        index: "1",
        reduceFromWarmup: "91552",
        reduceFromActive: "0",
        reduceFromInactive: "3000571893",
        user,
    });
    transactionBlock.setGasBudget(100000000);

    let res = await provider.signAndExecuteTransactionBlock({ signer, transactionBlock });
    console.log(res);
})();
