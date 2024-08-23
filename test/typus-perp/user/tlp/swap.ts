import "src/utils/load_env";
import { TypusConfig } from "src/utils";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { TOKEN, tokenType } from "src/constants";
import { NETWORK, swap } from "src/typus-perp";
import { createPythClient } from "src/utils";

(async () => {
    let keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let config = TypusConfig.default("TESTNET");
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let user = keypair.toSuiAddress();
    console.log(user);

    let pythClient = createPythClient(provider, NETWORK);

    // INPUT
    let FROM_TOKEN: TOKEN = "USDT";
    let TO_TOKEN: TOKEN = "USDC";

    // coins
    let coins = (
        await provider.getCoins({
            owner: user,
            coinType: tokenType[NETWORK][FROM_TOKEN],
        })
    ).data.map((coin) => coin.coinObjectId);
    console.log(coins.length);

    let tx = new TransactionBlock();
    tx.setGasBudget(100000000);

    tx = await swap(config, tx, pythClient, {
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
