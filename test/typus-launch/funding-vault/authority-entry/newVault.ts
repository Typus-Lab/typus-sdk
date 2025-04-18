import "src/utils/load_env";
import { newVault } from "src/typus-launch/funding-vault";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { SuiClient } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
import { TypusConfig } from "src/utils";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let transaction = new Transaction();
    newVault(config, transaction, {
        typeArguments: ["0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"],
        config: [
            "1731484800000", // I_ACTIVATION_TS_MS
            "1732089600000", // I_EXPIRATION_TS_MS
            "10000000000000", // I_CAPACITY
            "1000000000", // I_LOT_SIZE
            "10000000000", // I_MIN_SIZE
            "1000", // I_FEE_BP
            "1800000", // I_UNSUBSCRIBE_PERIOD
            "3000", // I_INTEREST_RATE_BP
            "31536000000", // I_INTEREST_PERIOD
        ],
    });
    let res = await provider.signAndExecuteTransaction({ signer, transaction });
    console.log(res);
})();
