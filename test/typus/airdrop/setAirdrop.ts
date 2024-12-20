import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { SuiClient } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
import { getSetAirdropTx } from "src/typus/airdrop";
import { TypusConfig } from "src/utils";
import mnemonic from "mnemonic.json";
import * as fs from "fs";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    let signer = Ed25519Keypair.deriveKeypair(String(mnemonic.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });

    const raw = fs.readFileSync("airdrop.csv", "utf-8");
    const user_data = raw.split("\n").map((line) => line.split(","));
    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    while (user_data.length > 0) {
        console.log(user_data.length);
        let slice = user_data.splice(0, 300);
        let transaction = await getSetAirdropTx(config, new Transaction(), {
            typeArguments: [config.token.typus],
            key: "typus_airdrop",
            coins: ["0xa633dd0101ae7b95ba675de8a12a7c9aad420054f4bcf7fcd23bd9d099fc2920"],
            amount: "500000000000000",
            users: slice.map((user) => user[0]),
            values: slice.map((user) => user[1]),
        });

        let res = await provider.signAndExecuteTransaction({ signer, transaction });
        console.log(res);
        await sleep(5000);
    }
})();
