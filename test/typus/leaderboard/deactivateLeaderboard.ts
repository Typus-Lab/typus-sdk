import "src/utils/load_env";
import { TypusConfig } from "src/utils";
import { SuiClient } from "@mysten/sui.js/client";
import { getDeactivateLeaderboardTx } from "src/typus/leaderboard";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { TransactionBlock } from "@mysten/sui.js/dist/cjs/transactions";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));

    let key = "bidding_leaderboard";
    let id = "0x3017fc6d743f73ada74c3754de40aa5b399840cb09ca276cb87916660d2c2bdc";

    let transactionBlock = await getDeactivateLeaderboardTx(config, new TransactionBlock(), { key, id });
    transactionBlock.setGasBudget(100000000);

    var res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock });
    console.log(res);
})();
