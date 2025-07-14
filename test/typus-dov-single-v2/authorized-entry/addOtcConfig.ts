import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { SuiClient } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
import { TypusConfig } from "src/utils";
import { addOtcConfig } from "src/typus-dov-single-v2/otc-entry";
import { getVaults } from "src/typus-dov-single-v2";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let index = "43";
    let vault = (await getVaults(config, { indexes: [index] }))[index];
    // console.log(vault);
    let transaction = new Transaction();
    let users = [
        "0xdc72506f269feb89822c13e66b282bc52c5724c27e575a04cbec949a13671d13",
        "0xb6b29d18c728503fb59cc59ecbe52611d26b2746b2cedc8d38cabf81428cae6c",
        "0xf63aa0b102ddaeb791e67c26237488d1e2be10fb0bed6c022139cb354b07bc18",
    ];
    for (let user of users) {
        await addOtcConfig(config, transaction, {
            user,
            index,
            round: vault.info.round,
            size: "100000000",
            price: "280000",
            fee_bp: "0",
            // expiration_ts_ms: (BigInt(vault.info.activationTsMs) + BigInt(120 * 60 * 1000)).toString(),
            expiration_ts_ms: "1752552000000",
        });
    }
    let res = await provider.signAndExecuteTransaction({ signer, transaction });
    console.log(res);
})();
