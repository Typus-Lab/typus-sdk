import "src/utils/load_env";
import { TypusConfig } from "src/utils";
import { SuiGrpcClient } from "@mysten/sui/grpc";
import { getDeactivateLeaderboardTx } from "src/typus/leaderboard";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { Transaction } from "@mysten/sui/transactions";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    const provider = config.gRpcClient();
    let keypair = Ed25519Keypair.deriveKeypair(String(process.env.AUTH_MNEMONIC));

    let key = "trading_competition";
    let id = "0x00d9d31220cc3b1239b95cd3250cef078576c1c4452c839654e5fa88793be79b";

    let transaction = await getDeactivateLeaderboardTx(config, new Transaction(), { key, id });

    var res = await provider.signAndExecuteTransaction({ signer: keypair, transaction });
    console.log(res);
})();
