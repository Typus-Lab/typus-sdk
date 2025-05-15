import "src/utils/load_env";
import { getPublicExpUpTx } from "src/typus/tails-staking";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { SuiClient } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
import { TypusConfig } from "src/utils";
import mnemonic from "mnemonic.json";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    let signer = Ed25519Keypair.deriveKeypair(String(mnemonic.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let transaction = new Transaction();
    getPublicExpUpTx(config, transaction, {
        tails: "0x0f363549ff84d481b595f244455b71f3e5a0568102270a434aaa681a2c1e5c06",
        amount: "1000000",
    });
    let res = await provider.signAndExecuteTransaction({ signer, transaction });
    console.log(res);
})();
