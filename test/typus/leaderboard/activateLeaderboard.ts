import configs from "../../../config.json";
import { SuiClient } from "@mysten/sui.js/client";
import { getActivateLeaderboardTx } from "../../../utils/leaderboard/authority-entry";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";

import mnemonic from "../../../mnemonic.json";

const config = configs.TESTNET;
const keypair = Ed25519Keypair.deriveKeypair(String(mnemonic.MNEMONIC));
const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});
const gasBudget = 100000000;

const KEY = "bidding_leaderboard";

const start_ts_ms = 1716278400000;

(async () => {
    const address = keypair.toSuiAddress();
    console.log(address);

    var transactionBlock = await getActivateLeaderboardTx(
        gasBudget,
        config.PACKAGE.TYPUS,
        config.TYPUS_VERSION,
        config.REGISTRY.LEADERBOARD,
        KEY,
        start_ts_ms.toString(),
        (start_ts_ms + 100 * 365 * 24 * 3600 * 1000).toString()
    );

    var res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock });
    console.log(res);
})();
