import "src/utils/load_env";
import { TypusConfig } from "src/utils";
import { SuiClient } from "@mysten/sui/client";
import { getActivateLeaderboardTx } from "src/typus/leaderboard";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { Transaction } from "@mysten/sui/transactions";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));

    let key = "bidding_leaderboard";
    let start_ts_ms = 1716278400000;
    let address = keypair.toSuiAddress();
    console.log(address);

    let transaction = await getActivateLeaderboardTx(config, new Transaction(), {
        key,
        start_ts_ms: start_ts_ms.toString(),
        end_ts_ms: (start_ts_ms + 100 * 365 * 24 * 3600 * 1000).toString(),
    });

    var res = await provider.signAndExecuteTransaction({ signer: keypair, transaction });
    console.log(res);
})();
