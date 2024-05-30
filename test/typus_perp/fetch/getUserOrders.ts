import configs from "../../../config.json";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getUserPositions } from "../../../utils/typus_perp/trading/functions";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import "../../load_env";

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));

const config = configs.TESTNET;

const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});
const gasBudget = 100000000;

(async () => {
    const user = keypair.toSuiAddress();
    console.log(user);

    let tx = new TransactionBlock();
    tx.setGasBudget(gasBudget);

    viewUser(config.PACKAGE.LOCKED_VAULT, tx, {
        registry: config.REGISTRY.DOV_SINGLE,
        lockedVaultRegistry: config.REGISTRY.LOCKED_VAULT,
        user,
    });

    let res = await provider.devInspectTransactionBlock({ sender: user, transactionBlock: tx });

    // @ts-ignore
    const returnValues = res.results[0].returnValues[0][0];

    const lockedReceipts = readVecLockedReceipt(Uint8Array.from(returnValues));
    console.log(lockedReceipts);
})();
