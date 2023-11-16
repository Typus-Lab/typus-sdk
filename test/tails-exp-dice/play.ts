import "../load_env";
import config from "../../dice_config.json";
import { JsonRpcProvider, Connection, Ed25519Keypair, RawSigner } from "@mysten/sui.js";
import { getHistory, getPlaygrounds } from "../../utils/tails-exp-dice/fetch";
import { newGamePlayGuessTx } from "../../utils/tails-exp-dice/user-entry";

const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const signer = new RawSigner(keypair, provider);

const gasBudget = 50000000;
const index = 1;
const amount = "10000000";
const guess_1 = "5000";
const larger_than_1 = true;
const guess_2 = "5000";
const larger_than_2 = true;

(async () => {
    const address = await signer.getAddress();
    console.log(address);

    const playgrounds = await getPlaygrounds(provider, config.REGISTRY);
    const playground = playgrounds[index];
    console.log(playground);

    const coinType = "0x" + playground.stake_token;

    let coins = (await provider.getCoins({ owner: await signer.getAddress(), coinType })).data.map((coin) => coin.coinObjectId);

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

    let res = await signer.signAndExecuteTransactionBlock({ transactionBlock, options: { showEvents: true } });
    console.log(res);

    const game_id = res.events![0].parsedJson!["game_id"];
    console.log(game_id);

    // waiting for result

    while (true) {
        const history = await getHistory(provider, config.PACKAGE, playgrounds);
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
