import "src/utils/load_env";
import { addUserShare } from "src/typus-launch/option-airdrop";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { TypusConfig } from "src/utils";
import mnemonic from "mnemonic.json";
import * as fs from "fs";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    let signer = Ed25519Keypair.deriveKeypair(String(mnemonic.TGE_AIRDROP));
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let user = signer.toSuiAddress();
    console.log("User address:", user);

    const raw = fs.readFileSync("option_airdrop.csv", "utf-8");
    const user_data = raw.split("\n").map((line) => line.split(","));
    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    while (user_data.length > 0) {
        console.log(user_data.length);
        let slice = user_data.splice(0, 500);
        let transactionBlock = new TransactionBlock();
        addUserShare(config, transactionBlock, {
            users: slice.map((user) => user[0]),
            shares: slice.map((user) => user[1]),
        });

        let res = await provider.signAndExecuteTransactionBlock({ signer, transactionBlock });
        console.log(res);
        await sleep(5000);
    }
})();
