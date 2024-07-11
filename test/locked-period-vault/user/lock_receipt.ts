import configs from "../../../config.json";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { depositAndLockReceipt } from "../../../utils/locked-period-vault/locked-period-vault/functions";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import "@/utils/load_env";

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));

const config = configs.TESTNET;

const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});
const gasBudget = 100000000;

(async () => {
    const user = keypair.toSuiAddress();
    console.log(user);

    const receipts = ["0x7cf027e30df5604ad9cb1b7292439c8fea9c26820ce3c8b8f41b4bac57cf87ad"];

    let tx = new TransactionBlock();
    tx.setGasBudget(gasBudget);

    tx = depositAndLockReceipt({
        tx,
        typusFrameworkOriginPackageId: config.PACKAGE_ORIGIN.FRAMEWORK,
        typusFrameworkPackageId: config.PACKAGE.FRAMEWORK,
        typusDovSinglePackageId: config.PACKAGE.DOV_SINGLE,
        typusDovSingleRegistry: config.REGISTRY.DOV_SINGLE,
        typeArguments: [config.TOKEN.SUI, config.TOKEN.SUI],
        index: "9",
        coins: (await provider.getCoins({ owner: user, coinType: config.TOKEN.SUI })).data.map((coin) => coin.coinObjectId),
        amount: "0",
        receipts,
        user,
        lockedVaultPackage: config.PACKAGE.LOCKED_VAULT,
        lockedVaultRegistry: config.REGISTRY.LOCKED_VAULT,
        lockActiveShare: "100000000",
        lockWarmupShare: "0",
    });

    let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock: tx });

    console.log(res);
})();
