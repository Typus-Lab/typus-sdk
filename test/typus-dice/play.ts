import "src/utils/load_env";
import { TypusConfig } from "src/utils";
import { getPlaygrounds, newGamePlayGuessTx, DrawResult, getDrawResult } from "src/dice";
import { SuiClient } from "@mysten/sui.js/client";

const config = TypusConfig.default("TESTNET");
const provider = new SuiClient({ url: config.rpcEndpoint });

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

    const playgrounds = await getPlaygrounds(provider, config.registry.dice.tailsExp);
    const playground = playgrounds[index];
    console.log(playground);

    const coinType = "0x" + playground.stake_token;

    let coins = (await provider.getCoins({ owner: address, coinType })).data.map((coin) => coin.coinObjectId);
    console.log(coins);

    let transactionBlock = await newGamePlayGuessTx(
        gasBudget,
        config.package.dice,
        "combo_dice", // different from exp dice
        [coinType],
        config.registry.dice.comboDice, // different from exp dice
        config.registry.dice.tailsExp,
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
            config.package.dice,
            "combo_dice", // different from exp dice
            config.registry.dice.comboDice, // different from exp dice
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
