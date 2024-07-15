import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import configs from "../../config.json";
import { getUpdateStrategyTx } from "../../src";
import "../../src/utils/load_env";
const config = configs.TESTNET;

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));

// import mnemonic from "../../mnemonic.json";
// const keypair = Ed25519Keypair.deriveKeypair(String(mnemonic.MNEMONIC));

const provider = new SuiClient({
    url: getFullnodeUrl("testnet"),
});
const gasBudget = 100000000;

(async () => {
    let depositToken = "0x949572061c09bbedef3ac4ffc42e58632291616f0605117cec86d840e09bf519::usdc::USDC";
    let bidToken = "0x949572061c09bbedef3ac4ffc42e58632291616f0605117cec86d840e09bf519::usdc::USDC";
    let gasBudget = 100000000;

    let packageId = config.PACKAGE.DOV_SINGLE;
    let typeArguments = [depositToken, bidToken];
    let strategy_pool = config.OBJECT.STRATEGY_POOL;

    let vault_index = "22";
    let signal_index = "0";
    let strategy_index = "0";

    let coins = (await provider.getCoins({ owner: keypair.toSuiAddress(), coinType: bidToken })).data.map((coin) => coin.coinObjectId);
    let amount = "0";
    let size = "200000000000";
    let price_percentage = "60";
    let max_times = "20";
    let target_rounds = [];

    let transactionBlock = await getUpdateStrategyTx(
        gasBudget,
        packageId,
        typeArguments,
        config.REGISTRY.DOV_SINGLE,
        strategy_pool,
        vault_index,
        signal_index,
        strategy_index,
        coins,
        amount,
        size,
        price_percentage,
        max_times,
        target_rounds
    );
    let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock });
    console.log(res);
})();
