import "../load_env";
import configs from "../../config.json";
import { waitHistory, getPlaygrounds, parseHistory } from "../../utils/tails-exp-dice/fetch";
import { newGamePlayGuessTx } from "../../utils/tails-exp-dice/user-entry";
import { SuiClient, SuiHTTPTransport, getFullnodeUrl } from "@mysten/sui.js/client";
// import { WebSocket } from "ws";
import { simulateGame, DrawResult } from "../../utils/tails-exp-dice/view-function";
import { getDrawResult } from "../../utils/tails-exp-dice/api";

const config = configs.MAINNET;
const provider = new SuiClient({ url: config.RPC_ENDPOINT });

import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));

const gasBudget = 50000000;
const index = 0; // 0 SUI
const amount = "1000000000";
const guess_1 = "5000";
const larger_than_1 = true;
const guess_2 = "5000";
const larger_than_2 = true;

(async () => {
    const address = keypair.toSuiAddress();
    console.log(address);

    const playgrounds = await getPlaygrounds(provider, config.REGISTRY.EXP_GUESS);
    const playground = playgrounds[index];
    console.log(playground);

    const coinType = "0x" + playground.stake_token;

    let coins = (await provider.getCoins({ owner: address, coinType })).data.map((coin) => coin.coinObjectId);

    let transactionBlock = await newGamePlayGuessTx(
        gasBudget,
        config.PACKAGE.EXP_GUESS,
        [coinType],
        config.REGISTRY.EXP_GUESS,
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

    // Old Version

    const game_id = res.events![1].parsedJson!["game_id"];
    console.log("game_id : " + game_id);

    const vrf_input_1 = res.events![1].parsedJson!["vrf_input_1"];
    const vrf_input_2 = res.events![1].parsedJson!["vrf_input_2"];

    const drawResult = await getDrawResult(
        "mainnet",
        config.PACKAGE.EXP_GUESS,
        config.REGISTRY.EXP_GUESS,
        index.toString(),
        amount,
        guess_1,
        larger_than_1,
        guess_2,
        larger_than_2,
        vrf_input_1,
        vrf_input_2
    );

    // New Version

    // const result = res.events![2].parsedJson!;
    // const drawResult = result as DrawResult;
    console.log(drawResult);
})();
