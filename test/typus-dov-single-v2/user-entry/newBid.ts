import "../../../src/utils/load_env";
import { getNewBidTx } from "../../../src";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import configs from "../../../config.json";

const config = configs.TESTNET;
const signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const provider = new SuiClient({ url: config.RPC_ENDPOINT });
const user = signer.toSuiAddress();

(async () => {
    let depositToken = "0x2::sui::SUI";
    let bidToken = "0x2::sui::SUI";
    let typeArguments = [depositToken, bidToken];
    let index = "1";
    let coins = (await provider.getCoins({ owner: user, coinType: depositToken })).data.map((coin) => coin.coinObjectId);
    let size = "1000000000";
    let premium_required = "1000000000";

    let transactionBlock = getNewBidTx({
        tx: new TransactionBlock(),
        typusEcosystemVersion: config.OBJECT.TYPUS_VERSION,
        typusUserRegistry: config.REGISTRY.USER,
        tgldRegistry: config.REGISTRY.TGLD,
        typusLeaderboardRegistry: config.REGISTRY.LEADERBOARD,
        typusFrameworkPackageId: config.PACKAGE.FRAMEWORK,
        typusDovSinglePackageId: config.PACKAGE.DOV_SINGLE,
        typusDovSingleRegistry: config.REGISTRY.DOV_SINGLE,
        typeArguments,
        index,
        coins,
        size,
        premium_required,
        user,
    });
    let res = await provider.signAndExecuteTransactionBlock({ signer, transactionBlock });
    console.log(res);
})();
