import "src/utils/load_env";
import { TypusConfig } from "src/utils";
import { SuiClient } from "@mysten/sui.js/client";
import { getActivateLeaderboardTx } from "src/typus/leaderboard";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { TransactionBlock } from "@mysten/sui.js/dist/cjs/transactions";

(async () => {
    let config = await TypusConfig.default("TESTNET");
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));

    let key = "bidding_leaderboard";
    let start_ts_ms = 1716278400000;
    let address = keypair.toSuiAddress();
    console.log(address);

    let transactionBlock = await getActivateLeaderboardTx(config, new TransactionBlock(), {
        key,
        start_ts_ms: start_ts_ms.toString(),
        end_ts_ms: (start_ts_ms + 100 * 365 * 24 * 3600 * 1000).toString(),
    });
    transactionBlock.setGasBudget(100000000);

    var res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock });
    console.log(res);
})();
