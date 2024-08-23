import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getRaiseFundTx } from "src/typus-safu";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import config_json from "config-mainnet.json";
import { tokenType } from "src/constants";
import { TypusConfig } from "src/utils";

(async () => {
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let user = signer.toSuiAddress();
    let config = TypusConfig.parse(config_json);
    let provider = new SuiClient({ url: config.rpcEndpoint });

    // INPUT
    let cToken = config.token.usdc;
    let coins = (
        await provider.getCoins({
            owner: user,
            coinType: cToken,
        })
    ).data.map((coin) => coin.coinObjectId);

    let transactionBlock = getRaiseFundTx(config, new TransactionBlock(), {
        typeArguments: [cToken],
        index: "1",
        raiseCoins: coins,
        raiseAmount: "1000000",
        raiseFromDeactivating: "0",
        raiseFromInactive: "0",
        raiseFromReward: "0",
        user,
    });
    transactionBlock.setGasBudget(100000000);

    let res = await provider.signAndExecuteTransactionBlock({ signer, transactionBlock });
    console.log(res);
})();
