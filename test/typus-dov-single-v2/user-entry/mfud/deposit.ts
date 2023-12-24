import "../../../load_env";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getDepositTx } from "../../../../utils/typus-dov-single-v2/mfud-user-entry";
import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import configs from "../../config.json";

const config = configs.TESTNET;
const signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const user = signer.toSuiAddress();
const provider = new SuiClient({ url: config.RPC_ENDPOINT });

(async () => {
    let depositToken = config.MFUD_TOKEN;
    let bidToken = config.MFUD_TOKEN;
    let typeArguments = [depositToken, bidToken];
    let index = "34";
    let coins = (await provider.getCoins({ owner: user, coinType: config.FUD_TOKEN })).data.map((coin) => coin.coinObjectId);
    let amount = "10";
    let receipts = [];

    let transactionBlock = new TransactionBlock();
    transactionBlock = getDepositTx(
        transactionBlock,
        config.FRAMEWORK_PACKAGE_ORIGIN,
        config.DOV_SINGLE_PACKAGE,
        typeArguments,
        config.DOV_SINGLE_REGISTRY,
        index,
        receipts,
        user,
        config.MFUD_PACKAGE,
        config.MFUD_REGISTRY,
        coins,
        amount
    );
    transactionBlock.setGasBudget(100000000);
    let res = await provider.signAndExecuteTransactionBlock({ signer, transactionBlock });

    console.log(res);
})();
