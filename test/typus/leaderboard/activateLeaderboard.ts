import "src/utils/load_env";
import { TypusConfig } from "src/utils";
import { SuiGrpcClient } from "@mysten/sui/grpc";
import { getActivateLeaderboardTx } from "src/typus/leaderboard";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { Transaction } from "@mysten/sui/transactions";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    const provider = config.gRpcClient();
    let keypair = Ed25519Keypair.deriveKeypair(String(process.env.AUTH_MNEMONIC));

    let key = "trading_competition";
    let start_ts_ms = 1774321200000;
    let end_ts_ms = 1775530800000;
    let address = keypair.toSuiAddress();
    console.log(address);

    let transaction = await getActivateLeaderboardTx(config, new Transaction(), {
        key,
        start_ts_ms: start_ts_ms.toString(),
        end_ts_ms: end_ts_ms.toString(),
    });

    var res = await provider.signAndExecuteTransaction({ signer: keypair, transaction });
    console.log(res);
})();
