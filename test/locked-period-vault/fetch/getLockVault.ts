import configs from "../../../config.json";
import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { LockedVaultRegistry } from "../../../utils/locked-period-vault/locked-period-vault/structs";

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

    const lockedVaultRegistry = await LockedVaultRegistry.fetch(provider, config.REGISTRY.LOCKED_VAULT);
    console.log(lockedVaultRegistry);

    console.log(lockedVaultRegistry.vaults.contents);

    console.log(lockedVaultRegistry.vaults.contents[0].value.lockedReceipts);
})();
