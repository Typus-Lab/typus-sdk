import "../load_env";
import config from "../../dice_config.json";
import { getPlaygrounds } from "../../utils/typus-dice/fetch";
import { newGamePlayGuessTx } from "../../utils/typus-dice/user-entry";
import { SuiClient, SuiHTTPTransport } from "@mysten/sui.js/client";
import { WebSocket } from "ws";
import { getDrawResult } from "../../utils/typus-dice/api";

const provider = new SuiClient({
    transport: new SuiHTTPTransport({
        url: config.RPC_ENDPOINT,
        WebSocketConstructor: WebSocket as never,
    }),
});

import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));

const gasBudget = 50000000;
const index = 0;
const amount = "10000000";
const guess_1 = "5000";
const larger_than_1 = true;
const guess_2 = "5000";
const larger_than_2 = true;

(async () => {
    const address = keypair.toSuiAddress();
    console.log(address);

    const playgrounds = await getPlaygrounds(provider, config.TYPUS_DICE_REGISTRY);
    const playground = playgrounds[index];
    console.log(playground);

    const coinType = "0x" + playground.stake_token;

    let coins = (await provider.getCoins({ owner: address, coinType })).data.map((coin) => coin.coinObjectId);

    let transactionBlock = await newGamePlayGuessTx(
        gasBudget,
        config.PACKAGE,
        [coinType],
        config.TYPUS_DICE_REGISTRY,
        config.REGISTRY,
        index.toString(),
        coins,
        amount,
        guess_1,
        larger_than_1,
        guess_2,
        larger_than_2
    );

    // Send Play
    let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock, options: { showEvents: true } });
    console.log(res);
    const game_id = res.events![1].parsedJson!["game_id"];
    console.log("game_id : " + game_id);

    const vrf_input_1 = res.events![1].parsedJson!["vrf_input_1"];
    const vrf_input_2 = res.events![1].parsedJson!["vrf_input_2"];

    const drawResult = await getDrawResult(
        "testnet",
        config.PACKAGE,
        config.TYPUS_DICE_REGISTRY,
        index.toString(),
        amount,
        guess_1,
        larger_than_1,
        guess_2,
        larger_than_2,
        vrf_input_1,
        vrf_input_2
    );

    console.log(drawResult);
})();
