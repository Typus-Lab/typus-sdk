import configs from "config.json";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { installEcosystemManagerCapEntry } from "src/typus-perp";
import { TransactionBlock } from "@mysten/sui.js/transactions";

import mnemonic from "../../../mnemonic.json";
const keypair = Ed25519Keypair.deriveKeypair(String(mnemonic.MNEMONIC));

const config = configs.TESTNET;

const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});
const gasBudget = 100000000;

(async () => {
    const address = keypair.toSuiAddress();
    console.log(address);

    let tx = new TransactionBlock();
    tx.setGasBudget(gasBudget);

    installEcosystemManagerCapEntry(tx, {
        version: config.OBJECT.TYPUS_PERP_VERSION,
        typusEcosystemVersion: config.OBJECT.TYPUS_VERSION,
    });

    let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock: tx });

    console.log(res);
})();
