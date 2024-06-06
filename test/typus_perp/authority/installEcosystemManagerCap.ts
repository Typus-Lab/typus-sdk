import dovConfigs from "../../../config.json";
import configs from "../../../perp.json";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { installEcosystemManagerCap } from "../../../utils/typus_perp/admin/functions";
import { TransactionBlock } from "@mysten/sui.js/transactions";

import mnemonic from "../../../mnemonic.json";
const keypair = Ed25519Keypair.deriveKeypair(String(mnemonic.MNEMONIC));

const config = configs.TESTNET;
const dovConfig = dovConfigs.TESTNET;

const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});
const gasBudget = 100000000;

(async () => {
    const address = keypair.toSuiAddress();
    console.log(address);

    let tx = new TransactionBlock();
    tx.setGasBudget(gasBudget);

    const managerCap = tx.moveCall({
        target: `${dovConfig.PACKAGE.TYPUS}::ecosystem::issue_manager_cap`,
        arguments: [tx.object(dovConfig.TYPUS_VERSION)],
    });

    installEcosystemManagerCap(tx, {
        version: config.TYPUS_PERP_VERSION,
        managerCap,
    });

    let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock: tx });

    console.log(res);
})();
