import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getRebateTx } from "src/typus-dov-single-v2";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { TypusConfig } from "src/utils";

(async () => {
    let config = TypusConfig.default("TESTNET");
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let user = signer.toSuiAddress();
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let transactionBlock = getRebateTx(config, new TransactionBlock(), {
        typeArgument: config.token.sui,
        user,
    });
    transactionBlock.setGasBudget(100000000);
    let res = await provider.signAndExecuteTransactionBlock({ signer, transactionBlock });

    console.log(res);
})();
