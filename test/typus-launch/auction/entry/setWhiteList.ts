import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { SuiClient } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
import { whitelistTx } from "src/typus-launch/auction";
import { TypusConfig } from "src/utils";
import mnemonic from "mnemonic.json";
import * as fs from "fs";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    let signer = Ed25519Keypair.deriveKeypair(String(mnemonic.TGE_AUCTION));
    let provider = new SuiClient({ url: config.rpcEndpoint });

    const raw = fs.readFileSync("whitelist.csv", "utf-8");
    const user_data = raw.split("\n").map((line) => line.split(","));
    const addresses = user_data.map((user) => user[0]);

    const raw1 = fs.readFileSync("whitelist1.csv", "utf-8");
    const user_data1 = raw1.split("\n").map((line) => line.split(","));
    const addresses1 = user_data1.map((user) => user[0]);

    const duplicated = addresses.filter((x) => addresses1.includes(x));
    console.log(duplicated);

    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    while (user_data.length > 0) {
        console.log(user_data.length);
        let slice = user_data.splice(0, 300);
        let transaction = whitelistTx(
            config,
            new Transaction(),
            slice.map((user) => user[0]),
            slice.map((user) => (Number(user[1]) * 1000000000).toString())
        );

        let res = await provider.signAndExecuteTransaction({ signer, transaction });
        console.log(res);
        await sleep(5000);
    }
})();
