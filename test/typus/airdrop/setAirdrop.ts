import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { SuiClient } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
import { getSetAirdropTx } from "src/typus/airdrop";
import { TypusConfig } from "src/utils";
import mnemonic from "mnemonic.json";
import * as fs from "fs";
import { TOKEN, tokenType } from "src/constants";

(async () => {
    let network: "MAINNET" | "TESTNET" = "TESTNET";
    let key = "tlp_compensation_1106";
    let token: TOKEN = "wUSDC";
    let index = 2;

    let config = await TypusConfig.default(network, null);
    let signer = Ed25519Keypair.deriveKeypair(String(mnemonic.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let address = signer.toSuiAddress();
    console.log(address);

    const raw = fs.readFileSync(`${key}.csv`, "utf-8");
    const user_data = raw.split("\r\n").map((line) => line.split(","));
    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    // remove headers
    let header = user_data.splice(0, 1)[0];
    console.log(header);
    console.log(user_data[0]);

    let sum = 0;
    user_data.forEach((x) => (sum += Number(x[index])));
    console.log(sum);

    while (user_data.length > 0) {
        console.log(user_data.length);
        let slice = user_data.splice(0, 300);

        let coins = (
            await provider.getCoins({
                owner: address,
                coinType: tokenType[network][token],
            })
        ).data.map((coin) => coin.coinObjectId);

        let transaction = await getSetAirdropTx(config, new Transaction(), {
            typeArguments: [tokenType[network][token]],
            key,
            coins,
            amount: sum.toString(),
            users: slice.map((user) => user[0]),
            values: slice.map((user) => user[index]),
        });

        let res = await provider.signAndExecuteTransaction({ signer, transaction });
        console.log(res);
        await sleep(5000);
    }
})();
