import configs from "../../../config.json";
import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { depositAndLockReceipt, lockReceipt } from "../../../utils/locked-period-vault/locked-period-vault/functions";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { CLOCK } from "../../../constants";
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

    tx = depositAndLockReceipt({
        tx,
        typusFrameworkOriginPackageId: config.PACKAGE_ORIGIN.FRAMEWORK,
        typusFrameworkPackageId: config.PACKAGE.FRAMEWORK,
        typusDovSinglePackageId: config.PACKAGE.DOV_SINGLE,
        typusDovSingleRegistry: config.REGISTRY.DOV_SINGLE,
        typeArguments: [config.TOKEN.SUI, config.TOKEN.SUI],
        index: "0",
        coins: (await provider.getCoins({ owner: user, coinType: config.TOKEN.SUI })).data.map((coin) => coin.coinObjectId),
        amount: "10000000000",
        receipts: [],
        user,
        lockedVaultRegistry: config.REGISTRY.LOCKED_VAULT,
        lockActiveShare: "0",
        lockWarmupShare: "1000000000",
    });

    let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock: tx });

    console.log(res);
})();
