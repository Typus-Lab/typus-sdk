import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { getRaiseFundTx } from "src/typus-dov-single-v2";
import { SuiClient } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
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

        let transaction = new Transaction();
        let [coin] = transaction.splitCoins(transaction.gas, [transaction.pure(result.budget_w_fee)]);
        transaction.moveCall({
            target: "0xf64aececc209feef2fb74797276c65f2f202c53f579b310405c67b6fa1fe5c6e::otc_example::otc",
            typeArguments: [result.d_token, result.b_token],
            arguments: [
                transaction.pure(result.signature),
                transaction.object(config.registry.dov.dovSingle),
                transaction.pure(result.index),
                transaction.pure(result.option_price),
                transaction.pure(result.contract_size),
                coin,
                transaction.pure(result.ts_ms),
                transaction.object(CLOCK),
            ],
        });
        let res = await provider.signAndExecuteTransaction({ signer, transaction });
        console.log(res);
    }
})();
