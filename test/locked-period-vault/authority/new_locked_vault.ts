import configs from "../../../config.json";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { newLockedVault } from "../../../utils/locked-period-vault/locked-period-vault/functions";
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

    newLockedVault(config.PACKAGE.LOCKED_VAULT, tx, "0x2::sui::SUI", {
        lockedVaultRegistry: config.REGISTRY.LOCKED_VAULT,
        index: BigInt(0), // 0 Sui Hourly Call, 9 Sui Hourly Put
        unlockTsMs: BigInt(1714723200000), // this Friday
        lockPeriodMs: BigInt(1000 * 24 * 3600 * 7), // a week
        incentivePpm: BigInt(100),
        incentivePeriodMs: BigInt(1000 * 3600),
        capacity: BigInt(1000000000),
        clock: CLOCK,
    });

    let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock: tx });

    console.log(res);
})();
