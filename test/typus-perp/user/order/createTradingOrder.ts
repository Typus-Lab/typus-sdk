import configs from "config.json";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { createTradingOrder, NETWORK } from "src/typus-perp";
import { createPythClient } from "src/utils";
import { tokenType } from "src/constants";
import "src/utils/load_env";

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));

const config = configs.TESTNET;

const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});

(async () => {
    const address = keypair.toSuiAddress();
    console.log(address);

    var tx = new TransactionBlock();

    // INPUTS
    const cToken = "USDT";
    const tradingToken = "SUI";

    const pythClient = createPythClient(provider, NETWORK);

    const coins = (
        await provider.getCoins({
            owner: address,
            coinType: tokenType[NETWORK][cToken],
        })
    ).data.map((coin) => coin.coinObjectId);

    tx = await createTradingOrder(config, {
        pythClient,
        tx,
        coins,
        cToken,
        amount: "1000000",
        tradingToken,
        size: "1000000000",
        triggerPrice: "100000000",
        isLong: false,
        isStopOrder: false,
        reduceOnly: false,
        linkedPositionId: null,
    });

    let dryrunRes = await provider.devInspectTransactionBlock({
        transactionBlock: tx,
        sender: address,
    });
    console.log(dryrunRes.events.filter((e) => e.type.endsWith("CreateTradingOrderEvent"))[0].parsedJson);
    console.log(dryrunRes.events.filter((e) => e.type.endsWith("RealizeFundingEvent"))); // only exists if the order size is reduced ( with linked_position_id provided)
    console.log(dryrunRes.events.filter((e) => e.type.endsWith("OrderFilledEvent"))); // if the order is not filled, there will be no OrderFilledEvent

    let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock: tx });
    console.log(res);
})();
