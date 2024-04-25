import configs from "../../../config.json";
import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { addIncentive } from "../../../utils/locked-period-vault/locked-period-vault/functions";
import { REGISTRY, PUBLISHED_AT } from "../../../utils/locked-period-vault/index";
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

    let [coin] = tx.splitCoins(tx.gas, [tx.pure(10000000000)]);

    addIncentive(tx, "0x2::sui::SUI", {
        lockedVaultRegistry: REGISTRY,
        index: BigInt(0), // 0 Sui Hourly Call, 9 Sui Hourly Put
        coin,
    });

    let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock: tx });

    console.log(res);
})();
