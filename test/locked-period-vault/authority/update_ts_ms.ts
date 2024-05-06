import configs from "../../../config.json";
import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { updateTsMs } from "../../../utils/locked-period-vault/locked-period-vault/functions";
import { REGISTRY, PUBLISHED_AT } from "../../../utils/locked-period-vault/index";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { CLOCK } from "../../../constants";

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

    updateTsMs(config.PACKAGE.LOCKED_VAULT, tx, {
        lockedVaultRegistry: config.REGISTRY.LOCKED_VAULT,
        index: BigInt(0),
        tsMs: BigInt(1714460400000),
    });

    let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock: tx });

    console.log(res);
})();
