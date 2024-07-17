import configs from "../../../../config.json";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { cancelTradingOrder, getUserOrders } from "../../../../src";
import "../../../../src/utils/load_env";

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));

const config = configs.TESTNET;

const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});

(async () => {
    const user = keypair.toSuiAddress();
    console.log(user);

    var tx = new TransactionBlock();

    const orders = await getUserOrders(provider, config, user);
    const order = orders[0];
    console.log(order);

    tx = await cancelTradingOrder(config, {
        tx,
        order,
        user,
    });

    let dryrunRes = await provider.devInspectTransactionBlock({
        transactionBlock: tx,
        sender: user,
    });
    console.log(dryrunRes.events.filter((e) => e.type.endsWith("CancelTradingOrderEvent"))[0].parsedJson);

    const res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock: tx });
    console.log(res);
})();
