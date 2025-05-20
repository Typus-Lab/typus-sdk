import "src/utils/load_env";
import { TypusConfig } from "src/utils";
import { SuiClient } from "@mysten/sui/client";
import { getExtendLeaderboardTx } from "src/typus/leaderboard";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { Transaction } from "@mysten/sui/transactions";
import { MNEMONIC } from "mnemonic.json";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let keypair = Ed25519Keypair.deriveKeypair(String(MNEMONIC));

    let key = "trading_competition";
    let id = "0x78e0cb9e3316d7138d4fe90f421e6b246bac6bb35d671ac61b42367a3ad95860";
    let end_ts_ms = "1748919600000";

    let transaction = await getExtendLeaderboardTx(config, new Transaction(), { key, id, end_ts_ms });

    var res = await provider.signAndExecuteTransaction({ signer: keypair, transaction });
    console.log(res);
})();
