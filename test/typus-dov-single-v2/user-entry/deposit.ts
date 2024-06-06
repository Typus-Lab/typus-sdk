import "../../load_env";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getRaiseFundTx } from "../../../utils/typus-dov-single-v2/user-entry";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import configs from "../../../config.json";

const config = configs.TESTNET;
const signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const user = signer.toSuiAddress();
const provider = new SuiClient({ url: config.RPC_ENDPOINT });

(async () => {
    let transactionBlock = new TransactionBlock();
    transactionBlock = getRaiseFundTx({
        tx: transactionBlock,
        typusEcosystemVersion: config.TYPUS_VERSION,
        typusUserRegistry: config.REGISTRY.USER,
        typusLeaderboardRegistry: config.REGISTRY.LEADERBOARD,
        typusFrameworkOriginPackageId: config.PACKAGE_ORIGIN.FRAMEWORK,
        typusFrameworkPackageId: config.PACKAGE.FRAMEWORK,
        typusDovSinglePackageId: config.PACKAGE.DOV_SINGLE,
        typusDovSingleRegistry: config.REGISTRY.DOV_SINGLE,
        typeArguments: [config.TOKEN.SUI, config.TOKEN.SUI],
        index: "1",
        raiseCoins: (await provider.getCoins({ owner: user, coinType: config.TOKEN.SUI })).data.map((coin) => coin.coinObjectId),
        raiseAmount: "10000000000",
        receipts: [],
        raiseFromPremium: false,
        raiseFromInactive: false,
        user,
    });
    transactionBlock.setGasBudget(100000000);
    let res = await provider.signAndExecuteTransactionBlock({ signer, transactionBlock });

    console.log(res);
})();
