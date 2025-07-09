import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { SuiClient } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
import { TypusConfig } from "src/utils";
import { addOtcConfig } from "src/typus-dov-single-v2/otc-entry";
import { getVaults } from "src/typus-dov-single-v2";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    config.package.dovSingle = "0x3beedf5eb385f2ec5d77df5c5f8a7bf9a4b908908a5424262acf3830595685f3";
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let index = "125";
    let vault = (await getVaults(config, { indexes: [index] }))[index];
    // console.log(vault);
    let transaction = new Transaction();
    let users = ["0x3774f5e22fb66c928e60beedf9347704e2b703ed7d415058aedfcf4162bd522e"];
    for (let user of users) {
        await addOtcConfig(config, transaction, {
            user,
            index,
            round: vault.info.round,
            size: "10000",
            price: "760000",
            fee_bp: "0",
            expiration_ts_ms: (BigInt(vault.info.activationTsMs) + BigInt(150 * 60 * 1000)).toString(),
        });
    }
    let res = await provider.signAndExecuteTransaction({ signer, transaction });
    console.log(res);
})();
