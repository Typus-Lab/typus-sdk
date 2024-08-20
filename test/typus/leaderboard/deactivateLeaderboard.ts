import { TypusConfig } from "src/utils";
import { SuiClient } from "@mysten/sui.js/client";
import { getDeactivateLeaderboardTx } from "src/typus/leaderboard";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";

import mnemonic from "../../../mnemonic.json";

const config = TypusConfig.default("TESTNET");
const keypair = Ed25519Keypair.deriveKeypair(String(mnemonic.MNEMONIC));
const provider = new SuiClient({
    url: config.rpcEndpoint,
});
const gasBudget = 100000000;

const KEY = "bidding_leaderboard";
const ID = "0x3017fc6d743f73ada74c3754de40aa5b399840cb09ca276cb87916660d2c2bdc";

(async () => {
    const address = keypair.toSuiAddress();
    console.log(address);

    var transactionBlock = await getDeactivateLeaderboardTx(
        gasBudget,
        config.package.typus,
        config.version.typus,
        config.registry.typus.leaderboard,
        KEY,
        ID
    );

    var res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock });
    console.log(res);
})();
