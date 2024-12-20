import "src/utils/load_env";
import { TypusConfig } from "src/utils";
import { SuiClient } from "@mysten/sui/client";
import { getDeactivateLeaderboardTx } from "src/typus/leaderboard";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { Transaction } from "@mysten/sui/transactions";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));

    let key = "bidding_leaderboard";
    let id = "0x3017fc6d743f73ada74c3754de40aa5b399840cb09ca276cb87916660d2c2bdc";

    let transaction = await getDeactivateLeaderboardTx(config, new Transaction(), { key, id });

    var res = await provider.signAndExecuteTransaction({ signer: keypair, transaction });
    console.log(res);
})();
