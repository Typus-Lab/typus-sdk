import configs from "../../../config.json";
import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { crankLeave } from "../../../utils/locked-period-vault/locked-period-vault/functions";
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

    const D_TOKEN = "0x2::sui::SUI";
    const B_TOKEN = "0x2::sui::SUI";

    crankLeave(config.PACKAGE.LOCKED_VAULT, tx, [D_TOKEN, B_TOKEN], {
        registry: config.REGISTRY.DOV_SINGLE,
        lockedVaultRegistry: config.REGISTRY.LOCKED_VAULT,
        index: BigInt(0), // 0 Sui Hourly Call, 9 Sui Hourly Put
        clock: CLOCK,
    });

    let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock: tx });

    console.log(res);
})();
