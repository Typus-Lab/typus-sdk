import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getClaimRewardTx } from "src/typus-safu";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import config_json from "config-mainnet.json";
import { TypusConfig } from "src/utils";
import mnemonic from "mnemonic.json";

(async () => {
    let signer = Ed25519Keypair.deriveKeypair(String(mnemonic.MNEMONIC));
    let user = signer.toSuiAddress();
    let config = TypusConfig.parse(config_json);
    let provider = new SuiClient({ url: config.rpcEndpoint });

    // INPUT
    let transactionBlock = getClaimRewardTx(config, new TransactionBlock(), {
        typeArguments: [config.token.usdc],
        index: "1",
        user,
    });
    transactionBlock.setGasBudget(100000000);

    let res = await provider.signAndExecuteTransactionBlock({ signer, transactionBlock });
    console.log(res);
})();
