import "../load_env";
import config from "../../dice_config.json";
import { waitHistory, getPlaygrounds, parseHistory } from "../../utils/tails-exp-dice/fetch";
import { simulateGame } from "../../utils/tails-exp-dice/view-function";
import { SuiClient, SuiHTTPTransport, getFullnodeUrl } from "@mysten/sui.js/client";
import { WebSocket } from "ws";
import drawKeys from "../../drawKeys.json";

// const provider = new SuiClient({
//     url: config.RPC_ENDPOINT,
// });

// const client = new SuiClient({
//     transport:
//         network in Network && network === Network.MAINNET ? new SentryHttpTransport(networkUrl) : new SuiHTTPTransport({ url: networkUrl }),
// });

// const provider = new SuiClient({ url: config.RPC_ENDPOINT });

const provider = new SuiClient({
    transport: new SuiHTTPTransport({
        url: config.RPC_ENDPOINT,
        WebSocketConstructor: WebSocket as never,
    }),
});

import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
const keypair = Ed25519Keypair.deriveKeypair(String("")); // your mnemoics

const gasBudget = 50000000;
const index = "2";
const amount = "10000000";
const guess_1 = "5000";
const larger_than_1 = true;
const guess_2 = "5000";
const larger_than_2 = true;
const vrf_input_1 = [
    242, 86, 250, 33, 188, 46, 133, 120, 183, 176, 215, 135, 194, 166, 236, 76, 157, 40, 169, 113, 104, 199, 122, 229, 154, 227, 253, 95,
    93, 99, 68, 248, 12, 0, 0, 0, 0, 0, 0, 0,
];
const vrf_input_2 = [
    124, 28, 58, 22, 27, 13, 70, 182, 72, 217, 145, 227, 42, 194, 247, 226, 108, 10, 133, 214, 9, 58, 119, 211, 223, 109, 245, 115, 63, 223,
    204, 239, 12, 0, 0, 0, 0, 0, 0, 0,
];

(async () => {
    const address = keypair.toSuiAddress();
    console.log(address);

    let result = await simulateGame(
        "testnet",
        config.PACKAGE,
        config.REGISTRY,
        index.toString(),
        amount,
        guess_1,
        larger_than_1,
        guess_2,
        larger_than_2,
        vrf_input_1,
        vrf_input_2,
        drawKeys
    );

    console.log(result);
})();
