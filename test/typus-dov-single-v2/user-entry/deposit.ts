import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getRaiseFundTx } from "src/typus-dov-single-v2";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import config_json from "config-mainnet.json";
import { TypusConfig } from "src/utils";

const config = TypusConfig.parse(config_json);
const signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const user = signer.toSuiAddress();
const provider = new SuiClient({ url: config.rpcEndpoint });

(async () => {
    let transactionBlock = new TransactionBlock();
    transactionBlock = getRaiseFundTx({
        tx: transactionBlock,
        typusEcosystemVersion: config.version.typus,
        typusUserRegistry: config.registry.typus.user,
        typusLeaderboardRegistry: config.registry.typus.leaderboard,
        typusFrameworkOriginPackageId: config.packageOrigin.framework,
        typusFrameworkPackageId: config.package.framework,
        typusDovSinglePackageId: config.package.dovSingle,
        typusDovSingleRegistry: config.registry.dov.dovSingle,
        typeArguments: [config.token.usdc, config.token.sui],
        index: "1",
        raiseCoins: (await provider.getCoins({ owner: user, coinType: config.token.usdc })).data.map((coin) => coin.coinObjectId),
        raiseAmount: "1000000",
        receipts: [],
        raiseFromPremium: false,
        raiseFromInactive: false,
        user,
    });
    transactionBlock.setGasBudget(500000000);
    let res = await provider.signAndExecuteTransactionBlock({ signer, transactionBlock });

    console.log(res);
})();
