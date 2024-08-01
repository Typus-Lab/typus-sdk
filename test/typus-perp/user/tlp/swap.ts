import configs from "../../../../config.json";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { tokenType } from "src/constants";
import { NETWORK, swap } from "src/typus-perp";
import { createPythClient } from "src/utils";

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));

const config = configs.TESTNET;

const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});
const gasBudget = 100000000;

(async () => {
    const user = keypair.toSuiAddress();
    console.log(user);

    const pythClient = createPythClient(provider, NETWORK);

    // INPUT
    const FROM_TOKEN = "USDT";
    const TO_TOKEN = "USDC";

    // coins
    const coins = (
        await provider.getCoins({
            owner: user,
            coinType: tokenType[NETWORK][FROM_TOKEN],
        })
    ).data.map((coin) => coin.coinObjectId);
    console.log(coins.length);

    let tx = new TransactionBlock();
    tx.setGasBudget(gasBudget);

    tx = await swap(config, {
        pythClient,
        tx,
        coins,
        amount: "1000000",
        FROM_TOKEN,
        TO_TOKEN,
        user,
    });

    let dryrunRes = await provider.devInspectTransactionBlock({
        transactionBlock: tx,
        sender: user,
    });
    console.log(dryrunRes.events.filter((e) => e.type.endsWith("SwapEvent"))[0].parsedJson);

    let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock: tx });
    console.log(res);
    // https://testnet.suivision.xyz/txblock/8TDGppninwYxBqpNtao3mMa936nemU3rdMqA8xesJREA
})();
