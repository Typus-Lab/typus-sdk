import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { SuiClient } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
import { getSetAirdropTx } from "src/typus/airdrop";
import { TypusConfig } from "src/utils";
import mnemonic from "mnemonic.json";
import * as fs from "fs";
import { tokenType } from "src/constants";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    let signer = Ed25519Keypair.deriveKeypair(String(mnemonic.MNEMONIC_2));
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let address = signer.toSuiAddress();
    console.log(address);

    const raw = fs.readFileSync("trading_competition_0603.csv", "utf-8");
    const user_data = raw.split("\n").map((line) => line.split(","));
    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    // remove headers
    user_data.splice(0, 1);
    console.log(user_data[0]);

    let coins = (
        await provider.getCoins({
            owner: address,
            coinType: tokenType["MAINNET"]["SUI"],
        })
    ).data.map((coin) => coin.coinObjectId);

    let sum = 0;
    user_data.forEach((x) => (sum += Number(x[1])));
    console.log(sum);

    while (user_data.length > 0) {
        console.log(user_data.length);
        let slice = user_data.splice(0, 300);

        let transaction = await getSetAirdropTx(config, new Transaction(), {
            typeArguments: [tokenType["MAINNET"]["SUI"]],
            key: "trading_competition",
            coins,
            amount: "2600000000000",
            users: slice.map((user) => user[0]),
            values: slice.map((user) => user[1]),
        });

        let res = await provider.signAndExecuteTransaction({ signer, transaction });
        console.log(res);
        await sleep(5000);
    }
})();
