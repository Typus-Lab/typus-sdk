import "src/utils/load_env";
import { TypusConfig } from "src/utils";
import { getPlaygrounds, newGamePlayGuessTx, DrawResult, getDrawResult } from "src/dice";
import { SuiClient } from "@mysten/sui.js/client";

import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { TransactionBlock } from "@mysten/sui.js/dist/cjs/transactions";

(async () => {
    let network: "MAINNET" | "TESTNET" = "TESTNET";
    let module: "combo_dice" | "tails_exp" = "tails_exp";
    let config = await TypusConfig.default(network);
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let user = keypair.toSuiAddress();

    let index = "0";
    let amount = "1000000000";
    let guess_1 = "5000";
    let larger_than_1 = true;
    let guess_2 = "5000";
    let larger_than_2 = true;

    let playgrounds = await getPlaygrounds(config, { module });
    let playground = playgrounds[index];
    let coinType = "0x" + playground.stake_token;
    let coins = (await provider.getCoins({ owner: user, coinType })).data.map((coin) => coin.coinObjectId);

    let transactionBlock = await newGamePlayGuessTx(config, new TransactionBlock(), {
        module,
        typeArguments: [coinType],
        index,
        coins,
        amount,
        guess_1,
        larger_than_1,
        guess_2,
        larger_than_2,
    });
    transactionBlock.setGasBudget(100000000);
    let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock, options: { showEvents: true } });
    console.log(res);

    try {
        // Old Version
        let game_id = res.events![1].parsedJson!["game_id"];
        console.log("game_id : " + game_id);

        let vrf_input_1 = res.events![1].parsedJson!["vrf_input_1"];
        let vrf_input_2 = res.events![1].parsedJson!["vrf_input_2"];

        let drawResultV1 = await getDrawResult(config, {
            network,
            module,
            index,
            amount,
            guess_1,
            larger_than_1,
            guess_2,
            larger_than_2,
            vrf_input_1,
            vrf_input_2,
        });
        console.log(drawResultV1);
    } catch (e) {}

    try {
        // New Version
        let result = res.events![2].parsedJson!;
        let drawResultV2 = result as DrawResult;
        console.log(drawResultV2);
    } catch (e) {}
})();
