import { TypusConfig } from "src/utils";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { installEcosystemManagerCapEntry } from "src/typus-perp";
import { TransactionBlock } from "@mysten/sui.js/transactions";

import mnemonic from "../../../mnemonic.json";

(async () => {
    let keypair = Ed25519Keypair.deriveKeypair(String(mnemonic.MNEMONIC));
    let config = await TypusConfig.default("TESTNET");
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let address = keypair.toSuiAddress();
    console.log(address);

    let tx = new TransactionBlock();
    tx.setGasBudget(100000000);

    installEcosystemManagerCapEntry(tx, {
        version: config.version.perp,
        typusEcosystemVersion: config.version.typus,
    });

    let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock: tx });

    console.log(res);
})();
