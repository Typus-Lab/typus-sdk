import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import configs from "config.json";
import { getNewStrategyTx } from "src/auto-bid";
import "src/utils/load_env";
const config = configs.TESTNET;

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));

// import mnemonic from "../../mnemonic.json";

// const keypair = Ed25519Keypair.deriveKeypair(String(mnemonic.MNEMONIC));

const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});
const gasBudget = 100000000;

(async () => {
    let depositToken = "0x949572061c09bbedef3ac4ffc42e58632291616f0605117cec86d840e09bf519::usdc::USDC";
    let bidToken = "0x949572061c09bbedef3ac4ffc42e58632291616f0605117cec86d840e09bf519::usdc::USDC";
    let gasBudget = 100000000;
    let packageId = config.PACKAGE.DOV_SINGLE;
    let typeArguments = [depositToken, bidToken];
    let strategy_pool = config.OBJECT.STRATEGY_POOL;
    let vault_index = "40";
    let signal_index = "0";
    let coins = (await provider.getCoins({ owner: keypair.toSuiAddress(), coinType: bidToken })).data.map((coin) => coin.coinObjectId);
    let amount = "10000000000";
    let size = "30000000000";
    let price_percentage = "40";
    let max_times = "10";
    let target_rounds = [];
    let transactionBlock = await getNewStrategyTx(
        gasBudget,
        packageId,
        typeArguments,
        config.REGISTRY.DOV_SINGLE,
        strategy_pool,
        vault_index,
        signal_index,
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
