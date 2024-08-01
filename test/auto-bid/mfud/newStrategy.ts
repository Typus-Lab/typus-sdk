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
    let fudToken = "0x461efa7ee5aa1b27e44450d79e2104e7fc0991461e9eb1c2a3fc1f44cd554856::fud::FUD";
    let mFudToken = "0x7755ff79f0f27256c73e6c197e25b407ef6d4b9bd6e1af8cdd50fef28f84712c::mfud::MFUD";

    let packageId = config.PACKAGE.DOV_SINGLE;
    let typeArguments = [mFudToken, mFudToken];
    let strategy_pool = config.OBJECT.STRATEGY_POOL;

    let vault_index = "38";
    let signal_index = "0";

    let coins = (await provider.getCoins({ owner: keypair.toSuiAddress(), coinType: fudToken })).data.map((coin) => coin.coinObjectId);
    let amount = "100000000";
    let size = "100000000";
    let price_percentage = "40";
    let max_times = "10";
    let target_rounds = [];

    var transactionBlock = getNewStrategyTx(
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
    var res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock });
    console.log(res);
})();
