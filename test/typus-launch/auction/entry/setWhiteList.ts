import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { whitelistTx } from "src/typus-launch/auction";
import { TypusConfig } from "src/utils";
import mnemonic from "mnemonic.json";
import * as fs from "fs";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    let signer = Ed25519Keypair.deriveKeypair(String(mnemonic.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });

    const raw = fs.readFileSync("whitelist.csv", "utf-8");
    const user_data = raw.split("\n").map((line) => line.split(","));
    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    while (user_data.length > 0) {
        console.log(user_data.length);
        let slice = user_data.splice(0, 300);
        let transactionBlock = whitelistTx(
            config,
            new TransactionBlock(),
            slice.map((user) => user[0]),
            slice.map((user) => user[1])
        );

        let res = await provider.signAndExecuteTransactionBlock({ signer, transactionBlock });
        console.log(res);
        await sleep(5000);
    }
})();
