import configs from "../../../config.json";
import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { updateCapacity } from "../../../utils/locked-period-vault/locked-period-vault/functions";
import { REGISTRY, PUBLISHED_AT } from "../../../utils/locked-period-vault/index";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { CLOCK } from "@/constants";

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

    updateCapacity(config.PACKAGE.LOCKED_VAULT, tx, {
        lockedVaultRegistry: config.REGISTRY.LOCKED_VAULT,
        index: BigInt(0),
        capacity: BigInt(0),
    });

    let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock: tx });

    console.log(res);
})();
