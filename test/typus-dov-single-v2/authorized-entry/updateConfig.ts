import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { SuiClient } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
import { getUpdateConfigTx } from "src/typus-dov-single-v2";
import { TypusConfig } from "src/utils";

(async () => {
    let config = await TypusConfig.default("TESTNET", "https://rpc-testnet.suiscan.xyz:443");
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let transaction = await getUpdateConfigTx(config, new Transaction(), [
        { index: "0", input: { auctionDurationTsMs: "600000", recoupDelayTsMs: "3600000" } },
        { index: "9", input: { auctionDurationTsMs: "600000", recoupDelayTsMs: "3600000" } },
        { index: "19", input: { auctionDurationTsMs: "600000", recoupDelayTsMs: "3600000" } },
        { index: "24", input: { auctionDurationTsMs: "600000", recoupDelayTsMs: "3600000" } },
    ]);

    let res = await provider.signAndExecuteTransaction({ signer, transaction });
    console.log(res);
})();
