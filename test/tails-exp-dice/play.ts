import "../load_env";
import config from "../../dice_config.json";
import { getHistory, getPlaygrounds } from "../../utils/tails-exp-dice/fetch";
import { newGamePlayGuessTx } from "../../utils/tails-exp-dice/user-entry";
import { SuiClient } from "@mysten/sui.js/client";

const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
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

    const playgrounds = await getPlaygrounds(provider, config.REGISTRY);
    const playground = playgrounds[index];
    console.log(playground);

    const coinType = "0x" + playground.stake_token;

    let coins = (await provider.getCoins({ owner: address, coinType })).data.map((coin) => coin.coinObjectId);

    let transactionBlock = await newGamePlayGuessTx(
        gasBudget,
        config.PACKAGE,
        [coinType],
        config.REGISTRY,
        index.toString(),
        coins,
        amount,
        guess_1,
        larger_than_1,
        guess_2,
        larger_than_2
    );

    let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock, options: { showEvents: true } });
    console.log(res);

    const game_id = res.events![0].parsedJson!["game_id"];
    console.log("game_id : " + game_id);

    // waiting for result

    while (true) {
        const history = await getHistory(provider, config.PACKAGE_ORIGIN, playgrounds);
        // console.log(history);
        const userHistory = history.filter((h) => h.player == address);
        // console.log(userHistory);
        const newest = userHistory[0];
        if (newest.game_id == game_id) {
            console.log(newest);
            break;
        } else {
            console.log("Waiting...");
        }
    }
})();
