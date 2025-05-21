import "src/utils/load_env";
import { TypusConfig } from "src/utils";
import { SuiClient } from "@mysten/sui/client";
import { getDeactivateLeaderboardTx } from "src/typus/leaderboard";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { Transaction } from "@mysten/sui/transactions";
import { MNEMONIC } from "mnemonic.json";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let keypair = Ed25519Keypair.deriveKeypair(String(MNEMONIC));

    let key = "trading_competition";
    let id = "0x21491761bd4428a322e81785a7166616008b988797fdf656d47521f395921be7";

    let transaction = await getDeactivateLeaderboardTx(config, new Transaction(), { key, id });

    var res = await provider.signAndExecuteTransaction({ signer: keypair, transaction });
    console.log(res);
})();
