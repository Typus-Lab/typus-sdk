import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { SuiClient } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
import { getSetAirdropTx } from "src/typus/airdrop";
import { TypusConfig } from "src/utils";
import mnemonic from "mnemonic.json";
import * as fs from "fs";
import { assetToDecimal, TOKEN, tokenType } from "src/constants";

(async () => {
    let network: "MAINNET" | "TESTNET" = "TESTNET";
    let tokens: TOKEN[] = ["SUI", "wUSDC", "WBTC", "wETH", "TYPUS"];
    let file = "tlp_compensation_1";

    let config = await TypusConfig.default(network, null);
    let signer = Ed25519Keypair.deriveKeypair(String(mnemonic.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let address = signer.toSuiAddress();
    console.log(address);

    const raw = fs.readFileSync(`${file}.csv`, "utf-8");
    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    // remove headers

    for (let token of tokens) {
        let user_data = raw.split("\r\n").map((line) => line.split(","));
        let header = user_data.splice(0, 1)[0];
        console.log("header:", header);
        let key = `${file}_${token}`;
        let index = header.indexOf(token);
        console.log("index:", index);
        console.log(user_data[0]);

        let sum = 0;
        user_data.forEach((x) => (sum += Math.round(Number(x[index]) * 10 ** assetToDecimal(token)!)));
        console.log("sum:", sum);

        while (user_data.length > 0) {
            console.log("users:", user_data.length);
            let slice = user_data.splice(0, 300);

            let coins = (
                await provider.getCoins({
                    owner: address,
                    coinType: tokenType[network][token],
                })
            ).data.map((coin) => coin.coinObjectId);
            console.log("coins:", coins.length);

            let transaction = await getSetAirdropTx(config, new Transaction(), {
                typeArguments: [tokenType[network][token]],
                key,
                coins,
                amount: sum.toString(),
                users: slice.map((user) => user[0]),
                values: slice.map((user) => Math.round(Number(user[index]) * 10 ** assetToDecimal(token)!).toString()),
            });

            let res = await provider.signAndExecuteTransaction({ signer, transaction });
            console.log(res);
            await sleep(5000);
        }
    }
})();
