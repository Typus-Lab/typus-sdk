import { TypusConfig } from "src/utils";
import { SuiClient } from "@mysten/sui/client";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { installEcosystemManagerCapEntry } from "src/typus-perp/typus_perp/admin/functions";
import { Transaction } from "@mysten/sui/transactions";

import mnemonic from "../../../mnemonic.json";

(async () => {
    let keypair = Ed25519Keypair.deriveKeypair(String(mnemonic.MNEMONIC));
    let config = await TypusConfig.default("TESTNET", null);
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let address = keypair.toSuiAddress();
    console.log(address);

    let tx = new Transaction();

    installEcosystemManagerCapEntry(tx, {
        version: config.version.perp.perp,
        typusEcosystemVersion: config.version.typus,
    });

    let res = await provider.signAndExecuteTransaction({ signer: keypair, transaction: tx });

    console.log(res);
})();
