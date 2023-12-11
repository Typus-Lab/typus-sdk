import "../../../load_env";
import config from "../../../../config_v2.json";
import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getNewStrategyTx } from "../../../../utils/typus-dov-single-v2/user-entry";

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const provider = new SuiClient({
    url: getFullnodeUrl("testnet"),
});
const gasBudget = 100000000;

(async () => {
    let bidToken = "0x949572061c09bbedef3ac4ffc42e58632291616f0605117cec86d840e09bf519::usdc::USDC";
    let gasBudget = 100000000;

    let packageId = config.SINGLE_COLLATERAL_PACKAGE;
    let typeArguments = [bidToken];
    let strategy_pool = "0xc74a4d3b7207bbd6c38b380f338cb3532db4144b86db114bc6d3b5ffd8027e4b";

    let vault_index = "22";
    let signal_index = "0";

    let coins = (await provider.getCoins({ owner: keypair.toSuiAddress(), coinType: bidToken })).data.map((coin) => coin.coinObjectId);
    let amount = "1000000000";
    let size = "100000000000";
    let price_percentage = "80";
    let max_times = "10";
    let target_rounds = [];

    let transactionBlock = await getNewStrategyTx(
        gasBudget,
        packageId,
        typeArguments,
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
