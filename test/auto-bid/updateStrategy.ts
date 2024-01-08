import "../load_env";
import config from "../../config_v2.json";
import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getUpdateStrategyTx } from "../../utils/auto-bid/user-entry";

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));

// import mnemonic from "../../mnemonic.json";
// const keypair = Ed25519Keypair.deriveKeypair(String(mnemonic.MNEMONIC));

const provider = new SuiClient({
    url: getFullnodeUrl("testnet"),
});
const gasBudget = 100000000;

(async () => {
    let depositToken = "0xa38dad920880f81ea514de6db007d3a84e9116a29c60b3e69bbe418c2d9f553c::usdt::USDT";
    let bidToken = "0xa38dad920880f81ea514de6db007d3a84e9116a29c60b3e69bbe418c2d9f553c::usdt::USDT";
    let gasBudget = 100000000;

    let packageId = config.SINGLE_COLLATERAL_PACKAGE;
    let typeArguments = [depositToken, bidToken];
    let strategy_pool = "0x6e62ea389e67302a49aa4bf19850456ec732045c1e0776323588576a6071da7d";

    let vault_index = "31";
    let signal_index = "0";
    let strategy_index = "1";

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
