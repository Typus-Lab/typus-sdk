import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getRaiseFundTx } from "src/typus-dov-single-v2";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { TypusConfig } from "src/utils";
import { CLOCK } from "src/constants";

(async () => {
    let index = 0;
    let size = 10000000000;
    let response = await fetch(`https://pricing-testnet-752051381467.us-central1.run.app?index=${index}&size=${size}`);
    let result = await response.json();
    console.log(result);
    if (response.ok) {
        let config = await TypusConfig.default("TESTNET", null);
        let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
        let provider = new SuiClient({ url: config.rpcEndpoint });

        let transactionBlock = new TransactionBlock();
        let [coin] = transactionBlock.splitCoins(transactionBlock.gas, [transactionBlock.pure(result.budget_w_fee)]);
        transactionBlock.moveCall({
            target: "0xf64aececc209feef2fb74797276c65f2f202c53f579b310405c67b6fa1fe5c6e::otc_example::otc",
            typeArguments: [result.d_token, result.b_token],
            arguments: [
                transactionBlock.pure(result.signature),
                transactionBlock.object(config.registry.dov.dovSingle),
                transactionBlock.pure(result.index),
                transactionBlock.pure(result.option_price),
                transactionBlock.pure(result.contract_size),
                coin,
                transactionBlock.pure(result.ts_ms),
                transactionBlock.object(CLOCK),
            ],
        });
        let res = await provider.signAndExecuteTransactionBlock({ signer, transactionBlock });
        console.log(res);
    }
})();
