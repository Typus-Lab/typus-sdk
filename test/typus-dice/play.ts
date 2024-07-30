import "../../src/utils/load_env";
import configs from "../../config.json";
import { getPlaygrounds, parseHistory, newGamePlayGuessTx, simulateGame, DrawResult, getDrawResult } from "../../src";
import { SuiClient, SuiHTTPTransport, getFullnodeUrl } from "@mysten/sui.js/client";

const config = configs.TESTNET;
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
    console.log(coins);

    let transactionBlock = await newGamePlayGuessTx(
        gasBudget,
        config.PACKAGE.DICE,
        "combo_dice", // different from exp dice
        [coinType],
        config.REGISTRY.TYPUS_DICE, // different from exp dice
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

    try {
        // Old Version
        const game_id = res.events![1].parsedJson!["game_id"];
        console.log("game_id : " + game_id);

        const vrf_input_1 = res.events![1].parsedJson!["vrf_input_1"];
        const vrf_input_2 = res.events![1].parsedJson!["vrf_input_2"];

        const drawResultV1 = await getDrawResult(
            "testnet",
            config.PACKAGE.DICE,
            "combo_dice", // different from exp dice
            config.REGISTRY.TYPUS_DICE, // different from exp dice
            index.toString(),
            amount,
            guess_1,
            larger_than_1,
            guess_2,
            larger_than_2,
            vrf_input_1,
            vrf_input_2
        );
        console.log(drawResultV1);
    } catch (e) {}

    try {
        // New Version
        const result = res.events![2].parsedJson!;
        const drawResultV2 = result as DrawResult;
        console.log(drawResultV2);
    } catch (e) {}
})();
